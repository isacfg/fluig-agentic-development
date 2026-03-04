# Interface GlobalParameterService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GlobalParameterService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface GlobalParameterService
extends BaseAPIService
Grant access to global parameter services
  Since:
1.5.3
Author:
vinicius.michelutti
```

```java
public interface GlobalParameterService
extends BaseAPIService
```

Grant access to global parameter services

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.3
- **Author:** vinicius.michelutti

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Long` | `getMaxUploadSize()` |  |
| `Long` | `getMaxUploadSizeForConnect()` | Retorna o tamanho configurado, do máximo de upload pelo fluig Connect |
| `Boolean` | `getViewJustProcessWithApproval()` | retorna se a empresa irá mostrar somente as tarefas configuradas para o app approval nos dispositivos mobile |
| `void` | `setMaxUploadsizeForConnect​(Integer size)` | Seta o tamanho máximo de upload via fluig Connect |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.GlobalParameterService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.GlobalParameterService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### getMaxUploadSizeForConnect

```java
Long getMaxUploadSizeForConnect()
                         throws com.fluig.sdk.api.common.SDKException
```

Retorna o tamanho configurado, do máximo de upload pelo fluig Connect

- **Returns:** O tamanho em bytes
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### setMaxUploadsizeForConnect

```java
void setMaxUploadsizeForConnect​(Integer size)
                         throws com.fluig.sdk.api.common.SDKException
```

Seta o tamanho máximo de upload via fluig Connect

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getViewJustProcessWithApproval

```java
Boolean getViewJustProcessWithApproval()
                                throws com.fluig.sdk.api.common.SDKException
```

retorna se a empresa irá mostrar somente as tarefas configuradas para o app approval nos dispositivos mobile

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getMaxUploadSize

```java
Long getMaxUploadSize()
               throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

