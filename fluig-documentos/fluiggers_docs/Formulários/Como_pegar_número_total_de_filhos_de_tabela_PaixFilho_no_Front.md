# Como pegar número total de "filhos" de tabela PaixFilho no Front

> **Fonte:** [https://fluiggers.com.br/t/como-pegar-numero-total-de-filhos-de-tabela-paixfilho-no-front/258](https://fluiggers.com.br/t/como-pegar-numero-total-de-filhos-de-tabela-paixfilho-no-front/258)
> **Categoria:** Formulários
> **Criado em:** 30/03/2021, 14:04
> **Visualizações:** 658 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 14:04 | ❤️ 1

olá pessoal, boa tarde!

Como posso pegar o total de “filhos” adicionados à uma tabela PaixFilho através do javascript do formulário ?

---

## Resposta #1

**Victor Castro** (@victorcastro) — 30/03/2021, 14:58 | ❤️ 1

```javascript
var qtd = 0;
$('[name^="nomeDoCampo___"]').each(function(){
	var id = $(this).attr('id');
	var index = id.substring(id.indexOf('___') + 3);

	console.log(id);
	qtd++;
});
```

Quando você usa o **name^=“nome\_\_\_”** no selector, você tá pegando o campo que começa com o nome “**nome\_\_\_**”. Já precisei usar também o name\*=“nome\_\_\_”, que pega todos os campos que o name CONTÉM a string “nome\_\_\_”.

Dá pra entender esses e outros selectors do jQuery aqui :arrow_down:

[https://api.jquery.com/category/selectors/](https://api.jquery.com/category/selectors/)

---

## Resposta #2

**Julio Kriger** (@Julio_Kriger) — 31/03/2021, 15:43 | ❤️ 3

Hola!

con $(’\[name^=“nomeDoCampo\_\_\_”\]’).length - 1 tenes la cantidad de filas.

Saludos

---
