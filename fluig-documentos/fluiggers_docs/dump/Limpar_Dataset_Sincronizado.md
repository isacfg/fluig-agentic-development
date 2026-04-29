# Limpar Dataset Sincronizado

> **Fonte:** [https://fluiggers.com.br/t/limpar-dataset-sincronizado/65](https://fluiggers.com.br/t/limpar-dataset-sincronizado/65)
> **Categoria:** BPM
> **Criado em:** 11/03/2021, 23:19
> **Visualizações:** 934 | **Likes:** 8 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 11/03/2021, 23:19 | ❤️ 7

Há muito tempo atrás, uma galera e eu estávamos tentando resolver a limpeza do dataset sincronizado quando não era possível/conveniente tratar o update linha a linha com algum critério. Havia uma implementação num fórum anterior que ainda não funcionava 100%.

Graças a nosso amigo Kelvin Hudson, tae:

```auto
var dsName = "modelo_jornalizado";
var idQuery = "FLUIG.190.100";
var objColumn = [
    { NAME: "ID_C", TYPE: "NUMBER", KEY: true, VAL_REF: "CODIGO" },
    { NAME: "NOME", TYPE: "", KEY: false, VAL_REF: "NOME" },
    { NAME: "CPF", TYPE: "", KEY: false, VAL_REF: "CPF" },
    { NAME: "END_ELETRONICO", TYPE: "", KEY: false, VAL_REF: "EMAIL" },
];


function defineStructure() {

    var key = [];

    objColumn.forEach(function (row) {

        var type = undefined;

        if (row.TYPE == "NUMBER") {
            type = DatasetFieldType.NUMBER;
        }

        if (row.KEY) {
            key.push(row.NAME);
        }

        addColumn(row.NAME, type);

    });

    if (key.length > 0) {
        setKey(key);
    }


}

function onSync(lastSyncDate) {

    var dataset = DatasetBuilder.newDataset();

    dataset = clearDataset(dataset);

    var ret = DatasetFactory.getDataset("ds_RMConsulta", [idQuery], null, null);

    for (var i = 0; i < ret.rowsCount; i++) {

        var array = new Array();

        objColumn.forEach(function (row) {

            var ref = row.VAL_REF;
            var value = ret.getValue(i, ref);

            array.push(value);

        });

        dataset.addRow(array);

    }

    return dataset;

}

function createDataset(fields, constraints, sortFields) {

}

function onMobileSync(user) {

}

function clearDataset(dataset) {

    var dsOld = DatasetFactory.getDataset(dsName, null, null, null);

    if (dsOld != null && dsOld.rowsCount > 0) {

        for (var i = 0; i < dsOld.rowsCount; i++) {


            var array = new Array();

            objColumn.forEach(function (row) {

                var ref = row.NAME;
                var value = dsOld.getValue(i, ref);

                array.push(value);

            });

            dataset.deleteRow(array);

        }

    }

    return dataset;

}
```

---

## Resposta #1

**Kelvin Hudson** (@kelvin_hudson) — 06/04/2021, 16:24 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) daniel.cabral:
>
> > empo atrás, uma galera e eu estávamos tentando resolver a limpeza do dataset sincronizado quando não era possível/conveniente tratar o update linha a linha com algum critério. Havia uma implementação num fórum anterior que ainda não funcionava 10

Obrigado pela citação Daniel, foi um prazer gerar essa solução com você!!!

---
