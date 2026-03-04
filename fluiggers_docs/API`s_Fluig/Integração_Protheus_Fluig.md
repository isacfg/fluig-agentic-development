# Integração Protheus >> Fluig

> **Fonte:** [https://fluiggers.com.br/t/integracao-protheus-fluig/945](https://fluiggers.com.br/t/integracao-protheus-fluig/945)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 24/02/2022, 15:22
> **Visualizações:** 1158 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Andre ** (@Andre) — 24/02/2022, 15:22 | ❤️ 1

Boa tarde,
Estou tentando realizar uma interação Protheus >> Fluig via serviço REST Protheus.

-   Serviço rest está ok;
-   URL do REST está ok, validado no Postman ;

Porem quando tento criar um dataset para consumir esses serviço, não retorna nada.

Alguém tem um exemplo simples dessa integração onde posso verificar como é o desenvolvimento em ambas as partes, protheus (advpl) e dataset (fluig)

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 03/03/2022, 11:40

Tu cadastrou o REST nos serviços do Fluig, cola seu dataset ai para vermos como está desenvolvendo.

Exemplo de Dataset realizando uma alteração via REST

```auto
function createDataset(fields, constraints, sortFields)
{
	var newDataset = DatasetBuilder.newDataset();
	newDataset.addColumn("chave");
	newDataset.addColumn("status");
	newDataset.addColumn("motivo");

	try {
		var servico = ServiceManager.getService("WSPROTHEUS");
		var serviceHelper = servico.getBean();

		var service = serviceHelper.instantiate('WSINTFLUIGProtheus.WSINTFLUIG');

		var request = service.getWSINTFLUIGSOAP();

		var filial = '0102';
		var pedido = '005099';
		var elimina = 'N';
		var itens = "01-26"; //itens espera inf. no formato: item1-qtdLiberada1-item2-qtdLiberada2-item3-qtdLiberada3...
		if (constraints != null) {
			for (var i = 0; i < constraints.length; i++) {
				if (constraints[i].fieldName == "pedido") {
					pedido = constraints[i].initialValue;
				}
				if (constraints[i].fieldName == "elimina") {
					elimina = constraints[i].initialValue;
				}
				else if (constraints[i].fieldName == "itens") {
					itens = constraints[i].initialValue;
				}
				else if (constraints[i].fieldName == "filial") {
					filial = constraints[i].initialValue;
				}
			}
		}

		var array = serviceHelper.instantiate('WSINTFLUIGProtheus.ObjectFactory');
		var arrayItensPV = array.createARRAYOFWSINTFLUIGSTRUCTITENSPV();

		var arrayParam = itens.split("-");

		for (var i = 0; i <= arrayParam.length - 1; i++) {
			var dadosItensPV = serviceHelper.instantiate('WSINTFLUIGProtheus.WSINTFLUIGSTRUCTITENSPV');
			var item = arrayParam[i];
			dadosItensPV.setCITEM(item);
			i++;
			var qtd = parseFloat(arrayParam[i]);
			dadosItensPV.setNQUANTITY(qtd);

			arrayItensPV.getWSINTFLUIGSTRUCTITENSPV().add(dadosItensPV);
		}

		var ponteItensPV = serviceHelper.instantiate('WSINTFLUIGProtheus.WSINTFLUIGSTRUCTPONTEITENSPV');
		ponteItensPV.setADADOSDET(arrayItensPV);

		var retorno = request.setalterapv(filial, pedido, elimina, ponteItensPV,'F');

		var array = retorno.getWSINTFLUIGSTRUCTINCLUSAOSIGAAUTO();

		var chave = array.get(0).getCCHAVE();
		var status = array.get(0).getCSTATUS();
		var motivo = array.get(0).getCMOTIVO();

		newDataset.addRow(new Array(chave,status,motivo));

		return newDataset;
	}catch (e) {
		throw(e);
	}
}
```

Exemplo de um dataset de consulta de dados via REST

```javascript
function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
	var serviceData = data(constraints);
	var params = serviceData.inputValues;
	var assigns = serviceData.inputAssignments;

	verifyConstraints(serviceData.inputValues, constraints);

	var serviceHelper = ServiceManager.getService(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getWSINTFLUIGSOAP();
	var response = service.getclientes(getParamValue(params.cfilialpro, assigns.cfilialpro), getParamValue(params.cnomereduz, assigns.cnomereduz),
		getParamValue(params.ccpfcliente, assigns.ccpfcliente));

	return response;
}

