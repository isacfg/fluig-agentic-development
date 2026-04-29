# Class ArrayMapDeserializer

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html)

---

Package [com.fluig.sdk.api](https://api.fluig.com/old/sdk/com/fluig/sdk/api/package-summary.html)

## Class ArrayMapDeserializer

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fasterxml.jackson.databind.JsonDeserializer<[Map](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true "class or interface in java.util")<[String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true "class or interface in java.lang"),​[String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true "class or interface in java.lang")\>>
    -   -   com.fluig.sdk.api.ArrayMapDeserializer

-   All Implemented Interfaces:

    `com.fasterxml.jackson.databind.deser.NullValueProvider`

    * * *

    ```
    public class ArrayMapDeserializer
    extends com.fasterxml.jackson.databind.JsonDeserializer<Map<String,​String>>
    ```

    Deserializa mapa de array

    Version:

    1.00.000

    Author:

    vanei


-   -   ### Nested Class Summary

        -   ### Nested classes/interfaces inherited from class com.fasterxml.jackson.databind.JsonDeserializer

            `com.fasterxml.jackson.databind.JsonDeserializer.None`

    -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html">ArrayMapDeserializer</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html">deserialize</a></span>​(com.fasterxml.jackson.core.JsonParser&nbsp;jp, com.fasterxml.jackson.databind.DeserializationContext&nbsp;context)</code></th><td class="colLast"><div class="block">Deserializa mapa de array</div></td></tr></tbody></table>

        -   ### Methods inherited from class com.fasterxml.jackson.databind.JsonDeserializer

            `deserialize, deserializeWithType, findBackReference, getDelegatee, getEmptyAccessPattern, getEmptyValue, getEmptyValue, getKnownPropertyNames, getNullAccessPattern, getNullValue, getNullValue, getObjectIdReader, handledType, isCachable, replaceDelegatee, supportsUpdate, unwrappingDeserializer`

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### ArrayMapDeserializer

            ```
            public ArrayMapDeserializer()
            ```


    -   ### Method Detail

        -   #### deserialize

            ```
            public Map<String,​String> deserialize​(com.fasterxml.jackson.core.JsonParser jp,
                                                        com.fasterxml.jackson.databind.DeserializationContext context)
                                                 throws IOException
            ```

            Deserializa mapa de array

            Specified by:

            `deserialize` in class `com.fasterxml.jackson.databind.JsonDeserializer<[Map](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true "class or interface in java.util")<[String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true "class or interface in java.lang"),​[String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true "class or interface in java.lang")>>`

            Throws:

            `[IOException](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/IOException.html?is-external=true "class or interface in java.io")`
