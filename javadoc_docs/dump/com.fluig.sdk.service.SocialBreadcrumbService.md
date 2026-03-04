# Interface SocialBreadcrumbService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface SocialBreadcrumbService
extends BaseAPIService
Fornece acesso aos serviços de breadcrumb.
  Since:
1.5.4
Author:
marcus.carvalho
```

```java
public interface SocialBreadcrumbService
extends BaseAPIService
```

Fornece acesso aos serviços de breadcrumb.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.4
- **Author:** marcus.carvalho

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `SocialBreadcrumbVO` | `get​(String alias, Long documentId, String folderType)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialBreadcrumbService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialBreadcrumbService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### get

```java
SocialBreadcrumbVO get​(String alias,
                       Long documentId,
                       String folderType)
                throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

