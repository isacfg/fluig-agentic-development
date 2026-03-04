# Class UserVO

> **Pacote:** `com.fluig.sdk.user`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.user.UserVO
```

```java
public class UserVO
extends Object
implements Serializable
```

Value Object para usuário

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `protected static String` | `EXTATTR_birthDay` | Constante birthDay
 String - EXTATTR_birthDay |
| `protected static String` | `EXTATTR_consumerKey` | Constante consumerKey
 String - EXTATTR_consumerKey |
| `protected static String` | `EXTATTR_firstAccess` | Constante firstAccess
 String - EXTATTR_firstAccess |
| `protected static String` | `EXTATTR_groups` | Constante groups
 String - EXTATTR_groups |
| `protected static String` | `EXTATTR_idpId` | Constante idpId
 String - EXTATTR_idpId |
| `protected static String` | `EXTATTR_locationId` | Constante locationid
 String - EXTATTR_locationId |
| `protected static String` | `EXTATTR_passwordType` | Constante passwordType
 String - EXTATTR_passwordType |
| `protected static String` | `EXTATTR_roles` | Constante roles
 String - EXTATTR_roles |
| `protected static String` | `EXTATTR_tenantCode` | Constante tenantCode
 String - EXTATTR_tenantCode |
| `protected static String` | `EXTATTR_tenantId` | Constante tenantId
 String - EXTATTR_tenantId |
| `protected static String` | `EXTATTR_userType` | Constante userType
 String - EXTATTR_userType |


## Construtores

| Nome | Descrição |
| --- | --- |
| `UserVO()` | Construtor default. |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `void` | `addExtData​(String key, Object value)` | Adicionar chave e valor no mapa. |
| `String` | `getCode()` | Recupera valor do code |
| `String` | `getEmail()` | Recupera valor do email |
| `HashMap<String,​Object>` | `getExtData()` | Recupera mapa de extraData |
| `Object` | `getExtraData​(String key)` | Recupera valor do extData |
| `String` | `getFirstName()` | Recupera valor do firstName |
| `String` | `getFullName()` | Recupera valor do fullName |
| `List<String>` | `getGroups()` |  |
| `Long` | `getId()` | Recupera valor do id |
| `Boolean` | `getIsActive()` | Return user status |
| `String` | `getLastName()` | Recupera valor do lastName |
| `String` | `getLogin()` | Recupera valor do login |
| `String` | `getPassword()` | Recupera valor do password |
| `List<String>` | `getRoles()` |  |
| `String` | `getTimezone()` | Atribui valor ao timezone |
| `String` | `getTokenAccess()` | Retorna tokenAccess |
| `String` | `getTokenSecret()` | Retorna token secret |
| `String` | `getUserUUID()` | Recupera valor do userUUID |
| `Object` | `getValueExtData​(String key)` | Retorna objeto no mapa |
| `void` | `setCode​(String code)` | Atribui valor para code |
| `void` | `setEmail​(String email)` | Atribui valor para email |
| `void` | `setExtData​(HashMap<String,​Object> extData)` | Atribui valor ao map |
| `void` | `setExtraData​(String key, Object value)` | Atribui valor para extData |
| `void` | `setFirstName​(String firstName)` | Atribui valor para firstName |
| `void` | `setFullName​(String fullName)` | Atribui valor para fullName |
| `void` | `setGroups​(List<String> groups)` |  |
| `void` | `setId​(Long id)` | Atribui valor para id |
| `void` | `setIsActive​(Boolean isActive)` | Set user status |
| `void` | `setLastName​(String lastName)` | Atribui valor para lastName |
| `void` | `setLogin​(String login)` | Atribui valor para login |
| `void` | `setPassword​(String password)` | Atribui valor para password |
| `void` | `setRoles​(List<String> roles)` |  |
| `void` | `setTimezone​(String timezone)` | Retorna o timezone |
| `void` | `setTokenAccess​(String token)` | Atribui valor ao tokenAccess |
| `void` | `setTokenSecret​(String tokenSecret)` | Atribui valor ao token secret |
| `void` | `setUserUUID​(String userUUID)` | Atribui valor para userUUID |
| `String` | `toString()` |  |


---

## Detalhes dos Campos

### EXTATTR_idpId

```java
protected static final String EXTATTR_idpId
```

Constante idpId String - EXTATTR\_idpId

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_idpId)

---

### EXTATTR_birthDay

```java
protected static final String EXTATTR_birthDay
```

Constante birthDay String - EXTATTR\_birthDay

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_birthDay)

---

### EXTATTR_firstAccess

```java
protected static final String EXTATTR_firstAccess
```

Constante firstAccess String - EXTATTR\_firstAccess

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_firstAccess)

---

### EXTATTR_roles

```java
protected static final String EXTATTR_roles
```

Constante roles String - EXTATTR\_roles

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_roles)

---

### EXTATTR_groups

```java
protected static final String EXTATTR_groups
```

Constante groups String - EXTATTR\_groups

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_groups)

---

### EXTATTR_locationId

```java
protected static final String EXTATTR_locationId
```

Constante locationid String - EXTATTR\_locationId

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_locationId)

---

### EXTATTR_tenantCode

```java
protected static final String EXTATTR_tenantCode
```

Constante tenantCode String - EXTATTR\_tenantCode

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_tenantCode)

---

### EXTATTR_tenantId

```java
protected static final String EXTATTR_tenantId
```

Constante tenantId String - EXTATTR\_tenantId

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_tenantId)

---

### EXTATTR_userType

```java
protected static final String EXTATTR_userType
```

Constante userType String - EXTATTR\_userType

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_userType)

---

### EXTATTR_passwordType

```java
protected static final String EXTATTR_passwordType
```

Constante passwordType String - EXTATTR\_passwordType

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_passwordType)

---

### EXTATTR_consumerKey

```java
protected static final String EXTATTR_consumerKey
```

Constante consumerKey String - EXTATTR\_consumerKey

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.user.UserVO.EXTATTR_consumerKey)


## Detalhes dos Construtores

### UserVO

```java
public UserVO()
```

Construtor default.



## Detalhes dos Métodos

### getId

```java
public Long getId()
```

Recupera valor do id

- **Returns:** the id

---

### setId

```java
public void setId​(Long id)
```

Atribui valor para id

- **Parameters:** `id` - the id to set

---

### getUserUUID

```java
public String getUserUUID()
```

Recupera valor do userUUID

- **Returns:** the userUUID

---

### setUserUUID

```java
public void setUserUUID​(String userUUID)
```

Atribui valor para userUUID

- **Parameters:** `id` - the userUUID to set

---

### getLogin

```java
public String getLogin()
```

Recupera valor do login

- **Returns:** the login

---

### setLogin

```java
public void setLogin​(String login)
```

Atribui valor para login

- **Parameters:** `login` - the login to set

---

### getEmail

```java
public String getEmail()
```

Recupera valor do email

- **Returns:** the email

---

### setEmail

```java
public void setEmail​(String email)
```

Atribui valor para email

- **Parameters:** `email` - the email to set

---

### getCode

```java
public String getCode()
```

Recupera valor do code

- **Returns:** the code

---

### setCode

```java
public void setCode​(String code)
```

Atribui valor para code

- **Parameters:** `code` - the code to set

---

### getFirstName

```java
public String getFirstName()
```

Recupera valor do firstName

- **Returns:** the firstName

---

### setFirstName

```java
public void setFirstName​(String firstName)
```

Atribui valor para firstName

- **Parameters:** `firstName` - the firstName to set

---

### getLastName

```java
public String getLastName()
```

Recupera valor do lastName

- **Returns:** the lastName

---

### setLastName

```java
public void setLastName​(String lastName)
```

Atribui valor para lastName

- **Parameters:** `lastName` - the lastName to set

---

### getFullName

```java
public String getFullName()
```

Recupera valor do fullName

- **Returns:** the fullName

---

### setFullName

```java
public void setFullName​(String fullName)
```

Atribui valor para fullName

- **Parameters:** `fullName` - the fullName to set

---

### getPassword

```java
public String getPassword()
```

Recupera valor do password

- **Returns:** the password

---

### setPassword

```java
public void setPassword​(String password)
```

Atribui valor para password

- **Parameters:** `password` - the password to set

---

### getExtraData

```java
public Object getExtraData​(String key)
```

Recupera valor do extData

- **Returns:** Object

---

### addExtData

```java
public void addExtData​(String key,
                       Object value)
