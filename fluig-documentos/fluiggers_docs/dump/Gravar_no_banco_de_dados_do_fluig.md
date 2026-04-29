# Gravar no banco de dados do fluig

> **Fonte:** [https://fluiggers.com.br/t/gravar-no-banco-de-dados-do-fluig/799](https://fluiggers.com.br/t/gravar-no-banco-de-dados-do-fluig/799)
> **Categoria:** Sem categoria
> **Criado em:** 30/11/2021, 09:37
> **Visualizações:** 498 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 30/11/2021, 09:37

Bom dia,
Tem como usar o APPDS do fluig para gravar direto nas tabelas do fluig ou existe alguma forma para fazer isso. Uso o Fluig no clod da TOTVS.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 30/11/2021, 13:12

o mais certo é utilizar as APIS REST ou os Serviços SOAP.
A partir do momento q tu realiza updates no banco de dados do Produto, automaticamente está perdendo a garantia de suporte, está nas clausulas do contrato do cloud.
Updates no Cloud, somente se o ticket tiver passado pelo Suporte TOTVS Fluig.

Ja consegui realizar updates no cloud apenas em tabelas de formularios customizados e as mesmas eram apenas para pequenos ajustes de versoes do registro quanto ao formulário.

Atenciosamente,

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 30/11/2021, 13:42

Boa tarde [@fluigor.com.br](/u/fluigor.com.br) a necessidade é para poder atualizar os scripts de um processo sem ter que subir uma nova versão.
Por acaso tem alguma outra forma de se fazer isso?

---

## Resposta #3

**Romulo Pereira** (@romuloccomp) — 02/12/2021, 15:27

Boa tarde, eu já fiz, mas não recomendo: Tabela event\_proces.

A forma sergura, seria criar uma nova versão e fazer a conversão dos processo pelo Fluig.

---
