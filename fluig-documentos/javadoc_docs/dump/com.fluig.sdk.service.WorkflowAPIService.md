# Interface WorkflowAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface WorkflowAPIService
extends BaseAPIService
Fornece acesso aos serviços de workflow.
  Since:
1.5
Author:
vanei
```

```java
public interface WorkflowAPIService
extends BaseAPIService
```

Fornece acesso aos serviços de workflow.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `ProcessTaskVO` | `assumeProcessTask​(long companyId, String userId, int processInstanceId, int movementSequence, String replacementId)` | Faz com que o usuário repassado assuma a tarefa. |
| `AssumeProcessTaskResultVO` | `assumeProcessTask​(AssumeProcessTaskVO assumeProcessTaskVO)` | Faz com que o usuário repassado assuma a tarefa. |
| `AssumeProcessTasksResultVO` | `assumeProcessTasks​(AssumeProcessTasksVO assumeProcessTasksVO)` | Faz com que os usuários repassados assumam as tarefas vinculadas aos mesmos. |
| `CancelInstanceResultVO` | `cancelInstance​(CancelInstanceVO cancelInstanceVO)` |  |
| `CancelInstancesResultVO` | `cancelInstances​(CancelInstancesVO cancelInstanceVO)` |  |
| `List<String>` | `convertProcess​(List<Integer> processInstanceIds, Integer newVersion, List<Integer> actualStates, List<Integer> newStates)` | Converte as solicitaçõe de um processos para uma nova versão. |
| `ProcessObservationVO` | `createProcessObservation​(ProcessObservationVO processObservationVO)` | Insere um complemento em uma solicitação |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO>` | `findActivities​(String processId, Integer processVersion)` | Lista as atividades de uma versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO>` | `findActivities​(String processId, Integer processVersion, Boolean active)` | Lista as atividades de uma versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO>` | `findActivities​(Set<Integer> processInstanceId, Integer movementSequence, Boolean active, Set<String> slaStatus, String processId, String requester, String requesterName, String manager, String initialDeadlineDate, String finalDeadlineDate, String initialStartDate, String finalStartDate, String initialWarningDate, String finalWarningDate, String initialEndDate, String finalEndDate, Integer processVersion, Integer stateSequence, Integer page, Integer pageSize, List<String> expand, List<String> order, Set<String> formFields, List<Long> requesterLocal, List<Long> assigneeLocal)` | Lista as atividades de uma versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findAssignedToMeTasks​(String processId, String initialStartDate, String finalStartDate, String requester, String manager, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findManagedByMeTasks​(String processId, String initialStartDate, String finalStartDate, String assignee, String requester, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findMyRequestsSLA​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String assignee, String manager, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findMyRequestsTasks​(String processId, String initialStartDate, String finalStartDate, String assignee, String manager, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `List<ProcessObservationVO>` | `findObservations​(Integer processInstanceId, Integer stateSequence, Integer threadSequence)` | Retorna a lista de complementos em uma solicitação |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO>` | `findProcessVersions​(String processId, Integer version)` | Listagem de versões de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO>` | `findProcessVersions​(String processId, Integer page, Integer pageSize, List<String> order, List<String> expand, Integer version, Integer formId, Boolean formExistent, Boolean editing, Boolean active, Boolean blocked, Boolean requiresPassword, Integer bpmnVersion, Boolean inheritFormSecurity, Boolean mobileReady)` | Listagem de versões de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO>` | `findProcessVersionsStates​(String processId, Integer processVersion)` | Listagem de estados de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO>` | `findProcessVersionsStates​(String processId, Integer processVersion, Integer stateSequence, Integer page, Integer pageSize, String stateType, String bpmnType, String stateName, String stateDescription, Boolean interactives)` | Listagem de estados de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO>` | `findProcessVersionsStates​(String processId, Integer processVersion, String bpmnType)` | Listagem de estados de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO>` | `findRequests​(String processId, Integer processVersion)` | Listagem de solicitações de uma determinada versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO>` | `findRequests​(String processId, Integer processVersion, Set<String> status)` | Listagem de solicitações de uma determinada versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO>` | `findRequests​(Set<Integer> processInstanceId, Integer initialProcessInstanceId, Integer finalProcessInstanceId, String assignee, Set<String> participants, Set<String> completeColleagueIds, Set<String> status, Set<String> slaStatus, String processId, String requester, String assigneeName, String requesterName, String manager, String initialDeadlineDate, String finalDeadlineDate, String initialStartDate, String finalStartDate, String initialWarningDate, String finalWarningDate, String initialEndDate, String finalEndDate, Integer processVersion, Integer stateSequence, Integer page, Integer pageSize, List<String> expand, List order, Set<String> formFields, List<Long> requesterLocal, List<Long> assigneeLocal)` | Listagem de solicitações de uma determinada versão de um processo |
| `RequestSLAVO` | `findRequestSLAByProcessInstanceId​(int processInstanceId, boolean populateCurrentTasks, boolean calculate, boolean populateCardFields, boolean populateLocals, boolean assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `RequestSLAVO` | `findRequestSLAByProcessInstanceId​(String processInstanceId, String expand, String calculate)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA()` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String requester, String assignee, String manager, String requesterLocals, String assigneeLocals, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, List<String> statusRequiredList)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, List<String> statusRequiredList, boolean returnCurrentTasks)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> statusRequiredList, boolean returnCurrentTasks)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> statusRequiredList, Date initialStartDate, Date finalStartDate, Date initialDeadlineDate, Date finalDeadlineDate, Date initialWarningDate, Date finalWarningDate, boolean returnCurrentTasks, String requester, String assignee, String manager, List<String> requesterLocals, List<String> assigneeLocals, List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams, boolean calculate, int page, int pageSize, boolean populateCardFields, boolean populateLocalsValue, boolean populateAssigneeLocalsValue)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLAAssignedToMe​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String requester, String manager, String requesterLocals, String assigneeLocals, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLAManagedByMe​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String requester, String assignee, String requesterLocals, String assigneeLocals, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findSLATasks​(String processId, String initialStartDate, String finalStartDate, String assignee, String requester, String manager, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `ProcessInstanceInfoVO` | `getActiveTasks​(Integer processInstanceId)` | Retorna uma lista das atividades pendentes de um processo |
| `List<ProcessVersionVO>` | `getAvailableProcess​(long tenantId, String userId)` | Retorna uma lista de processos disponíveis para o usuário |
| `Integer` | `getProcessVersion​(String processId)` | Retorna a versão de um processo. |
| `boolean` | `importProcess​(String xml, String processId, Boolean release)` | Importa um processo via XML |
| `boolean` | `importProcess​(String xml, String processId, Integer formId, Boolean release)` | Importa um processo via XML |
| `List<ProcessDefinitionVO>` | `listProcess​(String pattern, int limit, int offset)` | Retorna todos os processos da empresa. |
| `List<ProcessDefinitionVO>` | `listSlaProcess()` | Retorna todos os processos da empresa. |
| `boolean` | `releaseLatestVersion​(String processId)` | Libera a ultima versão do processo |
| `boolean` | `releaseVersion​(String processId, Integer version)` | Libera uma versão do processo |
| `ResumeProcessTaskVO` | `resumeAssignedToMeTasks​(String processId, String startDate, String endDate, String requester, String manager)` |  |
| `ResumeProcessTaskVO` | `resumeManagedByMeTasks​(String processId, String startDate, String endDate, String requester, String assignee)` |  |
| `ResumeRequestsSLAVO` | `resumeMyRequestsSLA​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String assignee, String manager)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante. |
| `ResumeProcessTaskVO` | `resumeMyRequestsTasks​(String processId, String startDate, String endDate, String assignee, String manager)` |  |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA()` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String requester, String assignee, String manager, String requesterLocals, String assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes, Map<String,​String> cardFilters)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> countersRequiredList)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> countersRequiredList, Date initialStartDate, Date finalStartDate, Date initialDeadlineDate, Date finalDeadlineDate, Date initialWarningDate, Date finalWarningDate, String requester, String assignee, String manager, List<String> requesterLocalsList, List<String> assigneeLocalsList)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLAAssignedToMe​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String requester, String manager, String requesterLocals, String assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLAManagedByMe​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String requester, String assignee, String requesterLocals, String assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor. |
| `ResumeProcessTaskVO` | `resumeSLATasks​(String processId, String startDate, String endDate, String assignee, String requester, String manager)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.WorkflowAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.WorkflowAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### listProcess

```java
List<ProcessDefinitionVO> listProcess​(String pattern,
                                      int limit,
                                      int offset)
                               throws Exception
```

Retorna todos os processos da empresa.

- **Returns:** lista de processos.
- **Throws:** `` `Exception` ``
- **Since:** 1.6

---

### getProcessVersion

```java
Integer getProcessVersion​(String processId)
                   throws com.fluig.sdk.api.common.SDKException
```

Retorna a versão de um processo.

- **Parameters:** `processId` - ID do processo.
- **Returns:** Versão do processo.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### getAvailableProcess

```java
List<ProcessVersionVO> getAvailableProcess​(long tenantId,
                                           String userId)
                                    throws Exception
```

Retorna uma lista de processos disponíveis para o usuário

- **Parameters:** `tenantId` - - ID do tenant
- **Returns:** lista de processos disponíveis para o usuário.
- **Throws:** `` `Exception` ``
- **Since:** 1.5.6

---

### getActiveTasks

```java
ProcessInstanceInfoVO getActiveTasks​(Integer processInstanceId)
                              throws Exception
```

Retorna uma lista das atividades pendentes de um processo

- **Parameters:** `processInstanceId` - - Numero da solicitação
- **Returns:** lista das atividades pendentes de um processo.
- **Throws:** `` `Exception` ``
- **Since:** 1.5.11

---

### createProcessObservation

```java
ProcessObservationVO createProcessObservation​(ProcessObservationVO processObservationVO)
                                       throws com.fluig.sdk.api.common.SDKException
```

Insere um complemento em uma solicitação

- **Parameters:** `processObservationVO` - - Objeto com as informações do complemento
- **Returns:** processObservationVO - Objeto com as informações do complemento incluindo Id criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.8

---

### findObservations

```java
List<ProcessObservationVO> findObservations​(Integer processInstanceId,
                                            Integer stateSequence,
                                            Integer threadSequence)
```

Retorna a lista de complementos em uma solicitação

- **Parameters:** `processInstanceId` - - Numero da solicitação
- **Returns:** processObservationVO - Lista com os complementos da solicitação.
- **Since:** 1.5.8

---

### assumeProcessTask

```java
ProcessTaskVO assumeProcessTask​(long companyId,
                                String userId,
                                int processInstanceId,
                                int movementSequence,
                                String replacementId)
                         throws com.fluig.sdk.api.common.SDKException
```

Faz com que o usuário repassado assuma a tarefa.

- **Parameters:** `companyId` - - Código da empresa.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.11

---

### assumeProcessTask

```java
AssumeProcessTaskResultVO assumeProcessTask​(AssumeProcessTaskVO assumeProcessTaskVO)
                                     throws NamingException
```

Faz com que o usuário repassado assuma a tarefa.

- **Parameters:** `assumeProcessTaskVO` - VO com os atributos para assumir a tarefa.
- **Returns:** Resultado do processo de assumir.
- **Throws:** `` `NamingException` ``
- **Since:** 1.5.11

---

### assumeProcessTasks

```java
AssumeProcessTasksResultVO assumeProcessTasks​(AssumeProcessTasksVO assumeProcessTasksVO)
                                       throws NamingException
```

Faz com que os usuários repassados assumam as tarefas vinculadas aos mesmos.

- **Parameters:** `assumeProcessTasksVO` - VO com os atributos para assumir as tarefas.
- **Returns:** Resultado do processo de assumir.
- **Throws:** `` `NamingException` ``
- **Since:** 1.5.11

---

### cancelInstance

```java
CancelInstanceResultVO cancelInstance​(CancelInstanceVO cancelInstanceVO)
                               throws NamingException
```

- **Throws:** `` `NamingException` ``

---

### cancelInstances

```java
CancelInstancesResultVO cancelInstances​(CancelInstancesVO cancelInstanceVO)
                                 throws NamingException
```

- **Throws:** `` `NamingException` ``

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                      Map<String,​String> cardFilters,
                                      List<String> countersRequiredList)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                      Map<String,​String> cardFilters,
                                      List<String> countersRequiredList,
                                      Date initialStartDate,
                                      Date finalStartDate,
                                      Date initialDeadlineDate,
                                      Date finalDeadlineDate,
                                      Date initialWarningDate,
                                      Date finalWarningDate,
                                      String requester,
                                      String assignee,
                                      String manager,
                                      List<String> requesterLocalsList,
                                      List<String> assigneeLocalsList)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA()
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                      Map<String,​String> cardFilters)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(String processes,
                                      String cardFilters,
                                      String countersRequired,
                                      String initialStartDate,
                                      String finalStartDate,
                                      String initialDeadlineDate,
                                      String finalDeadlineDate,
                                      String initialWarningDate,
                                      String finalWarningDate,
                                      String requester,
                                      String assignee,
                                      String manager,
                                      String requesterLocals,
                                      String assigneeLocals)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(String processes,
                                                                                                       String cardFilters,
                                                                                                       String statusRequired,
                                                                                                       String initialStartDate,
                                                                                                       String finalStartDate,
                                                                                                       String initialDeadlineDate,
                                                                                                       String finalDeadlineDate,
                                                                                                       String initialWarningDate,
                                                                                                       String finalWarningDate,
                                                                                                       String expand,
                                                                                                       String requester,
                                                                                                       String assignee,
                                                                                                       String manager,
                                                                                                       String requesterLocals,
                                                                                                       String assigneeLocals,
                                                                                                       String order,
                                                                                                       String calculate,
                                                                                                       String page,
                                                                                                       String pageSize)
                                                                                                throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um LinkedHashSet de RequestSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       Map<String,​String> cardFilters,
                                                                                                       List<String> statusRequiredList,
                                                                                                       Date initialStartDate,
                                                                                                       Date finalStartDate,
                                                                                                       Date initialDeadlineDate,
                                                                                                       Date finalDeadlineDate,
                                                                                                       Date initialWarningDate,
                                                                                                       Date finalWarningDate,
                                                                                                       boolean returnCurrentTasks,
                                                                                                       String requester,
                                                                                                       String assignee,
                                                                                                       String manager,
                                                                                                       List<String> requesterLocals,
                                                                                                       List<String> assigneeLocals,
                                                                                                       List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                       boolean calculate,
                                                                                                       int page,
                                                                                                       int pageSize,
                                                                                                       boolean populateCardFields,
                                                                                                       boolean populateLocalsValue,
                                                                                                       boolean populateAssigneeLocalsValue)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA()
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       List<String> statusRequiredList)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       List<String> statusRequiredList,
                                                                                                       boolean returnCurrentTasks)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       Map<String,​String> cardFilters,
                                                                                                       List<String> statusRequiredList,
                                                                                                       boolean returnCurrentTasks)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findMyRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findMyRequestsSLA​(String processes,
                                                                                                         String cardFilters,
                                                                                                         String statusRequired,
                                                                                                         String initialStartDate,
                                                                                                         String finalStartDate,
                                                                                                         String initialDeadlineDate,
                                                                                                         String finalDeadlineDate,
                                                                                                         String initialWarningDate,
                                                                                                         String finalWarningDate,
                                                                                                         String expand,
                                                                                                         String assignee,
                                                                                                         String manager,
                                                                                                         String order,
                                                                                                         String calculate,
                                                                                                         String page,
                                                                                                         String pageSize)
                                                                                                  throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLAAssignedToMe

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLAAssignedToMe​(String processes,
                                                                                                                   String cardFilters,
                                                                                                                   String statusRequired,
                                                                                                                   String initialStartDate,
                                                                                                                   String finalStartDate,
                                                                                                                   String initialDeadlineDate,
                                                                                                                   String finalDeadlineDate,
                                                                                                                   String initialWarningDate,
                                                                                                                   String finalWarningDate,
                                                                                                                   String expand,
                                                                                                                   String requester,
                                                                                                                   String manager,
                                                                                                                   String requesterLocals,
                                                                                                                   String assigneeLocals,
                                                                                                                   String order,
                                                                                                                   String calculate,
                                                                                                                   String page,
                                                                                                                   String pageSize)
                                                                                                            throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeMyRequestsSLA

