# Tempo carga Home Digte

> **Fonte:** [https://fluiggers.com.br/t/tempo-carga-home-digte/966](https://fluiggers.com.br/t/tempo-carga-home-digte/966)
> **Categoria:** Ambiente Fluig
> **Tags:** `home`, `digte`
> **Criado em:** 15/03/2022, 15:19
> **Visualizações:** 423 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 15/03/2022, 15:19 | ❤️ 2

Salve, nação!

Reparei esses dias que ao ver a home de um cliente carregando em um usuário não-admin, temos um tempo de espera muuuuuuuuuuuito longo, tipo 1 minuto ou mais.

Ao carregar como admin o MESMO conteúdo, 5 segundos!

Dúvida: há alguma forma de controlar esse comportamento? E mais…assumindo que a carga seja pesada mesmo ([@fluigor.com.br](/u/fluigor.com.br) ), há como colocar algum recurso de lazy-loading para exibir o que o usuário precisa o quanto antes e trabalhar o restante em background?

Valeu!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 16/03/2022, 10:54 | ❤️ 1

Provavelmente a leitura da parte de segurança dos datasets, com o usuário básico.
implique nessa requisição.
Ja tive esse problema com widgets personalizadas que faziam a leitura de dados de datasets internos, com mtas permissoes configuradas.

atenciosamente

---
