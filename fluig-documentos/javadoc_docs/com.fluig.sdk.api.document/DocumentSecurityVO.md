# Class DocumentSecurityVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentSecurityVO
```

```java
public class DocumentSecurityVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentSecurityVO()` |  |
| `DocumentSecurityVO​(Long companyId, String userCode, Integer documentId, List<DocumentSecurityConfigVO> documentSecurityConfigVOs)` |  |
| `DocumentSecurityVO​(Long companyId, List<DocumentPermissionVO> documentPermissionVO, List<DocumentApproverVO> documentApproverVO)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<DocumentApproverVO>` | `getDocumentApproverVO()` |  |
| `List<DocumentPermissionVO>` | `getDocumentPermissionVO()` |  |
| `List<DocumentSecurityConfigVO>` | `getDocumentSecurityConfigVOs()` |  |
| `void` | `setDocumentApproverVO​(List<DocumentApproverVO> documentApproverVO)` |  |
| `void` | `setDocumentPermissionVO​(List<DocumentPermissionVO> documentPermissionVO)` |  |
| `void` | `setDocumentSecurityConfigVOs​(List<DocumentSecurityConfigVO> documentSecurityConfigVOs)` |  |


---

## Detalhes dos Construtores

### DocumentSecurityVO

```java
public DocumentSecurityVO()
```


---

### DocumentSecurityVO

```java
public DocumentSecurityVO​(Long companyId,
                          String userCode,
                          Integer documentId,
                          List<DocumentSecurityConfigVO> documentSecurityConfigVOs)
```


---

### DocumentSecurityVO

```java
public DocumentSecurityVO​(Long companyId,
                          List<DocumentPermissionVO> documentPermissionVO,
                          List<DocumentApproverVO> documentApproverVO)
```



## Detalhes dos Métodos

### getDocumentSecurityConfigVOs

```java
public List<DocumentSecurityConfigVO> getDocumentSecurityConfigVOs()
```


---

### setDocumentSecurityConfigVOs

```java
public void setDocumentSecurityConfigVOs​(List<DocumentSecurityConfigVO> documentSecurityConfigVOs)
```


---

### getDocumentPermissionVO

```java
public List<DocumentPermissionVO> getDocumentPermissionVO()
```


---

### setDocumentPermissionVO

```java
public void setDocumentPermissionVO​(List<DocumentPermissionVO> documentPermissionVO)
```


---

### getDocumentApproverVO

```java
public List<DocumentApproverVO> getDocumentApproverVO()
```


---

### setDocumentApproverVO

```java
public void setDocumentApproverVO​(List<DocumentApproverVO> documentApproverVO)
```


