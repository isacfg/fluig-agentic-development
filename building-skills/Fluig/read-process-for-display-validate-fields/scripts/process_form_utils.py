#!/usr/bin/env python3
import re
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {
    "pi": "http://eclipse.org/graphiti/mm/pictograms",
    "al": "http://eclipse.org/graphiti/mm/algorithms",
    "bpmn2": "http://www.omg.org/spec/BPMN/20100524/MODEL-XMI",
}

NODE_TAGS = [
    "bpmn2:BpmnTask",
    "bpmn2:BpmnGateway",
    "bpmn2:BpmnStartEvent",
    "bpmn2:BpmnEndEvent",
    "bpmn2:BpmnIntermediateEvent",
    "bpmn2:BpmnSubProcess",
]


def first(items):
    for item in items:
        return item
    return None


def trailing_number(value):
    match = re.search(r"(\d+)$", value or "")
    return int(match.group(1)) if match else None


def split_refs(value):
    return [part for part in (value or "").split() if part]


def tag_name(node):
    return node.tag.split("}")[-1]


def parse_bounds(container):
    graphics = container.find("graphicsAlgorithm", NS)
    if graphics is None:
        return {}
    return {
        "x": int(graphics.get("x", "0") or "0"),
        "y": int(graphics.get("y", "0") or "0"),
        "width": int(graphics.get("width", "0") or "0"),
        "height": int(graphics.get("height", "0") or "0"),
    }


def offset_bounds(bounds, offset_x, offset_y):
    if not bounds:
        return {}
    return {
        "x": bounds.get("x", 0) + offset_x,
        "y": bounds.get("y", 0) + offset_y,
        "width": bounds.get("width", 0),
        "height": bounds.get("height", 0),
    }


def center(bounds):
    return (
        bounds.get("x", 0) + (bounds.get("width", 0) / 2.0),
        bounds.get("y", 0) + (bounds.get("height", 0) / 2.0),
    )


def contains(bounds, point):
    px, py = point
    return (
        bounds.get("x", 0) <= px <= bounds.get("x", 0) + bounds.get("width", 0)
        and bounds.get("y", 0) <= py <= bounds.get("y", 0) + bounds.get("height", 0)
    )


def parse_assignment(task):
    mechanism = task.get("managerMechanism", "") or ""
    raw = task.get("managerAssignmentControllerString", "") or task.get("managerAssignmentController", "") or ""
    result = {"mechanism": mechanism, "raw": raw}
    if "<groupId>" in raw:
        result["groupId"] = extract_tag(raw, "groupId")
    if "<roleId>" in raw:
        result["roleId"] = extract_tag(raw, "roleId")
    if "<colleagueId>" in raw:
        result["colleagueId"] = extract_tag(raw, "colleagueId")
    if "<formField>" in raw:
        result["formField"] = extract_tag(raw, "formField")
    if "<nodeId>" in raw:
        result["nodeId"] = extract_tag(raw, "nodeId")
    if "<returns>" in raw:
        result["returns"] = extract_tag(raw, "returns")
    return result


def extract_tag(xml_text, tag):
    match = re.search(r"<{0}>(.*?)</{0}>".format(re.escape(tag)), xml_text, re.S)
    return match.group(1).strip() if match else ""


def parse_gateway_conditions(raw):
    raw = (raw or "").strip()
    if not raw.startswith("<"):
        return []
    try:
        root = ET.fromstring(raw)
    except ET.ParseError:
        return []
    rules = []
    for condition in root.findall(".//org.eclipse.bpmn2.impl.ConditionImpl"):
        rules.append(
            {
                "targetTask": text_of(condition.find("targetTask")),
                "field": text_of(condition.find(".//field")),
                "value": text_of(condition.find(".//value")),
                "operator": text_of(condition.find(".//operator")),
            }
        )
    if rules:
        return rules
    for condition in root.findall(".//*"):
        field = text_of(condition.find("field"))
        value = text_of(condition.find("value"))
        target = text_of(condition.find("targetTask"))
        if field or value or target:
            rules.append({"targetTask": target, "field": field, "value": value, "operator": text_of(condition.find("operator"))})
    return rules


def text_of(node):
    if node is None or node.text is None:
        return ""
    return node.text.strip()


def node_kind(node):
    tag = tag_name(node)
    bpmn_type = node.get("type", "")
    if tag == "BpmnStartEvent":
        return "start"
    if tag == "BpmnEndEvent":
        return "end"
    if tag == "BpmnGateway":
        return "gateway"
    if tag == "BpmnSubProcess":
        return "subprocess"
    if tag == "BpmnIntermediateEvent":
        node_id = node.get("id", "")
        if node_id.startswith("intermediatelinkreceive"):
            return "link-catch"
        if node_id.startswith("intermediatelink"):
            return "link-throw"
        if "sequenceAttached" in node.attrib:
            return "attached-intermediate"
        return "intermediate"
    if tag == "BpmnTask":
        if bpmn_type == "82" or node.get("serviceName"):
            return "service-task"
        return "user-task"
    return tag


