# Como passar Json via integracao Rest

> **Fonte:** [https://fluiggers.com.br/t/como-passar-json-via-integracao-rest/319](https://fluiggers.com.br/t/como-passar-json-via-integracao-rest/319)
> **Categoria:** Sem categoria
> **Criado em:** 08/04/2021, 18:05
> **Visualizações:** 1577 | **Likes:** 6 | **Respostas:** 1

---

## Pergunta original

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 08/04/2021, 18:05 | ❤️ 1

Olá pessoal, boa tarde!

Estou tentando realizar uma integração com o Protheus via Web Service Rest.

Ao realizar a integração, estou usando o seguintes parâmetros:

> var postData = {
>
> ```
> companyId: getValue("WKCompany") + '',
>
>   serviceCode: '{SERVICE_NAME}',
>
>   endpoint: '/rest/{SERVICE_NAME}',
>
>   method: 'post',// 'delete', 'patch', 'put', 'get'
>
>   timeoutService: '100', // segundos
>
>   params:  JSON.parse(ObjProd),
>
>   options: {
>
>     encoding: 'UTF-8',
>
>     mediaType: 'application/json',
>
>     useSSL: true
>
>   },
>
> }
> ```

Contudo, o Fluig está me retornando a seguinte mensagem de erro:

Atividade de serviço executada com falha:
Tentativa: 1 - Erro Wrapped javax.ejb.EJBException: java.lang.ClassCastException: class java.util.ArrayList cannot be cast to class java.util.Map (java.util.ArrayList and java.util.Map are in module java.base of loader ‘bootstrap’) (#57) - Tempo de Execução 83 ms

A variavel ObjProd na realidade é um array que contém os dados que eu desejo passar para o Webservice.

Me desculpem se não ficou muito claro o meu questionamento, mas se não der para enter, por favor, comentem que vamos chegar em um entendimento.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/04/2021, 19:01 | ❤️ 3

Ainda não usei esse tipo de serviço, então vou responder só considerando o erro informado.

O Fluig recebeu seus parâmetros e como era um Array o converteu para o tipo java.util.ArrayList, porém o método utilizado pelo Fluig espera um java.util.Map.

Então talvez o correto seja que o params da sua chamada seja um Objeto ao invés de Array. Algo como:

```javascript
const params = {
    campo01: 10,
    campo02: "novo valor",
    "campo nome": "Um nome"
};
```

Mas é só uma suposição minha.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 09/04/2021, 08:32 | ❤️ 2

O [@Bruno\_Gasparetto](/u/bruno_gasparetto) está certo, [@JulioRocha](/u/juliorocha) !

Veja como faço integração com Protheus, neste exemplo é uma inserção de título a pagar:

```auto
"E2_NUM": E2_NUM,
    "E2_PREFIXO": E2_PREFIXO,
    "E2_NATUREZ": E2_NATUREZ,
    "E2_PARCELA": E2_PARCELA,
    "E2_TIPO": E2_TIPO,
    "E2_FORNECE": E2_FORNECE,
    "E2_LOJA": E2_LOJA,
    "E2_VALOR": E2_VALOR,
    "E2_EMISSAO": E2_EMISSAO,
    "E2_VENCTO": E2_VENCTO,
    "E2_VENCREA": E2_VENCREA,
    "E2_VENCORI": E2_VENCORI,
    "E2_ORIGEM": E2_ORIGEM,
    "E2_MOEDA": E2_MOEDA,
    "AUTBANCO": AUTBANCO,
    "AUTAGENCIA": AUTAGENCIA,
    "AUTCONTA": AUTCONTA,
    "E2_NPROCES": E2_NPROCES,
    "E2_HIST": E2_HIST,
    "E2_CCUST": E2_CCUST,
    "E2_ITEMD": E2_ITEMD
  }

try {
    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
      companyId: getValue("WKCompany") + '',
      serviceCode: 'PROTHEUS-REST',
      endpoint: '/TITULOSAPAGAR',
      method: 'post',
      timeoutService: '100', // segundos
      params: requestParams,
      headers: {
        "Content-Type": "application/json"
      }
    }

    var oResult = vo.getResult();

    if (oResult.indexOf('AJUDA') > 0) {
      log.error("Ocorreu um erro na integraçaõ: " + oResult);
      dataset.addRow(["ERRO", oResult]);
      return dataset;
    } else {
      log.info("Retorno ds_protheus_gerafinanceiropagar: " + oResult);
```

O replacer se faz necessário em alguns casos, se me lembro bem, por uma questão da conversão do tipo de objeto entre o Rhino e o Java padrão, uso assim:

```auto
var replacer = function (key, value) {
    var returnValue = value;
    try {
      if (value.getClass() !== null) { // If Java Object
        // qie.debug(key + ': value.getClass() = ' +
        // value.getClass());
        if (value instanceof java.lang.Number) {
          returnValue = 1 * value;
        } else if (value instanceof java.lang.Boolean) {
          returnValue = value.booleanValue();
        } else { // if (value instanceof java.lang.String) {
          returnValue = '' + value;
        }
      }
    } catch (err) {
      // No worries... not a Java object
    }
    return returnValue;
  };
```

---

## Resposta #3

**system** (@system) — 10/04/2021, 01:03

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
