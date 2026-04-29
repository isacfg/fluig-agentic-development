# Filtrar Anexos de um Processo

> **Fonte:** [https://fluiggers.com.br/t/filtrar-anexos-de-um-processo/1054](https://fluiggers.com.br/t/filtrar-anexos-de-um-processo/1054)
> **Categoria:** BPM
> **Tags:** `bpm`, `anexo`
> **Criado em:** 25/04/2022, 12:17
> **Visualizações:** 569 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 25/04/2022, 12:17

Em um processo estou copiando os arquivos anexados nele para uma pasta no ECM. Porém eu preciso dos anexos apenas de um passo do processo.

Para criar a pasta e copiar os anexos estou usando o seguinte comando:

* * *

function afterProcessFinish(processId){

```
var folderDto = docAPI.newDocumentDto();
var nameFolder = hAPI.getCardValue("solicitacao");

folderDto.setDocumentDescription(nameFolder);
folderDto.setDocumentType("1");
folderDto.setParentDocumentId(2965); // Id da pasta principal onde vão ser criadas as pastas filhas

// cria a pasta onde serão salvos os anexos
var folder = docAPI.createFolder(folderDto, null, null);

var attachments = hAPI.listAttachments();

for (var i = 0; i < attachments.size(); i++) {
    var attachment = attachments.get(i);

    // verifica se é um anexo externo ao GED (tipo 7)
        if (attachment.getDocumentType() == "7") {

            // copia o anexo para a pasta de upload para poder recriá-lo na pasta destino
            docAPI.copyDocumentToUploadArea(attachment.getDocumentId(), attachment.getVersion());

            attachment.setParentDocumentId(folder.getDocumentId());

            var attachArray = new java.util.ArrayList();
            var mainAttach = docAPI.newAttachment();
            mainAttach.setFileName(attachment.getPhisicalFile());
            mainAttach.setPrincipal(true);
            mainAttach.setAttach(false);
            attachArray.add(mainAttach);

            // recria o anexo na pasta criada
            docAPI.createDocument(attachment, attachArray, null, null,null);
    }
}
```

}

* * *

Alguém pode me ajudar a “selecionar” esses anexos para copiar para a pasta no ECM.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 26/04/2022, 11:33

use a função SohwCamera() para renomear os anexos e informar em qual etapa você esta subindo cada arquivo

---
