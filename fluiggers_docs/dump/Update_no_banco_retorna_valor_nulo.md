# Update no banco retorna valor nulo

> **Fonte:** [https://fluiggers.com.br/t/update-no-banco-retorna-valor-nulo/2127](https://fluiggers.com.br/t/update-no-banco-retorna-valor-nulo/2127)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 16/08/2023, 17:14
> **Visualizações:** 366 | **Likes:** 0 | **Respostas:** 16

---

## Pergunta original

**joaopretti** (@joaopretti) — 16/08/2023, 17:14

Olá Fluiggers! tudo bem? estou com um problemão que estou tentando desvendar, será que alguem consegue me ajudar?

Quando eu chego em um determinado processo e tento envia-lo, o meu programa deve fazer um update no banco para atualizar as informações de outro sistema por meio de uma procedure. A mensagem que me retorna é esta:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/929cdea6bdf4761c1b653713c2c2eff943177cd8_2_690x237.png)

Onde o meu codigo de update é este:

```javascript
/**
 *
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */

function createDataset(fields, constraints, sortFields) {

    var Dataset = DatasetBuilder.newDataset();
    var result = "";

    //#region Constraints
        var filial = "";
        var tipo_doc = "";
        var num_pedido = "";
        var cr_nivel = "";
        var dbm_user = "";


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
            }
        }
    //#endregion

    var dataSource = "//ip que eu retirei"; //Nome do serviço cadastrado no Fluig"
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);

        var query = "EXEC APROVACAO_FLUIG" +
        " @filial = '" + filial + "'," +
        " @tipo_doc = '" + tipo_doc + "'," +
        " @num_pedido = '" + num_pedido + "'," +
        " @cr_nivel = '" + cr_nivel + "'," +
        " @dbm_user = '" + dbm_user + "'";

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
    log.error(Dataset)
    return Dataset;
}


E o meu script de BeforeTaskSave do update é este:
```javascript
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    var state = getValue("WKCurrentState");

    if (state == 35) {
        var constraints = [];

        var filial = hAPI.getCardValue("filial").replace(" ", "").split("-")[0];
        var tipo_doc = hAPI.getCardValue("crtipo")
        var num_pedido = hAPI.getCardValue("crnum")
        var cr_nivel = hAPI.getCardValue("crnivel")
        var dbm_user = hAPI.getCardValue("dbmitem")


        // Adicione suas restrições aqui
        constraints.push(DatasetFactory.createConstraint("filial", filial, filial, ConstraintType.MUST));
        constraints.push(DatasetFactory.createConstraint("tipo_doc", tipo_doc, tipo_doc, ConstraintType.MUST));
        constraints.push(DatasetFactory.createConstraint("num_pedido", num_pedido, num_pedido, ConstraintType.MUST));
        constraints.push(DatasetFactory.createConstraint("cr_nivel", cr_nivel, cr_nivel, ConstraintType.MUST));
        constraints.push(DatasetFactory.createConstraint("dbm_user", dbm_user, dbm_user, ConstraintType.MUST));

        var dataset = DatasetFactory.getDataset("ds_update_compras", null, constraints, null);

        if (dataset.getValue(0, "Erro") == 0) {

            log.info("Atualizado com sucesso!");
        } else {

            log.error("Erro ao atualizar ==> " + dataset.getValue(1, "Message"));

            throw "Erro ao atualiiizar ==> " + dataset.getValue(1, "Message");
        }
    }
}
```
```auto
alguem poderia me ajudar?
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/08/2023, 08:01

O que aparece no Log do Fluig? Tá com cara que seu Dataset tá dando erro, aí retorna null. Aí não tem como chamar o método getValue porque a variável tá nula.

---

## Resposta #2

**joaopretti** (@joaopretti) — 17/08/2023, 09:02

