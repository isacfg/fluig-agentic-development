# Class FluigRest

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html)

---

Package [com.fluig.sdk.web](https://api.fluig.com/old/sdk/com/fluig/sdk/web/package-summary.html)

## Class FluigRest

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.web.FluigRest

-   * * *

    ```
    public abstract class FluigRest
    extends Object
    ```

    Super classe para suporte aos serviços rest

    Version:

    1.00.000

    Author:

    vanei


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">FluigRest</a></span>()</code></th><td class="colLast"><div class="block">Nova instância para FluigRest.java</div></td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>protected javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildErrorResponse</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Throwable.html?is-external=true" title="class or interface in java.lang" class="externalLink">Throwable</a>&nbsp;throwable)</code></th><td class="colLast"><div class="block">Tratamento e criaçao de mensagem de erro para ao lado cliente</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code>protected javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildErrorResponse</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Throwable.html?is-external=true" title="class or interface in java.lang" class="externalLink">Throwable</a>&nbsp;throwable, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>[]&nbsp;params)</code></th><td class="colLast"><div class="block">Tratamento e criaçao de mensagem de erro com parâmetros de retorno do serviço para ao lado cliente</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code>javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildErrorResponseTranslated</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;translatedMessage)</code></th><td class="colLast"><div class="block">Build an error response with an already translated message</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>protected javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildSuccessMessageResponse</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;code, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;messageKey, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>[]&nbsp;params)</code></th><td class="colLast"><div class="block">Tratamento e criaçao de mensagem de sucesso com código e lista de parâmetros para ao lado cliente</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>protected javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildSuccessResponse</a></span>()</code></th><td class="colLast"><div class="block">Tratamento e criaçao de mensagem de sucesso para ao lado cliente</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>protected javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildSuccessResponse</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html" title="class in com.fluig.sdk.web">FluigRestResult</a>&nbsp;result)</code></th><td class="colLast"><div class="block">Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>protected javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildSuccessResponse</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;result)</code></th><td class="colLast"><div class="block">Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>javax.ws.rs.core.Response</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">buildSuccessResponseTranslated</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;translatedMessage)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>protected void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">copyValues</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;from, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;to)</code></th><td class="colLast"><div class="block">Cópia de atributos da camada de serviços rest para objetos internos do componente SDK</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>protected boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">hasMobileAnnotation</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;content)</code></th><td class="colLast"><div class="block">Verifica se tem a anotação de Mobile.</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>protected boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">isMobileRequest</a></span>()</code></th><td class="colLast"><div class="block">Verifica se é uma requisição mobile</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>protected <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">jsonToMap</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;json)</code></th><td class="colLast"><div class="block">Converão de objeto json para Mapa</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>protected &lt;T&gt;&nbsp;T</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html">jsonToObject</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;json, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Class.html?is-external=true" title="class or interface in java.lang" class="externalLink">Class</a>&lt;T&gt;&nbsp;clazz)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### FluigRest

            ```
            public FluigRest()
            ```

            Nova instância para FluigRest.java


    -   ### Method Detail

        -   #### buildSuccessResponse

            ```
            protected javax.ws.rs.core.Response buildSuccessResponse()
            ```

            Tratamento e criaçao de mensagem de sucesso para ao lado cliente

            Returns:

            Json response


        -   #### buildSuccessResponse

            ```
            protected javax.ws.rs.core.Response buildSuccessResponse​(Object result)
            ```

            Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente

            Parameters:

            `result` -

            Returns:

            Json Response


        -   #### buildSuccessMessageResponse

            ```
            protected javax.ws.rs.core.Response buildSuccessMessageResponse​(String code,
                                                                            String messageKey,
                                                                            Object[] params)
            ```

            Tratamento e criaçao de mensagem de sucesso com código e lista de parâmetros para ao lado cliente

            Parameters:

            `code` -

            `messageKey` -

            `params` -

            Returns:

            Json Response


        -   #### buildSuccessResponse

            ```
            protected javax.ws.rs.core.Response buildSuccessResponse​(FluigRestResult result)
            ```

            Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente

            Parameters:

            `result` -

            Returns:

            Json Response


        -   #### buildErrorResponse

            ```
            protected javax.ws.rs.core.Response buildErrorResponse​(Throwable throwable)
            ```

            Tratamento e criaçao de mensagem de erro para ao lado cliente

            Parameters:

            `throwable` -

            Returns:

            JsonResponse


        -   #### buildErrorResponse

            ```
            protected javax.ws.rs.core.Response buildErrorResponse​(Throwable throwable,
                                                                   Object[] params)
            ```

            Tratamento e criaçao de mensagem de erro com parâmetros de retorno do serviço para ao lado cliente

            Parameters:

            `throwable` -

            `params` -

            Returns:

            Json Response


        -   #### buildErrorResponseTranslated

            ```
            public javax.ws.rs.core.Response buildErrorResponseTranslated​(String translatedMessage)
            ```

            Build an error response with an already translated message

            Parameters:

            `translatedMessage` -

            Returns:

            Response


        -   #### jsonToObject

            ```
            protected <T> T jsonToObject​(String json,
                                         Class<T> clazz)
            ```

            Parameters:

            `json` - - Objeto no formato json String

            `clazz` - - classe que será convertida

            Returns:

            T - Objeto de acordo com a classe passada ou null, caso haja falha na conversão


        -   #### jsonToMap

            ```
            protected Map<String,​Object> jsonToMap​(String json)
            ```

            Converão de objeto json para Mapa

            Parameters:

            `json` -

            Returns:

            Map


        -   #### copyValues

            ```
            protected void copyValues​(Object from,
                                      Object to)
            ```

            Cópia de atributos da camada de serviços rest para objetos internos do componente SDK

            Parameters:

            `from` -

            `to` -


        -   #### isMobileRequest

            ```
            protected boolean isMobileRequest()
            ```

            Verifica se é uma requisição mobile

            Returns:


        -   #### hasMobileAnnotation

            ```
            protected boolean hasMobileAnnotation​(Object content)
            ```

            Verifica se tem a anotação de Mobile.

            Parameters:

            `content` -

            Returns:


        -   #### buildSuccessResponseTranslated

            ```
            public javax.ws.rs.core.Response buildSuccessResponseTranslated​(String translatedMessage)
            ```
