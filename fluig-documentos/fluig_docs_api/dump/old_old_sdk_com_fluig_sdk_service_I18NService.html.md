# Interface I18NService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface I18NService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface I18NService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de internacioinalização.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html">addResourceBundle</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Locale.html?is-external=true" title="class or interface in java.util" class="externalLink">Locale</a>&nbsp;locale, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;code, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Properties.html?is-external=true" title="class or interface in java.util" class="externalLink">Properties</a>&nbsp;props)</code></th><td class="colLast"><div class="block">Registra um ResourceBundle para um determinado componente.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html">transalateString</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;message, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>[]&nbsp;params)</code></th><td class="colLast"><div class="block">Retorna a tradução de uma String padrão do Fluig.</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html">transalateString</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;code, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;message, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>[]&nbsp;params)</code></th><td class="colLast"><div class="block">Retorna a tradução de uma String associada a um Bundle específico.</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>[]</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html">translateException</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Throwable.html?is-external=true" title="class or interface in java.lang" class="externalLink">Throwable</a>&nbsp;ex)</code></th><td class="colLast"><div class="block">Retorna a tradução de uma exception.</div></td></tr></tbody></table>

        -   ### Methods inherited from interface com.fluig.sdk.service.[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")

            `[expand](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html), [generateOrderParam](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html)`


-   -   ### Field Detail

        -   #### JNDI\_NAME

            ```
            static final String JNDI_NAME
            ```

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### JNDI\_REMOTE\_NAME

            ```
            static final String JNDI_REMOTE_NAME
            ```

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


    -   ### Method Detail

        -   #### transalateString

            ```
            String transalateString​(String message,
                                    Object[] params)
                             throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a tradução de uma String padrão do Fluig.

            Parameters:

            `message` - String a ser traduzida.

            `params` - Valores a serem substituídos na String. **null** se não houver parâmetros.

            Returns:

            String traduzida ou a própria string original, se não encontrar a tradução.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### transalateString

            ```
            String transalateString​(String code,
                                    String message,
                                    Object[] params)
                             throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a tradução de uma String associada a um Bundle específico.

            Parameters:

            `code` - Código do resource bundle onde procurar a tradução.

            `message` - String a ser traduzida.

            `params` - Valores a serem substituídos na String. **null** se não houver parâmetros.

            Returns:

            String traduzida ou a própria string original, se não encontrar a tradução.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### translateException

            ```
            String[] translateException​(Throwable ex)
                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a tradução de uma exception.

            Parameters:

            `ex` - Exception a ser traduzida.

            `params` - Valores a serem substituídos na String. **null** se não houver parâmetros.

            Returns:

            Array de duas dimensões, onde no índice **0** está a tradução da exception e no índice **1** está uma descrição mais detalhada da mensagem.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### addResourceBundle

            ```
            void addResourceBundle​(Locale locale,
                                   String code,
                                   Properties props)
                            throws com.fluig.sdk.api.common.SDKException
            ```

            Registra um ResourceBundle para um determinado componente.

            Parameters:

            `locale` - Idioma.

            `code` - Código do componente ao qual o ResourceBundle pertence.

            `props` - Conjunto de strings internacionalizadas.

            Throws:

            `com.fluig.sdk.api.common.SDKException`
