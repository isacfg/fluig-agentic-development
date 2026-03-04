# Erro de permissão ao criar pasta no GED via atividade de serviço no Fluig

> **Fonte:** [https://fluiggers.com.br/t/erro-de-permissao-ao-criar-pasta-no-ged-via-atividade-de-servico-no-fluig/3437](https://fluiggers.com.br/t/erro-de-permissao-ao-criar-pasta-no-ged-via-atividade-de-servico-no-fluig/3437)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 26/09/2025, 09:34
> **Visualizações:** 85 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 26/09/2025, 09:34

Bom dia.

Tenho um processo no Fluig em que uma das atividades de serviço precisa pegar os anexos, criar uma pasta no GED e gravar os arquivos nela.
Porém, ao executar automaticamente essa atividade de serviço, ocorre o seguinte erro:

JavaException: com.datasul.technology.webdesk.exception.ECMSecurityException: Usuário sem permissão para publicar documento nesta pasta!

A pasta está configurada para permitir gravação apenas para alguns usuários específicos e para o administrador do sistema.

No código fonte, utilizo as seguintes instruções:

```javascript
//Definindo permissão para o usuario
dtoUserSecurity = docAPI.newDocumentSecurityConfigDto();

dtoUserSecurity.setAttributionType(1);
dtoUserSecurity.setAttributionValue("administrador");
dtoUserSecurity.setPermission(true);
dtoUserSecurity.setShowContent(true);
dtoUserSecurity.setSecurityLevel(3);

dtosSecurity = new Array();
dtosSecurity.push(dtoUserSecurity);

//Cria a pasta para salvar os anexos do processo
dto = docAPI.newDocumentDto();
dto.setDocumentDescription(nomePasta);
dto.setAdditionalComments("Esta pasta foi criada automaticamente através da solicitação Fluig #" + numProcesso);
dto.setDocumentType(1);
dto.setParentDocumentId(parseInt(nPai));
dto.setDocumentTypeId("");
dto.setColleagueId("administrador");
dto.setPublisherId("administrador");
dto.setInheritSecurity(true);
dto.setDownloadEnabled(true);
folder = docAPI.createFolder(dto, dtosSecurity, null); // <<<--- aqui ocorre o erro.
```

Alguém sabe o que pode estar causando esse erro de permissão ou se há algum ajuste necessário no código?

Agradeço desde já pela ajuda.

Atenciosamente,
Rodrigo de Oliveira.

---

## Resposta #1

**Leonardo Feliciano** (@Leonardo_Feliciano1) — 28/09/2025, 14:27

Bom dia, tudo bem?
Peço, por gentileza, que verifique em qual etapa será criada e gravada a pasta, identifique qual usuário irá movimentar a tarefa em seguida e, posteriormente, conceda a devida permissão.

---

## Resposta #2

**Rodrigo de Oliveira** (@redschenko) — 30/09/2025, 09:32 | ❤️ 1

Bom dia, Leonardo!
Estou bem, obrigado. E você?

Após a aprovação do usuário, a solicitação é encaminhada para a próxima atividade.
Essa etapa é um serviço executado via script pelo sistema, portanto, não há um usuário específico responsável por movimentar a tarefa, mas sim o próprio sistema, conforme imagem.
No GED, a estrutura de pastas é a seguinte:
Raiz → Comprovantes → Ano → Mês → Número da solicitação.
A pasta “Comprovantes” já existe, enquanto as pastas “Ano”, “Mês” e “Número da solicitação” são criadas automaticamente, caso não existam.
A pasta “Comprovantes” possui permissão total para o administrador do sistema.

Existe necessidade de configurar alguma permissão específica para que o sistema possa criar e gravar as pastas?

Agradeço pela atenção e agradeço qualquer orientação.

Atenciosamente,
Rodrigo de Oliveira.

![Screenshot_118](https://fluiggers.com.br/uploads/default/optimized/2X/a/a9099ae52e5d24d15ef4f1ffe470e78e4bec22ae_2_484x500.png)

---

## Resposta #3

**Leonardo Feliciano** (@Leonardo_Feliciano1) — 30/09/2025, 13:45 | ❤️ 1

Estou bem, sim. Obrigado.

Boa tarde,

No meu caso, a permissão é concedida diretamente à pasta raiz, criada manualmente. Nessa pasta, atribuo acesso total ao administrador ou ao grupo de pessoas responsáveis pela execução da tarefa. As permissões são herdadas automaticamente pelas subpastas geradas pelo sistema. Dessa forma, adotei um procedimento semelhante ao que você mencionou.

Abaixo, deixo o código da forma como implementei, que talvez possa lhe auxiliar.

```auto
function beforeStateLeave(sequenceId){
	var pastaProcesso = 6505;//ID PASTA DOC.ALUNOS
	if (getValue("WKNextState") == 11) {
		log.info(">>> [beforeStateLeave] Inicio!");
		var tipoEst = hAPI.getCardValue("txtTipoEst");
		var matAluno = hAPI.getCardValue("txtMatAluno");
		var nomeAluno = hAPI.getCardValue("txtNmAluno");
		var cnpjEmp = hAPI.getCardValue("txtCnpjEmp");
		var nomeEmp = hAPI.getCardValue("txtNomeEmp");
		var calendario = java.util.Calendar.getInstance().getTime();

		var nomePasta = matAluno +" - "+ nomeAluno;
		var nomePastaAluno = nomePasta.substr(0, 45);
		var numPastaAluno = buscaPasta(pastaProcesso, nomePastaAluno);
		if (numPastaAluno == 0) {
			var docPasta = docAPI.newDocumentDto();
			docPasta.setDocumentDescription(nomePastaAluno);
			docPasta.setParentDocumentId(pastaProcesso);
			docPasta.setDocumentTypeId("");
			docPasta.setDocumentType("1");
			try {
				var novaPasta = docAPI.createFolder(docPasta, null, null);
				numPastaAluno = parseInt(novaPasta.getDocumentId());
				log.info(">>> [beforeStateLeave] Pasta Criada! (Codigo: "+ numPastaAluno +")");
			} catch(e) { log.error(">>> [beforeStateLeave] Erro na Pasta do Aluno: "+ e); }
		} else { log.info(">>> [beforeStateLeave] Pasta Encontrada! (Codigo: "+ numPastaAluno +")"); }

		var nomePastaReq = "PROGRAMAS DE ESTAGIO";
		var numPastaReq = buscaPasta(numPastaAluno, nomePastaReq);
		if (numPastaReq == 0) {
			var docPasta = docAPI.newDocumentDto();
			docPasta.setDocumentDescription(nomePastaReq);
			docPasta.setParentDocumentId(numPastaAluno);
			docPasta.setDocumentTypeId("");
			docPasta.setDocumentType("1");
			try {
				var novaPasta = docAPI.createFolder(docPasta, null, null);
				numPastaReq = parseInt(novaPasta.getDocumentId());
				log.info(">>> [beforeStateLeave] Pasta "+ nomePastaReq +" Criada! (Codigo: "+ numPastaReq +")");
			} catch(e) { log.error(">>> [beforeStateLeave] Erro na Pasta "+ nomePastaReq +": "+ e); }
		} else { log.info(">>> [beforeStateLeave] Pasta "+ nomePastaReq +" Encontrada! (Codigo: "+ numPastaReq +")"); }

		var docLista = hAPI.listAttachments();
		for (var i = 0; i < docLista.size(); i++) {
			var docNovo = docLista.get(i);
			if (docNovo.getDocumentType() != "7") { continue; }
			docNovo.setDocumentDescription(i +" - "+ tipoEst +" - "+ nomeEmp +" - Processo: "+ getValue("WKNumProces"));
			docNovo.setVersionDescription(i +" - "+ tipoEst +" - "+ nomeEmp +" - Processo: "+ getValue("WKNumProces"));
			docNovo.setParentDocumentId(numPastaReq);
			docNovo.setExpires(false);
			docNovo.setKeyWord("cpnj "+ cnpjEmp +" empresa "+ nomeEmp +" processo "+ getValue("WKNumProces") +" matricula "+ matAluno +" aluno "+ nomeAluno);
			docNovo.setCreateDate(calendario);
			docNovo.setInheritSecurity(true);
			docNovo.setTopicId(1);
			docNovo.setUserNotify(false);
			docNovo.setValidationStartDate(calendario);
			docNovo.setVersionOption("0");
			docNovo.setUpdateIsoProperties(true);
			docNovo.setPublisherId("administrador");
			docNovo.setColleagueId("administrador");
			try {
				hAPI.publishWorkflowAttachment(docNovo);
				log.info(">>> [beforeStateLeave] Documento Criado! (Codigo: "+ docNovo.getDocumentId() +")");
			} catch(e) { log.error(">>> [beforeStateLeave] Erro no Documento do Aluno: "+ e); }
		}
	}
	function buscaPasta(buscaPai, buscaNome) {
		log.info(">>> [beforeStateLeave] Busca Iniciada! ("+ buscaNome +")");
		//SOMENTE PASTAS
		var c1 = DatasetFactory.createConstraint("documentType", "1", "1", ConstraintType.MUST);
		//SOMENTE FILHAS DA PASTA PAI
		var c3 = DatasetFactory.createConstraint("parentDocumentId", buscaPai, buscaPai, ConstraintType.MUST);
		//BUSCAR POR PASTAS JÁ EXISTENTES DESTE USUÁRIO
		var c2 = DatasetFactory.createConstraint("documentDescription", buscaNome, buscaNome, ConstraintType.SHOULD);
		var datasetName = "document";
		var datasetFields = new Array("documentPK.documentId");
		var datasetFilters = new Array(c1, c3, c2);
		var datasetOrder = null;
		var dts = DatasetFactory.getDataset(datasetName, datasetFields, datasetFilters, datasetOrder);
		log.info(">>> [beforeStateLeave] Busca Concluida! (Total: "+ dts.rowsCount +")");
		if (dts.rowsCount > 0){
			return dts.getValue(0, "documentPK.documentId");
		} else { return 0; }
	}
}
```

---

## Resposta #4

**Rodrigo de Oliveira** (@redschenko) — 09/10/2025, 13:50

Boa tarde.

Concedi permissão para que os usuários movimentem a solicitação na atividade antes da execução do script automático.
A solução funcionou.
No entanto, entendo que essa não deveria ser a abordagem, pois trata-se de uma execução automática.

Atenciosamente,
Rodrigo de Oliveira.

---
