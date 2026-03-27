# Interface GlobalParameterService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface GlobalParameterService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface GlobalParameterService
    extends BaseAPIService
    ```

    Grant access to global parameter services

    Since:

    1.5.3

    Author:

    vinicius.michelutti


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html">getMaxUploadSize</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html">getMaxUploadSizeForConnect</a></span>()</code></th><td class="colLast"><div class="block">Retorna o tamanho configurado, do máximo de upload pelo fluig Connect</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html">getViewJustProcessWithApproval</a></span>()</code></th><td class="colLast"><div class="block">retorna se a empresa irá mostrar somente as tarefas configuradas para o app approval nos dispositivos mobile</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html">setMaxUploadsizeForConnect</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;size)</code></th><td class="colLast"><div class="block">Seta o tamanho máximo de upload via fluig Connect</div></td></tr></tbody></table>

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

        -   #### getMaxUploadSizeForConnect

            ```
            Long getMaxUploadSizeForConnect()
                                     throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna o tamanho configurado, do máximo de upload pelo fluig Connect

            Returns:

            O tamanho em bytes

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### setMaxUploadsizeForConnect

            ```
            void setMaxUploadsizeForConnect​(Integer size)
                                     throws com.fluig.sdk.api.common.SDKException
            ```

            Seta o tamanho máximo de upload via fluig Connect

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getViewJustProcessWithApproval

            ```
            Boolean getViewJustProcessWithApproval()
                                            throws com.fluig.sdk.api.common.SDKException
            ```

            retorna se a empresa irá mostrar somente as tarefas configuradas para o app approval nos dispositivos mobile

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getMaxUploadSize

            ```
            Long getMaxUploadSize()
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`
