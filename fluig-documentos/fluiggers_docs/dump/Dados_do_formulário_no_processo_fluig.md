# Dados do formulário no processo fluig

> **Fonte:** [https://fluiggers.com.br/t/dados-do-formulario-no-processo-fluig/2207](https://fluiggers.com.br/t/dados-do-formulario-no-processo-fluig/2207)
> **Categoria:** Formulários
> **Criado em:** 14/09/2023, 14:58
> **Visualizações:** 357 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Bueno** (@Bueno) — 14/09/2023, 14:58

Ola, tenho uma pagina publica que starta um processo no fluig, preparei um formulario dentro do processo com os mesmos campos do formulario, porem ele starta o processo vazio, nao envia os dados alguem pra ajudar

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 15/09/2023, 13:42

Boa tarde!
Você pode passar os campos para o dataset que starta o processo via constraint:

```auto
if (cst.fieldName == "camposJson") {
          data = JSON.parse(cst.initialValue);
    }
```

E adicionar da seguinte maneira:

```auto
// Campos
    for (var item in data) {
      var kVDto = serviceManager.instantiate(
        "com.totvs.technology.ecm.workflow.ws.KeyValueDto"
      );
      kVDto.setKey(item); //Campo
      kVDto.setValue(String(data[item])); //Valor do Campo
      cardData.getItem().add(kVDto);
    }
```

Depois, basta passar o ***cardData*** como **parâmetro** na chamada do método do startProcess.

---

## Resposta #2

**Bueno** (@Bueno) — 15/09/2023, 14:05

Obrigado, vou testar aqui

---

## Resposta #3

**Bueno** (@Bueno) — 19/09/2023, 13:15

Estou fazendo o start por uma requisição ajax
var request\_data = {
url: WCMAPI.serverURL + “/process-management/api/v2/processes/processo\_solicitacoes\_ti/start”,
method: “POST”,
data: JSON.stringify(itens)
};

```
$.ajax({
		url: request_data.url,
		contentType: 'application/json',
		crossDomain: true,
		async: false,
		type: request_data.method,
		headers: oauth.toHeader(oauth.authorize(request_data, token)),
		data: request_data.itens,
	}).fail(function(e, f) {
		console.log("e:", e);
		console.log("f:", f);
		$("#retorno").val(JSON.stringify(e));
	}).done(function(itens) {
		FLUIGC.toast({
			message: 'Sucesso: solicitação inicializada com sucesso! ',
			type: 'success'
		});
		console.log("data:", itens);
		$("#retorno").val(JSON.stringify(itens));
	});
```

ele faz o start normal do processo porem os dados não sao carregados no processo, pode me ajudar?

---
