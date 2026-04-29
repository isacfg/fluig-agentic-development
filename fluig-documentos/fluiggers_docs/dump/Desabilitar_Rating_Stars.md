# Desabilitar Rating Stars

> **Fonte:** [https://fluiggers.com.br/t/desabilitar-rating-stars/451](https://fluiggers.com.br/t/desabilitar-rating-stars/451)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 18/05/2021, 16:19
> **Visualizações:** 489 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Amanda Puga** (@AmandaPuga) — 18/05/2021, 16:19

0
down
Estou com um formulário que utiliza o FLUIGC.stars. Um em cada atividade.

O problema é que nas atividades posteriores esse voto precisa ficar “congelado” para que ninguém edite.

Exemplo: na atividade 1 o usuário X dá 3 estrelas. na atividade 2 o usuário Y pode ser o voto dado pelo usuário X, mas não pode alterar/editar.

No momento qualquer um, em qualquer atividade consegue alterar as estrelas dadas na atividade anterior.

Preciso desabilitar isso em determinadas atividades.

Alguém sabe como fazer?

Campos validation e comments desabilitados.

![enable](https://fluiggers.com.br/uploads/default/original/1X/8015d01fc60dbbccaf2b9aea1e1e82b12178df01.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 18/05/2021, 16:40 | ❤️ 1

tenta com CSS:

CSS:

```auto
.desabilita{
			opacity: 0.6;
			filter: alpha(opacity=60);
			pointer-events: none;
			background-color: #f3f3f3;

		}
```

JS:

```auto
$('.classeDoStars').addClass("desabilita");
```

---

## Resposta #2

**Amanda Puga** (@AmandaPuga) — 18/05/2021, 19:01 | ❤️ 1

Show de bola! Funcionou.

Obrigada;

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 18/05/2021, 22:39

créditos ao [@alefvinicius](/u/alefvinicius) , acho que essa foi ele que bolou.

---

## Resposta #4

**system** (@system) — 19/05/2021, 14:40

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
