# Interface CardIndexAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html)

```java
public interface CardIndexAPIService
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
| `CardIndexAPIVO` | `createCardIndex​(File filecontent, String formName, Integer parentIdValue)` |  |
| `CardIndexAPIVO` | `createCardIndex​(File filecontent, String mainFile, String formName, String descriptorField, String datasetName, Integer parentIdValue)` |  |
| `boolean` | `deleteCardIndex​(Integer documentId)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO>` | `findCardIndex​(Integer documentId, Integer version)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO>` | `findCardIndex​(Integer documentId, Integer version, List order, Integer page, Integer pageSize)` |  |
| `CardIndexAPIVO` | `patchCardIndex​(File filecontent, Integer documentIdValue, String updateMode, String mainFile, String formName, String descriptorField, String datasetName)` |  |
| `CardIndexAPIVO` | `putCardIndex​(File filecontent, Integer documentIdValue, String updateMode, String mainFile, String formName, String descriptorField, String datasetName)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findCardIndex

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO> findCardIndex​(Integer documentId,
                                                                                                           Integer version,
                                                                                                           List order,
                                                                                                           Integer page,
                                                                                                           Integer pageSize)
                                                                                                    throws Exception
```

- **Parameters:** `documentId` - numero do fomulário
- **Returns:** ResponseEnvelopeVO objeto com os dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Busca formulários

---

### findCardIndex

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO> findCardIndex​(Integer documentId,
                                                                                                           Integer version)
                                                                                                    throws Exception
```

- **Parameters:** `documentId` - numero do fomulário
- **Returns:** ResponseEnvelopeVO objeto com os dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Busca formulários

---

### createCardIndex

```java
CardIndexAPIVO createCardIndex​(File filecontent,
                               String mainFile,
                               String formName,
                               String descriptorField,
                               String datasetName,
                               Integer parentIdValue)
                        throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Cria formuários com base em arquivos html ou zip

---

### createCardIndex

```java
CardIndexAPIVO createCardIndex​(File filecontent,
                               String formName,
                               Integer parentIdValue)
                        throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Cria formuários com base em arquivos html ou zip

---

### patchCardIndex

```java
CardIndexAPIVO patchCardIndex​(File filecontent,
                              Integer documentIdValue,
                              String updateMode,
                              String mainFile,
                              String formName,
                              String descriptorField,
                              String datasetName)
                       throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Atualização parcial dos arquivos do formulário

---

### putCardIndex

```java
CardIndexAPIVO putCardIndex​(File filecontent,
                            Integer documentIdValue,
                            String updateMode,
                            String mainFile,
                            String formName,
                            String descriptorField,
                            String datasetName)
                     throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Atualiza completa dos arquivos do formulário

---

### deleteCardIndex

```java
boolean deleteCardIndex​(Integer documentId)
                 throws Exception
```

- **Parameters:** `documentId` -
- **Returns:** Boolean true se a rotina executar com sucesso
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Manda um formulário para lixeira

