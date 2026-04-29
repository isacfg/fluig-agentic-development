# Chamada a API REST ao concluir preenchimento de form

> **Fonte:** [https://fluiggers.com.br/t/chamada-a-api-rest-ao-concluir-preenchimento-de-form/446](https://fluiggers.com.br/t/chamada-a-api-rest-ao-concluir-preenchimento-de-form/446)
> **Categoria:** ECM / GED
> **Criado em:** 18/05/2021, 09:43
> **Visualizações:** 1172 | **Likes:** 2 | **Respostas:** 7

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 18/05/2021, 09:43

Bom dia,

Galera, alguém já precisou adicionar um evento (de click, por exemplo) ao botão de “Confirmar” quando tiver preenchendo o formulário?

![image](https://fluiggers.com.br/uploads/default/original/1X/79afef07266fe30d8179151836e10395918591f5.png).

O que eu quero seria executar uma chamada a uma API ao clicar nesse botão, só que tenho as seguintes dúvidas:

1.  Como adicionar o evento nele? Se eu pegar o id ou classe que é gerado, é seguro? se isso mudar um dia?
2.  Eu consigo fazer com que essa chamada a API seja feita antes que ação padrão do botão seja feita?

Eu pensei em criar outro botão, que executaria tudo o que o botão “Confirmar” faz e adicionar o que quero, porém não vejo como fazer no momento.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 10:01

Você esta usando o componente **FLUIGC.message.confirm** ?

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 18/05/2021, 10:05

Não conheço, do que se trata?

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 10:08

É um componente do Fluig que você encontra em [TOTVS Fluig Developer](https://style.fluig.com/javascript.html#alerts-examples). Trata-se de um modal de confirmação, eu normalmente uso ele para que o usuário confirme se quer ou não deletar uma determinada linha de uma tabela Pai x Filho.

---

## Resposta #4

**Daniel ** (@daniel_fmartins) — 18/05/2021, 10:51

Não existe um evento para isso? tipo, executar uma ação antes da confirmação do usuário? Tentei aqui o afterProcessing e afterSaveNew, sem sucesso até agora.

---

## Resposta #5

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 11:07

Para poder te ajudar melhor, preciso saber mais detalhes. Eu não estou entendendo onde esta esse seu botão “Confirmar”.

Visualmente posso perceber que é um botão presente em algum modal, é isso mesmo?

---

## Resposta #6

**Daniel ** (@daniel_fmartins) — 18/05/2021, 11:14 | ❤️ 1

![image](https://fluiggers.com.br/uploads/default/optimized/1X/e4e78df8f5d31eac49901404f5898a8474abfec0_2_690x305.png)

Esse é rascunho que estou utilizando.

É a criação de um registro normal no ECM.

Porém, necessito fazer uma integração com uma api REST.

Hoje, o momento ideal para essa integração ocorrer é no momento que ele confirma.

Assim, eu consultaria a API, ela me retornaria, eu setava os campos e o fluig salvava esses campos normalmente.

Uma solução alternativa que vejo seria, criar outro botão que faria a integração e setava os dados. Aí o botão de “Confirmar” ficaria fazendo seu trabalho normalmente.

Mas só faria isso, se não conseguisse fazer o que estou tentando, pois entendo que fica um pouco redundante.

Deu pra entender?

---

## Resposta #7 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 18/05/2021, 11:24 | ❤️ 1

Simm agora eu entendi perfeitamente.

bem você pode utilizar um script de formulário, especificamente um chamado **inputFields**, ele é executado no momento em que seu formulário é salvo. Com isso será possível acessar essa sua API e guardar o resultado em algum campo usando o **form.setValue(“nomeDoCampo”, “Valor do campo”);**

---

## Resposta #8

**Daniel ** (@daniel_fmartins) — 18/05/2021, 11:41

Valeu cara, aparenteminte vai resolver. Brigadão.

---

## Resposta #9

**system** (@system) — 19/05/2021, 03:42

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
