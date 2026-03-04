# Pegar dados de parametros

> **Fonte:** [https://fluiggers.com.br/t/pegar-dados-de-parametros/2222](https://fluiggers.com.br/t/pegar-dados-de-parametros/2222)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`
> **Criado em:** 19/09/2023, 15:55
> **Visualizações:** 450 | **Likes:** 0 | **Respostas:** 13

---

## Pergunta original

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 19/09/2023, 15:55

Estou tentando pegar alguns parâmetros WDK para montar um e-mail personalizado, já sei como montar e ja montei um, mas agora tenho que montar um que pegue informações dos parâmetros WDK, vi que no tdn da Totvs te alguns WDk.

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d909f09273c3e4e208914315acf91fab50240a3d.png)

Porém já tentei de varias formas e não consigo pegar os valores deles .

Aqui o template padrão da totvs:

```auto
<html>
<head>
	<meta charset="utf-8">
    <title>Fluig</title>
    <link href="${SERVER_URL!''}/globalmailsender/resources/global.css" type="text/css" rel="stylesheet" />
</head>
<body leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">
    <div align="left">
        <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td>
						<img src="${SERVER_URL!''}/globalmailsender/mailSenderHeader?tenantId=${TENANT_ID!''}">
					</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br />
    <p class="DescrMsgForum">Olá, ${RECEIVER!''}</p>
    <br />
    <div align="left">
        <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td>
                    	<p class="DescrMsgForum">Existe uma nova atividade que está sob sua responsabilidade e precisa de sua ação.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    	<img src="${WDK_TaskIconImage!''}" align="absmiddle" border="0">
                    	<a href="${WDK_TaskLink!''}" class="${WDK_ClassLink!''}">
                    		<b>Solicitação</b>: ${WDK_TaskNumber!''} - ${WDK_ProcessDescription!''} - ${WDK_TaskDescription!''}
                    	</a>

                    </td>
                </tr>
                <tr>
                    <td>
                    	<p class="DescrMsgDocto"><b>Prazo:</b> ${WDK_TaskDeadLine!''}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    	<p class="DescrMsgForum"><b>Comentários:</b> ${WDK_TaskComments!''}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    	<p class="DescrMsgDocto"><b>Identificador:</b> ${WDK_CardDescriptorField!''}</p>
                    </td>
                </tr>
                <tr>
                    <td>
						<div class="DescrMsgForum actions">
							<a class="action" href="${LINK!''}">Ir para Notificações</a>
							<div style="clear: both; line-height: 1px">&nbsp;</div>
						</div>
                    </td>
                </tr>

			</tbody>
        </table>
    </div>
</body>
</html>
```

Aqui foi a função que normalmente utilizo para enviar e-mail personalizado, coloquei os parametros WDK e simplesmente fica vazio.

```javascript
function afterTaskComplete(colleagueId,nextSequenceId,userList){

	if (nextSequenceId == 4) {

		var idFluig = getValue("WKNumProces") + ''
		var email_solicitante = "teste@toutlook.com.br";
	  /*  var linkSolicitacao = "https://mauriciode115843.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+idFluig;
	 */


		try{

		    var parametros = new java.util.HashMap();
		  /*  parametros.put("LINK", linkSolicitacao);
		    parametros.put("RECEIVER");
		    parametros.put("WDK_Request");*/
		   /* parametros.put("WDK_RequestDescription");*/
		    parametros.get("WDK_TaskDeadLine");
		    parametros.get("WDK_TaskNumber");
		    parametros.get("WDK_ProcessDescription");
		    parametros.get("WDK_TaskDescription");
		 /*   parametros.put("WDK_AdHocProcess");*/



		    //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", "Solicitação de compras (" + idFluig + ") / colaborador ");

		    var dest = new java.util.ArrayList();
		    dest.add(email_solicitante);

		     if (dest.size() > 0){
		         //Envia e-mail
		         notifier.notify("marcos.teste", "outroEmail", parametros, dest, "text/html");
		     }

		} catch(e){
		    log.info(e);
		}


	     function onNotify(subject, receivers, template, params) {
		        if (template.match("templateEmail") != null){
		            receivers.clear();
		        }
		    }
		 }

}
```

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 19/09/2023, 16:06

