# Manual de Uso – APIs Nativas Salesforce FOCO

**Fonte:** [https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/9p1-e6p/Manual%20de%20Uso/](https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/9p1-e6p/Manual%20de%20Uso/)
**Subseções detectadas:** 12

## Navegação interna

- [Manual de Uso – APIs Nativas Salesforce FOCO](#manual-de-uso-apis-nativas-salesforce-foco)
- [Objetivo](#objetivo)
- [Collection Postman](#collection-postman)
- [Como usar](#como-usar)
- [Variáveis da Collection (FOCO)](#vari-veis-da-collection-foco)
- [Variavel {{_endpoint}}](#variavel-_endpoint)
- [Opções disponíveis](#op-es-dispon-veis)
- [Login Salesforce via API](#login-salesforce-via-api)
- [Resposta](#resposta)
- [Configuração do Token no Postman](#configura-o-do-token-no-postman)
- [Teste de Requisição](#teste-de-requisi-o)
- [Avisos de Compatibilidade](#avisos-de-compatibilidade)

---

## Manual de Uso – APIs Nativas Salesforce FOCO

* * *

### Objetivo

Este manual tem como objetivo **auxiliar no uso das APIs nativas do Salesforce FOCO**, oferecendo instruções claras sobre autenticação, configuração e exemplos práticos de consumo.

* * *

### Collection Postman

-   **Collection disponível em:** [https://www.postman.com/salesforce-developers/salesforce-developers/collection/b32utmu/salesforce-platform-apis](https://www.postman.com/salesforce-developers/salesforce-developers/collection/b32utmu/salesforce-platform-apis)

> Collection disponibilizada pela Comunidade Salesforce Developer

* * *

### Como usar

1.  Baixe a collection no link acima ou clicando [AQUI](https://www.postman.com/salesforce-developers/salesforce-developers/collection/b32utmu/salesforce-platform-apis).
2.  Importe no **Postman** ou ferramenta de sua preferência.
3.  Configure a variável `{{_endpoint}}` para o ambiente desejado (teste ou produção).
4.  Faça Login no Salesforce FOCO via API para receber o token de autenticação(Bearer Token).

* * *

### Variáveis da Collection (FOCO)

#### Variavel {{\_endpoint}}

-   A variável `{{_endpoint}}` é responsável por indicar **qual ambiente do Salesforce FOCO será utilizado nas requisições**.
-   Ela já está pré-configurada em todas as guias da collection, sendo necessário definir o valor **apenas uma vez** para que todos os serviços possam ser acessados corretamente.
-   Por isso, antes de executar qualquer chamada no Postman, **certifique-se de configurar o** `{{_endpoint}}` **com a URL do ambiente desejado** (Produção, Homologação ou Staging).

> **Observação:** no Postman, você também pode criar **variáveis de ambiente** (Environment Variables).  
> Assim, ao trocar o ambiente (por exemplo, de Homologação para Produção), o valor de `{{_endpoint}}` é atualizado automaticamente, tornando o processo mais ágil.

#### Opções disponíveis

<table><thead><tr><th>Ambiente</th><th>Descrição</th><th>URL Base</th></tr></thead><tbody><tr><td><strong>Produção</strong></td><td>Ambiente oficial em uso pelos usuários finais (ainda não disponivel).</td><td><a href="https://gateway.sebrae.com.br/foco" rel="noopener noreferrer">https://gateway.sebrae.com.br/foco</a></td></tr><tr><td><strong>Homologação</strong></td><td>Ambiente para testes de homologação junto aos integradores.</td><td><a href="https://hlg-gateway.sebrae.com.br/foco" rel="noopener noreferrer">https://hlg-gateway.sebrae.com.br/foco</a></td></tr><tr><td><strong>Staging</strong></td><td>Ambiente intermediário usado para validações técnicas.</td><td><a href="https://hlg-gateway.sebrae.com.br/foco-stg" rel="noopener noreferrer">https://hlg-gateway.sebrae.com.br/foco-stg</a></td></tr></tbody></table>

> Substitua o valor da variável `{{_endpoint}}` pela URL correspondente ao ambiente desejado.

* * *

### Login Salesforce via API

Para realizar requisições via API, é **obrigatório autenticar o usuário** antes.

Use o cURL abaixo substituindo pelas suas credenciais (que podem ser armazenadas em variáveis):

```
curl -L 'https://hlg-gateway.sebrae.com.br/foco-login/services/oauth2/token'
-H 'Content-Type: application/x-www-form-urlencoded'
-H 'Accept: application/json'
-d 'grant_type=password'
-d 'client_id=<CLIENT_ID>'
-d 'client_secret=<CLIENT_SECRET>'
-d 'username=<USUARIO_SALESFORCE>'
-d 'password=<SENHA_SALESFORCE>'
```

### Resposta

A resposta do Salesforce será semelhante a essa:

```
{
  "access_token": "AUTHoRIZATION!TOKEN.EXEMpLo0123AbCD==",
  "instance_url": "https://sebraecrm--stg.sandbox.my.salesforce.com",
  "id": "https://test.salesforce.com/id/abcd0223/0223dcba",
  "token_type": "Bearer",
  "issued_at": "123456789",
  "signature": "ASSINATURAEXEMPLODAFVDTvvXAegf00=="
}
```

* * *

### Configuração do Token no Postman

1.  Copie o valor de `access_token` retornado.
2.  Vá até a aba **Authorization** da requisição no Postman.
3.  Em **Auth** **Type**, selecione **Bearer Token**.
4.  Cole o token no campo **Token**.

> (Opcional) Você pode salvar o `access_token` em uma variável de ambiente `{{access_token}}` para reaproveitar nas requisições.

* * *

### Teste de Requisição

Execute um GET simples para validar a configuração:

```
curl -L 'https://hlg-gateway.sebrae.com.br/foco/services/data/v62.0/query/?q=SELECT Id, Name FROM Account LIMIT 2' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <AUTHORIZATION_TOKEN>'
```

Se estiver tudo correto, o serviço responderá com 2 registros de clientes, como mostra exemplo abaixo:

```

{
    "totalSize": 2,
    "done": true,
    "records": [
        {
            "attributes": {
                "type": "Account",
                "url": "/services/data/v62.0/sobjects/Account/9876543210"
            },
            "Id": "9876543210",
            "Name": "Cliente de Exemplo 1"
        },
        {
            "attributes": {
                "type": "Account",
                "url": "/services/data/v62.0/sobjects/Account/0123456789"
            },
            "Id": "0123456789",
            "Name": "Cliente de Exemplo 2"
        }
    ]
}
```

* * *

### Avisos de Compatibilidade

-   As APIs do **SAS antigo** utilizavam autenticação baseada em Chaves de Acesso (`Header x-req`); agora é necessário **OAuth 2.0**.
-   No FOCO, os serviços de **consulta** geralmente são realizados por meio de **queries nos parâmetros das requisições** ou utilizando o **ID do objeto**.Outras formas de acesso podem existir (ex.: chamadas SOAP), mas estas são as abordagens mais utilizadas e recomendadas nas integrações atuais.
-   Os resultados retornados via API utilizam o **nome técnico do campo** definido no Salesforce FOCO.Exemplo: a API retorna `Codigo__c` em vez de `CodCliente`.

* * *
