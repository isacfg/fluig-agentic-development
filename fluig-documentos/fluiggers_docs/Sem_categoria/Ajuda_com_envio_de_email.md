# Ajuda com envio de email

> **Fonte:** [https://fluiggers.com.br/t/ajuda-com-envio-de-email/2239](https://fluiggers.com.br/t/ajuda-com-envio-de-email/2239)
> **Categoria:** Sem categoria
> **Criado em:** 29/09/2023, 16:39
> **Visualizações:** 256 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Bueno** (@Bueno) — 29/09/2023, 16:39

boa tarde pessoal, preciso realizar o envio do email no momento que a solicitação fosse iniciada no proprio js
parent.WCMAPI.Create({
url: parent.WCMAPI.serverURL + ‘/process-management/api/v2/processes/processo\_solicitacoes\_ti/start’,
contentType: ‘application/json’,
type: ‘POST’,
data: startRequest,
success: function(data, status, jqXHR) {
FLUIGC.toast({
message: 'Sucesso: solicitação inicializada com sucesso! ',
type: ‘success’
});
var subject = DatasetFactory.createConstraint(‘subject’, ‘Solicitação Iniciada’, ‘Solicitação Iniciada’, ConstraintType.SHOULD);
var body = DatasetFactory.createConstraint(‘body’, ‘Solicitação Iniciada no Fluig’, ‘Solicitação Iniciada no Fluig’, ConstraintType.SHOULD);
var from = DatasetFactory.createConstraint(‘from’,optionValue ,optionValue , ConstraintType.SHOULD);

```
var enviaemail = DatasetFactory.getDataset('ds_send_mail_attachment', null, subject,body,from, null);

			window.location.href = 'https://portalhml.conectagro.agr.br/portal/p/conectagro/pagecentraltask?state=workflow&type=open';
			myLoading2.hide();
			console.log(data.processInstanceId);
		},
```

alguem sabe um metodo valido? tentei esse metodo mas não foi

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 20/10/2023, 09:05

olá

da uma olhada nesse tópico, é o método que eu uso

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/c/51bf81/48.png) [Enviar e-mail personalizado dependendo da decisão do usuario](https://fluiggers.com.br/t/enviar-e-mail-personalizado-dependendo-da-decisao-do-usuario/2125) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Boa tarde! Tenho uma duvida se é possível enviar um e-mail personalizado dependendo da escolha feita pelo usuário no gateway. Já tenho a função de envio personalizado e está rodando tranquilo, só queria saber se seria possível enviar dependendo da escolha do usuário.

---
