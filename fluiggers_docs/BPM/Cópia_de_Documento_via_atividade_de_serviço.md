# Cópia de Documento via atividade de serviço

> **Fonte:** [https://fluiggers.com.br/t/copia-de-documento-via-atividade-de-servico/2964](https://fluiggers.com.br/t/copia-de-documento-via-atividade-de-servico/2964)
> **Categoria:** BPM
> **Tags:** `processo`, `ged`
> **Criado em:** 06/09/2024, 10:48
> **Visualizações:** 107 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 06/09/2024, 10:48

Salve, nação!

Quero pegar um determinado documento via ID e copiá-lo para uma outra pasta, mudando seu nome. Fiz o código abaixo:

```auto
// Função para fazer o upload do arquivo para outra pasta no GED
    function uploadFileToFolder(documentId, newFileName, parentDocumentId) {
        try {
            log.info("@@@ Iniciando a cópia do documento: " + documentId);
            var docDto = docAPI.newDocumentDto();
            docAPI.copyDocumentToUploadArea(documentId, 1000); // pela natureza do processo, a versão sempre será 1
            docDto.setDocumentId(0);
            docDto.setDocumentType("2"); // 1 - Pasta; 2 - Documento; 3 - Documento Externo; 4 - Fichario; 5 - Fichas; 9 - Aplicativo; 10 - Relatorio.
            docDto.setInheritSecurity(true);
            docDto.setParentDocumentId(parseInt(parentDocumentId));
            var attachArray = new java.util.ArrayList();
            var mainAttach = docAPI.newAttachment();
            mainAttach.setFileName(newFileName);
            mainAttach.setPrincipal(true);
            mainAttach.setAttach(false);
            attachArray.add(mainAttach);
            docDto.setActiveVersion(true);
            docDto.setColleagueId(getValue("WKUser"));
            docDto.setPublisherId(getValue("WKUser"));

            var comentario =
                '{"Id do anexo original": ' +
                '"' +
                documentId +
                '",' +
                '"PROTOCOLO": ' +
                '"' +
                getValue('WKNumProces') +
                '",' +
                '"Número do Edital": ' +
                '"' +
                hAPI.getCardValue('numeroNovoEdital') +
                '",' +
                '"Nome do Edital": ' +
                '"' +
                hAPI.getCardValue('nomeNovoEdital') +
                '"' +
                '}';

            docDto.setAdditionalComments(comentario);


            var doc = docAPI.createDocument(docDto, attachArray, null, null, null);

        } catch (e) {
            log.error("Erro ao copiar o documento: " + e);
            throw e;
        }
    }
```

Mas tô recebendo o erro:

**JavaException: com.datasul.technology.webdesk.exception.ECMInsertDocumentException: Tipo de documento informado não existe.**

Já tentei os tipos 2 e 3, com a mesma situação. Não é obrigação usar a docAPI, mas me pareceu a forma mais eficiente no momento, ao invés de usar webservice ou API REST. Alguma ideia?

Valeeeu!

---

## Resposta #1

**venturelli** (@venturelli) — 06/09/2024, 18:41

Faz um teste…

```auto
docDto.setDocumentType("2");
docDto.setDocumentTypeId("");
```

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 09/09/2024, 15:07 | ❤️ 1

Na trave, [@venturelli](/u/venturelli) …mas avançamos. Obrigado!

Veja:

```auto
function uploadFileToFolder(documentId, newFileName, parentDocumentId) {
        try {
            log.info("@@@ Iniciando a cópia do documento: " + documentId);
            var docDto = docAPI.newDocumentDto();
            docAPI.copyDocumentToUploadArea(documentId, 1000); // pela natureza do processo, a versão sempre será 1
            docDto.setDocumentId(0);
            docDto.setDocumentType("2"); // 1 - Pasta; 2 - Documento; 3 - Documento Externo; 4 - Fichario; 5 - Fichas; 9 - Aplicativo; 10 - Relatorio.
            docDto.setDocumentTypeId("");
            docDto.setInheritSecurity(true);
            docDto.setTopicId(2);
            docDto.setParentDocumentId(parseInt(parentDocumentId));
            docDto.setDocumentDescription(newFileName);
            var attachArray = new java.util.ArrayList();
            var mainAttach = docAPI.newAttachment();
            mainAttach.setFileName(newFileName);
            mainAttach.setPrincipal(true);
            mainAttach.setAttach(false);
            attachArray.add(mainAttach);
            docDto.setActiveVersion(true);
            docDto.setColleagueId(getValue("WKUser"));
            docDto.setPublisherId(getValue("WKUser"));

            var comentario =
                '{"Id do anexo original": ' +
                '"' +
                documentId +
                '",' +
                '"PROTOCOLO": ' +
                '"' +
                getValue('WKNumProces') +
                '",' +
                '"Número do Edital": ' +
                '"' +
                hAPI.getCardValue('numeroNovoEdital') +
                '",' +
                '"Nome do Edital": ' +
                '"' +
                hAPI.getCardValue('nomeNovoEdital') +
                '"' +
                '}';

            docDto.setAdditionalComments(comentario);


            var doc = docAPI.createDocument(docDto, attachArray, null, null, null);

        } catch (e) {
            log.error("Erro ao copiar o documento: " + e);
            throw e;
        }
    }
```

O único erro que tenho agora é que o Fluig não conseguiu encontrar o arquivo com o (novoNome) na pasta do original. Fiquei confuso, pois estou criando um novo documento mas com outro nome, setado em tempo de execução do código.

---

## Resposta #3

**venturelli** (@venturelli) — 09/09/2024, 15:37 | ❤️ 1

Quando um arquivo é copiado pra pasta de upload, ele não vai ter mais referencia do id. A única coisa que vai identificar ele é o nome.

Eu acredito que no `docDto` até possa manter o `newFileName`, mas no `mainAttach.setFileName` deve ser usado o nome original do arquivo.

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 10/09/2024, 09:48 | ❤️ 1

Muito obrigado, [@venturelli](/u/venturelli) ! Era isso mesmo, fiz confusão.

Aqui o código final caso alguém precise:

```auto
function enviaAnexosParaGED(attachmentObject, parentDocumentId) {
    log.info("@@@Enviando arquivos do processo para GED...@@@");
    var processNumber = getValue("WKNumProces");  // Número do processo atual
    var service = fluigAPI.getDocumentService();  // Serviço do GED do Fluig

    // Função para fazer o upload do arquivo para outra pasta no GED
    function uploadFileToFolder(documentId, actualFileName, newFileName, parentDocumentId) {
        try {
            log.info("@@@ Iniciando a cópia do documento: " + documentId);
            var docDto = docAPI.newDocumentDto();
            docAPI.copyDocumentToUploadArea(documentId, 1000); // pela natureza do processo, a versão sempre será 1
            docDto.setDocumentId(0);
            docDto.setDocumentType("2"); // 1 - Pasta; 2 - Documento; 3 - Documento Externo; 4 - Fichario; 5 - Fichas; 9 - Aplicativo; 10 - Relatorio.
            docDto.setDocumentTypeId("");
            docDto.setInheritSecurity(true);
            docDto.setTopicId(2);
            docDto.setParentDocumentId(parseInt(parentDocumentId));
            docDto.setDocumentDescription(newFileName);
            var attachArray = new java.util.ArrayList();
            var mainAttach = docAPI.newAttachment();
            mainAttach.setFileName(actualFileName);
            mainAttach.setPrincipal(true);
            mainAttach.setAttach(false);
            attachArray.add(mainAttach);
            docDto.setActiveVersion(true);
            docDto.setColleagueId(getValue("WKUser"));
            docDto.setPublisherId(getValue("WKUser"));

            var comentario =
                '{"Id do anexo original": ' +
                '"' +
                documentId +
                '",' +
                '"PROTOCOLO": ' +
                '"' +
                getValue('WKNumProces') +
                '",' +
                '"Número do Edital": ' +
                '"' +
                hAPI.getCardValue('numeroNovoEdital') +
                '",' +
                '"Nome do Edital": ' +
                '"' +
                hAPI.getCardValue('nomeNovoEdital') +
                '"' +
                '}';

            docDto.setAdditionalComments(comentario);


            var doc = docAPI.createDocument(docDto, attachArray, null, null, null);
            log.info("@@@ Documento copiado com sucesso " + doc.getDocumentId() + "para a pasta: " + parentDocumentId);

        } catch (e) {
            log.error("Erro ao copiar o documento: " + e);
            throw e;
        }
    }
```

---
