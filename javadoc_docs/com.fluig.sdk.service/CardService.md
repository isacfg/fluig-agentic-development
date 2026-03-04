# Interface CardService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface CardService
extends BaseAPIService
Fornece operações para gerenciamento de Card's
  Since:
1.5
Author:
vanei.heidemann
```

```java
public interface CardService
extends BaseAPIService
```

Fornece operações para gerenciamento de Card's

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
| `CardItemVO` | `createItem​(CardItemVO vo)` | Criação de um novo card |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### createItem

```java
CardItemVO createItem​(CardItemVO vo)
               throws com.fluig.sdk.api.common.SDKException
```

Criação de um novo card

- **Parameters:** `vo` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

