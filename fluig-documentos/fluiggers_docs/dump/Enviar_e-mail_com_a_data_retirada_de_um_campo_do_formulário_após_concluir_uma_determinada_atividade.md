# Enviar e-mail com a data retirada de um campo do formulário após concluir uma determinada atividade

> **Fonte:** [https://fluiggers.com.br/t/enviar-e-mail-com-a-data-retirada-de-um-campo-do-formulario-apos-concluir-uma-determinada-atividade/712](https://fluiggers.com.br/t/enviar-e-mail-com-a-data-retirada-de-um-campo-do-formulario-apos-concluir-uma-determinada-atividade/712)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 12/10/2021, 08:39
> **Visualizações:** 819 | **Likes:** 4 | **Respostas:** 5

---

## Pergunta original

**Ulises Magario** (@Agustin_Welschen) — 12/10/2021, 08:39

Olá, bom dia, gostaria de enviar um e-mail em determinada atividade na data indicada em um campo do formulário. Como posso fazer isso, algum exemplo? Obrigado

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Mauricio Freitas** (@mauriciolanner) — 13/10/2021, 13:50 | ❤️ 2

Crie um script evento workflow, eu costumo usar o beforeTaskSave, mas voc~e pode inclusive fazer um totalmente personalizado. Use o seguinte código pra enviar o email:

```auto
var cTextoEmail = "";
	var obj = new com.fluig.foundation.mail.service.EMailServiceBean();

    var cEmailSolicitante = getEmail(hAPI.getCardValue("campoEmail")); //traz o email de um campo

	if (cEmailRH_GPO != "") {
		cTextoEmail = FuncaoQueCriaOEmailApartirDeUmHTML(); //criar essa função

		var cDesc ="Assunto do Email" ;// texto do assunto do email
		try {
			obj.simpleEmail(1, "Notificação Fluig: Envio De Email #" + cDesc,
					"nao-responder@servidor.com.br", cEmailRH_GPO, cTextoEmail, "text/html");
			obj.simpleEmail(1, "Notificação Fluig: Envio De Email #" + cDesc,
					"nao-responder@servidor.com.br", cEmailSolicitante, cTextoEmail, "text/html");

		} catch (erro) {
			throw erro;
		}
	}
```

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 13/10/2021, 13:57 | ❤️ 1

Cara, desculpa, agora que percebi que na verdade você quer enviar esse email a partir de uma determinada data. Tem um jeito de fazer que é criar um Dataset e usar o codigo que coloquei acima no dataset. Use o agendador de tarefas para disparar o dataset a partir de uma data programada. Não sei se dá pra enviar uma data especifica a essa tarefa de fora, talvez a partir de uma API do Fluig, preciso pesquisar esse assunto.

---

## Resposta #3

**Ulises Magario** (@Agustin_Welschen) — 14/10/2021, 10:57 | ❤️ 1

Muito obrigado pela ajuda que você me deu, me ajudou muito a localizar e entender

---

## Resposta #4

**Victor Castro** (@victorcastro) — 20/10/2021, 08:45

Seguindo a linha de raciocínio que o [@mauriciolanner](/u/mauriciolanner) citou, daria pra criar um Dataset que executa todos os dias, percorrendo todas as solicitações abertas procurando o campo da data. Se a data do formulário for hoje, envia o email.

Ou então se o processo não tiver nenhuma atividade depois disso, poderia criar uma atividade do tipo **Condicional** (![image](https://fluiggers.com.br/uploads/default/original/1X/a954af834ada830fc4b95c53e7badcf744a04953.png)) direto no workflow, onde ela vai executar uma vez por dia, verificando se chegou na data de enviar o email.

---

## Resposta #5

**Ulises Magario** (@Agustin_Welschen) — 20/10/2021, 09:09

Ola bom dia, obrigado por responder. Eu não entendo como fazer isso com o condicional

---

## Resposta #6

**Victor Castro** (@victorcastro) — 25/10/2021, 17:21

Condicional é uma atividade que executa periodicamente conforme configurado.

Não sei especificamente como você vai fazer pra enviar o email, mas é uma forma de você verificar se está no dia do seu formulário.

Por exemplo, tenho um processo que o usuário cadastra um contrato, e esse contrato precisa ser faturado todo dia X. Ele coloca uma data inicial, a periodicidade (a cada 20 dias, por exemplo) e todo dia 6h da manhã a solicitação verifica se está no dia de enviar os itens do contrato para faturamento.
![image](https://fluiggers.com.br/uploads/default/original/1X/aea69fa356a72009093f3c7ccfd0cbd457bc2139.png)

```javascript
function intermediateconditionalXXX() {
   //coloca a regra que verifica se hoje é igual ao dia que está no campo X.
   //se for, desenvolve a regra de enviar o email
   // se não for, dá um "return false;"
}
```

---
