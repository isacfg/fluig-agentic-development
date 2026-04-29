# Erro Ao Enviar o E-mail pelo After Task Save

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-enviar-o-e-mail-pelo-after-task-save/3286](https://fluiggers.com.br/t/erro-ao-enviar-o-e-mail-pelo-after-task-save/3286)
> **Categoria:** API`s Fluig
> **Tags:** `form`, `processo`, `dataset`, `fluigapi`, `integração`
> **Criado em:** 20/05/2025, 09:13
> **Visualizações:** 34 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Guilherme Silva** (@GuilhermeSilva) — 20/05/2025, 09:13

Pessoal Preciso de ajuda!

eu fiz as devidas configurações do SMTP, e quando faço envio do email pra testar ele indica que os testes de configurações estão corretas.

So que eu implementei no after task save o envio de email para notificar que o parecer foi aberto, e ele ta indicando um erro muito específico que o dominio não consegue enviar email pra outro

Erro:
Erro 554 ao enviar email: : com.sun.mail.smtp.SMTPSendFailedException: 554 5.2.252 SendAsDenied; nao-responder@invasive.com.br not allowed to send as guilherme.silva@simplifysolucoes.com.br; STOREDRV.Submission.Exception:SendAsDeniedException.MapiExceptionSendAsDenied; Failed to process message due to a permanent exception with message \[BeginDiagnosticData\]Cannot submit message.

A parte do código que faz o envio de email é esta:

```auto
try {
			var codresp = hAPI.getCardValue("txcodresp");
			var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId",
					codresp, codresp, ConstraintType.MUST);
			var constraints = new Array(c1);
			var colaborador = DatasetFactory.getDataset("colleague", null,
					constraints, null);
			var email = colaborador.getValue(0, "mail");

			// Parâmetros do sistema
			var dsParametros = DatasetFactory.getDataset("dsParametrosSistema",
					null, null, null);
			var server_url;
			for (var i = 0; i < dsParametros.rowsCount; i++) {
				if (dsParametros.getValue(i, "key") == "f_server_url") {
					server_url = dsParametros.getValue(i, "value");
				}
			}

			// Parte do código que envia email
			var linkRd = server_url
					+ "/portal/p/01/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="
					+ numProcesso;
			var subject = "Solicitação de férias - " + numProcesso + " Aberta";
			var conteudo = "Solicitação de férias Iniciada com Sucesso!";
			var parametros = new java.util.HashMap();
			var destinatarios = new java.util.ArrayList();

			// Monta mapa com parâmetros do template
			parametros.put("num_rd", String(numProcesso));
			parametros.put("nome_usuario", "");
			parametros.put("link_rd", linkRd);
			parametros.put("subject", subject);
			parametros.put("titulo", subject);
			parametros.put("conteudo", conteudo);

			// Monta lista de destinatários
			destinatarios.addAll(emailGrupo("RH"));
			destinatarios.add(email);

			// Envia e-mail
			notifier.notify(getValue("WKUser"), "TPLNOTIFICA", parametros,
					destinatarios, "text/html");
			log.info("AQUI email Abertura enviado, conteudo: " + conteudo);

		} catch (e) {

			log.info("ERROR Catch");
			log.error(e);
		}
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/05/2025, 09:33 | ❤️ 1

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/g/d9b06d/48.png) GuilhermeSilva:
>
> > SendAsDenied; nao-responder@invasive.com.br not allowed to send as guilherme.silva@simplifysolucoes.com.br;

Pelo jeito a conta que tá usando não permite enviar em nome de outro usuário.

Aqui tenho problema parecido, então eu deixo a configuração do e-mail com o E-mail do remetente igual à da conta e deixo ligada a opção Remetente padrão.

---
