# Envio de e-mail personalizado

> **Fonte:** [https://fluiggers.com.br/t/envio-de-e-mail-personalizado/2031](https://fluiggers.com.br/t/envio-de-e-mail-personalizado/2031)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 12/07/2023, 10:46
> **Visualizações:** 1468 | **Likes:** 4 | **Respostas:** 22

---

## Pergunta original

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 12/07/2023, 10:46

Bom dia!

Estou tentando criar um envio de e-mail personalizado porém falhei miseravelmente hahaha, tentei pelo afterStateEntry, afterProcessCreate e pelo beforeStateEntry e não funcionou em nenhum deles.

Gostaria de saber como faço para criar e enviar um e-mail personalizado de forma correta.

Aqui está minha ultima tentativa que fiz.

```javascript
function afterStateEntry(sequenceId){

    var idFluig = getValue("WKNumProces") + ''
    var emails = hAPI.getCardValue('emails');
    var nome_solicitante = hAPI.getCardValue('solicitante');
    var nome_gerente = hAPI.getCardValue('nomeGerente');
    var nome_supervisor = hAPI.getCardValue('nomeSupervisor');
    var valor_total = hAPI.getCardValue('total');

try {
    var parametros = new java.util.HashMap();

    parametros.put("NOME_USUARIO", nome_solicitante);
    parametros.put("NOME_SOLICITANTE", nome_solicitante);
    parametros.put("NOME_GERENTE", nome_gerente);
    parametros.put("NOME_SUPERVISOR", nome_supervisor);
    parametros.put("VALOR_TOTAL", valor_total);

    parametros.put("subject", "Pagamento Efetuado para a solicitação (" + idFluig + ") / colaborador (" + nome_solicitante + ")");

    var destinatarios = new java.util.ArrayList();

    var emails = emails.split(';')

    for (var i = 0; i < emails.length; i++) {

        destinatarios.add(emails[i]);
    }


    notifier.notify("1275", "tpl_confirmacao_pgto", parametros, destinatarios, "text/html");

} catch (e) {
    log.info(e);
}

}
```

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 12/07/2023, 11:53

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/c/51bf81/48.png) Caue\_Silva\_Jesus:
>
> > `notifier.notify("1275", "tpl_confirmacao_pgto", parametros, destinatarios, "text/html");`

[@Caue\_Silva\_Jesus](/u/caue_silva_jesus) o nome ‘1275’ está registrado no WCMADMIN?

---

## Resposta #2

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 12/07/2023, 12:06

[@Mautresim](/u/mautresim) está assim

