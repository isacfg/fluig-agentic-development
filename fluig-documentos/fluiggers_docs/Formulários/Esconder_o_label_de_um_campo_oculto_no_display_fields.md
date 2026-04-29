# Esconder o label de um campo oculto no display fields

> **Fonte:** [https://fluiggers.com.br/t/esconder-o-label-de-um-campo-oculto-no-display-fields/242](https://fluiggers.com.br/t/esconder-o-label-de-um-campo-oculto-no-display-fields/242)
> **Categoria:** Formulários
> **Criado em:** 29/03/2021, 14:23
> **Visualizações:** 734 | **Likes:** 9 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 29/03/2021, 14:23 | ❤️ 8

Para esconder um label de um campo oculto e simples. Basta configurar a propriedade for do label e usar um script no ***document ready***

```auto
<label for="email_solicitante"><strong>E-mail Solicitante</strong></label>
```
```javascript
$( document ).ready(function(){
    $('input').each(function(){
    	if($(this).is(":hidden")) {
    		$("label[for='"+this.id+"']").hide();
        }
    });
});
```

Desta forma basta esconder o campo pelo fluig e o label esconde automaticamente.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 19/09/2025, 11:20 | ❤️ 1

Uma nova abordagem nos label

```javascript
$('input:hidden, textarea:hidden, select:hidden').each(function() {
        $("label[for='" + this.id + "']").hide();
    });
```

---
