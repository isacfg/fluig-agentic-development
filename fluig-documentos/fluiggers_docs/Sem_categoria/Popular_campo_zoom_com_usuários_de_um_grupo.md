# Popular campo zoom com usuários de um grupo

> **Fonte:** [https://fluiggers.com.br/t/popular-campo-zoom-com-usuarios-de-um-grupo/484](https://fluiggers.com.br/t/popular-campo-zoom-com-usuarios-de-um-grupo/484)
> **Categoria:** Sem categoria
> **Criado em:** 01/06/2021, 10:57
> **Visualizações:** 1833 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 01/06/2021, 10:57

Pessoal, preciso disponibilizar um campo do tipo zoom para que o usuário selecione os responsáveis por uma atividade, porém, o usuários disponíveis deverão ser os usuários de um grupo, alguém pode dar um norte de como fazer?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 01/06/2021, 12:37

Boa tarde Vagner,

Você pode pegar do dataset “colleagueGroup” e lá filtrar no seu zoom.

Exemplo genérico de zoom com filtro:

```auto
<input type="zoom" name="codigo_zoom" id="codigo_zoom" data-zoom="{
                              'displayKey':'{campo do dataset}',
                              'datasetId':'{nome do dataset}',
                              'maximumSelectionLength':'1',
                              'placeholder':'Escolha o codigo',
                              'filterValues': '{campo filtro},{valor para filtro}',//pode ter mais de um filtro, sempre adicionando campo valor separado por virgula
                              'fields':[
								{
									'field':'{nome campo}',
									'label':'{label visualiza~]ao}'
								},{
									'field':'{nome campo}',
									'label':'{label visualiza~]ao}'
								}
                              ]
                              }" />
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 01/06/2021, 12:45

Caso queira, esse aqui desenvolvi consultando o SQL, já trás o nome junto.
Dá pra utilizar no zoom ali em cima também.

```javascript
/**
 @description Dataset que consulta usuários de um grupo
 @example

	var c1 = DatasetFactory.createConstraint('GROUPID', 'Faturamento', '', ConstraintType.MUST);
	var ds = DatasetFactory.getDataset('Ds_UsersByGroup', null, new Array(c1), null);


 */
function createDataset(fields, constraints, sortFields) {
	var minhaQuery = "";
	var dataSource = "jdbc/AppDS";
	var newDataset = DatasetBuilder.newDataset();
	var fieldName;

	try {
		var ic = new javax.naming.InitialContext();
		var ds = ic.lookup(dataSource);
		var created = false;
		var GROUPID;

		if(constraints != null){
	      for (i = 0; i < constraints.length; i++){
				if (constraints[i].fieldName == "GROUPID"){
	        	 	GROUPID = constraints[i].initialValue;
				}
	      }
	   }

		minhaQuery =  " ";
	    minhaQuery += " SELECT * FROM FDN_GROUPUSERROLE TB ";
	    minhaQuery += " INNER JOIN FDN_USERTENANT U1 on TB.LOGIN = U1.LOGIN ";
	    minhaQuery += " INNER JOIN FDN_USER U2 on U1.USER_ID = U2.USER_ID ";
	    minhaQuery += " WHERE GROUP_CODE=? ";
		minhaQuery += " ORDER BY FULL_NAME ";


		var conn = ds.getConnection();
		var stmt = conn.prepareStatement(minhaQuery);

		stmt.setString(1, GROUPID);

		var rs = stmt.executeQuery();
		var columnCount = rs.getMetaData().getColumnCount();

		//GERA TABELA DE RETORNO
		while (rs.next()) {
			if (!created) {
				//COLUNAS
				for (var i = 1; i <= columnCount; i++) {
					newDataset.addColumn(rs.getMetaData().getColumnName(i));

				}
				created = true;
			}
			var Arr = new Array();
			//LINHAS
			for (var i = 1; i <= columnCount; i++) {
				var obj = rs.getObject(rs.getMetaData().getColumnName(i));
				if (null != obj) {
					if(rs.getObject(rs.getMetaData().getColumnName(i)).toString()!=null){
						var campo = rs.getMetaData().getColumnName(i);
						Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
					}else{
						Arr[i - 1] = "";
					}
				} else {
					Arr[i - 1] = "";
				}
			}
			newDataset.addRow(Arr);
		}
	}catch (e) {
		newDataset.addColumn("Erro");
		newDataset.addRow(new Array(e.message));
		log.error("ERRO==============> " + e.message);
	}finally {
		if (rs != null && rs != false ){
			rs.close();
		}
		if (stmt != null){
			stmt.close();
		}
		if (conn != null){
			conn.close();
		}
	}
	return newDataset;
}
```

---

## Resposta #3

**Vagner Duarte** (@vagner_duarte) — 01/06/2021, 14:24 | ❤️ 2

Willian,

agradeço muito a ajuda. Mas arrumei uma outra forma de fazer utilizando um mecanismo customizado para retornar os usuários de um grupo, ja que a necessidade original era criar este mecanismo. Vou compartilhar abaixo a solução utilizada:

```javascript
function createDataset(fields, constraints, sortFields) {

	 // Cria o dataset
	var newDataset = DatasetBuilder.newDataset();

	newDataset.addColumn("NOME");
	newDataset.addColumn("MATRICULA_FLUIG");

	var constraintColleagueGroup1 = DatasetFactory.createConstraint('colleagueGroupPK.groupId', 'Gerentes', 'Gerentes', ConstraintType.MUST);
	var datasetColleagueGroup = DatasetFactory.getDataset('colleagueGroup', null, new Array(constraintColleagueGroup1), null);

	var constraintColleague1;
	var constraintColleague2;
	var colunasColleague;
	var datasetColleague;

	for (var i = 0; i < datasetColleagueGroup.rowsCount; i++) {

		usuarioCorrente = datasetColleagueGroup.getValue(i,"colleagueGroupPK.colleagueId");
		constraintColleague1 = DatasetFactory.createConstraint('active', 'true', 'true', ConstraintType.MUST);
		constraintColleague2 = DatasetFactory.createConstraint('colleaguePK.colleagueId', usuarioCorrente, usuarioCorrente, ConstraintType.MUST);
		colunasColleague = new Array('active', 'colleagueName', 'colleaguePK.colleagueId');
		datasetColleague = DatasetFactory.getDataset('colleague', colunasColleague, new Array(constraintColleague1, constraintColleague2), null);

		newDataset.addRow([datasetColleague.getValue(0, "colleagueName"), datasetColleague.getValue(0, "colleaguePK.colleagueId")]);
	}

	return newDataset;

}
```

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/06/2021, 15:07

A intenção é que o usuário selecionado seja o responsável pela execução da atividade?

Não bastaria usar o mecanismo de atribuição da Atividade marcando com “Atribuição por Grupo” e então selecionar o grupo?

---

## Resposta #5

**Vagner Duarte** (@vagner_duarte) — 01/06/2021, 15:19 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > A intenção é que o usuário selecionado seja o responsável pela execução da atividade?

Bruno,

na verdade a intenção é dinâmica, ora pode ser dois usuários de um grupo, ora pode ter 7 usuários, ora pode ser todos, podendo ser até 14 opções. Então no caso, a necessidade foi apresentar todos os usuários de um determinado grupo, e ele podendo escolher até 14 opções.

---

## Resposta #6

**system** (@system) — 02/06/2021, 07:19

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
