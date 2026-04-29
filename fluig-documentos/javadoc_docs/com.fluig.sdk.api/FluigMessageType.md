# Enum FluigMessageType

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/FluigMessageType.html)

**Hierarquia:**
```
java.lang.Object
  java.lang.Enum<FluigMessageType>
  com.fluig.sdk.api.FluigMessageType
```

```java
public enum FluigMessageType
extends Enum<FluigMessageType>
```

Define os tipos de mensagens suportadas pelo sistema para comunicação com o cliente.

- **All Implemented Interfaces:** Serializable, Comparable<FluigMessageType>
- **Version:** 1.00.000
- **Author:** vanei

---

## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static FluigMessageType` | `valueOf​(String name)` | Returns the enum constant of this type with the specified name. |
| `static FluigMessageType[]` | `values()` | Returns an array containing the constants of this enum type, in
the order they are declared. |


## Constantes do Enum

| Nome | Descrição |
| --- | --- |
| `ERROR` | Erro. |
| `INFO` | Informações gerais. |
| `QUESTION` | Pergunta. |
| `WARNING` | Aviso importante. |


---

## Detalhes dos Métodos

### values

```java
public static FluigMessageType[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

for (FluigMessageType c : FluigMessageType.values())
    System.out.println(c);

- **Returns:** an array containing the constants of this enum type, in the order they are declared

---

### valueOf

```java
public static FluigMessageType valueOf​(String name)
```

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

- **Parameters:** `name` - the name of the enum constant to be returned.
- **Returns:** the enum constant with the specified name
- **Throws:** `` `IllegalArgumentException` `` - if this enum type has no constant with the specified name


## Detalhes das Constantes

### INFO

```java
public static final FluigMessageType INFO
```

Informações gerais.


---

### WARNING

```java
public static final FluigMessageType WARNING
```

Aviso importante.


---

### ERROR

```java
public static final FluigMessageType ERROR
```

Erro.


---

### QUESTION

```java
public static final FluigMessageType QUESTION
```

Pergunta.


