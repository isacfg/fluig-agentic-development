# Interface PageService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface PageService
extends BaseAPIService
Fornece acesso a serviços de segurança.
  Since:
1.5
Author:
vanei
```

```java
public interface PageService
extends BaseAPIService
```

Fornece acesso a serviços de segurança.

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
| `void` | `createPageDraftFromVersion​(String pageCode, Number pageVersion)` |  |
| `void` | `disable​(String pageCode)` |  |
| `void` | `enable​(String pageCode)` |  |
| `List<PublicApiPageVO>` | `findMenuFromPage​(String pageCode)` | Retorna itens de menu da página |
| `List<PublicApiPageVO>` | `findPages​(String parentPageCode, Boolean isMobile, String filter, int start, int size, int searchLevel, Boolean internalPages)` | Consulta páginas do fluig |
| `List<PublicApiPageVO>` | `findPages​(String parentPageCode, Boolean isMobile, String filter, int start, int size, int searchLevel, Boolean internalPages, String codePage)` | Consulta páginas do fluig |
| `String` | `getServerURL()` | Retorna o endereco emque o servidor foi instalado |
| `Map<String,​String>` | `getWidgetPreferences​(Long instanceId)` | Recupera os valores de preferências para uma instância de uma widget. |
| `void` | `hide​(String pageCode)` |  |
| `PageMobileApiVO` | `mobileMapping​(String pageCode)` |  |
| `List<String>` | `pageHistory​(String pageCode)` |  |
| `void` | `publishPageDraft​(String pageCode, String publicationDescription)` |  |
| `void` | `reloadPageLayout​(String pageCode)` | Recarrega o layout de uma página. |
| `void` | `setWidgetPreference​(Long instanceId, String key, String value)` | Seta o valor de uma preferência para uma instância de uma widget. |
| `void` | `show​(String pageCode)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PageService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PageService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### setWidgetPreference

```java
void setWidgetPreference​(Long instanceId,
                         String key,
                         String value)
                  throws com.fluig.sdk.api.common.SDKException
```

Seta o valor de uma preferência para uma instância de uma widget.

- **Parameters:** `instanceId` - ID da instância.
- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException` - Não foi possível incluir/alterar a preferência.
- **Since:** 1.5

---

### getWidgetPreferences

```java
Map<String,​String> getWidgetPreferences​(Long instanceId)
                                       throws com.fluig.sdk.api.common.SDKException
```

Recupera os valores de preferências para uma instância de uma widget.

- **Parameters:** `instanceId` - ID da instância da widget.
- **Returns:** Mapa com os valores de preferências para uma instância de uma widget.
- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException` - Não foi possível recuperar as preferências.
- **Since:** 1.5.8

---

### findPages

```java
List<PublicApiPageVO> findPages​(String parentPageCode,
                                Boolean isMobile,
                                String filter,
                                int start,
                                int size,
                                int searchLevel,
                                Boolean internalPages)
                         throws com.fluig.sdk.api.common.SDKException
```

Consulta páginas do fluig

- **Parameters:** `parentPageCode` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findPages

```java
List<PublicApiPageVO> findPages​(String parentPageCode,
                                Boolean isMobile,
                                String filter,
                                int start,
                                int size,
                                int searchLevel,
                                Boolean internalPages,
                                String codePage)
                         throws com.fluig.sdk.api.common.SDKException
```

Consulta páginas do fluig

- **Parameters:** `parentPageCode` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findMenuFromPage

```java
List<PublicApiPageVO> findMenuFromPage​(String pageCode)
                                throws com.fluig.sdk.api.common.SDKException
```

Retorna itens de menu da página

- **Parameters:** `pageCode` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getServerURL

```java
String getServerURL()
             throws com.fluig.sdk.api.common.SDKException
```

Retorna o endereco emque o servidor foi instalado

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### reloadPageLayout

```java
void reloadPageLayout​(String pageCode)
               throws com.fluig.sdk.api.common.SDKException
```

Recarrega o layout de uma página.

- **Parameters:** `pageCode` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### publishPageDraft

```java
void publishPageDraft​(String pageCode,
                      String publicationDescription)
               throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createPageDraftFromVersion

```java
void createPageDraftFromVersion​(String pageCode,
                                Number pageVersion)
                         throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### pageHistory

```java
List<String> pageHistory​(String pageCode)
                  throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### mobileMapping

```java
PageMobileApiVO mobileMapping​(String pageCode)
                       throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### hide

```java
void hide​(String pageCode)
   throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### show

```java
void show​(String pageCode)
   throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### enable

```java
void enable​(String pageCode)
     throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### disable

```java
void disable​(String pageCode)
      throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

