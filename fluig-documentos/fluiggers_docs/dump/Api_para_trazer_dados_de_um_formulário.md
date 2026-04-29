# Api para trazer dados de um formulário

> **Fonte:** [https://fluiggers.com.br/t/api-para-trazer-dados-de-um-formulario/3191](https://fluiggers.com.br/t/api-para-trazer-dados-de-um-formulario/3191)
> **Categoria:** API`s Fluig
> **Criado em:** 11/03/2025, 16:38
> **Visualizações:** 145 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**João Victor Ribeiro** (@Joao_Victor_Ribeiro) — 11/03/2025, 16:38

Boa tarde, alguém saberia uma API do Fluig, para me auxiliar, preciso criar uma widget, semelhante ao central de tarefas, mas com algumas colunas a mais e a possibilidade também de movimentar, cancelar e etc em bloco, procurei no api-rest mas ainda estou um pouco confuso, caso alguém tenha uma ideia agradeço.

---

## Resposta #1

**Narles Lino** (@Narles_Lino) — 13/03/2025, 17:50

Essa aqui é a principal, usada pelo próprio produto, para listar informações de solicitações:

SEU\_DOMINIO/bpm/api/v1/requests?&**initialProcessInstanceId**\=0&**finalProcessInstanceId**\=200138&**initialStartDate**\=2025-02-11T00:00:00.000Z&**finalStartDate**\=2025-03-13T23:59:59.000Z&expand=requester&expand=formRecord&expand=currentMovements&expand=currentMovements.tasks&order=processInstanceId&page=1&pageSize=20

Quanto a movimentar e cancelar, você pode seguir a documentação oficial do link abaixo, selecionado a melhor API para o seu cenário:

[TOTVS Fluig API](https://api.fluig.com/latest/process-management/swagger-ui/)

---

## Resposta #2

**João Victor Ribeiro** (@Joao_Victor_Ribeiro) — 24/03/2025, 11:19

Opa amigo bom dia, muito obrigado pelo retorno, essa eu consegui utilizar e a de cancelamento também, mas estou apanhando bastante no de movimentação, pois estou passando os parametros e mesmo assim continuo não tendo exito: const params = {
movementSequence: 3, // A etapa em que está “Analisar Solicitação”
assignee: “”, // Responsável atual da tarefa
targetState: “06”, // Próximo estado esperado: “Análise”
targetAssignee: “”, // usuario de destino
comment: motivo, // Comentário explicativo sobre a decisão
asManager: false,
formFields: { radio\_aprov\_dir: “A” } // Valor aprovado no campo
};

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Narles Lino** (@Narles_Lino) — 24/03/2025, 14:27 | ❤️ 1

Boa tarde.

Segue um exemplo de implementação de movimentação de processo via REST:

var nomeAprovador = top.WCMAPI.user;
var matriculaAprovador = top.WCMAPI.userCode;
var numSolicitacao = $(“#numSolicitacao”+“\_\_\_”+indice).val();

```
var cs1 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", numSolicitacao, numSolicitacao, ConstraintType.MUST);
				var processTask = DatasetFactory.getDataset("processTask", null, new Array(cs1), null);
				var posicao = parseInt(processTask.values.length)-1;
				var movementSequence = processTask.values[posicao]['processTaskPK.movementSequence'];
				var assignee = processTask.values[posicao]['completeColleagueId'];

				dataJson = {
						  "movementSequence": movementSequence,
		    			  "targetState": 44,
		    			  "subProcessTargetState": 0,
		    			  "comment": "Processo movimentado via Portal Alteração de Status: ",
		    			  "asManager": true,
		    			  "formFields": {'indDevPosEntrega': "sim" }
		    	};
				console.log(dataJson);

				// Chama movimentação automática da solicitação
				var url = top.WCMAPI.serverURL + '/process-management/api/v2/requests/'+numSolicitacao+'/move';

				top.WCMAPI.Create({
					type: "POST",
				    url: url,
				    async: true,
				    data: dataJson,
				    success: function(data){
				    	console.log(data);
			    		if(data !== undefined){

		    				top.FLUIGC.toast({
								title: 'Sucesso',
								message: 'Solicitação '+numSolicitacao+' movimentada com sucesso!',
								type: 'success',
								timeout: 6000
							});

		    				carregaRegistros();
		    			}
				    },
				    error: function (data) {
				    	console.log(data);
				    	FLUIGC.toast({
	   	    				title: 'Não foi possível movimentar a solicitação: '+numSolicitacao+'!',
	   	    				message: '',
	   	    				type: 'danger'
	   	    			});
				    }
				});
```

---

## Resposta #4

**João Victor Ribeiro** (@Joao_Victor_Ribeiro) — 25/03/2025, 10:52

Bom dia amigo, obrigado pelo exemplo irei testar aqui, fico agradecido.

---

## Resposta #5

**João Victor Ribeiro** (@Joao_Victor_Ribeiro) — 25/03/2025, 15:01 | ❤️ 1

Boa tarde amigo, retornando para informar que deu certo a chamada da API, muito obrigado pelo retorno.

---
