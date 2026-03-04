# Utilização de Webservices

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=73084007](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007)

---

# Índice

# Objetivo

Além de algumas APIs REST, o fluig disponibiliza também uma série de Web Services SOAP (Simple Object Access Protocol). Neste documento mostraremos como habilitar ou desabilitar esses serviços, como gerar os stubs para utilizá-los em softwares terceiros e como utilizá-los dentro do próprio fluig.

# Pré-requisitos

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre o fluig
-   Visão geral sobre integração de sistemas
-   Web Services

# Antes de começar

Os Web Services SOAP, apesar de continuarem funcionais, não recebem mais novos serviços nem alterações nos parâmetros de entrada. Caso haja, opte por usar a função correspondente nas APIs REST.

# Como acessar

Para acessar os webservices do TOTVS Fluig Plataforma, é preciso acessar o URL *https://<endereco\_fluig:porta>/services*.

Nossos serviços estão descritos no formato WSDL (Linguagem de Descrição de Serviços Web)

# Segurança

Existem dois principais dispositivos de segurança para o uso dos Web Services SOAP.

## Permissão por Web Services e/ou métodos

Por padrão, todos os usuários do fluig podem acessar os serviços. Isso facilita integrações e widgets que possam fazer uso dos serviços SOAP. Mas o administrador do sistema, caso queira, pode bloquear o uso dos serviços como um todo ou de alguns métodos. 

Por motivos de retrocompatibilidade, é impossível bloquear o acesso dos serviços SOAP a todos os usuários. O fluig entende que se não há ninguém nas permissões é porque o administrador não quer configurar essa permissão, então para bloquear o acesso dos usuários normais ele deve dar permissão apenas a um usuário (o próprio administrador por exemplo);

Para bloquear o acesso a todos os métodos de um serviço, por exemplo, *ECMWorkflowEngineService*, o administrador deve entrar no painel de controle e acessar a opção de permissões. Pesquisar por *ECMWorkflowEngineService*. Irá listar tanto o acesso geral à API *ECMWorkflowEngineService* quanto a cada um dos métodos.

O administrador pode adicionar permissões para ele próprio no serviço geral do *ECMWorkflowEngineService* e isso fará com que nenhum usuário possa acessar os métodos desse serviço. Caso queira liberar um método específico , por exemplo *startProcess*, o administrador pode, mantendo a configuração anterior, acessar as permissões do recurso *ECMWorkflowEngineService.startProcess* adicionar as permissões conforme a sua necessidade.

Ou se quiser manter acesso a todos os outros métodos mas bloquear somente um método específico, ele deve manter as permissões gerais do serviço sem nenhuma configuração de permissão, e adicionar o usuário administrador nas permissões do método que deseja que seja bloqueado aos demais usuários.

Observação

Alguns métodos não foram criados para retornar erros. Então alguns métodos podem retornar informações vazias caso o acesso seja negado. Nestes casos, o log pode ser consultado para verificar a negação de acesso ao serviço.

## Personificação

Por lidar com integrações, alguns métodos permitem que o usuário integrador tome uma ação em nome de outro usuário (por exemplo, um serviço terceiro que utiliza um usuário para integrações pode abrir um chamado em nome de um usuário normal do fluig). Você pode limitar os usuários que conseguem tomar ação em nome de outros usuários pelos Web Services entrando no painel de controle e acessando a opção de permissões. Pesquisar por *Personificação*.

Observação

Assim como nas permissões dos Web Services, o fluig entende que se não há ninguém nas permissões é porque o administrador não quer configurar essa permissão, então para bloquear o acesso dos usuários normais ele deve dar permissão apenas a um usuário (o próprio administrador por exemplo)

## Permissões das funções acessadas

Independente das permissões anteriores, o fluig continua respeitando as permissões inerentes às funções acessadas. Ou seja, para configurar um processo, o usuário precisa ter acesso a página de configurar processos. Para acessar um documento, o usuário precisa ter permissão para visualizar o documento em si.

# Como utilizar os Web Services em softwares terceiros

## Verificando os serviços e chamadas manuais

Se você quer verificar o uso dos serviços ou mesmo fazer uma chamada individual você pode fazê-lo através de um aplicativo qualquer com suporte a requisições do tipo SOAP. Insira a url de um dos serviços disponíveis na url */services* e preencha os dados conforme solicitado pelo aplicativo.

