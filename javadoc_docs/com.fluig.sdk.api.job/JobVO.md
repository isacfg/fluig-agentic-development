# Class JobVO

> **Pacote:** `com.fluig.sdk.api.job`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/job/JobVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/job/JobVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.job.JobVO
```

```java
public class JobVO
extends Object
implements Serializable
```

VO com informações utilizadas para criar Jobs

- **All Implemented Interfaces:** Serializable
- **Author:** marcus.carvalho
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `JobVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `boolean` | `equals​(Object obj)` |  |
| `long` | `getCompanyId()` |  |
| `Map<String,​String>` | `getData()` |  |
| `String` | `getDescription()` |  |
| `int` | `getExecutionHour()` |  |
| `int` | `getExecutionMinute()` |  |
| `int` | `getInterval()` |  |
| `String` | `getIntervalDescriptions()` |  |
| `JobVO.IntervalType` | `getIntervalType()` |  |
| `String` | `getJobId()` |  |
| `int` | `getJobType()` |  |
| `Date` | `getLastExecution()` |  |
| `Date` | `getNextExecution()` |  |
| `int` | `getOrdinalNumber()` |  |
| `String` | `getRecurrenceExpression()` |  |
| `long` | `getStartDateInMillis()` |  |
| `Boolean` | `getStarted()` |  |
| `int` | `getTarget()` |  |
| `int` | `hashCode()` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setData​(Map<String,​String> data)` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setExecutionHour​(int executionHour)` |  |
| `void` | `setExecutionMinute​(int executionMinute)` |  |
| `void` | `setInterval​(int interval)` |  |
| `void` | `setIntervalDescriptions​(String intervalDescriptions)` |  |
| `void` | `setIntervalType​(JobVO.IntervalType intervalType)` |  |
| `void` | `setJobId​(String jobId)` |  |
| `void` | `setJobType​(int jobType)` |  |
| `void` | `setLastExecution​(Date lastExecution)` |  |
| `void` | `setNextExecution​(Date nextExecution)` |  |
| `void` | `setOrdinalNumber​(int ordinalNumber)` |  |
| `void` | `setRecurrenceExpression​(String recurrenceExpression)` |  |
| `void` | `setStartDateInMillis​(long startDateInMillis)` |  |
| `void` | `setStarted​(Boolean started)` |  |
| `void` | `setTarget​(int target)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### JobVO

```java
public JobVO()
```



## Detalhes dos Métodos

### getJobId

```java
public String getJobId()
```

- **Returns:** the jobId

---

### setJobId

```java
public void setJobId​(String jobId)
```

- **Parameters:** `jobId` - the jobId to set

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

### getJobType

```java
public int getJobType()
```

- **Returns:** the jobType

---

### setJobType

```java
public void setJobType​(int jobType)
```

- **Parameters:** `jobType` - the jobType to set

---

### getDescription

```java
public String getDescription()
```

- **Returns:** the description

---

### setDescription

```java
public void setDescription​(String description)
```

- **Parameters:** `description` - the description to set

---

### getOrdinalNumber

```java
public int getOrdinalNumber()
```

- **Returns:** the ordinalNumber

---

### setOrdinalNumber

```java
public void setOrdinalNumber​(int ordinalNumber)
```

- **Parameters:** `ordinalNumber` - the ordinalNumber to set

---

### getExecutionHour

```java
public int getExecutionHour()
```

- **Returns:** the executionHour

---

### getStartDateInMillis

```java
public long getStartDateInMillis()
```


---

### setStartDateInMillis

```java
public void setStartDateInMillis​(long startDateInMillis)
```


---

### setExecutionHour

```java
public void setExecutionHour​(int executionHour)
```

- **Parameters:** `executionHour` - the executionHour to set

---

### getExecutionMinute

```java
public int getExecutionMinute()
```

- **Returns:** the executionMinute

---

### setExecutionMinute

```java
public void setExecutionMinute​(int executionMinute)
```

- **Parameters:** `executionMinute` - the executionMinute to set

---

### getData

```java
public Map<String,​String> getData()
```

- **Returns:** the data

---

### setData

```java
public void setData​(Map<String,​String> data)
```

- **Parameters:** `data` - the data to set

---

### getLastExecution

```java
public Date getLastExecution()
```

- **Returns:** the lastExecution

---

### setLastExecution

```java
public void setLastExecution​(Date lastExecution)
```

- **Parameters:** `lastExecution` - the lastExecution to set

---

### getNextExecution

```java
public Date getNextExecution()
```

- **Returns:** the nextExecution

---

### setNextExecution

```java
public void setNextExecution​(Date nextExecution)
```

- **Parameters:** `nextExecution` - the nextExecution to set

---

### getStarted

```java
public Boolean getStarted()
```

- **Returns:** the started

---

### setStarted

```java
public void setStarted​(Boolean started)
```

- **Parameters:** `started` - the started to set

---

### getRecurrenceExpression

```java
public String getRecurrenceExpression()
```

- **Returns:** the recurrenceExpression

---

### setRecurrenceExpression

```java
public void setRecurrenceExpression​(String recurrenceExpression)
```

- **Parameters:** `recurrenceExpression` - the recurrenceExpression to set

---

### getInterval

```java
public int getInterval()
```


---

### setInterval

```java
public void setInterval​(int interval)
```


---

### getTarget

```java
public int getTarget()
```


---

### setTarget

```java
public void setTarget​(int target)
```


---

### getIntervalType

```java
public JobVO.IntervalType getIntervalType()
```


---

### setIntervalType

```java
public void setIntervalType​(JobVO.IntervalType intervalType)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

### hashCode

```java
public int hashCode()
```

- **Overrides:** `` `hashCode` `` in class `` `Object` ``

---

### equals

```java
public boolean equals​(Object obj)
```

- **Overrides:** `` `equals` `` in class `` `Object` ``

---

### getIntervalDescriptions

```java
public String getIntervalDescriptions()
```


---

### setIntervalDescriptions

```java
public void setIntervalDescriptions​(String intervalDescriptions)
```


