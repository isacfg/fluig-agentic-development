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

