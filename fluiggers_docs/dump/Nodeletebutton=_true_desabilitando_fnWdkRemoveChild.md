# Nodeletebutton="true" desabilitando fnWdkRemoveChild

> **Fonte:** [https://fluiggers.com.br/t/nodeletebutton-true-desabilitando-fnwdkremovechild/461](https://fluiggers.com.br/t/nodeletebutton-true-desabilitando-fnwdkremovechild/461)
> **Categoria:** Sem categoria
> **Criado em:** 24/05/2021, 17:55
> **Visualizações:** 1197 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 24/05/2021, 17:55

Pessoal boa tarde!

Tenho um formulário onde criei uma table pai e filho e removi o botão de delete. Criei a função abaixo para deletar os filhos da Table, assim que o menu que fica a table é clicado. Porém, ao adicionar o nodeletebutton=“true” a função parou de funcionar. Alguém sabe o motivo?

```javascript
$('#adesoesMI tbody tr').not(':first').each(function(count,tr){
	    fnWdkRemoveChild($(this).find('i')[0]);
	});
```

A table está assim:

```auto
<table class="table table-striped" tablename="adesoesMI" id="adesoesMI" noaddbutton="true" nodeletebutton="true">
```

Obrigado!

---

## Resposta #1

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 24/05/2021, 20:15

Pessoal.

Quebrando a cabeça eu mesmo resolvi hehe.

Adicionei o customFnDelete="fnCustomDeleteAdesoes(this) e criei uma função para deletar

```auto
$('#adesoesMI > tbody > tr:gt(0)').each(function fnCustomDeleteAdesoes(oElement){
		 fnWdkRemoveChild(this);
	});
```

Caso alguém tenha alguma solução mais plausível, pode publicar.
Obrigado!

---
