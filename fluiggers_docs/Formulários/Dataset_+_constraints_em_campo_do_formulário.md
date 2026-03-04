# Dataset + constraints em campo do formulário

> **Fonte:** [https://fluiggers.com.br/t/dataset-constraints-em-campo-do-formulario/1821](https://fluiggers.com.br/t/dataset-constraints-em-campo-do-formulario/1821)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 06/04/2023, 10:06
> **Visualizações:** 386 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Danilo M** (@Danilo_ti) — 06/04/2023, 10:06

Bom dia.
Tenho uma duvida a respeito de dataset e formulários.
Meu caso, guardo dentro de um campo do formulário uma informação “Grupo de Produtos”
E com base neste campo gostaria de passa-lo em um WHERE no meu select dentro do dataset.
Basicamente se este campo no formulário estiver preenchido a informação será adicionada ao dataset.

Porem não estou consguindo pegar a informação do formulário e importa-la para o dataset.
Qual seria a melhor forma.

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 11/04/2023, 18:28 | ❤️ 1

Olá, tudo bem?
Você deve passar a informação do campo como constraint mesmo

```auto
const value = $("#ID_CAMPO").val();

const c1 = DatasetFactory.createConstraint("campo", value, value, ConstraintType.MUST);

const ds = DatasetFactory.getDataset("seu_dataset", null, [c1], null);
```

Para pegar o valar no dataset:

```auto
var value = "";

    if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == "campo" && constraints[i].initialValue && constraints[i].initialValue != "") {
                value = constraints[i].initialValue;
			}
		}
	}
```

Veja se te atentede.

Abs.

---
