# Interface FolderDocumentService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface FolderDocumentService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface FolderDocumentService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de pastas (GED).

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/FolderVO.html" title="class in com.fluig.sdk.api.document">FolderVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/FolderVO.html" title="class in com.fluig.sdk.api.document">FolderVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Criação de uma nova pasta</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">get</a></span>​(int&nbsp;documentId)</code></th><td class="colLast"><div class="block">Recupera um documento através do id</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">list</a></span>​(int&nbsp;folderId)</code></th><td class="colLast"><div class="block">Recupera lista de documentos através do id da pasta</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">list</a></span>​(int&nbsp;folderId, int&nbsp;permission)</code></th><td class="colLast"><div class="block">Recupera lista de documentos através do id da pasta</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">listDocumentsByFolder</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/FolderVO.html" title="class in com.fluig.sdk.api.document">FolderVO</a>&nbsp;folderVO, int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast"><div class="block">Retorna os documentos de uma pasta</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html">updateDocumentDescription</a></span>​(long&nbsp;companyId, int&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;description)</code></th><td class="colLast"><div class="block">Atualiza documento ou pasta</div></td></tr></tbody></table>

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

        -   #### get

            ```
            DocumentVO get​(int documentId)
                    throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera um documento através do id

            Parameters:

            `documentId` -

            Returns:

            DocumentVO

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### create

            ```
            FolderVO create​(FolderVO vo)
                     throws com.fluig.sdk.api.common.SDKException
            ```

            Criação de uma nova pasta

            Parameters:

            `vo` -

            Returns:

            FolderVO

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### list

            ```
            List<DocumentVO> list​(int folderId)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera lista de documentos através do id da pasta

            Parameters:

            `folderId` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### updateDocumentDescription

            ```
            DocumentVO updateDocumentDescription​(long companyId,
                                                 int documentId,
                                                 String description)
                                          throws com.fluig.sdk.api.common.SDKException
            ```

            Atualiza documento ou pasta

            Parameters:

            `companyId` -

            `documentId` -

            `description` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### list

            ```
            List<DocumentVO> list​(int folderId,
                                  int permission)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Recupera lista de documentos através do id da pasta

            Parameters:

            `folderId` -

            `permission` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listDocumentsByFolder

            ```
            List<DocumentVO> listDocumentsByFolder​(FolderVO folderVO,
                                                   int limit,
                                                   int offset)
                                            throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna os documentos de uma pasta

            Parameters:

            `FolderVO` -

            `limit` -

            `offset` -

            Returns:

            List

            Throws:

            `com.fluig.sdk.api.common.SDKException`
