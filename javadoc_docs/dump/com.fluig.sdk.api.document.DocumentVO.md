# Class DocumentVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentVO
```

```java
public class DocumentVO
extends Object
implements Serializable
```

Value Object para Documento

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `protected static String` | `EXTATTR_additionalComments` | Chave para informar se documento possui comentário adicional extra |
| `protected static String` | `EXTATTR_colleagueName` | Chave para informar se documento possui nome de colega extra |
| `protected static String` | `EXTATTR_iconPath` | Chave para informar se documento possui caminho de icone extra |
| `protected static String` | `EXTATTR_metaListId` | Chave para informar se documento possui meta lista id extra |
| `protected static String` | `EXTATTR_metaListRecordId` | Chave para informar se documento possui registro extra de meta list |
| `protected static String` | `EXTATTR_publisherName` | Chave para informar se documento possui nome de publicador extra |
| `protected static String` | `EXTATTR_rowId` | Chave para informar se documento possui row id extra |
| `protected static String` | `EXTATTR_versionOption` | Chave para informar se documento possui versão opcional extra |


## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentVO()` | Nova instância de documento |
| `DocumentVO​(Long tenantId, Integer documentId, Integer version)` | Nova instância de documento utilizando a versão, id do tenant e id do documento |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Integer` | `getAccessCount()` | Recupera número de acessso |
| `Boolean` | `getActiveVersion()` | Recupera versão ativa |
| `String` | `getAdditionalComments()` | Recupera o valor do comentário nas informações extras |
| `Boolean` | `getAllowMuiltiCardsPerUser()` | Recupera valor, se documento permite mult card por usuário |
| `Boolean` | `getApprovalAndOr()` | Recupera condição aprovalAndOr |
| `Boolean` | `getApproved()` | Recupera valor, se documento está aprovado |
| `Date` | `getApprovedDate()` | Recupera valor da data de aprovação |
| `Integer` | `getAtualizationId()` | Recupera id de atualização |
| `String` | `getCardDescription()` | Recupera descrição do card |
| `String` | `getColleagueId()` | Recupera id do colega |
| `Long` | `getCrc()` | Recupera valor do crc |
| `Date` | `getCreateDate()` | Recupera valor para data de criação |
| `Boolean` | `getDeleted()` | Recupera valor, se documento foi deletado |
| `String` | `getDocumentDescription()` | Recupera descrição do documento |
| `Integer` | `getDocumentId()` | Recupera valor do document Id |
| `Integer` | `getDocumentPropertyNumber()` | Recupera número de propriedade do documento |
| `Integer` | `getDocumentPropertyVersion()` | Recupera versão do documento |
| `String` | `getDocumentType()` | Recupera valor do tipo de documento |
| `String` | `getDocumentTypeId()` | Recupera valor do id do tipo de documento |
| `Boolean` | `getDownloadEnabled()` | Recupera valor, se download é habilitado |
| `Boolean` | `getDraft()` | Recupera valor de draft |
| `Date` | `getExpirationDate()` | Recupera data de expiração |
| `Boolean` | `getExpires()` | Recupera valor, se documento expira |
| `protected HashMap<String,​Object>` | `getExtData()` | Recupera os dados extras |
| `String` | `getExternalDocumentId()` | Recupera id documento externo |
| `Object` | `getExtraData​(String key)` | Recupera os dados extras |
| `Integer` | `getIconId()` | Recupera id do icone |
| `String` | `getIconPath()` | Recupera valor do path do icon |
| `Boolean` | `getImutable()` | Recupera valor, se documento é imultavel |
| `Boolean` | `getIndexed()` | Recupera valor, se documento é indexado |
| `Boolean` | `getInheritSecurity()` | Retorna se o documento herda as propriedades do parent |
| `Boolean` | `getInternalVisualizer()` | Recupera valor, se documento  pode ser visualizado internamente. |
| `String` | `getKeyWord()` | Recupera valor de palavra chave |
| `String` | `getLanguageId()` | Recupera id da linguagem |
| `Date` | `getLastModifiedDate()` | Recupera valor da última data de moficação |
| `String` | `getLastModifiedTime()` | Recupera última data de modificação |
| `Boolean` | `getOnCheckout()` | Recupera valor, se documento está em checkout |
| `Integer` | `getParentDocumentId()` | Recupera id do pai do documento |
| `Integer` | `getPermissionType()` | Recupera o tipo de permissão |
| `String` | `getPhisicalFile()` | Recupera arquivo fisico |
| `Float` | `getPhisicalFileSize()` | Recupera valor do tamanho do arquivo fisico |
| `Integer` | `getPriority()` | Recupera prioridade |
| `String` | `getPrivateColleagueId()` | Recupera valor id privado do colega |
| `Boolean` | `getPrivateDocument()` | Recupera valor, se documento é privado |
| `String` | `getPublisherId()` | Recupera id do publicador |
| `String` | `getRelatedFiles()` | Recuprea arquivos relacionados |
| `Integer` | `getRestrictionType()` | Recupera tipo de restrição |
| `String` | `getSiteCode()` | Recupera valor do código do site |
| `Long` | `getTenantId()` | Recupera id do tenant |
| `Integer` | `getTopicId()` | Recupera valor do id do topico |
| `Boolean` | `getTranslated()` | Recupera valor, se documento é traduzido |
| `Boolean` | `getUpdateIsoProperties()` | Recupera updateIsoProperties |
| `String` | `getUploadId()` | Recupera o identificador do upload |
| `Boolean` | `getUserNotify()` | Recupera valor, se usuário será notificado |
| `String` | `getUUID()` | Recupera valor do UUID |
| `Date` | `getValidationStartDate()` | Recupera data de inicio de validação |
| `Integer` | `getVersion()` | Recupera valor da versão |
| `String` | `getVersionAction()` | Recupera a ação que serão realizada em relaão a versão documento |
| `String` | `getVersionDescription()` | Recupera descrição da versão |
| `String` | `getVisualization()` | Recupera visualização |
| `String` | `getVolumeId()` | Recupera id do volume |
| `Integer` | `getWatermarkId()` | Recupera valor, se documento tem marca d'água |
| `void` | `setAccessCount​(Integer accessCount)` | Atribui valor para número de acessos |
| `void` | `setActiveVersion​(Boolean activeVersion)` | Atribui valor para versão ativa |
| `void` | `setAdditionalComments​(String comments)` | Atribui o valor do comentário nas informações extras |
| `void` | `setAllowMuiltiCardsPerUser​(Boolean allowMuiltiCardsPerUser)` | Atribui valor para allowMuiltiCardsPerUser |
| `void` | `setApprovalAndOr​(Boolean approvalAndOr)` | Atribui valor para approvalAndOr |
| `void` | `setApproved​(Boolean approved)` | Atribui valor, se documento está aprovado |
| `void` | `setApprovedDate​(Date approvedDate)` | Atribui valor para data de aprovação |
| `void` | `setAtualizationId​(Integer atualizationId)` | Atribui valor para id de atualização |
| `void` | `setCardDescription​(String cardDescription)` | Atribui valor  para descrição do card |
| `void` | `setColleagueId​(String colleagueId)` | Atribui valor para id do colega |
| `void` | `setCrc​(Long crc)` | Atribui valor para crc |
| `void` | `setCreateDate​(Date createDate)` | Atribui valor para data de criação |
| `void` | `setDeleted​(Boolean deleted)` | Atribui valor, se documento foi deletado |
| `void` | `setDocumentDescription​(String documentDescription)` | Atribui valor para descrição do documento |
| `void` | `setDocumentId​(Integer documentId)` | Atribui valor para id do documento |
| `void` | `setDocumentPropertyNumber​(Integer documentPropertyNumber)` | Atribui valor para número de propriedade do documento |
| `void` | `setDocumentPropertyVersion​(Integer documentPropertyVersion)` | Atribui versão de documento |
| `void` | `setDocumentType​(String documentType)` | Atribui valor para tipo de documento |
| `void` | `setDocumentTypeId​(String documentTypeId)` | Atribui valor para id do tipo de documento |
| `void` | `setDownloadEnabled​(Boolean downloadEnabled)` | Atribui valor, se download é habilitado |
| `void` | `setDraft​(Boolean draft)` | Atribui valor para draft |
| `void` | `setExpirationDate​(Date expirationDate)` | Atribui valor para data de expiração |
| `void` | `setExpires​(Boolean expires)` | Atribui valor, se documento expira |
| `void` | `setExternalDocumentId​(String externalDocumentId)` | Atribui valor para id documento externo |
| `void` | `setExtraData​(String key, Object value)` | Atribui valores para os dados extras |
| `void` | `setIconId​(Integer iconId)` | Atribui valor para id do icone |
| `void` | `setIconPath​(String iconPath)` | Atribui valor do iconPath do arquivo |
| `void` | `setImutable​(Boolean imutable)` | Atribui valor, se documento é imutavel |
| `void` | `setIndexed​(Boolean indexed)` | Atribui valor, se documento é indexado |
| `void` | `setInheritSecurity​(Boolean inheritSecurity)` | Atribui se herda as propriedades de segurança do parent |
| `void` | `setInternalVisualizer​(Boolean internalVisualizer)` | Atribui valor, se documento pode ser visualizado internamente |
| `void` | `setKeyWord​(String keyWord)` | Atribui valor para palavra chave |
| `void` | `setLanguageId​(String languageId)` | Atribui valor para id da linguagem |
| `void` | `setLastModifiedDate​(Date lastModifiedDate)` | Atribui valor para última data de modificação |
| `void` | `setLastModifiedTime​(String lastModifiedTime)` | Atribui valor a última data de modificação |
| `void` | `setOnCheckout​(Boolean onCheckout)` | Atribui valor, se documento está em checkout |
| `void` | `setParentDocumentId​(Integer parentDocumentId)` | Atribui valor para id do documento pai |
| `void` | `setPermissionType​(Integer permissionType)` | Atribui valor para tipo de permissão |
| `void` | `setPhisicalFile​(String phisicalFile)` | Atribui valor para arquivo fisico |
| `void` | `setPhisicalFileSize​(Float phisicalFileSize)` | Atribui valor para o tamanho do arquivo fisico |
| `void` | `setPriority​(Integer priority)` | Atribui valor prioridade |
| `void` | `setPrivateColleagueId​(String privateColleagueId)` | Atribui valor id privado do colega |
| `void` | `setPrivateDocument​(Boolean privateDocument)` | Atribui valor, se documento é privado |
| `void` | `setPublisherId​(String publisherId)` | Atribui valor para id do publicador |
| `void` | `setRelatedFiles​(String relatedFiles)` | Atribui valor para arquivos relacionados |
| `void` | `setRestrictionType​(Integer restrictionType)` | Atribui valor para tipo de  restrição |
| `void` | `setSiteCode​(String siteCode)` | Atribui valor para código de site |
| `void` | `setTenantId​(Long tenantId)` | Atribui valor para id do tenant |
| `void` | `setTopicId​(Integer topicId)` | Atribui valor para id do topico |
| `void` | `setTranslated​(Boolean translated)` | Atribui valor, se documento é traduzido |
| `void` | `setUpdateIsoProperties​(Boolean updateIsoProperties)` | Atribui valor para updateIsoProperties |
| `void` | `setUploadId​(String uploadId)` | Atribue o identificador do uplaod |
| `void` | `setUserNotify​(Boolean userNotify)` | Atribui valor se usuário será notificado |
| `void` | `setUUID​(String uUID)` | Atribui valor para UUID |
| `void` | `setValidationStartDate​(Date validationStartDate)` | Atribui valor para data de início de validação |
| `void` | `setVersion​(Integer version)` | Atribui valor para versão |
| `void` | `setVersionAction​(String versionAction)` | Atribue a ação que serão realizada em relaão a versão documento |
| `void` | `setVersionDescription​(String versionDescription)` | Atribui valor para descrição da versão |
| `void` | `setVisualization​(String visualization)` | Atribui valor para visualização |
| `void` | `setVolumeId​(String volumeId)` | Atribui valor ao id do volume |
| `void` | `setWatermarkId​(Integer watermarkId)` | Atribui valor, se documento tem marca d'água |


---

## Detalhes dos Campos

### EXTATTR_additionalComments

```java
protected static final String EXTATTR_additionalComments
```

Chave para informar se documento possui comentário adicional extra

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_additionalComments)

---

### EXTATTR_versionOption

```java
protected static final String EXTATTR_versionOption
```

Chave para informar se documento possui versão opcional extra

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_versionOption)

---

### EXTATTR_iconPath

```java
protected static final String EXTATTR_iconPath
```

Chave para informar se documento possui caminho de icone extra

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_iconPath)

---

### EXTATTR_colleagueName

```java
protected static final String EXTATTR_colleagueName
```

Chave para informar se documento possui nome de colega extra

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_colleagueName)

---

### EXTATTR_rowId

```java
protected static final String EXTATTR_rowId
```

Chave para informar se documento possui row id extra

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_rowId)

---

### EXTATTR_publisherName

```java
protected static final String EXTATTR_publisherName
```

Chave para informar se documento possui nome de publicador extra

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_publisherName)

---

### EXTATTR_metaListId

```java
protected static final String EXTATTR_metaListId
```

Chave para informar se documento possui meta lista id extra

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_metaListId)

---

### EXTATTR_metaListRecordId

```java
protected static final String EXTATTR_metaListRecordId
```

Chave para informar se documento possui registro extra de meta list

- **See Also:** [Constant Field Values](../../../../../constant-values.html#com.fluig.sdk.api.document.DocumentVO.EXTATTR_metaListRecordId)


## Detalhes dos Construtores

### DocumentVO

```java
public DocumentVO()
```

Nova instância de documento


---

### DocumentVO

```java
public DocumentVO​(Long tenantId,
                  Integer documentId,
                  Integer version)
