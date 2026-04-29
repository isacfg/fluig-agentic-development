# StartProcess limpando campos do formulário

> **Fonte:** [https://fluiggers.com.br/t/startprocess-limpando-campos-do-formulario/1362](https://fluiggers.com.br/t/startprocess-limpando-campos-do-formulario/1362)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 28/09/2022, 10:02
> **Visualizações:** 399 | **Likes:** 3 | **Respostas:** 1

---

## Pergunta original

**Leonardo** (@leonardomarthiniano) — 28/09/2022, 10:02

Bom dia. Tenho um processo iniciado via StartProcess do Protheus, e tenho alguns campos no form já com value=“” preenchido. Quando vem do Protheus esses campos perdem o valor. Alguém sabe por que isso acontece?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 28/09/2022, 11:25 | ❤️ 1

Se está usando o método SOAP, dependendo da versão você precisa passar os valores que já estavam no formulário.

isso acontecia muito com o método SaveAndSendTask onde utiliza-lo era necessário passar todos os valores dos campos novamente.

caso esteja usando SOAP, migre para swagger REST

---

## Resposta #2

**Leonardo** (@leonardomarthiniano) — 04/10/2022, 11:04

É isso mesmo [@fluigor.com.br](/u/fluigor.com.br)

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/10/2022, 09:55 | ❤️ 2

A saveAndSendTask é uma aberração. Não sabia que outros métodos eram assim também.

Explicando, se você usar a saveAndSendTask sem passar cardData (passar `<cardData />`) ela avança de boa o processo sem alterar nada do formulário. Porém se passar cardData precisa colocar todos os campos do formulário, caso contrário os que não foram informados ficarão como nulo (mesmo efeito de colocar um disabled no formulário).

Tenho uma widget que manipula um processo e nela eu usava a updateCardData para atualizar somente os campos necessários (era uma etapa do processo) e em outro momento usava a saveAndSendTask para fazer o processo andar. Mas aí são 2 chamadas pra algo que 1 método poderia fazer sem tantos problemas.

---

## Resposta #4

**Leonardo** (@leonardomarthiniano) — 10/10/2022, 17:29

Bizarro, Bruno. Eu fiquei quebrando a cabeça com isso um tempão… Espero que encontrem uma solução para isso algum dia.

---
