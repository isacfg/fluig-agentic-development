# Validar usuários de papel ou grupo via workflow

> **Fonte:** [https://fluiggers.com.br/t/validar-usuarios-de-papel-ou-grupo-via-workflow/2333](https://fluiggers.com.br/t/validar-usuarios-de-papel-ou-grupo-via-workflow/2333)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 31/10/2023, 16:35
> **Visualizações:** 192 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 31/10/2023, 16:35

Boa tarde Pessoal,

Gostaria de pular uma etapa do processo caso o papel ou grupo definido para esta estiver sem usuários.

Alguém tem ideia de como validar isso no processo?

Obrigado!

---

## Resposta #1

**Augusto Bem-Haja** (@Augusto_Bem-Haja) — 31/10/2023, 17:36

Olá Allan,

Uma ideia seria checar o papel ou grupo num evento da atividade anterior a que vc precisa testar. Uma sugestão seria o beforeTaskSave, e caso ela identificasse que o papel ou grupo está vazio vc seta um campo oculto no formulário.
Este campo oculto vc pode checar num ponto de decisão no fluxo.

Augusto

---

## Resposta #2

**Allan Reichert** (@allan.reichert) — 01/11/2023, 11:20

Obrigado!

Acabei fazendo via modal:

function contaUsuariosPapel(papel){
var c1 = DatasetFactory.createConstraint(‘workflowColleagueRolePK.companyId’, ‘1’, ‘1’, ConstraintType.MUST)
var c2 = DatasetFactory.createConstraint(‘workflowColleagueRolePK.roleId’, papel, papel, ConstraintType.MUST)
var dsRole = DatasetFactory.getDataset(‘workflowColleagueRole’, null, \[c1, c2\], null)
return parseFloat(dsRole.values.length);
}

chamei na condicional do processo com o código do papel
contaUsuariosPapel(‘papel\_da\_atividade’) > 0

---
