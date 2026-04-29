# Interface FavoritesService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface FavoritesService
extends BaseAPIService
Fornece acesso aos serviços de favoritos.
  Since:
1.5.2
Author:
marcelo.pereira
```

```java
public interface FavoritesService
extends BaseAPIService
```

Fornece acesso aos serviços de favoritos.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.2
- **Author:** marcelo.pereira

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<DocumentVO>` | `findFavoritesDocuments​(String colleagueId)` | Busca os documentos favoritos |
| `List<ProcessDefinitionVersionVO>` | `findFavoritesProcess​(String colleagueId)` | Busca os processos favoritos |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FavoritesService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FavoritesService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findFavoritesDocuments

```java
List<DocumentVO> findFavoritesDocuments​(String colleagueId)
                                 throws com.fluig.sdk.api.common.SDKException
```

Busca os documentos favoritos

- **Parameters:** `colleagueId` -
- **Returns:** Documentos favoritos
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os documentos favoritos

---

### findFavoritesProcess

```java
List<ProcessDefinitionVersionVO> findFavoritesProcess​(String colleagueId)
                                               throws com.fluig.sdk.api.common.SDKException
```

Busca os processos favoritos

- **Parameters:** `colleagueId` -
- **Returns:** Processos favoritos
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os processos favoritos

