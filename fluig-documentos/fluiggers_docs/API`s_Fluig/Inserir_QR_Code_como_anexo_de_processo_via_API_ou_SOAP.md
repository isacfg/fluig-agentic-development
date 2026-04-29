# Inserir QR Code como anexo de processo via API ou SOAP

> **Fonte:** [https://fluiggers.com.br/t/inserir-qr-code-como-anexo-de-processo-via-api-ou-soap/3479](https://fluiggers.com.br/t/inserir-qr-code-como-anexo-de-processo-via-api-ou-soap/3479)
> **Categoria:** API`s Fluig
> **Tags:** `processo`, `anexo`, `api`, `soap`
> **Criado em:** 27/10/2025, 11:52
> **Visualizações:** 40 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Allan Finger Candido** (@allan.candido) — 27/10/2025, 11:52

Estou automatizando uma etapa de um processo onde preciso inserir dados em 2 campos, anexar um QRCode na aba de anexos do processo e enviá-lo para frente.

Via API, consigo acessar os dados da solicitação, gerar o QRCode com base nos dados e também mover a solicitação preenchendo os dados nos campos necessários, estou com problemas porém na parte do anexo.

Já tentei anexar o arquivo enquanto movia a solicitação via SOAP com o saveAndSendTaskClassic mas não deu certo, atualmente estou tentando pela updateSimpleDocument e também pela updateWorkflowAttachment, porém não tive sucesso em nenhum dos dois.

O updateSimpleDocument retorna sucesso, porém o anexo não aparece no processo e a updateWorkflowAttachment me retorna um erro como se estivesse passando um array vazio, mesmo que todos os parâmetros estejam preenchidos.

Estou fazendo as chamadas via Python com a lib zeeps.

updateWorkflowAttachment:

```auto
attachment_type = workflow_client.get_type('ns0:attachment')
        attachment_obj = attachment_type(
            attach=True,
            editing=False,
            fileName=file_name,
            fileSize=float(file_size_bytes),
            filecontent=file_content_base64,
            principal=True

        )
        print(f"Objeto 'attachment' criado para '{file_name}'. Tamanho: {file_size_bytes} bytes.")


        attachments_to_send = []
        attachments_to_send.append(attachment_obj)


        document_dto_type = workflow_client.get_type('ns0:documentDto')


        document_dto_object = document_dto_type(
            companyId=company_id,
            createDateInMilliseconds=float(time.time() * 1000),
            documentId=document_id,
            forAproval=False,
            inheritSecurity=True,
            onCheckout=False,
            rowId = 0,
            securityLevel = 0,
            translated= False,
            updateIsoProperties=False,
            version=version
        )

        documents_to_send = []
        documents_to_send.append(document_dto_object)

        print(f"Documento 'attachment' criado para '{document_id}'.")

         response = workflow_client.service.updateWorkflowAttachment(
             username=username,
             password=password,
             companyId=company_id,
             processInstanceId=process_instance_id,
             usuario=user_id,
             document=documents_to_send,
             attachments=attachments_to_send
         )
```

O início é o mesmo, mas a chamada do updateSimpleDocument está assim:

```auto
response = document_client.service.updateSimpleDocument(
            username,
            password,
            company_id,
            document_id,
            user_id,
            "QR Code Attachment",
            attachments_to_send
        )
```

Alguém já fez algo parecido e consegue me ajudar?

---

## Resposta #1

**Allan Finger Candido** (@allan.candido) — 27/10/2025, 15:10

Consegui corrigir o erro na chamanda updateWorkflowAttachment, o problema era que eu estava criando um simples Array e colocando os objetos Attachment e ObjectDto neles, quando de fato eu precisava importar os tipos AttachmentArray e ObjectDtoArray e preenchê-los com os dados, o código final ficou dessa forma:

```auto
attachment_type = workflow_client.get_type('ns0:attachment')

        attachment_obj = attachment_type(
            attach=True,  # Indica que é para anexar um novo arquivo
            editing=False,
            fileName=file_name,
            fileSize=int(file_size_bytes),
            filecontent=file_content_base64,
            principal=True

        )


        attachmentsArray_type = workflow_client.get_type('ns0:attachmentArray')
        attachments_to_send = attachmentsArray_type(
            item = attachment_obj
        )


        document_dto_type = workflow_client.get_type('ns0:documentDto')

        document_dto_object = document_dto_type(
            companyId=company_id,
            createDateInMilliseconds=int(round(time.time() * 1000)),
            documentId=document_id,
            forAproval=False,
            inheritSecurity=True,
            onCheckout=False,
            rowId = 0,
            securityLevel = 0,
            translated= False,
            updateIsoProperties=False,
            version=version
        )
        documents_array_type = workflow_client.get_type('ns0:documentDtoArray')
        documents_to_send = documents_array_type(
            item = document_dto_object
        )
```

O problema agora é que estou recebendo essa resposta:
Resposta do serviço updateWorkflowAttachment: DOCUMENTO NÃO É ANEXO WORKFLOW

Alguém consegue me ajudar nesse caso?

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Allan Finger Candido** (@allan.candido) — 31/10/2025, 10:33

Consegui fazer o processo funcionar através da chamada saveAndSendTaskClassic.
No final, o que faltava para ela ter funcionado em primeiro lugar eram os tipos corretos de Array que eu não estava utilizando.

---
