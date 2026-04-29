# Interface CustomAppKeyService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CustomAppKeyService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CustomAppKeyService.html)

```java
public interface CustomAppKeyService
extends BaseAPIService
```

- **All Superinterfaces:** BaseAPIService

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `KeyVO` | `getKey​(Long tenantId, String key)` |  |
| `KeyVO` | `provisionKey​(Long tenantId, String key)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CustomAppKeyService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CustomAppKeyService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### provisionKey

```java
KeyVO provisionKey​(Long tenantId,
                   String key)
            throws ApplicationKeyCreationException
```

- **Throws:** `[ApplicationKeyCreationException](../exception/ApplicationKeyCreationException.html "class in com.fluig.sdk.exception")`

---

### getKey

```java
KeyVO getKey​(Long tenantId,
             String key)
      throws ApplicationKeyNotFoundException
```

- **Throws:** `[ApplicationKeyNotFoundException](../exception/ApplicationKeyNotFoundException.html "class in com.fluig.sdk.exception")`

