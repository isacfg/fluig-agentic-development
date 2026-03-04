# API FLUIG - 401 -Unauthorized

> **Fonte:** [https://fluiggers.com.br/t/api-fluig-401-unauthorized/986](https://fluiggers.com.br/t/api-fluig-401-unauthorized/986)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 25/03/2022, 14:47
> **Visualizações:** 1037 | **Likes:** 9 | **Respostas:** 5

---

## Pergunta original

**Guilherme Beranger** (@Guilherme_Beranger) — 25/03/2022, 14:47

Colegas, boa tarde! Estou desenvolvendo uma aplicação que consome uma API fluig, porém, a API\_FLUIG simplesmente começa da retornar 401 - Unauthorized, Mesmo que não tenha nenhuma alteração no meu “OAuth Provider” nem no “OAuth Aplication”, alguém já passou por isso?

---

## Resposta #1

**Marllon Macedo** (@marllon.sousa) — 06/07/2022, 18:19 | ❤️ 1

Cara, to com o mesmo problema. Preciso recuperar as informacoes das tasks, porem faço a requisição externa ao fluig e me retorna 401. No insomnia e a mesma coisa. Ja no postman, usando os mesmos dados, eu consigo requisitar quantas vezes forem precisas com os mesmos tokens. Ate onde entendi, a api so funciona em um contexto autenticado no fluig, e externamente nao funciona (a nao ser o postman).
A gambiarra que estou fazendo pra conseguir o json, e requisitar a url em um processo e salvar direto em um arquivo público nas pastas do ged e apartir desse link do arquivo conseguir acessar. Triste.

---

## Resposta #2

**Guilherme Beranger** (@Guilherme_Beranger) — 06/07/2022, 18:48 | ❤️ 1

Man, eu descobri um jeito de fazer isso, segue abaixo:
Meu backend é em Node.JS então eu faço um request passando o OAuth (sim o primeiro, todo depreciado) se tiver com dúvidas, me chama que agt ajeita o seu tbm kkk vamos ficar de gambiarra não!

---

## Resposta #3

**Guilherme Beranger** (@Guilherme_Beranger) — 06/07/2022, 18:54 | ❤️ 2

Segue código man !
\`

```javascript
/**
*Aqui eu Usei o Request Promisse pq criei uma api em Express!;
*E também meus dados em ENV :)
*/
const rp = require('request-promise-native');
require('dotenv').config();

/**
*O Pulo do Gato aqui é   OAUTH eu passo o objeto o Auth no OPTIONS da minha URL
*Você ja criou o User authentication?? e deixou ele como Usuário aplicativo?
*/
const api = (processo, body, method, oauth) => {

    const CONSUMER_KEY = process.env.CONSUMER_KEY
    const CONSUMER_SECRET = process.env.CONSUMER_SECRET
    const TOKEN = process.env.TOKEN
    const TOKEN_SECRET = process.env.TOKEN_SECRET
    const url = `https://fluig.grupotb.com.br/process-management/api/v2/processes/${processo}/start`
    let options = {
        method: method,
        body: body,
        url: url,
        oauth: oauth = {
            consumer_key: CONSUMER_KEY,
            consumer_secret: CONSUMER_SECRET,
            token: TOKEN,
            token_secret: TOKEN_SECRET,
            signature_method: 'HMAC-SHA1',
        },
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        json: true
    }
    return rp(options)
}
module.exports = api`
```

---

## Resposta #4

**Marllon Macedo** (@marllon.sousa) — 06/07/2022, 19:00

Ai sim!! Mas o meu back aqui ainda e o “padrao de fabrica”. Meu fluig ta na nuvem.
Nao consigo fazer via fetch, ajax etc?

---

## Resposta #5

**Guilherme Beranger** (@Guilherme_Beranger) — 06/07/2022, 19:02 | ❤️ 1

Consegue sim meu Consagrado,
exemplo abaixo

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Guilherme Beranger** (@Guilherme_Beranger) — 06/07/2022, 19:03 | ❤️ 4

JAVASCRIPT PURÃO

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

## Resposta #7

**Marllon Macedo** (@marllon.sousa) — 06/07/2022, 21:08

Tinha entendido errado kk
Pensei que passou o backend do Fluig pra node… viajei
Qual request tá usando? como tô usando direto no js, preciso de um cdn, porém quando declaro ele já da em uso e logo em seguida não reconhece o post como função

---

## Resposta #8

**Guilherme Beranger** (@Guilherme_Beranger) — 06/07/2022, 21:34

Xi parsa agora preciso ver pra entender kk
ou seguinte, me chama no e-mail ou whats que fica mais fácil de falar man.

e-mail: [guilherme.sberanger@gmail.com](mailto:guilherme.sberanger@gmail.com)
whats: 11-952066445

---
