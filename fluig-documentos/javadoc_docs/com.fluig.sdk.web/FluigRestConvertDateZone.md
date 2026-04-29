# Class FluigRestConvertDateZone

> **Pacote:** `com.fluig.sdk.web`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestConvertDateZone.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.web.FluigRestConvertDateZone
```

```java
public class FluigRestConvertDateZone
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FluigRestConvertDateZone()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `protected Object` | `convertDateTimeToTimeZone​(Object obj, boolean isDate)` |  |
| `protected Object` | `getDateTimeZone​(Object obj, com.fasterxml.jackson.databind.ser.PropertyWriter writer)` |  |
| `protected com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider` | `getFilterTimeZone​(com.fasterxml.jackson.databind.ObjectMapper mapper)` |  |
| `protected boolean` | `isRegexDateTime​(Object obj)` |  |


---

## Detalhes dos Construtores

### FluigRestConvertDateZone

```java
public FluigRestConvertDateZone()
```



## Detalhes dos Métodos

### getFilterTimeZone

```java
protected com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider getFilterTimeZone​(com.fasterxml.jackson.databind.ObjectMapper mapper)
```


---

### isRegexDateTime

```java
protected boolean isRegexDateTime​(Object obj)
```


---

### getDateTimeZone

```java
protected Object getDateTimeZone​(Object obj,
                                 com.fasterxml.jackson.databind.ser.PropertyWriter writer)
                          throws ParseException,
                                 SecurityException,
                                 IllegalArgumentException,
                                 IllegalAccessException
```

- **Throws:** `` `ParseException` ``

---

### convertDateTimeToTimeZone

```java
protected Object convertDateTimeToTimeZone​(Object obj,
                                           boolean isDate)
                                    throws ParseException
```

- **Throws:** `` `ParseException` ``

