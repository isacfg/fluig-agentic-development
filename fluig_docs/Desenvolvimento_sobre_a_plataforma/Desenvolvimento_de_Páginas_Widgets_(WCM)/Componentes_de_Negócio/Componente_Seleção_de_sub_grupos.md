# Componente Seleção de sub grupos

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=185739570](https://tdn.totvs.com/pages/viewpage.action?pageId=185739570)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos do TOTVS Fluig Plataforma que desejam utilizar o componente **Seleção de sub grupos**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

Conhecer os conceitos dos componentes de negócio da plataforma TOTVS Fluig, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Seleção de sub grupos

* * *

Para habilitar o componente **Seleção de sub grupos** no seu *widget*, adicione a seguinte propriedade no [application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info) do *widget*:

```
application.resource.component.3=wcm/selectgroup
```

O componente possui as opções:

-   **group:** grupo pai dos sub grupos a serem selecionados;
-   **multiselect**: ***true*** para que seja possível selecionar mais de um registro; ***false*** para que seja possível selecionar apenas um registro.
-   **required**: ***true*** para que seja possível avançar apenas se algum registro estiver selecionado; ***false*** para obrigar a selecionar algum sub grupo.



## Utilização básica

* * *

A utilização deste componente pode ser feita da seguinte maneira:

```
WCMBC.selectUser(
	{
		group: "codigo-do-grupo"
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
    	var options = {group: "Administradores", multiselect: true, required: true};
    	WCMBC.selectUser(options, function(data){
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
