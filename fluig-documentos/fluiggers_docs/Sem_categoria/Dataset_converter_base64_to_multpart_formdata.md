# Dataset converter base64 to multpart/formdata

> **Fonte:** [https://fluiggers.com.br/t/dataset-converter-base64-to-multpart-formdata/1652](https://fluiggers.com.br/t/dataset-converter-base64-to-multpart-formdata/1652)
> **Categoria:** Sem categoria
> **Criado em:** 22/02/2023, 15:49
> **Visualizações:** 666 | **Likes:** 3 | **Respostas:** 4

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 22/02/2023, 15:49

Como converter uma string base64 em multpart/formdata em um dataset?

Segue meu dataset

```auto
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("iddocument");
    var pdf;
    if (constraints != null && constraints.length) {
		for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "PDF"){
                pdf = constraints[i].initialValue;
            }
        }
    }
    try {

        // converter a string base64 em um objeto Blob
        var fileContent = Packages.javax.xml.bind.DatatypeConverter.parseBase64Binary(pdf);
        // criar um novo objeto FormData

        var byteArrayPart = new Packages.org.apache.commons.httpclient.methods.multipart.ByteArrayPartSource("documentoparaassinar.pdf", fileContent);
        var filePart = new Packages.org.apache.commons.httpclient.methods.multipart.FilePart("file", byteArrayPart);
        var data = {
            companyId : '01',                                       //Codigo da empresa no fluig cadastrado no WCMADMIN
            serviceCode : 'ADOBESIGN',                               //Nome dado ao serviço no painel de controle
            endpoint : '/transientDocuments',                       //Endpoint do serviço cadastrado no painelo de controle
            method : 'POST',
            timeoutService: '100',
            contentType: "multipart/form-data",
            params : filePart,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        var clientService = fluigAPI.getAuthorizeClientService();
        var vo = clientService.invoke(JSONUtil.toJSON(data));

        dataset.addRow([vo]);//JSON.parse(vo)["transientDocumentId"]
    } catch (error) {
        var mensagem = "Mensagem: " + error.message;
        var linha = error.lineNumber;
        if(linha != undefined && linha != null) {
            mensagem += " | Linha: " + linha;
        }
        dataset.addRow([mensagem]);
    }
    return dataset;
}
```

segue o erro retornado pela adobe

![image](https://fluiggers.com.br/uploads/default/original/1X/1b226c861bd3f31c2971486390e20b8421f906c5.png)

Se alguem puder ajudar

---

## Resposta #1

**Rafael Rubin** (@rafaelrubin) — 18/08/2025, 19:21

Estou com problema semelhante, ao tentar usar a API padrão do Fluig /ecm-forms/api/v2/cardindex. Conseguiu evoluir?

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 19/08/2025, 09:27

Bom dia,

Explica o que vce precisa?
Já evoluimos bastante depois desse epsodio.

---

## Resposta #3

**Rafael Rubin** (@rafaelrubin) — 19/08/2025, 09:36 | ❤️ 1

Vou replicar a dúvida que coloquei em outro fórum. Não estou sabendo como encapsular o file na requisição multipart/formdata:

Preciso consumir uma API Rest do próprio Fluig (/ecm-forms/api/v2/cardindex) para publicar um formulário. Gostaria de fazer isso por meio de dataset. Já tenho o arquivo .zip em base64, mas o componente não entende o conteúdo. Segue sintaxe:

//cBase64 = Arquivo em Base64

// converter a string base64 em um objeto Blob
var fileContent = Packages.javax.xml.bind.DatatypeConverter.parseBase64Binary(cBase64);

// criar um novo objeto FormData
var byteArrayPart = new Packages.org.apache.commons.httpclient.methods.multipart.ByteArrayPartSource(cForm+“.zip”, fileContent);

var filePart = new Packages.org.apache.commons.httpclient.methods.multipart.FilePart(“file”, byteArrayPart);

var clientService = fluigAPI.getAuthorizeClientService();

var data = {
companyId: “”+ getValue(“WKCompany”),
serviceCode: “Fluig\_REST”, //nome do serviço cadastrado no fluig
endpoint: “/ecm-forms/api/v2/cardindex”,
method: “POST”,
timeoutService: “600”, //segundos
contentType: “multipart/form-data”,
options : {
encoding : “UTF-8”,
mediaType: “application/json”,
},
headers: {
accept: “*/*”,
acceptEncoding: “gzip, deflate, br”,
ContentType: “multipart/form-data”
},
params: {
mainFile: cForm+‘.html’,
formName: cForm+‘’,
parentId: ‘4369’,
descriptorField: ‘nome’,
persistenceType: ‘1’,
datasetName: cForm+‘’,
file: filePart
}

```auto
};
```

var response = clientService.invoke(JSONUtil.toJSON(data));

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 19/08/2025, 09:40 | ❤️ 1

Já sei o que você quer

```javascript
function afterProcessCreate(processId){
	/**
	 * Aqui temos o json com os assinates e o nome do documento para assinatura.
	 *
	 */
	var A = JSON.parse( String( hAPI.getCardValue("jassinantes") ) );

	log.info("ASSINATURA.AFTERPROCESSCREATE.JS");

	/**
	 * Aqui começa o envio do arquivo para assinatura ja na plataforma TAE
	 * O documento deve ser anexado no processo PAI com o nome "Documento para assinar" caso contrario ele não sobe para o TAE
	 * O numero do fluig deve ser enviado ao campo NUMFLUIG para compor o nome do documento no TAE
	**/

	var attachments = hAPI.listAttachments();
    var hasAttachment = A.Filename;
	log.info(hasAttachment+"10");
	hAPI.setCardValue("NUMFLUIG",processId);
    for (var i = 0; i < attachments.size(); i++) {
        var attachment = attachments.get(i);
        if(attachment.getDocumentDescription()==hasAttachment){
            var documentId = attachment.getDocumentId(); // ID do documento
            var documentService = fluigAPI.getDocumentService();
            var urlToDownload = documentService.getDownloadURL(documentId);
            var phisicalFile = documentService.getActive(documentId).getPhisicalFile();
            hAPI.setCardValue("urlDocument",urlToDownload);
        }
    }
	log.info("TAE Linha apos o for");
	var dirDefault = fluigAPI.getTenantService().getTenantData(["dirDefault"]).get("dirDefault");
	log.info("TAE Linha apos o dirDefault");
	try {
		//Get token tae
		var token = DatasetFactory.getDataset("GET_TOKEN_TAE", null, null, null);

		// Criação da URL da API
		var url = new java.net.URL(token.getValue(0, 'URL')+"/documents/v1/envelopes/upload");
		var connection = url.openConnection();

		log.info("TAE getToken");
		// Configuração da conexão
		connection.setRequestMethod("POST");
		connection.setUseCaches(false);
		connection.setDoOutput(true);
		connection.setRequestProperty("Authorization", "Bearer " + token.getValue(0, 'TOKEN'));

		var boundary = java.util.UUID.randomUUID().toString();
		connection.setRequestProperty("Content-Type", "multipart/form-data; boundary="+boundary);

		// Criação do corpo da requisição
		var outputStream = connection.getOutputStream();
		var writer = new java.io.PrintWriter(new java.io.OutputStreamWriter(outputStream, "UTF-8"), true);

		// Adiciona a string [NomeEnvelope] ao corpo da requisição
		writer.append("--" + boundary).append("\r\n");
		writer.append("Content-Disposition: form-data; name=\"NomeEnvelope\"").append("\r\n");
		writer.append("Content-Type: text/plain; charset=UTF-8").append("\r\n");
		writer.append("\r\n");
		writer.append("Fluig - "+processId + " - " + phisicalFile).append("\r\n");
		writer.flush();

		log.info(dirDefault + "/public/wdk-data/" + documentId + "/1000/" + phisicalFile);

		// Adiciona o arquivo [Envelope] ao corpo da requisição
		var file = new java.io.File(dirDefault + "/public/" + documentId + "/1000/" + phisicalFile);
		var fileName = file.getName();
		log.info(fileName);
        writer.append("--" + boundary).append("\r\n");
        writer.append("Content-Disposition: form-data; name=\"Envelope\"; filename=\"" + fileName + "\"").append("\r\n");
        writer.append("Content-Type: " + connection.guessContentTypeFromName(fileName)).append("\r\n");
        writer.append("Content-Transfer-Encoding: binary").append("\r\n");
        writer.append("\r\n");
        writer.flush();

        var fileInputStream  = new java.io.FileInputStream(file);
        var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096);
        var bytesRead = -1;
        while ((bytesRead = fileInputStream .read(buffer)) != -1) {
            outputStream.write(buffer, 0, bytesRead);
        }

        outputStream.flush();
        fileInputStream .close();
        writer.append("\r\n");
        writer.flush();

		// Finaliza o corpo da requisição
		writer.flush();
		writer.append("--" + boundary + "--").append("\r\n");
		writer.close();

		// Leitura da resposta da API
		var responseCode = connection.getResponseCode();

		// Leitura da mensagem de erro em caso de resposta diferente de 200
		if (responseCode != 200) {
			var errorStream = connection.getErrorStream();
			if (errorStream != null) {
				var errorReader = new java.io.BufferedReader(new java.io.InputStreamReader(errorStream));
				var errorLine;
				var errorResponse = new java.lang.StringBuilder();
				while ((errorLine = errorReader.readLine()) !== null) {
					errorResponse.append(errorLine);
				}
				errorReader.close();
				try {
					// Tentativa de fazer o parse da string JSON para um objeto JavaScript
					var parsedError = JSON.parse(errorResponse.toString());
					var errorMessage = parsedError.errors;
					var em;
					if (errorMessage) {
						for (var i = 0; i < errorMessage.length; i++) {
							em+=errorMessage[i]+"<br>";
						}
					}
					throw em;
				} catch (ex) {
					throw ex;
				}

			}else{
				throw "Houve um erro de status " + responseCode + " Sem retorno";
			}
		} else {
			// Leitura da resposta da API em caso de sucesso
			var reader = new java.io.BufferedReader(new java.io.InputStreamReader(connection.getInputStream()));
			var line;
			var response = new java.lang.StringBuilder();
			while ((line = reader.readLine()) !== null) {
				response.append(line);
			}
			reader.close();
			var result = JSON.parse(response.toString());
			// Valordesejado no item data
			hAPI.setCardValue("idDocument", result['data']);
		}
	} catch (ex) {
		log.error(ex)
		throw ex.toString();
	} finally {
		/**
		 * Aqui temos a função que espera receber no campo jasinates um json contendo a lista de assinates que vai
		 * ser utilizada no processo de assinatura.
		 * Exemplo de um json:
		 * 	[
		 *		{
		 *			"nome": "daniel do bom conselho sales",
		 *			"email": "danielbomconselho@gmail.com",
		 *			"cpf": "013.629.046-94"
		 *		}
		 *	]
		 * Ao receber essa lista preenchemos a tabela pai x filho com cada um dos assinates.
		 * Vale lembrar que os demais dados da assinatura devem ser parametrizados na tela antes do envio a assinatura.
		**/

		hAPI.setCardValue("WKNumState","0");
		log.info("TAE AfterProcessCreate linha10 - " + String( hAPI.getCardValue("jassinantes") ) );
		log.info("TAE AfterProcessCreate linha11 - " + typeof A );
		if(typeof A.Assinantes[0].nome != "undefined"  ){
			log.info("TAE AfterProcessCreate linha11 - "+A.Assinantes.length);
			var childData = new java.util.HashMap();
			for(i=0;i<A.Assinantes.length;i++){
				log.info("TAE AfterProcessCreate linha14");
				childData.put("emailAssinatura", A.Assinantes[i].email);
				childData.put("nomeAssinatura", A.Assinantes[i].nome);
				childData.put("identificaAssinatura", "1");
				childData.put("indice", "1");
				childData.put("cpfAssinatura", A.Assinantes[i].cpf);
				hAPI.addCardChild("tb_assinatura", childData);
				log.info("TAE AfterProcessCreate linha15");
			}
		}
		//Fim da criação dos assinates no fluig
	}

}
```

Da uma olha uso essa função para subir o documento para o tae da totvs. tem exatamente o que precisa. So chamar se não entender

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/08/2025, 09:59

[@Daniel\_Sales](/u/daniel_sales), você fez do jeito mais raiz possível hein, hehehe. Ficou legal!

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 19/08/2025, 10:04

kkkkk
Isso foi ajuda do [@sergio.machado](/u/sergio.machado) eu não dei conta por outros meios, ai ele entrou em cena

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/08/2025, 10:04 | ❤️ 1

[@rafaelrubin](/u/rafaelrubin) , de jeito simples: esses métodos “padrões” do Fluig não fazem requisições `multipart/form-data`. Eles servem basicamente só pra trocar informações json.

Qualquer coisa que fuja desse padrão de enviar “texto”/json precisa ser feita manualmente.

O jeito mais fácil é ter o arquivo localmente no Fluig, aí você já o pega e envia.

Se você só tem o Base64 aí terá que pesquisar como converter ele pra um formato que o form-data receba. Não parei pra ver se do jeito que fez a conversão funciona, pois sempre que fiz algum envio eu tinha o arquivo salvo no volume do Fluig.

Segue um exemplo no qual chamo um endpoint `multipart/form-data` com autenticação Bearer Token.

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
    var gesconConfig = getGesconRestConfig();

    var filePath = fluigAPI.getTenantService().getTenantData(["dirDefault"]).get("dirDefault")
        + java.io.File.separator
        + "public"
        + java.io.File.separator
        + arquivo.getDocumentId()
        + java.io.File.separator
        + arquivo.getVersion()
        + java.io.File.separator
        + arquivo.getPhisicalFile()
    ;

    var entityBuilder = org.apache.http.entity.mime.MultipartEntityBuilder.create();
    entityBuilder.setMode(org.apache.http.entity.mime.HttpMultipartMode.BROWSER_COMPATIBLE);

    entityBuilder.addTextBody("idComprometimento", idComprometimento);
    entityBuilder.addTextBody("tipoId", tipoArquivo);
    entityBuilder.addTextBody("descritivo", descritivo, org.apache.http.entity.ContentType.create("text/plain", "UTF-8"));
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
    var response = JSON.parse(org.apache.http.util.EntityUtils.toString(httpClient.execute(httpPost).getEntity()));
    httpClient.close();

    return response.success == true && response.data == "OK";
}
```

---

## Resposta #8

**Rafael Rubin** (@rafaelrubin) — 13/10/2025, 09:50

Bom dia.

Infelzimente não consegui reproduzir a requisição neste modelo. No fim, acabei deixando de lado essa abordagem e passei a considerar a montagem dos formulários considerando o novo padrão do Fluig 2.0.

Agradeço o apoio de todos

---

## Resposta #9

**Gustavo Soares** (@Gustavo_Soares) — 24/10/2025, 17:49

Olá, boa tarde, também não consegui realizar também, voce conseguiu reproduzir na versão voyager? se sim, como? Agradeço desde já

---

## Resposta #10

**Rafael Rubin** (@rafaelrubin) — 25/10/2025, 07:48

Não prossegui. A voyager acabou suprindo minha necessidade pois minha intenção era criar um wizard de campos de formulário a partir de um modelo XML. Com o novo gestor de processos da 2.0, a montagem do formulário ficou mais facilitada.

---
