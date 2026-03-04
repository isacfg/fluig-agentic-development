# Adicionar Bibliotecas Externos no Projeto Fluig

> **Fonte:** [https://fluiggers.com.br/t/adicionar-bibliotecas-externos-no-projeto-fluig/2370](https://fluiggers.com.br/t/adicionar-bibliotecas-externos-no-projeto-fluig/2370)
> **Categoria:** Ambiente Fluig
> **Tags:** `processo`
> **Criado em:** 23/11/2023, 17:16
> **Visualizações:** 257 | **Likes:** 0 | **Respostas:** 6

---

## Pergunta original

**Nathan Siman Teixeira** (@Nathan_Teixeira) — 23/11/2023, 17:16

Boa tarde,

Estou tentando adicionar uma biblioteca externa em um projeto Fluig. Como devo realizar essa ação? Via CDN ou direto no Projeto? Estou tentando adicionar a biblioteca JSPDF.

---

## Resposta #1

**Everton Alves** (@everton) — 24/11/2023, 10:27

Olá, funciona das duas formas.
O que você está tentando fazer, uma widget ou um formulário de processo?

---

## Resposta #2

**Nathan Siman Teixeira** (@Nathan_Teixeira) — 24/11/2023, 11:33

Estou fazendo um formulário de processo.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/11/2023, 11:45

Usar CDN é uma boa.

Eu prefiro salvar tudo numa widget que será tipo um repositório de bibliotecas. Assim não tenho problemas com versões e já tá tudo no próprio Fluig.

Como faço: [https://youtu.be/LRv6hctjVCo?t=992](https://youtu.be/LRv6hctjVCo?t=992)

---

## Resposta #4

**Nathan Siman Teixeira** (@Nathan_Teixeira) — 24/11/2023, 13:09

Vou tentar utilizar na widget, muito obrigado.

---

## Resposta #5

**Nathan Siman Teixeira** (@Nathan_Teixeira) — 11/12/2023, 08:56

Salvando em uma widget, consigo utilizar nos eventos do processo?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/12/2023, 10:48

Não.

Os Eventos de Processo ocorrem em back-end, assim como a maioria dos Eventos de Formulário.

As widgets só servem para o front-end.

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/12/2023, 10:49

Talvez, se criar uma Widget em Java, consiga compartilhar algo em back-end pra ser utilizado nos eventos de processo e formulário. Mas eu nunca estudei se isso é possível, até porque nunca estudei a criação das widgets em Java. Fica uma oportunidade de estudo pra ver o que dá pra fazer criando diretamente em Java.

---
