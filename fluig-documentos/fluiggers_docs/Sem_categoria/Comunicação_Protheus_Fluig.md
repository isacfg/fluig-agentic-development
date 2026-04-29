# Comunicação Protheus/Fluig

> **Fonte:** [https://fluiggers.com.br/t/comunicacao-protheus-fluig/2703](https://fluiggers.com.br/t/comunicacao-protheus-fluig/2703)
> **Categoria:** Sem categoria
> **Criado em:** 07/04/2024, 14:45
> **Visualizações:** 185 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Caio Mario** (@Caio_Mario) — 07/04/2024, 14:45

Boa tarde Senhores,

Alguém possui algum exemplo de comunicação entre protheus e fluig? ex: Comunicação entre matricula do fluig com o codigo do usuario protheus e fazer o controle das empresas via protheus. procurei alguns exemplos e não encontrei nada.

---

## Resposta #1

**Mendes** (@andersonma) — 10/04/2024, 14:51

Caio, boa tarde.

Resolvi isso criando uma tabela, com os dados do usuário do fluig e vinculando o id do usuário no Protheus.

Assim, sempre que preciso iniciar o processo do usuário corrente no sistema, é só pegar os dados nessa tabela.

Esperto que possa ter ajudado,

---

## Resposta #2

**Thiago Brianez** (@tbrianez) — 18/04/2024, 17:53 | ❤️ 1

Caio, boa tarde!

Segue um dos exemplos comunicando direto com o db do Protheus, utilizando o próprio [Cadastro de Serviços do Fluig](https://tdn.totvs.com/pages/releaseview.action?pageId=644720026).

Depois de configurar a comunicação jdbc, crie um dataset fazendo a chamada. Segue um exemplo bem simples.

```javascript
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("INFO");

	try {
        dataset = executarConsulta(sql);
    }
    catch (e) {
        dataset.addRow([e.toString()]);
    }
    return dataset;
}

function executarConsulta() {  //Consultando tabela de usuários
    var sql = "";
		sql += " SELECT ";
		sql += " SRA.RA_NOME, ";
		sql += " SRA.RA_EMAIL, ";
		sql += " FROM SRA010 SRA";
		sql += " WHERE SRA.D_E_L_E_T_ <> '*' ";

	return sql ;
}

function executarConsulta(sql) {

	log.info("######## CONSULTA: " + sql );

    var dataset = DatasetBuilder.newDataset();
    var dataSource = "jdbc/db_protheus"; //Nome do serviço cadastrado no Fluig
    var conn = null;
    var stmt = null;
    var rs = null;
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var isColuna = true;
    try {
        conn = ds.getConnection();
        stmt = conn.createStatement();
        rs = stmt.executeQuery(sql);
        var qtdColunas = rs.getMetaData().getColumnCount();
        while(rs.next()) {
            if(isColuna) {
                for(var indice = 1; indice <= qtdColunas; indice++) {
                    var coluna = rs.getMetaData().getColumnName(indice);
                    dataset.addColumn(coluna);
                }
                isColuna = false;
            }

            var linha = [];
            for(var indice = 1;indice <= qtdColunas; indice++) {
                var coluna = rs.getMetaData().getColumnName(indice);
                var conteudo = rs.getObject(coluna);
                linha.push(isNotEmpty(conteudo) ? conteudo.toString() : "");
            }
            dataset.addRow(linha);
        }
    }
    catch(e) {
        log.error("######## ERRO DE CONSULTA: " + e.message);
    }
    finally {
        try {
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(conn != null) conn.close();
        }
        catch(er) {
            log.error("######## ERRO AO FECHAR AS CONEXÕES " + er);
        }
    }

    return dataset;
}

function isEmpty(value) {
    return value == undefined || value == null || value == "";
}

function isNotEmpty(value) {
    return !isEmpty(value);
}
```

No dataset, a manipulação da query, campos, condições, funções e etc, é realizada de maneira mais fácil.

Para o relacionamento, recomendo utilizar o campo de e-mail.

Se for cloud, pode ser necessário abrir um chamado solicitando a comunicação.

Tmj! :smiley:

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 18/04/2024, 21:28 | ❤️ 1

Boa noite,

Eu gravo no Fluig no campo dados adicionais do usuario o IDPROTHEUS do usuario. se eu tenho um login no fluig e no protheus eu gravo meu idprotheus nesse campo. Dai esta feito o vinculo.
O fluig ate tem um campo id externo que pode ser usamo mas se um dia vc ativar o identity ele vai usar esse campo e tudo o que vc tem vai partar de funcionar.

---
