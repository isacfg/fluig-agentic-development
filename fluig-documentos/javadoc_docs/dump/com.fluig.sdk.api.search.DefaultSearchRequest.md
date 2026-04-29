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


