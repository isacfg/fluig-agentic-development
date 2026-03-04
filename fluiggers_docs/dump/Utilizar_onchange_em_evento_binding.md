# Utilizar onchange em evento binding

> **Fonte:** [https://fluiggers.com.br/t/utilizar-onchange-em-evento-binding/2229](https://fluiggers.com.br/t/utilizar-onchange-em-evento-binding/2229)
> **Categoria:** Sem categoria
> **Criado em:** 27/09/2023, 15:22
> **Visualizações:** 263 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Bueno** (@Bueno) — 27/09/2023, 15:22

bindings: {
local: {
‘search’: \[‘click\_search’\],
‘gestor’: \[‘change\_gestor’\],
‘pedido’: \[‘click\_pedido’\],
},
global
preciso usar uma função change em um select, para capturar e tratar as alterações no select não estou conseguindo
na captura tambem nao obtive sucesso
var gestor = $(“#gestor”).val();

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/09/2023, 09:58

Esse select está no HTML ou é gerado dinamicamente por JS?

Os bindings da widget funcionam mais ou menos da seguinte forma:

**Local**: ele amarra o evento aos elementos que já estão declarados no HTML. Algo mais ou menos assim:

```javascript
bindings: {
    local: {
        "save-settings": ["click_saveSettings"]
    }
}

// Aí o Fluig fará a escuta do evento mais ou menos assim:

$("[data-save-settings]").on("click", saveSettings);
```

O problema é que deste jeito ele vai fazer a escuta dos eventos que já existem no HTML. Todos os elementos criados dinamicamente não serão pegos.

**Global**: já o global vai fazer a escuta do evento na página, pegando os elementos criados dinamicamente também. Tanto que é o indicado a utilizar quando está usando modais, por exemplo.

No global a declaração do evento seria mais ou menos da seguinte forma:

```javascript
bindings: {
    global: {
        "save-settings": ["click_saveSettings"]
    }
}

// Aí o Fluig fará a escuta do evento mais ou menos assim:

$(document).on("click", "[data-save-settings]", saveSettings);
```

Não sei se o Fluig escuta o evento na document mesmo ou em algum outro elemento mais restrito à página em si.

De qualquer forma deste jeito o evento está ouvindo um elemento mais global e pelo evento estar global ele vai pegar até os elementos criados dinamicamente.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Bueno** (@Bueno) — 28/09/2023, 13:33

Legal bruno me ajudou bastante na compreensão dos eventos local e global!
Vou deixar aqui como pesquisa para caso alguem enfrente a mesma dificuldade!
meu select foi auto incrementado pelo js e pelo $(“#gestor”).val(); não consegui fazer a coleta da opção a solução que consegui foi a seguinte:
var gestor = document.getElementById(“gestor”);
gestorTXT = gestor.options\[gestor.selectedIndex\].text;

agradeço a ajuda!

---
