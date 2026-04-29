# Dataset Simples Integração SOAP

> **Fonte:** [https://fluiggers.com.br/t/dataset-simples-integracao-soap/932](https://fluiggers.com.br/t/dataset-simples-integracao-soap/932)
> **Categoria:** Widgets
> **Tags:** `dataset`
> **Criado em:** 17/02/2022, 17:34
> **Visualizações:** 1198 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Cleiton Ferreira** (@Cleiton_Ferreira) — 17/02/2022, 17:34

Olá pessoal!

Estou fazendo uma integração com a prefeitura de Boa Vista, envio o XML e retorna as notas que eu consultei, quando eu consulto direto no SOAP é sucesso mas quando tento via dataset me retorna o seguinte erro : javax.xml.ws.soap.SOAPFaultException: Erro ao verificar a segurança da mensagem.

Estou passando usuário e senha como no SOAP mas eu presumo que preciso passar mais alguma coisa no dataset, se alguém já passou por isso e puder me ajudar ficarei muito grato.

SOAP

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:nfse="http://nfse.abrasf.org.br">
   <soapenv:Header>
      <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
         <wsse:UsernameToken wsu:Id="UsernameToken-13">
            <wsse:Username>username</wsse:Username>
            <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>
         </wsse:UsernameToken>
      </wsse:Security>
   </soapenv:Header>
   <soapenv:Body>
      <nfse:ConsultarNfsePorFaixaRequest>
         <nfseCabecMsg>

    					&lt;cabecalho xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.abrasf.org.br/nfse.xsd" versao="2.01">
    						&lt;versaoDados>2.01&lt;/versaoDados>
    					&lt;/cabecalho>

    			</nfseCabecMsg>
         <nfseDadosMsg><![CDATA[

					<ConsultarNfseFaixaEnvio xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.abrasf.org.br/nfse.xsd">
						<Prestador>
							<CpfCnpj>
								<Cnpj>10376555002563</Cnpj>
							</CpfCnpj>
							<InscricaoMunicipal>9818103</InscricaoMunicipal>
						</Prestador>
						<Faixa>
							<NumeroNfseInicial>32</NumeroNfseInicial>
							<NumeroNfseFinal>32</NumeroNfseFinal>
						</Faixa>
						<Pagina>1</Pagina>
					</ConsultarNfseFaixaEnvio>

	         ]]></nfseDadosMsg>
      </nfse:ConsultarNfsePorFaixaRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

DATASET

```auto
function createDataset(fields, constraints, sortFields) {
	try {
		return processResult(callService(fields, constraints, sortFields));
	} catch(e) {
		return processErrorResult(e, constraints);
	}
}

function callService(fields, constraints, sortFields) {
	var serviceData = data();
	var params = serviceData.inputValues;
	var assigns = serviceData.inputAssignments;
	var properties = {};
	properties["log.soap.messages"] = "false";
	properties["disable.chunking"] = "false";
	properties["use.ssl"] = "false";
	properties["basic.authorization"] = "true";
	properties["basic.authorization.username"] = "username";
	properties["basic.authorization.password"] = "password";
	properties["receive.timeout"] = "0";

	verifyConstraints(serviceData.inputValues, constraints);

	var serviceHelper = ServiceManager.getService(serviceData.fluigService);
	var serviceLocator = serviceHelper.instantiate(serviceData.locatorClass);
	var service = serviceLocator.getBasicHttpBindingInfse();
	var headers = getSOAPHeaders(serviceHelper, serviceData.extraParams.headers);
	var customClient = serviceHelper.getCustomClient(service, properties, headers);
	var response = customClient.consultarNfsePorFaixa(fillConsultarNfsePorFaixaRequest(serviceHelper, params.parameters, assigns.parameters));

	return response;
}

function defineStructure() {
	var dataset = processResult(callService());
	var columns = dataset.getColumnsName();
	for (var i = 0; i < dataset.getColumnsCount(); i++) {
		if (!DatabaseManager.isReservedWord(columns[i])) {
			addColumn(columns[i]);
		} else {
			addColumn('ds_' + columns[i]);
		}
	}
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
	var columns = new Array();

	var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
	var parser = factory.newDocumentBuilder();
	var source = new org.xml.sax.InputSource(new java.io.StringReader(result));
	var xmlResponse = parser.parse(source);

	var nodes = xmlResponse.getElementsByTagName("");

	for (var i = 0; i < nodes.getLength(); i++) {
		var children = nodes.item(i).getChildNodes();
		for (var j = 0; j < children.getLength(); j++) {
			if (children.item(j) instanceof org.w3c.dom.Element) {
				var column = children.item(j).getNodeName();
				if (columns.indexOf(column) < 0) {
					columns.push(column);
					dataset.addColumn(column);
				}
			}
		}
	}

	for (var i = 0; i < nodes.getLength(); i++) {
		var datasetRow = new Array();
		var children = nodes.item(i).getChildNodes();
		for (var j = 0; j < columns.length; j++) {
			var node = children.getElementsByTagName(columns[j]);
			if (node.getLength() > 0 && node.item(0).hasChildNodes) {
				datasetRow.push(node.item(0).getFirstChild().getTextContent());
			} else {
				datasetRow.push("");
			}
		}
		dataset.addRow(datasetRow);
	}

	return dataset;
}

function processErrorResult(error, constraints) {
	var dataset = DatasetBuilder.newDataset();

	var params = data().inputValues;
verifyConstraints(params, constraints);

dataset.addColumn('error');
	dataset.addColumn('parameters');

	var parameters = isPrimitive(params.parameters) ? params.parameters : JSONUtil.toJSON(params.parameters);

	dataset.addRow([error.message, parameters]);

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


function fillConsultarNfsePorFaixaRequest(serviceHelper, params, assigns) {
	if (params == null) {
		return null;
	}

	var result = serviceHelper.instantiate("br.org.abrasf.nfse.ConsultarNfsePorFaixaRequest");

	var nfseCabecMsg = getParamValue(params.nfseCabecMsg, assigns.nfseCabecMsg);
	if (hasValue(nfseCabecMsg)) { result.setNfseCabecMsg(nfseCabecMsg); }
	var nfseDadosMsg = getParamValue(params.nfseDadosMsg, assigns.nfseDadosMsg);
	if (hasValue(nfseDadosMsg)) { result.setNfseDadosMsg(nfseDadosMsg); }

	return result;
}

function getObjectFactory(serviceHelper) {
	var objectFactory = serviceHelper.instantiate("br.org.abrasf.nfse.ObjectFactory");

	return objectFactory;
}

function getSOAPHeaders(serviceHelper, headers) {
	var soapHeaders = [];

	var header01 = serviceHelper.instantiate(headers[0].javaType);
	header01.setNfseCabecMsg(headers[0].values.nfseCabecMsg);
	header01.setNfseDadosMsg(headers[0].values.nfseDadosMsg);
	var soapHeader01 = serviceHelper.createSOAPHeader(headers[0].namespace, header01);
	soapHeaders.push(soapHeader01);

	return soapHeaders;
}

function data() {
	return {
  "fluigService" : "NFBOAVISTA",
  "operation" : "consultarNfsePorFaixa",
  "soapService" : "Nfse",
  "portType" : "Infse",
  "locatorClass" : "br.org.abrasf.nfse.Nfse",
  "portTypeMethod" : "getBasicHttpBindingInfse",
  "parameters" : [ ],
  "inputValues" : {
    "parameters" : { }
  },
  "inputAssignments" : {
    "parameters" : { }
  },
  "outputValues" : { },
  "outputAssignments" : { },
  "extraParams" : {
    "disableChunking" : false,
    "useSSL" : false,
    "basicAuthentication" : true,
    "basicAuthenticationUsername" : "username",
    "basicAuthenticationPassword" : "password",
    "parseResult" : true,
    "receiveTimeout" : "0",
    "headers" : [ {
      "namespace" : "teste",
      "object" : "ConsultarNfsePorFaixaRequest",
      "javaType" : "br.org.abrasf.nfse.ConsultarNfsePorFaixaRequest",
      "values" : {
        "nfseCabecMsg" : "",
        "nfseDadosMsg" : ""
      }
    } ],
    "datasetkeys" : [ ],
    "parserType" : "XML",
    "mainNode" : "",
    "enabled" : true
  }
}
}

 function stringToBoolean(param) { if(typeof(param) === 'boolean') {  return param;  }  if (param == null || param === 'null') {  return false;  }  switch(param.toLowerCase().trim()) {  case 'true': case 'yes': case '1': return true;  case 'false': case 'no': case '0': case null: return false;  default: return Boolean(param);  }  }
```

---
