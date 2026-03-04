# Acesso de um usuário específico a uma solicitação de processo privado

> **Fonte:** [https://fluiggers.com.br/t/acesso-de-um-usuario-especifico-a-uma-solicitacao-de-processo-privado/3546](https://fluiggers.com.br/t/acesso-de-um-usuario-especifico-a-uma-solicitacao-de-processo-privado/3546)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 20/01/2026, 14:02
> **Visualizações:** 24 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Victor Castro** (@victorcastro) — 20/01/2026, 14:02

Quando existe uma solicitação de um processo privado, em que um grupo de pessoas específico precisa ter acesso a ela, como vocês fazem?

Por exemplo, em uma solicitação relativa à area de RH, todos os usuários que estão dentro do grupo RH precisam ter acesso à essa solicitação. Mas não podem visualizar as solicitações que sejam de outro setor.

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 20/01/2026, 16:16 | ❤️ 2

Esse é um problema antigo do fluig, não poder ter um parametro que você possa dar acesso a certo grupo. A maniera mais fácil de resolver isso é criando uma tarefa para cada grupo e usar um gatway para levar a atividade com o grupo necessário.

---