![image](https://fluiggers.com.br/uploads/default/original/1X/691bfe81f0916052435561138dada91f27d2a138.png)

---

## Resposta #3

**MAURO SIMOES** (@Mautresim) — 12/07/2023, 12:12

[@Caue\_Silva\_Jesus](/u/caue_silva_jesus) , no WCMADMIN, em Parâmetros da Plataforma, o nome que você tem de usar para que o email seja enviado é como na imagem. No caso, lá no WCMADMIN do meu Fluig está ‘Fluig’. Tem de ver como está no seu e substituir aquele ‘1275’ no Notifier.

![image](https://fluiggers.com.br/uploads/default/original/1X/a08c238ff77e8f37a2fc894ff5cd6a843d979c14.png)

---

## Resposta #4

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 12/07/2023, 12:25

Verifiquei aqui e está como Fluig e já efetuei a mudança porém ainda não está enviando o e-mail personalizado

---

## Resposta #5

**MAURO SIMOES** (@Mautresim) — 12/07/2023, 12:28

Dentro do WCMADMIN você pode testar, naquele mesmo lugar, a conexão. Você pode enviar daquela página para quem você quiser um email. Veja se funciona pelo WCMADMIN o teste de envio.

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/07/2023, 14:47 | ❤️ 2

[@Caue\_Silva\_Jesus](/u/caue_silva_jesus) , qual a mensagem de erro que aparece no log do Fluig?

Melhor coisa é analisar o erro pra tentar ir mais certo ao problema.

---

## Resposta #7

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 14/07/2023, 14:06

Está assim

![log](https://fluiggers.com.br/uploads/default/original/2X/7/733984aa967d756ae20b477b948de4c8e874fa98.png)

2023-07-14 14:03:02,021 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1042) Executando Dataset com ID fdwt\_tipo\_layout do tipo Interno.
2023-07-14 14:03:02,021 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1042) Builder rodando sem o mobile
2023-07-14 14:03:02,064 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1042) Executando Dataset com ID fdwt\_pagina\_layout do tipo Interno.
2023-07-14 14:03:02,065 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1042) Builder rodando sem o mobile
2023-07-14 14:03:02,106 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1042) Executando Dataset com ID fdwt\_tipo\_layout do tipo Interno.
2023-07-14 14:03:02,106 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1042) Builder rodando sem o mobile
2023-07-14 14:03:02,332 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1043) Executando Dataset com ID fdwt\_menu do tipo Interno.
2023-07-14 14:03:02,333 INFO \[com.datasul.technology.webdesk.dataset.business.DatasetBO\] (default task-1043) Builder rodando sem o mobile
2023-07-14 14:03:22,638 INFO \[com.fluig.ecm.workflow.service.WorkflowProcessErrorLogServiceBean\] (default task-1042) >6e1f6885-e13a-44e6-8cc4-0c3ab9efbb41
2023-07-14 14:03:22,732 INFO \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-1042) Iniciando o processo ‘novo\_teste’ ativ destino ‘3’ usuario ‘1275’ empresa ‘1’
2023-07-14 14:03:22,758 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-1042) TypeError: Cannot call method “split” of null
2023-07-14 14:03:23,066 WARN \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-1042) Não existe nenhum anexo definido como principal.
2023-07-14 14:03:23,067 WARN \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-1042) Não existe nenhum anexo definido como principal.
2023-07-14 14:03:23,067 INFO \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-1042) # Saving card. Process: novo\_teste, Instance: 1092, Sequence: 3, Dados: {emails=kaue.menezes@yahoo.com.br, total=sa, nomeSupervisor=sa, nomeGerente=sa, solicitante=sa}
2023-07-14 14:03:23,262 WARN \[com.totvs.technology.foundation.alert.service.AlertServiceBean\] (Thread-9647 (ActiveMQ-client-global-threads)) Same sender and receiver\[login=kaue.menezes\]

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/07/2023, 14:20

Vi que deu esse erro: `Cannot call method “split” of null`

Será que sua variável emails está preenchida?

---

## Resposta #9

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 14/07/2023, 14:29

Tentei novamente e ainda deu esse erro ai, efetuei o preenchimento certo. Irei deixar em negrito os valores que digitei

2023-07-14 14:24:24,831 INFO \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-1046) Iniciando o processo ‘novo\_teste’ ativ destino ‘3’ usuario ‘1275’ empresa ‘1’
2023-07-14 14:24:24,863 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-1046) TypeError: Cannot call method “split” of null
2023-07-14 14:24:25,185 WARN \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-1046) Não existe nenhum anexo definido como principal.
2023-07-14 14:24:25,185 WARN \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-1046) Não existe nenhum anexo definido como principal.
2023-07-14 14:24:25,185 INFO \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-1046) # Saving card. Process: novo\_teste, Instance: 1093, Sequence: 3, Dados: **{emails=**kaue.menezes@yahoo.com.br**, total=teste, nomeSupervisor=teste, nomeGerente=teste, solicitante=teste}**

Vou deixar o código do template, formulario e o Js

**Template**