```

Nova instância de documento utilizando a versão, id do tenant e id do documento

- **Parameters:** `tenantId` -


## Detalhes dos Métodos

### getExtData

```java
protected HashMap<String,​Object> getExtData()
```

Recupera os dados extras

- **Returns:** HashMap

---

### setExtraData

```java
public void setExtraData​(String key,
                         Object value)
```

Atribui valores para os dados extras

- **Parameters:** `key` -

---

### getExtraData

```java
public Object getExtraData​(String key)
```

Recupera os dados extras

- **Parameters:** `key` -
- **Returns:** Object

---

### getTenantId

```java
public Long getTenantId()
```

Recupera id do tenant

- **Returns:** Long

---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```

Atribui valor para id do tenant

- **Parameters:** `tenantId` -

---

### getDocumentId

```java
public Integer getDocumentId()
```

Recupera valor do document Id

- **Returns:** Integer

---

### setDocumentId

```java
public void setDocumentId​(Integer documentId)
```

Atribui valor para id do documento

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

### getDocumentTypeId

```java
public String getDocumentTypeId()
```

Recupera valor do id do tipo de documento

- **Returns:** String

---

### setDocumentTypeId

```java
public void setDocumentTypeId​(String documentTypeId)
```

Atribui valor para id do tipo de documento

