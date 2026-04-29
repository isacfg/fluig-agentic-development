# Definição de Temp-table (progress) para usar Dataset

> **Fonte:** [https://fluiggers.com.br/t/definicao-de-temp-table-progress-para-usar-dataset/152](https://fluiggers.com.br/t/definicao-de-temp-table-progress-para-usar-dataset/152)
> **Categoria:** API`s Fluig
> **Criado em:** 17/03/2021, 11:55
> **Visualizações:** 493 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 17/03/2021, 11:55

Segue um exemplo de definição de Temp-table (progress) para usar Dataset, aplicando os filtros enviado pelo input zoom, consulta dataset e etc. A vantagem é consegui realizar filtro nas query, melhorando o desempenho, aumentando a velocidade e etc.

Uma constraints que é quase sempre enviada é a sqllimit (´ttconstraints.fieldname = 'sqllimit’´).

´

> def temp-table ttConstraints
> field fieldName as char
> field initialValue as char
> field finalValue as char
> field contraintType as char.
>
> procedure pi-zoom:
>
> ```
> def input parameter table for ttconstraints.
> def output parameter table for ttSaida.
> ```
>
> …
> ´

---
