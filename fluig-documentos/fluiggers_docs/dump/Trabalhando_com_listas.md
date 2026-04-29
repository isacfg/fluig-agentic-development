# Trabalhando com listas

> **Fonte:** [https://fluiggers.com.br/t/trabalhando-com-listas/366](https://fluiggers.com.br/t/trabalhando-com-listas/366)
> **Categoria:** Formulários
> **Criado em:** 15/04/2021, 08:24
> **Visualizações:** 635 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 15/04/2021, 08:24

Alguém já trabalhou com listas no fluig?

Por exemplo: Tenho abas na minha aplicação, e queria algo genérico. Ou seja, que o nome dessas abas viessem de uma lista que eu cadastraria no fluig.

Olhando a documentação, disponibilizaram a seguinte rota para consumir o conteúdo de uma lista: [https://fdn.fluig.com/ecm/api/rest/ecm/metaList/findListById/25](https://fdn.fluig.com/ecm/api/rest/ecm/metaList/findListById/25). Porém essa rota não retorna informações sobre os registros contidos na lista, retornando apenas informações sobre a lista em si (nome, id, ).![image](https://fluiggers.com.br/uploads/default/original/1X/02140ef5e48eaac282e43675df768ffbb5ecc6a5.png)

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 20/04/2021, 11:41 | ❤️ 1

E se você criar um dataset que consulta essa lista, e consumir esse dataset?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 20/04/2021, 13:10

Opa, o problema é justamente esse. A forma de consultar essa lista. Na documentação, como descrevi em cima tem aquela rota, porém pelo teste que fiz não atende ao objetivo.
O que tô fazendo atualmente, é mais ou menos o que você disse: cadastro os parâmetros em um dataset e consumo esses valores pré-cadastrados. Mas ainda fiquei curioso, sobre essa forma de usar lista que não consegui implementar.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Daniel ** (@daniel_fmartins) — 29/04/2021, 07:49 | ❤️ 1

Como não consegui consultar a lista via REST, a solução foi criar uma form para parâmetros, salvá-los em um dataset e consumir esses dados onde eu necessitava.

---

## Resposta #4

**system** (@system) — 29/04/2021, 23:50

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
