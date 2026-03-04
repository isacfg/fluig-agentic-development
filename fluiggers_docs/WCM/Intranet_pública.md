# Intranet "pública"

> **Fonte:** [https://fluiggers.com.br/t/intranet-publica/2269](https://fluiggers.com.br/t/intranet-publica/2269)
> **Categoria:** WCM
> **Criado em:** 11/10/2023, 15:50
> **Visualizações:** 472 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 11/10/2023, 15:50

Olá, alguém aqui sabe como funciona a configuração de deixar páginas “públicas”? Eu inseri a opção PUBLIC na minha página mas sempre que tento acessar ela, pede autenticação, a ideia é nossa intranet ser publica no contexto da nossa rede…

---

## Resposta #1

**Guilherme Mesquita Rocha** (@gmesquita) — 17/10/2023, 14:28

Boa tarde!
Para acessar de maneira pública, você precisa retirar da sua URL o `portal/p/codEmpresa`, ex:
`https:/endereco.fluig.com/widget_code`

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 17/10/2023, 15:53

Deu certo amigo… Porém uma coisa que não funcionou foi os widgets que utilizam datasets vindo do ERP, pois como ficou publico ele nao está logado ainda, só funciona depois de logado, como posso fazer com que o dataset apareça mesmo nao estando logado?

---

## Resposta #3

**Guilherme Mesquita Rocha** (@gmesquita) — 17/10/2023, 16:02

Cara, tem um tópico referente à isso…
É meio chatinho, rs, vou te passar pra você dar uma boa analisada, caso você não consiga, me avisa!

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) [Cliente externo sem usuário Fluig startar um processo e anexar documentos](https://fluiggers.com.br/t/cliente-externo-sem-usuario-fluig-startar-um-processo-e-anexar-documentos/307) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Surgiu um cenário aqui onde um cliente externo (que não tem usuário no fluig) precisaria entrar em uma página pública, preencher um formulário, anexar alguns documentos e assim startar um processo levando essas informações e os anexos. Dá pra fazer isso? Como eu poderia fazer?

Apenas complementando, a ideia é que ao invés de utilizar o método `getDataset` do DatasetFactory, você faça via requisição ajax, passando as propriedades (consumer-key, consumer-secret e etc) das configurações do oAuth do seu ambiente.

Qualquer dúvida, me chame!

---

## Resposta #4

**Gabriel Borchardt** (@borchardt) — 18/10/2023, 07:55

Entendi, vi aqui o tópico e talvez isso seja mais complexo do que realmente eu precisaria, basicamente essa página é de acesso em rede da empresa, não de acesso de externos (a não ser com VPN), vc teria um exemplo de requisição ajax pra dataset? seria como se fosse um endpoint?

---

## Resposta #5

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/10/2023, 09:34 | ❤️ 1

E ae [@borchardt](/u/borchardt) tudo certo? Segue um exemplo executando um dataset interno.

```auto
let result = "";

        //#region TODKEN OAUTH
            const oauth = OAuth({
                consumer: {
                    'key': `${_oauth.consumerKey}`,
                    'secret': `${_oauth.consumerSecret}`
                },
                signature_method: 'HMAC-SHA1',
                hash_function: function (base_string, key) {
                    return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
                },
                nonce_length: 6
            });

            const token = {
                'key': `${_oauth.tokenKey}`,
                'secret': `${_oauth.tokenSecret}`
            };
        //#endregion

        //#region REQUEST API
            var request_data = {
                url: WCMAPI.getServerURL() + '/api/public/ecm/dataset/datasets',
                method: 'POST',
                data: {}
            };
        //#endregion

        //#region CONSTRAINTS
            let constraints = [];
            const processId = "wfTeste";

            constraints = [{
                _field: "workflowProcessPK.processInstanceId",
                _initialValue: numProcess,
                _finalValue: numProcess,
                _type: 1,
                _likeSearch: false
            },{
                _field: "processId",
                _initialValue: processId,
                _finalValue: processId,
                _type: 1,
                _likeSearch: false
            }];
        //#endregion

        //#region DATA
            let data = "";
            data = {
                "name": "workflowProcess",
                "fields": [],
                "constraints": constraints,
                "order": []
            };

        //#endregion

        $.ajax({
            url: request_data.url,
            type: request_data.method,
            contentType: "application/json",
            data: JSON.stringify(data),
            headers: oauth.toHeader(oauth.authorize(request_data, token)),
            async: false,
        }).done(function(data) {
            if (data.content.values.length > 0) {

                result = data.content.values;

            } else {
                FLUIGC.toast({
                    title: 'Erro: ',
                    message: 'Informações não encontradas',
                    type: 'danger'
                });
            }
        });
```

Você substituí as informações do OAUTH pelo seus tokens aí e adapta para o dataset que você precisa. Vê se te atende aí… boa sorte.

Abs

---
