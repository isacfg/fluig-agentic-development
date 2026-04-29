# Enviar e-mail personalizado dependendo da decisão do usuario

> **Fonte:** [https://fluiggers.com.br/t/enviar-e-mail-personalizado-dependendo-da-decisao-do-usuario/2125](https://fluiggers.com.br/t/enviar-e-mail-personalizado-dependendo-da-decisao-do-usuario/2125)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 15/08/2023, 14:21
> **Visualizações:** 387 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 15/08/2023, 14:21

Boa tarde!

Tenho uma duvida se é possível enviar um e-mail personalizado dependendo da escolha feita pelo usuário no gateway.
Já tenho a função de envio personalizado e está rodando tranquilo, só queria saber se seria possível enviar dependendo da escolha do usuário.

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 22/08/2023, 16:21

olá!

Eu utilizo através de um serviceTask, dentro do serviceTask um script montando o email desejado

![image](https://fluiggers.com.br/uploads/default/original/2X/9/9b5541f3883a2bc0b8f073b1e08f88437ef5684b.png)

Script de envio de email:

function servicetask1(attempt, message) {
log.info(“Executou o script Envio de email”);

```
try{
	  var obj = new com.fluig.foundation.mail.service.EMailServiceBean();
	  var campoDestinatarios = "destinatario@meudominio.com.br";
	  var emailFluig = "remetente@meudominio.com.br";
	  var solicitacao = getValue("WKNumProces");
	  var assunto = "Assunto do email"
	  //pega a function montaEmailSolicitante (Template do e-mail)
	  var emailSolicitante = "<html>conteudo</html>"

	  //emailDest = destinatarios[i];
	  log.info("========== Enviando Email para Destinatarios " + campoDestinatarios);
	   try{
		      obj.simpleEmail(1,
		            assunto,  //Assunto
		            emailFluig,      //Remetente
		            campoDestinatarios,        //Destinatario
		            emailSolicitante,     //Corpo do Email
		            "text/html");

		      log.info("========== Enviando Email para "  + campoDestinatarios);
		  }
	  catch(e){
	    log.info("============== Erro e-mail envio de e-mail: " + e);
	   }
 	}
	catch(e){
	   log.info("============== Erro e-mail envio de e-mail: " + e);
	}
return email;
```

}

---
