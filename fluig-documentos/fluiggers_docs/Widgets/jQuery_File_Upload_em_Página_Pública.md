# jQuery File Upload em Página Pública

> **Fonte:** [https://fluiggers.com.br/t/jquery-file-upload-em-pagina-publica/2460](https://fluiggers.com.br/t/jquery-file-upload-em-pagina-publica/2460)
> **Categoria:** Widgets
> **Tags:** `fluigapi`
> **Criado em:** 22/12/2023, 15:34
> **Visualizações:** 197 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 22/12/2023, 15:35

Pessoal, tenho duas situações.
Em uma página privada, estou executando o jQuery file upload e atraves da api estou criando o arquivos sem nenhum erro. Essa execução do file upload utiliza o oauth para autenticar, só que quando executo essa mesma função em uma página pública, o file upload nem mesmo é chamado.

Verificando o navegador após a chamada na página privada, o retorno é mostrando assim

![image](https://fluiggers.com.br/uploads/default/original/2X/0/01ecf12eac2f6d94158dc2730735345ac9cff401.png)

Já verificando o mesmo caminho após a chamada na página pública, o retorno é diferente
![image](https://fluiggers.com.br/uploads/default/original/2X/e/e50563a029007720d4359255b2db9c4e8b2802eb.png)

Minha função.

```auto
function updateFiles(folderID) {
    console.log('folderID: ' + folderID);

    $('#btn_anexos').fileupload({
        dataType: "json",
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                console.log('data.result.files: ' + data.result.files);
                console.log('file.name: ' + file.name);

                var requestData = {
                    "description": file.name,
                    "parentId": folderID,
                    "attachments": [{
                        "fileName": file.name
                    }],
                };

                var oauth = OAuth({
                    consumer: {
                        'key': 'ck_post_token',
                        'secret': 'cs_post_token'
                    },
                    signature_method: 'HMAC-SHA1',
                    hash_function(base_string, key) {
                        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
                    },
                    nonce_length: 6
                });

                var token = {
                    'key': 'xxxxxxxxxxxxxxxxx',
                    'secret': 'xxxxxxxxxxxxxxxx'
                };

                var url = "/api/public/ecm/document/createDocument";

                var request_data = {
                    url: url,
                    method: 'POST',
                    data: requestData
                };

                var headers = oauth.toHeader(oauth.authorize(request_data, token));

                $.ajax({
                    async: true,
                    type: "POST",
                    contentType: "application/json",
                    url: url,
                    data: JSON.stringify(requestData),
                    headers: headers,
                    error: function (data) {
                        toastMsg('', 'Falha ao enviar os arquivos...', 'danger');
                        toastMsg('', 'ERRO -> ' + JSON.stringify(data) + '  ', 'danger');
                    },
                    success: function (data) {
                        toastMsg('', 'Arquivo publicado: ' + file.name + '<br>ID: ' + data.content.id + ' ', 'success');
                    },
                });
            });
        },
    });
}
```

Na página pública, a função chega a ler o log do parametro folderID mas não entra na linha $(‘#btn\_anexos’).fileupload({.

A função simplesmente é ignorada.

Agradeço qualquer ajuda a fim de identificar o problema. Obrigado

---
