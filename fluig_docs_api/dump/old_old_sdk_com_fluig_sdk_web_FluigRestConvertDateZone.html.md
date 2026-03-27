# Class FluigRestConvertDateZone

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html)

---

Package [com.fluig.sdk.web](https://api.fluig.com/old/sdk/com/fluig/sdk/web/package-summary.html)

## Class FluigRestConvertDateZone

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.web.FluigRestConvertDateZone

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class FluigRestConvertDateZone
    extends Object
    implements Serializable
    ```

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html">FluigRestConvertDateZone</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>protected <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html">convertDateTimeToTimeZone</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;obj, boolean&nbsp;isDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>protected <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html">getDateTimeZone</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;obj, com.fasterxml.jackson.databind.ser.PropertyWriter&nbsp;writer)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>protected com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html">getFilterTimeZone</a></span>​(com.fasterxml.jackson.databind.ObjectMapper&nbsp;mapper)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>protected boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html">isRegexDateTime</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;obj)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### FluigRestConvertDateZone

            ```
            public FluigRestConvertDateZone()
            ```


    -   ### Method Detail

        -   #### getFilterTimeZone

            ```
            protected com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider getFilterTimeZone​(com.fasterxml.jackson.databind.ObjectMapper mapper)
            ```


        -   #### isRegexDateTime

            ```
            protected boolean isRegexDateTime​(Object obj)
            ```


        -   #### getDateTimeZone

            ```
            protected Object getDateTimeZone​(Object obj,
                                             com.fasterxml.jackson.databind.ser.PropertyWriter writer)
                                      throws ParseException,
                                             SecurityException,
                                             IllegalArgumentException,
                                             IllegalAccessException
            ```

            Throws:

            `[ParseException](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/ParseException.html?is-external=true "class or interface in java.text")`

            `[SecurityException](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/SecurityException.html?is-external=true "class or interface in java.lang")`

            `[IllegalArgumentException](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/IllegalArgumentException.html?is-external=true "class or interface in java.lang")`

            `[IllegalAccessException](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/IllegalAccessException.html?is-external=true "class or interface in java.lang")`


        -   #### convertDateTimeToTimeZone

            ```
            protected Object convertDateTimeToTimeZone​(Object obj,
                                                       boolean isDate)
                                                throws ParseException
            ```

            Throws:

            `[ParseException](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/text/ParseException.html?is-external=true "class or interface in java.text")`
