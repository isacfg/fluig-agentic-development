# Consulta de solicitações em massa

> **Fonte:** [https://fluiggers.com.br/t/consulta-de-solicitacoes-em-massa/3297](https://fluiggers.com.br/t/consulta-de-solicitacoes-em-massa/3297)
> **Categoria:** API`s Fluig
> **Tags:** `processo`, `dataset`, `fluigapi`
> **Criado em:** 05/06/2025, 14:00
> **Visualizações:** 49 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 05/06/2025, 14:00

Salve, galera!

Hoje tenho um dataset que monta uma consulta de solicitações com filtros customizados (campos específicos, por exemplo) usando a api /bpm/api/v1/requests, com um exemplo abaixo:

```auto
/bpm/api/v1/requests?
&initialProcessInstanceId=0
&finalProcessInstanceId=999999
&initialStartDate=2023-03-21T00:00:00.000Z
&finalStartDate=2025-04-20T23:59:59.000Z
&expand=requester
&expand=formRecord
&expand=currentMovements
&expand=currentMovements.tasks
&expand=formFields
&order=processInstanceId
&page=1&pageSize=200
```

Testei também a API v2 ([TOTVS Fluig API](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findRequests)), os parâmetros, a resposta e a performance é basicamente a mesma.

…que uso em um dataset para montar esse ‘tabelão’. Cada lote de 200 processos com todos os detalhes acima volta em cerca de 10 segundos. O dataset possui uma lógica para considerar a paginação e seguir adiante. Em uma base com centenas de milhares de solicitações, toda a leitura leva um bom tempo…

Alguém já precisou fazer algo parecido de alguma outra forma mais veloz, como por exemplo chamada direta ao banco? O bom da API é que ela já entrega tudo estruturado, fácil de manipular depois…

---