function defineStructure() {
	addColumn("cBAIRRO");
	addColumn("cCEP");
	addColumn("cCLILOJA");
	addColumn("cCNPJ");
	addColumn("cCODMUNI");
	addColumn("cDDD");
	addColumn("cEMAIL");
	addColumn("cESTADO");
	addColumn("cLOGRADOURO");
	addColumn("cMUNICIPIO");
	addColumn("cNOMEFANTASIA");
	addColumn("cRAZAOSOCIAL");
	addColumn("cTELEFONE");
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

	result = result.getWSINTFLUIGSTRUCTCLIENTES();

		dataset.addColumn("cBAIRRO");
		dataset.addColumn("cCEP");
		dataset.addColumn("cCLILOJA");
		dataset.addColumn("cCNPJ");
		dataset.addColumn("cCODMUNI");
		dataset.addColumn("cDDD");
		dataset.addColumn("cEMAIL");
		dataset.addColumn("cESTADO");
		dataset.addColumn("cLOGRADOURO");
		dataset.addColumn("cMUNICIPIO");
		dataset.addColumn("cNOMEFANTASIA");
		dataset.addColumn("cRAZAOSOCIAL");
		dataset.addColumn("cTELEFONE");

	for (var i = 0; i < result.size(); i++) {
		dataset.addRow([result.get(i).getCBAIRRO(), result.get(i).getCCEP(), result.get(i).getCCLILOJA(), result.get(i).getCCNPJ(), result.get(i).getCCODMUNI(), result.get(i).getCDDD(), result.get(i).getCEMAIL(), result.get(i).getCESTADO(), result.get(i).getCLOGRADOURO(), result.get(i).getCMUNICIPIO(), result.get(i).getCNOMEFANTASIA(), result.get(i).getCRAZAOSOCIAL(), result.get(i).getCTELEFONE()]);
	}

	return dataset;
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	var params = data().inputValues;
verifyConstraints(params, constraints);

dataset.addColumn('error');
	dataset.addColumn('cfilialpro');
	dataset.addColumn('cnomereduz');
	dataset.addColumn('ccpfcliente');

	var cfilialpro = isPrimitive(params.cfilialpro) ? params.cfilialpro : JSONUtil.toJSON(params.cfilialpro);
	var cnomereduz = isPrimitive(params.cnomereduz) ? params.cnomereduz : JSONUtil.toJSON(params.cnomereduz);
	var ccpfcliente = isPrimitive(params.ccpfcliente) ? params.ccpfcliente : JSONUtil.toJSON(params.ccpfcliente);

	dataset.addRow([error.message, cfilialpro, cnomereduz, ccpfcliente]);

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
	var objectFactory = serviceHelper.instantiate("_194._73._211._200._9071.ObjectFactory");

	return objectFactory;
}


function data(constraints) {

	var filial = '';
	var nome = '';
	var cpf = '';

	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == "filial") {
				filial = constraints[i].initialValue;
			}
			if (constraints[i].fieldName == "nome") {
				nome = constraints[i].initialValue;
			}
			if (constraints[i].fieldName == "cnpj") {
				cpf = constraints[i].initialValue;
			}

		}
	}


	return {
	  "fluigService" : "WSPROTHEUS",
	  "operation" : "getclientes",
	  "soapService" : "WSINTFLUIG",
	  "portType" : "WSINTFLUIGSOAP",
	  "locatorClass" : "_194._73._211._200._9071.WSINTFLUIG",
	  "portTypeMethod" : "getWSINTFLUIGSOAP",
	  "parameters" : [ ],
	  "inputValues" : {
	    "cfilialpro" : filial,
	    "cnomereduz" : nome,
	    "ccpfcliente" : cpf
	  },
	  "inputAssignments" : {
	    "cfilialpro" : "VALUE",
	    "cnomereduz" : "VALUE",
	    "ccpfcliente" : "VALUE"
	  },
	  "outputValues" : { },
	  "outputAssignments" : { },
	  "extraParams" : {
	    "enabled" : false
  }
}
}
```

---

## Resposta #2

**Andre ** (@Andre) — 03/03/2022, 12:18

Bom dia Fluigor,
Sim cadastrei.

Segue o exemplo que eu estou testando:

function createDataset(fields, constraints, sortFields) {
[//log.info](//log.info)(“LOG DATASET TESTE”)

```
//Declaração do objeto dataset
var newDataset = DatasetBuilder.newDataset();

//CRIAÇÃO DE COLUNAS
    newDataset.addColumn("COD");
    newDataset.addColumn("NOME");
    newDataset.addColumn("LOJA");
    newDataset.addColumn("END");


//Bloco try/Catch para tratamento de erros
try {

    //Declara a variável do cliente de Serviços
    var clientService = fluigAPI.getAuthorizeClientService();

    //JSON com parâmetros básicos de chamada de serviço rest
    var data = {
        companyId: getValue("WKCompany") + '', //id Empresa
        serviceCode: 'PESQ_CLIENTES', // Código do serviço criado
        endpoint: "/rest/api/v1/cliente/", //Endpoint do serviço Rest
        method: 'get', //método que será utilizado o serviço
        timeoutService: '100', //tempo de espera de execução do serviço
        headers: {
            "Content-Type": "application/json", //Tipo de envio de dados
        }
    }


    //Chamada do serviço com os parâmetros no tipo string
    var vo = clientService.invoke(JSON.stringify(data));

    //Adição de linhas no dataset
    var responseDataset = vo.getResult();


    log.info("getResult >>>>>> "+ vo.getResult())
    //responseDataset = JSON.parse(responseDataset.replace('\t',''));

    responseDataset.forEach(function (resp) {
        newDataset.addRow(new Array(
            resp.B1_COD,
            resp.B1_NOME,
            resp.B1_LOJA,
            resp.B1_END
            //resp.RA_TELEFON,
            //resp.RA_MAT + ' - ' + resp.RA_NOME
        ));
    });

} catch (e) {
    //Em caso de erro o erro será capturado e lançado no dataset com status false
    var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("response");
    newDataset.addColumn("status");
    newDataset.addRow(new Array(e.message, false));
}

//Retorno do Dataset Construído
return newDataset;
```

}

---
