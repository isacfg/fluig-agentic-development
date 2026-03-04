# Apelo para Votação em Sugestão de Melhoria

> **Fonte:** [https://fluiggers.com.br/t/apelo-para-votacao-em-sugestao-de-melhoria/1776](https://fluiggers.com.br/t/apelo-para-votacao-em-sugestao-de-melhoria/1776)
> **Categoria:** Ambiente Fluig
> **Tags:** `form`, `processo`
> **Criado em:** 21/03/2023, 15:52
> **Visualizações:** 321 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Willian Mascimiano** (@wmsilva191) — 21/03/2023, 15:52

Existe esta sugestão de melhoria que trata de utilizar caracteres coringas (%) para consultar dados do dataset com objetivo de retornar informações como seria no LIKE do Banco de Dados.

Solicito à Comunidade Fluiggers e àqueles que puderem contribuir com um voto neste recurso, com objetivo de melhorar o componente ZOOM para que possamos otimizar a busca de valores dentro dos campos ZOOM.

[https://centraldeatendimento.totvs.com/hc/pt-br/community/posts/360050998174-TOTVS-Fluig-TOTVS-Fluig-Plataforma-1-7-Portal-Campo-Zoom-Uso-caractere-coringa-para-se-tornar-o-operador-LIKE](https://centraldeatendimento.totvs.com/hc/pt-br/community/posts/360050998174-TOTVS-Fluig-TOTVS-Fluig-Plataforma-1-7-Portal-Campo-Zoom-Uso-caractere-coringa-para-se-tornar-o-operador-LIKE)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/03/2023, 09:15

Interessante, mas acho que nessa situação deveríamos informar ao Zoom que a pesquisa realizada deve ser LIKE e aí sim ele permitir o uso do %

---

## Resposta #2

**Willian Mascimiano** (@wmsilva191) — 24/03/2023, 15:15

Me envia o exemplo, por favor, pois dos meus testes eu não consegui executar. Por mais que eu fizesse direto na customização do DATASET a busca apenas por %, o sistema ainda sim não executa em ZOOM, porém o DATASET respeita a busca.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/03/2023, 09:31

No dataset customizado que faço o like na verdade ele utiliza um WS de consulta SQL do RM e lá tem o Like.

Mas incrivelmente se colocar % no Zoom ele não interpreta mesmo. Então não funciona.

---
