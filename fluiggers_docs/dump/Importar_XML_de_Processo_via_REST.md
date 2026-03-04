# Importar XML de Processo via REST

> **Fonte:** [https://fluiggers.com.br/t/importar-xml-de-processo-via-rest/3353](https://fluiggers.com.br/t/importar-xml-de-processo-via-rest/3353)
> **Categoria:** API`s Fluig
> **Criado em:** 23/07/2025, 15:10
> **Visualizações:** 115 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Rafael Rubin** (@rafaelrubin) — 23/07/2025, 15:10

Estou montando um módulo para geração automática de processos, para isso estou usando algumas APIs REST como:

-   Criação de Processo
-   Liberação de Versão

entre outros

-   Estou tentando, via dataset, importar um modelo de XML através da API:
    /process-management/api/v2/processes//import/xml

Através do consumo do componente fluigAPI.getAuthorizeClientService(), conforme abaixo:

var clientService = fluigAPI.getAuthorizeClientService();

```
var data 		= {
					   companyId: 		""+ getValue("WKCompany"),
					   serviceCode: 	"Fluig_REST", //nome do serviço cadastrado no fluig
					   endpoint: 		"/process-management/api/v2/processes/"+cProcessId+"/import/xml",
					   method: 			"POST",
					   timeoutService: 	"600",  //segundos
					   options : {
				             encoding : "UTF-8",
				             mediaType: "application/xml"
				       },
				       headers: {
				    	   acceptEncoding: 	"gzip, deflate, br",
				    	   ContentType: 	"application/xml;charset=UTF-8",
				       },
				       params: cWorkflow
					   };


	var cReq = JSON.stringify(data);
	var response 		= clientService.invoke(cReq+'');
```

Onde cWorkflow é o arquivo XML do processo. A requisição por meio do POSTMAN funciona a contento, porém é retornado o erro abaixo na requisição via Dataset:

2025-07-23 14:59:45,542 ERROR \[org.jboss.as.ejb3.invocation\] (default task-11) WFLYEJB0034: EJB Invocation failed on component sdk/AuthorizeClient for method public abstract
com.fluig.sdk.api.authorizeclient.AuthorizeClientSdkServiceVO com.fluig.sdk.service.AuthorizeClientSdkService.invoke(java.lang.String) throws com.fluig.sdk.api.common.SDKException:
javax.ejb.EJBException: java.lang.ClassCastException: class java.lang.String cannot be cast to class java.util.Map (java.lang.String and java.util.Map are in module java.base of loader ‘bootstrap’)

O XML base busquei de um processo padrão do Fluig (já montado) e salvei como string, sem qualquer tratamento adicional. Alguém já passou por situação parecida ou possui algum exemplo para compartilhar?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/07/2025, 10:57 | ❤️ 1

O problema que você está tendo é que a propriedade `params` deve ser um Map, mas você está passando uma string (que é o XML).

No caso a `params` pega o objeto JS, que deve ser sempre campo:valor, `{ field1: "valor1", field2: "valor2" }`, e o converte num Map. É pensado em JSON mais simples.

No caso você quer passar como string, então ao invés de usar a propriedade params use `strParams`.

```javascript
var data = {
	companyId: "" + getValue("WKCompany"),
	serviceCode: "Fluig_REST", //nome do serviço cadastrado no fluig
	endpoint: "/process-management/api/v2/processes/" + cProcessId + "/import/xml",
	method: "POST",
	timeoutService: "600",  //segundos
	options: {
		encoding: "UTF-8",
		mediaType: "application/xml"
	},
	headers: {
		acceptEncoding: "gzip, deflate, br",
		ContentType: "application/xml;charset=UTF-8",
	},
	strParams: cWorkflow
};
```

Na documentação [Autorização para client de Serviços REST](https://tdn.totvs.com/pages/viewpage.action?pageId=239041233) tem mais exemplos.

Também é muito útil para passar JSON mais complexos.

---

## Resposta #2

**Rafael Rubin** (@rafaelrubin) — 30/07/2025, 11:32

Era isso mesmo. Troquei para strParams e passou a consumir. Agora estou brigando com a API pra validar o formato. Mas agora está lendo. Obrigado!

---
