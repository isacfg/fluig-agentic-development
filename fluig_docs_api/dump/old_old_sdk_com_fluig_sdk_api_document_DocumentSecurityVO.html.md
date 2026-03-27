# Class DocumentSecurityVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html)

---

Package [com.fluig.sdk.api.document](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/package-summary.html)

## Class DocumentSecurityVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.document.DocumentSecurityVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class DocumentSecurityVO
    extends Object
    implements Serializable
    ```

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">DocumentSecurityVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">DocumentSecurityVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;companyId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityConfigVO.html" title="class in com.fluig.sdk.api.document">DocumentSecurityConfigVO</a>&gt;&nbsp;documentSecurityConfigVOs)</code></th><td class="colLast">&nbsp;</td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">DocumentSecurityVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;companyId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html" title="class in com.fluig.sdk.api.document">DocumentPermissionVO</a>&gt;&nbsp;documentPermissionVO, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html" title="class in com.fluig.sdk.api.document">DocumentApproverVO</a>&gt;&nbsp;documentApproverVO)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html" title="class in com.fluig.sdk.api.document">DocumentApproverVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">getDocumentApproverVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html" title="class in com.fluig.sdk.api.document">DocumentPermissionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">getDocumentPermissionVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityConfigVO.html" title="class in com.fluig.sdk.api.document">DocumentSecurityConfigVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">getDocumentSecurityConfigVOs</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">setDocumentApproverVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html" title="class in com.fluig.sdk.api.document">DocumentApproverVO</a>&gt;&nbsp;documentApproverVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">setDocumentPermissionVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentPermissionVO.html" title="class in com.fluig.sdk.api.document">DocumentPermissionVO</a>&gt;&nbsp;documentPermissionVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityVO.html">setDocumentSecurityConfigVOs</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentSecurityConfigVO.html" title="class in com.fluig.sdk.api.document">DocumentSecurityConfigVO</a>&gt;&nbsp;documentSecurityConfigVOs)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### DocumentSecurityVO

            ```
            public DocumentSecurityVO()
            ```


        -   #### DocumentSecurityVO

            ```
            public DocumentSecurityVO​(Long companyId,
                                      String userCode,
                                      Integer documentId,
                                      List<DocumentSecurityConfigVO> documentSecurityConfigVOs)
            ```


        -   #### DocumentSecurityVO

            ```
            public DocumentSecurityVO​(Long companyId,
                                      List<DocumentPermissionVO> documentPermissionVO,
                                      List<DocumentApproverVO> documentApproverVO)
            ```


    -   ### Method Detail

        -   #### getDocumentSecurityConfigVOs

            ```
            public List<DocumentSecurityConfigVO> getDocumentSecurityConfigVOs()
            ```


        -   #### setDocumentSecurityConfigVOs

            ```
            public void setDocumentSecurityConfigVOs​(List<DocumentSecurityConfigVO> documentSecurityConfigVOs)
            ```


        -   #### getDocumentPermissionVO

            ```
            public List<DocumentPermissionVO> getDocumentPermissionVO()
            ```


        -   #### setDocumentPermissionVO

            ```
            public void setDocumentPermissionVO​(List<DocumentPermissionVO> documentPermissionVO)
            ```


        -   #### getDocumentApproverVO

            ```
            public List<DocumentApproverVO> getDocumentApproverVO()
            ```


        -   #### setDocumentApproverVO

            ```
            public void setDocumentApproverVO​(List<DocumentApproverVO> documentApproverVO)
            ```
