# Salvar Anexos de um Processo no ECM

> **Fonte:** [https://fluiggers.com.br/t/salvar-anexos-de-um-processo-no-ecm/1033](https://fluiggers.com.br/t/salvar-anexos-de-um-processo-no-ecm/1033)
> **Categoria:** BPM
> **Tags:** `bpm`, `ecm`, `anexo`
> **Criado em:** 19/04/2022, 10:43
> **Visualizações:** 640 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 19/04/2022, 10:43

Pessoal, sou iniciante na programação de Fluig e preciso capturar os anexos de uma tarefa específica de um processo e jogar em uma pasta específica criando uma pasta filha com os arquivos dessa tarefa específica dentro.
Encontrei um exemplo onde consegui jogar os anexos no ECM, porém ele não cria a pasta filha e também pega todos os anexos e não somente da tarefa desejada.
Alguém poderia me ajudar?

Segue código abaixo:

function afterProcessFinish(processId) {

```
log.info("#### Gravar anexos do formulário na pasta");
var id_FolderProtocolo = (parseInt("2965"));
var calendar = java.util.Calendar.getInstance().getTime();
var docs = hAPI.listAttachments();

	for(var i=0;i<docs.size();i++){

            var doc = docs.get(i);
            doc.setParentDocumentId(id_FolderProtocolo);
            doc.setExpires(false);
            doc.setCreateDate(calendar);
            doc.setInheritSecurity(true);
            doc.setTopicId(1);
            doc.setUserNotify(false);
            doc.setValidationStartDate(calendar);
            doc.setVersionOption("0");
            doc.setUpdateIsoProperties(true);
            hAPI.publishWorkflowAttachment(doc);
            log.info("#### Gravou anexo "+ doc.getDocumentId() +" do formulário na pasta");
    }
```

}

---
