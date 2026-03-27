# Manual de Uso – Bulk API v2 Salesforce

**Fonte:** [https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/9jm-5ya/BULK%20API%20V2/](https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/9jm-5ya/BULK%20API%20V2/)
**Subseções detectadas:** 11

## Navegação interna

- [Manual de Uso – Bulk API v2 Salesforce](#manual-de-uso-bulk-api-v2-salesforce)
- [Objetivo](#objetivo)
- [Documentação Oficial](#documenta-o-oficial)
- [Como usar](#como-usar)
- [Estrutura do Fluxo](#estrutura-do-fluxo)
- [Criar um Job](#criar-um-job)
- [Enviar Dados (CSV)](#enviar-dados-csv)
- [Fechar o Job](#fechar-o-job)
- [Monitorar o Job](#monitorar-o-job)
- [Consultar Resultados](#consultar-resultados)
- [Avisos de Compatibilidade](#avisos-de-compatibilidade)

---

## Manual de Uso – Bulk API v2 Salesforce

* * *

### Objetivo

Este manual tem como objetivo **auxiliar no uso da Bulk API v2 do Salesforce**, apresentando instruções de autenticação, configuração de jobs, envio de dados e consulta de resultados, além de exemplos práticos em **cURL**.

* * *

### Documentação Oficial

-   [📚 Salesforce Bulk API v2 Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2)

* * *

### Como usar

1.  Autentique-se no Salesforce e obtenha um **Bearer Token** via OAuth 2.0.
2.  Crie um **Job** especificando a operação desejada (insert, update, upsert, delete, query).
3.  Envie os dados em formato **CSV**.
4.  Finalize o **Job** informando que o upload foi concluído.
5.  Monitore o processamento até o status `JobComplete`.
6.  Consulte os resultados para verificar **sucesso, falhas ou registros não processados**.

* * *

### Estrutura do Fluxo

<table><thead><tr><th>Etapa</th><th>Método</th><th>Endpoint</th></tr></thead><tbody><tr><td>Criar Job</td><td>POST</td><td><code>/services/data/v61.0/jobs/ingest</code></td></tr><tr><td>Enviar CSV</td><td>PUT</td><td><code>/services/data/v61.0/jobs/ingest/&lt;jobId&gt;/batches</code></td></tr><tr><td>Fechar Job</td><td>PATCH</td><td><code>/services/data/v61.0/jobs/ingest/&lt;jobId&gt;</code></td></tr><tr><td>Status do Job</td><td>GET</td><td><code>/services/data/v61.0/jobs/ingest/&lt;jobId&gt;</code></td></tr><tr><td>Resultados OK</td><td>GET</td><td><code>/services/data/v61.0/jobs/ingest/&lt;jobId&gt;/successfulResults/</code></td></tr><tr><td>Resultados Erro</td><td>GET</td><td><code>/services/data/v61.0/jobs/ingest/&lt;jobId&gt;/failedResults/</code></td></tr><tr><td>Não processados</td><td>GET</td><td><code>/services/data/v61.0/jobs/ingest/&lt;jobId&gt;/unprocessedrecords/</code></td></tr></tbody></table>

* * *

### Criar um Job

```
curl -X POST {{baseUrlWeb}}/services/data/v61.0/jobs/ingest   -H "Authorization: Bearer {{access_token}}"   -H "Content-Type: application/json"   -d '{
        "object": "Account",
        "operation": "insert",
        "contentType": "CSV",
        "lineEnding": "LF"
      }'
```

**Resposta esperada:**

```
{
  "id": "750xx000000005QAAQ",
  "object": "Account",
  "operation": "insert",
  "state": "Open"
}
```

* * *

### Enviar Dados (CSV)

```
curl -X PUT {{baseUrlWeb}}/services/data/v61.0/jobs/ingest/<jobId>/batches   -H "Authorization: Bearer {{access_token}}"   -H "Content-Type: text/csv"   --data-binary @dados.csv
```

**Exemplo de arquivo** `dados.csv`**:**

```
Name,Phone
Empresa Exemplo,551199999999
Outra Empresa,551198888888
```

* * *

### Fechar o Job

```
curl -X PATCH {{baseUrlWeb}}/services/data/v61.0/jobs/ingest/<jobId>   -H "Authorization: Bearer {{access_token}}"   -H "Content-Type: application/json"   -d '{"state":"UploadComplete"}'
```

* * *

### Monitorar o Job

```
curl -X GET {{baseUrlWeb}}/services/data/v61.0/jobs/ingest/<jobId>   -H "Authorization: Bearer {{access_token}}"
```

**Status possíveis:**

-   `Open`
-   `UploadComplete`
-   `InProgress`
-   `JobComplete`
-   `Failed`

* * *

### Consultar Resultados

-   **Registros bem-sucedidos:**

```
curl -X GET {{baseUrlWeb}}/services/data/v61.0/jobs/ingest/<jobId>/successfulResults/   -H "Authorization: Bearer {{access_token}}"
```

-   **Registros com erro:**

```
curl -X GET {{baseUrlWeb}}/services/data/v61.0/jobs/ingest/<jobId>/failedResults/   -H "Authorization: Bearer {{access_token}}"
```

-   **Registros não processados:**

```
curl -X GET {{baseUrlWeb}}/services/data/v61.0/jobs/ingest/<jobId>/unprocessedrecords/   -H "Authorization: Bearer {{access_token}}"
```

* * *

### Avisos de Compatibilidade

-   A Bulk API v2 substitui a **Bulk API v1** em diversos cenários, sendo mais simples e otimizada para grandes volumes.
-   O formato suportado é **CSV** (não há suporte a XML ou JSON para carga de dados).
-   O limite máximo é de **150 MB por upload** e até **15 GB por job**.
-   Os nomes de campos utilizados devem ser os mesmos definidos no **Salesforce FOCO** (ex.: `Codigo__c`, `Descricao__c`).

* * *
