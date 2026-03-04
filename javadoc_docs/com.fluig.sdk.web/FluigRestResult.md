# Class FluigRestResult

> **Pacote:** `com.fluig.sdk.web`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRestResult.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.web.FluigRestResult
```

```java
public class FluigRestResult
extends Object
implements Serializable
```

Classe para ser usada como padrão para o retorno dos REST.

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FluigRestResult()` |  |
| `FluigRestResult​(FluigMessage message)` | Nova instancia do FluigRestResult de acordo com o message |
| `FluigRestResult​(Object content)` | Nova instancia do FluigRestResult de acordo com o content |
| `FluigRestResult​(Object content, FluigMessage message)` | Nova instancia do FluigRestResult de acordo com o content e message |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Object` | `getContent()` | Recupera valor do content |
| `FluigMessage` | `getMessage()` | Recupera valor do message |
| `void` | `setContent​(Object content)` | Atribui valor para content |
| `void` | `setMessage​(FluigMessage message)` | Atribui valor para message |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### FluigRestResult

```java
public FluigRestResult()
```


---

### FluigRestResult

```java
public FluigRestResult​(Object content)
```

Nova instancia do FluigRestResult de acordo com o content

- **Parameters:** `content` -

---

### FluigRestResult

```java
public FluigRestResult​(Object content,
                       FluigMessage message)
```

Nova instancia do FluigRestResult de acordo com o content e message

- **Parameters:** `content` -

---

### FluigRestResult

```java
public FluigRestResult​(FluigMessage message)
```

Nova instancia do FluigRestResult de acordo com o message

- **Parameters:** `message` -


## Detalhes dos Métodos

### getContent

```java
public Object getContent()
```

Recupera valor do content

- **Returns:** the content

---

### setContent

```java
public void setContent​(Object content)
```

Atribui valor para content

- **Parameters:** `content` - the content to set

---

### getMessage

```java
public FluigMessage getMessage()
```

Recupera valor do message

- **Returns:** the message

---

### setMessage

```java
public void setMessage​(FluigMessage message)
```

Atribui valor para message

- **Parameters:** `message` - the message to set

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

