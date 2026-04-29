# Interface PostService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface PostService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface PostService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de post.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html" title="class in com.fluig.sdk.api.social">PostVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html" title="class in com.fluig.sdk.api.social">PostVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Realiza um post em uma timeline, seja pessoal ou de alguma comunidade.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html" title="class in com.fluig.sdk.api.social">PostVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html">createWithUpload</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html" title="class in com.fluig.sdk.api.social">PostVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Realiza um post com anexo em uma timeline, seja pessoal ou de alguma comunidade.</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html">editPost</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;postId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;text)</code></th><td class="colLast"><div class="block">Edit a single post</div></td></tr></tbody></table>

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
            PostVO create​(PostVO vo)
                   throws com.fluig.sdk.api.common.SDKException
            ```

            Realiza um post em uma timeline, seja pessoal ou de alguma comunidade.

            Parameters:

            `vo` - Dados do post.

            Returns:

            Dados do post criado.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possível efetuar o post.


        -   #### createWithUpload

            ```
            PostVO createWithUpload​(PostVO vo)
                             throws com.fluig.sdk.api.common.SDKException
            ```

            Realiza um post com anexo em uma timeline, seja pessoal ou de alguma comunidade.

            Parameters:

            `vo` - Dados do post.

            Returns:

            Dados do post criado.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possível efetuar o post.


        -   #### editPost

            ```
            void editPost​(Long postId,
                          String text)
                   throws com.fluig.sdk.api.common.SDKException,
                          com.totvs.technology.foundation.common.exception.FDNException,
                          NamingException
            ```

            Edit a single post

            Parameters:

            `postId` -

            `text` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            `[NamingException](https://docs.oracle.com/en/java/javase/11/docs/api/java.naming/javax/naming/NamingException.html?is-external=true "class or interface in javax.naming")`

            `com.totvs.technology.foundation.common.exception.FDNException`
