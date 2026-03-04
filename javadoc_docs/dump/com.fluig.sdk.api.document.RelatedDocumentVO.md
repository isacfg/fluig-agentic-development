# Class RelatedDocumentVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.RelatedDocumentVO
```

```java
public class RelatedDocumentVO
extends Object
implements Serializable
```

Value Object para RelatedDocumento

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `RelatedDocumentVO()` | Nova instância sem valores definidos |
| `RelatedDocumentVO​(Long tenantId, Integer relatedDocumentId, Integer version, Integer documentId)` | Nova instância do RelatedDocumentVO informando
 tenantId, relatedDocumentId, version, documentId |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Integer` | `getDocumentId()` | Retorna documentId |
| `Integer` | `getRelatedDocumentId()` | Retorna relatedDocumentId |
| `Long` | `getTenantId()` | Retorna tenantId |
| `Integer` | `getVersion()` | Retorna versão |
| `void` | `setDocumentId​(Integer documentId)` | Atribui valor para documentoId |
| `void` | `setRelatedDocumentId​(Integer relatedDocumentId)` | Atribui valor para relatedDocumentId |
| `void` | `setTenantId​(Long tenantId)` | Atribui valor para tenantId |
| `void` | `setVersion​(Integer version)` | Atribui valor para versão |


---

## Detalhes dos Construtores

### RelatedDocumentVO

```java
public RelatedDocumentVO()
```

Nova instância sem valores definidos


---

### RelatedDocumentVO

```java
public RelatedDocumentVO​(Long tenantId,
                         Integer relatedDocumentId,
                         Integer version,
                         Integer documentId)
```

Nova instância do RelatedDocumentVO informando tenantId, relatedDocumentId, version, documentId

- **Parameters:** `tenantId` -


## Detalhes dos Métodos

### getTenantId

```java
public Long getTenantId()
```

Retorna tenantId

- **Returns:** Long tenantId

---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```

Atribui valor para tenantId

- **Parameters:** `tenantId` -

---

### getDocumentId

```java
public Integer getDocumentId()
```

Retorna documentId

- **Returns:** Integer

---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```

Atribui valor para documentoId

- **Parameters:** `documentId` -

---

### getVersion

```java
public Integer getVersion()
```

Retorna versão

- **Returns:** Integer

---

### setVersion

```java
public void setVersion​(Integer version)
```

Atribui valor para versão

- **Parameters:** `version` -

---

### getRelatedDocumentId

```java
public Integer getRelatedDocumentId()
```

Retorna relatedDocumentId

- **Returns:** Integer

---

### setRelatedDocumentId

```java
public void setRelatedDocumentId​(Integer relatedDocumentId)
```

Atribui valor para relatedDocumentId

- **Parameters:** `relatedDocumentId` -

