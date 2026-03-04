# DatasetFactory is not defined

> **Fonte:** [https://fluiggers.com.br/t/datasetfactory-is-not-defined/818](https://fluiggers.com.br/t/datasetfactory-is-not-defined/818)
> **Categoria:** WCM
> **Criado em:** 09/12/2021, 13:01
> **Visualizações:** 1237 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 09/12/2021, 13:01

Eu tenho uma widget que foi desenvolvida por mim.

Entretanto, estou obtendo o erro apresentado no ‘Assunto’ acima, mesmo tendo declarado o script

`<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>`

Alguém já passou por isto?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/12/2021, 15:42 | ❤️ 1

Quando isso acontece normalmente é por tentar usar a o objeto antes dele ter sido carregado.

Você tentou usar a `DatasetFactory` dentro de `SuperWidget.extend((function () {})`?

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 09/12/2021, 16:34 | ❤️ 1

Caro Bruno, mais uma vez, obrigado.
Não, não está dentro da Superwidget.
Está de fora, mas eu carrego dentro de

jQuery(document).ready(function (){
…
});

Eu experimentei pôr as funções que estavam provocando o Dataset dentro do ini: da SuperWidget e parece que funcionou. O estranho é que em outras widgets que tinha a mesma situação isto não acontece. Só em duas widgets dentre dezenas que tenho.
Mas, valeu!

---

## Resposta #3

**Gabriel Franco da Rocha Nascimento** (@gabrielfrna) — 10/12/2021, 16:14

Mautresim, Boa tarde!

Qual a sequência que colocou o apontamento dos scripts no seu HTML?

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 10/12/2021, 16:52

Caro Gabriel,
eu nem faço referência a arquivos javascript no meu html, porque eu uso o embutido na widget.

Eu abro a pasta ‘resources\\web’ e ele já está lá.
Mas ponho, por exemplo, jQuery(document).ready(function (){
…
});

antes de

SuperWidget.extend({});

E, no arquivo view.ftl, a declaração do arquivo vcXMLRPC.js fica logo abaixo do div inicial.

---
