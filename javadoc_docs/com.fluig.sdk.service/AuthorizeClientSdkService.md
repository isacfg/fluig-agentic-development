# Interface AuthorizeClientSdkService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface AuthorizeClientSdkService
extends BaseAPIService
Fornece acesso aos serviços externos com autenticação oauth.
  Since:
1.5.10
```

```java
public interface AuthorizeClientSdkService
extends BaseAPIService
```

Fornece acesso aos serviços externos com autenticação oauth.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.10

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `OAuthSdkVO` | `create​(OAuthSdkVO vo)` |  |
| `AuthorizeClientSdkServiceVO` | `invoke​(AuthorizeClientSdkServiceVO vo)` |  |
| `AuthorizeClientSdkServiceVO` | `invoke​(String data)` |  |
| `AuthorizeClientSdkServiceVO` | `invokeService​(String data)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.AuthorizeClientSdkService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.AuthorizeClientSdkService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### invoke

```java
AuthorizeClientSdkServiceVO invoke​(AuthorizeClientSdkServiceVO vo)
                            throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### invoke

```java
AuthorizeClientSdkServiceVO invoke​(String data)
                            throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### invokeService

```java
AuthorizeClientSdkServiceVO invokeService​(String data)
                                   throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### create

```java
OAuthSdkVO create​(OAuthSdkVO vo)
           throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

