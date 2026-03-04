# Executar sql procedure em dataset

> **Fonte:** [https://fluiggers.com.br/t/executar-sql-procedure-em-dataset/1424](https://fluiggers.com.br/t/executar-sql-procedure-em-dataset/1424)
> **Categoria:** Ambiente Fluig
> **Tags:** `dataset`
> **Criado em:** 20/10/2022, 22:54
> **Visualizações:** 637 | **Likes:** 0 | **Respostas:** 6

---

## Pergunta original

**Cesar Tomita** (@Cesar_Tomita) — 20/10/2022, 22:54

Olá,

Recentemente tentei executar uma procedure sql para criação de um dataset, e o mesmo não é aceito.

Tenho a conexão JDBC para usar meu banco de dados, usando um select simples, o dataset traz as informações, mas quando usado uma proc “exec sp\_busca”, ela não me retorna…

Alguém sabe como posso fazer?

---

## Resposta #1

**André Timm** (@andre.timm) — 21/10/2022, 07:27

Qual banco de dados esta utilizando ? Aqui uso SQL server, ai sempre que preciso rodar procedure;função etc, utilizo select dbo.NOME\_FUNCAO

---

## Resposta #2

**Cesar Tomita** (@Cesar_Tomita) — 21/10/2022, 07:45

Utilizo o MS SQL SERVER.

Ele me retorna erro…

Caused by: sun.org.mozilla.javascript.internal.WrappedException: Wrapped com.microsoft.sqlserver.jdbc.SQLServerException: A instrução não retornou um conjunto de resultados. (#35)

Estou usando o código da documentação.

[https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo](https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo)

Em " `var` `myQuery =` `"select * from pessoas"` `;`" coloco minha proc, porém, erro.

---

## Resposta #3

**André Timm** (@andre.timm) — 21/10/2022, 08:55

Oq sua proc faz, ela te retorna valores ou executa algo (insert, update) ?

---

## Resposta #4

**Cesar Tomita** (@Cesar_Tomita) — 21/10/2022, 10:05

É um select com joins, declares, tabela variável (insert nela).

---

## Resposta #5

**André Timm** (@andre.timm) — 21/10/2022, 10:27

Consegue colocar num gist o codigo do seu dataset ? Ou caso ache melhor a gente pode conversar por algum chat pra tentar entender e dps postamos aqui a solução

---

## Resposta #6

**Cesar Tomita** (@Cesar_Tomita) — 21/10/2022, 11:17

O script é simplesmente o da documentação, mudando somente a conexão e query:

function createDataset(fields, constraints, sortFields) {
var newDataset = DatasetBuilder.newDataset();
log.info("QUERY: " + myQuery);
var dataSource = “/jdbc/fluig\_teste”;
var ic = new javax.naming.InitialContext();
var ds = ic.lookup(dataSource);
var created = false;
var myQuery = “exec sp\_busca”;
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
Arr\[i - 1\] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
} else {
Arr\[i - 1\] = “null”;
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

pode ser por chat também.

---

## Resposta #7

**MAURO SIMOES** (@Mautresim) — 25/10/2022, 09:24

Eu acho muito esquisita a utilização de uma variável que não foi declarada, na linha log.info("QUERY: " + myQuery);

---

## Resposta #8

**MAURO SIMOES** (@Mautresim) — 15/08/2025, 10:14

Eu estou tentando usar uma procedure com o dataset abaixo, mas lá no log.info do Fluig aparece a mensagem de que

> 2025-08-15 09:54:29,655 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-1801) myQuery ds\_ucrg\_teste\_generico procedure === DECLARE vViewName VARCHAR2(100); BEGIN FINANCE.CST\_GERA\_EXTRATO( TO\_DATE(‘2020-08-01’,‘YYYY-MM-DD’),TO\_DATE(‘2020-08-15’,‘YYYY-MM-DD’),‘500.010’,vViewName);END;
> 2025-08-15 09:54:29,881 ERROR \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-1801) ERRO==============> java.sql.SQLException: SQL string is not Query

Provavelmente é porque a procedure faz deleção e depois cria novos dados para que uma VIEW leia os dados recriados. A instrução do dataset ’ var rs = stmt.executeQuery(myQuery);’ não pode ser usada nestes casos. Mas, mesmo que eu mude para ‘executeUpdate’, dá erro.

O código do dataset:

```auto
function createDataset(fields, constraints, sortFields) {
    //ds_ucrg_teste_generico
if(constraints !== null){
    for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "DOCUMENTO") {
                documento = constraints[i].initialValue;
            }//if constraints ==
            if (constraints[i].fieldName == "FATURA") {
                fatura = constraints[i].initialValue;
            }//if constraints ==
                if (constraints[i].fieldName == "VENCIMENTO") {
                dataInicial = constraints[i].initialValue;
                dataFinal = constraints[i].finalValue;
            }//if constraints ==
        }//for
}//if constraints !==

let myQuery = "DECLARE ";
myQuery = myQuery + "vViewName VARCHAR2(100); ";
myQuery = myQuery + "BEGIN ";
myQuery = myQuery + "FINANCE.CST_GERA_EXTRATO( ";
myQuery = myQuery + "TO_DATE('2020-08-01','YYYY-MM-DD'),";
myQuery = myQuery + "TO_DATE('2020-08-15','YYYY-MM-DD'),";
myQuery = myQuery + "'500.010',";
myQuery = myQuery + "vViewName);END;";
log.info("myQuery ds_ucrg_teste_generico procedure === "+myQuery);
//---
var newDataset = DatasetBuilder.newDataset();
// ********************************************************HOMOLOGAÇÃO
// ********************************************************HOMOLOGAÇÃO
// ********************************************************HOMOLOGAÇÃO
  var dataSource = "/jdbc/Sisjurihomonuvem";
// ********************************************************HOMOLOGAÇÃO
// ********************************************************HOMOLOGAÇÃO
// ********************************************************HOMOLOGAÇÃO

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
}//createDataset
```

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/08/2025, 09:34

Normalmente `query` é quando você faz um select, então pega o resultado.

No caso de executar outros comandos SQL normalmente fazemos só o `execute`.

---
