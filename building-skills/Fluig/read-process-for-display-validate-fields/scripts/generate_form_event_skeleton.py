#!/usr/bin/env python3
import argparse
from pathlib import Path

from process_form_utils import parse_process


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


DISPLAY_TEMPLATE_HEADER = """function displayFields(form, customHTML) {
    var state = parseInt(getValue("WKNumState"), 10);

    switch (state) {
"""


DISPLAY_TEMPLATE_FOOTER = """    default:
        break;
    }
}
"""


VALIDATE_TEMPLATE_HEADER = """function validateForm(form) {
    var state = parseInt(getValue("WKNumState"), 10);

    switch (state) {
"""


VALIDATE_TEMPLATE_FOOTER = """    default:
        break;
    }
}

function requireValue(form, fieldName, message) {
    var value = form.getValue(fieldName);
    if (value == null || String(value).trim() === "") {
        throw message;
    }
}
"""


def render_display(summary):
    parts = [DISPLAY_TEMPLATE_HEADER]
    for stage in summary["interactiveNodes"]:
        state = stage["activityNumber"]
        if state is None:
            continue
        lane = stage.get("laneName") or "-"
        parts.append(f"    case {state}:")
        parts.append(f"        // {stage['name'] or stage['id']} | {stage['kind']} | lane: {lane}")
        parts.append("        // TODO show/hide blocks for this stage")
        parts.append("        // TODO set readonly/editable fields for this stage")
        parts.append("        break;")
        parts.append("")
    parts.append(DISPLAY_TEMPLATE_FOOTER)
    return "\n".join(parts)


def render_validate(summary):
    node_index = {node["id"]: node for node in summary["nodes"]}

    parts = [VALIDATE_TEMPLATE_HEADER]
    for stage in summary["interactiveNodes"]:
        state = stage["activityNumber"]
        if state is None:
            continue
        parts.append(f"    case {state}:")
        parts.append(f"        // {stage['name'] or stage['id']} | {stage['kind']}")
        rules = find_relevant_gateway_rules(stage, node_index)
        if rules:
            seen = set()
            for item in rules:
                field = item.get("field", "")
                if not field or field in seen:
                    continue
                seen.add(field)
                parts.append(
                    f'        requireValue(form, "{field}", "Preencha o campo {field} antes de continuar.");'
                )
        else:
            parts.append("        // TODO add field validation for this stage")
        parts.append("        break;")
        parts.append("")
    parts.append(VALIDATE_TEMPLATE_FOOTER)
    return "\n".join(parts)


def main():
    parser = argparse.ArgumentParser(description="Generate displayFields.js and validateForm.js skeletons from a Fluig .process file.")
    parser.add_argument("--input", required=True, help="Absolute path to the .process file")
    parser.add_argument("--output-dir", required=True, help="Directory where the JS skeletons will be written")
    args = parser.parse_args()

    summary = parse_process(Path(args.input))
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    display_path = output_dir / "displayFields.js"
    validate_path = output_dir / "validateForm.js"

    display_path.write_text(render_display(summary), encoding="utf-8")
    validate_path.write_text(render_validate(summary), encoding="utf-8")

    print(str(display_path))
    print(str(validate_path))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
