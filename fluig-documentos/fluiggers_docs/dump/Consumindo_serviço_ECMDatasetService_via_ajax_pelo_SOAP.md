# Consumindo serviço ECMDatasetService via ajax pelo SOAP

> **Fonte:** [https://fluiggers.com.br/t/consumindo-servico-ecmdatasetservice-via-ajax-pelo-soap/137](https://fluiggers.com.br/t/consumindo-servico-ecmdatasetservice-via-ajax-pelo-soap/137)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 16/03/2021, 14:50
> **Visualizações:** 1488 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Spectrum** (@carlos) — 16/03/2021, 14:50

Pessoal, boa tarde,

Eu criei um AJAX Webservice SOAP que retorna envelope XML. Ele consome o serviço do Fluig ECMDatasetService. Código abaixo:
\*var soapMessage = \*

-   ```
    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dataservice.ecm.technology.totvs.com/">'+*
    ```

-   ```
    '<soapenv:Header/>'+*
    ```

-   ```
    '<soapenv:Body>'+*
    ```

-   ```
    '<ws:getDataset>'+*
    ```

-   ```
    '<companyId>1</companyId>'+*
    ```

-   ```
    '<username>admin</username>'+*
    ```

-   ```
    '<password>admin</password>'+*
    ```

-   ```
    '<name>colleague</name>'+*
    ```

-   ```
    '<fields/>'+*
    ```

-   ```
    '<constraints>'+*
    ```

-   ```
    '<item>'+*
    ```

-   ```
    '<fieldName>colleaguePK.colleagueId</fieldName>'+*
    ```

-   ```
    '<finalValue>1984</finalValue>'+*
    ```

-   ```
    '<initialValue>1984</initialValue>'+*
    ```

-   ```
    '<contraintType>ConstraintType.MUST</contraintType>'+*
    ```

-   ```
    '<likeSearch>no</likeSearch>'+*
    ```

-   ```
    '</item>'+*
    ```

-   ```
    '</constraints>'+*
    ```

-   ```
    '<order/>'+*
    ```

-   ```
    '</ws:getDataset>'+*
    ```

-   ```
    '</soapenv:Body>'+*
    ```

-   ```
    '</soapenv:Envelope>';*
    ```


*var cont = 0;*

-   var wsUrl = “[http://127.0.0.1/webdesk/ECMDatasetService?wsdl](http://127.0.0.1/webdesk/ECMDatasetService?wsdl)”;\*
-   $.ajax({\*
-   ```
    type: "POST",*
    ```

-   ```
    dataType: "xml",*
    ```

-   ```
    url: wsUrl,*
    ```

-   ```
    data: soapMessage,*
    ```

-   ```
    crossDomain: true,*
    ```

-   ```
    success: function(data) {*
    ```

-   ```
    console.log("Resultado Correto = "+data);*
    ```

-   ```
    $(data).find("values").each(function () {*
    ```

-   ```
    console.log($(this).find("value").text());*
    ```

-   ```
    });*
    ```

-   ```
    },*
    ```

-   ```
    error: function(error) {*
    ```

-   ```
    console.log("Resultado com erro = "+error);*
    ```

-   ```
    }*
    ```

-   });\*

Ela funciona legal. O problema é o retorno.

Ao invez dela separar as informações, ele junta todas elas. Exemplo de consumir o serviço de consulta de conteúdo do Dataset:
**11984Carlos Eduardo de Ataideprog.carlos@gmail.comcarlos.ataidetruetruetruept\_BRDefault5**

Eu tentei verificar se dava para pegar campo a campo e não consigo. Alguém consegue me ajudar nessa? Alguém sabe me informar se pelo menos consigo separar por “;”?

---

## Resposta #1

**Magno Silva Adauto** (@Magno_Silva_Adauto) — 16/03/2021, 16:34

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/carlos/48/1505_2.png) carlos:
>
> > $(data).find(“values”).each(function () {\*
> >
> > ```auto
> > * ```
> >        	console.log($(this).find("value").text());*
> > ```
> >
> > -   ```auto
> >     });*
> >     ```
> >

Troque essa parte pela debaixo:

$(data).find(‘value’).each(function(){

```
console.log($(this).text());
```

})

dessa forma irá trazer cada valor separado

---

## Resposta #2

**Spectrum** (@carlos) — 16/03/2021, 17:19

Funcionou, valeu pela dica

---
