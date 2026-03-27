#!/usr/bin/env python3
import argparse
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {
    "pi": "http://eclipse.org/graphiti/mm/pictograms",
    "bpmn2": "http://www.omg.org/spec/BPMN/20100524/MODEL-XMI",
}


def first(sequence):
    for item in sequence:
        return item
    return None


def color_hex(color_node):
    red = int(color_node.get("red", "0") or "0")
    green = int(color_node.get("green", "0") or "0")
    blue = int(color_node.get("blue", "0") or "0")
    return f"{red:02X}{green:02X}{blue:02X}"


def validate(path: Path) -> dict:
    root = ET.parse(path).getroot()
    diagram = root.find("pi:Diagram", NS)
    problems = []
    warnings = []

    if diagram is None:
        return {"ok": False, "problems": ["missing pi:Diagram"], "warnings": []}

    colors = [color_hex(node) for node in diagram.findall("colors", NS)]
    color_refs = {f"/0/@colors.{index}": value for index, value in enumerate(colors)}

    process = first(root.findall("bpmn2:BpmnProcess", NS))
    if process is None:
        problems.append("missing bpmn2:BpmnProcess")

    nodes = []
    for tag in [
        "bpmn2:BpmnTask",
        "bpmn2:BpmnGateway",
        "bpmn2:BpmnStartEvent",
        "bpmn2:BpmnEndEvent",
        "bpmn2:BpmnIntermediateEvent",
        "bpmn2:BpmnSubProcess",
    ]:
        nodes.extend(root.findall(tag, NS))
    node_ids = {node.get("id", "") for node in nodes}

    for flow in root.findall("bpmn2:SequenceFlow", NS):
        source_ref = flow.get("sourceRef", "")
        target_ref = flow.get("targetRef", "")
        if not source_ref or not target_ref:
            problems.append(f"flow {flow.get('id', '')} missing endpoint")
        if source_ref and source_ref not in node_ids:
            problems.append(f"flow {flow.get('id', '')} sourceRef missing node {source_ref}")
        if target_ref and target_ref not in node_ids:
            problems.append(f"flow {flow.get('id', '')} targetRef missing node {target_ref}")

    for task in root.findall("bpmn2:BpmnTask", NS) + root.findall("bpmn2:BpmnSubProcess", NS):
        raw = task.get("managerAssignmentControllerString", "") or task.get("managerAssignmentController", "")
        if "AssignmentControllerExecutorMechanism" in raw:
            match = re.search(r"<returns>([^<]+)</returns>", raw, re.IGNORECASE)
            if match and not re.fullmatch(r"-?\d+", match.group(1).strip()):
                problems.append(f"executor returns must be numeric on {task.get('id', '')}")

    pool_colors = {node.get("id", ""): node.get("cores", "").upper() for node in root.findall("bpmn2:BpmnPool", NS)}
    lane_colors = {node.get("id", ""): node.get("cores", "").upper() for node in root.findall("bpmn2:BpmnSwimLane", NS)}

    top_level_children = [
        child for child in diagram.findall("children", NS)
        if child.get("{http://www.w3.org/2001/XMLSchema-instance}type") == "pi:ContainerShape"
    ]
    for container in top_level_children:
        link = container.find("link", NS)
        if link is None:
            warnings.append("shape without link")
            continue
        business_id = link.get("businessObjects", "")
        graphics = container.find("graphicsAlgorithm", NS)
        if business_id in pool_colors and graphics is not None:
            actual = color_refs.get(graphics.get("background", ""), "")
            if actual and actual != pool_colors[business_id]:
                problems.append(f"pool color mismatch {business_id}: {pool_colors[business_id]} -> {actual}")

        if business_id.startswith("intermediatelink"):
            marker = None
            for child in container.findall("children", NS):
                algo = child.find("graphicsAlgorithm", NS)
                if algo is not None and algo.get("{http://www.w3.org/2001/XMLSchema-instance}type") == "al:Polygon":
                    marker = algo
                    break
            if marker is None:
                problems.append(f"missing link marker for {business_id}")
            elif business_id.startswith("intermediatelinkreceive") and marker.get("filled") != "false":
                problems.append(f"link catch marker must be outlined for {business_id}")
            elif not business_id.startswith("intermediatelinkreceive") and marker.get("filled") != "true":
                problems.append(f"link throw marker must be filled for {business_id}")

        for child in container.findall("children", NS):
            child_link = child.find("link", NS)
            if child_link is None:
                continue
            business_id = child_link.get("businessObjects", "")
            graphics = child.find("graphicsAlgorithm", NS)
            if business_id in lane_colors and graphics is not None:
                actual = color_refs.get(graphics.get("background", ""), "")
                if actual and actual != lane_colors[business_id]:
                    problems.append(f"lane color mismatch {business_id}: {lane_colors[business_id]} -> {actual}")

    return {"ok": len(problems) == 0, "problems": problems, "warnings": warnings}


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate common invariants of a Fluig .process diagram.")
    parser.add_argument("--input", required=True, help="Absolute path to a .process file")
    parser.add_argument("--strict", action="store_true", help="Exit with code 1 when validation fails")
    args = parser.parse_args()

    result = validate(Path(args.input))
    json.dump(result, sys.stdout, indent=2, ensure_ascii=False)
    sys.stdout.write("\n")
    if args.strict and not result["ok"]:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
