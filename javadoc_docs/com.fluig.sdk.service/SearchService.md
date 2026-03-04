# Interface SearchService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html)

```java
public interface SearchService
extends BaseAPIService
```

Fornece acesso aos serviços de busca

- **All Superinterfaces:** BaseAPIService

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |
| `static int` | `MAX_INFLUENCERS_RESULT` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `DefaultSearchResponse` | `findInfluencers​(DefaultSearchRequest search)` | Retorna lista de influenciadores para um assunto(#tag) |
| `DefaultSearchResponse` | `findInfluencers​(String search)` |  |
| `List<Map<String,​Object>>` | `groupedSearch​(DefaultSearchRequest request)` | Retorna uma lista de resultados agrupadas |
| `List<Map<String,​Object>>` | `groupedSearchByType​(DefaultSearchRequest request)` | Retorna uma lista de resultados agrupadas por tipo |
| `DefaultSearchResponse` | `search​(DefaultSearchRequest request)` | Retorna a pesquisa padrão, com os tipos de documentos encontrados em forma de lista |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SearchService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SearchService.JNDI_REMOTE_NAME)

---

### MAX_INFLUENCERS_RESULT

```java
static final int MAX_INFLUENCERS_RESULT
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SearchService.MAX_INFLUENCERS_RESULT)


## Detalhes dos Métodos

### search

```java
DefaultSearchResponse search​(DefaultSearchRequest request)
                      throws com.fluig.sdk.api.common.SDKException
```

Retorna a pesquisa padrão, com os tipos de documentos encontrados em forma de lista

- **Parameters:** `request` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findInfluencers

```java
DefaultSearchResponse findInfluencers​(DefaultSearchRequest search)
                               throws com.fluig.sdk.api.common.SDKException
```

Retorna lista de influenciadores para um assunto(#tag)

- **Parameters:** `String` - search
- **Returns:** `InfluencersSearch`
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findInfluencers

```java
DefaultSearchResponse findInfluencers​(String search)
                               throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### groupedSearch

```java
List<Map<String,​Object>> groupedSearch​(DefaultSearchRequest request)
                                      throws com.fluig.sdk.api.common.SDKException,
                                             NamingException
```

Retorna uma lista de resultados agrupadas

- **Parameters:** `request` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### groupedSearchByType

```java
List<Map<String,​Object>> groupedSearchByType​(DefaultSearchRequest request)
                                            throws com.fluig.sdk.api.common.SDKException,
                                                   NamingException
```

Retorna uma lista de resultados agrupadas por tipo

- **Parameters:** `request` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

