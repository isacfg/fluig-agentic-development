# Como pegar informação de um dataset com consulta SQL e colocar em um campo hidden do formulário

> **Fonte:** [https://fluiggers.com.br/t/como-pegar-informacao-de-um-dataset-com-consulta-sql-e-colocar-em-um-campo-hidden-do-formulario/1242](https://fluiggers.com.br/t/como-pegar-informacao-de-um-dataset-com-consulta-sql-e-colocar-em-um-campo-hidden-do-formulario/1242)
> **Categoria:** BPM
> **Tags:** `dataset`
> **Criado em:** 22/08/2022, 11:36
> **Visualizações:** 660 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**PedroHenrique** (@PedroHenrique) — 22/08/2022, 11:36

Bom dia,
Estou fazendo o tempo do SLA de um processo, e tentando chamar pelo afterStateEntry

```auto
function chamarSLA() {
                var numProcess = parseInt(getValue("WKNumProces"));
		var user = String(hAPI.getCardValue("userSelecionado"));
		//Monta as constraints para consulta
		var c1 = DatasetFactory.createConstraint("NUM_PROCES", numProcess , numProcess, ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("COD_MATR_ESCOLHID", user, user, ConstraintType.MUST);
		//var c3 = DatasetFactory.createConstraint("CD_MATRICULA", user, user, ConstraintType.MUST);

        log.info(" -- Num Processo SLA-- " + numProcess + " ---------- ");
        log.info(" -- Solicitante SLA-- " + user + " ---------- ");

		var constraints = new Array(c1,c2);

		log.info("--- Constraint Criada SLA --- " + c1 + " - " + c2 + "-");

		//Busca o dataset
		var dataset = DatasetFactory.getDataset("dsTesteTarefaAssumida", null, constraints, null);

		//Retorno
		var retorno = dataset.getValue(0, "ASSIGN_START_DATE");

		var inicio = hAPI.setCardValue("dataInicio", retorno);

		log.info("------Resultado Inicio--------"+ inicio +"------------------")

		return dataset;

	}
```

O dataset que estou usando para consulta e tentando puxar o valor do Inicio

```auto
function createDataset(fields, constraints, sortFields) {
  var newDataset = DatasetBuilder.newDataset();
  var numProcess 	    = constraints[0].initialValue;
  var numMatEscolhida     = constraints[1].initialValue;

  var myQuery = getQuery(numProcess, numMatEscolhida);

  var dataSource = "/jdbc/xxxxxxxxx";
  var ic = new javax.naming.InitialContext();
  var ds = ic.lookup(dataSource);
  var created = false;


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

function getQuery(numProcess, numMatEscolhida){


    var query = '';
    query += "SELECT COD_MATR_ESCOLHID, ASSIGN_START_DATE, ASSIGN_END_DATE from tar_proces ";
    query += " WHERE NUM_PROCES = '" + numProcess + "' AND COD_MATR_ESCOLHID = '" + numMatEscolhida + "' AND CD_MATRICULA = '" + numMatEscolhida + "' ";

    return query;
}
```

No fluig quando coloco valores fixos e consulto, ele devolve o resultado, apenas queria pegar o ASSIGN\_START\_DATE e ASSIGN\_END\_DATE do resultado e colocar em uma variável hidden para puxar depois esse valor pra um banco.

no log ele mostra os valores menos o do inicio, ele retorna como undefined
var inicio = hAPI.setCardValue(“dataInicio”, retorno);

---
