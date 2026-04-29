# Erro "Documento inexistente ou permissão insuficiente"

> **Fonte:** [https://fluiggers.com.br/t/erro-documento-inexistente-ou-permissao-insuficiente/540](https://fluiggers.com.br/t/erro-documento-inexistente-ou-permissao-insuficiente/540)
> **Categoria:** ECM / GED
> **Criado em:** 30/06/2021, 08:50
> **Visualizações:** 896 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Thiago** (@thiagosouza09) — 30/06/2021, 08:50

Bom Dia

Pessoal tenho um processo que estou tentando anexar um documento no inicio do processo, porém ele apresenta esse erro: (“Documento inexistente ou permissão insuficiente”). Estou usando o evento beforeStateEntry e quando eu tento anexar o documento em uma atividade ele permite normalmente. Alguém tem alguma ideia do que pode ser?

![image](https://fluiggers.com.br/uploads/default/original/1X/c987f8676baab8ffa93e04eec97078cf3b52bfc5.png)

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 30/06/2021, 09:32

[@thiagosouza09](/u/thiagosouza09) , manda o código do evento pra gente dar uma olhada?

---

## Resposta #2

**Thiago** (@thiagosouza09) — 30/06/2021, 09:47

Segue o código:

function beforeStateEntry(sequenceId){

```
var nome_pasta = hAPI.getCardValue("nomeRepresentacao");
var campoOcultoPasta = hAPI.getCardValue("recebeNumeroPasta");
var campoOcultoExistePasta = hAPI.getCardValue("recebePasta");
var user = getValue("WKUser");

if (sequenceId == 5 && campoOcultoExistePasta == "NAO") {

            var dto = docAPI.newDocumentDto();
            dto.setDocumentDescription(nome_pasta);
            dto.setDocumentType("1");
            dto.setParentDocumentId(40075);
            dto.setDocumentTypeId("");
            dto.setInternalVisualizer(true);
            var folder = docAPI.createFolder(dto, null, null);
            log.info("###################################" + folder);

        var gedNewParentId = folder.getDocumentId();
        log.info("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%" + gedNewParentId);
        var attachments = hAPI.listAttachments();

        for (var i = 0; i < attachments.size(); i++) {
            var attachment = attachments.get(i);


            if (attachment.getDocumentType() == "7") {

                docAPI.copyDocumentToUploadArea(attachment.getDocumentId(), attachment.getVersion());
                attachment.setParentDocumentId(folder.getDocumentId());
                var attachArray = new java.util.ArrayList();
                var mainAttach = docAPI.newAttachment();
                mainAttach.setFileName(attachment.getPhisicalFile());
                mainAttach.setPrincipal(true);
                mainAttach.setAttach(false);
                attachArray.add(mainAttach);

                docAPI.createDocument(attachment, attachArray, null, null, null);
            }
        }
	}

    if(sequenceId == 5 && campoOcultoExistePasta == "SIM") {
		log.info("################################## EXISTE #########################");


		 var attachments = hAPI.listAttachments();

            for (var i = 0; i < attachments.size(); i++) {

                var docDto = attachments.get(i);

                if (docDto.getDocumentType() == "7") {

                    docAPI.copyDocumentToUploadArea(docDto.getDocumentId(), docDto.getVersion());
                    docDto.setParentDocumentId(parseInt(campoOcultoPasta));
                    var attachArray = new java.util.ArrayList();
                    var mainAttach = docAPI.newAttachment();
                    mainAttach.setFileName(docDto.getPhisicalFile());
                    mainAttach.setPrincipal(true);
                    mainAttach.setAttach(false);
                    attachArray.add(mainAttach);


                        var doc = docAPI.createDocument(docDto, attachArray, null, null, null);


                }
            }
    }
```

}

---
