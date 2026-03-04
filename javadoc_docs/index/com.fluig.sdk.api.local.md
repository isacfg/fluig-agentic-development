# com.fluig.sdk.api.local

> **2 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/package-summary.html)

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class LocalUserVO](#class-localuservo)
- [Class LocalVO](#class-localvo)

---

# Class LocalUserVO

> **Pacote:** `com.fluig.sdk.api.local`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalUserVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.local.LocalUserVO
```

```java
public class LocalUserVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `LocalUserVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Long` | `getId()` |  |
| `Long` | `getLocalId()` |  |
| `String` | `getUserCode()` |  |
| `String` | `getUserName()` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setLocalId​(Long localId)` |  |
| `void` | `setUserCode​(String userCode)` |  |
| `void` | `setUserName​(String userName)` |  |


---

## Detalhes dos Construtores

### LocalUserVO

```java
public LocalUserVO()
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

### getUserCode

```java
public String getUserCode()
```


---

### setUserCode

```java
public void setUserCode​(String userCode)
```


---

### getUserName

```java
public String getUserName()
```


---

### getLocalId

```java
public Long getLocalId()
```


---

### setLocalId

```java
public void setLocalId​(Long localId)
```


---

### setUserName

```java
public void setUserName​(String userName)
```

---

# Class LocalVO

> **Pacote:** `com.fluig.sdk.api.local`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/local/LocalVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.local.LocalVO
```

```java
public class LocalVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `LocalVO()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `boolean` | `equals​(Object o)` |  |
| `List<String>` | `getExpandables()` |  |
| `List<HolidayVO>` | `getHolidays()` |  |
| `Long` | `getId()` |  |
| `double` | `getLatitude()` |  |
| `List<LocalUserVO>` | `getLocalUsers()` |  |
| `double` | `getLongitude()` |  |
| `String` | `getName()` |  |
| `double` | `getRadius()` |  |
| `String` | `getTimezone()` |  |
| `int` | `hashCode()` |  |
| `boolean` | `isDefaultLocale()` |  |
| `void` | `setDefaultLocale​(boolean defaultLocale)` |  |
| `void` | `setExpandables​(List<String> expandables)` |  |
| `void` | `setHolidays​(List<HolidayVO> holidays)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setLatitude​(double latitude)` |  |
| `void` | `setLocalUsers​(List<LocalUserVO> localUsers)` |  |
| `void` | `setLongitude​(double longitude)` |  |
| `void` | `setName​(String name)` |  |
| `void` | `setRadius​(double radius)` |  |
| `void` | `setTimezone​(String timezone)` |  |


---

## Detalhes dos Construtores

### LocalVO

```java
public LocalVO()
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

### getTimezone

```java
public String getTimezone()
```


---

### setTimezone

```java
public void setTimezone​(String timezone)
```


---

### getLatitude

```java
public double getLatitude()
```


---

### setLatitude

```java
public void setLatitude​(double latitude)
```


---

### getLongitude

```java
public double getLongitude()
```


---

### setLongitude

```java
public void setLongitude​(double longitude)
```


---

### getRadius

```java
public double getRadius()
```


---

### setRadius

```java
public void setRadius​(double radius)
```


---

### isDefaultLocale

```java
public boolean isDefaultLocale()
```


---

### setDefaultLocale

```java
public void setDefaultLocale​(boolean defaultLocale)
```


---

### getLocalUsers

```java
public List<LocalUserVO> getLocalUsers()
```


---

### setLocalUsers

```java
public void setLocalUsers​(List<LocalUserVO> localUsers)
```


---

### equals

```java
public boolean equals​(Object o)
```

- **Overrides:** `` `equals` `` in class `` `Object` ``

---

### hashCode

```java
public int hashCode()
```

- **Overrides:** `` `hashCode` `` in class `` `Object` ``

---

### getExpandables

```java
public List<String> getExpandables()
```


---

### setExpandables

```java
public void setExpandables​(List<String> expandables)
```


---

### getHolidays

```java
public List<HolidayVO> getHolidays()
```


---

### setHolidays

```java
public void setHolidays​(List<HolidayVO> holidays)
```

---
