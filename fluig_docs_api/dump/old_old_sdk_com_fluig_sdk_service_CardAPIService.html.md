# Interface CardAPIService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface CardAPIService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface CardAPIService
    extends BaseAPIService
    ```


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFindFieldVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">create</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFieldVO</a>&gt;&nbsp;cardFieldVOs)</code></th><td class="colLast"><div class="block">Cria um registro de Formulário</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html" title="class in com.fluig.sdk.api.cardindex">CardChildrenVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">createChild</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFieldVO</a>&gt;&nbsp;cardFieldVos)</code></th><td class="colLast"><div class="block">Cria um registro no formulário filho</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFindFieldVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">edit</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFieldVO</a>&gt;&nbsp;cardFieldVOs)</code></th><td class="colLast"><div class="block">altera um registro de Formulário</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html" title="class in com.fluig.sdk.api.cardindex">CardChildrenVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">editChild</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;row, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFieldVO</a>&gt;&nbsp;cardFieldVOS)</code></th><td class="colLast"><div class="block">Cria um registro no formulário filho</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFindFieldVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;fields, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFieldFilterVO.html" title="class in com.fluig.sdk.api.cardindex">CardFieldFilterVO</a>&gt;&nbsp;cardFieldFilterVOS, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;listInactiveRecords)</code></th><td class="colLast"><div class="block">Lista os registros do formulário</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardFindFieldVO.html" title="class in com.fluig.sdk.api.cardindex">CardFindFieldVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">findById</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;fields, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;expandedFields)</code></th><td class="colLast"><div class="block">Lista os registros do formulário pelo numero do formulário e numero da ficha</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html" title="class in com.fluig.sdk.api.cardindex">CardChildrenVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">findChildByCardIdAndRow</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;row, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;fields)</code></th><td class="colLast"><div class="block">Lista os registros do formulário filho pelo numero do registro e linha</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html" title="class in com.fluig.sdk.api.cardindex">CardChildrenVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">findChildrenByCardId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;fields)</code></th><td class="colLast"><div class="block">Lista os registros do formulário filho</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">remove</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId)</code></th><td class="colLast"><div class="block">Remove um registro de formulário</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardChildrenVO.html" title="class in com.fluig.sdk.api.cardindex">CardChildrenVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html">removeChild</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;cardId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;row)</code></th><td class="colLast"><div class="block">Remove os registros do formulário filho</div></td></tr></tbody></table>

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

        -   #### find

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardFindFieldVO> find​(Integer documentId,
                                                                                                           Integer page,
                                                                                                           Integer pageSize,
                                                                                                           List order,
                                                                                                           List<String> fields,
                                                                                                           List<CardFieldFilterVO> cardFieldFilterVOS,
                                                                                                           Boolean listInactiveRecords)
                                                                                                    throws Exception
            ```

            Lista os registros do formulário

            Parameters:

            `documentId` - numero do formulário (\* Obrigatório)

            `page` - numero da pagina

            `pageSize` - numero de registros por pagina

            `order` - lista de ordenação (java.util.ArrayList)

            `fields` - Campos dinâmicos

            `cardFieldFilterVOS` - filtro de campos de formulário Filtra por ODATA, consultas implementadas eq ne e or, use \[\] para identificar campos de formulário, exemplos: Para o campo igual ao valor: $filter=field eq ‘value’ Para o campo que não é igual ao valor: $filter=field ne ‘value’ Para dois filtros: $filter=field1 eq ‘value1’ and field2 eq ‘value2’ Para ou operador: $filter=field1 eq ‘value1’ or field1 eq ‘value2’ Entre o operador: $filter=field1 ge ‘value1’ and field1 le ‘value2’ Para campos de opção: $filter=field\[optionField\] eq ‘value’ Para pesquisas semelhantes: $filter=field eq ‘%value%’ Regras para esta versão beta: Você não pode pesquisar apenas com o operador ge or le , DEVE ser usado between Você não pode pesquisar usando ne nas operações Você não pode usar nenhuma operação, apenas um operador referenciando o campo

            `listInactiveRecords` - Lista registros inativos

            Returns:

            ResponseEnvelopeVO objeto com os registros do fomulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findById

            ```
            CardFindFieldVO findById​(Integer documentId,
                                     Integer cardId,
                                     List<String> fields,
                                     List<String> expandedFields)
                              throws Exception
            ```

            Lista os registros do formulário pelo numero do formulário e numero da ficha

            Parameters:

            `documentId` - numero do formulário (\* Obrigatório)

            `cardId` - numero do registro do formulário (\* Obrigatório)

            `fields` - Campos dinâmicos

            `expandedFields` - Campos expansíveis (java.util.ArrayList) opção = children

            Returns:

            CardFindFieldVO objeto com os registros do fomulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### create

            ```
            CardFindFieldVO create​(Integer documentId,
                                   List<CardFieldVO> cardFieldVOs)
                            throws Exception
            ```

            Cria um registro de Formulário

            Parameters:

            `documentId` - numero do formulário (\* Obrigatório)

            `cardFieldVOs` - (java.util.ArrayList) de objeto CardFieldVO que possui os campos : fieldId : String value : String

            Returns:

            CardFindFieldVO objeto com os registros do fomulário criado

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### edit

            ```
            CardFindFieldVO edit​(Integer cardId,
                                 List<CardFieldVO> cardFieldVOs)
                          throws Exception
            ```

            altera um registro de Formulário

            Parameters:

            `cardId` - numero do registro do formulário (\* Obrigatório)

            `cardFieldVOs` - (java.util.ArrayList) de objeto CardFieldVO que possui os campos : fieldId : String value : String

            Returns:

            CardFindFieldVO objeto com o registros do fomulário editado

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### remove

            ```
            Boolean remove​(Integer cardId)
                    throws Exception
            ```

            Remove um registro de formulário

            Parameters:

            `cardId` - numero do registro do formulário (\* Obrigatório)

            Returns:

            Boolean true se a rotina executar com sucesso

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findChildrenByCardId

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardChildrenVO> findChildrenByCardId​(Integer cardId,
                                                                                                                          Integer page,
                                                                                                                          Integer pageSize,
                                                                                                                          List<String> fields)
                                                                                                                   throws Exception
            ```

            Lista os registros do formulário filho

            Parameters:

            `cardId` - numero do registro do formulário (\* Obrigatório)

            `page` - numero da pagina

            `pageSize` - numero de registros por pagina

            `fields` - Campos dinâmicos

            Returns:

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findChildByCardIdAndRow

            ```
            CardChildrenVO findChildByCardIdAndRow​(Integer cardId,
                                                   Integer row,
                                                   List<String> fields)
                                            throws Exception
            ```

            Lista os registros do formulário filho pelo numero do registro e linha

            Parameters:

            `cardId` - numero do registro do formulário (\* Obrigatório)

            `fields` - Campos dinâmicos

            `row` - linha do registro (\* Obrigatório)

            Returns:

            ResponseEnvelopeVO com os registros do fomulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### createChild

            ```
            CardChildrenVO createChild​(Integer cardId,
                                       List<CardFieldVO> cardFieldVos)
                                throws Exception
            ```

            Cria um registro no formulário filho

            Parameters:

            `cardId` - numero do registro do formulário (\* Obrigatório)

            `cardFieldVos` - (java.util.ArrayList) de objeto CardFieldVO que possui os campos : fieldId : String value : String

            Returns:

            CardChildrenVO com os registros do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### editChild

            ```
            CardChildrenVO editChild​(Integer cardId,
                                     Integer row,
                                     List<CardFieldVO> cardFieldVOS)
                              throws Exception
            ```

            Cria um registro no formulário filho

            Parameters:

            `cardId` - numero do registro do formulário (\* Obrigatório)

            `row` - linha do registro (\* Obrigatório)

            `cardFieldVOS` - (java.util.ArrayList) de objeto CardFieldVO que possui os campos : fieldId : String value : String

            Returns:

            CardChildrenVO com os registros do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### removeChild

            ```
            CardChildrenVO removeChild​(Integer cardId,
                                       Integer row)
                                throws Exception
            ```

            Remove os registros do formulário filho

            Parameters:

            `cardId` - numero do registro do formulário (\* Obrigatório)

            `row` - linha do registro (\* Obrigatório)

            Returns:

            CardChildrenVO com os registros do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5
