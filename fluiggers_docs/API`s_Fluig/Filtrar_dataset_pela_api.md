# Filtrar dataset pela api

> **Fonte:** [https://fluiggers.com.br/t/filtrar-dataset-pela-api/1779](https://fluiggers.com.br/t/filtrar-dataset-pela-api/1779)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 23/03/2023, 17:44
> **Visualizações:** 950 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 23/03/2023, 17:44

Como consigo filtrar um determinado valor em um coluna do meu dataset utilizando a api ?
Estou tentando buscar somente os produtos que possuem valor B na coluna tipoProduto

/api/public/ecm/dataset/search?datasetId=dsConsultaProdutos&searchField=tipoProduto&searchValue=B

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 24/03/2023, 09:20 | ❤️ 1

Eu não gostei dessa API, usa a API antiga onde você consome o dataset e passa as constraints no corpo da requisição.

Abaixo esta um exemplo de uma chamada usando ela:

POST: `/api/public/ecm/dataset/datasets`

JSON:

```auto
{
	"name": "nomeDoDataset",
	"constraints": [
		{
			"_field": "CAMPO",
			"_initialValue": "VALOR",
			"_finalValue": "VALOR",
			"_type": 1,
			"_likeSearch": false
		}
	]
}
```

Para mais detalhes acesse a documentação:
[DatasetServiceRest](https://api.fluig.com/old/resource_DatasetServiceRest.html)

---

## Resposta #2

**Wanderley Junior** (@gomeswjunior) — 27/03/2023, 14:22

Direto, via chamado ninguém nunca fez ? queria que fosse diretamente assim
/api/public/ecm/dataset/search datasetId=dsConsultaProdutos&searchField=tipoProduto&searchValue=B

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/03/2023, 14:58

e qual é o erro?

Testei e deu certo.

![image](https://fluiggers.com.br/uploads/default/original/1X/fb1dcc0eeceecedfe550993775aeffb6987a5c31.png)

---

## Resposta #4

**Wanderley Junior** (@gomeswjunior) — 28/03/2023, 11:31

Bruno, no colleague funciona mesmo mas estou tentando em um dataset customizado.

Nele estou pegando todos os usuário ativos

```javascript
var data = {
            companyId : 1 + '',
            serviceCode : 'API_FLUIG',
            endpoint : '/api/public/2.0/users/list/ACTIVE?limit=5000',
            method : 'get',
            timeoutService: "100",
            options: {
                encoding : 'UTF-8',
                mediaType: 'application/json',
                useSSL : true
            }
        };
```

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/03/2023, 11:41

E como você tratou as constraints no seu dataset customizado?

---

## Resposta #6

**Wanderley Junior** (@gomeswjunior) — 28/03/2023, 11:46

Não fiz nenhum tratamento de constraint, apenas consulto o endpoint e guardo o retorno através do dataset.addRow. Como seria esse tratamento ?

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 28/03/2023, 11:47

Dá uma olhada na documentação do Fluig sobre desenvolvimento de Dataset.

[https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#ConstruçãodoDatasetAvançado-Datasetavançadocomutilizaçãodeconstraint](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219#Constru%C3%A7%C3%A3odoDatasetAvan%C3%A7ado-Datasetavan%C3%A7adocomutiliza%C3%A7%C3%A3odeconstraint)

---
