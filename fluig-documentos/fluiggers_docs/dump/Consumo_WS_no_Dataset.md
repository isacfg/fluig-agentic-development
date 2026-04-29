# Consumo WS no Dataset

> **Fonte:** [https://fluiggers.com.br/t/consumo-ws-no-dataset/806](https://fluiggers.com.br/t/consumo-ws-no-dataset/806)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 03/12/2021, 13:19
> **Visualizações:** 1056 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Matheus Loreto** (@matheusl) — 03/12/2021, 13:19

Boa tarde,

Montei um dataset que deve iniciar um processo através de WS, porém ao executá-lo é retornada a mensagem: **exception: Marshalling Error: javax.xml.bind.JAXBException: class sun.org.mozilla.javascript.internal.NativeString e nenhuma de sua superclasse é conhecida para este contexto.**

Já comparei e testei de várias outras formas que encontrei no Fórum e aqui, e nenhuma dá certo.

Alguém já teve algum caso parecido?

Abaixo código da execução:

```auto
function createDataset(fields, constraints, sortFields) {
	log.info("#### [Dataset: startProcess] - Iniciando");

	var nomeCompleto = new String(constraints[0].initialValue);
	var emailContato = new String(constraints[1].initialValue);
	var observacao = new String(constraints[2].initialValue);


	log.info("nomeCompleto:" + nomeCompleto);
	log.info("emailContato:" + emailContato);
	log.info("observacao:" + observacao);


	var dtResult = DatasetBuilder.newDataset();
	dtResult.addColumn("Resultado");


	try {
		var webServiceProvider = ServiceManager.getServiceInstance("NovoECMWorkflowEngineService");

		var serviceLocator = webServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");

		var service = serviceLocator.getWorkflowEngineServicePort();

        var attArrArr = webServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray");

		var cardData = webServiceProvider.instantiate("net.java.dev.jaxb.array.StringArrayArray");

		// Adiciona campo 1 no cardData
		var campo1 = webServiceProvider.instantiate("net.java.dev.jaxb.array.StringArray");
		campo1.getItem().add("nomeCompleto");
		campo1.getItem().add(nomeCompleto);
		cardData.getItem().add(campo1);

		// Adiciona campo 2 no cardData
		var campo2 = webServiceProvider.instantiate("net.java.dev.jaxb.array.StringArray");
		campo2.getItem().add("emailContato");
		campo2.getItem().add(emailContato);
		cardData.getItem().add(campo2);


        //Parâmetros
        var userlogin = "login";
        var userpwd   = "senha";
        var cdEmpresa = 1;
        var idProcesso = "processo";
        var numState  = 5;
        var userDestino = "matric";
        var comments = "Processo iniciado externamente";
    	var cdUser   = "matric";
    	var completTask = true;

		var ProcessTaskAppointmentDtoArray =  webServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray");
		var gestor = false;

		var userStringArray = javaObjectFactory.createStringArray();
		userStringArray.getItem().add(userDestino);

		log.info("Antes startProcess");
        var starProcess = service.startProcess(userlogin, userpwd, cdEmpresa, idProcesso, numState, userStringArray, comments, cdUser, completTask, attArrArr, cardData, ProcessTaskAppointmentDtoArray, gestor);
        log.info("Depois startProcess");


		log.info("## [Dataset: Processo criado com SUCESSO! Código: " + starProcess.getItem().get(17).getWebServiceMessage());
		dtResult.addRow(["Processo iniciado com SUCESSO! Código: " + starProcess.getItem().get(17).getWebServiceMessage()]);



		return dtResult;

	} catch (e) {
		dtResult.addRow(["Erro " + e.toString()]);
		log.info("## [Dataset: createDocument] - Erro ao tentar criar processo: " + e.toString());
		return dtResult;
	}
};
```

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 09/12/2021, 15:05

Utilize o Serviço REST do Fluig para iniciar processos.

[https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/createSimpleProcess](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/createSimpleProcess)

---
