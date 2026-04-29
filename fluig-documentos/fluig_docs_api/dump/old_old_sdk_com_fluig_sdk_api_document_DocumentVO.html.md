# Class DocumentVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html)

---

Package [com.fluig.sdk.api.document](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/package-summary.html)

## Class DocumentVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.document.DocumentVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class DocumentVO
    extends Object
    implements Serializable
    ```

    Value Object para Documento

    Version:

    1.00.000

    Author:

    vanei

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_additionalComments</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui comentário adicional extra</div></td></tr><tr class="rowColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_colleagueName</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui nome de colega extra</div></td></tr><tr class="altColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_iconPath</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui caminho de icone extra</div></td></tr><tr class="rowColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_metaListId</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui meta lista id extra</div></td></tr><tr class="altColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_metaListRecordId</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui registro extra de meta list</div></td></tr><tr class="rowColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_publisherName</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui nome de publicador extra</div></td></tr><tr class="altColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_rowId</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui row id extra</div></td></tr><tr class="rowColor"><td class="colFirst"><code>protected static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">EXTATTR_versionOption</a></span></code></th><td class="colLast"><div class="block">Chave para informar se documento possui versão opcional extra</div></td></tr></tbody></table>


    -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">DocumentVO</a></span>()</code></th><td class="colLast"><div class="block">Nova instância de documento</div></td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">DocumentVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version)</code></th><td class="colLast"><div class="block">Nova instância de documento utilizando a versão, id do tenant e id do documento</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getAccessCount</a></span>()</code></th><td class="colLast"><div class="block">Recupera número de acessso</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getActiveVersion</a></span>()</code></th><td class="colLast"><div class="block">Recupera versão ativa</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getAdditionalComments</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do comentário nas informações extras</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getAllowMuiltiCardsPerUser</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento permite mult card por usuário</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getApprovalAndOr</a></span>()</code></th><td class="colLast"><div class="block">Recupera condição aprovalAndOr</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getApproved</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento está aprovado</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getApprovedDate</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor da data de aprovação</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getAtualizationId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id de atualização</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getCardDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera descrição do card</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getColleagueId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id do colega</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getCrc</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do crc</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getCreateDate</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor para data de criação</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDeleted</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento foi deletado</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDocumentDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera descrição do documento</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDocumentId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do document Id</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDocumentPropertyNumber</a></span>()</code></th><td class="colLast"><div class="block">Recupera número de propriedade do documento</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDocumentPropertyVersion</a></span>()</code></th><td class="colLast"><div class="block">Recupera versão do documento</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDocumentType</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do tipo de documento</div></td></tr><tr id="i18" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDocumentTypeId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do id do tipo de documento</div></td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDownloadEnabled</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se download é habilitado</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getDraft</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor de draft</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getExpirationDate</a></span>()</code></th><td class="colLast"><div class="block">Recupera data de expiração</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getExpires</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento expira</div></td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code>protected <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/HashMap.html?is-external=true" title="class or interface in java.util" class="externalLink">HashMap</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getExtData</a></span>()</code></th><td class="colLast"><div class="block">Recupera os dados extras</div></td></tr><tr id="i24" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getExternalDocumentId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id documento externo</div></td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getExtraData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;key)</code></th><td class="colLast"><div class="block">Recupera os dados extras</div></td></tr><tr id="i26" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getIconId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id do icone</div></td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getIconPath</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do path do icon</div></td></tr><tr id="i28" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getImutable</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento é imultavel</div></td></tr><tr id="i29" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getIndexed</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento é indexado</div></td></tr><tr id="i30" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getInheritSecurity</a></span>()</code></th><td class="colLast"><div class="block">Retorna se o documento herda as propriedades do parent</div></td></tr><tr id="i31" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getInternalVisualizer</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento pode ser visualizado internamente.</div></td></tr><tr id="i32" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getKeyWord</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor de palavra chave</div></td></tr><tr id="i33" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getLanguageId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id da linguagem</div></td></tr><tr id="i34" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getLastModifiedDate</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor da última data de moficação</div></td></tr><tr id="i35" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getLastModifiedTime</a></span>()</code></th><td class="colLast"><div class="block">Recupera última data de modificação</div></td></tr><tr id="i36" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getOnCheckout</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento está em checkout</div></td></tr><tr id="i37" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getParentDocumentId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id do pai do documento</div></td></tr><tr id="i38" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getPermissionType</a></span>()</code></th><td class="colLast"><div class="block">Recupera o tipo de permissão</div></td></tr><tr id="i39" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getPhisicalFile</a></span>()</code></th><td class="colLast"><div class="block">Recupera arquivo fisico</div></td></tr><tr id="i40" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Float.html?is-external=true" title="class or interface in java.lang" class="externalLink">Float</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getPhisicalFileSize</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do tamanho do arquivo fisico</div></td></tr><tr id="i41" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getPriority</a></span>()</code></th><td class="colLast"><div class="block">Recupera prioridade</div></td></tr><tr id="i42" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getPrivateColleagueId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor id privado do colega</div></td></tr><tr id="i43" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getPrivateDocument</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento é privado</div></td></tr><tr id="i44" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getPublisherId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id do publicador</div></td></tr><tr id="i45" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getRelatedFiles</a></span>()</code></th><td class="colLast"><div class="block">Recuprea arquivos relacionados</div></td></tr><tr id="i46" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getRestrictionType</a></span>()</code></th><td class="colLast"><div class="block">Recupera tipo de restrição</div></td></tr><tr id="i47" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getSiteCode</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do código do site</div></td></tr><tr id="i48" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getTenantId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id do tenant</div></td></tr><tr id="i49" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getTopicId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do id do topico</div></td></tr><tr id="i50" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getTranslated</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento é traduzido</div></td></tr><tr id="i51" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getUpdateIsoProperties</a></span>()</code></th><td class="colLast"><div class="block">Recupera updateIsoProperties</div></td></tr><tr id="i52" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getUploadId</a></span>()</code></th><td class="colLast"><div class="block">Recupera o identificador do upload</div></td></tr><tr id="i53" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getUserNotify</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se usuário será notificado</div></td></tr><tr id="i54" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getUUID</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do UUID</div></td></tr><tr id="i55" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getValidationStartDate</a></span>()</code></th><td class="colLast"><div class="block">Recupera data de inicio de validação</div></td></tr><tr id="i56" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getVersion</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor da versão</div></td></tr><tr id="i57" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getVersionAction</a></span>()</code></th><td class="colLast"><div class="block">Recupera a ação que serão realizada em relaão a versão documento</div></td></tr><tr id="i58" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getVersionDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera descrição da versão</div></td></tr><tr id="i59" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getVisualization</a></span>()</code></th><td class="colLast"><div class="block">Recupera visualização</div></td></tr><tr id="i60" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getVolumeId</a></span>()</code></th><td class="colLast"><div class="block">Recupera id do volume</div></td></tr><tr id="i61" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">getWatermarkId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor, se documento tem marca d'água</div></td></tr><tr id="i62" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setAccessCount</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;accessCount)</code></th><td class="colLast"><div class="block">Atribui valor para número de acessos</div></td></tr><tr id="i63" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setActiveVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;activeVersion)</code></th><td class="colLast"><div class="block">Atribui valor para versão ativa</div></td></tr><tr id="i64" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setAdditionalComments</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;comments)</code></th><td class="colLast"><div class="block">Atribui o valor do comentário nas informações extras</div></td></tr><tr id="i65" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setAllowMuiltiCardsPerUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;allowMuiltiCardsPerUser)</code></th><td class="colLast"><div class="block">Atribui valor para allowMuiltiCardsPerUser</div></td></tr><tr id="i66" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setApprovalAndOr</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;approvalAndOr)</code></th><td class="colLast"><div class="block">Atribui valor para approvalAndOr</div></td></tr><tr id="i67" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setApproved</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;approved)</code></th><td class="colLast"><div class="block">Atribui valor, se documento está aprovado</div></td></tr><tr id="i68" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setApprovedDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;approvedDate)</code></th><td class="colLast"><div class="block">Atribui valor para data de aprovação</div></td></tr><tr id="i69" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setAtualizationId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;atualizationId)</code></th><td class="colLast"><div class="block">Atribui valor para id de atualização</div></td></tr><tr id="i70" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setCardDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardDescription)</code></th><td class="colLast"><div class="block">Atribui valor para descrição do card</div></td></tr><tr id="i71" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setColleagueId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Atribui valor para id do colega</div></td></tr><tr id="i72" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setCrc</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;crc)</code></th><td class="colLast"><div class="block">Atribui valor para crc</div></td></tr><tr id="i73" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setCreateDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;createDate)</code></th><td class="colLast"><div class="block">Atribui valor para data de criação</div></td></tr><tr id="i74" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDeleted</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;deleted)</code></th><td class="colLast"><div class="block">Atribui valor, se documento foi deletado</div></td></tr><tr id="i75" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDocumentDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;documentDescription)</code></th><td class="colLast"><div class="block">Atribui valor para descrição do documento</div></td></tr><tr id="i76" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDocumentId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Atribui valor para id do documento</div></td></tr><tr id="i77" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDocumentPropertyNumber</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentPropertyNumber)</code></th><td class="colLast"><div class="block">Atribui valor para número de propriedade do documento</div></td></tr><tr id="i78" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDocumentPropertyVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentPropertyVersion)</code></th><td class="colLast"><div class="block">Atribui versão de documento</div></td></tr><tr id="i79" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDocumentType</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;documentType)</code></th><td class="colLast"><div class="block">Atribui valor para tipo de documento</div></td></tr><tr id="i80" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDocumentTypeId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;documentTypeId)</code></th><td class="colLast"><div class="block">Atribui valor para id do tipo de documento</div></td></tr><tr id="i81" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDownloadEnabled</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;downloadEnabled)</code></th><td class="colLast"><div class="block">Atribui valor, se download é habilitado</div></td></tr><tr id="i82" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setDraft</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;draft)</code></th><td class="colLast"><div class="block">Atribui valor para draft</div></td></tr><tr id="i83" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setExpirationDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;expirationDate)</code></th><td class="colLast"><div class="block">Atribui valor para data de expiração</div></td></tr><tr id="i84" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setExpires</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;expires)</code></th><td class="colLast"><div class="block">Atribui valor, se documento expira</div></td></tr><tr id="i85" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setExternalDocumentId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;externalDocumentId)</code></th><td class="colLast"><div class="block">Atribui valor para id documento externo</div></td></tr><tr id="i86" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setExtraData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;key, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;value)</code></th><td class="colLast"><div class="block">Atribui valores para os dados extras</div></td></tr><tr id="i87" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setIconId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;iconId)</code></th><td class="colLast"><div class="block">Atribui valor para id do icone</div></td></tr><tr id="i88" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setIconPath</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;iconPath)</code></th><td class="colLast"><div class="block">Atribui valor do iconPath do arquivo</div></td></tr><tr id="i89" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setImutable</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;imutable)</code></th><td class="colLast"><div class="block">Atribui valor, se documento é imutavel</div></td></tr><tr id="i90" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setIndexed</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;indexed)</code></th><td class="colLast"><div class="block">Atribui valor, se documento é indexado</div></td></tr><tr id="i91" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setInheritSecurity</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;inheritSecurity)</code></th><td class="colLast"><div class="block">Atribui se herda as propriedades de segurança do parent</div></td></tr><tr id="i92" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setInternalVisualizer</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;internalVisualizer)</code></th><td class="colLast"><div class="block">Atribui valor, se documento pode ser visualizado internamente</div></td></tr><tr id="i93" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setKeyWord</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;keyWord)</code></th><td class="colLast"><div class="block">Atribui valor para palavra chave</div></td></tr><tr id="i94" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setLanguageId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;languageId)</code></th><td class="colLast"><div class="block">Atribui valor para id da linguagem</div></td></tr><tr id="i95" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setLastModifiedDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;lastModifiedDate)</code></th><td class="colLast"><div class="block">Atribui valor para última data de modificação</div></td></tr><tr id="i96" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setLastModifiedTime</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;lastModifiedTime)</code></th><td class="colLast"><div class="block">Atribui valor a última data de modificação</div></td></tr><tr id="i97" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setOnCheckout</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;onCheckout)</code></th><td class="colLast"><div class="block">Atribui valor, se documento está em checkout</div></td></tr><tr id="i98" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setParentDocumentId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;parentDocumentId)</code></th><td class="colLast"><div class="block">Atribui valor para id do documento pai</div></td></tr><tr id="i99" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setPermissionType</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;permissionType)</code></th><td class="colLast"><div class="block">Atribui valor para tipo de permissão</div></td></tr><tr id="i100" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setPhisicalFile</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;phisicalFile)</code></th><td class="colLast"><div class="block">Atribui valor para arquivo fisico</div></td></tr><tr id="i101" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setPhisicalFileSize</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Float.html?is-external=true" title="class or interface in java.lang" class="externalLink">Float</a>&nbsp;phisicalFileSize)</code></th><td class="colLast"><div class="block">Atribui valor para o tamanho do arquivo fisico</div></td></tr><tr id="i102" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setPriority</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;priority)</code></th><td class="colLast"><div class="block">Atribui valor prioridade</div></td></tr><tr id="i103" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setPrivateColleagueId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;privateColleagueId)</code></th><td class="colLast"><div class="block">Atribui valor id privado do colega</div></td></tr><tr id="i104" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setPrivateDocument</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;privateDocument)</code></th><td class="colLast"><div class="block">Atribui valor, se documento é privado</div></td></tr><tr id="i105" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setPublisherId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;publisherId)</code></th><td class="colLast"><div class="block">Atribui valor para id do publicador</div></td></tr><tr id="i106" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setRelatedFiles</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;relatedFiles)</code></th><td class="colLast"><div class="block">Atribui valor para arquivos relacionados</div></td></tr><tr id="i107" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setRestrictionType</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;restrictionType)</code></th><td class="colLast"><div class="block">Atribui valor para tipo de restrição</div></td></tr><tr id="i108" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setSiteCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;siteCode)</code></th><td class="colLast"><div class="block">Atribui valor para código de site</div></td></tr><tr id="i109" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setTenantId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId)</code></th><td class="colLast"><div class="block">Atribui valor para id do tenant</div></td></tr><tr id="i110" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setTopicId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;topicId)</code></th><td class="colLast"><div class="block">Atribui valor para id do topico</div></td></tr><tr id="i111" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setTranslated</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;translated)</code></th><td class="colLast"><div class="block">Atribui valor, se documento é traduzido</div></td></tr><tr id="i112" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setUpdateIsoProperties</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;updateIsoProperties)</code></th><td class="colLast"><div class="block">Atribui valor para updateIsoProperties</div></td></tr><tr id="i113" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setUploadId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;uploadId)</code></th><td class="colLast"><div class="block">Atribue o identificador do uplaod</div></td></tr><tr id="i114" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setUserNotify</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;userNotify)</code></th><td class="colLast"><div class="block">Atribui valor se usuário será notificado</div></td></tr><tr id="i115" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setUUID</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;uUID)</code></th><td class="colLast"><div class="block">Atribui valor para UUID</div></td></tr><tr id="i116" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setValidationStartDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;validationStartDate)</code></th><td class="colLast"><div class="block">Atribui valor para data de início de validação</div></td></tr><tr id="i117" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version)</code></th><td class="colLast"><div class="block">Atribui valor para versão</div></td></tr><tr id="i118" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setVersionAction</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;versionAction)</code></th><td class="colLast"><div class="block">Atribue a ação que serão realizada em relaão a versão documento</div></td></tr><tr id="i119" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setVersionDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;versionDescription)</code></th><td class="colLast"><div class="block">Atribui valor para descrição da versão</div></td></tr><tr id="i120" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setVisualization</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;visualization)</code></th><td class="colLast"><div class="block">Atribui valor para visualização</div></td></tr><tr id="i121" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setVolumeId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;volumeId)</code></th><td class="colLast"><div class="block">Atribui valor ao id do volume</div></td></tr><tr id="i122" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html">setWatermarkId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;watermarkId)</code></th><td class="colLast"><div class="block">Atribui valor, se documento tem marca d'água</div></td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Field Detail

        -   #### EXTATTR\_additionalComments

            ```
            protected static final String EXTATTR_additionalComments
            ```

            Chave para informar se documento possui comentário adicional extra

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### EXTATTR\_versionOption

            ```
            protected static final String EXTATTR_versionOption
            ```

            Chave para informar se documento possui versão opcional extra

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### EXTATTR\_iconPath

            ```
            protected static final String EXTATTR_iconPath
            ```

            Chave para informar se documento possui caminho de icone extra

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### EXTATTR\_colleagueName

            ```
            protected static final String EXTATTR_colleagueName
            ```

            Chave para informar se documento possui nome de colega extra

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### EXTATTR\_rowId

            ```
            protected static final String EXTATTR_rowId
            ```

            Chave para informar se documento possui row id extra

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### EXTATTR\_publisherName

            ```
            protected static final String EXTATTR_publisherName
            ```

            Chave para informar se documento possui nome de publicador extra

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### EXTATTR\_metaListId

            ```
            protected static final String EXTATTR_metaListId
            ```

            Chave para informar se documento possui meta lista id extra

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### EXTATTR\_metaListRecordId

            ```
            protected static final String EXTATTR_metaListRecordId
            ```

            Chave para informar se documento possui registro extra de meta list

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


    -   ### Constructor Detail

        -   #### DocumentVO

            ```
            public DocumentVO()
            ```

            Nova instância de documento


        -   #### DocumentVO

            ```
            public DocumentVO​(Long tenantId,
                              Integer documentId,
                              Integer version)
            ```

            Nova instância de documento utilizando a versão, id do tenant e id do documento

            Parameters:

            `tenantId` -

            `documentId` -

            `version` -


    -   ### Method Detail

        -   #### getExtData

            ```
            protected HashMap<String,​Object> getExtData()
            ```

            Recupera os dados extras

            Returns:

            HashMap


        -   #### setExtraData

            ```
            public void setExtraData​(String key,
                                     Object value)
            ```

            Atribui valores para os dados extras

            Parameters:

            `key` -

            `value` -


        -   #### getExtraData

            ```
            public Object getExtraData​(String key)
            ```

            Recupera os dados extras

            Parameters:

            `key` -

            Returns:

            Object


        -   #### getTenantId

            ```
            public Long getTenantId()
            ```

            Recupera id do tenant

            Returns:

            Long


        -   #### setTenantId

            ```
            public void setTenantId​(Long tenantId)
            ```

            Atribui valor para id do tenant

            Parameters:

            `tenantId` -


        -   #### getDocumentId

            ```
            public Integer getDocumentId()
            ```

            Recupera valor do document Id

            Returns:

            Integer


        -   #### setDocumentId

            ```
            public void setDocumentId​(Integer documentId)
            ```

            Atribui valor para id do documento

            Parameters:

            `documentId` -


        -   #### getVersion

            ```
            public Integer getVersion()
            ```

            Recupera valor da versão

            Returns:

            Integer


        -   #### setVersion

            ```
            public void setVersion​(Integer version)
            ```

            Atribui valor para versão

            Parameters:

            `version` -


        -   #### getDocumentTypeId

            ```
            public String getDocumentTypeId()
            ```

            Recupera valor do id do tipo de documento

            Returns:

            String


        -   #### setDocumentTypeId

            ```
            public void setDocumentTypeId​(String documentTypeId)
            ```

            Atribui valor para id do tipo de documento

            Parameters:

            `documentTypeId` -


        -   #### getLanguageId

            ```
            public String getLanguageId()
            ```

            Recupera id da linguagem

            Returns:

            String


        -   #### setLanguageId

            ```
            public void setLanguageId​(String languageId)
            ```

            Atribui valor para id da linguagem

            Parameters:

            `languageId` -


        -   #### getIconId

            ```
            public Integer getIconId()
            ```

            Recupera id do icone

            Returns:

            Integer


        -   #### setIconId

            ```
            public void setIconId​(Integer iconId)
            ```

            Atribui valor para id do icone

            Parameters:

            `iconId` -


        -   #### getTopicId

            ```
            public Integer getTopicId()
            ```

            Recupera valor do id do topico

            Returns:

            Integer


        -   #### setTopicId

            ```
            public void setTopicId​(Integer topicId)
            ```

            Atribui valor para id do topico

            Parameters:

            `topicId` -


        -   #### getColleagueId

            ```
            public String getColleagueId()
            ```

            Recupera id do colega

            Returns:

            String


        -   #### setColleagueId

            ```
            public void setColleagueId​(String colleagueId)
            ```

            Atribui valor para id do colega

            Parameters:

            `colleagueId` -


        -   #### getDocumentDescription

            ```
            public String getDocumentDescription()
            ```

            Recupera descrição do documento

            Returns:

            String


        -   #### setDocumentDescription

            ```
            public void setDocumentDescription​(String documentDescription)
            ```

            Atribui valor para descrição do documento

            Parameters:

            `documentDescription` -


        -   #### getPhisicalFile

            ```
            public String getPhisicalFile()
            ```

            Recupera arquivo fisico

            Returns:

            String


        -   #### setPhisicalFile

            ```
            public void setPhisicalFile​(String phisicalFile)
            ```

            Atribui valor para arquivo fisico

            Parameters:

            `phisicalFile` -


        -   #### getKeyWord

            ```
            public String getKeyWord()
            ```

            Recupera valor de palavra chave

            Returns:

            String


        -   #### setKeyWord

            ```
            public void setKeyWord​(String keyWord)
            ```

            Atribui valor para palavra chave

            Parameters:

            `keyWord` -


        -   #### getCreateDate

            ```
            public Date getCreateDate()
            ```

            Recupera valor para data de criação

            Returns:

            Date


        -   #### setCreateDate

            ```
            public void setCreateDate​(Date createDate)
            ```

            Atribui valor para data de criação

            Parameters:

            `createDate` -


        -   #### getApprovedDate

            ```
            public Date getApprovedDate()
            ```

            Recupera valor da data de aprovação

            Returns:

            Date


        -   #### setApprovedDate

            ```
            public void setApprovedDate​(Date approvedDate)
            ```

            Atribui valor para data de aprovação

            Parameters:

            `approvedDate` -


        -   #### getLastModifiedDate

            ```
            public Date getLastModifiedDate()
            ```

            Recupera valor da última data de moficação

            Returns:

            Date


        -   #### setLastModifiedDate

            ```
            public void setLastModifiedDate​(Date lastModifiedDate)
            ```

            Atribui valor para última data de modificação

            Parameters:

            `lastModifiedDate` -


        -   #### getDocumentType

            ```
            public String getDocumentType()
            ```

            Recupera valor do tipo de documento

            Returns:

            String


        -   #### setDocumentType

            ```
            public void setDocumentType​(String documentType)
            ```

            Atribui valor para tipo de documento

            Parameters:

            `documentType` -


        -   #### getExpirationDate

            ```
            public Date getExpirationDate()
            ```

            Recupera data de expiração

            Returns:

            Date


        -   #### setExpirationDate

            ```
            public void setExpirationDate​(Date expirationDate)
            ```

            Atribui valor para data de expiração

            Parameters:

            `expirationDate` -


        -   #### getAccessCount

            ```
            public Integer getAccessCount()
            ```

            Recupera número de acessso

            Returns:

            Integer


        -   #### setAccessCount

            ```
            public void setAccessCount​(Integer accessCount)
            ```

            Atribui valor para número de acessos

            Parameters:

            `accessCount` -


        -   #### getAtualizationId

            ```
            public Integer getAtualizationId()
            ```

            Recupera id de atualização

            Returns:

            Integer


        -   #### setAtualizationId

            ```
            public void setAtualizationId​(Integer atualizationId)
            ```

            Atribui valor para id de atualização

            Parameters:

            `atualizationId` -


        -   #### getParentDocumentId

            ```
            public Integer getParentDocumentId()
            ```

            Recupera id do pai do documento

            Returns:

            Integer


        -   #### setParentDocumentId

            ```
            public void setParentDocumentId​(Integer parentDocumentId)
            ```

            Atribui valor para id do documento pai

            Parameters:

            `parentDocumentId` -


        -   #### getVisualization

            ```
            public String getVisualization()
            ```

            Recupera visualização

            Returns:

            String


        -   #### setVisualization

            ```
            public void setVisualization​(String visualization)
            ```

            Atribui valor para visualização

            Parameters:

            `visualization` -


        -   #### getRelatedFiles

            ```
            public String getRelatedFiles()
            ```

            Recuprea arquivos relacionados

            Returns:

            String


        -   #### setRelatedFiles

            ```
            public void setRelatedFiles​(String relatedFiles)
            ```

            Atribui valor para arquivos relacionados

            Parameters:

            `relatedFiles` -


        -   #### getActiveVersion

            ```
            public Boolean getActiveVersion()
            ```

            Recupera versão ativa

            Returns:

            Boolean


        -   #### setActiveVersion

            ```
            public void setActiveVersion​(Boolean activeVersion)
            ```

            Atribui valor para versão ativa

            Parameters:

            `activeVersion` -


        -   #### getVersionDescription

            ```
            public String getVersionDescription()
            ```

            Recupera descrição da versão

            Returns:

            String


        -   #### setVersionDescription

            ```
            public void setVersionDescription​(String versionDescription)
            ```

            Atribui valor para descrição da versão

            Parameters:

            `versionDescription` -


        -   #### getApprovalAndOr

            ```
            public Boolean getApprovalAndOr()
            ```

            Recupera condição aprovalAndOr

            Returns:

            Boolean


        -   #### setApprovalAndOr

            ```
            public void setApprovalAndOr​(Boolean approvalAndOr)
            ```

            Atribui valor para approvalAndOr

            Parameters:

            `approvalAndOr` -


        -   #### getExternalDocumentId

            ```
            public String getExternalDocumentId()
            ```

            Recupera id documento externo

            Returns:

            String


        -   #### setExternalDocumentId

            ```
            public void setExternalDocumentId​(String externalDocumentId)
            ```

            Atribui valor para id documento externo

            Parameters:

            `externalDocumentId` -


        -   #### getDownloadEnabled

            ```
            public Boolean getDownloadEnabled()
            ```

            Recupera valor, se download é habilitado

            Returns:

            Boolean


        -   #### setDownloadEnabled

            ```
            public void setDownloadEnabled​(Boolean downloadEnabled)
            ```

            Atribui valor, se download é habilitado

            Parameters:

            `downloadEnabled` -


        -   #### getApproved

            ```
            public Boolean getApproved()
            ```

            Recupera valor, se documento está aprovado

            Returns:

            Boolean


        -   #### setApproved

            ```
            public void setApproved​(Boolean approved)
            ```

            Atribui valor, se documento está aprovado

            Parameters:

            `approved` -


        -   #### getValidationStartDate

            ```
            public Date getValidationStartDate()
            ```

            Recupera data de inicio de validação

            Returns:

            Date


        -   #### setValidationStartDate

            ```
            public void setValidationStartDate​(Date validationStartDate)
            ```

            Atribui valor para data de início de validação

            Parameters:

            `validationStartDate` -


        -   #### getPublisherId

            ```
            public String getPublisherId()
            ```

            Recupera id do publicador

            Returns:

            String


        -   #### setPublisherId

            ```
            public void setPublisherId​(String publisherId)
            ```

            Atribui valor para id do publicador

            Parameters:

            `publisherId` -


        -   #### getCardDescription

            ```
            public String getCardDescription()
            ```

            Recupera descrição do card

            Returns:

            String


        -   #### setCardDescription

            ```
            public void setCardDescription​(String cardDescription)
            ```

            Atribui valor para descrição do card

            Parameters:

            `cardDescription` -


        -   #### getAllowMuiltiCardsPerUser

            ```
            public Boolean getAllowMuiltiCardsPerUser()
            ```

            Recupera valor, se documento permite mult card por usuário

            Returns:

            Boolean


        -   #### setAllowMuiltiCardsPerUser

            ```
            public void setAllowMuiltiCardsPerUser​(Boolean allowMuiltiCardsPerUser)
            ```

            Atribui valor para allowMuiltiCardsPerUser

            Parameters:

            `allowMuiltiCardsPerUser` -


        -   #### getDocumentPropertyNumber

            ```
            public Integer getDocumentPropertyNumber()
            ```

            Recupera número de propriedade do documento

            Returns:

            Integer


        -   #### setDocumentPropertyNumber

            ```
            public void setDocumentPropertyNumber​(Integer documentPropertyNumber)
            ```

            Atribui valor para número de propriedade do documento

            Parameters:

            `documentPropertyNumber` -


        -   #### getDocumentPropertyVersion

            ```
            public Integer getDocumentPropertyVersion()
            ```

            Recupera versão do documento

            Returns:

            Integer


        -   #### setDocumentPropertyVersion

            ```
            public void setDocumentPropertyVersion​(Integer documentPropertyVersion)
            ```

            Atribui versão de documento

            Parameters:

            `documentPropertyVersion` -


        -   #### getPrivateDocument

            ```
            public Boolean getPrivateDocument()
            ```

            Recupera valor, se documento é privado

            Returns:

            is Private


        -   #### setPrivateDocument

            ```
            public void setPrivateDocument​(Boolean privateDocument)
            ```

            Atribui valor, se documento é privado

            Parameters:

            `privateDocument` -


        -   #### getPrivateColleagueId

            ```
            public String getPrivateColleagueId()
            ```

            Recupera valor id privado do colega

            Returns:

            String


        -   #### setPrivateColleagueId

            ```
            public void setPrivateColleagueId​(String privateColleagueId)
            ```

            Atribui valor id privado do colega

            Parameters:

            `privateColleagueId` -


        -   #### getIndexed

            ```
            public Boolean getIndexed()
            ```

            Recupera valor, se documento é indexado

            Returns:

            Boolean


        -   #### setIndexed

            ```
            public void setIndexed​(Boolean indexed)
            ```

            Atribui valor, se documento é indexado

            Parameters:

            `indexed` -


        -   #### getPriority

            ```
            public Integer getPriority()
            ```

            Recupera prioridade

            Returns:

            Integer


        -   #### setPriority

            ```
            public void setPriority​(Integer priority)
            ```

            Atribui valor prioridade

            Parameters:

            `priority` -


        -   #### getTranslated

            ```
            public Boolean getTranslated()
            ```

            Recupera valor, se documento é traduzido

            Returns:

            Boolean


        -   #### setTranslated

            ```
            public void setTranslated​(Boolean translated)
            ```

            Atribui valor, se documento é traduzido

            Parameters:

            `translated` -


        -   #### getUserNotify

            ```
            public Boolean getUserNotify()
            ```

            Recupera valor, se usuário será notificado

            Returns:

            Boolean


        -   #### setUserNotify

            ```
            public void setUserNotify​(Boolean userNotify)
            ```

            Atribui valor se usuário será notificado

            Parameters:

            `userNotify` -


        -   #### getExpires

            ```
            public Boolean getExpires()
            ```

            Recupera valor, se documento expira

            Returns:

            Boolean


        -   #### setExpires

            ```
            public void setExpires​(Boolean expires)
            ```

            Atribui valor, se documento expira

            Parameters:

            `expires` -


        -   #### getVolumeId

            ```
            public String getVolumeId()
            ```

            Recupera id do volume

            Returns:

            String


        -   #### setVolumeId

            ```
            public void setVolumeId​(String volumeId)
            ```

            Atribui valor ao id do volume

            Parameters:

            `volumeId` -


        -   #### getUpdateIsoProperties

            ```
            public Boolean getUpdateIsoProperties()
            ```

            Recupera updateIsoProperties

            Returns:

            Boolean


        -   #### setUpdateIsoProperties

            ```
            public void setUpdateIsoProperties​(Boolean updateIsoProperties)
            ```

            Atribui valor para updateIsoProperties

            Parameters:

            `updateIsoProperties` -


        -   #### getLastModifiedTime

            ```
            public String getLastModifiedTime()
            ```

            Recupera última data de modificação

            Returns:

            String


        -   #### setLastModifiedTime

            ```
            public void setLastModifiedTime​(String lastModifiedTime)
            ```

            Atribui valor a última data de modificação

            Parameters:

            `lastModifiedTime` -


        -   #### getDeleted

            ```
            public Boolean getDeleted()
            ```

            Recupera valor, se documento foi deletado

            Returns:

            Boolean


        -   #### setDeleted

            ```
            public void setDeleted​(Boolean deleted)
            ```

            Atribui valor, se documento foi deletado

            Parameters:

            `deleted` -


        -   #### getImutable

            ```
            public Boolean getImutable()
            ```

            Recupera valor, se documento é imultavel

            Returns:

            Boolean


        -   #### setImutable

            ```
            public void setImutable​(Boolean imutable)
            ```

            Atribui valor, se documento é imutavel

            Parameters:

            `imutable` -


        -   #### getInternalVisualizer

            ```
            public Boolean getInternalVisualizer()
            ```

            Recupera valor, se documento pode ser visualizado internamente.

            Returns:

            Boolean


        -   #### setInternalVisualizer

            ```
            public void setInternalVisualizer​(Boolean internalVisualizer)
            ```

            Atribui valor, se documento pode ser visualizado internamente

            Parameters:

            `internalVisualizer` -


        -   #### getWatermarkId

            ```
            public Integer getWatermarkId()
            ```

            Recupera valor, se documento tem marca d'água

            Returns:

            Integer


        -   #### setWatermarkId

            ```
            public void setWatermarkId​(Integer watermarkId)
            ```

            Atribui valor, se documento tem marca d'água

            Parameters:

            `watermarkId` -


        -   #### getCrc

            ```
            public Long getCrc()
            ```

            Recupera valor do crc

            Returns:

            Long


        -   #### setCrc

            ```
            public void setCrc​(Long crc)
            ```

            Atribui valor para crc

            Parameters:

            `crc` -


        -   #### getUUID

            ```
            public String getUUID()
            ```

            Recupera valor do UUID

            Returns:

            String


        -   #### setUUID

            ```
            public void setUUID​(String uUID)
            ```

            Atribui valor para UUID

            Parameters:

            `uUID` -


        -   #### getPhisicalFileSize

            ```
            public Float getPhisicalFileSize()
            ```

            Recupera valor do tamanho do arquivo fisico

            Returns:

            phisicalFileSize


        -   #### setPhisicalFileSize

            ```
            public void setPhisicalFileSize​(Float phisicalFileSize)
            ```

            Atribui valor para o tamanho do arquivo fisico

            Parameters:

            `phisicalFileSize` -


        -   #### getPermissionType

            ```
            public Integer getPermissionType()
            ```

            Recupera o tipo de permissão

            Returns:

            Integer


        -   #### setPermissionType

            ```
            public void setPermissionType​(Integer permissionType)
            ```

            Atribui valor para tipo de permissão

            Parameters:

            `permissionType` -


        -   #### getRestrictionType

            ```
            public Integer getRestrictionType()
            ```

            Recupera tipo de restrição

            Returns:

            restrictionType


        -   #### setRestrictionType

            ```
            public void setRestrictionType​(Integer restrictionType)
            ```

            Atribui valor para tipo de restrição

            Parameters:

            `restrictionType` -


        -   #### getSiteCode

            ```
            public String getSiteCode()
            ```

            Recupera valor do código do site

            Returns:

            String


        -   #### setSiteCode

            ```
            public void setSiteCode​(String siteCode)
            ```

            Atribui valor para código de site

            Parameters:

            `siteCode` -


        -   #### getDraft

            ```
            public Boolean getDraft()
            ```

            Recupera valor de draft

            Returns:

            Boolean


        -   #### setDraft

            ```
            public void setDraft​(Boolean draft)
            ```

            Atribui valor para draft

            Parameters:

            `draft` -


        -   #### getOnCheckout

            ```
            public Boolean getOnCheckout()
            ```

            Recupera valor, se documento está em checkout

            Returns:

            Boolean


        -   #### setOnCheckout

            ```
            public void setOnCheckout​(Boolean onCheckout)
            ```

            Atribui valor, se documento está em checkout

            Parameters:

            `onCheckout` -


        -   #### getIconPath

            ```
            public String getIconPath()
            ```

            Recupera valor do path do icon

            Returns:

            String


        -   #### setIconPath

            ```
            public void setIconPath​(String iconPath)
            ```

            Atribui valor do iconPath do arquivo

            Parameters:

            `iconPath` -


        -   #### getVersionAction

            ```
            public String getVersionAction()
            ```

            Recupera a ação que serão realizada em relaão a versão documento

            Returns:

            String


        -   #### setVersionAction

            ```
            public void setVersionAction​(String versionAction)
            ```

            Atribue a ação que serão realizada em relaão a versão documento

            Parameters:

            `versionAction` -


        -   #### getUploadId

            ```
            public String getUploadId()
            ```

            Recupera o identificador do upload

            Returns:

            String uploadId


        -   #### setUploadId

            ```
            public void setUploadId​(String uploadId)
            ```

            Atribue o identificador do uplaod

            Parameters:

            `uploadId` -


        -   #### getAdditionalComments

            ```
            public String getAdditionalComments()
            ```

            Recupera o valor do comentário nas informações extras

            Returns:

            String comments


        -   #### setAdditionalComments

            ```
            public void setAdditionalComments​(String comments)
            ```

            Atribui o valor do comentário nas informações extras

            Parameters:

            `comments` -


        -   #### getInheritSecurity

            ```
            public Boolean getInheritSecurity()
            ```

            Retorna se o documento herda as propriedades do parent

            Returns:

            Boolean inheritSecurity


        -   #### setInheritSecurity

            ```
            public void setInheritSecurity​(Boolean inheritSecurity)
            ```

            Atribui se herda as propriedades de segurança do parent

            Parameters:

            `inheritSecurity` -