```java
ResumeRequestsSLAVO resumeMyRequestsSLA​(String processes,
                                        String cardFilters,
                                        String countersRequired,
                                        String initialStartDate,
                                        String finalStartDate,
                                        String initialDeadlineDate,
                                        String finalDeadlineDate,
                                        String initialWarningDate,
                                        String finalWarningDate,
                                        String assignee,
                                        String manager)
                                 throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLAAssignedToMe

```java
ResumeRequestsSLAVO resumeRequestsSLAAssignedToMe​(String processes,
                                                  String cardFilters,
                                                  String countersRequired,
                                                  String initialStartDate,
                                                  String finalStartDate,
                                                  String initialDeadlineDate,
                                                  String finalDeadlineDate,
                                                  String initialWarningDate,
                                                  String finalWarningDate,
                                                  String requester,
                                                  String manager,
                                                  String requesterLocals,
                                                  String assigneeLocals)
                                           throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestSLAByProcessInstanceId

```java
RequestSLAVO findRequestSLAByProcessInstanceId​(int processInstanceId,
                                               boolean populateCurrentTasks,
                                               boolean calculate,
                                               boolean populateCardFields,
                                               boolean populateLocals,
                                               boolean assigneeLocals)
                                        throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processInstanceId` - Código da solicitação.
