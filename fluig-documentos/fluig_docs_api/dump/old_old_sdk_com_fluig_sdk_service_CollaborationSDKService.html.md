# Interface CollaborationSDKService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface CollaborationSDKService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface CollaborationSDKService
    extends BaseAPIService
    ```


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">addGuests</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;collaborationId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;guests)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">checkConnect</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;appKey)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">findCollaborationById</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;collaborationId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationAppVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationAppVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">getApp</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;appKey)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true" title="class or interface in java.io" class="externalLink">Serializable</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">getCollaborationStatus</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentVersion)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationAppVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationAppVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">listApps</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/user/UserVO.html" title="class in com.fluig.sdk.user">UserVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">listCollaborators</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;collaborationId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern, int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">startCollaboration</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;appKey, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationVO</a>&nbsp;collaborateVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true" title="class or interface in java.io" class="externalLink">Serializable</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">startEditingByGuest</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;appKey, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;guestCode, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationVO</a>&nbsp;collaborateVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">startGuestCollaboration</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;appKey, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationVO</a>&nbsp;collaborateVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationAppVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationAppVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">updateApp</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationAppVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationAppVO</a>&nbsp;vo)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true" title="class or interface in java.io" class="externalLink">Serializable</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">uploadFlow</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;appKey, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/ecm/CollaborationVO.html" title="class in com.fluig.sdk.api.ecm">CollaborationVO</a>&nbsp;collaborationVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html">validateUserPermissionToEdit</a></span>​(int&nbsp;documentId, int&nbsp;documentVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userCode)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

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

        -   #### listApps

            ```
            List<CollaborationAppVO> listApps()
            ```


        -   #### getApp

            ```
            CollaborationAppVO getApp​(String appKey)
            ```


        -   #### startCollaboration

            ```
            String startCollaboration​(String appKey,
                                      CollaborationVO collaborateVO)
                               throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### uploadFlow

            ```
            Map<String,​Serializable> uploadFlow​(String appKey,
                                                      CollaborationVO collaborationVO)
                                               throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### startGuestCollaboration

            ```
            String startGuestCollaboration​(String appKey,
                                           CollaborationVO collaborateVO)
                                    throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### startEditingByGuest

            ```
            Map<String,​Serializable> startEditingByGuest​(String appKey,
                                                               String guestCode,
                                                               CollaborationVO collaborateVO)
                                                        throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### updateApp

            ```
            CollaborationAppVO updateApp​(CollaborationAppVO vo)
                                  throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### addGuests

            ```
            void addGuests​(Long collaborationId,
                           List<String> guests)
                    throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### getCollaborationStatus

            ```
            Map<String,​Serializable> getCollaborationStatus​(Integer documentId,
                                                                  Integer documentVersion)
                                                           throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### checkConnect

            ```
            String checkConnect​(String appKey)
                         throws com.totvs.technology.foundation.common.exception.FDNException
            ```

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException`


        -   #### listCollaborators

            ```
            List<UserVO> listCollaborators​(Long collaborationId,
                                           String pattern,
                                           int limit,
                                           int offset)
                                    throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findCollaborationById

            ```
            CollaborationVO findCollaborationById​(Long collaborationId)
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### validateUserPermissionToEdit

            ```
            void validateUserPermissionToEdit​(int documentId,
                                              int documentVersion,
                                              String userCode)
                                       throws Exception
            ```

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`
