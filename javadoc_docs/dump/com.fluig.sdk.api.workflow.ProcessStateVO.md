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

