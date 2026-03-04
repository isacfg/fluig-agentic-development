# Guia de estilo de JS para Front e Back

> **Fonte:** [https://fluiggers.com.br/t/guia-de-estilo-de-js-para-front-e-back/1449](https://fluiggers.com.br/t/guia-de-estilo-de-js-para-front-e-back/1449)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Tags:** `javascript`, `estilo`, `linter`, `eslint`
> **Criado em:** 02/11/2022, 14:25
> **Visualizações:** 320 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 02/11/2022, 14:25 | ❤️ 2

Galera, tava pensando aqui…

Sempre rola uma dificuldade quando a gente pega o trabalho de alguém que está nesse ou naquele estilo, fora a desatualização do código de backend do Fluig…aí tava pensando: e se, ao menos nós aqui, criássemos uma preset de estilo para o Fluig? Algo que fosse fácil de ler independentemente do nível do dev, mas que garantisse um mínimo de consistência sem sacrificar qualidade?

No VSCode costumo muito usar o ESLint em alguns projetos, seguindo a guia de estilo do Airbnb. Isso não se aplica aqui, mas ela pode ter sim uma base.

O que acham? Sei que o ESLint funciona bem também no eclipse, o desafio é criar um guia de estilo que possa funcionar bem em qualquer lugar - um para o front (esse é mais fácil) e um para o back (esse nem tanto).

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/11/2022, 15:18

A ideia é muito boa, mas acho que terá uma grande resistência já que a documentação do Fluig foca num padrão e às vezes é até estranho alguns comportamentos.

Por exemplo, eu uso muito const (e let), mas já vi que ao declarar uma widget (`var MetaEquipe = SuperWidget.extend`) a variável da widget precisa ser var pra extrapolar o escopo, hehehe. Ao menos lembro de ter tido problema quando usei const (ou let, não lembro).

Vi o guia da AirBnb e achei bem legal. Como eu quase não mexia com JS acabei ficando bem de fora dos padrões das comunidades.

---
