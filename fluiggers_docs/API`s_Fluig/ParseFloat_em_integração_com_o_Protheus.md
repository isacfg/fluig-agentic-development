# ParseFloat em integração com o Protheus

> **Fonte:** [https://fluiggers.com.br/t/parsefloat-em-integracao-com-o-protheus/1251](https://fluiggers.com.br/t/parsefloat-em-integracao-com-o-protheus/1251)
> **Categoria:** API`s Fluig
> **Criado em:** 24/08/2022, 17:51
> **Visualizações:** 432 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Leonardo** (@leonardomarthiniano) — 24/08/2022, 17:51

Estou com um problema em uma integração com o Protheus. Preciso enviar o id da solicitação do Fluig em formato inteiro, porém ao converter estou obtendo resultado indesejado.

Estou utilizando assim no script de integração:

“numeroPedido” : parseFloat(String (hAPI.getCardValue(“idProcess”))),

E no JSON está ficando assim:

“numeroPedido”: 3886.0,

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 26/08/2022, 09:03 | ❤️ 1

tenta com parseInt():

```auto
“numeroPedido” : parseInt(String (hAPI.getCardValue(“idProcess”))),
```

---

## Resposta #2

**Leonardo** (@leonardomarthiniano) — 05/09/2022, 17:53 | ❤️ 1

Deu bom demais!! Valeu Daniel Cabral

---
