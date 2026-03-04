# Condicional de valor não executa workflow

> **Fonte:** [https://fluiggers.com.br/t/condicional-de-valor-nao-executa-workflow/763](https://fluiggers.com.br/t/condicional-de-valor-nao-executa-workflow/763)
> **Categoria:** Formulários
> **Criado em:** 05/11/2021, 13:01
> **Visualizações:** 554 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Aleide Mascarenhas** (@Aleide_Mascarenhas) — 05/11/2021, 13:01

criei uma condicional no workflow, usando valor de um campo para verificar se é maior ou menor que 1000, porem ele só cai na mesma condição, ignorando a condicional. Alguem sabe o que pode ser?

![image](https://fluiggers.com.br/uploads/default/original/1X/2e99e0b27729fe7be26e6ab03b7c50f18f72130d.png)

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 05/11/2021, 17:03

Aleide, eu tive problemas similares.
O que eu fiz para resolve, foi criar um campo oculto auxiliar. E via js eu altero o mesmo para true se for maior e false se for menor.
E na condição coloquei igual “true” e outra igual a “false”.

---

## Resposta #2

**Aleide Mascarenhas** (@Aleide_Mascarenhas) — 06/11/2021, 09:34

Muito Obrigado pela dica, vou testa-la!

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 11/11/2021, 15:21 | ❤️ 1

olá, Utilizo essa validação com hAPI, não sei se existem outras formas mas esta funciona perfeitamente:
Exemplo

hAPI.getCardValue(‘nome\_do\_campo’) >= 1000

para a condição senao utiliza apenas true

![image](https://fluiggers.com.br/uploads/default/original/1X/511ad4dcb01624be0dafd06c4b4dafd78c99f43a.png)

---
