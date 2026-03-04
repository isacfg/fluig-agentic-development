# Integração com Protheus API REST

> **Fonte:** [https://fluiggers.com.br/t/integracao-com-protheus-api-rest/2619](https://fluiggers.com.br/t/integracao-com-protheus-api-rest/2619)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 04/03/2024, 13:03
> **Visualizações:** 364 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniel Costa** (@DevDan99) — 04/03/2024, 13:03

Bom dia,
Pessoal preciso de uma ajuda para realizar uma integração dentro do Protheus, eu ja tenho a API via rest para gravar na tabela do Protheus. Porem é a primeira vez que estou fazendo essa integração e não sei muito bem como fazer.
Eu criei um formulário e um processo, neste processo eu coloquei a atividade, integração com Protheus.
Como eu faço para pegar as respostas do meu formulário, que estão em um dataset interno, e envio a resposta para gravar via API na tabela só quando o processo entrar nesta atividade de integração?
Eu vi que tem que criar um dataset de integração e usar um evento de formulário para chamar ele ou algo do tipo, mas, eu não estou entendendo muito bem como fazer. Alguém te um exemplo pronto para me mostra ou pode me dizer como posso fazer por favor?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 06/03/2024, 08:43 | ❤️ 1

Bom dia,

```javascript
var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
			companyId : String('0'+getValue("WKCompany")),
			serviceCode : 'Protheus',
			endpoint : '/rest/SOLCOMPRASINC/ExclusaoSol',//api que  vou chamar
			method : 'post',
			timeoutService: '100',
			params : {//corpo da notificação (body)
				"NUMSOL" : String( hAPI.getCardValue('solicitacao_protheus') )
			},//Fim do corpo
			headers: {
				'tenantid': String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2')) //tenantid é a empresa e filial para o protheus se posicionar na empresa correta.
			}
		}
		var retornoApi = clientService.invoke( String( JSON.stringify(data) ) );
```

Uso isso diariamente, se precisar pode chamar.

---
