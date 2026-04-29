# Interface WidgetService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface WidgetService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface WidgetService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de permissão.


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Properties.html?is-external=true" title="class or interface in java.util" class="externalLink">Properties</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html">findWidgetPermissionList</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;widgetCode)</code></th><td class="colLast"><div class="block">Busca pelas permissões em banco de uma determinada widget</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html">grantWidgetDefaultPermission</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;widgetCode)</code></th><td class="colLast"><div class="block">Adiciona as permissões padrão de um widget</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Properties.html?is-external=true" title="class or interface in java.util" class="externalLink">Properties</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html">listAllWidgetsPermission</a></span>()</code></th><td class="colLast"><div class="block">Lista as permissões de todas as widgets</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html">revokeWidgetPermission</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;widgetCode)</code></th><td class="colLast"><div class="block">Remove as permissões gerais de uma widget</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html">searchForbiddenResourceCodes</a></span>()</code></th><td class="colLast"><div class="block">Busca códigos de recursos que não devem ser listados</div></td></tr></tbody></table>

        -   ### Methods inherited from interface com.fluig.sdk.service.[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")

            `[expand](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html), [generateOrderParam](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html)`


-   -   ### Field Detail

        -   #### JNDI\_NAME

            ```
            static final String JNDI_NAME
            ```

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### JNDI\_REMOTE\_NAME

            ```
            static final String JNDI_REMOTE_NAME
            ```

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


    -   ### Method Detail

        -   #### revokeWidgetPermission

            ```
            void revokeWidgetPermission​(String widgetCode)
                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Remove as permissões gerais de uma widget

            Parameters:

            `widgetCode` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.13


        -   #### grantWidgetDefaultPermission

            ```
            void grantWidgetDefaultPermission​(String widgetCode)
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Adiciona as permissões padrão de um widget

            Parameters:

            `widgetCode` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findWidgetPermissionList

            ```
            Map<String,​Properties> findWidgetPermissionList​(String widgetCode)
                                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Busca pelas permissões em banco de uma determinada widget

            Parameters:

            `widgetCode` -

            Returns:

            Mapa de permissões

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.13


        -   #### listAllWidgetsPermission

            ```
            List<Properties> listAllWidgetsPermission()
                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Lista as permissões de todas as widgets

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### searchForbiddenResourceCodes

            ```
            List<String> searchForbiddenResourceCodes()
                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Busca códigos de recursos que não devem ser listados

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`
