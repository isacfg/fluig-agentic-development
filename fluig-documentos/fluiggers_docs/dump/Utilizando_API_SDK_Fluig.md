# Utilizando API SDK Fluig

> **Fonte:** [https://fluiggers.com.br/t/utilizando-api-sdk-fluig/1546](https://fluiggers.com.br/t/utilizando-api-sdk-fluig/1546)
> **Categoria:** Sem categoria
> **Criado em:** 16/12/2022, 12:43
> **Visualizações:** 410 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Abel Gabriel do Carmo** (@abel_carmo) — 16/12/2022, 12:43

Estou utilizando um método do SDK Fluig para buscar informações da solicitação iniciada.

```auto
var workflowServices =     fluigAPI.getWorkflowService();
request = workflowServices.findRequests(processID, parseInt(version['processLinkPK']['version'], 10));
log.info("REQUEST: " + request.getResult());
```

Esse retorno deveria receber do tipo com.fluig.sdk.api.workflow.BPMRequestVO. Como mostra a [documentação](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)

Porem no meu log do Fluig está retornando o tipo:

`REQUEST: com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO@30c210c6`

Alguem sabe oque eu preciso fazer para obter o tipo correto no retorno do método “workflowServices.findRequests”?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/12/2022, 14:34

Pelo link da documentação tá certinho, ele retorna um `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO>`.

Agora como é feita a iteração no ResponseEnvelopeVO somente a TOTVS deve ter essa resposta, já que eles não disponibilizaram documentação dessa classe.

Ao menos no site do SDK não informa como é essa classe.

Talvez tenha que abrir um chamado perguntando como proceder ou ter muita sorte de alguém conhecer :frowning:

---
