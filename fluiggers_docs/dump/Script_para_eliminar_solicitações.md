# Script para eliminar solicitações

> **Fonte:** [https://fluiggers.com.br/t/script-para-eliminar-solicitacoes/2926](https://fluiggers.com.br/t/script-para-eliminar-solicitacoes/2926)
> **Categoria:** BPM
> **Tags:** `bpm`, `fluigapi`, `script`
> **Criado em:** 13/08/2024, 08:26
> **Visualizações:** 309 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Paulo1** (@Paulo1) — 13/08/2024, 08:26

Boa tarde gente.

Preciso eliminar uma solicitação do Fluig para depois excluir o seu registro de formulário do GED, porém não encontrei nenhuma função que consiga fazer isso.

Queria ver se alguém já fez algum script desse tipo, ou se sabe de alguma forma de conseguir isso.

Obrigado.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 20/08/2024, 12:33

Tenho um script aqui antigo, confesso que não tenho certeza absoluta se ele limpa do GED efetivamente, mas eu utilizava pra realizar limpeza de solicitações antigas, não apenas cancelamento, mas efetivamente remove-las e exclui-las, então pode funcionar para seu caso também, testa e me diga se resolveu seu problema.

O script se baseia em 2 partes, primeiro pra excluir a solicitação, ela deve estar ou **FINALIZADA** ou **CANCELADA**, então esse script abaixo serve para pegar as solicitações em aberto e cancela-las em massa:

```javascript
// #### CONSULTA LISTA PARA CANCELAMENTO DE PROCESSOS
var objPesquisa = {
	"companyId": 1,
	"userId": WCMAPI.userCode,
	"userLoggedAdmin": true,
	"processId": "compras_aprovacao",	// informe o ID do processo que se deseja cancelar
	"dataIni": "01/01/2017",	// data de abertura da solicitação (início)
	"dataFim": "31/12/2018",	// data de abertura da solicitação (término)
	"instanceIni": 0,
	"instanceFim": 999999999,
	"finished": true,
	"opened": true,
	"filter": "4",
	"listPsProcessVo": [],
	"multiNumProcess": null,
	"version": "0",
	"sequence": 0,
	"formData": false,
	"stateData": false,
	"includeTables": false,
	"groupTableData": false
};
$.ajax({
	type: 'POST',
	dataType: 'json',
	headers: { "Content-Type": "application/json" },
	data: JSON.stringify(objPesquisa),
	url: '/ecm/api/rest/ecm/processSearch/getInstancesToConsult',
	success: function (data, textStatus, jqXHR) { // tipos de dados: Anything, String, jqXHR
		//console.info('SUCESSO: resposta do ajax: ', data, textStatus);

		// percorre as solicitações abertas
		data.resultOpenedVo.forEach(function (solic) {
			console.log('ABERTA:', solic.processInstanceId);

			$.ajax({
				type: 'POST',
				dataType: 'json',
				headers: { "Content-Type": "application/json" },
				data: JSON.stringify({"processInstanceId":solic.processInstanceId,"taskUserId":WCMAPI.userCode,"cancelText":"Limpeza da base"}),
				url: '/ecm/api/rest/ecm/workflowView/cancelInstance',
				success: function (data, textStatus, jqXHR) { // tipos de dados: Anything, String, jqXHR
					console.info('SUCESSO: resposta do ajax: ', data, textStatus);
				},
				error: function (jqXHR, textStatus, errorThrown) { // tipos de dados: jqXHR, String, String
					console.error('ERRO: resposta do ajax: ', jqXHR, textStatus, errorThrown);
				},
			});

		});

	},
	error: function (jqXHR, textStatus, errorThrown) { // tipos de dados: jqXHR, String, String
		console.error('ERRO: resposta do ajax: ', jqXHR, textStatus, errorThrown);
	},
});
```

Faça as devidas alterações na variavel objPesquisa alterando os campos:

-   processId: Nome do processo
-   dataIni: Data de abertura inicial
-   dataFim: Data de abertura final

Caso queira filtrar especificamente pelo numero da solicitação ou por um range, alterar esses campos também:

-   instanceIni: Número da solicitação inicial
-   instanceFim: Número da solicitação final

Após a execução desse script, você pode rodar esse abaixo para poder efetivamente exclui-las:

```javascript
// ### ELIMINAR TODAS DE UM PROCESSO
var objPesquisa = {
	"processId": "compras_aprovacao",
	"initialDate": "1/1/2017",
	"finalDate": "31/12/2017",
	"initialInstance": 0,
	"finalInstance": 999999,
	"finished": true,
	"canceled": true
};
$.ajax({
	type: 'POST',
	dataType: 'json',
	headers: { "Content-Type": "application/json" },
	data: JSON.stringify(objPesquisa),
	url: '/ecm/api/rest/ecm/processdelete/getInstancesToDelete',
	success: function (data, textStatus, jqXHR) { // tipos de dados: Anything, String, jqXHR
		//console.info('SUCESSO: resposta do ajax: ', data, textStatus);

		data.forEach(function (solic) {
			//console.log('processInstanceId:', solic.processInstanceId);

			$.ajax({
				type: 'POST',
				dataType: 'json',
				headers: { "Content-Type": "application/json" },
				data: JSON.stringify({"selectedRows":[String(solic.processInstanceId)]}),
				url: '/ecm/api/rest/ecm/processdelete/deleteInstances',
				success: function (data, textStatus, jqXHR) { // tipos de dados: Anything, String, jqXHR
					console.info('SUCESSO: resposta do ajax: ', data, textStatus);
				},
				error: function (jqXHR, textStatus, errorThrown) { // tipos de dados: jqXHR, String, String
					console.error('ERRO: resposta do ajax: ', jqXHR, textStatus, errorThrown);
				},
			});

		});

	},
	error: function (jqXHR, textStatus, errorThrown) { // tipos de dados: jqXHR, String, String
		console.error('ERRO: resposta do ajax: ', jqXHR, textStatus, errorThrown);
	},
});
```

Mesmo esquema da função anterior, altere os parâmetros da variável objPesquisa pra adaptar para seu caso.

Muito cuidado rodando isso em prod, por se tratar de um script que cancela/exclui em massa, teste primeiro em homologação com apenas 1 solicitação, dando certo adapte para sua necessidade em lote.

---

## Resposta #2

**Paulo1** (@Paulo1) — 20/08/2024, 12:52

Oi Pablo, testei aqui sua função e funcionou certinho, muito obrigado!

Para excluir a solicitação do GED, eu chamo um dataset e executo a função:
`var exclui = fluigAPI.getDocumentService().deleteDocument(documentId);`

Mas o script que me mandou conseguiu eliminar as solicitações como queria, valeu!

---
