# Interface IdentityService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/IdentityService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/IdentityService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface IdentityService
extends BaseAPIService
Grant access to global parameter services
  Since:
1.5.3
Author:
vinicius.michelutti
```

```java
public interface IdentityService
extends BaseAPIService
```

Grant access to global parameter services

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.3
- **Author:** vinicius.michelutti

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `UserAuthTokenSessionVO` | `createSession()` | Retorna o uma nova sessão do identity |
| `void` | `updateSession()` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.IdentityService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.IdentityService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### createSession

```java
UserAuthTokenSessionVO createSession()
                              throws Exception
```

Retorna o uma nova sessão do identity

- **Returns:** As informações da nova sessão, juntamente com a informaçõo do usuário referente a tal sessão
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### updateSession

```java
void updateSession()
            throws Exception
```

- **Throws:** `` `Exception` ``

