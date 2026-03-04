# Class TenantVO

> **Pacote:** `com.fluig.sdk.tenant`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.tenant.TenantVO
```

```java
public class TenantVO
extends Object
implements Serializable
```

Value Object para Tenant

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `TenantVO()` | Nova instância para TenantVO.java |
| `TenantVO​(Long id, String code)` | Nova instância para TenantVO.java |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `AdminUserVO` | `getAdminUser()` | Recupera valor do adminUser |
| `String` | `getCode()` | Recupera valor do code |
| `Map<String,​String>` | `getData()` | Recupera valor do data |
| `String` | `getDescription()` | Recupera valor do description |
| `String` | `getFederalId()` | Recupera valor do federalId |
| `Long` | `getId()` | Recupera valor do id |
| `String` | `getIdpId()` | Recupera valor do idpId |
| `Boolean` | `getIdpLogOff()` | Recupera valor do idpLogOff |
| `String` | `getOrganizationUrl()` | Recupera valor do organizationUrl |
| `Boolean` | `getRemoveVolume()` | Recupera valor do removeVolume |
| `Boolean` | `getTenantActive()` | Recupera o valor para tenantActive |
| `Boolean` | `getThumbnailEnabled()` | Recupera valor do thumbnailEnabled |
| `String` | `getVolumeDir()` | Recupera valor do volumeDir |
| `void` | `setAdminUser​(AdminUserVO adminUser)` | Atribui valor para adminUser |
| `void` | `setCode​(String code)` | Atribui valor para code |
| `void` | `setData​(Map<String,​String> data)` | Atribui valor para data |
| `void` | `setDescription​(String description)` | Atribui valor para description |
| `void` | `setFederalId​(String federalId)` | Atribui valor para federalId |
| `void` | `setId​(Long id)` | Atribui valor para id |
| `void` | `setIdpId​(String idpId)` | Atribui valor para idpId |
| `void` | `setIdpLogOff​(Boolean idpLogOff)` | Atribui valor para idpLogOff |
| `void` | `setOrganizationUrl​(String organizationUrl)` | Atribui valor para organizationUrl |
| `void` | `setRemoveVolume​(Boolean removeVolume)` | Atribui valor para removeVolume |
| `void` | `setTenantActive​(Boolean tenantActive)` | Atribui valor para tenantActive |
| `void` | `setThumbnailEnabled​(Boolean thumbnailEnabled)` | Atribui valor para thumbnailEnabled |
| `void` | `setVolumeDir​(String volumeDir)` | Atribui valor para volumeDir |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### TenantVO

```java
public TenantVO()
```

Nova instância para TenantVO.java


---

### TenantVO

```java
public TenantVO​(Long id,
                String code)
```

Nova instância para TenantVO.java

- **Parameters:** `id` -


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

### getFederalId

```java
public String getFederalId()
```

Recupera valor do federalId

- **Returns:** the federalId

---

### setFederalId

```java
public void setFederalId​(String federalId)
```

Atribui valor para federalId

- **Parameters:** `federalId` - the federalId to set

---

### getIdpId

```java
public String getIdpId()
```

Recupera valor do idpId

- **Returns:** the idpId

---

### setIdpId

```java
public void setIdpId​(String idpId)
```

Atribui valor para idpId

- **Parameters:** `idpId` - the idpId to set

---

### getDescription

```java
public String getDescription()
```

Recupera valor do description

- **Returns:** the description

---

### setDescription

```java
public void setDescription​(String description)
```

Atribui valor para description

- **Parameters:** `description` - the description to set

---

### getOrganizationUrl

```java
public String getOrganizationUrl()
```

Recupera valor do organizationUrl

- **Returns:** the organizationUrl

---

### setOrganizationUrl

```java
public void setOrganizationUrl​(String organizationUrl)
```

Atribui valor para organizationUrl

- **Parameters:** `organizationUrl` - the organizationUrl to set

---

### getVolumeDir

```java
public String getVolumeDir()
```

Recupera valor do volumeDir

- **Returns:** the volumeDir

---

### setVolumeDir

```java
public void setVolumeDir​(String volumeDir)
```

Atribui valor para volumeDir

- **Parameters:** `volumeDir` - the volumeDir to set

---

### getIdpLogOff

```java
public Boolean getIdpLogOff()
```

Recupera valor do idpLogOff

- **Returns:** the idpLogOff

---

### setIdpLogOff

```java
public void setIdpLogOff​(Boolean idpLogOff)
```

Atribui valor para idpLogOff

- **Parameters:** `idpLogOff` - the idpLogOff to set

---

### getThumbnailEnabled

```java
public Boolean getThumbnailEnabled()
```

Recupera valor do thumbnailEnabled

- **Returns:** the thumbnailEnabled

---

### setThumbnailEnabled

```java
public void setThumbnailEnabled​(Boolean thumbnailEnabled)
```

Atribui valor para thumbnailEnabled

- **Parameters:** `thumbnailEnabled` - the thumbnailEnabled to set

---

### getRemoveVolume

```java
public Boolean getRemoveVolume()
```

Recupera valor do removeVolume

- **Returns:** the removeVolume

---

### setRemoveVolume

```java
public void setRemoveVolume​(Boolean removeVolume)
```

Atribui valor para removeVolume

- **Parameters:** `removeVolume` - the removeVolume to set

---

### getData

```java
public Map<String,​String> getData()
```

Recupera valor do data

- **Returns:** the data

---

### setData

```java
public void setData​(Map<String,​String> data)
```

Atribui valor para data

- **Parameters:** `data` - the data to set

---

### getAdminUser

```java
public AdminUserVO getAdminUser()
```

Recupera valor do adminUser

- **Returns:** the adminUser

---

### setAdminUser

```java
public void setAdminUser​(AdminUserVO adminUser)
```

Atribui valor para adminUser

- **Parameters:** `adminUser` - the adminUser to set

---

### getTenantActive

```java
public Boolean getTenantActive()
```

Recupera o valor para tenantActive

- **Returns:** the tenantActive

---

### setTenantActive

```java
public void setTenantActive​(Boolean tenantActive)
```

Atribui valor para tenantActive

- **Parameters:** `tenantActive` - the tenantActive to set

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``
- **See Also:** ``Object.toString()``