- **Returns:** RequestSLAVO
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestSLAByProcessInstanceId

```java
RequestSLAVO findRequestSLAByProcessInstanceId​(String processInstanceId,
                                               String expand,
                                               String calculate)
                                        throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processInstanceId` - Código da solicitação.
- **Returns:** RequestSLAVO
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLAManagedByMe

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLAManagedByMe​(String processes,
                                                                                                                  String cardFilters,
                                                                                                                  String statusRequired,
                                                                                                                  String initialStartDate,
                                                                                                                  String finalStartDate,
                                                                                                                  String initialDeadlineDate,
                                                                                                                  String finalDeadlineDate,
                                                                                                                  String initialWarningDate,
                                                                                                                  String finalWarningDate,
                                                                                                                  String expand,
                                                                                                                  String requester,
                                                                                                                  String assignee,
                                                                                                                  String requesterLocals,
                                                                                                                  String assigneeLocals,
                                                                                                                  String order,
                                                                                                                  String calculate,
                                                                                                                  String page,
                                                                                                                  String pageSize)
                                                                                                           throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLAManagedByMe

```java
ResumeRequestsSLAVO resumeRequestsSLAManagedByMe​(String processes,
                                                 String cardFilters,
                                                 String countersRequired,
                                                 String initialStartDate,
                                                 String finalStartDate,
                                                 String initialDeadlineDate,
                                                 String finalDeadlineDate,
                                                 String initialWarningDate,
                                                 String finalWarningDate,
                                                 String requester,
                                                 String assignee,
                                                 String requesterLocals,
                                                 String assigneeLocals)
                                          throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### listSlaProcess

```java
List<ProcessDefinitionVO> listSlaProcess()
                                  throws Exception
