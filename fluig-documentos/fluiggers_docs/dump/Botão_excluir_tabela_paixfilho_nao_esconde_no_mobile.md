# Botão excluir tabela paixfilho nao esconde no mobile

> **Fonte:** [https://fluiggers.com.br/t/botao-excluir-tabela-paixfilho-nao-esconde-no-mobile/2201](https://fluiggers.com.br/t/botao-excluir-tabela-paixfilho-nao-esconde-no-mobile/2201)
> **Categoria:** Sem categoria
> **Criado em:** 13/09/2023, 10:42
> **Visualizações:** 303 | **Likes:** 4 | **Respostas:** 10

---

## Pergunta original

**Jhonata Martins da Costa** (@Jhomcosta) — 13/09/2023, 10:42

Fala galera, tudo beleza ? Seguinte, tenho uma tabela paiXfilho e tenho um script no display fields pra remover os botoes de adicionar e excluir itens, caso não seja a etapa inicial.
displayFields

```auto
if (activity != 0) {
        customHTML.append('<script>$(function () { removeButtonsFromTablePaiFilho(); });</script>');
    }
```

Js

```auto
function removeButtonsFromTablePaiFilho() {
  $(".action").remove();
}
```

No desktop funciona certinho, ja no mobile o botao de adicionar é removido mas o botão de excluir continua aparecendo em todas as etapas.

Alguem ja passou por isso ?

Obrigado!

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 13/09/2023, 11:33

Coloque uma tag com um id, por exemplo:

```auto
<div id="hiddenElement"> <!-- botoes --> </div>
```

e no displayFields utilize:

```auto
if(suaCondicao){  form.setVisibleById("hiddenElement", true) }
```

---

## Resposta #2

**Jhonata Martins da Costa** (@Jhomcosta) — 13/09/2023, 12:52

Olá Jonathan!!

Tentei desta forma e ainda assim não funcionou.

De qualquer forma agradeço a resposta!

---

## Resposta #3

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 13/09/2023, 13:10

O botão fica na linha do filho?

---

## Resposta #4

**Jhonata Martins da Costa** (@Jhomcosta) — 13/09/2023, 13:14

Sim! vi que o id fica com o index, exemplo: “trashButton\_\_\_1” e tentei colocar o id diretamente com esse index pra fazer um teste, tambem nao rolou.

---

## Resposta #5

**Jhonata Martins da Costa** (@Jhomcosta) — 13/09/2023, 13:24

Segue um trecho do html pra contextualizar

HTML

```auto
<table tablename="shoppingList" id="shoppingList" class="table table-hover" noaddbutton="true" nodeletebutton="true">
. . .
  <tbody>
        <tr id="shopping_list_row">
              <td class="action" id="trash_button">
			    <button type="button" class="btn btn-link btn-sm trashButton" id="trashButton">
		            <i class="fluigicon fluigicon-remove icon-sm text-danger"></i>
		        </button>
		      </td>
         </tr>
  </tbody>
</table>
```

---

## Resposta #6

**Guilherme Mesquita Rocha** (@gmesquita) — 14/09/2023, 11:39

Tente da seguinte maneira:
***$(“\[class^=‘action’\]”).hide()*** ou ***$(“\[id^=‘trash\_button’\]”).hide()***

---

## Resposta #7

**Jhonata Martins da Costa** (@Jhomcosta) — 14/09/2023, 13:38

Opa Guilherme!

Mesma coisa, no navegador ok mas no app aparece o bentido botao de remover.

Navegador:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/5/5b0c1c2860ed0ce635412a522dc42e4b2a1073c0_2_690x105.png)

Aplicativo My fluig:

