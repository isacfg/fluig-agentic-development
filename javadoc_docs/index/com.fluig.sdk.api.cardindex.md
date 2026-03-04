# com.fluig.sdk.api.cardindex

> **6 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/package-summary.html)

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class AttachmentVO](#class-attachmentvo)
- [Class CardChildrenVO](#class-cardchildrenvo)
- [Class CardFieldFilterVO](#class-cardfieldfiltervo)
- [Class CardFieldVO](#class-cardfieldvo)
- [Class CardFindFieldVO](#class-cardfindfieldvo)
- [Class CardIndexFindAPIVO](#class-cardindexfindapivo)

---

# Class AttachmentVO

> **Pacote:** `com.fluig.sdk.api.cardindex`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/AttachmentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/AttachmentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.cardindex.AttachmentVO
```

```java
public class AttachmentVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AttachmentVO()` |  |
| `AttachmentVO​(String fileName, String fullPatch)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getAttach()` |  |
| `Boolean` | `getDescriptor()` |  |
| `Boolean` | `getEditing()` |  |
| `byte[]` | `getFilecontent()` |  |
| `String` | `getFileName()` |  |
| `AttachmentVO` | `getFileSelected()` |  |
| `long` | `getFileSize()` |  |
| `String` | `getFullPatch()` |  |
| `String` | `getIconPath()` |  |
| `Boolean` | `getMobile()` |  |
| `String` | `getPathName()` |  |
| `Boolean` | `getPrincipal()` |  |
| `void` | `setAttach​(Boolean attach)` |  |
| `void` | `setDescriptor​(Boolean descriptor)` |  |
| `void` | `setEditing​(Boolean editing)` |  |
| `void` | `setFilecontent​(byte[] filecontent)` |  |
| `void` | `setFileName​(String fileName)` |  |
| `void` | `setFileSelected​(AttachmentVO fileSelected)` |  |
| `void` | `setFileSize​(long fileSize)` |  |
| `void` | `setFullPatch​(String fullPatch)` |  |
| `void` | `setIconPath​(String iconPath)` |  |
| `void` | `setMobile​(Boolean mobile)` |  |
| `void` | `setPathName​(String pathName)` |  |
| `void` | `setPrincipal​(Boolean principal)` |  |


---

## Detalhes dos Construtores

### AttachmentVO

```java
public AttachmentVO()
```


---

### AttachmentVO

```java
public AttachmentVO​(String fileName,
                    String fullPatch)
```



## Detalhes dos Métodos

### getFileName

```java
public String getFileName()
```


---

### setFileName

```java
public void setFileName​(String fileName)
```


---

### getPathName

```java
public String getPathName()
```


---

### setPathName

```java
public void setPathName​(String pathName)
```


---

### getIconPath

```java
public String getIconPath()
```


---

### setIconPath

```java
public void setIconPath​(String iconPath)
```


---

### getFileSize

```java
public long getFileSize()
```


---

### setFileSize

```java
public void setFileSize​(long fileSize)
```


---

### getPrincipal

```java
public Boolean getPrincipal()
```


---

### setPrincipal

```java
public void setPrincipal​(Boolean principal)
```


---

### getAttach

```java
public Boolean getAttach()
```


---

### setAttach

```java
public void setAttach​(Boolean attach)
```


---

### getDescriptor

```java
public Boolean getDescriptor()
```


---

### setDescriptor

```java
public void setDescriptor​(Boolean descriptor)
```


---

### getFullPatch

```java
public String getFullPatch()
```


---

### setFullPatch

```java
public void setFullPatch​(String fullPatch)
```


---

### getFileSelected

```java
public AttachmentVO getFileSelected()
```


---

### setFileSelected

```java
public void setFileSelected​(AttachmentVO fileSelected)
```


---

### getEditing

```java
public Boolean getEditing()
```


---

### setEditing

```java
public void setEditing​(Boolean editing)
```


---

### getFilecontent

```java
public byte[] getFilecontent()
```


---

### setFilecontent

```java
public void setFilecontent​(byte[] filecontent)
```


---

### getMobile

```java
public Boolean getMobile()
```


---

### setMobile

```java
public void setMobile​(Boolean mobile)
```

---

# Class CardChildrenVO

> **Pacote:** `com.fluig.sdk.api.cardindex`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.cardindex.CardChildrenVO
```

```java
public class CardChildrenVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardChildrenVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static long` | `getSerialVersionUID()` |  |
| `List<CardFieldVO>` | `getValues()` |  |
| `void` | `setValues​(List<CardFieldVO> values)` |  |


---

## Detalhes dos Construtores

### CardChildrenVO

```java
public CardChildrenVO()
```



## Detalhes dos Métodos

### getSerialVersionUID

```java
public static long getSerialVersionUID()
```


---

### getValues

```java
public List<CardFieldVO> getValues()
```


---

### setValues

```java
public void setValues​(List<CardFieldVO> values)
```

---

# Class CardFieldFilterVO

> **Pacote:** `com.fluig.sdk.api.cardindex`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldFilterVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldFilterVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.cardindex.CardFieldFilterVO
```

```java
public class CardFieldFilterVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardFieldFilterVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Object` | `getFinalValue()` |  |
| `String` | `getHtmlIdField()` |  |
| `Object` | `getInitialValue()` |  |
| `String` | `getOperator()` |  |
| `String` | `getOptionField()` |  |
| `boolean` | `isUseLike()` |  |
| `void` | `setFinalValue​(Object finalValue)` |  |
| `void` | `setHtmlIdField​(String htmlIdField)` |  |
| `void` | `setInitialValue​(Object initialValue)` |  |
| `void` | `setOperator​(String operator)` |  |
| `void` | `setOptionField​(String optionField)` |  |
| `void` | `setUseLike​(boolean useLike)` |  |


---

## Detalhes dos Construtores

### CardFieldFilterVO

```java
public CardFieldFilterVO()
```



## Detalhes dos Métodos

### getHtmlIdField

```java
public String getHtmlIdField()
```


---

### setHtmlIdField

```java
public void setHtmlIdField​(String htmlIdField)
```


---

### getOperator

```java
public String getOperator()
```


---

### setOperator

```java
public void setOperator​(String operator)
```


---

### getInitialValue

```java
public Object getInitialValue()
```


---

### setInitialValue

```java
public void setInitialValue​(Object initialValue)
```


---

### getFinalValue

```java
public Object getFinalValue()
```


---

### setFinalValue

```java
public void setFinalValue​(Object finalValue)
```


---

### isUseLike

```java
public boolean isUseLike()
```


---

### setUseLike

```java
public void setUseLike​(boolean useLike)
```


---

### getOptionField

```java
public String getOptionField()
```


---

### setOptionField

```java
public void setOptionField​(String optionField)
```

---

# Class CardFieldVO

> **Pacote:** `com.fluig.sdk.api.cardindex`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.cardindex.CardFieldVO
```

```java
public class CardFieldVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardFieldVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getFieldId()` |  |
| `String` | `getTableId()` |  |
| `String` | `getValue()` |  |
| `void` | `setFieldId​(String fieldId)` |  |
| `void` | `setTableId​(String tableId)` |  |
| `void` | `setValue​(String value)` |  |


---

## Detalhes dos Construtores

### CardFieldVO

```java
public CardFieldVO()
```



## Detalhes dos Métodos

### getFieldId

```java
public String getFieldId()
```


---

### setFieldId

```java
public void setFieldId​(String fieldId)
```


---

### getValue

```java
public String getValue()
```


---

### setValue

```java
public void setValue​(String value)
```


---

### getTableId

```java
public String getTableId()
```


---

### setTableId

```java
public void setTableId​(String tableId)
```

---

# Class CardFindFieldVO

> **Pacote:** `com.fluig.sdk.api.cardindex`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.cardindex.CardFindFieldVO
```

```java
public class CardFindFieldVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardFindFieldVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Integer` | `getCardId()` |  |
| `List<CardChildrenVO>` | `getChildren()` |  |
| `long` | `getCompanyId()` |  |
| `Integer` | `getParentDocumentId()` |  |
| `static long` | `getSerialVersionUID()` |  |
| `List<CardFieldVO>` | `getValues()` |  |
| `int` | `getVersion()` |  |
| `boolean` | `isActiveVersion()` |  |
| `void` | `setActiveVersion​(boolean activeVersion)` |  |
| `void` | `setCardId​(Integer cardId)` |  |
| `void` | `setChildren​(List<CardChildrenVO> children)` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` |  |
| `void` | `setValues​(List<CardFieldVO> values)` |  |
| `void` | `setVersion​(int version)` |  |


---

## Detalhes dos Construtores

### CardFindFieldVO

```java
public CardFindFieldVO()
```



## Detalhes dos Métodos

### getCardId

```java
public Integer getCardId()
```


---

### setCardId

```java
public void setCardId​(Integer cardId)
```


---

### getVersion

```java
public int getVersion()
```


---

### setVersion

```java
public void setVersion​(int version)
```


---

### getCompanyId

```java
public long getCompanyId()
```


---

### setCompanyId

```java
public void setCompanyId​(long companyId)
```


---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```


---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```


---

### isActiveVersion

```java
public boolean isActiveVersion()
```


---

### setActiveVersion

```java
public void setActiveVersion​(boolean activeVersion)
```


---

### getValues

```java
public List<CardFieldVO> getValues()
```


---

### setValues

```java
public void setValues​(List<CardFieldVO> values)
```


---

### getSerialVersionUID

```java
public static long getSerialVersionUID()
```


---

### getChildren

```java
public List<CardChildrenVO> getChildren()
```


---

### setChildren

```java
public void setChildren​(List<CardChildrenVO> children)
```

---

# Class CardIndexFindAPIVO

> **Pacote:** `com.fluig.sdk.api.cardindex`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardIndexFindAPIVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardIndexFindAPIVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.cardindex.CardIndexFindAPIVO
```

```java
public class CardIndexFindAPIVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `protected String` | `additionalComments` |  |
| `protected List<AttachmentVO>` | `attachments` |  |
| `protected String` | `cardDescription` |  |
| `protected String` | `colleagueId` |  |
| `protected Date` | `createDate` |  |
| `protected long` | `createDateInMilliseconds` |  |
| `protected String` | `documentDescription` |  |
| `protected Integer` | `documentPropertyNumber` |  |
| `protected Integer` | `documentPropertyVersion` |  |
| `protected String` | `documentTypeId` |  |
| `protected Date` | `lastModifiedDate` |  |
| `protected Integer` | `parentDocumentId` |  |
| `protected String` | `phisicalFile` |  |
| `protected String` | `publisherId` |  |
| `protected String` | `publisherName` |  |


## Construtores

| Nome | Descrição |
| --- | --- |
| `CardIndexFindAPIVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAdditionalComments()` |  |
| `List<AttachmentVO>` | `getAttachments()` |  |
| `String` | `getCardDescription()` |  |
| `String` | `getColleagueId()` |  |
| `long` | `getCompanyId()` |  |
| `Date` | `getCreateDate()` |  |
| `long` | `getCreateDateInMilliseconds()` |  |
| `String` | `getDatasetName()` |  |
| `String` | `getDocumentDescription()` |  |
| `Integer` | `getDocumentId()` |  |
| `Integer` | `getDocumentPropertyNumber()` |  |
| `Integer` | `getDocumentPropertyVersion()` |  |
| `String` | `getDocumentTypeId()` |  |
| `Date` | `getLastModifiedDate()` |  |
| `Integer` | `getParentDocumentId()` |  |
| `String` | `getPhisicalFile()` |  |
| `Float` | `getPhisicalFileSize()` |  |
| `String` | `getPublisherId()` |  |
| `String` | `getPublisherName()` |  |
| `int` | `getVersion()` |  |
| `void` | `setAdditionalComments​(String additionalComments)` |  |
| `void` | `setAttachments​(List<AttachmentVO> attachments)` |  |
| `void` | `setCardDescription​(String cardDescription)` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setCreateDate​(Date createDate)` |  |
| `void` | `setCreateDateInMilliseconds​(long createDateInMilliseconds)` |  |
| `void` | `setDatasetName​(String datasetName)` |  |
| `void` | `setDocumentDescription​(String documentDescription)` |  |
| `void` | `setDocumentId​(Integer documentId)` |  |
| `void` | `setDocumentPropertyNumber​(Integer documentPropertyNumber)` |  |
| `void` | `setDocumentPropertyVersion​(Integer documentPropertyVersion)` |  |
| `void` | `setDocumentTypeId​(String documentTypeId)` |  |
| `void` | `setLastModifiedDate​(Date lastModifiedDate)` |  |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` |  |
| `void` | `setPhisicalFile​(String phisicalFile)` |  |
| `void` | `setPhisicalFileSize​(Float phisicalFileSize)` |  |
| `void` | `setPublisherId​(String publisherId)` |  |
| `void` | `setPublisherName​(String publisherName)` |  |
| `void` | `setVersion​(int version)` |  |


---

## Detalhes dos Campos

### documentTypeId

```java
protected String documentTypeId
```


---

### colleagueId

```java
protected String colleagueId
```


---

### documentDescription

```java
protected String documentDescription
```


---

### additionalComments

```java
protected String additionalComments
```


---

### phisicalFile

```java
protected String phisicalFile
```


---

### createDate

```java
protected Date createDate
```


---

### createDateInMilliseconds

```java
protected long createDateInMilliseconds
```


---

### lastModifiedDate

```java
protected Date lastModifiedDate
```


---

### parentDocumentId

```java
protected Integer parentDocumentId
```


---

### publisherId

```java
protected String publisherId
```


---

### publisherName

```java
protected String publisherName
```


---

### cardDescription

```java
protected String cardDescription
```


---

### documentPropertyNumber

```java
protected Integer documentPropertyNumber
```


---

### documentPropertyVersion

```java
protected Integer documentPropertyVersion
```


---

### attachments

```java
protected List<AttachmentVO> attachments
```



## Detalhes dos Construtores

### CardIndexFindAPIVO

```java
public CardIndexFindAPIVO()
```



## Detalhes dos Métodos

### getDocumentId

```java
public Integer getDocumentId()
```


---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```


---

### getVersion

```java
public int getVersion()
```


---

### setVersion

```java
public void setVersion​(int version)
```


---

### getCompanyId

```java
public long getCompanyId()
```


---

### setCompanyId

```java
public void setCompanyId​(long companyId)
```


---

### getDocumentTypeId

```java
public String getDocumentTypeId()
```


---

### setDocumentTypeId

```java
public void setDocumentTypeId​(String documentTypeId)
```


---

### getColleagueId

```java
public String getColleagueId()
```


---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```


---

### getDocumentDescription

```java
public String getDocumentDescription()
```


---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```


---

### getAdditionalComments

```java
public String getAdditionalComments()
```


---

### setAdditionalComments

```java
public void setAdditionalComments​(String additionalComments)
```


---

### getPhisicalFile

```java
public String getPhisicalFile()
```


---

### setPhisicalFile

```java
public void setPhisicalFile​(String phisicalFile)
```


---

### getCreateDate

```java
public Date getCreateDate()
```


---

### setCreateDate

```java
public void setCreateDate​(Date createDate)
```


---

### getCreateDateInMilliseconds

```java
public long getCreateDateInMilliseconds()
```


---

### setCreateDateInMilliseconds

```java
public void setCreateDateInMilliseconds​(long createDateInMilliseconds)
```


---

### getLastModifiedDate

```java
public Date getLastModifiedDate()
```


---

### setLastModifiedDate

```java
public void setLastModifiedDate​(Date lastModifiedDate)
```


---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```


---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```


---

### getPublisherId

```java
public String getPublisherId()
```


---

### setPublisherId

```java
public void setPublisherId​(String publisherId)
```


---

### getPublisherName

```java
public String getPublisherName()
```


---

### setPublisherName

```java
public void setPublisherName​(String publisherName)
```


---

### getCardDescription

```java
public String getCardDescription()
```


---

### setCardDescription

```java
public void setCardDescription​(String cardDescription)
```


---

### getDocumentPropertyNumber

```java
public Integer getDocumentPropertyNumber()
```


---

### setDocumentPropertyNumber

```java
public void setDocumentPropertyNumber​(Integer documentPropertyNumber)
```


---

### getDocumentPropertyVersion

```java
public Integer getDocumentPropertyVersion()
```


---

### setDocumentPropertyVersion

```java
public void setDocumentPropertyVersion​(Integer documentPropertyVersion)
```


---

### getDatasetName

```java
public String getDatasetName()
```


---

### setDatasetName

```java
public void setDatasetName​(String datasetName)
```


---

### getPhisicalFileSize

```java
public Float getPhisicalFileSize()
```


---

### setPhisicalFileSize

```java
public void setPhisicalFileSize​(Float phisicalFileSize)
```


---

### getAttachments

```java
public List<AttachmentVO> getAttachments()
```


---

### setAttachments

```java
public void setAttachments​(List<AttachmentVO> attachments)
```

---
