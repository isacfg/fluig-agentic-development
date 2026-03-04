# Dataset/ Serviço Rest com parametros

> **Fonte:** [https://fluiggers.com.br/t/dataset-servico-rest-com-parametros/2654](https://fluiggers.com.br/t/dataset-servico-rest-com-parametros/2654)
> **Categoria:** WCM
> **Tags:** `dataset`, `fluigapi`, `api`
> **Criado em:** 18/03/2024, 08:52
> **Visualizações:** 309 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Gabriel Borchardt** (@borchardt) — 18/03/2024, 08:52

Pessoal, sabem como criar um dataset/serviço no fluig que é um rest e comunica via parametros? Tenho um caso que preciso bater em uma api http com uma matricula e logo em seguida me retorna alguns dados, porém ao utilizar no fluig via frontend num formulário ele da erro de CORS, como esperado… O problema é que não é viável para nós aplicar um SSL nesse momento no endereço, levando em consideração que outras aplicações web com stack diferentes usam via backend com http e não ocorre o cors por isso, sabem como fazer um serviço com parametros na url pelo fluig?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 18/03/2024, 10:25

Olá, para isso crie um serviço no Painel de Controle Fluig com o url e autenticação. No dataset chama assim:

```auto
var filter = encodeURIComponent('["GCOLIGADA.CODCOLIGADA != :CODCOLIGADA AND GCOLIGADA.ATIVO = :ATIVO", "0", "T"]');
        log.info(filter)

        var getColigada = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId : getValue("WKCompany") + '',
            serviceCode : 'RM',
            endpoint : "GlbColigadaDataBR?filter=" + filter,
            method : 'get',
        };

        var obj = getColigada.invoke(JSON.stringify(data));
```

serviceCode = Serviço cadastrado no Painel de Controle.
endpoit = Parametros da url.

Esse é um exemplo para chamar a api de coligadas do RM. Mais segue esse caminho que da certo.

Abs.

---

## Resposta #2

**Gabriel Borchardt** (@borchardt) — 18/03/2024, 16:35

o que seria esse parametro do encode que vc passou gcoligada?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/03/2024, 11:39

Eu vi nessa doc [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402117244311-Cross-Segmentos-Backoffice-RM-Integração-API-Requisição-REST-GetAll-e-Exemplo-de-Utilização-do-Filtro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402117244311-Cross-Segmentos-Backoffice-RM-Integra%C3%A7%C3%A3o-API-Requisi%C3%A7%C3%A3o-REST-GetAll-e-Exemplo-de-Utiliza%C3%A7%C3%A3o-do-Filtro) que o filtro precisava estar nesse formato de URL, e só funcionou assim.

---
