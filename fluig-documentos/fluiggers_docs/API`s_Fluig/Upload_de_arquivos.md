# Upload de arquivos

> **Fonte:** [https://fluiggers.com.br/t/upload-de-arquivos/1580](https://fluiggers.com.br/t/upload-de-arquivos/1580)
> **Categoria:** API`s Fluig
> **Tags:** `upload`
> **Criado em:** 17/01/2023, 15:57
> **Visualizações:** 1328 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Marllon Macedo** (@marllon.sousa) — 17/01/2023, 15:57

Olá,boa tarde.
Estou tentando alguma forma de realizar upload de arquivos externos a plataforma para o GED.
Em alguns testes via Insomnia, consigo realizar o envio e publicar.
Estou utilizando duas rotas para realizar o upload:

1.  url/ecm/upload → nesse link, envio um multipart form com o arquivo
2.  url/api/public/ecm/document/createDocument → nesse link, encontro o arquivo enviado anteriormente, e publico direcionando-o para uma pasta atraves do json passado pelo body.
    Exemplo: {
    “description” : “Arquivo de upload”,
    “parentId” : pasta\_id,
    “attachments” : \[{“fileName”: “arquivo”}\]
    }

Porém estou encontrando dificuldades em construir um codigo para isso, estou tentando via node e jquery.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 19/01/2023, 08:05 | ❤️ 1

Bom dia sim e possível no git do fluig tem um exemplo que funciona.
[https://git.fluig.com/projects/SAMPLES/repos/widgets/browse](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse)

Qualquer coisa é so me falar.

---

## Resposta #2

**Marllon Macedo** (@marllon.sousa) — 24/01/2023, 14:48

Olá, Daniel
Esse exemplo utiliza uma widget que já esta logada na plataforma, e apenas publica o documento.
Estou tentando enviar um arquivo e depois publica-lo, vindo de uma pagina totalmente externa.
A parte da autenticação oauth está ok.
Consigo publicar também.
O problema é na hora de mandar o arquivo em si pela rota /ecm/upload.
Que agora deu pra recusar post, e passou a considerar como get.
Via insomnia, tudo funciona.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 24/01/2023, 14:49 | ❤️ 1

Esse é externo.
Posso verificar mas eu uso aqui ele so se eu editei o meu.

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 24/01/2023, 15:25

```javascript
config : {
		consumerPublic: "teste",
		consumerSecret: "sogeloteste",
		tokenPublic: 	"7595daf8c012",
		tokenSecret: 	"496b-ae9d-91af7c4250a9",
		url: 			"https://meufluig.fluig.com"
	},
```

Veja se tem esse cara no seu fonte ele se refere a autenticação do fluig

---

## Resposta #5

**Marllon Macedo** (@marllon.sousa) — 24/01/2023, 16:41

Sim, meu codigo já está autenticado.
Porem, esse da widget não. Porque está vinculada a plataforma.

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 24/01/2023, 18:03

Muito estranho uso em uma pagina publica aqui e é nessa linha que passo a autenticação

---

## Resposta #7

**Afonso Uliana Neto** (@Afonso) — 23/04/2023, 23:14 | ❤️ 1

[@marllon.sousa](/u/marllon.sousa) para publicar arquivos no fluig de uma pagina publica voce vai ter que utilizar o oauth, para isso voce tem que acessar o painel de controle do Fluig, esta configuração vai gerar um um key e o secret conforme exemplo abaixo.

![image](https://fluiggers.com.br/uploads/default/original/1X/fe727e0d799488b49cfb30022043b38ec8cd069d.png)

```auto
function fnIniciaVariaveis(){

	oauth = OAuth({
		consumer: {
	        key: 'ConsumerKey',
	        secret: 'ConsumerSecret'
		},
		signature_method: 'HMAC-SHA1',
		hash_function: function(base_string, key) {
			return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
		},
		nonce_length: 6
	});

	token = {
		key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		secret: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
	};
}

function fnPublicaGedDocumento(file, numPastaPublicar, tipoPublicacao){

	var request_data = {
        url: WCMAPI.getServerURL() + '/api/public/ecm/document/createDocument',
        method: 'POST'
    };

	$.ajax({
		url: request_data.url,
	    async: false,
	    type: request_data.method,
		contentType: "application/json",
		data: JSON.stringify({
			"description": file.name,
			"parentId": numPastaPublicar,
			"downloadEnabled": true,
			"attachments": [{
				"fileName": file.name
			}],
		}),
		headers: oauth.toHeader(oauth.authorize(request_data, token)),
		error: function(erro) {
			FLUIGC.toast({
				title: '',
				message: "Falha ao enviar",
				type: 'danger'
			});
		},
		success: function(data){

		},
	});
}
```

---
