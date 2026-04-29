# Constraints dataset padrão

> **Fonte:** [https://fluiggers.com.br/t/constraints-dataset-padrao/2099](https://fluiggers.com.br/t/constraints-dataset-padrao/2099)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`, `dataset`, `java`
> **Criado em:** 02/08/2023, 10:41
> **Visualizações:** 307 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Victor Castro** (@victorcastro) — 02/08/2023, 10:41

Tenho um dataset padrão de um formulário ao qual eu preciso filtrar 4 campos.

Campo **STATUSSOLIC** = “Em Andamento”
O campo **fimVigencia** NÃO PODE ser vazio.
E os campos **solicRevisaoAnterior** e **solicProgAnterior** TEM que ser vazios.

Tentei fazer da seguinte forma, mas retorna todos os registros.

```auto
DatasetFactory.createConstraint("STATUSSOLIC", "Em Andamento", "Em Andamento", ConstraintType.MUST);
DatasetFactory.createConstraint("fimVigencia", "", "", ConstraintType.MUST);
DatasetFactory.createConstraint("solicRevisaoAnterior", "", "", ConstraintType.MUST_NOT);
DatasetFactory.createConstraint("solicProgAnterior", "", "", ConstraintType.MUST_NOT);
```

O que estou fazendo de errado?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/08/2023, 12:21

Nesse caso acredito que FimVigencia tem que ser MUST\_NOT e os outros tem que ser MUST

---

## Resposta #2

**Victor Castro** (@victorcastro) — 02/08/2023, 13:20

De fato no post estava invertido. Mas eu já tentei todas as combinações possíveis. Com should, com like search…

Nesse caso que você aconselhou, não retorna nada.

Se eu passar somente as constraints para STATUSSOLIC e fimVigencia, e usar o **SHOULD** no **fimVigencia** e com **like sarch**, retorna as solicitações com status **Em Aberto** e as que o campo **fimVigencia** não estão vazios corretamente.

Agora quando adiciono as outras duas cláusulas, ou retorna tudo ou não retorna nada.

---
