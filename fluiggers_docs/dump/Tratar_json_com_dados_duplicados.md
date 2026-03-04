# Tratar json com dados duplicados

> **Fonte:** [https://fluiggers.com.br/t/tratar-json-com-dados-duplicados/379](https://fluiggers.com.br/t/tratar-json-com-dados-duplicados/379)
> **Categoria:** BPM
> **Criado em:** 16/04/2021, 19:48
> **Visualizações:** 1118 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 16/04/2021, 19:48

Pessoal, boa noite!
Estou consumindo o JSON que vem de um dataset customizado, onde está vindo com dados duplicados. Gostaria de saber se é possível tratar e eliminar a duplicidade.

Segue o código:

```javascript
let dataset = DatasetFactory.getDataset("dsCompra", fields, constraints, order);

data_table = FLUIGC.datatable('#compra', {
     			dataRequest: dataset.values,
     			renderContent: ".datatable_template_products",
	 			header :[ 	{
			     	            'title': 'SELECIONAR',
			     	            'dataorder': 'selecionar',
			     	            'size': 'col-md-1'
			     	        },
				           	{
			     	            'title': 'CODIGO',
			     	            'dataorder': 'codigo',
			     	            'size': 'col-md-1'
			     	        },
			     	        {
			     	            'title': 'Descrição',
			     	            'dataorder': 'descricaoProduto',
			     	            'standard': true,
			     	            'size': 'col-md-4',
			     	        },
			     	        }
		     	         ],
		     	        multiSelect: true,
		     	        search : {
 			        	   	enabled: true,
 			        	  	onlyEnterkey: true,
 			                onSearch: function(res) {
 			                	let dataAll = dataset_produtos.values;
  			                    let search = dataAll.filter(function(el,index) {
  			                    	if (el.codigoProduto.toUpperCase().indexOf(res.toUpperCase()) >= 0 ||
 		                    			el.descricaoProduto.toUpperCase().indexOf(res.toUpperCase()) >= 0){
  			                        	$("tbody > tr:eq("+index+")").show();
  			                        }else{
  			                        	$("tbody > tr:eq("+index+")").hide();
  			                        }
  			                    });
 			                }
 			           },
 			           actions: {
 			             enabled: true,
 			             template: '.template_compra_buttons',
 			             actionAreaStyle: 'col-md-6'
 			           },
 			           navButtons : {
 			        	   enabled : false
 			           }
     		}, function(err, data) {

     		});
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 18/04/2021, 19:24 | ❤️ 2

É possível sim mas dependendo do tamanho do json isso pode demorar bastante.

```javascript
var standardsList = [
		{"Grade": "Math K", "Domain": "Counting & Cardinality"},
		{"Grade": "Math K", "Domain": "Counting & Cardinality"},
		{"Grade": "Math K", "Domain": "Counting & Cardinality"},
		{"Grade": "Math K", "Domain": "Counting & Cardinality"},
		{"Grade": "Math K", "Domain": "Geometry"},
		{"Grade": "Math 1", "Domain": "Counting & Cardinality"},
		{"Grade": "Math 1", "Domain": "Counting & Cardinality"},
		{"Grade": "Math 1", "Domain": "Orders of Operation"},
		{"Grade": "Math 2", "Domain": "Geometry"},
		{"Grade": "Math 2", "Domain": "Geometry"}
	];
	var grades = {};
	standardsList.forEach( function( item ) {
		var grade = grades[item.Grade] = grades[item.Grade] || {};
		grade[item.Domain] = true;
	});
	console.log( JSON.stringify( grades, null, 4 ) );
```

Veja se isto atende o que vc precisa.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 19/04/2021, 09:46 | ❤️ 1

Uma alternativa com array.reduce():

```auto
getUniquePlantList: function (aItems) {
          var aUniquePlantCollection = aItems.reduce((unique, o) => {
            if (!unique.some(obj => obj.Plant === o.Plant)) {
              unique.push(o);
            }
            return unique;
          }, []);
          return aUniquePlantCollection;
        },
```

---
