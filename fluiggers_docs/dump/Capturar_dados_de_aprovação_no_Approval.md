# Capturar dados de aprovação no Approval

> **Fonte:** [https://fluiggers.com.br/t/capturar-dados-de-aprovacao-no-approval/594](https://fluiggers.com.br/t/capturar-dados-de-aprovacao-no-approval/594)
> **Categoria:** Mobile
> **Tags:** `form`, `bpm`, `mobile`, `app`
> **Criado em:** 03/08/2021, 09:34
> **Visualizações:** 1349 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Vitor Rios** (@Vitor_Rios) — 03/08/2021, 09:34

Olá, estou desenvolvendo um processo de aprovação e meu gateway toma uma decisão conforme eu preencho um campo de meu formulário (com aprovado ou rejeitado), clico em botões que fazem o preenchimento via js e já enviam o form, porém o envio do form não acontece no app my fluig, nem no approval, porém notei que o approval tem uma função parecida, mas como capturo o resultado de aprovar ou rejeitar no approval? posso usar o aprovar e rejeitar dele para preencher meu formulário?
Queria uma documentação mais precisa do aplicativo…

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 03/08/2021, 17:22

Vitor, boa tarde!

Se entendi bem a pergunta, você pode capturar a ação nos scripts de processo:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/1eaf55aed0824fb926b1b6e339a34af4e20e56b2_2_689x341.png)

Por exemplo, no caso do Approval, nós definimos os destinos do aprovar e do rejeitar no editor de diagrama; sendo assim podemos manipular o processo utilizando os eventos de processo da plataforma. Resolveria seu caso?

---

## Resposta #2

**Vitor Rios** (@Vitor_Rios) — 04/08/2021, 12:14

Acredito que sim, ambos jogam para um gateway, que se aprovado acrescenta um(+1) ao valor de um campo no formulário (se meu campo atingir determinado numero de registros ele finaliza o processo, se não ele repete o processo até que o numero de registros atinja o valor de rodadas necessárias para finalização do processo)… a cada rodada consulto um formulário que informa quem são os aprovadores da rodada…
ambos jogam para o mesmo gateway, mas como capturo se aprovou ou não dentro do gateway?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/08/2021, 12:29 | ❤️ 3

O Approval é uma ferramenta que não roda com Gateway.

A ideia do Approval é você ter uma Atividade X que pode seguir pra Atividade Y (se for aprovado) ou para a Atividade Z (se for rejeitado). Então ela é uma ferramenta só pra essa bifurcação no fluxo.

Eu acabei não usando Approval nenhuma vez justamente porque aqui sempre querem que o usuário justifique o motivo de ter rejeitado a atividade.

Se for usar o Approval nessa situação você pode criar um evento na atividade “Rejeitado” e fazer esse incremento da quantidade de rejeições. E caso atinja o limite já faça o fechamento do processo. Talvez dê pra fazer isso usando os eventos beforeStateEntry pra atualizar o campo e o afterStateEntry pra definir se vai finalizar ou não.

---

## Resposta #4

**system** (@system) — 05/08/2021, 04:29

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
