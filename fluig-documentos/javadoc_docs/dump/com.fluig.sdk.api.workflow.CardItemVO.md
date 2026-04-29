# Class CardItemVO

> **Pacote:** `com.fluig.sdk.api.workflow`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardItemVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardItemVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.workflow.CardItemVO
```

```java
public class CardItemVO
extends Object
implements Serializable
```

Value Object para CardItem

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CardItemVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAdditionalComments()` | Recupera valor do additionalComments |
| `List<AttachmentVO>` | `getAttachments()` | Recupera valor do attachments |
| `String` | `getColleagueId()` | Recupera valor do colleagueId |
| `String` | `getDocumentDescription()` | Recupera valor do documentDescription |
| `Integer` | `getDocumentId()` | Recupera valor do documentId |
| `String` | `getDocumentType()` | Recupera valor do documentType |
| `String` | `getDocumentTypeId()` | Recupera valor do documentTypeId |
| `Boolean` | `getDownloadEnabled()` | Recupera valor do downloadEnabled |
| `Date` | `getExpirationDate()` | Recupera valor do expirationDate |
| `Boolean` | `getExpires()` | Recupera valor do expires |
| `List<Map<String,​String>>` | `getFormData()` | Recupera valor do formData |
| `Integer` | `getIconId()` | Recupera valor do iconId |
| `Boolean` | `getImutable()` | Recupera valor do imutable |
| `Boolean` | `getInheritSecurity()` | Recupera valor do inheritSecurity |
| `Boolean` | `getInternalVisualizer()` | Recupera valor do internalVisualizer |
| `String` | `getKeyWord()` | Recupera valor do keyWord |
| `String` | `getLanguageId()` | Recupera valor do languageId |
| `Integer` | `getMetaListId()` | Recupera valor do metaListId |
| `Integer` | `getNotificationDays()` | Recupera valor do notificationDays |
| `Integer` | `getParentDocumentId()` | Recupera valor do parentDocumentId |
| `List<DocumentPermissionVO>` | `getPermissions()` | Recupera valor do permissions |
| `Integer` | `getPermissionType()` | Recupera valor do permissionType |
| `Boolean` | `getPrivateDocument()` | Recupera valor do privateDocument |
| `List<DocumentApproverVO>` | `getPublisherApprovers()` | Recupera valor do publisherApprovers |
| `List<RelatedDocumentVO>` | `getRelatedDocuments()` | Recupera valor do relatedDocuments |
| `List<DocumentRestrictionVO>` | `getRestrictions()` | Recupera valor do restrictions |
| `Integer` | `getRestrictionType()` | Recupera valor do restrictionType |
| `Long` | `getTenantId()` | Recupera valor do tenantId |
| `Integer` | `getTopicId()` | Recupera valor do topicId |
| `Boolean` | `getUpdateIsoProperties()` | Recupera valor do updateIsoProperties |
| `Boolean` | `getUserNotify()` | Recupera valor do userNotify |
| `Date` | `getValidationStartDate()` | Recupera valor do validationStartDate |
| `Integer` | `getVersion()` | Recupera valor do version |
| `String` | `getVersionDescription()` | Recupera valor do versionDescription |
| `String` | `getVersionOption()` | Recupera valor do versionOption |
| `void` | `setAdditionalComments​(String additionalComments)` | Atribui valor para additionalComments |
| `void` | `setAttachments​(List<AttachmentVO> attachments)` | Atribui valor para attachments |
| `void` | `setColleagueId​(String colleagueId)` | Atribui valor para colleagueId |
| `void` | `setDocumentDescription​(String documentDescription)` | Atribui valor para documentDescription |
| `void` | `setDocumentId​(Integer documentId)` | Atribui valor para documentId |
| `void` | `setDocumentType​(String documentType)` | Atribui valor para documentType |
| `void` | `setDocumentTypeId​(String documentTypeId)` | Atribui valor para documentTypeId |
| `void` | `setDownloadEnabled​(Boolean downloadEnabled)` | Atribui valor para downloadEnabled |
| `void` | `setExpirationDate​(Date expirationDate)` | Atribui valor para expirationDate |
| `void` | `setExpires​(Boolean expires)` | Atribui valor para expires |
| `void` | `setFormData​(List<Map<String,​String>> formData)` | Atribui valor para formData |
| `void` | `setIconId​(Integer iconId)` | Atribui valor para iconId |
| `void` | `setImutable​(Boolean imutable)` | Atribui valor para imutable |
| `void` | `setInheritSecurity​(Boolean inheritSecurity)` | Atribui valor para inheritSecurity |
| `void` | `setInternalVisualizer​(Boolean internalVisualizer)` | Atribui valor para internalVisualizer |
| `void` | `setKeyWord​(String keyWord)` | Atribui valor para keyWord |
| `void` | `setLanguageId​(String languageId)` | Atribui valor para languageId |
| `void` | `setMetaListId​(Integer metaListId)` | Atribui valor para metaListId |
| `void` | `setNotificationDays​(Integer notificationDays)` | Atribui valor para notificationDays |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` | Atribui valor para parentDocumentId |
| `void` | `setPermissions​(List<DocumentPermissionVO> permissions)` | Atribui valor para permissions |
| `void` | `setPermissionType​(Integer permissionType)` | Atribui valor para permissionType |
| `void` | `setPrivateDocument​(Boolean privateDocument)` | Atribui valor para privateDocument |
| `void` | `setPublisherApprovers​(List<DocumentApproverVO> publisherApprovers)` | Atribui valor para publisherApprovers |
| `void` | `setRelatedDocuments​(List<RelatedDocumentVO> relatedDocuments)` | Atribui valor para relatedDocuments |
| `void` | `setRestrictions​(List<DocumentRestrictionVO> restrictions)` | Atribui valor para restrictions |
| `void` | `setRestrictionType​(Integer restrictionType)` | Atribui valor para restrictionType |
| `void` | `setTenantId​(Long tenantId)` | Atribui valor para tenantId |
| `void` | `setTopicId​(Integer topicId)` | Atribui valor para topicId |
| `void` | `setUpdateIsoProperties​(Boolean updateIsoProperties)` | Atribui valor para updateIsoProperties |
| `void` | `setUserNotify​(Boolean userNotify)` | Atribui valor para userNotify |
| `void` | `setValidationStartDate​(Date validationStartDate)` | Atribui valor para validationStartDate |
| `void` | `setVersion​(Integer version)` | Atribui valor para version |
| `void` | `setVersionDescription​(String versionDescription)` | Atribui valor para versionDescription |
| `void` | `setVersionOption​(String versionOption)` | Atribui valor para versionOption |


---

## Detalhes dos Construtores

### CardItemVO

```java
public CardItemVO()
```



## Detalhes dos Métodos

### getDocumentId

```java
public Integer getDocumentId()
```

Recupera valor do documentId

- **Returns:** the documentId

---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```

