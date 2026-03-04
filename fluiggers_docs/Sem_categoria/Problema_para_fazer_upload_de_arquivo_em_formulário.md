# Problema para fazer upload de arquivo em formulário

> **Fonte:** [https://fluiggers.com.br/t/problema-para-fazer-upload-de-arquivo-em-formulario/1612](https://fluiggers.com.br/t/problema-para-fazer-upload-de-arquivo-em-formulario/1612)
> **Categoria:** Sem categoria
> **Criado em:** 30/01/2023, 14:27
> **Visualizações:** 352 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 30/01/2023, 14:27

boa tarde pessoal, preciso de um apoio. Tenho uma função, que a intenção seria fazer o upload de um arquivo, inserido pelo usuário em um campo do tipo file, estou com a função abaixo, porém, ela esta retornando erro, caindo na mensagem de falha 2, alguem pode me ajudar a entender o motivo da falha?

```javascript
const enviarAnexo = function (parentId, fileName, blob, callback) {

	console.log('Pasta no ged '+parentId);
	console.log('Nome do arquivo '+fileName);

    $.ajax({
        async: false,
        type: "POST",
        url: '/api/public/2.0/contentfiles/upload/?fileName=' + fileName,
        cache: false,
        contentType: 'application/octet-stream',
        processData: false,
        data: blob,

        error: function () {
            FLUIGC.toast({
                title: '',
                message: "Falha 1",
                type: 'danger'
            });
        },

        success: function (data) {
            const today = new Date();
            today.setDate(today.getDate() + 1);

            $.ajax({
                async: false,
                type: "POST",
                contentType: "application/json",
                url: '/api/public/ecm/document/createDocument',

                data: JSON.stringify({
                    "description": fileName,
                    "parentId": parentId,
                    "expirationDate": today.toISOString().split('T')[0],
                    "attachments": [{
                        "fileName": fileName
                    }],


                }),


                error: function () {

                	console.log('#####################falha ao gravar o arquivo '+data);
                    FLUIGC.toast({
                        title: '',
                        message: "Falha 2",
                        type: 'danger'
                    });
                },

                success: function (data) {
                    callback(data);
                },
            });
        },
    });
};
```

---
