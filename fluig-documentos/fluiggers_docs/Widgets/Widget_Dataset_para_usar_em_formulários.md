# Widget Dataset para usar em formulários

> **Fonte:** [https://fluiggers.com.br/t/widget-dataset-para-usar-em-formularios/707](https://fluiggers.com.br/t/widget-dataset-para-usar-em-formularios/707)
> **Categoria:** Widgets
> **Tags:** `dataset`
> **Criado em:** 05/10/2021, 08:50
> **Visualizações:** 640 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Ulises Magario** (@Agustin_Welschen) — 05/10/2021, 08:50

Olá bom dia queria saber se tem algum exemplo de como enviar os dados carregados em um dataset dentro de um widget para uma requisição de processo. Obrigado

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 05/10/2021, 14:22

Você pode usar API acesse seu fluig [http://caminhodofluig/api/resource\_DatasetServiceRest.html](http://caminhodofluig/api/resource_DatasetServiceRest.html)
Basta consumir por Ajax

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 05/10/2021, 14:26 | ❤️ 1

Uso o código assim

```auto
var dados = {
			documentDescription: "ID do movimento " + IDMOV + " - Nivel: " + nivel,
			version: 1000,
			parentDocumentId: 372,
			inheritSecurity: false,
			formData: [
				{
					name: "idRm",
					value: IDMOV
				},
				{
					name: "nivel",
					value: nivel
				},
				{
					name: "aprovador",
					value: usuario
				}
			]
		}

		$.ajax({
			url: WCMAPI.getServerURL() + "/api/public/2.0/cards/create",
			type: "POST",
			contentType: "application/json",
			beforeSend: function () {
				//div.innerHTML = 'Carregando';
			},
			data: JSON.stringify(dados),
			success: function (data) {
				console.log(data);
				FLUIGC.toast({
					title: "Tudo certo",
					message: "O processo foi movimentado para aprovação com sucesso",
					type: "success"
				});
			},
			error: function (data, errorThrown, status) {
				console.log(data);
				FLUIGC.toast({
					title: "ERRO!",
					message: data,
					type: "danger"
				});
			}
		});
```

---
