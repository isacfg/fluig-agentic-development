# Mecanismo de Atribuição Customizado e Atividades Conjuntas

> **Fonte:** [https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado-e-atividades-conjuntas/1525](https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado-e-atividades-conjuntas/1525)
> **Categoria:** BPM
> **Tags:** `bpm`, `mecanismoatribuicao`
> **Criado em:** 01/12/2022, 14:51
> **Visualizações:** 1067 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Eduardo Vantini Neto** (@eduardo.vantini) — 01/12/2022, 14:51 | ❤️ 1

Olá, tenho um cenário onde inicio um processo via webservice (startProcess) e a próxima atividade é uma atividade em conjunto, eu tenho um mecanismo de atribuição que pega os usuários de um determinado grupo e incluí como responsáveis da atividade, porém, o Fluig não atribuí todos os usuários a atividade. Tem alguma forma de incluir vários responsável em consenso via mecanismo de atribuição customizado?

Segue meu mecanismo:

```auto
var userList = new java.util.ArrayList();
var group = "GrupoUsuarios";

var c1 = DatasetFactory.createConstraint('colleagueGroupPK.companyId', '1', '1', ConstraintType.MUST)
var c2 = DatasetFactory.createConstraint('colleagueGroupPK.groupId', group, group, ConstraintType.MUST)

var dsGroup = DatasetFactory.getDataset('colleagueGroup', null, new Array(c1, c2), null);

if (dsGroup.rowsCount != 0) {
	for (var i = 0; i < dsGroup.rowsCount; i++) {
		userList.add(dsGroup.getValue(i, "colleagueGroupPK.colleagueId"));
	}
} else {
	throw "Não foram encontradoes usuários no grupo.";
}

return userList;
```

Obrigado.

---

## Resposta #1

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 01/12/2022, 16:29 | ❤️ 1

Boa tarde Eduardo

Você pode atribuir essa lista de usuários a um campo do formulário e na atividade colocar a atribuição por campo de formulário.

Veja se da certo!

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 01/12/2022, 16:45 | ❤️ 2

Amigos, consegui fazer funcionar. Eu marquei a opção “Quando conjunta, nunca seleciona colaboradores” e deu certo, atribuiu a todos os usuários do grupo.

Valeu [@Patrick\_Cavalcante](/u/patrick_cavalcante) pela força.

Abs

---
