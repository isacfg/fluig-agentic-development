# Componente Atualizar Arquivo Físico

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=160104509](https://tdn.totvs.com/pages/viewpage.action?pageId=160104509)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos do TOTVS Fluig Plataforma que desejam utilizar o componente **Atualizar arquivo físico**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

Conhecer os conceitos dos componentes de negócio da plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Atualizar arquivo físico

* * *

O componente **Atualizar arquivo físico** tem como objetivo facilitar o processo de atualização de arquivos encapsulando todas as configurações básicas necessárias para essa atualização, restando para o desenvolvedor somente configurar o *plugin* e utilizar o *callback* para montar sua lógica de negócio.



## Estrutura Básica

* * *

```
ECMBC.updateDocument(config, callback);
```



Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros, o primeiro, um objeto ***config*** com as configurações do componente e o segundo uma função ***callback*** contendo o erro e/ou o sucesso da atualização.



O primeiro parâmetro espera um objeto contendo três atributos: ***id***, ***version*** e ***types***, onde ***types*** não é obrigatório e os demais sim.

```
var config - {
	id: 10, //id do documento para atualização
	version: 1000, //versão ATUAL do documento para atualização
	types: 'gif|jpg|jpeg|tiff|png' //string contendo as extensões permitidas para atualização separado por pipeline "|"
};
```



O segundo parâmetro espera uma função que recebe dois valores: ***error*** e ***data***.

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
			'update-document': ['click_updateDocument']
		}
	},

	init: function() {
		this.id = 10;
		this.version = 1000;
		this.type = 'gif|jpg|jpeg|tiff|png';
	},

	updateDocument: function(el, ev) {
		var that = this;
		ECMBC.updateDocument({
			id: that.id,
			version: that.version,
			types: that.type
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



No application.info de seu widget, adicione o componente como dependência:

```
application.resource.component.1=ecm/updatedocument
```



### 1 - Tela exibida ao chamar o componente

###
2 - Tela exibida ao selecionar um arquivo para atualização

###
3 - Tela exibida quando o id do documento pertence a uma pasta
