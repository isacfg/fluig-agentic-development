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

