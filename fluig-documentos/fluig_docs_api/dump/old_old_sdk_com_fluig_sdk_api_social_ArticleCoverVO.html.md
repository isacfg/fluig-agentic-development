# Class ArticleCoverVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html)

---

Package [com.fluig.sdk.api.social](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/package-summary.html)

## Class ArticleCoverVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.social.ArticleCoverVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class ArticleCoverVO
    extends Object
    implements Serializable
    ```

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">ArticleCoverVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">ArticleCoverVO</a></span>​(byte[]&nbsp;image, int&nbsp;width, int&nbsp;height, int&nbsp;x, int&nbsp;y)</code></th><td class="colLast">&nbsp;</td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">ArticleCoverVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pictureName, byte[]&nbsp;image)</code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">ArticleCoverVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pictureName, byte[]&nbsp;image, int&nbsp;width, int&nbsp;height)</code></th><td class="colLast">&nbsp;</td></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">ArticleCoverVO</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pictureName, byte[]&nbsp;image, int&nbsp;width, int&nbsp;height, int&nbsp;x, int&nbsp;y)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">convertMediaData</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getBase64media</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CropVO.html" title="class in com.fluig.sdk.api.social">CropVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getBoxData</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CropVO.html" title="class in com.fluig.sdk.api.social">CropVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getCanvasData</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getCoordinateX</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getCoordinateY</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getHeight</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>byte[]</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getImage</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getPath</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getPictureId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getPictureName</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getWidth</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getWindowHeight</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field windowHeight</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">getWindowWidth</a></span>()</code></th><td class="colLast"><div class="block">Recupera o valor do field windowWidth</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setBase64media</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;base64media)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setBoxData</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CropVO.html" title="class in com.fluig.sdk.api.social">CropVO</a>&nbsp;boxData)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i16" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setCanvasData</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CropVO.html" title="class in com.fluig.sdk.api.social">CropVO</a>&nbsp;canvasData)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setCoordinateX</a></span>​(int&nbsp;coordinateX)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setCoordinateY</a></span>​(int&nbsp;coordinateY)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setHeight</a></span>​(int&nbsp;height)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setImage</a></span>​(byte[]&nbsp;image)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setPath</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;path)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setPictureId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pictureId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setPictureName</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pictureName)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i24" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setWidth</a></span>​(int&nbsp;width)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setWindowHeight</a></span>​(int&nbsp;windowHeight)</code></th><td class="colLast"><div class="block">Setado o valor do field windowHeight</div></td></tr><tr id="i26" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">setWindowWidth</a></span>​(int&nbsp;windowWidth)</code></th><td class="colLast"><div class="block">Setado o valor do field windowWidth</div></td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html">toString</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### ArticleCoverVO

            ```
            public ArticleCoverVO()
            ```


        -   #### ArticleCoverVO

            ```
            public ArticleCoverVO​(String pictureName,
                                  byte[] image,
                                  int width,
                                  int height)
            ```


        -   #### ArticleCoverVO

            ```
            public ArticleCoverVO​(String pictureName,
                                  byte[] image)
            ```


        -   #### ArticleCoverVO

            ```
            public ArticleCoverVO​(String pictureName,
                                  byte[] image,
                                  int width,
                                  int height,
                                  int x,
                                  int y)
            ```


        -   #### ArticleCoverVO

            ```
            public ArticleCoverVO​(byte[] image,
                                  int width,
                                  int height,
                                  int x,
                                  int y)
            ```


    -   ### Method Detail

        -   #### getPath

            ```
            public String getPath()
            ```


        -   #### setPath

            ```
            public void setPath​(String path)
            ```


        -   #### getPictureName

            ```
            public String getPictureName()
            ```


        -   #### setPictureName

            ```
            public void setPictureName​(String pictureName)
            ```


        -   #### getImage

            ```
            public byte[] getImage()
            ```


        -   #### setImage

            ```
            public void setImage​(byte[] image)
            ```


        -   #### getCoordinateX

            ```
            public int getCoordinateX()
            ```


        -   #### setCoordinateX

            ```
            public void setCoordinateX​(int coordinateX)
            ```


        -   #### getCoordinateY

            ```
            public int getCoordinateY()
            ```


        -   #### setCoordinateY

            ```
            public void setCoordinateY​(int coordinateY)
            ```


        -   #### getWidth

            ```
            public int getWidth()
            ```


        -   #### setWidth

            ```
            public void setWidth​(int width)
            ```


        -   #### getHeight

            ```
            public int getHeight()
            ```


        -   #### setHeight

            ```
            public void setHeight​(int height)
            ```


        -   #### getBase64media

            ```
            public String getBase64media()
            ```


        -   #### setBase64media

            ```
            public void setBase64media​(String base64media)
            ```


        -   #### convertMediaData

            ```
            public void convertMediaData()
            ```


        -   #### getCanvasData

            ```
            public CropVO getCanvasData()
            ```


        -   #### setCanvasData

            ```
            public void setCanvasData​(CropVO canvasData)
            ```


        -   #### getBoxData

            ```
            public CropVO getBoxData()
            ```


        -   #### setBoxData

            ```
            public void setBoxData​(CropVO boxData)
            ```


        -   #### getPictureId

            ```
            public String getPictureId()
            ```


        -   #### setPictureId

            ```
            public void setPictureId​(String pictureId)
            ```


        -   #### getWindowHeight

            ```
            public int getWindowHeight()
            ```

            Recupera o valor do field windowHeight

            Returns:

            the windowHeight


        -   #### setWindowHeight

            ```
            public void setWindowHeight​(int windowHeight)
            ```

            Setado o valor do field windowHeight

            Parameters:

            `windowHeight` - o windowHeight que será setado


        -   #### getWindowWidth

            ```
            public int getWindowWidth()
            ```

            Recupera o valor do field windowWidth

            Returns:

            the windowWidth


        -   #### setWindowWidth

            ```
            public void setWindowWidth​(int windowWidth)
            ```

            Setado o valor do field windowWidth

            Parameters:

            `windowWidth` - o windowWidth que será setado


        -   #### toString

            ```
            public String toString()
            ```

            Overrides:

            `[toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang")` in class `[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")`
