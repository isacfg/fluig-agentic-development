# Converter dataset para arquivo CSV

> **Fonte:** [https://fluiggers.com.br/t/converter-dataset-para-arquivo-csv/285](https://fluiggers.com.br/t/converter-dataset-para-arquivo-csv/285)
> **Categoria:** BPM
> **Criado em:** 02/04/2021, 01:12
> **Visualizações:** 791 | **Likes:** 5 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 02/04/2021, 01:12 | ❤️ 5

Boa noite pessoal!

Adaptei um código javascript que peguei para transformar um dataset cutomizado em um arquivo CSV.

Segue:

```javascript
// taken from https://code-maven.com/create-and-download-csv-with-javascript
function download_csv(){

	var csv = 'Codigo;Descrição\n';
	var fields = new Array();
	var constraints = new Array();
	var order = new Array();
	var produto_list = new Array();

	constraints.push(DatasetFactory.createConstraint("meses", $("#chave").val(), $("#chave").val(), ConstraintType.MUST));
	constraints.push(DatasetFactory.createConstraint("area_responsavel", $("#area").val(), $("#area").val(), ConstraintType.MUST,true));

	var dataset_produtos = DatasetFactory.getDataset("datasetcustomizado", fields, constraints, order);

	for(var i=0;i<dataset_produtos.values.length;i++){

		produto_list.push(dataset_produtos.values[i]["codigoProduto"]
								+';'+ dataset_produtos.values[i]["descricaoProduto"]

							);
	}

	produto_list.forEach(function(row) {
	            //csv += row.join(',');
				csv += row;
	            csv += "\n";
	    });

	    console.log(csv);
	    var hiddenElement = document.createElement('a');
	    hiddenElement.href = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(csv);
	    hiddenElement.target = '_blank';
	    hiddenElement.download = 'people.csv';
	    hiddenElement.click();
}

//HTML
<button onclick="download_csv()">Download CSV</button>
```

---
