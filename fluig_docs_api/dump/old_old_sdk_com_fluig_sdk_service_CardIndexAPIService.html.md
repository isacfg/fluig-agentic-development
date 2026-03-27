# Interface CardIndexAPIService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface CardIndexAPIService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface CardIndexAPIService
    extends BaseAPIService
    ```


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAPIVO.html" title="class in com.fluig.sdk.api.workflow">CardIndexAPIVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">createCardIndex</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/File.html?is-external=true" title="class or interface in java.io" class="externalLink">File</a>&nbsp;filecontent, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;formName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;parentIdValue)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAPIVO.html" title="class in com.fluig.sdk.api.workflow">CardIndexAPIVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">createCardIndex</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/File.html?is-external=true" title="class or interface in java.io" class="externalLink">File</a>&nbsp;filecontent, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;mainFile, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;formName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;descriptorField, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;datasetName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;parentIdValue)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">deleteCardIndex</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardIndexFindAPIVO.html" title="class in com.fluig.sdk.api.cardindex">CardIndexFindAPIVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">findCardIndex</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/cardindex/CardIndexFindAPIVO.html" title="class in com.fluig.sdk.api.cardindex">CardIndexFindAPIVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">findCardIndex</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;pageSize)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAPIVO.html" title="class in com.fluig.sdk.api.workflow">CardIndexAPIVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">patchCardIndex</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/File.html?is-external=true" title="class or interface in java.io" class="externalLink">File</a>&nbsp;filecontent, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentIdValue, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;updateMode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;mainFile, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;formName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;descriptorField, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;datasetName)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CardIndexAPIVO.html" title="class in com.fluig.sdk.api.workflow">CardIndexAPIVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html">putCardIndex</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/File.html?is-external=true" title="class or interface in java.io" class="externalLink">File</a>&nbsp;filecontent, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentIdValue, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;updateMode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;mainFile, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;formName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;descriptorField, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;datasetName)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

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

        -   #### findCardIndex

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO> findCardIndex​(Integer documentId,
                                                                                                                       Integer version,
                                                                                                                       List order,
                                                                                                                       Integer page,
                                                                                                                       Integer pageSize)
                                                                                                                throws Exception
            ```

            Parameters:

            `documentId` - numero do fomulário

            `version` - versão do formulário

            `order` - lista de ordenação (java.util.ArrayList)

            `page` - numero da pagina

            `pageSize` - numero de registros por pagina

            Returns:

            ResponseEnvelopeVO objeto com os dados do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5 Busca formulários


        -   #### findCardIndex

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO> findCardIndex​(Integer documentId,
                                                                                                                       Integer version)
                                                                                                                throws Exception
            ```

            Parameters:

            `documentId` - numero do fomulário

            `version` - versão do formulário

            Returns:

            ResponseEnvelopeVO objeto com os dados do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5 Busca formulários


        -   #### createCardIndex

            ```
            CardIndexAPIVO createCardIndex​(File filecontent,
                                           String mainFile,
                                           String formName,
                                           String descriptorField,
                                           String datasetName,
                                           Integer parentIdValue)
                                    throws Exception
            ```

            Parameters:

            `filecontent` - Arquivo de conteúdo do formulário

            `mainFile` - Nome do arquivo principal

            `formName` - Descrição do Documento

            `descriptorField` - Descrição do Formulário

            `datasetName` - Nome do Dataset

            `parentIdValue` - Número do documento pai

            Returns:

            CardIndexAPIVO objeto com dados do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5 Cria formuários com base em arquivos html ou zip


        -   #### createCardIndex

            ```
            CardIndexAPIVO createCardIndex​(File filecontent,
                                           String formName,
                                           Integer parentIdValue)
                                    throws Exception
            ```

            Parameters:

            `filecontent` - Arquivo de conteúdo do formulário

            `formName` - Descrição do Documento

            `parentIdValue` - Número do documento pai

            Returns:

            CardIndexAPIVO objeto com dados do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5 Cria formuários com base em arquivos html ou zip


        -   #### patchCardIndex

            ```
            CardIndexAPIVO patchCardIndex​(File filecontent,
                                          Integer documentIdValue,
                                          String updateMode,
                                          String mainFile,
                                          String formName,
                                          String descriptorField,
                                          String datasetName)
                                   throws Exception
            ```

            Parameters:

            `filecontent` - Arquivo de conteúdo do formulário

            `documentIdValue` - Id do documento

            `updateMode` - Tipo de atualização 0 = Manter a versão atual e 2 = Nova versão

            `mainFile` - Nome do arquivo principal

            `formName` - Descrição do Documento

            `descriptorField` - Descrição do Formulário

            `datasetName` - Nome do Dataset

            Returns:

            CardIndexAPIVO objeto com dados do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5 Atualização parcial dos arquivos do formulário


        -   #### putCardIndex

            ```
            CardIndexAPIVO putCardIndex​(File filecontent,
                                        Integer documentIdValue,
                                        String updateMode,
                                        String mainFile,
                                        String formName,
                                        String descriptorField,
                                        String datasetName)
                                 throws Exception
            ```

            Parameters:

            `filecontent` - Arquivo de conteúdo do formulário

            `documentIdValue` - Id do documento

            `updateMode` - Tipo de atualização 0 = Manter a versão atual e 2 = Nova versão

            `mainFile` - Nome do arquivo principal

            `formName` - Descrição do Documento

            `descriptorField` - Descrição do Formulário

            `datasetName` - Nome do Dataset

            Returns:

            CardIndexAPIVO objeto com dados do formulário

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5 Atualiza completa dos arquivos do formulário


        -   #### deleteCardIndex

            ```
            boolean deleteCardIndex​(Integer documentId)
                             throws Exception
            ```

            Parameters:

            `documentId` -

            Returns:

            Boolean true se a rotina executar com sucesso

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5 Manda um formulário para lixeira
