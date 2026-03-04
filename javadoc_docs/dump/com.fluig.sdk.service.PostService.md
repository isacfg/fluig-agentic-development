# Interface PostService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface PostService
extends BaseAPIService
Fornece acesso aos serviços de post.
  Since:
1.5
Author:
vanei
```

```java
public interface PostService
extends BaseAPIService
```

Fornece acesso aos serviços de post.

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
| `PostVO` | `create​(PostVO vo)` | Realiza um post em uma timeline, seja pessoal ou de alguma comunidade. |
| `PostVO` | `createWithUpload​(PostVO vo)` | Realiza um post com anexo em uma timeline, seja pessoal ou de alguma comunidade. |
| `void` | `editPost​(Long postId, String text)` | Edit a single post |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PostService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PostService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
PostVO create​(PostVO vo)
       throws com.fluig.sdk.api.common.SDKException
```

Realiza um post em uma timeline, seja pessoal ou de alguma comunidade.

- **Parameters:** `vo` - Dados do post.
- **Returns:** Dados do post criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível efetuar o post.

---

### createWithUpload

```java
PostVO createWithUpload​(PostVO vo)
                 throws com.fluig.sdk.api.common.SDKException
```

Realiza um post com anexo em uma timeline, seja pessoal ou de alguma comunidade.

- **Parameters:** `vo` - Dados do post.
- **Returns:** Dados do post criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível efetuar o post.

---

### editPost

```java
void editPost​(Long postId,
              String text)
       throws com.fluig.sdk.api.common.SDKException,
              com.totvs.technology.foundation.common.exception.FDNException,
              NamingException
```

Edit a single post

- **Parameters:** `postId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

