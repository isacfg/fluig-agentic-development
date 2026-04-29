# Serviço REST para iniciar o processo

> **Fonte:** [https://fluiggers.com.br/t/servico-rest-para-iniciar-o-processo/277](https://fluiggers.com.br/t/servico-rest-para-iniciar-o-processo/277)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 31/03/2021, 16:00
> **Visualizações:** 2201 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 31/03/2021, 16:00

Pessoal boa tarde!

Estou tentando configurar um serviço REST do Fluig para iniciar um processo através de um dataset customizado.

Estou tentando utilizar a seguinte requisição:

[http://meufluig:8080/process-management/api/v2/processes/fluig\_tabela\_precos/start](http://meufluig:8080/process-management/api/v2/processes/fluig_tabela_precos/start)

Autenticação e deixei como BASIC. Adicionei o meu login e senha.

Porém, quando eu vou testar o serviço, o Fluig retorna a seguinte mensagem: {“detailedMessage”:“É necessário efetuar logon”,“code”:“FDNUnauthenticatedAccessDeniedException”,“helpUrl”:null,“details”:null,“message”:“Acesso não autorizado.”}

Alguém sabe se é necessário ativar algum serviço ou algo do tipo? Obrigado!

---

## Resposta #1

**Wasley Santos** (@Wasley_Santos) — 31/03/2021, 16:32

EU acho que no serviço você precisa colocar que a autenticação é FLUIG API. Eu uso uma para realizar substitutos e coloco o tipo de autenticação como Fluig API.

---

## Resposta #2

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 31/03/2021, 17:57

Fala Wasley blz? Eu tentei tb colocando Fluig API, porém exibe essa msg: “{“detailedMessage”:“NotAllowedException”,“code”:“NotAllowedException”,“helpUrl”:null,“details”:\[\],“message”:“NotAllowedException”}”

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 01/04/2021, 08:52 | ❤️ 2

Bom dia,

Você não pode usar basic tem que usar oauth 1.0

---
