# Dataset - Campos do formulário e Workflow

> **Fonte:** [https://fluiggers.com.br/t/dataset-campos-do-formulario-e-workflow/870](https://fluiggers.com.br/t/dataset-campos-do-formulario-e-workflow/870)
> **Categoria:** API`s Fluig
> **Criado em:** 11/01/2022, 18:24
> **Visualizações:** 1141 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Julio Cesar Campos de Andrade** (@JCANDRADE) — 11/01/2022, 18:24 | ❤️ 1

Pessoal, boa tarde!

Preciso desenvolver um DATASET que traga campos do formulário e também as datas de quando o processo estava em determinada etapa do processo. Esses dados serão disponibilizados na API de dataset do Fluig para consumo externo. Minha dificuldade, é conseguir juntar os dados do formulário com os dados (data da etapa) no dataset.

Alguém tem algum exemplo de como isso funciona na criação do dataset customizado?

Muito Obrigado!

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 20/06/2022, 21:37

boa Noite. Eu acho bem dificil voce achar um Dataset padrao que faça isso, é mais facil voce criar um dataset customizado lendo as tabelas do Fluig.

sendo que a tabela do formulario voce teria que verificar qual é lendo a tabela META\_lista

function createDataset(fields, constraints, sortFields) {

```
var newDataset = DatasetBuilder.newDataset();

newDataset.addColumn("NUM_PROCES");
newDataset.addColumn("SOLICITANTE");
newDataset.addColumn("DATASOLIC");

var SQL = " SELECT PW.NUM_PROCES, FDN_USER.FULL_NAME AS 'SOLICITANTE', DATE(PW.START_DATE) AS 'DATASOLIC',"+
	"		   FORM.nom_pessoa_fisic AS 'FUNCIONARIO' "+
	"	 FROM PROCES_WORKFLOW PW"+
	"	INNER JOIN ANEXO_PROCES AP ON (PW.COD_EMPRESA = PW.COD_EMPRESA AND  PW.NUM_PROCES = AP.NUM_PROCES AND PW.NUM_SEQ_ANEXO_PRINC = AP.NUM_SEQ_ANEXO)"+
	"	INNER JOIN ml001016 FORM ON (AP.NR_DOCUMENTO = FORM.documentid AND AP.NR_VERSAO = FORM.version)"+
	"	INNER JOIN FDN_USERTENANT ON(FDN_USERTENANT.TENANT_ID = PW.COD_EMPRESA AND FDN_USERTENANT.LOGIN = PW.COD_MATR_REQUISIT)"+
	"	INNER JOIN FDN_USER ON(FDN_USER.USER_ID = FDN_USERTENANT.USER_ID)"+
	"	WHERE PW.COD_DEF_PROCES = 'wfSolicitacaoTreinamento'"+
	"	  AND PW.STATUS <> 1";

log.info("Ds_Busca_SolicRH - SQL: " + SQL);

var connectionWD = null;
var statementWD = null;
var rsWD = null;

try {
	var contextWD = new javax.naming.InitialContext();
	var dataSourceWD = contextWD.lookup("java:/jdbc/AppDS");
	connectionWD = dataSourceWD.getConnection();

	statementWD = connectionWD.prepareStatement(SQL);
	rsWD = statementWD.executeQuery();

	while(rsWD.next()) {
		newDataset.addRow(new Array(rsWD.getString("NUM_PROCES"),
									rsWD.getString("SOLICITANTE"),
									rsWD.getString("DATASOLIC")));
	}
} catch (e) {
	log.info("Ds_Busca_SolicRH - ERRO 2: " + e.message + "(#" + e.lineNumber + ")");
} finally {
	if (rsWD != null) {
		rsWD.close();
	}
	if (statementWD != null) {
		statementWD.close();
	}
	if (connectionWD != null) {
		connectionWD.close();
	}
}

return newDataset;
```

}

---
