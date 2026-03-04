# Interface SocialSDKService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialSDKService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialSDKService.html)

```java
public interface SocialSDKService
extends BaseAPIService
```

- **All Superinterfaces:** BaseAPIService

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `SocialVO` | `findSocialUser​(Long userId)` | Find social user by id |
| `SocialVO` | `findSocialVOByAlias​(String alias)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialSDKService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialSDKService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findSocialUser

```java
SocialVO findSocialUser​(Long userId)
                 throws com.fluig.sdk.api.common.SDKException
```

Find social user by id

- **Parameters:** `userId` -
- **Returns:** SocialVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findSocialVOByAlias

```java
SocialVO findSocialVOByAlias​(String alias)
                      throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

