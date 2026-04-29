# Função ao utilizar o atributo deletebutton de uma Table

> **Fonte:** [https://fluiggers.com.br/t/funcao-ao-utilizar-o-atributo-deletebutton-de-uma-table/266](https://fluiggers.com.br/t/funcao-ao-utilizar-o-atributo-deletebutton-de-uma-table/266)
> **Categoria:** BPM
> **Tags:** `form`
> **Criado em:** 30/03/2021, 17:30
> **Visualizações:** 611 | **Likes:** 4 | **Respostas:** 1

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 30/03/2021, 17:30

Pessoal boa tarde!

É possível criar uma função quando o usuário usa o atributo delebutton de uma table? No caso a Table envolve o conceito PaixFilho.
Eu criei um input que lista a quantidade registros na table (Registros vem de uma API). Porém, quando um dos registros é apagado, eu preciso atualizar o input.

Obrigado!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 31/03/2021, 08:47 | ❤️ 3

Olá, o melhor jeito é customizar o botão de excluir da pai e filho

Para ocultar o botão nativo adicione a table: nodeletebutton

```javascript
<table tablename="name-table" class="table table-hover"  nodeletebutton="true">
```

Para criar um botão igual ao nativo

```javascript
<i> class=“fluigicon fluigicon-trash fluigicon-md” style=“cursor: pointer;” onclick=“removeRow(this)”> </i>
```

Criar a função removeRow()

```javascript
function removeRow(element) {
		/*

			seu código aqui

		*/

		/* Função para remover a linha */
		fnWdkRemoveChild(element)
	}
```

Espero que ajude.
Abs

---

## Resposta #2

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 31/03/2021, 09:08 | ❤️ 1

Obrigado [@eduardo.vantini](/u/eduardo.vantini) . Deu certo!

---
