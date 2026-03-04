# Interface TagsCloudService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TagsCloudService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TagsCloudService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface TagsCloudService
extends BaseAPIService
Fornece acesso aos serviços de tagscloud.
  Since:
1.5
Author:
ricardo.andre
```

```java
public interface TagsCloudService
extends BaseAPIService
```

Fornece acesso aos serviços de tagscloud.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** ricardo.andre

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Map<String,​Long>` | `getTags​(String query, String filterQuery, List<String> communitiesAlias, Integer limit, String login)` | Pesquisa por TAGS mais populares baseado em um conjunto de parâmetros. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TagsCloudService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TagsCloudService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### getTags

```java
Map<String,​Long> getTags​(String query,
                               String filterQuery,
                               List<String> communitiesAlias,
                               Integer limit,
                               String login)
                        throws com.fluig.sdk.api.common.SDKException
```

Pesquisa por TAGS mais populares baseado em um conjunto de parâmetros.

- **Parameters:** `query` - Query do Solr com a busca de tags.
- **Returns:** Lista com as TAGS mais populares e o número de ocorrências por palavra.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

