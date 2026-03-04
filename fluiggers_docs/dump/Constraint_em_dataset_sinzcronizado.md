# Constraint em dataset sinzcronizado

> **Fonte:** [https://fluiggers.com.br/t/constraint-em-dataset-sinzcronizado/2787](https://fluiggers.com.br/t/constraint-em-dataset-sinzcronizado/2787)
> **Categoria:** Ambiente Fluig
> **Tags:** `dataset`
> **Criado em:** 15/05/2024, 14:54
> **Visualizações:** 129 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Matheus Alves da Silva** (@msilvatheus) — 15/05/2024, 14:54

Estou tentando desenvolver algumas constraint para poder consultar um dataset sincronizado, mas estou com um pouco de dificuldade no desenvolver, o codigo esta assim :

```javascript
var cdg = ""
		var sts = ""
		var objdata = JSON.parse(response.getResult());
		if (constraints != null && constraints.length > 0) {
			for (var i = 0; i < constraints.length; i++) {
				if (constraints[i].fieldName == 'CODRECURSO') {
					cdg = constraints[i].initialValue;
				} else if (constraints[i].fieldName == 'STATUS') {
					sts = constraints[i].initialValue;
				}
			}
		}

		for (var i = 0; i < objdata.recursos.length; i++) {
			log.info("RetornoDsRecursos ================> " + [i]);
			if (cdg != "" && sts != "") {
				if (objdata.recursos[i].codigo == cdg && objdata.recursos[i].status == sts) {
					dataset.addOrUpdateRow(new Array(
						objdata.recursos[i].codigo,
						objdata.recursos[i].nome,
						objdata.recursos[i].area,
						objdata.recursos[i].local,
						objdata.recursos[i].status
					));
				}
			} else {
				dataset.addOrUpdateRow(new Array(
					objdata.recursos[i].codigo,
					objdata.recursos[i].nome,
					objdata.recursos[i].area,
					objdata.recursos[i].local,
					objdata.recursos[i].status
				));
			}
		}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 16/05/2024, 09:51

Bom dia!

Em nome da simplicidade, porque não trata a consulta ao dataset sincronizado em outro dataset? Você teria dois:

-   o que cria a tabela offline
-   o que consulta nela, com a flexibilidade que precisa

---
