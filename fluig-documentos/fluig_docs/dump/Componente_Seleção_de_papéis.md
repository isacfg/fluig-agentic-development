# Componente Seleção de papéis

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=185739563](https://tdn.totvs.com/pages/viewpage.action?pageId=185739563)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos do TOTVS Fluig Plataforma que desejam utilizar o componente **Seleção de papéis**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

Conhecer os conceitos dos componentes de negócio da plataforma TOTVS Fluig, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Seleção de papéis

* * *

Para habilitar o componente **Seleção de papéis** no seu *widget*, adicione a seguinte propriedade no [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) do *widget*:

```
application.resource.component.3=wcm/selectrole
```

O componente possui as opções:

-   **multiselect**: ***true*** para que seja possível selecionar mais de um registro; ***false*** para que seja possível selecionar apenas um registro;
-   **required**: ***true*** para que seja possível avançar apenas se algum registro estiver selecionado; ***false*** para obrigar a selecionar algum papel.



## Utilização básica

* * *

A utilização deste componente pode ser feita da seguinte maneira:

```
WCMBC.selectRole(
	{
		multiselect: true/false, 
		required:true/false
	}, 
	functionfuncaoCallbackSucesso, 
	funcaoCallbackCancelar
);
 
Exemplo:
 

 
var MyWidget = SuperWidget.extend({
    init: function() {
    },

	//código fonte da widget omitido
    
	selectUsers: function(htmlElement, event) {
    	var options = {multiselect: true, required: true};
    	WCMBC.selectRole(options, function(data){
    		FLUIGC.toast({
    	        title: 'Selecionados: ' + data[0].description,
    	        message: data[0].description,
    	        type: 'success'
    	    });
    		console.log(data);
    	}, function() {
    		FLUIGC.toast({
    	        title: 'Cancelado!',
    	        message: null,
    	        type: 'success'
    	    });
    	});
    }
});
```



**
Tela exibida ao executar o componente**
