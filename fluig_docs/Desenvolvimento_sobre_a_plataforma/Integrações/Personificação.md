# Personificação

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=567579891](https://tdn.totvs.com/pages/viewpage.action?pageId=567579891)

---

# Objetivo

* * *

O objetivo deste guia é apresentar o conceito de personificação, e listar os serviços que receberam o controle de personificação.

# Conceito

* * *

Personificação é quando uma pessoa executa ações em nome de outra. A plataforma possui serviços (APIs, datasets, webservices) que permitem que o usuário do contexto seja diferente do usuário logado. Por exemplo, o usuário acessa a API de workflow com o id "user1" e chama o método que movimenta uma solicitação workflow. Porém esse método tem um parâmetro que informa a partir de qual usuário será feita a movimentação, nesse caso pode ser passado o  id "user2", possibilitando que o user1 consiga movimentar uma solicitação que está com o user2. 
Esse recurso é essencial para automatizar alguns processos, no caso de ter um usuário "Integrador" que movimenta as solicitações atrasadas automaticamente. 

# Utilização

* * *

O recurso de Personificação está disponível no TOTVS Fluig Plataforma a partir da **atualização 1.7.1 (Crystal Lake)**. 

É possível controlar as permissões de acesso deste recurso pelo Painel de controle da plataforma, acessando o item Permissões e buscando a seguinte configuração:

-   **Tipo**: [Personification](https://tdn.totvs.com/pages/viewpage.action?pageId=593435351)
-   **Nome do recurso**: Personificação de usuários
-   **Permissão**: Personificar: Quando ativada, permite executar ações utilizando o ID de outro usuário.



# Itens que receberam controle de personificação

* * *

Além de ter a permissão liberada, é necessário que o serviço desejado tenha sido implementado com o controle de personificação. Confira a seguir a lista completa de webservices, APIs e datasets que suportam esse recurso:

## Services

Webservice

Método

Observações

*ECMCardIndexService*

-   getCardIndexesWithoutApprover
-   updateSimpleCardIndex
-   updateSimpleCardIndexWithDataset
-   updateSimpleCardIndexWithDatasetAndGeneralInfo
-   updateSimpleCardIndexWithRelatedDatasets
-   createSimpleCardIndex
-   createSimpleCardIndexWithDataset
-   createSimpleCardIndexWithDatasetPersisteType
-   createSimpleCardIndexWithRelatedDatasets
-   getCardIndexContent
-   getActiveCardIndex



*ECMCardService*

-   getCardVersion



*ECMColleagueGroupService*

-   getColleagueGroupsByColleagueId
-   getColleagueGroup
-   deleteColleagueGroup



*ECMColleagueService*

-   getColleague
-   colab
-   removeColleague
-   activateColleague



*ECMDashBoardService*

-   Todos os métodos menos o **getUrlEcm** que não usa personificação



*ECMDatasetService*

-   getDataset



*ECMDocumentService*

-   getActiveDocument
-   getDocumentContent
-   getDocumentVersion
-   getDocumentByExternalId
-   createSimpleDocument
-   findMostPopularDocuments
-   findMostPopularDocumentsOnDemand
-   deleteDocument
-   destroyDocument
-   findRecycledDocuments
-   restoreDocument
-   copyDocumentToUploadArea
-   updateSimpleDocument
-   moveDocument
-   updateGroupSecurityType
-   destroyDocumentApproval
-   approveDocument



*ECMFavoritesService*

-   findFavorites
-   findFavoritesProcess
-   addProcessToFavorites
-   addDocumentToFavorites
-   removeFavoriteDocument
-   removeFavoriteProcess
-   isFavoriteDocument



*ECMKnowledgeService*

-   findLastDocumentsByUser



*ECMOutstandingService*

-   transfer



*ECMReportService*

-   getReportContent



*ECMSearchDocumentServiceService*

-   searchDocuments
-   searchFavoritesDocuments
-   advancedSearchDocuments
-   advancedSearchDocumentsWithMetadata



*ECMWorkflowEngineService*

-   cancelInstance
-   cancelInstanceByReplacement
-   calculateDeadLineHours
-   calculateDeadLineTime
-   getAttachments
-   getAvailableProcess
-   getAvailableProcessOnDemand
-   getCardValue
-   getInstanceCardDataResponse
-   startProcess
-   startProcessClassic
-   saveAndSendTask
-   saveAndSendTaskByReplacement
-   saveAndSendTaskClassic
-   searchProcess
-   setAutomaticDecisionClassic
-   takeProcessTask
-   takeProcessTaskByReplacement
-   setTasksComments
-   createWorkFlowProcessVersion
-   releaseProcess
-   getHistories
-   getActualThread
-   getAllActiveStates
-   getAvailableStates
-   getAvailableUsers
-   getAllProcessAvailableToExport
-   getAllProcessAvailableToImport
-   getAvailableUsersStart
-   getAvailableUsersStartOnDemand
-   getProcessFormId
-   getWorkFlowProcessVersion



*ECMOutstandingService*

-   transfer



*ECMDashBoardService*

-   findMyDocumentsOnDemand



*ECMColleagueReplacementService*





*ECMCardIndexService*

-   getAttachmentsList
-   getCustomizationEvents
-   getFormDatasets
-   getFormFields



## APIs

API

Método

Observações

*/**ecm/document*

-   /create
-   /createDocument



*/2.0/documents*

-   createDocument
-   createPrivateDocument
-   updateFile 





/v2/documents

-   (PATCH) /{id}/users/{userCode}/hits
-   (PATCH) /{id}/users/{userCode}/version/{version}/hits



*/2.0/favorites*

-   findFavoritesDocuments/{colleagueId}/
-   findFavoritesProcess/{colleagueId}/



*/2.0/folderdocuments*

-   create



*/2.0/security*

-   changeUserPassword



*/2.0/users*

-   changeUserPassword



*hAPI*

-   publishWorkflowAttachment



## Endpoints

Veja a seguir quais os endpoints que recebem personificação:

-   *Content Management*, que envolve a parte ECM/Documentos.
-   *Process Management*, que envolve a parte de BPM/Processos.

Para consultar as APIs disponíveis, [acesse aqui](https://api.fluig.com/latest/process-management/swagger-ui/).[
](https://bpm.fluig.com/process-management/swagger-ui/)

Endpoint

Usercode

Observações

*Process*

-   ProcessRest-GET /v2/processes/{processId}/activities
-   ProcessRest-GET /v2/processes/{processId}/process-versions/{processVersion}/activities
-   ProcessRest-GET /v2/processes/{processId}/process-versions/{processVersion}/requests
-   ProcessRest-GET /v2/processes/{processId}/process-versions/{processVersion}/requests/tasks
-   ProcessRest-GET /v2/processes/{processId}/requests
-   ProcessRest-GET /v2/processes/{processId}/requests/tasks
-   ProcessRest-GET /v2/processes/{processId}/requests/tasks/resume
-   ProcessRest-POST /start



*Request*

-   RequestRest-GET /v2/requests/{processInstanceId}/tasks
-   RequestRest-GET /v2/requests/{processInstanceId}/possible-assignees
-   RequestRest-POST /v2/requests/{processInstanceId}/move 
-   RequestRest-GET /v2/requests/{processInstanceId}/histories
-   RequestRest-GET /v2/requests/{processInstanceId}/attachments/{attachmentSequence}/download
-   RequestRest-GET /v2/requests/{processInstanceId}/attachments/download
-   RequestRest-GET /v2/requests/{processInstanceId}
-   RequestRest-GET /v2/requests/{processInstanceId}/activities
-   RequestRest-GET /v2/requests/{processInstanceId}/attachments



*Activities*

-   ActivityRest-GET /v2/activities



*Tasks*

-   TaskRest-GET /v2/tasks



*Documents*

-   Documents-GET /v2/documents/{id}/users/{userCode}/hits
-   Documents-GET /v2/documents/{id}/users/{userCode}/version/{version}/hits



## Datasets

-   Document
-   Colleague

**Chamadas de datasets que usem:**

-   CardIndexDataset
-   MetaListDataset



# Exemplo de uso via API Rest

* * *

Para utilizar a personificação via API Rest é necessário acessar o serviço. Ao acessar a ferramenta configure os *endpoints* que deseja acessar.



**EXEMPLO**

[http://seudominio/process-management/api/v2/processes/seguranca/start](http://suaempresa/process-management/api/v2/processes/seguranca/start)

-   O endpoint utilizado no exemplo serve para iniciar uma solicitação.



**Configurando o token do usuário**

* * *

Exemplo utilizando jwt.token.



**O que é jwt.token?**

JWT é um padrão aberto de mercado definido pela RFC 7519 como um formato compacto e auto suficiente para transmitir informações entre as partes como um objeto JSON.

Dependendo do endpoint que esteja consumindo, será necessário passar as informações no body da requisição.



# Configurando a personificação

* * *

Qual a função do header em requisições HTTP?



O *header* (cabeçalho) é um conjunto de informações adicionais enviadas junto à requisição HTTP. Ele funciona como a 'etiqueta de uma encomenda': não contém os dados principais (que ficam no *body*), mas sim metadados importantes: como o tipo de conteúdo, autorização ou instruções que orientam o servidor sobre como interpretar e processar a mensagem. Abaixo temos alguns exemplos de utilização do Header:

**
Autenticação:** inclui um token de acesso para o servidor saber quem está chamando a API.
EXEMPLO Authorization: Bearer <token>


**Formato de dados:** indica que o conteúdo enviado/recebido é JSON.
EXEMPLO Content-Type: application/json


**Idioma ou customização:** informa preferências de resposta.
EXEMPLO Accept-Language: pt-BR



No Postman, o *header* (cabeçalho) é utilizado para configurar informações complementares que acompanham a requisição. Nele podem ser definidos, por exemplo, o tipo de conteúdo enviado (JSON, XML, etc.), dados de autorização para acesso à API e outras instruções necessárias para que o servidor interprete corretamente a requisição antes de processar os dados.

Abaixo vamos mostrar o passo a passo para a configuração do recurso personificação.



**01.** Na aba **Headers** adicione a chave "**X-Personification-UserCode**" \*\* e o valor "**usuárioComPermissãoDePersonificação**”.

A chave utilizada para a configuração é **X-Personification-UserCode**

**02\.** Após realizar as configurações, qualquer ação realizada, será feita no nome do usuário que foi utilizado na configuração de personificação.



EXEMPLO

Estou realizando o login com o usuário A, mas iniciei uma solicitação com o usuário B, logo, ao acessar a Central de Tarefas do usuário B a solicitação estará inicializada por ele.



Abaixo temos alguns exemplos visuais utilizando a personificação
