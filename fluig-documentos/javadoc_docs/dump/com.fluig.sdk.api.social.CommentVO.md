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