Atribui valor para documentId

- **Parameters:** `documentId` - the documentId to set

---

### getDocumentDescription

```java
public String getDocumentDescription()
```

Recupera valor do documentDescription

- **Returns:** the documentDescription

---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```

Atribui valor para documentDescription

- **Parameters:** `documentDescription` - the documentDescription to set

---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```

Recupera valor do parentDocumentId

- **Returns:** the parentDocumentId

---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```

Atribui valor para parentDocumentId

- **Parameters:** `parentDocumentId` - the parentDocumentId to set

---

### getPrivateDocument

```java
public Boolean getPrivateDocument()
```

Recupera valor do privateDocument

- **Returns:** the privateDocument

---

### setPrivateDocument

```java
public void setPrivateDocument​(Boolean privateDocument)
```

Atribui valor para privateDocument

- **Parameters:** `privateDocument` - the privateDocument to set

---

### getTenantId

```java
public Long getTenantId()
```

Recupera valor do tenantId

- **Returns:** the tenantId

---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```

Atribui valor para tenantId

- **Parameters:** `tenantId` - the tenantId to set

---

### getVersion

```java
public Integer getVersion()
```

Recupera valor do version

- **Returns:** the version

---

### setVersion

```java
public void setVersion​(Integer version)
```

Atribui valor para version

- **Parameters:** `version` - the version to set

---

### getMetaListId

```java
public Integer getMetaListId()
```

Recupera valor do metaListId

- **Returns:** the metaListId

---

### setMetaListId

```java
public void setMetaListId​(Integer metaListId)
```

Atribui valor para metaListId

- **Parameters:** `metaListId` - the metaListId to set

---

### getInheritSecurity

```java
public Boolean getInheritSecurity()
```

Recupera valor do inheritSecurity

- **Returns:** the inheritSecurity

---

### setInheritSecurity

```java
public void setInheritSecurity​(Boolean inheritSecurity)
```

