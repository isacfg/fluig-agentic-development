# Evento especifico em um processo

> **Fonte:** [https://fluiggers.com.br/t/evento-especifico-em-um-processo/2118](https://fluiggers.com.br/t/evento-especifico-em-um-processo/2118)
> **Categoria:** BPM
> **Tags:** `form`, `fluigapi`
> **Criado em:** 11/08/2023, 08:15
> **Visualizações:** 333 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**joaopretti** (@joaopretti) — 11/08/2023, 08:15

Olá pessoal, tudo bem? alguém poderia me ajudar a como fazer uma função ser executada em um processo especifico?

Eu gostaria que este updtate aqui:

```javascript
function (NOME)
{
    const sql = require('mssql');
    // Configuração da conexão com o banco de dados
    const config = {
        user: '',
        password: '',
        server: '',
        database: '',
        options: {
            encrypt: true, // Use true se usando SSL
        }
    };
    // Função para executar o UPDATE
    async function realizarUpdate() {
        try
        {
            // Conectar ao banco de dados
            await sql.connect(config);
            const query =
            `
            EXEC APROVACAO_FLUIG
            @filial = '${filiais}'.substring(0,4),
            @tipo_doc = ${ds[0].CR_TIPO},
            @num_pedido = '${numeropedido}',
            @cr_nivel = ${ds[0].CR_NIVEL},
            @dbm_user = '${USER}',
            `;
            const result = await sql.query(query);
            console.log(`Linhas afetadas: ${result.rowsAffected[0]}`);
        } catch (error) {
            console.error('Erro:', error);
        } finally {
            // Fechar a conexão
            await sql.close();
        }
    }
    // Chamar a função para executar o UPDATE
    realizarUpdate();
}
```

Quando chegar no fim do processo quando o gestor clicar em “enviar” para terminar o processo
![image](https://fluiggers.com.br/uploads/default/original/2X/a/afc11a9fcba837999eb48e4cfe7ba30df9b003a9.png)

Alguem poderia me ajudar?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 11/08/2023, 09:13 | ❤️ 1

E ae João… blz? Você tem que fazer seu update em um dataset… vou montar um exemplo aqui

De início você criar um serviço JDBC no Fluig para seu SQL Server (Painel de Controle > Serviços)

![image](https://fluiggers.com.br/uploads/default/optimized/2X/4/4056a37ea7244af70e6a3fef11fb75be4cbea729_2_690x253.png)

Dataset para executar o Update

```auto
function createDataset(fields, constraints, sortFields) {
    var Dataset = DatasetBuilder.newDataset();
    var result = "";

    //#region Constraints
        var filial = "";
        var tipo_doc = "";
        var num_pedido = "";
        var cr_nivel = "";
        var dbm_user = "";
        var id = "";

        if (constraints != null) {
            for (var i = 0; i < constraints.length; i++) {
                if (constraints[i].fieldName == "filial" && constraints[i].initialValue && constraints[i].initialValue != "") {
                    filial = constraints[i].initialValue;
                }
                if (constraints[i].fieldName == "tipo_doc" && constraints[i].initialValue && constraints[i].initialValue != "") {
                    tipo_doc = constraints[i].initialValue;
                }
                if (constraints[i].fieldName == "num_pedido" && constraints[i].initialValue && constraints[i].initialValue != "") {
                    num_pedido = constraints[i].initialValue;
                }
                if (constraints[i].fieldName == "cr_nivel" && constraints[i].initialValue && constraints[i].initialValue != "") {
                    cr_nivel = constraints[i].initialValue;
                }
                if (constraints[i].fieldName == "dbm_user" && constraints[i].initialValue && constraints[i].initialValue != "") {
                    dbm_user = constraints[i].initialValue;
                }
                if (constraints[i].fieldName == "id" && constraints[i].initialValue && constraints[i].initialValue != "") {
                    id = constraints[i].initialValue;
                }
            }
        }
    //#endregion

    var dataSource = "/jdbc/SQLSERVER"; //Nome do serviço cadastrado no Fluig
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var query = "update {Tabela} " +
                "set filial = " + filial +
                "   ,tipo_doc + '" + tipo_doc + "'" +
                "   ,num_pedido = '" + num_pedido + "' " +
                "   ,cr_nivel = " +  cr_nivel + "' " +
                "   ,dbm_user = '" + dbm_user + "' " +
                "where id = " + id;
    log.info(query);

    var erro = "";
    var result = "";

    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();

        stmt.execute(query);

        erro = 0;
        result = "Dados atualizados";

    } catch (e) {
        log.error("ERRO==============> " + e.message);

        erro = 1;

        result = "Erro ao atualizar (Linha: " + e.lineNumber + "): " + String(e.message.replace("com.microsoft.sqlserver.jdbc.SQLServerException:", ""))  + " Query => " + query;
    } finally {
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }

    Dataset.addColumn("Erro");
    Dataset.addColumn("Message");

    Dataset.addRow([erro, result])

    return Dataset;
}
```

Para chamar o dataset ao chegar ao fim do processo, eu costumo usar o beforeTaskSave e pego a etapa atual (getValue(“WKCurrentState”) ) , que no seu caso vai ser a tarefa “UPDATE”, para caso der algum erro popar na tela antes de finalizar.

Para chamar o dataset nele é assim:

```auto
var c1 = DatasetFactory.createConstraint("filial", filial, filial, ConstraintType.MUST);
var c2 = DatasetFactory.createConstraint("tipo_doc", tipo_doc, tipo_doc, ConstraintType.MUST);
var c3 = DatasetFactory.createConstraint("num_pedido", num_pedido, num_pedido, ConstraintType.MUST);
var c4 = DatasetFactory.createConstraint("cr_nivel", cr_nivel, cr_nivel, ConstraintType.MUST);
var c5 = DatasetFactory.createConstraint("dbm_user", dbm_user, dbm_user, ConstraintType.MUST);
var c6 = DatasetFactory.createConstraint("cr_nivel", id, id, ConstraintType.MUST);

var ds = DatasetFactory.getDataset("{nome_dataset}", null, [c1, c2, c3, c4, c5, c6], null);

if (ds.getValue(0, "Erro") == "0") {
    log.info(ds.getValue(0, "Message"));
} else {
    log.error(ds.getValue(0, "Message"));

    throw ds.getValue(0, "Message");
}
```

Testa aí… boa sorte!

Abs

---

## Resposta #2

**joaopretti** (@joaopretti) — 11/08/2023, 09:47

Obrigado Edu, tenho uma duvida antes de testar. Esse Dataset é criado normalmente EXEMPLO: Novo dataset>Simples ? ou ele é criado dentro de alguma função ou avançado? pode me tirar esta duvida?

---

## Resposta #3

**Eduardo Vantini Neto** (@eduardo.vantini) — 11/08/2023, 12:45

Ele é criado normal… como qualquer outro.

---

## Resposta #4

**joaopretti** (@joaopretti) — 11/08/2023, 17:32

Parametrizei todas as informações que tinham que ser alteraveis nos campos mas quando eu dou um “enviar” no primeiro processo ainda dá este erro:
me parece que o DS está retornando sem valor nenhum, sabe se consegue me ajudar?

![image](https://fluiggers.com.br/uploads/default/original/2X/a/a23274f87a221bb864a76828a7ced74fe49787bb.png)

---
