# Executar função com biblioteca externa em atividade de serviço ou Dataset

> **Fonte:** [https://fluiggers.com.br/t/executar-funcao-com-biblioteca-externa-em-atividade-de-servico-ou-dataset/1109](https://fluiggers.com.br/t/executar-funcao-com-biblioteca-externa-em-atividade-de-servico-ou-dataset/1109)
> **Categoria:** BPM
> **Tags:** `bpm`, `dataset`, `mobile`
> **Criado em:** 28/05/2022, 08:28
> **Visualizações:** 930 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Afonso Uliana Neto** (@Afonso) — 28/05/2022, 08:28

Bom dia Pessoal

Implementei a biblioteca [https://pdf-lib.js.org/](https://pdf-lib.js.org/) no meu formulario para juntar os arquivos PDF informados pelo usuario na WEB esta funcionando porem no Mobile não isso não estava utilizando a opção de anexar documentos do proprio Fluig e sim utilizando
para adicionar arquivos no formulario. Para resolver este problema eu tentei utilizar a função JSInterface.showCamera porem na primeira atividade não estou conseguindo retornar o arquivos anexados ao processo (o comando parent.ECM.workflowView.attachments só funciona quando a solicitação está criada).

Então a forma que estou tentando fazer é implementar a funcão abaixo em uma atividade de serviço do fluig, alguem ja fez isso ? conseguem me ajudar?

import { PDFDocument } from ‘pdf-lib’

async function copyPages() {
const url1 = URL\_PDF\_1;
const url2 = URL\_PDF\_2;

const firstDonorPdfBytes = await fetch(url1).then(res => res.arrayBuffer())
const secondDonorPdfBytes = await fetch(url2).then(res => res.arrayBuffer())

const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes)
const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes)

const pdfDoc = await PDFDocument.create();

const \[firstDonorPage\] = await pdfDoc.copyPages(firstDonorPdfDoc, \[0\])
const \[secondDonorPage\] = await pdfDoc.copyPages(secondDonorPdfDoc, \[742\])

pdfDoc.addPage(firstDonorPage)
pdfDoc.insertPage(0, secondDonorPage)

const pdfBytes = await pdfDoc.save()
}

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/05/2022, 14:33

Atividade de serviço ocorre em em back-end e é executado em Java, não Javascript, então não acho que você conseguirá utilizar essa lib pra isso.

Sempre que pesquisei sobre isso a orientação era utilizar um sistema externo pra gerar o PDF e então inserir como anexo no processo.

Então você pode criar alguma página, na linguagem que quiser, que consulte as informações do Fluig e então gere o PDF.

Exemplo no Fluig de como recuperar um PDF em algum WS e então anexar no processo.

[gist.github.com](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

#### [https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

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
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/2164c1245010ae4564a6c742b4feeccf)

---

## Resposta #2

**Sérgio Machado** (@sergio.machado) — 30/05/2022, 09:00

Se eu entendi bem, você deseja que na primeira atividade, antes da solicitação ser criada, seja criado um novo PDF a partir dos pdf inseridos pelo usuário, é isso?

---

## Resposta #3

**Afonso Uliana Neto** (@Afonso) — 30/05/2022, 09:24

[@sergio.machado](/u/sergio.machado) isso mesmo. e biblioteca que utilizei esta fazendo isso [https://pdf-lib.js.org](https://pdf-lib.js.org), porem esta biblioteca é javacript e só consigo fazer isso no front-end, e quando utlizado no mobile nao estou conseguindo recuperar os arquivos para utilizar a biblioteca.

---

## Resposta #4

**Sérgio Machado** (@sergio.machado) — 30/05/2022, 09:53

Entendi, essa biblioteca tu não consegue usar em eventos de processos, então a saída que eu vejo seria:

Antes da solicitação ser salva você não consegue recuperar o link dos anexos, pois eles ainda não foram salvos, contudo, se você tiver o nome do arquivo físico salvo no formulário, poderá acessar esses arquivos diretamente na pasta de uploads do usuário. Da pra criar um dataset que receba os nomes dos arquivos e a matricula do usuário.

Depois dos arquivos encontrados realizar um merge entre eles e retornar um base64. De posse do base64 poderá exibir ao usuário.

A outra situação seria após a solicitação criada, só que aqui ao invés do dataset procurar os arquivos na pasta de upload do usuário, ele simplesmente percorreria a lista de anexos da solicitação.

Espero que tenha conseguido entender rsrs

---