```

Retorna todos os processos da empresa.

- **Returns:** lista de processos.
- **Throws:** `` `Exception` ``
- **Since:** 1.6

---

### resumeMyRequestsTasks

```java
ResumeProcessTaskVO resumeMyRequestsTasks​(String processId,
                                          String startDate,
                                          String endDate,
                                          String assignee,
                                          String manager)
                                   throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResumeProcessTaskVO objeto com o total de tarefas com base no processo
- **Throws:** `` `Exception` ``

---

### resumeAssignedToMeTasks

```java
ResumeProcessTaskVO resumeAssignedToMeTasks​(String processId,
                                            String startDate,
                                            String endDate,
                                            String requester,
                                            String manager)
                                     throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResumeProcessTaskVO objeto com o total de tarefas com base no processo
- **Throws:** `` `Exception` ``

---

### resumeSLATasks

```java
ResumeProcessTaskVO resumeSLATasks​(String processId,
                                   String startDate,
                                   String endDate,
                                   String assignee,
                                   String requester,
                                   String manager)
                            throws Exception
```

- **Throws:** `` `Exception` ``

---

### resumeManagedByMeTasks

```java
ResumeProcessTaskVO resumeManagedByMeTasks​(String processId,
                                           String startDate,
                                           String endDate,
                                           String requester,
                                           String assignee)
                                    throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResumeProcessTaskVO objeto com o total de tarefas com base no processo
