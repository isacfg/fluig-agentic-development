# com.fluig.sdk.api.ecm

> **2 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/package-summary.html)

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class CollaborationAppVO](#class-collaborationappvo)
- [Class CollaborationVO](#class-collaborationvo)

---

# Class CollaborationAppVO

> **Pacote:** `com.fluig.sdk.api.ecm`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationAppVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationAppVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.ecm.CollaborationAppVO
```

```java
public class CollaborationAppVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CollaborationAppVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getClientId()` |  |
| `String` | `getClientSecret()` |  |
| `String` | `getCode()` |  |
| `String` | `getEnabled()` |  |
| `Long` | `getId()` |  |
| `String` | `getJndiName()` |  |
| `String` | `getName()` |  |
| `Long` | `getTenantId()` |  |
| `void` | `setClientId​(String clientId)` |  |
| `void` | `setClientSecret​(String clientSecret)` |  |
| `void` | `setCode​(String code)` |  |
| `void` | `setEnabled​(String enabled)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setJndiName​(String jndiName)` |  |
| `void` | `setName​(String name)` |  |
| `void` | `setTenantId​(Long tenantId)` |  |


---

## Detalhes dos Construtores

### CollaborationAppVO

```java
public CollaborationAppVO()
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

### getJndiName

```java
public String getJndiName()
```


---

### setJndiName

```java
public void setJndiName​(String jndiName)
```


---

### getClientId

```java
public String getClientId()
```


---

### setClientId

```java
public void setClientId​(String clientId)
```


---

### getClientSecret

```java
public String getClientSecret()
```


---

### setClientSecret

```java
public void setClientSecret​(String clientSecret)
```


---

### getEnabled

```java
public String getEnabled()
```


---

### setEnabled

```java
public void setEnabled​(String enabled)
```

---

# Class CollaborationVO

> **Pacote:** `com.fluig.sdk.api.ecm`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.ecm.CollaborationVO
```

```java
public class CollaborationVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CollaborationVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Long` | `getCollaborationId()` |  |
| `Integer` | `getDocumentId()` |  |
| `Integer` | `getDocumentVersion()` |  |
| `Date` | `getEndDate()` |  |
| `List<String>` | `getGuests()` |  |
| `String` | `getOauthCode()` |  |
| `int` | `getSourceDocumentId()` |  |
| `int` | `getSourceDocumentVersion()` |  |
| `Date` | `getStartDate()` |  |
| `Long` | `getTenantId()` |  |
| `String` | `getUploaderLogin()` |  |
| `void` | `setCollaborationId​(Long collaborationId)` |  |
| `void` | `setDocumentId​(Integer documentId)` |  |
| `void` | `setDocumentVersion​(Integer documentVersion)` |  |
| `void` | `setEndDate​(Date endDate)` |  |
| `void` | `setGuests​(List<String> guests)` |  |
| `void` | `setOauthCode​(String oauthCode)` |  |
| `void` | `setSourceDocumentId​(int sourceDocumentId)` |  |
| `void` | `setSourceDocumentVersion​(int sourceDocumentVersion)` |  |
| `void` | `setStartDate​(Date startDate)` |  |
| `void` | `setTenantId​(Long tenantId)` |  |
| `void` | `setUploaderLogin​(String uploaderLogin)` |  |


---

## Detalhes dos Construtores

### CollaborationVO

```java
public CollaborationVO()
```



## Detalhes dos Métodos

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

### getGuests

```java
public List<String> getGuests()
```


---

### setGuests

```java
public void setGuests​(List<String> guests)
```


---

### getCollaborationId

```java
public Long getCollaborationId()
```


---

### setCollaborationId

```java
public void setCollaborationId​(Long collaborationId)
```


---

### getOauthCode

```java
public String getOauthCode()
```


---

### setOauthCode

```java
public void setOauthCode​(String oauthCode)
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

### getUploaderLogin

```java
public String getUploaderLogin()
```


---

### setUploaderLogin

```java
public void setUploaderLogin​(String uploaderLogin)
```


---

### getDocumentVersion

```java
public Integer getDocumentVersion()
```


---

### setDocumentVersion

```java
public void setDocumentVersion​(Integer documentVersion)
```


---

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

### getSourceDocumentId

```java
public int getSourceDocumentId()
```


---

### setSourceDocumentId

```java
public void setSourceDocumentId​(int sourceDocumentId)
```


---

### getSourceDocumentVersion

```java
public int getSourceDocumentVersion()
```


---

### setSourceDocumentVersion

```java
public void setSourceDocumentVersion​(int sourceDocumentVersion)
```

---
