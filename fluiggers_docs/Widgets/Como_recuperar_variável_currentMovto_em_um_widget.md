# Como recuperar variável currentMovto em um widget

> **Fonte:** [https://fluiggers.com.br/t/como-recuperar-variavel-currentmovto-em-um-widget/750](https://fluiggers.com.br/t/como-recuperar-variavel-currentmovto-em-um-widget/750)
> **Categoria:** Widgets
> **Criado em:** 29/10/2021, 09:36
> **Visualizações:** 449 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 29/10/2021, 09:36

Existe algum datatet/forma para recuperar a variável app\_ecm\_workflowview\_currentMovto?
No caso, preciso disso em uma widget.

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 29/10/2021, 16:40 | ❤️ 2

Bom dia,

Vê se essa API te resolve,

https://{{sua url}}/process-management/api/v2/requests/{{numero da solicitação}}/tasks?page=1&pageSize=1000

Outras APIs que podem te ajudar:

https://{{SUA URL}}/api-rest/

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 01/07/2025, 10:26

A quem ainda tiver interesse. O app\_ecm\_workflowview\_currentMovto da tarefa atual fica no ultimo nodo do array no parametro movementSequence

---
