# Inicialização de campo Zoom a partir de campo texto

> **Fonte:** [https://fluiggers.com.br/t/inicializacao-de-campo-zoom-a-partir-de-campo-texto/1204](https://fluiggers.com.br/t/inicializacao-de-campo-zoom-a-partir-de-campo-texto/1204)
> **Categoria:** Formulários
> **Criado em:** 30/07/2022, 20:34
> **Visualizações:** 910 | **Likes:** 0 | **Respostas:** 8

---

## Pergunta original

**Gilnei Schemes** (@Gilnei_Schemes) — 30/07/2022, 20:34

Olá preciso atribuir valor a um campo Zoom “Representante” a partir de campo texto com valor gerado no displayFields (para isso faço um teste, quando o usuário logado for do tipo representante, eu já defino o valor de “Representante”). O problema é que tenho outro campo zoom “Cliente” que é filtrado com base no primeiro campo zoom. Então meu problema é como setar o valor do primeiro campo zoom e atualizar o segundo zoom ao carregar o formulário sem nenhuma ação do usuário ?

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 01/08/2022, 13:39

reloadZoomFilterValues(“nomeDoCampo”, “CAMPO,VALOR”);

---

## Resposta #2

**Gilnei Schemes** (@Gilnei_Schemes) — 01/08/2022, 14:48

Obrigado Maurício, mas o reloadZoom só funciona com um valor selecionado no primeiro Zoom, o problema é como selecionar automaticamente o valor do primeiro zoom sem ação do usuário, ou seja, inicializando o valor do primeiro zoom automaticamente baseado em outro campo.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/08/2022, 14:58

Você pode fazer um evento que ao terminar de carregar a página você pega o valor do campo que precisa e seta o novo valor no zoom com o método setValue.

```javascript
$(function() {
    window["nome_zoom"].setValue($("#campo_procurado").val());
})
```

---

## Resposta #4

**Gilnei Schemes** (@Gilnei_Schemes) — 01/08/2022, 21:18

Obrigado Bruno, mas onde coloco esta função para ser executada após o carregamento do formulário ?

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/08/2022, 22:12

No html do seu formulário. Mais precisamente numa tag script.

Mas acho que no evento displayFields você pode dar um valor pro Zoom usando o `form.setValue`, então já poderia carregar o Zoom com o valor correto.

---

## Resposta #6

**Gilnei Schemes** (@Gilnei_Schemes) — 02/08/2022, 09:00

O problema é que nestas duas situações a função setSelectedZoomItem não é executada e o segundo campo Zoom não se atualiza, pois o selectedItem não existe neste caso, continuo na mesma.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/08/2022, 09:59

O segundo Zoom precisa de alguma outra informação além da informação do primeiro Zoom?

Porque se depende unicamente do valor do primeiro Zoom você já sabe qual é o valor do segundo Zoom e poderia configurar ambos de uma só vez, tanto no displayFields quanto no JS do formulário.

---

## Resposta #8

**Gilnei Schemes** (@Gilnei_Schemes) — 02/08/2022, 10:15

O valor do segundo Zoom é uma lista de dataset filtrada a partir do primeiro Zoom, por isso utilizo a função setSelectedZoomItem, não sei se existem alguma outra função ou forma de fazer este filtro no Zoom.

---

## Resposta #9

**Daniel Cabral Santos** (@daniel.cabral) — 10/08/2022, 08:38

O setSelectedZoomItem só vai funcionar depois do formulário carregado - o componente zoom inicializa em um certo ponto da carga - uma possibilidade é usar um evento após a carga do formulário ou até mesmo um setTimeout.

---
