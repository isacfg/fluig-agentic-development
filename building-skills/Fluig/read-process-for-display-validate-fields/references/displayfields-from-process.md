# Deriving `displayFields` from the diagram

## Purpose of `displayFields`

`displayFields` is where you shape the form for the current stage:

- visibility
- readonly state
- initial values
- client-side bootstrapping through `customHTML`

## Inputs from the diagram

For each interactive activity, capture:

- activity id
- task/subprocess name
- owning lane
- assignment mechanism
- outgoing targets

This is enough to build a stage matrix.

## Recommended stage matrix

For every interactive activity define:

- `show`
- `hide`
- `readonly`
- `editable`
- `prefill`

Example shape:

```text
state 12 - Gestor - Análise de Solicitação
- lane: Gestor
- editable: decision block, attachments review notes
- readonly: requester identification, previous finance data
- show: gestor decision fields
- hide: accounting adjustment block
```

## Practical heuristics

### Start event / requester stage

- show solicitation fields
- prefill requester metadata
- hide downstream approval blocks

### Review/approval task

- keep request content readonly
- enable the decision fields
- show comments/history context

### Adjustment loop

- enable only the fields the current lane must correct
- keep the route field visible if it will be re-evaluated

### Finance/execution stage

- unlock execution-specific fields
- lock approval fields from prior lanes

## What not to do

- Do not hardcode labels when the activity id is available.
- Do not spread stage logic randomly across helper functions before the stage matrix is explicit.
- Do not use `displayFields` as the only enforcement point for critical business validation.

## Good implementation pattern

1. Resolve `WKNumState`.
2. Resolve a stage descriptor from a switch or map.
3. Apply field rules in one place.
4. Inject only the minimum front-end bootstrap needed.

The generator script in this skill produces this structure as a starting point.
