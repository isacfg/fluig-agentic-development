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

