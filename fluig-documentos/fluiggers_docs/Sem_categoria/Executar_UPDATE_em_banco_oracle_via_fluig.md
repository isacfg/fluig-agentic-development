# Executar UPDATE em banco oracle via fluig

> **Fonte:** [https://fluiggers.com.br/t/executar-update-em-banco-oracle-via-fluig/430](https://fluiggers.com.br/t/executar-update-em-banco-oracle-via-fluig/430)
> **Categoria:** Sem categoria
> **Criado em:** 07/05/2021, 14:32
> **Visualizações:** 1890 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 07/05/2021, 14:32

preciso faz um Update em um banco oracle, mas não vai de jeito nenhum.

Alguém tem um exemplo?
Criei um datasource jdbc que faz select de boa.

Esse é o update que to fazendo.

```javascript
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("RowsAffected");

	var dataSource = "/jdbc/winthorjdbc";
	var ic = new javax.naming.InitialContext();
	var ds = ic.lookup(dataSource);
	var created = false;
	var QUERY = "UPDATE PCPEDIDO SET DATAFLUIG = '11/10/1980'";
	try {
		var conn = ds.getConnection();
		var stmt = conn.createStatement();
		var rs = stmt.executeUpdate(QUERY);
		log.info("Linhas afetadas " +rs.toString());
		dataset.addRow([rs.toString()]);
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
	return dataset;

}
```

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 07/05/2021, 16:04 | ❤️ 1

Boa tarde Daniel,

De UPDATE não achei aqui, mas de INSERT tenho esse, pode tentar adaptar para UPDATE.
Nele utilizo prepareStatement pra evitar inject, dessa forma que vc fez ali é perigoso. Eu encaminho os dados pelas constraints.

```
/**
 * 	@author Willian Fellipe Laynes
 *  @mail   willianlaynes@hotmail.com
	@example
	var c = [];
	c.push(DatasetFactory.createConstraint('nome_do_campo1', 'S', 'VARCHAR', ConstraintType.MUST));//tipo CHAR
	c.push(DatasetFactory.createConstraint('nome_do_campo2', 'N', 'VARCHAR', ConstraintType.MUST));//tipo CHAR
	c.push(DatasetFactory.createConstraint('nome_do_campo3', '629864683'   , 'INTEGER', ConstraintType.MUST)); //tipo INTEGER
	c.push(DatasetFactory.createConstraint('nome_do_campo4', '01/02/2021'   , 'DATE', ConstraintType.MUST)); //tipo DATE
	var ds = DatasetFactory.getDataset('DS_INSERT', null, c, null);
	console.log(ds)

	@returns
	Retorno Coluna STATUS(true/false) e MSG("texto"),
​
 */
​
function createDataset(fields, constraints, sortFields) {
    log.info("======RETORNO PROCEDURE=====INICIOU================")
    var newDataset = DatasetBuilder.newDataset();
    newDataset.addColumn("STATUS");
    newDataset.addColumn("MSG");
    try {
        var minhaQuery = "";
        var sqlInsert = "";
        var sqlValues = "";
        var table = "SUA_TABELA";
​
        //PRODUÇÃO DATASOURCE
        var dataSource = "jdbc/AppDS"; //CONEXAO COM O SERVIDOR DESEJADO, ESSE É O PADRÃO DO SERVIDOR DO FLUIG
​
        var ic = new javax.naming.InitialContext();
        var ds = ic.lookup(dataSource);
        var created = false;
        if (constraints != null) {
​
            sqlInsert += " (nnumeatend";
            sqlValues += " VALUES (seqatend.nextval@s"; //NO MEU CASO TEM AUTO INCREMENTE, TALVEZ PRECISE AJSUTAR ESSA LOGICA, DEVIDO A VIRGULA INICIAL DO FOR LOGO ABAIXO
​
            for (i = 0; i < constraints.length; i++) {
                var tipo = constraints[i].finalValue;
​
                if (constraints[i].initialValue != "") {
                    sqlInsert += "," + constraints[i].fieldName;
                    if (tipo != "DATE") {
                        sqlValues += ",?";
                    } else {
                        sqlValues += ",to_date(?,'dd/MM/yyyy hh24:mi:ss')";
                    }
                }
            }
            sqlInsert += ")";
            sqlValues += ")";
​
            minhaQuery = " ";
            minhaQuery += "	INSERT INTO  " + table;
            minhaQuery += sqlInsert
            minhaQuery += sqlValues
​
            var conn = ds.getConnection();
            var stmt = conn.prepareStatement(minhaQuery);
​
​
            var indice = 1;
            for (i = 0; i < constraints.length; i++) {
​
                if (constraints[i].initialValue != "") {
                    var tipo = constraints[i].finalValue;
                    if (tipo == "VARCHAR") {
                        stmt.setString(indice++, constraints[i].initialValue);
                    } else if (tipo == "DATE") {
                        stmt.setString(indice++, constraints[i].initialValue);
                    } else if (tipo == "INTEGER") {
                        stmt.setInt(indice++, constraints[i].initialValue);
                    } else {
                        stmt.setString(indice++, constraints[i].initialValue);
                    }
                }
            }
​
            var rs = stmt.execute();
​
            if (rs == false) {
                newDataset.addRow(new Array('true', "Dados inseridos com sucesso(" + rs + ")"));
            } else {
                newDataset.addRow(new Array('false', "Erro ao inserir os dados :(" + rs + ")")); //NUNCA EXECUTA ESSA LINHA, SOMENTE PARA EVITAR ERRO CASO CAIA
            }
​
        } else {
            newDataset.addRow(new Array('false', "Necessário informar os campos e seus valores "));
​
        }
    } catch (e) {
        log.info("CATCH erro de execusão do dataset:	" + e.message)
        newDataset.addRow(new Array('false', "CATCH erro de execusão do dataset :(" + e.message + ")"));
    } finally {
        if (rs != null && rs != false)
            rs.close();
        if (stmt != null)
            stmt.close();
        if (conn != null)
            conn.close();
    }
    return newDataset;
}
```

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 07/05/2021, 16:10

Talvez tenha que usar nessa linha aqui:
`var rs = stmt.execute();`
​ algo assim
`var rs = stmt.executeUpdate();`
​

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 08/05/2021, 07:52

Eu to usando exatamente isso.

> var rs = stmt.execute();

Deve ser merda do fluig.
No log do eclipse vem a seguinte mensagem:

reloading token
calling tokenService.getToken(“admin”, \*\*\*\*\*); (323 ms)
calling datasetService.getDataset(“cd58753f-0aeb-4e9b-8b12-c8f6be1c5b8c”, “”, “1”, “ds\_winthor\_update\_pedido”, “net.java.dev.jaxb.array.StringArray@7145469”, “com.totvs.tds.ecm.foundation.ws.SearchConstraintDtoArray@646e17b9”, “net.java.dev.jaxb.array.StringArray@515576b0”); (10005 ms)
javax.xml.ws.WebServiceException: java.net.SocketTimeoutException: Read timed out
at com.sun.xml.ws.transport.http.client.HttpClientTransport.readResponseCodeAndMessage(HttpClientTransport.java:210)
at com.sun.xml.ws.transport.http.client.HttpTransportPipe.createResponsePacket(HttpTransportPipe.java:241)
at com.sun.xml.ws.transport.http.client.HttpTransportPipe.process(HttpTransportPipe.java:232)
at com.sun.xml.ws.transport.http.client.HttpTransportPipe.processRequest(HttpTransportPipe.java:145)
at com.sun.xml.ws.transport.DeferredTransportPipe.processRequest(DeferredTransportPipe.java:110)
at com.sun.xml.ws.api.pipe.Fiber.\_\_doRun(Fiber.java:1136)
at com.sun.xml.ws.api.pipe.Fiber.\_doRun(Fiber.java:1050)
at com.sun.xml.ws.api.pipe.Fiber.doRun(Fiber.java:1019)
at com.sun.xml.ws.api.pipe.Fiber.runSync(Fiber.java:877)
at com.sun.xml.ws.client.Stub.process(Stub.java:463)
at com.sun.xml.ws.client.sei.SEIStub.doProcess(SEIStub.java:191)
at com.sun.xml.ws.client.sei.SyncMethodHandler.invoke(SyncMethodHandler.java:108)
at com.sun.xml.ws.client.sei.SyncMethodHandler.invoke(SyncMethodHandler.java:92)
at com.sun.xml.ws.client.sei.SEIStub.invoke(SEIStub.java:161)
at com.sun.proxy.$Proxy57.getDataset(Unknown Source)
at com.totvs.tds.ecm.foundation.ws.FluigDatasetService.getDataset(FluigDatasetService.java:25)
at com.totvs.tds.ecm.server.core.WSMethods.getDataset(WSMethods.java:975)
at com.totvs.tds.ecm.dsviewer.views.DatasetView.refreshDataset(DatasetView.java:316)
at com.totvs.tds.ecm.dsviewer.views.DatasetView.openConf(DatasetView.java:290)
at com.totvs.tds.ecm.dsviewer.views.DatasetView.access$1(DatasetView.java:261)
at com.totvs.tds.ecm.dsviewer.views.DatasetView$3.run(DatasetView.java:162)
at org.eclipse.jface.action.Action.runWithEvent(Action.java:473)
at org.eclipse.jface.action.ActionContributionItem.handleWidgetSelection(ActionContributionItem.java:565)
at org.eclipse.jface.action.ActionContributionItem.lambda$5(ActionContributionItem.java:436)
at org.eclipse.swt.widgets.EventTable.sendEvent(EventTable.java:86)
at org.eclipse.swt.widgets.Display.sendEvent(Display.java:4428)
at org.eclipse.swt.widgets.Widget.sendEvent(Widget.java:1079)
at org.eclipse.swt.widgets.Display.runDeferredEvents(Display.java:4238)
at org.eclipse.swt.widgets.Display.readAndDispatch(Display.java:3817)
at org.eclipse.e4.ui.internal.workbench.swt.PartRenderingEngine$5.run(PartRenderingEngine.java:1150)
at org.eclipse.core.databinding.observable.Realm.runWithDefault(Realm.java:336)
at org.eclipse.e4.ui.internal.workbench.swt.PartRenderingEngine.run(PartRenderingEngine.java:1039)
at org.eclipse.e4.ui.internal.workbench.E4Workbench.createAndRunUI(E4Workbench.java:153)
at org.eclipse.ui.internal.Workbench.lambda$3(Workbench.java:680)
at org.eclipse.core.databinding.observable.Realm.runWithDefault(Realm.java:336)
at org.eclipse.ui.internal.Workbench.createAndRunWorkbench(Workbench.java:594)
at org.eclipse.ui.PlatformUI.createAndRunWorkbench(PlatformUI.java:148)
at org.eclipse.ui.internal.ide.application.IDEApplication.start(IDEApplication.java:151)
at org.eclipse.equinox.internal.app.EclipseAppHandle.run(EclipseAppHandle.java:196)
at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.runApplication(EclipseAppLauncher.java:134)
at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.start(EclipseAppLauncher.java:104)
at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:388)
at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:243)
at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
at sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)
at sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)
at java.lang.reflect.Method.invoke(Unknown Source)
at org.eclipse.equinox.launcher.Main.invokeFramework(Main.java:653)
at org.eclipse.equinox.launcher.Main.basicRun(Main.java:590)
at org.eclipse.equinox.launcher.Main.run(Main.java:1499)
Caused by: java.net.SocketTimeoutException: Read timed out
at java.net.SocketInputStream.socketRead0(Native Method)
at java.net.SocketInputStream.socketRead(Unknown Source)
at java.net.SocketInputStream.read(Unknown Source)
at java.net.SocketInputStream.read(Unknown Source)
at java.io.BufferedInputStream.fill(Unknown Source)
at java.io.BufferedInputStream.read1(Unknown Source)
at java.io.BufferedInputStream.read(Unknown Source)
at sun.net.www.http.HttpClient.parseHTTPHeader(Unknown Source)
at sun.net.www.http.HttpClient.parseHTTP(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.getInputStream0(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.getInputStream(Unknown Source)
at java.net.HttpURLConnection.getResponseCode(Unknown Source)
at com.sun.xml.ws.transport.http.client.HttpClientTransport.readResponseCodeAndMessage(HttpClientTransport.java:206)
… 49 more
javax.xml.ws.WebServiceException: java.net.SocketTimeoutException: Read timed out
at com.sun.xml.ws.transport.http.client.HttpClientTransport.readResponseCodeAndMessage(HttpClientTransport.java:210)
at com.sun.xml.ws.transport.http.client.HttpTransportPipe.createResponsePacket(HttpTransportPipe.java:241)
at com.sun.xml.ws.transport.http.client.HttpTransportPipe.process(HttpTransportPipe.java:232)
at com.sun.xml.ws.transport.http.client.HttpTransportPipe.processRequest(HttpTransportPipe.java:145)
at com.sun.xml.ws.transport.DeferredTransportPipe.processRequest(DeferredTransportPipe.java:110)
at com.sun.xml.ws.api.pipe.Fiber.\_\_doRun(Fiber.java:1136)
at com.sun.xml.ws.api.pipe.Fiber.\_doRun(Fiber.java:1050)
at com.sun.xml.ws.api.pipe.Fiber.doRun(Fiber.java:1019)
at com.sun.xml.ws.api.pipe.Fiber.runSync(Fiber.java:877)
at com.sun.xml.ws.client.Stub.process(Stub.java:463)
at com.sun.xml.ws.client.sei.SEIStub.doProcess(SEIStub.java:191)
at com.sun.xml.ws.client.sei.SyncMethodHandler.invoke(SyncMethodHandler.java:108)
at com.sun.xml.ws.client.sei.SyncMethodHandler.invoke(SyncMethodHandler.java:92)
at com.sun.xml.ws.client.sei.SEIStub.invoke(SEIStub.java:161)
at com.sun.proxy.$Proxy57.getDataset(Unknown Source)
at com.totvs.tds.ecm.foundation.ws.FluigDatasetService.getDataset(FluigDatasetService.java:25)
at com.totvs.tds.ecm.server.core.WSMethods.getDataset(WSMethods.java:975)
at com.totvs.tds.ecm.dsviewer.views.DatasetView.refreshDataset(DatasetView.java:316)
at com.totvs.tds.ecm.dsviewer.views.DatasetView.openConf(DatasetView.java:290)
at com.totvs.tds.ecm.dsviewer.views.DatasetView.access$1(DatasetView.java:261)
at com.totvs.tds.ecm.dsviewer.views.DatasetView$3.run(DatasetView.java:162)
at org.eclipse.jface.action.Action.runWithEvent(Action.java:473)
at org.eclipse.jface.action.ActionContributionItem.handleWidgetSelection(ActionContributionItem.java:565)
at org.eclipse.jface.action.ActionContributionItem.lambda$5(ActionContributionItem.java:436)
at org.eclipse.swt.widgets.EventTable.sendEvent(EventTable.java:86)
at org.eclipse.swt.widgets.Display.sendEvent(Display.java:4428)
at org.eclipse.swt.widgets.Widget.sendEvent(Widget.java:1079)
at org.eclipse.swt.widgets.Display.runDeferredEvents(Display.java:4238)
at org.eclipse.swt.widgets.Display.readAndDispatch(Display.java:3817)
at org.eclipse.e4.ui.internal.workbench.swt.PartRenderingEngine$5.run(PartRenderingEngine.java:1150)
at org.eclipse.core.databinding.observable.Realm.runWithDefault(Realm.java:336)
at org.eclipse.e4.ui.internal.workbench.swt.PartRenderingEngine.run(PartRenderingEngine.java:1039)
at org.eclipse.e4.ui.internal.workbench.E4Workbench.createAndRunUI(E4Workbench.java:153)
at org.eclipse.ui.internal.Workbench.lambda$3(Workbench.java:680)
at org.eclipse.core.databinding.observable.Realm.runWithDefault(Realm.java:336)
at org.eclipse.ui.internal.Workbench.createAndRunWorkbench(Workbench.java:594)
at org.eclipse.ui.PlatformUI.createAndRunWorkbench(PlatformUI.java:148)
at org.eclipse.ui.internal.ide.application.IDEApplication.start(IDEApplication.java:151)
at org.eclipse.equinox.internal.app.EclipseAppHandle.run(EclipseAppHandle.java:196)
at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.runApplication(EclipseAppLauncher.java:134)
at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.start(EclipseAppLauncher.java:104)
at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:388)
at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:243)
at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
at sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)
at sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)
at java.lang.reflect.Method.invoke(Unknown Source)
at org.eclipse.equinox.launcher.Main.invokeFramework(Main.java:653)
at org.eclipse.equinox.launcher.Main.basicRun(Main.java:590)
at org.eclipse.equinox.launcher.Main.run(Main.java:1499)
Caused by: java.net.SocketTimeoutException: Read timed out
at java.net.SocketInputStream.socketRead0(Native Method)
at java.net.SocketInputStream.socketRead(Unknown Source)
at java.net.SocketInputStream.read(Unknown Source)
at java.net.SocketInputStream.read(Unknown Source)
at java.io.BufferedInputStream.fill(Unknown Source)
at java.io.BufferedInputStream.read1(Unknown Source)
at java.io.BufferedInputStream.read(Unknown Source)
at sun.net.www.http.HttpClient.parseHTTPHeader(Unknown Source)
at sun.net.www.http.HttpClient.parseHTTP(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.getInputStream0(Unknown Source)
at sun.net.www.protocol.http.HttpURLConnection.getInputStream(Unknown Source)
at java.net.HttpURLConnection.getResponseCode(Unknown Source)
at com.sun.xml.ws.transport.http.client.HttpClientTransport.readResponseCodeAndMessage(HttpClientTransport.java:206)
… 49 more

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 08/05/2021, 13:41

SELECT você esta conseguindo fazer? Ou só UPDATE? O Usuário cadastrado no domain.xml tem permissão para UPDATE?

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 08/05/2021, 13:57

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > javax.xml.ws.WebServiceException: java.net.SocketTimeoutException: Read timed out

Select vai de boa. Somente o update falha o usuário tem sim permissão.

2021-05-08 13:31:09,789 ERROR \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-85) ERRO==============> java.sql.SQLException: javax.resource.ResourceException: IJ000453: Unable to get managed connection for java:/jdbc/winthorjdbc

