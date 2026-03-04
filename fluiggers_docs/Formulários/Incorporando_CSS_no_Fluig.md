# Incorporando CSS no Fluig

> **Fonte:** [https://fluiggers.com.br/t/incorporando-css-no-fluig/259](https://fluiggers.com.br/t/incorporando-css-no-fluig/259)
> **Categoria:** Formulários
> **Criado em:** 30/03/2021, 14:06
> **Visualizações:** 1221 | **Likes:** 2 | **Respostas:** 5

---

## Pergunta original

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 14:06

Olá Pessoal, boa tarde!

Quando vocês precisar personalizar alguma coisa com CSS no Fluig, como vocês fazem ?
criam um arquivo style.css e importam para o projeto, codificam o css depois do < head >
ou ainda, fazem a codificação no próprio elemento ? estou tentando fazer um simples aqui, mas só obtive sucesso quando fiz no próprio elemento …

---

## Resposta #1

**Victor Castro** (@victorcastro) — 30/03/2021, 14:50 | ❤️ 1

Sempre uso um arquivo separado **style.css**, até porque nele tem códigos que eu posso usar pra todos os meus formulários. Como aquele \* de obrigatório, por exemplo. Lembrando que é referenciar o arquivo dentro da **head** do seu HTML.

```auto
<link rel="stylesheet" type="text/css" href="style.css" />
```

Mas quando preciso fazer algo muito específico e que vou usar somente uma vez e somente naquele campo, faço direto no elemento mesmo. Mas não é comum.

---

## Resposta #2

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 14:59

Que estranho… Fiz exatamente o que você me disse, mas não está funcionando por algum motivo.
arquivos no Eclipse:

![image](https://fluiggers.com.br/uploads/default/original/1X/f5f554e59000947efeb5c7ed7152c55f49ba95fb.png)

Importação no html do formulário:

![image](https://fluiggers.com.br/uploads/default/original/1X/deb2453d79526aa9e718529671350b67f0379870.png)

Chamada no formulário:

![image](https://fluiggers.com.br/uploads/default/original/1X/26dad098bbabe14bc087f360d46c1480dfb725e1.png)

---

## Resposta #3

**Victor Castro** (@victorcastro) — 30/03/2021, 15:01

Você referenciou o arquivo **teste.css**. Você colocou o código nele?

---

## Resposta #4

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 15:01

[@victorcastro](/u/victorcastro) , sim!

Eu havia tirado a print do código errado, já corrigi ali em cima…

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 30/03/2021, 15:03

Fecha a tag **label** antes de abrir a **strong**.

```auto
<label for="codigo">CODIGO</label><strong class="obg"> *</strong>
```

Costumo colocar também `font-size: 18px;` na classe. Fica a seu critério rs.

---

## Resposta #6

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 15:05 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) victorcastro:
>
> > font-size: 18px

Deu certo victor!

Muito obrigado novamente hihihi

---

## Resposta #7

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 30/03/2021, 15:06

Um dia eu fico bom kkk

---
