# Vamos usar ES6 e Typescript no Fluig?

> **Fonte:** [https://fluiggers.com.br/t/vamos-usar-es6-e-typescript-no-fluig/1588](https://fluiggers.com.br/t/vamos-usar-es6-e-typescript-no-fluig/1588)
> **Categoria:** Ambiente Fluig
> **Tags:** `java`, `javascript`
> **Criado em:** 20/01/2023, 11:20
> **Visualizações:** 913 | **Likes:** 11 | **Respostas:** 3

---

## Pergunta original

**Felipe Rugai** (@felipe.rugai) — 20/01/2023, 11:20 | ❤️ 5

Olá a todos!

Sou arquiteto de soluções e trabalho JS e C# há um bom tempo.
Nestes últimos tempos, surgiram algumas demandas de Fluig e acabei entrando para este universo rs.

Depois de muito penar, descobri algumas coisas em relação ao Fluig que me deixaram desanimados haha. O fato de não poder usar ES6/TypeScript nos eventos de formulário e datasets é bem desanimador.

Pensando nisso pensei em usar o Babel com Webpack ou Rollup para poder usar ES6/Typescript no desenvolvimento, e poder fazer um bundle que o Fluig consiga entender.
Pelo que entendi, o Fluig usa o Rhino como engine de JS, mas fuçando um pouco mais, vi que algumas features do JS funcionam no Dataset, mas não funcionam nos scripts de formulário.

Dito isso, algumas perguntas:

-   É possível definir qual(is) versão(ões) do Rhino, o Fluig utiliza para a execução de JS?
-   Alguém já pensou em fazer algo do genêro?
-   Vi que o [@Bruno\_Gasparetto](/u/bruno_gasparetto) criou um arquivo de tipagens incrível (obrigado por isso kkkk), que também ajudaria bastante no processo.
-   Aproveito também para perguntar (tentei achar na internet mas não encontrei), onde o Fluig usa Node (pois nas próprias páginas de release aparecem atualizações do Node), e se é possível utilizar o próprio Node para fazer algum tipo de desenvolvimento no Fluig.

Qualquer ajuda é bem vinda!

Abraços!

---

## Resposta #1

**jonathas araujo** (@jonathas_araujo) — 25/01/2023, 16:45 | ❤️ 1

Seja bem vindo, vou esperar o pessoal responder pois também tenho essa dúvida.
Até Java da para usar, mais quero saber como também.

Seria bom usar umas coisas a mais.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 01/02/2023, 08:21 | ❤️ 1

Bom dia! Primeiramente EXCELENTE postagem…esse é um assunto ‘antigo’, pois o Fluig usa bibliotecas beem atrasadas em relação ao que temos hoje. Se pudéssemos usar tipagem no backend seria ó… :smiley:

Até onde sei o Node.js é usado apenas no servidor Realtime, para enviar as notificaçoes em tempo real para os usuários, e infelizmente nada mais.

---

## Resposta #3

**Lucas** (@Lucas.Viana) — 08/05/2023, 08:48 | ❤️ 1

Amigo, também fiquei meio para baixo quando vi que o Fluig usa JS em vez de TS hahaha, suas declarações foram EXECELENTES, só estou respondendo para te parabenizar, abraços !

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/05/2023, 00:48 | ❤️ 2

A ideia é muito boa. Mas considerando várias coisas que sofri ultimamente acho que pra fazer essa transpilação o trabalho será grandioso.

Temos que lembrar que o TS precisa virar um JS mais antigo e com tratativas de Java no meio.

Por exemplo, uma função nativa do Fluig não retorna uma `string`, mas sim uma `java.lang.String` e isso pode dar uma baita dor de cabeça por ter métodos diferentes. Já tive erro por tentar usar a propriedade `length` em uma string e na verdade precisava usar o método `length()`, pois era uma string Java.

Aproveito muito o trabalho que tenho mantendo a declaração de tipos, mas confesso que seria maravilhoso não ter essa “mistureba” no código, hehehe.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/7243e590d3d1e35a1fa882c3149ed3826e0bd3d4_2_690x466.png)

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 18/05/2023, 08:54 | ❤️ 1

Meu sonho…principalmente no backend. Se a TOTVS, um dia, pelo menos atualizar o Rhino no backend já ajuda a gente

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/05/2023, 09:31

Seria mesmo ótimo ter uma atualização do Rhino.

Atualmente estou me rendendo a colocar mais Java nos eventos back e datasets. Fica “estranho”, mas ajuda bastante.

---

## Resposta #7

**Daniel Cabral Santos** (@daniel.cabral) — 19/05/2023, 09:49

A tabela de compatibilidade do Rhino não tem muuuuuuita coisa ainda:

[https://mozilla.github.io/rhino/compat/engines.html](https://mozilla.github.io/rhino/compat/engines.html)

Mas usar o JAVA pode resolver mesmo cara…estou resistente ai isso ainda :smiley:

---
