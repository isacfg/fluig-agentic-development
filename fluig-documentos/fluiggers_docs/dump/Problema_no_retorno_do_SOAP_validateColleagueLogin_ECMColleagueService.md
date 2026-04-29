# Problema no retorno do SOAP validateColleagueLogin ECMColleagueService

> **Fonte:** [https://fluiggers.com.br/t/problema-no-retorno-do-soap-validatecolleaguelogin-ecmcolleagueservice/563](https://fluiggers.com.br/t/problema-no-retorno-do-soap-validatecolleaguelogin-ecmcolleagueservice/563)
> **Categoria:** Widgets
> **Criado em:** 16/07/2021, 12:07
> **Visualizações:** 1241 | **Likes:** 2 | **Respostas:** 5

---

## Pergunta original

**Samuel ** (@SamuelBruing) — 16/07/2021, 12:07

Estou tentando usar um serviço SOAP mas o retorno está vindo errado. uso validateColleagueLogin do ECMColleagueService, passo os parâmetros errado propositalmente, para que me retorno que o login está incorreto ou não existe, mas sempre me retorna “ok”. Alguém sabe o que pode ser? (É um widget)

```javascript
$.ajax({
            url : '/WDGT_CatracaRefeitorio/resources/js/xmls/login.xml',
            async : false,
            type : "get",
            datatype : "xml",
            contentType: "text/xml; charset=utf-8",
            success : function(xml) {
                _xml = $(xml)
            }
        });

        console.log("xml0: ")
        console.log(_xml[0]);

        // Usar o metodo WCMAPI.Create para chamar o webservice
        WCMAPI.Create({
            url : "/webdesk/ECMColleagueService?wsdl",
            contentType : "text/xml",
            dataType : "xml",
            contentType: "text/xml; charset=utf-8",
            data : _xml[0],
            success : function(data) {
                console.log("data: ")
                console.log(data);
            }
        });
```
```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.foundation.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:validateColleagueLogin>
         <companyId>1</companyId>
         <colleagueId>adasd</colleagueId>
         <password>adasd</password>
      </ws:validateColleagueLogin>
   </soapenv:Body>
</soapenv:Envelope>```

Alguém sabe o que pode estar acontecendo?
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 14:17 | ❤️ 1

Boa tarde [@SamuelBruing](/u/samuelbruing) ,

Dessa forma que você fez tentei simular e deu erro pra mim também.

Fiz de uma forma diferente então para sanar seu problema, segue abaixo:

1.  Crie um serviço, conforme imagem abaixo:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/59231d19a247e8dbc477d3ac2d0fa9c005075222_2_690x242.png)

2.  Exporte o dataset abaixo:

