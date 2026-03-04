# Consumo de um WS SOAP de um Widget

> **Fonte:** [https://tdn.totvs.com/display/fluig/Consumo+de+um+WS+SOAP+de+um+Widget](https://tdn.totvs.com/display/fluig/Consumo+de+um+WS+SOAP+de+um+Widget)

---

# Índice

#
Objetivo

* * *

O objetivo deste guia é apresentar um exemplo de como consumir um *WebService* SOAP de um *widget*.



# Pré-requisitos

* * *

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre o fluig
-   Visão geral sobre integração de sistemas
-   WebServices
-   SOAP



Informação:

Chamadas SOAP realizadas dentro de uma página (via widget) utilizam a sessão atual do usuário, ou seja, assumem o usuário logado. Porém, caso um login seja informado na chamada, a plataforma verifica se ele corresponde ao usuário da sessão.



# Consumir um WS SOAP de um *Widget*

* * *

Neste exemplo é utilizado o *WebService* ECMCardService, método Create para criar um registro de formulário.

Antes de iniciar, é necessário existir um *template* de formulário publicado no fluig, como o modelo a seguir:

```
<html>
      <body>
            <form>
                  <input name="campo_nome" type="text"><br>
                  <input name="campo_ramal" type="text"><br>
            </form>
      </body>
</html>
```



A seguir é apresentado um exemplo de código JavaScript para consumir o WS de dentro de um *widget* no Fluig:

```
//URL do Serviço
var wsUrl = WCMAPI.serverURL + "/webdesk/ECMCardService?wsdl";

//Modelo da Requisição
var soapRequest =  '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/"><soapenv:Header/><soapenv:Body><ws:create><companyId></companyId><username></username><password></password><card><item><cardData><field>campo_nome</field><value name="campo_nome"></value></cardData><cardData><field>campo_ramal</field><value name="campo_ramal"></value></cardData><parentDocumentId></parentDocumentId></item></card></ws:create></soapenv:Body></soapenv:Envelope>';

//Convertendo para XML, para facilitar a manipulação
var parser=new DOMParser();
var xmlRequest=parser.parseFromString(soapRequest,"text/xml");

//Código da empresa
xmlRequest.getElementsByTagName("companyId")[0].innerHTML = WCMAPI.organizationId;

//Código do template de formulário, já publicado
xmlRequest.getElementsByTagName("parentDocumentId")[0].innerHTML = 81;

//Valores para os campos
xmlRequest.getElementsByName("campo_nome")[0].innerHTML = "Meu nome...";
xmlRequest.getElementsByName("campo_ramal")[0].innerHTML = "9999";

//Enviando a requisição
WCMAPI.Create({
    url: wsUrl,
    contentType: "text/xml",
    dataType: "xml",
    data: xmlRequest,
    success: function(data){
             var xmlResp=parser.parseFromString(data.firstChild.innerHTML,"text/xml");
             console.log("Documento Publicado: " + xmlResp.getElementsByTagName("documentId")[0].innerHTML);
    }
});
```

Dica

 Consulte a documentação da [WCMAPI](https://tdn.totvs.com/display/fluig/WCMAPI) para conhecer as demais propriedades dessa biblioteca.
