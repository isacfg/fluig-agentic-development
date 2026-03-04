# Buscar cores do tema principal

> **Fonte:** [https://fluiggers.com.br/t/buscar-cores-do-tema-principal/2888](https://fluiggers.com.br/t/buscar-cores-do-tema-principal/2888)
> **Categoria:** Ambiente Fluig
> **Tags:** `dataset`
> **Criado em:** 16/07/2024, 16:34
> **Visualizações:** 82 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Leonardo Masera** (@Leonardo_Masera) — 16/07/2024, 16:34

Alguém sabe onde posso buscar as cores do tema que esta sendo usando no ambiente fluig?
Se souber em que tabela é armazenado já ajuda muito.

---

## Resposta #1

**André Victor** (@Andre_Victor) — 18/07/2024, 17:12

Porque você não olha no painel de controle?

Painel de Controle → Personalização → Temas

---

## Resposta #2

**Leonardo Masera** (@Leonardo_Masera) — 19/07/2024, 09:49

Quero fazer um programa especifico e preciso que as cores dele mudem junto com o tema do ambiente fluig, preciso conseguir buscar as cores de alguma forma, pensei em criar um dataset pra tabela de cores só que não sei onde buscar os dados.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 19/07/2024, 10:58 | ❤️ 3

A tabela é a fdn\_tenantdata. Mas o problema é que só grava quando tiver fora do padrão. Eu aconselho não usar esse tipo de coisa, é muito mais simples usar as variáveis css, como o próprio Fluig faz:

```auto
background-color: var(--themeResponsiveBgColor);
```

---

## Resposta #4

**Leonardo Masera** (@Leonardo_Masera) — 23/07/2024, 10:05

Obrigado pela dica. é até mais facil vlw.

---
