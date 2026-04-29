# Class ArticleVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html)

---

Package [com.fluig.sdk.api.social](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/package-summary.html)

## Class ArticleVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.social.ArticleVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class ArticleVO
    extends Object
    implements Serializable
    ```

    VO com informações utilizadas para criar Artigos

    Author:

    marcus.carvalho

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">ArticleVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">equals</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true" title="class or interface in java.lang" class="externalLink">Object</a>&nbsp;obj)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getAccessCount</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do campo accessCount</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getAlias</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field alias</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html" title="class in com.fluig.sdk.api.social">ArticleCoverVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getArticleCoverVO</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field articleCoverVO</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getAttachments</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field attachments</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getCategoryId</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field categoryId</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getContent</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field content</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getCovers</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field covers</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getDescription</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field description</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getExpirationDate</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field expirationDate</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getId</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field id</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getKeyWord</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field keyWord</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>long</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getNumberWatchs</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do campo numberWatchs</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getPublicationDate</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field publicationDate</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getPublisherId</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field publisherId</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getSecurityLevel</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do campo securityLevel</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SociableVO.html" title="class in com.fluig.sdk.api.social">SociableVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getSociable</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field sociableVO</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getSocialObjectId</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field socialObjectId</div></td></tr><tr id="i18" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getTopicId</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field topicId</div></td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialVO.html" title="class in com.fluig.sdk.api.social">SocialVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getUser</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field user</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">getVersion</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field version</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">hashCode</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">isApproved</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">isDraft</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field draft</div></td></tr><tr id="i24" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">isExpires</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field expires</div></td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">isUserNotify</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field userNotify</div></td></tr><tr id="i26" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">isViewedDocument</a></span>()</code></th><td class="colLast"><div class="block">Recupera valor do campo viewedDocument</div></td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setAccessCount</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;accessCount)</code></th><td class="colLast"><div class="block">Atribui valor do campo accessCount</div></td></tr><tr id="i28" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setAlias</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias)</code></th><td class="colLast"><div class="block">Setado o valor do field alias</div></td></tr><tr id="i29" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setApproved</a></span>​(boolean&nbsp;approved)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i30" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setArticleCoverVO</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html" title="class in com.fluig.sdk.api.social">ArticleCoverVO</a>&nbsp;articleCoverVO)</code></th><td class="colLast"><div class="block">Setado o valor do field articleCoverVO</div></td></tr><tr id="i31" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setAttachments</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;attachments)</code></th><td class="colLast"><div class="block">Setado o valor do field attachments</div></td></tr><tr id="i32" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setCategoryId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;categoryId)</code></th><td class="colLast"><div class="block">Setado o valor do field categoryId</div></td></tr><tr id="i33" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setContent</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;content)</code></th><td class="colLast"><div class="block">Setado o valor do field content</div></td></tr><tr id="i34" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setCovers</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;covers)</code></th><td class="colLast"><div class="block">Setado o valor do field covers</div></td></tr><tr id="i35" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;description)</code></th><td class="colLast"><div class="block">Setado o valor do field description</div></td></tr><tr id="i36" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setDraft</a></span>​(boolean&nbsp;draft)</code></th><td class="colLast"><div class="block">Setado o valor do field draft</div></td></tr><tr id="i37" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setExpirationDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;expirationDate)</code></th><td class="colLast"><div class="block">Setado o valor do field expirationDate</div></td></tr><tr id="i38" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setExpires</a></span>​(boolean&nbsp;expires)</code></th><td class="colLast"><div class="block">Setado o valor do field expires</div></td></tr><tr id="i39" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;id)</code></th><td class="colLast"><div class="block">Setado o valor do field id</div></td></tr><tr id="i40" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setKeyWord</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;keyWord)</code></th><td class="colLast"><div class="block">Setado o valor do field keyWord</div></td></tr><tr id="i41" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setNumberWatchs</a></span>​(long&nbsp;numberWatchs)</code></th><td class="colLast"><div class="block">Atribui valor do campo numberWatchs</div></td></tr><tr id="i42" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setPublicationDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;publicationDate)</code></th><td class="colLast"><div class="block">Setado o valor do field publicationDate</div></td></tr><tr id="i43" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setPublisherId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;publisherId)</code></th><td class="colLast"><div class="block">Setado o valor do field publisherId</div></td></tr><tr id="i44" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setSecurityLevel</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;securityLevel)</code></th><td class="colLast"><div class="block">Atribui valor do campo securityLevel</div></td></tr><tr id="i45" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setSociable</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SociableVO.html" title="class in com.fluig.sdk.api.social">SociableVO</a>&nbsp;sociable)</code></th><td class="colLast"><div class="block">Setado o valor do field sociableVO</div></td></tr><tr id="i46" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setSocialObjectId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;socialObjectId)</code></th><td class="colLast"><div class="block">Setado o valor do field socialObjectId</div></td></tr><tr id="i47" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setTopicId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;topicId)</code></th><td class="colLast"><div class="block">Setado o valor do field topicId</div></td></tr><tr id="i48" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setUser</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialVO.html" title="class in com.fluig.sdk.api.social">SocialVO</a>&nbsp;user)</code></th><td class="colLast"><div class="block">Setado o valor do field user</div></td></tr><tr id="i49" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setUserNotify</a></span>​(boolean&nbsp;userNotify)</code></th><td class="colLast"><div class="block">Setado o valor do field userNotify</div></td></tr><tr id="i50" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version)</code></th><td class="colLast"><div class="block">Setado o valor do field version</div></td></tr><tr id="i51" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">setViewedDocument</a></span>​(boolean&nbsp;viewedDocument)</code></th><td class="colLast"><div class="block">Atribui valor do campo viewedDocument</div></td></tr><tr id="i52" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html">toString</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### ArticleVO

            ```
            public ArticleVO()
            ```


    -   ### Method Detail

        -   #### getId

            ```
            public Long getId()
            ```

            Recupera o valor do field id

            Returns:

            the id


        -   #### setId

            ```
            public void setId​(Long id)
            ```

            Setado o valor do field id

            Parameters:

            `id` - o id que será setado


        -   #### getCategoryId

            ```
            public Long getCategoryId()
            ```

            Recupera o valor do field categoryId

            Returns:

            the categoryId


        -   #### setCategoryId

            ```
            public void setCategoryId​(Long categoryId)
            ```

            Setado o valor do field categoryId

            Parameters:

            `categoryId` - o categoryId que será setado


        -   #### getAlias

            ```
            public String getAlias()
            ```

            Recupera o valor do field alias

            Returns:

            the alias


        -   #### setAlias

            ```
            public void setAlias​(String alias)
            ```

            Setado o valor do field alias

            Parameters:

            `alias` - o alias que será setado


        -   #### getContent

            ```
            public String getContent()
            ```

            Recupera o valor do field content

            Returns:

            the content


        -   #### setContent

            ```
            public void setContent​(String content)
            ```

            Setado o valor do field content

            Parameters:

            `content` - o content que será setado


        -   #### getTopicId

            ```
            public Integer getTopicId()
            ```

            Recupera o valor do field topicId

            Returns:

            the topicId


        -   #### setTopicId

            ```
            public void setTopicId​(Integer topicId)
            ```

            Setado o valor do field topicId

            Parameters:

            `topicId` - o topicId que será setado


        -   #### isDraft

            ```
            public boolean isDraft()
            ```

            Recupera o valor do field draft

            Returns:

            the draft


        -   #### setDraft

            ```
            public void setDraft​(boolean draft)
            ```

            Setado o valor do field draft

            Parameters:

            `draft` - o draft que será setado


        -   #### getKeyWord

            ```
            public String getKeyWord()
            ```

            Recupera o valor do field keyWord

            Returns:

            the keyWord


        -   #### setKeyWord

            ```
            public void setKeyWord​(String keyWord)
            ```

            Setado o valor do field keyWord

            Parameters:

            `keyWord` - o keyWord que será setado


        -   #### isExpires

            ```
            public boolean isExpires()
            ```

            Recupera o valor do field expires

            Returns:

            the expires


        -   #### setExpires

            ```
            public void setExpires​(boolean expires)
            ```

            Setado o valor do field expires

            Parameters:

            `expires` - o expires que será setado


        -   #### getDescription

            ```
            public String getDescription()
            ```

            Recupera o valor do field description

            Returns:

            the description


        -   #### setDescription

            ```
            public void setDescription​(String description)
            ```

            Setado o valor do field description

            Parameters:

            `description` - o description que será setado


        -   #### getVersion

            ```
            public Integer getVersion()
            ```

            Recupera o valor do field version

            Returns:

            the version


        -   #### setVersion

            ```
            public void setVersion​(Integer version)
            ```

            Setado o valor do field version

            Parameters:

            `version` - o version que será setado


        -   #### getPublicationDate

            ```
            public Date getPublicationDate()
            ```

            Recupera o valor do field publicationDate

            Returns:

            the publicationDate


        -   #### setPublicationDate

            ```
            public void setPublicationDate​(Date publicationDate)
            ```

            Setado o valor do field publicationDate

            Parameters:

            `publicationDate` - o publicationDate que será setado


        -   #### getExpirationDate

            ```
            public Date getExpirationDate()
            ```

            Recupera o valor do field expirationDate

            Returns:

            the expirationDate


        -   #### setExpirationDate

            ```
            public void setExpirationDate​(Date expirationDate)
            ```

            Setado o valor do field expirationDate

            Parameters:

            `expirationDate` - o expirationDate que será setado


        -   #### getPublisherId

            ```
            public String getPublisherId()
            ```

            Recupera o valor do field publisherId

            Returns:

            the publisherId


        -   #### setPublisherId

            ```
            public void setPublisherId​(String publisherId)
            ```

            Setado o valor do field publisherId

            Parameters:

            `publisherId` - o publisherId que será setado


        -   #### getAttachments

            ```
            public List<String> getAttachments()
            ```

            Recupera o valor do field attachments

            Returns:

            the attachments


        -   #### setAttachments

            ```
            public void setAttachments​(List<String> attachments)
            ```

            Setado o valor do field attachments

            Parameters:

            `attachments` - o attachments que será setado


        -   #### getCovers

            ```
            public Map<String,​String> getCovers()
            ```

            Recupera o valor do field covers

            Returns:

            the covers


        -   #### setCovers

            ```
            public void setCovers​(Map<String,​String> covers)
            ```

            Setado o valor do field covers

            Parameters:

            `covers` - o covers que será setado


        -   #### getUser

            ```
            public SocialVO getUser()
            ```

            Recupera o valor do field user

            Returns:

            the user


        -   #### setUser

            ```
            public void setUser​(SocialVO user)
            ```

            Setado o valor do field user

            Parameters:

            `user` - o user que será setado


        -   #### getArticleCoverVO

            ```
            public ArticleCoverVO getArticleCoverVO()
            ```

            Recupera o valor do field articleCoverVO

            Returns:

            the articleCoverVO


        -   #### setArticleCoverVO

            ```
            public void setArticleCoverVO​(ArticleCoverVO articleCoverVO)
            ```

            Setado o valor do field articleCoverVO

            Parameters:

            `articleCoverVO` - o articleCoverVO que será setado


        -   #### isUserNotify

            ```
            public boolean isUserNotify()
            ```

            Recupera o valor do field userNotify

            Returns:

            the userNotify


        -   #### setUserNotify

            ```
            public void setUserNotify​(boolean userNotify)
            ```

            Setado o valor do field userNotify

            Parameters:

            `userNotify` - o userNotify que será setado


        -   #### getSocialObjectId

            ```
            public Long getSocialObjectId()
            ```

            Recupera o valor do field socialObjectId

            Returns:

            the socialObjectId


        -   #### setSocialObjectId

            ```
            public void setSocialObjectId​(Long socialObjectId)
            ```

            Setado o valor do field socialObjectId

            Parameters:

            `socialObjectId` - o socialObjectId que será setado


        -   #### getSociable

            ```
            public SociableVO getSociable()
            ```

            Recupera o valor do field sociableVO

            Returns:

            the sociableVO


        -   #### setSociable

            ```
            public void setSociable​(SociableVO sociable)
            ```

            Setado o valor do field sociableVO

            Parameters:

            `sociableVO` - o sociableVO que será setado


        -   #### isViewedDocument

            ```
            public boolean isViewedDocument()
            ```

            Recupera valor do campo viewedDocument

            Returns:

            usuario viu o artigo


        -   #### setViewedDocument

            ```
            public void setViewedDocument​(boolean viewedDocument)
            ```

            Atribui valor do campo viewedDocument

            Parameters:

            `viewedDocument` -


        -   #### getSecurityLevel

            ```
            public String getSecurityLevel()
            ```

            Recupera valor do campo securityLevel

            Returns:


        -   #### setSecurityLevel

            ```
            public void setSecurityLevel​(String securityLevel)
            ```

            Atribui valor do campo securityLevel

            Parameters:

            `securityLevel` -


        -   #### getAccessCount

            ```
            public Integer getAccessCount()
            ```

            Recupera valor do campo accessCount

            Returns:


        -   #### setAccessCount

            ```
            public void setAccessCount​(Integer accessCount)
            ```

            Atribui valor do campo accessCount

            Parameters:

            `accessCount` -


        -   #### getNumberWatchs

            ```
            public long getNumberWatchs()
            ```

            Recupera valor do campo numberWatchs

            Returns:


        -   #### setNumberWatchs

            ```
            public void setNumberWatchs​(long numberWatchs)
            ```

            Atribui valor do campo numberWatchs

            Parameters:

            `numberWatchs` -


        -   #### isApproved

            ```
            public boolean isApproved()
            ```


        -   #### setApproved

            ```
            public void setApproved​(boolean approved)
            ```


        -   #### toString

            ```
            public String toString()
            ```

            Overrides:

            `[toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang")` in class `[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")`


        -   #### hashCode

            ```
            public int hashCode()
            ```

            Overrides:

            `[hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang")` in class `[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")`


        -   #### equals

            ```
            public boolean equals​(Object obj)
            ```

            Overrides:

            `[equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang")` in class `[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")`
