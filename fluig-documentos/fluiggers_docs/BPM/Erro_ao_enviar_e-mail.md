# Erro ao enviar e-mail

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-enviar-e-mail/2735](https://fluiggers.com.br/t/erro-ao-enviar-e-mail/2735)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `beforetasksave`
> **Criado em:** 18/04/2024, 21:45
> **Visualizações:** 172 | **Likes:** 1 | **Respostas:** 3

---

## Pergunta original

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 18/04/2024, 21:45

Olá pessoa, sou novo aqui, um prazer pode contar com a ajuda de vocês.

Está acontecendo o seguinte, estou criando uma função pra mandar e-mail, e nela eu recebo a matricula de quem originou o processo, e os próximos envolvidos.

Acontece que eu tento montar um Array de constraints pra filtra o email deles pra passar no “to” do notifier.notify, porém não tem dado certo… segue abaixo o código, quem puder ajudar fico grato!

```auto
function beforeTaskSave(colleagueId, nextSequenceId, userList) {

    //ENVIAR EMAIL DE CRIAÇÃO DE SOLICITAÇÃO ASSIM QUE O FORMULÁRIO É SALVO.
    //if(nextSequenceId == 6){
    	var destinatarios = userList
        log.info("==============================\n\n" +
                    "DESTINATARIOS: " + destinatarios.toString() +
                "\n\n==============================")

        Fx_EnviarEmail(colleagueId,destinatarios)
    //}

}


function Fx_EnviarEmail(matRemetente, matDestinatarios){

    var parametros = new java.util.HashMap();

    log.info("==============================\n\n" +
                "INICIANDO ENVIO DE E-MAIL" +
            "\n\n==============================")

    try {

        //MONTA UM ARRAY COM OS EMAILS DOS DESTINATARIAS DAS MATRICURAS RESPECTIVAMENTE, QUE FORAM PASSADAS EM codDestinatarios
        var mailDestinatarios = []

        //ADICIONA O EMAIL DO SOLICITANTE
        //mailDestinatarios.push(DatasetFactory.createConstraint("colleaguePK.colleagueId",matRemetente,matRemetente,ConstraintType.MUST))

        for(i = 0; i < matDestinatarios.length; i++){
            mailDestinatarios.push(DatasetFactory.createConstraint("colleaguePK.colleagueId",matDestinatarios[i],matDestinatarios[i],ConstraintType.MUST))
            log.info("==============================\n\n" +
                        "ÍNDICE DO FOR PARA AS CONSTRAINTS [" + i + "]" + matDestinatarios[i] +
                    "\n\n==============================")
        }

        log.info("==============================\n\n" +
                    "FILTOS: " + mailDestinatarios.join(", ") +
                "\n\n==============================")

        //CONSULTAR O EMAIL DO SOLICITANTE E DOS DESTINATÁRIOS
        var colunas = new Array("mail");
        var destinatarios = DatasetFactory.getDataset("colleague",colunas,mailDestinatarios,null)

        log.info("==============================\n\n" +
                    "E-MAIL DESTINATÁRIOS: " + destinatarios +
                "\n\n==============================")

        //MONTA MAPA COM PARAMETROS DO TEMPLATE
        var processo = getValue("WKNumProces").toString();

        parametros.put("NUMERO_SOLICITACAO", processo);
        parametros.put("NOME_SOLICITANTE", getValue("WKUser").toString());
        parametros.put("NOME_PRODUTO", hAPI.getCardValue('NOME_PROD'));

        log.info("==============================\n\n" +
                    "EXECUTANTO notifier.notify()" +
                "\n\n==============================")

        notifier.notify("ia.processos","tpEmailSolicitacaoNovoProduto_Inicio",parametros,mailDestinatarios,"text/html");

        log.info("==============================\n\n" +
                    "EMAIL ENVIADO COM SUCESSOL" +
                "\n\n==============================")

    } catch (error) {
        log.info("==============================\n\n" +
                    "HOUVE UM ERRO AO ENVIAR O EMAIL" +
                "\n\n==============================")
                log.info("==============================\n\n" +
                    "DESCRIÇÃO DO ERRO" + error +
                "\n\n==============================")
    }


}
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/04/2024, 13:00

O método `notifier.notify` recebe um array de e-mails, não de constraints.

---

## Resposta #2

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 20/04/2024, 19:04

Não era só isso, o userList não é publico, tive que usar ele no proprio beforeTaskSave, mas mesmo assim n funfa, fala agora que o notifer.notify não existe… segue o erro e o código.

\==============================

DESCRIÇÃO DO ERRO: InternalError: Can’t find method com.datasul.technology.webdesk.dataset.DatasetFactory.getDataset(string,object,string). (beforeTaskSave#42)

\==============================

Segue código:

```auto
function beforeTaskSave(colleagueId, nextSequenceId, userList) {

    //ENVIAR EMAIL DE CRIAÇÃO DE SOLICITAÇÃO ASSIM QUE O FORMULÁRIO É SALVO.
    if(nextSequenceId == 6){
        //MONTA UM ARRAY COM OS EMAILS DOS DESTINATARIAS DAS MATRICURAS RESPECTIVAMENTE, QUE FORAM PASSADAS EM codDestinatarios
        var mailsDestinatarios = [];

        //ADICIONA O EMAIL DO SOLICITANTE
        mailsDestinatarios.push(DatasetFactory.createConstraint("colleaguePK.colleagueId",colleagueId,colleagueId,ConstraintType.MUST))

        for(var i = 0; i < userList.size() ; i++){
            mailsDestinatarios.push(DatasetFactory.createConstraint("colleaguePK.colleagueId",userList.get(i).toString(),userList.get(i).toString(),ConstraintType.MUST))
            log.info("==============================\n\n" +
                        "ÍNDICE DO FOR PARA AS CONSTRAINTS [" + i + "]" + userList.get(i).toString() +
                    "\n\n==============================");
        }

        Fx_EnviarEmail(colleagueId,mailsDestinatarios)
    }

}


function Fx_EnviarEmail(constraintsTo){

    var parametros = new java.util.HashMap();

    log.info("==============================\n\n" +
                "INICIANDO ENVIO DE E-MAIL" +
            "\n\n==============================")

    try {
        //CONSULTAR O EMAIL DO SOLICITANTE E DOS DESTINATÁRIOS
        var colunas = new Array("mail");
        var getMailDestinatarios = DatasetFactory.getDataset("colleague",colunas,constraintsTo);
        var strMails = new java.util.ArrayList();

        for(var i = 0; i < getMailDestinatarios.rowsCount; i++){
            strMails.add(getMailDestinatarios.getValue(i,'mail'))
        }

        log.info("==============================\n\n" +
                    "E-MAIL DESTINATÁRIOS: " + strMails +
                "\n\n==============================")

        //MONTA MAPA COM PARAMETROS DO TEMPLATE
        var processo = getValue("WKNumProces").toString();

        parametros.put("NUMERO_SOLICITACAO", processo);
        parametros.put("NOME_SOLICITANTE", getValue("WKUser").toString());
        parametros.put("NOME_PRODUTO", hAPI.getCardValue('NOME_PROD'));

        log.info("==============================\n\n" +
                    "EXECUTANTO notifier.notify()" +
                "\n\n==============================")

        var teste = new java.util.ArrayList
        teste.add("islainy.corte@milhao.net")
        teste.add("gabriel.barbosa@milhao.net")
        notifier.notify("ia.processos","tpEmailSolicitacaoNovoProduto_Inicio",parametros,teste,"text/html");

        log.info("==============================\n\n" +
                    "EMAIL ENVIADO COM SUCESSOL" +
                "\n\n==============================")

    } catch (error) {
        log.info("==============================\n\n" +
                    "HOUVE UM ERRO AO ENVIAR O EMAIL" +
                "\n\n==============================")
                log.info("==============================\n\n" +
                    "DESCRIÇÃO DO ERRO" + error +
                "\n\n==============================")
    }


}
```

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/04/2024, 17:25

```javascript
//ADICIONA O EMAIL DO SOLICITANTE
mailsDestinatarios.push(
    DatasetFactory.createConstraint(
        "colleaguePK.colleagueId",
        colleagueId,
        colleagueId,
        ConstraintType.MUST
    )
);

for (var i = 0; i < userList.size(); i++) {
    mailsDestinatarios.push(
        DatasetFactory.createConstraint(
            "colleaguePK.colleagueId",
            userList.get(i).toString(),
            userList.get(i).toString(),
            ConstraintType.MUST)
    ) ;
}
```

Esse seu trecho de código vai te trazer 0 resultados quando procurar o dataset, afinal você quer um resultado no qual a matrícula seja igual a todas as contraints passadas.

O `ConstraintType.MUST` é como se fosse um `AND` numa consulta SQL.

Substitua por `ConstraintType.SHOULD`.

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/g/47e85d/48.png) GabrielDouglas:
>
> > \==============================
> >
> > DESCRIÇÃO DO ERRO: InternalError: Can’t find method com.datasul.technology.webdesk.dataset.DatasetFactory.getDataset(string,object,string). (beforeTaskSave#42)
> >
> > \==============================

O erro tá dizendo que você tá chamando um método que não existe. No caso o método `DatasetFactory.getDataset` possuí 4 parâmetros obrigatórios, mas você está passando somente 3 argumentos.

---

## Resposta #4

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 22/04/2024, 11:36

Avancei aqui! Fiz as alterações que você me solicitou e também percebi que não posso acionar essa função num *Evento Automático do Processos (ExcluisveGateWay)* pois o userList retorna System:Auto, então parametrizei para as próximas Tarefas(Task) de fato.

![image](https://fluiggers.com.br/uploads/default/original/2X/b/bc9d6785df1e5419664a696eb31f1ce2bab0d8ce.png)

Porém como estou tentando criar um método reutilizável, me deparei com outro problema, no meu caso as Task são atribuídas a um pepel, então sempre vou ter que identificar qual é o método de atribuição, pra poder fazer outro getDataSet dependendo da atribuição.

![image](https://fluiggers.com.br/uploads/default/original/2X/4/4c0b6a239d026865d9bcc06846ad9aaf9e36ba8b.png)

Nesse caso que atribui um papel pras próximas tarefas, vou ter que consultar o workflowColleagueRole para obter as matriculas, e por fim consultar o colleague para consultar os mails…

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Gabriel Douglas Fernandes Barbosa** (@GabrielDouglas) — 23/04/2024, 11:24 | ❤️ 1

FINALIZADO! Agora sempre que o mecanismo de atribuição for para uma ou mais pessoas, ele vai sempre enviar para quem for, segue…

```auto
/**
 *
 *
 * @param {string} colleagueId Matrícula do usuário corrente
 * @param {number} nextSequenceId
 * @param {java.util.List<string>} userList Lista de matrículas de usuários destino
 */

var tsk_validarNomeProduto = 64
var tsk_cadastrarProduto = 65

function beforeTaskSave(colleagueId, nextSequenceId, userList) {

    //ENVIAR EMAIL DE CRIAÇÃO DE SOLICITAÇÃO ASSIM QUE O FORMULÁRIO É SALVO.
    if(nextSequenceId == tsk_validarNomeProduto || nextSequenceId == tsk_cadastrarProduto){

        //MONTA UM ARRAY COM OS EMAILS DOS DESTINATARIAS DAS MATRICURAS RESPECTIVAMENTE, QUE FORAM PASSADAS EM codDestinatarios
        var mailsDestinatarios = []

        //VERIFICA SE EXISTE UM POOL (GRUPO OU PAPEIS), PRECISA BUSCAR AS MATRICULAS ANTES NO DATASET DE UM OU DE OUTRO
        var UsersPool = new java.util.ArrayList();

        var pool = userList.get(0).toString().split(":")[0]
        var attr =  userList.get(0).toString().split(":")[1]
        var nameAttr =  userList.get(0).toString().split(":")[2]

        if(pool.trim() == 'Pool'){

            if(attr == "Role"){
                var constraintRole = [DatasetFactory.createConstraint(
                                            "workflowColleagueRolePK.roleId",
                                            nameAttr.trim(),
                                            nameAttr.trim(),
                                            ConstraintType.SHOULD
                                        )]

                var coluna = ["workflowColleagueRolePK.colleagueId"]
                var Users = DatasetFactory.getDataset(
                                    "workflowColleagueRole",
                                    coluna,
                                    constraintRole,
                                    null
                                )
            }
            if(attr == "Group"){
                var constraintGroup = [DatasetFactory.createConstraint(
                                            "colleagueGroupPK.groupId",
                                            nameAttr.trim(),
                                            nameAttr.trim(),
                                            ConstraintType.SHOULD
                                        )]
                var coluna = ["colleagueGroupPK.colleagueId"];
                var Users = DatasetFactory.getDataset(
                                    "colleagueGroup",
                                    coluna,
                                    constraintGroup,
                                    null
                                )
            }

            for (var i = 0; i < Users.rowsCount; i++) {
                UsersPool.add(Users.getValue(i,coluna))
            }

        }else{
            UsersPool = userList
        }


        //ADICIONA O EMAIL DO SOLICITANTE
        mailsDestinatarios.push(DatasetFactory.createConstraint("colleaguePK.colleagueId",colleagueId,colleagueId,ConstraintType.SHOULD))

        for(var i = 0; i < UsersPool.size(); i++){
            mailsDestinatarios.push(DatasetFactory.createConstraint("colleaguePK.colleagueId",UsersPool.get(i).toString(),UsersPool.get(i).toString(),ConstraintType.SHOULD))
        }


        FxEnviarEmail(mailsDestinatarios);

    }


}

function FxEnviarEmail(constraintsTo){

    var parametros = new java.util.HashMap();

    try {
        //CONSULTAR O EMAIL DO SOLICITANTE E DOS DESTINATÁRIOS
        var colunas = ["mail"]
        var getMailDestinatarios = DatasetFactory.getDataset("colleague",colunas,constraintsTo,null);
        var strMails = new java.util.ArrayList();

        for(var i = 0; i < getMailDestinatarios.rowsCount; i++){
            strMails.add(getMailDestinatarios.getValue(i,'mail'))
        }

        log.info("==============================\n\n" +
                    "E-MAIL DESTINATÁRIOS: " + strMails +
                "\n\n==============================")

        //MONTA MAPA COM PARAMETROS DO TEMPLATE
        var processo = getValue("WKNumProces").toString();

        parametros.put("NUMERO_SOLICITACAO", processo);
        parametros.put("NOME_SOLICITANTE", getValue("WKUser").toString());
        parametros.put("NOME_PRODUTO", hAPI.getCardValue('NOME_PROD'));

        notifier.notify("ia.processos","tpEmailSolicitacaoNovoProduto_Inicio",parametros,strMails,"text/html");


    } catch (error) {
        log.info("==============================\n\n" +
                    "HOUVE UM ERRO AO ENVIAR O EMAIL" +
                "\n\n==============================")
                log.info("==============================\n\n" +
                    "DESCRIÇÃO DO ERRO" + error +
                "\n\n==============================")
    }


}
```

---