Boa tarde! Imagino que você tenha que fazer da seguinte forma:
`parametros.put("WDK_TaskNumber", parametros.get("WDK_TaskNumber"));`
O primeiro parâmetro seria referente ao template de e-mail, e o segundo correspondente ao valor do parâmetro do Fluig…

---

## Resposta #2

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 19/09/2023, 16:18

Normalmente nos outros e-mail que fiz eu pego os valores assim:

var nome\_gerente = hAPI.getCardValue(“SETOR”);
parametros.put(“DEPARTAMENTO\_”, nome\_gerente);

Então para pegar o valor do WDK tenho que fazer desse jeito que você mostrou? outra duvida no caso eu tenho que por em uma variável como faço normalmente ou só esse parâmetro que você mostrou?

---

## Resposta #3

**Guilherme Mesquita Rocha** (@gmesquita) — 19/09/2023, 16:21

Pode ser dessa forma mesmo, eu imagino… não necessariamente precisa por numa variável, somente replicar para garantir que todos os campos do template sejam preenchidos… e os campos que forem parâmetros da plataforma, você pegar do jeito do exemplo `parametros.get("NOME_PARAMETRO")` inserindo em um método `.put()`.

---

## Resposta #4

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 19/09/2023, 16:29

Deixei minha função assim:

```javascript
function afterTaskComplete(colleagueId,nextSequenceId,userList){

	if (nextSequenceId == 4) {

		var idFluig = getValue("WKNumProces") + ''
		var email_solicitante = "teste@outlook.com.br";



		try{

		    var parametros = new java.util.HashMap();
		    parametros.put("WDK_TaskDeadLine", parametros.get("WDK_TaskDeadLine"));



		    //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", "Solicitação de compras (" + idFluig + ") / colaborador ");

		    var dest = new java.util.ArrayList();
		    dest.add(email_solicitante);

		     if (dest.size() > 0){
		         //Envia e-mail
		         notifier.notify("marcos.teste", "outroEmail", parametros, dest, "text/html");
		     }

		} catch(e){
		    log.info(e);
		}


	     function onNotify(subject, receivers, template, params) {
		        if (template.match("templateEmail") != null){
		            receivers.clear();
		        }
		    }
		 }

}
```

Deixei o WDK igual vc colocou deixou de exemplo, porém quando o e-mail chega não tem informação.

![image](https://fluiggers.com.br/uploads/default/original/2X/d/d687950619568940d035a045c2f750f4d4d4f114.png)

---

## Resposta #5

**Guilherme Mesquita Rocha** (@gmesquita) — 19/09/2023, 16:35

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/c/51bf81/48.png) Caue\_Silva\_Jesus:
>
> > ```auto
> > function onNotify(subject, receivers, template, params) {
> > ```

Na verdade, o parâmetro que vai retornar as informações do Fluig é o `params` do onNotify…
Pois a sua variável `parâmetros` está sendo inicialmente declarada como um novo Hashmap…
Você teria que fazer a tratativa dentro da função `onNotify`.
Ex:
`parametros.put("WDK_TaskNumber", params.get("WDK_TaskNumber"))`
Desta forma os `"parâmetros"` correspondem ao seu template customizado, enquanto o `"params"` corresponde aos parâmetros do Fluig.

---

## Resposta #6

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 19/09/2023, 16:49

