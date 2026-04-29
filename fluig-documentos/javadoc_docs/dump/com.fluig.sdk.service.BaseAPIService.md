# Interface BaseAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html)

**Hierarquia:**
```
All Known Subinterfaces:
AlertService, ApplicationUserDataService, ArticleService, AuthorizeClientSdkService, CardAPIService, CardIndexAPIService, CardIndexService, CardService, CollaborationSDKService, CommentService, CommunityService, ContentFilesService, CustomAppKeyService, DocumentationProxyServiceService, DocumentService, FavoritesService, FilterAPIService, FolderDocumentService, GlobalParameterService, GroupService, HolidayAPIService, I18NService, IdentityService, JobService, LocalAPIService, MentionService, OAuthUserService, PageService, PageWidgetService, PostService, SearchService, SecurityService, SocialBreadcrumbService, SocialSDKService, TagsCloudService, TasksService, TenantService, UserService, WidgetService, WorkflowAPIService
  public interface BaseAPIService
Interface base
  Version:
1.00.000
Author:
vanei
```

```java
public interface BaseAPIService
```

Interface base

- **All Known Subinterfaces:** AlertService, ApplicationUserDataService, ArticleService, AuthorizeClientSdkService, CardAPIService, CardIndexAPIService, CardIndexService, CardService, CollaborationSDKService, CommentService, CommunityService, ContentFilesService, CustomAppKeyService, DocumentationProxyServiceService, DocumentService, FavoritesService, FilterAPIService, FolderDocumentService, GlobalParameterService, GroupService, HolidayAPIService, I18NService, IdentityService, JobService, LocalAPIService, MentionService, OAuthUserService, PageService, PageWidgetService, PostService, SearchService, SecurityService, SocialBreadcrumbService, SocialSDKService, TagsCloudService, TasksService, TenantService, UserService, WidgetService, WorkflowAPIService
- **Version:** 1.00.000
- **Author:** vanei

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `default boolean` | `expand​(String expand, String attributeName)` |  |
| `default List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam>` | `generateOrderParam​(String order, List<String> orderAttributes)` |  |


---

## Detalhes dos Métodos

### generateOrderParam

```java
default List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> generateOrderParam​(String order,
                                                                                                  List<String> orderAttributes)
```


---

### expand

```java
default boolean expand​(String expand,
                       String attributeName)
```


