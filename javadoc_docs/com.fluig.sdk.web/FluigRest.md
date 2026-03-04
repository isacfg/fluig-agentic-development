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


