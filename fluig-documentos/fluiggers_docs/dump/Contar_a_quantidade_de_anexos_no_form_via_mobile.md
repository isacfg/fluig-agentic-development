# Contar a quantidade de anexos no form via mobile

> **Fonte:** [https://fluiggers.com.br/t/contar-a-quantidade-de-anexos-no-form-via-mobile/217](https://fluiggers.com.br/t/contar-a-quantidade-de-anexos-no-form-via-mobile/217)
> **Categoria:** Mobile
> **Tags:** `form`, `mobile`, `app`, `anexo`
> **Criado em:** 25/03/2021, 08:51
> **Visualizações:** 1380 | **Likes:** 3 | **Respostas:** 4

---

## Pergunta original

**Victor Castro** (@victorcastro) — 25/03/2021, 08:51 | ❤️ 1

Alguém sabe como contar a quantidade de anexos sem ser via evento de formulário? Preciso testar no **beforeSendValidate**.

Isso aqui funciona normalmente via browser. Mas no app não.

```javascript
function contaAnexos(){
	var qtdAnexos = 0;
	$.each(parent.ECM.attachmentTable.getData(), function(i,attachment) {
		qtdAnexos++;
	});

	return qtdAnexos;
}
```

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 25/03/2021, 16:19

Victor,
Se você consegui colocar dentro do evento pode usar o hAPI.
A função retorna o numero de anexos:

```auto
hAPI.listAttachments().size();
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 25/03/2021, 16:30

Obrigado pela resposta, [@romuloccomp](/u/romuloccomp).

Não poderia fazer essa checagem em um evento porque, dependendo da resposta, eu abro uma janela pra interação com o usuário.

Mas, a princípio, não teve jeito. Vou deixar abaixo a solução que eu encontrei pra contornar esse problema, caso alguém precise seguir a mesma linha de raciocínio.

Criei a função “getMobile()” no displayFields pra poder ser acessada no front.

```javascript
function displayFields(form,customHTML){
	customHTML.append("<script>");
	customHTML.append("		function getMobile(){return " + form.getMobile() + "};");
	customHTML.append("</script>");
}
```

E no **beforeSendValidate** eu testo se o usuário abriu o formulário pelo app ou pelo browser (getMobile() vai retornar **true** se o usuário estiver pelo app).

Se ele estiver via browser, eu chamo a função **contaAnexos()**, que funciona normalmente (e assim, crio o modal de interação com o usuário).

Se estiver via app, eu pulei essa checagem. Então no evento **beforeStateEntry** eu testo usando o **hAPI.listAttachments()**: se tiver anexado continua o fluxo normalmente. Se não tiver anexado, vai pra atividade X cobrando o anexo (e aí ele acessa essa atividade depois, quando tiver pelo computador).

Pra contextualizar, quando o usuário estiver pelo aplicativo é porque geralmente ele está em campo, e na maioria das vezes não é possível anexar o formulário assinado.

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 26/03/2021, 08:22 | ❤️ 1

Uma ‘alternativa’ #gambiarra poderia ser contar os anexos num evento do backend e gravar em campo oculto pra que o mobile possa trabalhar. Que acha?

---

## Resposta #4

**Victor Castro** (@victorcastro) — 26/03/2021, 08:41

O que eu tive que fazer, na prática, foi quase isso. Eu só não gravei em um campo, porque eu precisaria usar essa informação somente uma vez.

Mas me deram uma sugestão interessante aqui em off (não sei o user do cara): a cada anexo inserido, incrementar uma variável e salvar essa informação em um campo pra poder testar no form. Funcionaria também (só não sei como testar quando um anexo tiver sido incluído/excluído :joy:)

---

## Resposta #5

**Emerson Rodrigues** (@Emerson_Rodrigues) — 06/01/2022, 17:15 | ❤️ 1

Tive que fazer exatamente isso…

---
