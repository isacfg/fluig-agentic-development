# Fluig ler um movimento do RM e startar um processo no fluig

> **Fonte:** [https://fluiggers.com.br/t/fluig-ler-um-movimento-do-rm-e-startar-um-processo-no-fluig/1475](https://fluiggers.com.br/t/fluig-ler-um-movimento-do-rm-e-startar-um-processo-no-fluig/1475)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`, `rm`, `startprocess`
> **Criado em:** 10/11/2022, 16:36
> **Visualizações:** 461 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**matheus** (@matheus) — 10/11/2022, 16:36 | ❤️ 1

Boa tarde!

Alguém tem uma ideia de como que o fluig ficasse lendo os movimentos do rm e quando fosse cadastrado um produto de ser tipo, startaria um fluxo no fluig com todas os dados do movimento do rm.

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 11/11/2022, 09:08

Olá, tudo bem? Eu já fiz exatamente isso, mais não pelo Fluig, fiz um javascript separado e coloquei rodando em um CRON para iniciar o fluxo quando ele encontra o movimento. Não é exatamente o que você perguntou, mais se isso te ajudar responde aqui que a gente troca idéia

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/11/2022, 11:10

Aqui temos algo parecido, mas ainda não coloquei em produção por precisar de uns ajustes.

No RM criamos uma SQL que retorna os itens com tudo que precisamos, então usamos um dataset jornalizado que acessa essa consulta pelo WS do RM (wsConsultaSQL) pra realizar a consulta e esse dataset inicia a solicitação de acordo com o resultado.

No dataset usamos o WS do Fluig pra iniciar o processo. E nessa parte que acho horrível, porque o Fluig não disponibiliza um serviço interno pra iniciar um processo, somente tem a opção por WS (dá pra excluir solicitação, converter, importar/exportar processo e mais um monte de coisas, mas um simples start não tem). Não testei, mas acredito que a hAPI.startProcess só funcione em processo, não em dataset.

---
