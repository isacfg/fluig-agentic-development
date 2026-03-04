# Dataset Customizado sem permissão para consultar Dataset Interno

> **Fonte:** [https://fluiggers.com.br/t/dataset-customizado-sem-permissao-para-consultar-dataset-interno/3281](https://fluiggers.com.br/t/dataset-customizado-sem-permissao-para-consultar-dataset-interno/3281)
> **Categoria:** ECM / GED
> **Tags:** `dataset`
> **Criado em:** 13/05/2025, 17:48
> **Visualizações:** 99 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Jean** (@jean.paulino) — 13/05/2025, 17:48

Olá pessoal, tudo bom?

Estamos com um problema e gostaria de saber se alguém já passou por isso.

Temos alguns dataset’s customizados e dentro dele fazemos chamadas em datasets internos, porém tirando o nosso usuário administrador, o restante dos usuários não tem permissão para acesso.

Já tentamos passar o userSecurityId dentro do dataset customizado e também tentamos sem sucesso implementar o oauth dentro desse dataset, mas não conseguimos.

Com o oauth conseguimos facilmente acessar o dataset interno, mas quando chamamos o dataset customizado, chamando o interno, ele retorna status 200 com os campos, porém vazio, sem nenhuma infomação.

Caso alguém saiba a solução, poderia nos ajudar?

Obrigado.

Chamada no postman
/api/public/ecm/dataset/datasets

Passando o body
{
“name”: “dsTesteCustomizado”,
“fields”: ,
“constraints”: ,
“order”:
}

Abaixo segue o código que chama nosso dataset sem o oauth, pois não conseguimos implementar.

```auto
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();

    var cols = [
        "dataRegistro",
        "departamento",
        "item",
        "unidadeMedida",
        "codigoReferencia",
        "descricaoProblema",
        "codigoProblema",
        "codigoItem",
        "categoria",
        "quantidadeItem",
        "etapaAtual",
        "valorCalculado",
    ];

    cols.forEach(function (c) {
        dataset.addColumn(c);
    });

    function processarRegistrosTipoA() {
        var ds = DatasetFactory.getDataset(
            "dsRegistroItem",
            null,
            [
                DatasetFactory.createConstraint(
                    "metadata#active",
                    true,
                    true,
                    ConstraintType.MUST
                ),
                DatasetFactory.createConstraint(
                    "tablename",
                    "tabelaItensTipoA",
                    "tabelaItensTipoA",
                    ConstraintType.MUST
                ),
            ],
            null
        );

        for (var i = 0; i < ds.rowsCount; i++) {
            var cardIdStr = ds.getValue(i, "metadata#id");
            var cardDocumentId = parseInt(cardIdStr, 10);

            var retornoDados = retornaAtividade(cardIdStr);

            var cstWorkflow = [];
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "processId",
                    "registroItemProcess",
                    "registroItemProcess",
                    ConstraintType.MUST
                )
            );
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "cardDocumentId",
                    cardDocumentId,
                    cardDocumentId,
                    ConstraintType.MUST
                )
            );

            var dsWorkflow = DatasetFactory.getDataset(
                "workflowProcess",
                null,
                cstWorkflow,
                null
            );

            if (!dsWorkflow || dsWorkflow.rowsCount === 0) {
                log.warn(">> Nenhum processo encontrado para o cardDocumentId: " + cardDocumentId);
                continue;
            }

            var processInstanceId = dsWorkflow.getValue(0, "workflowProcessPK.processInstanceId");
            var status = dsWorkflow.getValue(0, "status");
            var etapaAtual = consultaAtividadeAtual(processInstanceId);

            if (status == 2) {
                var data = safe(ds.getValue(i, "dataRegistroTipoA"));
                var dep = safe(ds.getValue(i, "departamentoTipoA"));
                var item = safe(ds.getValue(i, "descricaoItemTipoA"));
                var und = safe(ds.getValue(i, "unidadeTipoA"));
                var ref = safe(ds.getValue(i, "referenciaTipoA"));
                var desc = safe(ds.getValue(i, "descricaoProblemaTipoA"));
                var codProb = safe(ds.getValue(i, "codigoProblemaTipoA"));
                var codItem = safe(ds.getValue(i, "codigoItemTipoA"));
                var cat = safe(ds.getValue(i, "categoriaTipoA"));
                var qtd = safe(ds.getValue(i, "quantidadeTipoA"));

                var precoUnitario = obterPrecoMedio(codItem);
                var valorTotal = parseFloat(precoUnitario.replace(",", ".")) * parseFloat(qtd.replace(",", "."));

                dataset.addRow([
                    data,
                    dep,
                    item,
                    und,
                    ref,
                    desc,
                    codProb,
                    codItem,
                    cat,
                    qtd,
                    etapaAtual,
                    valorTotal.toFixed(2),
                ]);
            }
        }
    }

    function processarRegistrosTipoB() {
        var ds = DatasetFactory.getDataset(
            "dsRegistroItem",
            null,
            [
                DatasetFactory.createConstraint(
                    "metadata#active",
                    true,
                    true,
                    ConstraintType.MUST
                ),
                DatasetFactory.createConstraint(
                    "tablename",
                    "tabelaItensTipoB",
                    "tabelaItensTipoB",
                    ConstraintType.MUST
                ),
            ],
            null
        );

        for (var i = 0; i < ds.rowsCount; i++) {
            var cardIdStr = ds.getValue(i, "metadata#id");
            var cardDocumentId = parseInt(cardIdStr, 10);

            var retornoDados = retornaAtividade(cardIdStr);

            var cstWorkflow = [];
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "processId",
                    "registroItemProcess",
                    "registroItemProcess",
                    ConstraintType.MUST
                )
            );
            cstWorkflow.push(
                DatasetFactory.createConstraint(
                    "cardDocumentId",
                    cardDocumentId,
                    cardDocumentId,
                    ConstraintType.MUST
                )
            );

            var dsWorkflow = DatasetFactory.getDataset(
                "workflowProcess",
                null,
                cstWorkflow,
                null
            );

            if (!dsWorkflow || dsWorkflow.rowsCount === 0) {
                log.warn(">> Nenhum processo encontrado para o cardDocumentId: " + cardDocumentId);
                continue;
            }

            var processInstanceId = dsWorkflow.getValue(0, "workflowProcessPK.processInstanceId");
            var status = dsWorkflow.getValue(0, "status");
            var etapaAtual = consultaAtividadeAtual(processInstanceId);

            if (status == 2) {
                var data = safe(ds.getValue(i, "dataRegistroTipoB"));
                var dep = safe(ds.getValue(i, "departamentoTipoB"));
                var item = safe(ds.getValue(i, "descricaoItemTipoB"));
                var und = safe(ds.getValue(i, "unidadeTipoB"));
                var qtd = safe(ds.getValue(i, "quantidadeTipoB"));
                var desc = safe(ds.getValue(i, "descricaoProblemaTipoB"));
                var codProb = safe(ds.getValue(i, "codigoProblemaTipoB"));
                var cat = safe(ds.getValue(i, "categoriaTipoB"));
                var codItem = safe(ds.getValue(i, "codigoItemTipoB"));

                var precoUnitario = obterPrecoMedio(codItem);
                var valorTotal = parseFloat(precoUnitario.replace(",", ".")) * parseFloat(qtd.replace(",", "."));

                dataset.addRow([
                    data,
                    dep,
                    item,
                    und,
                    "Indefinido",
                    desc,
                    codProb,
                    codItem,
                    cat,
                    qtd,
                    etapaAtual,
                    valorTotal.toFixed(2),
                ]);
            }
        }
    }

    processarRegistrosTipoA();
    processarRegistrosTipoB();

    log.info(">> createDataset concluído: total de registros = " + dataset.rowsCount);

    return dataset;
}
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/05/2025, 18:07

Quando você fornece o `userSecurityId` o Fluig vai tentar personificar o usuário informado nessa constraint pra então fazer a consulta ao Dataset.

Porém é comum os usuários OAuth por padrão não estarem com essa opção marcada.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/56fe7d69fdf12ee4c14c59e06ded930b72584062.png)

Já os usuários comuns do Fluig normalmente permitem isso por padrão, pelo que me lembro.

---

## Resposta #2

**Jean** (@jean.paulino) — 21/05/2025, 14:16

Boa tarde Bruno, tudo bom?

Já estava feito essa configuração no FLUIG e mesmo assim não conseguimos.

Estamos achando que possa ter corrompido nossa base de testes e vamos fazer alguns testes após atualizar a versão.

Mas muito obrigado pela ajuda.

---
