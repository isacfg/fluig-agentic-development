# Class PostVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html)

---

Package [com.fluig.sdk.api.social](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/package-summary.html)

## Class PostVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.social.PostVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class PostVO
    extends Object
    implements Serializable
    ```

    Value Object para Post

    Version:

    1.00.000

    Author:

    vanei

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">PostVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">PostVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;text, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;visibility, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;customUsers, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;sociableObjectId)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">getAlias</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do alias</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">getCustomUsers</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do customUsers</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">getId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do id</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/MediaVO.html" title="class in com.fluig.sdk.api.social">MediaVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">getMediaVO</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">getSociableObjectId</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do sociableObjectId</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">getText</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do text</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">getVisibility</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do visibility</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">setAlias</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias)</code></th><td class="colLast"><div class="block">Atribui valor para alias</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">setCustomUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;customUsers)</code></th><td class="colLast"><div class="block">Atribui valor para customUsers</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">setId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Atribui valor para id</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">setMediaVO</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/MediaVO.html" title="class in com.fluig.sdk.api.social">MediaVO</a>&nbsp;mediaVO)</code></th><td class="colLast"><div class="block">* Atribui valor para mediaVO</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">setSociableObjectId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;sociableObjectId)</code></th><td class="colLast"><div class="block">Atribui valor para sociableObjectId</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">setText</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;text)</code></th><td class="colLast"><div class="block">Atribui valor para text</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html">setVisibility</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;visibility)</code></th><td class="colLast"><div class="block">Atribui valor para visibility</div></td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### PostVO

            ```
            public PostVO()
            ```


        -   #### PostVO

            ```
            public PostVO​(String text,
                          String visibility,
                          String alias,
                          List<Long> customUsers,
                          Long sociableObjectId)
            ```


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


        -   #### getText

            ```
            public String getText()
            ```

            Recupera valor do text

            Returns:

            the text


        -   #### setText

            ```
            public void setText​(String text)
            ```

            Atribui valor para text

            Parameters:

            `text` - the text to set


        -   #### getVisibility

            ```
            public String getVisibility()
            ```

            Recupera valor do visibility

            Returns:

            the visibility


        -   #### setVisibility

            ```
            public void setVisibility​(String visibility)
            ```

            Atribui valor para visibility

            Parameters:

            `visibility` - the visibility to set


        -   #### getAlias

            ```
            public String getAlias()
            ```

            Recupera valor do alias

            Returns:

            the alias


        -   #### setAlias

            ```
            public void setAlias​(String alias)
            ```

            Atribui valor para alias

            Parameters:

            `alias` - the alias to set


        -   #### getCustomUsers

            ```
            public List<Long> getCustomUsers()
            ```

            Recupera valor do customUsers

            Returns:

            the customUsers


        -   #### setCustomUsers

            ```
            public void setCustomUsers​(List<Long> customUsers)
            ```

            Atribui valor para customUsers

            Parameters:

            `customUsers` - the customUsers to set


        -   #### getSociableObjectId

            ```
            public Long getSociableObjectId()
            ```

            Recupera valor do sociableObjectId

            Returns:

            the sociableObjectId


        -   #### setSociableObjectId

            ```
            public void setSociableObjectId​(Long sociableObjectId)
            ```

            Atribui valor para sociableObjectId

            Parameters:

            `sociableObjectId` - the sociableObjectId to set


        -   #### getMediaVO

            ```
            public MediaVO getMediaVO()
            ```

            Recupera o valor do

            Returns:

            the mediaVO


        -   #### setMediaVO

            ```
            public void setMediaVO​(MediaVO mediaVO)
            ```

            \* Atribui valor para mediaVO

            Parameters:

            `mediaVO` - the mediaVO to set
