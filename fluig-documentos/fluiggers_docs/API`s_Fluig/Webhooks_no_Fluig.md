# Webhooks no Fluig

> **Fonte:** [https://fluiggers.com.br/t/webhooks-no-fluig/181](https://fluiggers.com.br/t/webhooks-no-fluig/181)
> **Categoria:** API`s Fluig
> **Tags:** `webhook`
> **Criado em:** 19/03/2021, 14:25
> **Visualizações:** 834 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 19/03/2021, 14:25 | ❤️ 1

Salve, Fluiggers!

Alguém já precisou trabalhar com webhooks no Fluig? Por exemplo, o sistema externo é gatilhado e manda um envelope SOAP com os dados para um endereço que desejarmos - mas não consigo ver isso funcionando no Fluig sem colocar um middleware pra escutar e tratar essas chamadas.

Há alguma coisa no Fluig que possa tratar isso?

Valeu #fluiggers!!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 25/03/2021, 14:51 | ❤️ 1

Num tem choro…só com um middleware! Resolveremos aqui com um dataset agendado fazendo a verificação que precisamos!

Valeu gente!

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 13/04/2021, 10:44

[@daniel.cabral](/u/daniel.cabral) [Browse Samples / Widgets - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse)
Da uma olhadinha nesse link.
Se conseguir me fala

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 15/04/2021, 09:18

[@Daniel\_Sales](/u/daniel_sales) ele atenderia em partes - o Webook faz uma chamada padrão que o fluig não ‘entenderia’, daí a necessidade de um middleware pra traduzir a informação que chega e decidir o que fazer com ela

---
