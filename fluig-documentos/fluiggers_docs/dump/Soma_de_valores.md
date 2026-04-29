# Soma de valores

> **Fonte:** [https://fluiggers.com.br/t/soma-de-valores/1264](https://fluiggers.com.br/t/soma-de-valores/1264)
> **Categoria:** Sem categoria
> **Criado em:** 26/08/2022, 16:18
> **Visualizações:** 321 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**marley.andrade** (@marley.andrade) — 26/08/2022, 16:18

Boa tarde,

Preciso fazer a soma dos campos e exibir em um campo o Valor total.
Como proceder?

Grata.

---

## Resposta #1

**Vagner Duarte** (@vagner_duarte) — 29/08/2022, 16:21

você pode fazer algo parecido com isso:

var total = $(‘#idcampo1’).val() + $(‘#idcampo2’).val();

$(‘#icampototal’).val(total);

---
