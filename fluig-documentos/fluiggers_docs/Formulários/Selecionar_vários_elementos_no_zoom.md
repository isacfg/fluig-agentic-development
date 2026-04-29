# Selecionar vários elementos no zoom

> **Fonte:** [https://fluiggers.com.br/t/selecionar-varios-elementos-no-zoom/308](https://fluiggers.com.br/t/selecionar-varios-elementos-no-zoom/308)
> **Categoria:** Formulários
> **Tags:** `form`, `zoom`
> **Criado em:** 07/04/2021, 17:12
> **Visualizações:** 1241 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Marcella Tsangos** (@marcella_tsangos) — 07/04/2021, 17:12

Olá, pessoal. Boa tarde.

Há como selecionar vários elementos no zoom sem que o mesmo seja fechado após o clique?

Pois sempre que o usuário clica no elemento e zoom fecha e é necessário clicar novamente para selecionar outro elemento…

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/04/2021, 12:06

É um comportamento padrão do Zoom (e do Filter também). Aliás, comportamento do plugin utilizado pra customizar o select. Nunca vi opção de manter a caixa aberta.

Talvez até dê pra, na função executada após a seleção de algum item, disparar um click na caixa de seleção pra fazê-la abrir novamente.

---

## Resposta #2

**Marcella Tsangos** (@marcella_tsangos) — 08/04/2021, 13:25

Você teria algum exemplo?

Tentei com o click e com o trigger, mas não deu certo.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/04/2021, 09:14 | ❤️ 2

[@marcella\_tsangos](/u/marcella_tsangos), é possível disparar o click pra abrir o Zoom assim:

```javascript
function setSelectedZoomItem(item) {
    $(`#${item.inputId}`).next().find(".select2-selection").trigger("click");
}
```

---

## Resposta #4

**Marcella Tsangos** (@marcella_tsangos) — 09/04/2021, 09:22 | ❤️ 1

Obrigada, Bruno. Funcionou perfeitamente.

---

## Resposta #5

**system** (@system) — 10/04/2021, 01:23

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
