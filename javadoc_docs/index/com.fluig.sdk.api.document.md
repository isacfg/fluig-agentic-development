# com.fluig.sdk.api.document

> **12 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/package-summary.html)

---

VO Utilizado pelo ws para mostrar o historico de aprovacoes do documento

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class AllocatedDocumentVO](#class-allocateddocumentvo)
- [Class DocumentApprovementHistoryVO](#class-documentapprovementhistoryvo)
- [Class DocumentApproverVO](#class-documentapprovervo)
- [Class DocumentPermissionVO](#class-documentpermissionvo)
- [Class DocumentRestrictionVO](#class-documentrestrictionvo)
- [Class DocumentSecurityConfigVO](#class-documentsecurityconfigvo)
- [Class DocumentSecurityVO](#class-documentsecurityvo)
- [Class DocumentTaskVO](#class-documenttaskvo)
- [Class DocumentVO](#class-documentvo)
- [Class FolderVO](#class-foldervo)
- [Class RelatedDocumentVO](#class-relateddocumentvo)
- [Class SolvedPermissionVO](#class-solvedpermissionvo)

---

# Class AllocatedDocumentVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/AllocatedDocumentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/AllocatedDocumentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.AllocatedDocumentVO
```

```java
public class AllocatedDocumentVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `AllocatedDocumentVO​(long companyId, int sourceDocument, int sourceVersion, int destinationDocument)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Boolean` | `getActive()` |  |
| `Date` | `getCheckinDate()` |  |
| `String` | `getCheckinTime()` |  |
| `Boolean` | `getCheckoutAllowed()` |  |
| `Date` | `getCheckoutDate()` |  |
| `String` | `getCheckoutTime()` |  |
| `String` | `getColleagueId()` |  |
| `String` | `getColleagueName()` |  |
| `String` | `getComment()` |  |
| `long` | `getCompanyId()` |  |
| `int` | `getDestinationDocument()` |  |
| `int` | `getSourceDocument()` |  |
| `int` | `getSourceVersion()` |  |
| `void` | `setActive​(Boolean active)` |  |
| `void` | `setCheckinDate​(Date checkinDate)` |  |
| `void` | `setCheckinTime​(String checkinTime)` |  |
| `void` | `setCheckoutAllowed​(Boolean checkoutAllowed)` |  |
| `void` | `setCheckoutDate​(Date checkoutDate)` |  |
| `void` | `setCheckoutTime​(String checkoutTime)` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setColleagueName​(String colleagueName)` |  |
| `void` | `setComment​(String comment)` |  |


---

## Detalhes dos Construtores

### AllocatedDocumentVO

```java
public AllocatedDocumentVO​(long companyId,
                           int sourceDocument,
                           int sourceVersion,
                           int destinationDocument)
```



## Detalhes dos Métodos

### getCompanyId

```java
public long getCompanyId()
```


---

### getSourceDocument

```java
public int getSourceDocument()
```


---

### getSourceVersion

```java
public int getSourceVersion()
```


---

### getDestinationDocument

```java
public int getDestinationDocument()
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

### getCheckoutDate

```java
public Date getCheckoutDate()
```


---

### setCheckoutDate

```java
public void setCheckoutDate​(Date checkoutDate)
```


---

### getCheckoutTime

```java
public String getCheckoutTime()
```


---

### setCheckoutTime

```java
public void setCheckoutTime​(String checkoutTime)
```


---

### getCheckinDate

```java
public Date getCheckinDate()
```


---

### setCheckinDate

```java
public void setCheckinDate​(Date checkinDate)
```


---

### getCheckinTime

```java
public String getCheckinTime()
```


---

### setCheckinTime

```java
public void setCheckinTime​(String checkinTime)
```


---

### getComment

```java
public String getComment()
```


---

### setComment

```java
public void setComment​(String comment)
```


---

### getActive

```java
public Boolean getActive()
```


---

### setActive

```java
public void setActive​(Boolean active)
```


---

### getCheckoutAllowed

```java
public Boolean getCheckoutAllowed()
```


---

### setCheckoutAllowed

```java
public void setCheckoutAllowed​(Boolean checkoutAllowed)
```


---

### getColleagueName

```java
public String getColleagueName()
```


---

### setColleagueName

```java
public void setColleagueName​(String colleagueName)
```

---

# Class DocumentApprovementHistoryVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentApprovementHistoryVO
```

```java
public class DocumentApprovementHistoryVO
extends Object
implements Serializable
```

VO Utilizado pelo ws para mostrar o historico de aprovacoes do documento

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentApprovementHistoryVO()` |  |
| `DocumentApprovementHistoryVO​(int documentVersion, int iterationSequence, int levelId, int movementSequence, String colleagueId, Date approvementDate, int status, String observation, boolean signed, String colleagueName)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Date` | `getApprovementDate()` |  |
| `String` | `getColleagueId()` |  |
| `String` | `getColleagueName()` |  |
| `int` | `getDocumentVersion()` |  |
| `int` | `getIterationSequence()` |  |
| `int` | `getLevelId()` |  |
| `int` | `getMovementSequence()` |  |
| `String` | `getObservation()` |  |
| `int` | `getStatus()` |  |
| `boolean` | `isSigned()` |  |
| `void` | `setApprovementDate​(Date approvementDate)` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setColleagueName​(String colleagueName)` |  |
| `void` | `setDocumentVersion​(int documentVersion)` |  |
| `void` | `setIterationSequence​(int iterationSequence)` |  |
| `void` | `setLevelId​(int levelId)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setObservation​(String observation)` |  |
| `void` | `setSigned​(boolean signed)` |  |
| `void` | `setStatus​(int status)` |  |


---

## Detalhes dos Construtores

### DocumentApprovementHistoryVO

```java
public DocumentApprovementHistoryVO()
```


---

### DocumentApprovementHistoryVO

```java
public DocumentApprovementHistoryVO​(int documentVersion,
                                    int iterationSequence,
                                    int levelId,
                                    int movementSequence,
                                    String colleagueId,
                                    Date approvementDate,
                                    int status,
                                    String observation,
                                    boolean signed,
                                    String colleagueName)
```



## Detalhes dos Métodos

### getDocumentVersion

```java
public int getDocumentVersion()
```


---

### setDocumentVersion

```java
public void setDocumentVersion​(int documentVersion)
```


---

### getIterationSequence

```java
public int getIterationSequence()
```


---

### setIterationSequence

```java
public void setIterationSequence​(int iterationSequence)
```


---

### getLevelId

```java
public int getLevelId()
```


---

### setLevelId

```java
public void setLevelId​(int levelId)
```


---

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
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

### getApprovementDate

```java
public Date getApprovementDate()
```


---

### setApprovementDate

```java
public void setApprovementDate​(Date approvementDate)
```


---

### getStatus

```java
public int getStatus()
```


---

### setStatus

```java
public void setStatus​(int status)
```


---

### getObservation

```java
public String getObservation()
```


---

### setObservation

```java
public void setObservation​(String observation)
```


---

### isSigned

```java
public boolean isSigned()
```


---

### setSigned

```java
public void setSigned​(boolean signed)
```


---

### getColleagueName

```java
public String getColleagueName()
```


---

### setColleagueName

```java
public void setColleagueName​(String colleagueName)
```

---

# Class DocumentApproverVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentApproverVO
```

```java
public class DocumentApproverVO
extends Object
implements Serializable
```

Value Object para DocumentApprover

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentApproverVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAlias()` |  |
| `Integer` | `getApprovalMode()` | Recupera valor do approvalMode |
| `String` | `getApprovalObservation()` |  |
| `String` | `getApprovalStatus()` |  |
| `Integer` | `getApproverType()` | Recupera valor do approverType |
| `String` | `getColleagueId()` | Recupera valor do colleagueId |
| `Long` | `getCompanyId()` |  |
| `Boolean` | `getDigitalSignature()` | Recupera valor do digitalSignature |
| `String` | `getEmail()` |  |
| `String` | `getFullName()` |  |
| `String` | `getLevelDescription()` | Recupera valor do levelDescription |
| `Integer` | `getLevelId()` | Recupera valor do levelId |
| `void` | `setAlias​(String alias)` |  |
| `void` | `setApprovalMode​(Integer approvalMode)` | Atribui valor para approvalMode |
| `void` | `setApprovalObservation​(String approvalObservation)` |  |
| `void` | `setApprovalStatus​(String approvalStatus)` |  |
| `void` | `setApproverType​(Integer approverType)` | Atribui valor para approverType |
| `void` | `setColleagueId​(String colleagueId)` | Atribui valor para colleagueId |
| `void` | `setCompanyId​(Long companyId)` |  |
| `void` | `setDigitalSignature​(Boolean digitalSignature)` | Atribui valor para digitalSignature |
| `void` | `setEmail​(String email)` |  |
| `void` | `setFullName​(String fullName)` |  |
| `void` | `setLevelDescription​(String levelDescription)` | Atribui valor para levelDescription |
| `void` | `setLevelId​(Integer levelId)` | Atribui valor para levelId |


---

## Detalhes dos Construtores

### DocumentApproverVO

```java
public DocumentApproverVO()
```



## Detalhes dos Métodos

### getApproverType

```java
public Integer getApproverType()
```

Recupera valor do approverType

- **Returns:** the approverType

---

### setApproverType

```java
public void setApproverType​(Integer approverType)
```

Atribui valor para approverType

- **Parameters:** `approverType` - the approverType to set

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

### getLevelId

```java
public Integer getLevelId()
```

Recupera valor do levelId

- **Returns:** the levelId

---

### setLevelId

```java
public void setLevelId​(Integer levelId)
```

Atribui valor para levelId

- **Parameters:** `levelId` - the levelId to set

---

### getApprovalMode

```java
public Integer getApprovalMode()
```

Recupera valor do approvalMode

- **Returns:** the approvalMode

---

### setApprovalMode

```java
public void setApprovalMode​(Integer approvalMode)
```

Atribui valor para approvalMode

- **Parameters:** `approvalMode` - the approvalMode to set

---

### getDigitalSignature

```java
public Boolean getDigitalSignature()
```

Recupera valor do digitalSignature

- **Returns:** the digitalSignature

---

### setDigitalSignature

```java
public void setDigitalSignature​(Boolean digitalSignature)
```

Atribui valor para digitalSignature

- **Parameters:** `digitalSignature` - the digitalSignature to set

---

### getLevelDescription

```java
public String getLevelDescription()
```

Recupera valor do levelDescription

- **Returns:** the levelDescription

---

### setLevelDescription

```java
public void setLevelDescription​(String levelDescription)
```

Atribui valor para levelDescription

- **Parameters:** `levelDescription` - the levelDescription to set

---

### getAlias

```java
public String getAlias()
```

- **Returns:** the alias

---

### setAlias

```java
public void setAlias​(String alias)
```

- **Parameters:** `alias` - the alias to set

---

### getFullName

```java
public String getFullName()
```

- **Returns:** the fullName

---

### setFullName

```java
public void setFullName​(String fullName)
```

- **Parameters:** `fullName` - the fullName to set

---

### getEmail

```java
public String getEmail()
```

- **Returns:** the email

---

### setEmail

```java
public void setEmail​(String email)
```

- **Parameters:** `email` - the email to set

---

### getApprovalStatus

```java
public String getApprovalStatus()
```

- **Returns:** the approvalStatus

---

### setApprovalStatus

```java
public void setApprovalStatus​(String approvalStatus)
```

- **Parameters:** `approvalStatus` - the approvalStatus to set

---

### getApprovalObservation

```java
public String getApprovalObservation()
```

- **Returns:** the approvalObservation

---

### setApprovalObservation

```java
public void setApprovalObservation​(String approvalObservation)
```

- **Parameters:** `approvalObservation` - the approvalObservation to set

---

### getCompanyId

```java
public Long getCompanyId()
```

- **Returns:** companyId

---

### setCompanyId

```java
public void setCompanyId​(Long companyId)
```

- **Parameters:** `companyId` -

---

# Class DocumentPermissionVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentPermissionVO
```

```java
public class DocumentPermissionVO
extends Object
implements Serializable
```

Value Object para DocumentPermission

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentPermissionVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAttributionDescription()` | Recupera valor do attributionDescription |
| `Integer` | `getAttributionType()` | Recupera valor do attributionType |
| `String` | `getAttributionValue()` | Recupera valor do attributionValue |
| `Boolean` | `getDownloadEnabled()` | Recupera valor do downloadEnabled |
| `Boolean` | `getInheritSecurity()` | Recupera valor do inheritSecurity |
| `Integer` | `getSecurityLevel()` | Recupera valor do securityLevel |
| `Boolean` | `getSecurityVersion()` | Recupera valor do securityVersion |
| `Boolean` | `getShowContent()` | Recupera valor do showContent |
| `void` | `setAttributionDescription​(String attributionDescription)` | Atribui valor para attributionDescription |
| `void` | `setAttributionType​(Integer attributionType)` | Atribui valor para attributionType |
| `void` | `setAttributionValue​(String attributionValue)` | Atribui valor para attributionValue |
| `void` | `setDownloadEnabled​(Boolean downloadEnabled)` | Atribui valor para downloadEnabled |
| `void` | `setInheritSecurity​(Boolean inheritSecurity)` | Atribui valor para inheritSecurity |
| `void` | `setSecurityLevel​(Integer securityLevel)` | Atribui valor para securityLevel |
| `void` | `setSecurityVersion​(Boolean securityVersion)` | Atribui valor para securityVersion |
| `void` | `setShowContent​(Boolean showContent)` | Atribui valor para showContent |


---

## Detalhes dos Construtores

### DocumentPermissionVO

```java
public DocumentPermissionVO()
```



## Detalhes dos Métodos

### getSecurityLevel

```java
public Integer getSecurityLevel()
```

Recupera valor do securityLevel

- **Returns:** the securityLevel

---

### setSecurityLevel

```java
public void setSecurityLevel​(Integer securityLevel)
```

Atribui valor para securityLevel

- **Parameters:** `securityLevel` - the securityLevel to set

---

### getSecurityVersion

```java
public Boolean getSecurityVersion()
```

Recupera valor do securityVersion

- **Returns:** the securityVersion

---

### setSecurityVersion

```java
public void setSecurityVersion​(Boolean securityVersion)
```

Atribui valor para securityVersion

- **Parameters:** `securityVersion` - the securityVersion to set

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

### getShowContent

```java
public Boolean getShowContent()
```

Recupera valor do showContent

- **Returns:** the showContent

---

### setShowContent

```java
public void setShowContent​(Boolean showContent)
```

Atribui valor para showContent

- **Parameters:** `showContent` - the showContent to set

---

### getAttributionDescription

```java
public String getAttributionDescription()
```

Recupera valor do attributionDescription

- **Returns:** the attributionDescription

---

### setAttributionDescription

```java
public void setAttributionDescription​(String attributionDescription)
```

Atribui valor para attributionDescription

- **Parameters:** `attributionDescription` - the attributionDescription to set

---

### getAttributionType

```java
public Integer getAttributionType()
```

Recupera valor do attributionType

- **Returns:** the attributionType

---

### setAttributionType

```java
public void setAttributionType​(Integer attributionType)
```

Atribui valor para attributionType

- **Parameters:** `attributionType` - the attributionType to set

---

### getAttributionValue

```java
public String getAttributionValue()
```

Recupera valor do attributionValue

- **Returns:** the attributionValue

---

### setAttributionValue

```java
public void setAttributionValue​(String attributionValue)
```

Atribui valor para attributionValue

- **Parameters:** `attributionValue` - the attributionValue to set

---

# Class DocumentRestrictionVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentRestrictionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentRestrictionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentRestrictionVO
```

```java
public class DocumentRestrictionVO
extends Object
implements Serializable
```

Value Object para DocumentRestriction

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentRestrictionVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAttributionDescription()` | Recupera valor do attributionDescription |
| `Integer` | `getAttributionType()` | Recupera valor do attributionType |
| `String` | `getAttributionValue()` | Recupera valor do attributionValue |
| `Boolean` | `getDownloadEnabled()` | Recupera valor do downloadEnabled |
| `Boolean` | `getInheritSecurity()` | Recupera valor do inheritSecurity |
| `Integer` | `getSecurityLevel()` | Recupera valor do securityLevel |
| `Boolean` | `getSecurityVersion()` | Recupera valor do securityVersion |
| `Boolean` | `getShowContent()` | Recupera valor do showContent |
| `void` | `setAttributionDescription​(String attributionDescription)` | Atribui valor para attributionDescription |
| `void` | `setAttributionType​(Integer attributionType)` | Atribui valor para attributionType |
| `void` | `setAttributionValue​(String attributionValue)` | Atribui valor para attributionValue |
| `void` | `setDownloadEnabled​(Boolean downloadEnabled)` | Atribui valor para downloadEnabled |
| `void` | `setInheritSecurity​(Boolean inheritSecurity)` | Atribui valor para inheritSecurity |
| `void` | `setSecurityLevel​(Integer securityLevel)` | Atribui valor para securityLevel |
| `void` | `setSecurityVersion​(Boolean securityVersion)` | Atribui valor para securityVersion |
| `void` | `setShowContent​(Boolean showContent)` | Atribui valor para showContent |


---

## Detalhes dos Construtores

### DocumentRestrictionVO

```java
public DocumentRestrictionVO()
```



## Detalhes dos Métodos

### getSecurityLevel

```java
public Integer getSecurityLevel()
```

Recupera valor do securityLevel

- **Returns:** the securityLevel

---

### setSecurityLevel

```java
public void setSecurityLevel​(Integer securityLevel)
```

Atribui valor para securityLevel

- **Parameters:** `securityLevel` - the securityLevel to set

---

### getSecurityVersion

```java
public Boolean getSecurityVersion()
```

Recupera valor do securityVersion

- **Returns:** the securityVersion

---

### setSecurityVersion

```java
public void setSecurityVersion​(Boolean securityVersion)
```

Atribui valor para securityVersion

- **Parameters:** `securityVersion` - the securityVersion to set

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

### getShowContent

```java
public Boolean getShowContent()
```

Recupera valor do showContent

- **Returns:** the showContent

---

### setShowContent

```java
public void setShowContent​(Boolean showContent)
```

Atribui valor para showContent

- **Parameters:** `showContent` - the showContent to set

---

### getAttributionDescription

```java
public String getAttributionDescription()
```

Recupera valor do attributionDescription

- **Returns:** the attributionDescription

---

### setAttributionDescription

```java
public void setAttributionDescription​(String attributionDescription)
```

Atribui valor para attributionDescription

- **Parameters:** `attributionDescription` - the attributionDescription to set

---

### getAttributionType

```java
public Integer getAttributionType()
```

Recupera valor do attributionType

- **Returns:** the attributionType

---

### setAttributionType

```java
public void setAttributionType​(Integer attributionType)
```

Atribui valor para attributionType

- **Parameters:** `attributionType` - the attributionType to set

---

### getAttributionValue

```java
public String getAttributionValue()
```

Recupera valor do attributionValue

- **Returns:** the attributionValue

---

### setAttributionValue

```java
public void setAttributionValue​(String attributionValue)
```

Atribui valor para attributionValue

- **Parameters:** `attributionValue` - the attributionValue to set

---

# Class DocumentSecurityConfigVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityConfigVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityConfigVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentSecurityConfigVO
```

```java
public class DocumentSecurityConfigVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentSecurityConfigVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Integer` | `getAttributionType()` |  |
| `String` | `getAttributionValue()` |  |
| `long` | `getCompanyId()` |  |
| `int` | `getDocumentId()` |  |
| `Boolean` | `getDownloadEnabled()` |  |
| `Boolean` | `getPermission()` |  |
| `Integer` | `getSecurityLevel()` |  |
| `Boolean` | `getSecurityVersion()` |  |
| `int` | `getSequence()` |  |
| `Boolean` | `getShowContent()` |  |
| `int` | `getVersion()` |  |
| `void` | `setAttributionType​(Integer attributionType)` |  |
| `void` | `setAttributionValue​(String attributionValue)` |  |
| `void` | `setCompanyId​(long companyId)` |  |
| `void` | `setDocumentId​(int documentId)` |  |
| `void` | `setDownloadEnabled​(Boolean downloadEnabled)` |  |
| `void` | `setPermission​(Boolean permission)` |  |
| `void` | `setSecurityLevel​(Integer securityLevel)` |  |
| `void` | `setSecurityVersion​(Boolean securityVersion)` |  |
| `void` | `setSequence​(int sequence)` |  |
| `void` | `setShowContent​(Boolean showContent)` |  |
| `void` | `setVersion​(int version)` |  |


---

## Detalhes dos Construtores

### DocumentSecurityConfigVO

```java
public DocumentSecurityConfigVO()
```



## Detalhes dos Métodos

### getDocumentId

```java
public int getDocumentId()
```


---

### setDocumentId

```java
public void setDocumentId​(int documentId)
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

### getSequence

```java
public int getSequence()
```


---

### setSequence

```java
public void setSequence​(int sequence)
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

### getPermission

```java
public Boolean getPermission()
```


---

### setPermission

```java
public void setPermission​(Boolean permission)
```


---

### getShowContent

```java
public Boolean getShowContent()
```


---

### setShowContent

```java
public void setShowContent​(Boolean showContent)
```


---

### getSecurityVersion

```java
public Boolean getSecurityVersion()
```


---

### setSecurityVersion

```java
public void setSecurityVersion​(Boolean securityVersion)
```


---

### getAttributionType

```java
public Integer getAttributionType()
```


---

### setAttributionType

```java
public void setAttributionType​(Integer attributionType)
```


---

### getAttributionValue

```java
public String getAttributionValue()
```


---

### setAttributionValue

```java
public void setAttributionValue​(String attributionValue)
```


---

### getSecurityLevel

```java
public Integer getSecurityLevel()
```


---

### setSecurityLevel

```java
public void setSecurityLevel​(Integer securityLevel)
```


---

### getDownloadEnabled

```java
public Boolean getDownloadEnabled()
```


---

### setDownloadEnabled

```java
public void setDownloadEnabled​(Boolean downloadEnabled)
```

---

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

---

# Class DocumentTaskVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentTaskVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentTaskVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentTaskVO
```

```java
public class DocumentTaskVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentTaskVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `int` | `getApproved()` |  |
| `String` | `getApprovedString()` |  |
| `String` | `getColleagueName()` |  |
| `String` | `getDocumentDescription()` |  |
| `Integer` | `getDocumentId()` |  |
| `String` | `getDocumentType()` |  |
| `Date` | `getLastModifiedDate()` |  |
| `String` | `getPublisherName()` |  |
| `int` | `getVersion()` |  |
| `boolean` | `isKnow()` |  |
| `void` | `setApproved​(int approved)` |  |
| `void` | `setApprovedString​(String approvedString)` |  |
| `void` | `setColleagueName​(String colleagueName)` |  |
| `void` | `setDocumentDescription​(String documentDescription)` |  |
| `void` | `setDocumentId​(Integer documentId)` |  |
| `void` | `setDocumentType​(String documentType)` |  |
| `void` | `setIsKnow​(boolean isKnow)` |  |
| `void` | `setLastModifiedDate​(Date lastModifiedDate)` |  |
| `void` | `setPublisherName​(String publisherName)` |  |
| `void` | `setVersion​(int version)` |  |


---

## Detalhes dos Construtores

### DocumentTaskVO

```java
public DocumentTaskVO()
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

### getColleagueName

```java
public String getColleagueName()
```


---

### setColleagueName

```java
public void setColleagueName​(String colleagueName)
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

### getDocumentType

```java
public String getDocumentType()
```


---

### setDocumentType

```java
public void setDocumentType​(String documentType)
```


---

### getApproved

```java
public int getApproved()
```


---

### setApproved

```java
public void setApproved​(int approved)
```


---

### getApprovedString

```java
public String getApprovedString()
```


---

### setApprovedString

```java
public void setApprovedString​(String approvedString)
```


---

### isKnow

```java
public boolean isKnow()
```


---

### setIsKnow

```java
public void setIsKnow​(boolean isKnow)
```

---

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

---

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

---

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

---

# Class SolvedPermissionVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/SolvedPermissionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/SolvedPermissionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.SolvedPermissionVO
```

```java
public class SolvedPermissionVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `SolvedPermissionVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `DocumentVO` | `getDocument()` |  |
| `int` | `getSecurityLevel()` |  |
| `boolean` | `isDownloadEnabled()` |  |
| `boolean` | `isShowContent()` |  |
| `void` | `setDocument​(DocumentVO document)` |  |
| `void` | `setDownloadEnabled​(boolean downloadEnabled)` |  |
| `void` | `setSecurityLevel​(int securityLevel)` |  |
| `void` | `setShowContent​(boolean showContent)` |  |


---

## Detalhes dos Construtores

### SolvedPermissionVO

```java
public SolvedPermissionVO()
```



## Detalhes dos Métodos

### getDocument

```java
public DocumentVO getDocument()
```


---

### setDocument

```java
public void setDocument​(DocumentVO document)
```


---

### getSecurityLevel

```java
public int getSecurityLevel()
```


---

### setSecurityLevel

```java
public void setSecurityLevel​(int securityLevel)
```


---

### isShowContent

```java
public boolean isShowContent()
```


---

### setShowContent

```java
public void setShowContent​(boolean showContent)
```


---

### isDownloadEnabled

```java
public boolean isDownloadEnabled()
```


---

### setDownloadEnabled

```java
public void setDownloadEnabled​(boolean downloadEnabled)
```

---
