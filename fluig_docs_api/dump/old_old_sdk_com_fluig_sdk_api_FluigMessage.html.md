# Class FluigMessage

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html)

---

Package [com.fluig.sdk.api](https://api.fluig.com/old/sdk/com/fluig/sdk/api/package-summary.html)

## Class FluigMessage

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.FluigMessage

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class FluigMessage
    extends Object
    implements Serializable
    ```

    Mensagens a serem enviadas ao lado cliente.

    Version:

    1.00.000

    Author:

    vanei

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">FluigMessage</a></span>()</code></th><td class="colLast"><div class="block">Construtor default.</div></td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">FluigMessage</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html" title="enum in com.fluig.sdk.api">FluigMessageType</a>&nbsp;type, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;message)</code></th><td class="colLast"><div class="block">Construtor com o tipo e a mensagem.</div></td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">FluigMessage</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html" title="enum in com.fluig.sdk.api">FluigMessageType</a>&nbsp;type, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;message, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;detail)</code></th><td class="colLast"><div class="block">Construtor com o tipo, a mensagem e uma descrição detalhada.</div></td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">FluigMessage</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html" title="enum in com.fluig.sdk.api">FluigMessageType</a>&nbsp;type, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;message, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;detail, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;errorCode)</code></th><td class="colLast"><div class="block">Construtor com o tipo, a mensagem e uma descrição detalhada.</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">getDetail</a></span>()</code></th><td class="colLast"><div class="block">Retorna a descrição detalhada da mensagem.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">getErrorCode</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">getMessage</a></span>()</code></th><td class="colLast"><div class="block">Retorna a mensagem.</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html" title="enum in com.fluig.sdk.api">FluigMessageType</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">getType</a></span>()</code></th><td class="colLast"><div class="block">Retorna o tipo da mensagem.</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">setDetail</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;detail)</code></th><td class="colLast"><div class="block">Informa uma descrição detalhada para a mensagem.</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">setErrorCode</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;errorCode)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">setMessage</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;message)</code></th><td class="colLast"><div class="block">Altera a mensagem.</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">setType</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html" title="enum in com.fluig.sdk.api">FluigMessageType</a>&nbsp;type)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html">toString</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### FluigMessage

            ```
            public FluigMessage()
            ```

            Construtor default.


        -   #### FluigMessage

            ```
            public FluigMessage​(FluigMessageType type,
                                String message)
            ```

            Construtor com o tipo e a mensagem. O detalhe será igual a mensagem.

            Parameters:

            `type` - Tipo.

            `message` - Mensagem.


        -   #### FluigMessage

            ```
            public FluigMessage​(FluigMessageType type,
                                String message,
                                String detail)
            ```

            Construtor com o tipo, a mensagem e uma descrição detalhada.

            Parameters:

            `type` - Tipo da menagem.

            `message` - Mensagem.

            `detail` - Descrição detalhada da mensagem.


        -   #### FluigMessage

            ```
            public FluigMessage​(FluigMessageType type,
                                String message,
                                String detail,
                                String errorCode)
            ```

            Construtor com o tipo, a mensagem e uma descrição detalhada.

            Parameters:

            `type` - Tipo da menagem.

            `message` - Mensagem.

            `detail` - Descrição detalhada da mensagem.

            `errorCode` - Nome da classe de exceção.


    -   ### Method Detail

        -   #### getMessage

            ```
            public String getMessage()
            ```

            Retorna a mensagem.

            Returns:

            Mensagem.


        -   #### setMessage

            ```
            public void setMessage​(String message)
            ```

            Altera a mensagem.

            Parameters:

            `message` - Mensagem.


        -   #### getType

            ```
            public FluigMessageType getType()
            ```

            Retorna o tipo da mensagem.

            Returns:

            Tipo da mensagem.


        -   #### setType

            ```
            public void setType​(FluigMessageType type)
            ```


        -   #### getErrorCode

            ```
            public String getErrorCode()
            ```


        -   #### setErrorCode

            ```
            public void setErrorCode​(String errorCode)
            ```


        -   #### getDetail

            ```
            public String getDetail()
            ```

            Retorna a descrição detalhada da mensagem.

            Returns:

            Descrição detalhada da mensagem.


        -   #### setDetail

            ```
            public void setDetail​(String detail)
            ```

            Informa uma descrição detalhada para a mensagem.

            Parameters:

            `detail` - Detalhes da mensagem.


        -   #### toString

            ```
            public String toString()
            ```

            Overrides:

            `[toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang")` in class `[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")`
