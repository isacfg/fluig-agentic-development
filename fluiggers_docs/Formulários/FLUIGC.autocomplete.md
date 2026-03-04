# FLUIGC.autocomplete

> **Fonte:** [https://fluiggers.com.br/t/fluigc-autocomplete/497](https://fluiggers.com.br/t/fluigc-autocomplete/497)
> **Categoria:** Formulários
> **Criado em:** 07/06/2021, 12:20
> **Visualizações:** 1692 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 07/06/2021, 12:20

Pessoal bom dia!
Estou usando a função FLUIGC.autocomplete com Ajax, porém toda vez que o formulário é salvo ou enviado para uma proxima etapa, o campo que utiliza o autocomplete fica em branco.

Segue o código

```auto
var autocompleteAGNs = FLUIGC.autocomplete('#permissaoAcesso', {
			source : substringMatcher(agnsFinal),
			name : 'agns',
			displayKey : 'description',
			type : 'tagAutocomplete',
			highlight : true
		});
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 07/06/2021, 16:58

Pessoal, alterei o type de tagAutocomplete para autocomplete e deu certo.

```javascript
var autocompleteAGNs = FLUIGC.autocomplete('#permissaoAcesso', {
			source : substringMatcher(agnsFinal),
			name : 'agns',
			displayKey : 'description',
			type : 'autocomplete',
			highlight : true
		});
```

---

## Resposta #2

**system** (@system) — 08/06/2021, 08:58

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
