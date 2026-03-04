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