---

## Resposta #6

**Rogério Collonhese Santana** (@Rogerio_Collonhese_S) — 11/05/2021, 12:14

Boa tarde [@Daniel\_Sales](/u/daniel_sales) , tudo bem?
eu uso esse código, funciona tanto em Mysql tanto SQLServer, nunca testei em Oracle, mas dá uma olhada (ele funciona tudo Select, Insert, Update , Store Procedure)

function createDataset(fields, constraints, sortFields) {
var myQuery = “select name from sys.tables where name like ‘ml0%’ order by name”;
var newDataset = DatasetBuilder.newDataset();
var dataSource = “java:/jdbc/AppDS”;
var ic = new javax.naming.InitialContext();
var ds = ic.lookup(dataSource);
var created = false;
var fieldName = getConstraint(“query”, constraints);

```
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
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("Erro");
    dataset.addRow(new Array(e.message));

    return dataset;
} finally {
     if(rs != null) { //fechamento do resultSet
        rs.close();
      }
      if(stmt != null) { //fechamento do statement
        stmt.close();
      }
      if(conn != null) { //fechamento da conexão
        conn.close();
      }
}
return newDataset;
```

}

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 12/05/2021, 09:10

Obrigado pelas dicas resolvi o bo era erro na infra do cliente. barrando o fluig no update.

---

## Resposta #8

**Daniel Sales** (@Daniel_Sales) — 12/05/2021, 09:10


---
