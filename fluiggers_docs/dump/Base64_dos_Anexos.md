# Base64 dos Anexos

> **Fonte:** [https://fluiggers.com.br/t/base64-dos-anexos/542](https://fluiggers.com.br/t/base64-dos-anexos/542)
> **Categoria:** Formulários
> **Criado em:** 30/06/2021, 13:14
> **Visualizações:** 2353 | **Likes:** 3 | **Respostas:** 7

---

## Pergunta original

**Marcella Tsangos** (@marcella_tsangos) — 30/06/2021, 13:14

Boa tarde, pessoal.

Existe alguma forma de obter a base64 dos anexos do fluig?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 30/06/2021, 16:27 | ❤️ 1

Boa tarde,

Você pode consultar a API que te devolve a URL do arquivo e depois consultar ela trazendo o base64. Caso ninguém sugira algo melhor e mais facil.

Algo assim:

```javascript
function createDataset(fields, constraints, sortFields) {

	try {

		var newDataset = DatasetBuilder.newDataset();
		newDataset.addColumn("STATUS");
		newDataset.addColumn("MSG");

		var URLDOCUMENT = "";
		var BASE64 = "";

		if(constraints != null){
			/**CONTROLE DE FILTROS*/
		    for (i = 0; i < constraints.length; i++){
				if (constraints[i].fieldName == "URLDOCUMENT"){
					URLDOCUMENT = new java.lang.String(constraints[i].initialValue);
				}

	      	}
		}
		log.info("URLDOCUMENT ->> "+URLDOCUMENT);

		URLDOCUMENT = URLDOCUMENT.split("/volume")[1];
		URLDOCUMENT = "/volume" + URLDOCUMENT;

		var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
            companyId 		: '01',
            serviceCode 	: 'FLUIG_API',							//'CreateCardAPI',
            endpoint 		: URLDOCUMENT,							//'/api/public/2.0/cards/create/',
            method 			: 'GET', 							    // 'delete', 'patch', 'post', 'get'
            timeoutService	: '100',								// segundos
            options: {
	        	encoding: 'ISO-8859-1',
		        mediaType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',//'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		        useSSL: true
		      },
		      headers: {
		        	'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

		      	}

        }
        var vo = clientService.invoke(JSON.stringify(data));

        if(vo.getResult()== null || vo.getResult().isEmpty()){
        	newDataset.addRow(new Array(999, "Retorno está vazio"));
        }else{
        	var statusHtml = vo.getHttpStatusResult();
        	if (statusHtml == 200) {
        		var stringValue =  vo.getResult();
				if (stringValue.length() == 1) { stringValue = "0" + stringValue; }
				var str = new java.lang.String(stringValue); // Encode
			    var filecontent = java.util.Base64.getEncoder().encodeToString(str.getBytes("ISO-8859-1"));

			    newDataset.addRow(new Array(statusHtml, filecontent));
        	} else {
        		newDataset.addRow(new Array(statusHtml, vo.getResult()));
        	}


        }

	} catch (e) {
		newDataset.addRow(new Array(998,"Catch :("+e.message+")"));
	} finally {

	}
	return newDataset;
}
```

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2021, 09:17 | ❤️ 2

Dá pra facilitar um pouco usando os serviços SOAP.

```javascript
// Precisa cadastrar o serviço no Fluig
var ECMDocumentServiceProvider = ServiceManager.getServiceInstance("ECMDocumentService");
var ECMDocumentServiceLocator = ECMDocumentServiceProvider.instantiate("com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService");
var documentService = ECMDocumentServiceLocator.getDocumentServicePort();

var documentByteArray = documentService.getDocumentContent(
    fluigUser.username,
    fluigUser.password,
    1,
    documentId,
    getValue("WKUser"),
    documentVersion,
    documentDescription
);

var documentBase64String = java.util.Base64.getEncoder().encodeToString(documentByteArray);
```

---

## Resposta #3

**Marcella Tsangos** (@marcella_tsangos) — 01/07/2021, 11:14

Obrigada, Bruno. Eu consegui exatamente dessa forma. Mas agora não é mais base64, tem que ser do tipo blob :roll_eyes:

Tentei usar o atob() em evento de processo, mas não funcionou. Você saberia se alguma função que faça essa conversão?

---

## Resposta #4

**Marcella Tsangos** (@marcella_tsangos) — 01/07/2021, 11:15

Obrigada, Willian. Não tive oportunidade de testar seu código. Acessando via SOAP realmente foi mais simples.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2021, 11:24

Ainda não precisei de algo assim, então não pesquisei. No máximo já usamos o byte\[\] num InputStream para conseguir fazer um chuncked post pra um WS.

A intenção é salvar em um SQL? Fiz uma pesquisa rápida no Google e a maioria das resposta sempre envolvia usar as bibliotecas de sql pra isso.

---

## Resposta #6

**Marcella Tsangos** (@marcella_tsangos) — 01/07/2021, 13:45

Você tem como mostrar o exemplo?

A intenção é passar para um WS.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2021, 15:17

Felizmente na época o WS tinha um tutorial ensinando a fazer o POST com o arquivo no Body e em Java.

No nosso caso a gente autenticava no WS pra pegar o token de autenticação e ele vai como queryString na URL.

```javascript
// Usuário e senha do Fluig
var fluigUser = {
    username: "user",
    password: "user"
};

// Informações do arquivo que precisam ser conseguidas por um dataset ou outra forma
var documentId = 0;
var documentVersion = "1000";
var documentDescription = "arquivo.pdf";
var documentMimeType = "application/pdf";

var url = "url do ws";

// Recupera o documento em byte[]
var document = documentService.getDocumentContent(
    fluigUser.username,
    fluigUser.password,
    1,
    documentId,
    getValue("WKUser"),
    documentVersion,
    documentDescription
);

var reqEntity = new org.apache.http.entity.InputStreamEntity(
    java.io.ByteArrayInputStream(document),
    -1,
    org.apache.http.entity.ContentType.APPLICATION_OCTET_STREAM
);
reqEntity.setContentType(documentMimeType); // No nosso caso não precisamos passar isso
reqEntity.setChunked(true);

var	client = org.apache.http.impl.client.HttpClients.createDefault();
var post = new org.apache.http.client.methods.HttpPost(url);
post.addHeader("Content-type", documentMimeType);
post.addHeader("Content-Disposition", "attachment;filename=" + documentDescription); // Obrigatoriedade do nosso WS

post.setEntity(reqEntity);

var responseAPi = client.execute(post);

// resposta do WS em JSON
var responseJson = JSON.parse(org.apache.http.util.EntityUtils.toString(responseAPi.getEntity()));
```

---

## Resposta #8

**Valen** (@Valen_J) — 17/07/2021, 11:32

Bom dia. Tenho um processo que é utilizado o simplestartprocess para uma integração com o CRM na solicitação é enviado um anexo, porém não estou conseguindo gravar o anexo na solicitação

![Captura de tela 2021-06-30 104648](https://fluiggers.com.br/uploads/default/optimized/1X/1b193a129af22c6a43be69ec54762a1d35a7fbe0_2_690x139.png)

Sobre o formato dos arquivos ele está armazenado no SQL em formato binário. No serviço transformamos em uma string de base 64 para a transmição pelo protocolo HTTP.

---

## Resposta #9

**Daniel Cabral Santos** (@daniel.cabral) — 21/07/2021, 08:32

Mostra pra gente o envelope que você manda no simplestartprocess?

---

## Resposta #10

**Daniel Cabral Santos** (@daniel.cabral) — 21/07/2021, 08:36

De toda forma, há um exemplo aqui: [Cliente externo sem usuário Fluig startar um processo e anexar documentos - #3 por Jonathan.Albuquerque](https://fluiggers.com.br/t/cliente-externo-sem-usuario-fluig-startar-um-processo-e-anexar-documentos/307/3)

---
