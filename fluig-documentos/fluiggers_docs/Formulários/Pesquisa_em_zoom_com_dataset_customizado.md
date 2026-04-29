# Pesquisa em zoom com dataset customizado

> **Fonte:** [https://fluiggers.com.br/t/pesquisa-em-zoom-com-dataset-customizado/544](https://fluiggers.com.br/t/pesquisa-em-zoom-com-dataset-customizado/544)
> **Categoria:** Formulários
> **Tags:** `dataset`, `zoom`
> **Criado em:** 01/07/2021, 10:56
> **Visualizações:** 1809 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Lucas** (@Lucas) — 01/07/2021, 10:56

Estou com um campo zoom com dados de um dataset customizado da seguinte forma:

```auto
<input class="form-control" type="zoom" id="estrutura" name="estrutura"
   data-zoom="{
               'displayKey':'nmestrutura',
               'datasetId':'te_estrutura',
               'filterValues':'nmestrutura',
               'maximumSelectionLength':'1',
               'placeholder':'Escolha a estrutura',
               'fields':[
                           {
                              'field':'nmestrutura',
                              'label':'Nome',
                              'standard':true,
                              'search': true
                           }
                        ]
               }"
/>
```

Porém o filtro de quando digito pelo ‘nmestrutura’ não esta funcionando. Mesmo que eu digite pelo nome ele segue mostrando todos os dados do dataset.

```auto
function createDataset(fields, constraints, sortFields) {

    var ds = DatasetBuilder.newDataset();
    ds.addColumn("NMESTRUTURA");

    var sortingFields = new Array("nome");

    var filtro = getConstraints(constraints, "nmestrutura");

    var datasetForm = DatasetFactory.getDataset("te_formestrutura", null, null, sortingFields);

    for (i = 0; i < datasetForm.rowsCount; i++) {
        var estrutura = datasetForm.getValue(i, "nome");
        ds.addRow(new Array(estrutura));
    }

    return ds;
}
```

De repente é necessário algum ajuste no script do dataset? Alguém já passou por essa situação?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2021, 11:11

O seu Dataset deve tratar as constraints recebidas e então fazer o addRow somente quando bater com o que foi solicitado na constraint.

[https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#ConstruçãodoDatasetAvançado-Datasetavançadocomutilizaçãodeconstraint](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#Constru%C3%A7%C3%A3odoDatasetAvan%C3%A7ado-Datasetavan%C3%A7adocomutiliza%C3%A7%C3%A3odeconstraint)

---
