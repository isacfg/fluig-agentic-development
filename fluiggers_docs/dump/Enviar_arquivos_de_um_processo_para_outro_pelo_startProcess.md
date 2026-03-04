# Enviar arquivos de um processo para outro pelo startProcess

> **Fonte:** [https://fluiggers.com.br/t/enviar-arquivos-de-um-processo-para-outro-pelo-startprocess/2191](https://fluiggers.com.br/t/enviar-arquivos-de-um-processo-para-outro-pelo-startprocess/2191)
> **Categoria:** API`s Fluig
> **Tags:** `processo`, `fluigapi`
> **Criado em:** 06/09/2023, 14:27
> **Visualizações:** 572 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 06/09/2023, 14:27 | ❤️ 1

Em uma atividade de serviço estou criando perfeitamete uma nova solicitação utilizando o startProcess do ECMWorkflowEngineService, porém estou querendo melhorar a chamada e enviar também os anexos da solicitação que está sendo finalizada para a solicitação que está sendo criada.

```auto
var attachments = serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray');

                var listAttachments = hAPI.listAttachments();
                for (var i = 0; i < listAttachments.size(); i++) {
                    var doc = listAttachments.get(i);
                    var attachmentDto = serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDto');

                    attachmentDto.setFileName(doc.getDocumentDescription());
                    attachmentDto.setFileContent(doc.getDocumentId());
                    attachments.getItem().add(attachmentDto);
                }
```

Preciso de ajudar para entender o que devo enviar no setFileContent, já que da maneira que estou fazendo não está funcioando.

---

## Resposta #1

**Herick Freitas** (@herickfreitas) — 12/06/2024, 19:15

Boa noite [@gomeswjunior](/u/gomeswjunior)
Estou com a mesma necessidade, no processo A tenho um startProcess, gostaria de inserir os anexos do processo A no processo novo. Conseguiu resolver?

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/06/2024, 09:47 | ❤️ 1

Aqui sempre precisei usar o Soap pra buscar o conteúdo, porque não vi lugar nenhum permitindo pegar o conteúdo do arquivo nativamente.

```javascript
var fluigUser = getFluigUser(); // Função customizada

var documentService = ServiceManager.getServiceInstance("ECMDocumentService")
        .instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService")
        .getDocumentServicePort();

attachmentDto.setFileContent(
    documentService.getDocumentContent(
        fluigUser.username,
        fluigUser.password,
        getValue("WKCompany"),
        doc.getDocumentId(),
        "admin",
        doc.getVersion(),
        doc.getDocumentDescription()
    )
);
```

---
