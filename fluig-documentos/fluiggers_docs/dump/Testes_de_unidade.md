# Testes de unidade

> **Fonte:** [https://fluiggers.com.br/t/testes-de-unidade/617](https://fluiggers.com.br/t/testes-de-unidade/617)
> **Categoria:** Sem categoria
> **Criado em:** 17/08/2021, 10:07
> **Visualizações:** 499 | **Likes:** 6 | **Respostas:** 1

---

## Pergunta original

**Mariana Oliveira** (@Mariana_Oliveira) — 17/08/2021, 10:07 | ❤️ 2

Pessoal, bom dia

Estou tentando implementar algum framework de testes de unidade no código do Fluig, **alguém usa alguma ferramenta**? Tentei algumas coisas com o Jest, mas esbarro no problema de ter muitas coisas internas do Fluig no código como FLUIGC e e outros parâmetros de evento como WKDef.

Obrigada!

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 23/08/2021, 14:39 | ❤️ 1

Oi Mariana, tudo joia?

Eu as vezes utilizo o ESLint, porém quando tenho alguma aplicação rodando do node, por exemplo Angula, VUEjs, e etc.

Diretamente no Fluig eu nunca usei, eu sugiro dar uma olhada no lib Jasmine: [https://jasmine.github.io/](https://jasmine.github.io/)

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/08/2021, 15:39 | ❤️ 2

Na parte de Front eu só deixo o ESLint ativado no VS Code, mas não faço nenhum teste unitário.

Sinceramente eu desisti de tentar automatizar testes no Fluig. Senti que ele não é um sistema que permite muita coisa nesse sentido.

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 23/08/2021, 16:25 | ❤️ 1

+1 ESLint ativado no VSCode…já tentei programar testes automatizados pelo Katalon Studio, mas o resultado não foi muito bom, e funcionaria apenas para o front. Tenho o mesmo sentimento do [@Bruno\_Gasparetto](/u/bruno_gasparetto) , uma frustração por não encontrar uma forma viável de fazer isso.

---
