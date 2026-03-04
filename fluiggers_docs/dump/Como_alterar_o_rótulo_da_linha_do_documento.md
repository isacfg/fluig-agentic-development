# Como alterar o rótulo da linha do documento

> **Fonte:** [https://fluiggers.com.br/t/como-alterar-o-rotulo-da-linha-do-documento/929](https://fluiggers.com.br/t/como-alterar-o-rotulo-da-linha-do-documento/929)
> **Categoria:** ECM / GED
> **Criado em:** 15/02/2022, 13:01
> **Visualizações:** 339 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 15/02/2022, 13:01

Eu estou alterando um documento da área de GED via Webservice. Não encontrei alteração via REST.

Mas, está funcionando bem.
Meu problema é alterar o campo ‘documentDescription’, mas acho que o WSDL com a instrução ‘updateCardData’ que estou usando não serve para isto.

A montagem do XML onde escrevi ‘ISTO AQUI É IGNORADO’ no código abaixo é o que eu gostaria de fazer funcionar.

Qual seria o jeito para conseguir isto?

```auto
let cardId = jQuery("#idTxtAlterarNumDoc").val();
		let novoNome = jQuery("#idTxtAlterarNome").val();
        let url = parent.WCMAPI.serverURL + "/webdesk/ECMCardService?wsdl";
        let xmlItem = "<item>";
        xmlItem += "    <field>namTxtNome</field>";
        xmlItem += "    <value>" + novoNome + "</value>";
        xmlItem += "</item>";
//---ISTO AQUI É IGNORADO
        xmlItem +="<item><field>documentDescription</field><value>"+novoNome+"</value></item>";
//---
        let xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.dm.ecm.technology.totvs.com/">'
            +'<soapenv:Header/>'
            +'<soapenv:Body>'
                +'<ws:updateCardData>'
                +'<companyId>' + top.WCMAPI.organizationId + '</companyId>'
                +'<username></username>'
                +'<password></password>'
                +'<cardId>' + cardId + '</cardId>'
                +'<cardData>'
                    + xmlItem
                +'</cardData>'
                +'</ws:updateCardData>'
            +'</soapenv:Body>'
            +'</soapenv:Envelope>';
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = (this.responseText);
                console.log(response);
            }
        };
        xhr.open("POST", url, false);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=ISO-8859-1');
        xhr.send(xml);
```

---