```javascript
function afterTaskComplete(colleagueId,nextSequenceId,userList){

	if (nextSequenceId == 4) {

		var idFluig = getValue("WKNumProces") + ''
		var email_solicitante = "teste@outlook.com.br";



		try{

		    var parametros = new java.util.HashMap();

		    parametros.put("WDK_TaskDeadLine", params.get("WDK_TaskDeadLine"))




		    //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", "Solicitação de compras (" + idFluig + ") / colaborador ");

		    var dest = new java.util.ArrayList();
		    dest.add(email_solicitante);

		     if (dest.size() > 0){
		         //Envia e-mail
		         notifier.notify("marcos.teste", "outroEmail", parametros, dest, "text/html");

		     }

		} catch(e){
		    log.info(e);
		}


	     function onNotify(subject, receivers, template, params) {
		        if (template.match("templateEmail") != null){
		            receivers.clear();
		        }
		    }
		 }

}
```

Fiz como falou, porém agora não está chegando o e-mail.

---

## Resposta #7

**Guilherme Mesquita Rocha** (@gmesquita) — 19/09/2023, 17:11

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/c/51bf81/48.png) Caue\_Silva\_Jesus:
>
> > `params`

O `params` é um parâmetro exclusivo do `onNotify`, como você está acessando antes de declarar a função está dando o erro… você deve montar DENTRO do `onNotify`:
Ex:

```auto
function onNotify(subject, receivers, template, params) {
		        if (template.match("templateEmail") != null){
		            receivers.clear();
                            parametros.put("subject", "Assunto de teste pegando parâmetro da plataforma - " + getValue("WKNumProces") + " - Grupo " +
                            params.get("WDK_TaskGroup"));
		        }
		    }
```

---

## Resposta #8

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 19/09/2023, 17:30

Fiz primeiro deste jeito

```javascript
function onNotify(subject, receivers, template, params) {
		        if (template.match("templateEmail") != null){
		            receivers.clear();
		            parametros.put("WDK_TaskNumber", params.get("WDK_TaskNumber"));
		        }
		    }
```

Depois fiz dessse

```javascript
function onNotify(subject, receivers, template, params) {
		        if (template.match("templateEmail") != null){
		            receivers.clear();
		            params.get("WDK_TaskNumber");
		        }
		    }
```

Ambos chegam e-mail porém sem nenhuma informação

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/09/2023, 11:11

Pela documentação diz que se passar o **número do registro do formulário** o Fluig vai inserir automaticamente esses valores nos parâmetros passados ao e-mail.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/5af5c59a4a282bfe6d198596af129e2b45db84e8.png)

Então seu código de enviar seria algo assim:

```javascript
var parametros = new java.util.HashMap();
parametros.put("subject", "Assunto");
parametros.put("NAME", "João");
parametros.put("CODE", "01");

var destinatarios = new java.util.ArrayList();
destinatarios .add("umemail@umprovedor.com");

notifier.notify(
    "admin",
    aqui vai número do registro do formulário,
    "outroEmail",
    parametros,
    destinatarios ,
    "text/html"
);
```

Assim no seu e-mail você terá acesso a todos esses WDK que quer utilizar.

```html
<html>
<head>
	<meta charset="utf-8">
	<title>Fluig</title>
</head>
<body>
	<h1>Exibe todo o conteúdo do formulário:</h1>
	${WDK_CardContent!''}
</body>
</html>
```

Sinceramente nunca utilizei assim

---

## Resposta #10

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 20/09/2023, 12:28

Desse modo funcionou perfeitamente, o problema é que os templates que a própria totvs disponibilizou tem outros parâmetros WDK que não estão nessa lista da imagem, e são exatamente eles que não funcionam

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/09/2023, 13:40

O que você precisa pode passar manualmente pro template.

```javascript
parametros.put("WDK_TaskNumber", getValue("WDK_TaskNumber"));
```

Mas até onde sei as WDK são de acordo com o evento, então talvez tenha alguma que não apareça devido ao evento que está usando.

---

## Resposta #12

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 20/09/2023, 16:31

