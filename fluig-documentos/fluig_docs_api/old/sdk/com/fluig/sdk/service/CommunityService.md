# Interface CommunityService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface CommunityService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface CommunityService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de manutenção de comunidades.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html">addUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;communityId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias)</code></th><td class="colLast"><div class="block">Adiciona um usuário em uma comunidade.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html">addUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;communityAlias, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;users)</code></th><td class="colLast"><div class="block">Adiciona uma lista de usuários na comunidade</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommunityVO.html" title="class in com.fluig.sdk.api.social">CommunityVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommunityVO.html" title="class in com.fluig.sdk.api.social">CommunityVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Cria uma nova comunidade.</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html">disablePostEditionAllCommunities</a></span>()</code></th><td class="colLast"><div class="block">Desabilita a edição de post para todas as comunidades, incluindo no papel de usuario</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommunityVO.html" title="class in com.fluig.sdk.api.social">CommunityVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html">update</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommunityVO.html" title="class in com.fluig.sdk.api.social">CommunityVO</a>&nbsp;vo)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

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
            CommunityVO create​(CommunityVO vo)
                        throws com.fluig.sdk.api.common.SDKException
            ```

            Cria uma nova comunidade.

            Parameters:

            `vo` - Dados da comunidade a ser criada.

            Returns:

            Comunidade criada.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possível criar a comunidade.


        -   #### addUser

            ```
            void addUser​(Long communityId,
                         String alias)
                  throws com.fluig.sdk.api.common.SDKException
            ```

            Adiciona um usuário em uma comunidade.

            Parameters:

            `communityId` - ID da comunidade.

            `alias` - Alias do usuário.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### addUsers

            ```
            void addUsers​(String communityAlias,
                          List<String> users)
                   throws com.fluig.sdk.api.common.SDKException
            ```

            Adiciona uma lista de usuários na comunidade

            Parameters:

            `communityAlias` -

            `userList` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### update

            ```
            CommunityVO update​(CommunityVO vo)
                        throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### disablePostEditionAllCommunities

            ```
            void disablePostEditionAllCommunities()
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Desabilita a edição de post para todas as comunidades, incluindo no papel de usuario

            Throws:

            `com.fluig.sdk.api.common.SDKException`
