# Enum TaskStateEnum

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStateEnum.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStateEnum.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskStateEnum>
  com.fluig.sdk.api.task.TaskStateEnum
```

```java
public enum TaskStateEnum
extends Enum<TaskStateEnum>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskStateEnum>
- **Author:** vinicius.michelutti

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `toString()` |  |
| `static TaskStateEnum` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskStateEnum[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `DOCUMENT` |  |
| `LEARN` |  |
| `PROCESS` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskStateEnum[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskStateEnum c : TaskStateEnum.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskStateEnum valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name

---

### toString

```java
public String toString()
```

- **Overrides:** `` `toString` `` in class `` `Enum`<[TaskStateEnum](TaskStateEnum.html "enum in com.fluig.sdk.api.task")> ``


## Detalhes das Constantes

### PROCESS

```java
public static final TaskStateEnum PROCESS
```


---

### DOCUMENT

```java
public static final TaskStateEnum DOCUMENT
```


---

### LEARN

```java
public static final TaskStateEnum LEARN
```


