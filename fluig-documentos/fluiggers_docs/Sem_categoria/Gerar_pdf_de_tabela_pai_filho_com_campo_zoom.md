# Gerar pdf de tabela pai filho com campo zoom

> **Fonte:** [https://fluiggers.com.br/t/gerar-pdf-de-tabela-pai-filho-com-campo-zoom/1827](https://fluiggers.com.br/t/gerar-pdf-de-tabela-pai-filho-com-campo-zoom/1827)
> **Categoria:** Sem categoria
> **Criado em:** 11/04/2023, 17:32
> **Visualizações:** 315 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 11/04/2023, 17:32

Pessoal boa tarde, estou usando o pdfmake para gerar o pdf, acontece que tem uma tabela pai x filho, que tem campo zoom, então aonde tem campo de outros normais, eu consigo acessar o valor, quando é do tipo zoom não acesso, então não consigo gerar o PDF, alguem ja gerou e poderia me dar uma força?

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 11/04/2023, 17:46

Boa tarde.

Sobre acessar o valor do campo zoom, imagino que vc deva ter que passar a posição `[0]`, pois ele retorna um Array (Ex: `document.querySelector("#IDDoSeuCampoZoom")[0].value`)… para renderizar os itens da tabela pai x filho no PDFMake, encontrei essa discussão no StackOverflow, isso me ajudou bastante na época e foi através dele que consegui montar na minha widget.

[stackoverflow.com](https://stackoverflow.com/questions/26658535/building-table-dynamically-with-pdfmake)

[![Cristian](https://www.gravatar.com/avatar/c90b45a5bde3f27dcffe26ef54760faf?s=256&d=identicon&r=PG)](https://stackoverflow.com/users/1527290/cristian)

#### [Building table dynamically with PDFMake](https://stackoverflow.com/questions/26658535/building-table-dynamically-with-pdfmake)

**javascript, pdf-generation, pdfmake**

asked by [Cristian](https://stackoverflow.com/users/1527290/cristian) on [04:36PM - 30 Oct 14 UTC](https://stackoverflow.com/questions/26658535/building-table-dynamically-with-pdfmake)

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 11/04/2023, 18:06

então, eu ja tinha visto que post, acontece que a montagem eu ja estou fazendo corretamente, tanto que ao imprimir valores da mesma tabela que não seja do tipo zoom, funciona normalmente, eu só não estou conseguindo acessar os valores, quando estou iterando sobre campos do tipo zoom

---
