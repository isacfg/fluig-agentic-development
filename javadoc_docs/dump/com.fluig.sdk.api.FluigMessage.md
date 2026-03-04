# Class FluigMessage

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessage.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.FluigMessage
```

```java
public class FluigMessage
extends Object
implements Serializable
```

Mensagens a serem enviadas ao lado cliente.

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FluigMessage()` | Construtor default. |
| `FluigMessage​(FluigMessageType type, String message)` | Construtor com o tipo e a mensagem. |
| `FluigMessage​(FluigMessageType type, String message, String detail)` | Construtor com o tipo, a mensagem e uma descrição detalhada. |
| `FluigMessage​(FluigMessageType type, String message, String detail, String errorCode)` | Construtor com o tipo, a mensagem e uma descrição detalhada. |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDetail()` | Retorna a descrição detalhada da mensagem. |
| `String` | `getErrorCode()` |  |
| `String` | `getMessage()` | Retorna a mensagem. |
| `FluigMessageType` | `getType()` | Retorna o tipo da mensagem. |
| `void` | `setDetail​(String detail)` | Informa uma descrição detalhada para a mensagem. |
| `void` | `setErrorCode​(String errorCode)` |  |
| `void` | `setMessage​(String message)` | Altera a mensagem. |
| `void` | `setType​(FluigMessageType type)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### FluigMessage

```java
public FluigMessage()
```

Construtor default.


---

### FluigMessage

```java
public FluigMessage​(FluigMessageType type,
                    String message)
```

Construtor com o tipo e a mensagem. O detalhe será igual a mensagem.

- **Parameters:** `type` - Tipo.

---

### FluigMessage

```java
public FluigMessage​(FluigMessageType type,
                    String message,
                    String detail)
```

Construtor com o tipo, a mensagem e uma descrição detalhada.

- **Parameters:** `type` - Tipo da menagem.

---

### FluigMessage

```java
public FluigMessage​(FluigMessageType type,
                    String message,
                    String detail,
                    String errorCode)
```

Construtor com o tipo, a mensagem e uma descrição detalhada.

- **Parameters:** `type` - Tipo da menagem.


## Detalhes dos Métodos

### getMessage

```java
public String getMessage()
```

Retorna a mensagem.

- **Returns:** Mensagem.

---

### setMessage

```java
public void setMessage​(String message)
```

Altera a mensagem.

- **Parameters:** `message` - Mensagem.

---

### getType

```java
public FluigMessageType getType()
```

Retorna o tipo da mensagem.

- **Returns:** Tipo da mensagem.

---

### setType

```java
public void setType​(FluigMessageType type)
```


---

### getErrorCode

```java
public String getErrorCode()
```


---

### setErrorCode

```java
public void setErrorCode​(String errorCode)
```


---

### getDetail

```java
public String getDetail()
```

Retorna a descrição detalhada da mensagem.

- **Returns:** Descrição detalhada da mensagem.

---

### setDetail

```java
public void setDetail​(String detail)
```

Informa uma descrição detalhada para a mensagem.

- **Parameters:** `detail` - Detalhes da mensagem.

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

