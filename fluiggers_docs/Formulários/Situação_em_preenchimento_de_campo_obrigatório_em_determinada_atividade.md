# Situação em preenchimento de campo obrigatório em determinada atividade

> **Fonte:** [https://fluiggers.com.br/t/situacao-em-preenchimento-de-campo-obrigatorio-em-determinada-atividade/962](https://fluiggers.com.br/t/situacao-em-preenchimento-de-campo-obrigatorio-em-determinada-atividade/962)
> **Categoria:** Formulários
> **Criado em:** 10/03/2022, 09:10
> **Visualizações:** 501 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Marcelo Barros** (@marcelo_barros) — 10/03/2022, 09:10 | ❤️ 2

Bom dia pessoal,

Tenho uma atividade onde um campo é obrigatório ao movimentar para a atividade seguinte do fluxo.

O que está ocorrendo é que quando o fluxo deve retornar uma atividade anterior, o mesmo também obriga preencher o campo onde na situação de retorno não temos a informação deste campo.

Tem alguma forma onde ele deixe o campo obrigatório apenas quando movimentar a atividade para a atividade seguinte? E que quando movimente para a atividade anterior desconsidere a obrigatoriedade?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Marcelo Barros** (@marcelo_barros) — 10/03/2022, 15:28 | ❤️ 2

Apenas para registro de solução utilizei **WKNextState**:

```auto
if (getValue("WKNextState") == 11){ /* Então faça algo! */ }
```

---
