# GED e id de documentos

> **Fonte:** [https://fluiggers.com.br/t/ged-e-id-de-documentos/1330](https://fluiggers.com.br/t/ged-e-id-de-documentos/1330)
> **Categoria:** ECM / GED
> **Tags:** `form`, `bpm`, `dataset`, `ged`
> **Criado em:** 21/09/2022, 11:16
> **Visualizações:** 534 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**mateus braz** (@mateus_braz) — 21/09/2022, 11:16

Bom dia Pessoal!
tenho um fluxo hoje que salvo os anexos em documento dentro do GED em uma pasta estabelecida e possível eu colocar o nome da pasta e ela retorna o id? isso e feito via dataset?

segue código:

function beforeTaskSave(colleagueId,nextSequenceId,userList){

```
if(nextSequenceId == 41){

	//var pasta =(form.getValue("frota"))

    log.info("#### Gravar anexos do formulário na pasta");
    var id_FolderProtocolo = (parseInt("00002"));


    //ID da pasta onde quero gravar os anexos

    //******************************GRAVAR ANEXOS NA PASTA CRIADA******************************//
    //PEGA ANEXOS DO FOMRULÁRIO

    var calendar = java.util.Calendar.getInstance().getTime();
    var docs = hAPI.listAttachments(); //Pega os anexos do processo
    for(var i=0;i<docs.size();i++){

            var doc = docs.get(i);
            doc.setParentDocumentId(id_FolderProtocolo);
            doc.setExpires(false);
            doc.setCreateDate(calendar);
            doc.setInheritSecurity(true);
            doc.setTopicId(1);
            doc.setUserNotify(false);
            doc.setValidationStartDate(calendar);
            doc.setVersionOption("0");
            doc.setUpdateIsoProperties(true);

            // GRAVA DOCUMENTO NO ECM
            hAPI.publishWorkflowAttachment(doc);
            log.info("#### Gravou anexo "+ doc.getDocumentId() +" do formulário na pasta");
    }
    // FIM ANEXAR DOCUMENTOS        // ******************************************************************************************//
}
```

}

---
