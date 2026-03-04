# Criar um documento a partir de um formulário via código de um processo

> **Fonte:** [https://fluiggers.com.br/t/criar-um-documento-a-partir-de-um-formulario-via-codigo-de-um-processo/860](https://fluiggers.com.br/t/criar-um-documento-a-partir-de-um-formulario-via-codigo-de-um-processo/860)
> **Categoria:** BPM
> **Criado em:** 07/01/2022, 12:06
> **Visualizações:** 947 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 07/01/2022, 12:06

Como eu poderia ter documentação ou dica para criar um documento na área de Documentos, na pasta Formulários do Fluig, através de código?

A criação partiria de dentro de um evento de processo, tal como ‘afterProcessCreate’?

Eu procurei e encontrei no link [docAPI](https://tdn.totvs.com/display/public/fluig/docAPI), mas eu não sei se é esta a melhor abordagem. Inclusive, não tenho, conforme parece exigir neste exemplo da Totvs, nenhum arquivo para anexar. Poderia pôr null no array de attachments, se for o caso?

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 20/06/2022, 21:45 | ❤️ 1

Boa noite. Eu nao sei se o Fluig tem alguma flução para gerar um documento nos eventos de processo (back-end), porem voce pode gerar este document no fron-end utilizando a biblioteca [http://pdfmake.org](http://pdfmake.org) gerar um arquivo base64 do PDF e enviar para um Dataset Criar o documento no ECM utilizando o WS ECMDocumentService

function criaDocumentoFluig(arquivoBase64, userId, senha, pasta, filename){

```
var empresa = 1;

var periodicService = ServiceManager.getService('ECMDocumentService');
var serviceHelper = periodicService.getBean();

var attachmentArray = serviceHelper.instantiate('com.totvs.technology.ecm.dm.ws.AttachmentArray');
var attachment = serviceHelper.instantiate('com.totvs.technology.ecm.dm.ws.Attachment');

var arquivo = java.util.Base64.getDecoder().decode(new java.lang.String(arquivoBase64).getBytes("UTF-8"));

attachment.setFileName(filename); //nome do arquivo
attachment.setFilecontent(arquivo);
attachment.setAttach(true); // se é um anexo ou o documento publicado (true = anexo/ false = documento)
attachment.setEditing(false); // se está em edição ou não
attachment.setPrincipal(true); // Se é o arquivo principal
attachmentArray.getItem().add(attachment);

var DMEngineServiceService = serviceHelper.instantiate('com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService');
var service = DMEngineServiceService.getDocumentServicePort();

var Retorno = service.createSimpleDocument(userId,
										   senha,
										   empresa,
										   pasta,
										   getValue("WKUser"),
										   filename,
										   attachmentArray);
var arrayRetorno = Retorno.getItem().get(0);
var documento = arrayRetorno["documentId"];
return documento;
```

}

---
