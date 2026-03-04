# hAPI (nova)

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=778540422](https://tdn.totvs.com/pages/viewpage.action?pageId=778540422)

---

# Índice



A hAPI é uma API (Application Programming Interface) disponibilizada pela plataforma Fluig que permite o acesso a diversas funcionalidades do sistema. Essa API é amplamente utilizada no desenvolvimento de processos e aplicações personalizadas, e é fundamental para quem deseja tirar o máximo proveito da plataforma. Nesta documentação, apresentaremos as principais funções da hAPI e como utilizá-las.



# Descrição

* * *

O objeto mais importante nos [eventos de processo](https://tdn.totvs.com/display/fluig/Eventos+de+Processos) é a [hAPI (nova)](https://tdn.totvs.com/pages/viewpage.action?pageId=778540422). Com ele o desenvolvedor pode consultar e atribuir dados do formulário, obter informações da movimentação como id do histórico de movimentação, [thread](https://tdn.totvs.com/display/fluig/Thread+de+Processo), atividades para onde a solicitação atual pode ser movimentada, outras atividades ativas, solicitação que gerou a solicitação atual (no caso de ser um sub-processo), link para uma determinada atividade (que pode ser usado para o envio de notificações), calcular prazo de conclusão dinamicamente, trabalhar com os anexos da solicitação (adicionando, listando, ou publicando os itens atuais no GED) e atribuir valores como prazo de conclusão, comentários.

Além disso, consegue tomar ações como transferir atividade e iniciar solicitações.

Pode ser utilizada em todos os eventos do processo (before, after, services e condicionais), evento de notificação (onNotify) e eventos globais (como displayCentralTask, afterSaveCard, entre outros). Neste último caso, por não estar associado diretamente à uma solicitação, nem todos os métodos está disponíveis e a documentação do método deve ser consultada antes do desenvolvimento.



Esta documentação encontra-se em construção e por isso alguns métodos ainda não estão disponíveis. Para visualizar todos os métodos, acesse nossa [documentação antiga](https://tdn.totvs.com).



# Métodos da instância

* * *

[String getCardValue(String fieldName)](https://tdn.totvs.com/pages/viewpage.action?pageId=778540423)

-   Retorna o valor do campo *fieldName* no formulário 



void setCardValue(String fieldName, String newValue)

-   Define o valor *newValue* ao campo de formulário *fieldName*



Map<String,String> getCardData(int instanceId)

-   Retorna todos os dados do formulário da solicitação *instanceId*.



void addCardChild(String tableName, Map<String, String> childData)

-   Adiciona um novo registro filho na tabela *tableName* com os dados *childData*.



boolean removeCardChild(String tableName, int index)

-   Remove o registro filho de ordem *index* da tabela *tableName*.



List<Integer> getChildrenInstances(int instanceId)

-   Retorna uma lista com os número de solicitações da solicitações geradas diretamente a partir da solicitação *instanceId*.



Integer getParentInstance(int instanceId)

-   Retorna o número da solicitação que originou a solicitação atual, ou zero, caso não seja um subprocesso.



List<Integer> getActiveStates()

-   Retorna uma lista com os códigos de atividades ativas na solicitação atual



void setDueDate(int instanceId, int threadSequence, String userId, Object data, int timeInSeconds)

-   Define a data *data* e horário *timeInSeconds* a tarefa atual da thread *threadSequence* do usuário *userId* da solicitação *instanceId*



void transferTask(List<String> users, String comment, int threadSequence)

-   Transfere uma atividade ativa na thread *threadSequence* da solicitação atual para os usuários *users* e adiciona o comentário *comment*.



void transferTask(List<String> users, String comment)

-   Transfere uma atividade ativa na thread 0 da solicitação atual para os usuários *users* e adiciona o comentário *comment*.



[WorkflowSaveAndSendResultVO startProcess(String processId, int chosenState, List<String> colleagues, String comments, boolean completeTask, Map cardData, Boolean managerMode)](https://tdn.totvs.com/pages/viewpage.action?pageId=778540424)

(Depreciado)

-   Inicia uma solicitação do processo *processId*, encaminhando pra tarefa *chosenState* e para os usuários *colleagues* com o comentário *comments*  e dados de formulário *cardData.*



setColleagueReplacement(userId)

setTaskComments("userId", numProcesso,  numThread, "obs")



getAdvancedProperty("propriedade")

calculateDeadLineHours(data, segundos, prazo, periodId)

calculateDeadLineTime(data, segundos, prazo, periodId)

getUserTaskLink(numAtiv)

createAdHocTasks(workflowProcessInstanceId, sequenceId, assunto, detalhamento, listatvidadesAhoc)

listAttachments()

publishWorkflowAttachment(documento)

attachDocument(documentId)

getAvailableStatesDetail(companyId, userId, processId, processInstanceId, threadSequence)



[int getDocumentId()](https://tdn.totvs.com/pages/viewpage.action?pageId=778540423)

Retorna o código de documento do registro de formulário atual



[int getVersion()](https://tdn.totvs.com/pages/viewpage.action?pageId=778540423)

Retorna a versão do registro de formulário atual



[int getCardIndex()](https://tdn.totvs.com/pages/viewpage.action?pageId=778540423)

Retorna o código do formulário do qual o registro de formulário pertence



[int getValue(String fieldname)](https://tdn.totvs.com/pages/viewpage.action?pageId=778540423)

Retorna o valor do campo *fieldname* no registro de formulário atual. 



(Verificar links, todos apontam para a mesma documentação. Está correto?) -Samara



**Depreciado:**

getActualThread

setDueDate(long companyId, int processInstanceId, int movementSequence, String userId, Date newDueDate,
            int timeInSeconds)



<working in progress>
