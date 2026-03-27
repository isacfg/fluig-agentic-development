# Deriving `validateForm` from the diagram

## Purpose of `validateForm`

`validateForm` protects movement consistency from the form side.

Use it to enforce:

- required fields per activity
- route-driving fields required for gateways
- cross-field consistency
- minimum table/anexo conditions when they are stage-specific

## Inputs from the diagram

Read these first:

- current interactive activity
- outgoing flows from that activity
- downstream gateway conditions
- gateway fields and allowed values

## Strong signals for required validation

### Gateway discriminator field

If a gateway immediately after a task uses field `campo_decisao`, that field must normally be validated before leaving the prior human task.

### Multiple outgoing branches

If the current interactive step leads to multiple possible routes, validate the branch choice explicitly even if the UI makes it look obvious.

### Assignment/handoff fields

If the next owner depends on:

- a form field
- a group
- a colleague
- a subprocess handoff

validate the data that supports that handoff.

## Practical validation buckets

For each interactive state, list:

- required scalar fields
- required discriminator fields
- required child table content
- required attachments
- forbidden inconsistent combinations

## Split of responsibility

### `validateForm`

Use for:

- form completeness
- branch-driving field presence
- field consistency visible in the form context

### `beforeTaskSave`

Use when:

- validation must survive save/move scenarios outside the browser
- attachments or workflow APIs are involved
- route enforcement must happen server-side regardless of the client path

## Safe pattern

1. Check current activity.
2. Validate only what that activity is responsible for.
3. Use gateway-driving fields as the backbone of branch validation.
4. Keep messages specific and stage-aware.
