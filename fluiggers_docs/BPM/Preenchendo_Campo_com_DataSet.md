# Preenchendo Campo com DataSet

> **Fonte:** [https://fluiggers.com.br/t/preenchendo-campo-com-dataset/2867](https://fluiggers.com.br/t/preenchendo-campo-com-dataset/2867)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 26/06/2024, 10:50
> **Visualizações:** 113 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniel Costa** (@DevDan99) — 26/06/2024, 10:50

Bom dia!
Gostaria de ajuda em uma questão que estou com dificuldade!
Eu tenho a tarefa de pegar o valor de um campo do formulário que é preenchido pelo usuário, usar esse valor para realizar uma “consulta” dentro de um dataset, pegar o resultado dessa “consulta” e preencher outros campos do meu formulário. Esse dataset é uma consulta da tabela do Protheus.
Ex:
Usuário digita a matricula,
O campo nome é preenchido com nome do usuário dono da matricula mencionada.
Alguém poderia me explicar como é possível fazer isso no fluig? Tenho que criar uma API, ou da para fazer com os recursos internos do Fluig.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 28/06/2024, 00:05 | ❤️ 1

Olá, para consumir o dataset e ter o retorno dos dados no formulário é simples, o que vai mudar é o dataset em si. Como você acessa os dados do Protheus? Via API? Via SQL? Dependendo como for o dataset vai ser feito de um jeito.
Qualquer que seja o caso, você deve criar um serviço no Painel de Controle

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/b741958609049ddd39fa758a7c985adabee510c4_2_690x136.png)

Caso seja uma API, cadastre ela como REST ou SOAP e preencha os campos de autenticação caso REST
Caso seja consulta SQL, cadastre um serviço JDBC apontando para a base.

Exemplo de dataset que executa sentença SQL

```auto
function createDataset(fields, constraints, sortFields) {
    var Dataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/{NOME_SERVICO_JDBC}"; //NOME DO SERVICO JDBC CRIADO NO PAINEL DE CONTROLE DO FLUIG
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    var myQuery = getSQL(constraints);
    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        var columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()) {
            if (!created) {
                for (var i = 1; i <= columnCount; i++) {
                    Dataset.addColumn(rs.getMetaData().getColumnName(i));
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

            Dataset.addRow(Arr);

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
    return Dataset;
}


function getSQL(constraints) {
	var query;
	var matricula = ""

	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == "matricula" && constraints[i].initialValue && constraints[i].initialValue != "") {
                matricula = constraints[i].initialValue;
			}
		}
	}

    query = "{QUERY_SQL}";

    log.info(query);

	return query;
}
```

Exemplo de dataset que consome API REST

```auto
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    var matricula = "";

    if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "matricula" && constraints[i].initialValue && constraints[i].initialValue != "") {
                matricula = constraints[i].initialValue;
            }
        }
    }


    var endpoint "{ENDPOINT_API}";

    try {
        var list = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: '{NOME_SERVICO_FLUIG}',
            endpoint: endpoint,
            method: 'get',
            params: {
                "{BODY_REQUISICAO}"
            }
        }

        var result = JSON.parse(list.invoke(JSON.stringify(data)).getResult())

        //UTILIZE O RETORNO JSON PARA MONTAR A ESTRUTURA DO DATASET

    } catch (err) {
        log.info("ERRO =====> " + err)
    }

    return dataset;
}
```

Para consumir o dataset no formulario (Imagine que o nome do dataset é ds\_funcionario)

```auto
const c1 = DatasetFactory.createConstraint("matricula", matricula, matricula, ConstraintType.MUST);

const ds = DatasetFactory.getDataset("ds_funcionario", null, [c1], null).values; //RETORNA UMA ARRAY DE OBJETOS COM OS DADOS DO DATASET
```

Da uma procura que tem documentação. Qualquer coisa retorna aqui com mais detalhes.

Boa sorte.

Abs

---
