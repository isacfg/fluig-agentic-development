# Gerando arquivo em PDF e salvando no GED

> **Fonte:** [https://fluiggers.com.br/t/gerando-arquivo-em-pdf-e-salvando-no-ged/512](https://fluiggers.com.br/t/gerando-arquivo-em-pdf-e-salvando-no-ged/512)
> **Categoria:** BPM
> **Criado em:** 13/06/2021, 07:50
> **Visualizações:** 2952 | **Likes:** 6 | **Respostas:** 10

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 13/06/2021, 07:50

Galera, tenho uma necessidade que é antes de entrar em uma atividade do processo, gerar um PDF(um certificado) e após gerar esse PDF anexar o mesmo a uma pasta do ECM.

A visão que tenho hoje é que tenho que executar as ações antes de chegar na atividade, através de um evento de processo.

Esses eventos do fluig, são interpretados em java? acho que isso dificultaria um pouco essa implementação.

Qual outra alternativa tenho? Usar widget(tenho pouca experiência com sua utilização).

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 13/06/2021, 15:33 | ❤️ 1

Bom dia use o jspdf para gerar seu certificado.
Salve ele numa pasta depois via api fluig carregue ele para o ged.
você pode usar uma atividade de serviço ou os eventos de formulario.

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 14/06/2021, 08:28

Essa ação de salvar em uma pasta e carregar via para api para o GED é manual? Ou consigo passar o PDF gerado para essa API log após ele ser gerado? Se for manual, acho que inviabilizaria aqui.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/06/2021, 09:44

Todas as vezes que perguntei sobre criar PDF sempre me recomendaram fazer no Front com uma biblioteca JS ou delegar pra um serviço externo (o que é bem triste). Vai um exemplo do que fiz utilizando um serviço externo (faço isso numa atividade Serviço):

```javascript
/**
 * Cria o PDF do formulário
 *
 * @param {number} attempt Número da tentativa
 * @param {string} message Última mensagem de erro da atividade
 * @returns {boolean} True se executou
 * @throws {string} Exceção com a mensagem de erro
 */
function servicetask112(attempt, message) {
    var FOLDER_FORM_PDF = 5; // ID da pasta onde salvará o PDF
    var serviceHelper = ServiceManager.getService("ECMDocumentService").getBean();
    var service = serviceHelper
        .instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService")
        .getDocumentServicePort();

    if (service == null) {
        log.error("Erro ao carregar ECMDocumentService");
        throw "Erro ao gerar PDF do formulário";
    }

    try {
        var fileName = "nome-do-pdf-" + getValue("WKNumProces") + ".pdf";
        var attachment = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.Attachment");
        attachment.setFileName(fileName);
        attachment.setFileSize(1);
        attachment.setAttach(true);
        attachment.setEditing(false);
        attachment.setPrincipal(true);

        // Faz o download do conteúdo do PDF usando o serviço externo
        attachment.setFilecontent(downloadProcessFormAsPdf());

        var attachmentArray = serviceHelper.instantiate("com.totvs.technology.ecm.dm.ws.AttachmentArray");
        attachmentArray.getItem().add(attachment);

        var fluigCredentials = getFluigWebServiceUser();

        var result = service.createSimpleDocument(
            fluigCredentials.username,
            fluigCredentials.password,
            1,
            FOLDER_FORM_PDF,
            "admin",
            fileName,
            attachmentArray
        );

        hAPI.attachDocument(result.getItem().get(0).getDocumentId());
    } catch (err) {
        log.error(err);
        throw "Erro ao gerar PDF do formulário";
    }

    return true;
}

/**
 * Efetua o download do formulário do processo em formato PDF
 *
 * O PDF é gerado por um serviço externo que lê os dados do formulário
 * através do WS do Fluig e então cria o PDF.
 *
 * @returns {byte[]} Array de Bytes (Java) para enviar ao WS do Fluig
 */
function downloadProcessFormAsPdf() {
    var urlDownload = new java.net.URL(FluigPdfURL + "/endpoint.php?"
        + "user=usuario"
        + "&password=senha"
        + "&processId=" + getValue("WKNumProces")
    );

    var is 			= urlDownload.openStream();
    var bytesBuffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 8192);
    var baos 		= new java.io.ByteArrayOutputStream();
    var len 		= 0;

    while ((len = is.read(bytesBuffer, 0, bytesBuffer.length)) != -1) {
        baos.write(bytesBuffer, 0, len);
    }

    var fileContents = baos.toByteArray();
    baos.close();
    return fileContents;
}
```

Se você fizer no front pode usar salvar numa pasta do GED também. Inclusive acho que já vi alguns códigos aqui no fórum ensinando a fazer o upload pelo front.

---

## Resposta #4

**Daniel ** (@daniel_fmartins) — 14/06/2021, 11:28

Essa atividade de serviço é executada internamente pelo fluig(Java), não sendo possível usar JS né!?
Minha necessidade é, após a movimentação(aprovação ou reprovação), gerar um certificado. Se eu conseguisse fazer isso com JS seria mais fácil, com essa abordagem ainda tem muitas coisas obscuras pra mim.

Se eu criasse uma forma de gerar um PDF custmizado no front , eu poderia chamá-la nessa atividade de serviço?

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/06/2021, 15:15

Aí você terá que fazer no JS do formulário né? Em algum momento quando submeter o formulário vai ter que executar fazer a leitura dos campos, verificar se foi aprovado ou não e só depois de enviar o arquivo vai permitir continuar o processo.

Sinceramente não sei como faria isso.

Mas fica um exemplo de como, em uma widget, eu crio um PDF no JS e envio para o GED do Fluig.

Basicamente faz o upload para `/api/public/2.0/contentfiles/upload/` e então cria o documento com a `/api/public/ecm/document/createDocument`

[gist.github.com](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

#### [https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

##### criar\_documento\_fluig.js

```JavaScript
// Foram usadas as bibliotecas blob-stream e pdfkit

async function generatePdf() {
    const usuario = "login",
          senha = "senha",
          matricula_usuario = 'admin',
          pdf = new PDFDocument(),
          stream = pdf.pipe(blobStream()),
          fileName = 'Nome_Do_Arquivo.pdf',
          folderId = await findOrCreateFolderId("nova_pasta");
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/b8f48535c1a0d43a6c6bc418acc22684)

---

## Resposta #6

**Daniel ** (@daniel_fmartins) — 15/06/2021, 13:36

[@Bruno\_Gasparetto](/u/bruno_gasparetto) Entendi. Sabe se tem como fazer isso sem ser necessariamente com widgets?

Desisti da ideia de tentar fazer isso como uma atividade de serviço ou algo relacionado a BPM. Vou tentar fazer essa ação no form mesmo. Não consigo vizualizar uma widget integrada a um form.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/06/2021, 15:05 | ❤️ 1

Fazer numa widget ou no form, sendo pelo front, não tem diferença. Você vai chamar os mesmos WS para enviar o arquivo e então criar o documento no GED.

Talvez você possa usar o evento `beforeSendValidate` do front do formulário pra verificar se houve a aprovação e então gerar o PDF no front.

---

## Resposta #8

**Daniel ** (@daniel_fmartins) — 15/06/2021, 16:08

[@Bruno\_Gasparetto](/u/bruno_gasparetto) como você referencia as bibliotecas blob-stream e pdfkit no HTML? Não estou conseguindo aqui.

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/06/2021, 16:12 | ❤️ 1

[@daniel\_fmartins](/u/daniel_fmartins) , são bibliotecas externas.

No meu caso eu criei uma widget só pra servir de repositório dentro do próprio Fluig e no HTML eu coloco a tag `script` apontando pro JS delas. Mas você pode pegar outras bibliotecas. Tem várias opções de bibliotecas JS para gerar PDF. Eu só dei o exemplo delas porque foi a que usaram aqui, hehe.

---

## Resposta #10 ✅ RESPOSTA ACEITA

**Daniel ** (@daniel_fmartins) — 16/06/2021, 08:27

[@Bruno\_Gasparetto](/u/bruno_gasparetto) entendi.

No meu caso, eu tentei usar jsPDF para gerar o PDF, até aí ok.

Minhas dúvidas:
\*1: Como linkar meu jsPDF com o body, você usa essa blob-stream. Eu consigo usar isso com jsPDF?
\*2: Por que são utilizados dois posts para o upload? Um para `/api/public/2.0/contentfiles/upload/?fileName=${fileName}` e outro para
“/api/public/ecm/document/createDocument”

```auto
function generatePDF() {
    var doc = new jsPDF();
    var input = 'String qualquer';
    var fileName = 'documento.pdf';

    // Montagem do PDF
    doc.text(`a string ${input}`, 10, 10);

    fetch(
        `/api/public/2.0/contentfiles/upload/?fileName=${fileName}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/octet-stream",
            },
            cache: "no-cache",
            *1:
            body: stream.toBlob("application/pdf")
        }
    ).then(function (response) {
        if (!response.ok) {
            throw "Erro ao enviar o arquivo.";
        }
    }).then(function () {

        // Cria o Documento no GED

        let document = {
            companyId: WCMAPI.organizationId,
            description: fileName,
            immutable: true,
            parentId: 1460, // ID da pasta onde salvar o PDF
            isPrivate: false,
            downloadEnabled: true,
            attachments: [{
                fileName: fileName,
            }],
        };

        return fetch(
            "/api/public/ecm/document/createDocument",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                cache: "no-cache",
                body: JSON.stringify(document)
            }
        )
        .then(function (response) {
            if (!response.ok) {
                throw "Erro ao Salvar documento na Pasta Indicada";
            }
            return response.json();
        })
        .then(response => response.content);
    });
}
```

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/06/2021, 09:11 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_fmartins/48/260_2.png) daniel\_fmartins:
>
> > \*1: Como linkar meu jsPDF com o body, você usa essa blob-stream. Eu consigo usar isso com jsPDF?

Se não me engano, pois mexi pouco com a jsPDF, seria algo assim:

```javascript
body: doc.output('blob')
```

A biblioteca JS de PDF que utilizaram aqui é um pouco mais rústica/antiga, então precisa usar a blob-stream pra converter o stream num blob pra enviar no body do fetch.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_fmartins/48/260_2.png) daniel\_fmartins:
>
> > \*2: Por que são utilizados dois posts para o upload?

É como o Fluig trabalha. Você primeiro deve enviar o arquivo para ele e então criar o documento no GED.

---

## Resposta #12

**Daniel ** (@daniel_fmartins) — 16/06/2021, 09:50

[@Bruno\_Gasparetto](/u/bruno_gasparetto) tem alguma forma de eu recuperar a WCMAPI.organizationId no form?

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/06/2021, 10:12 | ❤️ 1

[@daniel\_fmartins](/u/daniel_fmartins) , tem sim.

A WCMAPI é do contexto global do Fluig, porém o formulário é executado dentro de um iframe, então basta pegar a WCMAPI do parent: `parent.WCMAPI`

---

## Resposta #14

**Daniel ** (@daniel_fmartins) — 16/06/2021, 15:09 | ❤️ 1

[@Bruno\_Gasparetto](/u/bruno_gasparetto) , sei nem como te agradecer rsrs.

Consegui aqui. Muito agradecido pela ajuda, valeu mesmo.

---

## Resposta #15

**system** (@system) — 17/06/2021, 07:10

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
