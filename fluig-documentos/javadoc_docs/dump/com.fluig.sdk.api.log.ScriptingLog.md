# Class ScriptingLog

> **Pacote:** `com.fluig.sdk.api.log`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/log/ScriptingLog.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.log.ScriptingLog
```

```java
public class ScriptingLog
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `protected static org.slf4j.Logger` | `log` |  |
| `static int` | `truncateLength` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `void` | `debug​(Object... messages)` |  |
| `void` | `dir​(Object... objs)` |  |
| `void` | `error​(Object... messages)` |  |
| `void` | `fatal​(Object... messages)` |  |
| `static ScriptingLog` | `getInstance()` |  |
| `void` | `info​(Object... messages)` |  |
| `boolean` | `isDebugEnabled()` |  |
| `boolean` | `isErrorEnabled()` |  |
| `boolean` | `isFatalEnabled()` |  |
| `boolean` | `isInfoEnabled()` |  |
| `boolean` | `isTraceEnabled()` |  |
| `boolean` | `isWarnEnabled()` |  |
| `void` | `log​(Object... messages)` |  |
| `void` | `trace​(Object... messages)` |  |
| `void` | `warn​(Object... messages)` |  |


---

## Detalhes dos Campos

### log

```java
protected static org.slf4j.Logger log
```


---

### truncateLength

```java
public static final int truncateLength
```



## Detalhes dos Métodos

### getInstance

```java
public static ScriptingLog getInstance()
```


---

### isTraceEnabled

```java
public boolean isTraceEnabled()
```


---

### trace

```java
public void trace​(Object... messages)
```


---

### isDebugEnabled

```java
public boolean isDebugEnabled()
```


---

### debug

```java
public void debug​(Object... messages)
```


---

### isInfoEnabled

```java
public boolean isInfoEnabled()
```


---

### info

```java
public void info​(Object... messages)
```


---

### log

```java
public void log​(Object... messages)
```


---

### isWarnEnabled

```java
public boolean isWarnEnabled()
```


---

### warn

```java
public void warn​(Object... messages)
```


---

### isErrorEnabled

```java
public boolean isErrorEnabled()
```


---

### error

```java
public void error​(Object... messages)
```


---

### isFatalEnabled

```java
public boolean isFatalEnabled()
```


---

### fatal

```java
public void fatal​(Object... messages)
```


---

### dir

```java
public void dir​(Object... objs)
```


