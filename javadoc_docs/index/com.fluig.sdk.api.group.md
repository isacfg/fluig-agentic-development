# com.fluig.sdk.api.group

> **1 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/package-summary.html)

---

Value Object para Group

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class GroupVO](#class-groupvo)

---

# Class GroupVO

> **Pacote:** `com.fluig.sdk.api.group`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/group/GroupVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.group.GroupVO
```

```java
public class GroupVO
extends Object
implements Serializable
```

Value Object para Group

- **All Implemented Interfaces:** Serializable
- **Version:** 1.00.000
- **Author:** vanei
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `GroupVO()` | Nova instância para GroupVO.java |
| `GroupVO​(Long id, String code, String description)` | Nova instância para GroupVO.java com id, code e description |
| `GroupVO​(String code, String description)` | Nova instância para GroupVO.java com code e description |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCode()` | Recupera valor do code |
| `String` | `getDescription()` | Recupera valor do description |
| `HashMap<String,​String>` | `getExtData()` | Recupera valor do extData |
| `String` | `getGroupType()` | Recupera valor do groupType |
| `Long` | `getId()` | Recupera valor do id |
| `Boolean` | `getIsInternal()` | Recupera valor do isInternal |
| `void` | `setCode​(String code)` | Atribui valor para code |
| `void` | `setDescription​(String description)` | Atribui valor para description |
| `void` | `setExtData​(HashMap<String,​String> extData)` | Atribui valor para extData |
| `void` | `setGroupType​(String groupType)` | Atribui valor para groupType |
| `void` | `setId​(Long id)` | Atribui valor para id |
| `void` | `setIsInternal​(Boolean isInternal)` | Atribui valor para isInternal |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### GroupVO

```java
public GroupVO()
```

Nova instância para GroupVO.java


---

### GroupVO

```java
public GroupVO​(String code,
               String description)
```

Nova instância para GroupVO.java com code e description

- **Parameters:** `code` -

---

### GroupVO

```java
public GroupVO​(Long id,
               String code,
               String description)
```

Nova instância para GroupVO.java com id, code e description

- **Parameters:** `id` -


## Detalhes dos Métodos

### getId

```java
public Long getId()
```

Recupera valor do id

- **Returns:** the id

---

### setId

```java
public void setId​(Long id)
```

Atribui valor para id

- **Parameters:** `id` - the id to set

---

### getCode

```java
public String getCode()
```

Recupera valor do code

- **Returns:** the code

---

### setCode

```java
public void setCode​(String code)
```

Atribui valor para code

- **Parameters:** `code` - the code to set

---

### getDescription

```java
public String getDescription()
```

Recupera valor do description

- **Returns:** the description

---

### setDescription

```java
public void setDescription​(String description)
```

Atribui valor para description

- **Parameters:** `description` - the description to set

---

### getIsInternal

```java
public Boolean getIsInternal()
```

Recupera valor do isInternal

- **Returns:** the isInternal

---

### setIsInternal

```java
public void setIsInternal​(Boolean isInternal)
```

Atribui valor para isInternal

- **Parameters:** `isInternal` - the isInternal to set

---

### getGroupType

```java
public String getGroupType()
```

Recupera valor do groupType

- **Returns:** the groupType

---

### setGroupType

```java
public void setGroupType​(String groupType)
```

Atribui valor para groupType

- **Parameters:** `groupType` - the groupType to set

---

### getExtData

```java
public HashMap<String,​String> getExtData()
```

Recupera valor do extData

- **Returns:** the extData

---

### setExtData

```java
public void setExtData​(HashMap<String,​String> extData)
```

Atribui valor para extData

- **Parameters:** `extData` - the extData to set

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---
