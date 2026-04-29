# Problemas com onNotify, Não permite impersonalização

> **Fonte:** [https://fluiggers.com.br/t/problemas-com-onnotify-nao-permite-impersonalizacao/3487](https://fluiggers.com.br/t/problemas-com-onnotify-nao-permite-impersonalizacao/3487)
> **Categoria:** Ambiente Fluig
> **Tags:** `email`
> **Criado em:** 04/11/2025, 15:50
> **Visualizações:** 51 | **Likes:** 3 | **Respostas:** 5

---

## Pergunta original

**Pietro** (@pietro) — 04/11/2025, 15:50

Boa tarde pessoal, tudo certo?

Tenho um problema aqui na empresa que é, o Fluig não tem opção que força um usuário só no envio de e-mail.

Tem a opção lá no wcmadmin mas existem alguns e-mails que ainda assim não são enviados por ter um “FROM” diferente do que o meu stmp permite.

Alguém já passou por um erro parecido?

Pensei em, dentro do onNotify, capturar e reenviar o e-mail com o mesmo template mas usando o user (admin) que tem o mesmo e-mail que o permitido pelo stmp.

Ou até mesmo usar outro mecanismo, por fora do notifier.notify totalmente.

Mas gostaria de saber se alguém passou por algo assim.

E aqui a resposta da TOTVS:

![image](https://fluiggers.com.br/uploads/default/original/2X/9/99cff197ab6b8bdcfb24f59bc98186b1a223ad0f.png)

Vale comentar que eu não tenho a minima ideia de como customizar o remetente do e-mail, nos params tem apenas o userId, vou acabar testando trocar isso, mas não sei se funciona assim, é uma saída adicional, mas não achei nada sobre isso.

---

## Resposta #1

**Pietro** (@pietro) — 04/11/2025, 16:13

Adicionando aqui, fiz o post mais como auxilio caso alguém tenha o mesmo problema futuramente, junto ao GPT fiz uma gambiarra que clona completamente o que é recebido no onNotify e tenta reenviar com o user padrão, mas vou testar mais algumas coisas, pode ser que exista um método mais fácil.

Vale comentar, o e-mail configurado no wcmadmin DEVE ser o mesmo do ‘admin’, por algum motivo o padrão usa e-mail do admin para o envio de e-mail, descobri isso no meio de uns testes uns tempos atrás.

```javascript
try {
        var flag = (params != null) ? params.get("SKIP_ONNOTIFY") : null;

        var deveForcarRemetente = (flag == null);

        if (deveForcarRemetente) {
            log.info(" >>> >>> On notify >>>> Tentando forçar rementente!")

            var destinatarios = new java.util.ArrayList();
            for (var i = 0; i < receivers.size(); i++) {
                log.info(" >>> >>> On notify >>>> receiver " + i + " para enviar o e-mail: " + receivers.get(i))
                destinatarios.add(String(receivers.get(i)));
            }

            var novoParams = new java.util.HashMap();

            novoParams.putAll(params);

            var assunto = (subject != null && subject.size() > 0) ? ("" + subject.get(0)) : "";

            novoParams.put("subject", assunto);

            //Para evitar loop eterno
            novoParams.put("SKIP_ONNOTIFY", "1");

            notifier.notify("admin", template, novoParams, destinatarios, "text/html");

            return;
        }
    } catch (e) {
        log.error("[onNotify][erro] " + e);
    }
```

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/11/2025, 16:13 | ❤️ 1

Aqui o usuário de e-mail não permite também, então daria erro alterar o remetente.

Então, no wcmadmin, deixamos configurado o e-mail do remetente e marcamos a opção “Remetente padrão”.

Não me recordo de reclamações sobre disparo de e-mail dessa forma.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/993091e10f7d4eb0ac1e15ea67094f5969105666_2_690x412.png)

---

## Resposta #3

**Pietro** (@pietro) — 04/11/2025, 16:20

[@Bruno\_Gasparetto](/u/bruno_gasparetto)

Então, tenho bem assim configurado, porém não envia e-mails como por exemplo o de *”**USUÁRIO SOLICITANTE encaminhou a tarefa TAREFA DO PROCESSO para seu grupo***”, ao alterar, finalizei o serviço, limpei os temps e nada. achei bem estranho, até por que não vi mais ninguém ter problemas mesmo…..

![image](https://fluiggers.com.br/uploads/default/original/2X/d/dcce438d06b07a9794da0f31e01a4abff8d66332.png)

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/b5e1dca0fde7c562b6cb6a2492cabe6a6499c586_2_690x232.png)

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/11/2025, 17:09

Estranho. Aqui recebo normalmente. Como aqui usamos Office 365 o usuário e e-mail remetente são idênticos no Fluig. Mas o remetente do e-mail, mesmo estando configurado no Fluig como “Fluig”, vem como o nome real do usuário de e-mail (como tá cadastrado no Office 365).

![image](https://fluiggers.com.br/uploads/default/original/2X/6/6aa72c52e97319f10122b8985088a4d882a3993d.png)

---

## Resposta #5

**Pietro** (@pietro) — 06/11/2025, 14:19

Bruno, me conta, teu ‘nome do remetente’, por ventura, não é a matricula de um usuário que tem o e-mail cadastrado que é usado no STMP de vocês não né?

Lendo a FAQ e testando/brincando com o notifier cai nessa dúvida, vou testar se não usa a mátricula do usuário isso…… que é inclusive o params.currentUser, talvez se não funcionar vou testar alterar esse campo do params.

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Pietro** (@pietro) — 06/11/2025, 14:46 | ❤️ 1

E era isso mesmo…..

Nenhuma FAQ nem o próprio suporte soube apontar o erro, precisa informar o código/Mátricula do usuário que tem o e-mail correto, que ai ele utiliza no lugar de qualquer outro utilizado.

Por sorte na FAQ é comentado que usa o que está cadastrado no ‘remetente padrão’ (sem especificar o que precisa estar lá), caso não tenha cadastro, usa a mátricula do user logado.
[Envio de e-mails personalizados (notifier.notify) - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=852915615#Enviodeemailspersonalizados\(notifier.notify\)-params)

---

## Resposta #7

**Samuel Grontoski** (@samuelGrontoski) — 07/11/2025, 08:42

Olá Pietro!

Você se deparou com o caso do e-mail ser enviado sem assunto? Ele sempre chega como: (sem assunto)
Implementei o código assim:

```javascript
function onNotify(subject, receivers, template, params) {
	try {
		var matriculaRemetente = "admin";

		var flag = (params != null) ? params.get("SKIP_ONNOTIFY") : null;

		var deveForcarRemetente = (flag == null);

		if (deveForcarRemetente) {
			log.info(" >>> >>> On notify >>>> Tentando forçar rementente!")

			var destinatarios = new java.util.ArrayList();
			for (var i = 0; i < receivers.size(); i++) {
				log.info(" >>> >>> On notify >>>> receiver " + i + " para enviar o e-mail: " + receivers.get(i))
				destinatarios.add(String(receivers.get(i)));
			}

			var novoParams = new java.util.HashMap();

			novoParams.putAll(params);

			var assunto = (subject != null && subject.size() > 0) ? ("" + subject.get(0)) : "";

			novoParams.put("subject", assunto);

			//Para evitar loop eterno
			novoParams.put("SKIP_ONNOTIFY", "1");

			notifier.notify(matriculaRemetente, template, novoParams, destinatarios, "text/html");

			return;
		}
	} catch (e) {
		log.error("[onNotify][erro] " + e);
	}
}
```

---

## Resposta #8

**Pietro** (@pietro) — 12/11/2025, 14:45 | ❤️ 1

Sim, tinha batido nisso também, isso ocorre pois o fluig por padrão não tem assunto definido dentro dos templates, ele monta com base em 3 campos diferentes. mas só monta em e-mails padrões…..

é meio esquisito isso, mas tu consegue, se montar manual, resolver, mas é tanto trabalho que vale mais a pena só cadastrar corretamente, se você tá com o problema já marquei a resposta ali, de qual era o cadastro errado.

Caso precise de ajuda em algo especifico é só chamar também!

---
