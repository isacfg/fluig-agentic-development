# Erro ao tentar ativar ou bloquear usuario no Fluig

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-tentar-ativar-ou-bloquear-usuario-no-fluig/2240](https://fluiggers.com.br/t/erro-ao-tentar-ativar-ou-bloquear-usuario-no-fluig/2240)
> **Categoria:** Ambiente Fluig
> **Criado em:** 29/09/2023, 18:22
> **Visualizações:** 167 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gustavo** (@gustavo91) — 29/09/2023, 18:22

Pessoal, boa noite.

Estou com usuário admin e ao tentar ativar ou bloquear usuario no fluig apresenta a seguinte mensagem:

Ops, algo deu errado! Aconteceu um erro inesperado. Entre em contato com o administrador da sua empresa.

No log não apresenta nada.

Alguém ja teve esse problema?

---

## Resposta #1

**Leonardo Fioretti** (@leonardo.fioretti) — 08/10/2023, 19:44

Olá, [@gustavo91](/u/gustavo91) .

Normalmente esse tópico está relacionado a falta de licenças, mesmo bloqueando, pode ser que a distribuição tenha sido refeita e quando tenta bloquear o usuário ele valida a quantidade de licenças ativas. Recomendo analisar o license server para confirmar se está tudo ok!

Caso o problema persista, dá uma olhada nos patchnotes da sua release para garantir que não tem nenhum patch que corrigiu esse tipo de problema recentemente.

Qualquer dúvida estou à disposição.

---
