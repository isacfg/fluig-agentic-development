# Class FolderVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/FolderVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/FolderVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.FolderVO
```

```java
public class FolderVO
extends Object
implements Serializable
```

Value Object para Folder

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FolderVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAdditionalComments()` | Recupera comentário adicional |
| `Boolean` | `getApprovalAndOr()` | Recupera valor de approvalAndOr |
| `String` | `getColleagueId()` | Recupera valor do colleagueId |
| `Date` | `getCreateDate()` | Recupera valor da data de criação |
| `String` | `getDocumentDescription()` | Recupera valor de descrição do documento |
| `Integer` | `getDocumentId()` | Recupera valor do documentoId |
| `String` | `getDocumentTypeId()` | Recupera id do tipo de documento |
| `List<String>` | `getDocumentTypes()` | Recupera os tipos de documento |
| `Boolean` | `getDownloadEnabled()` | Recupera informação se download da pasta está disponível |
| `Boolean` | `getExpires()` | Informa se a pasta pode expirar |
| `Map<String,​Object>` | `getFilters()` | Recupera os filtros |
| `Integer` | `getIconId()` | Recupera valor do iconId |
| `Boolean` | `getImutable()` | Recupera boolean se pasta é imutavel |
| `Boolean` | `getInheritSecurity()` | Recupera segurança herdada |
| `Boolean` | `getInternalVisualizer()` | Recupera valor de visualizador interno |
| `String` | `getKeyWord()` | Recupera valor da palavra chave |
| `Boolean` | `getNotifyUser()` | Recupera boolean se usuário será notificado |
| `Integer` | `getParentFolderId()` | Recupera valor do id da pasta pai |
| `List<DocumentPermissionVO>` | `getPermissions()` | Recupera lista de permissões |
| `Integer` | `getPermissionType()` | Recupera tipo de permissão |
| `Boolean` | `getPrivateDocument()` | Recupera boolean se documento é privado |
| `List<DocumentApproverVO>` | `getPublisherApprovers()` | Recupera lista de publicadores aprovadores |
| `String` | `getPublisherId()` | Recupera id do publicador |
| `List<DocumentRestrictionVO>` | `getRestrictions()` | Recupera lista de restrições de documentos |
| `Integer` | `getRestrictionType()` | Recupera tipo de restrição |
| `Long` | `getTenantId()` | Recupera valor do tenantId |
| `Integer` | `getTopicId()` | Recupera id do topico |
| `Boolean` | `getUpdateIsoProperties()` | Recupera informação se update de iso properties é permitido |
| `Integer` | `getVersion()` | Recupera valor da versão |
| `String` | `getVersionDescription()` | Recupera valor da descrição da versão |
| `String` | `getVolumeId()` | Recupera id do volume |
| `void` | `setAdditionalComments​(String additionalComments)` | Atribui valor para comentário adicional |
| `void` | `setApprovalAndOr​(Boolean approvalAndOr)` | Atribui valor para approvalAndOr |
| `void` | `setColleagueId​(String colleagueId)` | Atribui valor para colleagueId |
| `void` | `setCreateDate​(Date createDate)` | Atribui valor a data de criação |
| `void` | `setDocumentDescription​(String documentDescription)` | Atribui valor para descrição do documento |
| `void` | `setDocumentId​(Integer documentId)` | Atribui valor para documentId |
| `void` | `setDocumentTypeId​(String documentTypeId)` | Atribui valor para documentTypeId |
| `void` | `setDocumentTypes​(List<String> documentTypes)` | Atribui tipo de documentos |
| `void` | `setDownloadEnabled​(Boolean downloadEnabled)` | Atribui valor para informação se  download de pasta está disponível |
| `void` | `setExpires​(Boolean expires)` | Atribui valor para informar se a pasta pode expirar |
| `void` | `setFilters​(Map<String,​Object> filters)` | Atribui filtros |
| `void` | `setIconId​(Integer iconId)` | Atribui valor para iconId |
| `void` | `setImutable​(Boolean imutable)` | Atribui boolean se pasta será imutavel |
| `void` | `setInheritSecurity​(Boolean inheritSecurity)` | Atribui valor para segurança herdada |
| `void` | `setInternalVisualizer​(Boolean internalVisualizer)` | Atribui boolean se pasta possui visualizador interno |
| `void` | `setKeyWord​(String keyWord)` | Configura valor da palavra chave |
| `void` | `setNotifyUser​(Boolean notifyUser)` | Atribui boolean se usuário será notificado |
| `void` | `setParentFolderId​(Integer parentFolderId)` | Atribui valor para id da pasta pai |
| `void` | `setPermissions​(List<DocumentPermissionVO> permissions)` | Atribui valor para lista de permissões |
| `void` | `setPermissionType​(Integer permissionType)` | Atribui valor ao tipo de permissão |
| `void` | `setPrivateDocument​(Boolean privateDocument)` | Atribui boolean se documento é privado |
| `void` | `setPublisherApprovers​(List<DocumentApproverVO> publisherApprovers)` | Atribui valor para publicadores aprovadores |
| `void` | `setPublisherId​(String publisherId)` | Atribui valor para id do publicador |
| `void` | `setRestrictions​(List<DocumentRestrictionVO> restrictions)` | Atribui valor para lista de restrições de documentos |
| `void` | `setRestrictionType​(Integer restrictionType)` | Atribui valor para tipo de restrição |
| `void` | `setTenantId​(Long tenantId)` | Atribui valor para tenantId |
| `void` | `setTopicId​(Integer topicId)` | Atribui valor para topicId |
| `void` | `setUpdateIsoProperties​(Boolean updateIsoProperties)` | Atribui permitir atualização de iso properties |
| `void` | `setVersion​(Integer version)` | Atribui valor para versão |
| `void` | `setVersionDescription​(String versionDescription)` | Atribui valor para descrição da versão |
| `void` | `setVolumeId​(String volumeId)` | Atribui valor do id do volume |


