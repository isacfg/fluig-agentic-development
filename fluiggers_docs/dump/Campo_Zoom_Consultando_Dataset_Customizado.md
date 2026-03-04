# Campo Zoom Consultando Dataset Customizado

> **Fonte:** [https://fluiggers.com.br/t/campo-zoom-consultando-dataset-customizado/3012](https://fluiggers.com.br/t/campo-zoom-consultando-dataset-customizado/3012)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 08/10/2024, 09:15
> **Visualizações:** 99 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 08/10/2024, 09:15

Criei o dataset que o [@Bruno\_Gasparetto](/u/bruno_gasparetto) criou dos anexos dos processos, e agora preciso apresentar esses dados em um campo zoom (ou outro que seja melhor). Só pra contextualizar, os anexos são currículos, e o campo zoom é pra selecionar o “candidato” finalista.

Mas esse dataset pra funcionar precisa receber uma constraint, até hoje eu só criei campo zoom sem precisar fazer isso, podem me ajudar?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/10/2024, 09:54

Na [Documentação do Zoom](https://tdn.totvs.com/pages/releaseview.action?pageId=663066946#Personaliza%C3%A7%C3%A3odeformul%C3%A1rios-Zoom), embora mal formatado, explica como passar constraints.

![image](https://fluiggers.com.br/uploads/default/original/2X/f/f322f196262ae3421c0e62a3af804679e3ae8580.png)

Basicamente tem a propriedade `filterValues` que é justamente pra enviar constraints ao dataset, fazendo assim a filtragem dos dados.

Nessa propriedade você passa a constraint e o valor, separando cada parte com vírgula. Pode-se passar várias constraints e valores, mas sempre separando com vírgula.

Por exemplo, o zoom abaixo chama o dataset passando as constraints `situacao` e `UF`.

```html
<input type="zoom" class="form-control" id="agencia_nome" name="agencia_nome" data-zoom="{
    'datasetId':'form_expedicao_agencia_postagem',
    'filterValues':'situacao,Ativa,UF,MS',
    'displayKey':'nome',
    'maximumSelectionLength':'1',
    'placeholder':'Selecione a Agência de Postagem',
    'fields':[
        {
            'field':'nome',
            'label':'Nome',
            'standard':'true'
        },
        {
            'field':'cartaoPostagem',
            'label':'Cartão de Postagem',
            'visible':'false'
        }
    ]
}">
```

---

## Resposta #2

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 08/10/2024, 10:08

Então, eu estou usando o seu `ds_process_attachments_files.js` como dataset e passando o seguinte zoom no formulário, e mesmo assim não está aparecendo os dados. O processo tem 3 anexos.

```auto
<div class="form-group col-md-5">
								<strong><label for="nomeCargo">Candidato Selecionado:s</label></strong>
								<input type="zoom" class="form-control" id="nomeCandidato" name="nomeCandidato" data-zoom="{
									'datasetId':'ds_process_attachments_files',
									'filterValues':'processid,343',
									'displayKey':'fileName',
									'placeholder':'Selecione um candidato',
									'fields':[
										{
											'field':'fileName',
											'label':'Nome do Candidato',
											'standard':'true'
										}
									]
								}">
```

![image](https://fluiggers.com.br/uploads/default/optimized/2X/8/8d140578691424cabd36cb71dbf26cc4265c617d_2_690x224.png)

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/10/2024, 10:41

Quando consulta o dataset, sem ser pelo Zoom, ele funciona normalmente?

O Log do Fluig indica algum erro?

---

## Resposta #4

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 08/10/2024, 10:47

Nenhum erro no log, e quando eu consulto o dataset não retorna nada… vou compartilhar abaixo o código:

```auto
/**
 * Pega os documentos anexos a um processo
 *
 * Deve informar o processId na Constraint (e só ele será usado para filtrar dados).
 *
 * @param {string[]} fields
 * @param {Constraint[]} constraints
 * @param {string[]} sortFields
 */
function createDataset(fields, constraints, sortFields) {
    // ID do usuário Admin para permitir que qualquer um possa consultar o dataset document
    var adminUserId = "xpto"; //AQUI EU PASSEI O ID DO ADMINA
    var i = 0;

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("processId");
    dataset.addColumn("documentId");
    dataset.addColumn("fileName");
    dataset.addColumn("downloadUrl");

    var processId = getProcessIdFromConstraints(constraints);

    if (!processId) {
        return dataset;
    }

    var attachmentDocumentIds = getDocumentsIdFromProcess(processId);

    if (!attachmentDocumentIds.length) {
        return dataset;
    }

    var documentConstraints = [
        DatasetFactory.createConstraint("phisicalFile", "", "", ConstraintType.MUST_NOT),
        DatasetFactory.createConstraint("userSecurityId", adminUserId, adminUserId, ConstraintType.MUST)
    ];

    for (i = 0; i < attachmentDocumentIds.length; ++i) {
        documentConstraints.push(
            DatasetFactory.createConstraint(
                "documentPK.documentId",
                attachmentDocumentIds[i],
                attachmentDocumentIds[i],
                ConstraintType.SHOULD
            )
        );
    }

    var attachmentsDs = DatasetFactory.getDataset(
        "document",
        ["documentPK.documentId", "documentDescription"],
        documentConstraints,
        ["lastModifiedDate"]
    );

    if (!attachmentsDs.rowsCount) {
        return dataset;
    }

    var documentService = fluigAPI.getDocumentService();
    var documentId = 0;

    for (i = 0; i < attachmentsDs.rowsCount; ++i) {
        documentId = parseInt(attachmentsDs.getValue(i, "documentPK.documentId"));

        dataset.addRow([
            processId,
            documentId,
            attachmentsDs.getValue(i, "documentDescription"),
            documentService.getDownloadURL(documentId)
        ]);
    }

    return dataset;
}

/**
 * Pega os IDs dos documentos que são anexos do processo
 *
 * @param {number} processId
 * @returns {number[]}
 */
function getDocumentsIdFromProcess(processId) {
    var ids = [];

    var processAttachmentsDs = DatasetFactory.getDataset(
        "processAttachment",
        ["documentId"],
        [
            DatasetFactory.createConstraint(
                "processAttachmentPK.processInstanceId",
                processId,
                processId,
                ConstraintType.MUST
            ),
            DatasetFactory.createConstraint(
                "originalThreadSequence",
                0,
                0,
                ConstraintType.MUST
            )
        ],
        null
    );

    for (var i = 0; i < processAttachmentsDs.rowsCount; ++i) {
        ids.push(parseInt(processAttachmentsDs.getValue(i, "documentId")));
    }

    return ids;
}

/**
 * Pega o processId
 *
 * @param {Constraint[]} constraints Filtros
 * @returns {number}
 */
function getProcessIdFromConstraints(constraints) {
    for (var i = 0; i < constraints.length; ++i) {
        if (constraints[i].fieldName.toLowerCase() == "processid") {
            return parseInt(constraints[i].initialValue);
        }
    }

    return 0;
}
```

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 08/10/2024, 11:21 | ❤️ 1

Consegui resolver… Na função `getDocumentsIdFromProcess` tinha uma segunda constraint lá que filtrava originalThreadSequence igual a zero, assim que eu removi, deu certo.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/0/01842d46a13946bce63305f1f08113d2d190317a_2_690x330.png)

---