- **Throws:** `` `Exception` ``

---

### findMyRequestsTasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findMyRequestsTasks​(String processId,
                                                                                                                   String initialStartDate,
                                                                                                                   String finalStartDate,
                                                                                                                   String assignee,
                                                                                                                   String manager,
                                                                                                                   String page,
                                                                                                                   String pageSize,
                                                                                                                   String statusTypeTaskRequest,
                                                                                                                   String calculate,
                                                                                                                   String expand,
                                                                                                                   String cardFilters)
                                                                                                            throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo com base na tarefa
- **Throws:** `` `Exception` ``

---

### findAssignedToMeTasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findAssignedToMeTasks​(String processId,
                                                                                                                     String initialStartDate,
                                                                                                                     String finalStartDate,
                                                                                                                     String requester,
                                                                                                                     String manager,
                                                                                                                     String page,
                                                                                                                     String pageSize,
                                                                                                                     String statusTypeTaskRequest,
                                                                                                                     String calculate,
                                                                                                                     String expand,
                                                                                                                     String cardFilters)
                                                                                                              throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo com base na tarefa
- **Throws:** `` `Exception` ``

---

### findSLATasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findSLATasks​(String processId,
                                                                                                            String initialStartDate,
                                                                                                            String finalStartDate,
                                                                                                            String assignee,
                                                                                                            String requester,
                                                                                                            String manager,
                                                                                                            String page,
                                                                                                            String pageSize,
                                                                                                            String statusTypeTaskRequest,
                                                                                                            String calculate,
                                                                                                            String expand,
                                                                                                            String cardFilters)
                                                                                                     throws Exception
