# Exibir valor vindo da API do fluig

> **Fonte:** [https://fluiggers.com.br/t/exibir-valor-vindo-da-api-do-fluig/1001](https://fluiggers.com.br/t/exibir-valor-vindo-da-api-do-fluig/1001)
> **Categoria:** WCM
> **Criado em:** 01/04/2022, 10:29
> **Visualizações:** 390 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 01/04/2022, 10:29

Construi uma widget que lista informações de processos do fluig.
Filtrei para que a API retorne o código(processInstanceId, um valor inteiro) e o objeto requester. É retornado tudo ok, quando executei o console.log no navegador.

Dessa forma o objeto DataItems é composto por um inteiro e um objeto.

Porém ao exibir isso no datatable esse valor não é encontrado. Tentei acessá-lo normalmente através do “.” como acesso um objeto. Isso é possível?

![image](https://fluiggers.com.br/uploads/default/original/1X/0ecbe7a9c403290f736f4ea487c3ffff99d51fe4.png)

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 01/04/2022, 10:37 | ❤️ 1

Tenta assim:

```auto
'requester\\.code'
```

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 01/04/2022, 11:35

Não consegui :confused:

Pesquisando outra forma, se encontrar retorno aqui.

---