[ECMColleagueService-validateColleagueLogin.js](https://fluiggers.com.br/uploads/short-url/ts1Gk5ITPCWlhXphkviOJJPTB8F.js) (5,1,KB)

3.  Consuma em qualquer parte do fluig ( Front ou back-end):

```auto
var filtro = []
	filtro.push(DatasetFactory.createConstraint('password', 'xxxxx', '', ConstraintType.MUST));
	filtro.push(DatasetFactory.createConstraint('colleagueId', 'yyyyyy', '', ConstraintType.MUST));
	var ds = DatasetFactory.getDataset('ECMColleagueService-validateColleagueLogin', null, filtro, null);
	console.log("ds",ds);
```

Acho que com isso já te resolve o problema.

---

## Resposta #2

**Samuel ** (@SamuelBruing) — 16/07/2021, 14:19

Opa, não estou conseguindo baixar o dataset, consegue disponibilizar o code dele?
mas desde já, valeu pela ajuda!!!

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 14:20

```auto
/**
@description Valida acesso
	@example
	var filtro = []
	filtro.push(DatasetFactory.createConstraint('password', 'xxxxx', '', ConstraintType.MUST));
	filtro.push(DatasetFactory.createConstraint('colleagueId', 'yyyyyy', '', ConstraintType.MUST));
	var ds = DatasetFactory.getDataset('ECMColleagueService-validateColleagueLogin', null, filtro, null);
	console.log("ds",ds);
*/

function createDataset(fields, constraints, sortFields) {
	try {
		log.log("####constraints#####1#####")
		log.dir(constraints)
		log.log("####constraints#####1#####")
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
	log.log("####constraints####2#####")
	log.dir(constraints)
	log.log("####constraints####2######")
	var serviceData = data(constraints);
	var params = serviceData.inputValues;
	var assigns = serviceData.inputAssignments;

	verifyConstraints(serviceData.inputValues, constraints);

	var serviceHelper = ServiceManager.getService(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getColleagueServicePort();
	var response = service.validateColleagueLogin(getParamValue(params.companyId, assigns.companyId), getParamValue(params.colleagueId, assigns.colleagueId),
		getParamValue(params.password, assigns.password));

	return response;
}

function defineStructure() {
		addColumn('response');
}

function onSync(lastSyncDate) {
	var serviceData = data();
	var synchronizedDataset = DatasetBuilder.newDataset();

	try {
		var resultDataset = processResult(callService());
		if (resultDataset != null) {
			var values = resultDataset.getValues();
			for (var i = 0; i < values.length; i++) {
				synchronizedDataset.addRow(values[i]);
			}
		}

	} catch(e) {
		log.info('Dataset synchronization error : ' + e.message);

	}
	return synchronizedDataset;
}

function verifyConstraints(params, constraints) {
	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			try {
				params[constraints[i].fieldName] = JSON.parse(constraints[i].initialValue);
			} catch(e) {
				params[constraints[i].fieldName] = constraints[i].initialValue;
			}
		}
	}
}

function processResult(result) {
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("response");
	dataset.addRow([result]);

	return dataset;
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	var params = data().inputValues;
verifyConstraints(params, constraints);

dataset.addColumn('error');
	dataset.addColumn('companyId');
	dataset.addColumn('password');
	dataset.addColumn('colleagueId');

	var companyId = isPrimitive(params.companyId) ? params.companyId : JSONUtil.toJSON(params.companyId);
	var password = isPrimitive(params.password) ? params.password : JSONUtil.toJSON(params.password);
	var colleagueId = isPrimitive(params.colleagueId) ? params.colleagueId : JSONUtil.toJSON(params.colleagueId);

	dataset.addRow([error.message, companyId, password, colleagueId]);

	return dataset;
}

function getParamValue(param, assignment) {
	if (assignment == 'VARIABLE') {
		return getValue(param);
	} else if (assignment == 'NULL') {
		return null;
	}
	return param;
}

function hasValue(value) {
	return value !== null && value !== undefined;
}

function isPrimitive(value) {
	return ((typeof value === 'string') || value.substring !== undefined) || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'undefined';
}


function getObjectFactory(serviceHelper) {
	var objectFactory = serviceHelper.instantiate("com.totvs.technology.ecm.foundation.ws.ObjectFactory");

	return objectFactory;
}


function data(constraints) {
	log.log("####constraints##########")
	log.dir(constraints)
	log.log("####constraints##########")
	var password = "";
	var colleagueId = "";
	for (i = 0; i < constraints.length; i++){
		if (constraints[i].fieldName == "password"){
			password = new java.lang.String(constraints[i].initialValue);
		}else if (constraints[i].fieldName == "colleagueId"){
			colleagueId = new java.lang.String(constraints[i].initialValue);
		}
	}
	return {
  "fluigService" : "ECMColleagueService",
  "operation" : "validateColleagueLogin",
  "soapService" : "ECMColleagueServiceService",
  "portType" : "ColleagueService",
  "locatorClass" : "com.totvs.technology.ecm.foundation.ws.ECMColleagueServiceService",
  "portTypeMethod" : "getColleagueServicePort",
  "parameters" : [ ],
  "inputValues" : {
    "companyId" : "WKCompany",
    "password" : password+"",
    "colleagueId" : colleagueId+""
  },
  "inputAssignments" : {
    "companyId" : "VARIABLE",
    "password" : "VALUE",
    "colleagueId" : "VALUE"
  },
  "outputValues" : { },
  "outputAssignments" : { },
  "extraParams" : {
    "enabled" : false
  }
}
}

 function stringToBoolean(param) {
	 if(typeof(param) === 'boolean') {
		 return param;
	 }
	 if (param == null || param === 'null') {
		 return false;
	 }
	 switch(param.toLowerCase().trim()) {
		 case 'true': case 'yes': case '1': return true;
		 case 'false': case 'no': case '0': case null: return false;
		 default: return Boolean(param);
	 }
}
```

---

## Resposta #4

**Samuel ** (@SamuelBruing) — 16/07/2021, 14:22

Showwwww vou testar e retorno!

---

## Resposta #5

**Samuel ** (@SamuelBruing) — 19/07/2021, 08:02

Opa Willian, testei aqui e obtive um erro. Verifiquei no log do fluig e foi esse aqui:

2021-07-19 07:50:54,563 ERROR \[com.totvs.technology.foundation.dataservice.service.WebServiceProvider\] (default task-327) Não foi possível iniciar a classe com.totvs.technology.ecm.foundation.ws.ECMColleagueServiceService do serviço ECMColleagueService: java.lang.InstantiationException: com.totvs.technology.ecm.foundation.ws.ECMColleagueServiceService

Sabe o que poderia ser? O retorno está sendo um objeto vazio

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 19/07/2021, 09:38

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/s/ecb155/48.png) SamuelBruing:
>
> > ECMColleagueService

