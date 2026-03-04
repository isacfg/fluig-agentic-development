# Atualizar conjunto de dados de um dataset usando updateRow

> **Fonte:** [https://fluiggers.com.br/t/atualizar-conjunto-de-dados-de-um-dataset-usando-updaterow/2272](https://fluiggers.com.br/t/atualizar-conjunto-de-dados-de-um-dataset-usando-updaterow/2272)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 16/10/2023, 10:47
> **Visualizações:** 516 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Matheus Madrid** (@Madrid) — 16/10/2023, 10:47

Pessoal, bom dia! Estou tentando atualizar um conjunto de dados de um dataset utilizando o updateRow ( pelo que consultei na documentação é a melhor maneira, mas estou aberto a sugestões ) mesmo com a implementação no onSync ele sempre cria o dataset novamente quando eu sincronizo e acaba mudando o DatasetMetalistId, e eu preciso que o DatasetMetalistId não mude, conseguem me auxiliar onde estou errando?

```auto
function defineStructure() {
    addColumn("DATAOCORRIDO");
    addColumn("CHAPA");
    addColumn("NOME");
    addColumn("HE_50");
    addColumn("HE_100");
    addColumn("MOTIVO");
    setKey([ "DATAOCORRIDO", "CHAPA" ]);
    addIndex([ "DATAOCORRIDO", "CHAPA" ]);
}

function onSync(lastSyncDate) {
    var dataset = DatasetFactory.getDataset("RH_RelatorioHorasExtras", null, null, null);
    var lastSync = new Date(lastSyncDate);

    var newRecords = createWorkDaysDataset().values;

    // Atualiza os registros no dataset existente
    for (var i = 0; i < newRecords.length; i++) {
        var newRecordDate = new Date(newRecords[i][0]); // Primeira coluna é a data
        var existingRowIdx = findRowIndexByDateAndChapa(dataset, newRecords[i][0], newRecords[i][1]);

        if (existingRowIdx !== -1) {
            dataset.updateRow(existingRowIdx, newRecords[i]);
        }
    }
}


function findRowIndexByDateAndChapa(dataset, date, chapa) {
    for (var i = 0; i < dataset.rowsCount; i++) {
        var datasetDate = dataset.getValue(i, "DATAOCORRIDO"); // Obter a data como uma string do dataset
        var datasetChapa = dataset.getValue(i, "CHAPA");
        if (datasetDate === date && datasetChapa === chapa) {
            return i;
        }
    }
    return -1;
}

function createDataset(fields, constraints, sortFields) {
    var dataset = createWorkDaysDataset();
    return dataset;
}

function createWorkDaysDataset() {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("DATAOCORRIDO");
    dataset.addColumn("CHAPA");
    dataset.addColumn("NOME");
    dataset.addColumn("HE_50");
    dataset.addColumn("HE_100");
    dataset.addColumn("MOTIVO");
    setKey([ "DATAOCORRIDO", "CHAPA" ]);
    addIndex([ "DATAOCORRIDO", "CHAPA" ]);

    // Obtém a data de hoje
    var today = new Date();

    // Calcula o primeiro dia do mês atual
    var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    // Calcula ontem
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Formate as datas no formato "YYYY-MM-DD"
    var startDate = formatDate(firstDayOfMonth);
    var endDate = formatDate(yesterday);

    var data = {
        companyId: getValue("WKCompany") + "",
        serviceCode: "API_PONTOMAIS",
        endpoint: "/reports/work_days",
        method: "POST",
        headers: {
            "access-token": "key"
        },
        params: {
            report: {
                start_date: startDate,
                end_date: endDate,
                group_by: "",
                row_filters: "",
                columns: "date,extra_time,registration_number,motive,employee_name",
                format: "json"
            }
        }
    };

    var clientService = fluigAPI.getAuthorizeClientService();
    var vo = clientService.invoke(JSON.stringify(data));


if (vo.getResult() === null || vo.getResult().isEmpty()) {
    throw new Exception("Retorno está vazio");
} else {
    var json = JSON.parse(vo.getResult());
    //log.info("###-" + vo.getResult());

    // dados primários
    for (var j = 0; j < json.data[0].length; j++) {
        var dataPrimario = json.data[0][j];
        //log.info("###-Acessou dataset primario " + (j + 1));

        // registros dentro do data primário
        for (var i = 0; i < dataPrimario.data.length; i++) {
            var rowData = dataPrimario.data[i];
            var date = rowData.date;
            var employee_name = rowData.employee_name;
            var extraTime50 = rowData.extra_time[0].value;
            var extraTime100 = rowData.extra_time[1].value;

            // valida se hora 50 e 100 não é "00:00"
            if (extraTime50 !== "00:00" || extraTime100 !== "00:00") {
                var registrationNumber = rowData.registration_number;
                var motive = rowData.motive;

                // converte o formato da data "Qua, 28/06/2023" para "28/06/2023"
                date = date.split(", ")[1];

                dataset.addRow([date, registrationNumber, employee_name, extraTime50, extraTime100, motive]);
                //log.info("###-Salvou registro - Data: " + date);
            }
        }
    }
}

    return dataset;
}

function onMobileSync(user) {

}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/10/2023, 12:37

Pelo que percebi você está recriando o Dataset. Talvez por isso esteja dando o problema. Na função `onSync` não precisa recriar o dataset do 0 (colocando as colunas novamente). Ao menos no dataset que tenho aqui eu não faço isso e funciona perfeitamente o update.

Vou deixar o meu dataset como exemplo.

```javascript
/**
 * Estrutura do Dataset
 */
function defineStructure() {
    addColumn("CENTROCUSTO", DatasetFieldType.STRING);
    addColumn("ATIVO", DatasetFieldType.STRING);
    addColumn("CODPROJETO", DatasetFieldType.STRING);
    addColumn("PROJETO", DatasetFieldType.STRING);
    addColumn("CODACAO", DatasetFieldType.STRING);
    addColumn("ACAO", DatasetFieldType.STRING);
    addColumn("CODUNIDADE", DatasetFieldType.STRING);
    addColumn("UNIDADE", DatasetFieldType.STRING);
    addColumn("DESCRICAO", DatasetFieldType.STRING);

    setKey(["CENTROCUSTO"]);
    addIndex(["ATIVO"]);
}

/**
 * Sincroniza as informações do Dataset
 *
 * @param {number} lastSyncDate Timestamp em milissegundos
 * @returns {Dataset}
 */
function onSync(lastSyncDate) {
    var dataset = DatasetBuilder.newDataset();

    try {
        var service = getRmWsConsultaSqlService();
        var result = service.realizarConsultaSQL(
            "WSFluig.0008",
            getRmColigada(),
            "T",
            ""
        );

        var items = (new XML(result)).Resultado;

        for (var i = 0, total = items.length(); i < total; ++i) {
            var descricao =
                items.CENTROCUSTO[i].toString()
                + " - "
                + items.PROJETO[i].toString()
                + " | "
                + items.ACAO[i].toString()
                + " | "
                + items.UNIDADE[i].toString()
            ;

            dataset.addOrUpdateRow([
                  items.CENTROCUSTO[i].toString()
                , items.ATIVO[i].toString() == "T" ? "1" : "0"
                , items.CODPROJETO[i].toString()
                , items.PROJETO[i].toString()
                , items.CODACAO[i].toString()
                , items.ACAO[i].toString()
                , items.CODUNIDADE[i].toString()
                , items.UNIDADE[i].toString()
                , descricao
            ]);
        }
    } catch (error) {
        log.error(error);
    }

    return dataset;
}
```

---

## Resposta #2

**Matheus Madrid** (@Madrid) — 16/10/2023, 14:42

Boa tarde Bruno, após a sincronização do conjunto de dados do seu dataset ele mentém o mesmo DatasetMetalistId ou ele altera?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/10/2023, 15:27

Desculpa, não tinha reparado nesse detalhe.

Nunca olhei se teve alguma alteração no DatasetMetalistId.

---
