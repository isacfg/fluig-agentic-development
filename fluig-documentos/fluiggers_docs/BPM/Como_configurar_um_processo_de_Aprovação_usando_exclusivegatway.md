# Como configurar um processo de Aprovação usando exclusivegatway

> **Fonte:** [https://fluiggers.com.br/t/como-configurar-um-processo-de-aprovacao-usando-exclusivegatway/3565](https://fluiggers.com.br/t/como-configurar-um-processo-de-aprovacao-usando-exclusivegatway/3565)
> **Categoria:** BPM
> **Tags:** `form`
> **Criado em:** 16/02/2026, 18:02
> **Visualizações:** 17 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**ViniEndres** (@ViniEndres) — 16/02/2026, 18:02

Estou desenvolvendo meu primeiro BPM de processo e tive dificuldade para uma simples aprovação de sim ou Não em um determinado fluxo. Parece bem simples, mas ao exportar o eclipse da erro de expressão…

![image](https://fluiggers.com.br/uploads/default/original/2X/4/461520bda143edbe64998191e72f96fa0cc1a04c.png)

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 18/02/2026, 16:46

Olá [@ViniEndres](/u/viniendres)

Eu geralmente gosto de usar a expressão condicional avançada!
Porém é importante que tu leve em consideração que para valores de campo o Fluig é CASE-SENSITIVE.

para a criação de condicional simples, o campo marcado com o Quadrado, deve ter o valor exatamente igual ao value do seu elemento de decisão do formulário.
Geralmente utilizando o componente Radio.

![image](https://fluiggers.com.br/uploads/default/original/2X/a/a90912e1f1aa18f3eaf8648fb25ce99008cea4a2.png)

---

## Resposta #2

**ViniEndres** (@ViniEndres) — 19/02/2026, 10:54

Obrigado pela dica! Acabei conseguindo “resolver” o problema criando um novo workspace e reconfigurando o process.

---
