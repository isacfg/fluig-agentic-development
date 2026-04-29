# com.fluig.sdk.api.workflow

> **48 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/package-summary.html)

---

Value Object para Anexos

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class AssumeProcessTaskResultVO](#class-assumeprocesstaskresultvo)
- [Class AssumeProcessTaskVO](#class-assumeprocesstaskvo)
- [Class AssumeProcessTasksResultVO](#class-assumeprocesstasksresultvo)
- [Class AssumeProcessTasksVO](#class-assumeprocesstasksvo)
- [Class AttachmentVO](#class-attachmentvo)
- [Class BPMAssignmentConfigurationVO](#class-bpmassignmentconfigurationvo)
- [Class BPMAssignmentVO](#class-bpmassignmentvo)
- [Class BPMDeadlineSpecificationVO](#class-bpmdeadlinespecificationvo)
- [Class BPMFormFieldVO](#class-bpmformfieldvo)
- [Class BPMFormRecordVO](#class-bpmformrecordvo)
- [Class BPMLocalVO](#class-bpmlocalvo)
- [Class BPMProcessActivityTaskInfoVO](#class-bpmprocessactivitytaskinfovo)
- [Class BPMProcessActivityVO](#class-bpmprocessactivityvo)
- [Class BPMProcessAttachmentSecurityConfigurationVO](#class-bpmprocessattachmentsecurityconfigurationvo)
- [Class BPMProcessAttachmentSecurityVO](#class-bpmprocessattachmentsecurityvo)
- [Class BPMProcessStateVO](#class-bpmprocessstatevo)
- [Class BPMProcessTaskVO](#class-bpmprocesstaskvo)
- [Class BPMProcessVersionVO](#class-bpmprocessversionvo)
- [Class BPMRequestVO](#class-bpmrequestvo)
- [Class BPMUserVO](#class-bpmuservo)
- [Class CancelInstanceResultVO](#class-cancelinstanceresultvo)
- [Class CancelInstanceVO](#class-cancelinstancevo)
- [Class CancelInstancesResultVO](#class-cancelinstancesresultvo)
- [Class CancelInstancesVO](#class-cancelinstancesvo)
- [Class CardIndexAPIVO](#class-cardindexapivo)
- [Class CardIndexAttachmentCreateVO](#class-cardindexattachmentcreatevo)
- [Class CardIndexAttachmentVO](#class-cardindexattachmentvo)
- [Class CardIndexCreateVO](#class-cardindexcreatevo)
- [Class CardIndexVO](#class-cardindexvo)
- [Class CardItemVO](#class-carditemvo)
- [Class DatasetOfflineMobileRestVO](#class-datasetofflinemobilerestvo)
- [Class FormRecordVO](#class-formrecordvo)
- [Class ManagerDefinitionVO](#class-managerdefinitionvo)
- [Class ProcessAttachmentVO](#class-processattachmentvo)
- [Class ProcessDefinitionVO](#class-processdefinitionvo)
- [Class ProcessDefinitionVersionVO](#class-processdefinitionversionvo)
- [Class ProcessInstanceInfoVO](#class-processinstanceinfovo)
- [Class ProcessObservationVO](#class-processobservationvo)
- [Class ProcessStateVO](#class-processstatevo)
- [Class ProcessTaskInfoVO](#class-processtaskinfovo)
- [Class ProcessTaskVO](#class-processtaskvo)
- [Class ProcessVersionVO](#class-processversionvo)
- [Class RequestProcessTaskVO](#class-requestprocesstaskvo)
- [Class RequestSLAVO](#class-requestslavo)
- [Class RequestTaskSLAVO](#class-requesttaskslavo)
- [Class ResumeProcessTaskVO](#class-resumeprocesstaskvo)
- [Class ResumeRequestsSLAVO](#class-resumerequestsslavo)
- [Class WorkflowVO](#class-workflowvo)

---

# Class AssumeProcessTaskResultVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskResultVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskResultVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.AssumeProcessTaskResultVO
```

```java
public class AssumeProcessTaskResultVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AssumeProcessTaskResultVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getColleagueId()` |  |
| `String` | `getComplement()` |  |
| `String` | `getErrorCode()` |  |
| `String` | `getMessage()` |  |
| `int` | `getMovementSequence()` |  |
| `int` | `getProcessInstanceId()` |  |
| `AssumeProcessTaskStatus` | `getStatus()` |  |
| `long` | `getTenantId()` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setComplement​(String complement)` |  |
| `void` | `setErrorCode​(String errorCode)` |  |
| `void` | `setMessage​(String message)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setStatus​(AssumeProcessTaskStatus status)` |  |
| `void` | `setTenantId​(long tenantId)` |  |


---

## Detalhes dos Construtores

### AssumeProcessTaskResultVO

```java
public AssumeProcessTaskResultVO()
```



## Detalhes dos Métodos

### getStatus

```java
public AssumeProcessTaskStatus getStatus()
```


---

### setStatus

```java
public void setStatus​(AssumeProcessTaskStatus status)
```


---

### getMessage

```java
public String getMessage()
```


---

### setMessage

```java
public void setMessage​(String message)
```


---

### getColleagueId

```java
public String getColleagueId()
```


---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```


---

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```


---

### getTenantId

```java
public long getTenantId()
```


---

### setTenantId

```java
public void setTenantId​(long tenantId)
```


---

### getErrorCode

```java
public String getErrorCode()
```


---

### setErrorCode

```java
public void setErrorCode​(String errorCode)
```


---

### getComplement

```java
public String getComplement()
```


---

### setComplement

```java
public void setComplement​(String complement)
```

---

# Class AssumeProcessTaskVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.AssumeProcessTaskVO
```

```java
public class AssumeProcessTaskVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AssumeProcessTaskVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getColleagueId()` |  |
| `int` | `getMovementSequence()` |  |
| `int` | `getProcessInstanceId()` |  |
| `String` | `getReplacementId()` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setReplacementId​(String replacementId)` |  |


---

## Detalhes dos Construtores

### AssumeProcessTaskVO

```java
public AssumeProcessTaskVO()
```



## Detalhes dos Métodos

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```


---

### getColleagueId

```java
public String getColleagueId()
```


---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```


---

### getReplacementId

```java
public String getReplacementId()
```


---

### setReplacementId

```java
public void setReplacementId​(String replacementId)
```

---

# Class AssumeProcessTasksResultVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksResultVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksResultVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.AssumeProcessTasksResultVO
```

```java
public class AssumeProcessTasksResultVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AssumeProcessTasksResultVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<AssumeProcessTaskResultVO>` | `getAssumeProcessTaskResults()` |  |
| `long` | `getFailCount()` |  |
| `long` | `getSuccessCount()` |  |
| `void` | `setAssumeProcessTaskResults​(List<AssumeProcessTaskResultVO> assumeProcessTaskResults)` |  |
| `void` | `setFailCount​(long failCount)` |  |
| `void` | `setSuccessCount​(long successCount)` |  |


---

## Detalhes dos Construtores

### AssumeProcessTasksResultVO

```java
public AssumeProcessTasksResultVO()
```



## Detalhes dos Métodos

### getSuccessCount

```java
public long getSuccessCount()
```


---

### setSuccessCount

```java
public void setSuccessCount​(long successCount)
```


---

### getFailCount

```java
public long getFailCount()
```


---

### setFailCount

```java
public void setFailCount​(long failCount)
```


---

### getAssumeProcessTaskResults

```java
public List<AssumeProcessTaskResultVO> getAssumeProcessTaskResults()
```


---

### setAssumeProcessTaskResults

```java
public void setAssumeProcessTaskResults​(List<AssumeProcessTaskResultVO> assumeProcessTaskResults)
```

---

# Class AssumeProcessTasksVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.AssumeProcessTasksVO
```

```java
public class AssumeProcessTasksVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AssumeProcessTasksVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<AssumeProcessTaskVO>` | `getAssumeProcessTaskList()` |  |
| `void` | `setAssumeProcessTaskList​(List<AssumeProcessTaskVO> assumeProcessTaskList)` |  |


---

## Detalhes dos Construtores

### AssumeProcessTasksVO

```java
public AssumeProcessTasksVO()
```



## Detalhes dos Métodos

### getAssumeProcessTaskList

```java
public List<AssumeProcessTaskVO> getAssumeProcessTaskList()
```


---

### setAssumeProcessTaskList

```java
public void setAssumeProcessTaskList​(List<AssumeProcessTaskVO> assumeProcessTaskList)
```

---

# Class AttachmentVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AttachmentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AttachmentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.AttachmentVO
```

```java
public class AttachmentVO
extends Object
implements Serializable
```

Value Object para Anexos

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AttachmentVO()` | Nova instância para AttachmentVO.java |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAbsoluteFileName()` | Recupera valor do absoluteFileName |
| `Boolean` | `getAttach()` | Recupera valor do attach |
| `String` | `getFileName()` | Recupera valor do fileName |
| `Boolean` | `getPrincipal()` | Recupera valor do principal |
| `void` | `setAbsoluteFileName​(String absoluteFileName)` | Atribui valor para absoluteFileName |
| `void` | `setAttach​(Boolean attach)` | Atribui valor para attach |
| `void` | `setFileName​(String fileName)` | Atribui valor para fileName |
| `void` | `setPrincipal​(Boolean principal)` | Atribui valor para principal |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### AttachmentVO

```java
public AttachmentVO()
```

Nova instância para AttachmentVO.java



## Detalhes dos Métodos

### getAbsoluteFileName

```java
public String getAbsoluteFileName()
```

Recupera valor do absoluteFileName

- **Returns:** the absoluteFileName

---

### setAbsoluteFileName

```java
public void setAbsoluteFileName​(String absoluteFileName)
```

Atribui valor para absoluteFileName

- **Parameters:** `absoluteFileName` - the absoluteFileName to set

---

### getPrincipal

```java
public Boolean getPrincipal()
```

Recupera valor do principal

- **Returns:** the principal

---

### setPrincipal

```java
public void setPrincipal​(Boolean principal)
```

Atribui valor para principal

- **Parameters:** `principal` - the principal to set

---

### getAttach

```java
public Boolean getAttach()
```

Recupera valor do attach

- **Returns:** the attach

---

### setAttach

```java
public void setAttach​(Boolean attach)
```

Atribui valor para attach

- **Parameters:** `attach` - the attach to set

---

### getFileName

```java
public String getFileName()
```

Recupera valor do fileName

- **Returns:** the fileName

---

### setFileName

```java
public void setFileName​(String fileName)
```

Atribui valor para fileName

- **Parameters:** `fileName` - the fileName to set

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

# Class BPMAssignmentConfigurationVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMAssignmentConfigurationVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMAssignmentConfigurationVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMAssignmentConfigurationVO
```

```java
public class BPMAssignmentConfigurationVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMAssignmentConfigurationVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `BPMAssignmentVO` | `getAssignment()` |  |
| `String` | `getConfiguration()` |  |
| `void` | `setAssignment​(BPMAssignmentVO assignment)` |  |
| `void` | `setConfiguration​(String configuration)` |  |


---

## Detalhes dos Construtores

### BPMAssignmentConfigurationVO

```java
public BPMAssignmentConfigurationVO()
```



## Detalhes dos Métodos

### getAssignment

```java
public BPMAssignmentVO getAssignment()
```


---

### setAssignment

```java
public void setAssignment​(BPMAssignmentVO assignment)
```


---

### getConfiguration

```java
public String getConfiguration()
```


---

### setConfiguration

```java
public void setConfiguration​(String configuration)
```

---

# Class BPMAssignmentVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMAssignmentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMAssignmentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMAssignmentVO
```

```java
public class BPMAssignmentVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMAssignmentVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDescription()` |  |
| `String` | `getId()` |  |
| `String` | `getImpl()` |  |
| `String` | `getName()` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setId​(String id)` |  |
| `void` | `setImpl​(String impl)` |  |
| `void` | `setName​(String name)` |  |


---

## Detalhes dos Construtores

### BPMAssignmentVO

```java
public BPMAssignmentVO()
```



## Detalhes dos Métodos

### getId

```java
public String getId()
```


---

### setId

```java
public void setId​(String id)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
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

### getImpl

```java
public String getImpl()
```


---

### setImpl

```java
public void setImpl​(String impl)
```

---

# Class BPMDeadlineSpecificationVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMDeadlineSpecificationVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMDeadlineSpecificationVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMDeadlineSpecificationVO
```

```java
public class BPMDeadlineSpecificationVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMDeadlineSpecificationVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Long` | `getDeadlineTime()` |  |
| `Long` | `getRemainingTime()` |  |
| `Long` | `getSpentTime()` |  |
| `void` | `setDeadlineTime​(Long deadlineTime)` |  |
| `void` | `setRemainingTime​(Long remainingTime)` |  |
| `void` | `setSpentTime​(Long spentTime)` |  |


---

## Detalhes dos Construtores

### BPMDeadlineSpecificationVO

```java
public BPMDeadlineSpecificationVO()
```



## Detalhes dos Métodos

### getRemainingTime

```java
public Long getRemainingTime()
```


---

### setRemainingTime

```java
public void setRemainingTime​(Long remainingTime)
```


---

### getSpentTime

```java
public Long getSpentTime()
```


---

### setSpentTime

```java
public void setSpentTime​(Long spentTime)
```


---

### getDeadlineTime

```java
public Long getDeadlineTime()
```


---

### setDeadlineTime

```java
public void setDeadlineTime​(Long deadlineTime)
```

---

# Class BPMFormFieldVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormFieldVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormFieldVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMFormFieldVO
```

```java
public class BPMFormFieldVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMFormFieldVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getField()` |  |
| `String` | `getValue()` |  |
| `void` | `setField​(String field)` |  |
| `void` | `setValue​(String value)` |  |


---

## Detalhes dos Construtores

### BPMFormFieldVO

```java
public BPMFormFieldVO()
```



## Detalhes dos Métodos

### getField

```java
public String getField()
```


---

### setField

```java
public void setField​(String field)
```


---

### getValue

```java
public String getValue()
```


---

### setValue

```java
public void setValue​(String value)
```

---

# Class BPMFormRecordVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormRecordVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormRecordVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMFormRecordVO
```

```java
public class BPMFormRecordVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMFormRecordVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDescription()` |  |
| `Integer` | `getId()` |  |
| `Integer` | `getVersion()` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setId​(Integer id)` |  |
| `void` | `setVersion​(Integer version)` |  |


---

## Detalhes dos Construtores

### BPMFormRecordVO

```java
public BPMFormRecordVO()
```



## Detalhes dos Métodos

### getId

```java
public Integer getId()
```


---

### setId

```java
public void setId​(Integer id)
```


---

### getVersion

```java
public Integer getVersion()
```


---

### setVersion

```java
public void setVersion​(Integer version)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```

---

# Class BPMLocalVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMLocalVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMLocalVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMLocalVO
```

```java
public class BPMLocalVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMLocalVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getDefaultLocale()` |  |
| `Long` | `getId()` |  |
| `Double` | `getLatitude()` |  |
| `Double` | `getLongitude()` |  |
| `String` | `getName()` |  |
| `Double` | `getRadius()` |  |
| `String` | `getTimezone()` |  |
| `void` | `setDefaultLocale​(Boolean defaultLocale)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setLatitude​(Double latitude)` |  |
| `void` | `setLongitude​(Double longitude)` |  |
| `void` | `setName​(String name)` |  |
| `void` | `setRadius​(Double radius)` |  |
| `void` | `setTimezone​(String timezone)` |  |


---

## Detalhes dos Construtores

### BPMLocalVO

```java
public BPMLocalVO()
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```


---

### setId

```java
public void setId​(Long id)
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

### getTimezone

```java
public String getTimezone()
```


---

### setTimezone

```java
public void setTimezone​(String timezone)
```


---

### getLatitude

```java
public Double getLatitude()
```


---

### setLatitude

```java
public void setLatitude​(Double latitude)
```


---

### getLongitude

```java
public Double getLongitude()
```


---

### setLongitude

```java
public void setLongitude​(Double longitude)
```


---

### getRadius

```java
public Double getRadius()
```


---

### setRadius

```java
public void setRadius​(Double radius)
```


---

### getDefaultLocale

```java
public Boolean getDefaultLocale()
```


---

### setDefaultLocale

```java
public void setDefaultLocale​(Boolean defaultLocale)
```

---

# Class BPMProcessActivityTaskInfoVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityTaskInfoVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityTaskInfoVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMProcessActivityTaskInfoVO
```

```java
public class BPMProcessActivityTaskInfoVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMProcessActivityTaskInfoVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAssignees()` |  |
| `String` | `getAssigneesNames()` |  |
| `String` | `getLocalIds()` |  |
| `String` | `getLocalNames()` |  |
| `void` | `setAssignees​(String assignees)` |  |
| `void` | `setAssigneesNames​(String assigneesNames)` |  |
| `void` | `setLocalIds​(String localIds)` |  |
| `void` | `setLocalNames​(String localNames)` |  |


---

## Detalhes dos Construtores

### BPMProcessActivityTaskInfoVO

```java
public BPMProcessActivityTaskInfoVO()
```



## Detalhes dos Métodos

### getAssignees

```java
public String getAssignees()
```


---

### setAssignees

```java
public void setAssignees​(String assignees)
```


---

### getAssigneesNames

```java
public String getAssigneesNames()
```


---

### setAssigneesNames

```java
public void setAssigneesNames​(String assigneesNames)
```


---

### getLocalIds

```java
public String getLocalIds()
```


---

### setLocalIds

```java
public void setLocalIds​(String localIds)
```


---

### getLocalNames

```java
public String getLocalNames()
```


---

### setLocalNames

```java
public void setLocalNames​(String localNames)
```

---

# Class BPMProcessActivityVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMProcessActivityVO
```

```java
public class BPMProcessActivityVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMProcessActivityVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `ZonedDateTime` | `getDeadlineDate()` |  |
| `BPMDeadlineSpecificationVO` | `getDeadlineSpecification()` |  |
| `ZonedDateTime` | `getEndDate()` |  |
| `List<BPMFormFieldVO>` | `getFormFields()` |  |
| `int` | `getMovementSequence()` |  |
| `String` | `getProcessDescription()` |  |
| `String` | `getProcessId()` |  |
| `int` | `getProcessInstanceId()` |  |
| `int` | `getProcessVersion()` |  |
| `BPMUserVO` | `getRequester()` |  |
| `String` | `getSlaStatus()` |  |
| `ZonedDateTime` | `getStartDate()` |  |
| `BPMProcessStateVO` | `getState()` |  |
| `BPMProcessActivityTaskInfoVO` | `getTaskInfo()` |  |
| `List<BPMProcessTaskVO>` | `getTasks()` |  |
| `int` | `getThreadSequence()` |  |
| `boolean` | `isActive()` |  |
| `void` | `setActive​(boolean active)` |  |
| `void` | `setDeadlineDate​(ZonedDateTime deadlineDate)` |  |
| `void` | `setDeadlineSpecification​(BPMDeadlineSpecificationVO deadlineSpecification)` |  |
| `void` | `setEndDate​(ZonedDateTime endDate)` |  |
| `void` | `setFormFields​(List<BPMFormFieldVO> formFields)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setProcessDescription​(String processDescription)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setProcessVersion​(int processVersion)` |  |
| `void` | `setRequester​(BPMUserVO requester)` |  |
| `void` | `setSlaStatus​(String slaStatus)` |  |
| `void` | `setStartDate​(ZonedDateTime startDate)` |  |
| `void` | `setState​(BPMProcessStateVO state)` |  |
| `void` | `setTaskInfo​(BPMProcessActivityTaskInfoVO taskInfo)` |  |
| `void` | `setTasks​(List<BPMProcessTaskVO> tasks)` |  |
| `void` | `setThreadSequence​(int threadSequence)` |  |


---

## Detalhes dos Construtores

### BPMProcessActivityVO

```java
public BPMProcessActivityVO()
```



## Detalhes dos Métodos

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```


---

### isActive

```java
public boolean isActive()
```


---

### setActive

```java
public void setActive​(boolean active)
```


---

### getSlaStatus

```java
public String getSlaStatus()
```


---

### setSlaStatus

```java
public void setSlaStatus​(String slaStatus)
```


---

### getStartDate

```java
public ZonedDateTime getStartDate()
```


---

### setStartDate

```java
public void setStartDate​(ZonedDateTime startDate)
```


---

### getEndDate

```java
public ZonedDateTime getEndDate()
```


---

### setEndDate

```java
public void setEndDate​(ZonedDateTime endDate)
```


---

### getDeadlineDate

```java
public ZonedDateTime getDeadlineDate()
```


---

### setDeadlineDate

```java
public void setDeadlineDate​(ZonedDateTime deadlineDate)
```


---

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getRequester

```java
public BPMUserVO getRequester()
```


---

### setRequester

```java
public void setRequester​(BPMUserVO requester)
```


---

### getProcessVersion

```java
public int getProcessVersion()
```


---

### setProcessVersion

```java
public void setProcessVersion​(int processVersion)
```


---

### getProcessDescription

```java
public String getProcessDescription()
```


---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```


---

### getState

```java
public BPMProcessStateVO getState()
```


---

### setState

```java
public void setState​(BPMProcessStateVO state)
```


---

### getTasks

```java
public List<BPMProcessTaskVO> getTasks()
```


---

### setTasks

```java
public void setTasks​(List<BPMProcessTaskVO> tasks)
```


---

### getThreadSequence

```java
public int getThreadSequence()
```


---

### setThreadSequence

```java
public void setThreadSequence​(int threadSequence)
```


---

### getFormFields

```java
public List<BPMFormFieldVO> getFormFields()
```


---

### setFormFields

```java
public void setFormFields​(List<BPMFormFieldVO> formFields)
```


---

### getDeadlineSpecification

```java
public BPMDeadlineSpecificationVO getDeadlineSpecification()
```


---

### setDeadlineSpecification

```java
public void setDeadlineSpecification​(BPMDeadlineSpecificationVO deadlineSpecification)
```


---

### getTaskInfo

```java
public BPMProcessActivityTaskInfoVO getTaskInfo()
```


---

### setTaskInfo

```java
public void setTaskInfo​(BPMProcessActivityTaskInfoVO taskInfo)
```

---

# Class BPMProcessAttachmentSecurityConfigurationVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessAttachmentSecurityConfigurationVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessAttachmentSecurityConfigurationVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMProcessAttachmentSecurityConfigurationVO
```

```java
public class BPMProcessAttachmentSecurityConfigurationVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMProcessAttachmentSecurityConfigurationVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAccessLevel()` |  |
| `BPMAssignmentConfigurationVO` | `getAssignmentConfiguration()` |  |
| `void` | `setAccessLevel​(String accessLevel)` |  |
| `void` | `setAssignmentConfiguration​(BPMAssignmentConfigurationVO assignmentConfiguration)` |  |


---

## Detalhes dos Construtores

### BPMProcessAttachmentSecurityConfigurationVO

```java
public BPMProcessAttachmentSecurityConfigurationVO()
```



## Detalhes dos Métodos

### getAssignmentConfiguration

```java
public BPMAssignmentConfigurationVO getAssignmentConfiguration()
```


---

### setAssignmentConfiguration

```java
public void setAssignmentConfiguration​(BPMAssignmentConfigurationVO assignmentConfiguration)
```


---

### getAccessLevel

```java
public String getAccessLevel()
```


---

### setAccessLevel

```java
public void setAccessLevel​(String accessLevel)
```

---

# Class BPMProcessAttachmentSecurityVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessAttachmentSecurityVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessAttachmentSecurityVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMProcessAttachmentSecurityVO
```

```java
public class BPMProcessAttachmentSecurityVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMProcessAttachmentSecurityVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<BPMProcessAttachmentSecurityConfigurationVO>` | `getAttachmentSecurityConfigurations()` |  |
| `Boolean` | `getControlsSecurity()` |  |
| `Boolean` | `getUpdateVersions()` |  |
| `void` | `setAttachmentSecurityConfigurations​(List<BPMProcessAttachmentSecurityConfigurationVO> attachmentSecurityConfigurations)` |  |
| `void` | `setControlsSecurity​(Boolean controlsSecurity)` |  |
| `void` | `setUpdateVersions​(Boolean updateVersions)` |  |


---

## Detalhes dos Construtores

### BPMProcessAttachmentSecurityVO

```java
public BPMProcessAttachmentSecurityVO()
```



## Detalhes dos Métodos

### getUpdateVersions

```java
public Boolean getUpdateVersions()
```


---

### setUpdateVersions

```java
public void setUpdateVersions​(Boolean updateVersions)
```


---

### getControlsSecurity

```java
public Boolean getControlsSecurity()
```


---

### setControlsSecurity

```java
public void setControlsSecurity​(Boolean controlsSecurity)
```


---

### getAttachmentSecurityConfigurations

```java
public List<BPMProcessAttachmentSecurityConfigurationVO> getAttachmentSecurityConfigurations()
```


---

### setAttachmentSecurityConfigurations

```java
public void setAttachmentSecurityConfigurations​(List<BPMProcessAttachmentSecurityConfigurationVO> attachmentSecurityConfigurations)
```

---

# Class BPMProcessStateVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMProcessStateVO
```

```java
public class BPMProcessStateVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMProcessStateVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getBpmnType()` |  |
| `String` | `getInstructions()` |  |
| `String` | `getProcessId()` |  |
| `Integer` | `getProcessVersion()` |  |
| `int` | `getSequence()` |  |
| `String` | `getStateDescription()` |  |
| `String` | `getStateName()` |  |
| `String` | `getStateType()` |  |
| `void` | `setBpmnType​(String bpmnType)` |  |
| `void` | `setInstructions​(String instructions)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessVersion​(Integer processVersion)` |  |
| `void` | `setSequence​(int sequence)` |  |
| `void` | `setStateDescription​(String stateDescription)` |  |
| `void` | `setStateName​(String stateName)` |  |
| `void` | `setStateType​(String stateType)` |  |


---

## Detalhes dos Construtores

### BPMProcessStateVO

```java
public BPMProcessStateVO()
```



## Detalhes dos Métodos

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getProcessVersion

```java
public Integer getProcessVersion()
```


---

### setProcessVersion

```java
public void setProcessVersion​(Integer processVersion)
```


---

### getSequence

```java
public int getSequence()
```


---

### setSequence

```java
public void setSequence​(int sequence)
```


---

### getStateName

```java
public String getStateName()
```


---

### setStateName

```java
public void setStateName​(String stateName)
```


---

### getStateDescription

```java
public String getStateDescription()
```


---

### setStateDescription

```java
public void setStateDescription​(String stateDescription)
```


---

### getStateType

```java
public String getStateType()
```


---

### setStateType

```java
public void setStateType​(String stateType)
```


---

### getBpmnType

```java
public String getBpmnType()
```


---

### setBpmnType

```java
public void setBpmnType​(String bpmnType)
```


---

### getInstructions

```java
public String getInstructions()
```


---

### setInstructions

```java
public void setInstructions​(String instructions)
```

---

# Class BPMProcessTaskVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessTaskVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessTaskVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMProcessTaskVO
```

```java
public class BPMProcessTaskVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMProcessTaskVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `BPMUserVO` | `getAssignee()` |  |
| `ZonedDateTime` | `getAssignEndDate()` |  |
| `ZonedDateTime` | `getAssignStartDate()` |  |
| `ZonedDateTime` | `getDeadlineDate()` |  |
| `ZonedDateTime` | `getEndDate()` |  |
| `int` | `getMovementSequence()` |  |
| `String` | `getProcessDescription()` |  |
| `String` | `getProcessId()` |  |
| `int` | `getProcessInstanceId()` |  |
| `int` | `getProcessVersion()` |  |
| `ZonedDateTime` | `getStartDate()` |  |
| `String` | `getStatus()` |  |
| `int` | `getThreadSequence()` |  |
| `int` | `getTransferSequence()` |  |
| `ZonedDateTime` | `getWarningDate()` |  |
| `void` | `setAssignee​(BPMUserVO assignee)` |  |
| `void` | `setAssignEndDate​(ZonedDateTime assignEndDate)` |  |
| `void` | `setAssignStartDate​(ZonedDateTime assignStartDate)` |  |
| `void` | `setDeadlineDate​(ZonedDateTime deadlineDate)` |  |
| `void` | `setEndDate​(ZonedDateTime endDate)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setProcessDescription​(String processDescription)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setProcessVersion​(int processVersion)` |  |
| `void` | `setStartDate​(ZonedDateTime startDate)` |  |
| `void` | `setStatus​(String status)` |  |
| `void` | `setThreadSequence​(int threadSequence)` |  |
| `void` | `setTransferSequence​(int transferSequence)` |  |
| `void` | `setWarningDate​(ZonedDateTime warningDate)` |  |


---

## Detalhes dos Construtores

### BPMProcessTaskVO

```java
public BPMProcessTaskVO()
```



## Detalhes dos Métodos

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```


---

### getTransferSequence

```java
public int getTransferSequence()
```


---

### setTransferSequence

```java
public void setTransferSequence​(int transferSequence)
```


---

### getAssignee

```java
public BPMUserVO getAssignee()
```


---

### setAssignee

```java
public void setAssignee​(BPMUserVO assignee)
```


---

### getDeadlineDate

```java
public ZonedDateTime getDeadlineDate()
```


---

### setDeadlineDate

```java
public void setDeadlineDate​(ZonedDateTime deadlineDate)
```


---

### getStatus

```java
public String getStatus()
```


---

### setStatus

```java
public void setStatus​(String status)
```


---

### getStartDate

```java
public ZonedDateTime getStartDate()
```


---

### setStartDate

```java
public void setStartDate​(ZonedDateTime startDate)
```


---

### getEndDate

```java
public ZonedDateTime getEndDate()
```


---

### setEndDate

```java
public void setEndDate​(ZonedDateTime endDate)
```


---

### getAssignStartDate

```java
public ZonedDateTime getAssignStartDate()
```


---

### setAssignStartDate

```java
public void setAssignStartDate​(ZonedDateTime assignStartDate)
```


---

### getAssignEndDate

```java
public ZonedDateTime getAssignEndDate()
```


---

### setAssignEndDate

```java
public void setAssignEndDate​(ZonedDateTime assignEndDate)
```


---

### getWarningDate

```java
public ZonedDateTime getWarningDate()
```


---

### setWarningDate

```java
public void setWarningDate​(ZonedDateTime warningDate)
```


---

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getProcessVersion

```java
public int getProcessVersion()
```


---

### setProcessVersion

```java
public void setProcessVersion​(int processVersion)
```


---

### getProcessDescription

```java
public String getProcessDescription()
```


---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```


---

### getThreadSequence

```java
public int getThreadSequence()
```


---

### setThreadSequence

```java
public void setThreadSequence​(int threadSequence)
```

---

# Class BPMProcessVersionVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessVersionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessVersionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMProcessVersionVO
```

```java
public class BPMProcessVersionVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMProcessVersionVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getActive()` |  |
| `BPMProcessAttachmentSecurityVO` | `getAttachmentSecurity()` |  |
| `Boolean` | `getBlocked()` |  |
| `Integer` | `getBpmnVersion()` |  |
| `String` | `getDiagram()` |  |
| `Boolean` | `getEditing()` |  |
| `Integer` | `getFormId()` |  |
| `Boolean` | `getInheritFormSecurity()` |  |
| `Boolean` | `getMobileReady()` |  |
| `String` | `getProcessId()` |  |
| `Boolean` | `getRequiresPassword()` |  |
| `Integer` | `getVersion()` |  |
| `void` | `setActive​(Boolean active)` |  |
| `void` | `setAttachmentSecurity​(BPMProcessAttachmentSecurityVO attachmentSecurity)` |  |
| `void` | `setBlocked​(Boolean blocked)` |  |
| `void` | `setBpmnVersion​(Integer bpmnVersion)` |  |
| `void` | `setDiagram​(String diagram)` |  |
| `void` | `setEditing​(Boolean editing)` |  |
| `void` | `setFormId​(Integer formId)` |  |
| `void` | `setInheritFormSecurity​(Boolean inheritFormSecurity)` |  |
| `void` | `setMobileReady​(Boolean mobileReady)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setRequiresPassword​(Boolean requiresPassword)` |  |
| `void` | `setVersion​(Integer version)` |  |


---

## Detalhes dos Construtores

### BPMProcessVersionVO

```java
public BPMProcessVersionVO()
```



## Detalhes dos Métodos

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getVersion

```java
public Integer getVersion()
```


---

### setVersion

```java
public void setVersion​(Integer version)
```


---

### getFormId

```java
public Integer getFormId()
```


---

### setFormId

```java
public void setFormId​(Integer formId)
```


---

### getEditing

```java
public Boolean getEditing()
```


---

### setEditing

```java
public void setEditing​(Boolean editing)
```


---

### getAttachmentSecurity

```java
public BPMProcessAttachmentSecurityVO getAttachmentSecurity()
```


---

### setAttachmentSecurity

```java
public void setAttachmentSecurity​(BPMProcessAttachmentSecurityVO attachmentSecurity)
```


---

### getActive

```java
public Boolean getActive()
```


---

### setActive

```java
public void setActive​(Boolean active)
```


---

### getBlocked

```java
public Boolean getBlocked()
```


---

### setBlocked

```java
public void setBlocked​(Boolean blocked)
```


---

### getRequiresPassword

```java
public Boolean getRequiresPassword()
```


---

### setRequiresPassword

```java
public void setRequiresPassword​(Boolean requiresPassword)
```


---

### getDiagram

```java
public String getDiagram()
```


---

### setDiagram

```java
public void setDiagram​(String diagram)
```


---

### getBpmnVersion

```java
public Integer getBpmnVersion()
```


---

### setBpmnVersion

```java
public void setBpmnVersion​(Integer bpmnVersion)
```


---

### getInheritFormSecurity

```java
public Boolean getInheritFormSecurity()
```


---

### setInheritFormSecurity

```java
public void setInheritFormSecurity​(Boolean inheritFormSecurity)
```


---

### getMobileReady

```java
public Boolean getMobileReady()
```


---

### setMobileReady

```java
public void setMobileReady​(Boolean mobileReady)
```

---

# Class BPMRequestVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMRequestVO
```

```java
public class BPMRequestVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMRequestVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getActive()` |  |
| `List<BPMProcessActivityVO>` | `getActivities()` |  |
| `ZonedDateTime` | `getDeadlineDate()` |  |
| `BPMDeadlineSpecificationVO` | `getDeadlineSpecification()` |  |
| `ZonedDateTime` | `getEndDate()` |  |
| `List<BPMFormFieldVO>` | `getFormFields()` |  |
| `Integer` | `getFormId()` |  |
| `BPMFormRecordVO` | `getFormRecord()` |  |
| `Integer` | `getFormRecordId()` |  |
| `Integer` | `getParentRequestId()` |  |
| `String` | `getPeriodId()` |  |
| `String` | `getProcessDescription()` |  |
| `String` | `getProcessId()` |  |
| `Integer` | `getProcessInstanceId()` |  |
| `Integer` | `getProcessVersion()` |  |
| `BPMUserVO` | `getRequester()` |  |
| `String` | `getSlaStatus()` |  |
| `ZonedDateTime` | `getStartDate()` |  |
| `String` | `getStatus()` |  |
| `ZonedDateTime` | `getWarningDate()` |  |
| `void` | `setActive​(Boolean active)` |  |
| `void` | `setActivities​(List<BPMProcessActivityVO> activities)` |  |
| `void` | `setDeadlineDate​(ZonedDateTime deadlineDate)` |  |
| `void` | `setDeadlineSpecification​(BPMDeadlineSpecificationVO deadlineSpecification)` |  |
| `void` | `setEndDate​(ZonedDateTime endDate)` |  |
| `void` | `setFormFields​(List<BPMFormFieldVO> formFields)` |  |
| `void` | `setFormId​(Integer formId)` |  |
| `void` | `setFormRecord​(BPMFormRecordVO formRecord)` |  |
| `void` | `setFormRecordId​(Integer formRecordId)` |  |
| `void` | `setParentRequestId​(Integer parentRequestId)` |  |
| `void` | `setPeriodId​(String periodId)` |  |
| `void` | `setProcessDescription​(String processDescription)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessInstanceId​(Integer processInstanceId)` |  |
| `void` | `setProcessVersion​(Integer processVersion)` |  |
| `void` | `setRequester​(BPMUserVO requester)` |  |
| `void` | `setSlaStatus​(String slaStatus)` |  |
| `void` | `setStartDate​(ZonedDateTime startDate)` |  |
| `void` | `setStatus​(String status)` |  |
| `void` | `setWarningDate​(ZonedDateTime warningDate)` |  |


---

## Detalhes dos Construtores

### BPMRequestVO

```java
public BPMRequestVO()
```



## Detalhes dos Métodos

### getProcessInstanceId

```java
public Integer getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(Integer processInstanceId)
```


---

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getProcessVersion

```java
public Integer getProcessVersion()
```


---

### setProcessVersion

```java
public void setProcessVersion​(Integer processVersion)
```


---

### getActive

```java
public Boolean getActive()
```


---

### setActive

```java
public void setActive​(Boolean active)
```


---

### getRequester

```java
public BPMUserVO getRequester()
```


---

### setRequester

```java
public void setRequester​(BPMUserVO requester)
```


---

### getFormRecordId

```java
public Integer getFormRecordId()
```


---

### setFormRecordId

```java
public void setFormRecordId​(Integer formRecordId)
```


---

### getFormId

```java
public Integer getFormId()
```


---

### setFormId

```java
public void setFormId​(Integer formId)
```


---

### getParentRequestId

```java
public Integer getParentRequestId()
```


---

### setParentRequestId

```java
public void setParentRequestId​(Integer parentRequestId)
```


---

### getStartDate

```java
public ZonedDateTime getStartDate()
```


---

### setStartDate

```java
public void setStartDate​(ZonedDateTime startDate)
```


---

### getEndDate

```java
public ZonedDateTime getEndDate()
```


---

### setEndDate

```java
public void setEndDate​(ZonedDateTime endDate)
```


---

### getWarningDate

```java
public ZonedDateTime getWarningDate()
```


---

### setWarningDate

```java
public void setWarningDate​(ZonedDateTime warningDate)
```


---

### getDeadlineDate

```java
public ZonedDateTime getDeadlineDate()
```


---

### setDeadlineDate

```java
public void setDeadlineDate​(ZonedDateTime deadlineDate)
```


---

### getPeriodId

```java
public String getPeriodId()
```


---

### setPeriodId

```java
public void setPeriodId​(String periodId)
```


---

### getActivities

```java
public List<BPMProcessActivityVO> getActivities()
```


---

### setActivities

```java
public void setActivities​(List<BPMProcessActivityVO> activities)
```


---

### getFormRecord

```java
public BPMFormRecordVO getFormRecord()
```


---

### setFormRecord

```java
public void setFormRecord​(BPMFormRecordVO formRecord)
```


---

### getFormFields

```java
public List<BPMFormFieldVO> getFormFields()
```


---

### setFormFields

```java
public void setFormFields​(List<BPMFormFieldVO> formFields)
```


---

### getSlaStatus

```java
public String getSlaStatus()
```


---

### setSlaStatus

```java
public void setSlaStatus​(String slaStatus)
```


---

### getStatus

```java
public String getStatus()
```


---

### setStatus

```java
public void setStatus​(String status)
```


---

### getProcessDescription

```java
public String getProcessDescription()
```


---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```


---

### getDeadlineSpecification

```java
public BPMDeadlineSpecificationVO getDeadlineSpecification()
```


---

### setDeadlineSpecification

```java
public void setDeadlineSpecification​(BPMDeadlineSpecificationVO deadlineSpecification)
```

---

# Class BPMUserVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMUserVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMUserVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.BPMUserVO
```

```java
public class BPMUserVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `BPMUserVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCode()` |  |
| `BPMLocalVO` | `getLocal()` |  |
| `String` | `getLogin()` |  |
| `String` | `getMail()` |  |
| `String` | `getName()` |  |
| `void` | `setCode​(String code)` |  |
| `void` | `setLocal​(BPMLocalVO local)` |  |
| `void` | `setLogin​(String login)` |  |
| `void` | `setMail​(String mail)` |  |
| `void` | `setName​(String name)` |  |


---

## Detalhes dos Construtores

### BPMUserVO

```java
public BPMUserVO()
```



## Detalhes dos Métodos

### getCode

```java
public String getCode()
```


---

### setCode

```java
public void setCode​(String code)
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

### getMail

```java
public String getMail()
```


---

### setMail

```java
public void setMail​(String mail)
```


---

### getLogin

```java
public String getLogin()
```


---

### setLogin

```java
public void setLogin​(String login)
```


---

### getLocal

```java
public BPMLocalVO getLocal()
```


---

### setLocal

```java
public void setLocal​(BPMLocalVO local)
```

---

# Class CancelInstanceResultVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceResultVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceResultVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CancelInstanceResultVO
```

```java
public class CancelInstanceResultVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CancelInstanceResultVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getErrorCode()` |  |
| `String` | `getMessage()` |  |
| `int` | `getProcessInstanceId()` |  |
| `String` | `getStatus()` |  |
| `long` | `getTenantId()` |  |
| `void` | `setErrorCode​(String errorCode)` |  |
| `void` | `setMessage​(String message)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setStatus​(String status)` |  |
| `void` | `setTenantId​(long tenantId)` |  |


---

## Detalhes dos Construtores

### CancelInstanceResultVO

```java
public CancelInstanceResultVO()
```



## Detalhes dos Métodos

### getStatus

```java
public String getStatus()
```


---

### setStatus

```java
public void setStatus​(String status)
```


---

### getMessage

```java
public String getMessage()
```


---

### setMessage

```java
public void setMessage​(String message)
```


---

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getTenantId

```java
public long getTenantId()
```


---

### setTenantId

```java
public void setTenantId​(long tenantId)
```


---

### getErrorCode

```java
public String getErrorCode()
```


---

### setErrorCode

```java
public void setErrorCode​(String errorCode)
```

---

# Class CancelInstanceVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CancelInstanceVO
```

```java
public class CancelInstanceVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CancelInstanceVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCancelText()` |  |
| `int` | `getProcessInstanceId()` |  |
| `String` | `getReplacedId()` |  |
| `void` | `setCancelText​(String cancelText)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setReplacedId​(String replacedId)` |  |


---

## Detalhes dos Construtores

### CancelInstanceVO

```java
public CancelInstanceVO()
```



## Detalhes dos Métodos

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getReplacedId

```java
public String getReplacedId()
```


---

### setReplacedId

```java
public void setReplacedId​(String replacedId)
```


---

### getCancelText

```java
public String getCancelText()
```


---

### setCancelText

```java
public void setCancelText​(String cancelText)
```

---

# Class CancelInstancesResultVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesResultVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesResultVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CancelInstancesResultVO
```

```java
public class CancelInstancesResultVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CancelInstancesResultVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<CancelInstanceResultVO>` | `getCancelInstanceResults()` |  |
| `long` | `getFailCount()` |  |
| `long` | `getSuccessCount()` |  |
| `void` | `setCancelInstanceResults​(List<CancelInstanceResultVO> cancelInstanceResults)` |  |
| `void` | `setFailCount​(long failCount)` |  |
| `void` | `setSuccessCount​(long successCount)` |  |


---

## Detalhes dos Construtores

### CancelInstancesResultVO

```java
public CancelInstancesResultVO()
```



## Detalhes dos Métodos

### getSuccessCount

```java
public long getSuccessCount()
```


---

### setSuccessCount

```java
public void setSuccessCount​(long successCount)
```


---

### getFailCount

```java
public long getFailCount()
```


---

### setFailCount

```java
public void setFailCount​(long failCount)
```


---

### getCancelInstanceResults

```java
public List<CancelInstanceResultVO> getCancelInstanceResults()
```


---

### setCancelInstanceResults

```java
public void setCancelInstanceResults​(List<CancelInstanceResultVO> cancelInstanceResults)
```

---

# Class CancelInstancesVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CancelInstancesVO
```

```java
public class CancelInstancesVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CancelInstancesVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<CancelInstanceVO>` | `getCancelInstanceList()` |  |
| `String` | `getCancelText()` |  |
| `void` | `setCancelInstanceList​(List<CancelInstanceVO> cancelInstanceList)` |  |
| `void` | `setCancelText​(String cancelText)` |  |


---

## Detalhes dos Construtores

### CancelInstancesVO

```java
public CancelInstancesVO()
```



## Detalhes dos Métodos

### getCancelInstanceList

```java
public List<CancelInstanceVO> getCancelInstanceList()
```


---

### setCancelInstanceList

```java
public void setCancelInstanceList​(List<CancelInstanceVO> cancelInstanceList)
```


---

### getCancelText

```java
public String getCancelText()
```


---

### setCancelText

```java
public void setCancelText​(String cancelText)
```

---

# Class CardIndexAPIVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAPIVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAPIVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CardIndexAPIVO
```

```java
public class CardIndexAPIVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardIndexAPIVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCardDescription()` |  |
| `String` | `getDatasetName()` |  |
| `String` | `getDocumentDescription()` |  |
| `Integer` | `getId()` |  |
| `Integer` | `getParentDocumentId()` |  |
| `Integer` | `getPersistenceType()` |  |
| `String` | `getPrincipal()` |  |
| `String` | `getPublisherId()` |  |
| `Long` | `getTenantId()` |  |
| `Integer` | `getVersion()` |  |
| `void` | `setCardDescription​(String cardDescription)` |  |
| `void` | `setDatasetName​(String datasetName)` |  |
| `void` | `setDocumentDescription​(String documentDescription)` |  |
| `void` | `setId​(Integer id)` |  |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` |  |
| `void` | `setPersistenceType​(Integer persistenceType)` |  |
| `void` | `setPrincipal​(String principal)` |  |
| `void` | `setPublisherId​(String publisherId)` |  |
| `void` | `setTenantId​(Long tenantId)` |  |
| `void` | `setVersion​(Integer version)` |  |


---

## Detalhes dos Construtores

### CardIndexAPIVO

```java
public CardIndexAPIVO()
```



## Detalhes dos Métodos

### getTenantId

```java
public Long getTenantId()
```


---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```


---

### getId

```java
public Integer getId()
```


---

### setId

```java
public void setId​(Integer id)
```


---

### getVersion

```java
public Integer getVersion()
```


---

### setVersion

```java
public void setVersion​(Integer version)
```


---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```


---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```


---

### getPublisherId

```java
public String getPublisherId()
```


---

### setPublisherId

```java
public void setPublisherId​(String publisherId)
```


---

### getDocumentDescription

```java
public String getDocumentDescription()
```


---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```


---

### getCardDescription

```java
public String getCardDescription()
```


---

### setCardDescription

```java
public void setCardDescription​(String cardDescription)
```


---

### getDatasetName

```java
public String getDatasetName()
```


---

### setDatasetName

```java
public void setDatasetName​(String datasetName)
```


---

### getPersistenceType

```java
public Integer getPersistenceType()
```


---

### setPersistenceType

```java
public void setPersistenceType​(Integer persistenceType)
```


---

### getPrincipal

```java
public String getPrincipal()
```


---

### setPrincipal

```java
public void setPrincipal​(String principal)
```

---

# Class CardIndexAttachmentCreateVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAttachmentCreateVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAttachmentCreateVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CardIndexAttachmentCreateVO
```

```java
public class CardIndexAttachmentCreateVO
extends Object
implements Serializable
```

Value Object para criação de anexo do card index

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardIndexAttachmentCreateVO()` | Nova instância para CardIndexAttachmentCreateVO.java |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getAttach()` | Recupera valor do attach |
| `String` | `getFileName()` | Recupera valor do fileName |
| `Boolean` | `getPrincipal()` | Recupera valor do principal |
| `void` | `setAttach​(Boolean attach)` | Atribui valor para attach |
| `void` | `setFileName​(String fileName)` | Atribui valor para fileName |
| `void` | `setPrincipal​(Boolean principal)` | Atribui valor para principal |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### CardIndexAttachmentCreateVO

```java
public CardIndexAttachmentCreateVO()
```

Nova instância para CardIndexAttachmentCreateVO.java



## Detalhes dos Métodos

### getFileName

```java
public String getFileName()
```

Recupera valor do fileName

- **Returns:** the fileName

---

### setFileName

```java
public void setFileName​(String fileName)
```

Atribui valor para fileName

- **Parameters:** `fileName` - the fileName to set

---

### getPrincipal

```java
public Boolean getPrincipal()
```

Recupera valor do principal

- **Returns:** the principal

---

### setPrincipal

```java
public void setPrincipal​(Boolean principal)
```

Atribui valor para principal

- **Parameters:** `principal` - the principal to set

---

### getAttach

```java
public Boolean getAttach()
```

Recupera valor do attach

- **Returns:** the attach

---

### setAttach

```java
public void setAttach​(Boolean attach)
```

Atribui valor para attach

- **Parameters:** `attach` - the attach to set

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

# Class CardIndexAttachmentVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAttachmentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAttachmentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CardIndexAttachmentVO
```

```java
public class CardIndexAttachmentVO
extends Object
implements Serializable
```

Value Object para anexos do card index

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardIndexAttachmentVO()` | Nova instância para CardIndexAttachmentVO.java |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getAttach()` | Recupera valor do attach |
| `String` | `getFileName()` | Recupera valor do fileName |
| `Boolean` | `getPrincipal()` | Recupera valor do principal |
| `void` | `setAttach​(Boolean attach)` | Atribui valor para attach |
| `void` | `setFileName​(String fileName)` | Atribui valor para fileName |
| `void` | `setPrincipal​(Boolean principal)` | Atribui valor para principal |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### CardIndexAttachmentVO

```java
public CardIndexAttachmentVO()
```

Nova instância para CardIndexAttachmentVO.java



## Detalhes dos Métodos

### getFileName

```java
public String getFileName()
```

Recupera valor do fileName

- **Returns:** the fileName

---

### setFileName

```java
public void setFileName​(String fileName)
```

Atribui valor para fileName

- **Parameters:** `fileName` - the fileName to set

---

### getPrincipal

```java
public Boolean getPrincipal()
```

Recupera valor do principal

- **Returns:** the principal

---

### setPrincipal

```java
public void setPrincipal​(Boolean principal)
```

Atribui valor para principal

- **Parameters:** `principal` - the principal to set

---

### getAttach

```java
public Boolean getAttach()
```

Recupera valor do attach

- **Returns:** the attach

---

### setAttach

```java
public void setAttach​(Boolean attach)
```

Atribui valor para attach

- **Parameters:** `attach` - the attach to set

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

# Class CardIndexCreateVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexCreateVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexCreateVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CardIndexCreateVO
```

```java
public class CardIndexCreateVO
extends Object
implements Serializable
```

Value Object para Criação de Card Index

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardIndexCreateVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<CardIndexAttachmentCreateVO>` | `getAttachments()` | Recupera valor do attachments |
| `String` | `getCardDescription()` | Recupera valor do cardDescription |
| `String` | `getDatasetName()` | Recupera valor do datasetName |
| `String` | `getDocumentDescription()` | Recupera valor do documentDescription |
| `Integer` | `getParentDocumentId()` | Recupera valor do parentDocumentId |
| `Integer` | `getPersistenceType()` | Recupera valor do persistenceType |
| `String` | `getPublisherId()` | Recupera valor do publisherId |
| `Long` | `getTenantId()` | Recupera valor do tenantId |
| `void` | `setAttachments​(List<CardIndexAttachmentCreateVO> attachments)` | Atribui valor para attachments |
| `void` | `setCardDescription​(String cardDescription)` | Atribui valor para cardDescription |
| `void` | `setDatasetName​(String datasetName)` | Atribui valor para datasetName |
| `void` | `setDocumentDescription​(String documentDescription)` | Atribui valor para documentDescription |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` | Atribui valor para parentDocumentId |
| `void` | `setPersistenceType​(Integer persistenceType)` | Atribui valor para persistenceType |
| `void` | `setPublisherId​(String publisherId)` | Atribui valor para publisherId |
| `void` | `setTenantId​(Long tenantId)` | Atribui valor para tenantId |


---

## Detalhes dos Construtores

### CardIndexCreateVO

```java
public CardIndexCreateVO()
```



## Detalhes dos Métodos

### getTenantId

```java
public Long getTenantId()
```

Recupera valor do tenantId

- **Returns:** the tenantId

---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```

Atribui valor para tenantId

- **Parameters:** `tenantId` - the tenantId to set

---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```

Recupera valor do parentDocumentId

- **Returns:** the parentDocumentId

---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```

Atribui valor para parentDocumentId

- **Parameters:** `parentDocumentId` - the parentDocumentId to set

---

### getPublisherId

```java
public String getPublisherId()
```

Recupera valor do publisherId

- **Returns:** the publisherId

---

### setPublisherId

```java
public void setPublisherId​(String publisherId)
```

Atribui valor para publisherId

- **Parameters:** `publisherId` - the publisherId to set

---

### getDocumentDescription

```java
public String getDocumentDescription()
```

Recupera valor do documentDescription

- **Returns:** the documentDescription

---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```

Atribui valor para documentDescription

- **Parameters:** `documentDescription` - the documentDescription to set

---

### getCardDescription

```java
public String getCardDescription()
```

Recupera valor do cardDescription

- **Returns:** the cardDescription

---

### setCardDescription

```java
public void setCardDescription​(String cardDescription)
```

Atribui valor para cardDescription

- **Parameters:** `cardDescription` - the cardDescription to set

---

### getDatasetName

```java
public String getDatasetName()
```

Recupera valor do datasetName

- **Returns:** the datasetName

---

### setDatasetName

```java
public void setDatasetName​(String datasetName)
```

Atribui valor para datasetName

- **Parameters:** `datasetName` - the datasetName to set

---

### getPersistenceType

```java
public Integer getPersistenceType()
```

Recupera valor do persistenceType

- **Returns:** the persistenceType

---

### setPersistenceType

```java
public void setPersistenceType​(Integer persistenceType)
```

Atribui valor para persistenceType

- **Parameters:** `persistenceType` - the persistenceType to set

---

### getAttachments

```java
public List<CardIndexAttachmentCreateVO> getAttachments()
```

Recupera valor do attachments

- **Returns:** the attachments

---

### setAttachments

```java
public void setAttachments​(List<CardIndexAttachmentCreateVO> attachments)
```

Atribui valor para attachments

- **Parameters:** `attachments` - the attachments to set

---

# Class CardIndexVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CardIndexVO
```

```java
public class CardIndexVO
extends Object
implements Serializable
```

Value Object para CardIndex

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardIndexVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<CardIndexAttachmentVO>` | `getAttachments()` | Recupera valor do attachments |
| `String` | `getCardDescription()` | Recupera valor do cardDescription |
| `String` | `getDatasetName()` | Recupera valor do datasetName |
| `String` | `getDocumentDescription()` | Recupera valor do documentDescription |
| `Integer` | `getDocumentId()` | Recupera valor do documentId |
| `Integer` | `getParentDocumentId()` | Recupera valor do parentDocumentId |
| `Integer` | `getPersistenceType()` | Recupera valor do persistenceType |
| `String` | `getPublisherId()` | Recupera valor do publisherId |
| `Long` | `getTenantId()` | Recupera valor do tenantId |
| `void` | `setAttachments​(List<CardIndexAttachmentVO> attachments)` | Atribui valor para attachments |
| `void` | `setCardDescription​(String cardDescription)` | Atribui valor para cardDescription |
| `void` | `setDatasetName​(String datasetName)` | Atribui valor para datasetName |
| `void` | `setDocumentDescription​(String documentDescription)` | Atribui valor para documentDescription |
| `void` | `setDocumentId​(Integer documentId)` | Atribui valor para documentId |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` | Atribui valor para parentDocumentId |
| `void` | `setPersistenceType​(Integer persistenceType)` | Atribui valor para persistenceType |
| `void` | `setPublisherId​(String publisherId)` | Atribui valor para publisherId |
| `void` | `setTenantId​(Long tenantId)` | Atribui valor para tenantId |


---

## Detalhes dos Construtores

### CardIndexVO

```java
public CardIndexVO()
```



## Detalhes dos Métodos

### getTenantId

```java
public Long getTenantId()
```

Recupera valor do tenantId

- **Returns:** the tenantId

---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```

Atribui valor para tenantId

- **Parameters:** `tenantId` - the tenantId to set

---

### getDocumentId

```java
public Integer getDocumentId()
```

Recupera valor do documentId

- **Returns:** the documentId

---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```

Atribui valor para documentId

- **Parameters:** `documentId` - the documentId to set

---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```

Recupera valor do parentDocumentId

- **Returns:** the parentDocumentId

---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```

Atribui valor para parentDocumentId

- **Parameters:** `parentDocumentId` - the parentDocumentId to set

---

### getPublisherId

```java
public String getPublisherId()
```

Recupera valor do publisherId

- **Returns:** the publisherId

---

### setPublisherId

```java
public void setPublisherId​(String publisherId)
```

Atribui valor para publisherId

- **Parameters:** `publisherId` - the publisherId to set

---

### getDocumentDescription

```java
public String getDocumentDescription()
```

Recupera valor do documentDescription

- **Returns:** the documentDescription

---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```

Atribui valor para documentDescription

- **Parameters:** `documentDescription` - the documentDescription to set

---

### getCardDescription

```java
public String getCardDescription()
```

Recupera valor do cardDescription

- **Returns:** the cardDescription

---

### setCardDescription

```java
public void setCardDescription​(String cardDescription)
```

Atribui valor para cardDescription

- **Parameters:** `cardDescription` - the cardDescription to set

---

### getDatasetName

```java
public String getDatasetName()
```

Recupera valor do datasetName

- **Returns:** the datasetName

---

### setDatasetName

```java
public void setDatasetName​(String datasetName)
```

Atribui valor para datasetName

- **Parameters:** `datasetName` - the datasetName to set

---

### getPersistenceType

```java
public Integer getPersistenceType()
```

Recupera valor do persistenceType

- **Returns:** the persistenceType

---

### setPersistenceType

```java
public void setPersistenceType​(Integer persistenceType)
```

Atribui valor para persistenceType

- **Parameters:** `persistenceType` - the persistenceType to set

---

### getAttachments

```java
public List<CardIndexAttachmentVO> getAttachments()
```

Recupera valor do attachments

- **Returns:** the attachments

---

### setAttachments

```java
public void setAttachments​(List<CardIndexAttachmentVO> attachments)
```

Atribui valor para attachments

- **Parameters:** `attachments` - the attachments to set

---

# Class CardItemVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardItemVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardItemVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CardItemVO
```

```java
public class CardItemVO
extends Object
implements Serializable
```

Value Object para CardItem

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardItemVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAdditionalComments()` | Recupera valor do additionalComments |
| `List<AttachmentVO>` | `getAttachments()` | Recupera valor do attachments |
| `String` | `getColleagueId()` | Recupera valor do colleagueId |
| `String` | `getDocumentDescription()` | Recupera valor do documentDescription |
| `Integer` | `getDocumentId()` | Recupera valor do documentId |
| `String` | `getDocumentType()` | Recupera valor do documentType |
| `String` | `getDocumentTypeId()` | Recupera valor do documentTypeId |
| `Boolean` | `getDownloadEnabled()` | Recupera valor do downloadEnabled |
| `Date` | `getExpirationDate()` | Recupera valor do expirationDate |
| `Boolean` | `getExpires()` | Recupera valor do expires |
| `List<Map<String,​String>>` | `getFormData()` | Recupera valor do formData |
| `Integer` | `getIconId()` | Recupera valor do iconId |
| `Boolean` | `getImutable()` | Recupera valor do imutable |
| `Boolean` | `getInheritSecurity()` | Recupera valor do inheritSecurity |
| `Boolean` | `getInternalVisualizer()` | Recupera valor do internalVisualizer |
| `String` | `getKeyWord()` | Recupera valor do keyWord |
| `String` | `getLanguageId()` | Recupera valor do languageId |
| `Integer` | `getMetaListId()` | Recupera valor do metaListId |
| `Integer` | `getNotificationDays()` | Recupera valor do notificationDays |
| `Integer` | `getParentDocumentId()` | Recupera valor do parentDocumentId |
| `List<DocumentPermissionVO>` | `getPermissions()` | Recupera valor do permissions |
| `Integer` | `getPermissionType()` | Recupera valor do permissionType |
| `Boolean` | `getPrivateDocument()` | Recupera valor do privateDocument |
| `List<DocumentApproverVO>` | `getPublisherApprovers()` | Recupera valor do publisherApprovers |
| `List<RelatedDocumentVO>` | `getRelatedDocuments()` | Recupera valor do relatedDocuments |
| `List<DocumentRestrictionVO>` | `getRestrictions()` | Recupera valor do restrictions |
| `Integer` | `getRestrictionType()` | Recupera valor do restrictionType |
| `Long` | `getTenantId()` | Recupera valor do tenantId |
| `Integer` | `getTopicId()` | Recupera valor do topicId |
| `Boolean` | `getUpdateIsoProperties()` | Recupera valor do updateIsoProperties |
| `Boolean` | `getUserNotify()` | Recupera valor do userNotify |
| `Date` | `getValidationStartDate()` | Recupera valor do validationStartDate |
| `Integer` | `getVersion()` | Recupera valor do version |
| `String` | `getVersionDescription()` | Recupera valor do versionDescription |
| `String` | `getVersionOption()` | Recupera valor do versionOption |
| `void` | `setAdditionalComments​(String additionalComments)` | Atribui valor para additionalComments |
| `void` | `setAttachments​(List<AttachmentVO> attachments)` | Atribui valor para attachments |
| `void` | `setColleagueId​(String colleagueId)` | Atribui valor para colleagueId |
| `void` | `setDocumentDescription​(String documentDescription)` | Atribui valor para documentDescription |
| `void` | `setDocumentId​(Integer documentId)` | Atribui valor para documentId |
| `void` | `setDocumentType​(String documentType)` | Atribui valor para documentType |
| `void` | `setDocumentTypeId​(String documentTypeId)` | Atribui valor para documentTypeId |
| `void` | `setDownloadEnabled​(Boolean downloadEnabled)` | Atribui valor para downloadEnabled |
| `void` | `setExpirationDate​(Date expirationDate)` | Atribui valor para expirationDate |
| `void` | `setExpires​(Boolean expires)` | Atribui valor para expires |
| `void` | `setFormData​(List<Map<String,​String>> formData)` | Atribui valor para formData |
| `void` | `setIconId​(Integer iconId)` | Atribui valor para iconId |
| `void` | `setImutable​(Boolean imutable)` | Atribui valor para imutable |
| `void` | `setInheritSecurity​(Boolean inheritSecurity)` | Atribui valor para inheritSecurity |
| `void` | `setInternalVisualizer​(Boolean internalVisualizer)` | Atribui valor para internalVisualizer |
| `void` | `setKeyWord​(String keyWord)` | Atribui valor para keyWord |
| `void` | `setLanguageId​(String languageId)` | Atribui valor para languageId |
| `void` | `setMetaListId​(Integer metaListId)` | Atribui valor para metaListId |
| `void` | `setNotificationDays​(Integer notificationDays)` | Atribui valor para notificationDays |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` | Atribui valor para parentDocumentId |
| `void` | `setPermissions​(List<DocumentPermissionVO> permissions)` | Atribui valor para permissions |
| `void` | `setPermissionType​(Integer permissionType)` | Atribui valor para permissionType |
| `void` | `setPrivateDocument​(Boolean privateDocument)` | Atribui valor para privateDocument |
| `void` | `setPublisherApprovers​(List<DocumentApproverVO> publisherApprovers)` | Atribui valor para publisherApprovers |
| `void` | `setRelatedDocuments​(List<RelatedDocumentVO> relatedDocuments)` | Atribui valor para relatedDocuments |
| `void` | `setRestrictions​(List<DocumentRestrictionVO> restrictions)` | Atribui valor para restrictions |
| `void` | `setRestrictionType​(Integer restrictionType)` | Atribui valor para restrictionType |
| `void` | `setTenantId​(Long tenantId)` | Atribui valor para tenantId |
| `void` | `setTopicId​(Integer topicId)` | Atribui valor para topicId |
| `void` | `setUpdateIsoProperties​(Boolean updateIsoProperties)` | Atribui valor para updateIsoProperties |
| `void` | `setUserNotify​(Boolean userNotify)` | Atribui valor para userNotify |
| `void` | `setValidationStartDate​(Date validationStartDate)` | Atribui valor para validationStartDate |
| `void` | `setVersion​(Integer version)` | Atribui valor para version |
| `void` | `setVersionDescription​(String versionDescription)` | Atribui valor para versionDescription |
| `void` | `setVersionOption​(String versionOption)` | Atribui valor para versionOption |


---

## Detalhes dos Construtores

### CardItemVO

```java
public CardItemVO()
```



## Detalhes dos Métodos

### getDocumentId

```java
public Integer getDocumentId()
```

Recupera valor do documentId

- **Returns:** the documentId

---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```

Atribui valor para documentId

- **Parameters:** `documentId` - the documentId to set

---

### getDocumentDescription

```java
public String getDocumentDescription()
```

Recupera valor do documentDescription

- **Returns:** the documentDescription

---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```

Atribui valor para documentDescription

- **Parameters:** `documentDescription` - the documentDescription to set

---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```

Recupera valor do parentDocumentId

- **Returns:** the parentDocumentId

---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```

Atribui valor para parentDocumentId

- **Parameters:** `parentDocumentId` - the parentDocumentId to set

---

### getPrivateDocument

```java
public Boolean getPrivateDocument()
```

Recupera valor do privateDocument

- **Returns:** the privateDocument

---

### setPrivateDocument

```java
public void setPrivateDocument​(Boolean privateDocument)
```

Atribui valor para privateDocument

- **Parameters:** `privateDocument` - the privateDocument to set

---

### getTenantId

```java
public Long getTenantId()
```

Recupera valor do tenantId

- **Returns:** the tenantId

---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```

Atribui valor para tenantId

- **Parameters:** `tenantId` - the tenantId to set

---

### getVersion

```java
public Integer getVersion()
```

Recupera valor do version

- **Returns:** the version

---

### setVersion

```java
public void setVersion​(Integer version)
```

Atribui valor para version

- **Parameters:** `version` - the version to set

---

### getMetaListId

```java
public Integer getMetaListId()
```

Recupera valor do metaListId

- **Returns:** the metaListId

---

### setMetaListId

```java
public void setMetaListId​(Integer metaListId)
```

Atribui valor para metaListId

- **Parameters:** `metaListId` - the metaListId to set

---

### getInheritSecurity

```java
public Boolean getInheritSecurity()
```

Recupera valor do inheritSecurity

- **Returns:** the inheritSecurity

---

### setInheritSecurity

```java
public void setInheritSecurity​(Boolean inheritSecurity)
```

Atribui valor para inheritSecurity

- **Parameters:** `inheritSecurity` - the inheritSecurity to set

---

### getPermissionType

```java
public Integer getPermissionType()
```

Recupera valor do permissionType

- **Returns:** the permissionType

---

### setPermissionType

```java
public void setPermissionType​(Integer permissionType)
```

Atribui valor para permissionType

- **Parameters:** `permissionType` - the permissionType to set

---

### getRestrictionType

```java
public Integer getRestrictionType()
```

Recupera valor do restrictionType

- **Returns:** the restrictionType

---

### setRestrictionType

```java
public void setRestrictionType​(Integer restrictionType)
```

Atribui valor para restrictionType

- **Parameters:** `restrictionType` - the restrictionType to set

---

### getUserNotify

```java
public Boolean getUserNotify()
```

Recupera valor do userNotify

- **Returns:** the userNotify

---

### setUserNotify

```java
public void setUserNotify​(Boolean userNotify)
```

Atribui valor para userNotify

- **Parameters:** `userNotify` - the userNotify to set

---

### getColleagueId

```java
public String getColleagueId()
```

Recupera valor do colleagueId

- **Returns:** the colleagueId

---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```

Atribui valor para colleagueId

- **Parameters:** `colleagueId` - the colleagueId to set

---

### getAdditionalComments

```java
public String getAdditionalComments()
```

Recupera valor do additionalComments

- **Returns:** the additionalComments

---

### setAdditionalComments

```java
public void setAdditionalComments​(String additionalComments)
```

Atribui valor para additionalComments

- **Parameters:** `additionalComments` - the additionalComments to set

---

### getKeyWord

```java
public String getKeyWord()
```

Recupera valor do keyWord

- **Returns:** the keyWord

---

### setKeyWord

```java
public void setKeyWord​(String keyWord)
```

Atribui valor para keyWord

- **Parameters:** `keyWord` - the keyWord to set

---

### getVersionDescription

```java
public String getVersionDescription()
```

Recupera valor do versionDescription

- **Returns:** the versionDescription

---

### setVersionDescription

```java
public void setVersionDescription​(String versionDescription)
```

Atribui valor para versionDescription

- **Parameters:** `versionDescription` - the versionDescription to set

---

### getVersionOption

```java
public String getVersionOption()
```

Recupera valor do versionOption

- **Returns:** the versionOption

---

### setVersionOption

```java
public void setVersionOption​(String versionOption)
```

Atribui valor para versionOption

- **Parameters:** `versionOption` - the versionOption to set

---

### getExpires

```java
public Boolean getExpires()
```

Recupera valor do expires

- **Returns:** the expires

---

### setExpires

```java
public void setExpires​(Boolean expires)
```

Atribui valor para expires

- **Parameters:** `expires` - the expires to set

---

### getTopicId

```java
public Integer getTopicId()
```

Recupera valor do topicId

- **Returns:** the topicId

---

### setTopicId

```java
public void setTopicId​(Integer topicId)
```

Atribui valor para topicId

- **Parameters:** `topicId` - the topicId to set

---

### getIconId

```java
public Integer getIconId()
```

Recupera valor do iconId

- **Returns:** the iconId

---

### setIconId

```java
public void setIconId​(Integer iconId)
```

Atribui valor para iconId

- **Parameters:** `iconId` - the iconId to set

---

### getImutable

```java
public Boolean getImutable()
```

Recupera valor do imutable

- **Returns:** the imutable

---

### setImutable

```java
public void setImutable​(Boolean imutable)
```

Atribui valor para imutable

- **Parameters:** `imutable` - the imutable to set

---

### getLanguageId

```java
public String getLanguageId()
```

Recupera valor do languageId

- **Returns:** the languageId

---

### setLanguageId

```java
public void setLanguageId​(String languageId)
```

Atribui valor para languageId

- **Parameters:** `languageId` - the languageId to set

---

### getInternalVisualizer

```java
public Boolean getInternalVisualizer()
```

Recupera valor do internalVisualizer

- **Returns:** the internalVisualizer

---

### setInternalVisualizer

```java
public void setInternalVisualizer​(Boolean internalVisualizer)
```

Atribui valor para internalVisualizer

- **Parameters:** `internalVisualizer` - the internalVisualizer to set

---

### getDownloadEnabled

```java
public Boolean getDownloadEnabled()
```

Recupera valor do downloadEnabled

- **Returns:** the downloadEnabled

---

### setDownloadEnabled

```java
public void setDownloadEnabled​(Boolean downloadEnabled)
```

Atribui valor para downloadEnabled

- **Parameters:** `downloadEnabled` - the downloadEnabled to set

---

### getUpdateIsoProperties

```java
public Boolean getUpdateIsoProperties()
```

Recupera valor do updateIsoProperties

- **Returns:** the updateIsoProperties

---

### setUpdateIsoProperties

```java
public void setUpdateIsoProperties​(Boolean updateIsoProperties)
```

Atribui valor para updateIsoProperties

- **Parameters:** `updateIsoProperties` - the updateIsoProperties to set

---

### getDocumentTypeId

```java
public String getDocumentTypeId()
```

Recupera valor do documentTypeId

- **Returns:** the documentTypeId

---

### setDocumentTypeId

```java
public void setDocumentTypeId​(String documentTypeId)
```

Atribui valor para documentTypeId

- **Parameters:** `documentTypeId` - the documentTypeId to set

---

### getNotificationDays

```java
public Integer getNotificationDays()
```

Recupera valor do notificationDays

- **Returns:** the notificationDays

---

### setNotificationDays

```java
public void setNotificationDays​(Integer notificationDays)
```

Atribui valor para notificationDays

- **Parameters:** `notificationDays` - the notificationDays to set

---

### getValidationStartDate

```java
public Date getValidationStartDate()
```

Recupera valor do validationStartDate

- **Returns:** the validationStartDate

---

### setValidationStartDate

```java
public void setValidationStartDate​(Date validationStartDate)
```

Atribui valor para validationStartDate

- **Parameters:** `validationStartDate` - the validationStartDate to set

---

### getExpirationDate

```java
public Date getExpirationDate()
```

Recupera valor do expirationDate

- **Returns:** the expirationDate

---

### setExpirationDate

```java
public void setExpirationDate​(Date expirationDate)
```

Atribui valor para expirationDate

- **Parameters:** `expirationDate` - the expirationDate to set

---

### getDocumentType

```java
public String getDocumentType()
```

Recupera valor do documentType

- **Returns:** the documentType

---

### setDocumentType

```java
public void setDocumentType​(String documentType)
```

Atribui valor para documentType

- **Parameters:** `documentType` - the documentType to set

---

### getPermissions

```java
public List<DocumentPermissionVO> getPermissions()
```

Recupera valor do permissions

- **Returns:** the permissions

---

### setPermissions

```java
public void setPermissions​(List<DocumentPermissionVO> permissions)
```

Atribui valor para permissions

- **Parameters:** `permissions` - the permissions to set

---

### getRestrictions

```java
public List<DocumentRestrictionVO> getRestrictions()
```

Recupera valor do restrictions

- **Returns:** the restrictions

---

### setRestrictions

```java
public void setRestrictions​(List<DocumentRestrictionVO> restrictions)
```

Atribui valor para restrictions

- **Parameters:** `restrictions` - the restrictions to set

---

### getPublisherApprovers

```java
public List<DocumentApproverVO> getPublisherApprovers()
```

Recupera valor do publisherApprovers

- **Returns:** the publisherApprovers

---

### setPublisherApprovers

```java
public void setPublisherApprovers​(List<DocumentApproverVO> publisherApprovers)
```

Atribui valor para publisherApprovers

- **Parameters:** `publisherApprovers` - the publisherApprovers to set

---

### getRelatedDocuments

```java
public List<RelatedDocumentVO> getRelatedDocuments()
```

Recupera valor do relatedDocuments

- **Returns:** the relatedDocuments

---

### setRelatedDocuments

```java
public void setRelatedDocuments​(List<RelatedDocumentVO> relatedDocuments)
```

Atribui valor para relatedDocuments

- **Parameters:** `relatedDocuments` - the relatedDocuments to set

---

### getAttachments

```java
public List<AttachmentVO> getAttachments()
```

Recupera valor do attachments

- **Returns:** the attachments

---

### setAttachments

```java
public void setAttachments​(List<AttachmentVO> attachments)
```

Atribui valor para attachments

- **Parameters:** `attachments` - the attachments to set

---

### getFormData

```java
public List<Map<String,​String>> getFormData()
```

Recupera valor do formData

- **Returns:** the formData

---

### setFormData

```java
public void setFormData​(List<Map<String,​String>> formData)
```

Atribui valor para formData

- **Parameters:** `formData` - the formData to set

---

# Class DatasetOfflineMobileRestVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/DatasetOfflineMobileRestVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/DatasetOfflineMobileRestVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.DatasetOfflineMobileRestVO
```

```java
public class DatasetOfflineMobileRestVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `DAYS` |  |
| `static String` | `HOURS` |  |
| `static String` | `WEEKS` |  |


## Construtores

| Nome | Descrição |
| --- | --- |
| `DatasetOfflineMobileRestVO()` |  |
| `DatasetOfflineMobileRestVO​(long companyId, Integer documentId, int version, String datasetId, long updateInterval)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `long` | `getCompanyId()` |  |
| `String` | `getDatasetId()` |  |
| `Integer` | `getDocumentId()` |  |
| `Long` | `getId()` |  |
| `String` | `getTimeUnit()` |  |
| `long` | `getUpdateInterval()` |  |
| `int` | `getVersion()` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setDatasetId​(String datasetId)` |  |
| `void` | `setDocumentId​(Integer documentId)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setTimeUnit​(String timeUnit)` |  |
| `void` | `setUpdateInterval​(long updateInterval)` |  |
| `void` | `setVersion​(int version)` |  |


---

## Detalhes dos Campos

### HOURS

```java
public static final String HOURS
```

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.workflow.DatasetOfflineMobileRestVO.HOURS)

---

### DAYS

```java
public static final String DAYS
```

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.workflow.DatasetOfflineMobileRestVO.DAYS)

---

### WEEKS

```java
public static final String WEEKS
```

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.workflow.DatasetOfflineMobileRestVO.WEEKS)


## Detalhes dos Construtores

### DatasetOfflineMobileRestVO

```java
public DatasetOfflineMobileRestVO()
```


---

### DatasetOfflineMobileRestVO

```java
public DatasetOfflineMobileRestVO​(long companyId,
                                  Integer documentId,
                                  int version,
                                  String datasetId,
                                  long updateInterval)
```



## Detalhes dos Métodos

### getCompanyId

```java
public long getCompanyId()
```


---

### setCompanyId

```java
public void setCompanyId​(long companyId)
```


---

### getDocumentId

```java
public Integer getDocumentId()
```


---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```


---

### getVersion

```java
public int getVersion()
```


---

### setVersion

```java
public void setVersion​(int version)
```


---

### getDatasetId

```java
public String getDatasetId()
```


---

### setDatasetId

```java
public void setDatasetId​(String datasetId)
```


---

### getUpdateInterval

```java
public long getUpdateInterval()
```


---

### setUpdateInterval

```java
public void setUpdateInterval​(long updateInterval)
```


---

### getId

```java
public Long getId()
```


---

### setId

```java
public void setId​(Long id)
```


---

### getTimeUnit

```java
public String getTimeUnit()
```


---

### setTimeUnit

```java
public void setTimeUnit​(String timeUnit)
```

---

# Class FormRecordVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/FormRecordVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/FormRecordVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.FormRecordVO
```

```java
public class FormRecordVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FormRecordVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDescription()` |  |
| `Integer` | `getId()` |  |
| `Integer` | `getVersion()` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setId​(Integer id)` |  |
| `void` | `setVersion​(Integer version)` |  |


---

## Detalhes dos Construtores

### FormRecordVO

```java
public FormRecordVO()
```



## Detalhes dos Métodos

### getId

```java
public Integer getId()
```


---

### setId

```java
public void setId​(Integer id)
```


---

### getVersion

```java
public Integer getVersion()
```


---

### setVersion

```java
public void setVersion​(Integer version)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```

---

# Class ManagerDefinitionVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ManagerDefinitionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ManagerDefinitionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ManagerDefinitionVO
```

```java
public class ManagerDefinitionVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ManagerDefinitionVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<String>` | `getAllProcessesFromThisDefinition()` |  |
| `List<String>` | `getProcessesUnderManagement()` |  |
| `List<String>` | `getUnknownManagement()` |  |
| `void` | `setProcessesUnderManagement​(List<String> processesUnderManagement)` |  |
| `void` | `setUnknownManagement​(List<String> unknownManagement)` |  |


---

## Detalhes dos Construtores

### ManagerDefinitionVO

```java
public ManagerDefinitionVO()
```



## Detalhes dos Métodos

### setProcessesUnderManagement

```java
public void setProcessesUnderManagement​(List<String> processesUnderManagement)
```


---

### getProcessesUnderManagement

```java
public List<String> getProcessesUnderManagement()
```


---

### setUnknownManagement

```java
public void setUnknownManagement​(List<String> unknownManagement)
```


---

### getUnknownManagement

```java
public List<String> getUnknownManagement()
```


---

### getAllProcessesFromThisDefinition

```java
public List<String> getAllProcessesFromThisDefinition()
```

---

# Class ProcessAttachmentVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessAttachmentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessAttachmentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessAttachmentVO
```

```java
public class ProcessAttachmentVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessAttachmentVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Date` | `getAttachedDate()` |  |
| `String` | `getColleagueId()` |  |
| `String` | `getDescription()` |  |
| `int` | `getDocumentId()` |  |
| `int` | `getOriginalMovementSequence()` |  |
| `int` | `getVersion()` |  |
| `void` | `setAttachedDate​(Date attachedDate)` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setDocumentId​(int documentId)` |  |
| `void` | `setOriginalMovementSequence​(int originalMovementSequence)` |  |
| `void` | `setVersion​(int version)` |  |


---

## Detalhes dos Construtores

### ProcessAttachmentVO

```java
public ProcessAttachmentVO()
```



## Detalhes dos Métodos

### getDocumentId

```java
public int getDocumentId()
```


---

### setDocumentId

```java
public void setDocumentId​(int documentId)
```


---

### getVersion

```java
public int getVersion()
```


---

### setVersion

```java
public void setVersion​(int version)
```


---

### getOriginalMovementSequence

```java
public int getOriginalMovementSequence()
```


---

### setOriginalMovementSequence

```java
public void setOriginalMovementSequence​(int originalMovementSequence)
```


---

### getColleagueId

```java
public String getColleagueId()
```


---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```


---

### getAttachedDate

```java
public Date getAttachedDate()
```


---

### setAttachedDate

```java
public void setAttachedDate​(Date attachedDate)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```

---

# Class ProcessDefinitionVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessDefinitionVO
```

```java
public class ProcessDefinitionVO
extends Object
implements Serializable
```

Value Object para ProcessDefinition

- **All Implemented Interfaces:** Serializable
- **Version:** 1.6
- **Author:** leandro.carlos
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessDefinitionVO()` | Construtor padrão do ProcessDefinitionVO |
| `ProcessDefinitionVO​(String processId, String processDescription)` | Cria uma instância do ProcessDefinitionVO |
| `ProcessDefinitionVO​(String processId, String processDescription, String icon)` | Cria uma instância do ProcessDefinitionVO com ícone |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getIcon()` | Recupera valor do icon |
| `String` | `getProcessDescription()` | Recupera valor do processDescription |
| `String` | `getProcessId()` | Recupera valor do processId |
| `void` | `setIcon​(String icon)` | Atribui valor para icon |
| `void` | `setProcessDescription​(String processDescription)` | Atribui valor para processDescription |
| `void` | `setProcessId​(String processId)` | Atribui valor para processId |


---

## Detalhes dos Construtores

### ProcessDefinitionVO

```java
public ProcessDefinitionVO()
```

Construtor padrão do ProcessDefinitionVO


---

### ProcessDefinitionVO

```java
public ProcessDefinitionVO​(String processId,
                           String processDescription)
```

Cria uma instância do ProcessDefinitionVO

- **Parameters:** `processId` - the processId to set

---

### ProcessDefinitionVO

```java
public ProcessDefinitionVO​(String processId,
                           String processDescription,
                           String icon)
```

Cria uma instância do ProcessDefinitionVO com ícone

- **Parameters:** `processId` - the processId to set


## Detalhes dos Métodos

### getProcessId

```java
public String getProcessId()
```

Recupera valor do processId

- **Returns:** the processId

---

### setProcessId

```java
public void setProcessId​(String processId)
```

Atribui valor para processId

- **Parameters:** `processId` - the processId to set

---

### getProcessDescription

```java
public String getProcessDescription()
```

Recupera valor do processDescription

- **Returns:** the processDescription

---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```

Atribui valor para processDescription

- **Parameters:** `processDescription` - the processDescription to set

---

### getIcon

```java
public String getIcon()
```

Recupera valor do icon

- **Returns:** the icon

---

### setIcon

```java
public void setIcon​(String icon)
```

Atribui valor para icon

- **Parameters:** `icon` - the icon to set

---

# Class ProcessDefinitionVersionVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessDefinitionVersionVO
```

```java
public class ProcessDefinitionVersionVO
extends Object
implements Serializable
```

Value Object para ProcessDefinitionVersion

- **All Implemented Interfaces:** Serializable
- **Version:** 1.5.3
- **Author:** marcelo.pereira
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessDefinitionVersionVO()` |  |
| `ProcessDefinitionVersionVO​(long tenantId, String processId, int version, String versionDescription, String categoryStructure, String fullCategoryStructure, String processDescription)` | Cria uma instância do ProcessDefinitionVersionVO |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCategoryStructure()` | Recupera valor do categoryStructure |
| `Integer` | `getFormId()` | Recupera valor do formId |
| `Integer` | `getFormVersion()` | Recupera valor do formVersion |
| `String` | `getFullCategoryStructure()` | Recupera valor do fullCategoryStructure |
| `ProcessStateVO` | `getInitialProcessState()` | Recupera valor do initialProcessState |
| `String` | `getProcessDescription()` | Recupera valor do processDescription |
| `String` | `getProcessId()` | Recupera valor do processId |
| `int` | `getRowId()` | Recupera valor do rowId |
| `long` | `getTenantId()` | Recupera valor do tenantId |
| `int` | `getVersion()` | Recupera valor do version |
| `String` | `getVersionDescription()` | Recupera valor do versionDescription |
| `boolean` | `isFavorite()` | Favorito? |
| `boolean` | `isMobileReady()` | Mobile? |
| `void` | `setCategoryStructure​(String categoryStructure)` | Atribui valor para categoryStructure |
| `void` | `setFavorite​(boolean favorite)` | Atribui valor para favorite |
| `void` | `setFormId​(Integer formId)` | Atribui valor para formId |
| `void` | `setFormVersion​(Integer formVersion)` | Atribui valor para formVersion |
| `void` | `setFullCategoryStructure​(String fullCategoryStructure)` | Atribui valor para fullCategoryStructure |
| `void` | `setInitialProcessState​(ProcessStateVO initialProcessState)` | Atribui valor para initialProcessState |
| `void` | `setMobileReady​(boolean mobileReady)` | Atribui valor para mobileReady |
| `void` | `setProcessDescription​(String processDescription)` | Atribui valor para processDescription |
| `void` | `setProcessId​(String processId)` | Atribui valor para processId |
| `void` | `setRowId​(int rowId)` | Atribui valor para rowId |
| `void` | `setTenantId​(long tenantId)` | Atribui valor para tenantId |
| `void` | `setVersion​(int version)` | Atribui valor para version |
| `void` | `setVersionDescription​(String versionDescription)` | Atribui valor para versionDescription |


---

## Detalhes dos Construtores

### ProcessDefinitionVersionVO

```java
public ProcessDefinitionVersionVO()
```


---

### ProcessDefinitionVersionVO

```java
public ProcessDefinitionVersionVO​(long tenantId,
                                  String processId,
                                  int version,
                                  String versionDescription,
                                  String categoryStructure,
                                  String fullCategoryStructure,
                                  String processDescription)
```

Cria uma instância do ProcessDefinitionVersionVO

- **Parameters:** `tenantId` - the tenantId to set


## Detalhes dos Métodos

### getTenantId

```java
public long getTenantId()
```

Recupera valor do tenantId

- **Returns:** the tenantId

---

### setTenantId

```java
public void setTenantId​(long tenantId)
```

Atribui valor para tenantId

- **Parameters:** `tenantId` - the tenantId to set

---

### getProcessId

```java
public String getProcessId()
```

Recupera valor do processId

- **Returns:** the processId

---

### setProcessId

```java
public void setProcessId​(String processId)
```

Atribui valor para processId

- **Parameters:** `processId` - the processId to set

---

### getVersion

```java
public int getVersion()
```

Recupera valor do version

- **Returns:** the version

---

### setVersion

```java
public void setVersion​(int version)
```

Atribui valor para version

- **Parameters:** `version` - the version to set

---

### getVersionDescription

```java
public String getVersionDescription()
```

Recupera valor do versionDescription

- **Returns:** the versionDescription

---

### setVersionDescription

```java
public void setVersionDescription​(String versionDescription)
```

Atribui valor para versionDescription

- **Parameters:** `versionDescription` - the versionDescription to set

---

### getCategoryStructure

```java
public String getCategoryStructure()
```

Recupera valor do categoryStructure

- **Returns:** the categoryStructure

---

### setCategoryStructure

```java
public void setCategoryStructure​(String categoryStructure)
```

Atribui valor para categoryStructure

- **Parameters:** `categoryStructure` - the categoryStructure to set

---

### setFullCategoryStructure

```java
public void setFullCategoryStructure​(String fullCategoryStructure)
```

Atribui valor para fullCategoryStructure

- **Parameters:** `fullCategoryStructure` - the fullCategoryStructure to set

---

### getFullCategoryStructure

```java
public String getFullCategoryStructure()
```

Recupera valor do fullCategoryStructure

- **Returns:** the fullCategoryStructure

---

### getProcessDescription

```java
public String getProcessDescription()
```

Recupera valor do processDescription

- **Returns:** the processDescription

---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```

Atribui valor para processDescription

- **Parameters:** `processDescription` - the processDescription to set

---

### getRowId

```java
public int getRowId()
```

Recupera valor do rowId

- **Returns:** the rowId

---

### setRowId

```java
public void setRowId​(int rowId)
```

Atribui valor para rowId

- **Parameters:** `rowId` - the rowId to set

---

### isFavorite

```java
public boolean isFavorite()
```

Favorito?

- **Returns:** the favorite

---

### setFavorite

```java
public void setFavorite​(boolean favorite)
```

Atribui valor para favorite

- **Parameters:** `favorite` - the favorite to set

---

### isMobileReady

```java
public boolean isMobileReady()
```

Mobile?

- **Returns:** the mobileReady

---

### setMobileReady

```java
public void setMobileReady​(boolean mobileReady)
```

Atribui valor para mobileReady

- **Parameters:** `mobileReady` - the mobileReady to set

---

### getFormId

```java
public Integer getFormId()
```

Recupera valor do formId

- **Returns:** the formId

---

### setFormId

```java
public void setFormId​(Integer formId)
```

Atribui valor para formId

- **Parameters:** `formId` - the formId to set

---

### getInitialProcessState

```java
public ProcessStateVO getInitialProcessState()
```

Recupera valor do initialProcessState

- **Returns:** the initialProcessState

---

### setInitialProcessState

```java
public void setInitialProcessState​(ProcessStateVO initialProcessState)
```

Atribui valor para initialProcessState

- **Parameters:** `initialProcessState` - the initialProcessState to set

---

### getFormVersion

```java
public Integer getFormVersion()
```

Recupera valor do formVersion

- **Returns:** the formVersion

---

### setFormVersion

```java
public void setFormVersion​(Integer formVersion)
```

Atribui valor para formVersion

- **Parameters:** `formVersion` - the formVersion to set

---

# Class ProcessInstanceInfoVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessInstanceInfoVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessInstanceInfoVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessInstanceInfoVO
```

```java
public class ProcessInstanceInfoVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessInstanceInfoVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<ProcessAttachmentVO>` | `getAttachments()` |  |
| `long` | `getCompanyId()` |  |
| `int` | `getFormId()` |  |
| `Map<String,​String>` | `getFormValues()` |  |
| `int` | `getFormVersion()` |  |
| `String` | `getProcessId()` |  |
| `int` | `getProcessInstanceId()` |  |
| `int` | `getProcessVersion()` |  |
| `Date` | `getStartDateProcess()` |  |
| `List<ProcessObservationVO>` | `getTaskObservations()` |  |
| `List<ProcessTaskInfoVO>` | `getTasksInfo()` |  |
| `void` | `setAttachments​(List<ProcessAttachmentVO> attachments)` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setFormId​(int formId)` |  |
| `void` | `setFormValues​(Map<String,​String> formValues)` |  |
| `void` | `setFormVersion​(int formVersion)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setProcessVersion​(int processVersion)` |  |
| `void` | `setStartDateProcess​(Date startDateProcess)` |  |
| `void` | `setTaskObservations​(List<ProcessObservationVO> taskObservations)` |  |
| `void` | `setTasksInfo​(List<ProcessTaskInfoVO> tasksInfo)` |  |


---

## Detalhes dos Construtores

### ProcessInstanceInfoVO

```java
public ProcessInstanceInfoVO()
```



## Detalhes dos Métodos

### getCompanyId

```java
public long getCompanyId()
```


---

### setCompanyId

```java
public void setCompanyId​(long companyId)
```


---

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getProcessVersion

```java
public int getProcessVersion()
```


---

### setProcessVersion

```java
public void setProcessVersion​(int processVersion)
```


---

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getFormId

```java
public int getFormId()
```


---

### setFormId

```java
public void setFormId​(int formId)
```


---

### getFormVersion

```java
public int getFormVersion()
```


---

### setFormVersion

```java
public void setFormVersion​(int formVersion)
```


---

### getFormValues

```java
public Map<String,​String> getFormValues()
```


---

### setFormValues

```java
public void setFormValues​(Map<String,​String> formValues)
```


---

### getTaskObservations

```java
public List<ProcessObservationVO> getTaskObservations()
```


---

### getAttachments

```java
public List<ProcessAttachmentVO> getAttachments()
```


---

### setAttachments

```java
public void setAttachments​(List<ProcessAttachmentVO> attachments)
```


---

### setTaskObservations

```java
public void setTaskObservations​(List<ProcessObservationVO> taskObservations)
```


---

### getTasksInfo

```java
public List<ProcessTaskInfoVO> getTasksInfo()
```


---

### setTasksInfo

```java
public void setTasksInfo​(List<ProcessTaskInfoVO> tasksInfo)
```


---

### getStartDateProcess

```java
public Date getStartDateProcess()
```


---

### setStartDateProcess

```java
public void setStartDateProcess​(Date startDateProcess)
```

---

# Class ProcessObservationVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessObservationVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessObservationVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessObservationVO
```

```java
public class ProcessObservationVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessObservationVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getColleagueId()` |  |
| `Long` | `getId()` |  |
| `Integer` | `getMovementSequence()` |  |
| `String` | `getObservation()` |  |
| `Date` | `getObservationDate()` |  |
| `Integer` | `getProcessInstanceId()` |  |
| `Integer` | `getStateSequence()` |  |
| `Integer` | `getThreadSequence()` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setMovementSequence​(Integer movementSequence)` |  |
| `void` | `setObservation​(String observation)` |  |
| `void` | `setObservationDate​(Date observationDate)` |  |
| `void` | `setProcessInstanceId​(Integer processInstanceId)` |  |
| `void` | `setStateSequence​(Integer stateSequence)` |  |
| `void` | `setThreadSequence​(Integer threadSequence)` |  |


---

## Detalhes dos Construtores

### ProcessObservationVO

```java
public ProcessObservationVO()
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```


---

### setId

```java
public void setId​(Long id)
```


---

### getColleagueId

```java
public String getColleagueId()
```


---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```


---

### getProcessInstanceId

```java
public Integer getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(Integer processInstanceId)
```


---

### getObservationDate

```java
public Date getObservationDate()
```


---

### setObservationDate

```java
public void setObservationDate​(Date observationDate)
```


---

### getStateSequence

```java
public Integer getStateSequence()
```


---

### setStateSequence

```java
public void setStateSequence​(Integer stateSequence)
```


---

### getThreadSequence

```java
public Integer getThreadSequence()
```


---

### setThreadSequence

```java
public void setThreadSequence​(Integer threadSequence)
```


---

### getMovementSequence

```java
public Integer getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(Integer movementSequence)
```


---

### getObservation

```java
public String getObservation()
```


---

### setObservation

```java
public void setObservation​(String observation)
```

---

# Class ProcessStateVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessStateVO
```

```java
public class ProcessStateVO
extends Object
implements Serializable
```

Value Object para ProcessState

- **All Implemented Interfaces:** Serializable
- **Version:** 1.5.3
- **Author:** marcelo.pereira
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessStateVO()` | Cria uma instância do ProcessStateVO |
| `ProcessStateVO​(long tenantId, int sequence, String stateName, String stateDescription)` | Cria uma instância do ProcessStateVO |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `int` | `getSequence()` | Recupera valor do sequence |
| `String` | `getStateDescription()` | Recupera valor do stateDescription |
| `String` | `getStateName()` | Recupera valor do stateName |
| `long` | `getTenantId()` | Recupera valor do tenantId |
| `void` | `setSequence​(int sequence)` | Atribui valor para sequence |
| `void` | `setStateDescription​(String stateDescription)` | Atribui valor para stateDescription |
| `void` | `setStateName​(String stateName)` | Atribui valor para stateName |
| `void` | `setTenantId​(long tenantId)` | Atribui valor para tenantId |


---

## Detalhes dos Construtores

### ProcessStateVO

```java
public ProcessStateVO()
```

Cria uma instância do ProcessStateVO


---

### ProcessStateVO

```java
public ProcessStateVO​(long tenantId,
                      int sequence,
                      String stateName,
                      String stateDescription)
```

Cria uma instância do ProcessStateVO

- **Parameters:** `tenantId` - the tenantId to set


## Detalhes dos Métodos

### getTenantId

```java
public long getTenantId()
```

Recupera valor do tenantId

- **Returns:** the tenantId

---

### setTenantId

```java
public void setTenantId​(long tenantId)
```

Atribui valor para tenantId

- **Parameters:** `tenantId` - the tenantId to set

---

### getSequence

```java
public int getSequence()
```

Recupera valor do sequence

- **Returns:** the sequence

---

### setSequence

```java
public void setSequence​(int sequence)
```

Atribui valor para sequence

- **Parameters:** `sequence` - the sequence to set

---

### getStateName

```java
public String getStateName()
```

Recupera valor do stateName

- **Returns:** the stateName

---

### setStateName

```java
public void setStateName​(String stateName)
```

Atribui valor para stateName

- **Parameters:** `stateName` - the stateName to set

---

### getStateDescription

```java
public String getStateDescription()
```

Recupera valor do stateDescription

- **Returns:** the stateDescription

---

### setStateDescription

```java
public void setStateDescription​(String stateDescription)
```

Atribui valor para stateDescription

- **Parameters:** `stateDescription` - the stateDescription to set

---

# Class ProcessTaskInfoVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessTaskInfoVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessTaskInfoVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessTaskInfoVO
```

```java
public class ProcessTaskInfoVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessTaskInfoVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getColleagueName()` |  |
| `int` | `getMovementSequence()` |  |
| `Date` | `getStartDateTask()` |  |
| `ProcessStateVO` | `getState()` |  |
| `int` | `getStateSequence()` |  |
| `int` | `getStatus()` |  |
| `Date` | `getTaskDeadline()` |  |
| `int` | `getTransferredSequence()` |  |
| `boolean` | `isActive()` |  |
| `boolean` | `isExpired()` |  |
| `void` | `setActive​(boolean active)` |  |
| `void` | `setColleagueName​(String colleagueName)` |  |
| `void` | `setExpired​(boolean expired)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setStartDateTask​(Date startDateTask)` |  |
| `void` | `setState​(ProcessStateVO state)` |  |
| `void` | `setStateSequence​(int stateSequence)` |  |
| `void` | `setStatus​(int status)` |  |
| `void` | `setTaskDeadline​(Date taskDeadline)` |  |
| `void` | `setTransferredSequence​(int transferredSequence)` |  |


---

## Detalhes dos Construtores

### ProcessTaskInfoVO

```java
public ProcessTaskInfoVO()
```



## Detalhes dos Métodos

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```


---

### getTransferredSequence

```java
public int getTransferredSequence()
```


---

### setTransferredSequence

```java
public void setTransferredSequence​(int transferredSequence)
```


---

### getStateSequence

```java
public int getStateSequence()
```


---

### setStateSequence

```java
public void setStateSequence​(int stateSequence)
```


---

### getColleagueName

```java
public String getColleagueName()
```


---

### setColleagueName

```java
public void setColleagueName​(String colleagueName)
```


---

### getState

```java
public ProcessStateVO getState()
```


---

### setState

```java
public void setState​(ProcessStateVO state)
```


---

### getTaskDeadline

```java
public Date getTaskDeadline()
```


---

### setTaskDeadline

```java
public void setTaskDeadline​(Date taskDeadline)
```


---

### isExpired

```java
public boolean isExpired()
```


---

### setExpired

```java
public void setExpired​(boolean expired)
```


---

### getStartDateTask

```java
public Date getStartDateTask()
```


---

### setStartDateTask

```java
public void setStartDateTask​(Date startDateTask)
```


---

### getStatus

```java
public int getStatus()
```


---

### setStatus

```java
public void setStatus​(int status)
```


---

### isActive

```java
public boolean isActive()
```


---

### setActive

```java
public void setActive​(boolean active)
```

---

# Class ProcessTaskVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessTaskVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessTaskVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessTaskVO
```

```java
public class ProcessTaskVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessTaskVO()` |  |
| `ProcessTaskVO​(long companyId, int processInstanceId, int movementSequence, int transferredSequence, String colleagueId, String selectedColleagueId, String complement)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getColleagueId()` |  |
| `long` | `getCompanyId()` |  |
| `String` | `getComplement()` |  |
| `int` | `getMovementSequence()` |  |
| `int` | `getProcessInstanceId()` |  |
| `String` | `getSelectedColleagueId()` |  |
| `int` | `getTransferredSequence()` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setComplement​(String complement)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setSelectedColleagueId​(String selectedColleagueId)` |  |
| `void` | `setTransferredSequence​(int transferredSequence)` |  |


---

## Detalhes dos Construtores

### ProcessTaskVO

```java
public ProcessTaskVO()
```


---

### ProcessTaskVO

```java
public ProcessTaskVO​(long companyId,
                     int processInstanceId,
                     int movementSequence,
                     int transferredSequence,
                     String colleagueId,
                     String selectedColleagueId,
                     String complement)
```



## Detalhes dos Métodos

### getCompanyId

```java
public long getCompanyId()
```


---

### setCompanyId

```java
public void setCompanyId​(long companyId)
```


---

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```


---

### getTransferredSequence

```java
public int getTransferredSequence()
```


---

### setTransferredSequence

```java
public void setTransferredSequence​(int transferredSequence)
```


---

### getColleagueId

```java
public String getColleagueId()
```


---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```


---

### getSelectedColleagueId

```java
public String getSelectedColleagueId()
```


---

### setSelectedColleagueId

```java
public void setSelectedColleagueId​(String selectedColleagueId)
```


---

### getComplement

```java
public String getComplement()
```


---

### setComplement

```java
public void setComplement​(String complement)
```

---

# Class ProcessVersionVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessVersionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessVersionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ProcessVersionVO
```

```java
public class ProcessVersionVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ProcessVersionVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<ProcessVersionVO>` | `getChildren()` |  |
| `long` | `getCompanyId()` |  |
| `Boolean` | `getFavorite()` |  |
| `Integer` | `getFormId()` |  |
| `String` | `getProcessId()` |  |
| `Boolean` | `getSelected()` |  |
| `String` | `getVersionDescription()` |  |
| `void` | `setChildren​(List<ProcessVersionVO> children)` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setFavorite​(Boolean favorite)` |  |
| `void` | `setFormId​(Integer formId)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setSelected​(Boolean selected)` |  |
| `void` | `setVersionDescription​(String versionDescription)` |  |


---

## Detalhes dos Construtores

### ProcessVersionVO

```java
public ProcessVersionVO()
```



## Detalhes dos Métodos

### getSelected

```java
public Boolean getSelected()
```

- **Returns:** the selected

---

### setSelected

```java
public void setSelected​(Boolean selected)
```

- **Parameters:** `selected` - the selected to set

---

### getChildren

```java
public List<ProcessVersionVO> getChildren()
```

- **Returns:** the children

---

### setChildren

```java
public void setChildren​(List<ProcessVersionVO> children)
```

- **Parameters:** `children` - the children to set

---

### getCompanyId

```java
public long getCompanyId()
```

- **Returns:** the companyId

---

### setCompanyId

```java
public void setCompanyId​(long companyId)
```

- **Parameters:** `companyId` - the companyId to set

---

### getFormId

```java
public Integer getFormId()
```

- **Returns:** the formId

---

### setFormId

```java
public void setFormId​(Integer formId)
```

- **Parameters:** `formId` - the formId to set

---

### getVersionDescription

```java
public String getVersionDescription()
```

- **Returns:** the versionDescription

---

### setVersionDescription

```java
public void setVersionDescription​(String versionDescription)
```

- **Parameters:** `versionDescription` - the versionDescription to set

---

### getProcessId

```java
public String getProcessId()
```

- **Returns:** the processId

---

### setProcessId

```java
public void setProcessId​(String processId)
```

- **Parameters:** `processId` - the processId to set

---

### getFavorite

```java
public Boolean getFavorite()
```

- **Returns:** the favorite

---

### setFavorite

```java
public void setFavorite​(Boolean favorite)
```

- **Parameters:** `favorite` - the favorite to set

---

# Class RequestProcessTaskVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestProcessTaskVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestProcessTaskVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.RequestProcessTaskVO
```

```java
public class RequestProcessTaskVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `RequestProcessTaskVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Map<String,​String>` | `getCardFields()` |  |
| `Date` | `getDeadlineDate()` |  |
| `Date` | `getEndDate()` |  |
| `Long` | `getFullTime()` |  |
| `Long` | `getPercentageConcluded()` |  |
| `String` | `getPeriodId()` |  |
| `String` | `getProcessDescription()` |  |
| `String` | `getProcessId()` |  |
| `int` | `getProcessInstanceId()` |  |
| `int` | `getProcessVersion()` |  |
| `Long` | `getRemainingTime()` |  |
| `String` | `getRequesterCode()` |  |
| `String` | `getRequesterName()` |  |
| `Long` | `getSpentTime()` |  |
| `Date` | `getStartDate()` |  |
| `String` | `getStateName()` |  |
| `int` | `getStatusTask()` |  |
| `Date` | `getWarningDate()` |  |
| `void` | `setCardFields​(Map<String,​String> cardFields)` |  |
| `void` | `setDeadlineDate​(Date deadlineDate)` |  |
| `void` | `setEndDate​(Date endDate)` |  |
| `void` | `setFullTime​(Long fullTime)` |  |
| `void` | `setPercentageConcluded​(Long percentageConcluded)` |  |
| `void` | `setPeriodId​(String periodId)` |  |
| `void` | `setProcessDescription​(String processDescription)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setProcessVersion​(int processVersion)` |  |
| `void` | `setRemainingTime​(Long remainingTime)` |  |
| `void` | `setRequesterCode​(String requesterCode)` |  |
| `void` | `setRequesterName​(String requesterName)` |  |
| `void` | `setSpentTime​(Long spentTime)` |  |
| `void` | `setStartDate​(Date startDate)` |  |
| `void` | `setStateName​(String stateName)` |  |
| `void` | `setStatusTask​(int statusTask)` |  |
| `void` | `setWarningDate​(Date warningDate)` |  |


---

## Detalhes dos Construtores

### RequestProcessTaskVO

```java
public RequestProcessTaskVO()
```



## Detalhes dos Métodos

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getProcessDescription

```java
public String getProcessDescription()
```


---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```


---

### getRequesterCode

```java
public String getRequesterCode()
```


---

### setRequesterCode

```java
public void setRequesterCode​(String requesterCode)
```


---

### getRequesterName

```java
public String getRequesterName()
```


---

### setRequesterName

```java
public void setRequesterName​(String requesterName)
```


---

### getStatusTask

```java
public int getStatusTask()
```


---

### setStatusTask

```java
public void setStatusTask​(int statusTask)
```


---

### getStartDate

```java
public Date getStartDate()
```


---

### setStartDate

```java
public void setStartDate​(Date startDate)
```


---

### getProcessVersion

```java
public int getProcessVersion()
```


---

### setProcessVersion

```java
public void setProcessVersion​(int processVersion)
```


---

### getWarningDate

```java
public Date getWarningDate()
```


---

### setWarningDate

```java
public void setWarningDate​(Date warningDate)
```


---

### getDeadlineDate

```java
public Date getDeadlineDate()
```


---

### setDeadlineDate

```java
public void setDeadlineDate​(Date deadlineDate)
```


---

### getEndDate

```java
public Date getEndDate()
```


---

### setEndDate

```java
public void setEndDate​(Date endDate)
```


---

### getStateName

```java
public String getStateName()
```


---

### setStateName

```java
public void setStateName​(String stateName)
```


---

### getFullTime

```java
public Long getFullTime()
```


---

### setFullTime

```java
public void setFullTime​(Long fullTime)
```


---

### getSpentTime

```java
public Long getSpentTime()
```


---

### setSpentTime

```java
public void setSpentTime​(Long spentTime)
```


---

### getRemainingTime

```java
public Long getRemainingTime()
```


---

### setRemainingTime

```java
public void setRemainingTime​(Long remainingTime)
```


---

### getPercentageConcluded

```java
public Long getPercentageConcluded()
```


---

### setPercentageConcluded

```java
public void setPercentageConcluded​(Long percentageConcluded)
```


---

### getPeriodId

```java
public String getPeriodId()
```


---

### setPeriodId

```java
public void setPeriodId​(String periodId)
```


---

### getCardFields

```java
public Map<String,​String> getCardFields()
```


---

### setCardFields

```java
public void setCardFields​(Map<String,​String> cardFields)
```

---

# Class RequestSLAVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.RequestSLAVO
```

```java
public class RequestSLAVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `RequestSLAVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `boolean` | `equals​(Object o)` |  |
| `List<RequestTaskSLAVO>` | `getActualTasks()` |  |
| `Map<String,​String>` | `getCardFields()` |  |
| `Date` | `getDeadlineDate()` |  |
| `Date` | `getEndDate()` |  |
| `List<String>` | `getExpandables()` |  |
| `Long` | `getFullTime()` |  |
| `Long` | `getPercentageConcluded()` |  |
| `String` | `getProcessDescription()` |  |
| `String` | `getProcessId()` |  |
| `int` | `getProcessInstanceId()` |  |
| `int` | `getProcessVersion()` |  |
| `Long` | `getRemainingTime()` |  |
| `String` | `getRequesterCode()` |  |
| `LocalVO` | `getRequesterLocal()` |  |
| `String` | `getRequesterName()` |  |
| `Long` | `getSpentTime()` |  |
| `Date` | `getStartDate()` |  |
| `String` | `getStatusRequest()` |  |
| `String` | `getStatusSla()` |  |
| `Date` | `getWarningDate()` |  |
| `int` | `hashCode()` |  |
| `void` | `setActualTasks​(List<RequestTaskSLAVO> actualTasks)` |  |
| `void` | `setCardFields​(Map<String,​String> cardFields)` |  |
| `void` | `setDeadlineDate​(Date deadlineDate)` |  |
| `void` | `setEndDate​(Date endDate)` |  |
| `void` | `setExpandables​(List<String> expandables)` |  |
| `void` | `setFullTime​(Long fullTime)` |  |
| `void` | `setPercentageConcluded​(Long percentageConcluded)` |  |
| `void` | `setProcessDescription​(String processDescription)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setProcessVersion​(int processVersion)` |  |
| `void` | `setRemainingTime​(Long remainingTime)` |  |
| `void` | `setRequesterCode​(String requesterCode)` |  |
| `void` | `setRequesterLocal​(LocalVO requesterLocal)` |  |
| `void` | `setRequesterName​(String requesterName)` |  |
| `void` | `setSpentTime​(Long spentTime)` |  |
| `void` | `setStartDate​(Date startDate)` |  |
| `void` | `setStatusRequest​(String statusRequest)` |  |
| `void` | `setStatusSla​(String statusSla)` |  |
| `void` | `setWarningDate​(Date warningDate)` |  |


---

## Detalhes dos Construtores

### RequestSLAVO

```java
public RequestSLAVO()
```



## Detalhes dos Métodos

### getPercentageConcluded

```java
public Long getPercentageConcluded()
```


---

### setPercentageConcluded

```java
public void setPercentageConcluded​(Long percentageConcluded)
```


---

### getDeadlineDate

```java
public Date getDeadlineDate()
```


---

### setDeadlineDate

```java
public void setDeadlineDate​(Date deadlineDate)
```


---

### getProcessInstanceId

```java
public int getProcessInstanceId()
```


---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```


---

### getRequesterCode

```java
public String getRequesterCode()
```


---

### setRequesterCode

```java
public void setRequesterCode​(String requesterCode)
```


---

### getRequesterName

```java
public String getRequesterName()
```


---

### setRequesterName

```java
public void setRequesterName​(String requesterName)
```


---

### getRemainingTime

```java
public Long getRemainingTime()
```


---

### setRemainingTime

```java
public void setRemainingTime​(Long remainingTime)
```


---

### getStatusSla

```java
public String getStatusSla()
```


---

### setStatusSla

```java
public void setStatusSla​(String statusSla)
```


---

### getProcessDescription

```java
public String getProcessDescription()
```


---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```


---

### getProcessId

```java
public String getProcessId()
```


---

### setProcessId

```java
public void setProcessId​(String processId)
```


---

### getStartDate

```java
public Date getStartDate()
```


---

### setStartDate

```java
public void setStartDate​(Date startDate)
```


---

### getFullTime

```java
public Long getFullTime()
```


---

### setFullTime

```java
public void setFullTime​(Long fullTime)
```


---

### getRequesterLocal

```java
public LocalVO getRequesterLocal()
```


---

### setRequesterLocal

```java
public void setRequesterLocal​(LocalVO requesterLocal)
```


---

### getActualTasks

```java
public List<RequestTaskSLAVO> getActualTasks()
```


---

### setActualTasks

```java
public void setActualTasks​(List<RequestTaskSLAVO> actualTasks)
```


---

### getEndDate

```java
public Date getEndDate()
```


---

### setEndDate

```java
public void setEndDate​(Date endDate)
```


---

### getProcessVersion

```java
public int getProcessVersion()
```


---

### setProcessVersion

```java
public void setProcessVersion​(int processVersion)
```


---

### getStatusRequest

```java
public String getStatusRequest()
```


---

### setStatusRequest

```java
public void setStatusRequest​(String statusRequest)
```


---

### setWarningDate

```java
public void setWarningDate​(Date warningDate)
```


---

### getWarningDate

```java
public Date getWarningDate()
```


---

### equals

```java
public boolean equals​(Object o)
```

- **Overrides:** `` `equals` `` in class `` `Object` ``

---

### hashCode

```java
public int hashCode()
```

- **Overrides:** `` `hashCode` `` in class `` `Object` ``

---

### getExpandables

```java
public List<String> getExpandables()
```


---

### setExpandables

```java
public void setExpandables​(List<String> expandables)
```


---

### getCardFields

```java
public Map<String,​String> getCardFields()
```


---

### setCardFields

```java
public void setCardFields​(Map<String,​String> cardFields)
```


---

### getSpentTime

```java
public Long getSpentTime()
```


---

### setSpentTime

```java
public void setSpentTime​(Long spentTime)
```

---

# Class RequestTaskSLAVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestTaskSLAVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestTaskSLAVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.RequestTaskSLAVO
```

```java
public class RequestTaskSLAVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `RequestTaskSLAVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `int` | `getActivityCode()` |  |
| `String` | `getActivityDescription()` |  |
| `String` | `getAssigneeCode()` |  |
| `LocalVO` | `getAssigneeLocal()` |  |
| `String` | `getAssigneeName()` |  |
| `void` | `setActivityCode​(int activityCode)` |  |
| `void` | `setActivityDescription​(String activityDescription)` |  |
| `void` | `setAssigneeCode​(String assigneeCode)` |  |
| `void` | `setAssigneeLocal​(LocalVO assigneeLocal)` |  |
| `void` | `setAssigneeName​(String assigneeName)` |  |


---

## Detalhes dos Construtores

### RequestTaskSLAVO

```java
public RequestTaskSLAVO()
```



## Detalhes dos Métodos

### getActivityDescription

```java
public String getActivityDescription()
```


---

### setActivityDescription

```java
public void setActivityDescription​(String activityDescription)
```


---

### getAssigneeCode

```java
public String getAssigneeCode()
```


---

### setAssigneeCode

```java
public void setAssigneeCode​(String assigneeCode)
```


---

### getAssigneeName

```java
public String getAssigneeName()
```


---

### setAssigneeName

```java
public void setAssigneeName​(String assigneeName)
```


---

### getActivityCode

```java
public int getActivityCode()
```


---

### setActivityCode

```java
public void setActivityCode​(int activityCode)
```


---

### getAssigneeLocal

```java
public LocalVO getAssigneeLocal()
```


---

### setAssigneeLocal

```java
public void setAssigneeLocal​(LocalVO assigneeLocal)
```

---

# Class ResumeProcessTaskVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeProcessTaskVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeProcessTaskVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ResumeProcessTaskVO
```

```java
public class ResumeProcessTaskVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ResumeProcessTaskVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `int` | `getExpired()` |  |
| `int` | `getOnTime()` |  |
| `int` | `getTotal()` |  |
| `int` | `getWarning()` |  |
| `void` | `setExpired​(Integer expired)` |  |
| `void` | `setOnTime​(Integer onTime)` |  |
| `void` | `setTotal​(int total)` |  |
| `void` | `setWarning​(Integer warning)` |  |


---

## Detalhes dos Construtores

### ResumeProcessTaskVO

```java
public ResumeProcessTaskVO()
```



## Detalhes dos Métodos

### getTotal

```java
public int getTotal()
```


---

### setTotal

```java
public void setTotal​(int total)
```


---

### getOnTime

```java
public int getOnTime()
```


---

### setOnTime

```java
public void setOnTime​(Integer onTime)
```


---

### getWarning

```java
public int getWarning()
```


---

### setWarning

```java
public void setWarning​(Integer warning)
```


---

### getExpired

```java
public int getExpired()
```


---

### setExpired

```java
public void setExpired​(Integer expired)
```

---

# Class ResumeRequestsSLAVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.ResumeRequestsSLAVO
```

```java
public class ResumeRequestsSLAVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ResumeRequestsSLAVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Long` | `getCanceledExpiredRequests()` |  |
| `Long` | `getCanceledOnTimeRequests()` |  |
| `Long` | `getCanceledRequests()` |  |
| `Long` | `getCanceledWarningRequests()` |  |
| `Long` | `getFinishedExpiredRequests()` |  |
| `Long` | `getFinishedOnTimeRequests()` |  |
| `Long` | `getFinishedRequests()` |  |
| `Long` | `getFinishedWarningRequests()` |  |
| `Long` | `getOpenExpiredRequests()` |  |
| `Long` | `getOpenOnTimeRequests()` |  |
| `Long` | `getOpenRequests()` |  |
| `Long` | `getOpenWarningRequests()` |  |
| `void` | `setCanceledExpiredRequests​(Long canceledExpiredRequests)` |  |
| `void` | `setCanceledOnTimeRequests​(Long canceledOnTimeRequests)` |  |
| `void` | `setCanceledRequests​(Long canceledRequests)` |  |
| `void` | `setCanceledWarningRequests​(Long canceledWarningRequests)` |  |
| `void` | `setFinishedExpiredRequests​(Long finishedExpiredRequests)` |  |
| `void` | `setFinishedOnTimeRequests​(Long finishedOnTimeRequests)` |  |
| `void` | `setFinishedRequests​(Long finishedRequests)` |  |
| `void` | `setFinishedWarningRequests​(Long finishedWarningRequests)` |  |
| `void` | `setOpenExpiredRequests​(Long openExpiredRequests)` |  |
| `void` | `setOpenOnTimeRequests​(Long openOnTimeRequests)` |  |
| `void` | `setOpenRequests​(Long openRequests)` |  |
| `void` | `setOpenWarningRequests​(Long openWarningRequests)` |  |


---

## Detalhes dos Construtores

### ResumeRequestsSLAVO

```java
public ResumeRequestsSLAVO()
```



## Detalhes dos Métodos

### getFinishedRequests

```java
public Long getFinishedRequests()
```


---

### setFinishedRequests

```java
public void setFinishedRequests​(Long finishedRequests)
```


---

### getFinishedExpiredRequests

```java
public Long getFinishedExpiredRequests()
```


---

### setFinishedExpiredRequests

```java
public void setFinishedExpiredRequests​(Long finishedExpiredRequests)
```


---

### getFinishedOnTimeRequests

```java
public Long getFinishedOnTimeRequests()
```


---

### setFinishedOnTimeRequests

```java
public void setFinishedOnTimeRequests​(Long finishedOnTimeRequests)
```


---

### getFinishedWarningRequests

```java
public Long getFinishedWarningRequests()
```


---

### setFinishedWarningRequests

```java
public void setFinishedWarningRequests​(Long finishedWarningRequests)
```


---

### getCanceledRequests

```java
public Long getCanceledRequests()
```


---

### setCanceledRequests

```java
public void setCanceledRequests​(Long canceledRequests)
```


---

### getCanceledExpiredRequests

```java
public Long getCanceledExpiredRequests()
```


---

### setCanceledExpiredRequests

```java
public void setCanceledExpiredRequests​(Long canceledExpiredRequests)
```


---

### getCanceledOnTimeRequests

```java
public Long getCanceledOnTimeRequests()
```


---

### setCanceledOnTimeRequests

```java
public void setCanceledOnTimeRequests​(Long canceledOnTimeRequests)
```


---

### getCanceledWarningRequests

```java
public Long getCanceledWarningRequests()
```


---

### setCanceledWarningRequests

```java
public void setCanceledWarningRequests​(Long canceledWarningRequests)
```


---

### getOpenRequests

```java
public Long getOpenRequests()
```


---

### setOpenRequests

```java
public void setOpenRequests​(Long openRequests)
```


---

### getOpenExpiredRequests

```java
public Long getOpenExpiredRequests()
```


---

### setOpenExpiredRequests

```java
public void setOpenExpiredRequests​(Long openExpiredRequests)
```


---

### getOpenOnTimeRequests

```java
public Long getOpenOnTimeRequests()
```


---

### setOpenOnTimeRequests

```java
public void setOpenOnTimeRequests​(Long openOnTimeRequests)
```


---

### getOpenWarningRequests

```java
public Long getOpenWarningRequests()
```


---

### setOpenWarningRequests

```java
public void setOpenWarningRequests​(Long openWarningRequests)
```

---

# Class WorkflowVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/WorkflowVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/WorkflowVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.WorkflowVO
```

```java
public class WorkflowVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **Author:** marcelo.pereira
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `WorkflowVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getActive()` |  |
| `Integer` | `getAttachmentSeqId()` |  |
| `Boolean` | `getCanCancel()` |  |
| `Boolean` | `getCanTake()` |  |
| `String` | `getCode()` |  |
| `String` | `getColleagueName()` |  |
| `long` | `getCompanyId()` |  |
| `Date` | `getDeadlineDate()` |  |
| `String` | `getDeadlineText()` |  |
| `String` | `getDocumentDescription()` |  |
| `Integer` | `getMainAttachmentDocumentId()` |  |
| `int` | `getMainAttachmentDocumentVersion()` |  |
| `Boolean` | `getMobileReady()` |  |
| `String` | `getMovementHour()` |  |
| `int` | `getMovementSequence()` |  |
| `String` | `getProcessDescription()` |  |
| `String` | `getProcessId()` |  |
| `int` | `getProcessInstanceId()` |  |
| `String` | `getRequesterId()` |  |
| `String` | `getRequesterName()` |  |
| `int` | `getRowId()` |  |
| `Integer` | `getSourceProcess()` |  |
| `Integer` | `getSourceThreadSequence()` |  |
| `String` | `getStateDescription()` |  |
| `Integer` | `getStateId()` |  |
| `String` | `getUrl()` |  |
| `Integer` | `getVersion()` |  |
| `void` | `setActive​(Boolean active)` |  |
| `void` | `setAttachmentSeqId​(Integer attachmentSeqId)` |  |
| `void` | `setCanCancel​(Boolean canCancel)` |  |
| `void` | `setCanTake​(Boolean canTake)` |  |
| `void` | `setCode​(String code)` |  |
| `void` | `setColleagueName​(String colleagueName)` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setDeadlineDate​(Date deadlineDate)` |  |
| `void` | `setDeadlineText​(String deadlineText)` |  |
| `void` | `setDocumentDescription​(String documentDescription)` |  |
| `void` | `setMainAttachmentDocumentId​(Integer mainAttachmentDocumentId)` |  |
| `void` | `setMainAttachmentDocumentVersion​(int mainAttachmentDocumentVersion)` |  |
| `void` | `setMobileReady​(Boolean mobileReady)` |  |
| `void` | `setMovementHour​(String movementHour)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setProcessDescription​(String processDescription)` |  |
| `void` | `setProcessId​(String processId)` |  |
| `void` | `setProcessInstanceId​(int processInstanceId)` |  |
| `void` | `setRequesterId​(String requesterId)` |  |
| `void` | `setRequesterName​(String requesterName)` |  |
| `void` | `setRowId​(int rowId)` |  |
| `void` | `setSourceProcess​(Integer sourceProcess)` |  |
| `void` | `setSourceThreadSequence​(Integer sourceThreadSequence)` |  |
| `void` | `setStateDescription​(String stateDescription)` |  |
| `void` | `setStateId​(Integer stateId)` |  |
| `void` | `setUrl​(String url)` |  |
| `void` | `setVersion​(Integer version)` |  |


---

## Detalhes dos Construtores

### WorkflowVO

```java
public WorkflowVO()
```



## Detalhes dos Métodos

### getProcessDescription

```java
public String getProcessDescription()
```

- **Returns:** the processDescription

---

### setProcessDescription

```java
public void setProcessDescription​(String processDescription)
```

- **Parameters:** `processDescription` - the processDescription to set

---

### getProcessId

```java
public String getProcessId()
```

- **Returns:** the processId

---

### setProcessId

```java
public void setProcessId​(String processId)
```

- **Parameters:** `processId` - the processId to set

---

### getCompanyId

```java
public long getCompanyId()
```

- **Returns:** the companyId

---

### setCompanyId

```java
public void setCompanyId​(long companyId)
```

- **Parameters:** `companyId` - the companyId to set

---

### getProcessInstanceId

```java
public int getProcessInstanceId()
```

- **Returns:** the processInstanceId

---

### setProcessInstanceId

```java
public void setProcessInstanceId​(int processInstanceId)
```

- **Parameters:** `processInstanceId` - the processInstanceId to set

---

### getVersion

```java
public Integer getVersion()
```

- **Returns:** the version

---

### setVersion

```java
public void setVersion​(Integer version)
```

- **Parameters:** `version` - the version to set

---

### getRequesterId

```java
public String getRequesterId()
```

- **Returns:** the requesterId

---

### setRequesterId

```java
public void setRequesterId​(String requesterId)
```

- **Parameters:** `requesterId` - the requesterId to set

---

### getRequesterName

```java
public String getRequesterName()
```

- **Returns:** the requesterName

---

### setRequesterName

```java
public void setRequesterName​(String requesterName)
```

- **Parameters:** `requesterName` - the requesterName to set

---

### getActive

```java
public Boolean getActive()
```

- **Returns:** the active

---

### setActive

```java
public void setActive​(Boolean active)
```

- **Parameters:** `active` - the active to set

---

### getAttachmentSeqId

```java
public Integer getAttachmentSeqId()
```

- **Returns:** the attachmentSeqId

---

### setAttachmentSeqId

```java
public void setAttachmentSeqId​(Integer attachmentSeqId)
```

- **Parameters:** `attachmentSeqId` - the attachmentSeqId to set

---

### getSourceProcess

```java
public Integer getSourceProcess()
```

- **Returns:** the sourceProcess

---

### setSourceProcess

```java
public void setSourceProcess​(Integer sourceProcess)
```

- **Parameters:** `sourceProcess` - the sourceProcess to set

---

### getSourceThreadSequence

```java
public Integer getSourceThreadSequence()
```

- **Returns:** the sourceThreadSequence

---

### setSourceThreadSequence

```java
public void setSourceThreadSequence​(Integer sourceThreadSequence)
```

- **Parameters:** `sourceThreadSequence` - the sourceThreadSequence to set

---

### getStateId

```java
public Integer getStateId()
```

- **Returns:** the stateId

---

### setStateId

```java
public void setStateId​(Integer stateId)
```

- **Parameters:** `stateId` - the stateId to set

---

### getStateDescription

```java
public String getStateDescription()
```

- **Returns:** the stateDescription

---

### setStateDescription

```java
public void setStateDescription​(String stateDescription)
```

- **Parameters:** `stateDescription` - the stateDescription to set

---

### getDeadlineDate

```java
public Date getDeadlineDate()
```

- **Returns:** the deadlineDate

---

### setDeadlineDate

```java
public void setDeadlineDate​(Date deadlineDate)
```

- **Parameters:** `deadlineDate` - the deadlineDate to set

---

### getDeadlineText

```java
public String getDeadlineText()
```

- **Returns:** the deadlineText

---

### setDeadlineText

```java
public void setDeadlineText​(String deadlineText)
```

- **Parameters:** `deadlineText` - the deadlineText to set

---

### getDocumentDescription

```java
public String getDocumentDescription()
```

- **Returns:** the documentDescription

---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```

- **Parameters:** `documentDescription` - the documentDescription to set

---

### getColleagueName

```java
public String getColleagueName()
```

- **Returns:** the colleagueName

---

### setColleagueName

```java
public void setColleagueName​(String colleagueName)
```

- **Parameters:** `colleagueName` - the colleagueName to set

---

### getMovementSequence

```java
public int getMovementSequence()
```

- **Returns:** the movementSequence

---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```

- **Parameters:** `movementSequence` - the movementSequence to set

---

### getMainAttachmentDocumentId

```java
public Integer getMainAttachmentDocumentId()
```

- **Returns:** the mainAttachmentDocumentId

---

### setMainAttachmentDocumentId

```java
public void setMainAttachmentDocumentId​(Integer mainAttachmentDocumentId)
```

- **Parameters:** `mainAttachmentDocumentId` - the mainAttachmentDocumentId to set

---

### getMainAttachmentDocumentVersion

```java
public int getMainAttachmentDocumentVersion()
```

- **Returns:** the mainAttachmentDocumentVersion

---

### setMainAttachmentDocumentVersion

```java
public void setMainAttachmentDocumentVersion​(int mainAttachmentDocumentVersion)
```

- **Parameters:** `mainAttachmentDocumentVersion` - the mainAttachmentDocumentVersion to set

---

### getRowId

```java
public int getRowId()
```

- **Returns:** the rowId

---

### setRowId

```java
public void setRowId​(int rowId)
```

- **Parameters:** `rowId` - the rowId to set

---

### getMovementHour

```java
public String getMovementHour()
```

- **Returns:** the movementHour

---

### setMovementHour

```java
public void setMovementHour​(String movementHour)
```

- **Parameters:** `movementHour` - the movementHour to set

---

### getMobileReady

```java
public Boolean getMobileReady()
```

- **Returns:** the mobileReady

---

### setMobileReady

```java
public void setMobileReady​(Boolean mobileReady)
```

- **Parameters:** `mobileReady` - the mobileReady to set

---

### getCanCancel

```java
public Boolean getCanCancel()
```

- **Returns:** the canCancel

---

### setCanCancel

```java
public void setCanCancel​(Boolean canCancel)
```

- **Parameters:** `canCancel` - the canCancel to set

---

### getCanTake

```java
public Boolean getCanTake()
```

- **Returns:** the canTake

---

### setCanTake

```java
public void setCanTake​(Boolean canTake)
```

- **Parameters:** `canTake` - the canTake to set

---

### getUrl

```java
public String getUrl()
```

- **Returns:** the url

---

### setUrl

```java
public void setUrl​(String url)
```

- **Parameters:** `url` - the url to set

---

### getCode

```java
public String getCode()
```

- **Returns:** the code

---

### setCode

```java
public void setCode​(String code)
```

- **Parameters:** `code` - the code to set

---
