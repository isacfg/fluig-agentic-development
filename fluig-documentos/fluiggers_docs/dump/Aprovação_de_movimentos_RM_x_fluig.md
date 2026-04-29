# Aprovação de movimentos RM x fluig

> **Fonte:** [https://fluiggers.com.br/t/aprovacao-de-movimentos-rm-x-fluig/601](https://fluiggers.com.br/t/aprovacao-de-movimentos-rm-x-fluig/601)
> **Categoria:** BPM
> **Criado em:** 09/08/2021, 15:40
> **Visualizações:** 927 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 09/08/2021, 15:40

Boa tarde,

Estou trabalhando com a aprovação de movimentos do RM através do fluig.
Já importei todo o processo em minha máquina e tudo funcionou, inclusive aprovando de forma correta o movimento. Porém surgiu a necessidade de que antes de terminar o processo(quando é aprovado) eu criasse simplesmente uma atividade “Efetua pagamento”. Como podem observar na imagem, adicionei a atividade “Efetua pagamento”, porém eu teria que enviar essa aprovação do movimento logo ao entrar nessa atividade e não mais no evento de fim(Aprovado).

No caso, a atividade de “Efetua Pagamento” iria integrar com o RM e aprovar o movimento e a atividade de fim seria somente com o objetivo de finalizar o processo.

Porém não estou conseguindo encontrar onde é realizado essa integração que aprova o item no RM para que eu possa fazer algo, ficou um pouco obscuro.

![image](https://fluiggers.com.br/uploads/default/original/1X/b5c538a4cc959aa63f4002214cb4863f3ff8aaff.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 09/08/2021, 17:55 | ❤️ 2

Dentro do RM, nas parametrizações que você realizou e configurou este processo, você vai definir qual atividade que é aprovado.
Seleciona esta atividade Efetua Pagamento, quando chegar em Efetua pagamento, o RM vai entender como aprovado.

![Screenshot_1](https://fluiggers.com.br/uploads/default/original/1X/5426145e612b9f971b6969df67f6ab6b4e605e57.png)

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 10/08/2021, 08:22

Boa [@marcommas](/u/marcommas). Deu bom. Muito obrigado.

---

## Resposta #3

**system** (@system) — 11/08/2021, 00:23

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
