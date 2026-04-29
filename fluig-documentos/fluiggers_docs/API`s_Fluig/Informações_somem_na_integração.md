# Informações somem na integração

> **Fonte:** [https://fluiggers.com.br/t/informacoes-somem-na-integracao/3315](https://fluiggers.com.br/t/informacoes-somem-na-integracao/3315)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `fluigapi`
> **Criado em:** 16/06/2025, 09:50
> **Visualizações:** 34 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**lucaslamb** (@lucaslamb) — 16/06/2025, 09:50

Olá pessoal, estou utilizando uma API do Fluig mesmo para alimentar campos de um outro processo e realizar a movimentação do mesmo. Porém ao realizar estas integrações as informações de alguns outros campos que já haviam sido preenchidos antes de começar esse processo e que, em teoria, não deveriam ter nada a ver com a função somem os valores.
Alguém por acaso já soube de algum caso parecido com esse? Estou com um ticket aberto na Totvs porém a demora para responder está muito grande.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/06/2025, 18:50

Qual API/WS?

Tem algumas que precisam enviar sempre todos os campos do formulário, porque se não o Fluig entende que tá passando nulo.

E quando tem pai x filho precisa enviar também todos os filhos, porque ao atualizar o formulário ele muda de versão e perde o vínculo com os filhos.

---

## Resposta #2

**lucaslamb** (@lucaslamb) — 18/06/2025, 08:50

É a /ecm-forms/api/v2/cardindex/cards/children que atualizo 3 campos de uma tabela, chamo em um evento de processo porém os campos que perdem o valor não são campos em pai x filho isso que acho mais esquisito.

```auto
function alimentaCampos() {
	var documentid = hAPI.getCardValue("documento_lpp");
	var index = hAPI.getCardValue("index_liberacao").split(",");
	for (var i = 0; i < index.length; i++){
		var cardindex = "/ecm-forms/api/v2/cardindex/" + documentid + "/cards/" + documentid + "/children/" + index[i];
		var data = {
			companyId: getValue("WKCompany") + "",
			serviceCode: "RESTFLUIG",
			endpoint: url + cardindex,
			method: "PUT",
			timeoutService: "10000", // segundos
			params: {
				values: [
					{
						fieldId: "LPP_STATUSMEP___" + index[i],
						value: hAPI.getCardValue("status_processo"),
					},
					{
						fieldId: "LPP_STATUSENGENHARIA___" + index[i],
						value: hAPI.getCardValue("status_projeto"),
					},
					{
						fieldId: "LPP_DATAENGPRE______" + index[i],
						value: hAPI.getCardValue("conclusao_engenharia"),
					},
				],
			},
			options: {
				encoding: "UTF-8",
				mediaType: "application/json",
			},
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
			},
		};

		log.info("DataD=========: " + JSONUtil.toJSON(data));
		var clientService = fluigAPI.getAuthorizeClientService();
		var vo = clientService.invoke(JSONUtil.toJSON(data));
		if (vo.getResult() == null || vo.getResult().isEmpty()) {
			throw "Erro na Integração REST Fluig activities, retorno está zerado, entre em contato com a TI!";
		} else {
			log.info("RespostaD=========: " + vo.getResult());
		}
	}
}
```

E essa tabela que é alimentada pela API:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/bd03ce2871c43209e5f958e8ce9c6bdec5b2bd93_2_690x165.png)

Os campos que preencho via API são ambos “status” e o “conclusão”, os outros seguem com o valor normal que já é preenchido na abertura.

---
