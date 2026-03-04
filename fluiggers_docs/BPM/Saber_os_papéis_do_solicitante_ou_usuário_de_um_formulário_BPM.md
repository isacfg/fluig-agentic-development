# Saber os papéis do solicitante ou usuário de um formulário BPM

> **Fonte:** [https://fluiggers.com.br/t/saber-os-papeis-do-solicitante-ou-usuario-de-um-formulario-bpm/1927](https://fluiggers.com.br/t/saber-os-papeis-do-solicitante-ou-usuario-de-um-formulario-bpm/1927)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`, `papel`
> **Criado em:** 17/05/2023, 17:39
> **Visualizações:** 406 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Antônio Nogueira** (@Antonio_Nogueira) — 17/05/2023, 17:39

Olá,

Gostaria de saber se há alguma função para puxar a informação dos papeis de um usuário, seja em evento de formulário, de processo ou via main.js?

---

## Resposta #1

**Marco Comassetto** (@marcommas) — 18/05/2023, 10:14 | ❤️ 1

Você pode consultar o dataset workflowColleagueRole (para papel) ou colleagueGroup (para grupo), filtrando pela matricula do usuário.
Listará todos os papéis ou grupos que este usuário participa.
[https://tdn.totvs.com/display/public/fluig/Datasets+internos](https://tdn.totvs.com/display/public/fluig/Datasets+internos)

---

## Resposta #2

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/05/2023, 09:04

Olá… você pode usar o dataset interno workflowColleagueRole. Exemplo para verificar se o usuário pertence ao papel.

```auto
function checkRole(role, usuario) {
				var c1 = DatasetFactory.createConstraint('workflowColleagueRolePK.colleagueId', usuario, usuario, ConstraintType.MUST)
				var c2 = DatasetFactory.createConstraint('workflowColleagueRolePK.companyId', '1', '1', ConstraintType.MUST)
				var c3 = DatasetFactory.createConstraint('workflowColleagueRolePK.roleId', role, role, ConstraintType.MUST)

				var dsRole = DatasetFactory.getDataset('workflowColleagueRole', null, [c1, c2, c3], null)

				if (dsRole.values.length != 0) {
					return true
				} else {
					return false
				}
			}
```

Aí você adapta para o que você precisa aí… na doc que o [@marcommas](/u/marcommas) mandou tem mais detalhes.

Boa sorte… abs.

---
