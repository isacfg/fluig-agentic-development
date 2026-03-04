# WCMAPI não esta funcionando na minha widget

> **Fonte:** [https://fluiggers.com.br/t/wcmapi-nao-esta-funcionando-na-minha-widget/1561](https://fluiggers.com.br/t/wcmapi-nao-esta-funcionando-na-minha-widget/1561)
> **Categoria:** Widgets
> **Tags:** `widget`, `wcmapi`
> **Criado em:** 03/01/2023, 11:23
> **Visualizações:** 440 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Lucas Maciel dos Santos** (@Lucas_Maciel_dos_San) — 03/01/2023, 11:23

Gente estou desenvolvendo uma widget que se comunica com um processo, mas quando eu executo o codigo na minha widget ele não funciona.

```auto
//URL do Serviço
    var wsUrl = WCMAPI.serverURL + "/webdesk/ECMWorkflowEngineService?wsdl";

    //Modelo da Requisição
    var soapRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/"><soapenv:Header/><soapenv:Body><ws:simpleStartProcess><username> meu usuario </username><password> minha senha </password><companyId>1</companyId><processId>DenunciasAnônimas</processId><comments>Via Soap</comments><attachments></attachments><cardData><item><item>' + nameCampo + ' < /item><item>' + valueCampo + '< /item></item > < /cardData></ws: simpleStartProcess > < /soapenv:Body></soapenv: Envelope > ';

    //Convertendo para XML, para facilitar a manipulação
    var parser = new DOMParser();
    var xmlRequest = parser.parseFromString(soapRequest, "text/xml");

    //Enviando a requisição
    parent.WCMAPI.Create({
        url: wsUrl,

        contentType: "text/xml",
        dataType: "xml",
        data: xmlRequest,
        success: function(data) {
            console.log(" Processo iniciado! ");
        }
    });
```

esse é o erro que é retornado, tentei ajeitar meu código mais não consegui achar a solução.

![image](https://fluiggers.com.br/uploads/default/original/1X/a00cda5e391291b5f1343c4b07fed6ef0a4c41b8.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/01/2023, 12:21 | ❤️ 1

o `WCMAPI.Create` usa JQuery pra fazer a chamada e por padrão a JQuery tenta processar os dados entregues antes de efetuar a chamada.

Como você tá passando um objeto XML precisa informar pra JQuery não processar os dados.

Basta adicionar a propriedade `processData: false` no objeto de configuração passado à WCMAPI.Create.

---

## Resposta #2

**Lucas Maciel dos Santos** (@Lucas_Maciel_dos_San) — 03/01/2023, 13:43

Tentei mas o erro pessiste :frowning:

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/01/2023, 14:15

Testou chamar o WS de outra maneira, com o SoapUI por exemplo? Como tá retornando erro 500 é bom ver se não é erro do ws em si. Até conferir o log do Fluig pra ter certeza

---
