# Baixar arquivo da uma API e anexar em formulário

> **Fonte:** [https://fluiggers.com.br/t/baixar-arquivo-da-uma-api-e-anexar-em-formulario/2425](https://fluiggers.com.br/t/baixar-arquivo-da-uma-api-e-anexar-em-formulario/2425)
> **Categoria:** API`s Fluig
> **Criado em:** 12/12/2023, 07:28
> **Visualizações:** 381 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 12/12/2023, 07:28

Ola pessoal, preciso de um exemplo de como anexar um arquivo no formulário após baixar por API. Já consigo enviar para o GED pelo ECMDocumentService, mas preciso mesmo que esse documento seja anexado no formulário.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/12/2023, 07:43 | ❤️ 1

Você quer anexar no formulário ou no processo?

Se for no processo e estiver fazendo isso em um evento de processo é só usar o método `hAPI.attachDocument`.

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 12/12/2023, 09:27

Isso mesmo, achei esse modelo, muito obrigado.
[https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/document-attach/workflow/scripts/attachDocument-sample.beforeStateEntry.js](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/document-attach/workflow/scripts/attachDocument-sample.beforeStateEntry.js)

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/12/2023, 09:29 | ❤️ 1

Então, como você está usando a ECMDocumentService pra enviar o arquivo já pode aproveitar o retorno dela, que traz o ID, pra usar a `hAPI.attachDocument`.

[gist.github.com](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf#file-fluig_gerar_pdf_anexar_processo-js-L50)

#### [https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf#file-fluig\_gerar\_pdf\_anexar\_processo-js-L50](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf#file-fluig_gerar_pdf_anexar_processo-js-L50)

##### fluig\_gerar\_pdf\_anexar\_processo.js

```JavaScript
/*
 * Necessário criar um serviço SOAP no Fluig (Painel de controle -> Desenvolvimento -> Serviços)
 * com o nome ECMDocumentService apontando para o /webdesk/ECMDocumentService?wsdl
 *
 * Mais informações: https://tdn.totvs.com/pages/releaseview.action?pageId=73084007
 */

/**
 * Cria o PDF do formulário
 *
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf#file-fluig_gerar_pdf_anexar_processo-js-L50)

---
