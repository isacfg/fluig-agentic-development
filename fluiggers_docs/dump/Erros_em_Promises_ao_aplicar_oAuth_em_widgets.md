# Erros em Promises ao aplicar oAuth em widgets

> **Fonte:** [https://fluiggers.com.br/t/erros-em-promises-ao-aplicar-oauth-em-widgets/2662](https://fluiggers.com.br/t/erros-em-promises-ao-aplicar-oauth-em-widgets/2662)
> **Categoria:** WCM
> **Tags:** `dataset`
> **Criado em:** 22/03/2024, 09:57
> **Visualizações:** 151 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 22/03/2024, 09:57

Olá pessoal, estou com um problema que não estou identificando a razão, tenho duas funções que usam uma biblioteca de oAuth para eu conseguir exibir widgets que usam datasets em páginas publicas… Porém existem vários casos que em algumas widgets carregam e outras não… As que naõ dão aparece isso

```auto
Uncaught (in promise) Error
    at Object.consultarDataset (graphic_planoVendas_pt_BR.js?v=1.8.1-240206:126:13)
```

Como eu consulto é assim

```auto
this.consultarDataset("dataSet", null, null, null).then((ds) => {
//lógica da widget ao consultar
}
```

as funções para trazer a consulta são essas

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

Alguém tem uma luz? acontece que carregam várias e algumas não, mas quase nunca todas.

---

## Resposta #1

**Pablo Valle** (@pablooav) — 22/03/2024, 17:22

Vamos lá, nessa mensagem de erro não da pra identificar muito bem o que está acontecendo, pode ser um erro de sintax no seu código ou a requisição do fetch deu erro e não está bem tratado.
Uma primeira análise que vc pode fazer seguindo a mesma estrutura que vc criou, é conferir no console na aba NETWORK se ao menos houve a requisição POST e por lá você consegue resgatar a mensagem de erro que pode te dar um norte.

Uma maneira que gosto de desenvolver chamadas em páginas publicas utilizando promises é com o async/await acho que o código fica top em questão de organização e bem tratado. Se quiser fazer um teste utilizando meu modelo é desta forma:

```auto
function consultarDataset(datasetName) {
    return new Promise((resolve, reject) => {
      try {
        const url = '/api/public/ecm/dataset/datasets/';
        $.ajax({
          type: 'POST',
          url: url,
          contentType: 'application/json',
          headers: getOAuthHeaders(url,'POST'),
          data: JSON.stringify({
            name: datasetName,
            fields: null,
            constraints: null,
            order: null,
          }),
          success: function (result) {
            const { values } = result.content
            if(!values) return reject('Dataset não retornou nada.') //Caso não retorne nada, irá retornar um reject com a mensagem (Este cenário costuma acontecer quando o dataset não está tratando erros e ocorre algum problema dentro dele, dai ele retorna "{}")
            if(!values.length) return resolve([]); //Caso o dataset não retorne nenhuma linha, irá retornar vazio
            return resolve(values); //Caso o dataset retorne linhas, irá retornar o array com os valores
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error('RESPOSTA vcXMLRPC com erro', jqXHR, textStatus, errorThrown);
            return reject(new Error(jqXHR.responseText ? jqXHR.responseText : jqXHR.statusText)); //Caso der erro irá retornar um reject que irá cair dentro do catch
          },
        });
      } catch (err) {
        return reject(new Error(err));
      }
    });
  }

  var suaWidget = SuperWidget.extend({
    //Importante adicionar o async pra conseguir trabalhar com async/await na função pai que irá chamar a função que consulta dataset
    async init() {

      try {
         //Aqui é onde você vai chamar a função que consulta o dataset
        const users = await consultarDataset('colleague');

        //Aqui você pode fazer o que quiser com o resultado da consulta
        console.log(users);
      } catch (error) {
        //Adicionar aqui o tratamento de erro seja um modal, alert, console.log, etc
        console.log('ERROR: ', error);
      }



    }
  })
```

A lógica é bem proxima da sua, se quiser utilizar o .then() no lugar do async/await também é possível basta vc adaptar, mas dessa forma que te mandei está bem tratado os erros, então independente onde ocorrer o erro (que pode ser na chamada ajax, pode ser syntax da sua função, retorno de erro do dataset, etc) no catch você conseguirá resgatar a mensagem de erro e poder tratar da forma que quiser.

No meu caso ai estou chamando o dataset colleague padrão do Fluig, faz um teste no seu cenário e me informa se deu bom. :wink:

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 25/03/2024, 09:00

Obrigado pela resposta Pablo.

O grande problema é que ao recarregar a página as mesmas widgets com erro podem funcionar o request. Todas widgets usam essa função de consultarDataset para trazer seus dados, porém ao deixar a página publica algumas se perdem, mas ao recarregar a página podem funcionar ou não, parece aleatório… Quando está com um usuário logado todas funcionam normalmente…

Testei aqui o seu código e foi praticamente o mesmo resultado, ta bem confuso essa situação.

---
