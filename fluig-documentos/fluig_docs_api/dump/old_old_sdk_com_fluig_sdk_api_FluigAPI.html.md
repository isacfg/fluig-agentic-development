# Class FluigAPI

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html)

---

Package [com.fluig.sdk.api](https://api.fluig.com/old/sdk/com/fluig/sdk/api/package-summary.html)

## Class FluigAPI

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.FluigAPI

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class FluigAPI
    extends Object
    implements Serializable
    ```

    Provedora de serviços disponíveis no componente de API SDK

    Version:

    1.00.000

    Author:

    vanei

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">FluigAPI</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html" title="interface in com.fluig.sdk.service">AlertService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getAlertService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Notificações.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html" title="interface in com.fluig.sdk.service">ArticleService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getArticleService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Artigos</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html" title="interface in com.fluig.sdk.service">AuthorizeClientSdkService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getAuthorizeClientService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o AuthorizeClientService</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html" title="interface in com.fluig.sdk.service">CardAPIService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getCardAPIService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço de Registro de formulário</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html" title="interface in com.fluig.sdk.service">CardIndexAPIService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getCardIndexAPIService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço de formulário</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html" title="interface in com.fluig.sdk.service">CardIndexService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getCardIndexService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Card Index</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html" title="interface in com.fluig.sdk.service">CardService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getCardService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Cards</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html" title="interface in com.fluig.sdk.service">CollaborationSDKService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getCollaborationService</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommentService.html" title="interface in com.fluig.sdk.service">CommentService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getCommentService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Comment's</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html" title="interface in com.fluig.sdk.service">CommunityService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getCommunityService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Comunidades.</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html" title="interface in com.fluig.sdk.service">ContentFilesService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getContentFilesService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Upload de arquivos</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html" title="interface in com.fluig.sdk.service">DocumentService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getDocumentService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Documentos</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html" title="interface in com.fluig.sdk.service">FavoritesService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getFavoritesService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Favoritos.</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FilterAPIService.html" title="interface in com.fluig.sdk.service">FilterAPIService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getFilterService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço do Filter</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html" title="interface in com.fluig.sdk.service">FolderDocumentService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getFolderDocumentService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Pastas de documentos</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html" title="interface in com.fluig.sdk.service">GlobalParameterService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getGlobalParameterService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar parâmetros gerais</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html" title="interface in com.fluig.sdk.service">GroupService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getGroupService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Grupo</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentationProxyServiceService.html" title="interface in com.fluig.sdk.service">DocumentationProxyServiceService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getHelpService</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i18" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html" title="interface in com.fluig.sdk.service">HolidayAPIService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getHolidayService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o HolidayAPIService</div></td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html" title="interface in com.fluig.sdk.service">I18NService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getI18NService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar linguagem</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/IdentityService.html" title="interface in com.fluig.sdk.service">IdentityService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getIdentityService</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/JobService.html" title="interface in com.fluig.sdk.service">JobService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getJobService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para Jobs do agendador de tarefas</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html" title="interface in com.fluig.sdk.service">LocalAPIService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getLocalService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o LocalAPIService</div></td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageService.html" title="interface in com.fluig.sdk.service">PageService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getPageService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar paginas</div></td></tr><tr id="i24" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageWidgetService.html" title="interface in com.fluig.sdk.service">PageWidgetService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getPageWidgetService</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html" title="interface in com.fluig.sdk.service">PostService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getPostService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Post's</div></td></tr><tr id="i26" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html" title="interface in com.fluig.sdk.service">SearchService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getSearchService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para efetuar pesquisas</div></td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html" title="interface in com.fluig.sdk.service">SecurityService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getSecurityService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o SecurityService</div></td></tr><tr id="i28" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html" title="interface in com.fluig.sdk.service">SocialBreadcrumbService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getSocialBreadcrumbService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Breadcrumb do Social</div></td></tr><tr id="i29" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialSDKService.html" title="interface in com.fluig.sdk.service">SocialSDKService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getSocialService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço do social</div></td></tr><tr id="i30" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TagsCloudService.html" title="interface in com.fluig.sdk.service">TagsCloudService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getTagsCloudService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o servico de tagscloud</div></td></tr><tr id="i31" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html" title="interface in com.fluig.sdk.service">TasksService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getTasksService</a></span>()</code></th><td class="colLast"><div class="block">Recupera serviço para tratar Tasks.</div></td></tr><tr id="i32" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html" title="interface in com.fluig.sdk.service">TenantService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getTenantService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para Tenant</div></td></tr><tr id="i33" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html" title="interface in com.fluig.sdk.service">UserService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getUserService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Usuário</div></td></tr><tr id="i34" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html" title="interface in com.fluig.sdk.service">WidgetService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getWidgetService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço de widgets</div></td></tr><tr id="i35" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html" title="interface in com.fluig.sdk.service">WorkflowAPIService</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigAPI.html">getWorkflowService</a></span>()</code></th><td class="colLast"><div class="block">Recupera o serviço para tratar Workflow</div></td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### FluigAPI

            ```
            public FluigAPI()
            ```


    -   ### Method Detail

        -   #### getSecurityService

            ```
            public SecurityService getSecurityService()
                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o SecurityService

            Returns:

            SecurityService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getLocalService

            ```
            public LocalAPIService getLocalService()
                                            throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o LocalAPIService

            Returns:

            LocalAPIService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getHolidayService

            ```
            public HolidayAPIService getHolidayService()
                                                throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o HolidayAPIService

            Returns:

            HolidayAPIService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getUserService

            ```
            public UserService getUserService()
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Usuário

            Returns:

            UserService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getGroupService

            ```
            public GroupService getGroupService()
                                         throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Grupo

            Returns:

            GroupService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getTenantService

            ```
            public TenantService getTenantService()
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para Tenant

            Returns:

            TenantService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getContentFilesService

            ```
            public ContentFilesService getContentFilesService()
                                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Upload de arquivos

            Returns:

            ContentFilesService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getDocumentService

            ```
            public DocumentService getDocumentService()
                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Documentos

            Returns:

            DocumentService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getFolderDocumentService

            ```
            public FolderDocumentService getFolderDocumentService()
                                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Pastas de documentos

            Returns:

            FolderDocumentService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getWorkflowService

            ```
            public WorkflowAPIService getWorkflowService()
                                                  throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Workflow

            Returns:

            WorkflowService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCardService

            ```
            public CardService getCardService()
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Cards

            Returns:

            CardService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCardIndexService

            ```
            public CardIndexService getCardIndexService()
                                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço para tratar Card Index

            Returns:

            CardIndexService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getJobService

            ```
            public JobService getJobService()
                                     throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para Jobs do agendador de tarefas

            Returns:

            JobService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getPageService

            ```
            public PageService getPageService()
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar paginas

            Returns:

            PageService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getPageWidgetService

            ```
            public PageWidgetService getPageWidgetService()
                                                   throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getHelpService

            ```
            public DocumentationProxyServiceService getHelpService()
                                                            throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getI18NService

            ```
            public I18NService getI18NService()
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar linguagem

            Returns:

            I18NService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getPostService

            ```
            public PostService getPostService()
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Post's

            Returns:

            PostService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getArticleService

            ```
            public ArticleService getArticleService()
                                             throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Artigos

            Returns:

            [`ArticleService`](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html "interface in com.fluig.sdk.service")

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getSocialBreadcrumbService

            ```
            public SocialBreadcrumbService getSocialBreadcrumbService()
                                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Breadcrumb do Social

            Returns:

            [`SocialBreadcrumbService`](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html "interface in com.fluig.sdk.service")

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCommunityService

            ```
            public CommunityService getCommunityService()
                                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Comunidades.

            Returns:

            CommunityService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getGlobalParameterService

            ```
            public GlobalParameterService getGlobalParameterService()
                                                             throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar parâmetros gerais

            Returns:

            GlobalParameterService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getFavoritesService

            ```
            public FavoritesService getFavoritesService()
                                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Favoritos.

            Returns:

            FavoritesService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getTasksService

            ```
            public TasksService getTasksService()
                                         throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Tasks.

            Returns:

            TasksService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCollaborationService

            ```
            public CollaborationSDKService getCollaborationService()
                                                            throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getIdentityService

            ```
            public IdentityService getIdentityService()
                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getAlertService

            ```
            public AlertService getAlertService()
                                         throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Notificações.

            Returns:

            NotificationService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getAuthorizeClientService

            ```
            public AuthorizeClientSdkService getAuthorizeClientService()
                                                                throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o AuthorizeClientService

            Returns:

            AuthorizeService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getTagsCloudService

            ```
            public TagsCloudService getTagsCloudService()
                                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o servico de tagscloud

            Returns:

            UserService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCommentService

            ```
            public CommentService getCommentService()
                                             throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para tratar Comment's

            Returns:

            CommentService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getSearchService

            ```
            public SearchService getSearchService()
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço para efetuar pesquisas

            Returns:

            SearchService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getSocialService

            ```
            public SocialSDKService getSocialService()
                                              throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera serviço do social

            Returns:

            SocialService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getWidgetService

            ```
            public WidgetService getWidgetService()
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço de widgets

            Returns:

            WidgetService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getFilterService

            ```
            public FilterAPIService getFilterService()
                                              throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço do Filter

            Returns:

            FilterAPIService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCardIndexAPIService

            ```
            public CardIndexAPIService getCardIndexAPIService()
                                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço de formulário

            Returns:

            CardIndexAPIService

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCardAPIService

            ```
            public CardAPIService getCardAPIService()
                                             throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera o serviço de Registro de formulário

            Returns:

            CardAPIService

            Throws:

            `com.fluig.sdk.api.common.SDKException`