---

## Detalhes dos Construtores

### FolderVO

```java
public FolderVO()
```



## Detalhes dos Métodos

### getTenantId

```java
public Long getTenantId()
```

Recupera valor do tenantId

- **Returns:** Long

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

Recupera valor do documentoId

- **Returns:** Integer

---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```

Atribui valor para documentId

- **Parameters:** `documentId` -

---

### getVersion

```java
public Integer getVersion()
```

Recupera valor da versão

- **Returns:** Integer

---

### setVersion

```java
public void setVersion​(Integer version)
```

Atribui valor para versão

- **Parameters:** `version` -

---

### getIconId

```java
public Integer getIconId()
```

Recupera valor do iconId

- **Returns:** Integer

---

### setIconId

```java
public void setIconId​(Integer iconId)
```

Atribui valor para iconId

- **Parameters:** `iconId` -

---

### getColleagueId

```java
public String getColleagueId()
```

Recupera valor do colleagueId

- **Returns:** Strubg

---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```

Atribui valor para colleagueId

- **Parameters:** `colleagueId` -

---

### getDocumentDescription

```java
public String getDocumentDescription()
```

Recupera valor de descrição do documento

- **Returns:** String

---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```

Atribui valor para descrição do documento

- **Parameters:** `documentDescription` -

---

### getKeyWord

```java
public String getKeyWord()
```

Recupera valor da palavra chave

- **Returns:** String

---

### setKeyWord

```java
public void setKeyWord​(String keyWord)
```

Configura valor da palavra chave

- **Parameters:** `keyWord` -

---

### getCreateDate

```java
public Date getCreateDate()
```

Recupera valor da data de criação

- **Returns:** Date

---

### setCreateDate

```java
public void setCreateDate​(Date createDate)
```

Atribui valor a data de criação

- **Parameters:** `createDate` -

---

### getParentFolderId

```java
public Integer getParentFolderId()
```

Recupera valor do id da pasta pai

- **Returns:** Integer

---

### setParentFolderId

```java
public void setParentFolderId​(Integer parentFolderId)
```

Atribui valor para id da pasta pai

- **Parameters:** `parentFolderId` -

---

### getPublisherId

```java
public String getPublisherId()
```

Recupera id do publicador

- **Returns:** String

---

### setPublisherId

```java
public void setPublisherId​(String publisherId)
```

Atribui valor para id do publicador

- **Parameters:** `publisherId` -

---

### getVolumeId

```java
public String getVolumeId()
```

Recupera id do volume

- **Returns:** String

---

### setVolumeId

```java
public void setVolumeId​(String volumeId)
```

Atribui valor do id do volume

- **Parameters:** `volumeId` -

---

### getPermissionType

```java
public Integer getPermissionType()
```

Recupera tipo de permissão

- **Returns:** Integer

---

### setPermissionType

```java
public void setPermissionType​(Integer permissionType)
```

Atribui valor ao tipo de permissão

- **Parameters:** `permissionType` -

---

### getRestrictionType

```java
public Integer getRestrictionType()
```

Recupera tipo de restrição

- **Returns:** Integer

---

### setRestrictionType

```java
public void setRestrictionType​(Integer restrictionType)
```

Atribui valor para tipo de restrição

- **Parameters:** `restrictionType` -

---

### getInheritSecurity

```java
public Boolean getInheritSecurity()
```

Recupera segurança herdada

- **Returns:** Boolean

---

### setInheritSecurity

```java
public void setInheritSecurity​(Boolean inheritSecurity)
```

Atribui valor para segurança herdada

- **Parameters:** `inheritSecurity` -

---

### getPermissions

```java
public List<DocumentPermissionVO> getPermissions()
```

Recupera lista de permissões

- **Returns:** List

---

### setPermissions

```java
public void setPermissions​(List<DocumentPermissionVO> permissions)
```

Atribui valor para lista de permissões

- **Parameters:** `permissions` -

---

### getRestrictions

```java
public List<DocumentRestrictionVO> getRestrictions()
```

Recupera lista de restrições de documentos

- **Returns:** List

---

### setRestrictions

```java
public void setRestrictions​(List<DocumentRestrictionVO> restrictions)
```

Atribui valor para lista de restrições de documentos

- **Parameters:** `restrictions` -

---

### getPublisherApprovers

```java
public List<DocumentApproverVO> getPublisherApprovers()
```

Recupera lista de publicadores aprovadores

- **Returns:** List

---

### setPublisherApprovers

```java
public void setPublisherApprovers​(List<DocumentApproverVO> publisherApprovers)
```

Atribui valor para publicadores aprovadores

- **Parameters:** `publisherApprovers` -

---

### getAdditionalComments

```java
public String getAdditionalComments()
```

Recupera comentário adicional

- **Returns:** String

---

### setAdditionalComments

```java
public void setAdditionalComments​(String additionalComments)
```

Atribui valor para comentário adicional

- **Parameters:** `additionalComments` -

---

### getVersionDescription

```java
public String getVersionDescription()
```

Recupera valor da descrição da versão

- **Returns:** String

---

### setVersionDescription

```java
public void setVersionDescription​(String versionDescription)
```

Atribui valor para descrição da versão

- **Parameters:** `versionDescription` -

---

### getExpires

```java
public Boolean getExpires()
```

Informa se a pasta pode expirar

- **Returns:** Boolean

---

### setExpires

```java
public void setExpires​(Boolean expires)
```

Atribui valor para informar se a pasta pode expirar

- **Parameters:** `expires` -

---

### getTopicId

```java
public Integer getTopicId()
```

Recupera id do topico

- **Returns:** Integer

---

### setTopicId

```java
public void setTopicId​(Integer topicId)
```

Atribui valor para topicId

- **Parameters:** `topicId` -

---

### getApprovalAndOr

```java
public Boolean getApprovalAndOr()
```

Recupera valor de approvalAndOr

- **Returns:** Boolean

---

### setApprovalAndOr

```java
public void setApprovalAndOr​(Boolean approvalAndOr)
```

Atribui valor para approvalAndOr

- **Parameters:** `approvalAndOr` -

---

### getDownloadEnabled

```java
public Boolean getDownloadEnabled()
```

Recupera informação se download da pasta está disponível

- **Returns:** Boolean

---

### setDownloadEnabled

```java
public void setDownloadEnabled​(Boolean downloadEnabled)
```

Atribui valor para informação se download de pasta está disponível

- **Parameters:** `downloadEnabled` -

---

### getUpdateIsoProperties

```java
public Boolean getUpdateIsoProperties()
```

Recupera informação se update de iso properties é permitido

- **Returns:** Boolean updateIsoProperties

---

### setUpdateIsoProperties

```java
public void setUpdateIsoProperties​(Boolean updateIsoProperties)
```

Atribui permitir atualização de iso properties

- **Parameters:** `updateIsoProperties` -

---

### getDocumentTypeId

```java
public String getDocumentTypeId()
```

Recupera id do tipo de documento

- **Returns:** String

---

### setDocumentTypeId

```java
public void setDocumentTypeId​(String documentTypeId)
```

Atribui valor para documentTypeId

- **Parameters:** `documentTypeId` -

---

### getNotifyUser

```java
public Boolean getNotifyUser()
```

Recupera boolean se usuário será notificado

- **Returns:** Boolean

---

### setNotifyUser

```java
public void setNotifyUser​(Boolean notifyUser)
```

Atribui boolean se usuário será notificado

- **Parameters:** `notifyUser` -

---

### getImutable

```java
public Boolean getImutable()
```

Recupera boolean se pasta é imutavel

- **Returns:** Boolean

---

### setImutable

```java
public void setImutable​(Boolean imutable)
```

Atribui boolean se pasta será imutavel

- **Parameters:** `imutable` -

---

### getInternalVisualizer

```java
public Boolean getInternalVisualizer()
```

Recupera valor de visualizador interno

- **Returns:** Boolean

---

### setInternalVisualizer

```java
public void setInternalVisualizer​(Boolean internalVisualizer)
```

Atribui boolean se pasta possui visualizador interno

- **Parameters:** `internalVisualizer` -

---

### getPrivateDocument

```java
public Boolean getPrivateDocument()
```

Recupera boolean se documento é privado

- **Returns:** Boolean

---

### setPrivateDocument

```java
public void setPrivateDocument​(Boolean privateDocument)
```

Atribui boolean se documento é privado

- **Parameters:** `privateDocument` -

---

### getDocumentTypes

```java
public List<String> getDocumentTypes()
```

Recupera os tipos de documento

- **Returns:** List

---

### setDocumentTypes

```java
public void setDocumentTypes​(List<String> documentTypes)
```

Atribui tipo de documentos

- **Parameters:** `documentTypes` -

---

### getFilters

```java
public Map<String,​Object> getFilters()
```

Recupera os filtros

- **Returns:** Map

---

### setFilters

```java
public void setFilters​(Map<String,​Object> filters)
```

Atribui filtros

- **Parameters:** `filters` -

