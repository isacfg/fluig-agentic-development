# Componente Busca de documentos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Componente+Busca+de+documentos](https://tdn.totvs.com/display/fluig/Componente+Busca+de+documentos)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Busca de documentos**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

Conhecer os conceitos dos componentes de negócio da plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Busca de documentos

* * *

O componente **Busca de documentos** tem como objetivo facilitar a busca de documentos e pastas da plataforma, restando para o desenvolvedor somente configurar o ***plugin*** e utilizar o ***callback*** para montar sua lógica de negócio.



## Estrutura Básica

* * *

Como pode-se notar na estrutura básica, o componente recebe basicamente dois parâmetros:

-   o primeiro, um objeto ***config*** com as configurações do componente;
-   e o segundo uma função ***callback*** contendo o erro e/ou o sucesso.

Veja o exemplo abaixo:

```
ECMBC.searchDocument(config, callback);
```



O primeiro parâmetro espera um objeto contendo até dez atributos, onde nenhum é obrigatório:

```
var config = {
	form: false, // (opcional) caso passar o valor true, irá renderizar uma versão antiga com suporte à usar dentro de formulários
	title: 'Selecione um arquivo' // valor default 'Selecionar registro'. Título da modal.
	parentId: 0, // valor default 0. Id do diretório inicial da busca, com breadcrumb completo
	docTypeId: '1-2-8', // valor default '1-2-8'. Id dos tipos de documentos que devem aparecer na busca, separados por -
	showPrivate: false, // mostrar ou não aquivos privados
	minPermission: 0, // id da permissão mínima para mostrar o arquivo
	showCheckOutDocs: false, // mostrar ou não arquivos em checkout
	socialDocId: 0, // id da pasta onde a busca vai iniciar, o breadcrumb será apenas desta pasta em diante
	selectableDocTypeId: '1-2-8' // valor default '1-2-8'. Id dos tipos de documentos que podem ser selecionados na busca, separados por -
};
```



O parâmetro "form" deve ser passado nas opções da chamada ECMBC.searchDocument, como true ou false, para que funcione trazendo as opções antigas de busca.

```
var config = {
    form: true, // Valida se a chamada é feita via formulário ou widgets no fluig para que exiba tela correta.
    title: 'Selecione um arquivo' // valor default 'Selecionar registro'. Título da modal.
    parentId: 0, // valor default 0. Id do diretório inicial da busca, com breadcrumb completo
    docTypeId: '1-2-8', // valor default '1-2-8'. Id dos tipos de documentos que devem aparecer na busca, separados por -
    showPrivate: false, // mostrar ou não aquivos privados
    minPermission: 0, // id da permissão mínima para mostrar o arquivo
    showCheckOutDocs: false, // mostrar ou não arquivos em checkout
    socialDocId: 0, // id da pasta onde a busca vai iniciar, o breadcrumb será apenas desta pasta em diante
    selectableDocTypeId: '1-2-8' // valor default '1-2-8'. Id dos tipos de documentos que podem ser selecionados na busca, separados por -
};
```





Tipos de documento

O tipo de documento, no campo docTypeId, segue o padrão:

1 - Pasta
2 - Documento normal
3 - Documento externo
4 - Formulário
5 - Registro de formulário
7 - Anexo Workflow
8 - Novo conteúdo
9 - Aplicativo
10 - Relatório



O segundo parâmetro espera uma função que recebe dois valores: ***error*** e ***data***. O valor data contém o objeto do arquivo/pasta selecionado.

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

Um exemplo da utilização básica abaixo:

```
var EcmDocumentUpdate = SuperWidget.extend({

	width: null,
	docTypeId: null,

	bindings: {
		local: {
			'search-document': ['click_searchDocument']
		}
	},

	init: function() {
		this.width = 900;
		this.docTypeId= '1-2';
	},

	searchDocument: function(el, ev) {
		var that = this;
		ECMBC.searchDocument({
			width: that.width,
			docTypeId: that.docTypeId
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



-   No arquivo application.info de seu *widget*, adicione o componente como dependência. Como no exemplo abaixo:

```
application.resource.component.1=ecm/searchdocument
```



**Tela exibida ao chamar o componente**
