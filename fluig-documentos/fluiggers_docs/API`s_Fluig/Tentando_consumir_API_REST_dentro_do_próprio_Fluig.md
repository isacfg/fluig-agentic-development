# Tentando consumir API REST dentro do próprio Fluig

> **Fonte:** [https://fluiggers.com.br/t/tentando-consumir-api-rest-dentro-do-proprio-fluig/614](https://fluiggers.com.br/t/tentando-consumir-api-rest-dentro-do-proprio-fluig/614)
> **Categoria:** API`s Fluig
> **Criado em:** 14/08/2021, 10:28
> **Visualizações:** 2424 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 14/08/2021, 10:28

Bom dia pessoal, estou tentando consumir um post na API card para inserir um dado em um formulário, através de uma widget. Minha ideia é fazer um controle de acesso a widget usando um dataset como banco de dados (se alguém tiver uma estratégia diferente para essa função, fica a vontade). Porém, quando eu tento inserir por ajax usando a documentação da API o retorno é ERRO 500. Alguém consegue me dar uma luz do que pode estar ocorrendo?
Eis o código:

```auto
var dados = {
						"documentDescription": "newcard",
						"version": 1000,
						"parentDocumentId": 372,
						"inheritSecurity": false,
						"formData": [
							{ "idRm": dataset.values[x].IDMOV,
							  "valorTotal": dataset.values[x].VALORBRUTO,
							}]
					}

					$.ajax({
						url: '/api/2.0/cards/create',
						type: "POST",
						contentType: "application/json",
						Accept: "text/html",
						data: dados,
						success: function (data) {
							console.log(data);
						},
						error: function (data, errorThrown, status) {
							console.log(data);
						}
					});
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/08/2021, 11:42 | ❤️ 1

No log do Fluig não foi informado nenhum motivo do erro?

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Mauricio Freitas** (@mauriciolanner) — 16/08/2021, 13:57 | ❤️ 1

Hoje pela manhã consultei um colega que me ajudou e conseguimos fazer funcionar, o problema estava na estrutura dos dados. O resultado final do código ficou assim:

```auto
var dados = {
						documentDescription: "ID do movimento " + dataset.values[x].IDMOV,
						version: 1000,
						parentDocumentId: 372,
						inheritSecurity: false,
						formData: [
							{
								name: "idRm",
								value: dataset.values[x].IDMOV
							},
							{
								name: "valorTotal",
								value: dataset.values[x].VALORBRUTO
							}]
					}

					$.ajax({
						url: WCMAPI.getServerURL() + "/api/public/2.0/cards/create",
						type: "POST",
						contentType: "application/json",
						data: JSON.stringify(dados),
						success: function (data) {
							console.log(data);
						},
						error: function (data, errorThrown, status) {
							console.log(data);
						}
					});
```

---

## Resposta #3

**Mauricio Freitas** (@mauriciolanner) — 16/08/2021, 15:50

[@Bruno\_Gasparetto](/u/bruno_gasparetto) sabe me dizer se tem essa API para editar o formulário?

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/08/2021, 16:50 | ❤️ 1

Na parte de formulários ainda não usei a REST. Aqui já usavam SOAP e não tive novas interações pra mudar.

[https://tdn.totvs.com/pages/releaseview.action?pageId=73084007#UtilizaçãodeWebservices-ECMCardService](https://tdn.totvs.com/pages/releaseview.action?pageId=73084007#Utiliza%C3%A7%C3%A3odeWebservices-ECMCardService)

O método de atualizar seria `updateCardData`

---

## Resposta #5

**system** (@system) — 17/08/2021, 08:50

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
