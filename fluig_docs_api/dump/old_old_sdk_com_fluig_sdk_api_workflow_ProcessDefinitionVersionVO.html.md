# Class ProcessDefinitionVersionVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html)

---

Package [com.fluig.sdk.api.workflow](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/package-summary.html)

## Class ProcessDefinitionVersionVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.workflow.ProcessDefinitionVersionVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class ProcessDefinitionVersionVO
    extends Object
    implements Serializable
    ```

    Value Object para ProcessDefinitionVersion

    Version:

    1.5.3

    Author:

    marcelo.pereira

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">ProcessDefinitionVersionVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">ProcessDefinitionVersionVO</a></span>​(long&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, int&nbsp;version, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;versionDescription, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;categoryStructure, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;fullCategoryStructure, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processDescription)</code></th><td class="colLast"><div class="block">Cria uma instância do ProcessDefinitionVersionVO</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getCategoryStructure</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do categoryStructure</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getFormId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do formId</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getFormVersion</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do formVersion</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getFullCategoryStructure</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do fullCategoryStructure</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html" title="class in com.fluig.sdk.api.workflow">ProcessStateVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getInitialProcessState</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do initialProcessState</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getProcessDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do processDescription</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getProcessId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do processId</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getRowId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do rowId</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>long</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getTenantId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do tenantId</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getVersion</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do version</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">getVersionDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do versionDescription</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">isFavorite</a></span>()</code></th><td class="colLast"><div class="block">Favorito?</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">isMobileReady</a></span>()</code></th><td class="colLast"><div class="block">Mobile?</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setCategoryStructure</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;categoryStructure)</code></th><td class="colLast"><div class="block">Atribui valor para categoryStructure</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setFavorite</a></span>​(boolean&nbsp;favorite)</code></th><td class="colLast"><div class="block">Atribui valor para favorite</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setFormId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;formId)</code></th><td class="colLast"><div class="block">Atribui valor para formId</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setFormVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;formVersion)</code></th><td class="colLast"><div class="block">Atribui valor para formVersion</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setFullCategoryStructure</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;fullCategoryStructure)</code></th><td class="colLast"><div class="block">Atribui valor para fullCategoryStructure</div></td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setInitialProcessState</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessStateVO.html" title="class in com.fluig.sdk.api.workflow">ProcessStateVO</a>&nbsp;initialProcessState)</code></th><td class="colLast"><div class="block">Atribui valor para initialProcessState</div></td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setMobileReady</a></span>​(boolean&nbsp;mobileReady)</code></th><td class="colLast"><div class="block">Atribui valor para mobileReady</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setProcessDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processDescription)</code></th><td class="colLast"><div class="block">Atribui valor para processDescription</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setProcessId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId)</code></th><td class="colLast"><div class="block">Atribui valor para processId</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setRowId</a></span>​(int&nbsp;rowId)</code></th><td class="colLast"><div class="block">Atribui valor para rowId</div></td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setTenantId</a></span>​(long&nbsp;tenantId)</code></th><td class="colLast"><div class="block">Atribui valor para tenantId</div></td></tr><tr id="i24" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setVersion</a></span>​(int&nbsp;version)</code></th><td class="colLast"><div class="block">Atribui valor para version</div></td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVersionVO.html">setVersionDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;versionDescription)</code></th><td class="colLast"><div class="block">Atribui valor para versionDescription</div></td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### ProcessDefinitionVersionVO

            ```
            public ProcessDefinitionVersionVO()
            ```


        -   #### ProcessDefinitionVersionVO

            ```
            public ProcessDefinitionVersionVO​(long tenantId,
                                              String processId,
                                              int version,
                                              String versionDescription,
                                              String categoryStructure,
                                              String fullCategoryStructure,
                                              String processDescription)
            ```

            Cria uma instância do ProcessDefinitionVersionVO

            Parameters:

            `tenantId` - the tenantId to set

            `processId` - the processId to set

            `version` - the version to set

            `versionDescription` - the versionDescription to set

            `categoryStructure` - the categoryStructure to set

            `fullCategoryStructure` - the fullCategoryStructure to set

            `processDescription` - the processDescription to set


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


        -   #### getProcessId

            ```
            public String getProcessId()
            ```

            Recupera valor do processId

            Returns:

            the processId


        -   #### setProcessId

            ```
            public void setProcessId​(String processId)
            ```

            Atribui valor para processId

            Parameters:

            `processId` - the processId to set


        -   #### getVersion

            ```
            public int getVersion()
            ```

            Recupera valor do version

            Returns:

            the version


        -   #### setVersion

            ```
            public void setVersion​(int version)
            ```

            Atribui valor para version

            Parameters:

            `version` - the version to set


        -   #### getVersionDescription

            ```
            public String getVersionDescription()
            ```

            Recupera valor do versionDescription

            Returns:

            the versionDescription


        -   #### setVersionDescription

            ```
            public void setVersionDescription​(String versionDescription)
            ```

            Atribui valor para versionDescription

            Parameters:

            `versionDescription` - the versionDescription to set


        -   #### getCategoryStructure

            ```
            public String getCategoryStructure()
            ```

            Recupera valor do categoryStructure

            Returns:

            the categoryStructure


        -   #### setCategoryStructure

            ```
            public void setCategoryStructure​(String categoryStructure)
            ```

            Atribui valor para categoryStructure

            Parameters:

            `categoryStructure` - the categoryStructure to set


        -   #### setFullCategoryStructure

            ```
            public void setFullCategoryStructure​(String fullCategoryStructure)
            ```

            Atribui valor para fullCategoryStructure

            Parameters:

            `fullCategoryStructure` - the fullCategoryStructure to set


        -   #### getFullCategoryStructure

            ```
            public String getFullCategoryStructure()
            ```

            Recupera valor do fullCategoryStructure

            Returns:

            the fullCategoryStructure


        -   #### getProcessDescription

            ```
            public String getProcessDescription()
            ```

            Recupera valor do processDescription

            Returns:

            the processDescription


        -   #### setProcessDescription

            ```
            public void setProcessDescription​(String processDescription)
            ```

            Atribui valor para processDescription

            Parameters:

            `processDescription` - the processDescription to set


        -   #### getRowId

            ```
            public int getRowId()
            ```

            Recupera valor do rowId

            Returns:

            the rowId


        -   #### setRowId

            ```
            public void setRowId​(int rowId)
            ```

            Atribui valor para rowId

            Parameters:

            `rowId` - the rowId to set


        -   #### isFavorite

            ```
            public boolean isFavorite()
            ```

            Favorito?

            Returns:

            the favorite


        -   #### setFavorite

            ```
            public void setFavorite​(boolean favorite)
            ```

            Atribui valor para favorite

            Parameters:

            `favorite` - the favorite to set


        -   #### isMobileReady

            ```
            public boolean isMobileReady()
            ```

            Mobile?

            Returns:

            the mobileReady


        -   #### setMobileReady

            ```
            public void setMobileReady​(boolean mobileReady)
            ```

            Atribui valor para mobileReady

            Parameters:

            `mobileReady` - the mobileReady to set


        -   #### getFormId

            ```
            public Integer getFormId()
            ```

            Recupera valor do formId

            Returns:

            the formId


        -   #### setFormId

            ```
            public void setFormId​(Integer formId)
            ```

            Atribui valor para formId

            Parameters:

            `formId` - the formId to set


        -   #### getInitialProcessState

            ```
            public ProcessStateVO getInitialProcessState()
            ```

            Recupera valor do initialProcessState

            Returns:

            the initialProcessState


        -   #### setInitialProcessState

            ```
            public void setInitialProcessState​(ProcessStateVO initialProcessState)
            ```

            Atribui valor para initialProcessState

            Parameters:

            `initialProcessState` - the initialProcessState to set


        -   #### getFormVersion

            ```
            public Integer getFormVersion()
            ```

            Recupera valor do formVersion

            Returns:

            the formVersion


        -   #### setFormVersion

            ```
            public void setFormVersion​(Integer formVersion)
            ```

            Atribui valor para formVersion

            Parameters:

            `formVersion` - the formVersion to set