```auto
<html>

<head>
    <title>Fluig</title>
    <style>
        .title {
            font-size: 22px;
        }

        .description {
            font-size: 17px;
        }

        table {
            width: 100%;
            padding-bottom: 2px;
        }

        table tbody {
            text-align: left;
            padding-left: 15px;
        }

        .beneficiado,
        .aprovadores {
            color: #484848;
        }
    </style>
</head>

<body leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">
    <div>
        <br>
        <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td style="padding: 25px;">
                        <h3 class="title">
                            Pagamento Realizado com sucesso!
                        </h3>
                        <p class="description">
                            O pagamento de ${VALOR_TOTAL} referente as despesas da viagem foi efetuado!
                        </p>
                        <div class="beneficiado">
                            <b>Beneficiado:</b> ${NOME_SOLICITANTE}
                        </div>
                        <div class="aprovadores">
                            <p>
                                <b>Supervisor Aprovador:</b> ${NOME_SUPERVISOR}
                            </p>
                            <p>
                                <b>Gerente Aprovador:</b> ${NOME_GERENTE}
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table cellspacing="0" cellpadding="0" border="0" style="margin-top: 25px; background-color: #f2f2f2;">
            <tbody>
                <tr>
                    <td>
                        <img src="https://www.innovareti.com.br/img/logo/logo-dark.png" width="200" style="right: 0;">
                    </td>
                    <td align="left" style="color: #666666;">
                        <p style="margin-bottom: 0;margin-block-end: 0;margin-block-start: 0; font-weight: 600;">
                            Innovare TI</p>
                        <p style="margin-bottom: 0;margin-block-end: 0;margin-block-start: 0;">Rua Capitão Cassiano
                            Ricardo de Toledo, 191, sala 1610, Chácara Urbana – Ed. Golden Office, Jundiaí, SP</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <br />
</body>

</html>
```

**Formulário**

```auto
<html>
<head>
	<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css"/>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
	<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
	<script type="text/javascript" src="jquery.input.mask.js"></script>
	<script type="text/javascript" src="validacao.js"></script>

	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div class="fluig-style-guide">
<form name="form" role="form">


    <div class="panel panel-default boder-red" id="referencias">
    <div class="panel-heading panel-child">
    <h3 class="panel-title">Itens Solicitados / Especificações Técnicas</h3>
  </div>
    <div class="panel-body">
    <div class="row">
					<div class="col-md-2" id="emails">
						<label class="required" for="emails">Pessoa Fisica:</label>
						<input type="text" id="emails" name="emails" class="form-control">
					</div>

					<div class="col-md-2" id="solicitante">
						 <label class="required" for="solicitante">Local:</label>
						 <input type="text" id="solicitante" name="solicitante" class="form-control">
					 </div>

					 <div class="col-md-2" id="nomeGerente">
						 <label class="required" for="nomeGerente">nomeGerente:</label>
						 <input type="text" id="nomeGerente" name="nomeGerente" class="form-control">
					 </div>

					 <div class="col-md-2" id="nomeSupervisor">
						 <label class="required" for="nomeSupervisor">nomeSupervisor:</label>
						 <input type="text" id="nomeSupervisor" name="nomeSupervisor" class="form-control">
					 </div>

					 <div class="col-md-2" id="total">
						 <label class="required" for="total">total:</label>
						 <input type="text" id="total" name="total" class="form-control">
					 </div>

			       </div>
             </div>
             </div>
 </form>
</div>
</body>
</html>
```

**Validação para o envio**

```javascript
var idFluig = getValue("WKNumProces") + ''
        var emails = hAPI.getCardValue('emails');
        var nome_solicitante = hAPI.getCardValue('solicitante');
        var nome_gerente = hAPI.getCardValue('nomeGerente');
        var nome_supervisor = hAPI.getCardValue('nomeSupervisor');
        var valor_total = hAPI.getCardValue('total');

    try {

        var parametros = new java.util.HashMap();


        parametros.put("emails", emails);
        parametros.put("NOME_SOLICITANTE", nome_solicitante);
        parametros.put("NOME_GERENTE", nome_gerente);
        parametros.put("NOME_SUPERVISOR", nome_supervisor);
        parametros.put("VALOR_TOTAL", valor_total);


        parametros.put("subject", "Pagamento Efetuado para a solicitação (" + idFluig + ") / colaborador (" + nome_solicitante + ")");


        var destinatarios = new java.util.ArrayList();


        var emails = emails.split(';')


        for (var i = 0; i < emails.length; i++) {

            destinatarios.add(emails[i]);
        }



        notifier.notify("Fluig", "tpl_confirmacao_pgto", parametros, destinatarios, "text/html");

    } catch (TESTEPARAVERCADEOERRO) {
        log.info(TESTEPARAVERCADEOERRO);
    }
```

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/07/2023, 09:49

