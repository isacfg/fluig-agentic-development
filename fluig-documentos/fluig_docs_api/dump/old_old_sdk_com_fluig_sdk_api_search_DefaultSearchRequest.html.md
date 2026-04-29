# Class DefaultSearchRequest

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html)

---

Package [com.fluig.sdk.api.search](https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/package-summary.html)

## Class DefaultSearchRequest

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.search.DefaultSearchRequest

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class DefaultSearchRequest
    extends Object
    implements Serializable
    ```

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">DefaultSearchRequest</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">DefaultSearchRequest</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern)</code></th><td class="colLast">&nbsp;</td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">DefaultSearchRequest</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;ordering, int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">DefaultSearchRequest</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;searchType, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;ordering, int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast">&nbsp;</td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">DefaultSearchRequest</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;searchType, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;startPeriod, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;endPeriod, com.totvs.technology.foundation.indexer.common.DateGap&nbsp;period, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;ordering, int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getEndPeriod</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getLimit</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getOffset</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getOrdering</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getPattern</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.indexer.common.DateGap</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getPeriod</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getSearchType</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">getStartPeriod</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setEndPeriod</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;endPeriod)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setLimit</a></span>​(int&nbsp;limit)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setOffset</a></span>​(int&nbsp;offset)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setOrdering</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;ordering)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setPattern</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setPeriod</a></span>​(com.totvs.technology.foundation.indexer.common.DateGap&nbsp;period)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i14" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setSearchType</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;searchType)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html">setStartPeriod</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;startPeriod)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### DefaultSearchRequest

            ```
            public DefaultSearchRequest()
            ```


        -   #### DefaultSearchRequest

            ```
            public DefaultSearchRequest​(String pattern,
                                        String ordering,
                                        int limit,
                                        int offset)
            ```


        -   #### DefaultSearchRequest

            ```
            public DefaultSearchRequest​(String pattern,
                                        String searchType,
                                        String ordering,
                                        int limit,
                                        int offset)
            ```


        -   #### DefaultSearchRequest

            ```
            public DefaultSearchRequest​(String searchType,
                                        String pattern,
                                        Date startPeriod,
                                        Date endPeriod,
                                        com.totvs.technology.foundation.indexer.common.DateGap period,
                                        String ordering,
                                        int limit,
                                        int offset)
            ```


        -   #### DefaultSearchRequest

            ```
            public DefaultSearchRequest​(String pattern)
            ```


    -   ### Method Detail

        -   #### getSearchType

            ```
            public String getSearchType()
            ```


        -   #### setSearchType

            ```
            public void setSearchType​(String searchType)
            ```


        -   #### getPattern

            ```
            public String getPattern()
            ```


        -   #### setPattern

            ```
            public void setPattern​(String pattern)
            ```


        -   #### getStartPeriod

            ```
            public Date getStartPeriod()
            ```


        -   #### setStartPeriod

            ```
            public void setStartPeriod​(Date startPeriod)
            ```


        -   #### getEndPeriod

            ```
            public Date getEndPeriod()
            ```


        -   #### setEndPeriod

            ```
            public void setEndPeriod​(Date endPeriod)
            ```


        -   #### getPeriod

            ```
            public com.totvs.technology.foundation.indexer.common.DateGap getPeriod()
            ```


        -   #### setPeriod

            ```
            public void setPeriod​(com.totvs.technology.foundation.indexer.common.DateGap period)
            ```


        -   #### getOrdering

            ```
            public String getOrdering()
            ```


        -   #### setOrdering

            ```
            public void setOrdering​(String ordering)
            ```


        -   #### getLimit

            ```
            public int getLimit()
            ```


        -   #### setLimit

            ```
            public void setLimit​(int limit)
            ```


        -   #### getOffset

            ```
            public int getOffset()
            ```


        -   #### setOffset

            ```
            public void setOffset​(int offset)
            ```