Bom dia Samuel, seu serviço esta criado correto ECMColleagueService?
Você criou agora o seu serviço?

---

## Resposta #7

**Samuel ** (@SamuelBruing) — 19/07/2021, 10:04

![image](https://fluiggers.com.br/uploads/default/optimized/1X/ad46e040552131cd93baa26d2b30a4fab5389fe6_2_689x246.png)

![image](https://fluiggers.com.br/uploads/default/optimized/1X/9d72abad65b39190e1a5f68c698abf16dcdc57ee_2_690x303.png)

O serviço ja estava criado, preciso criar novamente?

---

## Resposta #8

**Willian Laynes** (@Willian_Laynes) — 19/07/2021, 10:22

O Problema de estar criado é que podem ter alterado o endereço de acesso da classe pelo serviço.

Faz o seguinte para nao travar outros desenvolvimentos. Cria o serviço “ECMColleagueService2”.

E altera no dataset essa linha

![image](https://fluiggers.com.br/uploads/default/original/1X/8ddd9363235a97c169786188d6528995ab0cb044.png)

coloca ECMColleagueService2

---

## Resposta #9

**Samuel ** (@SamuelBruing) — 19/07/2021, 10:46

Criei, mas continua vindo o objeto vazio… qual deveria ser o retorno correto?

---

## Resposta #10

**Samuel ** (@SamuelBruing) — 19/07/2021, 10:59

Verifiquei no log do serviço, e as requisições estão sendo feitas, mas o objeto vem vazio do retorno do dataset

---

## Resposta #11

**Willian Laynes** (@Willian_Laynes) — 19/07/2021, 11:12

Quando localiza retorna :

![image](https://fluiggers.com.br/uploads/default/original/1X/b7da8de9e90f8fdb582c0b646707c21f2030198d.png)

Quando não localiza ou nao consegue validar não retorna nada:

![image](https://fluiggers.com.br/uploads/default/original/1X/8b5e9f1307e96ebd8fb04f77b04705f59dfc0119.png)

---

## Resposta #12

**Samuel ** (@SamuelBruing) — 19/07/2021, 11:18 | ❤️ 1

Opa, reiniciei o servidor, agora ta funcionando!!! Valeu demais Willian, resolveu o problema

---

## Resposta #13

**Willian Laynes** (@Willian_Laynes) — 19/07/2021, 11:21

Legal show, mas aquela outra forma que você fazia era pra ter pego.

---

## Resposta #14

**Samuel ** (@SamuelBruing) — 19/07/2021, 11:27

Pois é, as requisições estavam funcionado, mas estava validando mesmo com o login ou a senha estando errados. Achei bem estranho

---

## Resposta #15

**system** (@system) — 20/07/2021, 03:27

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
