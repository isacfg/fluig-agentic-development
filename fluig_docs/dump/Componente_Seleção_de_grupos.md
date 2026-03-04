# Componente Seleção de grupos

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=185739566](https://tdn.totvs.com/pages/viewpage.action?pageId=185739566)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos do TOTVS Fluig Plataforma que desejam utilizar o componente **Seleção de grupos**. O objetivo é apresentar o seu funcionamento e o detalhamento dos parâmetros de configuração.



# Pré-requisitos

* * *

Conhecer os conceitos dos componentes de negócio da plataforma TOTVS Fluig, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Seleção de grupos

* * *

Para habilitar o componente **Seleção de grupos** no *widget*, adicione a seguinte propriedade no [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) do *widget*:

```
application.resource.component.3=wcm/selectgroup
```

O componente possui as opções:

-   **multiselect**: ***true*** para que seja possível selecionar mais de um registro; ***false*** para que seja possível selecionar apenas um registro;
-   **required**: ***true*** para que seja possível avançar apenas se algum registro estiver selecionado; ***false*** para obrigar a selecionar algum grupo.



## Utilização básica

* * *

A utilização deste componente pode ser feita da seguinte maneira:

```
WCMBC.selectGroup(
	{
		multiselect: true/false, 
		required:true/false
	}, 
	funcaoCallbackSucesso, 
	funcaoCallbackCancelar
);
 
Exemplo:
 
var MyWidget = SuperWidget.extend({
    init: function() {
    },

	//código fonte da widget omitido
    
	selectUsers: function(htmlElement, event) {
    	var options = {multiselect: false, required: true};
    	WCMBC.selectGroup(options, function(data){
    		FLUIGC.toast({
    	        title: 'Grupo selecionado: ' + data[0].description,
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
