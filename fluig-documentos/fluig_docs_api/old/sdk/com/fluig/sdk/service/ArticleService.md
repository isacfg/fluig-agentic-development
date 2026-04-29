# Interface ArticleService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface ArticleService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface ArticleService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de artigos.

    Since:

    1.5.4

    Author:

    marcus.carvalho


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">changeCover</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a>&nbsp;sdkVO)</code></th><td class="colLast"><div class="block">Update the cover image of an existing article.<br><br>Return the article that was updated in a community.<br></div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">create</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Create an article.<br><br>Return the article that was updated in a community.<br></div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">createDraft</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Create an article in draft mode.<br><br>Return the article that was created in a draft mode.<br></div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">delete</a></span>​(long&nbsp;articleId)</code></th><td class="colLast"><div class="block">Remove an article by his id</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">deleteDraft</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;articleId)</code></th><td class="colLast"><div class="block">Remove a version in draft of article<br><br>Remove a draft version of article by his id.</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">get</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias, long&nbsp;articleId, boolean&nbsp;draft)</code></th><td class="colLast"><div class="block">Retrieve an article<br><br>Return an article published in a community.<br></div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">getNextOrPrev</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;folderId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;articleId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order)</code></th><td class="colLast"><div class="block">Retrive the next or previous article of one specific article.<br><br>Return the article that is the next or previous of the article passed by parameter.<br></div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">list</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;alias, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;categoryId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;limit, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;offset, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;filterBy, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;orderBy, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;searchBy)</code></th><td class="colLast"><div class="block">Retrieve a list of article<br><br>Return a list of article published in a community.<br></div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">removeCover</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a>&nbsp;sdkVO)</code></th><td class="colLast"><div class="block">Remove the cover image of an existing article.<br><br>Return the article that was updated in a community.<br></div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html">update</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html" title="class in com.fluig.sdk.api.social">ArticleVO</a>&nbsp;vo)</code></th><td class="colLast"><div class="block">Save and update an article.<br><br>Return the article that was updated in a community.<br></div></td></tr></tbody></table>

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

        -   #### delete

            ```
            void delete​(long articleId)
                 throws com.fluig.sdk.api.common.SDKException
            ```

            Remove an article by his id

            Parameters:

            `articleId` - the Id of a article that will be removed

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### get

            ```
            ArticleVO get​(String alias,
                          long articleId,
                          boolean draft)
                   throws com.fluig.sdk.api.common.SDKException
            ```

            Retrieve an article

            Return an article published in a community.

            Parameters:

            `alias` - the community's alias where the article is published

            `articleId` - The article's id

            `draft` - `true` if retrieving a draft version of the article
            `false` if retrieving a published version of the article

            Returns:

            [`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### list

            ```
            List<ArticleVO> list​(String alias,
                                 Long categoryId,
                                 Integer limit,
                                 Integer offset,
                                 String filterBy,
                                 String orderBy,
                                 String searchBy)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Retrieve a list of article

            Return a list of article published in a community.

            Parameters:

            `alias` - the community's alias where the article is published

            `categoryId` - The category's id

            `limit` - The results limit

            `offset` - The pagination offset

            `offset` - The pagination offset

            `filterBy` - filter result `ALL_ARTICLES` return all published articles `MY_ARTICLES` return my publications

            `orderBy` - ordering result `CREATION_DATE_ASC` order by creation date `CREATION_DATE_DESC` order by creation date inverse `DESCRIPTION_ASC` order by description `DESCRIPTION_DESC` order by description inverse

            `searchBy` - literal pattern into document title

            Returns:

            List<[`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social")\> This method returns VO of article

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### createDraft

            ```
            ArticleVO createDraft​(ArticleVO vo)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Create an article in draft mode.

            Return the article that was created in a draft mode.

            Parameters:

            `vo` - A article VO with data used to create a article

            Returns:

            [`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article created

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### update

            ```
            ArticleVO update​(ArticleVO vo)
                      throws com.fluig.sdk.api.common.SDKException
            ```

            Save and update an article.

            Return the article that was updated in a community.

            Parameters:

            `vo` - A article VO with data used to save the article

            Returns:

            [`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### create

            ```
            ArticleVO create​(ArticleVO vo)
                      throws com.fluig.sdk.api.common.SDKException
            ```

            Create an article.

            Return the article that was updated in a community.

            Parameters:

            `vo` - A article VO with data used to save the article

            Returns:

            [`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### changeCover

            ```
            ArticleVO changeCover​(ArticleVO sdkVO)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Update the cover image of an existing article.

            Return the article that was updated in a community.

            Parameters:

            `sdkVO` - A article VO with data used to update the article

            Returns:

            [`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### removeCover

            ```
            ArticleVO removeCover​(ArticleVO sdkVO)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Remove the cover image of an existing article.

            Return the article that was updated in a community.

            Parameters:

            `sdkVO` - A article VO with data used to update the article

            Returns:

            [`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getNextOrPrev

            ```
            ArticleVO getNextOrPrev​(Long folderId,
                                    Long articleId,
                                    String order)
                             throws Exception
            ```

            Retrive the next or previous article of one specific article.

            Return the article that is the next or previous of the article passed by parameter.

            Parameters:

            `folderId` - The folder's id where the next or previous will be searched.

            `articleId` - The article's Id that will be retrieved the next or previous.

            `order` - The order to get next or previous article. Use the string 'next' retrieve the next article.

            Returns:

            [`ArticleVO`](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article that is the next or previous of the article passed by parameter

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### deleteDraft

            ```
            void deleteDraft​(String alias,
                             Long articleId)
                      throws com.fluig.sdk.api.common.SDKException
            ```

            Remove a version in draft of article

            Remove a draft version of article by his id. If the article isn't in draft, a Error message wil be returned

            Parameters:

            `alias` - the community's alias where the article is published

            `articleId` - the Id of a article that will remove the draft version of an article

            Throws:

            `com.fluig.sdk.api.common.SDKException`
