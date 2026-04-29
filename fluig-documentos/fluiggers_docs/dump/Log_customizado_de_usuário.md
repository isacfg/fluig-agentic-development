# Log customizado de usuário

> **Fonte:** [https://fluiggers.com.br/t/log-customizado-de-usuario/1423](https://fluiggers.com.br/t/log-customizado-de-usuario/1423)
> **Categoria:** ECM / GED
> **Tags:** `bpm`, `ecm`
> **Criado em:** 20/10/2022, 22:51
> **Visualizações:** 440 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Cesar Tomita** (@Cesar_Tomita) — 20/10/2022, 22:51

Olá,

É possível criar algum método para criar um log personalizado de um usuário em especifico ou para todos?

Por exemplo:

O usuário ‘teste123’ criou arquivos no ECM e apagou outros.

Consigo criar um log para que cada vez que ele suba um arquivo, altere ou exclua um documento, seja tudo marcado no log do usuário? Tipo de um teste123.log, com dia/hora e tipo de alteração que o usuário fez?

Obrigado.

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 24/04/2023, 07:37

Bom dia. É possivel sim, voce teria que criar uma tabela no banco de dados e customizar os eventos afterDocumentPublisher e afterDocumentRemove para sempre que um documento dos publicado ou removido criar um registro nesta tabela com o usuario, data e hora.

criando este evento no eclipse ja vem as variaveis abaixo que voce pode estar utilizando.

```auto
function beforeDocumentPublisher() {

	var doc = getValue("WKDocument"); //Objeto do Documento
	var subject = getValue("WKSubject"); //Assunto relacionado ao documento
	var listApprover = getValue("WKListApprover"); //Lista dos Aprovadores do documento
	var listSeg = getValue("WKListSecurity"); //Lista com a segurança do documento
	var listRelated = getValue("WKListRelatedDocument"); //Lista com os documentos relacionados ao documento
	var state = getValue("WKState"); //	Estado da ação: PUBLISH ou MODIFY
	var user = getValue("WKUser"); //Usuário logado
	var company = getValue("WKCompany"); //Código da Empresa
```

---

## Resposta #2

**Cesar Tomita** (@Cesar_Tomita) — 25/04/2023, 07:15

Bom dia, obrigado pelo retorno.

Como posso customizar esses eventos específicos? Existe uma documentação?

---

## Resposta #3

**Afonso Uliana Neto** (@Afonso) — 25/04/2023, 08:46

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/afonso/48/655_2.png) Afonso:
>
> > `beforeDocumentPublisher`

[https://tdn.totvs.com.br/display/public/fluig/Eventos+de+Documentos](https://tdn.totvs.com.br/display/public/fluig/Eventos+de+Documentos)

---
