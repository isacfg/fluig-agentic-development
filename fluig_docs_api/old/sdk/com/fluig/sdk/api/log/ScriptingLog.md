# Class ScriptingLog

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html)

---

Package [com.fluig.sdk.api.log](https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/package-summary.html)

## Class ScriptingLog

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.log.ScriptingLog

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class ScriptingLog
    extends Object
    implements Serializable
    ```

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>protected static org.slf4j.Logger</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">log</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">truncateLength</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t1" class="tableTab"><span><a href="javascript:show(1);">Static Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">debug</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;messages)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">dir</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;objs)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">error</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;messages)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">fatal</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;messages)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>static <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html" title="class in com.fluig.sdk.api.log">ScriptingLog</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">getInstance</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">info</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;messages)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">isDebugEnabled</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">isErrorEnabled</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">isFatalEnabled</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">isInfoEnabled</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">isTraceEnabled</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">isWarnEnabled</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">log</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;messages)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">trace</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;messages)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i14" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html">warn</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>...&nbsp;messages)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Field Detail

        -   #### log

            ```
            protected static org.slf4j.Logger log
            ```


        -   #### truncateLength

            ```
            public static final int truncateLength
            ```


    -   ### Method Detail

        -   #### getInstance

            ```
            public static ScriptingLog getInstance()
            ```


        -   #### isTraceEnabled

            ```
            public boolean isTraceEnabled()
            ```


        -   #### trace

            ```
            public void trace​(Object... messages)
            ```


        -   #### isDebugEnabled

            ```
            public boolean isDebugEnabled()
            ```


        -   #### debug

            ```
            public void debug​(Object... messages)
            ```


        -   #### isInfoEnabled

            ```
            public boolean isInfoEnabled()
            ```


        -   #### info

            ```
            public void info​(Object... messages)
            ```


        -   #### log

            ```
            public void log​(Object... messages)
            ```


        -   #### isWarnEnabled

            ```
            public boolean isWarnEnabled()
            ```


        -   #### warn

            ```
            public void warn​(Object... messages)
            ```


        -   #### isErrorEnabled

            ```
            public boolean isErrorEnabled()
            ```


        -   #### error

            ```
            public void error​(Object... messages)
            ```


        -   #### isFatalEnabled

            ```
            public boolean isFatalEnabled()
            ```


        -   #### fatal

            ```
            public void fatal​(Object... messages)
            ```


        -   #### dir

            ```
            public void dir​(Object... objs)
            ```
