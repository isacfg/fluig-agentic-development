# Criar Constraints com Dataset De BD Externo

> **Fonte:** [https://fluiggers.com.br/t/criar-constraints-com-dataset-de-bd-externo/2712](https://fluiggers.com.br/t/criar-constraints-com-dataset-de-bd-externo/2712)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 11/04/2024, 11:41
> **Visualizações:** 289 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Costa** (@DevDan99) — 11/04/2024, 11:41

Bom dia pessoal, sou iniciante no Fluig e gostaria de ajuda. Eu tenho um Dataset avançado que é alimentado pelo nosso banco de dados externo. No meu caso estou levando alguns dados da tabela SX5 do banco do Protheus, porem eu precisava filtrar deste dataset algumas informações.
Segue meu código do dataset:

function createDataset(fields, constraints, sortFields) {
//cria data sete com select na tabela CCHA010 do Protheus
var newDataset = DatasetBuilder.newDataset();

```
var dataSource = "/jdbc/MP1222";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    var myQuery = "SELECT X5_TABELA, X5_CHAVE, X5_DESCRI FROM SX5010 X5 WHERE X5_TABELA IN ('02','SG') AND X5.D_E_L_E_T_ = '' ";

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
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return newDataset;
```

}
Meu data sete funciona bem, porem eu precisava adicionar constantes nele e não estou conseguindo. Nesse caso eu preciso pegar este dataset e criar outro com as constraintes filtrando o campo X5\_Tabela, X5\_TABELA = SG e o outro igual a 02. Porem quando crio estes datassets a constrainte não e aplicada.

Código do dataset com constrainte:

function createDataset(fields, constraints, sortFields) {
var X5\_TABELA = DatasetFactory.createConstraint(“X5\_TABELA”, “SG”, “SG”, ConstraintType.MUST);
var dataset = DatasetFactory.getDataset(“DS-SX5”, null, new Array(X5\_TABELA), null);
return dataset;
}

Esse dataset com a constraint retorna todos os dados do dataset primário.
Alguém poderia me explicar onde eu estou errando e como eu aplicaria esses filtros da melhor forma?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/04/2024, 09:16

Em dataset do sistema ou jornalizado o Fluig faz tudo pra gente.

Já em dataset avançado a gente precisa ver o que o usuário indicou nos fields, constraints e sortFields e a partir disso fazer a filtragem e ordenação (se julgar que o dataset deva se preocupar com essas coisas).

Nessa [Documentação do Fluig](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219) explica como pecorrer as constraints. Aí a partir dessas constraints você monta o seu WHERE da consulta SQL.

Dependendo da quantidade de dados e frequência de atualização você também pode fazer um dataset jornalizado, buscando tudo o que precisa da base, e aí o Fluig tratará pra você os demais detalhes.

---

## Resposta #2

**Daniel Costa** (@DevDan99) — 12/04/2024, 11:30

Bom dia, Obrigado por responder Bruno.
Mas assim nesse caso eu estou montando um dataset cunsutnado a tabela toda do Banco de Dados Externo. Com isso eu uso esse dataset exclusivo para informações dentro do meu formulário.
Por ex: Essa Tabela X5 eu precisava filtrar somente o que é X5\_Tabela = SG, e usar esse dataset com a constrainte em um campo zoom. Mas não estou conseguindo. Hoje estou fazendo um dataset diferente para cada campo zoom, vou la faço um dataset avançado mudando apenas o where do SQL. Seria isso mesmo? Mesmo lendo a documentação não estou entendendo como usar as constraintes.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/04/2024, 16:33

Exemplo:

```javascript
/**
 * Exemplo
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();

    var tabela = "";

    for (var i = 0; i < constraints.length; ++i) {
        if (constraints[i].fieldName == "tabela") {
            tabela = constraints[i].initialValue;
        }
    }

    // Garantir que só vão informar valores válidos
    if (tabela != "02" && tabela != "SG") {
        tabela = "";
    }

    var myQuery = "SELECT X5_TABELA, X5_CHAVE, X5_DESCRI "
        + "FROM SX5010 X5 "
        + "WHERE X5.D_E_L_E_T_ = '' ";

    if (tabela != "") {
        myQuery += "AND X5_TABELA = '" + tabela + "'";
    } else {
        myQuery += "AND X5_TABELA IN ('02','SG')";
    }

    // Executa o resto do seu código normalmente

    return dataset;
}
```

---

## Resposta #4

**Daniel Costa** (@DevDan99) — 15/04/2024, 12:14

Bruno, Bom dia!
Você me deu um norte muito muito bom, seguindo sua solução fiz uma pequena modificação no código para atender melhor minha necessidade.

Segue modificação:

var newDataset = DatasetBuilder.newDataset();

```
var dataSource = "/jdbc/MP1222";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
    var created = false;
    var filtro = '';
    var myQuery = "SELECT X5_TABELA, X5_CHAVE, X5_DESCRI "
    + "FROM SX5010 X5 "
    + "WHERE X5.D_E_L_E_T_ = '' ";

    if(constraints !== null && constraints.length){
	   if(constraints[0].constraintType == ConstraintType.MUST){
	        for (var i=0; i < constraints.length; i++){
	        if(constraints[i]){
	            filtro = constraints[i].initialValue;
	            }
	        }
	   }
    }


    //grante informar valores falidos
    if(filtro != "02" && filtro != "SG"){
        filtro = ""
    }

    if(filtro !== ""){
        myQuery += "AND X5_TABELA = '" + filtro + "'";
    }else{
        myQuery += "AND X5_TABELA IN ('02','SG')";
    }  //Restante do código...
```

Muito obrigado, pela ajuda!

---
