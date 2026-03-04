# Envio de bytes para API

> **Fonte:** [https://fluiggers.com.br/t/envio-de-bytes-para-api/3478](https://fluiggers.com.br/t/envio-de-bytes-para-api/3478)
> **Categoria:** Sem categoria
> **Criado em:** 24/10/2025, 14:55
> **Visualizações:** 57 | **Likes:** 1 | **Respostas:** 7

---

## Pergunta original

**Gustavo Soares** (@Gustavo_Soares) — 24/10/2025, 14:55

Olá alguém ja conseguiu enviar bytes para uma api, passando o pdf inteiro?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 24/10/2025, 16:09 | ❤️ 1

Boa tarde,

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png)
>
> [Dataset converter base64 to multpart/formdata](https://fluiggers.com.br/t/dataset-converter-base64-to-multpart-formdata/1652)
>
> > Como converter uma string base64 em multpart/formdata em um dataset? Segue meu dataset function createDataset(fields, constraints, sorts) { var dataset = DatasetBuilder.newDataset(); dataset.addColumn("iddocument"); var pdf; if (constraints != null && constraints.length) { for (var i = 0; i < constraints.length; i++) { if (constraints\[i\].fieldName == "PDF"){ pdf = constraints\[i\].initialValue; } } } try { …

Da uma olhadinha eu envio um pdf via mulformdata. deve te ajudar.

---

## Resposta #2

**Gustavo Soares** (@Gustavo_Soares) — 24/10/2025, 16:15

Boa tarde, Muito obrigado pela ajuda

---

## Resposta #3

**Gustavo Soares** (@Gustavo_Soares) — 24/10/2025, 17:38

Eu tenho que fazer uma integração com api de assinatura online, eles passam a api e a requisição via postman para teste : [Intellisign Suite | Integrando com o Intellisign](https://developers.intellisign.com/api/#tag/OAuth/paths/%5C~1oauth%5C~1token/post) .
Porém no fluig, eu consegui chegar até a criação do envelope para envio, retornei o binario, mas não consegui realizar o envio, function createDataset(fields, constraints, sortFields) {
var dataset = DatasetBuilder.newDataset();
dataset.addColumn(“status”);
dataset.addColumn(“message”);
dataset.addColumn(“response”);

```auto
try {
    log.info("=== INÍCIO DO DATASET ds_UploadDocumento ===");

    var envelopeId = findConstraint("envelopeId", constraints);
    var documentId = findConstraint("documentId", constraints);
    var accessToken = findConstraint("token", constraints);
    var organizationId = findConstraint("organizationId", constraints);
    var fileName = findConstraint("fileName", constraints) || "documento.pdf";

    log.dir("envelopeId:" + envelopeId)
    log.dir("documentId:" + documentId)
    log.dir("accessToken:" + accessToken)
    log.dir("organizationId:" + organizationId)
    log.dir("fileName:" + fileName)

    if (!envelopeId || !documentId || !accessToken || !organizationId) {
        dataset.addRow(["ERROR", "Parâmetros obrigatórios não informados.", ""]);
        return dataset;
    }

    var csDocumento = DatasetFactory.createConstraint("nomeArquivo", "Proposta-Analista.pdf", "Proposta-Analista.pdf", ConstraintType.MUST);
    var csDocId = DatasetFactory.createConstraint("documentId", "1481", "1481", ConstraintType.MUST);
    var csVersao = DatasetFactory.createConstraint("documentoVersao", "1000", "1000", ConstraintType.MUST);
    var csUsuario = DatasetFactory.createConstraint("colleagueId", "fluig", "fluig", ConstraintType.MUST);
    var fileBytes = DatasetFactory.getDataset("ds_FileByte", null, new Array(csDocumento, csDocId, csVersao, csUsuario), null);

    log.dir("fileBytes:")
    log.dir("=== fileBytes ===");
    log.dir(fileBytes);

    if (fileBytes != null && fileBytes.rowsCount > 0) {
        var bytes = fileBytes.getValue(0, "byte");
        log.info("=== Bytes retornados ===");
        log.info(bytes);
    } else {
        log.warn("Nenhum dado retornado do dataset ds_FileByte");
    }

    var bytes = fileBytes.getValue(0, "byte");


    // var boundary = "----FluigFormBoundary" + new Date().getTime();
    // var formData =
    //     "--" + boundary + "\r\n" +
    //     "Content-Disposition: form-data; name=\"file\"; filename=\"" + fileName + "\"\r\n" +
    //     "Content-Type: application/pdf\r\n\r\n" +
    //     bytes + "\r\n" +
    //     "--" + boundary + "--"

    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
                companyId: getValue("WKCompany") + "",
                serviceCode: "testeOAuth",
                endpoint: "/v1/envelopes/" + envelopeId + "/documents",
                method: "post",
                timeoutService: "1000",
                headers: {
                    "X-Organization": organizationId,
                    "Content-Type": "application/json",
                    "Accept": "application/json"

                },

                params: {
                    "file": bytes

                }
            };
        log.info("=== Enviando upload binário multipart ===");
        log.dir("=== REQUEST MONTADO ===");
        log.dir(data);

    var result = clientService.invoke(JSON.stringify(data));

    if (!result || result.getResult() == null) {
        dataset.addRow(["ERROR", "Nenhum retorno do serviço.", ""]);
        return dataset;
    }

    var httpStatus = result.getHttpStatusResult();
    var response = result.getResult();

    dataset.addRow([httpStatus, "Upload realizado", response]);


    //        var clientIntellisign = fluigAPI.getAuthorizeClientService();
    //        var requestIntellisign = clientIntellisign.invoke({
    //            companyId: getValue("WKCompany"),
    //            serviceCode: "OAuthTokenService",
    //            endpoint: "/v1/envelopes/" + envelopeId + "/documents",
    //            method: "POST",
    //            timeoutService: "60000",
    //            headers: {
    //                "Authorization": "Bearer " + accessToken,
    //                "X-Organization": organizationId,
    //                "Accept": "application/json"
    //            },
    //            params: [
    //                {
    //                    name: "file",
    //                    fileName: fileName,
    //                    contentType: "application/pdf",
    //                    content: bytes
    //                }
    //            ]
    //        });

    //        var httpCode = requestIntellisign.getHttpStatusResult();
    //        var resultStr = requestIntellisign.getResult();
    //
    //        log.info("HTTP Status: " + httpCode);
    //        log.info("Retorno Intellisign: " + resultStr);
    //
    //        if (httpCode != 200 && httpCode != 201) {
    //            dataset.addRow(["ERROR", "Falha no upload binário: HTTP " + httpCode, resultStr]);
    //            return dataset;
    //        }
    //
    //        var response = JSON.parse(resultStr);
    //        dataset.addRow(["SUCCESS", "Upload binário realizado com sucesso!", JSON.stringify(response)]);
    //        log.info("=== FIM ds_UploadDocumento ===");

} catch (e) {
    dataset.addRow(["ERROR", e.message, e.stack]);
    log.error("Erro no ds_UploadDocumento: " + e);
}

return dataset;
```

}

function findConstraint(fieldName, constraints) {
if (constraints != null) {
for (var i = 0; i < constraints.length; i++) {
if (constraints\[i\].fieldName == fieldName) {
return constraints\[i\].initialValue;
}
}
}
return null;
}

//function createDataset(fields, constraints, sortFields) {
// var dataset = DatasetBuilder.newDataset();
// dataset.addColumn(“status”);
// dataset.addColumn(“message”);
// dataset.addColumn(“response”);
//
// try {
// log.info(“=== INÍCIO DO DATASET ds\_UploadDocumento ===”);
// var envelopeId = findConstraint(“envelopeId”, constraints);
// var documentId = findConstraint(“documentId”, constraints);
// var accessToken = findConstraint(“token”, constraints);
// var organizationId = findConstraint(“organizationId”, constraints);
// var fileName = findConstraint(“fileName”, constraints) || “documento.pdf”;
// log.dir(“envelopeId:”+envelopeId)
// log.dir(“documentId:”+documentId)
// log.dir(“accessToken:”+accessToken)
// log.dir(“organizationId:”+organizationId)
// log.dir(“fileName:”+fileName)
//
// if (!envelopeId || !documentId || !accessToken || !organizationId) {
// dataset.addRow(\[“ERROR”, “Parâmetros obrigatórios não informados.”, “”\]);
// return dataset;
// }
//
// var csDocumento = DatasetFactory.createConstraint(“nomeArquivo”, “Proposta-Analista.pdf”, “Proposta-Analista.pdf”, ConstraintType.MUST);
// var csDocId = DatasetFactory.createConstraint(“documentId”, “1481”, “1481”, ConstraintType.MUST);
// var csVersao = DatasetFactory.createConstraint(“documentoVersao”, “1000”, “1000”, ConstraintType.MUST);
// var csUsuario = DatasetFactory.createConstraint(“colleagueId”, “fluig”, “fluig”, ConstraintType.MUST);
// var fileBytes = DatasetFactory.getDataset(“ds\_FileByte”, null, new Array(csDocumento, csDocId, csVersao, csUsuario), null);
// log.dir(“fileBytes:”)
//
// log.dir(“=== fileBytes ===”);
[//log.dir](//log.dir)(fileBytes); // Mostra toda a estrutura retornada
//
//if (fileBytes != null && fileBytes.rowsCount > 0) {
// var bytes = fileBytes.getValue(0, “byte”); // forma segura de acessar o campo
// log.info(“=== Bytes retornados ===”);
// log.info(bytes); // log.info para strings simples
//} else {
// log.warn(“Nenhum dado retornado do dataset ds\_FileByte”);
//}
//
//
// var clientIntellisign = fluigAPI.getAuthorizeClientService();
// var requestIntellisign = clientIntellisign.invoke({
// companyId: getValue(“WKCompany”),
// serviceCode: “OAuthTokenService”,
// endpoint: “/v1/envelopes/” + envelopeId + “/documents”,
// method: “POST”,
// timeoutService: “60000”,
// headers: {
// “Authorization”: "Bearer " + accessToken,
// “X-Organization”: organizationId,
// “Accept”: “application/json”
// },
// params: \[
// {
// name: “file”,
// fileName: fileName,
// contentType: “application/pdf”,
// content: bytes
// }
// \]
// });
//
// var httpCode = requestIntellisign.getHttpStatusResult();
// var resultStr = requestIntellisign.getResult();
//
// log.info("HTTP Status: " + httpCode);
// log.info(“Retorno Intellisign: " + resultStr);
//
// if (httpCode != 200 && httpCode != 201) {
// dataset.addRow(\[“ERROR”, “Falha no upload binário: HTTP " + httpCode, resultStr\]);
// return dataset;
// }
//
// var response = JSON.parse(resultStr);
// dataset.addRow(\[“SUCCESS”, “Upload binário realizado com sucesso!”, JSON.stringify(response)\]);
// log.info(”=== FIM ds\_UploadDocumento ===”);
//
// } catch (e) {
// dataset.addRow(\[“ERROR”, e.message, e.stack\]);
// log.error("Erro no ds\_UploadDocumento: " + e);
// }
//
// return dataset;
//}
//
//function findConstraint(fieldName, constraints) {
// if (constraints != null) {
// for (var i = 0; i < constraints.length; i++) {
// if (constraints\[i\].fieldName == fieldName) {
// return constraints\[i\].initialValue;
// }
// }
// }
// return null;
//}-

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/10/2025, 11:29

Tá bem complicado entender o código devido à formatação.

Segue essa [orientação](https://fluiggers.com.br/t/before-statement-beforetasksave-1-in-beforetasksave-at-line-number-1/3389/2) pro código ficar visualmente aceitável ou coloca num gist

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/10/2025, 11:31

Caso você tenha o arquivo no GED do Fluig pode fazer uma chamada assim.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png)
>
> [Dataset converter base64 to multpart/formdata](https://fluiggers.com.br/t/dataset-converter-base64-to-multpart-formdata/1652/8)
>
> > [@rafaelrubin](/u/rafaelrubin) , de jeito simples: esses métodos “padrões” do Fluig não fazem requisições multipart/form-data. Eles servem basicamente só pra trocar informações json. Qualquer coisa que fuja desse padrão de enviar “texto”/json precisa ser feita manualmente. O jeito mais fácil é ter o arquivo localmente no Fluig, aí você já o pega e envia. Se você só tem o Base64 aí terá que pesquisar como converter ele pra um formato que o form-data receba. Não parei pra ver se do jeito que fez a conversão func…

---

## Resposta #6

**Gustavo Soares** (@Gustavo_Soares) — 27/10/2025, 14:02

```javascript
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("status");
    dataset.addColumn("message");
    dataset.addColumn("response");

    log.info("=== INÍCIO DO DATASET ds_UploadDocumento ===");

    try {
        // =========================================================
        // 1️⃣ LEITURA DOS PARÂMETROS
        // =========================================================
        var envelopeId     = findConstraint("envelopeId", constraints);
        var documentId     = findConstraint("documentId", constraints);
        var documentVersion = findConstraint("documentVersion", constraints);
        var accessToken    = findConstraint("token", constraints);
        var organizationId = findConstraint("organizationId", constraints);
        var fileName       = findConstraint("fileName", constraints) || "documento.pdf";

        log.info("[ds_UploadDocumento] --- PARÂMETROS ---");
        log.info("envelopeId: " + envelopeId);
        log.info("documentId: " + documentId);
        log.info("documentVersion: " + documentVersion);
        log.info("organizationId: " + organizationId);
        log.info("fileName: " + fileName);
        log.info("-----------------------------------------");

        if (!envelopeId || !documentId || !accessToken || !organizationId) {
            dataset.addRow(["ERROR", "Parâmetros obrigatórios não informados (envelopeId, documentId, token, organizationId).", ""]);
            return dataset;
        }

        // =========================================================
        // 2️⃣ BUSCA DOS BYTES DO DOCUMENTO (via ds_FileByte)
        // =========================================================
        var csNome     = DatasetFactory.createConstraint("nomeArquivo", fileName, fileName, ConstraintType.MUST);
        var csDocId    = DatasetFactory.createConstraint("documentId", documentId, documentId, ConstraintType.MUST);
        var csVersao   = DatasetFactory.createConstraint("documentoVersao", documentVersion, documentVersion, ConstraintType.MUST);
        var csUsuario  = DatasetFactory.createConstraint("colleagueId", "fluig", "fluig", ConstraintType.MUST);

        var dsFile = DatasetFactory.getDataset("ds_FileByte", null, [csNome, csDocId, csVersao, csUsuario], null);

        log.info("[ds_UploadDocumento] Dataset ds_FileByte executado.");

        if (dsFile == null || dsFile.rowsCount == 0) {
            throw "Nenhum conteúdo retornado pelo dataset ds_FileByte.";
        }

        var bytes = dsFile.getValue(0, "byte");
        log.info("[ds_UploadDocumento] Bytes obtidos com sucesso. Tamanho: " + (bytes ? bytes.length : 0));

        // =========================================================
        // 3️⃣ MONTA REQUISIÇÃO PARA UPLOAD BINÁRIO
        // =========================================================
        var clientService = fluigAPI.getAuthorizeClientService();
        var requestData = {
            companyId: getValue("WKCompany"),
            serviceCode: "testeOAuth", // nome do serviço OAuth cadastrado no Fluig
            endpoint: "/v1/envelopes/" + envelopeId + "/documents",
            method: "POST",
            timeoutService: "60000",
            headers: {
                "Authorization": "Bearer " + accessToken,
                "X-Organization": organizationId,
                "Accept": "application/json"
            },
            params: [
                {
                    name: "file",
                    fileName: fileName,
                    contentType: "application/pdf",
                    content: bytes
                }
            ]
        };

        log.info("[ds_UploadDocumento] --- REQUEST MONTADO ---");
        log.dir(requestData);

        // =========================================================
        // 4️⃣ EXECUTA REQUISIÇÃO VIA CLIENT SERVICE
        // =========================================================
        var result = clientService.invoke(JSON.stringify(requestData));

        if (result == null || result.getResult() == null) {
            log.error("[ds_UploadDocumento] Nenhum retorno do clientService.invoke().");
            dataset.addRow(["ERROR", "Nenhum retorno do serviço.", ""]);
            return dataset;
        }

        var httpStatus = result.getHttpStatusResult();
        var response = result.getResult();

        log.info("[ds_UploadDocumento] --- RESULTADO ---");
        log.info("HTTP Status: " + httpStatus);
        log.info("Resposta: " + response);
        log.info("-----------------------------------------");

        // =========================================================
        // 5️⃣ TRATAMENTO DO RETORNO
        // =========================================================
        if (httpStatus == 200 || httpStatus == 201) {
            dataset.addRow(["SUCCESS", "Upload binário realizado com sucesso!", response]);
        } else {
            dataset.addRow(["ERROR", "Falha no upload. HTTP " + httpStatus, response]);
        }

    } catch (e) {
        log.error("[ds_UploadDocumento] Erro capturado: " + e);
        dataset.addRow(["ERROR", e.message || e.toString(), e.stack || ""]);
    }

    log.info("=== FIM DO DATASET ds_UploadDocumento ===");
    return dataset;
}


// =========================================================
// 🔎 Função auxiliar para pegar constraint
// =========================================================
function findConstraint(fieldName, constraints) {
    if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == fieldName) {
                return constraints[i].initialValue;
            }
        }
    }
    return null;
}
```

---

## Resposta #7

**Gustavo Soares** (@Gustavo_Soares) — 27/10/2025, 14:05

```javascript
function servicetask114(attempt, message) {
    log.info("=== servicetask114: Iniciada ===");
    try {
        gerarFluxoCompletoAssinatura();
    } catch (e) {
        log.error("Erro ao executar servicetask114: " + e);
        throw e;
    }
}

function gerarFluxoCompletoAssinatura() {
    log.info("=== INÍCIO FLUXO COMPLETO ASSINATURA ===");

    // === TOKEN ===
    var dsToken = DatasetFactory.getDataset("ds_GerarToken", null, null, null);
    if (!dsToken || dsToken.rowsCount === 0) throw "ds_GerarToken não retornou resultado.";

    var token = dsToken.getValue(0, "access_token") || dsToken.getValue(0, "token");
    if (!token || token.trim() === "") throw "Token não retornado corretamente.";
    hAPI.setCardValue("token", token);
    log.info("Token gerado com sucesso.");

    // === ORGANIZAÇÃO ===
    var cToken = DatasetFactory.createConstraint("token", token, token, ConstraintType.MUST);
    var dsOrg = DatasetFactory.getDataset("ds_ListarOrganizacao", null, [cToken], null);
    if (!dsOrg || dsOrg.rowsCount === 0) throw "ds_ListarOrganizacao não retornou resultado.";

    var organizationId = dsOrg.getValue(0, "organizationId") || dsOrg.getValue(0, "id");
    if (!organizationId) throw "Organization ID não retornado.";
    hAPI.setCardValue("organizationId", organizationId);
    log.info("Organização identificada: " + organizationId);

    // === ENVELOPE ===
    var dsEnvelope = DatasetFactory.getDataset("ds_CriarEnvelope", null, [cToken], null);
    if (!dsEnvelope || dsEnvelope.rowsCount === 0) throw "ds_CriarEnvelope não retornou resultado.";

    var envelopeId = dsEnvelope.getValue(0, "id");
    if (!envelopeId) throw "Envelope ID não retornado.";
    hAPI.setCardValue("envelopeId", envelopeId);
    log.info("Envelope criado: " + envelopeId);

    // === DOCUMENTO ===
    var anexos = hAPI.listAttachments();
    if (anexos.size() === 0) throw "Nenhum anexo encontrado no formulário.";

    var arquivo = anexos.get(0);
    var documentId = arquivo.getDocumentId();
    var documentVersion = arquivo.getVersion();
    var fileName = arquivo.getDocumentDescription();

    log.info("Documento selecionado: " + fileName + " (ID: " + documentId + " v" + documentVersion + ")");

    var cEnvelope = DatasetFactory.createConstraint("envelopeId", envelopeId, envelopeId, ConstraintType.MUST);
    var cDocumentId = DatasetFactory.createConstraint("documentId", documentId, documentId, ConstraintType.MUST);
    var cDocumentVersion = DatasetFactory.createConstraint("documentVersion", documentVersion, documentVersion, ConstraintType.MUST);
    var cFileName = DatasetFactory.createConstraint("fileName", fileName, fileName, ConstraintType.MUST);
    var cOrg = DatasetFactory.createConstraint("organizationId", organizationId, organizationId, ConstraintType.MUST);

    var dsUpload = DatasetFactory.getDataset("ds_UploadDocumento", null, [cToken, cEnvelope, cDocumentId, cDocumentVersion, cFileName, cOrg], null);
    if (!dsUpload || dsUpload.rowsCount === 0) throw "ds_UploadDocumento não retornou resultado.";

    var statusUpload = dsUpload.getValue(0, "status");
    var msgUpload = dsUpload.getValue(0, "message");

    if (statusUpload !== "SUCCESS")
        throw "Erro ao enviar documento: " + msgUpload;
    log.info("Documento anexado ao envelope com sucesso.");

    // === DESTINATÁRIO ===
    var email = (hAPI.getCardValue("txtEmail") || "").trim();
    var nome = (hAPI.getCardValue("txtNome") || "").trim();

    if (email === "") throw "Campo 'txtEmail' está vazio no formulário.";
    if (nome === "") throw "Campo 'txtNome' está vazio no formulário.";

    var cEmail = DatasetFactory.createConstraint("txtEmail", email, email, ConstraintType.MUST);
    var cNome = DatasetFactory.createConstraint("txtNome", nome, nome, ConstraintType.MUST);
    var dsDest = DatasetFactory.getDataset("ds_CriarDestinatario", null, [cToken, cEnvelope, cEmail, cNome], null);
    if (!dsDest || dsDest.rowsCount === 0) throw "ds_CriarDestinatario não retornou resultado.";

    log.info("Destinatário criado: " + nome + " (" + email + ")");

    // === ENVIAR ENVELOPE ===
    var dsEnviar = DatasetFactory.getDataset("ds_EnviarEnvelope", null, [cToken, cEnvelope], null);
    if (!dsEnviar || dsEnviar.rowsCount === 0) throw "ds_EnviarEnvelope não retornou resultado.";
    log.info("Envelope enviado para assinatura.");

    log.info("Fluxo finalizado com sucesso.");
}
```

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/10/2025, 17:17

[@Gustavo\_Soares](/u/gustavo_soares) , assim como comentei naquele post indicado, os métodos padrões do Fluig não trabalham com multipart/form-data. Nessa situação temos que enviar manualmente a requisição.

Segue um exemplo de como faço:

```javascript
/**
 * Efetua a requisição POST ao Gescon enviando o arquivo
 *
 * @param {string} codigoContrato
 * @param {number} idComprometimento
 * @param {number} tipoArquivo
 * @param {string} descritivo
 * @param {com.fluig.sdk.api.document.DocumentVO} arquivo
 * @returns {boolean}
 * @throws {string}
 */
function sendAttachmentToGescon(codigoContrato, idComprometimento, tipoArquivo, descritivo, arquivo) {
    // eu passo pra essa função o arquivo
    // var arquivo = fluigAPI.getDocumentService().getActive(parseInt(idArquivo));

    // Nessa função eu chamo um dataset com as configurações do serviço
    var gesconConfig = getGesconRestConfig();
    var pathSeparator = java.io.File.separator;

    // Pego o path do arquivo pra carregar na requisição
    var filePath = fluigAPI.getTenantService().getTenantData(["dirDefault"]).get("dirDefault")
        + pathSeparator
        + "public"
        + pathSeparator
        + arquivo.getDocumentId()
        + pathSeparator
        + arquivo.getVersion()
        + pathSeparator
        + arquivo.getPhisicalFile()
    ;

    var entityBuilder = org.apache.http.entity.mime.MultipartEntityBuilder.create();
    entityBuilder.setMode(org.apache.http.entity.mime.HttpMultipartMode.BROWSER_COMPATIBLE);

    // Aqui são os campos "comuns"
    entityBuilder.addTextBody("idComprometimento", idComprometimento);
    entityBuilder.addTextBody("tipoId", tipoArquivo);

    // Esse campo tem acentuação no conteúdo, então coloco o tipo do conteúdo com utf-8
    entityBuilder.addTextBody("descritivo", descritivo, org.apache.http.entity.ContentType.create("text/plain", "UTF-8"));

    // Esse é o campo com o binário do arquivo
    entityBuilder.addBinaryBody(
        "arquivo",
        new java.io.File(filePath),
        org.apache.http.entity.ContentType.DEFAULT_BINARY,
        arquivo.getPhisicalFile()
    );

    var httpPost = new org.apache.http.client.methods.HttpPost(
        gesconConfig.domain
        + "/contratos/"
        + codigoContrato
        + "/comprometimentos/"
        + idComprometimento
        + "/anexos"
    );
    httpPost.setHeader("Authorization", gesconConfig.token);
    httpPost.setEntity(entityBuilder.build());

    var httpClient = org.apache.http.impl.client.HttpClients.createDefault();

    // Esse serviço retornou um JSON, então converti a resposta
    var response = JSON.parse( org.apache.http.util.EntityUtils.toString(httpClient.execute(httpPost).getEntity()));
    httpClient.close();

    return response.success == true && response.data == "OK";
}
```

---
