# Ajustar dataset SQL para sincronizar

> **Fonte:** [https://fluiggers.com.br/t/ajustar-dataset-sql-para-sincronizar/1576](https://fluiggers.com.br/t/ajustar-dataset-sql-para-sincronizar/1576)
> **Categoria:** Formulários
> **Tags:** `dataset`
> **Criado em:** 12/01/2023, 20:03
> **Visualizações:** 429 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Herick Freitas** (@herickfreitas) — 12/01/2023, 20:03

Boa noite Pessoal
Tenho um dataset que lê uma view no banco de dados via conexão jdbc… Mas é uma consulta com muitos itens, como tornar este dataset sincrono?

View
SELECT \[IDPRD\]
,\[CODIGO\_ITEM\]
,\[NOME\_ITEM\]
,\[UNIDADE\_ITEM\]
,\[CODIGO\_FAMILIA\]
,\[NOME\_FAMILIA\]
,\[CODIGO\_NATUREZA\]
,\[NUM\_FABRICANTE\]
,\[NATUREZA\]
,\[TIPO\_ITEM\]
,\[GRPFATURAMENTO\]
,\[CODFAB\]
,\[GRP\_FATURAMENTO\]
FROM \_Fluig\_ITENS

Dataset
function createDataset(fields, constraints, sortFields) {
var newDataset = DatasetBuilder.newDataset();
var dataSource = “/jdbc/FluigRM”;
var ic = new javax.naming.InitialContext();
var ds = ic.lookup(dataSource);
var created = false;

```
var myQuery = "SELECT *  from _Fluig_ITENS";
log.info("QUERY: " + myQuery);

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
    if (stmt != null) {
        stmt.close();
    }
    if (conn != null) {
        conn.close();
    }
}
return newDataset;
```

}

---

## Resposta #1

**Thiago Brianez** (@tbrianez) — 28/03/2023, 01:05

[@herickfreitas](/u/herickfreitas) conseguiu?

Surgiu essa necessidade aqui pra mim tbm, se obter sucesso compartilho aqui.
Por hora, estou passando uma func que da clear nos valores e subo novamente a cada vez que a schedule roda :sweat_smile:

---

## Resposta #2

**Herick Freitas** (@herickfreitas) — 28/03/2023, 08:04 | ❤️ 1

Bom dia
Ficou assim! Configurei para atualizar diariamente às 22:00.
O comando **addOrUpdateRow** irá atualizar os registros existentes, quando não existir, será incluído.

```auto
function defineStructure() {

	addColumn("CODCOLIGADA");
	addColumn("IDPRD");
    addColumn("CODIGO_ITEM");
    addColumn("NOME_ITEM");
    addColumn("UNIDADE_ITEM");
    addColumn("CODIGO_FAMILIA");
    addColumn("NOME_FAMILIA");
    addColumn("CODIGO_NATUREZA");
    addColumn("NUM_FABRICANTE");
    addColumn("NATUREZA");
    addColumn("TIPO_ITEM");
    addColumn("GRPFATURAMENTO");
    addColumn("CODFAB");
    addColumn("GRP_FATURAMENTO");

    setKey([ "IDPRD" ]);
    addIndex([ "CODCOLIGADA" ]);
    addIndex([ "IDPRD" ]);
    addIndex([ "CODIGO_ITEM" ]);
    addIndex([ "NOME_ITEM" ]);
    addIndex([ "NUM_FABRICANTE" ]);
    addIndex([ "CODCOLIGADA", "IDPRD", "CODIGO_ITEM", "NOME_ITEM", "NUM_FABRICANTE" ]);
}


function onSync(lastSyncDate) {
	var newDataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/FluigRM";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    log.info(" dsRmItens >>>> Entrou ");


    // * Campos retornados no Select
    // *  [IDPRD],[CODIGO_ITEM ],[NOME_ITEM ],[UNIDADE_ITEM ],[CODIGO_FAMILIA ],[NOME_FAMILIA ],[CODIGO_NATUREZA ],
    // *  [NUM_FABRICANTE ],[NATUREZA ],[TIPO_ITEM ],[GRPFATURAMENTO ],[CODFAB] ,[GRP_FATURAMENTO]

    var myQuery = "SELECT * FROM _Fluig_ITENS where codcoligada=1";

    log.info("QUERY: " + myQuery);

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
            newDataset.addOrUpdateRow(Arr);
        }
    } catch (e) {
        log.error("ERRO==============> " + e.message);
    } finally {
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return newDataset;
}


function createDataset(fields, constraints, sortFields) {

}
```

---
