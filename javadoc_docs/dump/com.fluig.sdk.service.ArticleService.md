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

