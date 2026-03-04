# Consumir API Externa para Formulário Fluig

> **Fonte:** [https://fluiggers.com.br/t/consumir-api-externa-para-formulario-fluig/1020](https://fluiggers.com.br/t/consumir-api-externa-para-formulario-fluig/1020)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `fluigapi`, `javascript`
> **Criado em:** 11/04/2022, 15:58
> **Visualizações:** 2409 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Filipe Silva** (@ferilva89) — 11/04/2022, 15:58

Pessoal,

Preciso fazer um request numa API externa onde preciso passar alguns dados para receber a informação se há estoque ou não do produto do request.

No formulário está assim:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/39adcc64e83d523736bcc6c3db04e7568150ed55_2_690x138.png)

A estrutura do JSON que preciso enviar é essa:

```auto
{
	"SMC": "123456",
	"ITEMS": [
		{
			"Item": "01",
			"Codigo": "MC15001754",
			"Quant": 0
		}
	]
}
```

Esse é o retorno do JSON:

```auto
{
	"data": "{\"SEQ\":\"06\",\"ITEMS\":[{\"Estoque\":\"S\",\"Item\":\"01\",\"Codigo\":\"MC15001754\"}],\"EST\":\"S\"}",
	"status": true,
	"msg": "Sucesso"
}
```

Porém, como estou começando, gostaria de uma ajuda de onde começar a fazer isso.

```auto
const url = 'http://192.168.1.220:7798/ws/cbcAlmoxApi/smc';

let data = {
	"SMC": "000944",
	"ITEMS": [
		{
			"Item": "01",
			"Codigo": "MC15002583",
			"Quant": 1
		}
	]
}

var request = new Request(url, {
	method: 'POST',
	body: data,
	headers: new Headers()
});

fetch(request)
.then(function() {
})
```

Seria algo nesse caminho?

Esse trecho eu coloco no HTML do formulário ou crio um evento específico para esse trecho?

Alguém poderia me ajudar?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 11/04/2022, 21:50 | ❤️ 1

Boa noite,

Você deve cadastra o serviço em questão no fluig. Va em painel de controle->Serviços e crie um novo serviço. Depois faça a chamada do serviço pelo seu formulário.

Segue um exemplo de chamada do serviço criado.

```javascript
var data1 = {
					companyId : '01',                                                   //Codigo da empresa no fluig cadastrado no WCMADMIN
					serviceCode : 'Protheus',                                           //Nome dado ao serviço no painel de controle
					endpoint : '/rest/FLGGCT01/IncluirContrato/',                       //Endpoint do serviço cadastrado no painelo de controle
					method : 'post',
					timeoutService: '100',
					params : {
						"CN9_XNFLUI" : String(hAPI.getCardValue("CN9_XNFLUI")),							// "Numero fluig"
						"CN9_NUMERO" : String(hAPI.getCardValue("CNPJ")).replace(/[-\/.]/gm,""),		// "Numero do Contrato"
						"CN9_CLIENT" : dataset.getValue(0, "A1_COD"),									// "Codigo do Cliente"
						"CN9_LOJACL" : dataset.getValue(0, " A1_LOJA"),									// "Loja do Cliente"
						"CN9_DTINIC" : String(dtini.yyyymmdd()),										// "Data inicio da vigencia"
						"CN9_UNVIGE" : "3",																// "Tipo de Vigencia"
						"CN9_VIGE" : "5",																// "Quantidade da Vigencia"
						"CN9_TPCTO" : String(hAPI.getCardValue("CN9_TPCTO")).replace(".1",""),			// "Codigo do Tipo de Contrato"
						"CN9_CONDPG" : "003",															// "Codigo da Condição de Pagamento"
						"CN9_FLGREJ" : "2",																// "Reajuste? S ou N"
						"CNA_TIPPLA" : "003",															// "Tipo de Planilha"
						"CNA_DTFIM" : String(d.yyyymmdd()),												// "Data Fim da Planilha"
						"CNA_INDICE" : "",																// "Indice de Reajuste"
						"ITENS": [
							{
								"CNB_PRODUT":"DE000163",
								"CNB_XRG":"",
								"CNB_QUANT":"1",
								"CNB_VLUNIT":String(hAPI.getCardValue("investimento")).replace("R$ ","").replace(".","").replace(",","."),
								"CNB_TS":"719"
							}
						]
					},
					headers: {
						'tenantid': '10,01'
					}
				}
				var vo1 = clientService1.invoke(JSON.stringify(data1));
```

