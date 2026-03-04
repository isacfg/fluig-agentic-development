# Mensagem de Sucesso no beforeStateEntry

> **Fonte:** [https://fluiggers.com.br/t/mensagem-de-sucesso-no-beforestateentry/1228](https://fluiggers.com.br/t/mensagem-de-sucesso-no-beforestateentry/1228)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 15/08/2022, 14:56
> **Visualizações:** 529 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Iago** (@iago.oliveira) — 15/08/2022, 14:56

Olá pessoal. Tenho um workflow que tem apenas um início e um fim. Esse processo não possui atividades, ele apenas é usado para gerar pedidos de compras. Estou usando o beforeStateEntry para criar o pedido. Quando dá erro na geração desse pedido, uso o throw para informar o usuário, porém, quando dá certo, é gerado um número do pedido e eu gostaria de informar o usuário através de um pop-up ou um modal na tela. Se eu usar o throw não vai dá certo porque ele não deixa finalizar a solicitação.

Vocês teriam alguma solução alternativa para me ajudar nesse caso?

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 17/08/2022, 12:39

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/iago.oliveira/48/812_2.png) iago.oliveira:
>
> > Quando dá erro na geração desse pedido, us

O que acha de colocar um comentário na aba complemento com o numero do pedido antes de finalizar a solicitação? Ali existe suporte para html e você poderia deixar um alert-info para o seu usuário com o numero dos pedidos criados

---

## Resposta #2

**Iago** (@iago.oliveira) — 17/08/2022, 14:59

Olá Jonathan. Obrigado pela resposta!

Acho que já ajuda sim. Como posso fazer isso? Poderia me orientar?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 17/08/2022, 16:31 | ❤️ 1

No beforeStateEntry após você capturar o número do seu pedido:

```auto
var idUsuario = getValue('WKUser');
var numeroProcesso = getValue("WKNumProces");
var complemento = "Número do pedido gerado: " + pedido;
hAPI.setTaskComments(idUsuario, numeroProcesso,  0, complemento);
```

---

## Resposta #4

**Iago** (@iago.oliveira) — 18/08/2022, 11:06

Olá Jonathan. Deu certo!

Por enquanto vou usar assim até que eu descubra uma forma de gerar um pop-up.

Super obrigado!

---
