# Class ArrayMapDeserializer

> **Pacote:** `com.fluig.sdk.api`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/ArrayMapDeserializer.html)

**Hierarquia:**
```
java.lang.Object
  com.fasterxml.jackson.databind.JsonDeserializer<Map<String,​String>>
  com.fluig.sdk.api.ArrayMapDeserializer
```

```java
public class ArrayMapDeserializer
extends com.fasterxml.jackson.databind.JsonDeserializer<Map<String,​String>>
```

Deserializa mapa de array

- **All Implemented Interfaces:** com.fasterxml.jackson.databind.deser.NullValueProvider
- **Version:** 1.00.000
- **Author:** vanei

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `ArrayMapDeserializer()` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Map<String,​String>` | `deserialize​(com.fasterxml.jackson.core.JsonParser jp, com.fasterxml.jackson.databind.DeserializationContext context)` | Deserializa mapa de array |


---

## Detalhes dos Construtores

### ArrayMapDeserializer

```java
public ArrayMapDeserializer()
```



## Detalhes dos Métodos

### deserialize

```java
public Map<String,​String> deserialize​(com.fasterxml.jackson.core.JsonParser jp,
                                            com.fasterxml.jackson.databind.DeserializationContext context)
                                     throws IOException
```

Deserializa mapa de array

- **Specified by:** `deserialize` in class ``com.fasterxml.jackson.databind.JsonDeserializer<`Map`<`String`,​`String`>>``
- **Throws:** `` `IOException` ``

