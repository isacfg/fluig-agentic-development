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

