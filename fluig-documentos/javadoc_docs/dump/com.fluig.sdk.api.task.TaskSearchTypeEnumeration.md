# Enum TaskSearchTypeEnumeration

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskSearchTypeEnumeration.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskSearchTypeEnumeration.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskSearchTypeEnumeration>
  com.fluig.sdk.api.task.TaskSearchTypeEnumeration
```

```java
public enum TaskSearchTypeEnumeration
extends Enum<TaskSearchTypeEnumeration>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskSearchTypeEnumeration>

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `int` | `getType()` |  |
| `static TaskSearchTypeEnumeration` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskSearchTypeEnumeration[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `ALL` |  |
| `MANAGER_OR_SUBSTITUTE` |  |
| `OPENED` |  |
| `PARTICIPATED` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskSearchTypeEnumeration[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskSearchTypeEnumeration c : TaskSearchTypeEnumeration.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskSearchTypeEnumeration valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name

---

### getType

```java
public int getType()
```



## Detalhes das Constantes

### OPENED

```java
public static final TaskSearchTypeEnumeration OPENED
```


---

### PARTICIPATED

```java
public static final TaskSearchTypeEnumeration PARTICIPATED
```


---

### MANAGER_OR_SUBSTITUTE

```java
public static final TaskSearchTypeEnumeration MANAGER_OR_SUBSTITUTE
```


---

### ALL

```java
public static final TaskSearchTypeEnumeration ALL
```


