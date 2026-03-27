# Editing Workflow

## 1. Inspect first

Always inspect the current `.process` before changing anything:

```bash
python3 scripts/process_diagram_inspector.py --input /abs/path/process.process --format markdown
```

Capture:

- `processId`
- pool and lane ids
- pool/lane colors
- node ids and BPMN tags
- flow ids and endpoints

## 2. Classify the requested change

Use one of these buckets:

- semantic-only
  - rename node
  - redirect sequence flow
  - change assignment metadata
- visual-only
  - fix lane color
  - fix Link marker
  - fix label rendering
- semantic + visual
  - add/remove lane
  - convert task to subprocess
  - change event type

## 3. Edit the smallest stable surface

### Semantic-only changes

Edit the `bpmn2:*` business object and keep Graphiti links intact.

Examples:

- `bpmn2:BpmnTask/@name`
- `bpmn2:SequenceFlow/@sourceRef`
- `bpmn2:SequenceFlow/@targetRef`
- `bpmn2:BpmnSwimLane/@cores`

### Visual-only changes

Edit the Graphiti element that references the same business object id.

Examples:

- `pi:ContainerShape -> graphicsAlgorithm/@background`
- marker polygon inside an event
- task/gateway label shape

### Semantic + visual changes

Edit both layers and keep ids consistent.

## 4. Recheck invariants after editing

Run:

```bash
python3 scripts/process_diagram_validate.py --input /abs/path/process.process --strict
```

## 5. Compare before/after

Run:

```bash
python3 scripts/process_diagram_diff.py \
  --before /abs/path/original.process \
  --after /abs/path/edited.process \
  --format markdown
```

Use the diff to explain exactly what changed.

## Common Failure Modes

### Link event looks like generic intermediate event

Cause:

- missing marker polygon in the event shape

Check:

- outer ellipse exists
- inner ellipse exists
- marker polygon exists

### Lane color changed semantically but not visually

Cause:

- `bpmn2:BpmnSwimLane/@cores` updated, but Graphiti `background` still points to old color ref

Check:

- lane business `cores`
- lane shape `graphicsAlgorithm/@background`

### Eclipse fails loading executor-mechanism assignment

Cause:

- `AssignmentControllerExecutorMechanism` serialized with textual `returns`

Fix:

- use numeric `returns`

### Sequence flow broke after editing

Cause:

- `sourceRef` or `targetRef` points to a missing node id

Check:

- both endpoint ids exist as business objects

## Recommended Agent Behavior

- inspect before editing
- make one coherent patch
- validate immediately
- report ids, not just labels
