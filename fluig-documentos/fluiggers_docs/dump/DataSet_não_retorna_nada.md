# DataSet não retorna nada

> **Fonte:** [https://fluiggers.com.br/t/dataset-nao-retorna-nada/2999](https://fluiggers.com.br/t/dataset-nao-retorna-nada/2999)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `webservice`, `rest`
> **Criado em:** 01/10/2024, 15:10
> **Visualizações:** 80 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Dalton Júnior** (@daltonpjunior) — 01/10/2024, 15:10

Boa tarde, estou criando um dataset de comunicação REST com o Protheus,porém a mesma não retorna os dados. Chamei o serviço configurado e pela plataforma o serviço retorna certinho os dados. No Dataset feito, eu não consigo este retorno, segue o código abaixo:

var dsName = “ds\_wsgetcc”;

var \_log = "## ds\_wsgetcc ## ";

var objColumn = \[ { NAME: “CodCC”, TYPE: “”, KEY: true, VAL\_REF: “CodCC” }, { NAME: “DescriCC”, TYPE: “”, KEY: false, VAL\_REF: “DescriCC” } \];

function defineStructure() {

var key = ;

objColumn.forEach(function (row) { var type = undefined;

if (row.TYPE == “NUMBER”) { type = DatasetFieldType.NUMBER; } else if (row.TYPE == “STRING”) { type = DatasetFieldType.STRING; }

if (row.KEY) { key.push(row.NAME); } addColumn(row.NAME, type); });

if (key.length > 0) { setKey(key); }

}

function onSync(lastSyncDate) {

var ds\_wsgetcc = DatasetBuilder.newDataset();

try {

ds\_wsgetcc = clearDataset(ds\_wsgetcc);

var clientService = fluigAPI.getAuthorizeClientService();

var compID = getValue(“WKCompany”);

var data = { companyId: compID + ‘’, serviceCode: ‘WSGETCC’, endpoint: ‘[http://IP](http://IP):PORTA/rest/fluig/api/wsgetcc/v1/consultaCC’, method: ‘GET’, timeoutService: ‘1000’ };

var response = clientService.invoke(JSON.stringify(data));

log.info(\_log + " - Response: " + response); log.info(\_log + " - getResult: " + response.getResult()); log.info(\_log + " - typeof response.getResult(): "); log.info(typeof response.getResult());

var oRetorno = null; var row = new Array();

try { oRetorno = JSON.parse(response.getResult()); console.log(\_log + " objeto Centro de Custo: " + JSON.stringify(oRetorno)); } catch (error) { oRetorno = response.getResult(); console.log(\_log + " retorno erro Centro de Custo: " + oRetorno); }

if (oRetorno\[‘CodCC’\]) {

row.push(oRetorno\[‘CodCC’\]); row.push(oRetorno\[‘DescriCC’\]);

ds\_wsgetcc.addRow(row);

} else if (oRetorno\[“code”\]) { row.push(“400”); row.push(oRetorno\[“code”\] + " - " + oRetorno\[“message”\]);

ds\_wsgetcc.addRow(row); } else { row.push(“404”); row.push(oRetorno);

ds\_wsgetcc.addRow(row); }

log.info(\_log + " finalizou o ds\_wsgetcc"); return ds\_wsgetcc;

} catch (error) { var row = new Array(); row.push(“400”); row.push("Ocorreu uma falha ao gerar os dados: " + error);

ds\_wsgetcc.addRow(row);

console.log(\_log + "Ocorreu uma falha ao gerar os dados: " + error);

console.log(\_log + " finalizou o dataset"); return ds\_wsgetcc; } }

function createDataset(fields, constraints, sortFields) {

}

function onMobileSync(user) {

}

function clearDataset(ds\_wsgetcc) {

var dsOld = DatasetFactory.getDataset(dsName, null, null, null);

if (dsOld != null && dsOld.rowsCount > 0) {

for (var i = 0; i < dsOld.rowsCount; i++) { var array = new Array();

objColumn.forEach(function (row) { var ref = row.NAME; var value = dsOld.getValue(i, ref);

array.push(value); }); ds\_wsgetcc.deleteRow(array); }

}

return ds\_wsgetcc; }

![Captura de tela 2024-09-30 165347](https://fluiggers.com.br/uploads/default/optimized/2X/0/0d574b39b6299c686fb9a1546ed3bb24ea76bba0_2_681x500.png)

![Captura de tela 2024-09-30 165713](https://fluiggers.com.br/uploads/default/optimized/2X/4/464bdf14eadd079af666770d1e929d11bef7895f_2_690x114.png)

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 01/10/2024, 15:15 | ❤️ 1

[@daltonpjunior](/u/daltonpjunior) , seja muito bem vindo!

Consegue colar o código usando a função de código do fórum? Fica mais fácil de ler:

```auto
var teste = assim;
```

e preserva a formatação. Tem um botão na barra de ferramentas de redação para isso:

![image](https://fluiggers.com.br/uploads/default/original/2X/4/4c4fd26a21994fd4f9a79a8bb47491b07d915c3b.png)

Seu dataset me parece ok. Tenho aqui um exemplo de consulta de clientes que funciona normalmente, vê se encontra alguma diferença:

```auto
function defineStructure() {

 	addColumn("A1_COD");
 	addColumn("A1_NREDUZ");
 	addColumn("A1_END");
 	addColumn("A1_MUN");
 	addColumn("A1_EST");
 	setKey(["A1_COD"]);

 	addIndex([ "A1_COD", "A1_NREDUZ","A1_END", "A1_MUN","A1_EST"]);
}

function onSync(lastSyncDate) {

	log.info("Entrou na Consulta");
	var dataset = DatasetBuilder.newDataset();

try {

	//--------------------------------------------------------------------------------------------------
	var clientService = fluigAPI.getAuthorizeClientService();
	var data = {
	          companyId : ''+getValue('WKCompany')+'',
	          serviceCode : 'ServiceClienteP12',
	          endpoint : '?page=1&pagesize=20000',
	          method : 'GET',
	          params : {  },
	          timeoutService: '10000'
	   }

	log.info("DATA");
	log.info(data);

	log.info("DATA stringify");
	log.info(JSON.stringify(data));

	var vo = clientService.invoke(JSON.stringify(data));
	log.info(vo);
	var x = JSON.parse(vo.getResult());
	//var x = vo.getResult();
	log.info("Valor de X: " + JSON.stringify(x));

	for(var i in x.clientes){

		dataset.addOrUpdateRow(new Array(x.clientes[i].A1_COD,x.clientes[i].A1_NREDUZ,x.clientes[i].A1_END,x.clientes[i].A1_MUN,x.clientes[i].A1_EST));
	}

	}catch(err){

		log.info(err);
	}

	return dataset
}
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Dalton Júnior** (@daltonpjunior) — 01/10/2024, 16:04 | ❤️ 1

Opa, boa tarde Daniel.

Muito obrigado pela dica, não tinha visto a formatação aqui.

Eu consegui ajustar, tinha alguns erros no tratamento do if e alterei de console.log para info.log, após isso os dados vieram corretamente.

```auto
if (oRetorno != null) {
        	for(var a=0; a< oRetorno.length;a++){
        		var row = new Array();
        		row.push(oRetorno[a]['CodCC']);
        		row.push(oRetorno[a]['DescriCC']);
                row.push(oRetorno[a]['CodCC']+' - '+ oRetorno[a]['DescriCC']);

	        	ds_wsgetcc.addRow(row);
	        }
        } else {
            row.push("400");
            row.push(oRetorno);
            row.push("");

            ds_wsgetcc.addRow(row);
        }

        log.info(_log + " finalizou o dataset");
        return ds_wsgetcc;
```

---
