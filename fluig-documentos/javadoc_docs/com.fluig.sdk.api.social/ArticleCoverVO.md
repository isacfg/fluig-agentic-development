# Class ArticleCoverVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleCoverVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.ArticleCoverVO
```

```java
public class ArticleCoverVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ArticleCoverVO()` |  |
| `ArticleCoverVO​(byte[] image, int width, int height, int x, int y)` |  |
| `ArticleCoverVO​(String pictureName, byte[] image)` |  |
| `ArticleCoverVO​(String pictureName, byte[] image, int width, int height)` |  |
| `ArticleCoverVO​(String pictureName, byte[] image, int width, int height, int x, int y)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `void` | `convertMediaData()` |  |
| `String` | `getBase64media()` |  |
| `CropVO` | `getBoxData()` |  |
| `CropVO` | `getCanvasData()` |  |
| `int` | `getCoordinateX()` |  |
| `int` | `getCoordinateY()` |  |
| `int` | `getHeight()` |  |
| `byte[]` | `getImage()` |  |
| `String` | `getPath()` |  |
| `String` | `getPictureId()` |  |
| `String` | `getPictureName()` |  |
| `int` | `getWidth()` |  |
| `int` | `getWindowHeight()` | Recupera o valor do field windowHeight |
| `int` | `getWindowWidth()` | Recupera o valor do field windowWidth |
| `void` | `setBase64media​(String base64media)` |  |
| `void` | `setBoxData​(CropVO boxData)` |  |
| `void` | `setCanvasData​(CropVO canvasData)` |  |
| `void` | `setCoordinateX​(int coordinateX)` |  |
| `void` | `setCoordinateY​(int coordinateY)` |  |
| `void` | `setHeight​(int height)` |  |
| `void` | `setImage​(byte[] image)` |  |
| `void` | `setPath​(String path)` |  |
| `void` | `setPictureId​(String pictureId)` |  |
| `void` | `setPictureName​(String pictureName)` |  |
| `void` | `setWidth​(int width)` |  |
| `void` | `setWindowHeight​(int windowHeight)` | Setado o valor do field windowHeight |
| `void` | `setWindowWidth​(int windowWidth)` | Setado o valor do field windowWidth |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### ArticleCoverVO

```java
public ArticleCoverVO()
```


---

### ArticleCoverVO

```java
public ArticleCoverVO​(String pictureName,
                      byte[] image,
                      int width,
                      int height)
```


---

### ArticleCoverVO

```java
public ArticleCoverVO​(String pictureName,
                      byte[] image)
```


---

### ArticleCoverVO

```java
public ArticleCoverVO​(String pictureName,
                      byte[] image,
                      int width,
                      int height,
                      int x,
                      int y)
```


---

### ArticleCoverVO

```java
public ArticleCoverVO​(byte[] image,
                      int width,
                      int height,
                      int x,
                      int y)
```



## Detalhes dos Métodos

### getPath

```java
public String getPath()
```


---

### setPath

```java
public void setPath​(String path)
```


---

### getPictureName

```java
public String getPictureName()
```


---

### setPictureName

```java
public void setPictureName​(String pictureName)
```


---

### getImage

```java
public byte[] getImage()
```


---

### setImage

```java
public void setImage​(byte[] image)
```


---

### getCoordinateX

```java
public int getCoordinateX()
```


---

### setCoordinateX

```java
public void setCoordinateX​(int coordinateX)
```


---

### getCoordinateY

```java
public int getCoordinateY()
```


---

### setCoordinateY

```java
public void setCoordinateY​(int coordinateY)
```


---

### getWidth

```java
public int getWidth()
```


---

### setWidth

```java
public void setWidth​(int width)
```


---

### getHeight

```java
public int getHeight()
```


---

### setHeight

```java
public void setHeight​(int height)
```


---

### getBase64media

```java
public String getBase64media()
```


---

### setBase64media

```java
public void setBase64media​(String base64media)
```


---

### convertMediaData

```java
public void convertMediaData()
```


---

### getCanvasData

```java
public CropVO getCanvasData()
```


---

### setCanvasData

```java
public void setCanvasData​(CropVO canvasData)
```


---

### getBoxData

```java
public CropVO getBoxData()
```


---

### setBoxData

```java
public void setBoxData​(CropVO boxData)
```


---

### getPictureId

```java
public String getPictureId()
```


---

### setPictureId

```java
public void setPictureId​(String pictureId)
```


---

### getWindowHeight

```java
public int getWindowHeight()
```

Recupera o valor do field windowHeight

- **Returns:** the windowHeight

---

### setWindowHeight

```java
public void setWindowHeight​(int windowHeight)
```

Setado o valor do field windowHeight

- **Parameters:** `windowHeight` - o windowHeight que será setado

---

### getWindowWidth

```java
public int getWindowWidth()
```

Recupera o valor do field windowWidth

- **Returns:** the windowWidth

---

### setWindowWidth

```java
public void setWindowWidth​(int windowWidth)
```

Setado o valor do field windowWidth

- **Parameters:** `windowWidth` - o windowWidth que será setado

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

