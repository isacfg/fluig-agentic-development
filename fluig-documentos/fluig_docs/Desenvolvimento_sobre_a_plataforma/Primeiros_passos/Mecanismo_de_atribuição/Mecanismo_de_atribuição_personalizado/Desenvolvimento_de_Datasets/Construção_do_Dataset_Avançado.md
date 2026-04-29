# Construção do Dataset Avançado

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=412888219](https://tdn.totvs.com/pages/viewpage.action?pageId=412888219)

---

# Índice



# Objetivo

* * *

Este guia tem o objetivo de apresentar uma introdução para a codificação dos datasets avançados no TOTVS Fluig Plataforma. 



# Pré-requisitos

* * *

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Conhecimento sobre o [Desenvolvimento de Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets)
-   Visão geral sobre codificação JavaScript

Atenção!

A partir das atualizações **1.6.5 Liquid**, **1.7.0 Lake** e **1.7.1 Crystal Lake**, os *select* passados por *constraint* em dataset serão bloqueados pelo serviço. Orientamos a leitura da documentação [Datasets acessando banco de dados externo](https://tdn.totvs.com/x/OgFlDw) que contém um exemplo da correta utilização do procedimento.



# Criação de dataset avançado

* * *

Um dataset avançado é capaz de acessar outros datasets, realizar chamadas a serviços externos ou pode conter valores fixos, codificados conforme a necessidade. Ele é construído a partir de um código-fonte em JavaScript, que pode ser editado na interface disponível no Painel de Controle ou pelo Fluig Studio.

Atenção

Para que um usuário que não é administrador da empresa possa construir datasets via Fluig Studio é necessário que ele possua a permissão "Configurar Datasets". Esta permissão pode ser concedida pelo administrador através do item [Permissões](https://tdn.totvs.com/pages/viewpage.action?pageId=234455792) disponível no Painel de Controle da plataforma.

A partir da **atualização 1.6.5**, os administradores do sistema conseguem editar o código fonte do Dataset pela plataforma, acessando a opção "Editar em modo avançado", na tela de Datasets no Painel de Controle.

A seguir serão apresentados alguns exemplos para codificação do dataset avançado. 

## Dataset com valores fixos no código

* * *

```
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();

	//Cria as colunas
	dataset.addColumn("Sigla");
	dataset.addColumn("Estado");
	dataset.addColumn("Capital");
	dataset.addColumn("Area");

	//Cria os registros
	dataset.addRow(new Array("AM", "Amazonas", "Manaus", 1570746));
	dataset.addRow(new Array("PA", "Pará", "Belém", 1247690));
	dataset.addRow(new Array("MT", "Mato Grosso", "Cuiabá", 903358));
	dataset.addRow(new Array("TO", "Tocantins", "Palmas", 277621));
	dataset.addRow(new Array("PI", "Piauí", "Teresina", 251529));

	return dataset;
}
```

Para criar um novo Dataset, é utilizado o método **DatasetBuilder.newDataset()**. Utilizando o objeto retornado por este método é possível adicionar as colunas desejadas (método **addColumn**) bem como adicionar linhas (método **addRow**).

Note que a função javascript **createDataset**, que cria o Dataset para consulta, recebe como parâmetros os campos, as constraints e a ordenação. Cabe ao desenvolvedor utilizar estes valores na lógica de implementação do Dataset avançado. Caso seja desconsiderado algum desdes campos, os filtros não serão aplicados. Os parâmetros "**fields**" e "**sortFields**" são **arrays** de String, que possuem, respectivamente, os nomes dos campos que serão retornados e os nomes dos campos utilizados para ordenação. Já o parâmetro "**constraints**" é um array de objetos do tipo **Constraint**, onde cada objeto deste array possui as seguintes propriedades: 

Propriedade

Descrição

fieldName

Nome do campo

initialValue

Valor inicial para filtro neste campo

finalValue

Valor final para filtro neste campo

contraintType

Tipo do filtro deste campo, podendo ter os valores abaixo:

**MUST**: O valor informado **precisa** estar nos resultados

**SHOULD**: O valor informado **pode** estar ou não nos resultados

**MUST\_NOT**: O valor informado **não pode** estar nos resultados

Atenção!

As constraints podem ser utilizadas apenas para Datasets internos. Datasets avançados não aceitam constraints, pelo fato de os dados serem externos, não sendo possível aplicar o filtro em sua origem. Para Datasets avançados o tratamento de filtros deve ser feito na codificação do Dataset, manipulando o objeto retornado e retirando as informações desnecessárias.



Para acessar estas propriedades e analisar os valores de cada item, pode-se utilizar um laço de repetição, conforme implementação abaixo:

```
function createDataset(fields, constraints, sortFields) {
	var company;
	var initialDate;
	var finalDate;
	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == "company") { 
				company = constraints[i].initialValue; 
			}
			else if (constraints[i].fieldName == "date") {
				initialDate = constraints[i].initialValue; 
				finalDate = constraints[i].finalValue;
			}
		}
	}
	.
	.
	.
}
```

##
Dataset avançado com utilização de constraint

* * *

```
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
	dataset.addColumn("DDD");
	dataset.addColumn("Fone");
	dataset.addColumn("Nome");

	var tempDataset = getDefaultValues(); // consulta a fonte de dados do dataset

	if(constraints!=null && constraints.length){ //se tiver constraint filtra

		if(constraints[0].constraintType==ConstraintType.MUST) { // implementação somente para o MUST

			for(var a=0;a<	tempDataset.length;a++){
				// se o valor inicial da constraint for igual ao valor do campo na constraint adiciona a linha
				if(constraints[0].initialValue==tempDataset[a][constraints[0].fieldName]){
					dataset.addRow(new Array(tempDataset[a]["DDD"], tempDataset[a]["Fone"],tempDataset[a]["Nome"]));
				}
			}
		}
	} else { // se não tiver constraint adiciona todas as linhas
		for(var a=0;a<	tempDataset.length;a++){
			dataset.addRow(new Array(tempDataset[a]["DDD"], tempDataset[a]["Fone"],tempDataset[a]["Nome"]));
		}
	}

	return dataset;
}

function getDefaultValues(){ // retorna valores default para serem filtrados
	return 	[{
				DDD: "47",
				Fone: "1111-1111",
				Nome: "Marcos"
			},
			{
				DDD: "47",
				Fone: "2222-2222",
				Nome: "Roberto"
			},
			{
				DDD: "41",
				Fone: "3333-3333",
				Nome: "Maria"
			},
			{
				DDD: "31",
				Fone: "4444-4444",
				Nome: "Francisco"
			},
			{
				DDD: "11",
				Fone: "5555-5555",
				Nome: "Michel"
			}];
}
```

Consulta utilizando a *constraint*:

```
function createDataset(fields, constraints, sortFields) {
	var c1 = DatasetFactory.createConstraint("DDD", "47", "47", ConstraintType.MUST);

	var dataset = DatasetFactory.getDataset("exemploFiltro", null, new Array(c1), null);
	return dataset;
}
```



Caso necessário, também é possível obter o código da empresa e do usuário autenticado através do método getValue(), conforme exemplo abaixo:

```
function createDataset(fields, constraints, sortFields) {
	var companyId = getValue("WKCompany");
	var currentUser = getValue("WKUser");
	.
	.
	.
}
```



## Dataset avançado com permissionamento

* * *

Abaixo temos um exemplo de como implementar o permissionamento em datasets avançados.

```
function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    try{
        var dataset = "";
        var filter = [];
        var currentUser = getValue("WKUser"); //Código do usuário logado
        var currentCompany = getValue("WKCompany"); //Código da empresa do usuário logado

        var groupCode = "grupo";  //Código do grupo que o usuário precisa pertencer para passar na validação.
        dataset = "colleagueGroup" //Nome do dataset que pesquisa a relação de grupos e usuários.

        filter= [DatasetFactory.createConstraint("colleagueGroupPK.companyId", currentCompany , currentCompany, ConstraintType.MUST),
                    DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", currentUser , currentUser, ConstraintType.MUST),
                    DatasetFactory.createConstraint("colleagueGroupPK.groupId", groupCode, groupCode, ConstraintType.MUST)]; //Cria o filtro para empresa, usuário e grupo.

        /** Codigo para pesquisar por papel ao invés de grupo.
         *
        var roleCode = "papel"; //Código do papel que o usuário precisa pertencer para passar na validação.
        dataset = "workflowColleagueRole" //Nome do dataset que pesquisa a relação de papéis e usuários.

        filter= [DatasetFactory.createConstraint("workflowColleagueRolePK.companyId", currentCompany , currentCompany, ConstraintType.MUST),
                    DatasetFactory.createConstraint("workflowColleagueRolePK.colleagueId", currentUser , currentUser, ConstraintType.MUST),
                    DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", roleCode, roleCode, ConstraintType.MUST)];
        */
        var validation = DatasetFactory.getDataset(dataset, null, filter, null); //Realiza a chamada do dataset

        if(validation.rowsCount==1){ //Se tiver uma linha quer dizer que o usuário logado faz parte do grupo/papel informado
            //Esse retorno é só para informar que passou da validação, mas aqui dentro ficaria o codigo que o usuário tem permissão de acesso.
            newDataset.addColumn("SUCCESS");
            newDataset.addRow(["ok"]);
        } else {
            //Esse retorno é só para informar que o usuário não faz parte do grupo/papel.
            newDataset.addColumn("ERROR");
            newDataset.addRow(["sem permissão"]);
        }

    } catch(e) {
        newDataset.addColumn("ERROR");
        newDataset.addRow(["chamada incorreta"]);
         return newDataset;
    }
    return newDataset;
}
```

Atenção!

Alguns datasets retornam dados sensíveis, por isso, é altamente recomendado que apenas os usuários responsáveis tenham acesso a esses dados.



## Utilizando zoom composto em Dataset avançado

* * *

Através do uso de Datasets avançados é possível realizar uma série de buscas compostas.

No exemplo abaixo, utilizando o método createDataset foi desenvolvida uma busca constituída por mais de um campo da tabela, que recebe o valor informado no campo zoom e em seguida retorna o dataset avançado com os registros encontrados em ambos ou em um único campo da busca. Caso não seja informado nenhum valor, serão retornados todos os registros encontrados no banco.

```
function createDataset(fields, constraints, sortFields) {
    var c1 = null;
    var c2 = null;
    var filter = null;

    if (constraints.length > 0)
    {
        c1 = DatasetFactory.createConstraint("mail", "%" + constraints[0].initialValue + "%" , "%" + constraints[0].finalValue + "%",  ConstraintType.SHOULD);
        c2 = DatasetFactory.createConstraint("mail", "%%", "%%", ConstraintType.SHOULD);


        c1.setLikeSearch(true);
        c2.setLikeSearch(true);
        filter = new Array (c1, c2);
    }
    var dataset = DatasetFactory.getDataset("colleague", null, filter, sortFields);

    return dataset;
}
```

Em seguida é apresentado a implementação do zoom para tratar os retornos gerados pela busca composta.

```
<script>
$(function(ready){
	var myTable = FLUIGC.datatable('#target', {
	    dataRequest: {
	        url: '/api/public/ecm/dataset/search',
	        options: {
	            contentType:'application/json',
	            dataType: 'json',
	            method: 'POST',
	            data: JSON.stringify({
	            	'datasetId' : 'DatasetTeste'
	            }),
	            crossDomain: true,
	            cache: false
	        },
	        root: '',
	        limit:10,
	    },
	    renderContent: ['colleagueName'],
	    multiSelect: false,
	    search: {
	        enabled: true,
	    },
	    scroll: {
	        target: '#target',
	        enabled: true
	    }
	});
});
</script>
```
```
<input
    type="zoom"
    id = "c7_total"
    name="c7_total"
    data-zoom="{
        'displayKey':'colleagueName',
        'datasetId':'DatasetTeste',
		'limit': '0',
		'fields':[{
              'field':'colleagueName',
              'label':'Nome',
              'standard':'true'
            }
        ]
     }"
/>
<div id="target"></div>
```



## Dataset avançado de definição de formulário "pai-filho"

* * *

Para acessar informações de um "pai-filho" de uma definição de formulário pode ser utilizado o WebService "ECMDatasetService", um Dataset avançado (Exemplo 1), ou ainda um evento de processo ou definição de formulário (Exemplo 2). 

```
function createDataset(fields, constraints, sortFields) {

	//Cria as colunas
	var dataset = DatasetBuilder.newDataset();
	dataset.addColumn("NumFormulario");
	dataset.addColumn("Id");
	dataset.addColumn("Peca");
	dataset.addColumn("Quantidade");

	//Cria a constraint para buscar os formulários ativos
	var cst = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
	var constraints = new Array(cst);

	var datasetPrincipal = DatasetFactory.getDataset("dsExemploPaiFilho", null, constraints, null);

	for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
		var documentId = datasetPrincipal.getValue(i, "metadata#id");
		var documentVersion = datasetPrincipal.getValue(i, "metadata#version");

		//Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
		var c1 = DatasetFactory.createConstraint("tablename", "tabelaPecas" ,"tabelaPecas", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
		var constraintsFilhos = new Array(c1, c2, c3);

		//Busca o dataset
		var datasetFilhos = DatasetFactory.getDataset("dsExemploPaiFilho", null, constraintsFilhos, null);

		for (var j = 0; j < datasetFilhos.rowsCount; j++) {
			//Adiciona os valores nas colunas respectivamente.
			dataset.addRow(new Array(
					documentId,
					datasetFilhos.getValue(j, "wdk_sequence_id"),
					datasetFilhos.getValue(j, "peca"),
					datasetFilhos.getValue(j, "qtde")));
		}
	}

	return dataset;
}
```

```
function beforeStateEntry(sequenceId) {

	var user = getValue("WKUser");

	//Cria a constraint para buscar os formulários ativos
	var cst1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);

	//É obrigatório informar a constraint userSecurityId para indicar o usuário 
	//que sera validada a permissão nos formulários
	var cst2 = DatasetFactory.createConstraint("userSecurityId", user, user, ConstraintType.MUST);

	var constraints = new Array(cst1, cst2);

	var datasetPrincipal = DatasetFactory.getDataset("dsExemploPaiFilho", null, constraints, null);

	for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
		var documentId = datasetPrincipal.getValue(i, "metadata#id");
		var documentVersion = datasetPrincipal.getValue(i, "metadata#version");

		//Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
		var c1 = DatasetFactory.createConstraint("tablename", "tabelaPecas" ,"tabelaPecas", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);

		//É obrigatório informar a constraint userSecurityId para indicar o usuário
		//que sera validada a permissão nos formulários
		var c4 = DatasetFactory.createConstraint("userSecurityId", user, user, ConstraintType.MUST);

		var constraintsFilhos = new Array(c1, c2, c3, c4);

		//Busca o dataset
		var datasetFilhos = DatasetFactory.getDataset("dsExemploPaiFilho", null, constraintsFilhos, null);
		for (var j = 0; j < datasetFilhos.rowsCount; j++) {
			//Utiliza os campos do Dataset. Exibindo como exemplo.
			log.info("CAMPO 1: " + documentId);
			log.info("CAMPO 2: " + datasetFilhos.getValue(j, "wdk_sequence_id"));
			log.info("CAMPO 3: " + datasetFilhos.getValue(j, "peca"));
			log.info("CAMPO 4: " + datasetFilhos.getValue(j, "qtde"));
		}
	}

}
```



Utilizando um dos modelos acima, é possível recuperar os valores "filhos" dos formulários ativos, ou seja, da última versão criada. Existem alguns parâmetros obrigatórios que devem ser passados através de *constraints*, onde o valor inicial e final devem ser iguais. A forma de recuperar esses valores é opcional. Segue abaixo a nomenclatura **obrigatória** de cada parâmetro:

Parâmetro

Descrição

tablename

Atributo utilizado para nomear cada **tabela** filha do HTML. Exemplo:

```
<table border="1" tablename="tabelaPecas" addbuttonlabel="Adicionar Peça">
	<!-- Campos Filhos -->
</table>
```

metadata#id

Número do formulário.

metadata#version

Número da versão do formulário

userSecurityId

Código do usuário que será validada a permissão no formulário

Observação

Esse parâmetro não será validado na Visualização de Datasets, visto que nessa opção é um exemplo de visualização dos dados.

Também é possível exibir a ordem dos campos filhos, para isso deve-se utilizar o campo **wdk\_sequence\_id**, sendo que este não poderá ser utilizado como nome de algum campo do formulário.



# Guia de Referência de Datasets

* * *

## Dataset Factory

Retorno

Método e Descrição

SearchConstraint

`**createConstraint**(java.lang.String field, java.lang.String initialValue, java.lang.String finalValue, ConstraintType type)` 
Cria uma nova constraint para a seleção de registros do Dataset.

java.util.List<java.lang.String>

`**getAvailableDatasets**()` 
Retorna uma lista de todos os Datasets disponíveis no sistema.

DefaultDataset

`**getDataset**(java.lang.String name, java.lang.String[] fields, SearchConstraint[] constraints, java.lang.String[] order)` 
Carrega os dados de um Dataset.

## Dataset

Retorno

Método e Descrição

void

`**addColumn**(java.lang.String colName)` 
Adiciona uma coluna ao Dataset.

void

`**addRow**(java.lang.Object[] values)` 
Adiciona uma linha ao Dataset.

java.lang.String

`**getColumnName**(int colNum)` 
Retorna o nome de uma coluna do Dataset.

java.lang.String\[\]

`**getColumnsName**()` 
Retorna um array com os nomes das colunas do Dataset.

int

`**getColumnsCount**()` 
Retorna a quantidade de colunas de um Dataset.

java.util.ArrayList<java.util.HashMap<java.lang.String,java.lang.Object>>

`**getMap**()` 
Retorna os valores do Dataset na forma de uma lista contendo mapas, onde cada registro do Dataset corresponde a um mapa com o nome da coluna como chave.

int

`**getRowsCount**()` 
Retorna a quantidade de linhas disponíveis no Dataset.

DefaultDataset

`**getSubDataset**(java.lang.String field, java.lang.Object value)` 
Retorna um subconjunto dos dados do Dataset, na forma de um novo Dataset.

java.lang.Object

`**getValue**(int row, int col)` 
Retorna o valor armazenado no Dataset, na linha e coluna passadas por parâmetro.

java.lang.Object

`**getValue**(int row, java.lang.String colName)` 
Retorna o valor armazenado no Dataset, na linha passada e campo passados por parâmetro.

java.lang.Object\[\]\[\]

`**getValues**()` 
Retorna todos os valores de um Dataset, na forma de um array bidimensional.

java.sql.ResultSet

`**toResultSet**()` 
Retorna um ResultSet contendo os dados do Dataset.

Dica!

Se tiver dúvidas sobre o desenvolvimento de datasets avançados, não deixe de consultar o nosso **[fórum para DEVs](https://forum.totvs.io/).**
