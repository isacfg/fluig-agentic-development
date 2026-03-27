# 📘 Consulta de Campos de Objetos no Salesforce com a API Describe

**Fonte:** [https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/2kp-7xn/Documenta%C3%A7%C3%A3o%20Objetos%20FOCO/](https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/2kp-7xn/Documenta%C3%A7%C3%A3o%20Objetos%20FOCO/)
**Subseções detectadas:** 14

## Navegação interna

- [📘 Consulta de Campos de Objetos no Salesforce com a API Describe](#consulta-de-campos-de-objetos-no-salesforce-com-a-api-describe)
- [🔍 O que é a API Describe?](#o-que-a-api-describe)
- [📝 Usando o Describer do Salesforce com Picklists](#usando-o-describer-do-salesforce-com-picklists)
- [🎯 Atenção especial aos Picklists](#aten-o-especial-aos-picklists)
- [🚨 Regras práticas para integradores](#regras-pr-ticas-para-integradores)
- [📌 Exemplo de uso em integração](#exemplo-de-uso-em-integra-o)
- [📡 Endpoints Principais](#endpoints-principais)
- [⚙️ Exemplo Completo com curl](#exemplo-completo-com-curl)
- [Resposta (trecho simplificado):](#resposta-trecho-simplificado)
- [🗂️ Estrutura da Resposta](#estrutura-da-resposta)
- [🛠️ Boas Práticas](#boas-pr-ticas)
- [📖 Por que é uma "Documentação Viva"?](#por-que-uma-documenta-o-viva)
- [✅ Conclusão](#conclus-o)
- [> 🔗 Referência oficial: Salesforce REST API Developer Guide](#refer-ncia-oficial-salesforce-rest-api-developer-guide-https-developer-salesforce-com-docs-atlas-en-us-api_rest-meta-api_rest-resources_sobject_describe-htm)

---

## 📘 Consulta de Campos de Objetos no Salesforce com a API Describe

A **API de Describe** do Salesforce é uma forma poderosa de **descobrir dinamicamente** os campos, tipos de dados, rótulos, relacionamentos e outras informações sobre qualquer objeto padrão ou customizado no Salesforce.

Ela funciona como uma **documentação viva**, sempre atualizada de acordo com as alterações feitas na organização.

* * *

### 🔍 O que é a API Describe?

A API Describe permite:

-   Listar todos os campos de um objeto.
-   Identificar o tipo de dado de cada campo (texto, número, lookup, picklist, etc).
-   Saber se o campo é obrigatório, somente leitura ou atualizável.
-   Descobrir valores de lista de opções (picklists).
-   Entender relacionamentos com outros objetos.
-   Obter metadados úteis como rótulo, comprimento máximo, ajuda, etc.

### 📝 Usando o Describer do Salesforce com Picklists

> Quando integramos com o Salesforce, precisamos conhecer os metadados dos objetos e campos que vamos consumir ou enviar.

> O Describer (via Describe SObject) é o recurso que retorna essa documentação técnica direto da API.

> Para cada campo, traz informações como:

-   Nome do campo (name)
-   Rótulo (label)
-   Tipo (type)
-   Obrigatoriedade (nillable, createable, updateable)
-   Valores possíveis (quando é picklist)

### 🎯 Atenção especial aos Picklists

> Os campos do tipo picklist possuem um detalhe importante:

-   Eles não aceitam o label visível na tela do Salesforce.
-   Eles exigem que seja enviado o value definido internamente.

👉 Exemplo de resposta de describe para um campo picklist:

```
{
  "name": "Status__c",
  "type": "picklist",
  "picklistValues": [
    {
      "label": "Ativo",
      "value": "Active",
      "active": true,
      "defaultValue": false
    },
    {
      "label": "Inativo",
      "value": "Inactive",
      "active": true,
      "defaultValue": false
    }
  ]
}
```

✅ Como usar na integração

-   O usuário vê o label (“Ativo”, “Inativo”).
-   Mas a integração deve enviar o value (“Active”, “Inactive”).

⚠️ Se enviar o label, o Salesforce vai retornar erro de validação.

### 🚨 Regras práticas para integradores

1.  Sempre consulte o Describer antes de mapear campos.
2.  Para campos do tipo picklist:
3.  Use o campo value nas integrações.
4.  Nunca use o label.
5.  Se o picklist for dependente de outro campo, o describe já mostra essa relação.
6.  Atenção: os valores podem mudar (ex.: inclusão de novos itens).
7.  Por isso, é recomendado automatizar a leitura dos picklistValues ou manter uma rotina de atualização.

### 📌 Exemplo de uso em integração

Campo no Salesforce: Status\_\_c

-   Usuário escolhe “Ativo” na tela.
-   Na integração (POST/PUT), deve ser enviado:

```
{
  "Status__c": "Active"
}
```

> ⚡ Isso elimina a necessidade de consultar manualmente a configuração do Salesforce, já que a própria API devolve a descrição em tempo real.

* * *

### 📡 Endpoints Principais

1.  **Listar todos os objetos disponíveis**GET /services/data/vXX.X/sobjects
    
    -   Retorna todos os objetos (padrão e customizados) da org.
    -   Exemplo de resposta: `Account`, `Contact`, `Lead`, `Evento__c`, etc.
2.  **Descrever um objeto específico**GET /services/data/vXX.X/sobjects/Account/describe
    
    -   Substitua `Account` pelo nome do objeto desejado.
    -   Para objetos customizados, use o sufixo `__c`.Exemplo: `/sobjects/Evento__c/describe`

* * *

### ⚙️ Exemplo Completo com `curl`

```
curl https://hlg-gateway.sebrae.com.br/foco-stg/services/data/v60.0/sobjects/Account/describe   -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

#### Resposta (trecho simplificado):

```
{
  "fields": [
    {
      "name": "Name",
      "label": "Account Name",
      "type": "string",
      "length": 255,
      "nillable": false,
      "updateable": true
    },
    {
      "name": "Industry",
      "label": "Industry",
      "type": "picklist",
      "picklistValues": [
        {"label": "Technology", "value": "Technology"},
        {"label": "Finance", "value": "Finance"}
      ]
    }
  ],
  "label": "Account",
  "keyPrefix": "001",
  "custom": false
}
```

* * *

### 🗂️ Estrutura da Resposta

O JSON retornado contém informações como:

-   `fields` → lista de todos os campos.
-   `label` → nome amigável do objeto.
-   `custom` → se é padrão ou customizado.
-   `keyPrefix` → prefixo dos IDs daquele objeto.

Dentro de cada `field`:

-   `name`: nome do campo (API name).
-   `label`: rótulo exibido na UI.
-   `type`: tipo do campo (`string`, `boolean`, `picklist`, `reference`, etc).
-   `length`: tamanho máximo (quando aplicável).
-   `nillable`: se aceita valores nulos.
-   `updateable`: se pode ser alterado via API.
-   `picklistValues`: lista de valores, caso seja um campo picklist.

* * *

### 🛠️ Boas Práticas

-   Sempre utilize a **versão mais recente da API REST** (`vXX.X`) para garantir suporte a novos recursos.
-   Automatize a chamada `describe` para gerar **documentações automáticas** dos objetos usados no seu projeto.
-   Combine com **SOQL** para validar quais campos realmente possuem dados.
-   Use em conjunto com ferramentas de integração (ex.: MuleSoft, Postman, Workbench).

* * *

### 📖 Por que é uma "Documentação Viva"?

-   Cada alteração feita no Salesforce (adição de campos, mudança de tipo, renomeação de rótulo) é **imediatamente refletida** no endpoint `describe`.
-   Isso significa que sua equipe de TI e de integração não precisa depender de planilhas estáticas ou manuais desatualizados.
-   O `describe` sempre mostrará **o estado real da sua org**, funcionando como **fonte oficial de verdade** sobre objetos e campos.

* * *

### ✅ Conclusão

A **API Describe** é essencial para quem integra ou documenta objetos no Salesforce.

Ela reduz o esforço manual, mantém a documentação sempre atualizada e garante mais confiabilidade no desenvolvimento de integrações.

### \> 🔗 Referência oficial: [Salesforce REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm)
