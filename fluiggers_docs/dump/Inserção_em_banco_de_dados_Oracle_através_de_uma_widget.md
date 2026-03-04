# Inserção em banco de dados Oracle através de uma widget

> **Fonte:** [https://fluiggers.com.br/t/insercao-em-banco-de-dados-oracle-atraves-de-uma-widget/898](https://fluiggers.com.br/t/insercao-em-banco-de-dados-oracle-atraves-de-uma-widget/898)
> **Categoria:** WCM
> **Criado em:** 29/01/2022, 13:11
> **Visualizações:** 419 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 29/01/2022, 13:11

É possível provocar um dataset avançado via javascript numa widget?

Sei que posso fazer isto num evento de processo, mas consigo fazer via javascript atrelado a uma widget?
O código abaixo me dá erro

> [http://meufluig.com.br:8080/api/public/ecm/dataset/datasets/](http://meufluig.com.br:8080/api/public/ecm/dataset/datasets/) 500 (Internal Server Error)

e sequer o server.log do servidor mostra log.info(“===dataset ds\_ucrg\_insere\_ma”);

Ou seja, nem chegar a entrar, aparentemente, no código do dataset.

Será que o código abaixo só funcionaria se fosse adaptado para um evento de processo? Em widget não funciona?

```auto
let numFile=0;
	let txtResumo ='Resumo inserido';
	let numValor=12345.00;
	let numMoeda=1;
	let txtSC = 'AMMF,MMS,MF';
	let txtOutros='AGV,AHS,ASO';
	let txtEscr ='Escritorio 1,Escritorio 2';
	let txtLink = 'http://qualquer.com.br';
	let numTimeStamp = 1643471763431;
	let txtCartaHono = 'http://link-para-carta-hono.com.br';
	let numHonoEfet = 100000.00;
	let numUTs = 100;
	let arrayCampos=[
	            numFile,
	            txtResumo,
	            numValor,
	            numMoeda,
	            txtSC,
	            txtOutros,
	            txtEscr,
	            txtLink,
	            numTimeStamp,
	            txtCartaHono,
	            numHonoEfet,
	            numUTs
	            ];//arrayCampos
	console.log(arrayCampos);
	let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma", arrayCampos, null, null);
		console.log("Retornado do dataset: ",insercao);
```

O dataset avançado indicado acima tem o código

```auto
function createDataset(fields, constraints, sortFields) {
	log.info("===dataset ds_ucrg_insere_ma");

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("resultado");

    var dataSource = "/jdbc/homologacao-sisjuri-p02";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
  var myQuery = "insert into RCR.Z_UCRG_MA (CASO_MA,RESUMO_MA,VALOR_MA,"+
   "MOEDA_MA,SOCIOS_MA,OUTROS_MA,ESCR_MA,LINK_MA,"+
		"DATA_MA,CARTAHONO_MA,HONOEFET_MA,UTS_MA) values ("+
    	fields[0]+","+
    	"'"+fields[1]+"',"+
    	fields[2]+","+
    	fields[3]+","+
    	"'"+fields[4]+"',"+
    	"'"+fields[5]+"',"+
    	"'"+fields[6]+"',"+
    	"'"+fields[7]+"',"+
    	fields[8]+","+
    	"'"+fields[9]+"',"+
    	fields[10]+","+
    	fields[11]+
    	")";

    log.info("===myQuery: "+myQuery);

    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();

        var rs = stmt.executeQuery(myQuery);

    } catch (e) {
        log.error("ERRO==============> " + e.message);

        dataset.addRow([e.message]);
    } finally {
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }

        dataset.addRow(["Ok"]);
    }

    return dataset;
}
```

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 29/01/2022, 16:37

Eu descobri que o erro acontece quando, na chamada do Dataset no código do javascript da Widget, eu passo o arrayCampos.
Para teste, seu eu passar nulo no array de campos, como abaixo…

`let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma",null,null,null);`

…e, no Dataset, eu engessar os valores a serem inseridos, conforme abaixo, funciona.

```auto
function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("resultado");

    var dataSource = "/jdbc/homologacao-sisjuri-p02";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);

    var myQuery = "insert into RCR.Z_UCRG_MA (CASO_MA,RESUMO_MA,VALOR_MA,"+
   "MOEDA_MA,SOCIOS_MA,OUTROS_MA,ESCR_MA,LINK_MA,DATA_MA,CARTAHONO_MA,"+
   "HONOEFET_MA,UTS_MA) values (4,'resumo do 4',4000.00,4,'xpto4,xptu4',"+
   "'zeb4,zec4','escritorio 4, escritorio 44','http://xxx4.com',"+
   "TO_DATE('24/01/2022'),'enderec carta hono 4',4000.00,400)";

    log.info("===myQuery: "+myQuery);

    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();

        var rs = stmt.executeQuery(myQuery);

    } catch (e) {
        log.error("ERRO==============> " + e.message);

        dataset.addRow([e.message]);
    } finally {
        if (stmt !== null) {
            stmt.close();
        }
        if (conn !== null) {
            conn.close();
        }

        dataset.addRow(["Ok"]);
    }

    return dataset;

}//createDataset
```

Então, o problema acontece quando passo o array de campos.
Passando o array na chamada, o Dataset não consegue executar.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 29/01/2022, 17:19

O problema foi resolvido.

Eu estava construindo um array com valores mistos, entre strings e numéricos.
Por alguma razão, o Fluig não aceita isto. Então, no desespero, quando eu pus aspas em torno do valores numéricos tudo funcionou perfeitamente.
Assim,

```auto
let arrayCampos=[
	            numFile,
	            txtResumo,
	            numValor,
	            numMoeda,
	            txtSC,
	            txtOutros,
	            txtEscr,
	            txtLink,
	            numTimeStamp,
	            txtCartaHono,
	            numHonoEfet,
	            numUTs
	            ];//arrayCampos
	console.log(arrayCampos);
	let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma", arrayCampos, null, null);
```

deveria ser

```auto
let arrayCampos=[
	            "'"+numFile+"'",
	              "'"+txtResumo+"'",
	              "'"+numValor+"'",
	              "'"+numMoeda+"'",
	              "'"+txtSC+"'",
	              "'"+txtOutros+"'",
	              "'"+txtEscr+"'",
	             "'"+ txtLink+"'",
	             "'"+ numTimeStamp+"'",
	              "'"+txtCartaHono+"'",
	              "'"+numHonoEfet+"'",
	             "'"+ numUTs+"'"
	            ];//arrayCampos
	console.log(arrayCampos);
	let insercao = DatasetFactory.getDataset("ds_ucrg_insere_ma", arrayCampos, null, null);
```

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 31/01/2022, 11:55

que lokuraaaaaaaaaaaaaaaaa O.o

---
