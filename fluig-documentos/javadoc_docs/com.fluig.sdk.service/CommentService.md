# Interface CommentService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommentService.html)

```java
public interface CommentService
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
| `void` | `editComment​(Long commentId, String text)` | Edit a single comment |
| `CommentVO` | `findComment​(Long sociableId)` | Find a single comment |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CommentService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CommentService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### editComment

```java
void editComment​(Long commentId,
                 String text)
          throws com.fluig.sdk.api.common.SDKException,
                 com.totvs.technology.foundation.common.exception.FDNException,
                 NamingException
```

Edit a single comment

- **Parameters:** `commentId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findComment

```java
CommentVO findComment​(Long sociableId)
               throws NamingException
```

Find a single comment

- **Parameters:** `sociableId` -
- **Throws:** `` `NamingException` ``

