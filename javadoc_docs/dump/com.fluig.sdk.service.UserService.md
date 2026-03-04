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

