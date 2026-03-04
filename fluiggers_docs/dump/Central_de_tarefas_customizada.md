# Central de tarefas customizada

> **Fonte:** [https://fluiggers.com.br/t/central-de-tarefas-customizada/1874](https://fluiggers.com.br/t/central-de-tarefas-customizada/1874)
> **Categoria:** BPM
> **Tags:** `bpm`, `dataset`
> **Criado em:** 20/04/2023, 17:09
> **Visualizações:** 540 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 20/04/2023, 17:09

Fala pessoal, beleza ? Estou desenvolvendo um página onde quero listar todas as solicitações por usuário, mas somente de um determinado processo. Quero exibir informações semelhantes as da central de tarefas. Quais são os datasets que posso consultar e obter essas informações ? Será que também é possível associar esse processo a seu formulário, de forma que eu consigo obter os dados do formulário ?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/04/2023, 02:01

Criar filtro na central de tarefas não resolve?

---

## Resposta #2

**Afonso Uliana Neto** (@Afonso) — 23/04/2023, 22:27 | ❤️ 1

Neste caso eu acho mais simples voce criar uma dataset customizado lendo as tabelas do banco de dados do Fluig e depois voce le a tabela do Formulario que esta vinculado ao Processo. As tabelas são PROCES\_WORKFLOW, ANEXO\_PROCES, o nome da tabela do formulario voce vai precisar consultar na tabela META\_LISTA foi o nome da tabela é criada dinamicamente quando o formulario é exportado o nome inicia em ml.

segue abaixo um exemplo de select.

```auto
SELECT PW.NUM_PROCES, FDN_USER.FULL_NAME AS 'SOLIC',+
	DATE(PW.START_DATE) AS 'DATASOLIC', DATE(PW.END_DATE) AS 'DATAFIM',+
	FORM.nom_pessoa_fisic AS 'FUNCIONARIO',+
	FORM.cdn_estab_ro AS 'ESTAB',+
	DATE_FORMAT(FORM.dt_inicio_ferias,'%d/%m/%Y') AS 'DTFERIASINI',+
	DATE_FORMAT(ADDDATE(FORM.dt_inicio_ferias, FORM.qtde_dias_ferias),'%d/%m/%Y') AS 'DTFERIASFIM',+
	FORM.qtde_dias_ferias AS 'QTDIAS',+
	CASE+
	   WHEN FORM.APROVACAO1 = 'S' AND FORM.user_diretor = 'S' AND FORM.APROVACAO2  = '' AND FORM.cdn_gestor <> cdn_funcionario_matr THEN 'APROVADO'+
		WHEN FORM.APROVACAO2  = '' THEN 'PENDENTE'+
		WHEN FORM.APROVACAO2 = 'S' THEN 'APROVADO'+
		WHEN FORM.APROVACAO2 = 'N' THEN 'REPROVADO'+
	END AS 'STATUSFERIAS',+
	APROV.FULL_NAME AS 'APROVADOR',+
	FORM.OBSREP2+
	FROM PROCES_WORKFLOW PW+
INNER JOIN ANEXO_PROCES AP ON (PW.COD_EMPRESA = PW.COD_EMPRESA AND  PW.NUM_PROCES = AP.NUM_PROCES AND PW.NUM_SEQ_ANEXO_PRINC = AP.NUM_SEQ_ANEXO)+
INNER JOIN ml001010 FORM ON (AP.NR_DOCUMENTO = FORM.documentid AND AP.NR_VERSAO = FORM.version)+
INNER JOIN FDN_USERTENANT ON(FDN_USERTENANT.TENANT_ID = PW.COD_EMPRESA AND FDN_USERTENANT.LOGIN = PW.COD_MATR_REQUISIT)+
INNER JOIN FDN_USER ON(FDN_USER.USER_ID = FDN_USERTENANT.USER_ID)+
LEFT JOIN TAR_PROCES TP1 ON (PW.COD_EMPRESA = TP1.COD_EMPRESA AND PW.NUM_PROCES = TP1.NUM_PROCES AND TP1.NUM_SEQ_ESCOLHID = 24)+
LEFT JOIN FDN_USERTENANT USER1 ON(USER1.USER_CODE = TP1.CD_MATRICULA)+
LEFT JOIN FDN_USER APROV ON(APROV.USER_ID = USER1.USER_ID)+
WHERE PW.COD_DEF_PROCES = 'nomeProcesso'+
  AND PW.STATUS <> 1+
	  AND PW.STATUS <> 1 +
  AND DATE(PW.START_DATE) >= ' + data_ini + ' +
  AND DATE(PW.START_DATE) <=
```

’ + data\_fim + ’ ORDER BY PW.NUM\_PROCES DESC;

---
