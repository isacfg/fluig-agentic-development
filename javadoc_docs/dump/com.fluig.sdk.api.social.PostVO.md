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

