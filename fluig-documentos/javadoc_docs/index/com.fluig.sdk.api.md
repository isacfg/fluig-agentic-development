# com.fluig.sdk.api

> **7 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/package-summary.html)

---

Deserializa mapa de array

---

## Class Summary

| Nome | Descrição |
| --- | --- |

## Enum Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class ArrayMapDeserializer](#class-arraymapdeserializer)
- [Class FluigAPI](#class-fluigapi)
- [Class FluigMessage](#class-fluigmessage)
- [Enum FluigMessageType](#enum-fluigmessagetype)
- [Class RestViews.Message](#class-restviewsmessage)
- [Class RestViews.Mobile](#class-restviewsmobile)
- [Class RestViews](#class-restviews)

---

# Class ArrayMapDeserializer

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html)

**Hierarquia:**
```
java.lang.Object
  com.fasterxml.jackson.databind.JsonDeserializer<Map<String,​String>>
  com.fluig.sdk.api.ArrayMapDeserializer
```

```java
public class ArrayMapDeserializer
extends com.fasterxml.jackson.databind.JsonDeserializer<Map<String,​String>>
```

Deserializa mapa de array

- **All Implemented Interfaces:** com.fasterxml.jackson.databind.deser.NullValueProvider
- **Version:** 1.00.000
- **Author:** vanei

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ArrayMapDeserializer()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Map<String,​String>` | `deserialize​(com.fasterxml.jackson.core.JsonParser jp, com.fasterxml.jackson.databind.DeserializationContext context)` | Deserializa mapa de array |


---

## Detalhes dos Construtores

### ArrayMapDeserializer

```java
public ArrayMapDeserializer()
```



## Detalhes dos Métodos

### deserialize

```java
public Map<String,​String> deserialize​(com.fasterxml.jackson.core.JsonParser jp,
                                            com.fasterxml.jackson.databind.DeserializationContext context)
                                     throws IOException
```

Deserializa mapa de array

- **Specified by:** `deserialize` in class ``com.fasterxml.jackson.databind.JsonDeserializer<`Map`<`String`,​`String`>>``
- **Throws:** `` `IOException` ``

---

# Class FluigAPI

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.FluigAPI
```

```java
public class FluigAPI
extends Object
implements Serializable
```

Provedora de serviços disponíveis no componente de API SDK

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FluigAPI()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `AlertService` | `getAlertService()` | Recupera serviço para tratar Notificações. |
| `ArticleService` | `getArticleService()` | Recupera serviço para tratar Artigos |
| `AuthorizeClientSdkService` | `getAuthorizeClientService()` | Recupera o AuthorizeClientService |
| `CardAPIService` | `getCardAPIService()` | Recupera o serviço de Registro de formulário |
| `CardIndexAPIService` | `getCardIndexAPIService()` | Recupera o serviço de formulário |
| `CardIndexService` | `getCardIndexService()` | Recupera o serviço para tratar Card Index |
| `CardService` | `getCardService()` | Recupera o serviço para tratar Cards |
| `CollaborationSDKService` | `getCollaborationService()` |  |
| `CommentService` | `getCommentService()` | Recupera serviço para tratar Comment's |
| `CommunityService` | `getCommunityService()` | Recupera serviço para tratar Comunidades. |
| `ContentFilesService` | `getContentFilesService()` | Recupera o serviço para tratar Upload de arquivos |
| `DocumentService` | `getDocumentService()` | Recupera o serviço para tratar Documentos |
| `FavoritesService` | `getFavoritesService()` | Recupera serviço para tratar Favoritos. |
| `FilterAPIService` | `getFilterService()` | Recupera o serviço do Filter |
| `FolderDocumentService` | `getFolderDocumentService()` | Recupera o serviço para tratar Pastas de documentos |
| `GlobalParameterService` | `getGlobalParameterService()` | Recupera serviço para tratar parâmetros gerais |
| `GroupService` | `getGroupService()` | Recupera o serviço para tratar Grupo |
| `DocumentationProxyServiceService` | `getHelpService()` |  |
| `HolidayAPIService` | `getHolidayService()` | Recupera o HolidayAPIService |
| `I18NService` | `getI18NService()` | Recupera serviço para tratar linguagem |
| `IdentityService` | `getIdentityService()` |  |
| `JobService` | `getJobService()` | Recupera serviço para Jobs do agendador de tarefas |
| `LocalAPIService` | `getLocalService()` | Recupera o LocalAPIService |
| `PageService` | `getPageService()` | Recupera serviço para tratar paginas |
| `PageWidgetService` | `getPageWidgetService()` |  |
| `PostService` | `getPostService()` | Recupera serviço para tratar Post's |
| `SearchService` | `getSearchService()` | Recupera serviço para efetuar pesquisas |
| `SecurityService` | `getSecurityService()` | Recupera o SecurityService |
| `SocialBreadcrumbService` | `getSocialBreadcrumbService()` | Recupera serviço para tratar Breadcrumb do Social |
| `SocialSDKService` | `getSocialService()` | Recupera serviço do social |
| `TagsCloudService` | `getTagsCloudService()` | Recupera o servico de tagscloud |
| `TasksService` | `getTasksService()` | Recupera serviço para tratar Tasks. |
| `TenantService` | `getTenantService()` | Recupera o serviço para Tenant |
| `UserService` | `getUserService()` | Recupera o serviço para tratar Usuário |
| `WidgetService` | `getWidgetService()` | Recupera o serviço de widgets |
| `WorkflowAPIService` | `getWorkflowService()` | Recupera o serviço para tratar Workflow |


---

## Detalhes dos Construtores

### FluigAPI

```java
public FluigAPI()
```



## Detalhes dos Métodos

### getSecurityService

```java
public SecurityService getSecurityService()
                                   throws com.fluig.sdk.api.common.SDKException
```

Recupera o SecurityService

- **Returns:** SecurityService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getLocalService

```java
public LocalAPIService getLocalService()
                                throws com.fluig.sdk.api.common.SDKException
```

Recupera o LocalAPIService

- **Returns:** LocalAPIService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getHolidayService

```java
public HolidayAPIService getHolidayService()
                                    throws com.fluig.sdk.api.common.SDKException
```

Recupera o HolidayAPIService

- **Returns:** HolidayAPIService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getUserService

```java
public UserService getUserService()
                           throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Usuário

- **Returns:** UserService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getGroupService

```java
public GroupService getGroupService()
                             throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Grupo

- **Returns:** GroupService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getTenantService

```java
public TenantService getTenantService()
                               throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para Tenant

- **Returns:** TenantService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getContentFilesService

```java
public ContentFilesService getContentFilesService()
                                           throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Upload de arquivos

- **Returns:** ContentFilesService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getDocumentService

```java
public DocumentService getDocumentService()
                                   throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Documentos

- **Returns:** DocumentService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getFolderDocumentService

```java
public FolderDocumentService getFolderDocumentService()
                                               throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Pastas de documentos

- **Returns:** FolderDocumentService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getWorkflowService

```java
public WorkflowAPIService getWorkflowService()
                                      throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Workflow

- **Returns:** WorkflowService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCardService

```java
public CardService getCardService()
                           throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Cards

- **Returns:** CardService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCardIndexService

```java
public CardIndexService getCardIndexService()
                                     throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço para tratar Card Index

- **Returns:** CardIndexService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getJobService

```java
public JobService getJobService()
                         throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para Jobs do agendador de tarefas

- **Returns:** JobService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getPageService

```java
public PageService getPageService()
                           throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar paginas

- **Returns:** PageService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getPageWidgetService

```java
public PageWidgetService getPageWidgetService()
                                       throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getHelpService

```java
public DocumentationProxyServiceService getHelpService()
                                                throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getI18NService

```java
public I18NService getI18NService()
                           throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar linguagem

- **Returns:** I18NService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getPostService

```java
public PostService getPostService()
                           throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Post's

- **Returns:** PostService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getArticleService

```java
public ArticleService getArticleService()
                                 throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Artigos

- **Returns:** [`ArticleService`](../service/ArticleService.html "interface in com.fluig.sdk.service")
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getSocialBreadcrumbService

```java
public SocialBreadcrumbService getSocialBreadcrumbService()
                                                   throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Breadcrumb do Social

- **Returns:** [`SocialBreadcrumbService`](../service/SocialBreadcrumbService.html "interface in com.fluig.sdk.service")
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCommunityService

```java
public CommunityService getCommunityService()
                                     throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Comunidades.

- **Returns:** CommunityService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getGlobalParameterService

```java
public GlobalParameterService getGlobalParameterService()
                                                 throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar parâmetros gerais

- **Returns:** GlobalParameterService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getFavoritesService

```java
public FavoritesService getFavoritesService()
                                     throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Favoritos.

- **Returns:** FavoritesService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getTasksService

```java
public TasksService getTasksService()
                             throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Tasks.

- **Returns:** TasksService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCollaborationService

```java
public CollaborationSDKService getCollaborationService()
                                                throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getIdentityService

```java
public IdentityService getIdentityService()
                                   throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getAlertService

```java
public AlertService getAlertService()
                             throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Notificações.

- **Returns:** NotificationService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getAuthorizeClientService

```java
public AuthorizeClientSdkService getAuthorizeClientService()
                                                    throws com.fluig.sdk.api.common.SDKException
```

Recupera o AuthorizeClientService

- **Returns:** AuthorizeService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getTagsCloudService

```java
public TagsCloudService getTagsCloudService()
                                     throws com.fluig.sdk.api.common.SDKException
```

Recupera o servico de tagscloud

- **Returns:** UserService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCommentService

```java
public CommentService getCommentService()
                                 throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para tratar Comment's

- **Returns:** CommentService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getSearchService

```java
public SearchService getSearchService()
                               throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço para efetuar pesquisas

- **Returns:** SearchService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getSocialService

```java
public SocialSDKService getSocialService()
                                  throws com.fluig.sdk.api.common.SDKException
```

Recupera serviço do social

- **Returns:** SocialService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getWidgetService

```java
public WidgetService getWidgetService()
                               throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço de widgets

- **Returns:** WidgetService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getFilterService

```java
public FilterAPIService getFilterService()
                                  throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço do Filter

- **Returns:** FilterAPIService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCardIndexAPIService

```java
public CardIndexAPIService getCardIndexAPIService()
                                           throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço de formulário

- **Returns:** CardIndexAPIService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCardAPIService

```java
public CardAPIService getCardAPIService()
                                 throws com.fluig.sdk.api.common.SDKException
```

Recupera o serviço de Registro de formulário

- **Returns:** CardAPIService
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Class FluigMessage

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.FluigMessage
```

```java
public class FluigMessage
extends Object
implements Serializable
```

Mensagens a serem enviadas ao lado cliente.

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FluigMessage()` | Construtor default. |
| `FluigMessage​(FluigMessageType type, String message)` | Construtor com o tipo e a mensagem. |
| `FluigMessage​(FluigMessageType type, String message, String detail)` | Construtor com o tipo, a mensagem e uma descrição detalhada. |
| `FluigMessage​(FluigMessageType type, String message, String detail, String errorCode)` | Construtor com o tipo, a mensagem e uma descrição detalhada. |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDetail()` | Retorna a descrição detalhada da mensagem. |
| `String` | `getErrorCode()` |  |
| `String` | `getMessage()` | Retorna a mensagem. |
| `FluigMessageType` | `getType()` | Retorna o tipo da mensagem. |
| `void` | `setDetail​(String detail)` | Informa uma descrição detalhada para a mensagem. |
| `void` | `setErrorCode​(String errorCode)` |  |
| `void` | `setMessage​(String message)` | Altera a mensagem. |
| `void` | `setType​(FluigMessageType type)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### FluigMessage

```java
public FluigMessage()
```

Construtor default.


---

### FluigMessage

```java
public FluigMessage​(FluigMessageType type,
                    String message)
```

Construtor com o tipo e a mensagem. O detalhe será igual a mensagem.

- **Parameters:** `type` - Tipo.

---

### FluigMessage

```java
public FluigMessage​(FluigMessageType type,
                    String message,
                    String detail)
```

Construtor com o tipo, a mensagem e uma descrição detalhada.

- **Parameters:** `type` - Tipo da menagem.

---

### FluigMessage

```java
public FluigMessage​(FluigMessageType type,
                    String message,
                    String detail,
                    String errorCode)
```

Construtor com o tipo, a mensagem e uma descrição detalhada.

- **Parameters:** `type` - Tipo da menagem.


## Detalhes dos Métodos

### getMessage

```java
public String getMessage()
```

Retorna a mensagem.

- **Returns:** Mensagem.

---

### setMessage

```java
public void setMessage​(String message)
```

Altera a mensagem.

- **Parameters:** `message` - Mensagem.

---

### getType

```java
public FluigMessageType getType()
```

Retorna o tipo da mensagem.

- **Returns:** Tipo da mensagem.

---

### setType

```java
public void setType​(FluigMessageType type)
```


---

### getErrorCode

```java
public String getErrorCode()
```


---

### setErrorCode

```java
public void setErrorCode​(String errorCode)
```


---

### getDetail

```java
public String getDetail()
```

Retorna a descrição detalhada da mensagem.

- **Returns:** Descrição detalhada da mensagem.

---

### setDetail

```java
public void setDetail​(String detail)
```

Informa uma descrição detalhada para a mensagem.

- **Parameters:** `detail` - Detalhes da mensagem.

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

# Enum FluigMessageType

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<FluigMessageType>
  com.fluig.sdk.api.FluigMessageType
```

```java
public enum FluigMessageType
extends Enum<FluigMessageType>
```

Define os tipos de mensagens suportadas pelo sistema para comunicação com o cliente.

- **All Implemented Interfaces:** Serializable, Comparable<FluigMessageType>
- **Version:** 1.00.000
- **Author:** vanei

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static FluigMessageType` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static FluigMessageType[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `ERROR` | Erro. |
| `INFO` | Informações gerais. |
| `QUESTION` | Pergunta. |
| `WARNING` | Aviso importante. |


---

## Detalhes dos Métodos

### values

```java
public static FluigMessageType[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (FluigMessageType c : FluigMessageType.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static FluigMessageType valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### INFO

```java
public static final FluigMessageType INFO
```

Informações gerais.


---

### WARNING

```java
public static final FluigMessageType WARNING
```

Aviso importante.


---

### ERROR

```java
public static final FluigMessageType ERROR
```

Erro.


---

### QUESTION

```java
public static final FluigMessageType QUESTION
```

Pergunta.

---

# Class RestViews.Message

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/RestViews.Message.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/RestViews.Message.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.RestViews.Message
```

```java
public static class RestViews.Message
extends Object
```

Tratamento da mensagem de retorno do serviço

- **Direct Known Subclasses:** RestViews.Mobile
- **Enclosing class:** RestViews
- **Version:** 1.00.000
- **Author:** vanei

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `Message()` |  |


---

## Detalhes dos Construtores

### Message

```java
public Message()
```

---

# Class RestViews.Mobile

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/RestViews.Mobile.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/RestViews.Mobile.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.RestViews.Message
  com.fluig.sdk.api.RestViews.Mobile
```

```java
public static class RestViews.Mobile
extends RestViews.Message
```

Trata retorno para o lado cliente mobile

- **Enclosing class:** RestViews
- **Version:** 1.00.000
- **Author:** vanei

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `Mobile()` |  |


---

## Detalhes dos Construtores

### Mobile

```java
public Mobile()
```

---

# Class RestViews

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/RestViews.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/RestViews.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.RestViews
```

```java
public class RestViews
extends Object
```

Intercepta e trata retorno de serviço rest para o lado cliente, retornando somente as informações relevantes para si.

- **Version:** 1.00.000
- **Author:** vanei

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `RestViews()` |  |


---

## Detalhes dos Construtores

### RestViews

```java
public RestViews()
```

---
