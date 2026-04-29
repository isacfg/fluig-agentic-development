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


