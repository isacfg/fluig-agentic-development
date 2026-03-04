# Quantidades de Valores no Campo Zoom - Evento de Processo

> **Fonte:** [https://fluiggers.com.br/t/quantidades-de-valores-no-campo-zoom-evento-de-processo/583](https://fluiggers.com.br/t/quantidades-de-valores-no-campo-zoom-evento-de-processo/583)
> **Categoria:** BPM
> **Criado em:** 27/07/2021, 14:09
> **Visualizações:** 1024 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Gabriel Pereira** (@gabriel.pereira) — 27/07/2021, 14:09

Boa tarde!
Preciso fazer um FOR com base na quantidade de itens informados em um campo Zoom do formulário.

Como posso fazer o SPLIT nesses dados informados? É criando um array ou faço o split por algum caractere específico?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/07/2021, 18:23 | ❤️ 3

Você pretende fazer isso onde? No front (navegador) ou back (servidor)?

No Front, com a JQuery, só fazer:

```javascript
let items = $("#id_do_seu_campo_zoom").val(); // retornará um array
console.log(items.length); // o total de itens selecionados.
```

No servidor acho que um split no caractere `\u0018` vai resolver. Ao menos é esse caractere que veio quando consultei um Zoom com múltipla escolha.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 28/07/2021, 10:12

Campo zoom ou campo pai x filho?
se for o zoom

```javascript
function setSelectedZoomItem(selectedItem) {
    selectedItem.inputId('meu campo')
}
```

Se for um pai filho você pode usar o codigo abaixo

```auto
$("input[id^='meucampo___']").each(function (index) {
	var id_do_filho = $(this).attr("id").split("___")[1];
}
```

---

## Resposta #3

**Gabriel Pereira** (@gabriel.pereira) — 04/08/2021, 17:05 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > split no caractere `\u0018`

Obrigado Bruno!
Consegui via split no caractere \\u0018

---

## Resposta #4

**Gabriel Pereira** (@gabriel.pereira) — 05/08/2021, 09:06

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
