# Versão do Rhino

> **Fonte:** [https://fluiggers.com.br/t/versao-do-rhino/2454](https://fluiggers.com.br/t/versao-do-rhino/2454)
> **Categoria:** Sem categoria
> **Criado em:** 18/12/2023, 08:42
> **Visualizações:** 383 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 18/12/2023, 08:42

Bom dia,

Alguem sabe qual a versão do rhino que roda no back end do fluig?
Estou na versão 1.8.1

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 27/12/2023, 08:06

Não sei exatamente qual versão, mas não é atualizada há um tempo - assim como o próprio Rhino. A última versão no site oficial é de Janeiro de 2022, o que me faz pensar se ele vai ser um dia atualizado (podiam reescrever o backend do Fluig em Node, hein? :smiley: )

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 27/12/2023, 08:36

Bom dia

O fluig ja roda alguma coisa em node. Quando se faz a instalação dele ele instala uma versão do node, mas vai saber para que ela serve kkkkkkkk

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 27/12/2023, 09:36 | ❤️ 1

Atualmente utilizo em meu ambiente local a versão **1.8.0-230726** do Fluig. Pesquisando na pasta de instalação vi que ele faz referência a versão **1.7R2** do Rhino JS.

Se formos verificar as releases do Rhino js no seu [repositório](https://github.com/mozilla/rhino/releases?page=2), veremos que a release mais antiga que está lá é a 1.7R4 da data de 18 de junho de 2012.

Ou seja, se essa minha investigação estiver correta, a versão do Rhino js utilizada pelo Fluig não é atualizada a mais de 10 anos.

Realizei uma pesquisa rápida no repositório maven por esta versão **1.7R2** do Rhino JS e encontrei a data de 21 de agosto de 2009.

[Maven Repository: rhino » js » 1.7R2 (mvnrepository.com)](https://mvnrepository.com/artifact/rhino/js/1.7R2)

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/12/2023, 09:50

O node que ele instala quase certo que é pras notificações em realtime.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 02/01/2024, 18:44

Sim, pelo que lembro é só pro Realtime mesmo

---

## Resposta #6

**Cassius** (@Cassius) — 05/06/2024, 11:46 | ❤️ 1

![image](https://fluiggers.com.br/uploads/default/original/2X/a/ac75d88d8a57dc4e67392c156f65d4b8eb246001.png)

Bom dia a todas e todos.
Pelo que vi aqui acredito que o Rhino esteja na versão 1.7.15 de 03/05/2024.

Atualmente, na versão 1.8.1 do Fluig, o Rhino utilizado está na versão 1.6R7.

---
