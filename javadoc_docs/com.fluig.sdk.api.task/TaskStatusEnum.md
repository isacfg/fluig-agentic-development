# Enum TaskStatusEnum

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStatusEnum.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStatusEnum.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskStatusEnum>
  com.fluig.sdk.api.task.TaskStatusEnum
```

```java
public enum TaskStatusEnum
extends Enum<TaskStatusEnum>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskStatusEnum>
- **Author:** vinicius.michelutti

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static TaskStatusEnum` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskStatusEnum[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `CANCELLED` |  |
| `COMPLETED` |  |
| `CONSENSUS` |  |
| `NEW` |  |
| `PAUSED` |  |
| `STARTED` |  |
| `TRANSFERRED` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskStatusEnum[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskStatusEnum c : TaskStatusEnum.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskStatusEnum valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### NEW

```java
public static final TaskStatusEnum NEW
```


---

### CONSENSUS

```java
public static final TaskStatusEnum CONSENSUS
```


---

### COMPLETED

```java
public static final TaskStatusEnum COMPLETED
```


---

### TRANSFERRED

```java
public static final TaskStatusEnum TRANSFERRED
```


---

### CANCELLED

```java
public static final TaskStatusEnum CANCELLED
```


---

### STARTED

```java
public static final TaskStatusEnum STARTED
```


---

### PAUSED

```java
public static final TaskStatusEnum PAUSED
```


