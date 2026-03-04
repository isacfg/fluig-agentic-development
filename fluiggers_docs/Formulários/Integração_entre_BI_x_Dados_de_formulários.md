# Integração entre BI x Dados de formulários

> **Fonte:** [https://fluiggers.com.br/t/integracao-entre-bi-x-dados-de-formularios/381](https://fluiggers.com.br/t/integracao-entre-bi-x-dados-de-formularios/381)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 19/04/2021, 14:27
> **Visualizações:** 555 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Marcelo** (@MHPA23) — 19/04/2021, 14:27

Boa tarde.
Alguém já chegou a “ligar” um BI com dados de formulários? Por exemplo, hoje temos um formulário de liberação de pagamento, porém, quando o pessoal finaliza a atividade simplesmente ela fica lá, não sendo possível extrair grandes informações. A ideia seria com um BI ler essas informações e disponibiliza-las de acordo com a necessidade.

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 19/04/2021, 18:05

Você poderia ler os dados via API e processá-los no seu sistema de BI.

Por exemplo, nesse endpoint temos todos os processos com seus respectivos formuários, além da informação de prazo de cada um:

```auto
/bpm/api/v1/processes/{CÓDIGO DO SEU PROCESSO}/requests/tasks?page=1&pageSize=10&expand=formFields&expand=deadlineSpecification
```

Atenção ao pageSize porque o payload pode ficar muito grande para ser processado, pagine sem moderação!

---

## Resposta #2

**Victor Castro** (@victorcastro) — 20/04/2021, 08:00

[@MHPA23](/u/mhpa23) o que eu costumo fazer é salvar os dados que eu quero do formulário em um banco que eu criei e ler esse banco no meu BI.

É a forma mais simples que encontrei e funciona bem aqui.

---

## Resposta #3

**Marcelo** (@MHPA23) — 20/04/2021, 08:27 | ❤️ 1

Obrigado a todos, ambas as formas são validas, vamos avaliar aqui e ver qual vamos implantar.

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 28/04/2021, 18:10 | ❤️ 1

Essa consulta te retorna o código das tabelas ML do formulário principal e suas tabelas pai e filho. Pode fazer um select nelas também caso precise.

SELECT
l.COD\_LISTA\_PAI,
l.COD\_LISTA\_FILHO,
d.COD\_LISTA,
l.COD\_LISTA\_PAI,
l.COD\_LISTA\_FILHO,
l.COD\_TABELA
,d.NUM\_DOCTO\_PROPRIED
,d.NUM\_VERS\_PROPRIED

FROM DEF\_PROCES p – Tabela principal de configuração dos processos
LEFT JOIN VERS\_DEF\_PROCES vp ON vp.COD\_DEF\_PROCES = p.COD\_DEF\_PROCES – Tabela auxiliar de versões do processo
AND vp.LOG\_ATIV = 1
LEFT JOIN DOCUMENTO d ON d.NR\_DOCUMENTO = vp.NUM\_PASTA\_FORM – Tabela de formulários/documentos ECM
AND d.VERSAO\_ATIVA = 1
LEFT JOIN SERV\_DATASET ds ON ds.COD\_DATASET = d.NM\_DATASET – Tabela de datasets dos formulários/documentos
LEFT JOIN META\_LISTA\_REL l ON l.COD\_LISTA\_PAI = d.COD\_LISTA – Tabela de referência das tabelas de dados dos formulários
WHERE p.COD\_DEF\_PROCES = ‘NOME DO SEU PROCESSO’ OR ds.COD\_DATASET = ‘NOME SEU DATASET’
ORDER BY vp.NUM\_VERS DESC;

---
