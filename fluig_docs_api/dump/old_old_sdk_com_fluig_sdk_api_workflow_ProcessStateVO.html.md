# Class ProcessStateVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html)

---

Package [com.fluig.sdk.api.workflow](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/package-summary.html)

## Class ProcessStateVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.workflow.ProcessStateVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class ProcessStateVO
    extends Object
    implements Serializable
    ```

    Value Object para ProcessState

    Version:

    1.5.3

    Author:

    marcelo.pereira

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">ProcessStateVO</a></span>()</code></th><td class="colLast"><div class="block">Cria uma instância do ProcessStateVO</div></td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">ProcessStateVO</a></span>​(long&nbsp;tenantId, int&nbsp;sequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;stateName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;stateDescription)</code></th><td class="colLast"><div class="block">Cria uma instância do ProcessStateVO</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">getSequence</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do sequence</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">getStateDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do stateDescription</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">getStateName</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do stateName</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>long</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">getTenantId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do tenantId</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">setSequence</a></span>​(int&nbsp;sequence)</code></th><td class="colLast"><div class="block">Atribui valor para sequence</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">setStateDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;stateDescription)</code></th><td class="colLast"><div class="block">Atribui valor para stateDescription</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">setStateName</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;stateName)</code></th><td class="colLast"><div class="block">Atribui valor para stateName</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html">setTenantId</a></span>​(long&nbsp;tenantId)</code></th><td class="colLast"><div class="block">Atribui valor para tenantId</div></td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### ProcessStateVO

            ```
            public ProcessStateVO()
            ```

            Cria uma instância do ProcessStateVO


        -   #### ProcessStateVO

            ```
            public ProcessStateVO​(long tenantId,
                                  int sequence,
                                  String stateName,
                                  String stateDescription)
            ```

            Cria uma instância do ProcessStateVO

            Parameters:

            `tenantId` - the tenantId to set

            `sequence` - the sequence to set

            `stateName` - the stateName to set

            `stateDescription` - the stateDescription to set


    -   ### Method Detail

        -   #### getTenantId

            ```
            public long getTenantId()
            ```

            Recupera valor do tenantId

            Returns:

            the tenantId


        -   #### setTenantId

            ```
            public void setTenantId​(long tenantId)
            ```

            Atribui valor para tenantId

            Parameters:

            `tenantId` - the tenantId to set


        -   #### getSequence

            ```
            public int getSequence()
            ```

            Recupera valor do sequence

            Returns:

            the sequence


        -   #### setSequence

            ```
            public void setSequence​(int sequence)
            ```

            Atribui valor para sequence

            Parameters:

            `sequence` - the sequence to set


        -   #### getStateName

            ```
            public String getStateName()
            ```

            Recupera valor do stateName

            Returns:

            the stateName


        -   #### setStateName

            ```
            public void setStateName​(String stateName)
            ```

            Atribui valor para stateName

            Parameters:

            `stateName` - the stateName to set


        -   #### getStateDescription

            ```
            public String getStateDescription()
            ```

            Recupera valor do stateDescription

            Returns:

            the stateDescription


        -   #### setStateDescription

            ```
            public void setStateDescription​(String stateDescription)
            ```

            Atribui valor para stateDescription

            Parameters:

            `stateDescription` - the stateDescription to set
