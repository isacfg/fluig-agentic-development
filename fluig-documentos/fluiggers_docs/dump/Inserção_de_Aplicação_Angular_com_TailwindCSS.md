# Inserção de Aplicação Angular com TailwindCSS

> **Fonte:** [https://fluiggers.com.br/t/insercao-de-aplicacao-angular-com-tailwindcss/3034](https://fluiggers.com.br/t/insercao-de-aplicacao-angular-com-tailwindcss/3034)
> **Categoria:** Widgets
> **Tags:** `form`, `dataset`, `fluigapi`
> **Criado em:** 21/10/2024, 09:45
> **Visualizações:** 84 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Matheus Emiliano** (@ssnt_mts) — 21/10/2024, 09:45

Bom dia, estou enfrentando problemas ao utilizar uma aplicação Angular dentro do Fluig.
Já foi feita uma aplicação com Angular e Tailwind dentro do Fluig com sucesso, porém a outra, está conflitando com estilos do tailwind e não renderizam por nada, com exceção de um gráfico feito com apexCharts.

Erro:

```auto
correu um erro ao processar a widget: widgetIntranet_24996 widgetIntranet.instance() TypeError: a.init is not a function
    at Object.instance (wcm_global_pt_BR.js?v=1.8.1-240206:139:475)
    at HTMLDivElement.<anonymous> (wcm_global_pt_BR.js?v=1.8.1-240206:60:371)
    at Function.each (jquery-3.6.3.min.js?v=1.8.1-240206:2:3003)
    at E.fn.init.each (jquery-3.6.3.min.js?v=1.8.1-240206:2:1481)
    at TLib.loadWidgets (wcm_global_pt_BR.js?v=1.8.1-240206:59:62)


(anônimo) @ wcm_global_pt_BR.js?v=1.8.1-240206:60
main.js:7 Array(22)
polyfills.js:1  TypeError: Cannot read properties of undefined (reading 'type')
    at y.value (chunk-ZP3ZJWI7.js:25:625)
    at y.value (chunk-ZP3ZJWI7.js:25:9417)
    at new y (chunk-ZP3ZJWI7.js:121:40071)
    at main.js:7:191883
    at f.invoke (polyfills.js:1:6443)
    at t.run (polyfills.js:1:1735)
    at e.runOutsideAngular (main.js:7:27649)
    at e.<anonymous> (main.js:7:191861)
    at Generator.next (<anonymous>)
    at k (chunk-AIZVJUQQ.js:1:542)
t.onUnhandledError @ polyfills.js:1
chunk-ZP3ZJWI7.js:114  Unable to preventDefault inside passive event listener invocation.
value @ chunk-ZP3ZJWI7.js:114
main.js:7 Array(34)
main.js:7 Exibindo colaborador: Object
chunk-ZP3ZJWI7.js:114  Unable to preventDefault inside passive event listener invocation.
value @ chunk-ZP3ZJWI7.js:114
style.css:1


        Failed to load resource: the server responded with a status of 404 (Not Found)
main.js:7 Exibindo colaborador: Object
main.js:7 Exibindo colaborador: Object
chunk-ZP3ZJWI7.js:114  Unable to preventDefault inside passive event listener invocation.
```

---
