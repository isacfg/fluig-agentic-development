# Padrão de projeto em formulário do FLUIG

> **Fonte:** [https://fluiggers.com.br/t/padrao-de-projeto-em-formulario-do-fluig/963](https://fluiggers.com.br/t/padrao-de-projeto-em-formulario-do-fluig/963)
> **Categoria:** Formulários
> **Criado em:** 11/03/2022, 13:15
> **Visualizações:** 712 | **Likes:** 8 | **Respostas:** 3

---

## Pergunta original

**Luan Alves** (@akaluan) — 11/03/2022, 13:15 | ❤️ 1

Existe algum padrão de projeto recomendado para se trabalhar com formulário e seus scripts dentro do FLUIG? Trabalho com um formulário com muitas regras de negócio e gostaria de saber se alguém ou a própria TOTVS possui uma recomendação nesse quesito. Att.

---

## Resposta #1

**Bruno Araujo** (@brunotda) — 14/03/2022, 15:59 | ❤️ 2

O fluig não tem um padrão de projeto muito útil, somente encontramos padrões de nomenclatura e estrutura.

[https://tdn.totvs.com/pages/releaseview.action?pageId=244448460](https://tdn.totvs.com/pages/releaseview.action?pageId=244448460)

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 15/03/2022, 13:21 | ❤️ 3

Costumo usar o ESLint para manter padrões de código no front. No backend também dá pra usar mas precisam ser regras distintas.

---

## Resposta #3

**Luan Alves** (@akaluan) — 21/03/2022, 16:32

Alguma sugestão por experiência em desenvolvimento de formulário?

---

## Resposta #4

**Luan Alves** (@akaluan) — 21/03/2022, 16:32

Passei a usar. Realmente é muito bom para manter padrões em projetos grandes.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 24/03/2022, 08:11 | ❤️ 2

Sugestão: cria dois templates de regras, um pra front e um pra back. Coloca os arquivos nas subpastas antes de você começar a trabalhar no projeto. O ESLint vai ler e aplicar essas regras ao invés do que você escolheu globalmente.

---
