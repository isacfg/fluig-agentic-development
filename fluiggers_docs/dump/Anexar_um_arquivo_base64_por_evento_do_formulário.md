# Anexar um arquivo base64 por evento do formulário

> **Fonte:** [https://fluiggers.com.br/t/anexar-um-arquivo-base64-por-evento-do-formulario/2384](https://fluiggers.com.br/t/anexar-um-arquivo-base64-por-evento-do-formulario/2384)
> **Categoria:** Sem categoria
> **Criado em:** 29/11/2023, 21:41
> **Visualizações:** 250 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 29/11/2023, 21:41

Boa noite pessoal, estou tentando subir um arquivo base64 para um formulário por evento workflow, eu usei esse código e ele não retorno nenhum erro, porém não anexa no formulário, alguém sabe me explicar onde estou errando?

```auto
function anexaArquivo(attach, nomDoc) {
    /** Serviço.*/
    var periodicService = ServiceManager.getServiceInstance("ECMWorkflowEngineService");
    var serviceHelper = periodicService.getBean();

    var serviceLocator = serviceHelper.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
    var service = serviceLocator.getWorkflowEngineServicePort();

    var attachments = serviceHelper.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray");

    /**Attachments */
    var attachmentDto = serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDto');
    var attachment = periodicService.instantiate("com.totvs.technology.ecm.workflow.ws.Attachment");

    /**Joga o arquivo base64 resgatado do JSON */
    /** Leitura de constraints.*/

    /**Seta as propriedades do arquivo 64 */
    attachment.setPrincipal(true);
    attachment.setAttach(true);
    attachment.setEditing(false);
    attachment.setFileSize(1);
    attachment.setFileName(nomDoc);
    //attachment.setNewAttach(true);
    //attachment.setDocumentId(0);
    //attachment.setDeleted(false);

    /**Converte o base64 para a codificação UTF-8 */
    attachment.setFilecontent(java.util.Base64.getDecoder().decode(new java.lang.String(attach).getBytes("UTF-8")));

    attachmentDto.getAttachments().add(attachment);
    attachmentDto.setDescription(nomDoc);
    attachments.getItem().add(attachmentDto);
}
```

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 23/04/2024, 21:30 | ❤️ 1

Não seria anexar o documento em um processo? se sim sua logica esta incompleta, voce deveria chamar a funcao saveAndSendTask do WS ECMWorkflowEngineService passando o parametro para movimentar o processo igual a false.

---
