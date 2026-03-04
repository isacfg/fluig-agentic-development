# com.fluig.sdk.api.task

> **6 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/package-summary.html)

---

Simple VO for all menu items in central tasks

---

## Class Summary

| Nome | Descrição |
| --- | --- |

## Enum Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class ResumedTasksVO](#class-resumedtasksvo)
- [Enum TaskKindEnum](#enum-taskkindenum)
- [Enum TaskSearchTypeEnumeration](#enum-tasksearchtypeenumeration)
- [Enum TaskStateEnum](#enum-taskstateenum)
- [Enum TaskStatusEnum](#enum-taskstatusenum)
- [Class TaskTransferVO](#class-tasktransfervo)

---

# Class ResumedTasksVO

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/ResumedTasksVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/ResumedTasksVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.task.ResumedTasksVO
```

```java
public class ResumedTasksVO
extends Object
implements Serializable
```

Simple VO for all menu items in central tasks

- **All Implemented Interfaces:** Serializable
- **Since:** 1.5.4
- **Author:** vinicius.michelutti
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ResumedTasksVO​(String type, String state, int totalTask)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<ResumedTasksVO>` | `getChildren()` |  |
| `String` | `getCustomURL()` |  |
| `String` | `getName()` |  |
| `String` | `getState()` |  |
| `String` | `getTaskId()` |  |
| `int` | `getTotalTask()` |  |
| `String` | `getType()` |  |
| `void` | `setChildren​(List<ResumedTasksVO> children)` |  |
| `void` | `setCustomURL​(String customURL)` |  |
| `void` | `setName​(String name)` |  |
| `void` | `setState​(String state)` |  |
| `void` | `setTaskId​(String taskId)` |  |
| `void` | `setTotalTask​(int totalTask)` |  |
| `void` | `setType​(String type)` |  |


---

## Detalhes dos Construtores

### ResumedTasksVO

```java
public ResumedTasksVO​(String type,
                      String state,
                      int totalTask)
```



## Detalhes dos Métodos

### getType

```java
public String getType()
```


---

### setType

```java
public void setType​(String type)
```


---

### getName

```java
public String getName()
```


---

### setName

```java
public void setName​(String name)
```


---

### getTaskId

```java
public String getTaskId()
```


---

### setTaskId

```java
public void setTaskId​(String taskId)
```


---

### getState

```java
public String getState()
```


---

### setState

```java
public void setState​(String state)
```


---

### getCustomURL

```java
public String getCustomURL()
```


---

### setCustomURL

```java
public void setCustomURL​(String customURL)
```


---

### getTotalTask

```java
public int getTotalTask()
```


---

### setTotalTask

```java
public void setTotalTask​(int totalTask)
```


---

### getChildren

```java
public List<ResumedTasksVO> getChildren()
```


---

### setChildren

```java
public void setChildren​(List<ResumedTasksVO> children)
```

---

# Enum TaskKindEnum

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskKindEnum.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskKindEnum.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskKindEnum>
  com.fluig.sdk.api.task.TaskKindEnum
```

```java
public enum TaskKindEnum
extends Enum<TaskKindEnum>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskKindEnum>
- **Since:** 1.5.4
- **Author:** vinicius.michelutti

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static TaskKindEnum` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskKindEnum[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `DOCUMENT_EDIT` |  |
| `DOCUMENT_REVISION` |  |
| `TODO` |  |
| `WORKFLOW` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskKindEnum[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskKindEnum c : TaskKindEnum.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskKindEnum valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### TODO

```java
public static final TaskKindEnum TODO
```


---

### DOCUMENT_EDIT

```java
public static final TaskKindEnum DOCUMENT_EDIT
```


---

### WORKFLOW

```java
public static final TaskKindEnum WORKFLOW
```


---

### DOCUMENT_REVISION

```java
public static final TaskKindEnum DOCUMENT_REVISION
```

---

# Enum TaskSearchTypeEnumeration

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskSearchTypeEnumeration.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskSearchTypeEnumeration.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskSearchTypeEnumeration>
  com.fluig.sdk.api.task.TaskSearchTypeEnumeration
```

```java
public enum TaskSearchTypeEnumeration
extends Enum<TaskSearchTypeEnumeration>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskSearchTypeEnumeration>

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `int` | `getType()` |  |
| `static TaskSearchTypeEnumeration` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskSearchTypeEnumeration[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `ALL` |  |
| `MANAGER_OR_SUBSTITUTE` |  |
| `OPENED` |  |
| `PARTICIPATED` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskSearchTypeEnumeration[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskSearchTypeEnumeration c : TaskSearchTypeEnumeration.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskSearchTypeEnumeration valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name

---

### getType

```java
public int getType()
```



## Detalhes das Constantes

### OPENED

```java
public static final TaskSearchTypeEnumeration OPENED
```


---

### PARTICIPATED

```java
public static final TaskSearchTypeEnumeration PARTICIPATED
```


---

### MANAGER_OR_SUBSTITUTE

```java
public static final TaskSearchTypeEnumeration MANAGER_OR_SUBSTITUTE
```


---

### ALL

```java
public static final TaskSearchTypeEnumeration ALL
```

---

# Enum TaskStateEnum

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStateEnum.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStateEnum.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskStateEnum>
  com.fluig.sdk.api.task.TaskStateEnum
```

```java
public enum TaskStateEnum
extends Enum<TaskStateEnum>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskStateEnum>
- **Author:** vinicius.michelutti

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `toString()` |  |
| `static TaskStateEnum` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskStateEnum[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `DOCUMENT` |  |
| `LEARN` |  |
| `PROCESS` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskStateEnum[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskStateEnum c : TaskStateEnum.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskStateEnum valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Enum`<[TaskStateEnum](TaskStateEnum.html "enum in com.fluig.sdk.api.task")> ``


## Detalhes das Constantes

### PROCESS

```java
public static final TaskStateEnum PROCESS
```


---

### DOCUMENT

```java
public static final TaskStateEnum DOCUMENT
```


---

### LEARN

```java
public static final TaskStateEnum LEARN
```

---

# Enum TaskStatusEnum

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStatusEnum.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStatusEnum.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskStatusEnum>
  com.fluig.sdk.api.task.TaskStatusEnum
```

```java
public enum TaskStatusEnum
extends Enum<TaskStatusEnum>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskStatusEnum>
- **Author:** vinicius.michelutti

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static TaskStatusEnum` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskStatusEnum[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `CANCELLED` |  |
| `COMPLETED` |  |
| `CONSENSUS` |  |
| `NEW` |  |
| `PAUSED` |  |
| `STARTED` |  |
| `TRANSFERRED` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskStatusEnum[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskStatusEnum c : TaskStatusEnum.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskStatusEnum valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### NEW

```java
public static final TaskStatusEnum NEW
```


---

### CONSENSUS

```java
public static final TaskStatusEnum CONSENSUS
```


---

### COMPLETED

```java
public static final TaskStatusEnum COMPLETED
```


---

### TRANSFERRED

```java
public static final TaskStatusEnum TRANSFERRED
```


---

### CANCELLED

```java
public static final TaskStatusEnum CANCELLED
```


---

### STARTED

```java
public static final TaskStatusEnum STARTED
```


---

### PAUSED

```java
public static final TaskStatusEnum PAUSED
```

---

# Class TaskTransferVO

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.task.TaskTransferVO
```

```java
public class TaskTransferVO
extends Object
implements Serializable
```

Value Object para Transferência de Pendências

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** Deividi Silva
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `TaskTransferVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Integer` | `getDocumentIdFinal()` | Recupera valor do documentIdFinal |
| `Integer` | `getDocumentIdInitial()` | Recupera valor do documentIdInitial |
| `Integer` | `getInstanceIdFinal()` | Recupera valor do instanceIdFinal |
| `Integer` | `getInstanceIdInitial()` | Recupera valor do instanceIdInitial |
| `Boolean` | `getTransferActiveDocuments()` | Recupera valor do transferActiveDocuments |
| `Boolean` | `getTransferApprovals()` | Recupera valor do transferApprovals |
| `Boolean` | `getTransferApprovers()` | Recupera valor do transferApprovers |
| `Boolean` | `getTransferDocumentSecurity()` | Recupera valor do transferDocumentSecurity |
| `Boolean` | `getTransferMyDocumentsInApproval()` | Recupera valor do transferMyDocumentsInApproval |
| `Boolean` | `getTransferOpenWorkflow()` | Recupera valor do transferOpenWorkflow |
| `Boolean` | `getTransferPendingWorkflow()` | Recupera valor do transferPendingWorkflow |
| `String` | `getUserFrom()` | Recupera valor do userFrom |
| `String` | `getUserTo()` | Recupera valor do userTo |
| `void` | `setDocumentIdFinal​(Integer documentIdFinal)` | Atribui valor para documentIdFinal |
| `void` | `setDocumentIdInitial​(Integer documentIdInitial)` | Atribui valor para documentIdInitial |
| `void` | `setInstanceIdFinal​(Integer instanceIdFinal)` | Atribui valor para instanceIdFinal |
| `void` | `setInstanceIdInitial​(Integer instanceIdInitial)` | Atribui valor para instanceIdInitial |
| `void` | `setTransferActiveDocuments​(Boolean transferActiveDocuments)` | Atribui valor para transferActiveDocuments |
| `void` | `setTransferApprovals​(Boolean transferApprovals)` | Atribui valor para transferApprovals |
| `void` | `setTransferApprovers​(Boolean transferApprovers)` | Atribui valor para transferApprovers |
| `void` | `setTransferDocumentSecurity​(Boolean transferDocumentSecurity)` | Atribui valor para transferDocumentSecurity |
| `void` | `setTransferMyDocumentsInApproval​(Boolean transferMyDocumentsInApproval)` | Atribui valor para transferMyDocumentsInApproval |
| `void` | `setTransferOpenWorkflow​(Boolean transferOpenWorkflow)` | Atribui valor para transferOpenWorkflow |
| `void` | `setTransferPendingWorkflow​(Boolean transferPendingWorkflow)` | Atribui valor para transferPendingWorkflow |
| `void` | `setUserFrom​(String userFrom)` | Atribui valor para userFrom |
| `void` | `setUserTo​(String userTo)` | Atribui valor para userTo |


---

## Detalhes dos Construtores

### TaskTransferVO

```java
public TaskTransferVO()
```



## Detalhes dos Métodos

### getUserTo

```java
public String getUserTo()
```

Recupera valor do userTo

- **Returns:** the userTo

---

### setUserTo

```java
public void setUserTo​(String userTo)
```

Atribui valor para userTo

- **Parameters:** `userTo` - the userTo to set

---

### getUserFrom

```java
public String getUserFrom()
```

Recupera valor do userFrom

- **Returns:** the userFrom

---

### setUserFrom

```java
public void setUserFrom​(String userFrom)
```

Atribui valor para userFrom

- **Parameters:** `userFrom` - the userFrom to set

---

### getTransferActiveDocuments

```java
public Boolean getTransferActiveDocuments()
```

Recupera valor do transferActiveDocuments

- **Returns:** the transferActiveDocuments

---

### setTransferActiveDocuments

```java
public void setTransferActiveDocuments​(Boolean transferActiveDocuments)
```

Atribui valor para transferActiveDocuments

- **Parameters:** `transferActiveDocuments` - the transferActiveDocuments to set

---

### getTransferMyDocumentsInApproval

```java
public Boolean getTransferMyDocumentsInApproval()
```

Recupera valor do transferMyDocumentsInApproval

- **Returns:** the transferMyDocumentsInApproval

---

### setTransferMyDocumentsInApproval

```java
public void setTransferMyDocumentsInApproval​(Boolean transferMyDocumentsInApproval)
```

Atribui valor para transferMyDocumentsInApproval

- **Parameters:** `transferMyDocumentsInApproval` - the transferMyDocumentsInApproval to set

---

### getTransferPendingWorkflow

```java
public Boolean getTransferPendingWorkflow()
```

Recupera valor do transferPendingWorkflow

- **Returns:** the transferPendingWorkflow

---

### setTransferPendingWorkflow

```java
public void setTransferPendingWorkflow​(Boolean transferPendingWorkflow)
```

Atribui valor para transferPendingWorkflow

- **Parameters:** `transferPendingWorkflow` - the transferPendingWorkflow to set

---

### getTransferOpenWorkflow

```java
public Boolean getTransferOpenWorkflow()
```

Recupera valor do transferOpenWorkflow

- **Returns:** the transferOpenWorkflow

---

### setTransferOpenWorkflow

```java
public void setTransferOpenWorkflow​(Boolean transferOpenWorkflow)
```

Atribui valor para transferOpenWorkflow

- **Parameters:** `transferOpenWorkflow` - the transferOpenWorkflow to set

---

### getTransferApprovers

```java
public Boolean getTransferApprovers()
```

Recupera valor do transferApprovers

- **Returns:** the transferApprovers

---

### setTransferApprovers

```java
public void setTransferApprovers​(Boolean transferApprovers)
```

Atribui valor para transferApprovers

- **Parameters:** `transferApprovers` - the transferApprovers to set

---

### getTransferApprovals

```java
public Boolean getTransferApprovals()
```

Recupera valor do transferApprovals

- **Returns:** the transferApprovals

---

### setTransferApprovals

```java
public void setTransferApprovals​(Boolean transferApprovals)
```

Atribui valor para transferApprovals

- **Parameters:** `transferApprovals` - the transferApprovals to set

---

### getTransferDocumentSecurity

```java
public Boolean getTransferDocumentSecurity()
```

Recupera valor do transferDocumentSecurity

- **Returns:** the transferDocumentSecurity

---

### setTransferDocumentSecurity

```java
public void setTransferDocumentSecurity​(Boolean transferDocumentSecurity)
```

Atribui valor para transferDocumentSecurity

- **Parameters:** `transferDocumentSecurity` - the transferDocumentSecurity to set

---

### getInstanceIdInitial

```java
public Integer getInstanceIdInitial()
```

Recupera valor do instanceIdInitial

- **Returns:** the instanceIdInitial

---

### setInstanceIdInitial

```java
public void setInstanceIdInitial​(Integer instanceIdInitial)
```

Atribui valor para instanceIdInitial

- **Parameters:** `instanceIdInitial` - the instanceIdInitial to set

---

### getInstanceIdFinal

```java
public Integer getInstanceIdFinal()
```

Recupera valor do instanceIdFinal

- **Returns:** the instanceIdFinal

---

### setInstanceIdFinal

```java
public void setInstanceIdFinal​(Integer instanceIdFinal)
```

Atribui valor para instanceIdFinal

- **Parameters:** `instanceIdFinal` - the instanceIdFinal to set

---

### getDocumentIdInitial

```java
public Integer getDocumentIdInitial()
```

Recupera valor do documentIdInitial

- **Returns:** the documentIdInitial

---

### setDocumentIdInitial

```java
public void setDocumentIdInitial​(Integer documentIdInitial)
```

Atribui valor para documentIdInitial

- **Parameters:** `documentIdInitial` - the documentIdInitial to set

---

### getDocumentIdFinal

```java
public Integer getDocumentIdFinal()
```

Recupera valor do documentIdFinal

- **Returns:** the documentIdFinal

---

### setDocumentIdFinal

```java
public void setDocumentIdFinal​(Integer documentIdFinal)
```

Atribui valor para documentIdFinal

- **Parameters:** `documentIdFinal` - the documentIdFinal to set

---
