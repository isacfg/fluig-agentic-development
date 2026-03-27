#!/usr/bin/env python3
import argparse
import json
import sys
from pathlib import Path

from process_form_utils import parse_process


def render_markdown(summary):
    lines = [
        "# Activity Matrix",
        "",
        f"- input: {summary['input']}",
        f"- processId: {summary['processId']}",
        f"- processName: {summary['processName']}",
        f"- diagramName: {summary['diagramName']}",
        "",
        "## Interactive activities",
        "",
    ]
    for node in summary["interactiveNodes"]:
        assignment = node.get("assignment", {})
        mechanism = assignment.get("mechanism", "")
        lines.append(
            "- state {state} | {kind} | {name} | lane={lane} | assignment={assignment}".format(
                state=node["activityNumber"],
                kind=node["kind"],
                name=node["name"] or node["id"],
                lane=node["laneName"] or "-",
                assignment=mechanism or "-",
            )
        )
        if node.get("nextNodes"):
            lines.append("  next: " + ", ".join(node["nextNodes"]))
    lines.extend(["", "## Gateway route fields", ""])
    if not summary["gatewayFields"]:
        lines.append("- none")
    else:
        for item in summary["gatewayFields"]:
            lines.append(
                "- {gatewayId} | field={field} | value={value} | target={targetTask}".format(**item)
            )
    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description="Build an activity matrix from a Fluig .process file.")
    parser.add_argument("--input", required=True, help="Absolute path to the .process file")
    parser.add_argument("--format", choices=["json", "markdown"], default="json")
    args = parser.parse_args()

    summary = parse_process(Path(args.input))
    if args.format == "markdown":
        sys.stdout.write(render_markdown(summary))
    else:
        json.dump(summary, sys.stdout, indent=2, ensure_ascii=False)
        sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
