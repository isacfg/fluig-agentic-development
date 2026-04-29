# Como vincular formulário à processo utilizando API REST?

> **Fonte:** [https://fluiggers.com.br/t/como-vincular-formulario-a-processo-utilizando-api-rest/2427](https://fluiggers.com.br/t/como-vincular-formulario-a-processo-utilizando-api-rest/2427)
> **Categoria:** Sem categoria
> **Tags:** `form`, `processo`, `bpm`, `fluigapi`
> **Criado em:** 12/12/2023, 11:57
> **Visualizações:** 268 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Patrick** (@pmattheew) — 12/12/2023, 11:57

Tenho um processo sem ter a versão lançada, e um formulário pronto.

Como defino o “formId” do meu processo através das APIs disponíveis? (preferencialmente REST)

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 12/12/2023, 13:19 | ❤️ 1

Olá, tudo bem? Da para recuperar assim {host\_fluig}/process-management/api/v2/requests/{NumeroSolicitacao}?fields=formRecordId

Da uma olhada na doc que tem o esquema:
[https://api.fluig.com/latest/process-management/swagger-ui/#/Requests](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests)

Espero que ajude… .abs

---

## Resposta #2

**Patrick** (@pmattheew) — 12/12/2023, 13:39

Olá Eduardo, obrigado pela resposta!

Não é isto o que eu estou atrás infelizmente…

O que procuro é se é possível definir o formulário de meu processo antes de lançar a versão dele, para que então eu possa lançar a versão com o formulário definido

Eu listo meu as versões do meu processo (processes/{id}/process-versions) e obtenho o seguinte:

```auto
{
            "processId": "020802002",
            "version": 1,
            "formId": 11696,
            "editing": false,
            "attachmentSecurity": {
                "updateVersions": false,
                "controlsSecurity": false,
                "attachmentSecurityConfigurations": null,
                "_expandables": [
                    "attachmentSecurityConfigurations"
                ]
            },
            "active": false,
            "blocked": false,
            "requiresPassword": false,
            "bpmnVersion": 0,
            "inheritFormSecurity": false,
            "mobileReady": true,
            "_expandables": [
                "diagram"
            ]
        }
         ...
```

Perceba o `formId` ali definido, pois para esse processo defini um formulário porém manualmente pela plataforma. Aí o estado atual que estou é que tenho vários processos similares a este, porém todos sem formulário definido (aí o `formId` está com o valor `0`), consegui defini-los pela plataforma mas pela documentação não consegui encontrar ou compreender se é possível fazer isso pela API, que aí definido eu poderia lançar a versão através do caminho `processes/{id}/process-versions/latest/release`.

---
