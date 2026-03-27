# Class FluigRestResult

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html)

---

Package [com.fluig.sdk.web](https://api.fluig.com/old/sdk/com/fluig/sdk/web/package-summary.html)

## Class FluigRestResult

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.web.FluigRestResult

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class FluigRestResult
    extends Object
    implements Serializable
    ```

    Classe para ser usada como padrão para o retorno dos REST.

    Version:

    1.00.000

    Author:

    vanei

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">FluigRestResult</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">FluigRestResult</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html" title="class in com.fluig.sdk.api">FluigMessage</a>&nbsp;message)</code></th><td class="colLast"><div class="block">Nova instancia do FluigRestResult de acordo com o message</div></td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">FluigRestResult</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;content)</code></th><td class="colLast"><div class="block">Nova instancia do FluigRestResult de acordo com o content</div></td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">FluigRestResult</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;content, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html" title="class in com.fluig.sdk.api">FluigMessage</a>&nbsp;message)</code></th><td class="colLast"><div class="block">Nova instancia do FluigRestResult de acordo com o content e message</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">getContent</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do content</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html" title="class in com.fluig.sdk.api">FluigMessage</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">getMessage</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do message</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">setContent</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;content)</code></th><td class="colLast"><div class="block">Atribui valor para content</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">setMessage</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html" title="class in com.fluig.sdk.api">FluigMessage</a>&nbsp;message)</code></th><td class="colLast"><div class="block">Atribui valor para message</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html">toString</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### FluigRestResult

            ```
            public FluigRestResult()
            ```


        -   #### FluigRestResult

            ```
            public FluigRestResult​(Object content)
            ```

            Nova instancia do FluigRestResult de acordo com o content

            Parameters:

            `content` -


        -   #### FluigRestResult

            ```
            public FluigRestResult​(Object content,
                                   FluigMessage message)
            ```

            Nova instancia do FluigRestResult de acordo com o content e message

            Parameters:

            `content` -

            `message` -


        -   #### FluigRestResult

            ```
            public FluigRestResult​(FluigMessage message)
            ```

            Nova instancia do FluigRestResult de acordo com o message

            Parameters:

            `message` -


    -   ### Method Detail

        -   #### getContent

            ```
            public Object getContent()
            ```

            Recupera valor do content

            Returns:

            the content


        -   #### setContent

            ```
            public void setContent​(Object content)
            ```

            Atribui valor para content

            Parameters:

            `content` - the content to set


        -   #### getMessage

            ```
            public FluigMessage getMessage()
            ```

            Recupera valor do message

            Returns:

            the message


        -   #### setMessage

            ```
            public void setMessage​(FluigMessage message)
            ```

            Atribui valor para message

            Parameters:

            `message` - the message to set


        -   #### toString

            ```
            public String toString()
            ```

            Overrides:

            `[toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang")` in class `[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")`
