# Interface SecurityService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface SecurityService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface SecurityService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de segurança.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">changeUserPassword</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;login, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;currentPassword, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;newPassword, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;confirmNewPassword)</code></th><td class="colLast"><div class="block">Change user password</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">createOrUpdateTenantData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;key, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;value)</code></th><td class="colLast"><div class="block">Cria um bjeto chave/valor no tenantData</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">createPermissions</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;resourceCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionVO.html" title="class in com.fluig.sdk.api.permission">PermissionVO</a>&gt;&nbsp;permissions)</code></th><td class="colLast"><div class="block">Cria as permissões para um determinado recurso</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">deletePermissions</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;resourceCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionVO.html" title="class in com.fluig.sdk.api.permission">PermissionVO</a>&gt;&nbsp;permissions)</code></th><td class="colLast"><div class="block">Deleta as permissões para um determinado recurso</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html" title="class in com.fluig.sdk.api.group">GroupVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">findGroupByTenantIdAndCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;code)</code></th><td class="colLast"><div class="block">Retorna o grupo por code e tenant</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html" title="class in com.fluig.sdk.tenant">TenantVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">findTenants</a></span>()</code></th><td class="colLast"><div class="block">Retorna a lista de tentants.</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html" title="class in com.fluig.sdk.tenant">TenantVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">getCurrentTenant</a></span>()</code></th><td class="colLast"><div class="block">Get the current tenant</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/TenantVO.html" title="class in com.fluig.sdk.tenant">TenantVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">getCurrentTenantById</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId)</code></th><td class="colLast"><div class="block">Get the current tenant</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">getCurrentTenantId</a></span>()</code></th><td class="colLast"><div class="block">Retorna o tenantId logado</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionVO.html" title="class in com.fluig.sdk.api.permission">PermissionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">getPermissionsByResourceCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;resourceCode)</code></th><td class="colLast"><div class="block">Lista as permissões do recurso informado</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">getTimeZoneLocalUser</a></span>​(long&nbsp;companyId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">hasPermission</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;resource, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;permiss)</code></th><td class="colLast"><div class="block">Verifica se o usuário logado possui certa permissão no recurso dado.</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionAssetVO.html" title="class in com.fluig.sdk.api.permission">PermissionAssetVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">listResourcesByCategory</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;category, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;filter, int&nbsp;offset, int&nbsp;limit)</code></th><td class="colLast"><div class="block">Lista os recursos da categoria informada</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/tenant/AdminUserVO.html" title="class in com.fluig.sdk.tenant">AdminUserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html">listTenantAdmins</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId)</code></th><td class="colLast"><div class="block">Retorna os admins de um tenant</div></td></tr></tbody></table>

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

        -   #### hasPermission

            ```
            Boolean hasPermission​(String resource,
                                  String permiss)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Verifica se o usuário logado possui certa permissão no recurso dado.

            Parameters:

            `resource` - Código do recurso.

            `permiss` - Código da permissão.

            Returns:

            **true** se o usuário tiver persmissão, **false** caso contrário.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### listResourcesByCategory

            ```
            List<PermissionAssetVO> listResourcesByCategory​(String category,
                                                            String filter,
                                                            int offset,
                                                            int limit)
                                                     throws com.fluig.sdk.api.common.SDKException
            ```

            Lista os recursos da categoria informada

            Parameters:

            `category` - - Categoria do recurso

            `filter` - - filtro para pesquisa

            `offset` - - offset da pesquisa

            `limit` - - limite da pesquisa

            Returns:

            Lista com os recursos.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getPermissionsByResourceCode

            ```
            List<PermissionVO> getPermissionsByResourceCode​(String resourceCode)
                                                     throws com.fluig.sdk.api.common.SDKException
            ```

            Lista as permissões do recurso informado

            Parameters:

            `resourceCode` - - Código do recurso

            Returns:

            Lista com as permissões

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### createPermissions

            ```
            void createPermissions​(String resourceCode,
                                   List<PermissionVO> permissions)
                            throws com.fluig.sdk.api.common.SDKException
            ```

            Cria as permissões para um determinado recurso

            Parameters:

            `resourceCode` - - Código do recurso

            `permissions` - - lista de permissões a serem criadas para o recurso

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### deletePermissions

            ```
            void deletePermissions​(String resourceCode,
                                   List<PermissionVO> permissions)
                            throws com.fluig.sdk.api.common.SDKException
            ```

            Deleta as permissões para um determinado recurso

            Parameters:

            `resourceCode` - - Código do recurso

            `permissions` - - lista de permissões a serem criadas para o recurso

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findTenants

            ```
            List<TenantVO> findTenants()
                                throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a lista de tentants.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCurrentTenantId

            ```
            Long getCurrentTenantId()
                             throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o tenantId logado

            Returns:

            current tenantId

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findGroupByTenantIdAndCode

            ```
            GroupVO findGroupByTenantIdAndCode​(Long tenantId,
                                               String code)
                                        throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o grupo por code e tenant

            Parameters:

            `tenantId` -

            `code` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### createOrUpdateTenantData

            ```
            Boolean createOrUpdateTenantData​(String key,
                                             String value)
                                      throws com.fluig.sdk.api.common.SDKException
            ```

            Cria um bjeto chave/valor no tenantData

            Parameters:

            `key` -

            `value` -

            Returns:

            If tenant data was updated

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listTenantAdmins

            ```
            List<AdminUserVO> listTenantAdmins​(Long tenantId)
                                        throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna os admins de um tenant

            Parameters:

            `tenantId` -

            Returns:

            List of tenant admin

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### changeUserPassword

            ```
            void changeUserPassword​(String login,
                                    String currentPassword,
                                    String newPassword,
                                    String confirmNewPassword)
                             throws com.fluig.sdk.api.common.SDKException
            ```

            Change user password

            Parameters:

            `login` -

            `currentPassword` -

            `newPassword` -

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCurrentTenant

            ```
            TenantVO getCurrentTenant()
                               throws com.fluig.sdk.api.common.SDKException
            ```

            Get the current tenant

            Returns:

            Tenant data

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCurrentTenantById

            ```
            TenantVO getCurrentTenantById​(Long tenantId)
                                   throws com.fluig.sdk.api.common.SDKException
            ```

            Get the current tenant

            Returns:

            Tenant data

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getTimeZoneLocalUser

            ```
            String getTimeZoneLocalUser​(long companyId,
                                        String userCode)
                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Parameters:

            `companyId` -

            `userCode` -

            Returns:

            time zone for user

            Throws:

            `com.fluig.sdk.api.common.SDKException`
