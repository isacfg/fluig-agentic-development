# Remoção de linhas para um dataset jornalizado

> **Fonte:** [https://fluiggers.com.br/t/remocao-de-linhas-para-um-dataset-jornalizado/2932](https://fluiggers.com.br/t/remocao-de-linhas-para-um-dataset-jornalizado/2932)
> **Categoria:** Ambiente Fluig
> **Tags:** `dataset`
> **Criado em:** 13/08/2024, 13:46
> **Visualizações:** 161 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Italo Gabriel** (@Italo_Gabriel) — 13/08/2024, 13:46

Olá Fluiggers, tudo bom ?
Então, estou com um pequeno problema.
Tenho um dataset sincronizado que consulta informações no RM, esse dataset tem dado problema nos casos de sincronização em horários de pico, devido indisponibilidade do RM, oque me gera muitos problemas. Pensando em resolver isso, optei por criar um segundo dataset, dessa vez jornalizado que irá sincronizar com esse primeiro dataset, basicamente atualizando os registros e garantindo a disponibilidade em 100% do tempo, ai que surge um novo problema:

Estou tendo dificuldade para remover linhas, a parte de update e add de novas linhas no dataset jornalizado funciona como esperado, porém como eu desenvolvo a lógica de remover as linhas que não existem mais no dataset base que é sincronizado com o RM? Eu tento verificar pela coluna key, analisando qual está atualmente no dataset jornalizado e que não existe mais no dataset base e deletar essa row, oque deveria funcionar, em tese, mas eu não consigo acessar iterar sobre as rows do dataset jornalizado durante a sincronização, como eu consigo acessar os dados que estão atualmente no dataset jornalizado, no ato da sincronização ? existe alguma forma mais facil de fazer isso ?

código:

function defineStructure() {

```
var key = [x];

objColumn.forEach(function (row) {

    var type = undefined;

    if (row.TYPE == "NUMBER") {
        type = DatasetFieldType.NUMBER;
    }

    if (row.KEY) {
        key.push(row.NAME);
    }

    addColumn(row.NAME, type);

});

if (key.length > 0) {
    setKey(key);
}
```

}

function onSync(lastSyncDate) {
var dataset = DatasetBuilder.newDataset();
var keys =
var ret = DatasetFactory.getDataset(“dsConsultaContrato”, null, null, null);

```
for (var i = 0; i < ret.rowsCount; i++) {

    var array = [];
    var keyIDCNT = ret.getValue(i, "IDCNT");
    var keyNSEQITMCNT = ret.getValue(i, "NSEQITMCNT");
    var keyComposta = keyIDCNT + "|" + keyNSEQITMCNT;
    keys.push(keyComposta)

    objColumn.forEach(function (row) {

        var ref = row.NAME;
        var value = ret.getValue(i, ref);
        array.push(value);

    });

    dataset.addOrUpdateRow(array);
}

log.dir(dataset.rowsCount)

for (var i = 0; i < dataset.rowsCount; i++) {
    var keyIDCNT = dataset.getValue(i, "IDCNT");
    var keyNSEQITMCNT = dataset.getValue(i, "NSEQITMCNT");
    var key = keyIDCNT + "|" + keyNSEQITMCNT;

    if (newKeys.indexOf(key) == -1) {

        var array = [];

        objColumn.forEach(function (row) {
            var ref = row.NAME;
            var value = dataset.getValue(i, ref);
            array.push(value);

        });

        dataset.deleteRow(array);
        i--;
    }

}

return dataset;
```

}

function createDataset(fields, constraints, sortFields) {

}

function onMobileSync(user) {

}

ps: o log que existe entre os dois loops for me retorna 0. :cry:

---

## Resposta #1

**Isaac Figueiredo** (@kngrev) — 30/08/2024, 17:29

Olá [@Italo\_Gabriel](/u/italo_gabriel)

Aqui está uma ideia de como você pode estar aplicando

```auto
var dsName = "%nome_do_dataset%";
var objColumn = [
	{ NAME: "NOME_COL_CHAVE", TYPE: "NUMBER", KEY: true },
	{ NAME: "NOME_COL", TYPE: "", KEY: false },
	{ NAME: "NOME_COL", TYPE: "", KEY: false },
	{ NAME: "NOME_COL_CHAVE", TYPE: "", KEY: true },
];

function defineStructure() {
	let key = [];
	objColumn.forEach(function (row) {
		let type = undefined;
		if (row.TYPE == "NUMBER") {
			type = DatasetFieldType.NUMBER;
		}
		if (row.KEY) {
			key.push(row.NAME);
		}
		addColumn(row.NAME, type);

	});

	if (key.length > 0) {
		setKey(key);
		addIndex(key);
	}

}

function onSync(lastSyncDate) {
	const dataset = DatasetBuilder.newDataset();
	const newerDataset = createDataset();
	const olderDataset = DatasetFactory.getDataset(dsName, null, null, null);

	// Condições
	// 1. Insert (addRow): Existe no newerDataset e não existe no olderDataset
	// 2. Update (updateRow): Existe no newerDataset e existe no olderDataset
	// 3. Delete (deleteRow): Existe no olderDataset e não existe no newerDataset

	try {
		let startTime = java.lang.System.nanoTime();

		if (olderDataset != null || olderDataset != undefined) {
			if (olderDataset.rowsCount == 0 && newerDataset != undefined && newerDataset != null) {
				for (let i = 0; i < newerDataset.rowsCount; i++) {
					let valuesArray = [];
					objColumn.forEach(function (column) {
						valuesArray.push(newerDataset.getValue(i, column.NAME));
					});
					dataset.addRow(valuesArray);
				}
				return dataset;
			}
		}

		//VERICA SE 0 DATASET SINCRONIZADO ESTÁ VAZIO
		if (newerDataset != undefined && newerDataset != null) {
			let keys = 0
			let adicionados = 0
			let deletados = 0
			let atualizados = 0

			let oldDataMap = new java.util.HashMap();

			//MONTA UM HASHMAP COM OS DADOS DO DATASET ANTIGO
			for (let j = 0; j < olderDataset.rowsCount; j++) {
				let key = "";
				let rowObject = {};

				objColumn.forEach(function (column) {
					let columnName = column.NAME;
					rowObject[columnName] = olderDataset.getValue(j, columnName);
					if (column.KEY) {
						key += olderDataset.getValue(j, columnName);
					}
				});

				oldDataMap.put(key, rowObject);
			}

			log.dir("Sincronizando dataset jornalizado: " + dsName)
			log.dir("Quantidade de linhas do novo dataset: " + newerDataset.rowsCount)
			log.dir("Quantidade de linhas do antigo dataset: " + olderDataset.rowsCount)

			//PERCORRE O NOVO DATASET
			for (let i = 0; i < newerDataset.rowsCount; i++) {
				let newerKey = "";

				//MONTA A CHAVE DE COMPARAÇÃO USANDO A MESMA LOGICA QUE FOI UTILIZADA NO HASHMAP
				objColumn.forEach(function (column) {
					if (column.KEY) {
						newerKey += newerDataset.getValue(i, column.NAME);
					}
				});

				// VERIFICA SE A CHAVE EXISTE NO HASHMAP
				if (oldDataMap.containsKey(newerKey)) {
					keys++
					let oldRow = oldDataMap.get(newerKey);
					let shouldUpdate = false;
					let valuesArray = [];

					// VERIFICA SE O REGISTRO FOI ALTERADO
					objColumn.forEach(function (column) {
						let columnName = column.NAME;
						let newValue = newerDataset.getValue(i, columnName);
						valuesArray.push(newValue);
						if (newValue != oldRow[columnName]) {
							shouldUpdate = true;
						}
					});

					if (shouldUpdate) {
						atualizados++;
						dataset.updateRow(valuesArray);
					}

					// COMO O REGISTRO EXISTE NOS DOIS DATASETS, DEVE SER REMOVIDO DO HASHMAP PARA QUE NO FINAL SOBREM APENAS OS REGISTROS QUE DEVEM SER DELETADOS
					oldDataMap.remove(newerKey);

				} else {
					// SE ELE EXISTIR NO NOVO DATASET E NÃO EXISTIR NO ANTIGO, ADICIONA
					adicionados++;
					let valuesArray = [];
					objColumn.forEach(function (column) {
						valuesArray.push(newerDataset.getValue(i, column.NAME));
					});

					dataset.addRow(valuesArray);
				}
			}

			// REGISTROS QUE SOBRARAM NO HASHMAP, OU SEJA, REGISTROS QUE EXISTEM NO ANTIGO MAS NÃO EXISTEM NO NOVO, DEVEM SER DELETADOS
			let iterator = oldDataMap.keySet().iterator();
			while (iterator.hasNext()) {
				let key = iterator.next();
				deletados++;
				let oldRow = oldDataMap.get(key);
				let valuesArray = [];
				objColumn.forEach(function (column) {
					valuesArray.push(oldRow[column.NAME]);
				});

				dataset.deleteRow(valuesArray);
			}

			log.dir("Dados da sincronização do dataset jornalizado: " + dsName)
			log.dir("Quantidade de keys que deram match: " + keys)
			log.dir("Quantidade de adicionados: " + adicionados)
			log.dir("Quantidade de deletados: " + deletados)
			log.dir("Quantidade de atualizados: " + atualizados)

			let endTime = java.lang.System.nanoTime();
			let duration = (endTime - startTime) / 1000000;
			log.info("Tempo de execução: " + duration + " ms");

		} else {
			//reportErro("retornoVazio"); // Só envia um email informando que ocorreu um erro
		}
	} catch (e) {
		//reportErro("erroAoSincronizar"); // Só envia um email informando que ocorreu um erro
		throw new Error('Erro ao sincronizar ' + e);
	}
	return dataset;
}

function createDataset(fields, constraints, sortFields) {

	try {
		const dataset = DatasetBuilder.newDataset();
		// Nessa função é buscado os novos dados atualizados, nesse caso vem de outro dataset mas poderia ser do RM/Protheus...etc
		const syncedDs = DatasetFactory.getDataset('%fonte_de_dados%', null, null, null); // dataset sincronizado ou fonte de dados

		if (syncedDs == null) {
			throw new Error('Erro ao sincronizar');
		}

		if (syncedDs.rowsCount <= 1) {
			throw new Error('Erro ao sincronizar');
		}

		buildDataset(dataset, syncedDs)
		return dataset

	} catch (e) {
		reportErro("retornoVazio");
	}

}

function buildDataset(dataset, res) {
	// Adiciona as colunas
	for (var i = 0; i < res.columnsName.length; i++) {
		dataset.addColumn(res.columnsName[i]);
	}

	// adiciona as rows
	for (var i = 0; i < res.values.length; i++) {
		dataset.addRow(res.values[i]);
	}
}
```

---
