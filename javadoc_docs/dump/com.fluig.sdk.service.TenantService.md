# Interface TenantService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface TenantService
extends BaseAPIService
Fornece acesso aos serviços de tenância.
  Since:
1.5
Author:
vanei
```

```java
public interface TenantService
extends BaseAPIService
```

Fornece acesso aos serviços de tenância.

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
| `TenantVO` | `create​(TenantVO vo)` | Cria um novo tenante. |
| `Map<String,​String>` | `getTenantData​(String[] keys)` | Retorna, caso houver, objeto chaves/valores do tenantData |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TenantService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TenantService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
TenantVO create​(TenantVO vo)
         throws com.fluig.sdk.api.common.SDKException
```

Cria um novo tenante.

- **Parameters:** `vo` - Dados do tenante.
- **Returns:** Dados do tenante criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o tenante.

---

### getTenantData

```java
Map<String,​String> getTenantData​(String[] keys)
                                throws com.fluig.sdk.api.common.SDKException
```

Retorna, caso houver, objeto chaves/valores do tenantData

- **Parameters:** `keys` -
- **Returns:** map key/value tenantData
- **Throws:** `com.fluig.sdk.api.common.SDKException`

