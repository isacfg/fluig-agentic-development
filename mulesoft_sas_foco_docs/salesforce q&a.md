# Mapeamento SAS X FOCO

**Fonte:** [https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/xhu-7eb/Salesforce%20Q%26A/](https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/xhu-7eb/Salesforce%20Q%26A/)
**Subseções detectadas:** 22

## Navegação interna

- [Página de Q&A — De/Para SAS ↔ Salesforce (FOCO)](#p-gina-de-q-a-de-para-sas-salesforce-foco)
- [Quais APIs do Salesforce devo usar?](#quais-apis-do-salesforce-devo-usar)
- [Como faço autenticação?](#como-fa-o-autentica-o)
- [Como descubro campos e obrigatoriedades do objeto no Salesforce?](#como-descubro-campos-e-obrigatoriedades-do-objeto-no-salesforce)
- [Qual a diferença entre SQL e SOQL?](#qual-a-diferen-a-entre-sql-e-soql)
- [Como faço upsert (criar/atualizar) sem duplicidade?](#como-fa-o-upsert-criar-atualizar-sem-duplicidade)
- [Como tratar exclusão? (lógica x física)](#como-tratar-exclus-o-l-gica-x-f-sica)
- [Como lidar com relacionamentos (Lookup/Master-Detail)?](#como-lidar-com-relacionamentos-lookup-master-detail)
- [Como paginar resultados no SOQL/REST?](#como-paginar-resultados-no-soql-rest)
- [Quando usar Composite e sObject Collections?](#quando-usar-composite-e-sobject-collections)
- [E para volumes muito grandes?](#e-para-volumes-muito-grandes)
- [Como tratar limites (governor/API limits)?](#como-tratar-limites-governor-api-limits)
- [Como lidar com datas/horários e fuso?](#como-lidar-com-datas-hor-rios-e-fuso)
- [O que verificar quando recebo erros 4xx/5xx?](#o-que-verificar-quando-recebo-erros-4xx-5xx)
- [Como garantir idempotência e reprocessamento?](#como-garantir-idempot-ncia-e-reprocessamento)
- [Onde e como testar?](#onde-e-como-testar)
- [Como versionar o de/para e lidar com mudanças do FOCO?](#como-versionar-o-de-para-e-lidar-com-mudan-as-do-foco)
- [Como enviar/receber anexos/arquivos?](#como-enviar-receber-anexos-arquivos)
- [Como reduzir latência e melhorar performance?](#como-reduzir-lat-ncia-e-melhorar-performance)
- [Como detectar mudanças no Salesforce sem varrer tudo?](#como-detectar-mudan-as-no-salesforce-sem-varrer-tudo)
- [Exemplo rápido: Composite criando Conta e Contato (mesma transação)](#exemplo-r-pido-composite-criando-conta-e-contato-mesma-transa-o)
- [Dúvidas que ainda não encontrou aqui?](#d-vidas-que-ainda-n-o-encontrou-aqui)

---

![resources/sebrae-99e5e5bd-502a-4a93-9300-f7716c7636bd.png](https://anypoint.mulesoft.com/exchange/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/1.0.34/resources/sebrae-99e5e5bd-502a-4a93-9300-f7716c7636bd.png)

* * *

#### Página de Q&A — De/Para **SAS ↔ Salesforce (FOCO)**

> Perguntas e respostas práticas para construir integrações e mapeamentos (de/para) entre SAS e Salesforce.

* * *

#### Quais APIs do Salesforce devo usar?

-   **REST API**: operações CRUD pontuais, **Composite** e **sObject Collections**.
-   **Bulk API 2.0**: cargas **em massa** (milhares/milhões de registros).
-   **SOAP API**: útil quando o legado já usa SOAP ou precisa de WSDL.**Regra prática**: **volume alto** → Bulk 2.0; **orquestração atômica/até 25 sub-requisições** → Composite; **operações simples** → REST padrão.

* * *

#### Como faço autenticação?

Use **OAuth 2.0**. Os fluxos mais comuns:

-   **JWT Bearer (server-to-server)**: seguro e sem refresh manual de token (requer **Connected App** com certificado).
-   **Client Credentials** (quando disponível na sua edição/escopo).
-   **Web Server** (Authorization Code) para apps interativas.

**Dica**: armazene `instance_url` e `access_token` ao autenticar; renove o token conforme expiração.

* * *

#### Como descubro campos e obrigatoriedades do objeto no Salesforce?

-   Endpoint `/sobjects/<Objeto>/describe` (REST) retorna campos, tipos, obrigatórios, picklists etc.
-   No Setup, use **Object Manager** para confirmar **FLS** (Field-Level Security), validações e automações.

* * *

#### Qual a diferença entre SQL e SOQL?

**SOQL** consulta **objetos e campos** (não usa `JOIN` explícito; relacionamentos são navegados por notação ponto). Exemplo:

```
Consultar Contas ativas do tipo Cliente
SELECT Id, Name, Type, BillingCity
FROM Account
WHERE IsActive__c = true AND Type = 'Customer'
ORDER BY Name
LIMIT 200
```

Para relacionamentos, use campos de relação (ex.: `Account.Name` a partir de Contact).

* * *

#### Como faço upsert (criar/atualizar) sem duplicidade?

1) Defina um **campo External Id** (ex.: `SAS_Id__c`) no objeto Salesforce.

2) Use REST **upsert** por External Id:

```
curl -X PATCH "{{instance_url}}/services/data/vXX.X/sobjects/Account/SAS_Id__c/12345"   -H "Authorization: Bearer {{access_token}}"   -H "Content-Type: application/json"   -d '{"Name":"ACME Ltda","BillingCity":"São Paulo"}'
```

Se não existir `SAS_Id__c=12345`, cria; senão, atualiza.

* * *

#### Como tratar exclusão? (lógica x física)

Para integrações, prefira **exclusão lógica** (ex.: `Ativo__c=false`, `Status__c='Inativo'`) para **preservar histórico**. Se precisar remoção física, use `DELETE` com cuidado (impacta relacionamentos, auditoria e relatórios).

* * *

#### Como lidar com relacionamentos (Lookup/Master-Detail)?

-   Insira primeiro os **pais** (ex.: `Account`), guarde seus Ids e então os **filhos** (ex.: `Contact`).
-   Em cargas massivas, utilize **External Ids** também nos relacionamentos:

```
{
  "FirstName": "Ana",
  "LastName": "Silva",
  "Account__r": { "SAS_Id__c": "A-001" }
}
```

* * *

#### Como paginar resultados no SOQL/REST?

-   Em REST `/query`, a resposta traz `nextRecordsUrl` quando há mais páginas.
-   Continue chamando esse `nextRecordsUrl` até esgotar.

* * *

#### Quando usar Composite e sObject Collections?

-   **Composite**: até **25** sub-requisições **encadeadas** com referência entre elas (atomicidade da chamada).
-   **sObject Collections**: **inserção/atualização em lote** no REST com retorno de sucesso/erro por registro.Use **Composite** quando precisa **criar pai e filho na mesma transação**; use **Collections** para **lotes de CRUD**.

* * *

#### E para volumes muito grandes?

**Bulk API 2.0** (CSV/JSON) com jobs assíncronos. Estratégias:

-   **Particionar** por chave natural/intervalos de data.
-   **Evitar** validações pesadas durante cargas (Change Sets/Permissões controladas).
-   **Monitorar** erros por linha e **reprocessar apenas falhas**.

* * *

#### Como tratar limites (governor/API limits)?

-   Os limites variam por **edição** e **licenças**.
-   Monitore cabeçalhos (ex.: `Sforce-Limit-Info`) e **Setup → Company Information** para consumo.Boas práticas: **bulkificar**, usar **Composite**, **cache** de metadados, **compressão** (GZIP) e **backoff** exponencial em `429/503`.

* * *

#### Como lidar com datas/horários e fuso?

-   Salesforce usa **UTC** internamente. Envie/receba em **ISO-8601** (ex.: `2025-08-19T15:30:00Z`).

* * *

#### O que verificar quando recebo erros 4xx/5xx?

-   **400/422**: validações de campo, regras de negócio, FLS/CRUD faltando.
-   **401**: token inválido/expirado (renovar OAuth).
-   **403**: perfil/permissão insuficiente.
-   **429**: limite excedido (implementar **retry com backoff**).
-   **5xx**: reintentar com **idempotência** (upsert/External Id) e **correlação** de logs.

* * *

#### Como garantir idempotência e reprocessamento?

-   Use **External Id** para `upsert`.
-   Persista o **status por registro** (sucesso/erro) e **reenvie apenas falhas**.
-   Evite `INSERT` puro sem checagem de duplicidade.

* * *

#### Onde e como testar?

-   Use **Sandbox** (hml/stg) para desenvolvimento e QA.
-   **Dados mascarados** e cargas representativas.

* * *

#### Como versionar o de/para e lidar com mudanças do FOCO?

-   Centralize o dicionário (ex.: Markdown/planilha controlada por **Git**).
-   Registre **versão**, **data**, **responsável**, **campo SAS**, **campo Salesforce**, **transformações**, **valores permitidos**.
-   Em cada release do FOCO, rode um **diff de metadados** (describe/Metadata API) e atualize o de/para.

* * *

#### Como enviar/receber anexos/arquivos?

-   Use `ContentVersion` (substitui `Attachment` legado).
-   Fluxo comum: criar `ContentVersion` → obter `ContentDocumentId` → **linkar** via `ContentDocumentLink` ao registro alvo.

* * *

#### Como reduzir latência e melhorar performance?

-   **Agrupe** operações (Collections/Composite/Bulk).
-   **Compressão HTTP**, **Keep-Alive** e **reuso de conexão**.
-   **Cache** de metadados (describe) e de códigos de referência.
-   **Limite** campos no SOQL ao necessário.

* * *

#### Como detectar mudanças no Salesforce sem varrer tudo?

-   Avalie **Change Data Capture (CDC)** ou **Streaming** para eventos de alteração.
-   Como alternativa, mantenha um watermark armazenado e use consultas **incrementais** por período.

* * *

#### Exemplo rápido: Composite criando Conta e Contato (mesma transação)

```
{
  "allOrNone": true,
  "compositeRequest": [
    {
      "method": "POST",
      "url": "/services/data/vXX.X/sobjects/Account",
      "referenceId": "acc",
      "body": { "Name": "ACME Ltda", "SAS_Id__c": "A-001" }
    },
    {
      "method": "POST",
      "url": "/services/data/vXX.X/sobjects/Contact",
      "referenceId": "con",
      "body": {
        "FirstName": "Ana",
        "LastName": "Silva",
        "AccountId": "@{acc.id}"
      }
    }
  ]
}
```

* * *

#### Dúvidas que ainda não encontrou aqui?

Padronize a pergunta com: **Objetivo → Objeto/Endpoint → Campos → Erro/Comportamento → Evidências (request/response)**.

Assim aceleramos a resposta e mantemos o dicionário de/para sempre alinhado.

* * *
