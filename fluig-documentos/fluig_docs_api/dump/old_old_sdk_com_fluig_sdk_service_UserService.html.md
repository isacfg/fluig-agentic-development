# Interface UserService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface UserService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface UserService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de usuário.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t6" class="tableTab"><span><a href="javascript:show(32);">Deprecated Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">activateByCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;genericId)</code></th><td class="colLast"><div class="block">Activate an user by his login, idpId or userCode.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">addUserToGroup</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;groupCode, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&nbsp;userVO)</code></th><td class="colLast"><div class="block">ADD user to a specific group</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">changeUserPassword</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserPasswordVO.html" title="class in com.fluig.sdk.user">UserPasswordVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Change the user password</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Cria um novo usuário.</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">create</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&nbsp;vo)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">deactivateByCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;genericId)</code></th><td class="colLast"><div class="block">Deactivate an user by his login, idpId or userCode.</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">findById</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Retorna o usuário pelo id.</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">findByLogin</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;login)</code></th><td class="colLast"><div class="block">Retorna o usuário pelo login.</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">findByUserCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">getCurrent</a></span>()</code></th><td class="colLast"><div class="block">Retorna o usuário corrente logado.</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">getUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;genericId)</code></th><td class="colLast"><div class="block"><span class="deprecatedLabel">Deprecated.</span><div class="deprecationComment">Em alguns casos pode retornar o usuário errado.</div></div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">list</a></span>​(int&nbsp;offset, int&nbsp;limit)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">list</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;sortField, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;sortType, int&nbsp;limit, int&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;search)</code></th><td class="colLast"><div class="block">Pesquisa por usuários baseado em um conjunto de parâmetros.</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">list</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&gt;&nbsp;params, int&nbsp;offset, int&nbsp;limit)</code></th><td class="colLast"><div class="block">Pesquisa por usuários baseado em um conjunto de parâmetros.</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">listAll</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;sortField, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;sortType, int&nbsp;limit, int&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;search)</code></th><td class="colLast"><div class="block">Pesquisa por usuários ativos e inativos baseado em um conjunto de parâmetros.</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">listData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;login)</code></th><td class="colLast"><div class="block">List all user data specfying the login</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">listGroups</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;login)</code></th><td class="colLast"><div class="block">list the groups from a specific user</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">listRoles</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;login)</code></th><td class="colLast"><div class="block">List user roles specfying the login</div></td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">removeUserData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;key)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">updateUser</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">UPDATE user.</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">updateUserData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;data)</code></th><td class="colLast"><div class="block">UPDATE user data of logged user</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">updateUserDataById</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;data, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;userId)</code></th><td class="colLast"><div class="block">UPDATE the user data</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html">updateUserEvenDisabled</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">UPDATE the user information even one that is disabled.</div></td></tr></tbody></table>

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
            UserVO create​(UserVO vo)
                   throws com.fluig.sdk.api.common.SDKException
            ```

            Cria um novo usuário.

            Parameters:

            `vo` - Dados do usuário.

            Returns:

            Dados do usuário criado.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o usuário.


        -   #### create

            ```
            UserVO create​(Long tenantId,
                          UserVO vo)
                   throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCurrent

            ```
            UserVO getCurrent()
                       throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o usuário corrente logado.

            Returns:

            Informações do usuário logado.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### findById

            ```
            UserVO findById​(Long id)
                     throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o usuário pelo id.

            Returns:

            Informações do usuário.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.6


        -   #### findByLogin

            ```
            UserVO findByLogin​(String login)
                        throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o usuário pelo login.

            Returns:

            Informações do usuário.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.6.5


        -   #### list

            ```
            List<UserVO> list​(Map<String,​Object> params,
                              int offset,
                              int limit)
                       throws com.fluig.sdk.api.common.SDKException
            ```

            Pesquisa por usuários baseado em um conjunto de parâmetros. Os valores aceitos como parametros são: - login Parte do login. - fullName Parte do nome. - limit: Número máximo de registros para retornar.

            Parameters:

            `params` - Parâmetros.

            `offset` - Offset.

            `limit` - Quantidade de registos.

            Returns:

            Lista de usuários encontrados que se enquandram nos parâmetros.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### list

            ```
            List<UserVO> list​(int offset,
                              int limit)
                       throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listAll

            ```
            List<UserVO> listAll​(String sortField,
                                 String sortType,
                                 int limit,
                                 int offset,
                                 String search)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Pesquisa por usuários ativos e inativos baseado em um conjunto de parâmetros. Os valores aceitos como parametros são: - login Parte do login. - fullName Parte do nome. - sortField: Campos. - sortType: ASC e DESC. - limit: Número máximo de registros para retornar. - offset: offSet. - search: Valor a ser procurado

            Parameters:

            `sortField` - Atributo a ser selecionado.tenantId

            `sortType` - Opção ASC e DESC.

            `limit` - Quantidade de registos.

            `offset` - Offset.

            `search` - Padrão para filtrar o resultado.

            Returns:

            Lista de usuários encontrados que se enquandram nos parâmetros.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### deactivateByCode

            ```
            void deactivateByCode​(String genericId)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Deactivate an user by his login, idpId or userCode.

            Parameters:

            `String` - genericId

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### activateByCode

            ```
            void activateByCode​(String genericId)
                         throws com.fluig.sdk.api.common.SDKException
            ```

            Activate an user by his login, idpId or userCode.

            Parameters:

            `String` - genericId

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### updateUser

            ```
            UserVO updateUser​(UserVO vo)
                       throws com.fluig.sdk.api.common.SDKException
            ```

            UPDATE user. Basic informations: name lastName fullName timezone locale phone field

            Parameters:

            `vo` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### updateUserData

            ```
            boolean updateUserData​(Map<String,​String> data)
                            throws com.fluig.sdk.api.common.SDKException
            ```

            UPDATE user data of logged user

            Parameters:

            `data` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### changeUserPassword

            ```
            void changeUserPassword​(UserPasswordVO vo)
                             throws com.fluig.sdk.api.common.SDKException
            ```

            Change the user password

            Parameters:

            `vo` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### list

            ```
            List<UserVO> list​(String sortField,
                              String sortType,
                              int limit,
                              int offset,
                              String search)
                       throws com.fluig.sdk.api.common.SDKException
            ```

            Pesquisa por usuários baseado em um conjunto de parâmetros. Os valores aceitos como parametros são: - login Parte do login. - fullName Parte do nome. - sortField: Campos. - sortType: ASC e DESC. - limit: Número máximo de registros para retornar. - offset: offSet. - search: Valor a ser procurado

            Parameters:

            `sortField` - Atributo a ser selecionado.

            `sortType` - Opção ASC e DESC.

            `limit` - Quantidade de registos.

            `offset` - Offset.

            `search` - Padrão para filtrar o resultado.

            Returns:

            Lista de usuários encontrados que se enquandram nos parâmetros.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### getUser

            ```
            UserVO getUser​(String genericId)
                    throws com.fluig.sdk.api.common.SDKException
            ```

            Deprecated.

            Em alguns casos pode retornar o usuário errado. Utilize o método [`findByLogin(String)`](https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html).

            GET user by the generic id

            Parameters:

            `genericId` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listRoles

            ```
            List<String> listRoles​(String login)
                            throws com.fluig.sdk.api.common.SDKException
            ```

            List user roles specfying the login

            Parameters:

            `login` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listData

            ```
            Map<String,​String> listData​(String login)
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            List all user data specfying the login

            Parameters:

            `login` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listGroups

            ```
            List<String> listGroups​(String login)
                             throws com.fluig.sdk.api.common.SDKException
            ```

            list the groups from a specific user

            Parameters:

            `login` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### updateUserDataById

            ```
            boolean updateUserDataById​(Map<String,​String> data,
                                       Long userId)
                                throws com.fluig.sdk.api.common.SDKException
            ```

            UPDATE the user data

            Parameters:

            `data` -

            `userId` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### removeUserData

            ```
            void removeUserData​(String alias,
                                String key)
                         throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### addUserToGroup

            ```
            void addUserToGroup​(Long tenantId,
                                String groupCode,
                                UserVO userVO)
                         throws com.fluig.sdk.api.common.SDKException
            ```

            ADD user to a specific group

            Parameters:

            `tenantId` - Tenant Id

            `groupCode` - Group Code

            `userVO` - User

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### updateUserEvenDisabled

            ```
            UserVO updateUserEvenDisabled​(UserVO vo)
                                   throws com.fluig.sdk.api.common.SDKException
            ```

            UPDATE the user information even one that is disabled.

            Parameters:

            `userVO` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findByUserCode

            ```
            UserVO findByUserCode​(String colleagueId)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`