dá um `log.info` na variável `emails` pra confirmar que tem algo nela.

Pra mim o problema é que você tá declarando a `emails` duas vezes e com isso tá sobrescrevendo ela e perdendo o valor antes de conseguir dar o split.

---

## Resposta #11

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 18/07/2023, 09:54

Bom dia!

Deixei a segunda declaração do email comentada e fiz os teste novamente.

```javascript
var idFluig = getValue("WKNumProces") + ''
        var emails = hAPI.getCardValue('emails');
        var nome_solicitante = hAPI.getCardValue('solicitante');
        var nome_gerente = hAPI.getCardValue('nomeGerente');
        var nome_supervisor = hAPI.getCardValue('nomeSupervisor');
        var valor_total = hAPI.getCardValue('total');

    try {

        var parametros = new java.util.HashMap();


        parametros.put("emails", emails);
        parametros.put("NOME_SOLICITANTE", nome_solicitante);
        parametros.put("NOME_GERENTE", nome_gerente);
        parametros.put("NOME_SUPERVISOR", nome_supervisor);
        parametros.put("VALOR_TOTAL", valor_total);


        parametros.put("subject", "Pagamento Efetuado para a solicitação (" + idFluig + ") / colaborador (" + nome_solicitante + ")");


        var destinatarios = new java.util.ArrayList();


       // var emails = emails.split(';')


        for (var i = 0; i < emails.length; i++) {

            destinatarios.add(emails[i]);
        }



        notifier.notify("Fluig", "tpl_confirmacao_pgto", parametros, destinatarios, "text/html");

    } catch (TESTEPARAVERCADEOERRO) {
        log.info(TESTEPARAVERCADEOERRO);
        log.info(emails);
    }
```

Porém ainda da erro

2023-07-18 09:50:16,564 INFO \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-1195) Iniciando o processo ‘novo\_teste’ ativ destino ‘3’ usuario ‘1275’ empresa ‘1’
2023-07-18 09:50:16,591 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-1195) TypeError: Cannot call method “split” of null
2023-07-18 09:50:16,937 WARN \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-1195) Não existe nenhum anexo definido como principal.
2023-07-18 09:50:16,938 WARN \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-1195) Não existe nenhum anexo definido como principal.
2023-07-18 09:50:16,938 INFO \[com.datasul.technology.webdesk.workflow.business.WorkflowBO\] (default task-1195) # Saving card. Process: novo\_teste, Instance: 1098, Sequence: 3, Dados: {emails=kaue.menezes@turmadamonica.com.br, total=kaue.menezes@turmadamonica.com.br, nomeSupervisor=kaue.menezes@turmadamonica.com.br, nomeGerente=kaue.menezes@turmadamonica.com.br, solicitante=kaue.menezes@turmadamonica.com.br}
2023-07-18 09:50:17,176 WARN \[com.totvs.technology.foundation.alert.service.AlertServiceBean\] (Thread-14422 (ActiveMQ-client-global-threads)) Same sender and receiver\[login=kaue.menezes\]

Caso tenha um modelo de envio de e-mail personalizado poderia deixar em anexo pra ver onde eu errei.

---

## Resposta #12

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/07/2023, 12:33

Estranho que continuou dando erro de chamada no método split mesmo sem ter esse método sendo chamado no seu código.

Segue um exemplo de código que uso pra disparar e-mail:

