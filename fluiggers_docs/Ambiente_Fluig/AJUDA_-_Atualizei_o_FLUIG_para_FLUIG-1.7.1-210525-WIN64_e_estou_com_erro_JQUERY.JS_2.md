# AJUDA - Atualizei o FLUIG para FLUIG-1.7.1-210525-WIN64 e estou com erro JQUERY.JS:2

> **Fonte:** [https://fluiggers.com.br/t/ajuda-atualizei-o-fluig-para-fluig-1-7-1-210525-win64-e-estou-com-erro-jquery-js-2/479](https://fluiggers.com.br/t/ajuda-atualizei-o-fluig-para-fluig-1-7-1-210525-win64-e-estou-com-erro-jquery-js-2/479)
> **Categoria:** Ambiente Fluig
> **Criado em:** 31/05/2021, 09:37
> **Visualizações:** 1961 | **Likes:** 4 | **Respostas:** 10

---

## Pergunta original

**Filipe Bonacin** (@Filipe_Bonacin) — 31/05/2021, 09:37

Bom dia Pessoal, tudo bem?
Poderiam me ajudar?
Tenho alguns processos do FLUIG que são integrados com o PROTHEUS. Após eu atualizar meu fluig para a versão FLUIG-1.7.1-210525-WIN64 os formulários dos processos estão vindo em branco.

Estou com erro: SEND @ JQUERY.JS:2

query = “SELECT \* FROM SC7”+empresa+“0 C”

query += " INNER JOIN SA2"+empresa+"0 ON C7\_FORNECE = A2\_COD AND A2\_LOJA = C7\_LOJA "

query += " WHERE C7\_NUM = ‘"+pedido+"’ AND C7\_FILIAL = ‘"+filial+"’ AND C.D\_E\_L\_E\_T\_ <> ‘\*’ ORDER BY C7\_ITEM ASC"

console.log(query)

var select = DatasetFactory.createConstraint(‘select’,’’,query,ConstraintType.MUST);

var retorno = DatasetFactory.getDataset(“ds\_conecta\_protheus”,null,\[select\],null);

var totalLinha = 0;

console.log(retorno)

Estou enviando print e o meu processo.

![erro](https://fluiggers.com.br/uploads/default/optimized/1X/58497a82da4e83bbac99b5e0f03aad0f79993be1_2_690x373.jpeg)

[Process-liberacao\_ped\_compras.76.zip](https://fluiggers.com.br/uploads/short-url/yM6kszZZHt8XugpfLfRg70D8S6r.zip) (69,9,KB)

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 31/05/2021, 10:17

Bom dia!

Reparou nesses alertas do jquery? ele foi atualizado, pode ser que alguma função que tenha utilizado teve sua implementação modificada. Dá uma olhada nesses documento da TOTVS:

[https://tdn.totvs.com/pages/releaseview.action?pageId=547229132#id-2](https://tdn.totvs.com/pages/releaseview.action?pageId=547229132#id-2)

[https://tdn.totvs.com/pages/releaseview.action?pageId=549488105](https://tdn.totvs.com/pages/releaseview.action?pageId=549488105)

---

## Resposta #2

**Filipe Bonacin** (@Filipe_Bonacin) — 31/05/2021, 13:14

Bom dia Daniel,

Então, eu vi sim… mas teóricamente era para funcionar, pois são warnings…

Logo abaixo tenho os erros (em vermelho).

Esta dando erro na minha variavel retorno, pois ela está vindo como vazio. O meu select está retornando dados.

query = “SELECT \* FROM SC7”+empresa+“0 C”
query += " INNER JOIN SA2"+empresa+“0 ON C7\_FORNECE = A2\_COD AND A2\_LOJA = C7\_LOJA "
query += " WHERE C7\_NUM = '”+pedido+"’ AND C7\_FILIAL = ‘"+filial+"’ AND C.D\_E\_L\_E\_T\_ <> ‘\*’ ORDER BY C7\_ITEM ASC"
console.log(query)
var select = DatasetFactory.createConstraint(‘select’,’’,query,ConstraintType.MUST);
var retorno = DatasetFactory.getDataset(“ds\_conecta\_protheus”,null,\[select\],null);
var totalLinha = 0;
console.log(retorno)
for(i=0; i < retorno.values.length; i++){

![WhatsApp Image 2021-05-31 at 10.08.49](https://fluiggers.com.br/uploads/default/optimized/1X/9aa578fb573512f4afd6f9910610a6aca67403c7_2_690x329.jpeg)

Obrigado desde já.

---

## Resposta #3

**Filipe Bonacin** (@Filipe_Bonacin) — 31/05/2021, 13:42

Aproveitando…
estou achando que meu problema é no meu dataset.

![dataset](https://fluiggers.com.br/uploads/default/optimized/1X/5dae6043b53f4a5f48a88b75de420a6abd6dc14b_2_690x170.jpeg)

```
function createDataset(fields, constraints, sortFields) {

    log.info("==================== DATASET CONECTA BANCO XXXX====================");
    var newDataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/Protheus_db";

    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);

    var select  = '';
    var where   = '';
    var myQuery = '';

    //MONTA O SELECT
    for(var i in constraints){
        if(constraints[i]['fieldName'] == "select"){
            select = constraints[i]['finalValue'];
        }
        if(constraints[i]['fieldName'] == "where"){
            where = constraints[i]['finalValue'];
        }
    }

    if (where != '') {
        myQuery = select + " " + where;
    } else {
        myQuery = select;
    }
    log.info("###Query");
    log.dir(myQuery);

    try {
        var conn        = ds.getConnection();
        var stmt        = conn.createStatement();
        var rs          = stmt.executeQuery(myQuery);
        log.info("###Queryzou");
        log.dir(rs);
        var columnCount = rs.getMetaData().getColumnCount();

        //CRIA O CABEÇALHO
        for (var i = 1; i <= columnCount; i++) {
            newDataset.addColumn(rs.getMetaData().getColumnName(i));
        }
        //LOOPING DOS REGISTROS
        while (rs.next()) {

            var Arr = new Array();
            for (var w = 1; w <= columnCount; w++) {
                var obj = rs.getObject(rs.getMetaData().getColumnName(w));

                if (null != obj) {
                    Arr[w - 1] = rs.getObject(rs.getMetaData().getColumnName(w)).toString();
                } else {
                    Arr[w - 1] = "null";
                }
            }

            newDataset.addRow(Arr);

        }

    } catch (e) {
        log.error("ERRO==============> " + e.message);
        newDataset.addColumn("erro");
        newDataset.addRow([e.message]);
    } finally {
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }

    return newDataset;
}
```

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 31/05/2021, 13:45

Boa tarde Felipe,

Verifica a estrutura de retorno do seu dataset na aba network do navegador, está parecendo que o dataset não esta tendo retorno de linhas “addRow()”. A conexão do datasource com o Protheus está ok? Tenta colocar um log.info dentro do WHILE.

---

## Resposta #5

**Filipe Bonacin** (@Filipe_Bonacin) — 31/05/2021, 13:47

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/filipe_bonacin/48/319_2.png) Filipe\_Bonacin:
>
> > ,
> >
> > Então, eu vi sim… mas teóricamente era para funcionar, pois são warnings…
> >
> > Logo abaixo tenho os erros (em vermelho).
> >
> > Esta dando erro na minha variavel retorno, pois ela está vindo como vazio. O meu select está retornando dados.
> >
> > query = “SELECT \* FROM SC7”+empresa+“0 C”
> > query += " INNER JOIN SA2"+empresa+“0 ON C7\_FORNECE = A2\_COD AND A2\_LOJA = C7\_LOJA "
> > query += " WHERE C7\_NU

Boa tarde Willian,
Obrigado pelo retorno… então… acabei de ver que o problema é o dataset mesmo… veja o que enviei acima por favor?
Obrigado

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 31/05/2021, 14:15

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/filipe_bonacin/48/319_2.png) Filipe\_Bonacin:
>
> > `) {`

Pelo que olhei esta tudo ok, tenta colocar o log.info dentro do while e um log.info antes dele pra ver se mostra algo.

![image](https://fluiggers.com.br/uploads/default/original/1X/b9b85e5b0ef6969ffae75ba2bc70b87ea2899bfd.png)

---

## Resposta #7

**Filipe Bonacin** (@Filipe_Bonacin) — 31/05/2021, 16:13

Eu coloquei…
pelo que me parece ele nem está entrando pq da o erro. Normal isso ?

![Capturar](https://fluiggers.com.br/uploads/default/optimized/1X/795b0ef5d0744aff9960a35bee6ab33ee908f6a3_2_690x475.jpeg)

---

## Resposta #8

**Willian Laynes** (@Willian_Laynes) — 31/05/2021, 16:38

Eu sugiro vc colocar seu TRY/CATCH iniciando já na primeira linha, como ele esta na metade do fonte pode não estar caindo no THROW, e não retornando a linha de ERRO, assim só retorna o status 500 (erro no fonte normalmente);

---

## Resposta #9

**Geovane Silva** (@Geovane_Silva) — 01/06/2021, 08:29

Eu também estou com o mesmo problema após tentar realizar as últimas atualizações. O erro se dá antes de entrar no dataset, no log do fluig nem gera erro ou nada. Tive que voltar na versão que eu estava, pois abri um chamado na Totvs e eles simplesmente disseram que não conseguiram simular o erro. Também criei um topico no forum, mas o parece que não está funcionando a página no momento.

[@Filipe\_Bonacin](/u/filipe_bonacin) não sei se vai acontecer com vc tbm, mas no meu caso quando eu tiro a palavra SELECT da consulta… a chamada do dataset acontece. Mas ai vai dar o erro da consulta.

Isso funciona aqui a quase três anos.

Segue o trecho do meu código:
var query = “select \* from bpmfluig.vw\_ds\_coligadas\_rm”;
var c1 = DatasetFactory.createConstraint(“query”, query, query, ConstraintType.MUST);
var constraints = new Array(c1);
dataset = DatasetFactory.getDataset(“dsGenericoSQL”, null, constraints, null);

---

## Resposta #10 ✅ RESPOSTA ACEITA

**Filipe Bonacin** (@Filipe_Bonacin) — 01/06/2021, 08:30 | ❤️ 1

Bom dia Pessoal, tudo certo?
Primeiramente gostaria de agradecer o [@Willian\_Laynes](/u/willian_laynes) e o [@daniel.cabral](/u/daniel.cabral) pelas respostas.
O problema é o seguinte…
Aparentemente os *patchs* das versões 1.7.0 e 1.7.1 do dia 25 de maio de 2021 apresentam inconsistências em acessos aos datasets realizados pelo frontend ( HTML ou javascript do formulário ).
Isso significa que se em seu processo o acesso ao webservice da plataforma é realizado diretamente pelo formulário, então o sistema poderá gerar um erro ao executar o acesso aos dados do *dataset* , resultando nas mensagens: ***“Error getting Dataset (nome do dataset): Invalid Value to parameter: \_finalValue. Possible SQL Injection.”***
Aparentemente o erro só acontece quando há uma tentativa de acessar o dataset utilizando as propriedades do constraint.
Tive que alterar a estrutura do meu processo, em vez da minha consulta do dataset ser no javascript fiz ela dentro do dataset, ou seja, um dataset para cada consulta.
Fica essa dica para contornarem, até a TOTVS resolver o problema.
Abraço

---

## Resposta #11

**Geovane Silva** (@Geovane_Silva) — 01/06/2021, 08:35

bom dia [@Filipe\_Bonacin](/u/filipe_bonacin)
Obrigado por avisar. Mas no meu caso vou ter que esperar a correção, pois são utilizo esse tipo de consulta de forma genérica e em mais de 20 formulários e widgets.

---

## Resposta #12

**Filipe Bonacin** (@Filipe_Bonacin) — 01/06/2021, 08:38 | ❤️ 1

[@Geovane\_Silva](/u/geovane_silva) então abra um chamado na TOTVS e já fala que é o mesmo problema do chamado #11685196. Já ajuda a eles verem que tem mais de um cliente com o mesmo problema.

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 01/06/2021, 10:08 | ❤️ 1

Sinceramente isso pra mim não é um erro. É bem estranho essa forma de passar uma SQL inteira para um Dataset.

Do ponto de vista de segurança o correto seria chamar o Dataset passando fields e constraints e então no Dataset criar a SQL específica para o que o Dataset se propõe.

Eu não imaginaria criar um Dataset genérico para executar qualquer tipo de consulta e talvez a TOTVS também não tenha imaginado isso e por isso colocou as regras adicionais que evitam SQL Injection (afinal tivemos uma atualização justamente voltada à segurança).

---

## Resposta #14

**Willian Laynes** (@Willian_Laynes) — 01/06/2021, 12:34 | ❤️ 1

Sim. E complementando, dava pra utilizar prepateStatement no dataset, pra deixar mais seguro ainda.

Exemplo aleatório:

```javascript
var conn = ds.getConnection();
		var stmt = conn.prepareStatement(minhaQuery);
		var indice = 1;

		stmt.setString(indice++, data_inicio);
		stmt.setString(indice++, data_fim);

		stmt.setString(indice++, data_inicio);
		stmt.setString(indice++, data_fim);


		var rs = stmt.executeQuery();
```

---

## Resposta #15

**system** (@system) — 02/06/2021, 04:34

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
