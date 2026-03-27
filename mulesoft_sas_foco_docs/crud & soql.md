# CRUD na prática (REST API)

**Fonte:** [https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/oow-u4t/CRUD%20%26%20SOQL/](https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/oow-u4t/CRUD%20%26%20SOQL/)
**Subseções detectadas:** 17

## Navegação interna

- [Página: Introdução ao SOQL e CRUD no Salesforce (FOCO)](#p-gina-introdu-o-ao-soql-e-crud-no-salesforce-foco)
- [Introdução Rápida](#introdu-o-r-pida)
- [Pré-requisitos (autenticação & versão de API)](#pr-requisitos-autentica-o-vers-o-de-api)
- [O que é SOQL (Salesforce Object Query Language)](#o-que-soql-salesforce-object-query-language)
- [CRUD na prática (REST API)](#crud-na-pr-tica-rest-api)
- [Create (inserir um novo registro em um objeto do FOCO)](#create-inserir-um-novo-registro-em-um-objeto-do-foco)
- [Read (Consultar com filtros simples via SOQL):](#read-consultar-com-filtros-simples-via-soql)
- [Update (atualizar registros existentes)](#update-atualizar-registros-existentes)
- [Delete (exclusão lógica no FOCO)](#delete-exclus-o-l-gica-no-foco)
- [Upsert (recomendado para integrações)](#upsert-recomendado-para-integra-es)
- [Operações em lote (até 200 registros):](#opera-es-em-lote-at-200-registros)
- [Composite (orquestrar múltiplas sub-requisições)](#composite-orquestrar-m-ltiplas-sub-requisi-es)
- [Sandbox vs Produção](#sandbox-vs-produ-o)
- [Boas práticas de integração](#boas-pr-ticas-de-integra-o)
- [Ferramentas de apoio](#ferramentas-de-apoio)
- [Exemplos úteis (SOQL & integração)](#exemplos-teis-soql-integra-o)
- [Dicas específicas para quem vem do SAS](#dicas-espec-ficas-para-quem-vem-do-sas)

---

#### Página: Introdução ao SOQL e CRUD no Salesforce (FOCO)

> **Objetivo:** orientar integradores acostumados aos WebServices do SAS na transição para o FOCO (Salesforce), apresentando **SOQL**, exemplos de CRUD via **API REST**, diferenças de Sandbox vs Produção, boas práticas e ferramentas de apoio.

* * *

#### Introdução Rápida

-   **SOQL** é a linguagem de consulta do Salesforce (_SELECT campos FROM Objeto WHERE filtros ORDER BY ..._).
-   **CRUD via REST** acontece em `/services/data/vXX.X/sobjects/{Objeto}` e consultas em `/services/data/vXX.X/query?q=SOQL`.
-   **Exclusão no FOCO é lógica**: utilize um campo de inatividade (ex.: `Ativo__c = false`) para manter histórico.
-   **Paginação**: use `nextRecordsUrl` quando `done=false`.
-   **Volumetria**: para grandes cargas, use **Bulk API 2.0**; para poucas, Single/Composite.
-   **Ambientes**: hml2 / stg
-   **Ferramentas**: Workbench, Postman, Developer Console.

* * *

#### Pré-requisitos (autenticação & versão de API)

-   **Autenticação:** OAuth 2.0 (Bearer Token).
-   **Base URL:** `{{instance_url}}/services/data/vXX.X/` (defina a versão, ex.: `v64.0`).
-   **Headers padrão:**
    -   `Authorization: Bearer {{access_token}}`
    -   `Content-Type: application/json` (para POST/PATCH)

> **Nota FOCO vs SAS:** no FOCO, os nomes de campos seguem o API Name (ex.: `Codigo__c`), não o nome exibido em tela.

* * *

#### O que é SOQL (Salesforce Object Query Language)

-   **Propósito:** consultar dados de objetos (nativos e customizados `__c`) com filtros e ordenação.
-   **Sintaxe básica:**SELECT Id, Nome\_\_c, Codigo\_\_c FROM Evento\*\*cWHERE Codigo\*\*c = '12345' AND Ativo\_\_c = trueORDER BY CreatedDate DESCLIMIT 50
-   **Consultas relacionais (subselect):**SELECT Id, Name, (SELECT Id, LastName FROM Contacts)FROM AccountWHERE Industry = 'Education'
-   **Filtros úteis:** `=`, `!=`, `LIKE`, `IN`, `>=`, datas (`LAST_N_DAYS:30`, `THIS_MONTH`), booleanos, `NULL`.
-   **Paginação de consulta REST:** a resposta pode vir com `done=false` e `nextRecordsUrl`; chame este URL até `done=true`.
-   **Boas práticas SOQL:** selecione apenas os campos necessários; filtre por campos indexados (Id, External Ids, `__c` com índice); use ordenação quando necessário.

* * *

## CRUD na prática (REST API)

### Create (inserir um novo registro em um objeto do FOCO)

```
curl -X POST "{{instance_url}}/services/data/v61.0/sobjects/Evento__c" \
  -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type: application/json" \
  -d '{
    "Nome__c": "Feira do Empreendedor 2025",
    "Codigo__c": "EVT-000987",
    "Ativo__c": true,
    "CargaHoraria__c": 8
  }'
```

**Exemplo de Resposta:**

```
{
  "id": "a0A5g00001ABCDeEAL",
  "success": true,
  "errors": []
}
```

* * *

### Read (Consultar com filtros simples via SOQL):

```
curl -G "{{instance_url}}/services/data/v61.0/query" \
  -H "Authorization: Bearer {{access_token}}" \
  --data-urlencode "q=SELECT Id, Nome__c, Codigo__c, Ativo__c FROM Evento__c WHERE Ativo__c = true ORDER BY CreatedDate DESC LIMIT 100"
```

**Paginação:** se `done=false`, chame `{{instance_url}}{{nextRecordsUrl}}`

* * *

### Update (atualizar registros existentes)

```
curl -X PATCH "{{instance_url}}/services/data/v61.0/sobjects/Evento__c/a0A5g00001ABCDeEAL" \
  -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type: application/json" \
  -d '{ "CargaHoraria__c": 10 }'
```

> **Dica:** para idempotência , prefira **Upsert** com **External Id** (veja abaixo).

* * *

### Delete (exclusão **lógica** no FOCO)

-   Em vez de remover fisicamente, **marque como inativo** para preservar histórico (exemplo com `Ativo__c`):

```
curl -X PATCH "{{instance_url}}/services/data/v61.0/sobjects/Evento__c/a0A5g00001ABCDeEAL" \
  -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type: application/json" \
  -d '{ "Ativo__c": false }'`
```

> **Confirme o campo oficial de inatividade no Dicionário de Mapeamento do FOCO** (ex.: `Ativo__c`, `Status__c = "Inativo"` ou equivalente definido pelo projeto).

* * *

### Upsert (recomendado para integrações)

-   Usa **External Id** para criar/atualizar em uma única chamada.

```
 curl -X PATCH "{{instance_url}}/services/data/v61.0/sobjects/Evento**c/Codigo**c/EVT-000987" \
 -H "Authorization: Bearer {{access_token}}" \
 -H "Content-Type: application/json" \
 -d '{ "Nome**c": "Feira do Empreendedor 2025 (rev.)", "Ativo**c": true }'
```

* * *

### Operações em lote (até 200 registros):

```
curl -X POST "{{instance_url}}/services/data/v61.0/composite/sobjects" \
  -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type: application/json" \
  -d '{
    "allOrNone": false,
    "records": [
      { "attributes": { "type": "Evento__c" }, "Codigo__c": "EVT-001", "Nome__c": "Workshop A" },
      { "attributes": { "type": "Evento__c" }, "Codigo__c": "EVT-002", "Nome__c": "Workshop B" }
    ]
  }'
```

* * *

### Composite (orquestrar múltiplas sub-requisições)

-   Até 25 sub-requisições, com encadeamento de resultados entre elas.

```
curl -X POST "{{instance_url}}/services/data/v61.0/composite" \
   -H "Authorization: Bearer {{access_token}}" \
   -H "Content-Type: application/json" \
   -d '{
     "allOrNone": false,
     "compositeRequest": [
       {
         "method": "POST",
         "url": "/services/data/v61.0/sobjects/Evento**c",
         "referenceId": "novoEvento",
         "body": { "Nome**c": "Capacitação X", "Codigo**c": "EVT-009" }
       },
       {
         "method": "PATCH",
         "url": "/services/data/v61.0/sobjects/Evento**c/@{novoEvento.id}",
         "referenceId": "atualizaEvento",
         "body": { "CargaHoraria\_\_c": 16 }
       }
     ]
   }'
```

* * *

### Sandbox vs Produção

-   **Login/Token:**
    -   **Produção(ainda nao disponível):** `https://hlg-gateway.sebrae.com.br/foco`
    -   **Sandbox:** `https://hlg-gateway.sebrae.com.br/foco`
-   **Dados:** Sandbox é **cópia/anônima/sintética** — **nunca** use dados reais sensíveis para testes.
-   **URLs de instância:** após autenticar, use o `{{instance_url}}` retornado no token para todas as chamadas.
-   **Gate de promoção:** valide SOQL, regras de integração e campos obrigatórios primeiro em **Sandbox**.

* * *

### Boas práticas de integração

-   **Bulk vs Single/Composite:**
    -   Até **centenas** de registros → `sobjects` ou `composite/sobjects`.
    -   **Milhares/milhões** → **Bulk API 2.0** (inserção, atualização, upsert e _query_ assíncronos).
-   **Paginação & ordenação:**
    -   Use `ORDER BY` para resultados determinísticos.
    -   Controle de páginas com `LIMIT/OFFSET` (em SOQL) e `nextRecordsUrl` (em REST).
-   **Filtragem seletiva:**
    -   Prefira filtros por **External Id**/Id ou campos indexados para desempenho.
    -   Evite `LIKE '%texto%'` sem necessidade; considere normalização/índices.
-   **Seleção mínima de campos:**
    -   Busque **somente** o que precisa; reduz latência e tráfego.
-   **Idempotência:**
    -   **Upsert** com External Id evita duplicidades.
-   **Tratamento de erros (padrão REST Salesforce):**
    -   **4xx/5xx** com corpo JSON descritivo (`message`, `errorCode`, `fields`).
    -   Implemente **retries exponenciais** apenas para erros transitórios (**5xx**, limites de taxa).
-   **Limites e governança:**
    -   Respeite limites de API da org. Planeje janelas de execução, _throttling_ e _backoff_.
-   **Exclusão lógica padronizada:**
    -   Alinhe o **campo de inatividade** no **Dicionário de Mapeamento do FOCO** e **não** use `DELETE` físico em produção.

* * *

### Ferramentas de apoio

-   **Workbench** (UI web): executar SOQL, ver metadados, testar REST/Bulk.
-   **Postman**: coleções para CRUD/Query, variáveis de ambiente (token, versão API).
-   **Salesforce Developer Console**: **Query Editor** (SOQL) e **Query Plan** para analisar seletividade.
-   **MuleSoft**:
    -   **Anypoint Connector for Salesforce** (recomendado) para autenticação e operações.
    -   **DataWeave** para montar SOQL com segurança (evite concatenar sem sanitização).

* * *

### Exemplos úteis (SOQL & integração)

**Consulta com data relativa e paginação controlada**

```
SELECT Id, Nome__c, Codigo__c
FROM Evento__c
WHERE Ativo__c = true AND CreatedDate = LAST_N_DAYS:30
ORDER BY CreatedDate DESC LIMIT 200
```

**Consulta por relacionamento (filhos)**

```
SELECT Id, Name, (SELECT Id, NomeParticipante__c FROM Inscricoes__r WHERE Status__c = 'Confirmada')
FROM Evento__c
WHERE Codigo__c = 'EVT-000987'
```

**Padrão de “inativar” (exclusão lógica)**

```
curl -X PATCH "{{instance_url}}/services/data/v61.0/sobjects/Evento__c/{{IdDoEvento}}" \
-H "Authorization: Bearer {{access_token}}" \
-H "Content-Type: application/json" \
-d '{ "Ativo__c": false, "MotivoInativacao__c": "Cancelado pelo solicitante" }'
```

* * *

#### Dicas específicas para quem vem do SAS

-   **De SOAP para REST/SOQL:** muitos filtros antes feitos em SOAP agora são expressos diretamente em SOQL.
-   **Nomes de campo:** use o **API Name** (ex.: `Codigo__c`), não o rótulo visual.
-   **Delete ≠ remover:** NÃO remova fisicamente registros no FOCO; _inative_.
-   **Erros claros:** mensagens REST ajudam no diagnóstico; capture `errorCode` e `fields` no log.

* * *
