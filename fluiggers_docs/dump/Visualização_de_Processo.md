# Visualização de Processo

> **Fonte:** [https://fluiggers.com.br/t/visualizacao-de-processo/1103](https://fluiggers.com.br/t/visualizacao-de-processo/1103)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 26/05/2022, 11:33
> **Visualizações:** 608 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Leonardo** (@leonardomarthiniano) — 26/05/2022, 11:33

Alguém sabe se existe alguma forma de colocar um usuário pra somente visualizar todas as etapas de um processo? (Se colocar como gestor do processo ou no grupo, esse usuário conseguirá assumir tarefas, e ele só precisa visualizar)

---

## Resposta #1

**Guilherme Beranger** (@Guilherme_Beranger) — 30/05/2022, 16:30 | ❤️ 1

Boa tarde amigo,

geralmente eu “seto” a visibilidade pelos eventos de formulário.
/\*\*

-   form.setVisibleById(“classFiscal”, false); = define a visibilidade da DIV “classFiscal” na atividade em questão = 0
    \*/

```auto
var state = getValue("WKNumState");
if (state == 0) {
		form.setVisibleById("classFiscal", false);
		form.setVisibleById("requisicao", false);
		form.setVisibleById("pcoCadastro", false);
		//-----------------------------------------------------------------
		// Carrega o nome do usuario logado - através do DataSet colleaguePK.colleagueId
		var usuarioId = getValue("WKUser");
		var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", usuarioId, usuarioId, ConstraintType.MUST);
		var datasetAttachment = DatasetFactory.getDataset("colleague", null, [const1], null);
		var usuario = datasetAttachment.getValue(0, "colleagueName");
		var emailusu = datasetAttachment.getValue(0, "mail");
		form.setValue("nomeSolicitante", usuario);
		form.setValue("emailSolicitante", emailusu);
	}
```

Você pode utilizar um evento de formulário ou processo para definir as visibilidades especificas, ai em cima é só um exemplo do jeito que eu utilizo

---

## Resposta #2

**Leonardo** (@leonardomarthiniano) — 01/06/2022, 15:14 | ❤️ 1

Obrigado, amigo. Agradeço a atenção

---
