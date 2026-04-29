# Interface SecurityService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface SecurityService
extends BaseAPIService
Fornece acesso aos serviços de segurança.
  Since:
1.5
Author:
vanei
```

```java
public interface SecurityService
extends BaseAPIService
```

Fornece acesso aos serviços de segurança.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `void` | `changeUserPassword​(String login, String currentPassword, String newPassword, String confirmNewPassword)` | Change user password |
| `Boolean` | `createOrUpdateTenantData​(String key, String value)` | Cria um bjeto chave/valor no tenantData |
| `void` | `createPermissions​(String resourceCode, List<PermissionVO> permissions)` | Cria as permissões para um determinado recurso |
| `void` | `deletePermissions​(String resourceCode, List<PermissionVO> permissions)` | Deleta as permissões para um determinado recurso |
| `GroupVO` | `findGroupByTenantIdAndCode​(Long tenantId, String code)` | Retorna o grupo por code e tenant |
| `List<TenantVO>` | `findTenants()` | Retorna a lista de tentants. |
| `TenantVO` | `getCurrentTenant()` | Get the current tenant |
| `TenantVO` | `getCurrentTenantById​(Long tenantId)` | Get the current tenant |
| `Long` | `getCurrentTenantId()` | Retorna o tenantId logado |
| `List<PermissionVO>` | `getPermissionsByResourceCode​(String resourceCode)` | Lista as permissões do recurso informado |
| `String` | `getTimeZoneLocalUser​(long companyId, String userCode)` |  |
| `Boolean` | `hasPermission​(String resource, String permiss)` | Verifica se o usuário logado possui certa permissão no recurso dado. |
| `List<PermissionAssetVO>` | `listResourcesByCategory​(String category, String filter, int offset, int limit)` | Lista os recursos da categoria informada |
| `List<AdminUserVO>` | `listTenantAdmins​(Long tenantId)` | Retorna os admins de um tenant |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SecurityService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SecurityService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### hasPermission

```java
Boolean hasPermission​(String resource,
                      String permiss)
               throws com.fluig.sdk.api.common.SDKException
```

Verifica se o usuário logado possui certa permissão no recurso dado.

- **Parameters:** `resource` - Código do recurso.
- **Returns:** **true** se o usuário tiver persmissão, **false** caso contrário.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### listResourcesByCategory

```java
List<PermissionAssetVO> listResourcesByCategory​(String category,
                                                String filter,
                                                int offset,
                                                int limit)
                                         throws com.fluig.sdk.api.common.SDKException
```

Lista os recursos da categoria informada

- **Parameters:** `category` - - Categoria do recurso
- **Returns:** Lista com os recursos.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getPermissionsByResourceCode

```java
List<PermissionVO> getPermissionsByResourceCode​(String resourceCode)
                                         throws com.fluig.sdk.api.common.SDKException
```

Lista as permissões do recurso informado

- **Parameters:** `resourceCode` - - Código do recurso
- **Returns:** Lista com as permissões
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createPermissions

```java
void createPermissions​(String resourceCode,
                       List<PermissionVO> permissions)
                throws com.fluig.sdk.api.common.SDKException
```

Cria as permissões para um determinado recurso

- **Parameters:** `resourceCode` - - Código do recurso
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### deletePermissions

```java
void deletePermissions​(String resourceCode,
                       List<PermissionVO> permissions)
                throws com.fluig.sdk.api.common.SDKException
```

Deleta as permissões para um determinado recurso

- **Parameters:** `resourceCode` - - Código do recurso
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findTenants

```java
List<TenantVO> findTenants()
                    throws com.fluig.sdk.api.common.SDKException
```

Retorna a lista de tentants.

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCurrentTenantId

```java
Long getCurrentTenantId()
                 throws com.fluig.sdk.api.common.SDKException
```

Retorna o tenantId logado

- **Returns:** current tenantId
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findGroupByTenantIdAndCode

```java
GroupVO findGroupByTenantIdAndCode​(Long tenantId,
                                   String code)
                            throws com.fluig.sdk.api.common.SDKException
```

Retorna o grupo por code e tenant

- **Parameters:** `tenantId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createOrUpdateTenantData

```java
Boolean createOrUpdateTenantData​(String key,
                                 String value)
                          throws com.fluig.sdk.api.common.SDKException
```

Cria um bjeto chave/valor no tenantData

- **Parameters:** `key` -
- **Returns:** If tenant data was updated
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listTenantAdmins

```java
List<AdminUserVO> listTenantAdmins​(Long tenantId)
                            throws com.fluig.sdk.api.common.SDKException
```

Retorna os admins de um tenant

- **Parameters:** `tenantId` -
- **Returns:** List of tenant admin
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### changeUserPassword

```java
void changeUserPassword​(String login,
                        String currentPassword,
                        String newPassword,
                        String confirmNewPassword)
                 throws com.fluig.sdk.api.common.SDKException
```

Change user password

- **Parameters:** `login` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCurrentTenant

```java
TenantVO getCurrentTenant()
                   throws com.fluig.sdk.api.common.SDKException
```

Get the current tenant

- **Returns:** Tenant data
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCurrentTenantById

```java
TenantVO getCurrentTenantById​(Long tenantId)
                       throws com.fluig.sdk.api.common.SDKException
```

Get the current tenant

- **Returns:** Tenant data
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getTimeZoneLocalUser

```java
String getTimeZoneLocalUser​(long companyId,
                            String userCode)
                     throws com.fluig.sdk.api.common.SDKException
```

- **Parameters:** `companyId` -
- **Returns:** time zone for user
- **Throws:** `com.fluig.sdk.api.common.SDKException`

