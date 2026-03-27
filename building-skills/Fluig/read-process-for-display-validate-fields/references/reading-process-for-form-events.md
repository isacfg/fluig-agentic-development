# Reading the `.process` for form events

## Goal

The point is not to redraw the diagram. The point is to turn the BPMN structure into decisions for:

- `displayFields`
- `validateForm`
- sometimes `beforeTaskSave`

## What to read first

From the BPMN business objects:

- `bpmn2:BpmnTask`
- `bpmn2:BpmnSubProcess`
- `bpmn2:BpmnGateway`
- `bpmn2:BpmnStartEvent`
- `bpmn2:BpmnEndEvent`
- `bpmn2:SequenceFlow`
- `bpmn2:BpmnPool`
- `bpmn2:BpmnSwimLane`

Useful attributes:

- `id`
- `name`
- `type`
- `incoming`
- `outgoing`
- `managerMechanism`
- `managerAssignmentControllerString`
- `condition`
- `cores`

From Graphiti:

- top-level shape links
- lane bounds
- node bounds

Graphiti matters because it lets you infer which lane owns a node when the BPMN objects alone do not encode lane membership clearly.

## Activity ids

In Fluig form events, the current workflow step normally maps to `WKNumState`.

For existing `.process` files, the safest practical mapping is:

- take the trailing numeric part of the BPMN element id
- use that as the activity number in your switch/case planning

Examples:

- `task12` -> `12`
- `servicetask41` -> `41`
- `subprocess105` -> `105`
- `startevent4` -> `4`

Do not guess state numbers from sequence flow ids.

## Interactive vs non-interactive nodes

### Interactive by default

- start event
- user task
- interactive subprocess

### Usually non-interactive

- service task
- exclusive/parallel gateway
- end event
- attached intermediate error/link/timer events

These non-interactive nodes still matter because they define what the previous interactive stage must provide before routing.

## What gateways tell you

Gateway conditions often contain the fields that must be validated before movement.

Common pattern inside `condition` XML:

- `field`
- `value`
- `targetTask`

This gives you:

- the discriminator field
- the allowed branch values
- the tasks reached by each branch

That is direct input for `validateForm`.

## What lanes tell you

Lanes answer:

- who owns the step
- which form block is likely editable
- which previous block should become readonly

Good default:

- current lane fields editable
- previous lanes readonly
- unrelated operational sections hidden unless needed for context

## Safe interpretation rules

- Use the diagram as the source of stage structure.
- Use the form HTML and field names as the source of actual UI fields.
- Do not assume every lane implies its own dedicated form section.
- Do not assume every outgoing flow implies a UI choice; some are automatic or service-driven.
- If a route field only appears in gateway conditions, it is a strong candidate for mandatory validation.
