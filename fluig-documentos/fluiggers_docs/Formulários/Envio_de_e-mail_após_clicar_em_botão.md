# Envio de e-mail após clicar em botão

> **Fonte:** [https://fluiggers.com.br/t/envio-de-e-mail-apos-clicar-em-botao/2838](https://fluiggers.com.br/t/envio-de-e-mail-apos-clicar-em-botao/2838)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`
> **Criado em:** 05/06/2024, 11:40
> **Visualizações:** 217 | **Likes:** 0 | **Respostas:** 8

---

## Pergunta original

**Jose Henrique ** (@Jose) — 05/06/2024, 11:40

Tem como eu enviar um e-mail personalizado depois de um clique no botão? Eu tenho um envio de e-mail personalizado automático utilizando o afterTask, porém agora necessito fazer um outro envio personalizado após clicar em um botão é possivel? Se sim, poderiam me mostrar um exemplo.

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 07/06/2024, 16:28

Boa tarde, José!
Você pode fazer um Dataset que consome o método `notifier.notify` e aí você controla o disparo de e-mail nesse Dataset, e basta chamá-lo no seu front-end:

```auto
var c1 = DatasetFactory.createConstraint("params", JSON.stringify(params), JSON.stringify(params), ConstraintType.MUST);
var ds = DatasetFactory.getDataset("ds_disparo_email", null, [c1], null)
```

---

## Resposta #2

**Jose Henrique ** (@Jose) — 07/06/2024, 16:33

Boa tarde! teria um exemplo de dataset que consome o método notifier.notify,Não tenho muito conhecimento em desenvolvimento de dataset

---

## Resposta #3

**Guilherme Mesquita Rocha** (@gmesquita) — 07/06/2024, 17:49

Claro!

```auto
function createDataset(fields, constraints, sortFields) {
    log.info("ds_email - init");
    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("result");


    log.info("ds_email - constraints");
    log.dir(constraints);

    /*
    Recebe através de uma ÚNICA constraint,
    um JSON contendo todos os valores necessários para montar o template.
   */

    var formCampos = constraints[0].initialValue;
    var oJSON = JSON.parse(formCampos);

    log.info("ds_email - oJSON");
    log.dir(oJSON);

    try {
        log.info("ds_email - inside try");
        var parameters = new java.util.HashMap();
        var subject = "Assunto do E-mail";

        parameters.put("subject", subject);
        parameters.put("param1", oJSON.param1);
        parameters.put("param2", oJSON.param2);
        //Adicione o restante dos parâmetros, conforme necessário

        /** Destinatário(s).*/
        var recipients = new java.util.ArrayList();
        recipients.add("email@email.com.br");

        /** Parâmetros na respectiva ordem: remetente/cód. do template/parâmetros que irão no template/destinatários/tipo de arquivo. */
        notifier.notify("admin", "codigo_template", parameters, recipients, "text/html");

        dataset.addRow(["E-mail enviado com sucesso."]);

        log.info("ds_email - mail sended successfully - dataset:");
        log.dir(dataset);

    } catch (error) {
        log.info("ds_email - inside catch (ERROR)");
        error = error.toString();
        dataset.addRow([error]);
    }
    return dataset;
}
```

OBS: Não esqueça de passar os parâmetros que você quer que seja inserido no seu e-mail via constraint.

---

## Resposta #4

**Jose Henrique ** (@Jose) — 11/06/2024, 12:57

Fiz do jeito que você deixou o exemplo e da esse erro
![image](https://fluiggers.com.br/uploads/default/original/2X/1/168a3cf062aede36ec7128ff51b7a7c739b89b0b.png)

No log aparece assim:

```auto
2024-06-11 12:47:51,474 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) ds_email - init
2024-06-11 12:47:51,475 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) ds_email - constraints
2024-06-11 12:47:51,475 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) [ {
  "fieldName" : "params",
  "initialValue" : "{\"param1\":\"valor1\",\"param2\":\"valor2\"}",
  "finalValue" : "{\"param1\":\"valor1\",\"param2\":\"valor2\"}",
  "fieldType" : null,
  "likeSearch" : false,
  "constraintType" : "MUST"
} ]
2024-06-11 12:47:51,475 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) ds_email - oJSON
2024-06-11 12:47:51,476 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) {
  "param1" : "valor1",
  "param2" : "valor2"
}
2024-06-11 12:47:51,476 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) ds_email - inside try
2024-06-11 12:47:51,481 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) ds_email - mail sended successfully - dataset:
2024-06-11 12:47:51,482 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-18111) {
  "values" : [ [ "E-mail enviado com sucesso." ] ],
  "indexes" : [ ],
  "fieldTypes" : {
    "result" : "STRING"
  },
  "columnsCount" : 1,
  "rowsCount" : 1,
  "columnsName" : [ "result" ],
  "keyFields" : null,
  "insertOrUpdateRows" : [ ],
  "updatedRows" : [ ],
  "deletedRows" : [ ],
  "insertedRows" : [ [ "E-mail enviado com sucesso." ] ],
  "keyFieldsAndIndex" : { },
  "map" : [ {
    "result" : "E-mail enviado com sucesso."
  } ]
}
2024-06-11 12:47:51,530 WARNING [javax.mail] (EJB ASYNC - 79) expected resource not found: /META-INF/javamail.default.address.map
2024-06-11 12:47:51,597 ERROR [com.datasul.technology.webdesk.util.EMailSenderImpl] (EJB ASYNC - 79) Falha desconhecida ao enviar email: : javax.mail.AuthenticationFailedException: 535 Invalid Username or Password
```

O datast que fiz para teste:

```javascript
function createDataset(fields, constraints, sortFields) {
    log.info("ds_email - init");

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("result");

    log.info("ds_email - constraints");
    log.dir(constraints);

    // Recebe através de uma ÚNICA constraint,
    // um JSON contendo todos os valores necessários para montar o template.
    var formCampos = constraints[0].initialValue;
    var oJSON = JSON.parse(formCampos);

    log.info("ds_email - oJSON");
    log.dir(oJSON);

    try {
        log.info("ds_email - inside try");
        var parameters = new java.util.HashMap();
        var subject = "Assunto do E-mail";

        parameters.put("subject", subject);
        parameters.put("param1", oJSON.param1);
        parameters.put("param2", oJSON.param2);
        // Adicione o restante dos parâmetros, conforme necessário

        // Destinatário(s).
        var recipients = new java.util.ArrayList();
        recipients.add("teste@teste.com.br");

        // Parâmetros na respectiva ordem: remetente/cód. do template/parâmetros que irão no template/destinatários/tipo de arquivo.
        notifier.notify("7777777", "outroTeste", parameters, recipients, "text/html");

        dataset.addRow(["E-mail enviado com sucesso."]);

        log.info("ds_email - mail sended successfully - dataset:");
        log.dir(dataset);

    } catch (error) {
        log.info("ds_email - inside catch (ERROR)");
        error = error.toString();
        dataset.addRow([error]);
    }

    log.info("ds_email - returning dataset:");
    log.dir(dataset);

    return dataset;
}

a chamada do dataset através de um botão no formulario:


```javascript
$('#meuBotao').click(function() {
    var constraints = new Array();
    var params = {
        param1: "valor1",
        param2: "valor2"
        // Adicione mais parâmetros conforme necessário
    };
    var c1 = DatasetFactory.createConstraint("params", JSON.stringify(params), JSON.stringify(params), ConstraintType.MUST);

    var ds = DatasetFactory.getDataset("ds_email", null, [c1], null)
    if (ds != null && ds.rowsCount > 0) {
        if (ds.getValue(0, "result") == "E-mail enviado com sucesso.") {
            FLUIGC.toast({
                title: '',
                message: 'E-mail enviado com sucesso.',
                type: 'success'
            });
        } else {
            FLUIGC.toast({
                title: '',
                message: 'Erro ao enviar e-mail.',
                type: 'danger'
            });
        }
    } else {
        console.log("Erro: Dataset não retornado corretamente ou vazio.");
    }
});
```

Botão que chama o dataset:

```javascript
$('#meuBotao').click(function() {
    var constraints = new Array();
    var params = {
        param1: "valor1",
        param2: "valor2"
        // Adicione mais parâmetros conforme necessário
    };
    var c1 = DatasetFactory.createConstraint("params", JSON.stringify(params), JSON.stringify(params), ConstraintType.MUST);

    var ds = DatasetFactory.getDataset("ds_email", null, [c1], null)
    if (ds != null && ds.rowsCount > 0) {
        if (ds.getValue(0, "result") == "E-mail enviado com sucesso.") {
            FLUIGC.toast({
                title: '',
                message: 'E-mail enviado com sucesso.',
                type: 'success'
            });
        } else {
            FLUIGC.toast({
                title: '',
                message: 'Erro ao enviar e-mail.',
                type: 'danger'
            });
        }
    } else {
        console.log("Erro: Dataset não retornado corretamente ou vazio.");
    }
});
```

---

## Resposta #5

**Guilherme Mesquita Rocha** (@gmesquita) — 11/06/2024, 13:22

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/j/e274bd/48.png) Jose:
>
> > ```auto
> > 2024-06-11 12:47:51,597 ERROR [com.datasul.technology.webdesk.util.EMailSenderImpl] (EJB ASYNC - 79) Falha desconhecida ao enviar email: : javax.mail.AuthenticationFailedException: 535 Invalid Username or Password
> > ```

Acredito que o erro esteja na configuração do servidor de e-mail, acesse o Fluig com o usuário `wcmadmin` e configure a autenticação de e-mail na aba de `Parâmetros da plataforma` dentro de `Configurações do Sistema`:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/2019513810e529dcb7f75e6f57e831b5776fcfb0_2_690x313.png)

Depois de preencher, faça o teste de conexão, salve as preferências e se possível reinicie os serviços do ambiente Fluig!

Segue erro retornado do seu log:

```auto
2024-06-11 12:47:51,597 ERROR [com.datasul.technology.webdesk.util.EMailSenderImpl] (EJB ASYNC - 79) Falha desconhecida ao enviar email: : javax.mail.AuthenticationFailedException: 535 Invalid Username or Password
```

---

## Resposta #6

**Jose Henrique ** (@Jose) — 11/06/2024, 13:49

Testei em outro ambiente e aparece esse erro ainda:

![image](https://fluiggers.com.br/uploads/default/original/2X/0/0c315402dee30a711f56d1027b506616d5de2f75.png)

Mas diferente de antes o e-mail está chegando agora, agora só preciso saber como pegar as informações que coloquei em um campo pro email não chegar vazio igual agora

---

## Resposta #7

**Guilherme Mesquita Rocha** (@gmesquita) — 11/06/2024, 14:30

Coloque alguns logs infos para tentar rastrear até onde ele chega no Dataset… vê se ele entra no `catch`, pois se ele caiu no seu `else` é pq o envio de e-mail não foi disparado corretamente…

---

## Resposta #8

**Jose Henrique ** (@Jose) — 11/06/2024, 16:13

Já contém um log.

```javascript
log.info("ds_email - mail sended successfully - dataset:");
        log.dir(dataset);

    } catch (error) {
        log.info("ds_email - inside catch (ERROR)");
        error = error.toString();
        dataset.addRow([error]);
    }

    log.info("ds_email - returning dataset:");
```

Porém no log não aparece, mostra somente o log de sucesso de envio.

```auto
2024-06-11 16:10:02,808 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-569928) ds_email - inside try
2024-06-11 16:10:02,817 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-569928) ds_email - mail sended successfully - dataset:
2024-06-11 16:10:02,819 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-569928) {
  "values" : [ [ "E-mail enviado com sucesso." ] ],
  "indexes" : [ ],
  "fieldTypes" : {
    "result" : "STRING"
  },
  "keyFields" : null,
  "insertOrUpdateRows" : [ ],
  "updatedRows" : [ ],
  "deletedRows" : [ ],
  "insertedRows" : [ [ "E-mail enviado com sucesso." ] ],
  "keyFieldsAndIndex" : { },
  "columnsCount" : 1,
  "rowsCount" : 1,
  "columnsName" : [ "result" ],
  "map" : [ {
    "result" : "E-mail enviado com sucesso."
  } ]
}
2024-06-11 16:10:02,820 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-569928) ds_email - returning dataset:
2024-06-11 16:10:02,821 INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-569928) {
  "values" : [ [ "E-mail enviado com sucesso." ] ],
  "indexes" : [ ],
  "fieldTypes" : {
    "result" : "STRING"
  },
  "keyFields" : null,
  "insertOrUpdateRows" : [ ],
  "updatedRows" : [ ],
  "deletedRows" : [ ],
  "insertedRows" : [ [ "E-mail enviado com sucesso." ] ],
  "keyFieldsAndIndex" : { },
  "columnsCount" : 1,
  "rowsCount" : 1,
  "columnsName" : [ "result" ],
  "map" : [ {
    "result" : "E-mail enviado com sucesso."
  } ]
}
```

---

## Resposta #9

**Guilherme Mesquita Rocha** (@gmesquita) — 11/06/2024, 17:42

os parâmetros estão condizentes com o template de e-mail?

---

## Resposta #10

**Jose Henrique ** (@Jose) — 12/06/2024, 10:47

Esse é o template de teste:

```auto
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style>
            body{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 12px;
            }

            table{
                width: 100%;
                border-collapse: collapse;
            }

            th,td{
                border: thin solid black;
                padding: 8px;
            }

            th{
               background-color: rgb(14, 187, 255);
                color: whitesmoke;
            }

            td{
                text-align: center;
            }

           img{
            width: 100%;
            height: 12em;
           }


        </style>


        <title>Document</title>
    </head>
    <body>


    <h2>Prezados, segue processo para conferência e aprovação</h2>

    <h2>Informações de Compra</h2>


      <table>
          <tr>
             <th>Observação</th>
          </tr>
          <tbody>
            <tr>
                <td>${OBSER_VACAO!''}</td>
            </tr>
         </tbody>
      </table>

           <!-- <table style="margin-top: 25px; background-color: #f2f2f2;"> -->


    </body>
    </html>
