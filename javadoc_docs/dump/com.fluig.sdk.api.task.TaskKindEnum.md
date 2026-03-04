# Enum TaskKindEnum

> **Pacote:** `com.fluig.sdk.api.task`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskKindEnum.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskKindEnum.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskKindEnum>
  com.fluig.sdk.api.task.TaskKindEnum
```

```java
public enum TaskKindEnum
extends Enum<TaskKindEnum>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskKindEnum>
- **Since:** 1.5.4
- **Author:** vinicius.michelutti

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static TaskKindEnum` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskKindEnum[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `DOCUMENT_EDIT` |  |
| `DOCUMENT_REVISION` |  |
| `TODO` |  |
| `WORKFLOW` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskKindEnum[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskKindEnum c : TaskKindEnum.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskKindEnum valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### TODO

```java
public static final TaskKindEnum TODO
```


---

### DOCUMENT_EDIT

```java
public static final TaskKindEnum DOCUMENT_EDIT
```


---

### WORKFLOW

```java
public static final TaskKindEnum WORKFLOW
```


---

### DOCUMENT_REVISION

```java
public static final TaskKindEnum DOCUMENT_REVISION
```


