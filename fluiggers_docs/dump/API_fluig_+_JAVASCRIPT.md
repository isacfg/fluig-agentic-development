# API fluig + JAVASCRIPT

> **Fonte:** [https://fluiggers.com.br/t/api-fluig-javascript/1007](https://fluiggers.com.br/t/api-fluig-javascript/1007)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`, `app`, `javascript`
> **Criado em:** 05/04/2022, 15:01
> **Visualizações:** 867 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Guilherme Beranger** (@Guilherme_Beranger) — 05/04/2022, 15:01

Olá a todos,
alguem sabe como eu faço para passar os parâmetros OAUTH 1 via javascript? nao consegui encontrar nada em diversas pesquisas para java,

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 05/04/2022, 19:13 | ❤️ 1

Fala aí Guilherme beleza? eu já vi a galera aqui no fórum postando algumas libs js para esta necessidade. Fiz uma pesquisa rápida aqui e encontrei esse link [aqui](https://forum.fluig.com/4354-get-em-ged-fluig-para-url-publica-de-documento), não sei se já passou por ele, mas espero que ajude.

---

## Resposta #2

**Guilherme Beranger** (@Guilherme_Beranger) — 05/04/2022, 23:21 | ❤️ 1

Fala man, tudo belezinha?!
Então, depois de horas (muitas horas mesmo) de pesquisa eu entendi que o OAuth 1 já está muito depreciado e eu estava utilizando uma biblioteca que não comunicaria 100%,
consegui fazer a aplicação, mas tive que recorrer ao Javascript mais “raiz” mesmo,
utilizei o request + axios
no fim deu 100% embora eu não confie muito nessa arquitetura mais antiga, até o momento não perdi desempenho no código.
Obs: Sua resposta me ajudou muito nas pesquisas!

Abaixo vou por como ficou o código no final.
Construi uma API → para comunicar com a aplicação fluig, resultando em não preciso de tantas licenças = Economia

```auto
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