```javascript
/**
 * Evento disparado após o cancelamento da solicitação
 *
 * @param {string} colleagueId Matrícula do Usuário
 * @param {number} processId
 */
function afterCancelProcess(colleagueId, processId) {

    // Foi cancelada aguardando Assinatura Digital
    if (parseInt(getValue("WKNumState")) == 22) {

        var destinatarios = pegaDestinatariosCancelamento();

        if (destinatarios.isEmpty()) {
            return;
        }

        // Variáveis do template de e-mail
        var parametros = new java.util.HashMap();
        parametros.put("subject", "Solicitação de Atestado de Capacidade Técnica: Cancelamento da Solicitação " + processId);
        parametros.put("SERVER_URL", fluigAPI.getPageService().getServerURL());
        parametros.put("TENANT_ID", getValue("WKCompany"));
        parametros.put("PROCESSO_ID", processId.toString());

        // Dispara o e-mail
        notifier.notify("admin", "Atestado_Capacidade_Tecnica_Cancelado", parametros, destinatarios, "text/html");

        return;
    }
}

/**
 * Pega os destinatários do e-mail de cancelamento
 *
 * @returns {java.util.ArrayList<string>}
 */
function pegaDestinatariosCancelamento() {
    var destinatarios = new java.util.ArrayList();

    var usuarios = DatasetFactory.getDataset(
        "ds_usuarios_ativos",
        ["mail"],
        [DatasetFactory.createConstraint("groupId", "UAD - Contratações", "", ConstraintType.MUST)],
        null
    );

    if (!usuarios.rowsCount) {
        return destinatarios;
    }

    for (var i = 0; i < usuarios.rowsCount; ++i) {
        destinatarios.add(colleague.getValue(0, "mail"));
    }

    return destinatarios;
}
```

Exemplo do Template:

```html
<html>
<head>
	<meta charset="utf-8">
    <title>Sebrae MS - Fluig</title>
</head>
<body>
    <p><img src="${SERVER_URL!''}/globalmailsender/mailSenderHeader?tenantId=${TENANT_ID!''}"></p>

    <h1>ATENÇÃO</h1>

    <p>
        A Solicitação de Atestado de Capacidade Técnica <strong>${PROCESSO_ID!''}</strong>
        foi <strong>Cancelada</strong> enquanto aguardava a coleta de Assinatura Digital!
    </p>

    <p>Você pode acessar a Solicitação <a href="${SERVER_URL!''}/portal/p/01/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=${PROCESSO_ID!''}">Clicando Aqui</a></p>
</body>
</html>
```

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/07/2023, 12:34

Ah, seguinte.

Depois que você atualizou seu Processo você testou com uma Nova Solicitação ou tentou com a que já estava criada?

Se tentou com a que já estava criada fez a Conversão da versão dela para a versão mais recente?

Se não atualizou a versão o código executado continuará a ser o da versão antiga, que tinha o erro no split.

---

## Resposta #14

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 18/07/2023, 13:30

Eu escrevi o código que eu mostrei tudo dnv e agora não aparece aquele erro de antes, porém agora aparece esse.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/5f700bb3ab8aec410317a5f8eb8b72b618c6c545.png)

---

## Resposta #15

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/07/2023, 16:16

Você colocou destinatários na variável?

---

## Resposta #16

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 18/07/2023, 16:27

Coloquei.

