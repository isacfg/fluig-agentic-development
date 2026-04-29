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

