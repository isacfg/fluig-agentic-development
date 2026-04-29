# Webservices SOAP com Identity habilitado

> **Fonte:** [https://tdn.totvs.com/display/fluig/Webservices+SOAP+com+Identity+habilitado](https://tdn.totvs.com/display/fluig/Webservices+SOAP+com+Identity+habilitado)

---

# Índice



# Objetivo

O objetivo deste guia é apresentar formas de autenticação no webservice nos casos em que a plataforma utiliza o TOTVS Identity.



# Pré-requisitos

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre o TOTVS Fluig Plataforma
-   Visão geral sobre integração de sistemas
-   WebServices
-   SOAP



Dica!

A equipe TOTVS Fluig recomenda a utilização da API em exemplos que utilizam o método SOAP, pois seu uso é mais complexo em comparação com a API e está caindo em desuso.



# Visão geral

O Identity é um componente para gestão de identidades. Sendo que, para realizar a autenticação os usuários são reconhecidos por *login* (e-mail) e senha.

Ao integrar o Identity com a plataforma, os webservices SOAP da plataforma TOTVS Fluig irão exigir que a autenticação seja realizada com o *login* (e-mail) e senha do Identity.



Atenção

Integrações que usam a senha do usuário como **MD5** deixarão de funcionar quando o Identity estiver habilitado.



Com isso, para projetos que hoje utilizam algum tipo de usuário integrador, é necessário que este usuário esteja previamente cadastrado e relacionado a empresa no Identity.

O diagrama abaixo demonstra o processo de autenticação em webservices SOAP quando existir integração com Identity.

Atenção

Integrações com o Identity que tiverem várias requisições em um curto período de tempo devem usar o serviço de Token.

Como todas as requisições vão até o Identity para validar o usuário e senha e, dependendo da configuração, este pode ter que perguntar ao *Active Directory* pela senha, uma técnica de desenvolvimento que terá que ser aplicada para maior velocidade de integrações é a de [Token](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007#UtilizaçãodeWebservices-ECMTokenService).

Usando o serviço de token, utilize o método getToken para ter acesso a um token, e nós próximos serviços de qualquer módulo, basta colocar no nome de usuário (*username*) o token gerado. A única limitação desse serviço é que o Token dura apenas 15 minutos, após esse período será necessário gerar um novo token.

#
Utilizando serviços com o Identity habilitado

Alguns métodos de serviços necessitam do 'userId' para sua utilização. Para estes casos você pode obter o 'userId' pelo *e-mail* conforme o exemplo abaixo:

```
function afterProcessFinish(processId){
		// Obtém a instância do serviço 'ColleagueService'
	 	var colleagueServiceProvider = ServiceManager.getServiceInstance("ColleagueService");
	 	// Instancia o serviço
	 	var colleagueServiceLocator = colleagueServiceProvider.instantiate("com.totvs.technology.ecm.foundation.ws.ECMColleagueServiceService");
	 	var colleagueService = colleagueServiceLocator.getColleagueServicePort();
 		// Obtém os dados do usuário pelo email do Identity
	 	var colleaguesList = colleagueService.getColleaguesMail("usuario","senha","1","[email protected]").getItem();
	 	var userId = null;
	 	if(colleaguesList != null && colleaguesList.size() > 0) {
	 		//Obtém o coleague retornado
	 		userId = colleaguesList.get(0).getColleagueId()
	 		log.info("userId: " + userId);
	 	}
	 	// Obtém a instância do serviço 'WorkflowEngineService'
	 	var workflowEngineServiceProvider = ServiceManager.getServiceInstance("WorkflowEngineService");
	 	// Instancia o serviço
		var workflowEngineServiceLocator = workflowEngineServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
		var workflowEngineService = workflowEngineServiceLocator.getWorkflowEngineServicePort();
	    // Cria o ObjectFactory
	    var objectFactory = workflowEngineServiceProvider.instantiate("net.java.dev.jaxb.array.ObjectFactory");
	    // Matriz de string
 	    var cardData = objectFactory.createStringArrayArray();
		// Array de anexos
	    var processAttachmentDtoArray = workflowEngineServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray");
	 	// Array com a id dos usuários
	 	var colleaguesId = objectFactory.createStringArray();
	 	colleaguesId.getItem().add("1");
	 	// Array de apontamentos
	    var appointment =  workflowEngineServiceProvider.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray");;

	    // Cria uma solicitação com os dados obtidos
	    workflowEngineService.startProcess("usuario", "senha", 1, "nomeDoProcesso", 5, colleaguesId, "Comentário: Movimentando automaticamente", userId, false, processAttachmentDtoArray, cardData, appointment, false);
}
```
