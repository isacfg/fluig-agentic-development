# Lidar com várias Promises ao mesmo tempo em acesso externo

> **Fonte:** [https://fluiggers.com.br/t/lidar-com-varias-promises-ao-mesmo-tempo-em-acesso-externo/2416](https://fluiggers.com.br/t/lidar-com-varias-promises-ao-mesmo-tempo-em-acesso-externo/2416)
> **Categoria:** Widgets
> **Criado em:** 11/12/2023, 11:28
> **Visualizações:** 171 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 11/12/2023, 11:28

Olá pessoal, estou com um caso de intranet para acesso a widgets que usam datasets de forma anônima, eu consigo fazer as widgets se comunicarem utilizando uma biblioteca oauth, elas funcionam ao acessar a página pública, porém ao utilizar 5 widgets (ou mais de uma) é recorrente um erro de não resolução das promises feitas dentro do código, a função que busca o dataset é async então creio que ao fazer varias promises ele está se perdendo ao resolver, alguém ja passou por isso? o erro no console é esse

```auto
Uncaught (in promise) Error
    at Object.consultarDataset (lista_sistemas_pt_BR.js?v=1.8.1-230718:49:19)
/api/public/ecm/dataset/datasets/:1


       Failed to load resource: the server responded with a status of 500 (Internal Server Error)
graphic_pt_BR.js?v=1.8.1-230718:122 Uncaught (in promise) Error
    at Object.consultarDataset (graphic_pt_BR.js?v=1.8.1-230718:122:19)
```

para a widget consultar é realizado dessa maneira

```auto
this.consultarDataset("dataSet", null, null, null).then((ds) => {
//lógica da widget ao consultar
}
```

o método de consultar dataset

```auto
async consultarDataset(name, fields, constraints, order) {
        const url = "/api/public/ecm/dataset/datasets/";
        const method = "POST";
        const body = JSON.stringify({ name, fields, constraints, order });

        const headers = new Headers(this.getOAuthHeaders({ url, method }));
        headers.set("Content-Type", "Application/JSON");

        const response = await fetch(url, {
            method,
            body,
            headers
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        const data = await response.json();
        return data.content;
    },

    getOAuthHeaders({ url, method }) {
        const userCredentials = {
            consumer: {
                key: "consumerKey",
                secret: "segredo"
            },
            signature_method: "PLAINTEXT"
        };

        const token = {
            key: "keySecreta",
            secret: "segredoToken"
        };

        const oauth = OAuth(userCredentials);
        return oauth.toHeader(oauth.authorize({ url, method }, token));
    }
```

Ao usar uma widget só na publica, ela carrega normalmente, porém ao usar mais de uma eventualmente ele se perde, é de forma aleatória, existe algo que eu possa fazer em JS no layout para não mexer em todas widgets que estarão na página?

---