```

- **Throws:** `` `Exception` ``

---

### findManagedByMeTasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findManagedByMeTasks​(String processId,
                                                                                                                    String initialStartDate,
                                                                                                                    String finalStartDate,
                                                                                                                    String assignee,
                                                                                                                    String requester,
                                                                                                                    String page,
                                                                                                                    String pageSize,
                                                                                                                    String statusTypeTaskRequest,
                                                                                                                    String calculate,
                                                                                                                    String expand,
                                                                                                                    String cardFilters)
                                                                                                             throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo com base na tarefa
- **Throws:** `` `Exception` ``

---

### findProcessVersions

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO> findProcessVersions​(String processId,
                                                                                                                  Integer version)
                                                                                                           throws Exception
```

Listagem de versões de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersions

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO> findProcessVersions​(String processId,
                                                                                                                  Integer page,
                                                                                                                  Integer pageSize,
                                                                                                                  List<String> order,
                                                                                                                  List<String> expand,
                                                                                                                  Integer version,
                                                                                                                  Integer formId,
                                                                                                                  Boolean formExistent,
                                                                                                                  Boolean editing,
                                                                                                                  Boolean active,
                                                                                                                  Boolean blocked,
                                                                                                                  Boolean requiresPassword,
                                                                                                                  Integer bpmnVersion,
                                                                                                                  Boolean inheritFormSecurity,
                                                                                                                  Boolean mobileReady)
                                                                                                           throws Exception
```

Listagem de versões de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findActivities

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(Set<Integer> processInstanceId,
                                                                                                              Integer movementSequence,
                                                                                                              Boolean active,
                                                                                                              Set<String> slaStatus,
                                                                                                              String processId,
                                                                                                              String requester,
                                                                                                              String requesterName,
                                                                                                              String manager,
                                                                                                              String initialDeadlineDate,
                                                                                                              String finalDeadlineDate,
                                                                                                              String initialStartDate,
                                                                                                              String finalStartDate,
                                                                                                              String initialWarningDate,
                                                                                                              String finalWarningDate,
                                                                                                              String initialEndDate,
                                                                                                              String finalEndDate,
                                                                                                              Integer processVersion,
                                                                                                              Integer stateSequence,
                                                                                                              Integer page,
                                                                                                              Integer pageSize,
                                                                                                              List<String> expand,
                                                                                                              List<String> order,
                                                                                                              Set<String> formFields,
                                                                                                              List<Long> requesterLocal,
                                                                                                              List<Long> assigneeLocal)
                                                                                                       throws Exception
```

Lista as atividades de uma versão de um processo

- **Parameters:** `processInstanceId` - Identificador da solicitação (java.util.HashSet)
- **Returns:** ResponseEnvelopeVO objeto com os dados das atividades do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findActivities

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(String processId,
                                                                                                              Integer processVersion)
                                                                                                       throws Exception
