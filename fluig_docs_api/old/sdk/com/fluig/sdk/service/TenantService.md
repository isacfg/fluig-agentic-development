# Interface TenantService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface TenantService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface TenantService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de tenância.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html" title="class in com.fluig.sdk.tenant">TenantVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html" title="class in com.fluig.sdk.tenant">TenantVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Cria um novo tenante.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html">getTenantData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>[]&nbsp;keys)</code></th><td class="colLast"><div class="block">Retorna, caso houver, objeto chaves/valores do tenantData</div></td></tr></tbody></table>

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

        -   #### create

            ```
            TenantVO create​(TenantVO vo)
                     throws com.fluig.sdk.api.common.SDKException
            ```

            Cria um novo tenante.

            Parameters:

            `vo` - Dados do tenante.

            Returns:

            Dados do tenante criado.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o tenante.


        -   #### getTenantData

            ```
            Map<String,​String> getTenantData​(String[] keys)
                                            throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna, caso houver, objeto chaves/valores do tenantData

            Parameters:

            `keys` -

            Returns:

            map key/value tenantData

            Throws:

            `com.fluig.sdk.api.common.SDKException`
