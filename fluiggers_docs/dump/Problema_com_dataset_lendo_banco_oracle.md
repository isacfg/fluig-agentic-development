# Problema com dataset lendo banco oracle

> **Fonte:** [https://fluiggers.com.br/t/problema-com-dataset-lendo-banco-oracle/375](https://fluiggers.com.br/t/problema-com-dataset-lendo-banco-oracle/375)
> **Categoria:** Ambiente Fluig
> **Tags:** `java`
> **Criado em:** 15/04/2021, 16:58
> **Visualizações:** 802 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Odair Batista** (@odair.batista) — 15/04/2021, 16:58

Tenho um dataset (1) que lê um banco Oracle e funciona perfeitamente, no entanto criei um outro dataset (2) que executa o dataset (1), só que neste caso não traz informação nenhuma. Conferi o select no dataset (1) quando está sendo executado pelo dataset (2) e está correto, mas depois do executeQuery não tem nenhum resultado. Alguém já passou por isso?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 15/04/2021, 22:15

Precisaria ver o Script para ajudar melhor, já executei datasets desta forma e não tive problemas.

---

## Resposta #2

**Odair Batista** (@odair.batista) — 16/04/2021, 08:37

Salve Willian,

Então, eu também já fiz e funcionou perfeitamente, mas este tem algo que não estou enxergando.

Agradeço a ajuda amigo, segue os códigos:

**Dataset 1**

> > function defineStructure() {
> >
> > }
> >
> > function onSync(lastSyncDate) {
> >
> > }
> >
> > function createDataset(fields, constraints, sortFields) {
> > var dataset = DatasetBuilder.newDataset();
> >
> > ```
> > var created = false;
> > var fieldName = '';
> > var myQuery = '';
> > var where = '';
> >
> > if (constraints != null) {
> > 	for(var nIdx = 0; nIdx < constraints.length; nIdx++) {
> > 		if (constraints[nIdx].fieldName.indexOf('sqlLimit') == -1) {
> > 			fieldName = constraints[nIdx].fieldName.toUpperCase();
> > 			if (fieldName == 'LOGIN' || fieldName == 'RA_LOGIN' || fieldName == 'USRLOGIN') {fieldName = 'CAC.USRLOGIN'};
> >
> > 			where += "  AND " + fieldName + " >= '" + constraints[nIdx].initialValue.trim() + "' "
> > 			where += "  AND " + fieldName + " <= '" + constraints[nIdx].finalValue.trim() + "' "
> > 		}
> > 	}
> > }
> >
> > myQuery += "SELECT CAC.USRLOGIN AS RA_LOGIN, SRA.RA_FILIAL, SRA.RA_CC, CTT.CTT_DESC01 AS RA_DESCC, SRA.RA_MAT ";
> > myQuery += "  , SRA.RA_ADMISSA, SRA.RA_DEMISSA, SRA.RA_EMAIL, SRA.RA_ENDEREC, SRA.RA_NUMENDE, SRA.RA_COMPLEM ";
> > myQuery += "  , SRA.RA_BAIRRO, SRA.RA_ESTADO, SRA.RA_MUNICIP, SRA.RA_CEP, SRA.RA_DDDFONE, SRA.RA_TELEFON, SRA.RA_DDDCELU ";
> > myQuery += "  , SRA.RA_NUMCELU, SRA.RA_PAI, SRA.RA_MAE, SRA.RA_NASC, SRA.RA_SEXO, SRA.RA_CIC, SRA.RA_RG, SRA.RA_DTRGEXP ";
> > myQuery += "  , SRA.RA_RGORG, SRA.RA_TITULOE, SRA.RA_ZONASEC, SRA.RA_SECAO, SRA.RA_PIS ";
> > myQuery += "  , SRA.RA_CODFUNC, SRJ.RJ_DESC AS RA_DESCFUN ";
> > myQuery += "FROM CACCADUSR CAC ";
> > myQuery += "INNER JOIN SRA050 SRA ";
> > myQuery += "   ON SRA.RA_FILIAL  = CAC.FILVINC ";
> > myQuery += "  AND SRA.RA_MAT     = CAC.MATVINC ";
> > myQuery += "  AND SRA.D_E_L_E_T_ = ' ' ";
> > myQuery += "INNER JOIN CTT050 CTT ";
> > myQuery += "   ON CTT.CTT_FILIAL = '  ' ";
> > myQuery += "  AND CTT.CTT_CUSTO  = SRA.RA_CC ";
> > myQuery += "  AND CTT.D_E_L_E_T_ = ' ' ";
> > myQuery += "INNER JOIN SRJ050 SRJ ";
> > myQuery += "   ON SRJ.RJ_FILIAL  = SRA.RA_FILIAL ";
> > myQuery += "  AND SRJ.RJ_FUNCAO  = SRA.RA_CODFUNC ";
> > myQuery += "  AND SRJ.D_E_L_E_T_ = ' ' ";
> > myQuery += "WHERE CAC.EMPCFG    = '  ' ";
> >
> > if (constraints != '') {
> > 	myQuery += where;
> > }
> >
> > myQuery += "ORDER BY CAC.USRLOGIN";
> >
> > dataset.addColumn('RA_LOGIN');
> >
> > try {
> >     var dataSource = "/jdbc/ConexaoOracle";
> >     var ic = new javax.naming.InitialContext();
> >     var ds = ic.lookup(dataSource);
> >     var conn = ds.getConnection();
> >     var stmt = conn.prepareStatement(myQuery);
> >     var rs = stmt.executeQuery();
> >     var columnCount = rs.getMetaData().getColumnCount();
> >
> >     while (rs.next()) {
> >         if (!created) {
> >             for (var nIdx = 1; nIdx <= columnCount; nIdx++) {
> >             	if (rs.getMetaData().getColumnName(nIdx) != 'RA_LOGIN') {
> >                     dataset.addColumn(rs.getMetaData().getColumnName(nIdx));
> >             	}
> >             }
> >             created = true;
> >         }
> >
> >         var record = new Array();
> >
> >         for (var nIdx = 1; nIdx <= columnCount; nIdx++) {
> >             var oColumn = rs.getObject(rs.getMetaData().getColumnName(nIdx));
> >
> >             if (oColumn != null) {
> >             	record[nIdx - 1] = rs.getObject(rs.getMetaData().getColumnName(nIdx)).toString();
> >             } else {
> >             	record[nIdx - 1] = "null";
> >             }
> >         }
> >
> >         dataset.addRow(record);
> >     }
> > } catch (e) {
> >     log.error("ERROR==============> " + e.message);
> > } finally {
> >     if (rs != null) {
> >         rs.close();
> >     }
> >     if (stmt != null) {
> >         stmt.close();
> >     }
> >     if (conn != null) {
> >         conn.close();
> >     }
> > }
> > return dataset;
> > ```
> >
> > }
> >
> > function onMobileSync(user) {
> >
> > }

Este dataset 1 funciona perfeitamente sendo chamado direto no eclipse ou por outras rotinas.

\*\*Dataset 2 - Trecho que faz a chamada \*\*

> > ```
> > var constraintsBoss = new Array();
> > constraintsBoss.push(DatasetFactory.createConstraint("RA_LOGIN", iniBossLogin, endBossLogin, ConstraintType.MUST));
> >
> > var datasetBoss = DatasetFactory.getDataset("dsEmployeeUser", null, constraintsBoss, null);
> >
> > if (datasetBoss != null && datasetBoss.rowsCount != null && datasetBoss.rowsCount > 0) {
> >     //Rotina de leitura
> > }
> > ```

Aqui não carrega nada. Debuguei a rotina e vi que quando o dataset 1 é executado por este outro dataset 2, o executeQuery no dataset 1 não traz informações, mas o select está correto.

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 16/04/2021, 09:18

Bom dia Odair,

Pelo que eu vi esta ok mesmo, única coisa que eu alteraria seria o a forma que você adiciona os dados na query, dessa forma aceita inject, teria que colocar com tratamente stmt.setString(1, “VALOR DO CAMPO”);

Sugiro você fazer uma consulta para uma tabela do Fluig para ver se da o mesmo problema, para ver se não é só quando é conexão com a base do Protheus.

---

## Resposta #4

**Odair Batista** (@odair.batista) — 16/04/2021, 09:33

Obrigado Willian.

Abraço…

---
