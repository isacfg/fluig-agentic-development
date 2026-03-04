# com.fluig.sdk.api.search

> **2 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/package-summary.html)

---

Value Object for Influencers

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class DefaultSearchRequest](#class-defaultsearchrequest)
- [Class DefaultSearchResponse](#class-defaultsearchresponse)

---

# Class DefaultSearchRequest

> **Pacote:** `com.fluig.sdk.api.search`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchRequest.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.search.DefaultSearchRequest
```

```java
public class DefaultSearchRequest
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DefaultSearchRequest()` |  |
| `DefaultSearchRequest​(String pattern)` |  |
| `DefaultSearchRequest​(String pattern, String ordering, int limit, int offset)` |  |
| `DefaultSearchRequest​(String pattern, String searchType, String ordering, int limit, int offset)` |  |
| `DefaultSearchRequest​(String searchType, String pattern, Date startPeriod, Date endPeriod, com.totvs.technology.foundation.indexer.common.DateGap period, String ordering, int limit, int offset)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Date` | `getEndPeriod()` |  |
| `int` | `getLimit()` |  |
| `int` | `getOffset()` |  |
| `String` | `getOrdering()` |  |
| `String` | `getPattern()` |  |
| `com.totvs.technology.foundation.indexer.common.DateGap` | `getPeriod()` |  |
| `String` | `getSearchType()` |  |
| `Date` | `getStartPeriod()` |  |
| `void` | `setEndPeriod​(Date endPeriod)` |  |
| `void` | `setLimit​(int limit)` |  |
| `void` | `setOffset​(int offset)` |  |
| `void` | `setOrdering​(String ordering)` |  |
| `void` | `setPattern​(String pattern)` |  |
| `void` | `setPeriod​(com.totvs.technology.foundation.indexer.common.DateGap period)` |  |
| `void` | `setSearchType​(String searchType)` |  |
| `void` | `setStartPeriod​(Date startPeriod)` |  |


---

## Detalhes dos Construtores

### DefaultSearchRequest

```java
public DefaultSearchRequest()
```


---

### DefaultSearchRequest

```java
public DefaultSearchRequest​(String pattern,
                            String ordering,
                            int limit,
                            int offset)
```


---

### DefaultSearchRequest

```java
public DefaultSearchRequest​(String pattern,
                            String searchType,
                            String ordering,
                            int limit,
                            int offset)
```


---

### DefaultSearchRequest

```java
public DefaultSearchRequest​(String searchType,
                            String pattern,
                            Date startPeriod,
                            Date endPeriod,
                            com.totvs.technology.foundation.indexer.common.DateGap period,
                            String ordering,
                            int limit,
                            int offset)
```


---

### DefaultSearchRequest

```java
public DefaultSearchRequest​(String pattern)
```



## Detalhes dos Métodos

### getSearchType

```java
public String getSearchType()
```


---

### setSearchType

```java
public void setSearchType​(String searchType)
```


---

### getPattern

```java
public String getPattern()
```


---

### setPattern

```java
public void setPattern​(String pattern)
```


---

### getStartPeriod

```java
public Date getStartPeriod()
```


---

### setStartPeriod

```java
public void setStartPeriod​(Date startPeriod)
```


---

### getEndPeriod

```java
public Date getEndPeriod()
```


---

### setEndPeriod

```java
public void setEndPeriod​(Date endPeriod)
```


---

### getPeriod

```java
public com.totvs.technology.foundation.indexer.common.DateGap getPeriod()
```


---

### setPeriod

```java
public void setPeriod​(com.totvs.technology.foundation.indexer.common.DateGap period)
```


---

### getOrdering

```java
public String getOrdering()
```


---

### setOrdering

```java
public void setOrdering​(String ordering)
```


---

### getLimit

```java
public int getLimit()
```


---

### setLimit

```java
public void setLimit​(int limit)
```


---

### getOffset

```java
public int getOffset()
```


---

### setOffset

```java
public void setOffset​(int offset)
```

---

# Class DefaultSearchResponse

> **Pacote:** `com.fluig.sdk.api.search`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchResponse.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/search/DefaultSearchResponse.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.search.DefaultSearchResponse
```

```java
public class DefaultSearchResponse
extends Object
implements Serializable
```

Value Object for Influencers

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DefaultSearchResponse()` |  |
| `DefaultSearchResponse​(ArrayList<Map<String,​Object>> items)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<Map<String,​Object>>` | `getItems()` |  |
| `int` | `getOffset()` |  |
| `Long` | `getTimeElapsed()` |  |
| `Long` | `getTotalHits()` |  |
| `boolean` | `isSolrAvailable()` |  |
| `void` | `setItems​(List<Map<String,​Object>> items)` |  |
| `void` | `setOffset​(int offset)` |  |
| `void` | `setSolrAvailable​(boolean solrAvailable)` |  |
| `void` | `setTimeElapsed​(Long timeElapsed)` |  |
| `void` | `setTotalHits​(Long totalHits)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### DefaultSearchResponse

```java
public DefaultSearchResponse()
```


---

### DefaultSearchResponse

```java
public DefaultSearchResponse​(ArrayList<Map<String,​Object>> items)
```



## Detalhes dos Métodos

### getTimeElapsed

```java
public Long getTimeElapsed()
```


---

### setTimeElapsed

```java
public void setTimeElapsed​(Long timeElapsed)
```


---

### getTotalHits

```java
public Long getTotalHits()
```


---

### setTotalHits

```java
public void setTotalHits​(Long totalHits)
```


---

### getOffset

```java
public int getOffset()
```


---

### setOffset

```java
public void setOffset​(int offset)
```


---

### isSolrAvailable

```java
public boolean isSolrAvailable()
```


---

### setSolrAvailable

```java
public void setSolrAvailable​(boolean solrAvailable)
```


---

### getItems

```java
public List<Map<String,​Object>> getItems()
```


---

### setItems

```java
public void setItems​(List<Map<String,​Object>> items)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---
