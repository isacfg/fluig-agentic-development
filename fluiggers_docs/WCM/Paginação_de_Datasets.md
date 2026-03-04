# Paginação de Datasets

> **Fonte:** [https://fluiggers.com.br/t/paginacao-de-datasets/527](https://fluiggers.com.br/t/paginacao-de-datasets/527)
> **Categoria:** WCM
> **Criado em:** 24/06/2021, 08:03
> **Visualizações:** 1636 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 24/06/2021, 08:03

Bom dia galera! Tudo certo?

Queria saber se existe algo pronto no Fluig mesmo que faça a paginação dos registros de um dataset, assim como fazemos em querys SQL triviais com LIMIT e OFFSET.

Valeu!!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/06/2021, 09:20

Sei que pela DatasetFactory.getDataset é possível enviar a constraint sqlLimit ([documentação](https://tdn.totvs.com/display/public/fluig/Acessando+Datasets#AcessandoDatasets-ConstraintsAvan%C3%A7adas))

Pela API REST /ecm/dataset/search também é possível passar o limite de resultados.

Porém em nenhum deles vi a opção (ao menos não achei na documentação) dizendo que é possível passar o offset. Então teria que ordenar pelo ID, por exemplo, e na próxima chamada solicitar somente os resultados com o ID maior do que o último recebido.

---

## Resposta #2

**Vinicius de Moura Silveira** (@vinny.silveira) — 24/06/2021, 09:55

Bom dia [@Bruno\_Gasparetto](/u/bruno_gasparetto) !! Valeu pelo retorno, esse lance de ordenar pelo ID e fazer um where não é tão performático quanto o offset, que vai direto na fatia correta de dados, mas a ideia é muito boa mesmo.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/06/2021, 15:23 | ❤️ 1

Pode ser que tenha um jeito de mandar o offset. Já percebi que o o Fluig tem muita documentação oculta.

Mas a questão da performance do where é meio relativo. Teria que estudar bem isso. Em teoria a pesquisa pelo ID ocorreria em uma chave primária, então seriam menos resultados encontrados e o banco só limitaria em X a quantidade de registros retornados. Já com offset o banco encontra sempre todos os resultados e então precisa correr até o registro Y e retornar X resultados.

Pode ser que o Fluig não tenha implementado isso porque o SQL Server e Oracle não davam suporte, mas agora que ambos possuem LIMIT e OFFSET seria uma ótima a TOTVS acrescentar essa opção aos Datasets.

---

## Resposta #4

**Vinicius de Moura Silveira** (@vinny.silveira) — 25/06/2021, 16:33 | ❤️ 1

Valeu a dica [@Bruno\_Gasparetto](/u/bruno_gasparetto) !! Como estou construindo querys complexas, acabei optando por enviar o LIMIT e OFFSET pelas constraints quando consulta o dataset via REST, e faço a paginação no front com o Datatables.

---
