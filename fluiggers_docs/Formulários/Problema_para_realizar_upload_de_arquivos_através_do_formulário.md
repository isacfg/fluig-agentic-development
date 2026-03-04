# Problema para realizar upload de arquivos através do formulário

> **Fonte:** [https://fluiggers.com.br/t/problema-para-realizar-upload-de-arquivos-atraves-do-formulario/387](https://fluiggers.com.br/t/problema-para-realizar-upload-de-arquivos-atraves-do-formulario/387)
> **Categoria:** Formulários
> **Criado em:** 23/04/2021, 11:30
> **Visualizações:** 1592 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Marcos Vinicios de Carvalho** (@mcarvalho1994) — 23/04/2021, 11:30

Prezados, bom dia!

Tenho um formulário atrelado a um workflow, neste form tenho um campo tipo file que permito a seleçãode vários arquivos.

Inclui dentro do evento beforeTaskSave uma function enviaAnexosGED chamo o método listAttachments da hApi, mas está retornando vázio e consequentemente não entra no for para publicar o arquivo no GED.

Abaixo a function:

function enviaAnexosGED(processId) {
var folderDto = docAPI.newDocumentDto();
folderDto.setDocumentDescription(processId);
folderDto.setDocumentType(“1”);
folderDto.setParentDocumentId(2229664); // Id da pasta principal onde vão ser criadas as pastas filhas

```
// cria a pasta onde serão salvos os anexos
var folder = docAPI.createFolder(folderDto, null, null);
var attachments = hAPI.listAttachments();

for (var i = 0; i < attachments.size(); i++) {

    var attachment = attachments.get(i);

    // verifica se é um anexo externo ao GED (tipo 7)
    if (attachment.getDocumentType() == "7") {
        // copia o anexo para a pasta de upload para poder recriá-lo na pasta destino
    	try
    	{
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
    	} catch(error) {
    		log.info("##** Erro ao enviar documento para o GED");
    		log.info(error);
    	}
    }
}
```

}

---

## Resposta #1

**Wasley Santos** (@Wasley_Santos) — 26/04/2021, 16:01 | ❤️ 1

Oi [@mcarvalho1994](/u/mcarvalho1994)

Eu acho que seja porque a função hAPI só busca os anexos do processo (aqueles que estão na aba de anexos). Quando você cria um campo file, ele fica como anexos do formulário. Você precisa criar uma função para usar um webservice do Fluig para levar os anexos do formulário para o GED.
Use esse exemplo acredito que resolva seu problema

![](https://i0.wp.com/willian.eti.br/wp-content/uploads/2020/07/wp-1593725958509.png?fit=32%2C32&ssl=1) [Willian – 6 May 20](https://willian.eti.br/inserir-anexos-automaticamente-no-sistema-fluig/ "02:34PM - 06 May 2020")

![](https://i2.wp.com/willian.eti.br/wp-content/uploads/2021/01/pexels-markus-spiske-2004161-e1616236778132.jpg?fit=1920%2C451&ssl=1)

### [Inserir anexos automaticamente no sistema fluig \[ UPLOADER \]. -](https://willian.eti.br/inserir-anexos-automaticamente-no-sistema-fluig/)

Aprenda a inserir arquivos no fluig automaticamente, utilizando os webservices do ECM nos eventos de processo.

---
