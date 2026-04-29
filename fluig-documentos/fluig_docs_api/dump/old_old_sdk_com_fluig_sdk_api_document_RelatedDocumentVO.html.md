# Class RelatedDocumentVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html)

---

Package [com.fluig.sdk.api.document](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/package-summary.html)

## Class RelatedDocumentVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.document.RelatedDocumentVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class RelatedDocumentVO
    extends Object
    implements Serializable
    ```

    Value Object para RelatedDocumento

    Version:

    1.00.000

    Author:

    vanei

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">RelatedDocumentVO</a></span>()</code></th><td class="colLast"><div class="block">Nova instância sem valores definidos</div></td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">RelatedDocumentVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;relatedDocumentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Nova instância do RelatedDocumentVO informando tenantId, relatedDocumentId, version, documentId</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">getDocumentId</a></span>()</code></th><td class="colLast"><div class="block">Retorna documentId</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">getRelatedDocumentId</a></span>()</code></th><td class="colLast"><div class="block">Retorna relatedDocumentId</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">getTenantId</a></span>()</code></th><td class="colLast"><div class="block">Retorna tenantId</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">getVersion</a></span>()</code></th><td class="colLast"><div class="block">Retorna versão</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">setDocumentId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Atribui valor para documentoId</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">setRelatedDocumentId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;relatedDocumentId)</code></th><td class="colLast"><div class="block">Atribui valor para relatedDocumentId</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">setTenantId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;tenantId)</code></th><td class="colLast"><div class="block">Atribui valor para tenantId</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/RelatedDocumentVO.html">setVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version)</code></th><td class="colLast"><div class="block">Atribui valor para versão</div></td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### RelatedDocumentVO

            ```
            public RelatedDocumentVO()
            ```

            Nova instância sem valores definidos


        -   #### RelatedDocumentVO

            ```
            public RelatedDocumentVO​(Long tenantId,
                                     Integer relatedDocumentId,
                                     Integer version,
                                     Integer documentId)
            ```

            Nova instância do RelatedDocumentVO informando tenantId, relatedDocumentId, version, documentId

            Parameters:

            `tenantId` -

            `relatedDocumentId` -

            `version` -

            `documentId` -


    -   ### Method Detail

        -   #### getTenantId

            ```
            public Long getTenantId()
            ```

            Retorna tenantId

            Returns:

            Long tenantId


        -   #### setTenantId

            ```
            public void setTenantId​(Long tenantId)
            ```

            Atribui valor para tenantId

            Parameters:

            `tenantId` -


        -   #### getDocumentId

            ```
            public Integer getDocumentId()
            ```

            Retorna documentId

            Returns:

            Integer


        -   #### setDocumentId

            ```
            public void setDocumentId​(Integer documentId)
            ```

            Atribui valor para documentoId

            Parameters:

            `documentId` -


        -   #### getVersion

            ```
            public Integer getVersion()
            ```

            Retorna versão

            Returns:

            Integer


        -   #### setVersion

            ```
            public void setVersion​(Integer version)
            ```

            Atribui valor para versão

            Parameters:

            `version` -


        -   #### getRelatedDocumentId

            ```
            public Integer getRelatedDocumentId()
            ```

            Retorna relatedDocumentId

            Returns:

            Integer


        -   #### setRelatedDocumentId

            ```
            public void setRelatedDocumentId​(Integer relatedDocumentId)
            ```

            Atribui valor para relatedDocumentId

            Parameters:

            `relatedDocumentId` -
