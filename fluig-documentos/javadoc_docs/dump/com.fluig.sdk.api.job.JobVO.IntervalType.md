# Enum JobVO.IntervalType

> **Pacote:** `com.fluig.sdk.api.job`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/job/JobVO.IntervalType.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/job/JobVO.IntervalType.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<JobVO.IntervalType>
  com.fluig.sdk.api.job.JobVO.IntervalType
```

```java
public static enum JobVO.IntervalType
extends Enum<JobVO.IntervalType>
```

- **All Implemented Interfaces:** Serializable, Comparable<JobVO.IntervalType>
- **Enclosing class:** JobVO

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static JobVO.IntervalType` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static JobVO.IntervalType[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `DAILY` |  |
| `MONTHLY` |  |
| `WEEKLY` |  |


---

## Detalhes dos Métodos

### values

```java
public static JobVO.IntervalType[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (JobVO.IntervalType c : JobVO.IntervalType.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static JobVO.IntervalType valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### DAILY

```java
public static final JobVO.IntervalType DAILY
```


---

### WEEKLY

```java
public static final JobVO.IntervalType WEEKLY
```


---

### MONTHLY

```java
public static final JobVO.IntervalType MONTHLY
```


