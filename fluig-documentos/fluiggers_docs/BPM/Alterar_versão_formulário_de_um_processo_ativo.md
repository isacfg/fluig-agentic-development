# Alterar versão formulário de um processo ativo

> **Fonte:** [https://fluiggers.com.br/t/alterar-versao-formulario-de-um-processo-ativo/275](https://fluiggers.com.br/t/alterar-versao-formulario-de-um-processo-ativo/275)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 31/03/2021, 13:56
> **Visualizações:** 1700 | **Likes:** 7 | **Respostas:** 0

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 31/03/2021, 13:56 | ❤️ 1

Alterei um formulário relacionado com um processo, criando um novo campo.
Exportei formulário e processo.
Depois converti o processo pra nova versão.
Porém uma solicitação, apesar de estar convertida, o campo novo não aparece.
Tem alguma forma de atualizar a versão do formulário usado pelo processo? Ou qual tabela que armazena a versão do formulário x processo?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Rodrigo de Oliveira** (@redschenko) — 31/03/2021, 14:42 | ❤️ 6

Consegui resolver.
Ajustei o campo NUM\_VERS\_PROPRIED na tabela DOCUMENTO relacionado com o formulário da solicitação.

---
