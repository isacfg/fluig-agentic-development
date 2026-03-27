#!/usr/bin/env python3
import argparse
import json
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {
    "pi": "http://eclipse.org/graphiti/mm/pictograms",
    "al": "http://eclipse.org/graphiti/mm/algorithms",
    "bpmn2": "http://www.omg.org/spec/BPMN/20100524/MODEL-XMI",
}


def first(sequence):
    for item in sequence:
        return item
    return None


def parse_process(path: Path) -> dict:
    root = ET.parse(path).getroot()
    diagram = root.find("pi:Diagram", NS)
    if diagram is None:
        raise SystemExit(f"Invalid process file: missing pi:Diagram in {path}")

    process = first(root.findall("bpmn2:BpmnProcess", NS))
    pool = first(root.findall("bpmn2:BpmnPool", NS))
    lanes = root.findall("bpmn2:BpmnSwimLane", NS)
    node_tags = [
        "bpmn2:BpmnTask",
        "bpmn2:BpmnGateway",
        "bpmn2:BpmnStartEvent",
        "bpmn2:BpmnEndEvent",
        "bpmn2:BpmnIntermediateEvent",
        "bpmn2:BpmnSubProcess",
    ]
    nodes = []
    for tag in node_tags:
        nodes.extend(root.findall(tag, NS))
    flows = root.findall("bpmn2:SequenceFlow", NS)

    node_summaries = []
    for node in nodes:
        node_summaries.append(
            {
                "id": node.get("id", ""),
                "tag": node.tag.split("}")[-1],
                "name": node.get("name", ""),
                "type": node.get("type", ""),
                "incoming": node.get("incoming", "").split(),
                "outgoing": node.get("outgoing", "").split(),
            }
        )
    node_summaries.sort(key=lambda item: item["id"])

    flow_summaries = []
    for flow in flows:
        flow_summaries.append(
            {
                "id": flow.get("id", ""),
                "name": flow.get("name", ""),
                "sourceRef": flow.get("sourceRef", ""),
                "targetRef": flow.get("targetRef", ""),
            }
        )
    flow_summaries.sort(key=lambda item: item["id"])

    return {
        "input": str(path),
        "diagramName": diagram.get("name", ""),
        "processId": process.get("id", "") if process is not None else "",
        "processName": process.get("name", "") if process is not None else "",
        "pool": {
            "id": pool.get("id", "") if pool is not None else "",
            "name": pool.get("name", "") if pool is not None else "",
            "color": pool.get("cores", "") if pool is not None else "",
        },
        "lanes": [
            {
                "id": lane.get("id", ""),
                "name": lane.get("name", ""),
                "color": lane.get("cores", ""),
            }
            for lane in lanes
        ],
        "nodeCount": len(node_summaries),
        "flowCount": len(flow_summaries),
        "nodes": node_summaries,
        "flows": flow_summaries,
    }


def render_markdown(summary: dict) -> str:
    lines = [
        "# Process Diagram Inspection",
        "",
        f"- input: {summary['input']}",
        f"- diagramName: {summary['diagramName']}",
        f"- processId: {summary['processId']}",
        f"- processName: {summary['processName']}",
        f"- nodeCount: {summary['nodeCount']}",
        f"- flowCount: {summary['flowCount']}",
        "",
        "## Pool",
        "",
        f"- id: {summary['pool']['id']}",
        f"- name: {summary['pool']['name']}",
        f"- color: {summary['pool']['color']}",
        "",
        "## Lanes",
        "",
    ]
    if not summary["lanes"]:
        lines.append("- none")
    else:
        for lane in summary["lanes"]:
            lines.append(f"- {lane['id']}: {lane['name']} [{lane['color']}]")

    lines.extend(["", "## Nodes", ""])
    for node in summary["nodes"]:
        lines.append(f"- {node['id']} | {node['tag']} | {node['name']} | type={node['type']}")

    lines.extend(["", "## Flows", ""])
    for flow in summary["flows"]:
        lines.append(f"- {flow['id']}: {flow['sourceRef']} -> {flow['targetRef']} | {flow['name']}")

    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Inspect an existing Fluig .process diagram.")
    parser.add_argument("--input", required=True, help="Absolute path to a .process file")
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