Tentei desse modo que você colocou e também ficou vazio. Já tentei em vários eventos porém os únicos WDK que funcionam são os da imagem que colocou nas respostas anteriores.

---

## Resposta #13

**Guilherme Mesquita Rocha** (@gmesquita) — 21/09/2023, 10:26

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/c/51bf81/48.png) Caue\_Silva\_Jesus:
>
> > `params`

Tente capturar os parâmetros no log para verificar oq ele traz de retorno, ex:

```auto
function onNotify(subject, receivers, template, params) {
log.info("retorno dos params: ");
log.dir(params)
}
```

---

## Resposta #14

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 29/09/2023, 10:28

Bom dia! Ainda to na luta pra conseguir pegar os dados kkkkk.

No log aparece os seguintes erros.

Se eu não colocar nenhum parametro:

```auto
> 2023-09-29 10:24:28,295 ERROR [com.fluig.foundation.volume.LocalStream] (default task-9519) Error replication file: File not found
> 2023-09-29 10:24:28,295 ERROR [io.undertow.request] (default task-9519) UT005023: Exception handling request to /volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD01MzM5JnZlcj0xMDAwJmZpbGU9Y3VzdG9tLmpzJmNyYz0wJnNpemU9MC4wJnVJZD02NiZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9ZmFsc2U=.js: javax.servlet.ServletException: java.lang.Exception: File not found
```

Se eu colocar apenas um parametro envia porém sem nenhuma informação:

```auto
2023-09-29 10:15:37,584 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9516) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:38,724 INFO  [com.fluig.monitoring.jschronos.JSChronos] (default task-9516) PageServiceBean.findMenuPages executou por 1 segundo
2023-09-29 10:15:38,798 INFO  [com.datasul.technology.webdesk.dataset.business.DatasetBO] (default task-9516) Executando Dataset com ID fdwt_menu do tipo Interno.
2023-09-29 10:15:38,798 INFO  [com.datasul.technology.webdesk.dataset.business.DatasetBO] (default task-9516) Builder rodando sem o mobile
2023-09-29 10:15:44,048 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:44,062 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:44,084 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:44,102 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:44,118 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:44,136 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:44,157 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
2023-09-29 10:15:44,168 WARN  [org.hibernate.hql.internal.ast.QueryTranslatorImpl] (default task-9519) HHH000104: firstResult/maxResults specified with collection fetch; applying in memory!
```

Agora se coloco todos os parametros que estão no template ele não envia e da esse erro:

```auto
2023-09-29 10:22:36,255 ERROR [com.fluig.foundation.volume.LocalStream] (default task-9516) Error replication file: File not found
2023-09-29 10:22:36,255 ERROR [io.undertow.request] (default task-9516) UT005023: Exception handling request to /volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD01MzM4JnZlcj0xMDAwJmZpbGU9Y3VzdG9tLmpzJmNyYz0wJnNpemU9MC4wJnVJZD02NiZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9ZmFsc2U=.js: javax.servlet.ServletException: java.lang.Exception: File not found
```

---

## Resposta #15

**Guilherme Mesquita Rocha** (@gmesquita) — 29/09/2023, 15:34

Boa tarde, já tentou recriar o template (apagando e inserindo novamente)?

---

## Resposta #16

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 29/09/2023, 15:44

Sim, deixarei como está a função e o template.

Função:

