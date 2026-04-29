# Uncaught TypeError: Cannot read properties of undefined (reading 'push')

> **Fonte:** [https://fluiggers.com.br/t/uncaught-typeerror-cannot-read-properties-of-undefined-reading-push/1163](https://fluiggers.com.br/t/uncaught-typeerror-cannot-read-properties-of-undefined-reading-push/1163)
> **Categoria:** Formulários
> **Tags:** `form`, `widget`, `formulario`
> **Criado em:** 28/06/2022, 12:10
> **Visualizações:** 859 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**RAFAEL BARBOSA DOURADO BRITO** (@myispo) — 28/06/2022, 12:10

Ao criar a função para no momento em que o checkbox seja acionado e adicionado a um array, a função “push” apresente o seguinte erro: *Uncaught TypeError: Cannot read properties of undefined (reading ‘push’)*

Já verifique toda a função e não verifiquei nenhum possível erro.
Segue o trecho do código referente a função:

```javascript
$(document).ready(function(){

	var that = this;
	var aescala = new Array ();
	var adados = [];

         init();
         localizaColab();


	debugger;
	$('input[type="checkbox"]').on('click touchstart', function(){
		let quantCheck = $('input[type="checkbox"]:checked').length;

		//alert("Chegou na Funcao - click button");
		//console.log($(this).index());
		//console.log(tabela.getRow($(this).index()));
		//console.log($(this).attr("data-id"));
		//console.log($(":input[id^='chkEsc']").attr("value"));

		debugger;
		var semana = $(this).attr("data-semana");
		var colabId = $(this).attr("data-id");
		var dados = colabId.split("_");

		var cCusto = DatasetFactory.createConstraint("RA_MAT", dados[1], dados[1], ConstraintType.MUST);
		var dataSetcolab = DatasetFactory.getDataset("ds_colaboradorPorMatricula", null, [cCusto], null);


		that.adados = dataSetcolab.values;

		 that.aescala.push({'filial':that.adados[0].unidade,'idCorporativo':that.adados[0].idCorporativo,'centroCusto':that.adados[0].centroCusto,semana:"on"});



		/*$("#colaborador").val(dataSetcolab.values[0].nome);
		$("#filial").val(dados[0]);
		$("#idCorporativo").val(dados[1]);
		document.getElementsByName(semana).values("on");
		addEscala();*/

  	});



});
```
```javascript
your code goes here
```

---
