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


