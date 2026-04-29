# Pacote de bibliotecas

> **Fonte:** [https://fluiggers.com.br/t/pacote-de-bibliotecas/108](https://fluiggers.com.br/t/pacote-de-bibliotecas/108)
> **Categoria:** Widgets
> **Criado em:** 15/03/2021, 09:14
> **Visualizações:** 1285 | **Likes:** 14 | **Respostas:** 6

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 15/03/2021, 09:14 | ❤️ 8

Sé varias widgets precisam das mesmas bibliotecas ou scripst, uma boa solução e criar uma widget “repositório” contendo todos os fontes e códigos necessários dentro dela.
tente separar os css, js, imagens nas respectivas pastas da widget.
dentro do arquivo application.info altere a linha abaixo.

> application.uiwidget=false

isso fara com que seu componente não seja listada nas widgets dentro do fluig

depois basta referencia-las na suas widgets

> application.resource.css.1=/meupacote/resources/css/css.css
> application.resource.css.2=/meupacote/resources/js/js.js
> application.resource.css.3=/meupacote/resources/img/img.png

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/03/2021, 10:18 | ❤️ 1

Essa é uma ideia muito boa.

Fiz isso pra ter os arquivos disponíveis em vários locais, mas não pensei em utilizar referenciando como dependência nas Widgets. Sempre colocava direto no HTML e FTL.

---

## Resposta #2

**Cassius** (@Cassius) — 19/03/2021, 18:21

Boa tarde a todos.

[@Daniel\_Sales](/u/daniel_sales) e se o meu repositório for para o BPM?
As vezes utilizo alguns **css** e **js** que são comuns a outros projetos. Como seguir essa mesma lógica? Tem como?

Obrigado.

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 19/03/2021, 18:24

[@Cassius](/u/cassius) dá pra por na pasta /resources do Fluig também - ela não é apagada durante as atualizações e ficaria exposta globalmente. Em um projeto usamos esse recurso pra compartilhar artefatos com todos os processos, formulários e widgets.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/03/2021, 10:58

Tudo que for acessado pelo navegador bastaria você declarar com a tag script e/ou link/style apontando o endereço do arquivo igual ao declarado na widget pelo Daniel.

Eu criei alguns scripts e estilos que uso em vários formulários e pra facilitar fiz essa tática de usar uma widget.

O complicado é compartilhar js utilizado nos eventos de servidor (eventos de formulário e processo). Quase todo processo/formulário preciso criar algumas funções exatamente iguais. Muito chato.

---

## Resposta #5

**Cassius** (@Cassius) — 20/03/2021, 11:17

Valeu aí pelas dicas [@daniel.cabral](/u/daniel.cabral) e [@Bruno\_Gasparetto](/u/bruno_gasparetto).
Confesso que soy muito, mas muito fraco em Widgets, mas fuçarei mais nesse assunto pra utilizar essa otimização.
Obrigado.

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/03/2021, 12:33 | ❤️ 4

é bem simples.

Você cria a Widget no Eclipse (Fluig Studio). O nome que você der pra sua widget será a URL dela e todos os arquivos resource ficarão disponíveis.

Por exemplo, eu criei a Widget **fluighelpers** pra ter algumas correções de estilo do formulário e outras padronizações. Também coloquei scripts que utilizo pra gerar PDF e pra encapsular a DatasetFactory.getDataset em uma Promise.

![fluighelpers_widget](https://fluiggers.com.br/uploads/default/optimized/1X/ce58ccfc69d75938a568c98291e90781b3b48ee0_2_690x344.jpeg)

Depois de enviado ao servidor eu posso acessar diretamente esses estilos e scripts tranquilamente.

![fluighelpers_formulario](https://fluiggers.com.br/uploads/default/optimized/1X/8f720a94e1e796b2f3f040aca66a81a551c26173_2_690x252.jpeg)

---

## Resposta #7

**Cassius** (@Cassius) — 20/03/2021, 16:47

[@Bruno\_Gasparetto](/u/bruno_gasparetto) boa tarde.

Sensacional!!! Já vou fazer umas “brincadeiras” aqui agora com isso aí.
Vai me poupar um trabalhão de ficar copiando e colando **js** e **css** de um projeto pro outro.
Obrigado também [@daniel.cabral](/u/daniel.cabral) pela dica.

Valeu!!!

---

## Resposta #8

**Alex Goncalves** (@Alex_Goncalves) — 19/08/2022, 10:50

[@Bruno\_Gasparetto](/u/bruno_gasparetto), poderia mostrar um exemplo de como transformou o DatasetFactory em uma Promise ?

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/08/2022, 13:53 | ❤️ 1

Olá, [@Alex\_Goncalves](/u/alex_goncalves) . Pode visualizar o código que utilizo nesse gist

[gist.github.com](https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858)

#### [https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858](https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858)

##### fluig-requests.js

```JavaScript
/**
 * Pega um dataset
 *
 * Wrapper para tornar a DatasetFactory.getDataset (da lib vcXMLRPC.js) em Promise.
 *
 * @param {string} dataset Nome do Dataset
 * @param {string[]} fields Campos para retornar (pode ser null pra retornar todos)
 * @param {Constraint[]} constraints Os filtros a aplicar ou null se não filtrar nada
 * @param {string[]} sorters Campos para ordenar ou null para não ordenar. Pode colocar ;desc no campo para ordenar decrescente
 * @returns {Promise<{columns: string[], values: object[]}>}
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858)

---
