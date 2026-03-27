# Interface AuthorizeClientSdkService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface AuthorizeClientSdkService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface AuthorizeClientSdkService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços externos com autenticação oauth.

    Since:

    1.5.10


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/oauth/OAuthSdkVO.html" title="class in com.fluig.sdk.api.oauth">OAuthSdkVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/oauth/OAuthSdkVO.html" title="class in com.fluig.sdk.api.oauth">OAuthSdkVO</a>&nbsp;vo)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/authorizeclient/AuthorizeClientSdkServiceVO.html" title="class in com.fluig.sdk.api.authorizeclient">AuthorizeClientSdkServiceVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html">invoke</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/authorizeclient/AuthorizeClientSdkServiceVO.html" title="class in com.fluig.sdk.api.authorizeclient">AuthorizeClientSdkServiceVO</a>&nbsp;vo)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/authorizeclient/AuthorizeClientSdkServiceVO.html" title="class in com.fluig.sdk.api.authorizeclient">AuthorizeClientSdkServiceVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html">invoke</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;data)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/authorizeclient/AuthorizeClientSdkServiceVO.html" title="class in com.fluig.sdk.api.authorizeclient">AuthorizeClientSdkServiceVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html">invokeService</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;data)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

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

        -   #### invoke

            ```
            AuthorizeClientSdkServiceVO invoke​(AuthorizeClientSdkServiceVO vo)
                                        throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### invoke

            ```
            AuthorizeClientSdkServiceVO invoke​(String data)
                                        throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### invokeService

            ```
            AuthorizeClientSdkServiceVO invokeService​(String data)
                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### create

            ```
            OAuthSdkVO create​(OAuthSdkVO vo)
                       throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`
