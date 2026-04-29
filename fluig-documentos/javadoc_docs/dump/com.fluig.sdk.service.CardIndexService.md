# Interface CardIndexService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface CardIndexService
extends BaseAPIService
Fornece operações para gerenciamento card index
  Since:
1.5
Author:
vanei.heidemann
```

```java
public interface CardIndexService
extends BaseAPIService
```

Fornece operações para gerenciamento card index

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei.heidemann

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `CardIndexVO` | `create​(CardIndexVO vo)` | Criação de um novo card index |
| `void` | `delete​(Integer documentId)` | Exclusão de um card index |
| `Integer` | `getDefaultFormFolderId()` | Retorna a pasta padrão de formulário |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
CardIndexVO create​(CardIndexVO vo)
            throws com.fluig.sdk.api.common.SDKException
```

Criação de um novo card index

- **Parameters:** `vo` - - object to persist
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### delete

```java
void delete​(Integer documentId)
```

Exclusão de um card index

- **Parameters:** `Integer` - documentId

---

### getDefaultFormFolderId

```java
Integer getDefaultFormFolderId()
                        throws com.fluig.sdk.api.common.SDKException
```

Retorna a pasta padrão de formulário

- **Parameters:** `Integer` - documentId
- **Throws:** `com.fluig.sdk.api.common.SDKException`

