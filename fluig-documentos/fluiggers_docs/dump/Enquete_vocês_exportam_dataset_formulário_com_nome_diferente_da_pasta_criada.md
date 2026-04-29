# Enquete: vocês exportam dataset/formulário com nome diferente da pasta criada?

> **Fonte:** [https://fluiggers.com.br/t/enquete-voces-exportam-dataset-formulario-com-nome-diferente-da-pasta-criada/1930](https://fluiggers.com.br/t/enquete-voces-exportam-dataset-formulario-com-nome-diferente-da-pasta-criada/1930)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Criado em:** 22/05/2023, 09:21
> **Visualizações:** 322 | **Likes:** 5 | **Respostas:** 4

---

## Pergunta original

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/05/2023, 09:21

Olá,

Quando criamos um Dataset ou Formulário nós damos um nome ao arquivo (dataset) ou à pasta (formulário). Em teoria o nome do arquivo/pasta é o nome do dataset/formulário.

Porém o Eclipse dá a opção de exportarmos com um nome diferente.

Eu nunca enviei um dataset ou formulário com nome diferente do que estava no meu disco (até pra evitar confusão), mas gostaria de saber de vocês, até pra entender se tem alguma vantagem nisso.

-   Uso bastante a exportação com nome diferente do arquivo original
-   Raramente altero o nome ao exportar
-   Nunca altero o nome ao exportar

0 votantes

Pergunto isso porque estou pensando em remover a opção de dar nome diferente ao Dataset na extensão de VSCode que dou manutenção. E isso já me facilitaria também na parte que estou trabalhando, que é a exportação de formulários.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/05/2023, 11:50

Coloquei a enquete pra facilitar visualmente, mas gostaria muito de saber o motivo e situação pra exportar com nome diferente.

E depois como fazem o controle do projeto com artefatos diferentes entre projeto e servidor?

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 23/05/2023, 08:22 | ❤️ 2

Normalmente deixo igual mesmo, mas os nomes seguem um padrão…e nos formulários faço assim:

nome do form: form\_naoseioque
dataset: ds\_form\_naoseioque

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/05/2023, 09:21

Então, eu não consigo entender a ideia de exportar com nome diferente do que está no projeto. Imagino a confusão que fica. Vou olhar o projeto ou o Git e vou ver uma coisa, aí no servidor vai estar com outro nome… Por isso perguntei pro pessoal o motivo que os fazem enviar com nome diferente.

Faço parecido, [@daniel.cabral](/u/daniel.cabral) . Mas não coloco o prefixo `form_`.

Formulário eu faço em PascalCase, mas o dataset do formulário (na verdade todos os datasets) eu faço snake case colocando o prefixo `ds_`.

Ex: tenho 3 formulários pra um processo de “frota”:

-   FrotaCNH (ds\_frota\_cnh)
-   FrotaVeiculo (ds\_frota\_veiculo)
-   FrotaSolicitacaoVeiculo (ds\_frota\_solicitacao\_veiculo)

Todos os datasets específicos dessa frota eu coloco na pasta `datasets/Frota` e todos com o prefixo `ds_frota_`, afinal o Fluig não organiza dataset por pasta mesmo.

E não uso o padrão proposto pela TOTVS pra nomenclatura de campos dos formulários. Prefiro deixar nomes semânticos do que ficar colocando “tipagem” neles e isso acabar atrapalhando em algum momento.

---

## Resposta #4

**Adriano Ribeiro da Costa** (@adriano) — 23/05/2023, 13:14 | ❤️ 1

Perfeito! Organização é tudo. Sempre fiz dessa forma também (form\_nomeDoFormulario e ds\_nomeDoFormulario), e para acrescentar nos campos de formulário, sigo um padrão, como exemplo: tx\_nome (para campos do tipo text), zo\_campo (para campos do tipo zoom) e por aí vai.

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 26/05/2023, 07:58 | ❤️ 1

Aqui vai o nome da pasta igual ao nome do html e sobe igual tb
Já os datasets começam com ds\_nome\_do\_dataset oy dts\_nome\_do\_dataset.

Mas vira e mexe vem um analista nove e caga no padrão. aff

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/05/2023, 09:59 | ❤️ 1

Eu desisti da ideia de tirar a opção de nomear de forma diferente. Afinal podem ter situações (que eu não consegui imaginar, mas alguém imagina) que nomear diferente seja importante, hehehe.

É interessante ver que uma quantidade razoável altera o nome.

Achei legal a ideia de dar o nome `ds_form_` pra dataset que é de algum formulário. Assim a gente já sabe de cara que é de formulário ou customizado.

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 26/05/2023, 10:10

As veszes um analista porco sob e um nome estranho do formulario e quando vamos padronizar precisamos alterar, nessescasos é bem vindo essa opção

---
