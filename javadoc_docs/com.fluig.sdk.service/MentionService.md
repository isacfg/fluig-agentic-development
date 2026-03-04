# Interface MentionService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/MentionService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/MentionService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface MentionService
extends BaseAPIService
Fornece acesso aos serviços de menções.
  Since:
1.5.13
```

```java
public interface MentionService
extends BaseAPIService
```

Fornece acesso aos serviços de menções.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.13

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `formatText​(Long objectId, String objectClass, String text, String formatPattern)` | Formats a text with mentions acording to the given pattern. |
| `String` | `formatText​(String text, String formatPattern)` | Formats a text with mentions acording to the given pattern. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.MentionService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.MentionService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### formatText

```java
String formatText​(String text,
                  String formatPattern)
           throws NamingException
```

Formats a text with mentions acording to the given pattern. Type @\[alias\] in the formatPattern to replace with the mentioned's alias. Type @\[name\] in the formatPattern to replace with the mentioned's name.

- **Parameters:** `text` - text with mentions
- **Throws:** `` `NamingException` ``

---

### formatText

```java
String formatText​(Long objectId,
                  String objectClass,
                  String text,
                  String formatPattern)
           throws NamingException
```

Formats a text with mentions acording to the given pattern. Type @\[alias\] in the formatPattern to replace with the mentioned's alias. Type @\[name\] in the formatPattern to replace with the mentioned's name.

- **Parameters:** `objectId` - id of the object that has made the mentions
- **Throws:** `` `NamingException` ``

