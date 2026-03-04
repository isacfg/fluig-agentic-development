# Link anexo processo no e-mail

> **Fonte:** [https://fluiggers.com.br/t/link-anexo-processo-no-e-mail/340](https://fluiggers.com.br/t/link-anexo-processo-no-e-mail/340)
> **Categoria:** BPM
> **Criado em:** 09/04/2021, 16:16
> **Visualizações:** 1586 | **Likes:** 9 | **Respostas:** 6

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 09/04/2021, 16:16

Boa tarde.

Tenho um processo que customizei o envio do e-mail.
Preciso agora adicionar neste e-mail o link dos anexos do processo.

Pensei em salvar os anexos no GED e depois pegar o link de cada um deles.

Alguém sabe se é possível?

At.
Rodrigo de Oliveira

---

## Resposta #1

**Lucas de Castro** (@Lucas_de_Castro) — 10/04/2021, 15:23

Boa tarde

É possível sim, vc pode recuperar a url do Documento através da api downloadURL e adicionar essa url no seu email customizado.

[https://api.fluig.com/old/resource\_DocumentServiceRest.html](https://api.fluig.com/old/resource_DocumentServiceRest.html)

Att;

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 12/04/2021, 11:55 | ❤️ 5

Como a customização ocorre no back-end você pode facilitar um pouco usando a **fluigAPI**.

```javascript
var documentId = 3432; // ID do documento
var documentService = fluigAPI.getDocumentService();
var urlToDownload = documentService.getDownloadURL(documentId);
```

Em uma widget eu precisei listar os anexos de cada processo, então criei um dataset pra isso. Você pode se basear no código pra pegar as URLs dos anexos.

Aí só precisa montar um jeito de inserir os links no seu template de e-mail.

[gist.github.com](https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49)

#### [https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49](https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49)

##### ds\_process\_attachments\_files.js

```JavaScript
/**
 * Pega os documentos anexos a um processo
 *
 * Deve informar o processId na Constraint (e só ele será usado para filtrar dados).
 *
 * @param {string[]} fields
 * @param {Constraint[]} constraints
 * @param {string[]} sortFields
 */
function createDataset(fields, constraints, sortFields) {
```
This file has been truncated. [show original](https://gist.github.com/brunogasparetto/8bca2a174cb6f0de21b2931562599f49)

---

## Resposta #3

**Rodrigo de Oliveira** (@redschenko) — 12/04/2021, 16:13

Obrigado pela resposta [@Bruno\_Gasparetto](/u/bruno_gasparetto) e [@Lucas\_de\_Castro](/u/lucas_de_castro)
Vou testar e posto aqui se solucionou.

---

## Resposta #4

**Rodrigo de Oliveira** (@redschenko) — 11/05/2021, 12:22

[@Bruno\_Gasparetto](/u/bruno_gasparetto) é possível pegar a url do link externo?

![Screenshot_57](https://fluiggers.com.br/uploads/default/original/1X/fe9ec005a9061f0c6dc39c32a80de01ae96d2332.png)

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/05/2021, 12:38

[@redschenko](/u/redschenko) , não consigo te confirmar. Meu Fluig só exibe o “Compartilhar” e “Copiar Link”, não tem a opção “Copiar link externo”, então nem sei como é essa URL.

---

## Resposta #6

**Rodrigo de Oliveira** (@redschenko) — 11/05/2021, 14:00

[@Bruno\_Gasparetto](/u/bruno_gasparetto)

Para aparecer, é necessário habilitar a opção “***Compartilhar externamente***?” nas propriedades do documento, aba Segurança, conforme imagem.

![image](https://fluiggers.com.br/uploads/default/original/1X/4273f84652f9cca6b2b72d43bb50e22b9b2415ac.png)

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 11/05/2021, 15:29 | ❤️ 1

[@redschenko](/u/redschenko), testei aqui.

A URL utilizando `fluigAPI.getDocumentService().getDownloadURL(documentId);` é um pouco diferente, mas ambos entregaram o mesmo arquivo pdf (no meu caso) e sem precisar marcar a opção de compartilhamento externo.

Mas não sei se tem como pegar essa URL de compartilhamento externo. Quando precisei eu só achei essa URL do download.

---

## Resposta #8

**Rodrigo de Oliveira** (@redschenko) — 13/05/2021, 17:08 | ❤️ 2

[@Bruno\_Gasparetto](/u/bruno_gasparetto)
Eu preciso enviar estes arquivos no e-mail para fora da empresa.
O destinatário não tem conta no fluig da empresa. Por isso pensei desta forma, deixando o documento público.
Pesquisei aqui e encontrei uma API {url\_fluig}/document/api/v1/documents/{NUMERO\_DO\_DOCUMENTO}?expand=publicUrl

Nunca mexi com API, mas acredito que eu deva criar um serviço REST, utilizar o getAuthorizeClientService e tratar o endpoint e o método nele
Vou testar isso e depois compartilho o resultado.

Obrigado pela atenção.

At
Rodrigo de Oliveira.

---

## Resposta #9

**Wasley Santos** (@Wasley_Santos) — 13/05/2021, 20:41

É possível também publicar esse documento no GED automaticamente com essa flag marcada através da propriedade do documento setPublicDocument(true) e criando uma nova instância com o docAPI

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/05/2021, 09:58 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/redschenko/48/95_2.png) redschenko:
>
> > Eu preciso enviar estes arquivos no e-mail para fora da empresa.

O link de download criado do jeito que mostrei não exige login pra baixar o arquivo. Isso eu já tinha testado usando uma aba anônima e garantindo que não estava logado. E os arquivos não foram marcados para permitir acesso público.

Eu até achei uma falha de segurança, mas como eu criei o link justamente pra permitir que qualquer um baixasse deixei assim mesmo.

---

## Resposta #11

**system** (@system) — 22/06/2021, 16:49

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
