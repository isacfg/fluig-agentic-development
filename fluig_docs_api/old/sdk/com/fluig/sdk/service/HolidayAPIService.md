# Interface HolidayAPIService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface HolidayAPIService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface HolidayAPIService
    extends BaseAPIService
    ```


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a>&nbsp;holidayVO)</code></th><td class="colLast"><div class="block">Cria feriado.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">delete</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Deleta feriado.</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand)</code></th><td class="colLast"><div class="block">Busca feriado.</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;description, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;localId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.sdk.service.vo.common.OrderParam&gt;&nbsp;orderParams, int&nbsp;page, int&nbsp;pageSize, int&nbsp;offset, int&nbsp;limit, boolean&nbsp;populateLocals, boolean&nbsp;populateUsers, boolean&nbsp;exclusive)</code></th><td class="colLast"><div class="block">Busca feriado.</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;description, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;localId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;limit, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;exclusive)</code></th><td class="colLast"><div class="block">Busca feriado.</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">findAll</a></span>()</code></th><td class="colLast"><div class="block">Busca todos os feriados da base a partir do código da empresa do usuário logado.</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">patch</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a>&nbsp;holidayVO)</code></th><td class="colLast"><div class="block">Atualiza feriado.</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html">update</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/holiday/HolidayVO.html" title="class in com.fluig.sdk.api.holiday">HolidayVO</a>&nbsp;holidayVO)</code></th><td class="colLast"><div class="block">Atualiza feriado.</div></td></tr></tbody></table>

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
            HolidayVO create​(HolidayVO holidayVO)
                      throws Exception
            ```

            Cria feriado.

            Parameters:

            `holidayVO` - VO do feriado.

            Returns:

            VO do feriado criado.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### delete

            ```
            void delete​(Long id)
                 throws Exception
            ```

            Deleta feriado.

            Parameters:

            `id` - Código do feriado.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### update

            ```
            HolidayVO update​(Long id,
                             HolidayVO holidayVO)
                      throws Exception
            ```

            Atualiza feriado.

            Parameters:

            `id` - Código atual do feriado.

            `holidayVO` - VO do novo.

            Returns:

            VO do feriado atualizado.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            HolidayVO find​(Long id,
                           String expand)
                    throws Exception
            ```

            Busca feriado.

            Parameters:

            `id` - Código do feriado.

            `expand` - Campos de expansão, pode ser locals para buscar localizações relacionadas e locals.localUsers para ser os relacionamentos com usuários dos locais.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### findAll

            ```
            List<HolidayVO> findAll()
                             throws Exception
            ```

            Busca todos os feriados da base a partir do código da empresa do usuário logado.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### patch

            ```
            HolidayVO patch​(Long id,
                            HolidayVO holidayVO)
                     throws Exception
            ```

            Atualiza feriado.

            Parameters:

            `id` - Código atual do feriado.

            `holidayVO` - VO do novo.

            Returns:

            VO do feriado atualizado.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<HolidayVO> find​(String description,
                                                                                                     String localId,
                                                                                                     String order,
                                                                                                     String page,
                                                                                                     String pageSize,
                                                                                                     String offset,
                                                                                                     String limit,
                                                                                                     String expand,
                                                                                                     String exclusive)
                                                                                              throws Exception
            ```

            Busca feriado.

            Parameters:

            `description` - Descrição do feriado.

            `localId` - Id do local para parâmetro da pesquisa.

            `order` - Ordenação da busca, pode ser apenas por id (descrição do feriado).

            `page` - Página da busca.

            `pageSize` - Quantidade de itens por página.

            `expand` - Campos de expansão, pode ser locals para buscar localizações relacionadas e locals.localUsers para ser os relacionamentos com usuários dos locais.

            `exclusive` - Se os feriados devem ser exclusivos daquele local.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<HolidayVO> find​(String description,
                                                                                                     Long localId,
                                                                                                     List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                     int page,
                                                                                                     int pageSize,
                                                                                                     int offset,
                                                                                                     int limit,
                                                                                                     boolean populateLocals,
                                                                                                     boolean populateUsers,
                                                                                                     boolean exclusive)
                                                                                              throws Exception
            ```

            Busca feriado.

            Parameters:

            `description` - Descrição do feriado.

            `localId` - Id do local para parâmetro da pesquisa.

            `orderParams` - Ordenação da busca, pode ser apenas por id (descrição do feriado).

            `page` - Página da busca.

            `pageSize` - Quantidade de itens por página.

            `populateLocals` - Se popula locais na lista do VO.

            `populateUsers` - Se popula usuários na lista do VO de local.

            `exclusive` - Se os feriados devem ser exclusivos daquele local.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.
