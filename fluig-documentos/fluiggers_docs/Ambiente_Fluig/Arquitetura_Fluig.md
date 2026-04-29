# Arquitetura Fluig

> **Fonte:** [https://fluiggers.com.br/t/arquitetura-fluig/1083](https://fluiggers.com.br/t/arquitetura-fluig/1083)
> **Categoria:** Ambiente Fluig
> **Criado em:** 13/05/2022, 12:35
> **Visualizações:** 523 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Jorge Fachini** (@JorgeFachini) — 13/05/2022, 12:35 | ❤️ 1

Pessoal bom dia,

Hoje usamos o fluig no linux cent os e arquitetura com 5 máquinas, fluig index, loadbalance, storage,master e slave.

Gostaria de saber qual seria a melhor arquitetura para utilizar com o Windows. Alguém poderia me ajudar?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 19/05/2022, 12:38

[@JorgeFachini](/u/jorgefachini)

Eu sugiro tu manter na estrutura Linux, pois para a estrutura windows, dependendo da arquitetura desejada, tu necessitará de mais recursos de hardware(VM\`s)
O que vale é analisar qual o usabilidade do teu Fluig dentro da organização para ter uma estrutura de ALTA DISPONIBILIDADE COMO ESSA, essa estrutura geralmente é recomendada para ambientes com 100 ou mais acessos simultâneos.

Caso tenha interesse em controlar e ter uma ideia de quantos usuarios acessam simultaneamente o ambiente e quais as paginas e recursos mais acessados, tu pode utilizar o google analytics, e ter uma perspectiva de muitos dados e com isso analisar com base no dimensionamento de produto a melhor arquitetura.

Abraço.

---