```

Lista as atividades de uma versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados das atividades do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findActivities

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(String processId,
                                                                                                              Integer processVersion,
                                                                                                              Boolean active)
                                                                                                       throws Exception
```

Lista as atividades de uma versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados das atividades do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findRequests

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(Set<Integer> processInstanceId,
                                                                                                    Integer initialProcessInstanceId,
                                                                                                    Integer finalProcessInstanceId,
                                                                                                    String assignee,
                                                                                                    Set<String> participants,
                                                                                                    Set<String> completeColleagueIds,
                                                                                                    Set<String> status,
                                                                                                    Set<String> slaStatus,
                                                                                                    String processId,
                                                                                                    String requester,
                                                                                                    String assigneeName,
                                                                                                    String requesterName,
                                                                                                    String manager,
                                                                                                    String initialDeadlineDate,
                                                                                                    String finalDeadlineDate,
                                                                                                    String initialStartDate,
                                                                                                    String finalStartDate,
                                                                                                    String initialWarningDate,
                                                                                                    String finalWarningDate,
                                                                                                    String initialEndDate,
                                                                                                    String finalEndDate,
                                                                                                    Integer processVersion,
                                                                                                    Integer stateSequence,
                                                                                                    Integer page,
                                                                                                    Integer pageSize,
                                                                                                    List<String> expand,
                                                                                                    List order,
                                                                                                    Set<String> formFields,
                                                                                                    List<Long> requesterLocal,
                                                                                                    List<Long> assigneeLocal)
                                                                                             throws Exception
```

Listagem de solicitações de uma determinada versão de um processo

- **Parameters:** `processInstanceId` - Identificador da solicitação (java.util.HashSet)
- **Returns:** ResponseEnvelopeVO objeto com os dados da solicitações do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findRequests

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(String processId,
                                                                                                    Integer processVersion,
                                                                                                    Set<String> status)
                                                                                             throws Exception
```

Listagem de solicitações de uma determinada versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados da solicitações do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findRequests

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(String processId,
                                                                                                    Integer processVersion)
                                                                                             throws Exception
```

Listagem de solicitações de uma determinada versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados da solicitações do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersionsStates

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                      Integer processVersion,
                                                                                                                      Integer stateSequence,
                                                                                                                      Integer page,
                                                                                                                      Integer pageSize,
                                                                                                                      String stateType,
                                                                                                                      String bpmnType,
                                                                                                                      String stateName,
                                                                                                                      String stateDescription,
                                                                                                                      Boolean interactives)
                                                                                                               throws Exception
```

Listagem de estados de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados dos estados do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersionsStates

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                      Integer processVersion,
                                                                                                                      String bpmnType)
                                                                                                               throws Exception
```

Listagem de estados de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersionsStates

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                      Integer processVersion)
                                                                                                               throws Exception
```

Listagem de estados de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### convertProcess

```java
List<String> convertProcess​(List<Integer> processInstanceIds,
                            Integer newVersion,
                            List<Integer> actualStates,
                            List<Integer> newStates)
                     throws Exception
```

Converte as solicitaçõe de um processos para uma nova versão.

- **Parameters:** `processInstanceIds` - lista de processos a serem convertidos (java.util.ArrayList)
- **Returns:** Lista com as informações da socitações convertidas e não concertidas
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### releaseVersion

```java
boolean releaseVersion​(String processId,
                       Integer version)
                throws Exception
```

Libera uma versão do processo

- **Parameters:** `processId` - nome do processo (\*obrigatório, String)
- **Returns:** Boolean true ou false;
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### releaseLatestVersion

```java
boolean releaseLatestVersion​(String processId)
                      throws Exception
```

Libera a ultima versão do processo

- **Parameters:** `processId` - nome do processo (\*obrigatório, String)
- **Returns:** Boolean true ou false;
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### importProcess

```java
boolean importProcess​(String xml,
                      String processId,
                      Integer formId,
                      Boolean release)
               throws Exception
```

Importa um processo via XML

- **Parameters:** `xml` - aquivo xml com o processo (\* Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### importProcess

```java
boolean importProcess​(String xml,
                      String processId,
                      Boolean release)
               throws Exception
```

Importa um processo via XML

- **Parameters:** `xml` - aquivo xml com o processo (\* Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

