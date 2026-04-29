# Dúvida, papel do usuário em formulário

> **Fonte:** [https://fluiggers.com.br/t/duvida-papel-do-usuario-em-formulario/3473](https://fluiggers.com.br/t/duvida-papel-do-usuario-em-formulario/3473)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 14/10/2025, 17:29
> **Visualizações:** 43 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**João Paulo Machado Benevides** (@Joao_Paulo_Machado_B) — 14/10/2025, 17:29

É possível de forma automática um campo do formulário do fluig identificar de forma automática o papel do usuário que está abrindo solicitação ? se sim, como faço ?
É que desejo utilizar um condicional que vai definir por onde o processo irá seguir dependendo de qual é o papel do usuário que abriu a solicitação

---

## Resposta #1

**Gabriel Persike** (@Gabriel_Persike) — 15/10/2025, 16:04

João, você pode consultar o Dataset interno do Fluig “workflowColleagueRole“, passando o código do usuário como Constraint.

```auto
var ds = DatasetFactory.getDataset("workflowColleagueRole",null,[
    DatasetFactory.createConstraint("colleagueId", parent.WCMAPI.userCode,parent.WCMAPI.userCode,ConstraintType.MUST)
],null)
```

Porém, esse dataset irá retornar uma lista de Papeis relacionados com esse usuário, e então você terá que passar pela lista verificando se algum bate com a sua regra.

```auto
function displayFields(form, customHTML) {
	form.setValue("atividade", getValue('WKNumState'));
	form.setValue("formMode", form.getFormMode());
	form.setValue("isMobile", form.getMobile());
	form.setValue("userCode", getValue("WKUser"));

	if (form.getFormMode() == "ADD") {
		// Se formMode for igual a ADD, significa que o processo está sendo iniciado
		// Então salva os dados do usuário
		form.setValue("solicitante", getValue("WKUser"));

		// Consulta os Papeis do Usuário solicitante
		var ds = DatasetFactory.getDataset("workflowColleagueRole",null,[
			DatasetFactory.createConstraint("colleagueId",getValue("WKUser"),getValue("WKUser"),ConstraintType.MUST)
		],null);


		for (var i = 0; i < ds.values.length; i++) {
			// Passa por cada Papel do usuário verificando se ele pertence a algum especifico
			if (ds.getValue(i,"workflowColleagueRolePK.roleId") == "admin") {
				//Aqui você salva o valor no campo que será usado no Condição
				form.setValue("nomeDoCampo","admin");
			}
		}

	}

	form.setValue("observacoes", "");
	form.setHidePrintLink(true);
}
```

---
