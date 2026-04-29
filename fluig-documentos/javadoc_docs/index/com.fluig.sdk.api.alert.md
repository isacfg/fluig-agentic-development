# com.fluig.sdk.api.alert

> **8 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/package-summary.html)

---

Vo que representa a configuração de recebimento de um evento de alerta.

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class AlertActionVO](#class-alertactionvo)
- [Class AlertConfigVO](#class-alertconfigvo)
- [Class AlertEventVO](#class-alerteventvo)
- [Class AlertModuleVO](#class-alertmodulevo)
- [Class AlertObjectVO](#class-alertobjectvo)
- [Class AlertSenderVO](#class-alertsendervo)
- [Class AlertUserVO](#class-alertuservo)
- [Class AlertVO](#class-alertvo)

---

# Class AlertActionVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertActionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertActionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertActionVO
```

```java
public class AlertActionVO
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
| `AlertActionVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getActionKey()` |  |
| `String` | `getActionType()` |  |
| `String` | `getDescription()` |  |
| `String` | `getDescriptionAfterExec()` |  |
| `String` | `getDescriptionAfterExecKey()` |  |
| `String` | `getDescriptionKey()` |  |
| `Boolean` | `getExecuted()` |  |
| `String` | `getHttpMethod()` |  |
| `Long` | `getId()` |  |
| `String` | `getIntegrationType()` |  |
| `String` | `getType()` |  |
| `String` | `getUrl()` |  |
| `void` | `setActionKey​(String actionKey)` |  |
| `void` | `setActionType​(String actionType)` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setDescriptionAfterExec​(String descriptionAfterExec)` |  |
| `void` | `setExecuted​(Boolean executed)` |  |
| `void` | `setHttpMethod​(String httpMethod)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setType​(String type)` |  |
| `void` | `setUrl​(String url)` |  |


---

## Detalhes dos Construtores

### AlertActionVO

```java
public AlertActionVO()
```



## Detalhes dos Métodos

### getDescriptionKey

```java
public String getDescriptionKey()
```


---

### getDescriptionAfterExecKey

```java
public String getDescriptionAfterExecKey()
```


---

### getIntegrationType

```java
public String getIntegrationType()
```


---

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

### getUrl

```java
public String getUrl()
```


---

### setUrl

```java
public void setUrl​(String url)
```


---

### getHttpMethod

```java
public String getHttpMethod()
```


---

### setHttpMethod

```java
public void setHttpMethod​(String httpMethod)
```


---

### getActionType

```java
public String getActionType()
```


---

### setActionType

```java
public void setActionType​(String actionType)
```


---

### getExecuted

```java
public Boolean getExecuted()
```


---

### setExecuted

```java
public void setExecuted​(Boolean executed)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```


---

### getDescriptionAfterExec

```java
public String getDescriptionAfterExec()
```


---

### setDescriptionAfterExec

```java
public void setDescriptionAfterExec​(String descriptionAfterExec)
```


---

### getActionKey

```java
public String getActionKey()
```


---

### setActionKey

```java
public void setActionKey​(String actionKey)
```


---

### getType

```java
public String getType()
```


---

### setType

```java
public void setType​(String type)
```

---

# Class AlertConfigVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertConfigVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertConfigVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertConfigVO
```

```java
public class AlertConfigVO
extends Object
implements Serializable
```

Vo que representa a configuração de recebimento de um evento de alerta.

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AlertConfigVO()` |  |
| `AlertConfigVO​(String login, String eventKey, String applicationKey, String wantReceive)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getApplicationKey()` |  |
| `String` | `getEventKey()` |  |
| `String` | `getLogin()` |  |
| `String` | `getWantReceive()` |  |
| `void` | `setApplicationKey​(String applicationKey)` |  |
| `void` | `setEventKey​(String eventKey)` |  |
| `void` | `setLogin​(String login)` |  |
| `void` | `setWantReceive​(String wantReceive)` |  |


---

## Detalhes dos Construtores

### AlertConfigVO

```java
public AlertConfigVO()
```


---

### AlertConfigVO

```java
public AlertConfigVO​(String login,
                     String eventKey,
                     String applicationKey,
                     String wantReceive)
```



## Detalhes dos Métodos

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

### getEventKey

```java
public String getEventKey()
```


---

### setEventKey

```java
public void setEventKey​(String eventKey)
```


---

### getApplicationKey

```java
public String getApplicationKey()
```


---

### setApplicationKey

```java
public void setApplicationKey​(String applicationKey)
```


---

### getWantReceive

```java
public String getWantReceive()
```


---

### setWantReceive

```java
public void setWantReceive​(String wantReceive)
```

---

# Class AlertEventVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertEventVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertEventVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertEventVO
```

```java
public class AlertEventVO
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
| `AlertEventVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getActive()` |  |
| `Boolean` | `getCanRemove()` |  |
| `String` | `getDescription()` |  |
| `String` | `getDescriptionKey()` |  |
| `String` | `getEventKey()` |  |
| `String` | `getGroupDescription()` |  |
| `String` | `getGroupDescriptionKey()` |  |
| `Boolean` | `getGrouped()` |  |
| `String` | `getIcon()` |  |
| `Long` | `getId()` |  |
| `AlertModuleVO` | `getModule()` |  |
| `Boolean` | `getOnlyAdmin()` |  |
| `Boolean` | `getRequired()` |  |
| `String` | `getSingleDescription()` |  |
| `String` | `getSingleDescriptionKey()` |  |
| `void` | `setActive​(Boolean active)` |  |
| `void` | `setCanRemove​(Boolean canRemove)` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setDescriptionKey​(String descriptionKey)` |  |
| `void` | `setEventKey​(String eventKey)` |  |
| `void` | `setGroupDescription​(String groupDescription)` |  |
| `void` | `setGroupDescriptionKey​(String groupDescriptionKey)` |  |
| `void` | `setGrouped​(Boolean grouped)` |  |
| `void` | `setIcon​(String icon)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setModule​(AlertModuleVO module)` |  |
| `void` | `setOnlyAdmin​(Boolean onlyAdmin)` |  |
| `void` | `setRequired​(Boolean required)` |  |
| `void` | `setSingleDescription​(String singleDescription)` |  |
| `void` | `setSingleDescriptionKey​(String singleDescriptionKey)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### AlertEventVO

```java
public AlertEventVO()
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

### getEventKey

```java
public String getEventKey()
```


---

### setEventKey

```java
public void setEventKey​(String eventKey)
```


---

### getSingleDescription

```java
public String getSingleDescription()
```


---

### setSingleDescription

```java
public void setSingleDescription​(String singleDescription)
```


---

### getGroupDescription

```java
public String getGroupDescription()
```


---

### setGroupDescription

```java
public void setGroupDescription​(String groupDescription)
```


---

### getGrouped

```java
public Boolean getGrouped()
```


---

### setGrouped

```java
public void setGrouped​(Boolean grouped)
```


---

### getCanRemove

```java
public Boolean getCanRemove()
```


---

### setCanRemove

```java
public void setCanRemove​(Boolean canRemove)
```


---

### getModule

```java
public AlertModuleVO getModule()
```


---

### setModule

```java
public void setModule​(AlertModuleVO module)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```


---

### getIcon

```java
public String getIcon()
```


---

### setIcon

```java
public void setIcon​(String icon)
```


---

### getOnlyAdmin

```java
public Boolean getOnlyAdmin()
```


---

### setOnlyAdmin

```java
public void setOnlyAdmin​(Boolean onlyAdmin)
```


---

### getRequired

```java
public Boolean getRequired()
```


---

### setRequired

```java
public void setRequired​(Boolean required)
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

### getDescriptionKey

```java
public String getDescriptionKey()
```


---

### setDescriptionKey

```java
public void setDescriptionKey​(String descriptionKey)
```


---

### getSingleDescriptionKey

```java
public String getSingleDescriptionKey()
```


---

### setSingleDescriptionKey

```java
public void setSingleDescriptionKey​(String singleDescriptionKey)
```


---

### getGroupDescriptionKey

```java
public String getGroupDescriptionKey()
```


---

### setGroupDescriptionKey

```java
public void setGroupDescriptionKey​(String groupDescriptionKey)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

# Class AlertModuleVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertModuleVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertModuleVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertModuleVO
```

```java
public class AlertModuleVO
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
| `AlertModuleVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDescription()` |  |
| `Long` | `getId()` |  |
| `String` | `getModuleKey()` |  |
| `Long` | `getTenantId()` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setModuleKey​(String moduleKey)` |  |
| `void` | `setTenantId​(Long tenantId)` |  |


---

## Detalhes dos Construtores

### AlertModuleVO

```java
public AlertModuleVO()
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

### getModuleKey

```java
public String getModuleKey()
```


---

### setModuleKey

```java
public void setModuleKey​(String moduleKey)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
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

# Class AlertObjectVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertObjectVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertObjectVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertObjectVO
```

```java
public class AlertObjectVO
extends Object
implements Serializable
```

Vo que representa um objeto embutido em um alerta.

- **All Implemented Interfaces:** Serializable
- **Author:** caio-psousa
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AlertObjectVO()` |  |
| `AlertObjectVO​(Long id, Long objectId, String objectClass, String description, String typeDescriptionKey, String typeDescription, String objectDetailKey, String objectDetail, String link, String note)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDescription()` |  |
| `Long` | `getId()` |  |
| `String` | `getLink()` |  |
| `String` | `getNote()` |  |
| `String` | `getObjectClass()` |  |
| `String` | `getObjectDetail()` |  |
| `String` | `getObjectDetailKey()` |  |
| `Long` | `getObjectId()` |  |
| `String` | `getTypeDescription()` |  |
| `String` | `getTypeDescriptionKey()` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setLink​(String link)` |  |
| `void` | `setNote​(String note)` |  |
| `void` | `setObjectClass​(String objectClass)` |  |
| `void` | `setObjectDetail​(String objectDetail)` |  |
| `void` | `setObjectDetailKey​(String objectDetailKey)` |  |
| `void` | `setObjectId​(Long objectId)` |  |
| `void` | `setTypeDescription​(String typeDescription)` |  |
| `void` | `setTypeDescriptionKey​(String typeDescriptionKey)` |  |


---

## Detalhes dos Construtores

### AlertObjectVO

```java
public AlertObjectVO()
```


---

### AlertObjectVO

```java
public AlertObjectVO​(Long id,
                     Long objectId,
                     String objectClass,
                     String description,
                     String typeDescriptionKey,
                     String typeDescription,
                     String objectDetailKey,
                     String objectDetail,
                     String link,
                     String note)
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

### getObjectId

```java
public Long getObjectId()
```


---

### setObjectId

```java
public void setObjectId​(Long objectId)
```


---

### getObjectClass

```java
public String getObjectClass()
```


---

### setObjectClass

```java
public void setObjectClass​(String objectClass)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```


---

### getLink

```java
public String getLink()
```


---

### setLink

```java
public void setLink​(String link)
```


---

### getNote

```java
public String getNote()
```


---

### setNote

```java
public void setNote​(String note)
```


---

### getTypeDescription

```java
public String getTypeDescription()
```


---

### setTypeDescription

```java
public void setTypeDescription​(String typeDescription)
```


---

### setObjectDetail

```java
public void setObjectDetail​(String objectDetail)
```


---

### getObjectDetail

```java
public String getObjectDetail()
```


---

### getTypeDescriptionKey

```java
public String getTypeDescriptionKey()
```


---

### setTypeDescriptionKey

```java
public void setTypeDescriptionKey​(String typeDescriptionKey)
```


---

### getObjectDetailKey

```java
public String getObjectDetailKey()
```


---

### setObjectDetailKey

```java
public void setObjectDetailKey​(String objectDetailKey)
```

---

# Class AlertSenderVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertSenderVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertSenderVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertSenderVO
```

```java
public class AlertSenderVO
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
| `AlertSenderVO()` |  |
| `AlertSenderVO​(Long id, AlertUserVO user, Date creationDate, String via)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Date` | `getCreationDate()` |  |
| `Long` | `getId()` |  |
| `AlertUserVO` | `getUser()` |  |
| `String` | `getVia()` |  |
| `void` | `setCreationDate​(Date creationDate)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setUser​(AlertUserVO user)` |  |
| `void` | `setVia​(String via)` |  |


---

## Detalhes dos Construtores

### AlertSenderVO

```java
public AlertSenderVO()
```


---

### AlertSenderVO

```java
public AlertSenderVO​(Long id,
                     AlertUserVO user,
                     Date creationDate,
                     String via)
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

### getUser

```java
public AlertUserVO getUser()
```


---

### setUser

```java
public void setUser​(AlertUserVO user)
```


---

### getCreationDate

```java
public Date getCreationDate()
```


---

### setCreationDate

```java
public void setCreationDate​(Date creationDate)
```


---

### getVia

```java
public String getVia()
```


---

### setVia

```java
public void setVia​(String via)
```

---

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

---

# Class AlertVO

> **Pacote:** `com.fluig.sdk.api.alert`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.alert.AlertVO
```

```java
public class AlertVO
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
| `AlertVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<AlertActionVO>` | `getActions()` |  |
| `Boolean` | `getCanRemove()` |  |
| `Date` | `getCreationDate()` |  |
| `Long` | `getCreationDateTime()` |  |
| `Date` | `getCurrentDate()` |  |
| `AlertEventVO` | `getEvent()` |  |
| `Long` | `getId()` |  |
| `AlertObjectVO` | `getObject()` |  |
| `AlertObjectVO` | `getPlace()` |  |
| `String` | `getPriority()` |  |
| `Boolean` | `getRead()` |  |
| `AlertUserVO` | `getReceiver()` |  |
| `List<AlertSenderVO>` | `getSenders()` |  |
| `void` | `setActions​(List<AlertActionVO> actions)` |  |
| `void` | `setCanRemove​(Boolean canRemove)` |  |
| `void` | `setCreationDate​(Date creationDate)` |  |
| `void` | `setCreationDateTime​(Long creationDateTime)` |  |
| `void` | `setCurrentDate​(Date currentDate)` |  |
| `void` | `setEvent​(AlertEventVO event)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setObject​(AlertObjectVO object)` |  |
| `void` | `setPlace​(AlertObjectVO place)` |  |
| `void` | `setPriority​(String priority)` |  |
| `void` | `setRead​(Boolean read)` |  |
| `void` | `setReceiver​(AlertUserVO receiver)` |  |
| `void` | `setSenders​(List<AlertSenderVO> senders)` |  |


---

## Detalhes dos Construtores

### AlertVO

```java
public AlertVO()
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

### getSenders

```java
public List<AlertSenderVO> getSenders()
```


---

### setSenders

```java
public void setSenders​(List<AlertSenderVO> senders)
```


---

### getReceiver

```java
public AlertUserVO getReceiver()
```


---

### setReceiver

```java
public void setReceiver​(AlertUserVO receiver)
```


---

### getEvent

```java
public AlertEventVO getEvent()
```


---

### setEvent

```java
public void setEvent​(AlertEventVO event)
```


---

### getObject

```java
public AlertObjectVO getObject()
```


---

### setObject

```java
public void setObject​(AlertObjectVO object)
```


---

### getPlace

```java
public AlertObjectVO getPlace()
```


---

### setPlace

```java
public void setPlace​(AlertObjectVO place)
```


---

### getRead

```java
public Boolean getRead()
```


---

### setRead

```java
public void setRead​(Boolean read)
```


---

### getCreationDate

```java
public Date getCreationDate()
```


---

### setCreationDate

```java
public void setCreationDate​(Date creationDate)
```


---

### getActions

```java
public List<AlertActionVO> getActions()
```


---

### setActions

```java
public void setActions​(List<AlertActionVO> actions)
```


---

### getCurrentDate

```java
public Date getCurrentDate()
```


---

### setCurrentDate

```java
public void setCurrentDate​(Date currentDate)
```


---

### getCanRemove

```java
public Boolean getCanRemove()
```


---

### setCanRemove

```java
public void setCanRemove​(Boolean canRemove)
```


---

### getPriority

```java
public String getPriority()
```


---

### setPriority

```java
public void setPriority​(String priority)
```


---

### getCreationDateTime

```java
public Long getCreationDateTime()
```


---

### setCreationDateTime

```java
public void setCreationDateTime​(Long creationDateTime)
```

---
