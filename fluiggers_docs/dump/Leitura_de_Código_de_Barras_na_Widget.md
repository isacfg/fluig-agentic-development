# Leitura de Código de Barras na Widget

> **Fonte:** [https://fluiggers.com.br/t/leitura-de-codigo-de-barras-na-widget/2317](https://fluiggers.com.br/t/leitura-de-codigo-de-barras-na-widget/2317)
> **Categoria:** Widgets
> **Criado em:** 24/10/2023, 17:25
> **Visualizações:** 146 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Thales Franco** (@thalescomiz) — 24/10/2023, 17:25

Boa tarde,

Vocês sabem se é possível ler Código de Barras através da câmera do smartphone dentro de uma widget? A Totvs disponibilizou a JSInterface.showBarcodeReader(), porém só funciona dentro de um formulário, é possível fazer funcionar dentro de uma widget também? O retorno na widget é “JSInterface is not defined”.

Obrigado.

---

## Resposta #1

**Gabriel Borchardt** (@borchardt) — 30/10/2023, 16:11

cara talvez você precise inserir a lib direto pelo js, percebi que em alguns casos usando bibliotecas na view ftl ele não considera, mas se vc tentar inserir no seu código js a lib no seu endereço, talvez funcione, comigo deu certo isso usando full calendar, meio forçado a barra mas possa funcionar a primeiro momento.

---
