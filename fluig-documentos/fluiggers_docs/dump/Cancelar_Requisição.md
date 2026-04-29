# Cancelar Requisição

> **Fonte:** [https://fluiggers.com.br/t/cancelar-requisicao/487](https://fluiggers.com.br/t/cancelar-requisicao/487)
> **Categoria:** BPM
> **Criado em:** 01/06/2021, 15:21
> **Visualizações:** 981 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Vladimir Banow Jr.** (@Vladimir) — 01/06/2021, 15:21

Boas Pessoal. Estou com um problema para realizar cancelamento de uma requisição durante o processo/fluxo.
Tentei a função a seguir, porém, apresenta erro.

> Ops! Aconteceu um erro inesperado. Entre em contato com o administrador.
> <
> 1.7.1-210505

Alguém já fez algo parecido e poderia auxiliar, por favor?

```
function cancelProcess(cb) {
var processo = Number($('input[name="id_processo"]').val());

var usuario = $('input[name="nomereq"]').val();
var usuario2 = $('input[name="chapareq"]').val();
var matricreq = $('input[name="matreq"]').val();

var options = {
				url: 'api/public/2.0/workflows/cancelInstance',
				contentType: 'application/json',
				dataType: 'json',
				type: 'POST',
				data: {
						"processInstanceId": processo,
						"replacedId" : matricreq,
						"cancelText" : "Requisição reprovada por: " ,
					},
				loading: true
			};

FLUIGC.ajax(options, cb);
```

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 01/06/2021, 16:03 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vladimir/48/234_2.png) Vladimir:
>
> > `matricreq`

Vladimir, qual é a mensagem que aparece no log do Fluig (no servidor)?

---

## Resposta #2

**Vladimir Banow Jr.** (@Vladimir) — 01/06/2021, 16:33

Romulo, anexei um TXT com o trecho do log.
[log\_FLUIG.txt](https://fluiggers.com.br/uploads/short-url/3h3KTYWAwhPZDnhWpCkpMOSGDos.txt) (36,3,KB)

---

## Resposta #3

**Romulo Pereira** (@romuloccomp) — 01/06/2021, 17:00

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/vladimir/48/234_2.png) Vladimir:
>
> > `url: 'api/public/2.0/workflows/cancelInstance'`

Pelo log está que não encontrou o recursos.
Eu tentaria colocar o caminho completo na URL ao invés do caminho relativo:

```javascript
url: 'http://URL-FLUIG:PORTA/api/public/2.0/workflows/cancelInstance'
```

Se der certo tentaria apenas url: ‘/api/public/2.0/workflows/cancelInstance’

---
