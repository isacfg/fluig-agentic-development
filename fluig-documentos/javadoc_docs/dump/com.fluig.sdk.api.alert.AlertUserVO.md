# Class AlertUserVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertUserVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertUserVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertUserVO
```

```java
public class AlertUserVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **Author:** luis.junior
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AlertUserVO()` |  |
| `AlertUserVO​(com.totvs.technology.foundation.security.entity.FDNUserTenant user)` |  |
| `AlertUserVO​(com.totvs.technology.foundation.security.vo.FDNUserVO userVO)` |  |
| `AlertUserVO​(Long id, String login, String fullName, Long tenantId)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getFisrtName()` |  |
| `String` | `getFullName()` |  |
| `Long` | `getId()` |  |
| `String` | `getLastName()` |  |
| `Date` | `getLastUpdateDate()` |  |
| `String` | `getLogin()` |  |
| `Long` | `getTenantId()` |  |
| `void` | `setFullName​(String fullName)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setLastUpdateDate​(Date lastUpdateDate)` |  |
| `void` | `setLogin​(String login)` |  |
| `void` | `setTenantId​(Long tenantId)` |  |


---

## Detalhes dos Construtores

### AlertUserVO

```java
public AlertUserVO()
```


---

### AlertUserVO

```java
public AlertUserVO​(Long id,
                   String login,
                   String fullName,
                   Long tenantId)
```


---

### AlertUserVO

```java
public AlertUserVO​(com.totvs.technology.foundation.security.vo.FDNUserVO userVO)
```


---

### AlertUserVO

```java
public AlertUserVO​(com.totvs.technology.foundation.security.entity.FDNUserTenant user)
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

### getFullName

```java
public String getFullName()
```


---

### setFullName

```java
public void setFullName​(String fullName)
```


---

### getFisrtName

```java
public String getFisrtName()
```


---

### getLastName

```java
public String getLastName()
```


---

### getLastUpdateDate

```java
public Date getLastUpdateDate()
```


---

### setLastUpdateDate

```java
public void setLastUpdateDate​(Date lastUpdateDate)
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


