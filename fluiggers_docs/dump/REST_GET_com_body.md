# REST GET com body

> **Fonte:** [https://fluiggers.com.br/t/rest-get-com-body/1187](https://fluiggers.com.br/t/rest-get-com-body/1187)
> **Categoria:** API`s Fluig
> **Tags:** `webservice`, `rest`
> **Criado em:** 13/07/2022, 21:54
> **Visualizações:** 1074 | **Likes:** 6 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 13/07/2022, 21:54

Salve, nação!

Beleza? Alguém sabe como fazer um GET via backend (dataset) com conteúdo no body? Temos esse caso aqui e parece que o Fluig ‘comeu’ o body, mandando a requisição sem ele.

Exemplo:

```auto
var details = {
            'UserName': 'xxxxxxxxxxxxx',
            'Password': 'xxxxxxxxxxxx',
            'UF': 'XX'
        };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    var dataAuth = {
            companyId: String(getValue('WKCompany')),
            serviceCode: 'integracaoSGF',
            endpoint: '/api/Authentication/GetTokenUsuarioExterno',
            method: 'GET',
            timeoutService: '100',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
                    },
            options: {
                useSSL : true
            }
        };
```

Ao ver o log detalhado do serviço fica claro que não tem body sendo enviado - o log do Fluig não informa erro, executa a requisição GET normalmente e pega o retorno (com erro pela ausência do body)

Valeu!!

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 14/07/2022, 08:23

Bom dia meste,
Eu uso assim e a tag params e o body do fluig pelo que entendo dele. O que ou ponho no body do postman eu cologo no param mesmo sendo post ou get.

```auto
var data = {
				companyId : 	String('0'+getValue("WKCompany")),
				serviceCode :	'Protheus',
				endpoint : 		'/rest/FLGCOM00/PedidodeCompras',
				method : 		'post',
				timeoutService: '100',
				params : {
					"ITENS" 	: items1,
					"C7_FORNECE": String(hAPI.getCardValue('CCOD3')),
					"C7_LOJA" 	: String(hAPI.getCardValue('CLOJA3')),
					"C7_COND" 	: String(hAPI.getCardValue('CODCOND3')),
					"C7_CONTATO": "",
					"C7_USER"	: String(hAPI.getCardValue('id_protheus_cotacao'))
				},
				headers: {
					"tenantid" : String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2') )
				}
			}
```

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/07/2022, 11:45 | ❤️ 1

Sinceramente nunca imaginei enviar um Body em uma requisição GET.

Até vou dar uma conferida, mas pelo que lembro no HTTP 1.1 já tinha alguma coisa falando pra não fazer isso.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 14/07/2022, 11:47 | ❤️ 3

O famigerado Protheus aceita isso. Ai os programadores ADVPL ficam mau acostumados.
kkkkkk

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 15/07/2022, 11:19

Ave Maria… ‘não tenho nem figurinha pra isso’ kkkkkkkkkkkkkkk

---

## Resposta #5 ✅ RESPOSTA ACEITA

**João Victor Abrão** (@Joao_Victor_Abrao) — 19/07/2022, 17:44 | ❤️ 2

Boa tarde pessoal!
O Daniel fez o post, mas o abacaxi era meu.
Conseguimos resolver com a alteração do tipo do método. O pessoal que desenvolveu a API alterou o tipo para POST. Enviei como estava e foi certinho. Valeu pela ajuda de todos.

---
