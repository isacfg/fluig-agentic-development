# Interface DocumentService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface DocumentService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface DocumentService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de documentos (GED).

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">approveDocument</a></span>​(int&nbsp;documentId, int&nbsp;version, boolean&nbsp;approved, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;observation)</code></th><td class="colLast"><div class="block">Aprova ou reprova um documento.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>[]</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">copyDocumentToUploadArea</a></span>​(int&nbsp;documentId)</code></th><td class="colLast"><div class="block">Copia o documento que esta na área de uplaod</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">createDocument</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&nbsp;documentVO)</code></th><td class="colLast"><div class="block">Cria o documento com permissões e aprovadors</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">createPrivateDocument</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;companyId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;fileName, com.fluig.foundation.volume.vo.FDNLocalFileVO&nbsp;file)</code></th><td class="colLast"><div class="block">Cria uma documento privado</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">createPrivateDocument</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;companyId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;fileName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;filePath)</code></th><td class="colLast"><div class="block">Cria uma documento privado</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">deleteDocument</a></span>​(int&nbsp;documentId)</code></th><td class="colLast"><div class="block">Remove o documento</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getActive</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Retorna o documento ativo passado o ID do mesmo.</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/AllocatedDocumentVO.html" title="class in com.fluig.sdk.api.document">AllocatedDocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getAllocatedDocument</a></span>​(int&nbsp;documentId, int&nbsp;version)</code></th><td class="colLast"><div class="block">Retorna documento com as informações de checkout</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/SolvedPermissionVO.html" title="class in com.fluig.sdk.api.document">SolvedPermissionVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getCurrentUserPermission</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html" title="class in com.fluig.sdk.api.document">DocumentApprovementHistoryVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getDocumentApprovalHistory</a></span>​(int&nbsp;documentId)</code></th><td class="colLast"><div class="block">Return the approvements history of the document</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html" title="class in com.fluig.sdk.api.document">DocumentApproverVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getDocumentApprovers</a></span>​(int&nbsp;documentId)</code></th><td class="colLast"><div class="block">Retrieve all document approvers and yours status.</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html" title="class in com.fluig.sdk.api.document">DocumentApproverVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getDocumentApprovers</a></span>​(int&nbsp;documentId, boolean&nbsp;checkInheritance)</code></th><td class="colLast"><div class="block">Retrieve all document approvers and yours status.</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>byte[]</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getDocumentContentAsBytes</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Retorna os bytes do conteúdo do documento.</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getDocumentContentAsString</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;charsetName)</code></th><td class="colLast"><div class="block">Retorna o conteúdo do documento.</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html" title="class in com.fluig.sdk.api.document">DocumentPermissionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getDocumentPermissions</a></span>​(int&nbsp;documentId, int&nbsp;version)</code></th><td class="colLast"><div class="block">Retorna as permissões do documento</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getDownloadURL</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Retorna a url do documento</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">getUserPermissions</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;user)</code></th><td class="colLast"><div class="block">Retorna a permissão do usuário em um documento.</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">isCanDownloadDocument</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, int&nbsp;documentId, int&nbsp;version, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode, boolean&nbsp;fluigViewer)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">isDocumentDeleted</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, int&nbsp;documentId, int&nbsp;version)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">setDocumentApprovers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;companyId, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html" title="class in com.fluig.sdk.api.document">DocumentSecurityVO</a>&nbsp;documentSecurityVO)</code></th><td class="colLast"><div class="block">Set Approvers for a specific document</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">setDocumentPermissions</a></span>​(int&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html" title="class in com.fluig.sdk.api.document">DocumentPermissionVO</a>&gt;&nbsp;permissions)</code></th><td class="colLast"><div class="block">Determina as permissões do documento</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">updateFile</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&nbsp;docVO)</code></th><td class="colLast"><div class="block">Update file</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html">validateDocumentPublicUrlConfiguration</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, int&nbsp;documentId, int&nbsp;version)</code></th><td class="colLast"><div class="block">Valida configurações de documento</div></td></tr></tbody></table>

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

        -   #### getActive

            ```
            DocumentVO getActive​(Integer documentId)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o documento ativo passado o ID do mesmo.

            Parameters:

            `documentId` - ID do documento.

            Returns:

            Dados do documento encontrado.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getUserPermissions

            ```
            Integer getUserPermissions​(Integer documentId,
                                       Integer version,
                                       String user)
                                throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a permissão do usuário em um documento.

            Parameters:

            `documentId` - ID do documento.

            `version` - Versão do documento.

            `user` - Matrícula do usuário.

            Returns:

            Permissão do usuário. Os valores possíveis são: `-1` - Sem permissão, `0` - Leitura, `1` - Gravação, `2` - Modificação, `3` - Controle Total

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha buscando permissão.


        -   #### getCurrentUserPermission

            ```
            SolvedPermissionVO getCurrentUserPermission​(Integer documentId)
                                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### createPrivateDocument

            ```
            DocumentVO createPrivateDocument​(Long companyId,
                                             String userId,
                                             String fileName,
                                             String filePath)
                                      throws com.fluig.sdk.api.common.SDKException
            ```

            Cria uma documento privado

            Parameters:

            `companyId` - ID da empresa

            `userId` - ID do usuário

            `fileName` - Nome do arquivo

            `filePath` - Caminho do arquivo

            Returns:

            DocumentVO

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### createPrivateDocument

            ```
            DocumentVO createPrivateDocument​(Long companyId,
                                             String userId,
                                             String fileName,
                                             com.fluig.foundation.volume.vo.FDNLocalFileVO file)
                                      throws com.fluig.sdk.api.common.SDKException
            ```

            Cria uma documento privado

            Parameters:

            `companyId` - ID da empresa

            `userId` - ID do usuário

            `fileName` - Nome do arquivo

            `file` - Arquivo file

            Returns:

            DocumentVO

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getAllocatedDocument

            ```
            AllocatedDocumentVO getAllocatedDocument​(int documentId,
                                                     int version)
                                              throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna documento com as informações de checkout

            Parameters:

            `documentId` - Id do documento

            `version` - Versão do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### getDownloadURL

            ```
            String getDownloadURL​(Integer documentId)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a url do documento

            Parameters:

            `documentId` - ID do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### getDocumentContentAsString

            ```
            String getDocumentContentAsString​(Integer documentId,
                                              String charsetName)
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o conteúdo do documento.

            Exemplo de uso: var string = fluigAPI.getDocumentService().getDocumentContentAsString(documentId, "UTF-8");

            Parameters:

            `documentId` - ID do documento

            `charsetName` - Charset específico do conteúdo

            Returns:

            byte\[\] Array de byte do conteúdo do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.8.0


        -   #### getDocumentContentAsBytes

            ```
            byte[] getDocumentContentAsBytes​(Integer documentId)
                                      throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna os bytes do conteúdo do documento.

            Para converter o byte\[\] para String usando os sdk do Fluig em java: var string = new String(FluigAPI.getDocumentService().getDocumentContentAsBytes(documentId), "UTF-8");

            Para converter o byte\[\] para String usando javascript (evento de processo | dataset avançado): var string = new java.lang.String(fluigAPI.getDocumentService().getDocumentContentAsBytes(documentId), "UTF-8");

            Parameters:

            `documentId` - ID do documento

            Returns:

            byte\[\] Array de byte do conteúdo do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.8.0


        -   #### createDocument

            ```
            DocumentVO createDocument​(DocumentVO documentVO)
                               throws com.fluig.sdk.api.common.SDKException
            ```

            Cria o documento com permissões e aprovadors

            Parameters:

            `documentVO` - Objeto do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### deleteDocument

            ```
            void deleteDocument​(int documentId)
                         throws com.fluig.sdk.api.common.SDKException
            ```

            Remove o documento

            Parameters:

            `documentId` - ID do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### copyDocumentToUploadArea

            ```
            String[] copyDocumentToUploadArea​(int documentId)
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Copia o documento que esta na área de uplaod

            Parameters:

            `documentId` - ID do documento

            Returns:

            Array de bytes documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### setDocumentPermissions

            ```
            void setDocumentPermissions​(int documentId,
                                        List<DocumentPermissionVO> permissions)
                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Determina as permissões do documento

            Parameters:

            `documentId` - ID do documento

            `permissions` - Lista de permissões do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### getDocumentPermissions

            ```
            List<DocumentPermissionVO> getDocumentPermissions​(int documentId,
                                                              int version)
                                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna as permissões do documento

            Parameters:

            `documentId` - ID do documento

            `version` - Versão do documento

            Returns:

            Listas de permissões do documento

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### approveDocument

            ```
            void approveDocument​(int documentId,
                                 int version,
                                 boolean approved,
                                 String observation)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Aprova ou reprova um documento.

            Parameters:

            `companyId` - ID da empresa

            `documentId` - ID do documento.

            `version` - Versão do documento.

            `approved` - passar true para aprovador e false para reprovado.

            `observation` - Observação do document.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha na aprovação.

            Since:

            1.5.12


        -   #### getDocumentApprovers

            ```
            List<DocumentApproverVO> getDocumentApprovers​(int documentId)
                                                   throws com.fluig.sdk.api.common.SDKException
            ```

            Retrieve all document approvers and yours status.

            Parameters:

            `documentId` - ID do documento.

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha na aprovação.

            Since:

            1.5.12


        -   #### getDocumentApprovers

            ```
            List<DocumentApproverVO> getDocumentApprovers​(int documentId,
                                                          boolean checkInheritance)
                                                   throws com.fluig.sdk.api.common.SDKException
            ```

            Retrieve all document approvers and yours status.

            Parameters:

            `documentId` - ID do documento.

            `checkInheritance` - Caso true, tenta buscar os aprovadores no pai

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Falha na aprovação.

            Since:

            1.7.0


        -   #### updateFile

            ```
            DocumentVO updateFile​(DocumentVO docVO)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Update file

            Parameters:

            `docVO` - Documento objeto

            Returns:

            Documento Objeto

            Throws:

            `com.fluig.sdk.api.common.SDKException` - 1.5.12


        -   #### setDocumentApprovers

            ```
            void setDocumentApprovers​(Long companyId,
                                      DocumentSecurityVO documentSecurityVO)
                               throws com.fluig.sdk.api.common.SDKException
            ```

            Set Approvers for a specific document

            Parameters:

            `Long` - companyId

            `DocumentSecurityVO` - documentSecurityVO

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.11


        -   #### getDocumentApprovalHistory

            ```
            List<DocumentApprovementHistoryVO> getDocumentApprovalHistory​(int documentId)
                                                                   throws com.fluig.sdk.api.common.SDKException
            ```

            Return the approvements history of the document

            Parameters:

            `int` - documentId

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.12


        -   #### validateDocumentPublicUrlConfiguration

            ```
            void validateDocumentPublicUrlConfiguration​(Long tenantId,
                                                        int documentId,
                                                        int version)
                                                 throws Exception
            ```

            Valida configurações de documento

            Parameters:

            `tenantId` -

            `documentId` -

            `version` -

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### isCanDownloadDocument

            ```
            boolean isCanDownloadDocument​(Long tenantId,
                                          int documentId,
                                          int version,
                                          String userCode,
                                          boolean fluigViewer)
                                   throws Exception
            ```

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### isDocumentDeleted

            ```
            boolean isDocumentDeleted​(Long tenantId,
                                      int documentId,
                                      int version)
                               throws Exception
            ```

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`