![Sem título](https://fluiggers.com.br/uploads/default/optimized/2X/8/82aa20bf568167b255398870461b24335a46aaf4_2_690x115.jpeg)

pode ser isso? mas nao sei como corrigir, o update está lá setado, do jeito certo

---

## Resposta #3

**joaopretti** (@joaopretti) — 17/08/2023, 10:37

Consegui arrumar o update, porem ele fica carregando infinito, segue prints:
Enviando: photo\_5111685555770469400\_w.jpg… e
e não sai disso, ele nem me retorna nada pelo console e rede…

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/08/2023, 11:16

a imagem não apareceu.

e erro em dataset e evento de processo só vai aparecer no Log do Fluig mesmo.

---

## Resposta #5

**joaopretti** (@joaopretti) — 17/08/2023, 11:24

![Sem título](https://fluiggers.com.br/uploads/default/original/2X/a/af7567d76ad59ca4032be9dbc2a81e7b78883eab.png)

![Sem título](https://fluiggers.com.br/uploads/default/original/2X/b/b792a4d8f208bc44fcfb9d707027a67784f56547.png)

![image](https://fluiggers.com.br/uploads/default/optimized/2X/7/7ee52da4d9881a2b247656d0cc9f38a3a6915a36_2_690x321.png)

E fica carregando infinito… e tem uma hora que da erro de network

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/08/2023, 11:27

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d8d028706bc6e26efb247a7f820306f83cf43f95.png)

Você está tentando usar jquery num evento de back-end?

![image](https://fluiggers.com.br/uploads/default/original/2X/9/90cfb9eaafdde1bdb26d6f5bcb59160df22e4a26.png)

Em algum lugar você tá tentando acessar o índice 1 de um array/lista que só possuí 1 elemento, então você deveria acessar o índice 0 ao invés do 1.

---

## Resposta #7

**joaopretti** (@joaopretti) — 17/08/2023, 11:38

Em questão do “$” é um erro bobo que eu preciso arrumar rs, isso não está afetando o processo…

---

## Resposta #8

**joaopretti** (@joaopretti) — 17/08/2023, 11:41

![image](https://fluiggers.com.br/uploads/default/original/2X/6/6c3ce37f3f21c754dac04ff77714fcb35fb9fe57.png)

no beforetask onde aponta a linha 28 é apenas um log error com (1, “message”)

---

## Resposta #9

**joaopretti** (@joaopretti) — 17/08/2023, 11:45

E no update do script é uma validação

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/292d22b1234c54340983093e0fd833ab20b9d3d8_2_690x349.png)

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/08/2023, 08:52

E é exatamente onde está o erro. Pelo que vi seu Dataset retorna só 1 linha, então porque está tentando acessar o índice 1 ao invés do 0?

Eu validaria se alguma variável ficou vazia e já mandaria um erro com mensagem de campos obrigatórios (se eles forem) ao invés de esperar por um erro do banco dizendo que tem parâmetros faltando.

---

## Resposta #11

**joaopretti** (@joaopretti) — 18/08/2023, 09:45

Então Bruno, eu dei uma melhorada no codigo, arrumei as conexoes etc… porem ele tenta fazer o update e fica carregando infinito, sabe oque pode ser?

![Sem título](https://fluiggers.com.br/uploads/default/original/2X/e/e1dde0007153055cad3963632f1de887a0bb755e.png)

cheguei a colocar varios Logs.info e está retornando todos os dados certinhos

![image](https://fluiggers.com.br/uploads/default/original/2X/9/9bf970a59f4d5e46871204e382bd48882babb68b.png)

---

## Resposta #12

**joaopretti** (@joaopretti) — 18/08/2023, 09:53

conforme o print a cima ele faz as validações e chega até criar a query

![MicrosoftTeams-image](https://fluiggers.com.br/uploads/default/original/2X/1/1147bbabd53f23b5b9431599ceab046462775852.png)

Mas não sei se ele consegue fazer a conexao e fica carregando para sempre

![MicrosoftTeams-image(1)](https://fluiggers.com.br/uploads/default/optimized/2X/4/44afb92840a2c40770a02d228b439d69aab266f6_2_690x310.png)

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/08/2023, 11:21

Se concentra primeiro no Dataset. Faz ele funcionar e faz as validações tudo certinho.

Peguei aquele seu primeiro código e só dei uma mexida nas validações:

```javascript
/**
 * Executa uma Stored Procedure em um banco de dados externo
 *
 * @param {string[]} fields Campos Solicitados
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sorts Campos da Ordenação
 * @returns {Dataset}
 */
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("error");
    dataset.addColumn("message");

    if (constraints == null || !constraints.length) {
        dataset.addRow([
            1,
            "Obrigatório fornecer os dados"
        ]);

        return dataset;
    }

    var filial = "";
    var tipo_doc = "";
    var num_pedido = "";
    var cr_nivel = "";
    var dbm_user = "";

    for (var i = 0; i < constraints.length; ++i) {
        if (constraints[i].fieldName == "filial") {
            filial = constraints[i].initialValue;
            continue;
        }

        if (constraints[i].fieldName == "tipo_doc") {
            tipo_doc = constraints[i].initialValue;
            continue;
        }

        if (constraints[i].fieldName == "num_pedido") {
            num_pedido = constraints[i].initialValue;
            continue;
        }

        if (constraints[i].fieldName == "cr_nivel") {
            cr_nivel = constraints[i].initialValue;
            continue;
        }

        if (constraints[i].fieldName == "dbm_user") {
            dbm_user = constraints[i].initialValue;
            continue;
        }
    }

    if (filial == ""
        || tipo_doc == ""
        || num_pedido == ""
        || cr_nivel == ""
        || dbm_user == ""
    )  {
        dataset.addRow([
            1,
            "Obrigatório fornecer todos dados"
        ]);

        return dataset;
    }

    var query = "EXEC APROVACAO_FLUIG "
        + "@filial = '" + filial + "', "
        + "@tipo_doc = '" + tipo_doc + "', "
        + "@num_pedido = '" + num_pedido + "', "
        + "@cr_nivel = '" + cr_nivel + "', "
        + "@dbm_user = '" + dbm_user + "'"
    ;

    try {
        var dataSource = "/jdbc/MeuBancoExternoDS";
        var ic = new javax.naming.InitialContext();
        var ds = ic.lookup(dataSource);
        var conn = ds.getConnection();
        var stmt = conn.createStatement();

        // Pode ser que, dependendo da SP, tenha que mudar essa validação
        if (stmt.execute(query)) {
            dataset.addRow([
                0,
                "Dados Atualizados"
            ]);
        } else {
            dataset.addRow([
                1,
                "Ocorreu um erro ao atualizar os dados"
            ]);
        }
    } catch (e) {
        dataset.addRow([
            1,
            "Erro ao atualizar:\n\n"
                + e.message
                + "\n\n"
                + query
        ]);
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

Aí você executa o dataset (vi que tá usando a extensão do VSCode. Nela é tranquilo testar esse dataset) e valida que tá realmente atualizando o banco de dados. Acompanha o log do Fluig pra ver se dispara algum erro.

Só depois do dataset perfeito que você vai se preocupar em utilizar ele no seu evento de processo.

E se o dataset retorna sempre só 1 linha você sempre vai acessar só o primeiro índice (que inicia em 0).

---

## Resposta #14

**joaopretti** (@joaopretti) — 18/08/2023, 14:46

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > ```auto
> > var conn = ds.getConnection();
> >         var stmt = conn.createStatement();
> > ```

Ele para basicamente aqui brunão, no getConnection, a partir disso ele não lê mais nada e fica carregando infinito, eu tenho que passar algum login ou password?

---

## Resposta #15

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/08/2023, 15:00

Provavelmente não configurou corretamente o serviço de acesso a banco de dados.

Seguiu certinho os passos do manual?

[https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo](https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo)

---

## Resposta #16

**joaopretti** (@joaopretti) — 18/08/2023, 15:05

Opa isso tenho ctz que esteja correto mesmo, pois puxo mtas views do banco pro sistema: segue os prints tbm:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/c/c25f8ea77195f0925614e796190e87ffe3815067_2_690x166.png)

---

## Resposta #17

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/08/2023, 15:32

Então nem ideia. Se no seu código você tá criando o dataSource apontando pro serviço correto não era pra dar problema né.

no pior dos casos teria que abrir chamado pra totvs validar se seu ambiente não está com problema ou alguma consultoria.

E te aconselho a no ambiente de Dev e Homolog você já colocar os nomes corretos dos serviços/bancos. Porque aí quando exportar seu código pra produção não vai ter que ficar alterando tudo.

---

## Resposta #18

**joaopretti** (@joaopretti) — 18/08/2023, 15:42

Eu abri um chamado mesmo com a totvs agorinha, estava tentando conexão com algum outro SGDB, como SqlServer ou Dbeaver ou alguma outra coisa pra ver se o problema ta nas credenciais do banco ou no fluig e realmente esta falhando

---
