# Interface BaseAPIService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface BaseAPIService

-   All Known Subinterfaces:

    `[AlertService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html "interface in com.fluig.sdk.service")`, `[ApplicationUserDataService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ApplicationUserDataService.html "interface in com.fluig.sdk.service")`, `[ArticleService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html "interface in com.fluig.sdk.service")`, `[AuthorizeClientSdkService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html "interface in com.fluig.sdk.service")`, `[CardAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html "interface in com.fluig.sdk.service")`, `[CardIndexAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html "interface in com.fluig.sdk.service")`, `[CardIndexService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html "interface in com.fluig.sdk.service")`, `[CardService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html "interface in com.fluig.sdk.service")`, `[CollaborationSDKService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html "interface in com.fluig.sdk.service")`, `[CommentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommentService.html "interface in com.fluig.sdk.service")`, `[CommunityService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html "interface in com.fluig.sdk.service")`, `[ContentFilesService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html "interface in com.fluig.sdk.service")`, `[CustomAppKeyService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CustomAppKeyService.html "interface in com.fluig.sdk.service")`, `[DocumentationProxyServiceService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentationProxyServiceService.html "interface in com.fluig.sdk.service")`, `[DocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html "interface in com.fluig.sdk.service")`, `[FavoritesService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html "interface in com.fluig.sdk.service")`, `[FilterAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FilterAPIService.html "interface in com.fluig.sdk.service")`, `[FolderDocumentService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html "interface in com.fluig.sdk.service")`, `[GlobalParameterService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html "interface in com.fluig.sdk.service")`, `[GroupService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html "interface in com.fluig.sdk.service")`, `[HolidayAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html "interface in com.fluig.sdk.service")`, `[I18NService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html "interface in com.fluig.sdk.service")`, `[IdentityService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/IdentityService.html "interface in com.fluig.sdk.service")`, `[JobService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/JobService.html "interface in com.fluig.sdk.service")`, `[LocalAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html "interface in com.fluig.sdk.service")`, `[MentionService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/MentionService.html "interface in com.fluig.sdk.service")`, `[OAuthUserService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/OAuthUserService.html "interface in com.fluig.sdk.service")`, `[PageService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageService.html "interface in com.fluig.sdk.service")`, `[PageWidgetService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageWidgetService.html "interface in com.fluig.sdk.service")`, `[PostService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html "interface in com.fluig.sdk.service")`, `[SearchService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html "interface in com.fluig.sdk.service")`, `[SecurityService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html "interface in com.fluig.sdk.service")`, `[SocialBreadcrumbService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html "interface in com.fluig.sdk.service")`, `[SocialSDKService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialSDKService.html "interface in com.fluig.sdk.service")`, `[TagsCloudService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TagsCloudService.html "interface in com.fluig.sdk.service")`, `[TasksService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html "interface in com.fluig.sdk.service")`, `[TenantService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html "interface in com.fluig.sdk.service")`, `[UserService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html "interface in com.fluig.sdk.service")`, `[WidgetService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html "interface in com.fluig.sdk.service")`, `[WorkflowAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface BaseAPIService
    ```

    Interface base

    Version:

    1.00.000

    Author:

    vanei


-   -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t5" class="tableTab"><span><a href="javascript:show(16);">Default Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>default boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html">expand</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;attributeName)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>default <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.sdk.service.vo.common.OrderParam&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html">generateOrderParam</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;orderAttributes)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>



-   -   ### Method Detail

        -   #### generateOrderParam

            ```
            default List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> generateOrderParam​(String order,
                                                                                                              List<String> orderAttributes)
            ```


        -   #### expand

            ```
            default boolean expand​(String expand,
                                   String attributeName)
            ```
