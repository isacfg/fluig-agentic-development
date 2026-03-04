# Mecanismo de atribuição customizado - atribuir ao usuário especifico do papel sem necessidade de assumir tarefa

> **Fonte:** [https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado-atribuir-ao-usuario-especifico-do-papel-sem-necessidade-de-assumir-tarefa/2900](https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado-atribuir-ao-usuario-especifico-do-papel-sem-necessidade-de-assumir-tarefa/2900)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 24/07/2024, 10:57
> **Visualizações:** 117 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Fernando Ricardo de Almeida** (@feralm) — 24/07/2024, 10:57

Sou iniciando no fluig e estou com a seguinte situação
Tenho grupo: aprovadores com todos aprovadores
Tenho papel que é individual para cada usuário exemplo: Gerente-TI / Gerente-Financeiro (com apenas um usuário em cada papel)

Creio um mecanismo de atribuição customizado para atribuir ao papel do aprovador correto concatenando Gerente + campo setor no formulário.

function resolve(process,colleague){

var userList = new java.util.ArrayList();
var setor = ‘Gerente-’ + hAPI.getCardValue(‘departamento’);

userList.add(‘Pool:Role:’+setor);

return userList;

}

Como são gestores preciso que a tarefa atribuída diretamente ao usuário e fique disponível para aprovação no my approval, mas isso não ocorre pois se entrar via portal precisa assumir a tarefa, mesmo tendo apenas um usuário no papel.

atribuir diretamente ao usuário do papel sem necessidade de assumir a tarefa

Tentei solução abaixo mais não rolou

function resolve(process, colleague) {

```
var userList = new java.util.ArrayList();
// var state = getValue("WKCurrentState");

var role = 'Gerente-' + hAPI.getCardValue('departamento');

var c1 = DatasetFactory.createConstraint('workflowColleagueRolePK.colleagueId', usuario, usuario, ConstraintType.MUST)
var c2 = DatasetFactory.createConstraint('workflowColleagueRolePK.companyId', '1', '1', ConstraintType.MUST)
var c3 = DatasetFactory.createConstraint('workflowColleagueRolePK.roleId', role, role, ConstraintType.MUST)


var dsRole = DatasetFactory.getDataset('workflowColleagueRole', null, [c1, c2, c3], null)

if (dsRole.values.length != 0) {
	for (var i = 0; i < dsRole.rowsCount; i++) {

		userList.add(dsRole.getValue(i, "workflowColleagueRolePK.colleagueId"));

	}
}

return userList;
```

}

---
