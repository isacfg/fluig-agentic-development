# Datasets Avançados não consideram constraints. Seria boa prática este 'workaround'?

> **Fonte:** [https://fluiggers.com.br/t/datasets-avancados-nao-consideram-constraints-seria-boa-pratica-este-workaround/909](https://fluiggers.com.br/t/datasets-avancados-nao-consideram-constraints-seria-boa-pratica-este-workaround/909)
> **Categoria:** WCM
> **Criado em:** 04/02/2022, 12:10
> **Visualizações:** 1091 | **Likes:** 4 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 04/02/2022, 12:10

A pergunta que desejo fazer sobre o assunto abaixo é a seguinte: isto que fiz para resolver é uma aberração, não é uma boa prática?
Há soluções mais elegantes?

Como iniciante, vivo em busca de conceitos apalpando às cegas. Tento uma coisa, dá certo; tento outra e não dá e vou procurando documentação.

Fiz algumas consultas usando Dataset Avançado para acessar banco de dados externo e estava crente que estava sendo aplaudido, quando, numa situação diferente, vi que eu merecia era vaia.

Isto porque o array constraints que é recebido na assinatura da função createDataset(fields,constraints,sortFields) eu usei na cláusula WHERE anotada nesta função.

Enquanto o ‘constraint’ fosse comparação por igualdade, beleza, funcionava bem, capturando os valores com que eu passava no Javascript na chamada do tal Dataset.
No loop de busca por constraints, alimentava a variável e a concatenava na cláusula WHERE.
Assim a sequência era:

No Javascript:

```auto
let c1 = DatasetFactory.createConstraint("ANO_MES",'2022-01','2022-01',ConstraintType.MUST);
let arrayConstraints=[];
arrayConstraints.push(c1);
let arrayOrdenacao=[];
arrayOrdenacao.push('NOME');
let resultado = DatasetFactory.getDataset("meu_dataset",null,arrayConstraints,arrayOrdenacao);
console.log(resultado);
```

No dataset:

```auto
function createDataset(fields,constraints,sortFields){

 if(constraints !== null){
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "ANO_MES") {
                anoMes = constraints[i].initialValue; //para ser usado na cláusula WHERE
            }//if constraints ==

        }//for
    }//if constraints !==

[...]

var myQuery = "select * from CUSTOM.VW_CST_TS_ATRASO where ESCRITORIO 'RJ' AND ANO_MES='"+anoMes+"'  AND CATEGORIA='CONS' AND TIPO_PROF='ADV' ORDER BY "+sortFields.join();

[...]

return dataset;
}//createDataset
```

O problema começou quando eu queria que a cláusula WHERE NÃO SELECIONASSE um tipo de informação, fazendo uma condição do tipo MUST\_NOT:

> let c1 = DatasetFactory.createConstraint(“ANO\_MES”,‘2022-01’,2022-01’,ConstraintType.MUST);
> let c2 = DatasetFactory.createConstraint(“CATEGORIA”,‘CONS’,‘CONS’,ConstraintType.MUST\_NOT);
> let arrayConstraints=;
> arrayConstraints.push(c1);
> arrayConstraints.push(c2);
> let arrayOrdenacao=;
> arrayOrdenacao.push(‘NOME’);
> let resultado = DatasetFactory.getDataset(“meu\_dataset”,null,arrayConstraints,arrayOrdenacao);
> console.log(resultado);

mas, de cara percebi que a SQL abaixo ia ficar estranha, pois a igualdade conforme à direita *AND CATEGORIA **\=** ’ "+cat+ "’* iria conflitar com o MUST\_NOT.
O Fluig iria, magicamente, trocar o ‘=’ por ‘<>’?

```auto
[...]

var myQuery = "select * from CUSTOM.VW_CST_TS_ATRASO where ESCRITORIO 'RJ' AND ANO_MES='"+anoMes+"'  AND CATEGORIA = '"+cat+"' AND TIPO_PROF='ADV' ORDER BY "+sortFields.join();

[...]
```

Claro que não.
Mesmo assim, teimei e, claro, a resposta veio listando todos os CONS.

Aí, procurando a documentação, li algo que deveria ter entendido antes, mas, como iniciante, muita coisa passa por não ser a hora certa de entender, que [dizia](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219):

> Atenção!
>
> As constraints podem ser utilizadas apenas para Datasets internos. Datasets avançados não aceitam constraints, pelo fato de os dados serem externos, não sendo possível aplicar o filtro em sua origem. Para Datasets avançados o tratamento de filtros deve ser feito na codificação do Dataset, manipulando o objeto retornado e retirando as informações desnecessárias.

Como franco-atirador, eu pensei, então por que não burlar o que já vem preparado e fazer um jeitinho brasileiro?

Mãos à obra, pensei em pôr toda a sequência SQL já montada.
Teria a exceção desejada, os campos, cláusulas, ordenação tudo numa única tripa.
Passaria essa tripa no primeiro parâmetro da função createDataset e jogaria tudo na myQuery.

Para isto fiz o seguinte no Javacript:

```auto
jQuery("#idBtnSuplementarTeste").on("click",function (){
//aqui uso CATEGORIA <> 'CONS'

		let meuSQL = "SELECT * from CUSTOM.VW_CST_TS_ATRASO where ESCRITORIO ='RJ' "+
		"AND ANO_MES='2022-01'  AND CATEGORIA <> 'CONS' AND TIPO_PROF='ADV' " +
		"ORDER BY NOME,CATEGORIA";

		let arrayCampos=[];
		arrayCampos.push(meuSQL);
		let resultado = DatasetFactory.getDataset("ds_ucrg_adv_atrasado_mauro",arrayCampos,null,null);
		console.log("resultado",resultado);
	});//idBtnTeste
```

e a função no dataset recebendo todo o primeiro elemento do array ‘fields’ assim:

```auto
function createDataset(fields,constraints,sortField){
[...]
  var ds = ic.lookup(dataSource);
            var myQuery = fields[0];
            log.info("LINHA QUERY : "+myQuery);
    try {
[...]
}//createDataset
```

Seria uma má prática, repito?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/02/2022, 13:56 | ❤️ 1

Pra mim a sua solução é bem ruim, pois você está montando um SQL que é facilmente encontrado no código e alguém com conhecimento pode criar qualquer SQL e passar pro seu dataset pra obter o que quiser. É uma grande falha de segurança.

Quanto ao seu problema você precisa validar o tipo da Constraint e tratar os casos.

```javascript
let arrayConstraints = [
    DatasetFactory.createConstraint(
        "ANO_MES",
        "2022-01",
        "2022-01",
        ConstraintType.MUST
    ),
    DatasetFactory.createConstraint(
        "CATEGORIA",
        "CONS",
        "CONS",
        ConstraintType.MUST_NOT
    )
];

let arrayOrdenacao= ["NOME"];

let resultado = DatasetFactory.getDataset(
        "meu_dataset",
        null,
        arrayConstraints,
        arrayOrdenacao
);
```

No seu código você indicou que a Constraint ANO\_MES é MUST e a Constraint CATEGORIA é MUST\_NOT.

No seu Dataset você precisa tratar isso.

Exemplo:

```javascript
var clausulas = [];
var comparacao = "";

if (constraints !== null) {
    for (var i = 0; i < constraints.length; i++) {
        comparacao = constraints[i].constraintType == ConstraintType.MUST ? " = " : " <> ";

        if (constraints[i].fieldName == "ANO_MES") {
            clausulas.push("anoMes " + comparacao + "'" + constraints[i].initialValue + "'");
        }

        if (constraints[i].fieldName == "CATEGORIA ") {
            clausulas.push("CATEGORIA " + comparacao + "'" + constraints[i].initialValue + "'");
        }
}

var sql = "SELECT * FROM TABELA WHERE " + clausulas.join(" AND ");
```

É uma atividade bem complicada em Dataset Avançado tratar todas as possibilidades de Constraints, então é bom analisar bem cada caso.

Por exemplo, se a pessoa colocar uma constraint SHOULD você teria que tratar com um OR na consulta e pode ir complicando cada vez mais.

Por isso é interessante definir bem a regra de negócio para o uso do Dataset pra não deixar a implementação complicada demais.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/02/2022, 14:19 | ❤️ 1

Mas já vi algumas soluções parecidas com a sua quando quem chama o dataset de consulta é outro dataset, pois assim fica tudo em chamadas no servidor, sem chance de um usuário simplesmente inspecionar o JS do navegador e se aproveitar da situação.

Aqui fizeram uma consulta a banco que a pessoa passa todos os campos numa constraint, mas como disse, é de uso interno de um dataset (e depois que eu vi isso fui lá e troquei o código, hehe)

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 17/02/2022, 17:49 | ❤️ 2

Olá,

Eu uso via serviço do processo “servicetask”. Lá eu leio os campos e monto os SQLs. e executo passando meu comando como constraint

![](https://fluiggers.com.br/uploads/default/original/1X/bad3e5f9ad67c1ddf145107ce7032ac1d7b22563.svg) [GitHub](https://github.com/nicolauale/fluig-custom-dataset)

![](https://opengraph.githubassets.com/523617dd88f07006f5bfb5d37988800b1ed8f4dbf08835b5d40f452aaa4f21db/nicolauale/fluig-custom-dataset)

### [GitHub - nicolauale/fluig-custom-dataset: Execute queries diretamente em sua...](https://github.com/nicolauale/fluig-custom-dataset)

Execute queries diretamente em sua base do ERP através do Fluig - GitHub - nicolauale/fluig-custom-dataset: Execute queries diretamente em sua base do ERP através do Fluig

Espero ter ajudado

---