def interactive(node):
    return node_kind(node) in {"start", "user-task", "subprocess"}


def parse_process(path: Path):
    root = ET.parse(path).getroot()
    diagram = root.find("pi:Diagram", NS)
    if diagram is None:
        raise SystemExit("Invalid process file: missing pi:Diagram")

    process = first(root.findall("bpmn2:BpmnProcess", NS))
    pool = first(root.findall("bpmn2:BpmnPool", NS))
    lane_nodes = root.findall("bpmn2:BpmnSwimLane", NS)
    lanes = {
        lane.get("id", ""): {
            "id": lane.get("id", ""),
            "name": lane.get("name", ""),
            "color": lane.get("cores", ""),
        }
        for lane in lane_nodes
    }

    nodes = []
    node_by_id = {}
    for tag in NODE_TAGS:
        for node in root.findall(tag, NS):
            info = {
                "id": node.get("id", ""),
                "name": node.get("name", ""),
                "tag": tag_name(node),
                "type": node.get("type", ""),
                "kind": node_kind(node),
                "activityNumber": trailing_number(node.get("id", "")),
                "interactive": interactive(node),
                "incoming": split_refs(node.get("incoming", "")),
                "outgoing": split_refs(node.get("outgoing", "")),
            }
            if info["kind"] in {"user-task", "subprocess", "service-task"}:
                info["assignment"] = parse_assignment(node)
            if info["kind"] == "gateway":
                info["conditions"] = parse_gateway_conditions(node.get("condition", ""))
            nodes.append(info)
            node_by_id[info["id"]] = info

    flows = []
    for flow in root.findall("bpmn2:SequenceFlow", NS):
        flows.append(
            {
                "id": flow.get("id", ""),
                "name": flow.get("name", ""),
                "sourceRef": flow.get("sourceRef", ""),
                "targetRef": flow.get("targetRef", ""),
            }
        )
    flow_by_id = {flow["id"]: flow for flow in flows}

    pool_container = None
    pool_bounds = {}
    top_level_shapes = diagram.findall("children", NS)
    lane_bounds = {}
    node_bounds = {}
    for container in top_level_shapes:
        link = container.find("link", NS)
        if link is None:
            continue
        business_id = link.get("businessObjects", "")
        if pool is not None and business_id == pool.get("id", ""):
            pool_container = container
            pool_bounds = parse_bounds(container)
        if business_id in node_by_id:
            node_bounds[business_id] = parse_bounds(container)

    if pool_container is not None:
        for container in pool_container.findall("children", NS):
            link = container.find("link", NS)
            if link is None:
                continue
            business_id = link.get("businessObjects", "")
            if business_id in lanes:
                lane_bounds[business_id] = offset_bounds(
                    parse_bounds(container),
                    pool_bounds.get("x", 0),
                    pool_bounds.get("y", 0),
                )

    for node in nodes:
        bounds = node_bounds.get(node["id"], {})
        node["bounds"] = bounds
        node["laneId"] = ""
        node["laneName"] = ""
        if bounds:
            point = center(bounds)
            for lane_id, bounds_candidate in lane_bounds.items():
                if contains(bounds_candidate, point):
                    node["laneId"] = lane_id
                    node["laneName"] = lanes[lane_id]["name"]
                    break

    for node in nodes:
        node["nextNodes"] = [
            flow_by_id[flow_id]["targetRef"]
            for flow_id in node["outgoing"]
            if flow_id in flow_by_id and flow_by_id[flow_id].get("targetRef")
        ]

    gateway_fields = []
    for node in nodes:
        if node["kind"] == "gateway":
            for rule in node.get("conditions", []):
                if rule.get("field"):
                    gateway_fields.append(
                        {
                            "gatewayId": node["id"],
                            "gatewayName": node["name"],
                            "field": rule.get("field", ""),
                            "value": rule.get("value", ""),
                            "targetTask": rule.get("targetTask", ""),
                        }
                    )

    interactive_nodes = [node for node in nodes if node["interactive"]]
    interactive_nodes.sort(key=lambda item: (item["activityNumber"] is None, item["activityNumber"] or 0, item["id"]))

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
        "lanes": [lanes[lane_id] for lane_id in sorted(lanes.keys())],
        "nodes": sorted(nodes, key=lambda item: (item["activityNumber"] is None, item["activityNumber"] or 0, item["id"])),
        "flows": sorted(flows, key=lambda item: item["id"]),
        "interactiveNodes": interactive_nodes,
        "gatewayFields": gateway_fields,
    }
