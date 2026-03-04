# Integração Fluig x Sistema de Terceiro com REST

> **Fonte:** [https://fluiggers.com.br/t/integracao-fluig-x-sistema-de-terceiro-com-rest/2861](https://fluiggers.com.br/t/integracao-fluig-x-sistema-de-terceiro-com-rest/2861)
> **Categoria:** Sem categoria
> **Criado em:** 21/06/2024, 16:54
> **Visualizações:** 198 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Rafael Oliveira** (@roliveira) — 21/06/2024, 16:54

Boa tarde pessoal!
Preciso de ajuda para entender um problema que estou passando.
Estou desenvolvendo uma integração utilizando REST através de um Dataset no Fluig, mas estou recebendo o erro abaixo:

JavaException: javax.ejb.EJBException: java.lang.ClassCastException: class java.util.ArrayList cannot be cast to class java.util.Map (java.util.ArrayList and java.util.Map are in module java.base of loader ‘bootstrap’

Creio que o problema esteja com o parâmetro PARAMS, pois preciso passar uma lista , mas não estou sabendo resolver isso. Tenho um outro endpoint do tipo POST onde passo um objeto e funciona, o problema está em passar uma lista.

Segue o código que estou utilizando:

function createDataset(fields, constraints, sortFields) {
var dataset = DatasetBuilder.newDataset();

```
dataset.addColumn("status");
dataset.addColumn("detalhe");
dataset.addColumn("resultado");

try {
    var cardData = new Array();

    var obj = [
        {
            "idItem": 33,
            "autorizado": true,
            "valorAutorizado": 2000
        }
    ];

    cardData.push(obj);

    var companyId = ""+ getValue("WKCompany");
    var serviceCode = 'Integracao';
    var endpoint = "/autorizacao/";

    var data = {
        companyId: companyId,
        serviceCode: serviceCode,
        endpoint: endpoint,
        method: 'POST',
        timeoutService: '100',
        params: cardData,
        headers: {
            'SecurityToken': 'Q8GgZJIqPlC29oZ5YC4VNc91w1RCrG8o8sbAKrMzo5pCk4/Jk08kE0W5iUgOxINW6kbKU4wFzqe6fAUUEe1QD/eNfRzM/jwbBFKDuTArAjQBKNB0OHTsETYtovWSNClhMILA/g2Ehoi6S4e1g2nkeQ==',
            'Content-Type': 'application/json',
        }
    }

    var clientService = fluigAPI.getAuthorizeClientService();
    var service = clientService.invoke(JSON.stringify(data));
    var httpStatus = String(service.getHttpStatusResult());

    if (service.getResult() == null || service.getResult().isEmpty()) {
        log.info("Autorizar Planejamento: O retorno está vazio.");
        //throw new Exception("Autorizar: O retorno está vazio.");

        dataset.addRow(
            new Array("", "Autorizar", "O retorno está vazio.")
        );
    } else {
        //var result = JSON.parse(service.getResult());

        if (httpStatus == "200") {
            log.info("Autorizar: " + httpStatus + " - Planejamento Autorizado.");

            dataset.addRow(
                new Array(httpStatus, "Sucesso", "Autorizado")
            );
        } else {
            dataset.addRow(
                new Array(httpStatus, "Erro", service.getResult())
            );
        }
    }
} catch(e) {
    log.info("3) Exceção: Autorizar: " + e);
    throw new Exception(e);
}

return dataset;
```

}

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/06/2024, 12:52

Qual versão do Fluig?

Já vi o Fluig dando erro quando tem algo que não seja string como valores, mas acho que isso é erro da `clientService.invoke` quanto aos valores que não são da propriedade `params` (companyId, timeoutService, etc.).

Qualquer coisa tenta testar se na sua versão tá com a biblioteca Gson e faz a conversão com ela, só pra ver se muda algo (ao menos na 1.8.1 parece que já usa ela e nos testes de conversão objeto → json e json → objeto não tive erros).

Se mesmo assim der erro aí o problema realmente deve ser a `clientService.invoke` e o jeito é fazer a requisição na unha sem depender do serviço do Fluig.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/06/2024, 16:40

Acho que entendi o problema.

Você está passando um array como parametro, mas o Fluig espera que seja um objeto, pois ele vai converter isso num Map, enquanto o array seria convertido em em List.

Não teria problema você passar algo como `{items: []}`, pois isso seria convertido em Map, mas passar o array diretamente não dá.

Então se o seu serviço só aceita que seja passado o array diretamente o jeito é fazer a chamada HTTP na mão, usando o Apache HttpClient.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Rafael Oliveira** (@roliveira) — 24/06/2024, 07:55 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > {items: }

Bom dia Bruno!
Obrigado pelo seu retorno amigo!
Então, preciso passar exatamente uma List, não posso passar desta forma {items: } pois a API do outro sistema não recebe a informação assim, até tentei, mas recebo erro da API.

Depois de muita pesquisa, consegui resolver e acredite, não encontrei a solução na documentação.

No objeto data passado como parâmetro para o clientService.invoke(JSON.stringify(data)), basta alterar a key PARAMS para STRPARAMS (strParams) que, desta forma, é possível passar uma lista.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/06/2024, 08:50 | ❤️ 1

Maravilha! Já anotei pra situações futuras.

---

## Resposta #5

**Rafael Oliveira** (@roliveira) — 24/06/2024, 09:45

Bruno, aproveitando amigo, pode me tirar uma dúvida?
Caso já tenha feito, teria algum exemplo de código para integração REST por uma Widget?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/06/2024, 10:47

Na maioria das vezes eu prefiro criar um Dataset que faça as chamadas e na Widget eu chamo o Dataset.

Assim fica mais oculto as credenciais para o serviço externo.

Mas dependendo do que for feito eu só uso um `fetch` (padrão do JavaScript), por achar mais tranquilo de trabalhar.

Nunca usei a chamada conforme a documentação do Fluig.

---
