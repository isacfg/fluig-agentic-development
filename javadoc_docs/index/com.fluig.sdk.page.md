# com.fluig.sdk.page

> **3 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/page/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/page/package-summary.html)

---

VO para retornar ara servidço da api publica.

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class PageMobileApiVO](#class-pagemobileapivo)
- [Class PageWidgetMobileApiVO](#class-pagewidgetmobileapivo)
- [Class PublicApiPageVO](#class-publicapipagevo)

---

# Class PageMobileApiVO

> **Pacote:** `com.fluig.sdk.page`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/page/PageMobileApiVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/page/PageMobileApiVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.page.PageMobileApiVO
```

```java
public class PageMobileApiVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `PageMobileApiVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCode()` |  |
| `String` | `getTitle()` |  |
| `List<PageWidgetMobileApiVO>` | `getWidgets()` |  |
| `boolean` | `isMobileEnabled()` |  |
| `PageMobileApiVO` | `setCode​(String code)` |  |
| `PageMobileApiVO` | `setMobileEnabled​(boolean mobileEnabled)` |  |
| `PageMobileApiVO` | `setTitle​(String title)` |  |
| `PageMobileApiVO` | `setWidgets​(List<PageWidgetMobileApiVO> widgets)` |  |


---

## Detalhes dos Construtores

### PageMobileApiVO

```java
public PageMobileApiVO()
```



## Detalhes dos Métodos

### getCode

```java
public String getCode()
```


---

### setCode

```java
public PageMobileApiVO setCode​(String code)
```


---

### getTitle

```java
public String getTitle()
```


---

### setTitle

```java
public PageMobileApiVO setTitle​(String title)
```


---

### isMobileEnabled

```java
public boolean isMobileEnabled()
```


---

### setMobileEnabled

```java
public PageMobileApiVO setMobileEnabled​(boolean mobileEnabled)
```


---

### getWidgets

```java
public List<PageWidgetMobileApiVO> getWidgets()
```


---

### setWidgets

```java
public PageMobileApiVO setWidgets​(List<PageWidgetMobileApiVO> widgets)
```

---

# Class PageWidgetMobileApiVO

> **Pacote:** `com.fluig.sdk.page`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/page/PageWidgetMobileApiVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/page/PageWidgetMobileApiVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.page.PageWidgetMobileApiVO
```

```java
public class PageWidgetMobileApiVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `PageWidgetMobileApiVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCode()` |  |
| `Long` | `getId()` |  |
| `Long` | `getOrder()` |  |
| `String` | `getSlot()` |  |
| `boolean` | `isMobileEnabled()` |  |
| `PageWidgetMobileApiVO` | `setCode​(String code)` |  |
| `PageWidgetMobileApiVO` | `setId​(Long id)` |  |
| `PageWidgetMobileApiVO` | `setMobileEnabled​(boolean mobileEnabled)` |  |
| `PageWidgetMobileApiVO` | `setOrder​(Long order)` |  |
| `PageWidgetMobileApiVO` | `setSlot​(String slot)` |  |


---

## Detalhes dos Construtores

### PageWidgetMobileApiVO

```java
public PageWidgetMobileApiVO()
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```


---

### setId

```java
public PageWidgetMobileApiVO setId​(Long id)
```


---

### getSlot

```java
public String getSlot()
```


---

### setSlot

```java
public PageWidgetMobileApiVO setSlot​(String slot)
```


---

### getOrder

```java
public Long getOrder()
```


---

### setOrder

```java
public PageWidgetMobileApiVO setOrder​(Long order)
```


---

### getCode

```java
public String getCode()
```


---

### setCode

```java
public PageWidgetMobileApiVO setCode​(String code)
```


---

### isMobileEnabled

```java
public boolean isMobileEnabled()
```


---

### setMobileEnabled

```java
public PageWidgetMobileApiVO setMobileEnabled​(boolean mobileEnabled)
```

---

# Class PublicApiPageVO

> **Pacote:** `com.fluig.sdk.page`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/page/PublicApiPageVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/page/PublicApiPageVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.page.PublicApiPageVO
```

```java
public class PublicApiPageVO
extends Object
implements Serializable
```

VO para retornar ara servidço da api publica.

- **All Implemented Interfaces:** Serializable
- **Author:** George
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `PublicApiPageVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<PublicApiPageVO>` | `getChildren()` |  |
| `String` | `getDescription()` |  |
| `Boolean` | `getEnabledMobileApp()` |  |
| `String` | `getFriendlyURL()` |  |
| `String` | `getIconFont()` |  |
| `Long` | `getLastUpdate()` |  |
| `String` | `getPageCode()` |  |
| `String` | `getPageIcon()` |  |
| `Long` | `getPageId()` |  |
| `String` | `getParentPageCode()` |  |
| `int` | `getSearchLevel()` |  |
| `String` | `getTitle()` |  |
| `String` | `getUri()` |  |
| `void` | `setChildren​(List<PublicApiPageVO> children)` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setEnabledMobileApp​(Boolean enabledMobileApp)` |  |
| `void` | `setFriendlyURL​(String friendlyURL)` |  |
| `PublicApiPageVO` | `setIconFont​(String iconFont)` |  |
| `void` | `setLastUpdate​(Long lastUpdate)` |  |
| `void` | `setPageCode​(String pageCode)` |  |
| `void` | `setPageIcon​(String pageIcon)` |  |
| `void` | `setPageId​(Long pageId)` |  |
| `void` | `setParentPageCode​(String parentPageCode)` |  |
| `void` | `setSearchLevel​(int searchLevel)` |  |
| `void` | `setTitle​(String title)` |  |
| `void` | `setUri​(String uri)` |  |


---

## Detalhes dos Construtores

### PublicApiPageVO

```java
public PublicApiPageVO()
```



## Detalhes dos Métodos

### getPageId

```java
public Long getPageId()
```


---

### setPageId

```java
public void setPageId​(Long pageId)
```


---

### getTitle

```java
public String getTitle()
```


---

### setTitle

```java
public void setTitle​(String title)
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

### getSearchLevel

```java
public int getSearchLevel()
```


---

### setSearchLevel

```java
public void setSearchLevel​(int searchLevel)
```


---

### getPageCode

```java
public String getPageCode()
```


---

### setPageCode

```java
public void setPageCode​(String pageCode)
```


---

### getChildren

```java
public List<PublicApiPageVO> getChildren()
```


---

### setChildren

```java
public void setChildren​(List<PublicApiPageVO> children)
```


---

### getParentPageCode

```java
public String getParentPageCode()
```


---

### setParentPageCode

```java
public void setParentPageCode​(String parentPageCode)
```


---

### getUri

```java
public String getUri()
```


---

### setUri

```java
public void setUri​(String uri)
```


---

### getFriendlyURL

```java
public String getFriendlyURL()
```


---

### setFriendlyURL

```java
public void setFriendlyURL​(String friendlyURL)
```


---

### getPageIcon

```java
public String getPageIcon()
```


---

### setPageIcon

```java
public void setPageIcon​(String pageIcon)
```


---

### getEnabledMobileApp

```java
public Boolean getEnabledMobileApp()
```


---

### setEnabledMobileApp

```java
public void setEnabledMobileApp​(Boolean enabledMobileApp)
```


---

### getLastUpdate

```java
public Long getLastUpdate()
```


---

### setLastUpdate

```java
public void setLastUpdate​(Long lastUpdate)
```


---

### getIconFont

```java
public String getIconFont()
```


---

### setIconFont

```java
public PublicApiPageVO setIconFont​(String iconFont)
```

---
