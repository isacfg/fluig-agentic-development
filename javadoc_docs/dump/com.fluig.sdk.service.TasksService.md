# Interface TasksService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface TasksService
extends BaseAPIService
Fornece acesso aos serviços de Tasks.
  Since:
1.5.2
Author:
marcelo.pereira
```

```java
public interface TasksService
extends BaseAPIService
```

Fornece acesso aos serviços de Tasks.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.2
- **Author:** marcelo.pereira

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<DocumentVO>` | `findApprovalDocumentsByUser​(String colleagueId)` | Busca todos os Documentos em aprovação por usuário |
| `List<DocumentTaskVO>` | `findDocsInAgreement​(String colleagueId)` | Procura por documentos em consenso |
| `List<DocumentTaskVO>` | `findDocsInCheckout​(String colleagueId)` | Procura documentos em checkout |
| `List<DocumentVO>` | `findDocumentsToApprove​(String colleagueId)` | Busca os documentos para aprovação |
| `List<WorkflowVO>` | `findExpiredWorkflowTasks​(String colleagueId)` | Solicitações Atrasadas |
| `List<DocumentVO>` | `findMyDocuments​(String colleagueId)` | Busca os Documentos em aprovação |
| `List<WorkflowVO>` | `findMyRequests​(String colleagueId)` | Minhas solicitações abertas |
| `List<WorkflowVO>` | `findTasksInAgreement​(String colleagueId)` | Tarefas em consenso |
| `List<WorkflowVO>` | `findWorkflowTasks​(String colleagueId)` | Solicitações Pendentes |
| `int` | `getCountMyActiveRequests​(String colleagueId, List<String> processes)` | Count all my requests for the specified user |
| `int` | `getCountMyDocuments​(String colleagueId)` | Find and count all pending documents |
| `int` | `getCountOpenTasksByKind​(String colleagueId, TaskKindEnum kind)` | Count all open tasks that matches with kind and status |
| `int` | `getCountOpenTasksByKind​(String colleagueId, TaskKindEnum kind, TaskStatusEnum status, List<String> processes)` | Count all open tasks that matches with kind and status |
| `Map<String,​Long>` | `getOpenWorkflowTasksInPool​(String colleagueId, List<String> processes)` | Gets all groups and roles which contains tasks in pool |
| `List<DocumentApproverVO>` | `getPendentApprovals​(Integer documentId)` | Return users pendent to approve a document |
| `List<ResumedTasksVO>` | `getResumedTasksForPool​(Map<String,​Long> openInPool)` | Gets and mount the entire VO with related groups or roles inside the object |
| `String` | `transferTasks​(TaskTransferVO tasksTransfer)` | Transfer tasks from one user to another |
| `String` | `transferTasks​(Map<String,​String> transferOptions)` | Transfer tasks from one user to another |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TasksService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TasksService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findDocumentsToApprove

```java
List<DocumentVO> findDocumentsToApprove​(String colleagueId)
                                 throws com.fluig.sdk.api.common.SDKException
```

Busca os documentos para aprovação

- **Parameters:** `colleagueId` -
- **Returns:** Documentos para aprovação
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os documentos para aprovação

---

### findMyDocuments

```java
List<DocumentVO> findMyDocuments​(String colleagueId)
                          throws com.fluig.sdk.api.common.SDKException
```

Busca os Documentos em aprovação

- **Parameters:** `colleagueId` -
- **Returns:** Documentos em aprovação
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os Documentos em aprovação

---

### findApprovalDocumentsByUser

```java
List<DocumentVO> findApprovalDocumentsByUser​(String colleagueId)
                                      throws com.fluig.sdk.api.common.SDKException
```

Busca todos os Documentos em aprovação por usuário

- **Parameters:** `colleagueId` -
- **Returns:** Documentos em aprovação
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os Documentos em aprovação

---

### findWorkflowTasks

```java
List<WorkflowVO> findWorkflowTasks​(String colleagueId)
                            throws com.fluig.sdk.api.common.SDKException
```

Solicitações Pendentes

- **Parameters:** `colleagueId` -
- **Returns:** Solicitações Pendentes
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as solicitações Pendentes

