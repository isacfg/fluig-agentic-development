# Interface FolderDocumentService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface FolderDocumentService
extends BaseAPIService
Fornece acesso aos serviços de pastas (GED).
  Since:
1.5
Author:
vanei
```

```java
public interface FolderDocumentService
extends BaseAPIService
```

Fornece acesso aos serviços de pastas (GED).

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
| `FolderVO` | `create​(FolderVO vo)` | Criação de uma nova pasta |
| `DocumentVO` | `get​(int documentId)` | Recupera um documento através do id |
| `List<DocumentVO>` | `list​(int folderId)` | Recupera lista de documentos através do id da pasta |
| `List<DocumentVO>` | `list​(int folderId, int permission)` | Recupera lista de documentos através do id da pasta |
| `List<DocumentVO>` | `listDocumentsByFolder​(FolderVO folderVO, int limit, int offset)` | Retorna os documentos de uma pasta |
| `DocumentVO` | `updateDocumentDescription​(long companyId, int documentId, String description)` | Atualiza documento ou pasta |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FolderDocumentService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FolderDocumentService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### get

```java
DocumentVO get​(int documentId)
        throws com.fluig.sdk.api.common.SDKException
```

Recupera um documento através do id

- **Parameters:** `documentId` -
- **Returns:** DocumentVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### create

```java
FolderVO create​(FolderVO vo)
         throws com.fluig.sdk.api.common.SDKException
```

Criação de uma nova pasta

- **Parameters:** `vo` -
- **Returns:** FolderVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<DocumentVO> list​(int folderId)
               throws com.fluig.sdk.api.common.SDKException
```

Recupera lista de documentos através do id da pasta

- **Parameters:** `folderId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### updateDocumentDescription

```java
DocumentVO updateDocumentDescription​(long companyId,
                                     int documentId,
                                     String description)
                              throws com.fluig.sdk.api.common.SDKException
```

Atualiza documento ou pasta

- **Parameters:** `companyId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<DocumentVO> list​(int folderId,
                      int permission)
               throws com.fluig.sdk.api.common.SDKException
```

Recupera lista de documentos através do id da pasta

- **Parameters:** `folderId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listDocumentsByFolder

```java
List<DocumentVO> listDocumentsByFolder​(FolderVO folderVO,
                                       int limit,
                                       int offset)
                                throws com.fluig.sdk.api.common.SDKException
```

Retorna os documentos de uma pasta

- **Parameters:** `FolderVO` -
- **Returns:** List
- **Throws:** `com.fluig.sdk.api.common.SDKException`

