# Envio de email customizado em um processo

> **Fonte:** [https://fluiggers.com.br/t/envio-de-email-customizado-em-um-processo/3377](https://fluiggers.com.br/t/envio-de-email-customizado-em-um-processo/3377)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 12/08/2025, 12:01
> **Visualizações:** 53 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 12/08/2025, 12:01

Prezado/Prezada, acontecem algumas coisas ‘fantasmagóricas’ com o nosso Fluig.
Há alguns anos, encomendamos um desenvolvimento de um formulário em processos para solicitar providências pelo setor de expedição, tais como levar correspondência, pegar, etc.
A parte do desenvolvimento mais importante era que a qualquer salvamento de um pedido, um código em um dos ‘scripts’ dispararia um email para o setor e, depois, quando o setor cumpria a tarefa pedida, outro email de volta daria a conclusão do pedido ao solicitante.
Temos dois processos diferentes que usam esse código javascript para promover pedidos diferentes, mas só um deles funciona.
O estranho é que funcionava até às 15 horas de ontem.

Fiz a importação do processo para dentro do Eclipse.
Eu fui procurar os eventos nos scripts, mas nem achei scripts para esse que não funciona, o que foi importado.

Alguma dica?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 13/08/2025, 06:23 | ❤️ 1

Engano meu: a customização foi só em parte. Este meu problema foi causado pela tentativa de silenciar comunicações indesejáveis pelo Fluig de processos que estavam transitando entre aprovadores, substitutos, etc, que causava irritação de mensagem supérflua a algumas pessoas. Desabilitando o envio de email, desabilitou os avisos de criação de novos pedidos. Restabelecido no Painel de Controle a providência de enviar emails, voltou a funcionar. A confusão é que o processo em questão não foi customizado via Javascript para enviar email, coisa que tinha sido feita em outro processo.

---
