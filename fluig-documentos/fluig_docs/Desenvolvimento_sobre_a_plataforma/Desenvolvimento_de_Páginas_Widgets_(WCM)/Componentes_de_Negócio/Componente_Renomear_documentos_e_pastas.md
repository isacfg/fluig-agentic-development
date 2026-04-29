# Componente Renomear documentos e pastas

> **Fonte:** [https://tdn.totvs.com/display/fluig/Componente+Renomear+documentos+e+pastas](https://tdn.totvs.com/display/fluig/Componente+Renomear+documentos+e+pastas)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Renomear documento**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

-   Conhecer os conceitos dos componentes de negócio do TOTVS Fluig Plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Renomear documento

* * *

O componente **Renomear documento** tem como objetivo facilitar o processo de renomear documentos encapsulando todas as configurações básicas necessárias para essa atualização, restando para o desenvolvedor somente configurar o *plugin* e utilizar o *callback* para montar sua lógica de negócio.

## Estrutura Básica

* * *

```
ECMBC.renameDocument(config, callback);
```

Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros:

-   o primeiro, um objeto ***config*** com as configurações do componente;
-   e o segundo uma função ***callback*** contendo o erro e/ou o sucesso da atualização.



O primeiro parâmetro espera um objeto contendo três atributos: ***id***, ***version*** e ***types***, onde ***types*** não é obrigatório e os demais sim.

```
var config - {
	id: 10, //id do documento a ser renomeado
	version: 1000 //versão ATUAL do documento para atualização
};
```



O segundo parâmetro espera uma função que recebe dois valores: ***error*** e ***data***.

```
function(error, data) {
	if(error) {
		//tratamento de erro...
	}

	//lógica do sucesso...
}
```

## Utilização Básica

* * *

```
var EcmDocumentUpdate = SuperWidget.extend({

	id: null,
	version: null,
	types: null,

	bindings: {
		local: {
			'rename-document': ['click_renameDocument']
		}
	},

	init: function() {
		this.id = 10;
		this.version = 1000;
	},

	renameDocument: function(el, ev) {
		var that = this;
		ECMBC.renameDocument({
			id: that.id,
			version: that.version,
			value: that.value
		}, function(err, data) {
			if(err) {
				return alert(err.responseText);
			}

			that.someFunc(data);
		});
	},

	someFunc: function(data) {
		//Qualquer coisa com o retorno de sucesso...
	}
});
```



No [application.info](http://application.info) de seu *widget*, adicione o componente como dependência.

```
application.resource.component.1=ecm/renamedocument
```

##
Tela exibida ao chamar o componente



**oculto**

**Observação importante:** Liberar esses itens após a liberação do recurso. Alinhado com Anderson Graper.

Liberar essa documentação também: [https://tdn.totvs.com/x/TnTdKQ](https://tdn.totvs.com/x/TnTdKQ)



Estrutura Básica

* * *

```
ECMBC.renameDocument(config, callback);
```

Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros:

-   o primeiro, um objeto ***config*** com as configurações do componente;
-   e o segundo uma função ***callback*** contendo o erro e/ou o sucesso da atualização.



O primeiro parâmetro espera um objeto contendo três atributos: ***id***, ***version*** e ***title***, onde ***title*** não é obrigatório e os demais sim.

```
var config - {
	id: 10, //id do documento a ser renomeado
	version: 1000 //versão ATUAL do documento para atualização
};
```



O segundo parâmetro espera uma função que recebe dois valores: ***error*** e ***data***.

```
function(error, data) {
	if(error) {
		//tratamento de erro...
	}

	//lógica do sucesso...
}
```

Utilização Básica

* * *

```
var EcmDocumentUpdate = SuperWidget.extend({

	id: null,
	version: null,
	title: null,

	bindings: {
		local: {
			'rename-document': ['click_renameDocument']
		}
	},

	init: function() {
		this.id = 10;
		this.version = 1000;
		this.title = "Título customizado"
	},

	renameDocument: function(el, ev) {
		var that = this;
		ECMBC.renameDocument({
			id: that.id,
			version: that.version,
			title: that.title
		}, function(err, data) {
			if(err) {
				return alert(err.responseText);
			}

			that.someFunc(data);
		});
	},

	someFunc: function(data) {
		//Qualquer coisa com o retorno de sucesso...
	}
});
```



No [application.info](http://application.info) de seu *widget*, adicione o componente como dependência.

```
application.resource.component.1=ecm/renamedocument
```




Tela exibida ao chamar o componente
