# Interface JobService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/JobService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/JobService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface JobService
extends BaseAPIService
Fornece acesso a serviços de Job Scheduler.
  Since:
1.5.8
Author:
marcus.carvalho
```

```java
public interface JobService
extends BaseAPIService
```

Fornece acesso a serviços de Job Scheduler.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.8
- **Author:** marcus.carvalho

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `JobVO` | `createDaily​(JobVO vo)` |  |
| `JobVO` | `createMonthly​(JobVO vo)` |  |
| `JobVO` | `createWeekly​(JobVO vo)` |  |
| `void` | `delete​(JobVO vo)` |  |
| `List<JobVO>` | `list​(Integer limit, Integer offset, String filter)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.JobService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.JobService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### createDaily

```java
JobVO createDaily​(JobVO vo)
           throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createWeekly

```java
JobVO createWeekly​(JobVO vo)
            throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createMonthly

```java
JobVO createMonthly​(JobVO vo)
             throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### delete

```java
void delete​(JobVO vo)
     throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<JobVO> list​(Integer limit,
                 Integer offset,
                 String filter)
          throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