```javascript
var idFluig = getValue("WKNumProces") + ''
        var emails = hAPI.getCardValue('emails');
        var nome_solicitante = hAPI.getCardValue('solicitante');
        var nome_gerente = hAPI.getCardValue('nomeGerente');
        var nome_supervisor = hAPI.getCardValue('nomeSupervisor');
        var valor_total = hAPI.getCardValue('total');

    try {

        var parametros = new java.util.HashMap();


        parametros.put("NOME_USUARIO", nome_solicitante);
        parametros.put("NOME_SOLICITANTE", nome_solicitante);
        parametros.put("NOME_GERENTE", nome_gerente);
        parametros.put("NOME_SUPERVISOR", nome_supervisor);
        parametros.put("VALOR_TOTAL", valor_total);


        parametros.put("subject", "Pagamento Efetuado para a solicitação (" + idFluig + ") / colaborador (" + nome_solicitante + ")");


        var destinatarios = new java.util.ArrayList();
        destinatarios.add(kaue.menezes);




        notifier.notify("1275", "tpl_confirmacao_pgto", parametros, destinatarios, "text/html");

    } catch (e) {
        log.info(e);
    }

    function onNotify(subject, receivers, template, params) {

        if (template == "templateEmail") {
            receivers.clear();
        }
    }
```

Coloquei também o e-mail no lugar do usuário e deu esse erro ai

---

## Resposta #17

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/07/2023, 16:29

`destinatarios.add` recebe uma string. Ali tá fora de " e ', então dá problema.

E das vezes que tentei enviar e-mail eu sempre precisei colocar o email ao invés da matrícula (embora na documentação diga que pode ser a matrícula nunca consegui sem ser com email)

---

## Resposta #18

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 18/07/2023, 16:36

Então seria desse jeito?

```javascript
var idFluig = getValue("WKNumProces") + ''
        var emails = hAPI.getCardValue('emails');
        var nome_solicitante = hAPI.getCardValue('solicitante');
        var nome_gerente = hAPI.getCardValue('nomeGerente');
        var nome_supervisor = hAPI.getCardValue('nomeSupervisor');
        var valor_total = hAPI.getCardValue('total');

    try {

        var parametros = new java.util.HashMap();


        parametros.put("NOME_USUARIO", nome_solicitante);
        parametros.put("NOME_SOLICITANTE", nome_solicitante);
        parametros.put("NOME_GERENTE", nome_gerente);
        parametros.put("NOME_SUPERVISOR", nome_supervisor);
        parametros.put("VALOR_TOTAL", valor_total);


        parametros.put("subject", "Pagamento Efetuado para a solicitação (" + idFluig + ") / colaborador (" + nome_solicitante + ")");


        var destinatarios = new java.util.ArrayList();
        destinatarios.add("kaue.menezes");




        notifier.notify("kaue.menezes@yahoo.com.br", "tpl_confirmacao_pgto", parametros, destinatarios, "text/html");

    } catch (e) {
        log.info(e);
    }

    function onNotify(subject, receivers, template, params) {

        if (template == "templateEmail") {
            receivers.clear();
        }
    }
```

---

## Resposta #19

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/07/2023, 09:02

Não.

Destinatários devem ser o e-mail.

Remetente deve ser a matrícula do usuário.

---

## Resposta #20

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 19/07/2023, 09:52

Troquei conforme me falou e o erro ainda persiste, to ficando louco kkkkk

---

## Resposta #21

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/07/2023, 11:25

seguiu a orientação do [@Mautresim](/u/mautresim) de testar no WCMADMIN se o e-mail está configurado e funcionando?

Pode ser que a configuração esteja ruim e aí não teria como disparar o e-mail mesmo.

---

## Resposta #22

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 19/07/2023, 14:13

A conexão está funcionando normalmente, novamente fiz umas alterações no código agora aquele erro sumiu. Porém apareceu um que eu acho que seja mais fácil de resolver.

