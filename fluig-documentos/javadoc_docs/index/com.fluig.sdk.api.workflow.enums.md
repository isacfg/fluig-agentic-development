# com.fluig.sdk.api.workflow.enums

> **2 classes**

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/enums/package-summary.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/enums/package-summary.html)

---

## Enum Summary

| Nome | Descrição |
| --- | --- |

---

## Sumário

- [Enum RequestStatusType](#enum-requeststatustype)
- [Enum TaskStatusType](#enum-taskstatustype)

---

# Enum RequestStatusType

> **Pacote:** `com.fluig.sdk.api.workflow.enums`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/enums/RequestStatusType.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/enums/RequestStatusType.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<RequestStatusType>
  com.fluig.sdk.api.workflow.enums.RequestStatusType
```

```java
public enum RequestStatusType
extends Enum<RequestStatusType>
```

- **All Implemented Interfaces:** Serializable, Comparable<RequestStatusType>

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getValue()` |  |
| `static RequestStatusType` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static RequestStatusType[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `CANCELED_EXPIRED_REQUESTS` |  |
| `CANCELED_ON_TIME_REQUESTS` |  |
| `CANCELED_REQUESTS` |  |
| `CANCELED_WARNING_REQUESTS` |  |
| `FINISHED_EXPIRED_REQUESTS` |  |
| `FINISHED_ON_TIME_REQUESTS` |  |
| `FINISHED_REQUESTS` |  |
| `FINISHED_WARNING_REQUESTS` |  |
| `OPEN_EXPIRED_REQUESTS` |  |
| `OPEN_ON_TIME_REQUESTS` |  |
| `OPEN_REQUESTS` |  |
| `OPEN_WARNING_REQUESTS` |  |


---

## Detalhes dos Métodos

### values

```java
public static RequestStatusType[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (RequestStatusType c : RequestStatusType.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static RequestStatusType valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name

---

### getValue

```java
public String getValue()
```



## Detalhes das Constantes

### FINISHED_REQUESTS

```java
public static final RequestStatusType FINISHED_REQUESTS
```


---

### FINISHED_EXPIRED_REQUESTS

```java
public static final RequestStatusType FINISHED_EXPIRED_REQUESTS
```


---

### FINISHED_ON_TIME_REQUESTS

```java
public static final RequestStatusType FINISHED_ON_TIME_REQUESTS
```


---

### FINISHED_WARNING_REQUESTS

```java
public static final RequestStatusType FINISHED_WARNING_REQUESTS
```


---

### CANCELED_REQUESTS

```java
public static final RequestStatusType CANCELED_REQUESTS
```


---

### CANCELED_EXPIRED_REQUESTS

```java
public static final RequestStatusType CANCELED_EXPIRED_REQUESTS
```


---

### CANCELED_ON_TIME_REQUESTS

```java
public static final RequestStatusType CANCELED_ON_TIME_REQUESTS
```


---

### CANCELED_WARNING_REQUESTS

```java
public static final RequestStatusType CANCELED_WARNING_REQUESTS
```


---

### OPEN_REQUESTS

```java
public static final RequestStatusType OPEN_REQUESTS
```


---

### OPEN_EXPIRED_REQUESTS

```java
public static final RequestStatusType OPEN_EXPIRED_REQUESTS
```


---

### OPEN_ON_TIME_REQUESTS

```java
public static final RequestStatusType OPEN_ON_TIME_REQUESTS
```


---

### OPEN_WARNING_REQUESTS

```java
public static final RequestStatusType OPEN_WARNING_REQUESTS
```

---

# Enum TaskStatusType

> **Pacote:** `com.fluig.sdk.api.workflow.enums`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/enums/TaskStatusType.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/enums/TaskStatusType.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<TaskStatusType>
  com.fluig.sdk.api.workflow.enums.TaskStatusType
```

```java
public enum TaskStatusType
extends Enum<TaskStatusType>
```

- **All Implemented Interfaces:** Serializable, Comparable<TaskStatusType>

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getValue()` |  |
| `static TaskStatusType` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static TaskStatusType[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `CANCELED_EXPIRED_TASKS` |  |
| `CANCELED_ON_TIME_TASKS` |  |
| `CANCELED_WARNING_TASKS` |  |
| `FINISHED_EXPIRED_TASKS` |  |
| `FINISHED_ON_TIME_TASKS` |  |
| `FINISHED_WARNING_TASKS` |  |
| `OPEN_EXPIRED_TASKS` |  |
| `OPEN_ON_TIME_TASKS` |  |
| `OPEN_WARNING_TASKS` |  |


---

## Detalhes dos Métodos

### values

```java
public static TaskStatusType[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (TaskStatusType c : TaskStatusType.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static TaskStatusType valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name

---

### getValue

```java
public String getValue()
```



## Detalhes das Constantes

### OPEN_EXPIRED_TASKS

```java
public static final TaskStatusType OPEN_EXPIRED_TASKS
```


---

### OPEN_ON_TIME_TASKS

```java
public static final TaskStatusType OPEN_ON_TIME_TASKS
```


---

### OPEN_WARNING_TASKS

```java
public static final TaskStatusType OPEN_WARNING_TASKS
```


---

### CANCELED_EXPIRED_TASKS

```java
public static final TaskStatusType CANCELED_EXPIRED_TASKS
```


---

### CANCELED_ON_TIME_TASKS

```java
public static final TaskStatusType CANCELED_ON_TIME_TASKS
```


---

### CANCELED_WARNING_TASKS

```java
public static final TaskStatusType CANCELED_WARNING_TASKS
```


---

### FINISHED_EXPIRED_TASKS

```java
public static final TaskStatusType FINISHED_EXPIRED_TASKS
```


---

### FINISHED_ON_TIME_TASKS

```java
public static final TaskStatusType FINISHED_ON_TIME_TASKS
```


---

### FINISHED_WARNING_TASKS

```java
public static final TaskStatusType FINISHED_WARNING_TASKS
```

---
