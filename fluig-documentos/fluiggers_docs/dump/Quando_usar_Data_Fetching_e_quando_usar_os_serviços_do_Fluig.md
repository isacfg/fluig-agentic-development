# Quando usar Data Fetching e quando usar os serviços do Fluig

> **Fonte:** [https://fluiggers.com.br/t/quando-usar-data-fetching-e-quando-usar-os-servicos-do-fluig/460](https://fluiggers.com.br/t/quando-usar-data-fetching-e-quando-usar-os-servicos-do-fluig/460)
> **Categoria:** Formulários
> **Criado em:** 24/05/2021, 07:41
> **Visualizações:** 598 | **Likes:** 6 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 24/05/2021, 07:41 | ❤️ 2

Galera, bom dia.

Só queria aproveitar experiência de vocês para sanar uma dúvida.

Ao fazer requisições REST no fluig, quando utilizar Data Fetching(ajax, Fetch API) e quando utilizar os serviços do fluig?

Hoje, minha visão é que utilizo serviços quando eu necessitar de algo um pouco mais avançado… Configurar OAuth por exemplo. Acredito que deve haver alguma questão de desempenho ou segurança envolvida.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 24/05/2021, 09:42 | ❤️ 3

Bom dia Daniel,

Como você já citou, sempre que tem autenticação eu prefiro utilizar o serviço;
Outra situação é você ter serviços que são utilizados em vários projetos, centralizando no painel de serviços você sofre menos se precisar fazer alguma alteração, além de poder manter o controle de apontamento para serviços de HOMOLOGAÇÃO e PRODUÇÃO, sem precisar ficar alterando o front.

Mas isso foi experiência minha.

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 24/05/2021, 10:04 | ❤️ 1

Muito bom,

Inclusive eu construi um POC pra testar a viabilidade de uma integração, e como era só pra essa finalidade, eu fiz usando data fetching.

Se o projeto tiver continuidade irei fazer isso através de serviços para centralizar o controle.

Vlw Willian.

---

## Resposta #3

**system** (@system) — 25/05/2021, 02:05

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
