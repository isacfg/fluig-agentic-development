# Componente Listar compartilhamentos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Componente+Listar+compartilhamentos](https://tdn.totvs.com/display/fluig/Componente+Listar+compartilhamentos)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Listar compartilhamentos**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

-   Conhecer os conceitos dos componentes de negócio do TOTVS Fluig Plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Listar compartilhamentos

* * *

O componente **Listar compartilhamentos** tem como objetivo facilitar o processo de listagem de compartilhamentos de um conteúdo encapsulando todas as configurações básicas necessárias, restando para o desenvolvedor somente configurar o *plugin* e utilizar o *callback* para montar sua lógica de negócio.



## Estrutura Básica

* * *

A seguir é apresentada a estrutura básica do componente:

```
SOCIALBC.shareListModal(config, callback);
```

O componente recebe dois parâmetros:

-   o primeiro, um objeto ***config*** com as configurações do componente;
-   e o segundo uma função ***callback*** contendo o erro e/ou o sucesso da listagem.


O primeiro parâmetro espera um objeto contendo três atributos: ***sociableId**, **title** e **instanceId**,* onde ***sociableId*** é o único obrigatório.

```
var config - {
	sociableId: 10, //id do objeto social que vai ter a sua listagem exibida
	title: 'Compartilhado por', //o titulo que vai ser utilizado no modal
	instanceId : Date.now()
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

A utilização básica do componente é apresentada a seguir:

```
var SocialTimeline = SuperWidget.extend({

	sociableId: null,
	title: null,
	instanceId : null,

	bindings: {
		local: {
			'fluig-list-share': ['click_listSharesAction']
		}
	},

	init: function() {
		this.sociableId = 10;
		this.title = 'Compartilhado por';
		this.instanceId = Date.now();
	},

	listSharesAction: function(el, ev) {
		var that = this;
		SOCIALBC.shareListModal({
            sociableId : that.sociableId,
            instanceId : that.instanceId,
			title      : that.title
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


No [application.info](http://application.info/) de seu *widget*, adicione o componente como dependência:

```
application.resource.component.1=social/socialsharelist
```

**Tela exibida ao chamar o componente**
