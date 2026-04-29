# [ERRO] A different object with the same identifier value was already associated with the session

> **Fonte:** [https://fluiggers.com.br/t/erro-a-different-object-with-the-same-identifier-value-was-already-associated-with-the-session/2252](https://fluiggers.com.br/t/erro-a-different-object-with-the-same-identifier-value-was-already-associated-with-the-session/2252)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 09/10/2023, 08:54
> **Visualizações:** 315 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 09/10/2023, 08:54

Bom dia pessoal,

Estou Analizando os logas de nosso Fluig e estou tendo o erro abaixo na console do servidor ao movimentar as atividades de um processo mas não consegui identificar nenhum erro. o processo segue corretamente mas ocorre o erro.

ERROR \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-16191) ERRO registerUserKnowledgeTask: A different object with the same identifier value was already associated with the session : \[com.datasul.technology.webdesk.workflow.model.UserKnowledgeTask#com.datasul.technology.webdesk.model.temp.UserKnowledgeTaskPK\[companyId=1, colleagueId=cimlbb0xsaf3yg4d1418060735473, processInstanceId=135945, movementSequence=4, transferredSequence=1\]\]: com.totvs.technology.foundation.common.exception.FDNCreateException: A different object with the same identifier value was already associated with the session : \[com.datasul.technology.webdesk.workflow.model.UserKnowledgeTask#com.datasul.technology.webdesk.model.temp.UserKnowledgeTaskPK\[companyId=1, colleagueId=cimlbb0xsaf3yg4d1418060735473, processInstanceId=135945, movementSequence=4, transferredSequence=1\]\]

Podem me ajudar?

Obrigado!

---

## Resposta #1

**Otavio Faria** (@Otavio_Faria) — 06/08/2024, 15:07

Encontrou alguma solução ?

---

## Resposta #2 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 12/08/2024, 14:08

Provavelmente é só atualizar. Esse erro não acontece mais nas versões mais recentes.

O erro era na criação do registro que marca uma solicitação como já visualizada pelo usuário (que é o que faz a tarefa ficar ou não em negrito na central de tarefas) e não deveria ocasionar maiores problemas.

---
