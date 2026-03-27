#!/usr/bin/env python3
import argparse
import json
import sys
from pathlib import Path

from process_diagram_inspector import parse_process


def index_by_id(items):
    return {item["id"]: item for item in items}


def build_diff(before: dict, after: dict) -> dict:
    before_nodes = index_by_id(before["nodes"])
    after_nodes = index_by_id(after["nodes"])
    before_flows = index_by_id(before["flows"])
    after_flows = index_by_id(after["flows"])
    before_lanes = index_by_id(before["lanes"])
    after_lanes = index_by_id(after["lanes"])

    return {
        "before": before["input"],
        "after": after["input"],
        "processIdChanged": before["processId"] != after["processId"],
        "poolColorChanged": before["pool"]["color"] != after["pool"]["color"],
        "addedNodes": sorted(set(after_nodes) - set(before_nodes)),
        "removedNodes": sorted(set(before_nodes) - set(after_nodes)),
        "changedNodeNames": sorted(
            node_id
            for node_id in set(before_nodes) & set(after_nodes)
            if before_nodes[node_id]["name"] != after_nodes[node_id]["name"]
        ),
        "addedFlows": sorted(set(after_flows) - set(before_flows)),
        "removedFlows": sorted(set(before_flows) - set(after_flows)),
        "changedFlowEndpoints": sorted(
            flow_id
            for flow_id in set(before_flows) & set(after_flows)
            if before_flows[flow_id]["sourceRef"] != after_flows[flow_id]["sourceRef"]
            or before_flows[flow_id]["targetRef"] != after_flows[flow_id]["targetRef"]
        ),
        "changedLaneColors": sorted(
            lane_id
            for lane_id in set(before_lanes) & set(after_lanes)
            if before_lanes[lane_id]["color"] != after_lanes[lane_id]["color"]
        ),
    }


def render_markdown(diff: dict) -> str:
    lines = [
        "# Process Diagram Diff",
        "",
        f"- before: {diff['before']}",
        f"- after: {diff['after']}",
        f"- processIdChanged: {diff['processIdChanged']}",
        f"- poolColorChanged: {diff['poolColorChanged']}",
        "",
        "## Changes",
        "",
        f"- addedNodes: {', '.join(diff['addedNodes']) or 'none'}",
        f"- removedNodes: {', '.join(diff['removedNodes']) or 'none'}",
        f"- changedNodeNames: {', '.join(diff['changedNodeNames']) or 'none'}",
        f"- addedFlows: {', '.join(diff['addedFlows']) or 'none'}",
        f"- removedFlows: {', '.join(diff['removedFlows']) or 'none'}",
        f"- changedFlowEndpoints: {', '.join(diff['changedFlowEndpoints']) or 'none'}",
        f"- changedLaneColors: {', '.join(diff['changedLaneColors']) or 'none'}",
        "",
    ]
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="Compare two Fluig .process diagrams semantically.")
    parser.add_argument("--before", required=True, help="Original .process file")
    parser.add_argument("--after", required=True, help="Edited .process file")
    parser.add_argument("--format", choices=["json", "markdown"], default="json")
    args = parser.parse_args()

    diff = build_diff(parse_process(Path(args.before)), parse_process(Path(args.after)))
    if args.format == "markdown":
        sys.stdout.write(render_markdown(diff))
    else:
        json.dump(diff, sys.stdout, indent=2, ensure_ascii=False)
        sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
