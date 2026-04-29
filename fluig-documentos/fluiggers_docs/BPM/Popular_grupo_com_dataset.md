# Popular grupo com dataset

> **Fonte:** [https://fluiggers.com.br/t/popular-grupo-com-dataset/464](https://fluiggers.com.br/t/popular-grupo-com-dataset/464)
> **Categoria:** BPM
> **Criado em:** 25/05/2021, 14:48
> **Visualizações:** 372 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 25/05/2021, 14:48

Pessoal boa tarde, é possível popular um grupo com usuários vindo de um dataset?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 26/05/2021, 08:15 | ❤️ 3

### [](#p-1231-span-classresource-methodpostspan-span-classresource-path20groupsaddusersgroupcodepublic20groupsaddusersgroupcodespan-1)POST /2.0/groups/addUsers/{groupCode}

Add list user

Request Parameters

name

type

description

groupCode

path

:

#### [](#p-1231-h-15644-2)15644

Request Body

media type

data type

description

application/json

array of string (JSON)

#### [](#p-1231-request-json-example-3)Request JSON (example):

`[ "adm", "user1" ]`

Response Body

media type

data type

description

application/json

object (JSON)

```
This method just return HTTP 200 status, successful message
 {
 	content: null
 	message: {
 		message: "Usuários adicionados com sucesso ao grupo 99."
 		detail: "Usuários adicionados com sucesso ao grupo 99."
 		type: "INFO"
 	}
 }
```

---

## Resposta #2

**system** (@system) — 28/05/2021, 10:26

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
