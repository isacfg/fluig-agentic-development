# Enum CancelInstanceStatus

> **Pacote:** `com.fluig.sdk.api.enums`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/enums/CancelInstanceStatus.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/enums/CancelInstanceStatus.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<CancelInstanceStatus>
  com.fluig.sdk.api.enums.CancelInstanceStatus
```

```java
public enum CancelInstanceStatus
extends Enum<CancelInstanceStatus>
```

- **All Implemented Interfaces:** Serializable, Comparable<CancelInstanceStatus>

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static CancelInstanceStatus` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static CancelInstanceStatus[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `ERROR` |  |
| `SUCCESS` |  |


---

## Detalhes dos Métodos

### values

```java
public static CancelInstanceStatus[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (CancelInstanceStatus c : CancelInstanceStatus.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static CancelInstanceStatus valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### SUCCESS

```java
public static final CancelInstanceStatus SUCCESS
```


---

### ERROR

```java
public static final CancelInstanceStatus ERROR
```


