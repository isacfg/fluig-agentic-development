# Cadastro buscando codigo anterior

> **Fonte:** [https://fluiggers.com.br/t/cadastro-buscando-codigo-anterior/2184](https://fluiggers.com.br/t/cadastro-buscando-codigo-anterior/2184)
> **Categoria:** Formulários
> **Criado em:** 05/09/2023, 20:13
> **Visualizações:** 166 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Marcelo Carneiro** (@mscarneiro) — 05/09/2023, 20:13

Preciso aterar meu formulário que hoje cadastro a numeração que é incremental manualmente.
Precisava buscar o último numero incrementar +1.
Estou com dificuldade de fazer essa busca ao iniciar o formulário.

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 06/09/2023, 10:46

Um exemplo de código incremental com base na quantidade de linhas de um formulário:

```auto
function displayFields(form, customHTML) {
	var dataset = DatasetFactory.getDataset('DSCadastrodeProduto', null, null, null);

	form.setValue("idProduto", dataset.values.length + 1)

}
```

Basta adaptar à sua realidade.

---
