# Transformar o formulário em uma imagem JPEG

> **Fonte:** [https://fluiggers.com.br/t/transformar-o-formulario-em-uma-imagem-jpeg/399](https://fluiggers.com.br/t/transformar-o-formulario-em-uma-imagem-jpeg/399)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 28/04/2021, 16:29
> **Visualizações:** 586 | **Likes:** 8 | **Respostas:** 1

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 28/04/2021, 16:29 | ❤️ 2

Pessoal boa tarde!

Alguém já precisou baixar uma parte do formulário em JPEG? Estou desenvolvendo uma aba de um formulário no qual eu vou precisar fazer o download em imagem.
Alguém sabe se é possível?

Obrigado!

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 28/04/2021, 17:49 | ❤️ 3

Boa tarde JCAANDRADE, você pode usar uma biblioteca de “canvas”.
Você referencia o elemento que quer tranformar e ele gera uma dataurl com a imagem

Segue link
[https://html2canvas.hertzen.com/](https://html2canvas.hertzen.com/)

---

## Resposta #2

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 28/04/2021, 18:21 | ❤️ 3

Obrigado [@Willian\_Laynes](/u/willian_laynes) !
Acabei utilizando a library dom-to-image que já estava implantada no projeto que eu estou desenvolvendo, só vi depois de quebrar a cabeça. Pelo que eu vi do canvas iria funcionar muito bem também.

Segue o git da library que utilizei:
[GitHub - tsayen/dom-to-image: Generates an image from a DOM node using HTML5 canvas](https://github.com/tsayen/dom-to-image)

---
