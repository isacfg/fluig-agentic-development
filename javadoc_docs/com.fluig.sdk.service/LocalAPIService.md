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

