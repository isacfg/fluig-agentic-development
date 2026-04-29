# Como iniciar um processo através de outro processo

> **Fonte:** [https://fluiggers.com.br/t/como-iniciar-um-processo-atraves-de-outro-processo/1227](https://fluiggers.com.br/t/como-iniciar-um-processo-atraves-de-outro-processo/1227)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 12/08/2022, 17:33
> **Visualizações:** 599 | **Likes:** 3 | **Respostas:** 1

---

## Pergunta original

**Delcleciano Junior** (@Delcleciano) — 12/08/2022, 17:33

Boa Tarde pessoal,

Gostaria de saber como eu faço pra iniciar um processo através de outro processo, existe alguma api, requisição ajax ? Ou isso teria que ser feito através de alguma tarefa de serviço? Teriam algum exemplo de como fazer pra iniciar um processo a partir de um outro, se alguém puder me ajudar estou perdido.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 12/08/2022, 18:16 | ❤️ 1

Aqui neste link [hAPI - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/hAPI) tem um exemplo de como utilizar o startProcess que é um método utilizado para iniciar um processo através de eventos de processos.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Guilherme Beranger** (@Guilherme_Beranger) — 26/08/2022, 17:25 | ❤️ 1

Segue Mano:
utilizando a API que o brother comentou a StartProcess

`https://{HOSTDAEMPRESA}/process-management/api/v2/processes/${processo}/start`

```auto
JAVASCRIPT PURÃO

const request = require('request')

url = 'https://myhost.com.br'

oauth = {
    consumer_key: '....',
    consumer_secret: '....',
    token: '....',
    token_secret: '...',
    signature_method : 'HMAC-SHA1',

};

data = {

}

request.post({url:url, oauth:oauth, json:true , body:data}, function (e, r, product) {
 console.log(product)
})
```

---

## Resposta #3

**Delcleciano Junior** (@Delcleciano) — 06/09/2022, 11:44 | ❤️ 1

Valeu mano, desculpa pela demora, acabei começando um outro processo.

---