```javascript
function afterStateEntry(sequenceId){
	var idFluig = getValue("WKNumProces") + ''
	var nome_solicitante = hAPI.getCardValue("solicitante");
    var nome_gerente = hAPI.getCardValue("nomeGerente");
    var nome_supervisor = hAPI.getCardValue("nomeSupervisor");
    var valor_total = hAPI.getCardValue("total");

	try{
	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    parametros.put("NOME_SOLICITANTES", "nome_solicitante");
	    parametros.put("NOME_GERENTES", "nome_gerente");
	    parametros.put("NOME_SUPERVISORS", "nome_supervisor");
	    parametros.put("VALO_TOTALS", "valor_total");

	    //Este parâmetro é obrigatório e representa o assunto do e-mail
	    parametros.put("subject", "ASSUNTO");

	    //Monta lista de destinatários
	    var destinatarios = new java.util.ArrayList();
	    destinatarios.add("kaue.menezes@turmadamonica.com.br");

	    //Envia e-mail
	    notifier.notify("admin", "testeEmail", parametros, destinatarios, "text/html");

	} catch(e){
	    log.info(e);
	}

	    function onNotify(subject, receivers, template, params) {
	        if (template.match("templateEmail") != null){
	            receivers.clear();
	        }
	    }

}
```

Erro:

2023-07-19 14:10:09,077 ERROR \[com.datasul.technology.webdesk.util.EMailSenderImpl\] (EJB ASYNC - 7) Falha ao enviar email customizado com template tpl\_confirmacao\_pgto.html localizado em /volume/wdk-data/templates/tplmail/testeEmail/pt\_BR : : freemarker.core.InvalidReferenceException: The following has evaluated to null or missing:

---

## Resposta #23

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 21/07/2023, 10:24

Arrumei mais o código e agora tem esse erro apenas.

2023-07-21 10:21:44,028 ERROR \[freemarker.runtime\] (EJB ASYNC - 5) Error executing FreeMarker template: freemarker.core.InvalidReferenceException: The following has evaluated to null or missing:

2023-07-21 10:21:44,029 ERROR \[com.datasul.technology.webdesk.util.EMailSenderImpl\] (EJB ASYNC - 5) Falha ao enviar email customizado com template tpl\_confirmacao\_pgto.html localizado em /volume/wdk-data/templates/tplmail/testeEmail/pt\_BR : : freemarker.core.InvalidReferenceException: The following has evaluated to null or missing:

---

## Resposta #24

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/07/2023, 10:36 | ❤️ 1

Esse erro parece ser que no template você está referenciando uma variável que não foi informada no mapa de parâmetros.

---

## Resposta #25

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 21/07/2023, 10:54 | ❤️ 1

Agradeço demais pela ajuda de verdade :slight_smile:

Agora consegui enviar certinho, só não ta pegando o valor dos campos do formulário. Ai tenho que ver o motivo disso sendo que era pra pegar pois está assim.

```javascript
var emails = hAPI.getCardValue("emailss");
	var nome_solicitante = hAPI.getCardValue("solicitante");
    var nome_gerente = hAPI.getCardValue("nomeGerente");
    var nome_supervisor = hAPI.getCardValue("nomeSupervisor");
    var valor_total = hAPI.getCardValue("total");

	try{
	    //Monta mapa com parâmetros do template
	    var parametros = new java.util.HashMap();
	    parametros.put("EMAIL", "emails");
	    parametros.put("NOME_SOLICITANTE", "nome_solicitante");
	    parametros.put("NOME_GERENTE", "nome_gerente");
	    parametros.put("NOME_SUPERVISOR", "nome_supervisor");
	    parametros.put("VALOR_TOTAL", "valor_total");
```

Então era pra pegar as informações dos campos

---

## Resposta #26 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/07/2023, 11:20

Que bom.

Estranho não pegar os dados do formulário. O uso do método `hAPI.getCardValue` tá certo e você tá mandando pegar pelo `name` do campo.

É legal estudar como funciona o FreeMarker, pois por ser uma engine de template dá pra fazer algumas coisas legais pra facilitar.

Mas já fica uma dica: utilize o ! logo após o nome da variável e então, entre ‘’, coloca um valor padrão. Assim se a variável for vazia não dará erro e exibirá a mensagem padrão. Algo assim: `${DATA_RETORNO!''}`

E dá pra utilizar IF e outros fluxos de controle/repetição.

![image](https://fluiggers.com.br/uploads/default/original/2X/e/e0a42e5cd088dcba295c64cb15db3638ab0bde2b.png)

---
