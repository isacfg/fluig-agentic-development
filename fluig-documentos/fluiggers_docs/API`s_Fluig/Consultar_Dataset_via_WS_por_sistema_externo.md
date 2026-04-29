# Consultar Dataset via WS por sistema externo

> **Fonte:** [https://fluiggers.com.br/t/consultar-dataset-via-ws-por-sistema-externo/471](https://fluiggers.com.br/t/consultar-dataset-via-ws-por-sistema-externo/471)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 28/05/2021, 08:28
> **Visualizações:** 3424 | **Likes:** 9 | **Respostas:** 17

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 28/05/2021, 08:28 | ❤️ 1

Olá pessoal, existe a possibilidade de consultar um DATASET customizado ou interno do Fluig por um sistema externo via API REST ou Webservice SOAP?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 28/05/2021, 09:07 | ❤️ 4

Bom dia Romulo,

Tem sim, você vai precisar consumir a API “/api/public/ecm/dataset/datasets”.
Mas para consumir você vai precisar de uma autenticação oAuth, você pode pelo painel de controle gerar o usuário de autenticação e gerar a “key” e o “secret”.

Exemplo de consumo:
obs.: Precisa da biblioteca “cryptojs”.

```javascript
//FUNÇÃO DE CHAMADA DE DATASET GENÊRICA
function getDatasetExterno(dataset, filtros, cb) {
        var retorno;
        var oauth = OAuth({
            consumer: {
                'key': '{consumerKey}', // nome do aplicativo que você criou
                'secret': '{consumerSecret}' // nome do aplicativo que você criou
            },
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
            },
            nonce_length: 6
        });

        var request_data = {
            url: WCMAPI.serverURL + '/api/public/ecm/dataset/datasets',
            method: 'POST'
        };

        //type of the constraint(1 - MUST, 2 - SHOULD, 3 - MUST_NOT)
        var data = {
            "name": dataset,
            "fields": [],
            "constraints": filtros,
            "order": []
        }

		var token = {
			'key': '{sua key}',
			'secret': '{seu secret}'
		}

        $.ajax({
            url: request_data.url,
            contentType: 'application/json',
            crossDomain: true,
            async: false,
            type: request_data.method,
            data: JSON.stringify(data),
            headers: oauth.toHeader(oauth.authorize(request_data, token))
        }).fail(function(e, f) {
            console.log("deu ruim!");
        }).success(function(f) {
            if (f.content.values.length > 0) {
                console.log(f.content.values);
				cb(f.content);
            } else {
               console.log("Deu ruim tambem!");
            }
        });


};

