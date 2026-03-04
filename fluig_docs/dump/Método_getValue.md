# Método getValue

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=270919174](https://tdn.totvs.com/pages/viewpage.action?pageId=270919174)

---

Com o uso de eventos, o fluig permite que um processo seja desenvolvido sob a plataforma, possibilitando a execução de ações definidas pelo usuário, tais como:

-   Validar o ato de completar uma atividade;
-   Tomar decisões automaticamente;
-   Realizar integrações com outros sistemas;
-   Iniciar novas solicitações automaticamente.

Existem alguns parâmetros que contém informações referentes à solicitação que podem ser utilizados no desenvolvimento do processo sob a plataforma, são eles:

Atenção

Para acessar parâmetros dentro de formulários, utilize o [formController](https://tdn.totvs.com/pages/viewpage.action?pageId=75270483#DesenvolvimentodeFormulários-FormController), que é o objeto que realiza a comunicação entre os formulários e a personalização de eventos.




Parâmetro

Descrição

WKDef

Código do processo.

WKVersDef

Versão do processo.

WKNumProces

Número da solicitação de processo.

WKNumState

Número da atividade.

Importante

Para realizar a busca pelo número da atividade, indica-se o uso do parâmetro WKNumState.

Caso utilize um campo de formulário, uma segunda chamada pode ser feita para atualizar este campo, o que pode causar inconsistências inesperadas.

WKCompany

Número da empresa.

WKUser

Código do usuário corrente.

WKUserComment

A partir do fluig 1.5 é possível adicionar Complementos em uma solicitação. Este recurso permite inserir diversas observações na mesma solicitação. Ou seja, não temos mais apenas um comentário por atividade.
Os complementos em solicitações permitem que um usuário adicione comentários ou anexos em uma solicitação aberta sendo ou não responsável pela tarefa corrente com a finalidade de evitar comunicação por outros meios que não ficarão registrados no histórico do processo.

Por isso a forma de retornar a informação mudou para a variável WKUserComment. Agora ela recebe um texto com todas as observações feitas pelos usuários na atividade corrente.
Exemplo do valor atual da variável WKUserComment:
"
Nome do usuário - 09/03/2017 - 10:46 -
Observação feita pelo usuário

Nome do usuário - 09/03/2017 - 10:45 -
Nova observação feita pelo usuário
"

OBS: Esse parâmetro irá retornar apenas os comentários da atividade corrente.



A partir da Atualização 1.5, para resgatar os complementos (observação) de uma tarefa, deve ser utilizado o método da API Pública:
[https://api.fluig.com/resource\_WorkflowRest.html#path\_\_2.0\_workflows\_findObservations\_-processInstanceId-\_-stateSequence-\_-threadSequence-.html](https://api.fluig.com/resource_WorkflowRest.html#path__2.0_workflows_findObservations_-processInstanceId-_-stateSequence-_-threadSequence-.html)

Documentação indicada para auxiliar na utilização da API publica em eventos:
[http://tdn.totvs.com/x/0Xo-Dg](https://tdn.totvs.com/x/0Xo-Dg)

WKCompletTask

Se a tarefa foi completada ("true"/"false").

WKNextState

Número da próxima atividade (destino).

WKCardId

Código do registro de formulário do processo.

WKFormId

Código do formulário do processo.

WKIdentityCompany

Identificador da empresa selecionada para Experiências de uso TOTVS.

Esse parâmetro corresponde à empresa que está selecionada quando as experiências de uso TOTVS estão ativas.

Nesse cenário, quando o usuário clica na imagem do perfil (canto superior direito), uma das opções que aparece é "Trocar empresa". Ao clicar nessa opção aparecerá uma ou mais empresas nas quais o usuário está configurado no Identity.

O parâmetro WKIdentityCompany corresponde à empresa selecionada nessa opção de Trocar empresa, e uma forma de verificar o valor que está definido é através do painel de controle, nos dados adicionais do usuário, com a chave "UX-APP-COMPANY".

WKMobile

Identifica se a ação foi realizada através de um dispositivo *mobile*.

WKIsService

Identifica se a solicitação de cancelamento foi realizada através de um serviço. Esta variável só pode ser consultada nos eventos *beforeCancelProcess* e *afterCancelProcess*.

WKUserLocale

Identifica o idioma corrente do usuário.

WKManagerMode

Identifica se o processo está sendo movimentado pela visão do gestor do processo ou não. Importante notar que esse parâmetro apenas retorna true/false caso o formulário esteja sendo movimentado por um processo *workflow*. Caso ele esteja sendo aberto e alterado pela navegação de documentos este parâmetro é nulo.

WKReplacement

Código do usuário substituto

Observação

Para processos que estejam sendo acessados por um usuário substituto, o usuário logado será o retorno do parâmetro WKReplacement

WKIsTransfer

Permite verificar se o usuário está ou não transferindo uma tarefa.

WKCurrentMovto

Permite a movimentação do processo.

WKActualThread

Retorna a Thread atual do processo.



Além dessas propriedades já alimentadas pela plataforma, é possível criar propriedades desenvolvidas sob a plataforma que podem ser utilizadas nos eventos. O produto disponibiliza a variável **globalVars**, que é um mapa de dados (Map<String, String>) e estará disponível em todos os eventos.

Para adicionar uma propriedade e seu valor, utilize o método globalVars.put("name", "value"), onde "name" é o nome da propriedade e "value" o seu valor. Exemplo: globalVars.put("WDAprovador","adm");

Para recuperar os valores da variável globalVars, utilize o método globalVars.get("name"), onde "name" é o nome da propriedade a ser retornado o valor. Exemplo: globalVars.get("WDAprovador");



Para validar se o usuário está completando uma atividade corretamente, basta utilizar o evento **beforeTaskSave** e retornar alguma mensagem caso queira disparar um erro. Por exemplo, segue parte de um código de desenvolvimento de um processo sob a plataforma:

```
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
	var ativAtual = getValue("WKNumState");
	var process = parseInt(globalVars.get("process"));

	var resp1 = hAPI.getCardValue("resp1_H");
	var eficacia1 = hAPI.getCardValue("eficaz1");
	var controle1 = hAPI.getCardValue("controle1");
	var eficaz = true;

	var users = new java.util.ArrayList();

	if (ativAtual == 7 && nextSequenceId == 12) {
		if (resp1 != "" && eficacia1 != "1" && eficacia1 != "2") {
			if (verificaUsuario(users, resp1)) {
				users.add(resp1);
			}
		}

		hAPI.setAutomaticDecision(8, users, "Decisao tomada automaticamente pelo Fluig.");

	} else if (ativAtual == 9 && nextSequenceId == 13) {
		if (resp1 != "" && eficacia1 == "2" && controle1 == ""){
			eficaz = false;
		}

		if (eficaz) {
			var codGrupo = buscaGrupo(process, "Qualidade");
			users.add("Pool:Group:" + codGrupo);
			hAPI.setAutomaticDecision(6, users , "Decisao tomada automaticamente pelo Fluig.");
		}
	}
}
```

Para fazer com que uma decisão seja tomada automaticamente, os seguintes procedimentos devem ser executados:

1.  Adicionar na Extensão do Processo a propriedade **AutomaticTasks** com a lista de todas as atividades que terão decisão delegada via desenvolvimento sob a plataforma. Exemplo: AutomaticTasks=3,6,10.
2.  Implementar o evento **beforeStateEntry** e executar o método "setAutomaticDecision" da hAPI, passando como parâmetros a próxima atividade, o próximo usuário (ou lista de usuários) e uma observação.



```
function beforeStateEntry(sequenceId) {
	var userList = new java.util.ArrayList();
	userList.add("adm");
	hAPI.setAutomaticDecision(6, userList, "Decisao tomada automaticamente pelo Fluig.");
}
```

As atividades com decisão automática também podem ser criadas via editor de processo.

Para iniciar uma nova solicitação de um outro processo ao finalizar uma solicitação podem ser executados os seguintes procedimentos:

1.  Cadastrar um serviço no fluig em que a URL seja o WSDL do serviço ECMWorkflowEngineService.
2.  Implementar o evento **afterProcessFinish** utilizando o exemplo abaixo, sendo ‘process2’ o novo processo a ser inicializado.



```
function afterProcessFinish(processId) {

	// Servico <url_fluig>/webdesk/ECMWorkflowEngineService?wsdl
	// Busca o webservice cadastrado com o código "WorkflowEngineService"
	var workflowEngineServiceProvider = ServiceManager.getServiceInstance("WorkflowEngineService");
	var workflowEngineServiceLocator = workflowEngineServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
	var workflowEngineService = workflowEngineServiceLocator.getWorkflowEngineServicePort();
 
	// Cria o ProcessAttachmentDtoArray
	var processAttachmentDtoArray = workflowEngineServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray");

	// Cria o ObjectFactory
	var objectFactory = workflowEngineServiceProvider.instantiate("net.java.dev.jaxb.array.ObjectFactory");

	// Cria um String[][]
	var cardData = objectFactory.createStringArrayArray();

	// Cria uma solicitação
	workflowEngineService.simpleStartProcess("adm", "adm", 1, "process2", "Comment", processAttachmentDtoArray, cardData);
}
```

Existem outros métodos parar iniciar uma solicitação, consulte-os [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007#UtilizaçãodeWebservices-ECMWorkflowEngineService).

Lembre-se de consultar a classe ObjectFactory do serviço, essa classe possui diversos métodos para criar instância de objetos necessários para utilização do serviço.

Exemplo para barrar o usuário de movimentar a solicitação com o campo "nome" vazio. Caso o mesmo salve a solicitação, a ação será permitida.

```
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
	var completTask = getValue("WKCompletTask"); // 'true' - Completando a tarefa; 'false' - Salvando a tarefa
	var fieldName = hAPI.getCardValue("name");
 
	if (completTask == 'true' && (!fieldName || !fieldName.trim()) {
		throw("Não é permitido movimentar uma solicitação com o campo 'Nome' vazio!");
	}
}
```

Exemplo que permite verificar se o usuário está ou não transferindo uma tarefa:

```
function beforeTaskCreate(colleagueId) {
	var isTransfer = getValue("WKIsTransfer");

	if (isTransfer !== null) {
		if (JSON.parse(isTransfer)) {
			throw "Não é permitido transferir a atividade!";
		}
	}
}
```
