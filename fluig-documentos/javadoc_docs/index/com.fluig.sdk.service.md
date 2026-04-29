# com.fluig.sdk.service

> **41 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

---

Fornece acesso aos serviços de notificações.

---

## Interface Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Interface AlertService](#interface-alertservice)
- [Interface ApplicationUserDataService](#interface-applicationuserdataservice)
- [Interface ArticleService](#interface-articleservice)
- [Interface AuthorizeClientSdkService](#interface-authorizeclientsdkservice)
- [Interface BaseAPIService](#interface-baseapiservice)
- [Interface CardAPIService](#interface-cardapiservice)
- [Interface CardIndexAPIService](#interface-cardindexapiservice)
- [Interface CardIndexService](#interface-cardindexservice)
- [Interface CardService](#interface-cardservice)
- [Interface CollaborationSDKService](#interface-collaborationsdkservice)
- [Interface CommentService](#interface-commentservice)
- [Interface CommunityService](#interface-communityservice)
- [Interface ContentFilesService](#interface-contentfilesservice)
- [Interface CustomAppKeyService](#interface-customappkeyservice)
- [Interface DocumentService](#interface-documentservice)
- [Interface DocumentationProxyServiceService](#interface-documentationproxyserviceservice)
- [Interface FavoritesService](#interface-favoritesservice)
- [Interface FilterAPIService](#interface-filterapiservice)
- [Interface FolderDocumentService](#interface-folderdocumentservice)
- [Interface GlobalParameterService](#interface-globalparameterservice)
- [Interface GroupService](#interface-groupservice)
- [Interface HolidayAPIService](#interface-holidayapiservice)
- [Interface I18NService](#interface-i18nservice)
- [Interface IdentityService](#interface-identityservice)
- [Interface JobService](#interface-jobservice)
- [Interface LocalAPIService](#interface-localapiservice)
- [Interface MentionService](#interface-mentionservice)
- [Interface OAuthUserService](#interface-oauthuserservice)
- [Interface PageService](#interface-pageservice)
- [Interface PageWidgetService](#interface-pagewidgetservice)
- [Interface PostService](#interface-postservice)
- [Interface SearchService](#interface-searchservice)
- [Interface SecurityService](#interface-securityservice)
- [Interface SocialBreadcrumbService](#interface-socialbreadcrumbservice)
- [Interface SocialSDKService](#interface-socialsdkservice)
- [Interface TagsCloudService](#interface-tagscloudservice)
- [Interface TasksService](#interface-tasksservice)
- [Interface TenantService](#interface-tenantservice)
- [Interface UserService](#interface-userservice)
- [Interface WidgetService](#interface-widgetservice)
- [Interface WorkflowAPIService](#interface-workflowapiservice)

---

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

---

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

---

# Interface ArticleService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ArticleService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface ArticleService
extends BaseAPIService
Fornece acesso aos serviços de artigos.
  Since:
1.5.4
Author:
marcus.carvalho
```

```java
public interface ArticleService
extends BaseAPIService
```

Fornece acesso aos serviços de artigos.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.4
- **Author:** marcus.carvalho

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `ArticleVO` | `changeCover​(ArticleVO sdkVO)` | Update the cover image of an existing article.
Return the article that was updated in a community. |
| `ArticleVO` | `create​(ArticleVO vo)` | Create an article.
 Return the article that was updated in a community. |
| `ArticleVO` | `createDraft​(ArticleVO vo)` | Create an article in draft mode.
Return the article that was created in a draft mode. |
| `void` | `delete​(long articleId)` | Remove an article by his id |
| `void` | `deleteDraft​(String alias, Long articleId)` | Remove a version in draft of article
 Remove a draft version of article by his id. |
| `ArticleVO` | `get​(String alias, long articleId, boolean draft)` | Retrieve an article
Return an article published in a community. |
| `ArticleVO` | `getNextOrPrev​(Long folderId, Long articleId, String order)` | Retrive the next or previous article of one specific article.
Return the article that is the next or previous of the article passed by parameter. |
| `List<ArticleVO>` | `list​(String alias, Long categoryId, Integer limit, Integer offset, String filterBy, String orderBy, String searchBy)` | Retrieve a list of article
Return a list of article published in a community. |
| `ArticleVO` | `removeCover​(ArticleVO sdkVO)` | Remove the cover image of an existing article.
Return the article that was updated in a community. |
| `ArticleVO` | `update​(ArticleVO vo)` | Save and update an article.
 Return the article that was updated in a community. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ArticleService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ArticleService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### delete

```java
void delete​(long articleId)
     throws com.fluig.sdk.api.common.SDKException
```

Remove an article by his id

- **Parameters:** `articleId` - the Id of a article that will be removed
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### get

```java
ArticleVO get​(String alias,
              long articleId,
              boolean draft)
       throws com.fluig.sdk.api.common.SDKException
```

Retrieve an article  
  
Return an article published in a community.

- **Parameters:** `alias` - the community's alias where the article is published
- **Returns:** [`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<ArticleVO> list​(String alias,
                     Long categoryId,
                     Integer limit,
                     Integer offset,
                     String filterBy,
                     String orderBy,
                     String searchBy)
              throws com.fluig.sdk.api.common.SDKException
```

Retrieve a list of article  
  
Return a list of article published in a community.

- **Parameters:** `alias` - the community's alias where the article is published
- **Returns:** List<[`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social")\> This method returns VO of article
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createDraft

```java
ArticleVO createDraft​(ArticleVO vo)
               throws com.fluig.sdk.api.common.SDKException
```

Create an article in draft mode.  
  
Return the article that was created in a draft mode.

- **Parameters:** `vo` - A article VO with data used to create a article
- **Returns:** [`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article created
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### update

```java
ArticleVO update​(ArticleVO vo)
          throws com.fluig.sdk.api.common.SDKException
```

Save and update an article.  
  
Return the article that was updated in a community.

- **Parameters:** `vo` - A article VO with data used to save the article
- **Returns:** [`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### create

```java
ArticleVO create​(ArticleVO vo)
          throws com.fluig.sdk.api.common.SDKException
```

Create an article.  
  
Return the article that was updated in a community.

- **Parameters:** `vo` - A article VO with data used to save the article
- **Returns:** [`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### changeCover

```java
ArticleVO changeCover​(ArticleVO sdkVO)
               throws com.fluig.sdk.api.common.SDKException
```

Update the cover image of an existing article.  
  
Return the article that was updated in a community.

- **Parameters:** `sdkVO` - A article VO with data used to update the article
- **Returns:** [`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### removeCover

```java
ArticleVO removeCover​(ArticleVO sdkVO)
               throws com.fluig.sdk.api.common.SDKException
```

Remove the cover image of an existing article.  
  
Return the article that was updated in a community.

- **Parameters:** `sdkVO` - A article VO with data used to update the article
- **Returns:** [`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article updated
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getNextOrPrev

```java
ArticleVO getNextOrPrev​(Long folderId,
                        Long articleId,
                        String order)
                 throws Exception
```

Retrive the next or previous article of one specific article.  
  
Return the article that is the next or previous of the article passed by parameter.

- **Parameters:** `folderId` - The folder's id where the next or previous will be searched.
- **Returns:** [`ArticleVO`](../api/social/ArticleVO.html "class in com.fluig.sdk.api.social") This method returns VO of article that is the next or previous of the article passed by parameter
- **Throws:** `` `Exception` ``

---

### deleteDraft

```java
void deleteDraft​(String alias,
                 Long articleId)
          throws com.fluig.sdk.api.common.SDKException
```

Remove a version in draft of article  
  
Remove a draft version of article by his id. If the article isn't in draft, a Error message wil be returned

- **Parameters:** `alias` - the community's alias where the article is published
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface AuthorizeClientSdkService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AuthorizeClientSdkService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface AuthorizeClientSdkService
extends BaseAPIService
Fornece acesso aos serviços externos com autenticação oauth.
  Since:
1.5.10
```

```java
public interface AuthorizeClientSdkService
extends BaseAPIService
```

Fornece acesso aos serviços externos com autenticação oauth.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.10

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `OAuthSdkVO` | `create​(OAuthSdkVO vo)` |  |
| `AuthorizeClientSdkServiceVO` | `invoke​(AuthorizeClientSdkServiceVO vo)` |  |
| `AuthorizeClientSdkServiceVO` | `invoke​(String data)` |  |
| `AuthorizeClientSdkServiceVO` | `invokeService​(String data)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.AuthorizeClientSdkService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.AuthorizeClientSdkService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### invoke

```java
AuthorizeClientSdkServiceVO invoke​(AuthorizeClientSdkServiceVO vo)
                            throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### invoke

```java
AuthorizeClientSdkServiceVO invoke​(String data)
                            throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### invokeService

```java
AuthorizeClientSdkServiceVO invokeService​(String data)
                                   throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### create

```java
OAuthSdkVO create​(OAuthSdkVO vo)
           throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

# Interface BaseAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html)

**Hierarquia:**
```
All Known Subinterfaces:
AlertService, ApplicationUserDataService, ArticleService, AuthorizeClientSdkService, CardAPIService, CardIndexAPIService, CardIndexService, CardService, CollaborationSDKService, CommentService, CommunityService, ContentFilesService, CustomAppKeyService, DocumentationProxyServiceService, DocumentService, FavoritesService, FilterAPIService, FolderDocumentService, GlobalParameterService, GroupService, HolidayAPIService, I18NService, IdentityService, JobService, LocalAPIService, MentionService, OAuthUserService, PageService, PageWidgetService, PostService, SearchService, SecurityService, SocialBreadcrumbService, SocialSDKService, TagsCloudService, TasksService, TenantService, UserService, WidgetService, WorkflowAPIService
  public interface BaseAPIService
Interface base
  Version:
1.00.000
Author:
vanei
```

```java
public interface BaseAPIService
```

Interface base

- **All Known Subinterfaces:** AlertService, ApplicationUserDataService, ArticleService, AuthorizeClientSdkService, CardAPIService, CardIndexAPIService, CardIndexService, CardService, CollaborationSDKService, CommentService, CommunityService, ContentFilesService, CustomAppKeyService, DocumentationProxyServiceService, DocumentService, FavoritesService, FilterAPIService, FolderDocumentService, GlobalParameterService, GroupService, HolidayAPIService, I18NService, IdentityService, JobService, LocalAPIService, MentionService, OAuthUserService, PageService, PageWidgetService, PostService, SearchService, SecurityService, SocialBreadcrumbService, SocialSDKService, TagsCloudService, TasksService, TenantService, UserService, WidgetService, WorkflowAPIService
- **Version:** 1.00.000
- **Author:** vanei

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `default boolean` | `expand​(String expand, String attributeName)` |  |
| `default List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam>` | `generateOrderParam​(String order, List<String> orderAttributes)` |  |


---

## Detalhes dos Métodos

### generateOrderParam

```java
default List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> generateOrderParam​(String order,
                                                                                                  List<String> orderAttributes)
```


---

### expand

```java
default boolean expand​(String expand,
                       String attributeName)
```

---

# Interface CardAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardAPIService.html)

```java
public interface CardAPIService
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
| `CardFindFieldVO` | `create​(Integer documentId, List<CardFieldVO> cardFieldVOs)` | Cria um registro de Formulário |
| `CardChildrenVO` | `createChild​(Integer cardId, List<CardFieldVO> cardFieldVos)` | Cria um registro no formulário filho |
| `CardFindFieldVO` | `edit​(Integer cardId, List<CardFieldVO> cardFieldVOs)` | altera um registro de Formulário |
| `CardChildrenVO` | `editChild​(Integer cardId, Integer row, List<CardFieldVO> cardFieldVOS)` | Cria um registro no formulário filho |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardFindFieldVO>` | `find​(Integer documentId, Integer page, Integer pageSize, List order, List<String> fields, List<CardFieldFilterVO> cardFieldFilterVOS, Boolean listInactiveRecords)` | Lista os registros do formulário |
| `CardFindFieldVO` | `findById​(Integer documentId, Integer cardId, List<String> fields, List<String> expandedFields)` | Lista os registros do formulário pelo numero do formulário e numero da ficha |
| `CardChildrenVO` | `findChildByCardIdAndRow​(Integer cardId, Integer row, List<String> fields)` | Lista os registros do formulário filho pelo numero do registro e linha |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardChildrenVO>` | `findChildrenByCardId​(Integer cardId, Integer page, Integer pageSize, List<String> fields)` | Lista os registros do formulário filho |
| `Boolean` | `remove​(Integer cardId)` | Remove um registro de formulário |
| `CardChildrenVO` | `removeChild​(Integer cardId, Integer row)` | Remove os registros do formulário filho |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardFindFieldVO> find​(Integer documentId,
                                                                                               Integer page,
                                                                                               Integer pageSize,
                                                                                               List order,
                                                                                               List<String> fields,
                                                                                               List<CardFieldFilterVO> cardFieldFilterVOS,
                                                                                               Boolean listInactiveRecords)
                                                                                        throws Exception
```

Lista os registros do formulário

- **Parameters:** `documentId` - numero do formulário (\* Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os registros do fomulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findById

```java
CardFindFieldVO findById​(Integer documentId,
                         Integer cardId,
                         List<String> fields,
                         List<String> expandedFields)
                  throws Exception
```

Lista os registros do formulário pelo numero do formulário e numero da ficha

- **Parameters:** `documentId` - numero do formulário (\* Obrigatório)
- **Returns:** CardFindFieldVO objeto com os registros do fomulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### create

```java
CardFindFieldVO create​(Integer documentId,
                       List<CardFieldVO> cardFieldVOs)
                throws Exception
```

Cria um registro de Formulário

- **Parameters:** `documentId` - numero do formulário (\* Obrigatório)
- **Returns:** CardFindFieldVO objeto com os registros do fomulário criado
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### edit

```java
CardFindFieldVO edit​(Integer cardId,
                     List<CardFieldVO> cardFieldVOs)
              throws Exception
```

altera um registro de Formulário

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardFindFieldVO objeto com o registros do fomulário editado
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### remove

```java
Boolean remove​(Integer cardId)
        throws Exception
```

Remove um registro de formulário

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** Boolean true se a rotina executar com sucesso
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findChildrenByCardId

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardChildrenVO> findChildrenByCardId​(Integer cardId,
                                                                                                              Integer page,
                                                                                                              Integer pageSize,
                                                                                                              List<String> fields)
                                                                                                       throws Exception
```

Lista os registros do formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findChildByCardIdAndRow

```java
CardChildrenVO findChildByCardIdAndRow​(Integer cardId,
                                       Integer row,
                                       List<String> fields)
                                throws Exception
```

Lista os registros do formulário filho pelo numero do registro e linha

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** ResponseEnvelopeVO com os registros do fomulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### createChild

```java
CardChildrenVO createChild​(Integer cardId,
                           List<CardFieldVO> cardFieldVos)
                    throws Exception
```

Cria um registro no formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardChildrenVO com os registros do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### editChild

```java
CardChildrenVO editChild​(Integer cardId,
                         Integer row,
                         List<CardFieldVO> cardFieldVOS)
                  throws Exception
```

Cria um registro no formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardChildrenVO com os registros do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### removeChild

```java
CardChildrenVO removeChild​(Integer cardId,
                           Integer row)
                    throws Exception
```

Remove os registros do formulário filho

- **Parameters:** `cardId` - numero do registro do formulário (\* Obrigatório)
- **Returns:** CardChildrenVO com os registros do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

# Interface CardIndexAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexAPIService.html)

```java
public interface CardIndexAPIService
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
| `CardIndexAPIVO` | `createCardIndex​(File filecontent, String formName, Integer parentIdValue)` |  |
| `CardIndexAPIVO` | `createCardIndex​(File filecontent, String mainFile, String formName, String descriptorField, String datasetName, Integer parentIdValue)` |  |
| `boolean` | `deleteCardIndex​(Integer documentId)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO>` | `findCardIndex​(Integer documentId, Integer version)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO>` | `findCardIndex​(Integer documentId, Integer version, List order, Integer page, Integer pageSize)` |  |
| `CardIndexAPIVO` | `patchCardIndex​(File filecontent, Integer documentIdValue, String updateMode, String mainFile, String formName, String descriptorField, String datasetName)` |  |
| `CardIndexAPIVO` | `putCardIndex​(File filecontent, Integer documentIdValue, String updateMode, String mainFile, String formName, String descriptorField, String datasetName)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findCardIndex

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO> findCardIndex​(Integer documentId,
                                                                                                           Integer version,
                                                                                                           List order,
                                                                                                           Integer page,
                                                                                                           Integer pageSize)
                                                                                                    throws Exception
```

- **Parameters:** `documentId` - numero do fomulário
- **Returns:** ResponseEnvelopeVO objeto com os dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Busca formulários

---

### findCardIndex

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<CardIndexFindAPIVO> findCardIndex​(Integer documentId,
                                                                                                           Integer version)
                                                                                                    throws Exception
```

- **Parameters:** `documentId` - numero do fomulário
- **Returns:** ResponseEnvelopeVO objeto com os dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Busca formulários

---

### createCardIndex

```java
CardIndexAPIVO createCardIndex​(File filecontent,
                               String mainFile,
                               String formName,
                               String descriptorField,
                               String datasetName,
                               Integer parentIdValue)
                        throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Cria formuários com base em arquivos html ou zip

---

### createCardIndex

```java
CardIndexAPIVO createCardIndex​(File filecontent,
                               String formName,
                               Integer parentIdValue)
                        throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Cria formuários com base em arquivos html ou zip

---

### patchCardIndex

```java
CardIndexAPIVO patchCardIndex​(File filecontent,
                              Integer documentIdValue,
                              String updateMode,
                              String mainFile,
                              String formName,
                              String descriptorField,
                              String datasetName)
                       throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Atualização parcial dos arquivos do formulário

---

### putCardIndex

```java
CardIndexAPIVO putCardIndex​(File filecontent,
                            Integer documentIdValue,
                            String updateMode,
                            String mainFile,
                            String formName,
                            String descriptorField,
                            String datasetName)
                     throws Exception
```

- **Parameters:** `filecontent` - Arquivo de conteúdo do formulário
- **Returns:** CardIndexAPIVO objeto com dados do formulário
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Atualiza completa dos arquivos do formulário

---

### deleteCardIndex

```java
boolean deleteCardIndex​(Integer documentId)
                 throws Exception
```

- **Parameters:** `documentId` -
- **Returns:** Boolean true se a rotina executar com sucesso
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5 Manda um formulário para lixeira

---

# Interface CardIndexService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardIndexService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface CardIndexService
extends BaseAPIService
Fornece operações para gerenciamento card index
  Since:
1.5
Author:
vanei.heidemann
```

```java
public interface CardIndexService
extends BaseAPIService
```

Fornece operações para gerenciamento card index

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei.heidemann

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `CardIndexVO` | `create​(CardIndexVO vo)` | Criação de um novo card index |
| `void` | `delete​(Integer documentId)` | Exclusão de um card index |
| `Integer` | `getDefaultFormFolderId()` | Retorna a pasta padrão de formulário |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardIndexService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
CardIndexVO create​(CardIndexVO vo)
            throws com.fluig.sdk.api.common.SDKException
```

Criação de um novo card index

- **Parameters:** `vo` - - object to persist
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### delete

```java
void delete​(Integer documentId)
```

Exclusão de um card index

- **Parameters:** `Integer` - documentId

---

### getDefaultFormFolderId

```java
Integer getDefaultFormFolderId()
                        throws com.fluig.sdk.api.common.SDKException
```

Retorna a pasta padrão de formulário

- **Parameters:** `Integer` - documentId
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface CardService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CardService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface CardService
extends BaseAPIService
Fornece operações para gerenciamento de Card's
  Since:
1.5
Author:
vanei.heidemann
```

```java
public interface CardService
extends BaseAPIService
```

Fornece operações para gerenciamento de Card's

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei.heidemann

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `CardItemVO` | `createItem​(CardItemVO vo)` | Criação de um novo card |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CardService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### createItem

```java
CardItemVO createItem​(CardItemVO vo)
               throws com.fluig.sdk.api.common.SDKException
```

Criação de um novo card

- **Parameters:** `vo` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface CollaborationSDKService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CollaborationSDKService.html)

```java
public interface CollaborationSDKService
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
| `void` | `addGuests​(Long collaborationId, List<String> guests)` |  |
| `String` | `checkConnect​(String appKey)` |  |
| `CollaborationVO` | `findCollaborationById​(Long collaborationId)` |  |
| `CollaborationAppVO` | `getApp​(String appKey)` |  |
| `Map<String,​Serializable>` | `getCollaborationStatus​(Integer documentId, Integer documentVersion)` |  |
| `List<CollaborationAppVO>` | `listApps()` |  |
| `List<UserVO>` | `listCollaborators​(Long collaborationId, String pattern, int limit, int offset)` |  |
| `String` | `startCollaboration​(String appKey, CollaborationVO collaborateVO)` |  |
| `Map<String,​Serializable>` | `startEditingByGuest​(String appKey, String guestCode, CollaborationVO collaborateVO)` |  |
| `String` | `startGuestCollaboration​(String appKey, CollaborationVO collaborateVO)` |  |
| `CollaborationAppVO` | `updateApp​(CollaborationAppVO vo)` |  |
| `Map<String,​Serializable>` | `uploadFlow​(String appKey, CollaborationVO collaborationVO)` |  |
| `void` | `validateUserPermissionToEdit​(int documentId, int documentVersion, String userCode)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CollaborationSDKService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CollaborationSDKService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### listApps

```java
List<CollaborationAppVO> listApps()
```


---

### getApp

```java
CollaborationAppVO getApp​(String appKey)
```


---

### startCollaboration

```java
String startCollaboration​(String appKey,
                          CollaborationVO collaborateVO)
                   throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### uploadFlow

```java
Map<String,​Serializable> uploadFlow​(String appKey,
                                          CollaborationVO collaborationVO)
                                   throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### startGuestCollaboration

```java
String startGuestCollaboration​(String appKey,
                               CollaborationVO collaborateVO)
                        throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### startEditingByGuest

```java
Map<String,​Serializable> startEditingByGuest​(String appKey,
                                                   String guestCode,
                                                   CollaborationVO collaborateVO)
                                            throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### updateApp

```java
CollaborationAppVO updateApp​(CollaborationAppVO vo)
                      throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### addGuests

```java
void addGuests​(Long collaborationId,
               List<String> guests)
        throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### getCollaborationStatus

```java
Map<String,​Serializable> getCollaborationStatus​(Integer documentId,
                                                      Integer documentVersion)
                                               throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### checkConnect

```java
String checkConnect​(String appKey)
             throws com.totvs.technology.foundation.common.exception.FDNException
```

- **Throws:** `com.totvs.technology.foundation.common.exception.FDNException`

---

### listCollaborators

```java
List<UserVO> listCollaborators​(Long collaborationId,
                               String pattern,
                               int limit,
                               int offset)
                        throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findCollaborationById

```java
CollaborationVO findCollaborationById​(Long collaborationId)
                               throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### validateUserPermissionToEdit

```java
void validateUserPermissionToEdit​(int documentId,
                                  int documentVersion,
                                  String userCode)
                           throws Exception
```

- **Throws:** `` `Exception` ``

---

# Interface CommentService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommentService.html)

```java
public interface CommentService
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
| `void` | `editComment​(Long commentId, String text)` | Edit a single comment |
| `CommentVO` | `findComment​(Long sociableId)` | Find a single comment |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CommentService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CommentService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### editComment

```java
void editComment​(Long commentId,
                 String text)
          throws com.fluig.sdk.api.common.SDKException,
                 com.totvs.technology.foundation.common.exception.FDNException,
                 NamingException
```

Edit a single comment

- **Parameters:** `commentId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findComment

```java
CommentVO findComment​(Long sociableId)
               throws NamingException
```

Find a single comment

- **Parameters:** `sociableId` -
- **Throws:** `` `NamingException` ``

---

# Interface CommunityService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/CommunityService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface CommunityService
extends BaseAPIService
Fornece acesso aos serviços de manutenção de comunidades.
  Since:
1.5
Author:
vanei
```

```java
public interface CommunityService
extends BaseAPIService
```

Fornece acesso aos serviços de manutenção de comunidades.

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
| `void` | `addUser​(Long communityId, String alias)` | Adiciona um usuário em uma comunidade. |
| `void` | `addUsers​(String communityAlias, List<String> users)` | Adiciona uma lista de usuários na comunidade |
| `CommunityVO` | `create​(CommunityVO vo)` | Cria uma nova comunidade. |
| `void` | `disablePostEditionAllCommunities()` | Desabilita a edição de post para todas as comunidades, incluindo no papel de usuario |
| `CommunityVO` | `update​(CommunityVO vo)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CommunityService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.CommunityService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
CommunityVO create​(CommunityVO vo)
            throws com.fluig.sdk.api.common.SDKException
```

Cria uma nova comunidade.

- **Parameters:** `vo` - Dados da comunidade a ser criada.
- **Returns:** Comunidade criada.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível criar a comunidade.

---

### addUser

```java
void addUser​(Long communityId,
             String alias)
      throws com.fluig.sdk.api.common.SDKException
```

Adiciona um usuário em uma comunidade.

- **Parameters:** `communityId` - ID da comunidade.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### addUsers

```java
void addUsers​(String communityAlias,
              List<String> users)
       throws com.fluig.sdk.api.common.SDKException
```

Adiciona uma lista de usuários na comunidade

- **Parameters:** `communityAlias` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### update

```java
CommunityVO update​(CommunityVO vo)
            throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### disablePostEditionAllCommunities

```java
void disablePostEditionAllCommunities()
                               throws com.fluig.sdk.api.common.SDKException
```

Desabilita a edição de post para todas as comunidades, incluindo no papel de usuario

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface ContentFilesService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface ContentFilesService
extends BaseAPIService
Disponibiliza operação para upload de arquivo
  Since:
1.5
Author:
vanei.heidemann
```

```java
public interface ContentFilesService
extends BaseAPIService
```

Disponibiliza operação para upload de arquivo

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei.heidemann

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDeployableArtifactsDirectory()` | Recupera diretório do artefato a ser implantado |
| `void` | `upload​(String fileName, byte[] fileContent)` | Executa o upload de um arquivo |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ContentFilesService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ContentFilesService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### upload

```java
void upload​(String fileName,
            byte[] fileContent)
     throws com.fluig.sdk.api.common.SDKException
```

Executa o upload de um arquivo

- **Parameters:** `fileName` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getDeployableArtifactsDirectory

```java
String getDeployableArtifactsDirectory()
                                throws com.fluig.sdk.api.common.SDKException
```

Recupera diretório do artefato a ser implantado

- **Returns:** String diretorio
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

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

---

# Interface DocumentService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface DocumentService
extends BaseAPIService
Fornece acesso aos serviços de documentos (GED).
  Since:
1.5
Author:
vanei
```

```java
public interface DocumentService
extends BaseAPIService
```

Fornece acesso aos serviços de documentos (GED).

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
| `void` | `approveDocument​(int documentId, int version, boolean approved, String observation)` | Aprova ou reprova um documento. |
| `String[]` | `copyDocumentToUploadArea​(int documentId)` | Copia o documento que esta na área de uplaod |
| `DocumentVO` | `createDocument​(DocumentVO documentVO)` | Cria o documento com permissões e aprovadors |
| `DocumentVO` | `createPrivateDocument​(Long companyId, String userId, String fileName, com.fluig.foundation.volume.vo.FDNLocalFileVO file)` | Cria uma documento privado |
| `DocumentVO` | `createPrivateDocument​(Long companyId, String userId, String fileName, String filePath)` | Cria uma documento privado |
| `void` | `deleteDocument​(int documentId)` | Remove o documento |
| `DocumentVO` | `getActive​(Integer documentId)` | Retorna o documento ativo passado o ID do mesmo. |
| `AllocatedDocumentVO` | `getAllocatedDocument​(int documentId, int version)` | Retorna documento com as informações de checkout |
| `SolvedPermissionVO` | `getCurrentUserPermission​(Integer documentId)` |  |
| `List<DocumentApprovementHistoryVO>` | `getDocumentApprovalHistory​(int documentId)` | Return the approvements history of the document |
| `List<DocumentApproverVO>` | `getDocumentApprovers​(int documentId)` | Retrieve all document approvers and yours status. |
| `List<DocumentApproverVO>` | `getDocumentApprovers​(int documentId, boolean checkInheritance)` | Retrieve all document approvers and yours status. |
| `byte[]` | `getDocumentContentAsBytes​(Integer documentId)` | Retorna os bytes do conteúdo do documento. |
| `String` | `getDocumentContentAsString​(Integer documentId, String charsetName)` | Retorna o conteúdo do documento. |
| `List<DocumentPermissionVO>` | `getDocumentPermissions​(int documentId, int version)` | Retorna as permissões do documento |
| `String` | `getDownloadURL​(Integer documentId)` | Retorna a url do documento |
| `Integer` | `getUserPermissions​(Integer documentId, Integer version, String user)` | Retorna a permissão do usuário em um documento. |
| `boolean` | `isCanDownloadDocument​(Long tenantId, int documentId, int version, String userCode, boolean fluigViewer)` |  |
| `boolean` | `isDocumentDeleted​(Long tenantId, int documentId, int version)` |  |
| `void` | `setDocumentApprovers​(Long companyId, DocumentSecurityVO documentSecurityVO)` | Set Approvers for a specific document |
| `void` | `setDocumentPermissions​(int documentId, List<DocumentPermissionVO> permissions)` | Determina as permissões do documento |
| `DocumentVO` | `updateFile​(DocumentVO docVO)` | Update file |
| `void` | `validateDocumentPublicUrlConfiguration​(Long tenantId, int documentId, int version)` | Valida configurações de documento |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.DocumentService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.DocumentService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### getActive

```java
DocumentVO getActive​(Integer documentId)
              throws com.fluig.sdk.api.common.SDKException
```

Retorna o documento ativo passado o ID do mesmo.

- **Parameters:** `documentId` - ID do documento.
- **Returns:** Dados do documento encontrado.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getUserPermissions

```java
Integer getUserPermissions​(Integer documentId,
                           Integer version,
                           String user)
                    throws com.fluig.sdk.api.common.SDKException
```

Retorna a permissão do usuário em um documento.

- **Parameters:** `documentId` - ID do documento.
- **Returns:** Permissão do usuário. Os valores possíveis são: `-1` - Sem permissão, `0` - Leitura, `1` - Gravação, `2` - Modificação, `3` - Controle Total
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha buscando permissão.

---

### getCurrentUserPermission

```java
SolvedPermissionVO getCurrentUserPermission​(Integer documentId)
                                     throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createPrivateDocument

```java
DocumentVO createPrivateDocument​(Long companyId,
                                 String userId,
                                 String fileName,
                                 String filePath)
                          throws com.fluig.sdk.api.common.SDKException
```

Cria uma documento privado

- **Parameters:** `companyId` - ID da empresa
- **Returns:** DocumentVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createPrivateDocument

```java
DocumentVO createPrivateDocument​(Long companyId,
                                 String userId,
                                 String fileName,
                                 com.fluig.foundation.volume.vo.FDNLocalFileVO file)
                          throws com.fluig.sdk.api.common.SDKException
```

Cria uma documento privado

- **Parameters:** `companyId` - ID da empresa
- **Returns:** DocumentVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getAllocatedDocument

```java
AllocatedDocumentVO getAllocatedDocument​(int documentId,
                                         int version)
                                  throws com.fluig.sdk.api.common.SDKException
```

Retorna documento com as informações de checkout

- **Parameters:** `documentId` - Id do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### getDownloadURL

```java
String getDownloadURL​(Integer documentId)
               throws com.fluig.sdk.api.common.SDKException
```

Retorna a url do documento

- **Parameters:** `documentId` - ID do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### getDocumentContentAsString

```java
String getDocumentContentAsString​(Integer documentId,
                                  String charsetName)
                           throws com.fluig.sdk.api.common.SDKException
```

Retorna o conteúdo do documento.

Exemplo de uso: var string = fluigAPI.getDocumentService().getDocumentContentAsString(documentId, "UTF-8");

- **Parameters:** `documentId` - ID do documento
- **Returns:** byte\[\] Array de byte do conteúdo do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.8.0

---

### getDocumentContentAsBytes

```java
byte[] getDocumentContentAsBytes​(Integer documentId)
                          throws com.fluig.sdk.api.common.SDKException
```

Retorna os bytes do conteúdo do documento.

Para converter o byte\[\] para String usando os sdk do Fluig em java: var string = new String(FluigAPI.getDocumentService().getDocumentContentAsBytes(documentId), "UTF-8");

Para converter o byte\[\] para String usando javascript (evento de processo | dataset avançado): var string = new java.lang.String(fluigAPI.getDocumentService().getDocumentContentAsBytes(documentId), "UTF-8");

- **Parameters:** `documentId` - ID do documento
- **Returns:** byte\[\] Array de byte do conteúdo do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.8.0

---

### createDocument

```java
DocumentVO createDocument​(DocumentVO documentVO)
                   throws com.fluig.sdk.api.common.SDKException
```

Cria o documento com permissões e aprovadors

- **Parameters:** `documentVO` - Objeto do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### deleteDocument

```java
void deleteDocument​(int documentId)
             throws com.fluig.sdk.api.common.SDKException
```

Remove o documento

- **Parameters:** `documentId` - ID do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### copyDocumentToUploadArea

```java
String[] copyDocumentToUploadArea​(int documentId)
                           throws com.fluig.sdk.api.common.SDKException
```

Copia o documento que esta na área de uplaod

- **Parameters:** `documentId` - ID do documento
- **Returns:** Array de bytes documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### setDocumentPermissions

```java
void setDocumentPermissions​(int documentId,
                            List<DocumentPermissionVO> permissions)
                     throws com.fluig.sdk.api.common.SDKException
```

Determina as permissões do documento

- **Parameters:** `documentId` - ID do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### getDocumentPermissions

```java
List<DocumentPermissionVO> getDocumentPermissions​(int documentId,
                                                  int version)
                                           throws com.fluig.sdk.api.common.SDKException
```

Retorna as permissões do documento

- **Parameters:** `documentId` - ID do documento
- **Returns:** Listas de permissões do documento
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### approveDocument

```java
void approveDocument​(int documentId,
                     int version,
                     boolean approved,
                     String observation)
              throws com.fluig.sdk.api.common.SDKException
```

Aprova ou reprova um documento.

- **Parameters:** `companyId` - ID da empresa
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha na aprovação.
- **Since:** 1.5.12

---

### getDocumentApprovers

```java
List<DocumentApproverVO> getDocumentApprovers​(int documentId)
                                       throws com.fluig.sdk.api.common.SDKException
```

Retrieve all document approvers and yours status.

- **Parameters:** `documentId` - ID do documento.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha na aprovação.
- **Since:** 1.5.12

---

### getDocumentApprovers

```java
List<DocumentApproverVO> getDocumentApprovers​(int documentId,
                                              boolean checkInheritance)
                                       throws com.fluig.sdk.api.common.SDKException
```

Retrieve all document approvers and yours status.

- **Parameters:** `documentId` - ID do documento.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha na aprovação.
- **Since:** 1.7.0

---

### updateFile

```java
DocumentVO updateFile​(DocumentVO docVO)
               throws com.fluig.sdk.api.common.SDKException
```

Update file

- **Parameters:** `docVO` - Documento objeto
- **Returns:** Documento Objeto
- **Throws:** `com.fluig.sdk.api.common.SDKException` - 1.5.12

---

### setDocumentApprovers

```java
void setDocumentApprovers​(Long companyId,
                          DocumentSecurityVO documentSecurityVO)
                   throws com.fluig.sdk.api.common.SDKException
```

Set Approvers for a specific document

- **Parameters:** `Long` - companyId
- **Throws:** `` `Exception` ``
- **Since:** 1.5.11

---

### getDocumentApprovalHistory

```java
List<DocumentApprovementHistoryVO> getDocumentApprovalHistory​(int documentId)
                                                       throws com.fluig.sdk.api.common.SDKException
```

Return the approvements history of the document

- **Parameters:** `int` - documentId
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.12

---

### validateDocumentPublicUrlConfiguration

```java
void validateDocumentPublicUrlConfiguration​(Long tenantId,
                                            int documentId,
                                            int version)
                                     throws Exception
```

Valida configurações de documento

- **Parameters:** `tenantId` -
- **Throws:** `` `Exception` ``

---

### isCanDownloadDocument

```java
boolean isCanDownloadDocument​(Long tenantId,
                              int documentId,
                              int version,
                              String userCode,
                              boolean fluigViewer)
                       throws Exception
```

- **Throws:** `` `Exception` ``

---

### isDocumentDeleted

```java
boolean isDocumentDeleted​(Long tenantId,
                          int documentId,
                          int version)
                   throws Exception
```

- **Throws:** `` `Exception` ``

---

# Interface DocumentationProxyServiceService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentationProxyServiceService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/DocumentationProxyServiceService.html)

```java
public interface DocumentationProxyServiceService
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
| `String` | `getUrlResult​(String expression)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.DocumentationProxyServiceService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.DocumentationProxyServiceService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### getUrlResult

```java
String getUrlResult​(String expression)
             throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface FavoritesService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FavoritesService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface FavoritesService
extends BaseAPIService
Fornece acesso aos serviços de favoritos.
  Since:
1.5.2
Author:
marcelo.pereira
```

```java
public interface FavoritesService
extends BaseAPIService
```

Fornece acesso aos serviços de favoritos.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.2
- **Author:** marcelo.pereira

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<DocumentVO>` | `findFavoritesDocuments​(String colleagueId)` | Busca os documentos favoritos |
| `List<ProcessDefinitionVersionVO>` | `findFavoritesProcess​(String colleagueId)` | Busca os processos favoritos |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FavoritesService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FavoritesService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findFavoritesDocuments

```java
List<DocumentVO> findFavoritesDocuments​(String colleagueId)
                                 throws com.fluig.sdk.api.common.SDKException
```

Busca os documentos favoritos

- **Parameters:** `colleagueId` -
- **Returns:** Documentos favoritos
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os documentos favoritos

---

### findFavoritesProcess

```java
List<ProcessDefinitionVersionVO> findFavoritesProcess​(String colleagueId)
                                               throws com.fluig.sdk.api.common.SDKException
```

Busca os processos favoritos

- **Parameters:** `colleagueId` -
- **Returns:** Processos favoritos
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os processos favoritos

---

# Interface FilterAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/FilterAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FilterAPIService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface FilterAPIService
extends BaseAPIService
Fornece acesso aos serviços de filtros.
  Since:
1.6.0
Author:
leandro.carlos
```

```java
public interface FilterAPIService
extends BaseAPIService
```

Fornece acesso aos serviços de filtros.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.6.0
- **Author:** leandro.carlos

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `FilterResultVO` | `createFilter​(FilterVO filterVO)` |  |
| `FilterResultVO` | `findById​(Long filterId)` |  |
| `List<FilterGroupResultVO>` | `findFiltersGroupByFilterId​(Long filterId, String pattern, int limit, int offset, String orderBy)` |  |
| `List<FilterResultVO>` | `getProcessFilters​(boolean onlyMyFilters, boolean findPublicFilters, String pattern, int limit, int offset, String orderBy)` |  |
| `void` | `removeFilters​(List<Long> filtersId)` |  |
| `List<FilterGroupResultVO>` | `saveFiltersGroup​(FilterGroupVO filterGroupVO)` |  |
| `FilterResultVO` | `updateFilter​(FilterVO filterVO)` |  |
| `FilterResultVO` | `updateFilterName​(long filterId, FilterUpdateNameVO filterUpdateNameVO)` |  |
| `void` | `updateFilterSequence​(Long applicationInstanceId, Map<String,​String> filtersSequence)` |  |
| `FilterResultVO` | `updatePublicProcessFilter​(long filterId, boolean isPublic)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FilterAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FilterAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### getProcessFilters

```java
List<FilterResultVO> getProcessFilters​(boolean onlyMyFilters,
                                       boolean findPublicFilters,
                                       String pattern,
                                       int limit,
                                       int offset,
                                       String orderBy)
                                throws Exception
```

- **Throws:** `` `Exception` ``

---

### findById

```java
FilterResultVO findById​(Long filterId)
                 throws Exception
```

- **Throws:** `` `Exception` ``

---

### updatePublicProcessFilter

```java
FilterResultVO updatePublicProcessFilter​(long filterId,
                                         boolean isPublic)
                                  throws Exception
```

- **Throws:** `` `Exception` ``

---

### removeFilters

```java
void removeFilters​(List<Long> filtersId)
            throws Exception
```

- **Throws:** `` `Exception` ``

---

### createFilter

```java
FilterResultVO createFilter​(FilterVO filterVO)
                     throws Exception
```

- **Throws:** `` `Exception` ``

---

### updateFilter

```java
FilterResultVO updateFilter​(FilterVO filterVO)
                     throws Exception
```

- **Throws:** `` `Exception` ``

---

### findFiltersGroupByFilterId

```java
List<FilterGroupResultVO> findFiltersGroupByFilterId​(Long filterId,
                                                     String pattern,
                                                     int limit,
                                                     int offset,
                                                     String orderBy)
                                              throws Exception
```

- **Throws:** `` `Exception` ``

---

### saveFiltersGroup

```java
List<FilterGroupResultVO> saveFiltersGroup​(FilterGroupVO filterGroupVO)
                                    throws Exception
```

- **Throws:** `` `Exception` ``

---

### updateFilterSequence

```java
void updateFilterSequence​(Long applicationInstanceId,
                          Map<String,​String> filtersSequence)
                   throws Exception
```

- **Throws:** `` `Exception` ``

---

### updateFilterName

```java
FilterResultVO updateFilterName​(long filterId,
                                FilterUpdateNameVO filterUpdateNameVO)
                         throws Exception
```

- **Throws:** `` `Exception` ``

---

# Interface FolderDocumentService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/FolderDocumentService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface FolderDocumentService
extends BaseAPIService
Fornece acesso aos serviços de pastas (GED).
  Since:
1.5
Author:
vanei
```

```java
public interface FolderDocumentService
extends BaseAPIService
```

Fornece acesso aos serviços de pastas (GED).

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
| `FolderVO` | `create​(FolderVO vo)` | Criação de uma nova pasta |
| `DocumentVO` | `get​(int documentId)` | Recupera um documento através do id |
| `List<DocumentVO>` | `list​(int folderId)` | Recupera lista de documentos através do id da pasta |
| `List<DocumentVO>` | `list​(int folderId, int permission)` | Recupera lista de documentos através do id da pasta |
| `List<DocumentVO>` | `listDocumentsByFolder​(FolderVO folderVO, int limit, int offset)` | Retorna os documentos de uma pasta |
| `DocumentVO` | `updateDocumentDescription​(long companyId, int documentId, String description)` | Atualiza documento ou pasta |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FolderDocumentService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.FolderDocumentService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### get

```java
DocumentVO get​(int documentId)
        throws com.fluig.sdk.api.common.SDKException
```

Recupera um documento através do id

- **Parameters:** `documentId` -
- **Returns:** DocumentVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### create

```java
FolderVO create​(FolderVO vo)
         throws com.fluig.sdk.api.common.SDKException
```

Criação de uma nova pasta

- **Parameters:** `vo` -
- **Returns:** FolderVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<DocumentVO> list​(int folderId)
               throws com.fluig.sdk.api.common.SDKException
```

Recupera lista de documentos através do id da pasta

- **Parameters:** `folderId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### updateDocumentDescription

```java
DocumentVO updateDocumentDescription​(long companyId,
                                     int documentId,
                                     String description)
                              throws com.fluig.sdk.api.common.SDKException
```

Atualiza documento ou pasta

- **Parameters:** `companyId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<DocumentVO> list​(int folderId,
                      int permission)
               throws com.fluig.sdk.api.common.SDKException
```

Recupera lista de documentos através do id da pasta

- **Parameters:** `folderId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listDocumentsByFolder

```java
List<DocumentVO> listDocumentsByFolder​(FolderVO folderVO,
                                       int limit,
                                       int offset)
                                throws com.fluig.sdk.api.common.SDKException
```

Retorna os documentos de uma pasta

- **Parameters:** `FolderVO` -
- **Returns:** List
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

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

---

# Interface GroupService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/GroupService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface GroupService
extends BaseAPIService
Fornece acesso aos serviços de grupos.
  Since:
1.5
Author:
vanei
```

```java
public interface GroupService
extends BaseAPIService
```

Fornece acesso aos serviços de grupos.

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
| `void` | `addUsers​(Long tenantId, String groupCode, List<String> logins)` |  |
| `List<String>` | `addUsers​(String groupCode, List<String> logins)` | Adiciona um usuário ao grupo. |
| `Boolean` | `containsUser​(String groupCode, String genericId)` | Verifica se o usuário pertence ao grupo. |
| `GroupVO` | `create​(GroupVO vo)` | Cria um novo grupo. |
| `GroupVO` | `create​(GroupVO vo, Long tenantId)` | Create grupo |
| `List<GroupVO>` | `findGroupsByUser​(String genericId, String pattern)` | Retorna grupo por usuário |
| `List<ColleagueVO>` | `findUsersByGroup​(String groupId, String pattern, int limit, int offset, String order)` | Retorna usuários por grupo |
| `void` | `removeUser​(Long tenantId, String groupCode, String alias)` | Remove um usuário do grupo. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.GroupService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.GroupService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
GroupVO create​(GroupVO vo)
        throws com.fluig.sdk.api.common.SDKException
```

Cria um novo grupo.

- **Parameters:** `vo` - Dados do grupo.
- **Returns:** Dados do grupo criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o grupo.

---

### containsUser

```java
Boolean containsUser​(String groupCode,
                     String genericId)
              throws com.fluig.sdk.api.common.SDKException
```

Verifica se o usuário pertence ao grupo.

- **Parameters:** `groupCode` - Código do grupo.
- **Returns:** **true** se o usuário pertence ao grupo, **false** caso contrário.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha buscando informação.

---

### addUsers

```java
List<String> addUsers​(String groupCode,
                      List<String> logins)
               throws com.fluig.sdk.api.common.SDKException
```

Adiciona um usuário ao grupo.

- **Parameters:** `groupCode` - Código do grupo.
- **Returns:** List Lista de usuários que não foram adicionados ao grupo
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha adicionando usuário ao grupo.

---

### addUsers

```java
void addUsers​(Long tenantId,
              String groupCode,
              List<String> logins)
       throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### removeUser

```java
void removeUser​(Long tenantId,
                String groupCode,
                String alias)
         throws com.fluig.sdk.api.common.SDKException
```

Remove um usuário do grupo.

- **Parameters:** `groupCode` - Código do grupo.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha adicionando usuário ao grupo.

---

### findUsersByGroup

```java
List<ColleagueVO> findUsersByGroup​(String groupId,
                                   String pattern,
                                   int limit,
                                   int offset,
                                   String order)
                            throws com.fluig.sdk.api.common.SDKException
```

Retorna usuários por grupo

- **Parameters:** `groupId` -
- **Returns:** lista dos usuários do grupo.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha ao retornar os usuários do grupo

---

### findGroupsByUser

```java
List<GroupVO> findGroupsByUser​(String genericId,
                               String pattern)
                        throws com.fluig.sdk.api.common.SDKException
```

Retorna grupo por usuário

- **Parameters:** `genericId` -
- **Returns:** lista dos grupos de usuário.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Falha ao retornar os grupo de usuário

---

### create

```java
GroupVO create​(GroupVO vo,
               Long tenantId)
        throws com.fluig.sdk.api.common.SDKException
```

Create grupo

- **Parameters:** `vo` -
- **Returns:** Dados do grupo criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o grupo.

---

# Interface HolidayAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/HolidayAPIService.html)

```java
public interface HolidayAPIService
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
| `HolidayVO` | `create​(HolidayVO holidayVO)` | Cria feriado. |
| `void` | `delete​(Long id)` | Deleta feriado. |
| `HolidayVO` | `find​(Long id, String expand)` | Busca feriado. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<HolidayVO>` | `find​(String description, Long localId, List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams, int page, int pageSize, int offset, int limit, boolean populateLocals, boolean populateUsers, boolean exclusive)` | Busca feriado. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<HolidayVO>` | `find​(String description, String localId, String order, String page, String pageSize, String offset, String limit, String expand, String exclusive)` | Busca feriado. |
| `List<HolidayVO>` | `findAll()` | Busca todos os feriados da base a partir do código da empresa do usuário logado. |
| `HolidayVO` | `patch​(Long id, HolidayVO holidayVO)` | Atualiza feriado. |
| `HolidayVO` | `update​(Long id, HolidayVO holidayVO)` | Atualiza feriado. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.HolidayAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.HolidayAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
HolidayVO create​(HolidayVO holidayVO)
          throws Exception
```

Cria feriado.

- **Parameters:** `holidayVO` - VO do feriado.
- **Returns:** VO do feriado criado.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### delete

```java
void delete​(Long id)
     throws Exception
```

Deleta feriado.

- **Parameters:** `id` - Código do feriado.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### update

```java
HolidayVO update​(Long id,
                 HolidayVO holidayVO)
          throws Exception
```

Atualiza feriado.

- **Parameters:** `id` - Código atual do feriado.
- **Returns:** VO do feriado atualizado.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
HolidayVO find​(Long id,
               String expand)
        throws Exception
```

Busca feriado.

- **Parameters:** `id` - Código do feriado.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### findAll

```java
List<HolidayVO> findAll()
                 throws Exception
```

Busca todos os feriados da base a partir do código da empresa do usuário logado.

- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### patch

```java
HolidayVO patch​(Long id,
                HolidayVO holidayVO)
         throws Exception
```

Atualiza feriado.

- **Parameters:** `id` - Código atual do feriado.
- **Returns:** VO do feriado atualizado.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<HolidayVO> find​(String description,
                                                                                         String localId,
                                                                                         String order,
                                                                                         String page,
                                                                                         String pageSize,
                                                                                         String offset,
                                                                                         String limit,
                                                                                         String expand,
                                                                                         String exclusive)
                                                                                  throws Exception
```

Busca feriado.

- **Parameters:** `description` - Descrição do feriado.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<HolidayVO> find​(String description,
                                                                                         Long localId,
                                                                                         List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                         int page,
                                                                                         int pageSize,
                                                                                         int offset,
                                                                                         int limit,
                                                                                         boolean populateLocals,
                                                                                         boolean populateUsers,
                                                                                         boolean exclusive)
                                                                                  throws Exception
```

Busca feriado.

- **Parameters:** `description` - Descrição do feriado.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

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

---

# Interface IdentityService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/IdentityService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/IdentityService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface IdentityService
extends BaseAPIService
Grant access to global parameter services
  Since:
1.5.3
Author:
vinicius.michelutti
```

```java
public interface IdentityService
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
| `UserAuthTokenSessionVO` | `createSession()` | Retorna o uma nova sessão do identity |
| `void` | `updateSession()` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.IdentityService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.IdentityService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### createSession

```java
UserAuthTokenSessionVO createSession()
                              throws Exception
```

Retorna o uma nova sessão do identity

- **Returns:** As informações da nova sessão, juntamente com a informaçõo do usuário referente a tal sessão
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### updateSession

```java
void updateSession()
            throws Exception
```

- **Throws:** `` `Exception` ``

---

# Interface JobService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/JobService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/JobService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface JobService
extends BaseAPIService
Fornece acesso a serviços de Job Scheduler.
  Since:
1.5.8
Author:
marcus.carvalho
```

```java
public interface JobService
extends BaseAPIService
```

Fornece acesso a serviços de Job Scheduler.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.8
- **Author:** marcus.carvalho

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `JobVO` | `createDaily​(JobVO vo)` |  |
| `JobVO` | `createMonthly​(JobVO vo)` |  |
| `JobVO` | `createWeekly​(JobVO vo)` |  |
| `void` | `delete​(JobVO vo)` |  |
| `List<JobVO>` | `list​(Integer limit, Integer offset, String filter)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.JobService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.JobService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### createDaily

```java
JobVO createDaily​(JobVO vo)
           throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createWeekly

```java
JobVO createWeekly​(JobVO vo)
            throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createMonthly

```java
JobVO createMonthly​(JobVO vo)
             throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### delete

```java
void delete​(JobVO vo)
     throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<JobVO> list​(Integer limit,
                 Integer offset,
                 String filter)
          throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface LocalAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/LocalAPIService.html)

```java
public interface LocalAPIService
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
| `LocalVO` | `create​(LocalVO local)` | Cria localização. |
| `LocalUserVO` | `createLocalUser​(Long id, LocalUserVO localUserVO)` |  |
| `LocalUserVO` | `createLocalUser​(String id, LocalUserVO localUserVO)` |  |
| `List<LocalUserVO>` | `createLocalUserByGroup​(String localId, String group)` |  |
| `void` | `delete​(Long id)` | Deleta localização. |
| `void` | `delete​(String id)` | Deleta localização. |
| `void` | `deleteHoliday​(Long id, Long holidayId)` | Deleta o vínculo do feriado ao local. |
| `void` | `deleteLocalHoliday​(String id, String holidayId)` | Deleta o vínculo do feriado ao local. |
| `void` | `deleteLocalUser​(Long id, String userCode)` | Deleta localização. |
| `void` | `deleteLocalUser​(String id, String userCode)` | Deleta localização. |
| `LocalVO` | `find​(Long id, boolean populateLocalUsers, boolean populateHolidays)` | Pesquisa localização com id específico. |
| `LocalVO` | `find​(String id, String expand)` | Pesquisa localização com id específico. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO>` | `find​(String name, String order, String page, String pageSize, String expand)` | Pesquisa por parametros localização. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO>` | `find​(String name, String order, String page, String pageSize, String offset, String limit, String expand)` | Pesquisa por parametros localização. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO>` | `find​(String name, List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams, int page, int pageSize, boolean populateUsers, boolean populateHolidays)` | Pesquisa por parametros localização. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO>` | `find​(String name, List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams, int page, int pageSize, int offset, int limit, boolean populateUsers, boolean populateHolidays)` | Pesquisa por parametros localização. |
| `List<LocalVO>` | `findAll()` | Pesquisa todas localizações da empresa do usuário logado. |
| `LocalVO` | `findByUser​(String userCode)` | Procura pelo local do usuário. |
| `LocalVO` | `findByUser​(String userCode, String expand)` | Procura pelo local do usuário. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO>` | `findUnrelatedUsers​(Long id, String name, List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams, int page, int pageSize, int offset, int limit)` | Pesquisa por usuários sem relações com qualquer local. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO>` | `findUnrelatedUsers​(String id, String name, String order, String page, String pageSize, String offset, String limit)` | Pesquisa por usuários sem relações com qualquer local. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO>` | `findUsers​(Long localId, String name, List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams, int page, int pageSize, int offset, int limit)` | Pesquisa por relações entre usuários e localizações. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO>` | `findUsers​(String localId, String name, String order, String page, String pageSize, String offset, String limit)` | Pesquisa por relações entre usuários e localizações. |
| `String` | `getTimezone​(String latitude, String longitude)` | Busca o timezone pela latitude e longitude informada. |
| `LocalVO` | `patch​(LocalVO local)` | Atualiza parametros específicos da localização. |
| `LocalVO` | `patch​(String id, LocalVO local)` | Atualiza parametros específicos da localização. |
| `LocalVO` | `update​(LocalVO local)` | Atualiza localização. |
| `LocalVO` | `update​(String id, LocalVO local)` | Atualiza localização. |
| `LocalVO` | `updateDefault​(String id)` | Atualiza estado padrão da localização. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.LocalAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.LocalAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
LocalVO create​(LocalVO local)
        throws Exception
```

Cria localização.

- **Parameters:** `local` - VO da localização.
- **Returns:** VO da localização criada.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### delete

```java
void delete​(String id)
     throws Exception
```

Deleta localização.

- **Parameters:** `id` - Id da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### delete

```java
void delete​(Long id)
     throws Exception
```

Deleta localização.

- **Parameters:** `id` - Id da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### findAll

```java
List<LocalVO> findAll()
               throws Exception
```

Pesquisa todas localizações da empresa do usuário logado.

- **Returns:** Lista de VOs da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
LocalVO find​(Long id,
             boolean populateLocalUsers,
             boolean populateHolidays)
      throws Exception
```

Pesquisa localização com id específico.

- **Parameters:** `id` - Id da localização.
- **Returns:** VO da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
LocalVO find​(String id,
             String expand)
      throws Exception
```

Pesquisa localização com id específico.

- **Parameters:** `id` - Id da localização.
- **Returns:** VO da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### update

```java
LocalVO update​(String id,
               LocalVO local)
        throws Exception
```

Atualiza localização.

- **Parameters:** `id` - Id a ser atualizado.
- **Returns:** VO da localização atualizada.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### update

```java
LocalVO update​(LocalVO local)
        throws Exception
```

Atualiza localização.

- **Parameters:** `local` - VO da localização.
- **Returns:** VO da localização atualizada.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### patch

```java
LocalVO patch​(LocalVO local)
       throws Exception
```

Atualiza parametros específicos da localização.

- **Parameters:** `local` - VO da localização.
- **Returns:** VO da localização criada.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### updateDefault

```java
LocalVO updateDefault​(String id)
               throws Exception
```

Atualiza estado padrão da localização.

- **Parameters:** `id` - Id da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                       String order,
                                                                                       String page,
                                                                                       String pageSize,
                                                                                       String expand)
                                                                                throws Exception
```

Pesquisa por parametros localização.

- **Parameters:** `name` - Nome da localização.
- **Returns:** VOs das localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                       List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                       int page,
                                                                                       int pageSize,
                                                                                       boolean populateUsers,
                                                                                       boolean populateHolidays)
                                                                                throws Exception
```

Pesquisa por parametros localização.

- **Parameters:** `name` - Nome da localização.
- **Returns:** VOs das localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                       String order,
                                                                                       String page,
                                                                                       String pageSize,
                                                                                       String offset,
                                                                                       String limit,
                                                                                       String expand)
                                                                                throws Exception
```

Pesquisa por parametros localização.

- **Parameters:** `name` - Nome da localização.
- **Returns:** VOs das localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### find

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalVO> find​(String name,
                                                                                       List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                       int page,
                                                                                       int pageSize,
                                                                                       int offset,
                                                                                       int limit,
                                                                                       boolean populateUsers,
                                                                                       boolean populateHolidays)
                                                                                throws Exception
```

Pesquisa por parametros localização.

- **Parameters:** `name` - Nome da localização.
- **Returns:** VOs das localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### findUsers

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUsers​(String localId,
                                                                                                String name,
                                                                                                String order,
                                                                                                String page,
                                                                                                String pageSize,
                                                                                                String offset,
                                                                                                String limit)
                                                                                         throws Exception
```

Pesquisa por relações entre usuários e localizações.

- **Parameters:** `localId` - Id da localização.
- **Returns:** VOs dos relacionamentos entre usuários e localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### findUsers

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUsers​(Long localId,
                                                                                                String name,
                                                                                                List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                int page,
                                                                                                int pageSize,
                                                                                                int offset,
                                                                                                int limit)
                                                                                         throws Exception
```

Pesquisa por relações entre usuários e localizações.

- **Parameters:** `localId` - Id da localização.
- **Returns:** VOs dos relacionamentos entre usuários e localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### createLocalUser

```java
LocalUserVO createLocalUser​(Long id,
                            LocalUserVO localUserVO)
                     throws Exception
```

- **Throws:** `` `Exception` ``

---

### createLocalUser

```java
LocalUserVO createLocalUser​(String id,
                            LocalUserVO localUserVO)
                     throws Exception
```

- **Throws:** `` `Exception` ``

---

### findUnrelatedUsers

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUnrelatedUsers​(String id,
                                                                                                         String name,
                                                                                                         String order,
                                                                                                         String page,
                                                                                                         String pageSize,
                                                                                                         String offset,
                                                                                                         String limit)
                                                                                                  throws Exception
```

Pesquisa por usuários sem relações com qualquer local.

- **Parameters:** `id` - Id da localização.
- **Returns:** VOs dos relacionamentos entre usuários e localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### findUnrelatedUsers

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<LocalUserVO> findUnrelatedUsers​(Long id,
                                                                                                         String name,
                                                                                                         List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                         int page,
                                                                                                         int pageSize,
                                                                                                         int offset,
                                                                                                         int limit)
                                                                                                  throws Exception
```

Pesquisa por usuários sem relações com qualquer local.

- **Parameters:** `id` - Id da localização.
- **Returns:** VOs dos relacionamentos entre usuários e localizações.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### deleteLocalUser

```java
void deleteLocalUser​(Long id,
                     String userCode)
              throws Exception
```

Deleta localização.

- **Parameters:** `id` - Id da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### deleteLocalUser

```java
void deleteLocalUser​(String id,
                     String userCode)
              throws Exception
```

Deleta localização.

- **Parameters:** `id` - Id da localização.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### findByUser

```java
LocalVO findByUser​(String userCode)
            throws Exception
```

Procura pelo local do usuário.

- **Parameters:** `userCode` - Código do usuário.
- **Returns:** Local do usuário.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### findByUser

```java
LocalVO findByUser​(String userCode,
                   String expand)
            throws Exception
```

Procura pelo local do usuário.

- **Parameters:** `userCode` - Código do usuário.
- **Returns:** Local do usuário.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### patch

```java
LocalVO patch​(String id,
              LocalVO local)
       throws Exception
```

Atualiza parametros específicos da localização.

- **Parameters:** `id` - ID do local.
- **Returns:** VO da localização criada.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### deleteLocalHoliday

```java
void deleteLocalHoliday​(String id,
                        String holidayId)
                 throws Exception
```

Deleta o vínculo do feriado ao local.

- **Parameters:** `id` - ID do local.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### deleteHoliday

```java
void deleteHoliday​(Long id,
                   Long holidayId)
            throws Exception
```

Deleta o vínculo do feriado ao local.

- **Parameters:** `id` - ID do local.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### getTimezone

```java
String getTimezone​(String latitude,
                   String longitude)
            throws Exception
```

Busca o timezone pela latitude e longitude informada.

- **Parameters:** `latitude` - Código da latitude.
- **Throws:** `` `Exception` `` - Qualquer exceção.

---

### createLocalUserByGroup

```java
List<LocalUserVO> createLocalUserByGroup​(String localId,
                                         String group)
                                  throws Exception
```

- **Parameters:** `id` -
- **Returns:** List
- **Throws:** `` `Exception` ``

---

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

---

# Interface OAuthUserService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/OAuthUserService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/OAuthUserService.html)

```java
public interface OAuthUserService
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
| `OAuthSdkVO` | `generateUserOAuthKeys​(String appKey, String login)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.OAuthUserService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.OAuthUserService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### generateUserOAuthKeys

```java
OAuthSdkVO generateUserOAuthKeys​(String appKey,
                                 String login)
                          throws Exception
```

- **Throws:** `` `Exception` ``

---

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

---

# Interface PageWidgetService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageWidgetService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PageWidgetService.html)

```java
public interface PageWidgetService
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
| `void` | `disableForMobileApp​(long instanceId)` |  |
| `void` | `enableForMobileApp​(long instanceId)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PageWidgetService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PageWidgetService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### enableForMobileApp

```java
void enableForMobileApp​(long instanceId)
                 throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### disableForMobileApp

```java
void disableForMobileApp​(long instanceId)
                  throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface PostService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/PostService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface PostService
extends BaseAPIService
Fornece acesso aos serviços de post.
  Since:
1.5
Author:
vanei
```

```java
public interface PostService
extends BaseAPIService
```

Fornece acesso aos serviços de post.

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
| `PostVO` | `create​(PostVO vo)` | Realiza um post em uma timeline, seja pessoal ou de alguma comunidade. |
| `PostVO` | `createWithUpload​(PostVO vo)` | Realiza um post com anexo em uma timeline, seja pessoal ou de alguma comunidade. |
| `void` | `editPost​(Long postId, String text)` | Edit a single post |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PostService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.PostService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
PostVO create​(PostVO vo)
       throws com.fluig.sdk.api.common.SDKException
```

Realiza um post em uma timeline, seja pessoal ou de alguma comunidade.

- **Parameters:** `vo` - Dados do post.
- **Returns:** Dados do post criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível efetuar o post.

---

### createWithUpload

```java
PostVO createWithUpload​(PostVO vo)
                 throws com.fluig.sdk.api.common.SDKException
```

Realiza um post com anexo em uma timeline, seja pessoal ou de alguma comunidade.

- **Parameters:** `vo` - Dados do post.
- **Returns:** Dados do post criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível efetuar o post.

---

### editPost

```java
void editPost​(Long postId,
              String text)
       throws com.fluig.sdk.api.common.SDKException,
              com.totvs.technology.foundation.common.exception.FDNException,
              NamingException
```

Edit a single post

- **Parameters:** `postId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface SearchService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SearchService.html)

```java
public interface SearchService
extends BaseAPIService
```

Fornece acesso aos serviços de busca

- **All Superinterfaces:** BaseAPIService

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |
| `static int` | `MAX_INFLUENCERS_RESULT` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `DefaultSearchResponse` | `findInfluencers​(DefaultSearchRequest search)` | Retorna lista de influenciadores para um assunto(#tag) |
| `DefaultSearchResponse` | `findInfluencers​(String search)` |  |
| `List<Map<String,​Object>>` | `groupedSearch​(DefaultSearchRequest request)` | Retorna uma lista de resultados agrupadas |
| `List<Map<String,​Object>>` | `groupedSearchByType​(DefaultSearchRequest request)` | Retorna uma lista de resultados agrupadas por tipo |
| `DefaultSearchResponse` | `search​(DefaultSearchRequest request)` | Retorna a pesquisa padrão, com os tipos de documentos encontrados em forma de lista |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SearchService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SearchService.JNDI_REMOTE_NAME)

---

### MAX_INFLUENCERS_RESULT

```java
static final int MAX_INFLUENCERS_RESULT
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SearchService.MAX_INFLUENCERS_RESULT)


## Detalhes dos Métodos

### search

```java
DefaultSearchResponse search​(DefaultSearchRequest request)
                      throws com.fluig.sdk.api.common.SDKException
```

Retorna a pesquisa padrão, com os tipos de documentos encontrados em forma de lista

- **Parameters:** `request` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findInfluencers

```java
DefaultSearchResponse findInfluencers​(DefaultSearchRequest search)
                               throws com.fluig.sdk.api.common.SDKException
```

Retorna lista de influenciadores para um assunto(#tag)

- **Parameters:** `String` - search
- **Returns:** `InfluencersSearch`
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findInfluencers

```java
DefaultSearchResponse findInfluencers​(String search)
                               throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### groupedSearch

```java
List<Map<String,​Object>> groupedSearch​(DefaultSearchRequest request)
                                      throws com.fluig.sdk.api.common.SDKException,
                                             NamingException
```

Retorna uma lista de resultados agrupadas

- **Parameters:** `request` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### groupedSearchByType

```java
List<Map<String,​Object>> groupedSearchByType​(DefaultSearchRequest request)
                                            throws com.fluig.sdk.api.common.SDKException,
                                                   NamingException
```

Retorna uma lista de resultados agrupadas por tipo

- **Parameters:** `request` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface SecurityService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SecurityService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface SecurityService
extends BaseAPIService
Fornece acesso aos serviços de segurança.
  Since:
1.5
Author:
vanei
```

```java
public interface SecurityService
extends BaseAPIService
```

Fornece acesso aos serviços de segurança.

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
| `void` | `changeUserPassword​(String login, String currentPassword, String newPassword, String confirmNewPassword)` | Change user password |
| `Boolean` | `createOrUpdateTenantData​(String key, String value)` | Cria um bjeto chave/valor no tenantData |
| `void` | `createPermissions​(String resourceCode, List<PermissionVO> permissions)` | Cria as permissões para um determinado recurso |
| `void` | `deletePermissions​(String resourceCode, List<PermissionVO> permissions)` | Deleta as permissões para um determinado recurso |
| `GroupVO` | `findGroupByTenantIdAndCode​(Long tenantId, String code)` | Retorna o grupo por code e tenant |
| `List<TenantVO>` | `findTenants()` | Retorna a lista de tentants. |
| `TenantVO` | `getCurrentTenant()` | Get the current tenant |
| `TenantVO` | `getCurrentTenantById​(Long tenantId)` | Get the current tenant |
| `Long` | `getCurrentTenantId()` | Retorna o tenantId logado |
| `List<PermissionVO>` | `getPermissionsByResourceCode​(String resourceCode)` | Lista as permissões do recurso informado |
| `String` | `getTimeZoneLocalUser​(long companyId, String userCode)` |  |
| `Boolean` | `hasPermission​(String resource, String permiss)` | Verifica se o usuário logado possui certa permissão no recurso dado. |
| `List<PermissionAssetVO>` | `listResourcesByCategory​(String category, String filter, int offset, int limit)` | Lista os recursos da categoria informada |
| `List<AdminUserVO>` | `listTenantAdmins​(Long tenantId)` | Retorna os admins de um tenant |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SecurityService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SecurityService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### hasPermission

```java
Boolean hasPermission​(String resource,
                      String permiss)
               throws com.fluig.sdk.api.common.SDKException
```

Verifica se o usuário logado possui certa permissão no recurso dado.

- **Parameters:** `resource` - Código do recurso.
- **Returns:** **true** se o usuário tiver persmissão, **false** caso contrário.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### listResourcesByCategory

```java
List<PermissionAssetVO> listResourcesByCategory​(String category,
                                                String filter,
                                                int offset,
                                                int limit)
                                         throws com.fluig.sdk.api.common.SDKException
```

Lista os recursos da categoria informada

- **Parameters:** `category` - - Categoria do recurso
- **Returns:** Lista com os recursos.
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getPermissionsByResourceCode

```java
List<PermissionVO> getPermissionsByResourceCode​(String resourceCode)
                                         throws com.fluig.sdk.api.common.SDKException
```

Lista as permissões do recurso informado

- **Parameters:** `resourceCode` - - Código do recurso
- **Returns:** Lista com as permissões
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createPermissions

```java
void createPermissions​(String resourceCode,
                       List<PermissionVO> permissions)
                throws com.fluig.sdk.api.common.SDKException
```

Cria as permissões para um determinado recurso

- **Parameters:** `resourceCode` - - Código do recurso
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### deletePermissions

```java
void deletePermissions​(String resourceCode,
                       List<PermissionVO> permissions)
                throws com.fluig.sdk.api.common.SDKException
```

Deleta as permissões para um determinado recurso

- **Parameters:** `resourceCode` - - Código do recurso
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findTenants

```java
List<TenantVO> findTenants()
                    throws com.fluig.sdk.api.common.SDKException
```

Retorna a lista de tentants.

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCurrentTenantId

```java
Long getCurrentTenantId()
                 throws com.fluig.sdk.api.common.SDKException
```

Retorna o tenantId logado

- **Returns:** current tenantId
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findGroupByTenantIdAndCode

```java
GroupVO findGroupByTenantIdAndCode​(Long tenantId,
                                   String code)
                            throws com.fluig.sdk.api.common.SDKException
```

Retorna o grupo por code e tenant

- **Parameters:** `tenantId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### createOrUpdateTenantData

```java
Boolean createOrUpdateTenantData​(String key,
                                 String value)
                          throws com.fluig.sdk.api.common.SDKException
```

Cria um bjeto chave/valor no tenantData

- **Parameters:** `key` -
- **Returns:** If tenant data was updated
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listTenantAdmins

```java
List<AdminUserVO> listTenantAdmins​(Long tenantId)
                            throws com.fluig.sdk.api.common.SDKException
```

Retorna os admins de um tenant

- **Parameters:** `tenantId` -
- **Returns:** List of tenant admin
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### changeUserPassword

```java
void changeUserPassword​(String login,
                        String currentPassword,
                        String newPassword,
                        String confirmNewPassword)
                 throws com.fluig.sdk.api.common.SDKException
```

Change user password

- **Parameters:** `login` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCurrentTenant

```java
TenantVO getCurrentTenant()
                   throws com.fluig.sdk.api.common.SDKException
```

Get the current tenant

- **Returns:** Tenant data
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCurrentTenantById

```java
TenantVO getCurrentTenantById​(Long tenantId)
                       throws com.fluig.sdk.api.common.SDKException
```

Get the current tenant

- **Returns:** Tenant data
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getTimeZoneLocalUser

```java
String getTimeZoneLocalUser​(long companyId,
                            String userCode)
                     throws com.fluig.sdk.api.common.SDKException
```

- **Parameters:** `companyId` -
- **Returns:** time zone for user
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface SocialBreadcrumbService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialBreadcrumbService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface SocialBreadcrumbService
extends BaseAPIService
Fornece acesso aos serviços de breadcrumb.
  Since:
1.5.4
Author:
marcus.carvalho
```

```java
public interface SocialBreadcrumbService
extends BaseAPIService
```

Fornece acesso aos serviços de breadcrumb.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.4
- **Author:** marcus.carvalho

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `SocialBreadcrumbVO` | `get​(String alias, Long documentId, String folderType)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialBreadcrumbService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialBreadcrumbService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### get

```java
SocialBreadcrumbVO get​(String alias,
                       Long documentId,
                       String folderType)
                throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface SocialSDKService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialSDKService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/SocialSDKService.html)

```java
public interface SocialSDKService
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
| `SocialVO` | `findSocialUser​(Long userId)` | Find social user by id |
| `SocialVO` | `findSocialVOByAlias​(String alias)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialSDKService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.SocialSDKService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findSocialUser

```java
SocialVO findSocialUser​(Long userId)
                 throws com.fluig.sdk.api.common.SDKException
```

Find social user by id

- **Parameters:** `userId` -
- **Returns:** SocialVO
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findSocialVOByAlias

```java
SocialVO findSocialVOByAlias​(String alias)
                      throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface TagsCloudService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TagsCloudService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TagsCloudService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface TagsCloudService
extends BaseAPIService
Fornece acesso aos serviços de tagscloud.
  Since:
1.5
Author:
ricardo.andre
```

```java
public interface TagsCloudService
extends BaseAPIService
```

Fornece acesso aos serviços de tagscloud.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** ricardo.andre

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Map<String,​Long>` | `getTags​(String query, String filterQuery, List<String> communitiesAlias, Integer limit, String login)` | Pesquisa por TAGS mais populares baseado em um conjunto de parâmetros. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TagsCloudService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TagsCloudService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### getTags

```java
Map<String,​Long> getTags​(String query,
                               String filterQuery,
                               List<String> communitiesAlias,
                               Integer limit,
                               String login)
                        throws com.fluig.sdk.api.common.SDKException
```

Pesquisa por TAGS mais populares baseado em um conjunto de parâmetros.

- **Parameters:** `query` - Query do Solr com a busca de tags.
- **Returns:** Lista com as TAGS mais populares e o número de ocorrências por palavra.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

# Interface TasksService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface TasksService
extends BaseAPIService
Fornece acesso aos serviços de Tasks.
  Since:
1.5.2
Author:
marcelo.pereira
```

```java
public interface TasksService
extends BaseAPIService
```

Fornece acesso aos serviços de Tasks.

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5.2
- **Author:** marcelo.pereira

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `List<DocumentVO>` | `findApprovalDocumentsByUser​(String colleagueId)` | Busca todos os Documentos em aprovação por usuário |
| `List<DocumentTaskVO>` | `findDocsInAgreement​(String colleagueId)` | Procura por documentos em consenso |
| `List<DocumentTaskVO>` | `findDocsInCheckout​(String colleagueId)` | Procura documentos em checkout |
| `List<DocumentVO>` | `findDocumentsToApprove​(String colleagueId)` | Busca os documentos para aprovação |
| `List<WorkflowVO>` | `findExpiredWorkflowTasks​(String colleagueId)` | Solicitações Atrasadas |
| `List<DocumentVO>` | `findMyDocuments​(String colleagueId)` | Busca os Documentos em aprovação |
| `List<WorkflowVO>` | `findMyRequests​(String colleagueId)` | Minhas solicitações abertas |
| `List<WorkflowVO>` | `findTasksInAgreement​(String colleagueId)` | Tarefas em consenso |
| `List<WorkflowVO>` | `findWorkflowTasks​(String colleagueId)` | Solicitações Pendentes |
| `int` | `getCountMyActiveRequests​(String colleagueId, List<String> processes)` | Count all my requests for the specified user |
| `int` | `getCountMyDocuments​(String colleagueId)` | Find and count all pending documents |
| `int` | `getCountOpenTasksByKind​(String colleagueId, TaskKindEnum kind)` | Count all open tasks that matches with kind and status |
| `int` | `getCountOpenTasksByKind​(String colleagueId, TaskKindEnum kind, TaskStatusEnum status, List<String> processes)` | Count all open tasks that matches with kind and status |
| `Map<String,​Long>` | `getOpenWorkflowTasksInPool​(String colleagueId, List<String> processes)` | Gets all groups and roles which contains tasks in pool |
| `List<DocumentApproverVO>` | `getPendentApprovals​(Integer documentId)` | Return users pendent to approve a document |
| `List<ResumedTasksVO>` | `getResumedTasksForPool​(Map<String,​Long> openInPool)` | Gets and mount the entire VO with related groups or roles inside the object |
| `String` | `transferTasks​(TaskTransferVO tasksTransfer)` | Transfer tasks from one user to another |
| `String` | `transferTasks​(Map<String,​String> transferOptions)` | Transfer tasks from one user to another |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TasksService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TasksService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### findDocumentsToApprove

```java
List<DocumentVO> findDocumentsToApprove​(String colleagueId)
                                 throws com.fluig.sdk.api.common.SDKException
```

Busca os documentos para aprovação

- **Parameters:** `colleagueId` -
- **Returns:** Documentos para aprovação
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os documentos para aprovação

---

### findMyDocuments

```java
List<DocumentVO> findMyDocuments​(String colleagueId)
                          throws com.fluig.sdk.api.common.SDKException
```

Busca os Documentos em aprovação

- **Parameters:** `colleagueId` -
- **Returns:** Documentos em aprovação
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os Documentos em aprovação

---

### findApprovalDocumentsByUser

```java
List<DocumentVO> findApprovalDocumentsByUser​(String colleagueId)
                                      throws com.fluig.sdk.api.common.SDKException
```

Busca todos os Documentos em aprovação por usuário

- **Parameters:** `colleagueId` -
- **Returns:** Documentos em aprovação
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os Documentos em aprovação

---

### findWorkflowTasks

```java
List<WorkflowVO> findWorkflowTasks​(String colleagueId)
                            throws com.fluig.sdk.api.common.SDKException
```

Solicitações Pendentes

- **Parameters:** `colleagueId` -
- **Returns:** Solicitações Pendentes
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as solicitações Pendentes

---

### findExpiredWorkflowTasks

```java
List<WorkflowVO> findExpiredWorkflowTasks​(String colleagueId)
                                   throws com.fluig.sdk.api.common.SDKException
```

Solicitações Atrasadas

- **Parameters:** `colleagueId` -
- **Returns:** Solicitações Atrasadas
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as solicitações atrasadas

---

### findMyRequests

```java
List<WorkflowVO> findMyRequests​(String colleagueId)
                         throws com.fluig.sdk.api.common.SDKException
```

Minhas solicitações abertas

- **Parameters:** `colleagueId` -
- **Returns:** Minhas solicitações abertas
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as Minhas solicitações abertas

---

### findTasksInAgreement

```java
List<WorkflowVO> findTasksInAgreement​(String colleagueId)
                               throws com.fluig.sdk.api.common.SDKException
```

Tarefas em consenso

- **Parameters:** `colleagueId` -
- **Returns:** Tarefas em consenso
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findDocsInAgreement

```java
List<DocumentTaskVO> findDocsInAgreement​(String colleagueId)
                                  throws com.fluig.sdk.api.common.SDKException
```

Procura por documentos em consenso

- **Parameters:** `colleagueId` -
- **Returns:** List
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findDocsInCheckout

```java
List<DocumentTaskVO> findDocsInCheckout​(String colleagueId)
                                 throws com.fluig.sdk.api.common.SDKException
```

Procura documentos em checkout

- **Parameters:** `colleagueId` -
- **Returns:** List
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountOpenTasksByKind

```java
int getCountOpenTasksByKind​(String colleagueId,
                            TaskKindEnum kind)
                     throws com.fluig.sdk.api.common.SDKException
```

Count all open tasks that matches with kind and status

- **Parameters:** `colleagueId` -
- **Returns:** total of open tasks
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountOpenTasksByKind

```java
int getCountOpenTasksByKind​(String colleagueId,
                            TaskKindEnum kind,
                            TaskStatusEnum status,
                            List<String> processes)
                     throws com.fluig.sdk.api.common.SDKException
```

Count all open tasks that matches with kind and status

- **Parameters:** `colleagueId` -
- **Returns:** total of open tasks
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountMyActiveRequests

```java
int getCountMyActiveRequests​(String colleagueId,
                             List<String> processes)
                      throws com.fluig.sdk.api.common.SDKException
```

Count all my requests for the specified user

- **Parameters:** `colleagueId` -
- **Returns:** total of tasks
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getOpenWorkflowTasksInPool

```java
Map<String,​Long> getOpenWorkflowTasksInPool​(String colleagueId,
                                                  List<String> processes)
                                           throws com.fluig.sdk.api.common.SDKException
```

Gets all groups and roles which contains tasks in pool

- **Parameters:** `colleagueId` -
- **Returns:** Map
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCountMyDocuments

```java
int getCountMyDocuments​(String colleagueId)
                 throws com.fluig.sdk.api.common.SDKException
```

Find and count all pending documents

- **Parameters:** `colleagueId` -
- **Returns:** total of documents
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getResumedTasksForPool

```java
List<ResumedTasksVO> getResumedTasksForPool​(Map<String,​Long> openInPool)
                                     throws com.fluig.sdk.api.common.SDKException
```

Gets and mount the entire VO with related groups or roles inside the object

- **Parameters:** `openInPool` -
- **Returns:** List contains tasks resume for group and roles
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### transferTasks

```java
String transferTasks​(Map<String,​String> transferOptions)
              throws com.fluig.sdk.api.common.SDKException
```

Transfer tasks from one user to another

- **Returns:** transfer log
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### transferTasks

```java
String transferTasks​(TaskTransferVO tasksTransfer)
              throws com.fluig.sdk.api.common.SDKException
```

Transfer tasks from one user to another

- **Returns:** transfer log
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getPendentApprovals

```java
List<DocumentApproverVO> getPendentApprovals​(Integer documentId)
                                      throws com.fluig.sdk.api.common.SDKException
```

Return users pendent to approve a document

- **Parameters:** `documentId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface TenantService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TenantService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface TenantService
extends BaseAPIService
Fornece acesso aos serviços de tenância.
  Since:
1.5
Author:
vanei
```

```java
public interface TenantService
extends BaseAPIService
```

Fornece acesso aos serviços de tenância.

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
| `TenantVO` | `create​(TenantVO vo)` | Cria um novo tenante. |
| `Map<String,​String>` | `getTenantData​(String[] keys)` | Retorna, caso houver, objeto chaves/valores do tenantData |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TenantService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.TenantService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
TenantVO create​(TenantVO vo)
         throws com.fluig.sdk.api.common.SDKException
```

Cria um novo tenante.

- **Parameters:** `vo` - Dados do tenante.
- **Returns:** Dados do tenante criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o tenante.

---

### getTenantData

```java
Map<String,​String> getTenantData​(String[] keys)
                                throws com.fluig.sdk.api.common.SDKException
```

Retorna, caso houver, objeto chaves/valores do tenantData

- **Parameters:** `keys` -
- **Returns:** map key/value tenantData
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

# Interface UserService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/UserService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface UserService
extends BaseAPIService
Fornece acesso aos serviços de usuário.
  Since:
1.5
Author:
vanei
```

```java
public interface UserService
extends BaseAPIService
```

Fornece acesso aos serviços de usuário.

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
| `void` | `activateByCode​(String genericId)` | Activate an user by his login, idpId or userCode. |
| `void` | `addUserToGroup​(Long tenantId, String groupCode, UserVO userVO)` | ADD user to a specific group |
| `void` | `changeUserPassword​(UserPasswordVO vo)` | Change the user password |
| `UserVO` | `create​(UserVO vo)` | Cria um novo usuário. |
| `UserVO` | `create​(Long tenantId, UserVO vo)` |  |
| `void` | `deactivateByCode​(String genericId)` | Deactivate an user by his login, idpId or userCode. |
| `UserVO` | `findById​(Long id)` | Retorna o usuário pelo id. |
| `UserVO` | `findByLogin​(String login)` | Retorna o usuário pelo login. |
| `UserVO` | `findByUserCode​(String colleagueId)` |  |
| `UserVO` | `getCurrent()` | Retorna o usuário corrente logado. |
| `UserVO` | `getUser​(String genericId)` | Deprecated.
Em alguns casos pode retornar o usuário errado. |
| `List<UserVO>` | `list​(int offset, int limit)` |  |
| `List<UserVO>` | `list​(String sortField, String sortType, int limit, int offset, String search)` | Pesquisa por usuários baseado em um conjunto de parâmetros. |
| `List<UserVO>` | `list​(Map<String,​Object> params, int offset, int limit)` | Pesquisa por usuários baseado em um conjunto de parâmetros. |
| `List<UserVO>` | `listAll​(String sortField, String sortType, int limit, int offset, String search)` | Pesquisa por usuários ativos e inativos baseado em um conjunto de parâmetros. |
| `Map<String,​String>` | `listData​(String login)` | List all user data specfying the login |
| `List<String>` | `listGroups​(String login)` | list the groups from a specific user |
| `List<String>` | `listRoles​(String login)` | List user roles specfying the login |
| `void` | `removeUserData​(String alias, String key)` |  |
| `UserVO` | `updateUser​(UserVO vo)` | UPDATE user. |
| `boolean` | `updateUserData​(Map<String,​String> data)` | UPDATE user data of logged user |
| `boolean` | `updateUserDataById​(Map<String,​String> data, Long userId)` | UPDATE the user data |
| `UserVO` | `updateUserEvenDisabled​(UserVO vo)` | UPDATE the user information even one that is disabled. |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.UserService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.UserService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### create

```java
UserVO create​(UserVO vo)
       throws com.fluig.sdk.api.common.SDKException
```

Cria um novo usuário.

- **Parameters:** `vo` - Dados do usuário.
- **Returns:** Dados do usuário criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException` - Não foi possível criar o usuário.

---

### create

```java
UserVO create​(Long tenantId,
              UserVO vo)
       throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getCurrent

```java
UserVO getCurrent()
           throws com.fluig.sdk.api.common.SDKException
```

Retorna o usuário corrente logado.

- **Returns:** Informações do usuário logado.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### findById

```java
UserVO findById​(Long id)
         throws com.fluig.sdk.api.common.SDKException
```

Retorna o usuário pelo id.

- **Returns:** Informações do usuário.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.6

---

### findByLogin

```java
UserVO findByLogin​(String login)
            throws com.fluig.sdk.api.common.SDKException
```

Retorna o usuário pelo login.

- **Returns:** Informações do usuário.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.6.5

---

### list

```java
List<UserVO> list​(Map<String,​Object> params,
                  int offset,
                  int limit)
           throws com.fluig.sdk.api.common.SDKException
```

Pesquisa por usuários baseado em um conjunto de parâmetros. Os valores aceitos como parametros são: - login Parte do login. - fullName Parte do nome. - limit: Número máximo de registros para retornar.

- **Parameters:** `params` - Parâmetros.
- **Returns:** Lista de usuários encontrados que se enquandram nos parâmetros.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### list

```java
List<UserVO> list​(int offset,
                  int limit)
           throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listAll

```java
List<UserVO> listAll​(String sortField,
                     String sortType,
                     int limit,
                     int offset,
                     String search)
              throws com.fluig.sdk.api.common.SDKException
```

Pesquisa por usuários ativos e inativos baseado em um conjunto de parâmetros. Os valores aceitos como parametros são: - login Parte do login. - fullName Parte do nome. - sortField: Campos. - sortType: ASC e DESC. - limit: Número máximo de registros para retornar. - offset: offSet. - search: Valor a ser procurado

- **Parameters:** `sortField` - Atributo a ser selecionado.tenantId
- **Returns:** Lista de usuários encontrados que se enquandram nos parâmetros.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### deactivateByCode

```java
void deactivateByCode​(String genericId)
               throws com.fluig.sdk.api.common.SDKException
```

Deactivate an user by his login, idpId or userCode.

- **Parameters:** `String` - genericId
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### activateByCode

```java
void activateByCode​(String genericId)
             throws com.fluig.sdk.api.common.SDKException
```

Activate an user by his login, idpId or userCode.

- **Parameters:** `String` - genericId
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### updateUser

```java
UserVO updateUser​(UserVO vo)
           throws com.fluig.sdk.api.common.SDKException
```

UPDATE user. Basic informations: name lastName fullName timezone locale phone field

- **Parameters:** `vo` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### updateUserData

```java
boolean updateUserData​(Map<String,​String> data)
                throws com.fluig.sdk.api.common.SDKException
```

UPDATE user data of logged user

- **Parameters:** `data` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### changeUserPassword

```java
void changeUserPassword​(UserPasswordVO vo)
                 throws com.fluig.sdk.api.common.SDKException
```

Change the user password

- **Parameters:** `vo` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### list

```java
List<UserVO> list​(String sortField,
                  String sortType,
                  int limit,
                  int offset,
                  String search)
           throws com.fluig.sdk.api.common.SDKException
```

Pesquisa por usuários baseado em um conjunto de parâmetros. Os valores aceitos como parametros são: - login Parte do login. - fullName Parte do nome. - sortField: Campos. - sortType: ASC e DESC. - limit: Número máximo de registros para retornar. - offset: offSet. - search: Valor a ser procurado

- **Parameters:** `sortField` - Atributo a ser selecionado.
- **Returns:** Lista de usuários encontrados que se enquandram nos parâmetros.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### getUser

```java
UserVO getUser​(String genericId)
        throws com.fluig.sdk.api.common.SDKException
```

GET user by the generic id

- **Parameters:** `genericId` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listRoles

```java
List<String> listRoles​(String login)
                throws com.fluig.sdk.api.common.SDKException
```

List user roles specfying the login

- **Parameters:** `login` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listData

```java
Map<String,​String> listData​(String login)
                           throws com.fluig.sdk.api.common.SDKException
```

List all user data specfying the login

- **Parameters:** `login` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### listGroups

```java
List<String> listGroups​(String login)
                 throws com.fluig.sdk.api.common.SDKException
```

list the groups from a specific user

- **Parameters:** `login` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### updateUserDataById

```java
boolean updateUserDataById​(Map<String,​String> data,
                           Long userId)
                    throws com.fluig.sdk.api.common.SDKException
```

UPDATE the user data

- **Parameters:** `data` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### removeUserData

```java
void removeUserData​(String alias,
                    String key)
             throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### addUserToGroup

```java
void addUserToGroup​(Long tenantId,
                    String groupCode,
                    UserVO userVO)
             throws com.fluig.sdk.api.common.SDKException
```

ADD user to a specific group

- **Parameters:** `tenantId` - Tenant Id
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### updateUserEvenDisabled

```java
UserVO updateUserEvenDisabled​(UserVO vo)
                       throws com.fluig.sdk.api.common.SDKException
```

UPDATE the user information even one that is disabled.

- **Parameters:** `userVO` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### findByUserCode

```java
UserVO findByUserCode​(String colleagueId)
               throws com.fluig.sdk.api.common.SDKException
```

- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

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

---

# Interface WorkflowAPIService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface WorkflowAPIService
extends BaseAPIService
Fornece acesso aos serviços de workflow.
  Since:
1.5
Author:
vanei
```

```java
public interface WorkflowAPIService
extends BaseAPIService
```

Fornece acesso aos serviços de workflow.

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
| `ProcessTaskVO` | `assumeProcessTask​(long companyId, String userId, int processInstanceId, int movementSequence, String replacementId)` | Faz com que o usuário repassado assuma a tarefa. |
| `AssumeProcessTaskResultVO` | `assumeProcessTask​(AssumeProcessTaskVO assumeProcessTaskVO)` | Faz com que o usuário repassado assuma a tarefa. |
| `AssumeProcessTasksResultVO` | `assumeProcessTasks​(AssumeProcessTasksVO assumeProcessTasksVO)` | Faz com que os usuários repassados assumam as tarefas vinculadas aos mesmos. |
| `CancelInstanceResultVO` | `cancelInstance​(CancelInstanceVO cancelInstanceVO)` |  |
| `CancelInstancesResultVO` | `cancelInstances​(CancelInstancesVO cancelInstanceVO)` |  |
| `List<String>` | `convertProcess​(List<Integer> processInstanceIds, Integer newVersion, List<Integer> actualStates, List<Integer> newStates)` | Converte as solicitaçõe de um processos para uma nova versão. |
| `ProcessObservationVO` | `createProcessObservation​(ProcessObservationVO processObservationVO)` | Insere um complemento em uma solicitação |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO>` | `findActivities​(String processId, Integer processVersion)` | Lista as atividades de uma versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO>` | `findActivities​(String processId, Integer processVersion, Boolean active)` | Lista as atividades de uma versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO>` | `findActivities​(Set<Integer> processInstanceId, Integer movementSequence, Boolean active, Set<String> slaStatus, String processId, String requester, String requesterName, String manager, String initialDeadlineDate, String finalDeadlineDate, String initialStartDate, String finalStartDate, String initialWarningDate, String finalWarningDate, String initialEndDate, String finalEndDate, Integer processVersion, Integer stateSequence, Integer page, Integer pageSize, List<String> expand, List<String> order, Set<String> formFields, List<Long> requesterLocal, List<Long> assigneeLocal)` | Lista as atividades de uma versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findAssignedToMeTasks​(String processId, String initialStartDate, String finalStartDate, String requester, String manager, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findManagedByMeTasks​(String processId, String initialStartDate, String finalStartDate, String assignee, String requester, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findMyRequestsSLA​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String assignee, String manager, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findMyRequestsTasks​(String processId, String initialStartDate, String finalStartDate, String assignee, String manager, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `List<ProcessObservationVO>` | `findObservations​(Integer processInstanceId, Integer stateSequence, Integer threadSequence)` | Retorna a lista de complementos em uma solicitação |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO>` | `findProcessVersions​(String processId, Integer version)` | Listagem de versões de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO>` | `findProcessVersions​(String processId, Integer page, Integer pageSize, List<String> order, List<String> expand, Integer version, Integer formId, Boolean formExistent, Boolean editing, Boolean active, Boolean blocked, Boolean requiresPassword, Integer bpmnVersion, Boolean inheritFormSecurity, Boolean mobileReady)` | Listagem de versões de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO>` | `findProcessVersionsStates​(String processId, Integer processVersion)` | Listagem de estados de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO>` | `findProcessVersionsStates​(String processId, Integer processVersion, Integer stateSequence, Integer page, Integer pageSize, String stateType, String bpmnType, String stateName, String stateDescription, Boolean interactives)` | Listagem de estados de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO>` | `findProcessVersionsStates​(String processId, Integer processVersion, String bpmnType)` | Listagem de estados de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO>` | `findRequests​(String processId, Integer processVersion)` | Listagem de solicitações de uma determinada versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO>` | `findRequests​(String processId, Integer processVersion, Set<String> status)` | Listagem de solicitações de uma determinada versão de um processo |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO>` | `findRequests​(Set<Integer> processInstanceId, Integer initialProcessInstanceId, Integer finalProcessInstanceId, String assignee, Set<String> participants, Set<String> completeColleagueIds, Set<String> status, Set<String> slaStatus, String processId, String requester, String assigneeName, String requesterName, String manager, String initialDeadlineDate, String finalDeadlineDate, String initialStartDate, String finalStartDate, String initialWarningDate, String finalWarningDate, String initialEndDate, String finalEndDate, Integer processVersion, Integer stateSequence, Integer page, Integer pageSize, List<String> expand, List order, Set<String> formFields, List<Long> requesterLocal, List<Long> assigneeLocal)` | Listagem de solicitações de uma determinada versão de um processo |
| `RequestSLAVO` | `findRequestSLAByProcessInstanceId​(int processInstanceId, boolean populateCurrentTasks, boolean calculate, boolean populateCardFields, boolean populateLocals, boolean assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `RequestSLAVO` | `findRequestSLAByProcessInstanceId​(String processInstanceId, String expand, String calculate)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA()` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String requester, String assignee, String manager, String requesterLocals, String assigneeLocals, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, List<String> statusRequiredList)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, List<String> statusRequiredList, boolean returnCurrentTasks)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> statusRequiredList, boolean returnCurrentTasks)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> statusRequiredList, Date initialStartDate, Date finalStartDate, Date initialDeadlineDate, Date finalDeadlineDate, Date initialWarningDate, Date finalWarningDate, boolean returnCurrentTasks, String requester, String assignee, String manager, List<String> requesterLocals, List<String> assigneeLocals, List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams, boolean calculate, int page, int pageSize, boolean populateCardFields, boolean populateLocalsValue, boolean populateAssigneeLocalsValue)` | Recupera uma lista das solicitações de SLA dos processos configurados. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLAAssignedToMe​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String requester, String manager, String requesterLocals, String assigneeLocals, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO>` | `findRequestsSLAManagedByMe​(String processes, String cardFilters, String statusRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String expand, String requester, String assignee, String requesterLocals, String assigneeLocals, String order, String calculate, String page, String pageSize)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor. |
| `com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO>` | `findSLATasks​(String processId, String initialStartDate, String finalStartDate, String assignee, String requester, String manager, String page, String pageSize, String statusTypeTaskRequest, String calculate, String expand, String cardFilters)` |  |
| `ProcessInstanceInfoVO` | `getActiveTasks​(Integer processInstanceId)` | Retorna uma lista das atividades pendentes de um processo |
| `List<ProcessVersionVO>` | `getAvailableProcess​(long tenantId, String userId)` | Retorna uma lista de processos disponíveis para o usuário |
| `Integer` | `getProcessVersion​(String processId)` | Retorna a versão de um processo. |
| `boolean` | `importProcess​(String xml, String processId, Boolean release)` | Importa um processo via XML |
| `boolean` | `importProcess​(String xml, String processId, Integer formId, Boolean release)` | Importa um processo via XML |
| `List<ProcessDefinitionVO>` | `listProcess​(String pattern, int limit, int offset)` | Retorna todos os processos da empresa. |
| `List<ProcessDefinitionVO>` | `listSlaProcess()` | Retorna todos os processos da empresa. |
| `boolean` | `releaseLatestVersion​(String processId)` | Libera a ultima versão do processo |
| `boolean` | `releaseVersion​(String processId, Integer version)` | Libera uma versão do processo |
| `ResumeProcessTaskVO` | `resumeAssignedToMeTasks​(String processId, String startDate, String endDate, String requester, String manager)` |  |
| `ResumeProcessTaskVO` | `resumeManagedByMeTasks​(String processId, String startDate, String endDate, String requester, String assignee)` |  |
| `ResumeRequestsSLAVO` | `resumeMyRequestsSLA​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String assignee, String manager)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante. |
| `ResumeProcessTaskVO` | `resumeMyRequestsTasks​(String processId, String startDate, String endDate, String assignee, String manager)` |  |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA()` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String requester, String assignee, String manager, String requesterLocals, String assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes, Map<String,​String> cardFilters)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> countersRequiredList)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLA​(List<String> processes, Map<String,​String> cardFilters, List<String> countersRequiredList, Date initialStartDate, Date finalStartDate, Date initialDeadlineDate, Date finalDeadlineDate, Date initialWarningDate, Date finalWarningDate, String requester, String assignee, String manager, List<String> requesterLocalsList, List<String> assigneeLocalsList)` | Recupera um resumo dos indicadores de SLA dos processos configurados. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLAAssignedToMe​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String requester, String manager, String requesterLocals, String assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável. |
| `ResumeRequestsSLAVO` | `resumeRequestsSLAManagedByMe​(String processes, String cardFilters, String countersRequired, String initialStartDate, String finalStartDate, String initialDeadlineDate, String finalDeadlineDate, String initialWarningDate, String finalWarningDate, String requester, String assignee, String requesterLocals, String assigneeLocals)` | Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor. |
| `ResumeProcessTaskVO` | `resumeSLATasks​(String processId, String startDate, String endDate, String assignee, String requester, String manager)` |  |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.WorkflowAPIService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.WorkflowAPIService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### listProcess

```java
List<ProcessDefinitionVO> listProcess​(String pattern,
                                      int limit,
                                      int offset)
                               throws Exception
```

Retorna todos os processos da empresa.

- **Returns:** lista de processos.
- **Throws:** `` `Exception` ``
- **Since:** 1.6

---

### getProcessVersion

```java
Integer getProcessVersion​(String processId)
                   throws com.fluig.sdk.api.common.SDKException
```

Retorna a versão de um processo.

- **Parameters:** `processId` - ID do processo.
- **Returns:** Versão do processo.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5

---

### getAvailableProcess

```java
List<ProcessVersionVO> getAvailableProcess​(long tenantId,
                                           String userId)
                                    throws Exception
```

Retorna uma lista de processos disponíveis para o usuário

- **Parameters:** `tenantId` - - ID do tenant
- **Returns:** lista de processos disponíveis para o usuário.
- **Throws:** `` `Exception` ``
- **Since:** 1.5.6

---

### getActiveTasks

```java
ProcessInstanceInfoVO getActiveTasks​(Integer processInstanceId)
                              throws Exception
```

Retorna uma lista das atividades pendentes de um processo

- **Parameters:** `processInstanceId` - - Numero da solicitação
- **Returns:** lista das atividades pendentes de um processo.
- **Throws:** `` `Exception` ``
- **Since:** 1.5.11

---

### createProcessObservation

```java
ProcessObservationVO createProcessObservation​(ProcessObservationVO processObservationVO)
                                       throws com.fluig.sdk.api.common.SDKException
```

Insere um complemento em uma solicitação

- **Parameters:** `processObservationVO` - - Objeto com as informações do complemento
- **Returns:** processObservationVO - Objeto com as informações do complemento incluindo Id criado.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.8

---

### findObservations

```java
List<ProcessObservationVO> findObservations​(Integer processInstanceId,
                                            Integer stateSequence,
                                            Integer threadSequence)
```

Retorna a lista de complementos em uma solicitação

- **Parameters:** `processInstanceId` - - Numero da solicitação
- **Returns:** processObservationVO - Lista com os complementos da solicitação.
- **Since:** 1.5.8

---

### assumeProcessTask

```java
ProcessTaskVO assumeProcessTask​(long companyId,
                                String userId,
                                int processInstanceId,
                                int movementSequence,
                                String replacementId)
                         throws com.fluig.sdk.api.common.SDKException
```

Faz com que o usuário repassado assuma a tarefa.

- **Parameters:** `companyId` - - Código da empresa.
- **Throws:** `com.fluig.sdk.api.common.SDKException`
- **Since:** 1.5.11

---

### assumeProcessTask

```java
AssumeProcessTaskResultVO assumeProcessTask​(AssumeProcessTaskVO assumeProcessTaskVO)
                                     throws NamingException
```

Faz com que o usuário repassado assuma a tarefa.

- **Parameters:** `assumeProcessTaskVO` - VO com os atributos para assumir a tarefa.
- **Returns:** Resultado do processo de assumir.
- **Throws:** `` `NamingException` ``
- **Since:** 1.5.11

---

### assumeProcessTasks

```java
AssumeProcessTasksResultVO assumeProcessTasks​(AssumeProcessTasksVO assumeProcessTasksVO)
                                       throws NamingException
```

Faz com que os usuários repassados assumam as tarefas vinculadas aos mesmos.

- **Parameters:** `assumeProcessTasksVO` - VO com os atributos para assumir as tarefas.
- **Returns:** Resultado do processo de assumir.
- **Throws:** `` `NamingException` ``
- **Since:** 1.5.11

---

### cancelInstance

```java
CancelInstanceResultVO cancelInstance​(CancelInstanceVO cancelInstanceVO)
                               throws NamingException
```

- **Throws:** `` `NamingException` ``

---

### cancelInstances

```java
CancelInstancesResultVO cancelInstances​(CancelInstancesVO cancelInstanceVO)
                                 throws NamingException
```

- **Throws:** `` `NamingException` ``

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                      Map<String,​String> cardFilters,
                                      List<String> countersRequiredList)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                      Map<String,​String> cardFilters,
                                      List<String> countersRequiredList,
                                      Date initialStartDate,
                                      Date finalStartDate,
                                      Date initialDeadlineDate,
                                      Date finalDeadlineDate,
                                      Date initialWarningDate,
                                      Date finalWarningDate,
                                      String requester,
                                      String assignee,
                                      String manager,
                                      List<String> requesterLocalsList,
                                      List<String> assigneeLocalsList)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA()
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                      Map<String,​String> cardFilters)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLA

```java
ResumeRequestsSLAVO resumeRequestsSLA​(String processes,
                                      String cardFilters,
                                      String countersRequired,
                                      String initialStartDate,
                                      String finalStartDate,
                                      String initialDeadlineDate,
                                      String finalDeadlineDate,
                                      String initialWarningDate,
                                      String finalWarningDate,
                                      String requester,
                                      String assignee,
                                      String manager,
                                      String requesterLocals,
                                      String assigneeLocals)
                               throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(String processes,
                                                                                                       String cardFilters,
                                                                                                       String statusRequired,
                                                                                                       String initialStartDate,
                                                                                                       String finalStartDate,
                                                                                                       String initialDeadlineDate,
                                                                                                       String finalDeadlineDate,
                                                                                                       String initialWarningDate,
                                                                                                       String finalWarningDate,
                                                                                                       String expand,
                                                                                                       String requester,
                                                                                                       String assignee,
                                                                                                       String manager,
                                                                                                       String requesterLocals,
                                                                                                       String assigneeLocals,
                                                                                                       String order,
                                                                                                       String calculate,
                                                                                                       String page,
                                                                                                       String pageSize)
                                                                                                throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um LinkedHashSet de RequestSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       Map<String,​String> cardFilters,
                                                                                                       List<String> statusRequiredList,
                                                                                                       Date initialStartDate,
                                                                                                       Date finalStartDate,
                                                                                                       Date initialDeadlineDate,
                                                                                                       Date finalDeadlineDate,
                                                                                                       Date initialWarningDate,
                                                                                                       Date finalWarningDate,
                                                                                                       boolean returnCurrentTasks,
                                                                                                       String requester,
                                                                                                       String assignee,
                                                                                                       String manager,
                                                                                                       List<String> requesterLocals,
                                                                                                       List<String> assigneeLocals,
                                                                                                       List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                       boolean calculate,
                                                                                                       int page,
                                                                                                       int pageSize,
                                                                                                       boolean populateCardFields,
                                                                                                       boolean populateLocalsValue,
                                                                                                       boolean populateAssigneeLocalsValue)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA()
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       List<String> statusRequiredList)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       List<String> statusRequiredList,
                                                                                                       boolean returnCurrentTasks)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                       Map<String,​String> cardFilters,
                                                                                                       List<String> statusRequiredList,
                                                                                                       boolean returnCurrentTasks)
                                                                                                throws Exception
```

Recupera uma lista das solicitações de SLA dos processos configurados.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findMyRequestsSLA

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findMyRequestsSLA​(String processes,
                                                                                                         String cardFilters,
                                                                                                         String statusRequired,
                                                                                                         String initialStartDate,
                                                                                                         String finalStartDate,
                                                                                                         String initialDeadlineDate,
                                                                                                         String finalDeadlineDate,
                                                                                                         String initialWarningDate,
                                                                                                         String finalWarningDate,
                                                                                                         String expand,
                                                                                                         String assignee,
                                                                                                         String manager,
                                                                                                         String order,
                                                                                                         String calculate,
                                                                                                         String page,
                                                                                                         String pageSize)
                                                                                                  throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLAAssignedToMe

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLAAssignedToMe​(String processes,
                                                                                                                   String cardFilters,
                                                                                                                   String statusRequired,
                                                                                                                   String initialStartDate,
                                                                                                                   String finalStartDate,
                                                                                                                   String initialDeadlineDate,
                                                                                                                   String finalDeadlineDate,
                                                                                                                   String initialWarningDate,
                                                                                                                   String finalWarningDate,
                                                                                                                   String expand,
                                                                                                                   String requester,
                                                                                                                   String manager,
                                                                                                                   String requesterLocals,
                                                                                                                   String assigneeLocals,
                                                                                                                   String order,
                                                                                                                   String calculate,
                                                                                                                   String page,
                                                                                                                   String pageSize)
                                                                                                            throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeMyRequestsSLA

```java
ResumeRequestsSLAVO resumeMyRequestsSLA​(String processes,
                                        String cardFilters,
                                        String countersRequired,
                                        String initialStartDate,
                                        String finalStartDate,
                                        String initialDeadlineDate,
                                        String finalDeadlineDate,
                                        String initialWarningDate,
                                        String finalWarningDate,
                                        String assignee,
                                        String manager)
                                 throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLAAssignedToMe

```java
ResumeRequestsSLAVO resumeRequestsSLAAssignedToMe​(String processes,
                                                  String cardFilters,
                                                  String countersRequired,
                                                  String initialStartDate,
                                                  String finalStartDate,
                                                  String initialDeadlineDate,
                                                  String finalDeadlineDate,
                                                  String initialWarningDate,
                                                  String finalWarningDate,
                                                  String requester,
                                                  String manager,
                                                  String requesterLocals,
                                                  String assigneeLocals)
                                           throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestSLAByProcessInstanceId

```java
RequestSLAVO findRequestSLAByProcessInstanceId​(int processInstanceId,
                                               boolean populateCurrentTasks,
                                               boolean calculate,
                                               boolean populateCardFields,
                                               boolean populateLocals,
                                               boolean assigneeLocals)
                                        throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processInstanceId` - Código da solicitação.
- **Returns:** RequestSLAVO
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestSLAByProcessInstanceId

```java
RequestSLAVO findRequestSLAByProcessInstanceId​(String processInstanceId,
                                               String expand,
                                               String calculate)
                                        throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

- **Parameters:** `processInstanceId` - Código da solicitação.
- **Returns:** RequestSLAVO
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### findRequestsSLAManagedByMe

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLAManagedByMe​(String processes,
                                                                                                                  String cardFilters,
                                                                                                                  String statusRequired,
                                                                                                                  String initialStartDate,
                                                                                                                  String finalStartDate,
                                                                                                                  String initialDeadlineDate,
                                                                                                                  String finalDeadlineDate,
                                                                                                                  String initialWarningDate,
                                                                                                                  String finalWarningDate,
                                                                                                                  String expand,
                                                                                                                  String requester,
                                                                                                                  String assignee,
                                                                                                                  String requesterLocals,
                                                                                                                  String assigneeLocals,
                                                                                                                  String order,
                                                                                                                  String calculate,
                                                                                                                  String page,
                                                                                                                  String pageSize)
                                                                                                           throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### resumeRequestsSLAManagedByMe

```java
ResumeRequestsSLAVO resumeRequestsSLAManagedByMe​(String processes,
                                                 String cardFilters,
                                                 String countersRequired,
                                                 String initialStartDate,
                                                 String finalStartDate,
                                                 String initialDeadlineDate,
                                                 String finalDeadlineDate,
                                                 String initialWarningDate,
                                                 String finalWarningDate,
                                                 String requester,
                                                 String assignee,
                                                 String requesterLocals,
                                                 String assigneeLocals)
                                          throws Exception
```

Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.

- **Parameters:** `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.
- **Returns:** ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.
- **Throws:** `` `Exception` ``
- **Since:** 1.6.1

---

### listSlaProcess

```java
List<ProcessDefinitionVO> listSlaProcess()
                                  throws Exception
```

Retorna todos os processos da empresa.

- **Returns:** lista de processos.
- **Throws:** `` `Exception` ``
- **Since:** 1.6

---

### resumeMyRequestsTasks

```java
ResumeProcessTaskVO resumeMyRequestsTasks​(String processId,
                                          String startDate,
                                          String endDate,
                                          String assignee,
                                          String manager)
                                   throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResumeProcessTaskVO objeto com o total de tarefas com base no processo
- **Throws:** `` `Exception` ``

---

### resumeAssignedToMeTasks

```java
ResumeProcessTaskVO resumeAssignedToMeTasks​(String processId,
                                            String startDate,
                                            String endDate,
                                            String requester,
                                            String manager)
                                     throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResumeProcessTaskVO objeto com o total de tarefas com base no processo
- **Throws:** `` `Exception` ``

---

### resumeSLATasks

```java
ResumeProcessTaskVO resumeSLATasks​(String processId,
                                   String startDate,
                                   String endDate,
                                   String assignee,
                                   String requester,
                                   String manager)
                            throws Exception
```

- **Throws:** `` `Exception` ``

---

### resumeManagedByMeTasks

```java
ResumeProcessTaskVO resumeManagedByMeTasks​(String processId,
                                           String startDate,
                                           String endDate,
                                           String requester,
                                           String assignee)
                                    throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResumeProcessTaskVO objeto com o total de tarefas com base no processo
- **Throws:** `` `Exception` ``

---

### findMyRequestsTasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findMyRequestsTasks​(String processId,
                                                                                                                   String initialStartDate,
                                                                                                                   String finalStartDate,
                                                                                                                   String assignee,
                                                                                                                   String manager,
                                                                                                                   String page,
                                                                                                                   String pageSize,
                                                                                                                   String statusTypeTaskRequest,
                                                                                                                   String calculate,
                                                                                                                   String expand,
                                                                                                                   String cardFilters)
                                                                                                            throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo com base na tarefa
- **Throws:** `` `Exception` ``

---

### findAssignedToMeTasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findAssignedToMeTasks​(String processId,
                                                                                                                     String initialStartDate,
                                                                                                                     String finalStartDate,
                                                                                                                     String requester,
                                                                                                                     String manager,
                                                                                                                     String page,
                                                                                                                     String pageSize,
                                                                                                                     String statusTypeTaskRequest,
                                                                                                                     String calculate,
                                                                                                                     String expand,
                                                                                                                     String cardFilters)
                                                                                                              throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo com base na tarefa
- **Throws:** `` `Exception` ``

---

### findSLATasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findSLATasks​(String processId,
                                                                                                            String initialStartDate,
                                                                                                            String finalStartDate,
                                                                                                            String assignee,
                                                                                                            String requester,
                                                                                                            String manager,
                                                                                                            String page,
                                                                                                            String pageSize,
                                                                                                            String statusTypeTaskRequest,
                                                                                                            String calculate,
                                                                                                            String expand,
                                                                                                            String cardFilters)
                                                                                                     throws Exception
```

- **Throws:** `` `Exception` ``

---

### findManagedByMeTasks

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findManagedByMeTasks​(String processId,
                                                                                                                    String initialStartDate,
                                                                                                                    String finalStartDate,
                                                                                                                    String assignee,
                                                                                                                    String requester,
                                                                                                                    String page,
                                                                                                                    String pageSize,
                                                                                                                    String statusTypeTaskRequest,
                                                                                                                    String calculate,
                                                                                                                    String expand,
                                                                                                                    String cardFilters)
                                                                                                             throws Exception
```

- **Parameters:** `processId` -
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo com base na tarefa
- **Throws:** `` `Exception` ``

---

### findProcessVersions

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO> findProcessVersions​(String processId,
                                                                                                                  Integer version)
                                                                                                           throws Exception
```

Listagem de versões de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersions

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO> findProcessVersions​(String processId,
                                                                                                                  Integer page,
                                                                                                                  Integer pageSize,
                                                                                                                  List<String> order,
                                                                                                                  List<String> expand,
                                                                                                                  Integer version,
                                                                                                                  Integer formId,
                                                                                                                  Boolean formExistent,
                                                                                                                  Boolean editing,
                                                                                                                  Boolean active,
                                                                                                                  Boolean blocked,
                                                                                                                  Boolean requiresPassword,
                                                                                                                  Integer bpmnVersion,
                                                                                                                  Boolean inheritFormSecurity,
                                                                                                                  Boolean mobileReady)
                                                                                                           throws Exception
```

Listagem de versões de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findActivities

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(Set<Integer> processInstanceId,
                                                                                                              Integer movementSequence,
                                                                                                              Boolean active,
                                                                                                              Set<String> slaStatus,
                                                                                                              String processId,
                                                                                                              String requester,
                                                                                                              String requesterName,
                                                                                                              String manager,
                                                                                                              String initialDeadlineDate,
                                                                                                              String finalDeadlineDate,
                                                                                                              String initialStartDate,
                                                                                                              String finalStartDate,
                                                                                                              String initialWarningDate,
                                                                                                              String finalWarningDate,
                                                                                                              String initialEndDate,
                                                                                                              String finalEndDate,
                                                                                                              Integer processVersion,
                                                                                                              Integer stateSequence,
                                                                                                              Integer page,
                                                                                                              Integer pageSize,
                                                                                                              List<String> expand,
                                                                                                              List<String> order,
                                                                                                              Set<String> formFields,
                                                                                                              List<Long> requesterLocal,
                                                                                                              List<Long> assigneeLocal)
                                                                                                       throws Exception
```

Lista as atividades de uma versão de um processo

- **Parameters:** `processInstanceId` - Identificador da solicitação (java.util.HashSet)
- **Returns:** ResponseEnvelopeVO objeto com os dados das atividades do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findActivities

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(String processId,
                                                                                                              Integer processVersion)
                                                                                                       throws Exception
```

Lista as atividades de uma versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados das atividades do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findActivities

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(String processId,
                                                                                                              Integer processVersion,
                                                                                                              Boolean active)
                                                                                                       throws Exception
```

Lista as atividades de uma versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados das atividades do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findRequests

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(Set<Integer> processInstanceId,
                                                                                                    Integer initialProcessInstanceId,
                                                                                                    Integer finalProcessInstanceId,
                                                                                                    String assignee,
                                                                                                    Set<String> participants,
                                                                                                    Set<String> completeColleagueIds,
                                                                                                    Set<String> status,
                                                                                                    Set<String> slaStatus,
                                                                                                    String processId,
                                                                                                    String requester,
                                                                                                    String assigneeName,
                                                                                                    String requesterName,
                                                                                                    String manager,
                                                                                                    String initialDeadlineDate,
                                                                                                    String finalDeadlineDate,
                                                                                                    String initialStartDate,
                                                                                                    String finalStartDate,
                                                                                                    String initialWarningDate,
                                                                                                    String finalWarningDate,
                                                                                                    String initialEndDate,
                                                                                                    String finalEndDate,
                                                                                                    Integer processVersion,
                                                                                                    Integer stateSequence,
                                                                                                    Integer page,
                                                                                                    Integer pageSize,
                                                                                                    List<String> expand,
                                                                                                    List order,
                                                                                                    Set<String> formFields,
                                                                                                    List<Long> requesterLocal,
                                                                                                    List<Long> assigneeLocal)
                                                                                             throws Exception
```

Listagem de solicitações de uma determinada versão de um processo

- **Parameters:** `processInstanceId` - Identificador da solicitação (java.util.HashSet)
- **Returns:** ResponseEnvelopeVO objeto com os dados da solicitações do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findRequests

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(String processId,
                                                                                                    Integer processVersion,
                                                                                                    Set<String> status)
                                                                                             throws Exception
```

Listagem de solicitações de uma determinada versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados da solicitações do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findRequests

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(String processId,
                                                                                                    Integer processVersion)
                                                                                             throws Exception
```

Listagem de solicitações de uma determinada versão de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados da solicitações do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersionsStates

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                      Integer processVersion,
                                                                                                                      Integer stateSequence,
                                                                                                                      Integer page,
                                                                                                                      Integer pageSize,
                                                                                                                      String stateType,
                                                                                                                      String bpmnType,
                                                                                                                      String stateName,
                                                                                                                      String stateDescription,
                                                                                                                      Boolean interactives)
                                                                                                               throws Exception
```

Listagem de estados de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Returns:** ResponseEnvelopeVO objeto com os dados dos estados do processo
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersionsStates

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                      Integer processVersion,
                                                                                                                      String bpmnType)
                                                                                                               throws Exception
```

Listagem de estados de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### findProcessVersionsStates

```java
com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                      Integer processVersion)
                                                                                                               throws Exception
```

Listagem de estados de um processo

- **Parameters:** `processId` - Identificador do processo (Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### convertProcess

```java
List<String> convertProcess​(List<Integer> processInstanceIds,
                            Integer newVersion,
                            List<Integer> actualStates,
                            List<Integer> newStates)
                     throws Exception
```

Converte as solicitaçõe de um processos para uma nova versão.

- **Parameters:** `processInstanceIds` - lista de processos a serem convertidos (java.util.ArrayList)
- **Returns:** Lista com as informações da socitações convertidas e não concertidas
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### releaseVersion

```java
boolean releaseVersion​(String processId,
                       Integer version)
                throws Exception
```

Libera uma versão do processo

- **Parameters:** `processId` - nome do processo (\*obrigatório, String)
- **Returns:** Boolean true ou false;
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### releaseLatestVersion

```java
boolean releaseLatestVersion​(String processId)
                      throws Exception
```

Libera a ultima versão do processo

- **Parameters:** `processId` - nome do processo (\*obrigatório, String)
- **Returns:** Boolean true ou false;
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### importProcess

```java
boolean importProcess​(String xml,
                      String processId,
                      Integer formId,
                      Boolean release)
               throws Exception
```

Importa um processo via XML

- **Parameters:** `xml` - aquivo xml com o processo (\* Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---

### importProcess

```java
boolean importProcess​(String xml,
                      String processId,
                      Boolean release)
               throws Exception
```

Importa um processo via XML

- **Parameters:** `xml` - aquivo xml com o processo (\* Obrigatório)
- **Throws:** `` `Exception` ``
- **Since:** 1.6.5

---
