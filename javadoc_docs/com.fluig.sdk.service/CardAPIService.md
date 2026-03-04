# Interface CardAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html)

```java
public interface CardAPIService
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
| `CardFindFieldVO` | `create​(Integer documentId, List<CardFieldVO> cardFieldVOs)` | Cria um registro de Formulário |
| `CardChildrenVO` | `createChild​(Integer cardId, List<CardFieldVO> cardFieldVos)` | Cria um registro no formulário filho |
| `CardFindFieldVO` | `edit​(Integer cardId, List<CardFieldVO> cardFieldVOs)` | altera um registro de Formulário |
| `CardChildrenVO` | `editChild​(Integer cardId, Integer row, List<CardFieldVO> cardFieldVOS)` | Cria um registro no formulário filho |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardFindFieldVO>` | `find​(Integer documentId, Integer page, Integer pageSize, List order, List<String> fields, List<CardFieldFilterVO> cardFieldFilterVOS, Boolean listInactiveRecords)` | Lista os registros do formulário |
| `CardFindFieldVO` | `findById​(Integer documentId, Integer cardId, List<String> fields, List<String> expandedFields)` | Lista os registros do formulário pelo numero do formulário e numero da ficha |
| `CardChildrenVO` | `findChildByCardIdAndRow​(Integer cardId, Integer row, List<String> fields)` | Lista os registros do formulário filho pelo numero do registro e linha |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardChildrenVO>` | `findChildrenByCardId​(Integer cardId, Integer page, Integer pageSize, List<String> fields)` | Lista os registros do formulário filho |
| `Boolean` | `remove​(Integer cardId)` | Remove um registro de formulário |
| `CardChildrenVO` | `removeChild​(Integer cardId, Integer row)` | Remove os registros do formulário filho |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardFindFieldVO> find​(Integer documentId,
                                                                                               Integer page,
                                                                                               Integer pageSize,
                                                                                               List order,
                                                                                               List<String> fields,
                                                                                               List<CardFieldFilterVO> cardFieldFilterVOS,
                                                                                               Boolean listInactiveRecords)
                                                                                        throws Exception
```

Lista os registros do formulário

- **Parameters:** `documentId` - numero do formulário (\* Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os registros do fomulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findById

```java
CardFindFieldVO findById​(Integer documentId,
                         Integer cardId,
                         List<String> fields,
                         List<String> expandedFields)
                  throws Exception
```

Lista os registros do formulário pelo numero do formulário e numero da ficha

- **Parameters:** `documentId` - numero do formulário (\* Obrigatório)
- **Returns:** CardFindFieldVO objeto com os registros do fomulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### create

```java
CardFindFieldVO create​(Integer documentId,
                       List<CardFieldVO> cardFieldVOs)
                throws Exception
```

Cria um registro de Formulário

- **Parameters:** `documentId` - numero do formulário (\* Obrigatório)
- **Returns:** CardFindFieldVO objeto com os registros do fomulário criado
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### edit

```java
CardFindFieldVO edit​(Integer cardId,
                     List<CardFieldVO> cardFieldVOs)
              throws Exception
```

altera um registro de Formulário

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardFindFieldVO objeto com o registros do fomulário editado
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### remove

```java
Boolean remove​(Integer cardId)
        throws Exception
```

Remove um registro de formulário

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** Boolean true se a rotina executar com sucesso
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findChildrenByCardId

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardChildrenVO> findChildrenByCardId​(Integer cardId,
                                                                                                              Integer page,
                                                                                                              Integer pageSize,
                                                                                                              List<String> fields)
                                                                                                       throws Exception
```

Lista os registros do formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findChildByCardIdAndRow

```java
CardChildrenVO findChildByCardIdAndRow​(Integer cardId,
                                       Integer row,
                                       List<String> fields)
                                throws Exception
```

Lista os registros do formulário filho pelo numero do registro e linha

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** ResponseEnvelopeVO com os registros do fomulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### createChild

```java
CardChildrenVO createChild​(Integer cardId,
                           List<CardFieldVO> cardFieldVos)
                    throws Exception
```

Cria um registro no formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardChildrenVO com os registros do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### editChild

```java
CardChildrenVO editChild​(Integer cardId,
                         Integer row,
                         List<CardFieldVO> cardFieldVOS)
                  throws Exception
```

Cria um registro no formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardChildrenVO com os registros do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### removeChild

```java
CardChildrenVO removeChild​(Integer cardId,
                           Integer row)
                    throws Exception
```

Remove os registros do formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardChildrenVO com os registros do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

