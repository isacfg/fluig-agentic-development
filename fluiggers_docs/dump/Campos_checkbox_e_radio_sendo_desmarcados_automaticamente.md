# Campos checkbox e radio sendo desmarcados automaticamente

> **Fonte:** [https://fluiggers.com.br/t/campos-checkbox-e-radio-sendo-desmarcados-automaticamente/498](https://fluiggers.com.br/t/campos-checkbox-e-radio-sendo-desmarcados-automaticamente/498)
> **Categoria:** BPM
> **Criado em:** 07/06/2021, 16:25
> **Visualizações:** 1104 | **Likes:** 3 | **Respostas:** 1

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 07/06/2021, 16:25

Senhores bom dia,

estou com um problema que não sei como resolver. Possui um processo em que o fluxo está tudo ok, porém, em uma atividade inicial, existe um diversos campos do tipo checkbox, que o solicitante marcam eles, depois disso, ele para a atividade seguinte, e depois para uma terceira. Na terceira atividade, esses campos estão chegando todos desmarcados, e não tenho nenhum script para desmarcar, alguem ja passou por algo parecido?

---

## Resposta #1

**Cristiano Carvalho** (@Cristiano) — 07/06/2021, 21:36 | ❤️ 1

Vagner, boa noite.
Verifique se não está desabilitando (disabled) os checkbox na segunda atividade. O Fluig anula os valores dos campos desabilitados do formulário.

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 08/06/2021, 10:34

Realmente Cristiano, eu percorri todos os campos do tipo checkbox, e coloquei como disabled, conforme o código abaixo:

```javascript
$('[name^="area"]').each(function(indice, item){
			$(item).attr('disabled', true);
		});
```

eu preciso de alguma forma desativar esses campos checkbox, para que nas atividades seguintes, os usuários não possam desmarcar, tentei desta forma, não foi:

```javascript
$('[name^="area"]').each(function(indice, item){
			$(item).attr('readonly', true);
		});
```

alguma sugestão para eu resolver este problema+

---

## Resposta #3

**Vagner Duarte** (@vagner_duarte) — 08/06/2021, 11:12 | ❤️ 1

Pessoal, consegui resolver o problema da seguinte forma:

```javascript
$('[name^="area"]').each(function(indice, item){
			$(item).attr('onclick', 'return false');
		});
```

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/06/2021, 12:53 | ❤️ 1

Você pode economizar processamento JS trocando esse código todo por:

```javascript
$('[name^="area"]').attr('onclick', 'return false');
```

Assim você itera só 1 vez nos itens.

---

## Resposta #5

**Vagner Duarte** (@vagner_duarte) — 08/06/2021, 15:36

[@Bruno\_Gasparetto](/u/bruno_gasparetto) valeu pela dica, fiz o teste aqui e também funcionou.

---

## Resposta #6

**system** (@system) — 09/06/2021, 07:37

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
