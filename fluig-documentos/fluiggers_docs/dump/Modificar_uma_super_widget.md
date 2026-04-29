# Modificar uma super widget

> **Fonte:** [https://fluiggers.com.br/t/modificar-uma-super-widget/751](https://fluiggers.com.br/t/modificar-uma-super-widget/751)
> **Categoria:** Widgets
> **Criado em:** 29/10/2021, 14:35
> **Visualizações:** 1220 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 29/10/2021, 14:35

Alguem ja modificou via programação uma superwisget via programação. ja vi alguns codigos na net mas não consegui fazer no fluig. Ate chega a rodar mas as funções nativas se perdem.

[stackoverflow.com](https://stackoverflow.com/questions/9134686/adding-code-to-a-javascript-function-programmatically)

[![Munzilla](https://fluiggers.com.br/uploads/default/original/1X/8b0aae43b85f4be38c6ab64d60a3b58e410fd01a.jpeg)](https://stackoverflow.com/users/387885/munzilla)

#### [Adding code to a javascript function programmatically](https://stackoverflow.com/questions/9134686/adding-code-to-a-javascript-function-programmatically)

**javascript, merge, append, user-defined-functions**

asked by [Munzilla](https://stackoverflow.com/users/387885/munzilla) on [07:56PM - 03 Feb 12 UTC](https://stackoverflow.com/questions/9134686/adding-code-to-a-javascript-function-programmatically)

Isso é muito util para modificar funções padrões do fluig.

At.te
Daniel Sales

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/10/2021, 16:39

Fiquei curioso pra entender a motivação.

Pelo que vi o objeto SuperWidget é derivado de Object, ou seja nem tem uma classe pra estender. O método `instance` que faz a “mágica” de configurar um monte de coisas, enquanto o `extend` faz um clone do objeto tratando os casos dos bindings.

Você pode “clonar” a SuperWidget, fazendo um

```javascript
var MinhaSuperWidget = SuperWidget.mergeObjects(SuperWidget, {});
```

Então mudar os métodos da MinhaSuperWidget e então nas novas Widgets fazer o extend nela.

```javascript
MinhaSuperWidget.minhaSuperFuncao = function () {};

var minhaWidget = MinhaSuperWidget.extend({
    /* continua a widget */
});
```

Acredito que funcionaria.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 01/11/2021, 08:37

Bom dia bruno,

Segue a necessidade:
Preciso saber exatamente quando um upload terminou para tomar algumas ações dentro do meu codigo. Vi que o fluig tem uma widget ou algo do tipo que não consegui identificar que contro.a todos os uploads que se chama FileMonitor. ela ate tem alguns metodos que eu n ão consegui utilizar por falta de conhecimento, dai a necessidade de modificar esse carinha e colocar a chamada da minha função em algum metodo dele.

Eu quero fazer lguns ajustes visuais apos o upload terminar e se usar o settimeout as vezes o formulario fica lento ou trava devido a ele rodar de tempos em tempos.

Se por acaso tiver alguma dica agradeço.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 01/07/2022, 08:14

Bom dia Bruno,

Retomando esse velho assunto descobri algumas superwidgets padrão do fluig tais como a ECM,ECM\_WKFView, FileUpload e etc.
Por exemplo surgiu uma demanda aqui de modificar a tela de cancelamento padrão do fluig em um determinado fluxo. eu ate achei a função que gera o modal de cancelamento e cheguei a modificar ela e de mais ou menos certo. A tela ficou como eu queria. mas na hora de clicar no botão cancelar ele perde as referencias. Dai o problema . Tenho que descobrir pelo menos como acessar essas superwidgets sem que se perca a referencia.
Tem alguma ideia?

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2022, 09:08

[@Daniel\_Sales](/u/daniel_sales) , eu não cheguei a pesquisar mais o assunto. Vou até dar uma olhada porque essa questão de modificar a tela padrão pode ser útil.

Aqui eu já modifiquei a modal do cancelamento para dar uma mensagem mais clara de que ao cancelar uma solicitação é impossível reabrir e que seria necessário iniciar uma nova solicitação. Mas eu fiz isso simplesmente alterando o texto da modal original. Também já ocultei o botão Cancelar e o botão Transferir em algumas situações.

Porém tudo isso só porque utilizamos o fluig quase totalmente via Browser e assim é possível fazer alterações dos elementos após eles carregarem.

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 01/07/2022, 09:10

pode me passar o que você usou e como?

O que eu estou tentando fazer é isso aqui

```javascript
parent.ECM_WKFView.cancel=function() {
		if (this.isCancelable) {
			FLUIGC.modal(
				{
					title : 'Cancelar Solicitação de virus',
					content : Mustache.render($('#template-cancelm').html()),
					id : 'workflowView-cancel-modal',
					size : 'normal',
					actions : [
						{
							label : 'Cancelar Solicitação',
							bind : 'data-cancel-request'
						},
						{
							label : 'Descartar',
							autoClose : true
						}
					]
				}
			);
		} else {
			this.warn('Esta solicitação não pode ser cancelada!')
		}
	}
```

Isso ate funciona mas la no modal context ele perde a referencia do template e se eu ponho meu conteudo o botão cancelar para de funcionar

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/07/2022, 09:26 | ❤️ 2

Aqui fizemos isso:

```javascript
/**
 * Modifica as opções de Cancelar a Solicitação
 */
 function changeCancelMenu() {
    // Quando está em atividade do Responsável que é Solicitante só melhora o alerta
    parent.$("a[data-cancel-workflow-request]")
        .css({"color": "#FFF", "backgroundColor": "#d9534f"})
        .html("Cancelar a Contratação")
        .on("click", function () {
            setTimeout(function () {
                const modal = parent.$("#workflowView-cancel-modal");
                modal.find("h4").html("<b>Cancelar a Contratação - Ação Irreversível</b>");
                modal.find(".btn-primary").removeClass("btn-primary").addClass("btn-danger").html("Cancelar a Contratação");
            }, 400);
    });

    // Quando está em atividade do Responsável que é Solicitante remove a transferência
    parent.$("a[data-transfer]").remove();

    // Quando está em atividade que o Solicitante não é o responsável remove o botão de cancelar
    parent.$("button[data-cancel-workflow-request]").remove()
}

$(function () {
    changeCancelMenu();
});
```

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 04/07/2022, 08:00 | ❤️ 1

Valeu pela ajuda, não foi bem do jeito que achei que seria mas me ajudou muito.

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/07/2022, 11:04

Na época tivemos que arranjar uma solução rápida (pessoal estava cancelando a solicitação achando que estava cancelando o envio pra aprovação da gerência), então fizemos isso de alterar os elementos HTML.

Mas a sua ideia de alterar os componentes do Fluig é bem interessante. Quando eu estiver mais tranquilo vou até estudar um pouco mais os componentes. Mas acho que vou esperar chegar o 1.8, já que ele será responsivo e provavelmente vai mudar bastante coisa dos componentes.

---

## Resposta #9

**Daniel Sales** (@Daniel_Sales) — 04/07/2022, 14:26

Eu até consegui modificar a função mas dava erro nas referencias w tal nas chamadas dos templates padrões. e o botão de cancelar propriamente dito parava de funcionar um pouquinho mais de paciência e vamos mudar tudo no fluig.

---
