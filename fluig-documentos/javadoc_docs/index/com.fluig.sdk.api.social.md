# com.fluig.sdk.api.social

> **12 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/package-summary.html)

---

VO com informações utilizadas para criar Artigos

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class ArticleCoverVO](#class-articlecovervo)
- [Class ArticleUtils](#class-articleutils)
- [Class ArticleVO](#class-articlevo)
- [Class CommentVO](#class-commentvo)
- [Class CommunityVO](#class-communityvo)
- [Class CropVO](#class-cropvo)
- [Class MediaVO](#class-mediavo)
- [Class PostVO](#class-postvo)
- [Class SociableVO](#class-sociablevo)
- [Class SocialBreadcrumbItemVO](#class-socialbreadcrumbitemvo)
- [Class SocialBreadcrumbVO](#class-socialbreadcrumbvo)
- [Class SocialVO](#class-socialvo)

---

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

---

# Class ArticleUtils

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleUtils.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleUtils.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.ArticleUtils
```

```java
public final class ArticleUtils
extends Object
```


---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `getDefaultArticleName()` |  |


---

## Detalhes dos Métodos

### getDefaultArticleName

```java
public static final String getDefaultArticleName()
```

---

# Class ArticleVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/ArticleVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.ArticleVO
```

```java
public class ArticleVO
extends Object
implements Serializable
```

VO com informações utilizadas para criar Artigos

- **All Implemented Interfaces:** Serializable
- **Author:** marcus.carvalho
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ArticleVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `boolean` | `equals​(Object obj)` |  |
| `Integer` | `getAccessCount()` | Recupera valor do campo accessCount |
| `String` | `getAlias()` | Recupera o valor do field alias |
| `ArticleCoverVO` | `getArticleCoverVO()` | Recupera o valor do field articleCoverVO |
| `List<String>` | `getAttachments()` | Recupera o valor do field attachments |
| `Long` | `getCategoryId()` | Recupera o valor do field categoryId |
| `String` | `getContent()` | Recupera o valor do field content |
| `Map<String,​String>` | `getCovers()` | Recupera o valor do field covers |
| `String` | `getDescription()` | Recupera o valor do field description |
| `Date` | `getExpirationDate()` | Recupera o valor do field expirationDate |
| `Long` | `getId()` | Recupera o valor do field id |
| `String` | `getKeyWord()` | Recupera o valor do field keyWord |
| `long` | `getNumberWatchs()` | Recupera valor do campo numberWatchs |
| `Date` | `getPublicationDate()` | Recupera o valor do field publicationDate |
| `String` | `getPublisherId()` | Recupera o valor do field publisherId |
| `String` | `getSecurityLevel()` | Recupera valor do campo securityLevel |
| `SociableVO` | `getSociable()` | Recupera o valor do field sociableVO |
| `Long` | `getSocialObjectId()` | Recupera o valor do field socialObjectId |
| `Integer` | `getTopicId()` | Recupera o valor do field topicId |
| `SocialVO` | `getUser()` | Recupera o valor do field user |
| `Integer` | `getVersion()` | Recupera o valor do field version |
| `int` | `hashCode()` |  |
| `boolean` | `isApproved()` |  |
| `boolean` | `isDraft()` | Recupera o valor do field draft |
| `boolean` | `isExpires()` | Recupera o valor do field expires |
| `boolean` | `isUserNotify()` | Recupera o valor do field userNotify |
| `boolean` | `isViewedDocument()` | Recupera valor do campo viewedDocument |
| `void` | `setAccessCount​(Integer accessCount)` | Atribui valor do campo accessCount |
| `void` | `setAlias​(String alias)` | Setado o valor do field alias |
| `void` | `setApproved​(boolean approved)` |  |
| `void` | `setArticleCoverVO​(ArticleCoverVO articleCoverVO)` | Setado o valor do field articleCoverVO |
| `void` | `setAttachments​(List<String> attachments)` | Setado o valor do field attachments |
| `void` | `setCategoryId​(Long categoryId)` | Setado o valor do field categoryId |
| `void` | `setContent​(String content)` | Setado o valor do field content |
| `void` | `setCovers​(Map<String,​String> covers)` | Setado o valor do field covers |
| `void` | `setDescription​(String description)` | Setado o valor do field description |
| `void` | `setDraft​(boolean draft)` | Setado o valor do field draft |
| `void` | `setExpirationDate​(Date expirationDate)` | Setado o valor do field expirationDate |
| `void` | `setExpires​(boolean expires)` | Setado o valor do field expires |
| `void` | `setId​(Long id)` | Setado o valor do field id |
| `void` | `setKeyWord​(String keyWord)` | Setado o valor do field keyWord |
| `void` | `setNumberWatchs​(long numberWatchs)` | Atribui valor do campo numberWatchs |
| `void` | `setPublicationDate​(Date publicationDate)` | Setado o valor do field publicationDate |
| `void` | `setPublisherId​(String publisherId)` | Setado o valor do field publisherId |
| `void` | `setSecurityLevel​(String securityLevel)` | Atribui valor do campo securityLevel |
| `void` | `setSociable​(SociableVO sociable)` | Setado o valor do field sociableVO |
| `void` | `setSocialObjectId​(Long socialObjectId)` | Setado o valor do field socialObjectId |
| `void` | `setTopicId​(Integer topicId)` | Setado o valor do field topicId |
| `void` | `setUser​(SocialVO user)` | Setado o valor do field user |
| `void` | `setUserNotify​(boolean userNotify)` | Setado o valor do field userNotify |
| `void` | `setVersion​(Integer version)` | Setado o valor do field version |
| `void` | `setViewedDocument​(boolean viewedDocument)` | Atribui valor do campo viewedDocument |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### ArticleVO

```java
public ArticleVO()
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```

Recupera o valor do field id

- **Returns:** the id

---

### setId

```java
public void setId​(Long id)
```

Setado o valor do field id

- **Parameters:** `id` - o id que será setado

---

### getCategoryId

```java
public Long getCategoryId()
```

Recupera o valor do field categoryId

- **Returns:** the categoryId

---

### setCategoryId

```java
public void setCategoryId​(Long categoryId)
```

Setado o valor do field categoryId

- **Parameters:** `categoryId` - o categoryId que será setado

---

### getAlias

```java
public String getAlias()
```

Recupera o valor do field alias

- **Returns:** the alias

---

### setAlias

```java
public void setAlias​(String alias)
```

Setado o valor do field alias

- **Parameters:** `alias` - o alias que será setado

---

### getContent

```java
public String getContent()
```

Recupera o valor do field content

- **Returns:** the content

---

### setContent

```java
public void setContent​(String content)
```

Setado o valor do field content

- **Parameters:** `content` - o content que será setado

---

### getTopicId

```java
public Integer getTopicId()
```

Recupera o valor do field topicId

- **Returns:** the topicId

---

### setTopicId

```java
public void setTopicId​(Integer topicId)
```

Setado o valor do field topicId

- **Parameters:** `topicId` - o topicId que será setado

---

### isDraft

```java
public boolean isDraft()
```

Recupera o valor do field draft

- **Returns:** the draft

---

### setDraft

```java
public void setDraft​(boolean draft)
```

Setado o valor do field draft

- **Parameters:** `draft` - o draft que será setado

---

### getKeyWord

```java
public String getKeyWord()
```

Recupera o valor do field keyWord

- **Returns:** the keyWord

---

### setKeyWord

```java
public void setKeyWord​(String keyWord)
```

Setado o valor do field keyWord

- **Parameters:** `keyWord` - o keyWord que será setado

---

### isExpires

```java
public boolean isExpires()
```

Recupera o valor do field expires

- **Returns:** the expires

---

### setExpires

```java
public void setExpires​(boolean expires)
```

Setado o valor do field expires

- **Parameters:** `expires` - o expires que será setado

---

### getDescription

```java
public String getDescription()
```

Recupera o valor do field description

- **Returns:** the description

---

### setDescription

```java
public void setDescription​(String description)
```

Setado o valor do field description

- **Parameters:** `description` - o description que será setado

---

### getVersion

```java
public Integer getVersion()
```

Recupera o valor do field version

- **Returns:** the version

---

### setVersion

```java
public void setVersion​(Integer version)
```

Setado o valor do field version

- **Parameters:** `version` - o version que será setado

---

### getPublicationDate

```java
public Date getPublicationDate()
```

Recupera o valor do field publicationDate

- **Returns:** the publicationDate

---

### setPublicationDate

```java
public void setPublicationDate​(Date publicationDate)
```

Setado o valor do field publicationDate

- **Parameters:** `publicationDate` - o publicationDate que será setado

---

### getExpirationDate

```java
public Date getExpirationDate()
```

Recupera o valor do field expirationDate

- **Returns:** the expirationDate

---

### setExpirationDate

```java
public void setExpirationDate​(Date expirationDate)
```

Setado o valor do field expirationDate

- **Parameters:** `expirationDate` - o expirationDate que será setado

---

### getPublisherId

```java
public String getPublisherId()
```

Recupera o valor do field publisherId

- **Returns:** the publisherId

---

### setPublisherId

```java
public void setPublisherId​(String publisherId)
```

Setado o valor do field publisherId

- **Parameters:** `publisherId` - o publisherId que será setado

---

### getAttachments

```java
public List<String> getAttachments()
```

Recupera o valor do field attachments

- **Returns:** the attachments

---

### setAttachments

```java
public void setAttachments​(List<String> attachments)
```

Setado o valor do field attachments

- **Parameters:** `attachments` - o attachments que será setado

---

### getCovers

```java
public Map<String,​String> getCovers()
```

Recupera o valor do field covers

- **Returns:** the covers

---

### setCovers

```java
public void setCovers​(Map<String,​String> covers)
```

Setado o valor do field covers

- **Parameters:** `covers` - o covers que será setado

---

### getUser

```java
public SocialVO getUser()
```

Recupera o valor do field user

- **Returns:** the user

---

### setUser

```java
public void setUser​(SocialVO user)
```

Setado o valor do field user

- **Parameters:** `user` - o user que será setado

---

### getArticleCoverVO

```java
public ArticleCoverVO getArticleCoverVO()
```

Recupera o valor do field articleCoverVO

- **Returns:** the articleCoverVO

---

### setArticleCoverVO

```java
public void setArticleCoverVO​(ArticleCoverVO articleCoverVO)
```

Setado o valor do field articleCoverVO

- **Parameters:** `articleCoverVO` - o articleCoverVO que será setado

---

### isUserNotify

```java
public boolean isUserNotify()
```

Recupera o valor do field userNotify

- **Returns:** the userNotify

---

### setUserNotify

```java
public void setUserNotify​(boolean userNotify)
```

Setado o valor do field userNotify

- **Parameters:** `userNotify` - o userNotify que será setado

---

### getSocialObjectId

```java
public Long getSocialObjectId()
```

Recupera o valor do field socialObjectId

- **Returns:** the socialObjectId

---

### setSocialObjectId

```java
public void setSocialObjectId​(Long socialObjectId)
```

Setado o valor do field socialObjectId

- **Parameters:** `socialObjectId` - o socialObjectId que será setado

---

### getSociable

```java
public SociableVO getSociable()
```

Recupera o valor do field sociableVO

- **Returns:** the sociableVO

---

### setSociable

```java
public void setSociable​(SociableVO sociable)
```

Setado o valor do field sociableVO

- **Parameters:** `sociableVO` - o sociableVO que será setado

---

### isViewedDocument

```java
public boolean isViewedDocument()
```

Recupera valor do campo viewedDocument

- **Returns:** usuario viu o artigo

---

### setViewedDocument

```java
public void setViewedDocument​(boolean viewedDocument)
```

Atribui valor do campo viewedDocument

- **Parameters:** `viewedDocument` -

---

### getSecurityLevel

```java
public String getSecurityLevel()
```

Recupera valor do campo securityLevel


---

### setSecurityLevel

```java
public void setSecurityLevel​(String securityLevel)
```

Atribui valor do campo securityLevel

- **Parameters:** `securityLevel` -

---

### getAccessCount

```java
public Integer getAccessCount()
```

Recupera valor do campo accessCount


---

### setAccessCount

```java
public void setAccessCount​(Integer accessCount)
```

Atribui valor do campo accessCount

- **Parameters:** `accessCount` -

---

### getNumberWatchs

```java
public long getNumberWatchs()
```

Recupera valor do campo numberWatchs


---

### setNumberWatchs

```java
public void setNumberWatchs​(long numberWatchs)
```

Atribui valor do campo numberWatchs

- **Parameters:** `numberWatchs` -

---

### isApproved

```java
public boolean isApproved()
```


---

### setApproved

```java
public void setApproved​(boolean approved)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

### hashCode

```java
public int hashCode()
```

- **Overrides:** `` `hashCode` `` in class `` `Object` ``

---

### equals

```java
public boolean equals​(Object obj)
```

- **Overrides:** `` `equals` `` in class `` `Object` ``

---

# Class CommentVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommentVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommentVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.CommentVO
```

```java
public class CommentVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CommentVO()` |  |
| `CommentVO​(Long sociableId, Long sociableParentId, String comment, Date creationDate, Date updateDate, String commentWithoutMention, boolean mention, Map<String,​String> mentions, Map<String,​String> customData, String userName, String userAlias)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `boolean` | `equals​(Object obj)` |  |
| `String` | `getComment()` |  |
| `String` | `getCommentWithoutMention()` |  |
| `Date` | `getCreationDate()` |  |
| `Map<String,​String>` | `getCustomData()` |  |
| `Map<String,​String>` | `getMentions()` |  |
| `Long` | `getSociableId()` |  |
| `Long` | `getSociableParentId()` |  |
| `Date` | `getUpdateDate()` |  |
| `String` | `getUserAlias()` |  |
| `String` | `getUserName()` |  |
| `int` | `hashCode()` |  |
| `boolean` | `isMention()` |  |
| `void` | `setComment​(String comment)` |  |
| `void` | `setCommentWithoutMention​(String commentWithoutMention)` |  |
| `void` | `setCreationDate​(Date creationDate)` |  |
| `void` | `setCustomData​(Map<String,​String> customData)` |  |
| `void` | `setMention​(boolean mention)` |  |
| `void` | `setMentions​(Map<String,​String> mentions)` |  |
| `void` | `setSociableId​(Long sociableId)` |  |
| `void` | `setSociableParentId​(Long sociableParentId)` |  |
| `void` | `setUpdateDate​(Date updateDate)` |  |
| `void` | `setUserAlias​(String userAlias)` |  |
| `void` | `setUserName​(String userName)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### CommentVO

```java
public CommentVO()
```


---

### CommentVO

```java
public CommentVO​(Long sociableId,
                 Long sociableParentId,
                 String comment,
                 Date creationDate,
                 Date updateDate,
                 String commentWithoutMention,
                 boolean mention,
                 Map<String,​String> mentions,
                 Map<String,​String> customData,
                 String userName,
                 String userAlias)
```



## Detalhes dos Métodos

### getSociableId

```java
public Long getSociableId()
```


---

### setSociableId

```java
public void setSociableId​(Long sociableId)
```


---

### getComment

```java
public String getComment()
```


---

### setComment

```java
public void setComment​(String comment)
```


---

### getCreationDate

```java
public Date getCreationDate()
```


---

### setCreationDate

```java
public void setCreationDate​(Date creationDate)
```


---

### getUpdateDate

```java
public Date getUpdateDate()
```


---

### setUpdateDate

```java
public void setUpdateDate​(Date updateDate)
```


---

### getCommentWithoutMention

```java
public String getCommentWithoutMention()
```


---

### setCommentWithoutMention

```java
public void setCommentWithoutMention​(String commentWithoutMention)
```


---

### isMention

```java
public boolean isMention()
```


---

### setMention

```java
public void setMention​(boolean mention)
```


---

### getMentions

```java
public Map<String,​String> getMentions()
```


---

### setMentions

```java
public void setMentions​(Map<String,​String> mentions)
```


---

### getCustomData

```java
public Map<String,​String> getCustomData()
```


---

### setCustomData

```java
public void setCustomData​(Map<String,​String> customData)
```


---

### getUserName

```java
public String getUserName()
```


---

### setUserName

```java
public void setUserName​(String userName)
```


---

### getUserAlias

```java
public String getUserAlias()
```


---

### setUserAlias

```java
public void setUserAlias​(String userAlias)
```


---

### getSociableParentId

```java
public Long getSociableParentId()
```


---

### setSociableParentId

```java
public void setSociableParentId​(Long sociableParentId)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

### hashCode

```java
public int hashCode()
```

- **Overrides:** `` `hashCode` `` in class `` `Object` ``

---

### equals

```java
public boolean equals​(Object obj)
```

- **Overrides:** `` `equals` `` in class `` `Object` ``

---

# Class CommunityVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommunityVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CommunityVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.CommunityVO
```

```java
public class CommunityVO
extends Object
implements Serializable
```

Value Object para Community

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CommunityVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAdminAlias()` | Recupera valor do adminAlias |
| `String` | `getAlias()` | Recupera valor do alias |
| `Boolean` | `getApprovalRequired()` | Recupera valor do approvalRequired |
| `Boolean` | `getCreateForum()` |  |
| `String` | `getDescription()` | Recupera valor do description |
| `Map<String,​Object>` | `getEcmInfo()` | Recupera valor do ecmInfo |
| `Boolean` | `getHidden()` | Recupera valor do hidden |
| `Long` | `getId()` | Recupera valor do id |
| `String` | `getName()` | Recupera valor do name |
| `Boolean` | `getPrivateContent()` | Recupera valor do privateContent |
| `void` | `setAdminAlias​(String adminAlias)` | Atribui valor para adminAlias |
| `void` | `setAlias​(String alias)` | Atribui valor para alias |
| `void` | `setApprovalRequired​(Boolean approvalRequired)` | Atribui valor para approvalRequired |
| `void` | `setCreateForum​(Boolean createForum)` |  |
| `void` | `setDescription​(String description)` | Atribui valor para description |
| `void` | `setEcmInfo​(Map<String,​Object> ecmInfo)` | Atribui valor para ecmInfo |
| `void` | `setHidden​(Boolean hidden)` | Atribui valor para hidden |
| `void` | `setId​(Long id)` | Atribui valor para id |
| `void` | `setName​(String name)` | Atribui valor para name |
| `void` | `setPrivateContent​(Boolean privateContent)` | Atribui valor para privateContent |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### CommunityVO

```java
public CommunityVO()
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```

Recupera valor do id

- **Returns:** the id

---

### setId

```java
public void setId​(Long id)
```

Atribui valor para id

- **Parameters:** `id` - the id to set

---

### getAlias

```java
public String getAlias()
```

Recupera valor do alias

- **Returns:** the alias

---

### setAlias

```java
public void setAlias​(String alias)
```

Atribui valor para alias

- **Parameters:** `alias` - the alias to set

---

### getName

```java
public String getName()
```

Recupera valor do name

- **Returns:** the name

---

### setName

```java
public void setName​(String name)
```

Atribui valor para name

- **Parameters:** `name` - the name to set

---

### getDescription

```java
public String getDescription()
```

Recupera valor do description

- **Returns:** the description

---

### setDescription

```java
public void setDescription​(String description)
```

Atribui valor para description

- **Parameters:** `description` - the description to set

---

### getAdminAlias

```java
public String getAdminAlias()
```

Recupera valor do adminAlias

- **Returns:** the adminAlias

---

### setAdminAlias

```java
public void setAdminAlias​(String adminAlias)
```

Atribui valor para adminAlias

- **Parameters:** `adminAlias` - the adminAlias to set

---

### getHidden

```java
public Boolean getHidden()
```

Recupera valor do hidden

- **Returns:** the hidden

---

### setHidden

```java
public void setHidden​(Boolean hidden)
```

Atribui valor para hidden

- **Parameters:** `hidden` - the hidden to set

---

### getPrivateContent

```java
public Boolean getPrivateContent()
```

Recupera valor do privateContent

- **Returns:** the privateContent

---

### setPrivateContent

```java
public void setPrivateContent​(Boolean privateContent)
```

Atribui valor para privateContent

- **Parameters:** `privateContent` - the privateContent to set

---

### getApprovalRequired

```java
public Boolean getApprovalRequired()
```

Recupera valor do approvalRequired

- **Returns:** the approvalRequired

---

### setApprovalRequired

```java
public void setApprovalRequired​(Boolean approvalRequired)
```

Atribui valor para approvalRequired

- **Parameters:** `approvalRequired` - the approvalRequired to set

---

### getEcmInfo

```java
public Map<String,​Object> getEcmInfo()
```

Recupera valor do ecmInfo

- **Returns:** the ecmInfo

---

### setEcmInfo

```java
public void setEcmInfo​(Map<String,​Object> ecmInfo)
```

Atribui valor para ecmInfo

- **Parameters:** `ecmInfo` - the ecmInfo to set

---

### getCreateForum

```java
public Boolean getCreateForum()
```


---

### setCreateForum

```java
public void setCreateForum​(Boolean createForum)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---

# Class CropVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CropVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/CropVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.CropVO
```

```java
public class CropVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `CropVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `int` | `getHeight()` |  |
| `int` | `getLeft()` |  |
| `int` | `getTop()` |  |
| `int` | `getWidth()` |  |
| `void` | `setHeight​(int height)` |  |
| `void` | `setLeft​(int left)` |  |
| `void` | `setTop​(int top)` |  |
| `void` | `setWidth​(int width)` |  |


---

## Detalhes dos Construtores

### CropVO

```java
public CropVO()
```



## Detalhes dos Métodos

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

### getLeft

```java
public int getLeft()
```


---

### setLeft

```java
public void setLeft​(int left)
```


---

### getTop

```java
public int getTop()
```


---

### setTop

```java
public void setTop​(int top)
```

---

# Class MediaVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/MediaVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/MediaVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.MediaVO
```

```java
public class MediaVO
extends Object
implements Serializable
```

Value Object para Media

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** rogerio.angeliski
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `MediaVO()` |  |
| `MediaVO​(String mediaName, String mediaType, String mediaId)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getMediaId()` |  |
| `String` | `getMediaName()` |  |
| `String` | `getMediaType()` |  |
| `Integer` | `getMediaVersion()` |  |
| `void` | `setMediaId​(String mediaId)` |  |
| `void` | `setMediaName​(String mediaName)` |  |
| `void` | `setMediaType​(String mediaType)` |  |
| `void` | `setMediaVersion​(Integer mediaVersion)` |  |


---

## Detalhes dos Construtores

### MediaVO

```java
public MediaVO()
```


---

### MediaVO

```java
public MediaVO​(String mediaName,
               String mediaType,
               String mediaId)
```



## Detalhes dos Métodos

### getMediaName

```java
public String getMediaName()
```


---

### setMediaName

```java
public void setMediaName​(String mediaName)
```


---

### getMediaType

```java
public String getMediaType()
```


---

### setMediaType

```java
public void setMediaType​(String mediaType)
```


---

### getMediaId

```java
public String getMediaId()
```


---

### setMediaId

```java
public void setMediaId​(String mediaId)
```


---

### getMediaVersion

```java
public Integer getMediaVersion()
```


---

### setMediaVersion

```java
public void setMediaVersion​(Integer mediaVersion)
```

---

# Class PostVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/PostVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.PostVO
```

```java
public class PostVO
extends Object
implements Serializable
```

Value Object para Post

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `PostVO()` |  |
| `PostVO​(String text, String visibility, String alias, List<Long> customUsers, Long sociableObjectId)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getAlias()` | Recupera valor do alias |
| `List<Long>` | `getCustomUsers()` | Recupera valor do customUsers |
| `Long` | `getId()` | Recupera valor do id |
| `MediaVO` | `getMediaVO()` | Recupera o valor do |
| `Long` | `getSociableObjectId()` | Recupera valor do sociableObjectId |
| `String` | `getText()` | Recupera valor do text |
| `String` | `getVisibility()` | Recupera valor do visibility |
| `void` | `setAlias​(String alias)` | Atribui valor para alias |
| `void` | `setCustomUsers​(List<Long> customUsers)` | Atribui valor para customUsers |
| `void` | `setId​(Long id)` | Atribui valor para id |
| `void` | `setMediaVO​(MediaVO mediaVO)` | * Atribui valor para mediaVO |
| `void` | `setSociableObjectId​(Long sociableObjectId)` | Atribui valor para sociableObjectId |
| `void` | `setText​(String text)` | Atribui valor para text |
| `void` | `setVisibility​(String visibility)` | Atribui valor para visibility |


---

## Detalhes dos Construtores

### PostVO

```java
public PostVO()
```


---

### PostVO

```java
public PostVO​(String text,
              String visibility,
              String alias,
              List<Long> customUsers,
              Long sociableObjectId)
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```

Recupera valor do id

- **Returns:** the id

---

### setId

```java
public void setId​(Long id)
```

Atribui valor para id

- **Parameters:** `id` - the id to set

---

### getText

```java
public String getText()
```

Recupera valor do text

- **Returns:** the text

---

### setText

```java
public void setText​(String text)
```

Atribui valor para text

- **Parameters:** `text` - the text to set

---

### getVisibility

```java
public String getVisibility()
```

Recupera valor do visibility

- **Returns:** the visibility

---

### setVisibility

```java
public void setVisibility​(String visibility)
```

Atribui valor para visibility

- **Parameters:** `visibility` - the visibility to set

---

### getAlias

```java
public String getAlias()
```

Recupera valor do alias

- **Returns:** the alias

---

### setAlias

```java
public void setAlias​(String alias)
```

Atribui valor para alias

- **Parameters:** `alias` - the alias to set

---

### getCustomUsers

```java
public List<Long> getCustomUsers()
```

Recupera valor do customUsers

- **Returns:** the customUsers

---

### setCustomUsers

```java
public void setCustomUsers​(List<Long> customUsers)
```

Atribui valor para customUsers

- **Parameters:** `customUsers` - the customUsers to set

---

### getSociableObjectId

```java
public Long getSociableObjectId()
```

Recupera valor do sociableObjectId

- **Returns:** the sociableObjectId

---

### setSociableObjectId

```java
public void setSociableObjectId​(Long sociableObjectId)
```

Atribui valor para sociableObjectId

- **Parameters:** `sociableObjectId` - the sociableObjectId to set

---

### getMediaVO

```java
public MediaVO getMediaVO()
```

Recupera o valor do

- **Returns:** the mediaVO

---

### setMediaVO

```java
public void setMediaVO​(MediaVO mediaVO)
```

\* Atribui valor para mediaVO

- **Parameters:** `mediaVO` - the mediaVO to set

---

# Class SociableVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SociableVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SociableVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.SociableVO
```

```java
public class SociableVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `SociableVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `boolean` | `equals​(Object obj)` |  |
| `String` | `getAlias()` |  |
| `Long` | `getId()` |  |
| `String` | `getName()` |  |
| `Integer` | `getNumberComments()` |  |
| `Integer` | `getNumberDenouncements()` |  |
| `Integer` | `getNumberLikes()` |  |
| `Integer` | `getNumberShares()` |  |
| `String` | `getObjectClass()` |  |
| `String` | `getObjectId()` |  |
| `String` | `getSociableType()` |  |
| `String` | `getTags()` |  |
| `String` | `getThumbURL()` |  |
| `String` | `getUrl()` |  |
| `Long` | `getUserId()` |  |
| `int` | `hashCode()` |  |
| `void` | `setAlias​(String alias)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setName​(String name)` |  |
| `void` | `setNumberComments​(Integer numberComments)` |  |
| `void` | `setNumberDenouncements​(Integer numberDenouncements)` |  |
| `void` | `setNumberLikes​(Integer numberLikes)` |  |
| `void` | `setNumberShares​(Integer numberShares)` |  |
| `void` | `setObjectClass​(String objectClass)` |  |
| `void` | `setObjectId​(String objectId)` |  |
| `void` | `setSociableType​(String sociableType)` |  |
| `void` | `setTags​(String tags)` |  |
| `void` | `setThumbURL​(String thumbURL)` |  |
| `void` | `setUrl​(String url)` |  |
| `void` | `setUserId​(Long userId)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### SociableVO

```java
public SociableVO()
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```


---

### setId

```java
public void setId​(Long id)
```


---

### getNumberLikes

```java
public Integer getNumberLikes()
```


---

### setNumberLikes

```java
public void setNumberLikes​(Integer numberLikes)
```


---

### getNumberShares

```java
public Integer getNumberShares()
```


---

### setNumberShares

```java
public void setNumberShares​(Integer numberShares)
```


---

### getNumberComments

```java
public Integer getNumberComments()
```


---

### setNumberComments

```java
public void setNumberComments​(Integer numberComments)
```


---

### getNumberDenouncements

```java
public Integer getNumberDenouncements()
```


---

### setNumberDenouncements

```java
public void setNumberDenouncements​(Integer numberDenouncements)
```


---

### getTags

```java
public String getTags()
```


---

### setTags

```java
public void setTags​(String tags)
```


---

### getUrl

```java
public String getUrl()
```


---

### setUrl

```java
public void setUrl​(String url)
```


---

### setSociableType

```java
public void setSociableType​(String sociableType)
```


---

### getSociableType

```java
public String getSociableType()
```


---

### setObjectClass

```java
public void setObjectClass​(String objectClass)
```


---

### getObjectClass

```java
public String getObjectClass()
```


---

### setObjectId

```java
public void setObjectId​(String objectId)
```


---

### getObjectId

```java
public String getObjectId()
```


---

### setThumbURL

```java
public void setThumbURL​(String thumbURL)
```


---

### getThumbURL

```java
public String getThumbURL()
```


---

### setName

```java
public void setName​(String name)
```


---

### getName

```java
public String getName()
```


---

### setUserId

```java
public void setUserId​(Long userId)
```


---

### getUserId

```java
public Long getUserId()
```


---

### getAlias

```java
public String getAlias()
```


---

### setAlias

```java
public void setAlias​(String alias)
```


---

### hashCode

```java
public int hashCode()
```

- **Overrides:** `` `hashCode` `` in class `` `Object` ``

---

### equals

```java
public boolean equals​(Object obj)
```

- **Overrides:** `` `equals` `` in class `` `Object` ``

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``
- **See Also:** ``Object.toString()``

---

# Class SocialBreadcrumbItemVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialBreadcrumbItemVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialBreadcrumbItemVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.SocialBreadcrumbItemVO
```

```java
public class SocialBreadcrumbItemVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `SocialBreadcrumbItemVO​(String url, String description)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDescription()` | Recupera o valor do field description |
| `String` | `getUrl()` | Recupera o valor do field url |
| `void` | `setDescription​(String description)` | Setado o valor do field description |
| `void` | `setUrl​(String url)` | Setado o valor do field url |


---

## Detalhes dos Construtores

### SocialBreadcrumbItemVO

```java
public SocialBreadcrumbItemVO​(String url,
                              String description)
```



## Detalhes dos Métodos

### getUrl

```java
public String getUrl()
```

Recupera o valor do field url

- **Returns:** the url

---

### setUrl

```java
public void setUrl​(String url)
```

Setado o valor do field url

- **Parameters:** `url` - o url que será setado

---

### getDescription

```java
public String getDescription()
```

Recupera o valor do field description

- **Returns:** the description

---

### setDescription

```java
public void setDescription​(String description)
```

Setado o valor do field description

- **Parameters:** `description` - o description que será setado

---

# Class SocialBreadcrumbVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialBreadcrumbVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialBreadcrumbVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.SocialBreadcrumbVO
```

```java
public class SocialBreadcrumbVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `SocialBreadcrumbVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<SocialBreadcrumbItemVO>` | `getItems()` |  |
| `Map<String,​String>` | `getMap()` |  |
| `void` | `setItems​(List<SocialBreadcrumbItemVO> items)` |  |
| `void` | `setMap​(Map<String,​String> map)` |  |


---

## Detalhes dos Construtores

### SocialBreadcrumbVO

```java
public SocialBreadcrumbVO()
```



## Detalhes dos Métodos

### getItems

```java
public List<SocialBreadcrumbItemVO> getItems()
```


---

### setItems

```java
public void setItems​(List<SocialBreadcrumbItemVO> items)
```


---

### setMap

```java
public void setMap​(Map<String,​String> map)
```


---

### getMap

```java
public Map<String,​String> getMap()
```

---

# Class SocialVO

> **Pacote:** `com.fluig.sdk.api.social`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/social/SocialVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.social.SocialVO
```

```java
public class SocialVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `SocialVO()` | Default constructor. |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `boolean` | `equals​(Object obj)` |  |
| `String` | `getAlias()` |  |
| `Date` | `getCreateDate()` |  |
| `Boolean` | `getCustomPage()` |  |
| `String` | `getDescription()` |  |
| `String` | `getEmail()` |  |
| `Boolean` | `getFavorite()` |  |
| `String` | `getFullName()` |  |
| `Long` | `getId()` |  |
| `Boolean` | `getIsAdmin()` |  |
| `Boolean` | `getIsCommunityAdmin()` |  |
| `Boolean` | `getIsModerator()` |  |
| `String` | `getLastName()` |  |
| `Date` | `getLastUpdate()` |  |
| `String` | `getName()` |  |
| `Integer` | `getNumberFollowers()` |  |
| `Integer` | `getNumberFollowing()` |  |
| `Integer` | `getNumberFriends()` |  |
| `Integer` | `getNumberModerations()` |  |
| `Integer` | `getNumberParticipations()` |  |
| `Long` | `getTenantId()` |  |
| `Map<String,​String>` | `getUserData()` |  |
| `int` | `hashCode()` |  |
| `Boolean` | `isApprovalRequired()` |  |
| `Boolean` | `isHidden()` |  |
| `Boolean` | `isPrivateContent()` |  |
| `Boolean` | `isTenantAdmin()` |  |
| `void` | `setAlias​(String alias)` |  |
| `void` | `setApprovalRequired​(Boolean approvalRequired)` |  |
| `void` | `setCreateDate​(Date createDate)` |  |
| `void` | `setCustomPage​(Boolean customPage)` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setEmail​(String email)` |  |
| `void` | `setFavorite​(Boolean favorite)` |  |
| `void` | `setFullName​(String fullName)` |  |
| `void` | `setHidden​(Boolean hidden)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setIsAdmin​(Boolean isAdmin)` |  |
| `void` | `setIsCommunityAdmin​(Boolean isCommunityAdmin)` |  |
| `void` | `setIsModerator​(Boolean isModerator)` |  |
| `void` | `setLastName​(String lastName)` |  |
| `void` | `setLastUpdate​(Date lastUpdate)` |  |
| `void` | `setName​(String name)` |  |
| `void` | `setNumberFollowers​(Integer numberFollowers)` |  |
| `void` | `setNumberFollowing​(Integer numberFollowing)` |  |
| `void` | `setNumberFriends​(Integer numberFriends)` |  |
| `void` | `setNumberModerations​(Integer numberModerations)` |  |
| `void` | `setNumberParticipations​(Integer numberParticipations)` |  |
| `void` | `setPrivateContent​(Boolean privateContent)` |  |
| `void` | `setTenantAdmin​(Boolean tenantAdmin)` |  |
| `void` | `setTenantId​(Long tenantId)` |  |
| `void` | `setUserData​(Map<String,​String> userData)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### SocialVO

```java
public SocialVO()
```

Default constructor.



## Detalhes dos Métodos

### getId

```java
public Long getId()
```


---

### setId

```java
public void setId​(Long id)
```


---

### getName

```java
public String getName()
```


---

### setName

```java
public void setName​(String name)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```


---

### getAlias

```java
public String getAlias()
```


---

### setAlias

```java
public void setAlias​(String alias)
```


---

### getNumberFriends

```java
public Integer getNumberFriends()
```


---

### setNumberFriends

```java
public void setNumberFriends​(Integer numberFriends)
```


---

### getNumberParticipations

```java
public Integer getNumberParticipations()
```


---

### setNumberParticipations

```java
public void setNumberParticipations​(Integer numberParticipations)
```


---

### getNumberFollowing

```java
public Integer getNumberFollowing()
```


---

### setNumberFollowing

```java
public void setNumberFollowing​(Integer numberFollowing)
```


---

### getNumberFollowers

```java
public Integer getNumberFollowers()
```


---

### setNumberFollowers

```java
public void setNumberFollowers​(Integer numberFollowers)
```


---

### getNumberModerations

```java
public Integer getNumberModerations()
```

- **Returns:** the numberModerations

---

### setNumberModerations

```java
public void setNumberModerations​(Integer numberModerations)
```

- **Parameters:** `numberModerations` - the numberModerations to set

---

### isHidden

```java
public Boolean isHidden()
```

- **Returns:** the hidden

---

### setHidden

```java
public void setHidden​(Boolean hidden)
```

- **Parameters:** `hidden` - the hidden to set

---

### isPrivateContent

```java
public Boolean isPrivateContent()
```

- **Returns:** the privateContent

---

### setPrivateContent

```java
public void setPrivateContent​(Boolean privateContent)
```

- **Parameters:** `privateContent` - the privateContent to set

---

### isApprovalRequired

```java
public Boolean isApprovalRequired()
```

- **Returns:** the approvalRequired

---

### setApprovalRequired

```java
public void setApprovalRequired​(Boolean approvalRequired)
```

- **Parameters:** `approvalRequired` - the approvalRequired to set

---

### getIsModerator

```java
public Boolean getIsModerator()
```


---

### setIsModerator

```java
public void setIsModerator​(Boolean isModerator)
```


---

### getIsAdmin

```java
public Boolean getIsAdmin()
```


---

### setIsAdmin

```java
public void setIsAdmin​(Boolean isAdmin)
```


---

### getIsCommunityAdmin

```java
public Boolean getIsCommunityAdmin()
```


---

### setIsCommunityAdmin

```java
public void setIsCommunityAdmin​(Boolean isCommunityAdmin)
```


---

### setTenantId

```java
public void setTenantId​(Long tenantId)
```


---

### getTenantId

```java
public Long getTenantId()
```


---

### getLastUpdate

```java
public Date getLastUpdate()
```


---

### setLastUpdate

```java
public void setLastUpdate​(Date lastUpdate)
```


---

### getCreateDate

```java
public Date getCreateDate()
```

- **Returns:** the createDate

---

### setCreateDate

```java
public void setCreateDate​(Date createDate)
```

- **Parameters:** `createDate` - the createDate to set

---

### getCustomPage

```java
public Boolean getCustomPage()
```


---

### setCustomPage

```java
public void setCustomPage​(Boolean customPage)
```


---

### getFavorite

```java
public Boolean getFavorite()
```


---

### setFavorite

```java
public void setFavorite​(Boolean favorite)
```


---

### isTenantAdmin

```java
public Boolean isTenantAdmin()
```


---

### setTenantAdmin

```java
public void setTenantAdmin​(Boolean tenantAdmin)
```


---

### getUserData

```java
public Map<String,​String> getUserData()
```


---

### setUserData

```java
public void setUserData​(Map<String,​String> userData)
```


---

### getEmail

```java
public String getEmail()
```


---

### setEmail

```java
public void setEmail​(String email)
```


---

### getLastName

```java
public String getLastName()
```


---

### getFullName

```java
public String getFullName()
```


---

### setLastName

```java
public void setLastName​(String lastName)
```


---

### setFullName

```java
public void setFullName​(String fullName)
```


---

### hashCode

```java
public int hashCode()
```

- **Overrides:** `` `hashCode` `` in class `` `Object` ``

---

### equals

```java
public boolean equals​(Object obj)
```

- **Overrides:** `` `equals` `` in class `` `Object` ``

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---
