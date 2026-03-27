# Interface CardIndexService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface CardIndexService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface CardIndexService
    extends BaseAPIService
    ```

    Fornece operações para gerenciamento card index

    Since:

    1.5

    Author:

    vanei.heidemann


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexVO.html" title="class in com.fluig.sdk.api.workflow">CardIndexVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexVO.html" title="class in com.fluig.sdk.api.workflow">CardIndexVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Criação de um novo card index</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html">delete</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Exclusão de um card index</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html">getDefaultFormFolderId</a></span>()</code></th><td class="colLast"><div class="block">Retorna a pasta padrão de formulário</div></td></tr></tbody></table>

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
            CardIndexVO create​(CardIndexVO vo)
                        throws com.fluig.sdk.api.common.SDKException
            ```

            Criação de um novo card index

            Parameters:

            `vo` - - object to persist

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### delete

            ```
            void delete​(Integer documentId)
            ```

            Exclusão de um card index

            Parameters:

            `Integer` - documentId


        -   #### getDefaultFormFolderId

            ```
            Integer getDefaultFormFolderId()
                                    throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a pasta padrão de formulário

            Parameters:

            `Integer` - documentId

            Throws:

            `com.fluig.sdk.api.common.SDKException`