## Criando rotinas automatizadas

O primeiro passo é fazer o download dos *stubs*, que são classes modelos que irão auxiliar no preenchimento dos dados utilizados por cada um dos serviços.

### JDK 11 e superiores

Nas versões mais recentes da JDK o utilitário *wsimport* foi removido. Você pode baixar por outras fontes ou utilizar no lugar o Apache CXF ([https://cxf.apache.org/](https://cxf.apache.org/)) e gerando a biblioteca com os arquivos baixados

```
wsdl2java -client -d C:\stubs\ -classdir C:\stubs\ -encoding UTF-8 -compile https://<endereco_fluig:porta>/webdesk/ECMWorkflowEngineService?wsdl
jar -cvf fluig-ws-client.jar C:\stubs\*.*
```

### JDK 8 e inferiores 

Se você usa a JDK do java na versão 8 ou inferior, você pode utilizar [este utilitário](https://tdn.totvs.com/download/attachments/73084007/Cliente%20Web%20Service.zip?version=1&modificationDate=1409227893000&api=v2) que disponibilizamos para gerar os stubs de todos os serviços.

Ou fazer de forma manual, caso precise apenas de um Web Service específico, usando o comando ***wsimport*** e gerando a biblioteca:

```
wsimport -d C:\stubs\ https://<endereco_fluig:porta>/webdesk/ECMWorkflowEngineService?wsdl
jar -cvf fluig-ws-client.jar C:\stubs\*.*
```



## Importando a lib e desenvolvendo sua integração

Após a geração do arquivo *fluig-ws-client.jar* (conforme descrito nos passos anteriores) você pode desenvolver sua própria API.

Se quiser gerar uma biblioteca para usar dentro do próprio Fluig, ou mesmo alguns exemplos de como utilizar as integrações, você pode consultar nossa documentação

Para saber como ou então aprender como utilizar a biblioteca gerada, [aqui](https://git.fluig.com/projects/SAMPLES/repos/componentes/browse/ws-soap) você encontra um exemplo prático de utilização em artefatos publicados no fluig.



# POST, não PUT

É importante salientar que todos os dados enviados (ou não enviados) em um método de alteração são considerados. Se um campo não for enviado, o sistema vai considerar que o valor dele deve ser deixado em branco, nulo ou zerado, conforme o tipo de dado. Então, mesmo que você queira apenas modificar a descrição do arquivo, você deve passar todos os outros dados do documento.

# Disponibilidade dos Web Services

Lembre-se que a sua integração pode ocorrer em um momento que o fluig não está no ar. Seja por uma atualização ou regra de economia de energia, esteja preparado nas suas integrações para indisponibilidade do servidor. Ou seja, use try/catch.

# Como utilizar os Web Services do Fluig no próprio Fluig?

Você pode utilizar os serviços do Fluig no próprio Fluig, da mesma forma que utiliza serviços de terceiros. Para isso, o administrador deve entrar no Painel de Controle e acessar a opção de Serviços. Criar um novo serviço do tipo SOAP, definir um nome (por exemplo *ECMWorkflowEngineService*, este nome será usado depois para referenciar este cadastro), uma descrição para outros identificarem que serviço é este e a URL do serviço (por exemplo, *https://<endereco\_fluig:porta>/webdesk/ECMWorkflowEngineService?wsdl*)

## Usando o editor web (sem codificação)

Na configuração de processo, crie ou edite um processo e adicione uma atividade de serviço. Acesse as propriedades dessa atividade e selecione o serviço *ECMWorkflowEngineService* (ou o nome que você utilizou no cadastro) e selecione a operação (por exemplo, *startProcess*).

Preencha os campos que serão utilizados e confirme.

## Codificando

Você também pode fazer a codificação da chamada dos métodos dos serviços, fazendo com quem um *dataset* faça a inicialização da solicitação ou mesmo caso a opção sem codificação não atenda as suas necessidades. Para lhe ajudar, criamos este exemplo: 

```
function startProcess() {
	var serviceHelper = ServiceManager.getService("ECMWorkflowEngineService").getBean();
    var serviceLocator = serviceHelper.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
    var service = serviceLocator.getWorkflowEngineServicePort();

    // Lista das matrículas de usuários que irão receber a atividade. Normalmente é um usuário, mas no caso de um consenso podem ser vários
    var colleagueIds = serviceHelper.instantiate('net.java.dev.jaxb.array.StringArray');
    colleagueIds.getItem().add("adm");

    // Chama o serviço para iniciar a solicitação e recebe o retorno
    // O retorno do startProcess é um String[][], ou no Soap, um StringArrayArray
    var retornoStartProcess = service.startProcess(
    		'integrador', // matrícula do usuário integrador
    		'9a411f45fcea479ffb839a3ee605c18d', // senha do usuário
    		1, // código da empresa
    		"processoASerIniciado", // código do processo
    		2, // código da atividade para qual a solicitação vai ser movimentada
    		colleagueIds,
    		"Iniciado via ws", // Comentário da movimentação
    		'integrador', // Usuário que ficará como o inicializador da solicitação. O usuário integrador precisa ter personificação caso seja um usuário diferente do integrador
    		true, // Se vai completar a tarefa inicial (true) ou não, vai apenas salvar a solicitação para gerar um código e preencher o formulário, anexos e comentários
    		serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray'), // Lista de anexos. Mesmo que não seja enviado nenhum, é necessário enviar a lista vazia
    		serviceHelper.instantiate('net.java.dev.jaxb.array.StringArrayArray'), // Dados do formulário. Mesmo que não tenha formulário ou não seja preenchido, é necessário enviar a lista vazia
    		serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray'), // Apontamentos da solicitação. Não é mais utilizado, mas por compatibilidade é necessário enviar a lista vazia
    		false // Se a movimentação é feita como usuário responsável pela atividade ou como gestor do processo
	);

    var retorno = stringArrayArrayToSimpleObject(retornoStartProcess);

    if (retorno.ERROR) {
    	// Interrompe a execução ou movimentação e retorna um erro com a resposta do serviço
    	throw "Solicitação não iniciada: " + retorno.ERROR;
    } else {
    	// Imprime o código da solicitação criada pelo serviço e depois imprime todos os dados que foram retornados
    	log.info("Solicitação " + retorno.iProcess + " criada com sucesso");
    	log.dir(retorno)
    }
}


function stringArrayArrayToSimpleObject(stringArrayArray) {
	var objeto = {};
	for(var i = 0; i < stringArrayArray.getItem().size(); i++) {
		var item = stringArrayArray.getItem().get(i).getItem();
		objeto[item.get(0)] = item.get(1);
	}

	return objeto;
}
```



Ou, se preferir um exemplo um pouco maior, mas contendo mais detalhes sobre o que é cada parâmetro e desenvolvido para ser melhor re-utilizável, você pode conferir este exemplo que faz o mesmo que o exemplo anterior

```
//configure os dados do seu usuário integrador
var INTEGRADOR = {
	matricula: 'integrador',
	senha: '9a411f45fcea479ffb839a3ee605c18d',
	empresa: 1
};

// conforme o cadastro do fluig
var SERVICOS = {
	workflowEngineService: "ECMWorkflowEngineService"
}

/**
 * Função que cria uma solicitação via Soap no Fluig
 *
 */
function startProcess() {
    var serviceHelper = getECMWorkflowEngineServiceHelper();
    var service = getECMWorkflowEngineService(serviceHelper);

    // Nome do processo a ser iniciado
    var processId = "processoASerIniciado";

    // Atividade para qual será movimentada a solicitação
    var choosedState = 2;

    // Lista das matrículas de usuários que irão receber a atividade. Normalmente é um usuário, mas no caso de um consenso podem ser vários
    var colleagueIds = createStringArray(serviceHelper);
    colleagueIds.getItem().add("adm");

    // Comentário da movimentação
    var comments = "Iniciado via ws";

    // Usuário que ficará como o inicializador da solicitação. O usuário integrador precisa ter personificação caso seja um usuário diferente do integrador
    var userId = INTEGRADOR.matricula;

    // Se vai completar a tarefa inicial (true) ou não, vai apenas salvar a solicitação para gerar um código e preencher o formulário, anexos e comentários
    var completeTask = true;

    // Lista de anexos. Mesmo que não seja enviado nenhum, é necessário enviar a lista vazia
    var attachments = createProcessAttachmentDtoArray(serviceHelper);

    // Dados do formulário. Mesmo que não tenha formulário ou não seja preenchido, é necessário enviar a lista vazia
    var cardData = createStringArrayArray(serviceHelper);

    // Apontamentos da solicitação. Não é mais utilizado, mas por compatibilidade é necessário enviar a lista vazia
    var appointments = createProcessTaskAppointmentDtoArray(serviceHelper);

    // Se a movimentação é feita como usuário responsável pela atividade ou como gestor do processo
    var managerMode = false;

    // Chama o serviço para iniciar a solicitação e recebe o retorno
    // O retorno do startProcess é um String[][], ou no Soap, um StringArrayArray
    var retornoStartProcess = service.startProcess(
    		INTEGRADOR.matricula,
    		INTEGRADOR.senha,
    		INTEGRADOR.empresa,
    		processId,
    		choosedState,
    		colleagueIds,
    		comments,
    		userId,
    		completeTask,
    		attachments,
    		cardData,
    		appointments,
    		managerMode
	);

    var retorno = stringArrayArrayToSimpleObject(retornoStartProcess);

    if (retorno.ERROR) {
    	// Interrompe a execução ou movimentação e retorna um erro com a resposta do serviço
    	throw "Solicitação não iniciada: " + retorno.ERROR;
    } else {
    	// Imprime o código da solicitação criada pelo serviço e depois imprime todos os dados que foram retornados
    	log.info("Solicitação " + retorno.iProcess + " criada com sucesso");
    	log.dir(retorno)
    }
}

function getECMWorkflowEngineServiceHelper() {
    return ServiceManager.getService(SERVICOS.workflowEngineService).getBean();
}

function getECMWorkflowEngineService(serviceHelper) {
	var serviceLocator = serviceHelper.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
    return serviceLocator.getWorkflowEngineServicePort();
}

/**
 * Cria uma variável similar ao String[] que é utilizado pelo Soap
 * @param serviceHelper O wsdl que contém o mapeamento da estrutura de um objeto do tipo net.java.dev.jaxb.array.StringArray
 * @returns Um objeto do tipo net.java.dev.jaxb.array.StringArray conforme o mapeamento do wsdl
 */
function createStringArray(serviceHelper) {
	return serviceHelper.instantiate('net.java.dev.jaxb.array.StringArray');
}


/**
 * Cria uma variável similar ao String[][] que é utilizado pelo Soap
 * @param serviceHelper O wsdl que contém o mapeamento da estrutura de um objeto do tipo net.java.dev.jaxb.array.StringArrayArray
 * @returns Um objeto do tipo net.java.dev.jaxb.array.StringArrayArray conforme o mapeamento do wsdl
 */
function createStringArrayArray(serviceHelper) {
	return serviceHelper.instantiate('net.java.dev.jaxb.array.StringArrayArray');
}


/**
 * Cria uma variável similar ao ProcessAttachmentDto[] que é utilizado pelo Soap
 * @param serviceHelper O wsdl que contém o mapeamento da estrutura de um objeto do tipo com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray
 * @returns Um objeto do tipo com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray conforme o mapeamento do wsdl
 */
function createProcessAttachmentDtoArray(serviceHelper) {
	return serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray');
}

/**
 * Cria uma variável similar ao ProcessTaskAppointmentDto[] que é utilizado pelo Soap.
 *
 * Estes apontamentos não são mais usados, mas como não devemos mexer na assinatura dos métodos Soap para não quebrar os stubs já gerados é obrigatório mandar, ainda que vazio
 *
 * @param serviceHelper O wsdl que contém o mapeamento da estrutura de um objeto do tipo com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray
 * @returns Um objeto do tipo com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray conforme o mapeamento do wsdl
 */
function createProcessTaskAppointmentDtoArray(serviceHelper) {
	return serviceHelper.instantiate('com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray');
}

/**
 * Transforma um objeto do tipo StringArrayArray (String[][]) em um objeto Javascript
 *
 * <item>
 *   <item>campo</item>
 *   <item>valor</item>
 * </item>
 *
 * Vira:
 *
 * {'campo': 'valor'}
 *
 * @param stringArrayArray
 * @returns Um objeto do tipo javascript
 */
function stringArrayArrayToSimpleObject(stringArrayArray) {
	var objeto = {};
	for(var i = 0; i < stringArrayArray.getItem().size(); i++) {
		var item = stringArrayArray.getItem().get(i).getItem();
		objeto[item.get(0)] = item.get(1);
	}

	return objeto;
}
```
