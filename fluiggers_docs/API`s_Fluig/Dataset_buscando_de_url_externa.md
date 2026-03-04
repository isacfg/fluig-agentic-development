# Dataset buscando de url externa

> **Fonte:** [https://fluiggers.com.br/t/dataset-buscando-de-url-externa/424](https://fluiggers.com.br/t/dataset-buscando-de-url-externa/424)
> **Categoria:** API`s Fluig
> **Criado em:** 05/05/2021, 11:07
> **Visualizações:** 1571 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 05/05/2021, 11:07

Galera, vocês tem um exemplo de Dataset fazendo um request em uma URL externa (Rest)?

Obs: não posso colocar no form, precisa ser no Dataset customizado mesmo.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 05/05/2021, 11:53 | ❤️ 3

Bom dia Romulo,

Usa algo assim.

function createDataset(fields, constraints, sortFields) {

```
var dados = JSON.parse(constraints[0].initialValue);

var dataset = DatasetBuilder.newDataset();
	dataset.addColumn('resposta'),dataset.addColumn("Status");
	try{
		var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
            companyId 		: getValue("WKCompany")+"",
            serviceCode 	: dados.service+"",							//'CreateCardAPI',
            endpoint 		: dados.endpoint+"",							//'/api/public/2.0/cards/create/',
            method 			: dados.method+"", 							// 'delete', 'patch', 'post', 'get'
            timeoutService	: '100', 									// segundos
            params 			: dados.params
        }
        var vo = clientService.invoke(JSON.stringify(data));

        if(vo.getResult()== null || vo.getResult().isEmpty()){
            dataset.addRow(new Array("Retorno está vazio", false));
        }else{
            dataset.addRow(new Array(vo.getResult(), true));
        }
    } catch(err) {
       dataset.addRow(new Array(err, false));
    }
return dataset;
```

}

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 05/05/2021, 11:54 | ❤️ 1

Parte de autenticação com o serviço externo você faz no Painel de Controle do Fluig e seta o nome do serviço ali no dataset ou envia como parâmetro como esta ali.

A propriedade VO do dataset ali, tem o retorno do status tbm(200,202,400,etc);

---

## Resposta #3

**Romulo Pereira** (@romuloccomp) — 05/05/2021, 13:40 | ❤️ 1

Na mosca! Ajudou demais, obrigado.

---

## Resposta #4

**system** (@system) — 06/05/2021, 05:41

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