- **Parameters:** `documentTypeId` -

---

### getLanguageId

```java
public String getLanguageId()
```

Recupera id da linguagem

- **Returns:** String

---

### setLanguageId

```java
public void setLanguageId​(String languageId)
```

Atribui valor para id da linguagem

- **Parameters:** `languageId` -

---

### getIconId

```java
public Integer getIconId()
```

Recupera id do icone

- **Returns:** Integer

---

### setIconId

```java
public void setIconId​(Integer iconId)
```

Atribui valor para id do icone

- **Parameters:** `iconId` -

---

### getTopicId

```java
public Integer getTopicId()
```

Recupera valor do id do topico

- **Returns:** Integer

---

### setTopicId

```java
public void setTopicId​(Integer topicId)
```

Atribui valor para id do topico

- **Parameters:** `topicId` -

---

### getColleagueId

```java
public String getColleagueId()
```

Recupera id do colega

- **Returns:** String

---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```

Atribui valor para id do colega

- **Parameters:** `colleagueId` -

---

### getDocumentDescription

```java
public String getDocumentDescription()
```

Recupera descrição do documento

- **Returns:** String

---

### setDocumentDescription

```java
public void setDocumentDescription​(String documentDescription)
```

Atribui valor para descrição do documento

- **Parameters:** `documentDescription` -

---

### getPhisicalFile

```java
public String getPhisicalFile()
```

Recupera arquivo fisico

- **Returns:** String

---

### setPhisicalFile

```java
public void setPhisicalFile​(String phisicalFile)
```

Atribui valor para arquivo fisico

- **Parameters:** `phisicalFile` -

---

### getKeyWord

```java
public String getKeyWord()
```

Recupera valor de palavra chave

- **Returns:** String

---

### setKeyWord

```java
public void setKeyWord​(String keyWord)
```

Atribui valor para palavra chave

- **Parameters:** `keyWord` -

---

### getCreateDate

```java
public Date getCreateDate()
```

Recupera valor para data de criação

- **Returns:** Date

---

### setCreateDate

```java
public void setCreateDate​(Date createDate)
```

Atribui valor para data de criação

- **Parameters:** `createDate` -

---

### getApprovedDate

```java
public Date getApprovedDate()
```

Recupera valor da data de aprovação

- **Returns:** Date

---

### setApprovedDate

```java
public void setApprovedDate​(Date approvedDate)
```

Atribui valor para data de aprovação

- **Parameters:** `approvedDate` -

---

### getLastModifiedDate

```java
public Date getLastModifiedDate()
```

Recupera valor da última data de moficação

- **Returns:** Date

---

### setLastModifiedDate

```java
public void setLastModifiedDate​(Date lastModifiedDate)
```

Atribui valor para última data de modificação

- **Parameters:** `lastModifiedDate` -

---

### getDocumentType

```java
public String getDocumentType()
```

Recupera valor do tipo de documento

- **Returns:** String

---

### setDocumentType

```java
public void setDocumentType​(String documentType)
```

Atribui valor para tipo de documento

- **Parameters:** `documentType` -

---

### getExpirationDate

```java
public Date getExpirationDate()
```

Recupera data de expiração

- **Returns:** Date

---

### setExpirationDate

```java
public void setExpirationDate​(Date expirationDate)
```

Atribui valor para data de expiração

- **Parameters:** `expirationDate` -

---

### getAccessCount

```java
public Integer getAccessCount()
```

Recupera número de acessso

- **Returns:** Integer

---

### setAccessCount

```java
public void setAccessCount​(Integer accessCount)
```

Atribui valor para número de acessos

- **Parameters:** `accessCount` -

---

### getAtualizationId

```java
public Integer getAtualizationId()
```

Recupera id de atualização

- **Returns:** Integer

---

### setAtualizationId

```java
public void setAtualizationId​(Integer atualizationId)
```

Atribui valor para id de atualização

- **Parameters:** `atualizationId` -

---

### getParentDocumentId

```java
public Integer getParentDocumentId()
```

Recupera id do pai do documento

- **Returns:** Integer

---

### setParentDocumentId

```java
public void setParentDocumentId​(Integer parentDocumentId)
```

Atribui valor para id do documento pai

- **Parameters:** `parentDocumentId` -

---

### getVisualization

```java
public String getVisualization()
```

Recupera visualização

- **Returns:** String

---

### setVisualization

```java
public void setVisualization​(String visualization)
```

Atribui valor para visualização

- **Parameters:** `visualization` -

---

### getRelatedFiles

```java
public String getRelatedFiles()
```

Recuprea arquivos relacionados

- **Returns:** String

---

### setRelatedFiles

```java
public void setRelatedFiles​(String relatedFiles)
```

Atribui valor para arquivos relacionados

- **Parameters:** `relatedFiles` -

---

### getActiveVersion

```java
public Boolean getActiveVersion()
```

Recupera versão ativa

- **Returns:** Boolean

---

### setActiveVersion

```java
public void setActiveVersion​(Boolean activeVersion)
```

Atribui valor para versão ativa

- **Parameters:** `activeVersion` -

---

### getVersionDescription

```java
public String getVersionDescription()
```

Recupera descrição da versão

- **Returns:** String

---

### setVersionDescription

```java
public void setVersionDescription​(String versionDescription)
```

Atribui valor para descrição da versão

- **Parameters:** `versionDescription` -

---

### getApprovalAndOr

```java
public Boolean getApprovalAndOr()
```

Recupera condição aprovalAndOr

- **Returns:** Boolean

---

### setApprovalAndOr

```java
public void setApprovalAndOr​(Boolean approvalAndOr)
```

Atribui valor para approvalAndOr

- **Parameters:** `approvalAndOr` -

---

### getExternalDocumentId

```java
public String getExternalDocumentId()
```

Recupera id documento externo

- **Returns:** String

---

### setExternalDocumentId

```java
public void setExternalDocumentId​(String externalDocumentId)
```

Atribui valor para id documento externo

- **Parameters:** `externalDocumentId` -

---

### getDownloadEnabled

```java
public Boolean getDownloadEnabled()
```

Recupera valor, se download é habilitado

- **Returns:** Boolean

---

### setDownloadEnabled

```java
public void setDownloadEnabled​(Boolean downloadEnabled)
```

Atribui valor, se download é habilitado

- **Parameters:** `downloadEnabled` -

---

### getApproved

```java
public Boolean getApproved()
```

Recupera valor, se documento está aprovado

- **Returns:** Boolean

---

### setApproved

```java
public void setApproved​(Boolean approved)
```

Atribui valor, se documento está aprovado

- **Parameters:** `approved` -

---

### getValidationStartDate

```java
public Date getValidationStartDate()
```

Recupera data de inicio de validação

- **Returns:** Date

---

### setValidationStartDate

```java
public void setValidationStartDate​(Date validationStartDate)
```

Atribui valor para data de início de validação

- **Parameters:** `validationStartDate` -

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

### getCardDescription

```java
public String getCardDescription()
```

Recupera descrição do card

- **Returns:** String

---

### setCardDescription

```java
public void setCardDescription​(String cardDescription)
```

Atribui valor para descrição do card

- **Parameters:** `cardDescription` -

---

### getAllowMuiltiCardsPerUser

```java
public Boolean getAllowMuiltiCardsPerUser()
```

Recupera valor, se documento permite mult card por usuário

- **Returns:** Boolean

---

### setAllowMuiltiCardsPerUser

```java
public void setAllowMuiltiCardsPerUser​(Boolean allowMuiltiCardsPerUser)
```

Atribui valor para allowMuiltiCardsPerUser

- **Parameters:** `allowMuiltiCardsPerUser` -

---

### getDocumentPropertyNumber

```java
public Integer getDocumentPropertyNumber()
```

Recupera número de propriedade do documento

- **Returns:** Integer

---

### setDocumentPropertyNumber

```java
public void setDocumentPropertyNumber​(Integer documentPropertyNumber)
```

Atribui valor para número de propriedade do documento

- **Parameters:** `documentPropertyNumber` -

---

### getDocumentPropertyVersion

```java
public Integer getDocumentPropertyVersion()
```

Recupera versão do documento

- **Returns:** Integer

---

### setDocumentPropertyVersion

```java
public void setDocumentPropertyVersion​(Integer documentPropertyVersion)
```

Atribui versão de documento

- **Parameters:** `documentPropertyVersion` -

---

### getPrivateDocument

```java
public Boolean getPrivateDocument()
```

Recupera valor, se documento é privado

- **Returns:** is Private

---

### setPrivateDocument

```java
public void setPrivateDocument​(Boolean privateDocument)
```

Atribui valor, se documento é privado

- **Parameters:** `privateDocument` -

---

### getPrivateColleagueId

```java
public String getPrivateColleagueId()
```

Recupera valor id privado do colega

- **Returns:** String

---

### setPrivateColleagueId

```java
public void setPrivateColleagueId​(String privateColleagueId)
```

Atribui valor id privado do colega

- **Parameters:** `privateColleagueId` -

---

### getIndexed

```java
public Boolean getIndexed()
```

Recupera valor, se documento é indexado

- **Returns:** Boolean

---

### setIndexed

```java
public void setIndexed​(Boolean indexed)
```

Atribui valor, se documento é indexado

- **Parameters:** `indexed` -

---

### getPriority

```java
public Integer getPriority()
```

Recupera prioridade

- **Returns:** Integer

---

### setPriority

```java
public void setPriority​(Integer priority)
```

Atribui valor prioridade

- **Parameters:** `priority` -

---

### getTranslated

```java
public Boolean getTranslated()
```

Recupera valor, se documento é traduzido

- **Returns:** Boolean

---

### setTranslated

```java
public void setTranslated​(Boolean translated)
```

Atribui valor, se documento é traduzido

- **Parameters:** `translated` -

---

### getUserNotify

```java
public Boolean getUserNotify()
```

Recupera valor, se usuário será notificado

- **Returns:** Boolean

---

### setUserNotify

```java
public void setUserNotify​(Boolean userNotify)
```

Atribui valor se usuário será notificado

- **Parameters:** `userNotify` -

---

### getExpires

```java
public Boolean getExpires()
```

Recupera valor, se documento expira

- **Returns:** Boolean

---

### setExpires

```java
public void setExpires​(Boolean expires)
```

Atribui valor, se documento expira

- **Parameters:** `expires` -

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

Atribui valor ao id do volume

- **Parameters:** `volumeId` -

---

### getUpdateIsoProperties

```java
public Boolean getUpdateIsoProperties()
```

Recupera updateIsoProperties

- **Returns:** Boolean

---

### setUpdateIsoProperties

```java
public void setUpdateIsoProperties​(Boolean updateIsoProperties)
```

Atribui valor para updateIsoProperties

- **Parameters:** `updateIsoProperties` -

---

### getLastModifiedTime

```java
public String getLastModifiedTime()
```

Recupera última data de modificação

- **Returns:** String

---

### setLastModifiedTime

```java
public void setLastModifiedTime​(String lastModifiedTime)
```

Atribui valor a última data de modificação

- **Parameters:** `lastModifiedTime` -

---

### getDeleted

```java
public Boolean getDeleted()
```

Recupera valor, se documento foi deletado

- **Returns:** Boolean

---

### setDeleted

```java
public void setDeleted​(Boolean deleted)
```

Atribui valor, se documento foi deletado

- **Parameters:** `deleted` -

---

### getImutable

```java
public Boolean getImutable()
```

Recupera valor, se documento é imultavel

- **Returns:** Boolean

---

### setImutable

```java
public void setImutable​(Boolean imutable)
```

Atribui valor, se documento é imutavel

- **Parameters:** `imutable` -

---

### getInternalVisualizer

```java
public Boolean getInternalVisualizer()
```

Recupera valor, se documento pode ser visualizado internamente.

- **Returns:** Boolean

---

### setInternalVisualizer

```java
public void setInternalVisualizer​(Boolean internalVisualizer)
```

Atribui valor, se documento pode ser visualizado internamente

- **Parameters:** `internalVisualizer` -

---

### getWatermarkId

```java
public Integer getWatermarkId()
```

Recupera valor, se documento tem marca d'água

- **Returns:** Integer

---

### setWatermarkId

```java
public void setWatermarkId​(Integer watermarkId)
```

Atribui valor, se documento tem marca d'água

- **Parameters:** `watermarkId` -

---

### getCrc

```java
public Long getCrc()
```

Recupera valor do crc

- **Returns:** Long

---

### setCrc

```java
public void setCrc​(Long crc)
```

Atribui valor para crc

- **Parameters:** `crc` -

---

### getUUID

```java
public String getUUID()
```

Recupera valor do UUID

- **Returns:** String

---

### setUUID

```java
public void setUUID​(String uUID)
```

Atribui valor para UUID

- **Parameters:** `uUID` -

---

### getPhisicalFileSize

```java
public Float getPhisicalFileSize()
```

Recupera valor do tamanho do arquivo fisico

- **Returns:** phisicalFileSize

---

### setPhisicalFileSize

```java
public void setPhisicalFileSize​(Float phisicalFileSize)
```

Atribui valor para o tamanho do arquivo fisico

- **Parameters:** `phisicalFileSize` -

---

### getPermissionType

```java
public Integer getPermissionType()
```

Recupera o tipo de permissão

- **Returns:** Integer

---

### setPermissionType

```java
public void setPermissionType​(Integer permissionType)
```

Atribui valor para tipo de permissão

- **Parameters:** `permissionType` -

---

### getRestrictionType

```java
public Integer getRestrictionType()
```

Recupera tipo de restrição

- **Returns:** restrictionType

---

### setRestrictionType

```java
public void setRestrictionType​(Integer restrictionType)
```

Atribui valor para tipo de restrição

- **Parameters:** `restrictionType` -

---

### getSiteCode

```java
public String getSiteCode()
```

Recupera valor do código do site

- **Returns:** String

---

### setSiteCode

```java
public void setSiteCode​(String siteCode)
```

Atribui valor para código de site

- **Parameters:** `siteCode` -

---

### getDraft

```java
public Boolean getDraft()
```

Recupera valor de draft

- **Returns:** Boolean

---

### setDraft

```java
public void setDraft​(Boolean draft)
```

Atribui valor para draft

- **Parameters:** `draft` -

---

### getOnCheckout

```java
public Boolean getOnCheckout()
```

Recupera valor, se documento está em checkout

- **Returns:** Boolean

---

### setOnCheckout

```java
public void setOnCheckout​(Boolean onCheckout)
```

Atribui valor, se documento está em checkout

- **Parameters:** `onCheckout` -

---

### getIconPath

```java
public String getIconPath()
```

Recupera valor do path do icon

- **Returns:** String

---

### setIconPath

```java
public void setIconPath​(String iconPath)
```

Atribui valor do iconPath do arquivo

- **Parameters:** `iconPath` -

---

### getVersionAction

```java
public String getVersionAction()
```

Recupera a ação que serão realizada em relaão a versão documento

- **Returns:** String

---

### setVersionAction

```java
public void setVersionAction​(String versionAction)
```

Atribue a ação que serão realizada em relaão a versão documento

- **Parameters:** `versionAction` -

---

### getUploadId

```java
public String getUploadId()
```

Recupera o identificador do upload

- **Returns:** String uploadId

---

### setUploadId

```java
public void setUploadId​(String uploadId)
```

Atribue o identificador do uplaod

- **Parameters:** `uploadId` -

---

### getAdditionalComments

```java
public String getAdditionalComments()
```

Recupera o valor do comentário nas informações extras

- **Returns:** String comments

---

### setAdditionalComments

```java
public void setAdditionalComments​(String comments)
```

Atribui o valor do comentário nas informações extras

- **Parameters:** `comments` -

---

### getInheritSecurity

```java
public Boolean getInheritSecurity()
```

Retorna se o documento herda as propriedades do parent

- **Returns:** Boolean inheritSecurity

---

### setInheritSecurity

```java
public void setInheritSecurity​(Boolean inheritSecurity)
```

Atribui se herda as propriedades de segurança do parent

- **Parameters:** `inheritSecurity` -

