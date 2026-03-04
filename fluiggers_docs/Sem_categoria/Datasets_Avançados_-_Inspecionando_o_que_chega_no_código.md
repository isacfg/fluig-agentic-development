# Datasets Avançados - Inspecionando o que chega no código

> **Fonte:** [https://fluiggers.com.br/t/datasets-avancados-inspecionando-o-que-chega-no-codigo/921](https://fluiggers.com.br/t/datasets-avancados-inspecionando-o-que-chega-no-codigo/921)
> **Categoria:** Sem categoria
> **Criado em:** 10/02/2022, 10:11
> **Visualizações:** 548 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 10/02/2022, 10:11

Eu inspeciono no log.info() o conteúdo do array constraints que chega no código do Dataset.

Eu gostaria de saber como posso saber se a ‘propriedade’ IS\_LIKE\_SEARCH é true ou false.

Por exemplo, para saber que tipo de restrição chega, faço

constraints\[i\].constraintType == ConstraintType.MUST

Quando faço log.info(constraints\[1\]) me chega :

FIELD\_NAME=CASO; INITIAL\_VALUE=%98765%; FINAL\_VALUE=%98765%; CONSTRAINT\_TYPE=MUST; IS\_LIKE\_SEARCH=true;

Não sei como fazer um teste para saber a condição associada ao LIKE.

Já tentei

constraints\[1\].IS\_LIKE\_SEARCH, mas sempre retorna o próprio ‘IS\_LIKE\_SEARCH’,
constraints\[1\].IS\_LIKE\_SEARCH.likeValue, que retorna ‘undefined’
constraints\[1\].IS\_LIKE\_SEARCH.value, que retorna ‘undefined’ também

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Evaldo Maciel** (@Evaldo_Maciel) — 14/02/2022, 19:14 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/mautresim/48/511_2.png) Mautresim:
>
> > u inspeciono no log.info() o conteúdo do array constraints que chega no código do Dataset.
> >
> > Eu gostaria de saber como posso saber se a ‘propriedade’ IS\_LIKE\_SEARCH é true ou false.
> >
> > Por exemplo, para saber que tipo de restrição chega, faço
> >
> > constraints\[i\].constraintType == ConstraintType.MUST
> >
> > Quando faço log.info(constraints\[1\]) me chega :

[Mautresim](https://fluiggers.com.br/u/Mautresim), utilize:

```auto
dataset.addRow([constraints[i].likeSearch]);
// ou
dataset.addRow([constraints[i]["likeSearch"]]);
```

Vai te retornar um boolean.

---
