# Interface LocalAPIService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface LocalAPIService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface LocalAPIService
    extends BaseAPIService
    ```


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&nbsp;local)</code></th><td class="colLast"><div class="block">Cria localização.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">createLocalUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a>&nbsp;localUserVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">createLocalUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a>&nbsp;localUserVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">createLocalUserByGroup</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;localId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;group)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">delete</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Deleta localização.</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">delete</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Deleta localização.</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">deleteHoliday</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;holidayId)</code></th><td class="colLast"><div class="block">Deleta o vínculo do feriado ao local.</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">deleteLocalHoliday</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;holidayId)</code></th><td class="colLast"><div class="block">Deleta o vínculo do feriado ao local.</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">deleteLocalUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode)</code></th><td class="colLast"><div class="block">Deleta localização.</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">deleteLocalUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode)</code></th><td class="colLast"><div class="block">Deleta localização.</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, boolean&nbsp;populateLocalUsers, boolean&nbsp;populateHolidays)</code></th><td class="colLast"><div class="block">Pesquisa localização com id específico.</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand)</code></th><td class="colLast"><div class="block">Pesquisa localização com id específico.</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand)</code></th><td class="colLast"><div class="block">Pesquisa por parametros localização.</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;limit, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand)</code></th><td class="colLast"><div class="block">Pesquisa por parametros localização.</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.sdk.service.vo.common.OrderParam&gt;&nbsp;orderParams, int&nbsp;page, int&nbsp;pageSize, boolean&nbsp;populateUsers, boolean&nbsp;populateHolidays)</code></th><td class="colLast"><div class="block">Pesquisa por parametros localização.</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">find</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.sdk.service.vo.common.OrderParam&gt;&nbsp;orderParams, int&nbsp;page, int&nbsp;pageSize, int&nbsp;offset, int&nbsp;limit, boolean&nbsp;populateUsers, boolean&nbsp;populateHolidays)</code></th><td class="colLast"><div class="block">Pesquisa por parametros localização.</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">findAll</a></span>()</code></th><td class="colLast"><div class="block">Pesquisa todas localizações da empresa do usuário logado.</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">findByUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode)</code></th><td class="colLast"><div class="block">Procura pelo local do usuário.</div></td></tr><tr id="i18" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">findByUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand)</code></th><td class="colLast"><div class="block">Procura pelo local do usuário.</div></td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">findUnrelatedUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.sdk.service.vo.common.OrderParam&gt;&nbsp;orderParams, int&nbsp;page, int&nbsp;pageSize, int&nbsp;offset, int&nbsp;limit)</code></th><td class="colLast"><div class="block">Pesquisa por usuários sem relações com qualquer local.</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">findUnrelatedUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;limit)</code></th><td class="colLast"><div class="block">Pesquisa por usuários sem relações com qualquer local.</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">findUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;localId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.sdk.service.vo.common.OrderParam&gt;&nbsp;orderParams, int&nbsp;page, int&nbsp;pageSize, int&nbsp;offset, int&nbsp;limit)</code></th><td class="colLast"><div class="block">Pesquisa por relações entre usuários e localizações.</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html" title="class in com.fluig.sdk.api.local">LocalUserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">findUsers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;localId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;name, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;limit)</code></th><td class="colLast"><div class="block">Pesquisa por relações entre usuários e localizações.</div></td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">getTimezone</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;latitude, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;longitude)</code></th><td class="colLast"><div class="block">Busca o timezone pela latitude e longitude informada.</div></td></tr><tr id="i24" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">patch</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&nbsp;local)</code></th><td class="colLast"><div class="block">Atualiza parametros específicos da localização.</div></td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">patch</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&nbsp;local)</code></th><td class="colLast"><div class="block">Atualiza parametros específicos da localização.</div></td></tr><tr id="i26" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">update</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&nbsp;local)</code></th><td class="colLast"><div class="block">Atualiza localização.</div></td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">update</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a>&nbsp;local)</code></th><td class="colLast"><div class="block">Atualiza localização.</div></td></tr><tr id="i28" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html" title="class in com.fluig.sdk.api.local">LocalVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html">updateDefault</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Atualiza estado padrão da localização.</div></td></tr></tbody></table>

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

        -   #### create

            ```
            LocalVO create​(LocalVO local)
                    throws Exception
            ```

            Cria localização.

            Parameters:

            `local` - VO da localização.

            Returns:

            VO da localização criada.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### delete

            ```
            void delete​(String id)
                 throws Exception
            ```

            Deleta localização.

            Parameters:

            `id` - Id da localização.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### delete

            ```
            void delete​(Long id)
                 throws Exception
            ```

            Deleta localização.

            Parameters:

            `id` - Id da localização.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### findAll

            ```
            List<LocalVO> findAll()
                           throws Exception
            ```

            Pesquisa todas localizações da empresa do usuário logado.

            Returns:

            Lista de VOs da localização.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            LocalVO find​(Long id,
                         boolean populateLocalUsers,
                         boolean populateHolidays)
                  throws Exception
            ```

            Pesquisa localização com id específico.

            Parameters:

            `id` - Id da localização.

            Returns:

            VO da localização.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            LocalVO find​(String id,
                         String expand)
                  throws Exception
            ```

            Pesquisa localização com id específico.

            Parameters:

            `id` - Id da localização.

            Returns:

            VO da localização.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### update

            ```
            LocalVO update​(String id,
                           LocalVO local)
                    throws Exception
            ```

            Atualiza localização.

            Parameters:

            `id` - Id a ser atualizado.

            `local` - VO da localização.

            Returns:

            VO da localização atualizada.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### update

            ```
            LocalVO update​(LocalVO local)
                    throws Exception
            ```

            Atualiza localização.

            Parameters:

            `local` - VO da localização.

            Returns:

            VO da localização atualizada.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### patch

            ```
            LocalVO patch​(LocalVO local)
                   throws Exception
            ```

            Atualiza parametros específicos da localização.

            Parameters:

            `local` - VO da localização.

            Returns:

            VO da localização criada.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### updateDefault

            ```
            LocalVO updateDefault​(String id)
                           throws Exception
            ```

            Atualiza estado padrão da localização.

            Parameters:

            `id` - Id da localização.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                                   String order,
                                                                                                   String page,
                                                                                                   String pageSize,
                                                                                                   String expand)
                                                                                            throws Exception
            ```

            Pesquisa por parametros localização.

            Parameters:

            `name` - Nome da localização.

            `order` - Ordenação.

            `page` - Página de resultados.

            `pageSize` - Resultados por página.

            Returns:

            VOs das localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                                   List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                   int page,
                                                                                                   int pageSize,
                                                                                                   boolean populateUsers,
                                                                                                   boolean populateHolidays)
                                                                                            throws Exception
            ```

            Pesquisa por parametros localização.

            Parameters:

            `name` - Nome da localização.

            `orderParams` - Ordenação.

            `page` - Página de resultados.

            `pageSize` - Resultados por página.

            Returns:

            VOs das localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                                   String order,
                                                                                                   String page,
                                                                                                   String pageSize,
                                                                                                   String offset,
                                                                                                   String limit,
                                                                                                   String expand)
                                                                                            throws Exception
            ```

            Pesquisa por parametros localização.

            Parameters:

            `name` - Nome da localização.

            `order` - Ordenação.

            `page` - Página de resultados.

            `pageSize` - Resultados por página.

            Returns:

            VOs das localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### find

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                                   List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                   int page,
                                                                                                   int pageSize,
                                                                                                   int offset,
                                                                                                   int limit,
                                                                                                   boolean populateUsers,
                                                                                                   boolean populateHolidays)
                                                                                            throws Exception
            ```

            Pesquisa por parametros localização.

            Parameters:

            `name` - Nome da localização.

            `orderParams` - Ordenação.

            `page` - Página de resultados.

            `pageSize` - Resultados por página.

            Returns:

            VOs das localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### findUsers

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUsers​(String localId,
                                                                                                            String name,
                                                                                                            String order,
                                                                                                            String page,
                                                                                                            String pageSize,
                                                                                                            String offset,
                                                                                                            String limit)
                                                                                                     throws Exception
            ```

            Pesquisa por relações entre usuários e localizações.

            Parameters:

            `localId` - Id da localização.

            `name` - Nome a se buscar.

            `order` - Ordenação.

            `page` - Página.

            `pageSize` - Tamanho da página.

            Returns:

            VOs dos relacionamentos entre usuários e localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### findUsers

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUsers​(Long localId,
                                                                                                            String name,
                                                                                                            List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                            int page,
                                                                                                            int pageSize,
                                                                                                            int offset,
                                                                                                            int limit)
                                                                                                     throws Exception
            ```

            Pesquisa por relações entre usuários e localizações.

            Parameters:

            `localId` - Id da localização.

            `name` - Nome a se buscar.

            `orderParams` - Ordenação.

            `page` - Página.

            `pageSize` - Tamanho da página.

            Returns:

            VOs dos relacionamentos entre usuários e localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### createLocalUser

            ```
            LocalUserVO createLocalUser​(Long id,
                                        LocalUserVO localUserVO)
                                 throws Exception
            ```

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### createLocalUser

            ```
            LocalUserVO createLocalUser​(String id,
                                        LocalUserVO localUserVO)
                                 throws Exception
            ```

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### findUnrelatedUsers

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUnrelatedUsers​(String id,
                                                                                                                     String name,
                                                                                                                     String order,
                                                                                                                     String page,
                                                                                                                     String pageSize,
                                                                                                                     String offset,
                                                                                                                     String limit)
                                                                                                              throws Exception
            ```

            Pesquisa por usuários sem relações com qualquer local.

            Parameters:

            `id` - Id da localização.

            `name` - Nome a se buscar.

            `order` - Ordenação.

            `page` - Página.

            `pageSize` - Tamanho da página.

            Returns:

            VOs dos relacionamentos entre usuários e localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### findUnrelatedUsers

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUnrelatedUsers​(Long id,
                                                                                                                     String name,
                                                                                                                     List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                                     int page,
                                                                                                                     int pageSize,
                                                                                                                     int offset,
                                                                                                                     int limit)
                                                                                                              throws Exception
            ```

            Pesquisa por usuários sem relações com qualquer local.

            Parameters:

            `id` - Id da localização.

            `name` - Nome a se buscar.

            `orderParams` - Ordenação.

            `page` - Página.

            `pageSize` - Tamanho da página.

            Returns:

            VOs dos relacionamentos entre usuários e localizações.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### deleteLocalUser

            ```
            void deleteLocalUser​(Long id,
                                 String userCode)
                          throws Exception
            ```

            Deleta localização.

            Parameters:

            `id` - Id da localização.

            `userCode` - Código do usuário.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### deleteLocalUser

            ```
            void deleteLocalUser​(String id,
                                 String userCode)
                          throws Exception
            ```

            Deleta localização.

            Parameters:

            `id` - Id da localização.

            `userCode` - Código do usuário.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### findByUser

            ```
            LocalVO findByUser​(String userCode)
                        throws Exception
            ```

            Procura pelo local do usuário.

            Parameters:

            `userCode` - Código do usuário.

            Returns:

            Local do usuário.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### findByUser

            ```
            LocalVO findByUser​(String userCode,
                               String expand)
                        throws Exception
            ```

            Procura pelo local do usuário.

            Parameters:

            `userCode` - Código do usuário.

            Returns:

            Local do usuário.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### patch

            ```
            LocalVO patch​(String id,
                          LocalVO local)
                   throws Exception
            ```

            Atualiza parametros específicos da localização.

            Parameters:

            `id` - ID do local.

            `local` - VO da localização.

            Returns:

            VO da localização criada.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### deleteLocalHoliday

            ```
            void deleteLocalHoliday​(String id,
                                    String holidayId)
                             throws Exception
            ```

            Deleta o vínculo do feriado ao local.

            Parameters:

            `id` - ID do local.

            `holidayId` - ID do feriado.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### deleteHoliday

            ```
            void deleteHoliday​(Long id,
                               Long holidayId)
                        throws Exception
            ```

            Deleta o vínculo do feriado ao local.

            Parameters:

            `id` - ID do local.

            `holidayId` - ID do feriado.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### getTimezone

            ```
            String getTimezone​(String latitude,
                               String longitude)
                        throws Exception
            ```

            Busca o timezone pela latitude e longitude informada.

            Parameters:

            `latitude` - Código da latitude.

            `longitude` - Código da longitude.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")` - Qualquer exceção.


        -   #### createLocalUserByGroup

            ```
            List<LocalUserVO> createLocalUserByGroup​(String localId,
                                                     String group)
                                              throws Exception
            ```

            Parameters:

            `id` -

            `group` -

            Returns:

            List

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`
