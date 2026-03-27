# Interface GroupService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface GroupService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface GroupService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de grupos.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">addUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;groupCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;logins)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">addUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;groupCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;logins)</code></th><td class="colLast"><div class="block">Adiciona um usuário ao grupo.</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">containsUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;groupCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;genericId)</code></th><td class="colLast"><div class="block">Verifica se o usuário pertence ao grupo.</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html" title="class in com.fluig.sdk.api.group">GroupVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html" title="class in com.fluig.sdk.api.group">GroupVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Cria um novo grupo.</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html" title="class in com.fluig.sdk.api.group">GroupVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html" title="class in com.fluig.sdk.api.group">GroupVO</a>&nbsp;vo, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId)</code></th><td class="colLast"><div class="block">Create grupo</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html" title="class in com.fluig.sdk.api.group">GroupVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">findGroupsByUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;genericId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern)</code></th><td class="colLast"><div class="block">Retorna grupo por usuário</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/ColleagueVO.html" title="class in com.fluig.sdk.user">ColleagueVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">findUsersByGroup</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;groupId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern, int&nbsp;limit, int&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order)</code></th><td class="colLast"><div class="block">Retorna usuários por grupo</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html">removeUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;groupCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias)</code></th><td class="colLast"><div class="block">Remove um usuário do grupo.</div></td></tr></tbody></table>

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
            GroupVO create​(GroupVO vo)
                    throws com.fluig.sdk.api.common.SDKException
            ```

            Cria um novo grupo.

            Parameters:

            `vo` - Dados do grupo.

            Returns:

            Dados do grupo criado.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o grupo.


        -   #### containsUser

            ```
            Boolean containsUser​(String groupCode,
                                 String genericId)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Verifica se o usuário pertence ao grupo.

            Parameters:

            `groupCode` - Código do grupo.

            `genericId` - User's generic indentifier, can be (login, idpId or userCode).

            Returns:

            **true** se o usuário pertence ao grupo, **false** caso contrário.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha buscando informação.


        -   #### addUsers

            ```
            List<String> addUsers​(String groupCode,
                                  List<String> logins)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Adiciona um usuário ao grupo.

            Parameters:

            `groupCode` - Código do grupo.

            `logins` - Lista de login de usuários.

            Returns:

            List Lista de usuários que não foram adicionados ao grupo

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha adicionando usuário ao grupo.


        -   #### addUsers

            ```
            void addUsers​(Long tenantId,
                          String groupCode,
                          List<String> logins)
                   throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### removeUser

            ```
            void removeUser​(Long tenantId,
                            String groupCode,
                            String alias)
                     throws com.fluig.sdk.api.common.SDKException
            ```

            Remove um usuário do grupo.

            Parameters:

            `groupCode` - Código do grupo.

            `logins` - Lista de login de usuários.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha adicionando usuário ao grupo.


        -   #### findUsersByGroup

            ```
            List<ColleagueVO> findUsersByGroup​(String groupId,
                                               String pattern,
                                               int limit,
                                               int offset,
                                               String order)
                                        throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna usuários por grupo

            Parameters:

            `groupId` -

            `pattern` -

            Returns:

            lista dos usuários do grupo.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha ao retornar os usuários do grupo


        -   #### findGroupsByUser

            ```
            List<GroupVO> findGroupsByUser​(String genericId,
                                           String pattern)
                                    throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna grupo por usuário

            Parameters:

            `genericId` -

            `pattern` -

            Returns:

            lista dos grupos de usuário.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha ao retornar os grupo de usuário


        -   #### create

            ```
            GroupVO create​(GroupVO vo,
                           Long tenantId)
                    throws com.fluig.sdk.api.common.SDKException
            ```

            Create grupo

            Parameters:

            `vo` -

            `tenantId` -

            Returns:

            Dados do grupo criado.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o grupo.
