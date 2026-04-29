# Como recuperar idioma selecionado via javascript

> **Fonte:** [https://fluiggers.com.br/t/como-recuperar-idioma-selecionado-via-javascript/1098](https://fluiggers.com.br/t/como-recuperar-idioma-selecionado-via-javascript/1098)
> **Categoria:** Widgets
> **Criado em:** 24/05/2022, 09:04
> **Visualizações:** 460 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Vaz** (@Vaz) — 24/05/2022, 09:04

Olá, bom dia!

Existe alguma possibilidade de identificar qual idioma está selecionado pelo usuário via javascript?

Falo isso, pois tenho um gráfico dentro de uma widget feito com javascript onde eu preciso dar os nomes de acordo com o idioma que se está selecionado pelo usuário.

Tentei utilizar a função ${i18n.getTranslation(‘XXX’)} dentro do javascript, mas não obtive êxito.

Podem me ajudar por favor?

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 24/05/2022, 13:17

Tenta usar

```javascript
window.wcmlocation
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Vaz** (@Vaz) — 24/05/2022, 14:30 | ❤️ 3

Consegui recuperar o dado em questão utilizando o trecho de código abaixo:

WCMAPI.getLocale()

---
