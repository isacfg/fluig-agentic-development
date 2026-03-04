# Dataset sincronizado criando muitas tabelas no banco

> **Fonte:** [https://fluiggers.com.br/t/dataset-sincronizado-criando-muitas-tabelas-no-banco/437](https://fluiggers.com.br/t/dataset-sincronizado-criando-muitas-tabelas-no-banco/437)
> **Categoria:** BPM
> **Tags:** `dataset`
> **Criado em:** 11/05/2021, 17:27
> **Visualizações:** 1435 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 11/05/2021, 17:27

Boa tarde Pessoal,

No ambiente do cliente existem 5 dataset\`s sincronizados e aparentemente estão desenvolvidos corretamente, mas ao acessar o banco notei que foram criadas várias tabelas com inicio “md00…” (tabelas dos datasets offline) e no ambiente existem apenas 5 datasets offline.

No inicio do dia eu parei o job de sincronização de todos e apaguei as tabelas, mandei sincronizar a cada 10 minutos de novo e no fim do dia ainda tinham apenas as 5 tabelas (1 pra cada), agora após mais ou menos 3 semanas, me deparo com mais de 250 tabelas (repetindo de 5 em 5)

```auto
function defineStructure() {

    addColumn("CODE");
	addColumn("BRANCH");
	addColumn("ACC");
	addColumn("DESCRI");
	addColumn("FILTROZOOM");

    setKey(["CODE", "DESCRI"]);
    addIndex(["CODE"]);
    addIndex(["BRANCH"]);
    addIndex(["ACC"]);
    addIndex(["DESCRI"]);
}

function getDados() {

    try{

        var clientService = fluigAPI.getAuthorizeClientService();

        var compID = getValue("WKCompany");

        var data = {
                companyId :  compID + '',
                serviceCode : 'banks',
                endpoint : '/WSBANK',
                method : 'get', 						// 'delete', 'patch', 'post', 'get'
                timeoutService: '100', 					// segundos
        }

        var response = clientService.invoke(JSON.stringify(data));

        log.info("<<< " + response);

        var newDataset = DatasetBuilder.newDataset();

        if(response.getResult()== null || response.getResult().isEmpty()){
            newDataset.addOrUpdateRow(new Array("Error","It was not possible to connect to Rest",""));
        }else{
            log.info("<<<+ " + response.getResult());
            var oRetorno = JSON.parse(response.getResult());

            for (var i = 0; i < oRetorno.banks.length; i++) {
            	var concat = oRetorno.banks[i].code+" - "+oRetorno.banks[i].branch+" - "+oRetorno.banks[i].account+" - "+oRetorno.banks[i].descri;
                newDataset.addOrUpdateRow(new Array(oRetorno.banks[i].code,oRetorno.banks[i].branch,oRetorno.banks[i].account,oRetorno.banks[i].descri,concat));
            }

        }


        return newDataset;

    } catch (e) {
        // TODO: handle exception
        log.info('FRE ### ERRO: ' + e)
    }
}

function onSync(lastSyncDate) {
	clearDataset("banks");
    return getDados();
}

function clearDataset(codDataset) {
    log.info("#### limpando dataset " + codDataset);

    var dataset = DatasetFactory.getDataset(codDataset, null, null, null); // busca o dataset completo

    if (dataset != null && dataset.rowsCount > 0) { //se o dataset tem registros
        var values = dataset.getValues();
        for (var row in values) { // para cada coluna retornada no dataset
            dataset.deleteRow([values[row][0], values[row][1], values[row][2],values[row][3],values[row][4]]); // apaga a linha
        }
    }
}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 13/05/2021, 16:20 | ❤️ 2

Boa tarde,

Consegui arrumar, segue abaixo a correção.

De vez em quando a conexão com o Rest cai porque é um ambiente de teste e tals, devido isso o código acima estava “morrendo” no for:

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/magno_silva_adauto/48/97_2.png) Magno\_Silva\_Adauto:
>
> > `for (var i = 0; i < oRetorno.banks.length; i++) {`

esse oRetorno.banks ficava como undefined e por estar dentro do try/catch o processamento para antes de executar as linhas abaixo:

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/magno_silva_adauto/48/97_2.png) Magno\_Silva\_Adauto:
>
> > `newDataset.addOrUpdateRow(new Array(oRetorno.banks[i].code,oRetorno.banks[i].branch,oRetorno.banks[i].account,oRetorno.banks[i].descri,concat));`
> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/magno_silva_adauto/48/97_2.png) Magno\_Silva\_Adauto:
>
> > `return newDataset;`

e vai pro CATCH, que por sua vez tem apenas um log.info, fiz essa alteração abaixo e resolveu o problema:

```auto
} catch (e) {
        // TODO: handle exception
        log.info('FRE ### ERRO: ' + e)
        newDataset.addOrUpdateRow(new Array("Error",e,""));
        return newDataset;
    }
```

---

## Resposta #2

**system** (@system) — 14/05/2021, 08:20

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
