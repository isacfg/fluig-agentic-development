# Gestores por Mecanismo Customizado

> **Fonte:** [https://fluiggers.com.br/t/gestores-por-mecanismo-customizado/1182](https://fluiggers.com.br/t/gestores-por-mecanismo-customizado/1182)
> **Categoria:** BPM
> **Criado em:** 12/07/2022, 10:43
> **Visualizações:** 322 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Pereira** (@gabriel.pereira) — 12/07/2022, 10:43

Em um mecanismo customizado onde eu pego os participantes de um grupo e jogo em um Arraylist, ele é gerado apenas no start do processo ou ele é dinâmico e passa a considerar os usuários do grupo no momento do carregamento do formulário?

O problema é que se adiciono participantes no grupo que está no mecanismo customizado, eles não conseguem acesso como gestores

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 12/07/2022, 13:50

A [Documentação](https://tdn.totvs.com/pages/releaseview.action?pageId=263784090) da Rotina de Gestor não comenta nada sobre a atribuição por mecanismo customizado.

![image](https://fluiggers.com.br/uploads/default/original/1X/ae886a1a48adf52998d65acb11daab2a94eb4f29.png)

porém vi em algum lugar remoto de 2019 que tinham resolvido uma situacao de atribuicao do gestor conforme a solicitacao executada e deram o script abaixo como exemplo.

![](https://pastebin.com/favicon.ico) [Pastebin](https://pastebin.com/XR01X2FJ)

![](https://pastebin.com/i/facebook.png)

### [function resolve(process, colleague) { //log.info('::FAT\_gestor\_faturamento::...](https://pastebin.com/XR01X2FJ)

Pastebin.com is the number one paste tool since 2002. Pastebin is a website where you can store text online for a set period of time.

abracos

---

## Resposta #2

**Gabriel Franco da Rocha Nascimento** (@gabrielfrna) — 12/07/2022, 22:50

[@gabriel.pereira](/u/gabriel.pereira) , Boa noite!

Já tentei customizar, fiz vários testes, mas ocorre algumas inconsistências.

Já acionei a Totvs sobre isso e eles informaram que não funciona corretamente Mecanismo customizado para Gestor do Processo.

---
