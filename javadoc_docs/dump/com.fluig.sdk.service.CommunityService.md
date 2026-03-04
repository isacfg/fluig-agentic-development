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

