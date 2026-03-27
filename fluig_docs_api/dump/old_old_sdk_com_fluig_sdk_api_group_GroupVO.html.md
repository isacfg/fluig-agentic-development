# Class GroupVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html)

---

Package [com.fluig.sdk.api.group](https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/package-summary.html)

## Class GroupVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.group.GroupVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class GroupVO
    extends Object
    implements Serializable
    ```

    Value Object para Group

    Version:

    1.00.000

    Author:

    vanei

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">GroupVO</a></span>()</code></th><td class="colLast"><div class="block">Nova instância para GroupVO.java</div></td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">GroupVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;code, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;description)</code></th><td class="colLast"><div class="block">Nova instância para GroupVO.java com id, code e description</div></td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">GroupVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;code, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;description)</code></th><td class="colLast"><div class="block">Nova instância para GroupVO.java com code e description</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">getCode</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do code</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">getDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do description</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/HashMap.html?is-external=true" title="class or interface in java.util" class="externalLink">HashMap</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">getExtData</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do extData</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">getGroupType</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do groupType</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">getId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do id</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">getIsInternal</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do isInternal</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">setCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;code)</code></th><td class="colLast"><div class="block">Atribui valor para code</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">setDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;description)</code></th><td class="colLast"><div class="block">Atribui valor para description</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">setExtData</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/HashMap.html?is-external=true" title="class or interface in java.util" class="externalLink">HashMap</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;extData)</code></th><td class="colLast"><div class="block">Atribui valor para extData</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">setGroupType</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;groupType)</code></th><td class="colLast"><div class="block">Atribui valor para groupType</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">setId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Atribui valor para id</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">setIsInternal</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;isInternal)</code></th><td class="colLast"><div class="block">Atribui valor para isInternal</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html">toString</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### GroupVO

            ```
            public GroupVO()
            ```

            Nova instância para GroupVO.java


        -   #### GroupVO

            ```
            public GroupVO​(String code,
                           String description)
            ```

            Nova instância para GroupVO.java com code e description

            Parameters:

            `code` -

            `description` -


        -   #### GroupVO

            ```
            public GroupVO​(Long id,
                           String code,
                           String description)
            ```

            Nova instância para GroupVO.java com id, code e description

            Parameters:

            `id` -

            `code` -

            `description` -


    -   ### Method Detail

        -   #### getId

            ```
            public Long getId()
            ```

            Recupera valor do id

            Returns:

            the id


        -   #### setId

            ```
            public void setId​(Long id)
            ```

            Atribui valor para id

            Parameters:

            `id` - the id to set


        -   #### getCode

            ```
            public String getCode()
            ```

            Recupera valor do code

            Returns:

            the code


        -   #### setCode

            ```
            public void setCode​(String code)
            ```

            Atribui valor para code

            Parameters:

            `code` - the code to set


        -   #### getDescription

            ```
            public String getDescription()
            ```

            Recupera valor do description

            Returns:

            the description


        -   #### setDescription

            ```
            public void setDescription​(String description)
            ```

            Atribui valor para description

            Parameters:

            `description` - the description to set


        -   #### getIsInternal

            ```
            public Boolean getIsInternal()
            ```

            Recupera valor do isInternal

            Returns:

            the isInternal


        -   #### setIsInternal

            ```
            public void setIsInternal​(Boolean isInternal)
            ```

            Atribui valor para isInternal

            Parameters:

            `isInternal` - the isInternal to set


        -   #### getGroupType

            ```
            public String getGroupType()
            ```

            Recupera valor do groupType

            Returns:

            the groupType


        -   #### setGroupType

            ```
            public void setGroupType​(String groupType)
            ```

            Atribui valor para groupType

            Parameters:

            `groupType` - the groupType to set


        -   #### getExtData

            ```
            public HashMap<String,​String> getExtData()
            ```

            Recupera valor do extData

            Returns:

            the extData


        -   #### setExtData

            ```
            public void setExtData​(HashMap<String,​String> extData)
            ```

            Atribui valor para extData

            Parameters:

            `extData` - the extData to set


        -   #### toString

            ```
            public String toString()
            ```

            Overrides:

            `[toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang")` in class `[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")`
