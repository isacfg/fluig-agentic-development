# Recuperar todos os documentos de uma pasta do ECM

> **Fonte:** [https://fluiggers.com.br/t/recuperar-todos-os-documentos-de-uma-pasta-do-ecm/935](https://fluiggers.com.br/t/recuperar-todos-os-documentos-de-uma-pasta-do-ecm/935)
> **Categoria:** Formulários
> **Tags:** `form`, `fluigapi`
> **Criado em:** 21/02/2022, 09:33
> **Visualizações:** 1366 | **Likes:** 6 | **Respostas:** 4

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 21/02/2022, 09:33

Bom dia pessoal,

Necessito listar em uma tela uma lista de documentos de uma pasta no ECM para download.

Mas creio que para isso preciso saber dos ID’s dos documentos para que eu consiga gerar um link de download.

Existe uma API para isso? Onde eu passaria o título da pasta e a partir de então receberia como retorno um array de objetos com todos os códigos e nomes dos documentos contidos naquela pasta.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 21/02/2022, 09:54 | ❤️ 1

Olá precisa montar uma consulta q que busque a listagem da tabela “DOCUMENTO” e usar o link

seu site fluig…/portal/p/1/ecmnavigation?app\_ecm\_navigation\_card=<numero do documento (coluna NR\_DOCUMENTO)>

Uso isso para relatorios customizados do fluig onde lista processos e anexos do processo

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/02/2022, 09:57 | ❤️ 2

Eu fiz um dataset pra fazer essa listagem de documentos de um diretório. Com um pouco de adaptação dá pra reutilizar pro seu caso.

```javascript
/**
 * Retorna os documentos de um diretório indicado pela constraint folderId
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("folderId");
    dataset.addColumn("id");
    dataset.addColumn("description");
    dataset.addColumn("url");

    var folderId = getFolderIdFromConstraints(constraints);

    if (!folderId) {
        return dataset;
    }

    var folderService = fluigAPI.getFolderDocumentService();
    var documentService = fluigAPI.getDocumentService();

    var list = folderService.list(folderId);
    var it = list.iterator();

    while (it.hasNext()) {
        var document = it.next();

        dataset.addRow([
            folderId,
            document.getDocumentId(),
            document.getDocumentDescription(),
            documentService.getDownloadURL(document.getDocumentId())
        ]);
    }

    return dataset;
}

/**
 * Pega o ID do diretório
 *
 * @param {Constraint[]} constraints Filtros
 * @returns {number}
 */
 function getFolderIdFromConstraints(constraints) {
    for (var i = 0; i < constraints.length; ++i) {
        if (constraints[i].fieldName.toLowerCase() == "folderid") {
            return parseInt(constraints[i].initialValue);
        }
    }

    return 0;
}
```

---

## Resposta #3

**Daniel ** (@daniel_fmartins) — 22/02/2022, 11:37 | ❤️ 1

Consegui consultar via JDBC os dados no banco.

Como o consumo será via uma página pública, creio que agora terei que consumir o dataset autenticando via OAuth ou algo do tipo…

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/02/2022, 15:41 | ❤️ 1

Eu li Documento na pasta ECM e minha cabeça já vai pra arquivo. Eu ainda não me acostumei que tudo é documento, indiferente se é um arquivo ou um registro de formulário, hehehe.

---

## Resposta #5

**Daniel ** (@daniel_fmartins) — 08/03/2022, 11:59

[@Bruno\_Gasparetto](/u/bruno_gasparetto) Será que existe uma API pública (consumindo de fora do fluig através de uma autenticação) para esses documento de uma pasta?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/03/2022, 12:48 | ❤️ 1

Bem provável que possa usar a [ECMFolderService](https://tdn.totvs.com/pages/releaseview.action?pageId=73084007#Utiliza%C3%A7%C3%A3odeWebservices-ECMFolderService) pra isso. Aí seria só fazer a chamada SOAP pelo sistema que deseja.

---
