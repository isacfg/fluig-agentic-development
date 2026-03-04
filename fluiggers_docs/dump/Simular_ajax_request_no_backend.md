# Simular ajax request no backend

> **Fonte:** [https://fluiggers.com.br/t/simular-ajax-request-no-backend/1544](https://fluiggers.com.br/t/simular-ajax-request-no-backend/1544)
> **Categoria:** BPM
> **Criado em:** 14/12/2022, 17:00
> **Visualizações:** 501 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 14/12/2022, 17:00

Tenho uma requisição ajax que envia um arquivo via inputform no front end via ajax.
Preciso transferir essa requisição para o server side e não sei como faço.
Alguem ja chamou uma api no backend e enviou um arquivo para ela?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/12/2022, 19:56

Tenho um sistema que solicita um Chunked POST e pelo exemplo dele fizemos esse código [Fluig: enviar um documento do GED para um WS externo como chunked post · GitHub](https://gist.github.com/brunogasparetto/cb5350ee3f28c46f3e487fadd6e8adcc)

Não sei se funcionará pro seu caso, mas provavelmente é algo parecido.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 15/12/2022, 10:24

Bom dia Bruno,
Seu codigo vai ajudar bastante

```auto
var form = new FormData();
        var fileSign = $('#fileSignture')
	var num = nextState == 190 ? '0' : '1'

    form.append("File", fileSign[0].files[0], num +' '+ fileSign[0].files[0].name);
    var settings = {
	  "async": false,
      "url": "https://api.na4.echosign.com/api/rest/v6/transientDocuments",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer 3AAA"
      },
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };
```

É isso que eu preciso.
A duvida é como converter esse json no seu exemplo. Se puder ajudar eu agradeço muito.

---
