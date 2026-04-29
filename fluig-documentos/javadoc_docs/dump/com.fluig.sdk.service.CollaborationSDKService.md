# Interface CollaborationSDKService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html)

```java
public interface CollaborationSDKService
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
| `void` | `addGuests​(Long collaborationId, List<String> guests)` |  |
| `String` | `checkConnect​(String appKey)` |  |
| `CollaborationVO` | `findCollaborationById​(Long collaborationId)` |  |
| `CollaborationAppVO` | `getApp​(String appKey)` |  |
| `Map<String,​Serializable>` | `getCollaborationStatus​(Integer documentId, Integer documentVersion)` |  |
| `List<CollaborationAppVO>` | `listApps()` |  |
| `List<UserVO>` | `listCollaborators​(Long collaborationId, String pattern, int limit, int offset)` |  |
| `String` | `startCollaboration​(String appKey, CollaborationVO collaborateVO)` |  |
| `Map<String,​Serializable>` | `startEditingByGuest​(String appKey, String guestCode, CollaborationVO collaborateVO)` |  |
| `String` | `startGuestCollaboration​(String appKey, CollaborationVO collaborateVO)` |  |
| `CollaborationAppVO` | `updateApp​(CollaborationAppVO vo)` |  |
| `Map<String,​Serializable>` | `uploadFlow​(String appKey, CollaborationVO collaborationVO)` |  |
| `void` | `validateUserPermissionToEdit​(int documentId, int documentVersion, String userCode)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CollaborationSDKService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CollaborationSDKService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### listApps

```java
List<CollaborationAppVO> listApps()
```


---

### getApp

```java
CollaborationAppVO getApp​(String appKey)
```


---

### startCollaboration

```java
String startCollaboration​(String appKey,
                          CollaborationVO collaborateVO)
                   throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### uploadFlow

```java
Map<String,​Serializable> uploadFlow​(String appKey,
                                          CollaborationVO collaborationVO)
                                   throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### startGuestCollaboration

```java
String startGuestCollaboration​(String appKey,
                               CollaborationVO collaborateVO)
                        throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### startEditingByGuest

```java
Map<String,​Serializable> startEditingByGuest​(String appKey,
                                                   String guestCode,
                                                   CollaborationVO collaborateVO)
                                            throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### updateApp

```java
CollaborationAppVO updateApp​(CollaborationAppVO vo)
                      throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### addGuests

```java
void addGuests​(Long collaborationId,
               List<String> guests)
        throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### getCollaborationStatus

```java
Map<String,​Serializable> getCollaborationStatus​(Integer documentId,
                                                      Integer documentVersion)
                                               throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### checkConnect

```java
String checkConnect​(String appKey)
             throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### listCollaborators

```java
List<UserVO> listCollaborators​(Long collaborationId,
                               String pattern,
                               int limit,
                               int offset)
                        throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findCollaborationById

```java
CollaborationVO findCollaborationById​(Long collaborationId)
                               throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### validateUserPermissionToEdit

```java
void validateUserPermissionToEdit​(int documentId,
                                  int documentVersion,
                                  String userCode)
                           throws Exception
```

- **Throws:** `` `Exception` ``

