# Class DocumentApprovementHistoryVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html)

---

Package [com.fluig.sdk.api.document](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/package-summary.html)

## Class DocumentApprovementHistoryVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.document.DocumentApprovementHistoryVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class DocumentApprovementHistoryVO
    extends Object
    implements Serializable
    ```

    VO Utilizado pelo ws para mostrar o historico de aprovacoes do documento

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">DocumentApprovementHistoryVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">DocumentApprovementHistoryVO</a></span>​(int&nbsp;documentVersion, int&nbsp;iterationSequence, int&nbsp;levelId, int&nbsp;movementSequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;approvementDate, int&nbsp;status, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;observation, boolean&nbsp;signed, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueName)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getApprovementDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getColleagueId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getColleagueName</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getDocumentVersion</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getIterationSequence</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getLevelId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getMovementSequence</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getObservation</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">getStatus</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">isSigned</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setApprovementDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;approvementDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setColleagueId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setColleagueName</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueName)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setDocumentVersion</a></span>​(int&nbsp;documentVersion)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i14" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setIterationSequence</a></span>​(int&nbsp;iterationSequence)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setLevelId</a></span>​(int&nbsp;levelId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i16" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setMovementSequence</a></span>​(int&nbsp;movementSequence)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setObservation</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;observation)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setSigned</a></span>​(boolean&nbsp;signed)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html">setStatus</a></span>​(int&nbsp;status)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### DocumentApprovementHistoryVO

            ```
            public DocumentApprovementHistoryVO()
            ```


        -   #### DocumentApprovementHistoryVO

            ```
            public DocumentApprovementHistoryVO​(int documentVersion,
                                                int iterationSequence,
                                                int levelId,
                                                int movementSequence,
                                                String colleagueId,
                                                Date approvementDate,
                                                int status,
                                                String observation,
                                                boolean signed,
                                                String colleagueName)
            ```


    -   ### Method Detail

        -   #### getDocumentVersion

            ```
            public int getDocumentVersion()
            ```


        -   #### setDocumentVersion

            ```
            public void setDocumentVersion​(int documentVersion)
            ```


        -   #### getIterationSequence

            ```
            public int getIterationSequence()
            ```


        -   #### setIterationSequence

            ```
            public void setIterationSequence​(int iterationSequence)
            ```


        -   #### getLevelId

            ```
            public int getLevelId()
            ```


        -   #### setLevelId

            ```
            public void setLevelId​(int levelId)
            ```


        -   #### getMovementSequence

            ```
            public int getMovementSequence()
            ```


        -   #### setMovementSequence

            ```
            public void setMovementSequence​(int movementSequence)
            ```


        -   #### getColleagueId

            ```
            public String getColleagueId()
            ```


        -   #### setColleagueId

            ```
            public void setColleagueId​(String colleagueId)
            ```


        -   #### getApprovementDate

            ```
            public Date getApprovementDate()
            ```


        -   #### setApprovementDate

            ```
            public void setApprovementDate​(Date approvementDate)
            ```


        -   #### getStatus

            ```
            public int getStatus()
            ```


        -   #### setStatus

            ```
            public void setStatus​(int status)
            ```


        -   #### getObservation

            ```
            public String getObservation()
            ```


        -   #### setObservation

            ```
            public void setObservation​(String observation)
            ```


        -   #### isSigned

            ```
            public boolean isSigned()
            ```


        -   #### setSigned

            ```
            public void setSigned​(boolean signed)
            ```


        -   #### getColleagueName

            ```
            public String getColleagueName()
            ```


        -   #### setColleagueName

            ```
            public void setColleagueName​(String colleagueName)
            ```
