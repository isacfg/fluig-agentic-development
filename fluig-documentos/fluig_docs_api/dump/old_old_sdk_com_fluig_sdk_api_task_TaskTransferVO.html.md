# Class TaskTransferVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html)

---

Package [com.fluig.sdk.api.task](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/package-summary.html)

## Class TaskTransferVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.task.TaskTransferVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class TaskTransferVO
    extends Object
    implements Serializable
    ```

    Value Object para Transferência de Pendências

    Version:

    1.00.000

    Author:

    Deividi Silva

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">TaskTransferVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getDocumentIdFinal</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do documentIdFinal</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getDocumentIdInitial</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do documentIdInitial</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getInstanceIdFinal</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do instanceIdFinal</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getInstanceIdInitial</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do instanceIdInitial</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getTransferActiveDocuments</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do transferActiveDocuments</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getTransferApprovals</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do transferApprovals</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getTransferApprovers</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do transferApprovers</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getTransferDocumentSecurity</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do transferDocumentSecurity</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getTransferMyDocumentsInApproval</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do transferMyDocumentsInApproval</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getTransferOpenWorkflow</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do transferOpenWorkflow</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getTransferPendingWorkflow</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do transferPendingWorkflow</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getUserFrom</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do userFrom</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">getUserTo</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do userTo</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setDocumentIdFinal</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentIdFinal)</code></th><td class="colLast"><div class="block">Atribui valor para documentIdFinal</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setDocumentIdInitial</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentIdInitial)</code></th><td class="colLast"><div class="block">Atribui valor para documentIdInitial</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setInstanceIdFinal</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;instanceIdFinal)</code></th><td class="colLast"><div class="block">Atribui valor para instanceIdFinal</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setInstanceIdInitial</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;instanceIdInitial)</code></th><td class="colLast"><div class="block">Atribui valor para instanceIdInitial</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setTransferActiveDocuments</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;transferActiveDocuments)</code></th><td class="colLast"><div class="block">Atribui valor para transferActiveDocuments</div></td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setTransferApprovals</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;transferApprovals)</code></th><td class="colLast"><div class="block">Atribui valor para transferApprovals</div></td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setTransferApprovers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;transferApprovers)</code></th><td class="colLast"><div class="block">Atribui valor para transferApprovers</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setTransferDocumentSecurity</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;transferDocumentSecurity)</code></th><td class="colLast"><div class="block">Atribui valor para transferDocumentSecurity</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setTransferMyDocumentsInApproval</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;transferMyDocumentsInApproval)</code></th><td class="colLast"><div class="block">Atribui valor para transferMyDocumentsInApproval</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setTransferOpenWorkflow</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;transferOpenWorkflow)</code></th><td class="colLast"><div class="block">Atribui valor para transferOpenWorkflow</div></td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setTransferPendingWorkflow</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;transferPendingWorkflow)</code></th><td class="colLast"><div class="block">Atribui valor para transferPendingWorkflow</div></td></tr><tr id="i24" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setUserFrom</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userFrom)</code></th><td class="colLast"><div class="block">Atribui valor para userFrom</div></td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html">setUserTo</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userTo)</code></th><td class="colLast"><div class="block">Atribui valor para userTo</div></td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### TaskTransferVO

            ```
            public TaskTransferVO()
            ```


    -   ### Method Detail

        -   #### getUserTo

            ```
            public String getUserTo()
            ```

            Recupera valor do userTo

            Returns:

            the userTo


        -   #### setUserTo

            ```
            public void setUserTo​(String userTo)
            ```

            Atribui valor para userTo

            Parameters:

            `userTo` - the userTo to set


        -   #### getUserFrom

            ```
            public String getUserFrom()
            ```

            Recupera valor do userFrom

            Returns:

            the userFrom


        -   #### setUserFrom

            ```
            public void setUserFrom​(String userFrom)
            ```

            Atribui valor para userFrom

            Parameters:

            `userFrom` - the userFrom to set


        -   #### getTransferActiveDocuments

            ```
            public Boolean getTransferActiveDocuments()
            ```

            Recupera valor do transferActiveDocuments

            Returns:

            the transferActiveDocuments


        -   #### setTransferActiveDocuments

            ```
            public void setTransferActiveDocuments​(Boolean transferActiveDocuments)
            ```

            Atribui valor para transferActiveDocuments

            Parameters:

            `transferActiveDocuments` - the transferActiveDocuments to set


        -   #### getTransferMyDocumentsInApproval

            ```
            public Boolean getTransferMyDocumentsInApproval()
            ```

            Recupera valor do transferMyDocumentsInApproval

            Returns:

            the transferMyDocumentsInApproval


        -   #### setTransferMyDocumentsInApproval

            ```
            public void setTransferMyDocumentsInApproval​(Boolean transferMyDocumentsInApproval)
            ```

            Atribui valor para transferMyDocumentsInApproval

            Parameters:

            `transferMyDocumentsInApproval` - the transferMyDocumentsInApproval to set


        -   #### getTransferPendingWorkflow

            ```
            public Boolean getTransferPendingWorkflow()
            ```

            Recupera valor do transferPendingWorkflow

            Returns:

            the transferPendingWorkflow


        -   #### setTransferPendingWorkflow

            ```
            public void setTransferPendingWorkflow​(Boolean transferPendingWorkflow)
            ```

            Atribui valor para transferPendingWorkflow

            Parameters:

            `transferPendingWorkflow` - the transferPendingWorkflow to set


        -   #### getTransferOpenWorkflow

            ```
            public Boolean getTransferOpenWorkflow()
            ```

            Recupera valor do transferOpenWorkflow

            Returns:

            the transferOpenWorkflow


        -   #### setTransferOpenWorkflow

            ```
            public void setTransferOpenWorkflow​(Boolean transferOpenWorkflow)
            ```

            Atribui valor para transferOpenWorkflow

            Parameters:

            `transferOpenWorkflow` - the transferOpenWorkflow to set


        -   #### getTransferApprovers

            ```
            public Boolean getTransferApprovers()
            ```

            Recupera valor do transferApprovers

            Returns:

            the transferApprovers


        -   #### setTransferApprovers

            ```
            public void setTransferApprovers​(Boolean transferApprovers)
            ```

            Atribui valor para transferApprovers

            Parameters:

            `transferApprovers` - the transferApprovers to set


        -   #### getTransferApprovals

            ```
            public Boolean getTransferApprovals()
            ```

            Recupera valor do transferApprovals

            Returns:

            the transferApprovals


        -   #### setTransferApprovals

            ```
            public void setTransferApprovals​(Boolean transferApprovals)
            ```

            Atribui valor para transferApprovals

            Parameters:

            `transferApprovals` - the transferApprovals to set


        -   #### getTransferDocumentSecurity

            ```
            public Boolean getTransferDocumentSecurity()
            ```

            Recupera valor do transferDocumentSecurity

            Returns:

            the transferDocumentSecurity


        -   #### setTransferDocumentSecurity

            ```
            public void setTransferDocumentSecurity​(Boolean transferDocumentSecurity)
            ```

            Atribui valor para transferDocumentSecurity

            Parameters:

            `transferDocumentSecurity` - the transferDocumentSecurity to set


        -   #### getInstanceIdInitial

            ```
            public Integer getInstanceIdInitial()
            ```

            Recupera valor do instanceIdInitial

            Returns:

            the instanceIdInitial


        -   #### setInstanceIdInitial

            ```
            public void setInstanceIdInitial​(Integer instanceIdInitial)
            ```

            Atribui valor para instanceIdInitial

            Parameters:

            `instanceIdInitial` - the instanceIdInitial to set


        -   #### getInstanceIdFinal

            ```
            public Integer getInstanceIdFinal()
            ```

            Recupera valor do instanceIdFinal

            Returns:

            the instanceIdFinal


        -   #### setInstanceIdFinal

            ```
            public void setInstanceIdFinal​(Integer instanceIdFinal)
            ```

            Atribui valor para instanceIdFinal

            Parameters:

            `instanceIdFinal` - the instanceIdFinal to set


        -   #### getDocumentIdInitial

            ```
            public Integer getDocumentIdInitial()
            ```

            Recupera valor do documentIdInitial

            Returns:

            the documentIdInitial


        -   #### setDocumentIdInitial

            ```
            public void setDocumentIdInitial​(Integer documentIdInitial)
            ```

            Atribui valor para documentIdInitial

            Parameters:

            `documentIdInitial` - the documentIdInitial to set


        -   #### getDocumentIdFinal

            ```
            public Integer getDocumentIdFinal()
            ```

            Recupera valor do documentIdFinal

            Returns:

            the documentIdFinal


        -   #### setDocumentIdFinal

            ```
            public void setDocumentIdFinal​(Integer documentIdFinal)
            ```

            Atribui valor para documentIdFinal

            Parameters:

            `documentIdFinal` - the documentIdFinal to set