```

Adicionar chave e valor no mapa.

- **Parameters:** `key` -

---

### getValueExtData

```java
public Object getValueExtData​(String key)
```

Retorna objeto no mapa

- **Parameters:** `key` -
- **Returns:** Object

---

### setExtraData

```java
public void setExtraData​(String key,
                         Object value)
```

Atribui valor para extData

- **Parameters:** `key` -

---

### getExtData

```java
public HashMap<String,​Object> getExtData()
```

Recupera mapa de extraData

- **Returns:** HashMap

---

### setExtData

```java
public void setExtData​(HashMap<String,​Object> extData)
```

Atribui valor ao map

- **Parameters:** `extData` -

---

### getTokenAccess

```java
public String getTokenAccess()
```

Retorna tokenAccess

- **Returns:** String

---

### setTokenAccess

```java
public void setTokenAccess​(String token)
```

Atribui valor ao tokenAccess

- **Parameters:** `token` -

---

### getTokenSecret

```java
public String getTokenSecret()
```

Retorna token secret

- **Returns:** String

---

### setTokenSecret

```java
public void setTokenSecret​(String tokenSecret)
```

Atribui valor ao token secret

- **Parameters:** `tokenSecret` -

---

### getTimezone

```java
public String getTimezone()
```

Atribui valor ao timezone

- **Returns:** timezone

---

### setTimezone

```java
public void setTimezone​(String timezone)
```

Retorna o timezone

- **Parameters:** `timezone` -

---

### getRoles

```java
public List<String> getRoles()
```


---

### setRoles

```java
public void setRoles​(List<String> roles)
```


---

### getGroups

```java
public List<String> getGroups()
```


---

### setGroups

```java
public void setGroups​(List<String> groups)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

### getIsActive

```java
public Boolean getIsActive()
```

Return user status

- **Returns:** Boolean

---

### setIsActive

```java
public void setIsActive​(Boolean isActive)
```

Set user status

- **Parameters:** `isActive` -

