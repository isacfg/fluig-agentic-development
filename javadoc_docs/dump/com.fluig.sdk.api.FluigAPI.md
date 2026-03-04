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

