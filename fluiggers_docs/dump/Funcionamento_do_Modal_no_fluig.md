# Funcionamento do Modal no fluig

> **Fonte:** [https://fluiggers.com.br/t/funcionamento-do-modal-no-fluig/1094](https://fluiggers.com.br/t/funcionamento-do-modal-no-fluig/1094)
> **Categoria:** Formulários
> **Criado em:** 20/05/2022, 11:18
> **Visualizações:** 1875 | **Likes:** 7 | **Respostas:** 2

---

## Pergunta original

**Luan Alves** (@akaluan) — 20/05/2022, 11:18

Gostaria de entender melhor como funciona o Modal do fluig style guide, a documentação não ficou muito clara pra mim.
Para um elemento abrir um modal, o mesmo precisa ter o atributo “data-id-do-modal”?
Exemplo:

```auto
<button class="btn btn-primary btn-lg" data-id-do-modal>
    Launch modal
</button>
```
```auto
var myModal = FLUIGC.modal({
    title: 'Title',
    content: '<h1>Modal Content</h1>',
    id: 'id-do-modal',
    actions: [{
        'label': 'Save',
        'bind': 'data-open-modal',
    },{
        'label': 'Close',
        'autoClose': true
    }]
}, function(err, data) {
    if(err) {
        // do error handling
    } else {
        // do something with data
    }
});
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/05/2022, 15:27 | ❤️ 3

A documentação de Modal é ruim mesmo e nem dá pra se basear na Bootstrap, pois mudaram bastante essa parte.

O lance de dar um “id” com o atributo data é pra fazer binding quando utilizando Widget. Isso vale também para o bind de ação do botão.

![image](https://fluiggers.com.br/uploads/default/original/1X/6a33adcd257d8324f2a7551056fac7d998a26ced.png)

Mas sempre que necessário instanciar uma modal você precisa fazê-lo pelo JS mesmo, com a função FLUIGC.modal. Então precisa atribuir um listener ao click do botão e chamar o js da modal. Se tem outro jeito eu desconheço.

Outra coisa é que, diferente da Bootstrap, não dá pra ter um template HTML (tem um esquema de usar um .ftl pra ser template, mas nunca tentei). A Modal é sempre criada no momento que é pra ser exibida e quando ela é fechada todo o HTML é removido do DOM.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 22/05/2022, 10:52 | ❤️ 1

[@akaluan](/u/akaluan) , eu não sei se estou respondendo com algo relevante, mas fiz um teste aqui.

Primeiro, na minha página, criei um ‘DIV’ com um ‘id’ e com uma tag ‘data-meumodal’.

Criei, também, um botão para teste.

No Javascript, pus o código do evento clique e, dentro dele, experimentei pôr o ‘id’ do ‘div’ na propriedade ‘id’ da variável myModal.

*\> Observe que as tags html de abertura e de fechamento estão sem ‘<’, porque isto estava perturbando minha postagem aqui e eu não sei como contornar isto, a não ser mutilando a marcação e o código como eu fiz. Você deverá, ser for o caso, no Fluig, repô-las normalmente.*

Tudo estava assim:

> Na minha view.ftl:

```auto
div id="idDivNLRETeste" data-meumodal
button type="button" id="idBtnNLRETeste"
```

> No Javascript:

```auto
jQuery(document).on("click","#idBtnNLRETeste",function (){
		var myModal = FLUIGC.modal({
		    title: 'Title',
		    content: 'h1>Modal Content /h1>',
		    id: 'idDivNLRETeste',//O id do div na View.ftl
		    actions: [{
		        'label': 'Save',
		        'bind': 'data-meumodal',//igual ao que está no div
		    },{
		        'label': 'Close',
		        'autoClose': true
		    }]
		}, function(err, data) {
		    if(err) {
		        // do error handling
		    } else {
		        // do something with data
		    }
		});
	});//idBtnNLRETeste click
```

> Mas, deu zebra. A tela ficou com uma tarja e nada de botões, rótulos, etc; não renderizou nada.

> Aí, resolvi substituir o nome do ‘id’ somente no Javascript e funcionou.

A mudança foi na propriedade ‘id’, passando a ser ‘um\_id\_qualquer’.

Ou seja, a ligação entre o modal e o meu div foi pela tag ‘data-meumodal’.

```auto
jQuery(document).on("click","#idBtnNLRETeste",function (){
		var myModal = FLUIGC.modal({
		    title: 'Title',
		    content: 'h1> Modal Content  /h1>',
		    id: 'um_id_qualquer',//pus um id qualquer aqui e mantive o data-meumoda
		    actions: [{
		        'label': 'Save',
		        'bind': 'data-meumodal',//igual ao que está no div
		    },{
		        'label': 'Close',
		        'autoClose': true
		    }]
		}, function(err, data) {
		    if(err) {
		        // do error handling
		    } else {
		        // do something with data
		    }
		});
	});//idBtnNLRETeste click
```

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/05/2022, 10:52

[@Mautresim](/u/mautresim) , esse `id` passado na configuração da modal é o ID que o elemento da modal terá. Ele é opcional, ficando o id `fluig-modal` se omitido.

Como você deu o mesmo ID que um elemento que já existia provavelmente deu um problema grande tanto nos estilos quanto no JS que adiciona os listeners na modal.

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 23/05/2022, 17:22 | ❤️ 1

Na verdade, Caro [@Bruno\_Gasparetto](/u/bruno_gasparetto), eu jamais teria um ‘id’ igual ao que eu anotei como exemplo. Deve ter sido outra coisa.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/05/2022, 17:50 | ❤️ 1

[@Mautresim](/u/mautresim) , o que quis dizer é que no exemplo você tinha uma div com um id:

```nohighlight
<div id="idDivNLRETeste" data-meumodal></div>
```

E no seu JS você fez:

```javascript
var myModal = FLUIGC.modal({
    id: 'idDivNLRETeste',//O id do div na View.ftl
```

O método `FLUIGC.modal` vai criar uma DIV (que é a modal) com esse ID passado na configuração. Como você já tem uma DIV com esse ID vai dar um grande problema.

A modal do Fluig cria todos os elementos HTML na hora que ela é criada, então você não pode ter uma DIV pra servir de “template”, como ocorre com a Bootstrap.

---

## Resposta #6

**MAURO SIMOES** (@Mautresim) — 24/05/2022, 07:50 | ❤️ 1

Ah! Claro!!!,
Meu Caro [@Bruno\_Gasparetto](/u/bruno_gasparetto),
na pressa eu não prestei atenção ao que você disse! Você está coberto de razão. E muito obrigado pelo alerta.

---
