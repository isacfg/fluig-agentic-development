# Interface I18NService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/I18NService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface I18NService
extends BaseAPIService
Fornece acesso aos serviços de internacioinalização.
  Since:
1.5
Author:
vanei
```

```java
public interface I18NService
extends BaseAPIService
```

Fornece acesso aos serviços de internacioinalização.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `void` | `addResourceBundle​(Locale locale, String code, Properties props)` | Registra um ResourceBundle para um determinado componente. |
| `String` | `transalateString​(String message, Object[] params)` | Retorna a tradução de uma String padrão do Fluig. |
| `String` | `transalateString​(String code, String message, Object[] params)` | Retorna a tradução de uma String associada a um Bundle específico. |
| `String[]` | `translateException​(Throwable ex)` | Retorna a tradução de uma exception. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.I18NService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.I18NService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### transalateString

```java
String transalateString​(String message,
                        Object[] params)
                 throws com.fluig.sdk.api.common.SDKException
```

Retorna a tradução de uma String padrão do Fluig.

- **Parameters:** `message` - String a ser traduzida.
- **Returns:** String traduzida ou a própria string original, se não encontrar a tradução.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### transalateString

```java
String transalateString​(String code,
                        String message,
                        Object[] params)
                 throws com.fluig.sdk.api.common.SDKException
```

Retorna a tradução de uma String associada a um Bundle específico.

- **Parameters:** `code` - Código do resource bundle onde procurar a tradução.
- **Returns:** String traduzida ou a própria string original, se não encontrar a tradução.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### translateException

```java
String[] translateException​(Throwable ex)
                     throws com.fluig.sdk.api.common.SDKException
```

Retorna a tradução de uma exception.

- **Parameters:** `ex` - Exception a ser traduzida.
- **Returns:** Array de duas dimensões, onde no índice **0** está a tradução da exception e no índice **1** está uma descrição mais detalhada da mensagem.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### addResourceBundle

```java
void addResourceBundle​(Locale locale,
                       String code,
                       Properties props)
                throws com.fluig.sdk.api.common.SDKException
```

Registra um ResourceBundle para um determinado componente.

- **Parameters:** `locale` - Idioma.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

