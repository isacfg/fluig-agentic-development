# Interface WidgetService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WidgetService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface WidgetService
extends BaseAPIService
Fornece acesso aos serviços de permissão.
```

```java
public interface WidgetService
extends BaseAPIService
```

Fornece acesso aos serviços de permissão.

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
| `Map<String,​Properties>` | `findWidgetPermissionList​(String widgetCode)` | Busca pelas permissões em banco de uma determinada widget |
| `void` | `grantWidgetDefaultPermission​(String widgetCode)` | Adiciona as permissões padrão de um widget |
| `List<Properties>` | `listAllWidgetsPermission()` | Lista as permissões de todas as widgets |
| `void` | `revokeWidgetPermission​(String widgetCode)` | Remove as permissões gerais de uma widget |
| `List<String>` | `searchForbiddenResourceCodes()` | Busca códigos de recursos que não devem ser listados |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.WidgetService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.WidgetService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### revokeWidgetPermission

```java
void revokeWidgetPermission​(String widgetCode)
                     throws com.fluig.sdk.api.common.SDKException
```

Remove as permissões gerais de uma widget

- **Parameters:** `widgetCode` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.13

---

### grantWidgetDefaultPermission

```java
void grantWidgetDefaultPermission​(String widgetCode)
                           throws com.fluig.sdk.api.common.SDKException
```

Adiciona as permissões padrão de um widget

- **Parameters:** `widgetCode` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findWidgetPermissionList

```java
Map<String,​Properties> findWidgetPermissionList​(String widgetCode)
                                               throws com.fluig.sdk.api.common.SDKException
```

Busca pelas permissões em banco de uma determinada widget

- **Parameters:** `widgetCode` -
- **Returns:** Mapa de permissões
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.13

---

### listAllWidgetsPermission

```java
List<Properties> listAllWidgetsPermission()
                                   throws com.fluig.sdk.api.common.SDKException
```

Lista as permissões de todas as widgets

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### searchForbiddenResourceCodes

```java
List<String> searchForbiddenResourceCodes()
                                   throws com.fluig.sdk.api.common.SDKException
```

Busca códigos de recursos que não devem ser listados

- **Throws:** `com.fluig.sdk.api.common.SDKException`

