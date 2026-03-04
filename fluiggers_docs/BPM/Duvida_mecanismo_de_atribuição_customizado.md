# Duvida mecanismo de atribuição customizado

> **Fonte:** [https://fluiggers.com.br/t/duvida-mecanismo-de-atribuicao-customizado/3148](https://fluiggers.com.br/t/duvida-mecanismo-de-atribuicao-customizado/3148)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 31/01/2025, 17:33
> **Visualizações:** 63 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**victor ferreira** (@nikof) — 31/01/2025, 17:33

Senhores, boa tarde

Tenho esse mecanismo customizado onde tento dar throw quando ele nao acha o usuario visando abortar que a etapa do processo seja avançada, porem o throw nao funciona dentro do mecanismo parece.

![image](https://fluiggers.com.br/uploads/default/original/2X/9/9df97fe16853340d441fec458a29c9c3a711640c.png)

Existe outra maneira de abortar o processo antes que seja avançado via script do mecanismo ?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/02/2025, 10:31

Usei poucas vezes o mecanismo de atribuição customizado, mas é estranho um throw nele não influenciar em nada. Talvez ele simplesmente reconheça como vazio e aí mande direto pro gestor né.

Aqui, quando quero bloquear o envio por estar faltando algo que não dá pra determinar só no formulário, eu valido no evento de processo `beforeStateEntry`.

Uso bastante pra validar se foi inserido um anexo específico dependendo da próxima atividade selecionada.

---
