# Timeout em dataset customizado - saveAndsend

> **Fonte:** [https://fluiggers.com.br/t/timeout-em-dataset-customizado-saveandsend/2551](https://fluiggers.com.br/t/timeout-em-dataset-customizado-saveandsend/2551)
> **Categoria:** BPM
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 31/01/2024, 20:00
> **Visualizações:** 321 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rafael Rubin** (@rafaelrubin) — 31/01/2024, 20:00

Olá a todos.

Utilizo um dataset para movimentar um processo através da API saveAndSendTask. No entanto, estou me deparando com problemas de timeout na execução. A API funciona corretamente, mas não consigo receber o retorno por causa do timeout:

2024-01-31 18:36:45,002 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-8) FLUXO COM ERRO: JavaException: javax.xml.ws.WebServiceException: Could not receive Message

Verifiquei em alguns fóruns que é possível alterar o timeout da requisição de WS customizados, mas não encontrei nada sobre a API do Fluig. Segue a sintaxe utilizada abaixo:

function createDataset(fields, constraints, sortFields) {

```
var newDataset = DatasetBuilder.newDataset();

/*ADICIONA COLUNAS AO DATASET*/
newDataset.addColumn("idStatus");
newDataset.addColumn("noMensagem");

//RETORNA OS DADOS DO FLUXO ORIGINAL
var cdFluxo     = '';
var cdFluxoOrig = '';
var cdEmpresa   = '';
//TAREFAS DO WORKFLOW
var cdAtual   = 4;
var cdDestino = 5;
var idFluxo   = 'codigoFluxo';
var cUsuario  = '';

var cLogin = 'login';
var cSenha = 'senha';

if (constraints !== null) {
    for (var i in constraints) {
        if (constraints[i].getFieldName().toUpperCase() == "USUARIO")
            cUsuario = constraints[i].getInitialValue();
        if (constraints[i].getFieldName().toUpperCase() == "FLUXO")
            cdFluxo  = constraints[i].getInitialValue().toUpperCase();
        if (constraints[i].getFieldName().toUpperCase() == "EMPRESA")
            cdEmpresa = constraints[i].getInitialValue().toUpperCase();
    }
}

try {

	//var serviceHelper = getECMWorkflowEngineServiceHelper();
	var svc = ServiceManager.getService('ECMWorkflowEngineService');
	var serviceHelper = svc.getBean();
	var workflowEngineSS = serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService');
	var workflowEngine = workflowEngineSS.getWorkflowEngineServicePort();

    // Lista das matrículas de usuários que irão receber a atividade. Normalmente é um usuário, mas no caso de um consenso podem ser vários
    var colleagueIds = serviceHelper.instantiate('net.java.dev.jaxb.array.StringArray');
    colleagueIds.getItem().add(cUsuario);

    // Lista de anexos. Mesmo que não seja enviado nenhum, é necessário enviar a lista vazia
    var attachments = serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray');

    // Dados do formulário. CARREGA DO FLUXO
    var cardData  = workflowEngine.getInstanceCardData(cLogin,
													   cSenha,
													   1, /*COMPANYID*/
													   cUsuario,
													   cdFluxo);


    // Apontamentos da solicitação. Não é mais utilizado, mas por compatibilidade é necessário enviar a lista vazia
    var appointments = serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray');

	var result = workflowEngine.saveAndSendTask(cLogin, 				//username
												cSenha, 				//password
												cdEmpresa, 			    //companyId
												cdFluxo, 				//processInstanceId
												cdDestino,				//choosedState - atividade destino
												colleagueIds, 			//colleagueIds
												'OBSERVACAO', //comments
												cUsuario,				//userId - usuário que movimentou
												true,					//completeTask
												attachments,			//attachments
												cardData,				//cardData
												appointments,			//appointment
												false,					//managermode - (true: gestor)
												0						//threadsequence - atividades paralelas (informar zero)
												);

	log.dir(result);

	if	(result.getItem().get(0).getItem().get(0) == 'ERROR: ')
		newDataset.addRow(["ERRO",	//STATUS
		                   result.getItem().get(0).getItem().get(1)]);	//MENSAGEM
	else
		newDataset.addRow(["OK",	//STATUS
		                   "MOVIMENTAÇÃO OK"]);	//MENSAGEM

	return newDataset;

} catch (e) {

	newDataset.addRow(["ERRO",	//STATUS
	                   e]);	//MENSAGEM

	log.info('FLUXO COM ERRO: '+e);

	return newDataset;

} finally {
	return newDataset;
}
```

}

---
