# com.fluig.sdk.api.permission

> **2 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/package-summary.html)

---

## Class Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Class PermissionAssetVO](#class-permissionassetvo)
- [Class PermissionVO](#class-permissionvo)

---

# Class PermissionAssetVO

> **Pacote:** `com.fluig.sdk.api.permission`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionAssetVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionAssetVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.permission.PermissionAssetVO
```

```java
public class PermissionAssetVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `PermissionAssetVO()` |  |
| `PermissionAssetVO​(Long id, String code, String description, String typeCode)` |  |
| `PermissionAssetVO​(Long id, String code, String description, String typeCode, String pageCode)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCode()` |  |
| `String` | `getDescription()` |  |
| `Long` | `getId()` |  |
| `String` | `getPageCode()` |  |
| `String` | `getTypeCode()` |  |
| `void` | `setCode​(String code)` |  |
| `void` | `setDescription​(String description)` |  |
| `void` | `setId​(Long id)` |  |
| `void` | `setPageCode​(String pageCode)` |  |
| `void` | `setTypeCode​(String typeCode)` |  |


---

## Detalhes dos Construtores

### PermissionAssetVO

```java
public PermissionAssetVO()
```


---

### PermissionAssetVO

```java
public PermissionAssetVO​(Long id,
                         String code,
                         String description,
                         String typeCode)
```


---

### PermissionAssetVO

```java
public PermissionAssetVO​(Long id,
                         String code,
                         String description,
                         String typeCode,
                         String pageCode)
```



## Detalhes dos Métodos

### getId

```java
public Long getId()
```


---

### setId

```java
public void setId​(Long id)
```


---

### getCode

```java
public String getCode()
```


---

### setCode

```java
public void setCode​(String code)
```


---

### getDescription

```java
public String getDescription()
```


---

### setDescription

```java
public void setDescription​(String description)
```


---

### getTypeCode

```java
public String getTypeCode()
```


---

### setTypeCode

```java
public void setTypeCode​(String typeCode)
```


---

### getPageCode

```java
public String getPageCode()
```


---

### setPageCode

```java
public void setPageCode​(String pageCode)
```

---

# Class PermissionVO

> **Pacote:** `com.fluig.sdk.api.permission`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/permission/PermissionVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.permission.PermissionVO
```

```java
public class PermissionVO
extends Object
implements Serializable
```

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `PermissionVO()` |  |
| `PermissionVO​(String permission, String permissionDescription, Boolean isSelected)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getCategory()` |  |
| `String` | `getCategoryCode()` |  |
| `Boolean` | `getIsSelected()` |  |
| `String` | `getPermission()` |  |
| `String` | `getPermissionDescription()` |  |
| `void` | `setCategory​(String category)` |  |
| `void` | `setCategoryCode​(String categoryCode)` |  |
| `void` | `setIsSelected​(Boolean isSelected)` |  |
| `void` | `setPermission​(String permission)` |  |
| `void` | `setPermissionDescription​(String permissionDescription)` |  |
| `String` | `toString()` |  |


---

## Detalhes dos Construtores

### PermissionVO

```java
public PermissionVO​(String permission,
                    String permissionDescription,
                    Boolean isSelected)
```


---

### PermissionVO

```java
public PermissionVO()
```



## Detalhes dos Métodos

### getPermission

```java
public String getPermission()
```


---

### setPermission

```java
public void setPermission​(String permission)
```


---

### getPermissionDescription

```java
public String getPermissionDescription()
```


---

### setPermissionDescription

```java
public void setPermissionDescription​(String permissionDescription)
```


---

### getIsSelected

```java
public Boolean getIsSelected()
```


---

### setIsSelected

```java
public void setIsSelected​(Boolean isSelected)
```


---

### getCategory

```java
public String getCategory()
```


---

### setCategory

```java
public void setCategory​(String category)
```


---

### getCategoryCode

```java
public String getCategoryCode()
```


---

### setCategoryCode

```java
public void setCategoryCode​(String categoryCode)
```


---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Object` ``

---
