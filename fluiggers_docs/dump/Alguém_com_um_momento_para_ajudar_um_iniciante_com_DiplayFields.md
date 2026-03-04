# Alguém com um momento para ajudar um iniciante com DiplayFields?

> **Fonte:** [https://fluiggers.com.br/t/alguem-com-um-momento-para-ajudar-um-iniciante-com-diplayfields/1027](https://fluiggers.com.br/t/alguem-com-um-momento-para-ajudar-um-iniciante-com-diplayfields/1027)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 14/04/2022, 17:43
> **Visualizações:** 1078 | **Likes:** 4 | **Respostas:** 4

---

## Pergunta original

**Guilherme Carvalho** (@guiza1carvalho) — 14/04/2022, 17:43 | ❤️ 1

Eai galera, iniciei essa semana no desenvolvimento para Fluig e estou com uma dúvida para ocultar um campo em uma atividade específica.

Segue código:

```
<div class="panel panel-primary">
<div class="panel-heading">
	<h3 class="panel-title"><i class="fluigicon fluigicon-import icon-md"></i> Retorno Agência</h3>
</div>

<div class="panel-body">

	<div class="row">
		<div class="form-group col-md-12">
    		<label for="obsAG">Observações</label>
    		<textarea rows="6" name="obsAG" id="obsAG" placeholder="Deixe aqui suas observações, se necessário." class="form-control"></textarea>
		</div>
	</div>
</div>
</div>
```

* * *

Quero ocultar esse campo na primeira atividade do meu processo. Vi sobre o DisplayFields, porém não consegui implementar ele com sucesso. Alguém pode me passar uma explicação de como posso fazer?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/04/2022, 23:50

Primeiro você precisa saber se está na atividade específica usando a função `getValue("WKNumState")`.

Você pode desabilitar um campo usando a função `form.setEnabled`, mas para ocultar você utilizará a função `form.setVisibleById`.

Então você precisa dar um **id** para quem quer ocultar (no seu caso pode ser a div row ou a div form-group). Vamos assumir que vamos ocultar a row inteira e demos o id **observacoesRow** para ela.

```javascript
/**
 * Define os campos que serão ocultados, desabilitados e seus valores iniciais
 *
 * Função executada antes de exibir o formulário.
 *
 * @param {FormController} form
 * @param {customHTML} customHTML
 */
function displayFields(form, customHTML) {
    var indiceAtividadeEspecifica = 5; // Precisa ver no diagrama qual é o ID da atividade
    var activity = parseInt(getValue("WKNumState"));

    if (activity == indiceAtividadeEspecifica) {
        form.setVisibleById("observacoesRow", false);
    }
}
```

---

## Resposta #2

**Guilherme Carvalho** (@guiza1carvalho) — 16/04/2022, 09:00

Primeiro, obrigado pelo retorno.
Vamos lá

Verifiquei a ID da atividade no diagrama e adicionei a ID na div row, ficando dessa maneira:

```
<div class="row" id="observacoesRow">
		<div class="form-group col-md-12">
    		<label for="obsAG">Observações</label>
    		<textarea rows="6" name="obsAG" id="obsAG" placeholder="Deixe aqui suas observações, se necessário." class="form-control"></textarea>
		</div>
	</div>
```

Porém ainda não ocultou o campo, onde poderia estar o erro no meu código?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/04/2022, 17:47

Posta a sua função displayFields.

Você a criou na pasta events do formulário né?

---

## Resposta #4

**Guilherme Carvalho** (@guiza1carvalho) — 18/04/2022, 09:52

![DisplayFields](https://fluiggers.com.br/uploads/default/optimized/1X/f22d526e7c10f23ad3ddccc2cb9ce5d846fe65e8_2_690x201.jpeg)

Segue o DisplayFields, pelo que eu vi alí a pasta events está normal

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/04/2022, 11:00 | ❤️ 2

Como é na Atividade Inicial pode ter uma particularidade que eu resolvi melhorando o IF em alguns processos.

```javascript
if (form.getFormMode() == "ADD" || activity == indiceAtividadeEspecifica)) {
    form.setVisibleById("observacoesRow", false);
}
```

Assim ele oculta pra quando estiver adicionando um novo registro. Já percebi que o formulário tem umas particularidades quando é uma adição.

Normalmente eu mando ocultar todos os itens que tem mudança no tempo e mando exibir somente nas atividades corretas.

---

## Resposta #6

**Guilherme Carvalho** (@guiza1carvalho) — 18/04/2022, 11:30

Bruno, deu certo. Muito obrigado

Tenho mais uma dúvida aqui: Um dos campos que eu ocultei é obrigatório, porém em outra atividade do processo e não deixa eu passar para a próxima. É no DisplayFields que acerto isso também?

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/04/2022, 11:58 | ❤️ 1

A parte de validações a gente faz no validateForm. Nele você pode validar em qual atividade está (igual ao feito na displayFields) pra determinar a obrigatoriedade.

---

## Resposta #8

**Guilherme Carvalho** (@guiza1carvalho) — 18/04/2022, 12:06

Entendi, novamente muito obrigado pela ajuda Bruno

---
