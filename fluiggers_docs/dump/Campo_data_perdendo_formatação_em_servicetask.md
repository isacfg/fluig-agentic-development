# Campo data perdendo formatação em servicetask

> **Fonte:** [https://fluiggers.com.br/t/campo-data-perdendo-formatacao-em-servicetask/2441](https://fluiggers.com.br/t/campo-data-perdendo-formatacao-em-servicetask/2441)
> **Categoria:** Sem categoria
> **Criado em:** 15/12/2023, 08:35
> **Visualizações:** 249 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Bueno** (@Bueno) — 15/12/2023, 08:35

durante o processo as datas estao sendo formatadas por
var de = form.getValue(‘de’);
var ate = form.getValue(‘ate’);
dataini = new Date(de);
datainiFormatada = dataini.toLocaleDateString(‘pt-BR’, {
timeZone: ‘UTC’
});
datafim = new Date(ate);
datafimFormatada = datafim.toLocaleDateString(‘pt-BR’, {
timeZone: ‘UTC’
});
form.setValue(‘de’, datainiFormatada);
form.setValue(‘ate’, datafimFormatada);
}

funcionando ok, porem na servicetask para enviar email ele perde a formatação e envia a data no formato yyyy-mm-dd
var de = hAPI.getCardValue(“de”);
**2023-12-15**
help!

---

## Resposta #1

**Gustavo Lima ** (@gstavomota) — 19/12/2023, 10:06 | ❤️ 1

Melhor tentar outra maneira de exibir a data, ao invés de tratar ela por que não salvar o campo com a data no estilo pt-br?
Fazer algo desse tipo:

formataData(“#dtEmissao”);
function formataData(elemento) {
var data = $(elemento).val();
ano = data.substring(0, 4);
mes = data.substring(4, 6);
dia = data.substring(6, 8)
$(elemento).val(dia + “/” + mes + “/” + ano);
}

Dessa forma, ao enviar o e-mail os campos estarão corretos

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/12/2023, 10:20

Fluig é meio estranho.

Tenho um campo com o nome “data\_solicitacao” e salvo ela no formato pt-BR. Mas de vez em quando aparece a data no formato ISO. Em nenhum lugar coloco no formato ISO e mesmo assim salva.

Assim como tenho um processo no qual eu salvo o ID da solicitação no formulário, no evento afterProcessCreate, e de vez em quando esse campo fica vazio.

Mistérios que nunca resolvi, hehehe.

Já que tá usando em uma atividade serviço dá pra usar as classes Java pra fazer a formatação e garantir que fique mais estável.

```javascript
var parseFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
var formatter = new java.text.SimpleDateFormat("dd/MM/yyyy");

var data = parseFormat.parse("2023-12-04");
var dataFormatada = formatter.format(data); // 04/12/2023
```

---

## Resposta #3

**Bueno** (@Bueno) — 21/12/2023, 07:38

Muito obrigado bruno pela atenção

---
