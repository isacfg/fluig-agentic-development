# Interface ApplicationUserDataService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/ApplicationUserDataService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ApplicationUserDataService.html)

```java
public interface ApplicationUserDataService
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
| `Long` | `countKeyByUsers​(String key)` |  |
| `Map<String,​String>` | `create​(Long instanceId, Map<String,​String> applicationUserData)` |  |
| `Map<String,​String>` | `findByInstanceIdAndLogin​(Long instanceId, String login)` |  |
| `void` | `remove​(Long instanceId, String key)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ApplicationUserDataService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ApplicationUserDataService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findByInstanceIdAndLogin

```java
Map<String,​String> findByInstanceIdAndLogin​(Long instanceId,
                                                  String login)
                                           throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### create

```java
Map<String,​String> create​(Long instanceId,
                                Map<String,​String> applicationUserData)
                         throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### remove

```java
void remove​(Long instanceId,
            String key)
     throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### countKeyByUsers

```java
Long countKeyByUsers​(String key)
              throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

