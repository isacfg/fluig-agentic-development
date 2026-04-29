# Interface SearchService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface SearchService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface SearchService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de busca


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="altColor"><td class="colFirst"><code>static int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">MAX_INFLUENCERS_RESULT</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchResponse.html" title="class in com.fluig.sdk.api.search">DefaultSearchResponse</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">findInfluencers</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html" title="class in com.fluig.sdk.api.search">DefaultSearchRequest</a>&nbsp;search)</code></th><td class="colLast"><div class="block">Retorna lista de influenciadores para um assunto(#tag)</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchResponse.html" title="class in com.fluig.sdk.api.search">DefaultSearchResponse</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">findInfluencers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;search)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&gt;&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">groupedSearch</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html" title="class in com.fluig.sdk.api.search">DefaultSearchRequest</a>&nbsp;request)</code></th><td class="colLast"><div class="block">Retorna uma lista de resultados agrupadas</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&gt;&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">groupedSearchByType</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html" title="class in com.fluig.sdk.api.search">DefaultSearchRequest</a>&nbsp;request)</code></th><td class="colLast"><div class="block">Retorna uma lista de resultados agrupadas por tipo</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchResponse.html" title="class in com.fluig.sdk.api.search">DefaultSearchResponse</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html">search</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html" title="class in com.fluig.sdk.api.search">DefaultSearchRequest</a>&nbsp;request)</code></th><td class="colLast"><div class="block">Retorna a pesquisa padrão, com os tipos de documentos encontrados em forma de lista</div></td></tr></tbody></table>

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


        -   #### MAX\_INFLUENCERS\_RESULT

            ```
            static final int MAX_INFLUENCERS_RESULT
            ```

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


    -   ### Method Detail

        -   #### search

            ```
            DefaultSearchResponse search​(DefaultSearchRequest request)
                                  throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a pesquisa padrão, com os tipos de documentos encontrados em forma de lista

            Parameters:

            `request` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findInfluencers

            ```
            DefaultSearchResponse findInfluencers​(DefaultSearchRequest search)
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna lista de influenciadores para um assunto(#tag)

            Parameters:

            `String` - search

            Returns:

            `InfluencersSearch`

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findInfluencers

            ```
            DefaultSearchResponse findInfluencers​(String search)
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### groupedSearch

            ```
            List<Map<String,​Object>> groupedSearch​(DefaultSearchRequest request)
                                                  throws com.fluig.sdk.api.common.SDKException,
                                                         NamingException
            ```

            Retorna uma lista de resultados agrupadas

            Parameters:

            `request` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            `[NamingException](https://docs.oracle.com/en/java/javase/11/docs/api/java.naming/javax/naming/NamingException.html?is-external=true "class or interface in javax.naming")`


        -   #### groupedSearchByType

            ```
            List<Map<String,​Object>> groupedSearchByType​(DefaultSearchRequest request)
                                                        throws com.fluig.sdk.api.common.SDKException,
                                                               NamingException
            ```

            Retorna uma lista de resultados agrupadas por tipo

            Parameters:

            `request` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            `[NamingException](https://docs.oracle.com/en/java/javase/11/docs/api/java.naming/javax/naming/NamingException.html?is-external=true "class or interface in javax.naming")`
