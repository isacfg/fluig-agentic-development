# Componente de visualização de artigos

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=736177685](https://tdn.totvs.com/pages/viewpage.action?pageId=736177685)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente de **visualização de artigos**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

-   Conhecer os conceitos dos componentes de negócio do TOTVS Fluig Plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Visualização de artigos

* * *

O componente de **visualização de artigos** tem como objetivo facilitar o processo de visualização de artigos encapsulando todas as configurações básicas necessárias para essa visualização, restando para o desenvolvedor somente configurar o *plugin* e utilizar o *callback* para montar sua lógica de negócio.



## Estrutura Básica

* * *

```
SOCIALBC.viewArticle(config, callback);
```

Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros:

-   o primeiro, um objeto ***config*** com as configurações do componente;
-   e o segundo uma função ***callback*** contendo o erro e/ou o sucesso da atualização.


O primeiro parâmetro espera um objeto contendo sete atributos: **articleId, alias, version, title, instanceId**, onde os parâmetros são opcionais*.*

```
var config = {
    articleId: 1, // ID do artigo que será visualizado
    alias: 'user_alias', // Alias / User Code do usuário que está visualizando o artigo
    version: '1000', // Versão do artigo que será visualizado
    title: 'Título customizado', // Título do modal do artigo que está sendo visualizado
    instanceId: Date.now(), // ID customizado do componente de visualização de artigos
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
var MyWidget = SuperWidget.extend({

	bindings: {
		local: {
			'view-article': ['click_viewArticle']
		}
	},

	init: function() {
		// code
	},

	updateImage: function(el, ev) {
		var articleTitle = 'Visualização de artigo';
 		var articleId = 1;
  		var version = '1000';
 		var userAlias = 'user';
  
		SOCIALBC.viewArticle({
			'title': articleTitle,
		    'articleId': articleId,
 		    'version': version,
		    'alias': userAlias,
		    'instanceId': Date.now()
		}, function (error, data) {
    		if (error) {
	        	// erro ao carregar o artigo
		        return false;
		    }
		    // fazer algo depois do carregamento do artigo
		});
	}
});
```



No [application.info](http://application.info) de seu *widget*, adicione o componente como dependência:

```
application.resource.component.1=social/socialarticleview
```



### Tela exibida ao chamar o componente
