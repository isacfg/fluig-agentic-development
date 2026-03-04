# Dataset Customizado com JOIN entre duas tabelas

> **Fonte:** [https://fluiggers.com.br/t/dataset-customizado-com-join-entre-duas-tabelas/3047](https://fluiggers.com.br/t/dataset-customizado-com-join-entre-duas-tabelas/3047)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 29/10/2024, 16:29
> **Visualizações:** 103 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**João Piologo** (@jpiologo) — 29/10/2024, 16:29

Olá,

Criei um dataset que consulta dados da tabela SD1 do Protheus, onde existe o campo D1\_CC. Preciso receber também a descrição desse centro de custo, da tabela CTT, alguém sabe como eu poderia fazer um JOIN entre essas duas tabelas para conseguir receber essa dado?

---

## Resposta #1

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 30/10/2024, 21:55

Boa noite,

Você pode fazer uma conexão JDBC com Protheus e criar seu dataset passando a query com o JOIN que você precisar.

Segue a documentação e o exemplo utilizando um JOIN

[https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo](https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo)

```auto
function createDataset(fields, constraints, sortFields) {

	var newDataset = DatasetBuilder.newDataset();
	log.info("QUERY: " + myQuery);
	var dataSource = "/jdbc/sql"; //Informe o nome do serviço do painel de controle
	var ic = new javax.naming.InitialContext();
	var ds = ic.lookup(dataSource);
	var created = false;
	//Filtro
	var pedido = "";

	if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "PEDIDO") {
            	pedido = constraints[i].initialValue;
            }
        }
    }

	var myQuery = "SELECT DISTINCT" +
					" (SELECT SUM(C7_TOTAL) " +
						"FROM SC7010 AS SC7 " +
						"INNER JOIN SCR010 AS SCR ON C7_NUM = CR_NUM AND C7_FILIAL = CR_FILIAL " +
						"WHERE SC7.C7_NUM = '"+pedido+"'  AND SCR.D_E_L_E_T_ <> '*' AND SC7.D_E_L_E_T_ <> '*' AND SCR.CR_STATUS = '02') AS VTOTALPEDIDO, " +
					"CONCAT(CR_FILIAL,' - ',M0_FILIAL) AS FILIAL, " +
					"M0_FILIAL AS NOMEFILIAL, " +
					"CR_NUM AS PEDIDO, " +
					"CR_TIPO AS TIPO, " +
					"C7_PRODUTO AS PRODUTO, " +
					"C7_DESCRI AS DESCRICAO, " +
					"C7_FORNECE AS FORNECEDOR, " +
					"C7_LOJA AS LOJA, " +
					"A2_NOME AS NOMEFORNEC, " +
					"C7_FILENT AS ENTREGA, " +
					"C7_QUANT AS QUANTIDADE, " +
					"C7_PRECO AS PRECO, " +
					"C7_TOTAL AS TOTAL, " +
					"C7_CC AS CCCOD, " +
					"CTT_DESC01 AS CCDESC " +
					"FROM SCR010 AS SCR " +
					"INNER JOIN SC7010 AS SC7 ON C7_NUM = CR_NUM AND C7_FILIAL = CR_FILIAL " +
					"INNER JOIN CTT010 AS CTT ON CTT_CUSTO = C7_CC " +
					"INNER JOIN SA2010 AS SA2 ON C7_FORNECE = A2_COD AND C7_LOJA = A2_LOJA " +
					"INNER JOIN SYS_COMPANY AS FIL ON CR_FILIAL = M0_CODFIL " +
					"WHERE SCR.D_E_L_E_T_ <> '*' AND SC7.D_E_L_E_T_ <> '*' AND FIL.D_E_L_E_T_ <> '*' AND SCR.CR_STATUS = '02' AND CR_NUM = '"+pedido+"' " +
					"ORDER BY CR_NUM";//Informe a query da requisição
	try {
		var conn = ds.getConnection();
		var stmt = conn.createStatement();
		var rs = stmt.executeQuery(myQuery);
		var columnCount = rs.getMetaData().getColumnCount();
		while (rs.next()) {
			if (!created) {
				for (var i = 1; i <= columnCount; i++) {
					newDataset.addColumn(rs.getMetaData().getColumnName(i));
				}
				created = true;
			}
			var Arr = new Array();
			for (var i = 1; i <= columnCount; i++) {
				var obj = rs.getObject(rs.getMetaData().getColumnName(i));
				if (null != obj) {
					Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
				} else {
					Arr[i - 1] = "null";
				}
			}
			newDataset.addRow(Arr);
		}
	} catch (e) {
		log.error("ERRO==============> " + e.message);
	} finally {
		if (rs != null) {
			rs.close();
		}
		if (stmt != null) {
			stmt.close();
		}
		if (conn != null) {
			conn.close();
		}
	}
	return newDataset;
}

function onMobileSync(user) {

	var sortingFields = [];
	var columnCount = rs.getMetaData().getColumnCount();

	var constraints = [];
	var result = {
		'fields': fields,
		'constraints': constraints,
		'sortingFields': sortingFields
	};

	return result;
}
```

---
