# Interface ContentFilesService

> **Pacote:** `com.fluig.sdk.service`
> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/ContentFilesService.html)

**Hierarquia:**
```
All Superinterfaces:
BaseAPIService
  public interface ContentFilesService
extends BaseAPIService
Disponibiliza operação para upload de arquivo
  Since:
1.5
Author:
vanei.heidemann
```

```java
public interface ContentFilesService
extends BaseAPIService
```

Disponibiliza operação para upload de arquivo

- **All Superinterfaces:** BaseAPIService
- **Since:** 1.5
- **Author:** vanei.heidemann

---

## Campos (Fields)

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `static String` | `JNDI_NAME` |  |
| `static String` | `JNDI_REMOTE_NAME` |  |


## Métodos

| Modificador/Tipo | Método | Descrição |
| --- | --- | --- |
| `String` | `getDeployableArtifactsDirectory()` | Recupera diretório do artefato a ser implantado |
| `void` | `upload​(String fileName, byte[] fileContent)` | Executa o upload de um arquivo |


---

## Detalhes dos Campos

### JNDI_NAME

```java
static final String JNDI_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ContentFilesService.JNDI_NAME)

---

### JNDI_REMOTE_NAME

```java
static final String JNDI_REMOTE_NAME
```

- **See Also:** [Constant Field Values](../../../../constant-values.html#com.fluig.sdk.service.ContentFilesService.JNDI_REMOTE_NAME)


## Detalhes dos Métodos

### upload

```java
void upload​(String fileName,
            byte[] fileContent)
     throws com.fluig.sdk.api.common.SDKException
```

Executa o upload de um arquivo

- **Parameters:** `fileName` -
- **Throws:** `com.fluig.sdk.api.common.SDKException`

---

### getDeployableArtifactsDirectory

```java
String getDeployableArtifactsDirectory()
                                throws com.fluig.sdk.api.common.SDKException
```

Recupera diretório do artefato a ser implantado

- **Returns:** String diretorio
- **Throws:** `com.fluig.sdk.api.common.SDKException`