```

Esse é o dataset:

```javascript
function createDataset(fields, constraints, sortFields) {
    log.info("ds_email - init");

    var dataset = DatasetBuilder.newDataset();
    dataset.addColumn("result");

    log.info("ds_email - constraints");
    log.dir(constraints);

    // Recebe através de uma ÚNICA constraint,
    // um JSON contendo todos os valores necessários para montar o template.
    var formCampos = constraints[0].initialValue;
    var oJSON = JSON.parse(formCampos);

    log.info("ds_email - oJSON");
    log.dir(oJSON);

    try {
        log.info("ds_email - inside try");
        var parameters = new java.util.HashMap();
        var subject = "Assunto do E-mail";
        var obser_vacao = hAPI.getCardValue("observacoes");

        parameters.put("subject", subject);
        parameters.put("OBSER_VACAO", obser_vacao);
        // Adicione o restante dos parâmetros, conforme necessário

        // Destinatário(s).
        var recipients = new java.util.ArrayList();
        recipients.add("teste@teste.com.br");

        // Parâmetros na respectiva ordem: remetente/cód. do template/parâmetros que irão no template/destinatários/tipo de arquivo.
        notifier.notify("7777777", "enviode", parameters, recipients, "text/html");

        dataset.addRow(["E-mail enviado com sucesso."]);

        log.info("ds_email - mail sended successfully - dataset:");
        log.dir(dataset);

    } catch (error) {
        log.info("ds_email - inside catch (ERROR)");
        error = error.toString();
        dataset.addRow([error]);
    }

    log.info("ds_email - returning dataset:");
    log.dir(dataset);

    return dataset;
}
```

E esse é o javascript:

```javascript
$('#meuBotao').click(function() {
    var constraints = new Array();
    var obser_vacao = document.getElementById("observacoes").value.trim();
    var params = {
    		obser_vacao,
    };
    var c1 = DatasetFactory.createConstraint("params", JSON.stringify(params), JSON.stringify(params), ConstraintType.MUST);

    var ds = DatasetFactory.getDataset("ds_email", null, [c1], null)
    if (ds != null && ds.rowsCount > 0) {
        if (ds.getValue(0, "result") == "E-mail enviado com sucesso.") {
            FLUIGC.toast({
                title: '',
                message: 'E-mail enviado com sucesso.',
                type: 'success'
            });
        } else {
            FLUIGC.toast({
                title: '',
                message: 'Erro ao enviar e-mail.',
                type: 'danger'
            });
        }
    } else {
        console.log("Erro: Dataset não retornado corretamente ou vazio.");
    }
});
```

Mesmo assim o email chega porém vazio.

![image](https://fluiggers.com.br/uploads/default/original/2X/a/a40ee1008cbe24c4fe0b7b7085d5af5046316ca8.png)

---

## Resposta #11

**venturelli** (@venturelli) — 25/06/2024, 11:53

O problema é a tentativa de reuso do código que funcionava no processo.

```auto
var obser_vacao = hAPI.getCardValue("observacoes");
```

Este código funciona no processo, pegando o campo “observacoes” do formulário da solicitação atual, mas para o dataset isso não vai funcionar.

Alias, acho até estranho não dar um erro nessa linha pela inexistência do objeto hAPI, mas enfirm.

O correto seria pegar das constraints. Não precisa passar ele num array como você fez, senão é mais uma instrução para fazer no back:

```auto
var observacao = document.getElementById("observacoes").value.trim();
var constraintObservacao = DatasetFactory.createConstraint("observacao", observacao, observacao, ConstraintType.MUST);
var ds = DatasetFactory.getDataset("ds_email", null, [observacao], null)
```

E no dataset:

```auto
var observacao = "";
if (constraints != null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == "obsevacao") {
                observacao = constraints[i].initialValue;
            }
        }
    }
```

---
