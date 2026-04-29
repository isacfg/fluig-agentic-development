# No arquivo js (beforeTaskSave) adicione html / css

> **Fonte:** [https://fluiggers.com.br/t/no-arquivo-js-beforetasksave-adicione-html-css/705](https://fluiggers.com.br/t/no-arquivo-js-beforetasksave-adicione-html-css/705)
> **Categoria:** Formulários
> **Criado em:** 05/10/2021, 08:16
> **Visualizações:** 1416 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Ulises Magario** (@Agustin_Welschen) — 05/10/2021, 08:16

Olá boa tarde, gostaria de alterar o alerta de verificação do arquivo anexo

```javascript
if (!temAnexo) {
            throw "Debe añadir una imagen que ilustre la situación en ¨Anexos¨ ";
        }
```

e adicionar estilos à mensagem ou criar um novo alerta legal. Como eu faço?

---

## Resposta #1

**Victor Castro** (@victorcastro) — 20/10/2021, 09:03 | ❤️ 1

Essa função abaixo conta a quantidade de anexos direto no form.

```javascript
function contaAnexos(){
	var qtdAnexos = 0;
	$.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
		qtdAnexos++;
	});

	return qtdAnexos;
}
```

Eu utilizo o **beforeSendValidate** pra fazer as minhas validações de formulário. Lá você pode usar essa função pra checar a quantidade de anexos e criar a mensagem da forma que preferir.

Lembrando que, se for usar o **beforeSendValidate**, colocar um **return false** ao final para interromper o envio do formulário para a próxima atividade.

---

## Resposta #2

**Ulises Magario** (@Agustin_Welschen) — 20/10/2021, 09:55

ola bom dia, obrigado por responder. Nos scripts do fluig o beforeSendValidate não aparece. Tente fazer isso no formulário e em scripts como beforeSendData ou beforeTaskSave e nada. O que posso estar fazendo de errado? Obrigado

```javascript
function contaAnexos(){
		var qtdAnexos = 0;
		$.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
			qtdAnexos++;
			alert(qtdAnexos);
		});

		if(qtdAnexos==null || qtdAnexos==0){
			Swal.fire(
					  'Desea anexar una imagen?',
					  'Puede hacerlo desde [Anexos]',
					  'question'
					)
		}

		return qtdAnexos;
	}
```

---

## Resposta #3

**Victor Castro** (@victorcastro) — 25/10/2021, 17:25 | ❤️ 1

O **beforeSendValidate** não é um evento de workflow. É uma função que você desenvolve direto no form. Eu costumo criar um arquivo **formValidate.js** e criar essa função lá.

Dá uma olhada nesses dois tópicos abaixo.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) [Validação de formulário no front](https://fluiggers.com.br/t/validacao-de-formulario-no-front/221) [Formulários](https://fluiggers.com.br/c/form-fluig-html/15)
>
> > Já vi várias vezes pessoas com algumas dúvidas ou dificuldades pra fazer validação do formulário. Resolvi criar esse tópico pra demonstrar a forma que eu faço e deixar de exemplo pra quem se precisar. Quem quiser compartilhar o jeito que faz, fique a vontade. Bom, primeiramente, a estrutura do HTML é a seguinte: <div class="row"> <div class="form-field col-md-6"> <div class="form-input"> <div class="form-group"> <label for="campo1">Campo 1</label> <input type="text" name="campo1…
> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vagner_duarte/48/7_2.png) [Evento beforeSendValidate](https://fluiggers.com.br/t/evento-beforesendvalidate/363) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Pessoal, preciso usar o beforeSendValidate, e estou utiizando desta forma: var beforeSendValidate = function(numState,nextState){ if(numState == 4){ var colaborador = $('\[name="rd\_colaborador"\]:checked').val(); var supervisor = $('#txt\_supervisorEstagio').text(); var origemVaga = $('\[name="rd\_origemVaga"\]:checked').val(); if (colaborador == undefined){ FLUIGC.toast({ title: 'Atenção:', messa…

---
