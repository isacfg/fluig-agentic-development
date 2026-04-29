# ECMCardService pai filho

> **Fonte:** [https://fluiggers.com.br/t/ecmcardservice-pai-filho/2393](https://fluiggers.com.br/t/ecmcardservice-pai-filho/2393)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 03/12/2023, 20:23
> **Visualizações:** 418 | **Likes:** 1 | **Respostas:** 3

---

## Pergunta original

**Herick Freitas** (@herickfreitas) — 03/12/2023, 20:23

Boa noite Senhores

Estou trabalhando num em que o processo com uma atividade de serviço que cria registros via serviço ECMCardService, sobre o corpo do formulário esta integrando sem problemas, mas não sei como inserir os dados da tabela pai filho. Fiz uma pesquisa no TDN mas não encontrei nenhum exemplo.

```auto
function createDocument() {
	//empresa, usuario, senha, matricula, pastaPaiId, nomeCampo, valorCampo, dataset, campos, arrItens

	log.info('function createDocument >> Entrou!');

	try {
		var serviceManager = ServiceManager.getService('ECMCardService');
		var serviceInstance = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.ECMCardServiceService');
		var service = serviceInstance.getCardServicePort();

		var attachment = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.Attachment');
		var relatedDocument = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.RelatedDocumentDto');
		var documentSecurity = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.DocumentSecurityConfigDto');
		var approver = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.ApproverDto');

		var cardDtoArray = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardDtoArray');
		var cardDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardDto');

		var cardFieldDto1 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
		var cardFieldDto2 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');

		cardDto.getAttachs().add(attachment);
		cardDto.getReldocs().add(relatedDocument);
		cardDto.getDocsecurity().add(documentSecurity);
		cardDto.getDocapprovers().add(approver);

		cardDto.setDocumentDescription(hAPI.getCardValue('nroProcesso')+' - '+hAPI.getCardValue('nomeProjeto')); //descricao do formulario
		cardDto.setAdditionalComments('');
		cardDto.setParentDocumentId(parseInt('982')); //pasta pai do formulario
		cardDto.setColleagueId(hAPI.getCardValue('matriculaResponsavel')); //matricula
		cardDto.setExpires(false);
		cardDto.setUserNotify(false);
		cardDto.setInheritSecurity(true);
		cardDto.setVersionDescription('');
		cardDto.setDocumentKeyWord('');


		// Campos formulário - Projeto
		var cardFieldDto0 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
		cardFieldDto0.setField("codProjeto");
		cardFieldDto0.setValue(hAPI.getCardValue('nroProcesso')); // Nro processo do Fluig
		cardDto.getCardData().add(cardFieldDto0);

		var cardFieldDto1 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto1.setField("nomeProjeto");
	    cardFieldDto1.setValue(hAPI.getCardValue('nomeProjeto'));
	    cardDto.getCardData().add(cardFieldDto1);

		var cardFieldDto2 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto2.setField("matriculaSolicitante");
	    cardFieldDto2.setValue(hAPI.getCardValue('matriculaSolicitante'));
	    cardDto.getCardData().add(cardFieldDto2);

		var cardFieldDto3 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto3.setField("emailSolicitante");
	    cardFieldDto3.setValue(hAPI.getCardValue('emailSolicitante'));
	    cardDto.getCardData().add(cardFieldDto3);

		var cardFieldDto4 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto4.setField("nomeSolicitante");
	    cardFieldDto4.setValue(hAPI.getCardValue('nomeSolicitante'));
	    cardDto.getCardData().add(cardFieldDto4);

		var cardFieldDto5 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto5.setField("departamento");
	    cardFieldDto5.setValue(hAPI.getCardValue('departamento'));
	    cardDto.getCardData().add(cardFieldDto5);

		var cardFieldDto6 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto6.setField("matriculaResponsavel");
	    cardFieldDto6.setValue(hAPI.getCardValue('matriculaResponsavel'));
	    cardDto.getCardData().add(cardFieldDto6);

		var cardFieldDto7 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto7.setField("emailResponsavel");
	    cardFieldDto7.setValue(hAPI.getCardValue('emailResponsavel'));
	    cardDto.getCardData().add(cardFieldDto7);

		var cardFieldDto8 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto8.setField("nomeResponsavel");
	    cardFieldDto8.setValue(hAPI.getCardValue('nomeResponsavel'));
	    cardDto.getCardData().add(cardFieldDto8);

		var cardFieldDto9 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto9.setField("dataRegistro");
	    cardFieldDto9.setValue(hAPI.getCardValue('dataRegistro'));
	    cardDto.getCardData().add(cardFieldDto9);

		var cardFieldDto10 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto10.setField("dataInicio");
	    cardFieldDto10.setValue(hAPI.getCardValue('dataInicio'));
	    cardDto.getCardData().add(cardFieldDto10);

		var cardFieldDto11 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto11.setField("dataFim");
	    cardFieldDto11.setValue(hAPI.getCardValue('dataFim'));
	    cardDto.getCardData().add(cardFieldDto11);

		var cardFieldDto12 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto12.setField("custoPrevisto");
	    cardFieldDto12.setValue(hAPI.getCardValue('custoPrevisto'));
	    cardDto.getCardData().add(cardFieldDto12);

		var cardFieldDto13 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto13.setField("escopo");
	    cardFieldDto13.setValue(hAPI.getCardValue('escopo'));
	    cardDto.getCardData().add(cardFieldDto13);

	    var cardFieldDto14 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto14.setField("status");
	    cardFieldDto14.setValue('Backlog');
	    cardDto.getCardData().add(cardFieldDto14);


		// Campos tabela Atividade
	    var indexes = hAPI.getChildrenIndexes("tableAtividade");
	    if ( indexes.length > 0 ) {
	    	for ( var i = 0; i < indexes.length; i++ ) {
		    	var codAtividade 				= i+1;
		    	var dataRegistroAtividade		= getData();
				var dataInicioAtividade			= (hAPI.getCardValue("dataInicioAtividade___" + indexes[i]));
				var dataFimAtividade			= (hAPI.getCardValue("dataFimAtividade___" + indexes[i]));
				var matriculaResponsavelAtividade 	= (hAPI.getCardValue("matriculaResponsavelAtividade___" + indexes[i]));
				var emailResponsavelAtividade 		= (hAPI.getCardValue("emailResponsavelAtividade___" + indexes[i]));
				var nomeResponsavelAtividade 		= (hAPI.getCardValue("nomeResponsavelAtividade___" + indexes[i]));
				var descricaoAtividade		 		= (hAPI.getCardValue("descricaoAtividade___" + indexes[i]));

			}
	    }

	    cardDtoArray.getItem().add(cardDto);


		result = service.create('1', 'teste', 'teste', cardDtoArray);
		log.info(' function createDocument >> result << ');
		log.dir(result);

		if (result.getItem().get(0).getWebServiceMessage().equals("ok")) {
            log.info("Sincronização completada com sucesso!");
            var documentoCriado = result.getItem().get(0).getDocumentId();
            log.info(' function createDocument >> documentoCriado '+documentoCriado);

            //Gravando retorno no formulário
            hAPI.setCardValue('documentId_ECM', documentoCriado);

        } else {
        	throw (result.getItem().get(0).getWebServiceMessage());
        }


	} catch (e) {
		throw e.message;
	}
}
```

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 04/12/2023, 11:48

Você precisa criar também criar e setar os valores de CardFieldDto para os campos de uma tabela pai e filho, mas neste caso com uma pequena alteração.

Veja se consegue entender o exemplo abaixo, neste exemplo estou supondo que exista em alguma tabela pai e filho do teu formulário com os campos **dataInicioAtividade** e **dataFimAtividade**

```auto
// Campos tabela Atividade
	    var indexes = hAPI.getChildrenIndexes("tableAtividade");
	    if ( indexes.length > 0 ) {
	    	for ( var i = 0; i < indexes.length; i++ ) {
		    	var row = i+1;
		    	var dataRegistroAtividade		= getData();
				var dataInicioAtividade			= (hAPI.getCardValue("dataInicioAtividade___" + indexes[i]));
				var dataFimAtividade			= (hAPI.getCardValue("dataFimAtividade___" + indexes[i]));
				var matriculaResponsavelAtividade 	= (hAPI.getCardValue("matriculaResponsavelAtividade___" + indexes[i]));
				var emailResponsavelAtividade 		= (hAPI.getCardValue("emailResponsavelAtividade___" + indexes[i]));
				var nomeResponsavelAtividade 		= (hAPI.getCardValue("nomeResponsavelAtividade___" + indexes[i]));
				var descricaoAtividade		 		= (hAPI.getCardValue("descricaoAtividade___" + indexes[i]));

				// Popula campos da tabela pai e filho
				var dataInicioAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataInicioAtividadeDto.setField("dataInicioAtividade___"+row);
				dataInicioAtividadeDto.setValue(dataRegistroAtividade);

				var dataFimAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataFimAtividadeDto.setField("dataFimAtividade___"+row);
				dataFimAtividadeDto.setValue(dataRegistroAtividade);

				cardDto.getCardData().add(dataInicioAtividadeDto);
				cardDto.getCardData().add(dataFimAtividadeDto);

			}
	    }
```

---

## Resposta #2

**Herick Freitas** (@herickfreitas) — 04/12/2023, 14:36

Boa tarde Sergio
Obrigado pela ajuda, fiz assim mas não deu certo… não gravou pai x filho.

```auto
function createDocument() {

	log.info('function createDocument >> Entrou!');

	try {
		var serviceManager = ServiceManager.getService('ECMCardService');
		var serviceInstance = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.ECMCardServiceService');
		var service = serviceInstance.getCardServicePort();

		var attachment = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.Attachment');
		var relatedDocument = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.RelatedDocumentDto');
		var documentSecurity = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.DocumentSecurityConfigDto');
		var approver = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.ApproverDto');

		var cardDtoArray = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardDtoArray');
		var cardDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardDto');

		var cardFieldDto1 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
		var cardFieldDto2 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');

		cardDto.getAttachs().add(attachment);
		cardDto.getReldocs().add(relatedDocument);
		cardDto.getDocsecurity().add(documentSecurity);
		cardDto.getDocapprovers().add(approver);

		cardDto.setDocumentDescription(hAPI.getCardValue('nroProcesso')+' - '+hAPI.getCardValue('nomeProjeto')); //descricao do formulario
		cardDto.setAdditionalComments('');
		cardDto.setParentDocumentId(parseInt('982')); //pasta pai do formulario
		cardDto.setColleagueId(hAPI.getCardValue('matriculaResponsavel')); //matricula
		cardDto.setExpires(false);
		cardDto.setUserNotify(false);
		cardDto.setInheritSecurity(true);
		cardDto.setVersionDescription('');
		cardDto.setDocumentKeyWord('');


		// Campos formulário - Projeto
		var cardFieldDto0 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
		cardFieldDto0.setField("codProjeto");
		cardFieldDto0.setValue(hAPI.getCardValue('nroProcesso')); // Nro processo do Fluig
		cardDto.getCardData().add(cardFieldDto0);

		var cardFieldDto1 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto1.setField("nomeProjeto");
	    cardFieldDto1.setValue(hAPI.getCardValue('nomeProjeto'));
	    cardDto.getCardData().add(cardFieldDto1);

		var cardFieldDto2 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto2.setField("matriculaSolicitante");
	    cardFieldDto2.setValue(hAPI.getCardValue('matriculaSolicitante'));
	    cardDto.getCardData().add(cardFieldDto2);

		var cardFieldDto3 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto3.setField("emailSolicitante");
	    cardFieldDto3.setValue(hAPI.getCardValue('emailSolicitante'));
	    cardDto.getCardData().add(cardFieldDto3);

		var cardFieldDto4 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto4.setField("nomeSolicitante");
	    cardFieldDto4.setValue(hAPI.getCardValue('nomeSolicitante'));
	    cardDto.getCardData().add(cardFieldDto4);

		var cardFieldDto5 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto5.setField("departamento");
	    cardFieldDto5.setValue(hAPI.getCardValue('departamento'));
	    cardDto.getCardData().add(cardFieldDto5);

		var cardFieldDto6 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto6.setField("matriculaResponsavel");
	    cardFieldDto6.setValue(hAPI.getCardValue('matriculaResponsavel'));
	    cardDto.getCardData().add(cardFieldDto6);

		var cardFieldDto7 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto7.setField("emailResponsavel");
	    cardFieldDto7.setValue(hAPI.getCardValue('emailResponsavel'));
	    cardDto.getCardData().add(cardFieldDto7);

		var cardFieldDto8 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto8.setField("nomeResponsavel");
	    cardFieldDto8.setValue(hAPI.getCardValue('nomeResponsavel'));
	    cardDto.getCardData().add(cardFieldDto8);

		var cardFieldDto9 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto9.setField("dataRegistro");
	    cardFieldDto9.setValue(hAPI.getCardValue('dataRegistro'));
	    cardDto.getCardData().add(cardFieldDto9);

		var cardFieldDto10 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto10.setField("dataInicio");
	    cardFieldDto10.setValue(hAPI.getCardValue('dataInicio'));
	    cardDto.getCardData().add(cardFieldDto10);

		var cardFieldDto11 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto11.setField("dataFim");
	    cardFieldDto11.setValue(hAPI.getCardValue('dataFim'));
	    cardDto.getCardData().add(cardFieldDto11);

		var cardFieldDto12 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto12.setField("custoPrevisto");
	    cardFieldDto12.setValue(hAPI.getCardValue('custoPrevisto'));
	    cardDto.getCardData().add(cardFieldDto12);

		var cardFieldDto13 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto13.setField("escopo");
	    cardFieldDto13.setValue(hAPI.getCardValue('escopo'));
	    cardDto.getCardData().add(cardFieldDto13);

	    var cardFieldDto14 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto14.setField("status");
	    cardFieldDto14.setValue('Backlog');
	    cardDto.getCardData().add(cardFieldDto14);


		// Campos tabela Atividade
	    var indexes = hAPI.getChildrenIndexes("tableAtividade");
	    if ( indexes.length > 0 ) {

	    	for ( var i = 0; i < indexes.length; i++ ) {
				var row 							= i+1;
		    	var codAtividade 					= i+1;
		    	var dataRegistroAtividade			= getData();
				var dataInicioAtividade				= (hAPI.getCardValue("dataInicioAtividade___" + indexes[i]));
				var dataFimAtividade				= (hAPI.getCardValue("dataFimAtividade___" + indexes[i]));
				var matriculaResponsavelAtividade 	= (hAPI.getCardValue("matriculaResponsavelAtividade___" + indexes[i]));
				var emailResponsavelAtividade 		= (hAPI.getCardValue("emailResponsavelAtividade___" + indexes[i]));
				var nomeResponsavelAtividade 		= (hAPI.getCardValue("nomeResponsavelAtividade___" + indexes[i]));
				var descricaoAtividade		 		= (hAPI.getCardValue("descricaoAtividade___" + indexes[i]));

				// Popula campos da tabela pai e filho
				var codAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				codAtividadeDto.setField("codAtividade___"+row);
				codAtividadeDto.setValue(codAtividade);
				cardDto.getCardData().add(codAtividadeDto);

				var dataRegistroAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataRegistroAtividadeDto.setField("dataRegistroAtividade___"+row);
				dataRegistroAtividadeDto.setValue(dataRegistroAtividade);
				cardDto.getCardData().add(dataRegistroAtividadeDto);

				var dataInicioAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataInicioAtividadeDto.setField("dataInicioAtividade___"+row);
				dataInicioAtividadeDto.setValue(dataInicioAtividade);
				cardDto.getCardData().add(dataInicioAtividadeDto);

				var dataFimAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataFimAtividadeDto.setField("dataFimAtividade___"+row);
				dataFimAtividadeDto.setValue(dataFimAtividade);
				cardDto.getCardData().add(dataFimAtividadeDto);

				var matriculaResponsavelAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				matriculaResponsavelAtividadeDto.setField("matriculaResponsavelAtividade___"+row);
				matriculaResponsavelAtividadeDto.setValue(matriculaResponsavelAtividade);
				cardDto.getCardData().add(matriculaResponsavelAtividadeDto);

				var emailResponsavelAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				emailResponsavelAtividadeDto.setField("emailResponsavelAtividade___"+row);
				emailResponsavelAtividadeDto.setValue(emailResponsavelAtividade);
				cardDto.getCardData().add(emailResponsavelAtividadeDto);

				var nomeResponsavelAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				nomeResponsavelAtividadeDto.setField("nomeResponsavelAtividade___"+row);
				nomeResponsavelAtividadeDto.setValue(nomeResponsavelAtividade);
				cardDto.getCardData().add(nomeResponsavelAtividadeDto);

				var descricaoAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				descricaoAtividadeDto.setField("descricaoAtividade___"+row);
				descricaoAtividadeDto.setValue(descricaoAtividade);
				cardDto.getCardData().add(descricaoAtividadeDto);
			}

	    }

	    cardDtoArray.getItem().add(cardDto);


		result = service.create('1', 'teste', 'teste', cardDtoArray);
		log.info(' function createDocument >> result << ');
		log.dir(result);

		if (result.getItem().get(0).getWebServiceMessage().equals("ok")) {
            log.info("Sincronização completada com sucesso!");
            var documentoCriado = result.getItem().get(0).getDocumentId();
            log.info(' function createDocument >> documentoCriado '+documentoCriado);

            //Gravando retorno no formulário
            hAPI.setCardValue('documentId_ECM', documentoCriado);

        } else {
        	throw (result.getItem().get(0).getWebServiceMessage());
        }


	} catch (e) {
		throw e.message;
	}
}
```

---

## Resposta #3

**Sérgio Machado** (@sergio.machado) — 04/12/2023, 15:03

Comparei com um código que eu já tenho e não consegui encontrar nenhum erro. O que você pode fazer é imprimir no log os valores das variáveis que estão dentro do loop. Estou achando que por algum motivo ele não está encontrando os valores da tabela pai e filho **tableAtividade**.

Uma outra coisa que você deve verificar é se existem esses campos no seu formulário que está tentando criar.

Abaixo postarei um trecho de um código meu, a única diferença é que estou criando apenas uma única linha na tabela pai e filho.

```auto
// Instancia as classe do serviço
var cardDtoArray = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardDtoArray");
var cardDto = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardDto");

// Dados principais do formulário
var solicitacaoDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto");

// Dados da tabela pai e filho
var eventoDataISODto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")
var eventoDataDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")
var eventoUsuarioCodDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")
var eventoUsuarioDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")
var eventoAtividadeDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")
var eventoIsMobileDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")
var eventoTaskCompleteDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")
var eventoDataCriacaoDto  = cardService.helper.instantiate("com.totvs.technology.ecm.dm.ws.CardFieldDto")

// Seta informações do registro
cardDto.setParentDocumentId(java.lang.Integer(parentDocumentId));
cardDto.setInheritSecurity(true);

// Grava valores dos campos do formulário
solicitacaoDto.setField("solicitacao");
solicitacaoDto.setValue(solicitacao);

eventoDataISODto.setField("eventoDataISO___1");
eventoDataISODto.setValue(dataCorrente("yyyy-MM-dd"));

eventoDataDto.setField("eventoData___1");
eventoDataDto.setValue(dataCorrente("dd/MM/yyyy HH:mm:ss"));

eventoUsuarioCodDto.setField("eventoUsuarioCod___1");
eventoUsuarioCodDto.setValue(eventoUsuarioCod);

eventoUsuarioDto.setField("eventoUsuario___1");
eventoUsuarioDto.setValue(eventoUsuario);

eventoAtividadeDto.setField("eventoAtividade___1");
eventoAtividadeDto.setValue(eventoAtividade);

eventoIsMobileDto.setField("eventoIsMobile___1");
eventoIsMobileDto.setValue(eventoIsMobile);

eventoTaskCompleteDto.setField("eventoTaskComplete___1");
eventoTaskCompleteDto.setValue(eventoTaskComplete);

eventoDataCriacaoDto.setField("eventoDataCriacao___1");
eventoDataCriacaoDto.setValue(eventoDataCriacao);


cardDto.getCardData().add(solicitacaoDto);
cardDto.getCardData().add(eventoDataISODto);
cardDto.getCardData().add(eventoDataDto);
cardDto.getCardData().add(eventoUsuarioCodDto);
cardDto.getCardData().add(eventoUsuarioDto);
cardDto.getCardData().add(eventoAtividadeDto);
cardDto.getCardData().add(eventoIsMobileDto);
cardDto.getCardData().add(eventoTaskCompleteDto);
cardDto.getCardData().add(eventoDataCriacaoDto);

cardDtoArray.getItem().add(cardDto);

// Chama o método create para criar o registro do formulário
var result = cardService.port.create(getValue("WKCompany"), webService.getLogin(), webService.getSenha(), cardDtoArray);

var webServiceMessage = result.getItem().get(0).getWebServiceMessage();

if(!webServiceMessage.equals("ok")){
	throw webServiceMessage;
}

var documentId = java.lang.Integer(result.getItem().get(0).getDocumentId());

return documentId
```

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Herick Freitas** (@herickfreitas) — 04/12/2023, 16:08 | ❤️ 1

Boa tarde Sérgio
Revisei todos os campos, faltava um… Após o ajuste deu certo. :top:

Veja a versão final

```auto
function createDocument() {

	log.info('function createDocument >> Entrou!');

	try {
		var serviceManager = ServiceManager.getService('ECMCardService');
		var serviceInstance = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.ECMCardServiceService');
		var service = serviceInstance.getCardServicePort();

		var attachment = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.Attachment');
		var relatedDocument = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.RelatedDocumentDto');
		var documentSecurity = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.DocumentSecurityConfigDto');
		var approver = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.ApproverDto');

		var cardDtoArray = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardDtoArray');
		var cardDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardDto');

		var cardFieldDto1 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
		var cardFieldDto2 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');

		cardDto.getAttachs().add(attachment);
		cardDto.getReldocs().add(relatedDocument);
		cardDto.getDocsecurity().add(documentSecurity);
		cardDto.getDocapprovers().add(approver);

		cardDto.setDocumentDescription(hAPI.getCardValue('nroProcesso')+' - '+hAPI.getCardValue('nomeProjeto')); //descricao do formulario
		cardDto.setAdditionalComments('');
		cardDto.setParentDocumentId(parseInt('982')); //pasta pai do formulario
		cardDto.setColleagueId(hAPI.getCardValue('matriculaResponsavel')); //matricula
		cardDto.setExpires(false);
		cardDto.setUserNotify(false);
		cardDto.setInheritSecurity(true);
		cardDto.setVersionDescription('');
		cardDto.setDocumentKeyWord('');


		// Campos formulário - Projeto
		var cardFieldDto0 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
		cardFieldDto0.setField("codProjeto");
		cardFieldDto0.setValue(hAPI.getCardValue('nroProcesso')); // Nro processo do Fluig
		cardDto.getCardData().add(cardFieldDto0);

		var cardFieldDto1 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto1.setField("nomeProjeto");
	    cardFieldDto1.setValue(hAPI.getCardValue('nomeProjeto'));
	    cardDto.getCardData().add(cardFieldDto1);

		var cardFieldDto2 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto2.setField("matriculaSolicitante");
	    cardFieldDto2.setValue(hAPI.getCardValue('matriculaSolicitante'));
	    cardDto.getCardData().add(cardFieldDto2);

		var cardFieldDto3 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto3.setField("emailSolicitante");
	    cardFieldDto3.setValue(hAPI.getCardValue('emailSolicitante'));
	    cardDto.getCardData().add(cardFieldDto3);

		var cardFieldDto4 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto4.setField("nomeSolicitante");
	    cardFieldDto4.setValue(hAPI.getCardValue('nomeSolicitante'));
	    cardDto.getCardData().add(cardFieldDto4);

		var cardFieldDto5 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto5.setField("departamento");
	    cardFieldDto5.setValue(hAPI.getCardValue('departamento'));
	    cardDto.getCardData().add(cardFieldDto5);

		var cardFieldDto6 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto6.setField("matriculaResponsavel");
	    cardFieldDto6.setValue(hAPI.getCardValue('matriculaResponsavel'));
	    cardDto.getCardData().add(cardFieldDto6);

		var cardFieldDto7 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto7.setField("emailResponsavel");
	    cardFieldDto7.setValue(hAPI.getCardValue('emailResponsavel'));
	    cardDto.getCardData().add(cardFieldDto7);

		var cardFieldDto8 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto8.setField("nomeResponsavel");
	    cardFieldDto8.setValue(hAPI.getCardValue('nomeResponsavel'));
	    cardDto.getCardData().add(cardFieldDto8);

		var cardFieldDto9 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto9.setField("dataRegistro");
	    cardFieldDto9.setValue(hAPI.getCardValue('dataRegistro'));
	    cardDto.getCardData().add(cardFieldDto9);

		var cardFieldDto10 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto10.setField("dataInicio");
	    cardFieldDto10.setValue(hAPI.getCardValue('dataInicio'));
	    cardDto.getCardData().add(cardFieldDto10);

		var cardFieldDto11 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto11.setField("dataFim");
	    cardFieldDto11.setValue(hAPI.getCardValue('dataFim'));
	    cardDto.getCardData().add(cardFieldDto11);

		var cardFieldDto12 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto12.setField("custoPrevisto");
	    cardFieldDto12.setValue(hAPI.getCardValue('custoPrevisto'));
	    cardDto.getCardData().add(cardFieldDto12);

		var cardFieldDto13 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto13.setField("escopo");
	    cardFieldDto13.setValue(hAPI.getCardValue('escopo'));
	    cardDto.getCardData().add(cardFieldDto13);

	    var cardFieldDto14 = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
	    cardFieldDto14.setField("status");
	    cardFieldDto14.setValue('Backlog');
	    cardDto.getCardData().add(cardFieldDto14);


	    // Campos tabela Atividade
	    var indexes = hAPI.getChildrenIndexes("tableAtividade");
	    if ( indexes.length > 0 ) {

	    	for ( var i = 0; i < indexes.length; i++ ) {
				var row 							= i+1;
		    	var codAtividade 					= i+1;
		    	var nomeAtividade					= (hAPI.getCardValue("nomeAtividade___" + indexes[i]));
		    	var dataRegistroAtividade			= getData();
				var dataInicioAtividade				= (hAPI.getCardValue("dataInicioAtividade___" + indexes[i]));
				var dataFimAtividade				= (hAPI.getCardValue("dataFimAtividade___" + indexes[i]));
				var matriculaResponsavelAtividade 	= (hAPI.getCardValue("matriculaResponsavelAtividade___" + indexes[i]));
				var emailResponsavelAtividade 		= (hAPI.getCardValue("emailResponsavelAtividade___" + indexes[i]));
				var nomeResponsavelAtividade 		= (hAPI.getCardValue("nomeResponsavelAtividade___" + indexes[i]));
				var descricaoAtividade		 		= (hAPI.getCardValue("descricaoAtividade___" + indexes[i]));

				// Popula campos da tabela pai e filho
				var codAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				codAtividadeDto.setField("codAtividade___"+row);
				codAtividadeDto.setValue(codAtividade);
				cardDto.getCardData().add(codAtividadeDto);

				var nomeAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				nomeAtividadeDto.setField("nomeAtividade___"+row);
				nomeAtividadeDto.setValue(nomeAtividade);
				cardDto.getCardData().add(nomeAtividadeDto);

				var dataRegistroAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataRegistroAtividadeDto.setField("dataRegistroAtividade___"+row);
				dataRegistroAtividadeDto.setValue(dataRegistroAtividade);
				cardDto.getCardData().add(dataRegistroAtividadeDto);

				var dataInicioAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataInicioAtividadeDto.setField("dataInicioAtividade___"+row);
				dataInicioAtividadeDto.setValue(dataInicioAtividade);
				cardDto.getCardData().add(dataInicioAtividadeDto);

				var dataFimAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				dataFimAtividadeDto.setField("dataFimAtividade___"+row);
				dataFimAtividadeDto.setValue(dataFimAtividade);
				cardDto.getCardData().add(dataFimAtividadeDto);

				var matriculaResponsavelAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				matriculaResponsavelAtividadeDto.setField("matriculaResponsavelAtividade___"+row);
				matriculaResponsavelAtividadeDto.setValue(matriculaResponsavelAtividade);
				cardDto.getCardData().add(matriculaResponsavelAtividadeDto);

				var emailResponsavelAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				emailResponsavelAtividadeDto.setField("emailResponsavelAtividade___"+row);
				emailResponsavelAtividadeDto.setValue(emailResponsavelAtividade);
				cardDto.getCardData().add(emailResponsavelAtividadeDto);

				var nomeResponsavelAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				nomeResponsavelAtividadeDto.setField("nomeResponsavelAtividade___"+row);
				nomeResponsavelAtividadeDto.setValue(nomeResponsavelAtividade);
				cardDto.getCardData().add(nomeResponsavelAtividadeDto);

				var descricaoAtividadeDto = serviceManager.instantiate('com.totvs.technology.ecm.dm.ws.CardFieldDto');
				descricaoAtividadeDto.setField("descricaoAtividade___"+row);
				descricaoAtividadeDto.setValue(descricaoAtividade);
				cardDto.getCardData().add(descricaoAtividadeDto);
			}

	    }

	    cardDtoArray.getItem().add(cardDto);


		result = service.create('1', 'teste', 'teste', cardDtoArray);
		log.info(' function createDocument >> result << ');
		log.dir(result);

		if (result.getItem().get(0).getWebServiceMessage().equals("ok")) {
            log.info("Sincronização completada com sucesso!");
            var documentoCriado = result.getItem().get(0).getDocumentId();
            log.info(' function createDocument >> documentoCriado '+documentoCriado);

            //Gravando retorno no formulário
            hAPI.setCardValue('documentId_ECM', documentoCriado);

        } else {
        	throw (result.getItem().get(0).getWebServiceMessage());
        }


	} catch (e) {
		throw e.message;
	}
}
```

---