Atribui valor para inheritSecurity

- **Parameters:** `inheritSecurity` - the inheritSecurity to set

---

### getPermissionType

```java
public Integer getPermissionType()
```

Recupera valor do permissionType

- **Returns:** the permissionType

---

### setPermissionType

```java
public void setPermissionType​(Integer permissionType)
```

Atribui valor para permissionType

- **Parameters:** `permissionType` - the permissionType to set

---

### getRestrictionType

```java
public Integer getRestrictionType()
```

Recupera valor do restrictionType

- **Returns:** the restrictionType

---

### setRestrictionType

```java
public void setRestrictionType​(Integer restrictionType)
```

Atribui valor para restrictionType

- **Parameters:** `restrictionType` - the restrictionType to set

---

### getUserNotify

```java
public Boolean getUserNotify()
```

Recupera valor do userNotify

- **Returns:** the userNotify

---

### setUserNotify

```java
public void setUserNotify​(Boolean userNotify)
```

Atribui valor para userNotify

- **Parameters:** `userNotify` - the userNotify to set

---

### getColleagueId

```java
public String getColleagueId()
```

Recupera valor do colleagueId

- **Returns:** the colleagueId

---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```

Atribui valor para colleagueId

- **Parameters:** `colleagueId` - the colleagueId to set

---

### getAdditionalComments

```java
public String getAdditionalComments()
```

Recupera valor do additionalComments

- **Returns:** the additionalComments

---

### setAdditionalComments

```java
public void setAdditionalComments​(String additionalComments)
```

Atribui valor para additionalComments

- **Parameters:** `additionalComments` - the additionalComments to set

---

### getKeyWord

```java
public String getKeyWord()
```

Recupera valor do keyWord

- **Returns:** the keyWord

---

### setKeyWord

```java
public void setKeyWord​(String keyWord)
```

Atribui valor para keyWord

- **Parameters:** `keyWord` - the keyWord to set

---

### getVersionDescription

```java
public String getVersionDescription()
```

Recupera valor do versionDescription

- **Returns:** the versionDescription

---

### setVersionDescription

```java
public void setVersionDescription​(String versionDescription)
```

Atribui valor para versionDescription

- **Parameters:** `versionDescription` - the versionDescription to set

---

### getVersionOption

```java
public String getVersionOption()
```

Recupera valor do versionOption

- **Returns:** the versionOption

---

### setVersionOption

```java
public void setVersionOption​(String versionOption)
```

Atribui valor para versionOption

- **Parameters:** `versionOption` - the versionOption to set

---

### getExpires

```java
public Boolean getExpires()
```

Recupera valor do expires

- **Returns:** the expires

---

### setExpires

```java
public void setExpires​(Boolean expires)
```

Atribui valor para expires

- **Parameters:** `expires` - the expires to set

---

### getTopicId

```java
public Integer getTopicId()
```

Recupera valor do topicId

- **Returns:** the topicId

---

### setTopicId

```java
public void setTopicId​(Integer topicId)
```

Atribui valor para topicId

- **Parameters:** `topicId` - the topicId to set

---

### getIconId

```java
public Integer getIconId()
```

Recupera valor do iconId

- **Returns:** the iconId

---

### setIconId

```java
public void setIconId​(Integer iconId)
```

Atribui valor para iconId

- **Parameters:** `iconId` - the iconId to set

---

### getImutable

```java
public Boolean getImutable()
```

Recupera valor do imutable

- **Returns:** the imutable

---

### setImutable

```java
public void setImutable​(Boolean imutable)
```

Atribui valor para imutable

- **Parameters:** `imutable` - the imutable to set

---

### getLanguageId

```java
public String getLanguageId()
```

Recupera valor do languageId

- **Returns:** the languageId

---

### setLanguageId

```java
public void setLanguageId​(String languageId)
```

Atribui valor para languageId

- **Parameters:** `languageId` - the languageId to set

---

### getInternalVisualizer

```java
public Boolean getInternalVisualizer()
```

Recupera valor do internalVisualizer

- **Returns:** the internalVisualizer

---

### setInternalVisualizer

```java
public void setInternalVisualizer​(Boolean internalVisualizer)
```

Atribui valor para internalVisualizer

- **Parameters:** `internalVisualizer` - the internalVisualizer to set

---

### getDownloadEnabled

```java
public Boolean getDownloadEnabled()
```

Recupera valor do downloadEnabled

- **Returns:** the downloadEnabled

---

### setDownloadEnabled

```java
public void setDownloadEnabled​(Boolean downloadEnabled)
```

Atribui valor para downloadEnabled

- **Parameters:** `downloadEnabled` - the downloadEnabled to set

---

### getUpdateIsoProperties

```java
public Boolean getUpdateIsoProperties()
```

Recupera valor do updateIsoProperties

- **Returns:** the updateIsoProperties

---

### setUpdateIsoProperties

```java
public void setUpdateIsoProperties​(Boolean updateIsoProperties)
```

Atribui valor para updateIsoProperties

- **Parameters:** `updateIsoProperties` - the updateIsoProperties to set

---

### getDocumentTypeId

```java
public String getDocumentTypeId()
```

Recupera valor do documentTypeId

- **Returns:** the documentTypeId

---

### setDocumentTypeId

```java
public void setDocumentTypeId​(String documentTypeId)
```

Atribui valor para documentTypeId

- **Parameters:** `documentTypeId` - the documentTypeId to set

---

### getNotificationDays

```java
public Integer getNotificationDays()
```

Recupera valor do notificationDays

- **Returns:** the notificationDays

---

### setNotificationDays

```java
public void setNotificationDays​(Integer notificationDays)
```

Atribui valor para notificationDays

- **Parameters:** `notificationDays` - the notificationDays to set

---

### getValidationStartDate

```java
public Date getValidationStartDate()
```

Recupera valor do validationStartDate

- **Returns:** the validationStartDate

---

### setValidationStartDate

```java
public void setValidationStartDate​(Date validationStartDate)
```

Atribui valor para validationStartDate

- **Parameters:** `validationStartDate` - the validationStartDate to set

---

### getExpirationDate

```java
public Date getExpirationDate()
```

Recupera valor do expirationDate

- **Returns:** the expirationDate

---

### setExpirationDate

```java
public void setExpirationDate​(Date expirationDate)
```

Atribui valor para expirationDate

- **Parameters:** `expirationDate` - the expirationDate to set

---

### getDocumentType

```java
public String getDocumentType()
```

Recupera valor do documentType

- **Returns:** the documentType

---

### setDocumentType

```java
public void setDocumentType​(String documentType)
```

Atribui valor para documentType

- **Parameters:** `documentType` - the documentType to set

---

### getPermissions

```java
public List<DocumentPermissionVO> getPermissions()
```

Recupera valor do permissions

- **Returns:** the permissions

---

### setPermissions

```java
public void setPermissions​(List<DocumentPermissionVO> permissions)
```

Atribui valor para permissions

- **Parameters:** `permissions` - the permissions to set

---

### getRestrictions

```java
public List<DocumentRestrictionVO> getRestrictions()
```

Recupera valor do restrictions

- **Returns:** the restrictions

---

### setRestrictions

```java
public void setRestrictions​(List<DocumentRestrictionVO> restrictions)
```

Atribui valor para restrictions

- **Parameters:** `restrictions` - the restrictions to set

---

### getPublisherApprovers

```java
public List<DocumentApproverVO> getPublisherApprovers()
```

Recupera valor do publisherApprovers

- **Returns:** the publisherApprovers

---

### setPublisherApprovers

```java
public void setPublisherApprovers​(List<DocumentApproverVO> publisherApprovers)
```

Atribui valor para publisherApprovers

- **Parameters:** `publisherApprovers` - the publisherApprovers to set

---

### getRelatedDocuments

```java
public List<RelatedDocumentVO> getRelatedDocuments()
```

Recupera valor do relatedDocuments

- **Returns:** the relatedDocuments

---

### setRelatedDocuments

```java
public void setRelatedDocuments​(List<RelatedDocumentVO> relatedDocuments)
```

Atribui valor para relatedDocuments

- **Parameters:** `relatedDocuments` - the relatedDocuments to set

---

### getAttachments

```java
public List<AttachmentVO> getAttachments()
```

Recupera valor do attachments

- **Returns:** the attachments

---

### setAttachments

```java
public void setAttachments​(List<AttachmentVO> attachments)
```

Atribui valor para attachments

- **Parameters:** `attachments` - the attachments to set

---

### getFormData

```java
public List<Map<String,​String>> getFormData()
```

Recupera valor do formData

- **Returns:** the formData

---

### setFormData

```java
public void setFormData​(List<Map<String,​String>> formData)
```

Atribui valor para formData

- **Parameters:** `formData` - the formData to set

