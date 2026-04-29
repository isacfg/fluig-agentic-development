# Validação do formulário pai e filho

> **Fonte:** [https://fluiggers.com.br/t/validacao-do-formulario-pai-e-filho/635](https://fluiggers.com.br/t/validacao-do-formulario-pai-e-filho/635)
> **Categoria:** Formulários
> **Criado em:** 31/08/2021, 16:42
> **Visualizações:** 1147 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 31/08/2021, 16:42

Boa tarde pessoal. Hoje me bati com um problema na tabela pai e filho, na validação pra ser mais preciso.
O que acontece:
\- O usuário adiciona um item ao formulário;
\- O formulário recebe o campo “item\_\_\_1”;
\- O usuário adiciona mais campos;
\- O usuário deleta o primeiro campo
\- Ao enviar o formulário gera o erro: **O preenchimento do campo item 1 é obrigatório.**

Como estou fazendo a validação:

```auto
var indexes = form.getChildrenIndexes("tblitens");

	for (var i = 0; i < indexes.length; i++) {
		var ii = i + 1;
		validateInput("id_produto___" + ii, "item " + ii);
		validateInput("quantidadeReq___" + ii, "quantidade do item " + ii);
		validateInput("quantidadeApro___" + ii, "quantidade aprovada do item " + ii);
	}
```

Bom, como podem perceber, sempre que se deleta o primeiro item, o validate gera o erro, pois o for irá sempre procurar pelo índice 1, ou mesmo um subsequente. Existe uma forma melhor de fazer essa validação por índice em vez por for?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 31/08/2021, 16:49 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/mauriciolanner/48/664_2.png) mauriciolanner:
>
> > ```auto
> > var indexes = form.getChildrenIndexes("tblitens");
> >
> > 	for (var i = 0; i < indexes.length; i++) {
> > 		var ii = i + 1;
> > 		validateInput("id_produto___" + ii, "item " + ii);
> > 		validateInput("quantidadeReq___" + ii, "quantidade do item " + ii);
> > 		validateInput("quantidadeApro___" + ii, "quantidade aprovada do item " + ii);
> > 	}
> > ```

Fala aí rapaz, beleza?

tenta isso

```auto
var indexes = form.getChildrenIndexes("tblitens");
for (var i = 0; i < indexes.length; i++) {
	var ii = i + 1;
	validateInput("id_produto___" + indexes[i], "item " + ii);
	validateInput("quantidadeReq___" + indexes[i], "quantidade do item " + ii);
	validateInput("quantidadeApro___" + indexes[i], "quantidade aprovada do item " + ii);
}
```

---

## Resposta #2

**system** (@system) — 01/09/2021, 19:20

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
