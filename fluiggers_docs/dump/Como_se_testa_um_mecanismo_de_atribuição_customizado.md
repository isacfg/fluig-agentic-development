# Como se testa um mecanismo de atribuição customizado?

> **Fonte:** [https://fluiggers.com.br/t/como-se-testa-um-mecanismo-de-atribuicao-customizado/2008](https://fluiggers.com.br/t/como-se-testa-um-mecanismo-de-atribuicao-customizado/2008)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `mecanismoatribuicao`
> **Criado em:** 06/07/2023, 09:54
> **Visualizações:** 385 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Matheus** (@matheusassed) — 06/07/2023, 09:54

Como faço para testar um mecanismo de atribuição customizado?
Estou usando o `log.info(variável);` mas não sei onde essa informação vai ser exibida. Gostaria de ver os retornos de um `DatasetFactory.getDataset`.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 06/07/2023, 10:26 | ❤️ 1

Olá, tudo bem? O log.info no mecanismo customizado vai aparecer no log do servidor. O pessoal aqui desenvolveu um componente excelente para acessar o log… da uma olhada no post [Análise de Log Fluig 1.7.0 ou superior direto no navegador - #15 por Raquel](https://fluiggers.com.br/t/analise-de-log-fluig-1-7-0-ou-superior-direto-no-navegador/117/15)

Abs.

---