//CONSUMO DA FUNÇÃO GENERICA
var filtro = [{
	_field: "",
	_initialValue: "",
	_finalValue:"",
	_type: 1, //type of the constraint(1 - MUST, 2 - SHOULD, 3 - MUST_NOT)
	_likeSearch: false
}, {
	_field: "",
	_initialValue: "",
	_finalValue: "",
	_type: 1, //type of the constraint(1 - MUST, 2 - SHOULD, 3 - MUST_NOT)
	_likeSearch: false
}];
getDatasetExterno("colleague", filtro, function(data){
	console.log("EXECUTOU CALLBACK",data);
});
```

---

## Resposta #2

**Romulo Pereira** (@romuloccomp) — 28/05/2021, 09:24 | ❤️ 1

Excelente Willian, vou tentar dessa forma.

Obs: Gostei do console “deu ruim” kkkk

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 29/05/2021, 16:08

Boa tarde eu postei aqui fórum os arquivos e um passo a passo vou achar o link e te falo

---

## Resposta #4

**Lucas Arruda** (@Lucas_Arruda) — 03/06/2021, 12:08

Bom dia Daniel,

Se puder compartilhar o link lhe agradeço :grinning:

---

## Resposta #5

**Samuel ** (@SamuelBruing) — 03/09/2021, 10:59

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/willian_laynes/48/196_2.png) Willian\_Laynes:
>
> > cryptojs

Opa, isso funcionou pra você pessoal?

---

## Resposta #6

**Romulo Pereira** (@romuloccomp) — 03/09/2021, 11:13

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/willian_laynes/48/196_2.png) Willian\_Laynes:
>
> > cryptojs

Eu não precisei utilizar porque fiz a consulta no Datasul com Progress.

---

## Resposta #7

**Samuel ** (@SamuelBruing) — 03/09/2021, 11:15

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/romuloccomp/48/73_2.png) romuloccomp:
>
> > Eu não precisei utilizar porque fiz a consulta no Datasul com Progress.

Ah entendi, estou com a mesma necessidade que tu tinhas nesse tópico. Mas to tentando fazer funcionar e ta caindo no “deu ruim!” kkk [@Willian\_Laynes](/u/willian_laynes) consegue salvar nós mestre?

---

## Resposta #8

**Romulo Pereira** (@romuloccomp) — 03/09/2021, 11:34

Você já criou as chaves (token, app e etc) no fluig?

---

## Resposta #9

**Samuel ** (@SamuelBruing) — 03/09/2021, 11:50 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/willian_laynes/48/196_2.png) Willian\_Laynes:
>
> > ```auto
> > var filtro = [{
> > 	_field: "",
> > 	_initialValue: "",
> > 	_finalValue:"",
> > 	_type: 1, //type of the constraint(1 - MUST, 2 - SHOULD, 3 - MUST_NOT)
> > 	_likeSearch: false
> > }, {
> > 	_field: "",
> > 	_initialValue: "",
> > 	_finalValue: "",
> > 	_type: 1, //type of the constraint(1 - MUST, 2 - SHOULD, 3 - MUST_NOT)
> > 	_likeSearch: false
> > }];
> > ```

Opa, agora tá funcionando. Tive que mudar alguns parâmetros, mas funcionou!!

---

## Resposta #10

**Willian Laynes** (@Willian_Laynes) — 03/09/2021, 13:49

Desculpa, vi só agora…não estou conseguindo acompanhar muito essa semana. Que bom que deu certo.

---

## Resposta #11

**Henrique Lira** (@henriquedelira) — 19/01/2023, 11:18

Pessoal,

Alguém tem o arquivo CryptoJS.

Obrigado,

---

## Resposta #12

**Rodrigo Baione** (@Baione) — 12/07/2023, 18:40

Romulo, boa tarde!
Você poderia mandar um exemplo de como consumir no progress um dataset do fluig por favor.

---

## Resposta #13

**Bruno Henrique** (@Bruno_Henrique) — 19/05/2025, 10:31

Willian,
Bom dia

Dúvida, por ser uma página publica, como fica a segurança ? Pois as informações pra acessar o OAuth fica tudo explicito no .js

---

## Resposta #14

**Romulo Pereira** (@romuloccomp) — 19/05/2025, 11:06

Bom dia,
Não fica explicito no js no navegador porque o Dataset no Fluig roda no servidor. É um javascript server side.

---

## Resposta #15

**Bruno Gasparetto** (@Bruno_Gasparetto) — 19/05/2025, 12:18 | ❤️ 1

Se usar direto na página pública vai expor as credenciais. Pior que já vi muitos indicarem dessa forma meio que sem se preocupar com as credenciais vazadas.

Outra recomendação é você ter outro serviço externo que receba a solicitação da sua página pública e esse serviço externo faça a comunicação com o Dataset do Fluig por back-end (servindo como um proxy entre os sistemas). E então você faz algum tipo de validação da origem da requisição e também algum controle pra só consultar datasets específicos né.

Esse sistema externo pode até ser uma widget, basta fazer ela ter uma API, em Java por exemplo, e então sua página pública consulta essa API. Inclusive é como a TOTVS recomenda.

![](https://tdn.totvs.com/s/-3o548x/8804/xgjkrn/56/_/favicon.ico) [tdn.totvs.com](https://tdn.totvs.com/pages/releaseview.action?pageId=445656685)

### [Como expor dados em ambientes públicos - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=445656685)

---

## Resposta #16

**Bruno Henrique** (@Bruno_Henrique) — 19/05/2025, 13:13

É isso que estou vendo, vários exemplos que os dados estão expostos. Achei esse git, porém estou tendo algumas duvidas nele [GitHub - marcommas/fluig](https://github.com/marcommas/fluig)

---

## Resposta #17

**Daniel Cabral Santos** (@daniel.cabral) — 20/05/2025, 09:14 | ❤️ 1

+1 para middleware - já implementei via middleware (Nest.JS no caso) para garantir a segurança - incluindo aderência à compliance de cliente.

---

## Resposta #18

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/05/2025, 09:27

Estou estudando as opções de fazer API Java com as Widgets pra ter isso integrado ao Fluig.

Mas é aquele estudo quase parando devido à falta de tempo.

---

## Resposta #19

**Daniel Sales** (@Daniel_Sales) — 25/05/2025, 08:29

Bruno a widget que usamos no pluign do fluig e uma middleware em java perfeita para isso.
Ela e bem simples e facil de usar ate para quem não manja de java.
Manda o link para ele

---

## Resposta #20

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/05/2025, 18:32

A que criamos pra extensão do VSCode obriga autenticação todos os endpoints. Seria um exemplo meio “fraco”, não?

Mas ele usou aquele exemplo de um post que você participou pra montar a widget e deu certo.

[github.com](https://github.com/fluiggers/fluig-widget-helper)

![](https://opengraph.githubassets.com/8c6279ff187c04b1280764ed5b6982fa/fluiggers/fluig-widget-helper)

### [GitHub - fluiggers/fluig-widget-helper: Conjunto de endpoints para auxiliar no...](https://github.com/fluiggers/fluig-widget-helper)

Conjunto de endpoints para auxiliar no desenvolvimento no Fluig usando a extensão do VS Code

---

## Resposta #21

**Daniel Sales** (@Daniel_Sales) — 25/05/2025, 22:32

E a mesma base so que sem autenticação.
A que usamos veio dai eu so adiconei a autenticação

---

## Resposta #22

**lucas praciano** (@lucas.praciano) — 15/01/2026, 15:08

Boa tarde mestre, tenho que consultar um dataset por uma pagina publica, e ai tentei usar esse código mas estou com problemas na autenticação ja tenho as chaves mas nao sei como configurar essa biblioteca criptojs poderia me ajudar ??

---

## Resposta #23

**lucas praciano** (@lucas.praciano) — 16/01/2026, 09:36

Você conseguiu o arquivo CryptoJS ?

---

## Resposta #24

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/01/2026, 10:14

![](https://github.githubassets.com/favicons/favicon.svg) [github.com](https://github.com/Eliezergimenes/Dataset-pagina-publica-/tree/master)

### [GitHub - Eliezergimenes/Dataset-pagina-publica-: Exemplo de como acessar um...](https://github.com/Eliezergimenes/Dataset-pagina-publica-/tree/master)

[master](https://github.com/Eliezergimenes/Dataset-pagina-publica-/tree/master)

Exemplo de como acessar um dataset em uma página publica do Fluig (TOTVS) - Eliezergimenes/Dataset-pagina-publica-

Pelo que vi o CryptoJS tá no arquivo `hmac-sha1.js`.

E boa sorte ao deixar suas credenciais do Fluig expostas na página pública.

Lembre de só dar permissão pra esse usuário acessar coisas muito específicas pra não ter um estrago grande caso alguém resolva usar as credenciais.

---
