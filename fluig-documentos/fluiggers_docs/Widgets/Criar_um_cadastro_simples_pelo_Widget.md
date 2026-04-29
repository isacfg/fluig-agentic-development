# Criar um cadastro simples pelo Widget

> **Fonte:** [https://fluiggers.com.br/t/criar-um-cadastro-simples-pelo-widget/188](https://fluiggers.com.br/t/criar-um-cadastro-simples-pelo-widget/188)
> **Categoria:** Widgets
> **Criado em:** 20/03/2021, 16:57
> **Visualizações:** 2740 | **Likes:** 10 | **Respostas:** 3

---

## Pergunta original

**Cassius** (@Cassius) — 20/03/2021, 16:57

Boa tarde a todos.

Bom, como falei num outro tópico aqui da categoria de **Widgets**, sou “Frango Sênior” em **Widgets**, isso quer dizer, o máximo que consegui fazer foi um “Hello World” e olhe lá.
Enfim, eu via algumas coisas que o pessoal postava lá no falecido (!?) “forum fluig” e vi que era um recurso poderoso, e por isso me surgiu essa dúvida:
É possível fazer um cadastro com um formulário simples via **Widget**?
Um exemplo bem simples seria uma agenda de telefones, onde eu cadastraria o nome e o telefone e mais nada.
Sei que é possível fazer via **Documentos**, mas não é algo que eu ache prático, acho que no **Widget** ficaria algo mais profissional.

Obrigado fluiggers.

---

## Resposta #1

**Alef Vinicius** (@alefvinicius) — 20/03/2021, 23:58 | ❤️ 4

Cassius, quando se fala de widget, é bom ter em mente que quase tudo terá que ser acionado no front. Seja a própria integração ou a chamada de um dataset para tratar as informações no backend. Como os datasets tem por papel mediar as informações entre a aplicação e o banco, é natural que ele seja uma opção se quiser tratar as informações no back. Resumindo, tudo que é possível fazer em um documento, formulário ou processo, é possível via widget. Se quiser tratar direto no front pode fazer uso desses serviços: [TOTVS Fluig API](https://api.fluig.com/old/) senão, basta utilizar o serviço de consultar um dataset via datasetFactory e passar os parâmetros como é feito em um formulário para ele chamar o serviço soap que deseja e assim criar um registro de formulário (para a agenda) ou iniciar um processo ou o que bem entender. É isso, cara! Qualquer dúvida é só perguntar.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 21/03/2021, 17:01 | ❤️ 5

Sim é possível e tranquilo.

VAMOS A UM SIMPLES PASSO A PASO AQUI:

1 - Primeiro crie um formulário igual ao de um processo mesmo.
2 - Crie sua widget em branco e cole no corpo dela seu formulario. para isso pode-se copiar toda a tag e cola-la na sua widget
3 - edite o script da sua widget e pronto.

Vou colocar o codigo fonte de cada arquivo e comenta-lo paar facilitar

```
VIEW.FTL
```
```auto
<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
	<form name="registro">
		<input type="text" name="teste" id="teste">
	</form>
	<button data-gravar>
		Gravar
	</button>
</div>
```

Onde *MyWidget* refere a superclasse do arquivo .js da widget

```
Javascrit.js
```
```javascript
var MyWidget = SuperWidget.extend({
    //variáveis da widget

	codigodoformulario : '1803',

	//método iniciado quando a widget é carregada
    init: function() {
    },

    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {
        	'gravar':['click_executeGravar']
        }
    },

    executeAction: function(htmlElement, event) {
    },

    executeGravar: function(){

    	var dados={
    		"values": [
    			{
    				"fieldId": "teste",
    				"value": $("#teste").val(),
    			}
    		]
    	}
    	WCMAPI.Read({
    		type: "POST",
    		async: true,
    		url: '/ecm-forms/api/v2/cardindex/'+this.codigodoformulario+'/cards',
    	    contentType: "application/json",
    	    dataType: "json",
    	    data: JSON.stringify(dados),
    	    success: function(data){
    	        // código a ser executado em caso de sucesso
    	    	alert("dados criados com sucesso");
    	    }
    	});
    }

});
```

A variável ***codigodoformulario*** contém o código do formulário que se encontra no GED
dentro do ***bindings*** temos os gatilhos dos eventos dos objetos do ***view.ftl***
Repare que dentro da global temos

```
'gravar':['click_executeGravar']
```

onde ***gravar*** faz referencia a data-gravar na tag do botão na widget
e *click\_executeGravar* faz chamada ao evento ***onclick*** do botão acionando a função de nome executeGravar

***Exedcute\_gravar*** por sua vez faz chamada a ***WCMAPI*** responsável por executar as chamadas as apis do fluig.

Dentro da ***ExecuteGravar*** temos a variável ***dados*** que contem todos os campos do formulário e seus respectivos valores para serem gravados.
A propriedade ***value*** do json e o formulário propriamente dito.
Dentro dela temos os vários registros onde ***fieldId*** e o nome campo do formulario que esta na propriedade name do input, e o ***value*** que corresponde ao conteúdo desse campo.
Pronto basta compilar sua widget e começar os testes cada vez que clicarmos no botão gravar ele vai gerar um novo registro de formulario.

Espero ter ajudado.

---

## Resposta #3

**Cassius** (@Cassius) — 22/03/2021, 13:29

Valeu [@Daniel\_Sales](/u/daniel_sales) e [@alefvinicius](/u/alefvinicius) pela força.
Farei os testes aqui e qualquer coisa reporto a vocês como foi.
Obrigado.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/03/2021, 15:54 | ❤️ 1

Algo a se pensar é salvar algumas informações como preferências da Widget. No exemplo do [@Daniel\_Sales](/u/daniel_sales) ele usa o ID do formulário e é um bom exemplo pra salvar como preferência, pois você pode criar o formulário no ambiente de testes e o ID ficar diferente do ambiente de produção. Aí sempre teria que mudar direto no código.

Na [Documentação da Widget](https://tdn.totvs.com/pages/releaseview.action?pageId=185735401#Comocriarumwidgetquebusqueconte%C3%BAdo-Prefer%C3%AAnciasdowidget) explica como usar as preferências.

Porém eu sofri muito quando tentei utilizar na prática, pois na documentação diz que as variáveis são carregadas automaticamente na Widget, o que não foi verdade.

Eu precisei, tanto na view.ftl quanto edit.ftl, inserir manualmente os parâmetros na widget.

```html
<#assign parameters='{"folderId": ${folderId!0}}' ?html>
    <div id="ReuniaoDirex_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide reuniao-direx" data-params="ReuniaoDirex.instance(${parameters})">
...
```

---

## Resposta #5

**Cassius** (@Cassius) — 22/03/2021, 16:18

[@Bruno\_Gasparetto](/u/bruno_gasparetto) boa tarde.

Vou dar uma olhada aqui. Valeu pela dica.

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 22/03/2021, 17:25

Carrega sim bruno tem técnica para isso

```auto
<div id="Pai_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="Pai.instance({aprovar:'${p1!0}',aprovador:'${p2!0}',taskid:'${p3!0}',codigoAtividade:'${p4!0}',atividadeOrigem:'${p5!0}'})">
```

veja em ***data-param*** tem vários parámetro cada um dele deve ser criado no js como uma variável no inicio dele dai ele já inicia a widget com os valores desses caras nas variáveis.
e mais ou menos isso se não me engano.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/03/2021, 18:28

[@Daniel\_Sales](/u/daniel_sales), é necessário declarar ao instanciar nos arquivos de template. Se a gente precisa colocar manualmente ali no template então não é automático :wink:

Na documentação fala ser automático, não diz que precisamos passar os valores ao instanciar. Tanto que o instanceId da Widget é inserido automaticamente (não precisamos colocá-lo na lista de parâmetros ao instanciar).

Depois de muito sofrer com isso finalmente vi um exemplo num dos repositórios de exemplo do Fluig e só então vi que tinha que fazer isso manualmente.

---
