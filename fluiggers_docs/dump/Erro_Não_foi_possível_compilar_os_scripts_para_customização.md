# Erro: Não foi possível compilar os scripts para customização

> **Fonte:** [https://fluiggers.com.br/t/erro-nao-foi-possivel-compilar-os-scripts-para-customizacao/1405](https://fluiggers.com.br/t/erro-nao-foi-possivel-compilar-os-scripts-para-customizacao/1405)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 13/10/2022, 10:38
> **Visualizações:** 685 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 13/10/2022, 10:38

Bom dia pessoal, está apresentando um erro estranho no Fluig e não estou conseguindo identificar onde. Quando envio o formulário pra ENVIAR ele retorna o erro:
**Não foi possível compilar os scripts para customização com.datasul.technology.webdesk.workflow.customization.WorkflowCustomizationImpl.**

STACK DO ERRO
java.lang.Exception: com.datasul.technology.webdesk.workflow.engine.WorkflowListenerException: Não foi possível compilar os scripts para customização com.datasul.technology.webdesk.workflow.customization.WorkflowCustomizationImpl.
at deployment.fluig-server.ear.ecm-impl.jar//com.fluig.ecm.workflow.service.WorkflowServiceSendBean.send(WorkflowServiceSendBean.java:330)

Alguém ja passou por algo parecido?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/10/2022, 12:29 | ❤️ 1

Quando tem erro nos scripts (nos de eventos em back-end) é normal dar esse erro

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 14/10/2022, 14:24

Depois de Debugar cada linha de um evento personalizado, consegui encontrar o erro. Estranhei porque não mostrou logo que havia um erro na linha tal. Deu trabalho mas consegui.

---