```javascript
function afterStateEntry(sequenceId){

if (sequenceId == 4) {


		var idFluig = getValue("WKNumProces") + ''
		var nome = getValue("WKDef")
		var email_solicitante = "teste@outlook.com.br";
		var linkSolicitacao = "https://teste.fluig.cloudtotvs.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+idFluig;
	    var testar = getValue("WDK_TaskNumber")


		try{

		    var parametros = new java.util.HashMap();
		    parametros.put("WDK_TaskNumber", getValue("WDK_TaskNumber"));
		    parametros.put("WDK_TaskLink", getValue("WDK_TaskLink"));
		    parametros.put("WDK_ProcessDescription", getValue("WDK_ProcessDescription"));
		    parametros.put("WDK_TaskDeadLine", getValue("WDK_TaskDeadLine"));
		    parametros.put("WDK_CardDescriptorField", getValue("WDK_CardDescriptorField"));
		    parametros.put("WDK_TaskComments", getValue("WDK_TaskComments"));
		    parametros.put("SERVER_URL", getValue("SERVER_URL"));
		    parametros.put("WDK_TaskIconImage", getValue("WDK_TaskIconImage"));



		    //Este parâmetro é obrigatório e representa o assunto do e-mail
		    parametros.put("subject", "Solicitação Iniciar Processo ");

		    var dest = new java.util.ArrayList();
		    dest.add(email_solicitante);

		     if (dest.size() > 0){
		         //Envia e-mail
		         notifier.notify(getValue("WKUser"), 4304 , "teste",  parametros, dest, "text/html");
		     }

		} catch(e){
		    log.info(e);
		}


	     function onNotify(subject, receivers, template, params) {
		        if (template.match("templateEmail") != null){
		            receivers.clear();
		        }
		    }
		 }

}


//Exemplos de parametros que devem estar no template de email
/*var parametros = new java.util.HashMap();
parametros.put("WDK_CompanyId", getValue("WKCompany"));
parametros.put("WDK_TaskLink", hAPI.getUserTaskLink(sequenceId));

notifier.notify(getValue("WKUser"), "", parametros, destinatarios, "text/html");*/
/*var destinatarios = new java.util.ArrayList();
//Envia para usuário cadastrado no fluig
destinatarios.add("matricula_usuario");

//Exemplos de parametros que devem estar no template de email
var parametros = new java.util.HashMap();
parametros.put("WDK_CompanyId", getValue("WKCompany"));
parametros.put("WDK_TaskLink", hAPI.getUserTaskLink(sequenceId));

notifier.notify(getValue("WKUser"), "aaa", parametros, destinatarios, "text/html");*/
```

Template:

```auto
<html>
<head>
	<meta charset="utf-8">
    <title>Fluig</title>
    <link href="${SERVER_URL!''}/globalmailsender/resources/global.css" type="text/css" rel="stylesheet" />
</head>
<body leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">
    <div align="left">
        <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td>
						<img src="${SERVER_URL!''}/globalmailsender/mailSenderHeader?tenantId=${TENANT_ID!''}">
					</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br />
    <p class="DescrMsgForum">Olá, ${RECEIVER!''}</p>
    <br />
    <div align="left">
        <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td>
                    	<p class="DescrMsgForum">Existe uma nova atividade que está sob sua responsabilidade e precisa de sua ação.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    	<img src="${WDK_TaskIconImage!''}" align="absmiddle" border="0">
                    	<a href="${WDK_TaskLink!''}" class="${WDK_ClassLink!''}">
                    		<b>Solicitação</b>: ${WDK_TaskNumber!''} - ${WDK_ProcessDescription!''} - ${WDK_TaskDescription!''}
                    	</a>

                    </td>
                </tr>
                <tr>
                    <td>
                    	<p class="DescrMsgDocto"><b>Prazo:</b> ${WDK_TaskDeadLine!''}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    	<p class="DescrMsgForum"><b>Comentários:</b> ${WDK_TaskComments!''}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    	<p class="DescrMsgDocto"><b>Identificador:</b> ${WDK_CardDescriptorField!''}</p>
                    </td>
                </tr>
                <tr>
                    <td>
						<div class="DescrMsgForum actions">
							<a class="action" href="${LINK!''}">Ir para Notificações</a>
							<div style="clear: both; line-height: 1px">&nbsp;</div>
						</div>
                    </td>
                </tr>

			</tbody>
        </table>
    </div>
</body>
</html>
```

---