![WhatsApp Image 2023-09-14 at 13.35.27](https://fluiggers.com.br/uploads/default/optimized/2X/e/ef6ec417bf8dfa3d555cf48345897a71e7001975_2_230x500.jpeg)

---

## Resposta #8

**Guilherme Mesquita Rocha** (@gmesquita) — 14/09/2023, 13:46

Existe a possibilidade de ser cache do app?

---

## Resposta #9

**Jhonata Martins da Costa** (@Jhomcosta) — 14/09/2023, 13:48

Pode ser sim! Ja cogitei isso, visto que no web o cache é bastante persistente mas eu sempre rodo com ele desabilitado, mas ai pra corrigir acredito que só acionando a totvs ou tem alguma forma de resetar o cache do app ?

---

## Resposta #10

**Guilherme Mesquita Rocha** (@gmesquita) — 14/09/2023, 13:59 | ❤️ 1

Basta abrir o Menu lateral, clicar no ícone de engrenagem → Configurações do Aplicativo → Limpar dados

---

## Resposta #11

**Jhonata Martins da Costa** (@Jhomcosta) — 14/09/2023, 14:03

Boa, obrigado pela dica. Eu estava procurando nas configs do iphone.

Fiz a limpeza e abri um novo processo teste, porem ainda assim continua o botão a aparecer.

---

## Resposta #12

**Guilherme Mesquita Rocha** (@gmesquita) — 14/09/2023, 14:07 | ❤️ 1

Pode ser que no mobile, algo esteja quebrando antes da chamada da sua função. Recomendo você utilizar a biblioteca externa “Eruda” no seu projeto.

![](https://github.githubassets.com/favicons/favicon.svg) [GitHub](https://github.com/liriliri/eruda)

![](https://opengraph.githubassets.com/4648b64aa0781c25bf17ce6bd572f8c02ee023aced1af196a6868805ff1a6c4f/liriliri/eruda)

### [GitHub - liriliri/eruda: Console for mobile browsers](https://github.com/liriliri/eruda)

Console for mobile browsers. Contribute to liriliri/eruda development by creating an account on GitHub.

Basta você colocar no seu HTML o seguinte trecho:

```auto
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```

Depois disso, você vai abrir o CONSOLE pelo APP (através dessa biblioteca) e verifique se tem algum erro ou não, e tente também rodar o código que te passei para esconder o componente. Vai me avisando aí, rs.

---

## Resposta #13

**Jhonata Martins da Costa** (@Jhomcosta) — 14/09/2023, 14:31

Opa! Então agora com esse processo me parece que é algum tipo de cache do app mesmo que não esta limpando mesmo com o procedimento de limpeza.

No navegador apareceu o botão de inspecionar da lib indicada

![image](https://fluiggers.com.br/uploads/default/optimized/2X/7/7c8e69644a5e6e8579e5022563bee831345acb75_2_690x128.png)

Mas no app o botão nao aparece

![WhatsApp Image 2023-09-14 at 14.30.23](https://fluiggers.com.br/uploads/default/optimized/2X/1/1b09d4f9313cd5f4f65f62d7932c4e9a956a390d_2_230x500.jpeg)

---

## Resposta #14

**Guilherme Mesquita Rocha** (@gmesquita) — 14/09/2023, 14:32

Estranho… tente reinstalar o App do Fluig…

---

## Resposta #15

**Jhonata Martins da Costa** (@Jhomcosta) — 14/09/2023, 14:38 | ❤️ 1

Reinstalei, continua igual.

Vou tentar um chamado com eles pq ta bem estranho. Recentemente tive um problema em um outro processo onde haviam componentes java sendo chamados pelo forms do processo, tudo funcionava normal no navegador e no IOS, mas no android nao carregava o formulario, ai falando com eles lançaram um update com correção.

---

## Resposta #16 ✅ RESPOSTA ACEITA

**Jhonata Martins da Costa** (@Jhomcosta) — 14/09/2023, 15:28 | ❤️ 1

Galera consegui contornar da seguinte forma. No displayFields adicionei o seguinte

```auto
if (activity != 0) {
        customHTML.append('<script>$(function () { removeButtonsFromTablePaiFilho(); });</script>');
        customHTML.append('<style>@media (max-width: 600px) {.trashButton {display: none !important;}')
    }
```

A questao do cache nao atualizar foi momentanea, demorou um pouco mas logo atualizou e apareceu o botao de inspecionar da lib indicada pelo Guilherme, o que me ajudou a identificar os elementos e chegar nesta solução uma vez que hide de remove do jquery não estavam funcionando.

Obrigado a todos que colaboraram!

---
