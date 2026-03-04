# Permitir mais de um Filtro campo Zoom

> **Fonte:** [https://fluiggers.com.br/t/permitir-mais-de-um-filtro-campo-zoom/2234](https://fluiggers.com.br/t/permitir-mais-de-um-filtro-campo-zoom/2234)
> **Categoria:** Sem categoria
> **Criado em:** 28/09/2023, 10:42
> **Visualizações:** 341 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Karina Pinheiro** (@Kapinheiro) — 28/09/2023, 10:42

Olá!

No formulário, tenho alguns campos que são do tipo Zoom, e neles é necessário liberar mais de uma opção de Filtro ao efetuar a busca.

Sabendo que o Fluig filtra pelo displayKey, como permitir a busca pelas duas colunas do dataset?

> Dataset:

```javascript
function createDataset(fields, constraints, sortFields){

	var erro = false;

	try {
	    var servico = ServiceManager.getService("TOTVS11");
	    var serviceHelper = servico.getBean();
	    var holder = serviceHelper.createProDataGraphHolder();
	    serviceHelper.getProxy().zoomEmpresa(holder);

		var ttResult = holder.getProDataGraphValue().getProDataObjects("ttEmpresa");
	} catch(e) {
		log.info("======== ERRO DS_empresa " + e);
		erro = true;
	}

    var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("codEmpresa");
    newDataset.addColumn("nomeEmpresa");


	if (erro == false) {
	    for (var row_index = 0; row_index < ttResult.size(); row_index++) {
	        var row = ttResult.get(row_index);
	        newDataset.addRow(new Array(row.get("codEmpresa"), row.get("nomeEmpresa")));
	    }
    } else {
		newDataset.addRow(new Array("1", "S.A."));
		newDataset.addRow(new Array("25", "LTDA"));
	}

    return newDataset;
}
```

<input type=“zoom” name=“empresaZoom” id=“empresaZoom” class=“form-control zoom” data-zoom="{
‘displayKey’: ‘codEmpresa’,
‘datasetId’: ‘ds\_empresa\_teste’,
‘maximumSelectionLength’:‘1’,
‘placeholder’:‘Comece a digitar para buscar’,
‘fields’: \[
{‘field’: ‘codEmpresa’, ‘label’: ‘Cod.Empresa’, ‘visible’: ‘true’},
{‘field’: ‘nomeEmpresa’, ‘label’: ‘Nome’, ‘standard’:‘true’, ‘visible’: ‘true’}

```
]
							            }">
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Leonardo Fioretti** (@leonardo.fioretti) — 08/10/2023, 19:40

Olá, [@Kapinheiro](/u/kapinheiro) !

Nesse caso eu recomendaria você utilizar uma coluna concatenada no dataset e consequentemente no displayKey. Como por exemplo:

```javascript
var newDataset = DatasetBuilder.newDataset();
newDataset.addColumn("codEmpresa");
newDataset.addColumn("nomeEmpresa");
newDataset.addColumn("DESCCOMPLETA");

newDataset.addRow(new Array(row.get("codEmpresa"), row.get("nomeEmpresa"), row.get("codEmpresa") + " - " + row.get("nomeEmpresa")));
```

Dessa forma você terá as duas informações filtradas pelo displayKey.

Qualquer dúvida estou à disposição.

---
