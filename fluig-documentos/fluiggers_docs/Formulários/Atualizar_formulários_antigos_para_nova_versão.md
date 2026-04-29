# Atualizar formulários antigos para nova versão

> **Fonte:** [https://fluiggers.com.br/t/atualizar-formularios-antigos-para-nova-versao/3390](https://fluiggers.com.br/t/atualizar-formularios-antigos-para-nova-versao/3390)
> **Categoria:** Formulários
> **Tags:** `form`, `ged`
> **Criado em:** 27/08/2025, 09:49
> **Visualizações:** 70 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 27/08/2025, 09:49

Exportei uma nova versão de formulário que não faz parte de nenhum processo, utilizo como registro de formulário no GED, mas tenho que subir o novo script nas propriedades de cada registro já feito individualmente, e são muito. alguém sabe um modo de atualizar todos os registros de formulário para a nova versão de uma só vez?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 27/08/2025, 19:33

Olá, existem algumas opções para realizar este procedimento.

Se seu ambiente for local, pode se direcionar ao acesso do servidor, navegar no diretorio de volume/forms/codigo do seu formulário/e colar o seu js em todas as pastas de versões.

outra envolvendo banco de dados, vc pode dar um update na tabela documento, obrigando que todos os registros facam a leitura da ultima versão de código do formulário! geralmente é bom testar com alguns registros especificos usando o where antes de rodar para todos os registros do formulário.

UPDATE DOCUMENTO SET NUM\_VERSION=‘5000’ where NR\_DOCUMENTO\_PAI=‘200’;

Onde NUM\_VERSION é a versão do seu formulário e NR\_DOCUMENTO\_PAI o código do formulário no GED.

busque rodar com o WHERE DOCUMENTID=‘201’ onde DOCUMENTID é o codigo do registro do formulário na versão antiga.

---

## Resposta #2

**matheus.jesus** (@matheus.jesus) — 28/08/2025, 09:53 | ❤️ 1

Valeu pela ajuda!

Mas o ambiente é tcloud :frowning:

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 28/08/2025, 21:33

[@matheus.jesus](/u/matheus.jesus) é possível solicitar para eles executarem a query! importante vc validar a consulta via portal do TCLOUD antes! pode abrir um ticket e me colocar em cópia! me envie um email amanha que te auxilio! igor.goes@totvs.com.br

---
