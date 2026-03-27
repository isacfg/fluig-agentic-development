# Fluig `.process` Dialect Cheat Sheet

## Main layers

### Graphiti / pictograms

- `pi:Diagram`
- `pi:ContainerShape`
- `pi:FreeFormConnection`
- `graphicsAlgorithm`
- `anchors`
- `link businessObjects="..."`

This layer controls what Eclipse renders.

### BPMN business objects

- `bpmn2:BpmnProcess`
- `bpmn2:BpmnPool`
- `bpmn2:BpmnSwimLane`
- `bpmn2:BpmnTask`
- `bpmn2:BpmnGateway`
- `bpmn2:BpmnStartEvent`
- `bpmn2:BpmnEndEvent`
- `bpmn2:BpmnIntermediateEvent`
- `bpmn2:SequenceFlow`

This layer controls ids, names, metadata, and workflow semantics.

## Important invariants

### Pool and lanes

- pool shape must exist before nested lanes
- each lane shape should map to a `bpmn2:BpmnSwimLane`
- lane visual background should match `@cores`

### Gateway

- wrapper rectangle
- inner polygon
- multi-text label child
- required anchors

### Task

- wrapper rectangle
- rounded rectangle child
- multi-text label
- service task icon only when applicable

### Link event

- outer ellipse
- inner ellipse
- marker polygon
- throw link: filled marker
- catch link: outlined marker

### Sequence flow

- `sourceRef` and `targetRef` must point to existing business object ids
- Graphiti connection `start` and `end` must point to existing anchors

## Color handling

Typical business color fields:

- `bpmn2:BpmnPool/@cores`
- `bpmn2:BpmnSwimLane/@cores`

Typical Graphiti color refs:

- `graphicsAlgorithm/@background="/0/@colors.N"`
- `graphicsAlgorithm/@foreground="/0/@colors.N"`

When changing colors, update both layers or verify that the Graphiti ref already resolves to the intended value.

## Assignment controller note

When editing assignment-related XML for Eclipse-native `.process`:

- `AssignmentControllerColleague`
- `AssignmentControllerGroup`
- `AssignmentControllerPoolGroup`
- `AssignmentControllerRole`
- `AssignmentControllerExecutorMechanism`

For executor mechanism:

- `returns` must be numeric in the Eclipse-native payload

## Useful grep patterns

Find node by business id:

```bash
rg -n 'businessObjects="task67"' /abs/path/process.process
```

Find business object:

```bash
rg -n '<bpmn2:BpmnTask id="task67"' /abs/path/process.process
```

Find lane colors:

```bash
rg -n 'Bpmn(SwimLane|Pool).*cores=' /abs/path/process.process
```

Find Link events:

```bash
rg -n 'intermediatelink|intermediatelinkreceive' /abs/path/process.process
```
