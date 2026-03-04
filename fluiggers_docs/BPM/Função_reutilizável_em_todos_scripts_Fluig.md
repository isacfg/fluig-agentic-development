# Função reutilizável em todos scripts Fluig

> **Fonte:** [https://fluiggers.com.br/t/funcao-reutilizavel-em-todos-scripts-fluig/2751](https://fluiggers.com.br/t/funcao-reutilizavel-em-todos-scripts-fluig/2751)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`, `dataset`, `app`
> **Criado em:** 25/04/2024, 11:54
> **Visualizações:** 286 | **Likes:** 10 | **Respostas:** 7

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 25/04/2024, 11:54

Eu tenho uma função de enviar e-mail que gostaria de reaproveitar em todos os meus projetos, sem ter que ficar criando-o novamente, é possível?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/04/2024, 12:48 | ❤️ 2

Faça ela como um Dataset. Aí você pode chamar esse dataset em qualquer outro lugar.

---

## Resposta #2

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 25/04/2024, 14:59

Pode me dar um exemplo? Perdão, novato ainda nesse ambiente…

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 25/04/2024, 15:09

Se me lembro bem o truque é deixar a função reutilizável dentro de um dos registros do dataset. Aí você chama ele e dá um .eval() no registro. Correto [@Bruno\_Gasparetto](/u/bruno_gasparetto) ?

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/04/2024, 15:26

Desse jeito ainda não fiz, [@daniel.cabral](/u/daniel.cabral) . Eu simplesmente faço o Dataset executar mesmo, sem o eval.

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/04/2024, 15:46 | ❤️ 3

Cria um dataset e os parâmetros da “função” são as contraints que você envia na hora de consultar o Dataset.

Olha só esse exemplo de um dataset que envia e-mail com anexos:

![](https://github.githubassets.com/favicons/favicon.svg) [github.com](https://github.com/sergiomachadosilva/fluig-datasets/tree/master/dsEnviarEmailComAnexos)

### [fluig-datasets/dsEnviarEmailComAnexos at master ·...](https://github.com/sergiomachadosilva/fluig-datasets/tree/master/dsEnviarEmailComAnexos)

Repositório de datasets para o Fluig . Contribute to sergiomachadosilva/fluig-datasets development by creating an account on GitHub.

Eu já fiz um dataset baseado nesse do link, pra enviar e-mails com anexo.

Outro exemplo. Em alguns processos eu preciso saber se foi enviado algum anexo em determinada Atividade. Tive essa necessidade em uns 3 processos. Aí resolvi fazer um dataset que recebe, por constraint, o ID da Solicitação e o Número da Atividade. Aí ele simplesmente retorna informando se teve anexo ali.

Vou deixar aqui um exemplo, acho que o mais simples.

É um dataset que cria uma nova pasta no GED do Fluig. Dei o nome de `ds_fluig_create_folder` a ele.

```javascript
/**
 * Cria uma pasta
 *
 * Deve-se passar as constraints:
 * - parentId: ID da pasta pai;
 * - folderName: Nome da pasta a ser criada;
 *
 * O Dataset retorna o ID da pasta criada.
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("success");
    dataset.addColumn("message");
    dataset.addColumn("folderId");

    var parentId = parseInt(getConstraintValue(constraints, "parentId"));
    var folderName = getConstraintValue(constraints, "folderName");

    if (!parentId || folderName == "") {
        dataset.addRow([
            "0",
            "Obrigatório informar as constraints parentId e folderName",
            ""
        ]);

        return dataset;
    }

    try {
        var fluigCredentials = getFluigWebServiceUser();
        var serviceHelper = ServiceManager.getService("ECMFolderService").getBean();
        var service = serviceHelper
            .instantiate("com.totvs.technology.ecm.dm.ws.ECMFolderServiceService")
            .getFolderServicePort();

        var result = service.createSimpleFolder(
            fluigCredentials.username,
            fluigCredentials.password,
            getValue("WKCompany"),
            parentId,
            "admin",
            folderName
        );

        var folderId = result.getItem().get(0).getDocumentId().toString();

        if (folderId == "0") {
            var message = result.getItem().get(0).getWebServiceMessage();
            throw message ? message : "Não foi possível criar a pasta. Verifique se o parentId informado é válido.";
        }

        dataset.addRow([
            "1",
            "Pasta Criada",
            folderId
        ]);

        return dataset;
    } catch (err) {
        dataset.addRow([
            "0",
            err,
            ""
        ]);

        return dataset;
    }
}

/**
 * Pega o valor inicial de uma constraint
 *
 * @param {Constraint[]} constraints
 * @param {string} field
 * @returns {string}
 */
function getConstraintValue(constraints, field) {
    for (var i = 0; i < constraints.length; ++i) {
        if (constraints[i].fieldName == field) {
            return constraints[i].initialValue;
        }
    }
    return "";
}

/**
 * Retorna as credenciais do WS do Fluig
 *
 * @returns {{username: string, password: string}}
 */
function getFluigWebServiceUser() {
    var ds = DatasetFactory.getDataset(
        "ds_WebServiceUsers",
        null,
        [DatasetFactory.createConstraint('service', 'Fluig', 'Fluig', ConstraintType.MUST)],
        null
    );

    if (!ds.rowsCount) {
        throw "Fluig Webservice: Usuário não encontrado!";
    }

    return {
        username: ds.getValue(0, "wsUsername"),
        password: ds.getValue(0, "wsPassword")
    };
}
```

Aí, em qualquer lugar, eu posso invocar esse dataset pra ele criar a pasta:

```javascript
var dsFolder = DatasetFactory.getDataset(
    "ds_fluig_create_folder",
    null,
    [
        DatasetFactory.createConstraint("parentId", 10, 10, ConstraintType.MUST),
        DatasetFactory.createConstraint("folderName", "Teste 001", "Teste 001", ConstraintType.MUST),
    ],
    null
);

if (dsFolder.getValue(0, "success") == 0) {
    throw dsFolder.getValue(0, "message");
}

var folderId = dsFolder.getValue(0, "folderId");
```

---

## Resposta #6

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 25/04/2024, 15:58

Muito booooooooom Bruno! Show demais, ajudou muito. :facepunch:

---

## Resposta #7

**Daniel Cabral Santos** (@daniel.cabral) — 26/04/2024, 08:46 | ❤️ 2

AAhhh tá! Meu raciocínio foi diferente - sua solução é mais elegante encapsulando funções executáveis pelo backend.

O que sugeri seria para uma abordagem mais no frontend sem depender de colocar arquivos dentro das pastas do fluig - mas penso que, apesar do trabalho manual, a manutenção ainda é relativamente fácil - colocar os .js na pasta /resources do fluig e importar a partir de lá. Antes da TOTVS integrar o Moment por exemplo, fazia isso.

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/04/2024, 10:27 | ❤️ 3

[@GabrielDouglas](/u/gabrieldouglas) , não é uma ótima explicação, mas dá uma olhada nesse vídeo que fala um pouco sobre isso de compartilhar código dentro do Fluig.

[![](https://img.youtube.com/vi/LRv6hctjVCo/maxresdefault.jpg "TOTVS Fluig - Reaproveitamento de Código")](https://www.youtube.com/watch?v=LRv6hctjVCo)

---
