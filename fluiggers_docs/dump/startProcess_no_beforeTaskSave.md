# startProcess no beforeTaskSave

> **Fonte:** [https://fluiggers.com.br/t/startprocess-no-beforetasksave/844](https://fluiggers.com.br/t/startprocess-no-beforetasksave/844)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`, `beforetasksave`, `startprocess`
> **Criado em:** 27/12/2021, 08:53
> **Visualizações:** 1663 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Victor Castro** (@victorcastro) — 27/12/2021, 08:53

É possível iniciar uma nova solicitação (startProcess) no beforeTaskSave?

Estou tentando fazer e tá dando um erro **JavaException: javax.xml.ws.soap.SOAPFaultException: Marshalling Error: class sun.org.mozilla.javascript.internal.IdFunctionObject e nenhuma de sua superclasse é conhecida para este contexto.**

![image](https://fluiggers.com.br/uploads/default/original/1X/5e97ac17e581cbef0f5b1814d838221059a8e0fb.png)

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 27/12/2021, 10:18

Bom dia,

Pode colocar o código do seu Beforetasksave aqui?

---

## Resposta #2

**Victor Castro** (@victorcastro) — 27/12/2021, 10:21 | ❤️ 1

```javascript
function beforeTaskSave(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 35){ //35 = Fim
		var avaliacaoPeriodica = hAPI.getCardValue("avaliacaoPeriodica") == "on" ? true : false;

		var qtd = 1;

		if(avaliacaoPeriodica){
			qtd++;
		}

		var anexos = hAPI.listAttachments();

		if(anexos.size() < qtd){
			if(avaliacaoPeriodica){
				throw "\n\nObrigatório anexar a Avaliação Periódica e a Avaliação Global.\n\n";
			}
			else{
				throw "\n\nObrigatório anexar a Avaliação Global.\n\n";
			}
		}

		try{
			if(hAPI.getCardValue("renovarPrograma") == "Sim"){
				log.warn(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | Renovando programa");

				var servico = ServiceManager.getService("ECMWorkflowEngineService").getBean();
				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | servico => " + servico);

				var locator = servico.instantiate("com.totvs.technology.ecm.workflow.ws.ECMWorkflowEngineServiceService");
				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | locator => " + locator);

				var WorkflowEngineService = locator.getWorkflowEngineServicePort();
				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | WorkflowEngineService => " + WorkflowEngineService);

				var credenciais = getIds();
				var username = credenciais.login;
				var password = credenciais.password;
				var companyId = getValue("WKCompany");
				var processId = "SESMT04";
				var choosedState = 1;
				var colleagueIds = servico.instantiate("net.java.dev.jaxb.array.StringArray");
				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | colleagueIds => " + colleagueIds);

					colleagueIds.getItem().add(hAPI.getCardValue('matriculaSolicitante'));
				var comments = "";
				var userId = hAPI.getCardValue('matriculaSolicitante');
				var completeTask = false;
				var attachments = servico.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessAttachmentDtoArray");
				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | attachments => " + attachments);


				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | Passando cardData");
				var cardData = preencheFichaRevisao(servico);

				var appointment = servico.instantiate("com.totvs.technology.ecm.workflow.ws.ProcessTaskAppointmentDtoArray");
				var managerMode = false;

				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | CRIANDO SOLICITAÇÃO");
				var novaSolic = WorkflowEngineService.startProcess(username,
																	password,
																	companyId,
																	processId,
																	choosedState,
																	colleagueIds,
																	comments,
																	userId,
																	completeTask,
																	attachments,
																	cardData,
																	appointment,
																	managerMode);
				var numeroNovaSolic = "";

				for(var j=0; j < novaSolic.getItem().size(); j++){
					if(novaSolic.getItem().get(j).getItem().get(0) == "iProcess"){
						numeroNovaSolic = novaSolic.getItem().get(j).getItem().get(1).toString();
						break;
					}
				}

				log.info(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | numeroNovaSolic => " + numeroNovaSolic);

				if(numeroNovaSolic == ""){
					var erroRetorno = "";
					for(var k=0 ; k < novaSolic.getItem().size() ; k++){
						erroRetorno +=" ---- "+novaSolic.getItem().get(k).getItem().get(0) + " => "+novaSolic.getItem().get(k).getItem().get(1);
					}
					throw erroRetorno;
				}
				else{
					hAPI.setCardValue("solicProxRevisao", (numeroNovaSolic).toString());
				}
			}
		}
		catch(e){
			log.error(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() | Erro ao renovar programa (linha "+e.lineNumber+") => " + e);
			throw "Erro ao renovar programa: " + e;
		}
	}
}

function preencheFichaRevisao(servico){
	try{
		var cardData = servico.instantiate("net.java.dev.jaxb.array.StringArrayArray");

		var campoDescritor = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		campoDescritor.getItem().add("campoDescritor");
		campoDescritor.getItem().add(hAPI.getCardValue("campoDescritor"));
		cardData.getItem().add(campoDescritor);

		var solicRevisaoAnterior = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		solicRevisaoAnterior.getItem().add("solicRevisaoAnterior");
		solicRevisaoAnterior.getItem().add((getValue("WKNumProces")).toString());
		cardData.getItem().add(solicRevisaoAnterior);

		var programaLegal = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		programaLegal.getItem().add("programaLegal");
		programaLegal.getItem().add(hAPI.getCardValue("programaLegal"));
		cardData.getItem().add(programaLegal);

		var novaRevisao = hAPI.getCardValue("revisao");
			novaRevisao = (parseInt(novaRevisao)+1) < 10 ? "0" + novaRevisao : novaRevisao;

		var revisao = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		revisao.getItem().add("revisao");
		revisao.getItem().add((novaRevisao).toString);
		cardData.getItem().add(revisao);

		var nomeFilial = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		nomeFilial.getItem().add("nomeFilial");
		nomeFilial.getItem().add(hAPI.getCardValue("nomeFilial"));
		cardData.getItem().add(nomeFilial);

		var codFilial = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		codFilial.getItem().add("codFilial");
		codFilial.getItem().add(hAPI.getCardValue("codFilial"));
		cardData.getItem().add(codFilial);

		var nomeEstabelecimento = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		nomeEstabelecimento.getItem().add("nomeEstabelecimento");
		nomeEstabelecimento.getItem().add(hAPI.getCardValue("nomeEstabelecimento"));
		cardData.getItem().add(nomeEstabelecimento);

		var matriculaRespEstabelec = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		matriculaRespEstabelec.getItem().add("matriculaRespEstabelec");
		matriculaRespEstabelec.getItem().add(hAPI.getCardValue("matriculaRespEstabelec"));
		cardData.getItem().add(matriculaRespEstabelec);

		var nomeRespEstabelec = servico.instantiate("net.java.dev.jaxb.array.StringArray");
		nomeRespEstabelec.getItem().add("nomeRespEstabelec");
		nomeRespEstabelec.getItem().add(hAPI.getCardValue("nomeRespEstabelec"));
		cardData.getItem().add(nomeRespEstabelec);

		return cardData;
	}
	catch (e){
		log.error(">>> SESMT04, "+getValue("WKNumProces")+", beforeTaskSave() > preencheFichaRevisao() | Erro ao preencher cardData (linha "+e.lineNumber+") => " + e);
		throw e;
	}
}
```

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 28/12/2021, 12:24 | ❤️ 1

Cara vou te passa como faço desculpa a demora acabei esquecendo.

```auto
var resp = hAPI.startProcess("FIN07", 5, users, "Solicitação inicializada pelo processo: "+getValue("WKNumProces"), true, formData, false);
```

startProcess(processId, ativDest, listaColab, “obs”, completarTarefa, valoresForm, modoGestor)
Inicia uma solicitação *workflow* , onde:

-   processId: código do processo;
-   ativDest: código da atividade de destino;
-   listaColab: lista (do tipo String) de usuários;
-   obs: texto da observação;
-   completarTarefa: indica se deve completar a tarefa (true) ou apenas salvar (false);
-   valoresForm: um Mapa com os valores do formulário do processo;
-   modoGestor: indica que o usuário iniciará a solicitação como gestor (true) ou que o usuário iniciará a solicitação apenas como solicitante (false).

Retorna um mapa com informações da solicitação criada. Entre elas, o iProcess que é o número da solicitação criada.

isto já faz o startprocess.

---

## Resposta #4

**Victor Castro** (@victorcastro) — 28/12/2021, 13:04

Sempre fiz dessa forma, nunca usei o **hAPI**. Mas sempre abri uma nova solicitação através de uma atividade serviço ou condicional. No **beforeTaskSave** nunca tinha feito.

Mas vou testar dessa forma. Se funcionar é bem mais simples, realmente. Obrigado por enquanto.

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 28/12/2021, 13:14

Eu uso em atividade de serviço se tiver o hAPI disponível pode usar.

---
