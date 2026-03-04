# Class DocumentApprovementHistoryVO

> **Pacote:** `com.fluig.sdk.api.document`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApprovementHistoryVO.html)

**Hierarquia:**
```
java.lang.Object
  com.fluig.sdk.api.document.DocumentApprovementHistoryVO
```

```java
public class DocumentApprovementHistoryVO
extends Object
implements Serializable
```

VO Utilizado pelo ws para mostrar o historico de aprovacoes do documento

- **All Implemented Interfaces:** Serializable
- **See Also:** Serialized Form

---

## Construtores

| Nome | Descrição |
| --- | --- |
| `DocumentApprovementHistoryVO()` |  |
| `DocumentApprovementHistoryVO​(int documentVersion, int iterationSequence, int levelId, int movementSequence, String colleagueId, Date approvementDate, int status, String observation, boolean signed, String colleagueName)` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `Date` | `getApprovementDate()` |  |
| `String` | `getColleagueId()` |  |
| `String` | `getColleagueName()` |  |
| `int` | `getDocumentVersion()` |  |
| `int` | `getIterationSequence()` |  |
| `int` | `getLevelId()` |  |
| `int` | `getMovementSequence()` |  |
| `String` | `getObservation()` |  |
| `int` | `getStatus()` |  |
| `boolean` | `isSigned()` |  |
| `void` | `setApprovementDate​(Date approvementDate)` |  |
| `void` | `setColleagueId​(String colleagueId)` |  |
| `void` | `setColleagueName​(String colleagueName)` |  |
| `void` | `setDocumentVersion​(int documentVersion)` |  |
| `void` | `setIterationSequence​(int iterationSequence)` |  |
| `void` | `setLevelId​(int levelId)` |  |
| `void` | `setMovementSequence​(int movementSequence)` |  |
| `void` | `setObservation​(String observation)` |  |
| `void` | `setSigned​(boolean signed)` |  |
| `void` | `setStatus​(int status)` |  |


---

## Detalhes dos Construtores

### DocumentApprovementHistoryVO

```java
public DocumentApprovementHistoryVO()
```


---

### DocumentApprovementHistoryVO

```java
public DocumentApprovementHistoryVO​(int documentVersion,
                                    int iterationSequence,
                                    int levelId,
                                    int movementSequence,
                                    String colleagueId,
                                    Date approvementDate,
                                    int status,
                                    String observation,
                                    boolean signed,
                                    String colleagueName)
```



## Detalhes dos Métodos

### getDocumentVersion

```java
public int getDocumentVersion()
```


---

### setDocumentVersion

```java
public void setDocumentVersion​(int documentVersion)
```


---

### getIterationSequence

```java
public int getIterationSequence()
```


---

### setIterationSequence

```java
public void setIterationSequence​(int iterationSequence)
```


---

### getLevelId

```java
public int getLevelId()
```


---

### setLevelId

```java
public void setLevelId​(int levelId)
```


---

### getMovementSequence

```java
public int getMovementSequence()
```


---

### setMovementSequence

```java
public void setMovementSequence​(int movementSequence)
```


---

### getColleagueId

```java
public String getColleagueId()
```


---

### setColleagueId

```java
public void setColleagueId​(String colleagueId)
```


---

### getApprovementDate

```java
public Date getApprovementDate()
```


---

### setApprovementDate

```java
public void setApprovementDate​(Date approvementDate)
```


---

### getStatus

```java
public int getStatus()
```


---

### setStatus

```java
public void setStatus​(int status)
```


---

### getObservation

```java
public String getObservation()
```


---

### setObservation

```java
public void setObservation​(String observation)
```


---

### isSigned

```java
public boolean isSigned()
```


---

### setSigned

```java
public void setSigned​(boolean signed)
```


---

### getColleagueName

```java
public String getColleagueName()
```


---

### setColleagueName

```java
public void setColleagueName​(String colleagueName)
```


