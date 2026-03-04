# com.fluig.sdk.web

> **3 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/web/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/web/package-summary.html)

---

Super classe para suporte aos serviços rest

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class FluigRest](#class-fluigrest)
- [Class FluigRestConvertDateZone](#class-fluigrestconvertdatezone)
- [Class FluigRestResult](#class-fluigrestresult)

---

# Class FluigRest

> **Pacote:** `com.fluig.sdk.web`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html](https://api.fluig.com/old/sdk/com/fluig/sdk/web/FluigRest.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.web.FluigRest
```

```java
public abstract class FluigRest
extends Object
```

Super classe para suporte aos serviços rest

- **Version:** 1.00.000
- **Author:** vanei

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `FluigRest()` | Nova instância para FluigRest.java |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `protected javax.ws.rs.core.Response` | `buildErrorResponse​(Throwable throwable)` | Tratamento e criaçao de mensagem de erro para ao lado cliente |
| `protected javax.ws.rs.core.Response` | `buildErrorResponse​(Throwable throwable, Object[] params)` | Tratamento e criaçao de mensagem de erro com parâmetros de retorno do serviço para ao lado cliente |
| `javax.ws.rs.core.Response` | `buildErrorResponseTranslated​(String translatedMessage)` | Build an error response with an already translated message |
| `protected javax.ws.rs.core.Response` | `buildSuccessMessageResponse​(String code, String messageKey, Object[] params)` | Tratamento e criaçao de mensagem de sucesso com código e lista de parâmetros para ao lado cliente |
| `protected javax.ws.rs.core.Response` | `buildSuccessResponse()` | Tratamento e criaçao de mensagem de sucesso para ao lado cliente |
| `protected javax.ws.rs.core.Response` | `buildSuccessResponse​(FluigRestResult result)` | Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente |
| `protected javax.ws.rs.core.Response` | `buildSuccessResponse​(Object result)` | Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente |
| `javax.ws.rs.core.Response` | `buildSuccessResponseTranslated​(String translatedMessage)` |  |
| `protected void` | `copyValues​(Object from, Object to)` | Cópia de atributos da camada de serviços rest para objetos internos
 do componente SDK |
| `protected boolean` | `hasMobileAnnotation​(Object content)` | Verifica se tem a anotação de Mobile. |
| `protected boolean` | `isMobileRequest()` | Verifica se é uma requisição mobile |
| `protected Map<String,​Object>` | `jsonToMap​(String json)` | Converão de objeto json para Mapa |
| `protected <T> T` | `jsonToObject​(String json, Class<T> clazz)` |  |


---

## Detalhes dos Construtores

### FluigRest

```java
public FluigRest()
```

Nova instância para FluigRest.java



## Detalhes dos Métodos

### buildSuccessResponse

```java
protected javax.ws.rs.core.Response buildSuccessResponse()
```

Tratamento e criaçao de mensagem de sucesso para ao lado cliente

- **Returns:** Json response

---

### buildSuccessResponse

```java
protected javax.ws.rs.core.Response buildSuccessResponse​(Object result)
```

Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente

- **Parameters:** `result` -
- **Returns:** Json Response

---

### buildSuccessMessageResponse

```java
protected javax.ws.rs.core.Response buildSuccessMessageResponse​(String code,
                                                                String messageKey,
                                                                Object[] params)
```

Tratamento e criaçao de mensagem de sucesso com código e lista de parâmetros para ao lado cliente

- **Parameters:** `code` -
- **Returns:** Json Response

---

### buildSuccessResponse

```java
protected javax.ws.rs.core.Response buildSuccessResponse​(FluigRestResult result)
```

Tratamento e criaçao de mensagem de sucesso com retorno do serviço para ao lado cliente

- **Parameters:** `result` -
- **Returns:** Json Response

---

### buildErrorResponse

```java
protected javax.ws.rs.core.Response buildErrorResponse​(Throwable throwable)
```

Tratamento e criaçao de mensagem de erro para ao lado cliente

- **Parameters:** `throwable` -
- **Returns:** JsonResponse

---

### buildErrorResponse

```java
protected javax.ws.rs.core.Response buildErrorResponse​(Throwable throwable,
                                                       Object[] params)
```

Tratamento e criaçao de mensagem de erro com parâmetros de retorno do serviço para ao lado cliente

- **Parameters:** `throwable` -
- **Returns:** Json Response

---

### buildErrorResponseTranslated

```java
public javax.ws.rs.core.Response buildErrorResponseTranslated​(String translatedMessage)
```

Build an error response with an already translated message

- **Parameters:** `translatedMessage` -
- **Returns:** Response

---

### jsonToObject

```java
protected <T> T jsonToObject​(String json,
                             Class<T> clazz)
```

- **Parameters:** `json` - - Objeto no formato json String
- **Returns:** T - Objeto de acordo com a classe passada ou null, caso haja falha na conversão

---

### jsonToMap

```java
protected Map<String,​Object> jsonToMap​(String json)
```

Converão de objeto json para Mapa

- **Parameters:** `json` -
- **Returns:** Map

---

### copyValues

```java
protected void copyValues​(Object from,
                          Object to)
```

Cópia de atributos da camada de serviços rest para objetos internos do componente SDK

- **Parameters:** `from` -

---

### isMobileRequest

```java
protected boolean isMobileRequest()
```

Verifica se é uma requisição mobile


---

### hasMobileAnnotation

```java
protected boolean hasMobileAnnotation​(Object content)
```

Verifica se tem a anotação de Mobile.

- **Parameters:** `content` -

---

### buildSuccessResponseTranslated

```java
public javax.ws.rs.core.Response buildSuccessResponseTranslated​(String translatedMessage)
```

---

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

---

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

---
