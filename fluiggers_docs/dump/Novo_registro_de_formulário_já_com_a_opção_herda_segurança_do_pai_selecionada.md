# Novo registro de formulário já com a opção herda segurança do pai selecionada

> **Fonte:** [https://fluiggers.com.br/t/novo-registro-de-formulario-ja-com-a-opcao-herda-seguranca-do-pai-selecionada/1889](https://fluiggers.com.br/t/novo-registro-de-formulario-ja-com-a-opcao-herda-seguranca-do-pai-selecionada/1889)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 27/04/2023, 18:06
> **Visualizações:** 253 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 27/04/2023, 18:06

Pessoal, via página publica utilizo o método startProcess do WS para iniciar solicitações. Procurei sobre como atualizar o registro para que já fosse criado com a opção herda segurança do pai selecionada mas não encontrei algo nesse sentido. O método updateCardData não possui esse parâmetro para que eu possa atualizar o registro depois de criado. Alguém tem uma ideia de como eu poderia cria-lo e já atualiza-lo ?

---

## Resposta #1

**matheus.jesus** (@matheus.jesus) — 18/07/2025, 17:40

conseguiu resolver? estou com o mesmo problema

---

## Resposta #2

**Wanderley Junior** (@gomeswjunior) — 21/07/2025, 16:50

Fala Matheus, beleza ?

Na api “**/api/public/2.0/folderdocuments/create**” utilize o objeto completo para criar a pasta, onde o “**inheritSecurity**” com valor **true** é a solução.

```auto
var data = {
        parentFolderId: "",
        documentDescription: "",
        additionalComments: "",
        versionDescription: "",
        expires: "false",
        keyWord: "keyWord",
        publisherId: "",
        volumeId: "Default",
        permissionType: "1",
        restrictionType: "3",
        inheritSecurity: true,
        approvalAndOr: "true",
        permissions: [
            {
                securityLevel: "3",
                securityVersion: true,
                inheritSecurity: true,
                downloadEnabled: "true",
                showContent: "true",
                attributionDescription: "attributionDescription",
                attributionType: "1",
                attributionValue: ""
            }
        ],
        downloadEnabled: "true",
        updateIsoProperties: "false",
        topicId: "133",
        documentTypeId: "1",
        notifyUser: "true",
        internalVisualizer: "true"
    };
```

---
