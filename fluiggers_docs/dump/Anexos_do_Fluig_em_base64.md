# Anexos do Fluig em base64

> **Fonte:** [https://fluiggers.com.br/t/anexos-do-fluig-em-base64/3126](https://fluiggers.com.br/t/anexos-do-fluig-em-base64/3126)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`
> **Criado em:** 17/01/2025, 18:55
> **Visualizações:** 96 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rafael Luz** (@Rafael_Luz) — 17/01/2025, 18:55

Boa Noite pessoal,

Há alguma forma de obter o base64 dos anexos do Fluig adicionados em solicitações e onde precisaria adicionar? Preciso obter o base64 para fazer o envio em uma chamada rest.

Obrigado !

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Rafael Luz** (@Rafael_Luz) — 04/02/2025, 20:20

Utilizei da seguinte forma para pegar o base64 dos anexos:

// Lista com os anexos presentes na solicitação
var docs = hAPI.listAttachments();

for (var i = 0; i < docs.size(); i++) {
var doc = docs.get(i);
var base64 = getBase64(doc.getDocumentId(), doc.getVersion(), doc.getPhisicalFile());

```
log.info("### base64");
log.info(base64)
```

}

function getBase64(id, versao, nomeArquivo) {
try {
var dirDefault = fluigAPI.getTenantService().getTenantData(\[“dirDefault”\]).get(“dirDefault”);
// Cria o caminho do arquivo e normaliza as barras
var caminhoArquivo = (dirDefault + “/public/” + id + “/” + versao + “/” + nomeArquivo).replace(/\\/g, “/”);
var arquivo = new java.io.File(caminhoArquivo);

```
if(arquivo.exists()){
		var fileContent = new java.nio.file.Files.readAllBytes(arquivo.toPath());
		return java.util.Base64.getEncoder().encodeToString(fileContent);
	}else{
		throw "Arquivo não encontrado: "+caminhoArquivo;
	}
} catch (ex) {
    throw ("function " + arguments.callee.name + " => " + ex.toString());
}
```

}

---
