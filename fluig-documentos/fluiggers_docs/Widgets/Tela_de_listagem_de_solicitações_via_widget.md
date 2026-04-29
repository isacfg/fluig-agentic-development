# Tela de listagem de solicitações via widget

> **Fonte:** [https://fluiggers.com.br/t/tela-de-listagem-de-solicitacoes-via-widget/735](https://fluiggers.com.br/t/tela-de-listagem-de-solicitacoes-via-widget/735)
> **Categoria:** Widgets
> **Tags:** `widget`
> **Criado em:** 22/10/2021, 10:26
> **Visualizações:** 503 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 22/10/2021, 10:26

Bom dia galera, desenvolvi uma widget que lista as solicitações para um determinado usuário e coloca esses itens em uma dataTable.

A forma que faço isso é consultando as solicitações que através da API /process-management/api/v2/requests?assignee={user}&processId={userId}.

Depois disso eu uso os processInstanceIds retornados para buscar valores no dataset e pegar alguns valores de formulário para serem mostrados na tabela.

Isso é carregado ao montar a tela. Estou com medo que com aumento das requisições esta ação de listar a datatable fique muito lenta.

Me recomendam algo? Tipo, eu poderia fazer uma paginação no back-end… Ou poderia ao invés de consultar a API do fluig para recuperar o processInstanceId pegar direto do dataset do fluig(teria que guardar alguns campos para controlar isso e não sei se resolveria o problema da lentidão)… Alguém já fez algo parecido?

---
