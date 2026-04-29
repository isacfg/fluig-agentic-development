# Mover atividade via serviço no Fluig

> **Fonte:** [https://fluiggers.com.br/t/mover-atividade-via-servico-no-fluig/911](https://fluiggers.com.br/t/mover-atividade-via-servico-no-fluig/911)
> **Categoria:** Sem categoria
> **Criado em:** 04/02/2022, 17:15
> **Visualizações:** 1273 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Marcelo Barros** (@marcelo_barros) — 04/02/2022, 17:15

Boa tarde,

Por acaso alguém teria um script (para executar via soap) para mover uma atividade via serviço no Fluig?

Tive um problema em uma solicitação que por algum motivo não conseguir resolver a atividade automática e não gostaria de perder a mesma.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/02/2022, 10:32 | ❤️ 1

Aqui, em uma widget, eu faço isso:

```javascript
const workflowServiceUrl = `${WCMAPI.serverURL}/webdesk/ECMWorkflowEngineService?wsdl`;

try {
    await makeSoapRequest(workflowServiceUrl, getMovementSoapXml());
} catch (error) {
    throw `Erro ao movimentar a Solicitação. Informe ao Administrador do Sistema.`;
}

/**
 * Cria o XML para movimentar uma solicitação
 *
 * @returns {string}
 */
function getMovementSoapXml() {
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
        <soapenv:Header/>
        <soapenv:Body>
        <ws:saveAndSendTask>
            <username>usuario</username>
            <password>senha</password>
            <companyId>id da empresa. Ex: 1</companyId>
            <processInstanceId>id da solicitacao. Ex: 123</processInstanceId>
            <choosedState>numero da atividade pra onde irá. Ex: 31</choosedState>
            <colleagueIds>
                <item>matricula do usuário</item>
            </colleagueIds>
            <comments>comentário opcional</comments>
            <userId>id do usuário</userId>
            <completeTask>true</completeTask>
            <attachments />
            <cardData />
            <appointment />
            <managerMode>false</managerMode>
            <threadSequence>0</threadSequence>
        </ws:saveAndSendTask>
        </soapenv:Body>
    </soapenv:Envelope>`
}

/**
 * Executa uma chamada SOAP por POST
 *
 * @param {string} url
 * @param {string} xml
 * @returns {Promise} Resolve com um objeto XMLDocument
 */
function makeSoapRequest(url, xml) {
    return fetch(url, {
            method: "POST",
            redirect: "follow",
            credentials: "omit",
            headers: {
                "Content-Type": "text/xml;charset=utf-8"
            },
            body: xml
        })
        .then(response => response.text())
        .then(xmlText => (new DOMParser())
            .parseFromString(xmlText, "text/xml"));
}
```

---