Qualquer dúvida só avisar.

---

## Resposta #2

**Filipe Silva** (@ferilva89) — 12/04/2022, 10:43

Olá Daniel! Obrigado por responder!

O cadastro de serviços do fluig seria esse?

![image](https://fluiggers.com.br/uploads/default/optimized/1X/0a6c58e52178bcb499f3ea7833634e045ed7d64f_2_690x322.png)

E outra coisa, esse trecho é dentro do HTML do Form ou um novo evento JS?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 12/04/2022, 11:20

Esse mesmo.
O trecho vai no js do formulário ou na tag

---

## Resposta #4

**Filipe Silva** (@ferilva89) — 12/04/2022, 15:27 | ❤️ 1

Daniel,

Fiz uma serviço no fluig para a API que eu quero fazer o post e depois segui sua dica e fiz algumas pesquisas e consegui fazer!

```auto
function beforeProcessing(form) {
	var clientService = fluigAPI.getAuthorizeClientService();
	var data = {
		companyId: getValue("WKCompany") + '',
		serviceCode: 'cbcapicobi',
		endpoint: '/ws/cbcAlmoxApi/smc',
		method: 'post',// 'delete', 'patch', 'put', 'get'
		timeoutService: '100', // segundos
		params: {
			"SMC": "TST002",
			"ITEMS": [
				{
					"Item": "01",
					"Codigo": "MC15001754",
					"Quant": 2
				}
			]
		},
		options: {
			encoding: 'UTF-8',
			mediaType: 'application/json',
			useSSL: true
		},
		headers: {
			ContentType: 'application/json;charset=UTF-8'
		}
	}

	var vo = clientService.invoke(JSON.stringify(data));

	if (vo.getResult() == null || vo.getResult().isEmpty()) {
		throw new Exception("Retorno está vazio");
	} else {
		log.info(vo.getResult());
	}
}
```

Ficou assim e deu muito certo! Muito obrigado!

Agora, vou tratar o retorno. Esse é o próximo desafio.

Aliás, se tiver outra dica… Já me ajuda muito!

Mais uma vez, obrigado!

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 12/04/2022, 17:00

Boa tarde,

O ideal e você lançar uma exceção casso não haja estoque.

```javascript
function beforeProcessing(form) {
	tray{
		var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
			companyId: getValue("WKCompany") + '',
			serviceCode: 'cbcapicobi',
			endpoint: '/ws/cbcAlmoxApi/smc',
			method: 'post',// 'delete', 'patch', 'put', 'get'
			timeoutService: '100', // segundos
			params: {
				"SMC": "TST002",
				"ITEMS": [
					{
						"Item": "01",
						"Codigo": "MC15001754",
						"Quant": 2
					}
				]
			},
			options: {
				encoding: 'UTF-8',
				mediaType: 'application/json',
				useSSL: true
			},
			headers: {
				ContentType: 'application/json;charset=UTF-8'
			}
		}

		var vo = clientService.invoke(JSON.stringify(data));

		if (vo.getResult() == null || vo.getResult().isEmpty()) {
			throw new Exception("Retorno está vazio");
		} else {
			log.info(vo.getResult());
		}

		if(estoque ==0){
			throw "Sem estoque";
		}
		else{
			return true;
		}
	}catch(e){
		throw "Erro de integração"
	}
}
```

---

## Resposta #6

**jonathas araujo** (@jonathas_araujo) — 04/10/2022, 13:35

Muito bom, deu certo agora?

---
