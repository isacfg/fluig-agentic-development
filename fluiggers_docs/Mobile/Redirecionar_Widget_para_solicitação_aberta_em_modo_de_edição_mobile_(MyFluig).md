# Redirecionar Widget para solicitação aberta em modo de edição mobile (MyFluig)

> **Fonte:** [https://fluiggers.com.br/t/redirecionar-widget-para-solicitacao-aberta-em-modo-de-edicao-mobile-myfluig/3143](https://fluiggers.com.br/t/redirecionar-widget-para-solicitacao-aberta-em-modo-de-edicao-mobile-myfluig/3143)
> **Categoria:** Mobile
> **Tags:** `mobile`
> **Criado em:** 29/01/2025, 14:33
> **Visualizações:** 79 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Victor Santos Henrique** (@Victor.S.Henrique) — 29/01/2025, 14:33

Olá! Estou tentando encaminhar a url no MyFluig, de uma widget para uma solicitação aberta, já em modo de edição. Tenho o seguinte código, funciona perfeitamente no navegador, mas no app encaminha apenas no modo VIEW sem possibilidade de assumir a tarefa, mesmo sendo o usuário responsável.

```auto
newInspectionRequest: async function (fields) {
    try {
        const proc = await this.startProcess('wkfFireExtinguishers', 5, WCMAPI.userCode, "Processo Iniciado Via Widget de Manutenção", fields);
        const newRequestCode = proc.processInstanceId;
        const url = new URL(`${WCMAPI.serverURL}${WCMAPI.contextPath}/p/${WCMAPI.tenantPATH}/pageworkflowview`);

        url.searchParams.append(`app_ecm_workflowview_processInstanceId`, newRequestCode);
        url.searchParams.append('app_ecm_workflowview_currentMovto', "2");
        url.searchParams.append('app_ecm_workflowview_taskUserId', WCMAPI.userCode);
        url.searchParams.append('app_ecm_workflowview_managerMode', "false");

        window.location.assign(url);
    }
    catch (e) {
        console.log("🚀 ~ e:", e);
        throw new Error("Erro ao abrir solicitação");
    }
},
```

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 03/09/2025, 07:16

Achoou alguma solução para isso?

---

## Resposta #2

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 06/11/2025, 12:17

Conseguiu resolver ? estou tendo o mesmo problema

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 13/11/2025, 10:27

Tenta dessa forma

```javascript
window.location.href=WCMAPI.getServerURL()+'/portal/p/1/pageworkflowview?app_ecm_workflowview_processInstanceId='+aux.processoid+"&app_ecm_workflowview_currentMovto="+aux.NUM_SEQ_MOVTO+"&app_ecm_workflowview_taskUserId="+aux.CD_MATRICULA;
```

---
