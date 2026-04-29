# Buscar colunas da versão atual do form

> **Fonte:** [https://fluiggers.com.br/t/buscar-colunas-da-versao-atual-do-form/2721](https://fluiggers.com.br/t/buscar-colunas-da-versao-atual-do-form/2721)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 16/04/2024, 10:56
> **Visualizações:** 111 | **Likes:** 4 | **Respostas:** 1

---

## Pergunta original

**Leonardo Masera** (@Leonardo_Masera) — 16/04/2024, 10:56

Bom dia, estou criando um formulário que preciso buscar as colunas de um outro form, porém no dataset gerado desse outro form ficam salvas colunas já excluidas e colunas duplicadas caso o nome seja alterado (Apovacao → Aprov) ambas as colunas permanecem.
(sei que deve existir algum local com essa tratativa, pois na criação de processo na aba form tem descriptor field e nessa parte só mostra os campo atuais)
Alguém sabe como fazer a busca apenas das colunas da versão atual do form?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Afonso Uliana Neto** (@Afonso) — 23/04/2024, 21:11 | ❤️ 2

VOCE PODE BUSCAR AS COLUNAS DA VERSAO ATIVA DO FORMULARIO NA TABELA FICHARIO\_CAMPO ONDE O NR\_FICHARIA É O NUMERO DO FORMULARIO E O NR\_VERSAO É O NUMERO DA VERSAO.
select \* from FICHARIO\_CAMPO where NR\_FICHARIO = 1031751

![image](https://fluiggers.com.br/uploads/default/original/2X/6/6007092c62e39ba1f77c9c6fc6a09436c6c2aa81.png)

---

## Resposta #2

**Leonardo Masera** (@Leonardo_Masera) — 17/05/2024, 16:59 | ❤️ 2

to voltando aqui só para agradecer mesmo, graças a você fiz um código que era uma ideia funcionar perfeitamente, sinceramente é ó código mais bonito que já fiz, obrigado por ajudar a completar.
Meu mais sicero obrigado!

---
