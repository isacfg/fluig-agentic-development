# Problemas com replace

> **Fonte:** [https://fluiggers.com.br/t/problemas-com-replace/1301](https://fluiggers.com.br/t/problemas-com-replace/1301)
> **Categoria:** Formulários
> **Tags:** `dataset`
> **Criado em:** 08/09/2022, 13:29
> **Visualizações:** 329 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Leandro** (@leandrojldp) — 08/09/2022, 13:29

Estou tendo problemas na utilização do replace. Para remover caracteres como virgulas, barras funcionou bem. Porém quando tendo trocar o valor Ç por C ou Ã por A não esta dando certo.

Alguém teria uma dica para poder compartilhar ?

var csColleagueId = DatasetFactory.createConstraint(“groupPK.groupId”, hAPI.getCardValue(‘SOLICITANTE\_SETOR’).replace(’ ‘,’‘).replace(’-‘,’‘).replace(’(‘,’‘).replace(’)‘,’‘).replace(’/‘,’‘).replace(‘Ç’,‘C’).replace(‘Ã’,‘A’), hAPI.getCardValue(‘SOLICITANTE\_SETOR’).replace(’ ‘,’‘).replace(’-‘,’‘).replace(’(‘,’‘).replace(’)‘,’‘).replace(’/‘,’').replace(‘Ç’,‘C’).replace(‘Ã’,‘A’), ConstraintType.MUST);

---
