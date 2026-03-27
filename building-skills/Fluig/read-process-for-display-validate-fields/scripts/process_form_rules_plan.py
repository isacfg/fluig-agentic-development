#!/usr/bin/env python3
import argparse
import json
import sys
from pathlib import Path

from process_form_utils import parse_process


def suggest_display(node):
    role = node.get("laneName") or node.get("assignment", {}).get("mechanism") or "current owner"
    if node["kind"] == "start":
        return {
            "show": ["requester block", "solicitation fields"],
            "editable": ["request header", "initial detail fields"],
            "readonly": [],
            "notes": ["Prefill requester metadata and hide downstream approval blocks."],
        }
    return {
        "show": [f"{role} block", "history/comments context"],
        "editable": [f"fields owned by {role}"],
        "readonly": ["fields completed in previous stages"],
        "notes": [f"Current lane inferred from diagram: {role}."],
    }


def find_relevant_gateway_rules(node, node_index):
    frontier = list(node.get("nextNodes", []))
    visited = set()
    relevant = []
    while frontier:
        node_id = frontier.pop(0)
        if node_id in visited:
            continue
        visited.add(node_id)
        candidate = node_index.get(node_id)
        if not candidate:
            continue
        if candidate["kind"] == "gateway":
            relevant.extend(candidate.get("conditions", []))
            continue
        if candidate.get("interactive"):
            continue
        frontier.extend(candidate.get("nextNodes", []))
    return relevant


def suggest_validate(node, node_index):
    relevant = find_relevant_gateway_rules(node, node_index)
    required = sorted({item["field"] for item in relevant if item.get("field")})
    notes = []
    for item in relevant:
        if item.get("field"):
            notes.append(
                "Field `{field}` drives route to `{target}` with value `{value}`.".format(
                    field=item["field"], target=item.get("targetTask") or "-", value=item.get("value") or "-"
                )
            )
    return {
        "requiredFields": required,
        "notes": notes,
    }


def build_plan(summary):
    node_index = {node["id"]: node for node in summary["nodes"]}
    plan = {
        "input": summary["input"],
        "processId": summary["processId"],
        "interactiveStages": [],
        "gatewayFields": summary["gatewayFields"],
    }
    for node in summary["interactiveNodes"]:
        plan["interactiveStages"].append(
            {
                "activityNumber": node["activityNumber"],
                "nodeId": node["id"],
                "name": node["name"],
                "kind": node["kind"],
                "lane": node.get("laneName", ""),
                "assignment": node.get("assignment", {}),
                "displayFields": suggest_display(node),
                "validateForm": suggest_validate(node, node_index),
            }
        )
    return plan


def render_markdown(plan):
    lines = [
        "# Form Rules Plan",
        "",
        f"- input: {plan['input']}",
        f"- processId: {plan['processId']}",
        "",
        "## Stage matrix",
        "",
    ]
    for stage in plan["interactiveStages"]:
        lines.append(
            "### State {state} - {name}".format(
                state=stage["activityNumber"], name=stage["name"] or stage["nodeId"]
            )
        )
        lines.append("")
        lines.append(f"- nodeId: {stage['nodeId']}")
        lines.append(f"- kind: {stage['kind']}")
        lines.append(f"- lane: {stage['lane'] or '-'}")
        mechanism = stage["assignment"].get("mechanism", "") if stage.get("assignment") else ""
        lines.append(f"- assignment: {mechanism or '-'}")
        lines.append("- displayFields:")
        lines.append("  - show: " + ", ".join(stage["displayFields"]["show"]))
        lines.append("  - editable: " + ", ".join(stage["displayFields"]["editable"]))
        lines.append("  - readonly: " + (", ".join(stage["displayFields"]["readonly"]) or "-"))
        for note in stage["displayFields"]["notes"]:
            lines.append("  - note: " + note)
        lines.append("- validateForm:")
        lines.append("  - requiredFields: " + (", ".join(stage["validateForm"]["requiredFields"]) or "-"))
        if stage["validateForm"]["notes"]:
            for note in stage["validateForm"]["notes"]:
                lines.append("  - note: " + note)
        else:
            lines.append("  - note: no immediate gateway discriminator field detected from the diagram")
        lines.append("")
    lines.append("## Gateway fields")
    lines.append("")
    if not plan["gatewayFields"]:
        lines.append("- none")
    else:
        for item in plan["gatewayFields"]:
            lines.append(
                "- {gatewayId} | {field} = {value} -> {targetTask}".format(**item)
            )
    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description="Plan displayFields and validateForm from a Fluig .process file.")
    parser.add_argument("--input", required=True, help="Absolute path to the .process file")
    parser.add_argument("--format", choices=["json", "markdown"], default="markdown")
    args = parser.parse_args()

    summary = parse_process(Path(args.input))
    plan = build_plan(summary)
    if args.format == "json":
        json.dump(plan, sys.stdout, indent=2, ensure_ascii=False)
        sys.stdout.write("\n")
    else:
        sys.stdout.write(render_markdown(plan))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
