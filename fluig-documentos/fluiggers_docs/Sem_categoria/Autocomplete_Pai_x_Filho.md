# Autocomplete Pai x Filho

> **Fonte:** [https://fluiggers.com.br/t/autocomplete-pai-x-filho/653](https://fluiggers.com.br/t/autocomplete-pai-x-filho/653)
> **Categoria:** Sem categoria
> **Criado em:** 15/09/2021, 19:28
> **Visualizações:** 651 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 15/09/2021, 19:28

Pessoal boa noite!
Preciso criar um autocomplete para um campo pai x filho. Alguém sabe como isso poderia ser feito?
O exemplo abaixo é o campo que eu preciso adicionar os index do pai x filho

```auto
var autocompleteGrupos = FLUIGC.autocomplete(
		'#grupoProdutoA, #grupoProdutoR',
		{
			source : substringMatcher(gruposFinal),
			name : 'grupos',
			displayKey : 'description',
			type : 'autocomplete',
			highlight : true
	});
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 17/09/2021, 20:33 | ❤️ 1

Pessoal, consegui resolver. Bem simples a solução.

```auto
var nextIndex = wdkAddChild('recorrentes');

var autocompleteGrupos = FLUIGC.autocomplete(
			"#grupoProdutoA___" + nextIndex,
			{
				source : substringMatcher(gruposFinal),
				name : 'grupos',
				displayKey : 'description',
				type : 'autocomplete',
				highlight : true
		});
```

---

## Resposta #2

**system** (@system) — 18/09/2021, 12:33

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
