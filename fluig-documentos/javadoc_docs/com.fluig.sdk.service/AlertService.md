# Interface AlertService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface AlertService
extends BaseAPIService
Fornece acesso aos serviços de notificações.
  Since:
1.5.8
Author:
luis.junior
```

```java
public interface AlertService
extends BaseAPIService
```

Fornece acesso aos serviços de notificações.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.8
- **Author:** luis.junior

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Long` | `countUnreadAlerts​(Long receiverId)` | Método que conta os alertas não lidos de um usuário. |
| `Long` | `countUnreadAlertsByModule​(String module, Long receiverId)` | Método que conta os alertas de um modulo não lidos de um usuário |
| `Long` | `getTenantTotalOfNotification()` | Get the number of notification in the tenant |
| `List<AlertVO>` | `listAlertsWithAction​(int limit, int offset)` | Busca os alertas com ação vinculada, do usuário logado ordenado pela data de criação. |
| `List<AlertVO>` | `listAlertsWithNote​(int limit, int offset)` | Busca os alertas com nota, do usuário logado ordenado pela data de criação. |
| `List<AlertVO>` | `listAllAlerts​(int limit, int offset)` | Retorna todas as notificações do usuário logado ordenadas pela data de criação. |
| `List<AlertVO>` | `listAllAlertsByModule​(String module, int limit, int offset)` | Retorna todas as notificações de um usuário por um único módulo |
| `void` | `markAlertAsRead​(String loginReceiver, List<Long> alertsId)` | Método marca os alertas informados de um usuario tambem dado como lidos |
| `void` | `markAllAlertsAsRead​(String loginReceiver)` | Método marca todos os alertas de um usuario como lidos. |
| `void` | `removeAlerts​(String loginSender, List<Long> alertsId)` | Método que remove os alertas informados de um usuario tambem dado,
 esse método também é responsável por remover os senders, places e objects
 relacionado aos alertas |
| `void` | `saveConfiguration​(AlertConfigVO alertConfig)` | Salva a configuração de um usuário para receber ou não alertas de um dado evento
 através de um dado aplicativo. |
| `void` | `sendNotification​(String eventKey, String loginSender, String loginReceiver, com.totvs.technology.foundation.alert.AlertObject object, com.totvs.technology.foundation.alert.AlertObject place, List<com.totvs.technology.foundation.alert.AlertAction> actions, Map<String,​String> metadata)` | Método que deve ser invocado por todos os módulos do sistema para enviar alertas. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.AlertService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.AlertService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### getTenantTotalOfNotification

```java
Long getTenantTotalOfNotification()
                           throws com.fluig.sdk.api.common.SDKException
```

Get the number of notification in the tenant

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listAllAlerts

```java
List<AlertVO> listAllAlerts​(int limit,
                            int offset)
                     throws com.fluig.sdk.api.common.SDKException
```

Retorna todas as notificações do usuário logado ordenadas pela data de criação.

- **Parameters:** `limit` -
- **Returns:** lista de notificações.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listAlertsWithNote

```java
List<AlertVO> listAlertsWithNote​(int limit,
                                 int offset)
                          throws com.fluig.sdk.api.common.SDKException
```

Busca os alertas com nota, do usuário logado ordenado pela data de criação.

- **Parameters:** `limit` - - limit de resultados
- **Returns:** lista de alertas
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listAlertsWithAction

```java
List<AlertVO> listAlertsWithAction​(int limit,
                                   int offset)
                            throws com.fluig.sdk.api.common.SDKException
```

Busca os alertas com ação vinculada, do usuário logado ordenado pela data de criação.

- **Parameters:** `limit` - - limit de resultados
- **Returns:** lista de alertas
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listAllAlertsByModule

```java
List<AlertVO> listAllAlertsByModule​(String module,
                                    int limit,
                                    int offset)
                             throws com.fluig.sdk.api.common.SDKException
```

Retorna todas as notificações de um usuário por um único módulo

- **Parameters:** `module` -
- **Returns:** lista de notificações.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### sendNotification

```java
void sendNotification​(String eventKey,
                      String loginSender,
                      String loginReceiver,
                      com.totvs.technology.foundation.alert.AlertObject object,
                      com.totvs.technology.foundation.alert.AlertObject place,
                      List<com.totvs.technology.foundation.alert.AlertAction> actions,
                      Map<String,​String> metadata)
               throws com.fluig.sdk.api.common.SDKException
```

Método que deve ser invocado por todos os módulos do sistema para enviar alertas.

- **Parameters:** `eventKey` - - String única que representa o evento que gerou o alerta.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - - Indica falha no envio

---

### removeAlerts

```java
void removeAlerts​(String loginSender,
                  List<Long> alertsId)
           throws com.fluig.sdk.api.common.SDKException
```

Método que remove os alertas informados de um usuario tambem dado, esse método também é responsável por remover os senders, places e objects relacionado aos alertas

- **Parameters:** `loginSender` - - Login(alias) do usuário que está enviando a notificação (tabela FDN\_USERTENANT)
- **Throws:** `com.fluig.sdk.api.common.SDKException` - - Indica falha na remoção

---

### markAlertAsRead

```java
void markAlertAsRead​(String loginReceiver,
                     List<Long> alertsId)
              throws com.fluig.sdk.api.common.SDKException
```

Método marca os alertas informados de um usuario tambem dado como lidos

- **Parameters:** `loginReceiver` - - Login(alias) do usuário que recebeu as notificações (tabela FDN\_USERTENANT)
- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException` - - Indica falha na atualização

---

### markAllAlertsAsRead

```java
void markAllAlertsAsRead​(String loginReceiver)
                  throws com.fluig.sdk.api.common.SDKException
```

Método marca todos os alertas de um usuario como lidos.

- **Parameters:** `loginReceiver` - - Login(alias) do usuário que recebeu a notificação (tabela FDN\_USERTENANT)
- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException` - - Indica falha na atualização

---

### countUnreadAlerts

```java
Long countUnreadAlerts​(Long receiverId)
                throws com.fluig.sdk.api.common.SDKException
```

Método que conta os alertas não lidos de um usuário.

- **Parameters:** `receiverId` - - id do usuário.
- **Returns:** número de alertas não lidos
- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException` - - Caso ocorra um erro na busca

---

### countUnreadAlertsByModule

```java
Long countUnreadAlertsByModule​(String module,
                               Long receiverId)
                        throws com.fluig.sdk.api.common.SDKException
```

Método que conta os alertas de um modulo não lidos de um usuário

- **Parameters:** `receiverId` - - id do usuário.
- **Returns:** número de alertas não lidos
- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException` - - Caso ocorra um erro na busca

---

### saveConfiguration

```java
void saveConfiguration​(AlertConfigVO alertConfig)
                throws com.fluig.sdk.api.common.SDKException
```

Salva a configuração de um usuário para receber ou não alertas de um dado evento através de um dado aplicativo.

- **Parameters:** `alertConfig` - - Configuração do alertas
- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException` - - Indica falha ao salvar a configuração