---

### findExpiredWorkflowTasks

```java
List<WorkflowVO> findExpiredWorkflowTasks​(String colleagueId)
                                   throws com.fluig.sdk.api.common.SDKException
```

Solicitações Atrasadas

- **Parameters:** `colleagueId` -
- **Returns:** Solicitações Atrasadas
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as solicitações atrasadas

---

### findMyRequests

```java
List<WorkflowVO> findMyRequests​(String colleagueId)
                         throws com.fluig.sdk.api.common.SDKException
```

Minhas solicitações abertas

- **Parameters:** `colleagueId` -
- **Returns:** Minhas solicitações abertas
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as Minhas solicitações abertas

---

### findTasksInAgreement

```java
List<WorkflowVO> findTasksInAgreement​(String colleagueId)
                               throws com.fluig.sdk.api.common.SDKException
```

Tarefas em consenso

- **Parameters:** `colleagueId` -
- **Returns:** Tarefas em consenso
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findDocsInAgreement

```java
List<DocumentTaskVO> findDocsInAgreement​(String colleagueId)
                                  throws com.fluig.sdk.api.common.SDKException
```

Procura por documentos em consenso

- **Parameters:** `colleagueId` -
- **Returns:** List
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findDocsInCheckout

```java
List<DocumentTaskVO> findDocsInCheckout​(String colleagueId)
                                 throws com.fluig.sdk.api.common.SDKException
```

Procura documentos em checkout

- **Parameters:** `colleagueId` -
- **Returns:** List
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountOpenTasksByKind

```java
int getCountOpenTasksByKind​(String colleagueId,
                            TaskKindEnum kind)
                     throws com.fluig.sdk.api.common.SDKException
```

Count all open tasks that matches with kind and status

- **Parameters:** `colleagueId` -
- **Returns:** total of open tasks
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountOpenTasksByKind

```java
int getCountOpenTasksByKind​(String colleagueId,
                            TaskKindEnum kind,
                            TaskStatusEnum status,
                            List<String> processes)
                     throws com.fluig.sdk.api.common.SDKException
```

Count all open tasks that matches with kind and status

- **Parameters:** `colleagueId` -
- **Returns:** total of open tasks
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountMyActiveRequests

```java
int getCountMyActiveRequests​(String colleagueId,
                             List<String> processes)
                      throws com.fluig.sdk.api.common.SDKException
```

Count all my requests for the specified user

- **Parameters:** `colleagueId` -
- **Returns:** total of tasks
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getOpenWorkflowTasksInPool

```java
Map<String,​Long> getOpenWorkflowTasksInPool​(String colleagueId,
                                                  List<String> processes)
                                           throws com.fluig.sdk.api.common.SDKException
```

Gets all groups and roles which contains tasks in pool

- **Parameters:** `colleagueId` -
- **Returns:** Map
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountMyDocuments

```java
int getCountMyDocuments​(String colleagueId)
                 throws com.fluig.sdk.api.common.SDKException
```

Find and count all pending documents

- **Parameters:** `colleagueId` -
- **Returns:** total of documents
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getResumedTasksForPool

```java
List<ResumedTasksVO> getResumedTasksForPool​(Map<String,​Long> openInPool)
                                     throws com.fluig.sdk.api.common.SDKException
```

Gets and mount the entire VO with related groups or roles inside the object

- **Parameters:** `openInPool` -
- **Returns:** List contains tasks resume for group and roles
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### transferTasks

```java
String transferTasks​(Map<String,​String> transferOptions)
              throws com.fluig.sdk.api.common.SDKException
```

Transfer tasks from one user to another

- **Returns:** transfer log
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### transferTasks

```java
String transferTasks​(TaskTransferVO tasksTransfer)
              throws com.fluig.sdk.api.common.SDKException
```

Transfer tasks from one user to another

- **Returns:** transfer log
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getPendentApprovals

```java
List<DocumentApproverVO> getPendentApprovals​(Integer documentId)
                                      throws com.fluig.sdk.api.common.SDKException
```

Return users pendent to approve a document

- **Parameters:** `documentId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

