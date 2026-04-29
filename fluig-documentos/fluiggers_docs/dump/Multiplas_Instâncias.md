# Multiplas Instâncias

> **Fonte:** [https://fluiggers.com.br/t/multiplas-instancias/1398](https://fluiggers.com.br/t/multiplas-instancias/1398)
> **Categoria:** Ambiente Fluig
> **Criado em:** 07/10/2022, 16:05
> **Visualizações:** 445 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Giovani Hardt** (@ghardt) — 07/10/2022, 16:05

Olá,
Estou precisando colocar o Fluig em múltipla instância, tínhamos dois serviços um para homologação e outro desenvolvimento.
Alguém poderia me indicar como posso implantar

---

## Resposta #1

**Matheus Mósso** (@msmosso) — 08/10/2022, 10:49

[@ghardt](/u/ghardt) No TDN tem um material sobre alta disponibilidade e balanceamento de carga.

Eu particulamente não tenho muito conhecimento sobre a implementação, mas acredito que possa te ajudar.

[https://tdn.totvs.com/display/public/fluig/Alta+disponibilidade+e+Balanceamento+de+carga](https://tdn.totvs.com/display/public/fluig/Alta+disponibilidade+e+Balanceamento+de+carga)

---

## Resposta #2

**Giovani Hardt** (@ghardt) — 10/10/2022, 11:10

[@msmosso](/u/msmosso)
Obrigado, mas eu já tinha visto esta documentação.
O que preciso mesmo é ter em um único servidor (Centos) duas instalações do Fluig

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/10/2022, 15:23

Acredito que com VM dê. Porque precisa isolar os serviços de cada instância. Não acho que tenha alguma regulagem pra cada serviço.

---
