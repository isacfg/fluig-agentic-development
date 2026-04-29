# Criar Dataset para Cadastro de Produtos do Protheus

> **Fonte:** [https://fluiggers.com.br/t/criar-dataset-para-cadastro-de-produtos-do-protheus/973](https://fluiggers.com.br/t/criar-dataset-para-cadastro-de-produtos-do-protheus/973)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`, `dataset`
> **Criado em:** 18/03/2022, 10:11
> **Visualizações:** 959 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Filipe Silva** (@ferilva89) — 18/03/2022, 10:11

Pessoal, bom dia!

Estou criando um processo onde preciso fazer apenas uma consulta ao cadastro de produtos do Protheus, pensei em criar um dataset, mas não programo tão bem…

Alguém por aqui já usa essa integração, apenas para consulta?

Se puder em enviar o código desse dataset para eu adaptar aqui na minha empresa, agradeço muito!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 18/03/2022, 10:53 | ❤️ 1

Bom dia,

Acredito que a melhor forma para consulta é criar um dataset com uma consulta SQL.

Faça uma conexão JDBC
[https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo](https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo)

Aqui o modelo de dataset

```auto
function createDataset(fields, constraints, sortFields) {
    var newDataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/sql";/*Informe o nome do serviço do painel de controle*/
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;

    var myQuery ="SELECT * FROM SB1010"; /* Informe a query da requisição */
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
}

function onMobileSync(user) {

	var sortingFields = [];
	var columnCount = rs.getMetaData().getColumnCount();

	var constraints = [];
	var result = {
		'fields': fields,
		'constraints': constraints,
		'sortingFields': sortingFields
	};

	return result;
}
```

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 18/03/2022, 15:26

Você pode fazer um dataset simples, desde que você tenha um acesso ao Protheus através de serviço:
1 - Criar um serviço para se comunicar com o Protheus
2 - Criar um dataset simples que você vai dar um nome e uma descrição
3 - Apontar para o serviço que você criou para o Protheus
4 - Apontar para a tabela do Protheus que contenha o que você deseja

O resto é uso do Dataset.

---

## Resposta #3

**Filipe Silva** (@ferilva89) — 30/03/2022, 15:38

Deu certo pessoal! Muito obrigado!

---
