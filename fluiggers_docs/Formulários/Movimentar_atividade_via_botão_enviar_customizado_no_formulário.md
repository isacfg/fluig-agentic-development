# Movimentar atividade via botão enviar customizado no formulário

> **Fonte:** [https://fluiggers.com.br/t/movimentar-atividade-via-botao-enviar-customizado-no-formulario/1606](https://fluiggers.com.br/t/movimentar-atividade-via-botao-enviar-customizado-no-formulario/1606)
> **Categoria:** Formulários
> **Criado em:** 26/01/2023, 11:10
> **Visualizações:** 553 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Rafael Oliveira** (@roliveira) — 26/01/2023, 11:10

Bom dia a todos!
Não estou conseguindo avançar via SOAP uma atividade para um determinado usuário selecionado no campo do formulário. Acontece que, o usuário selecionado no campo do formulário é ignorado e a atividade é sempre movimentada para o admin do Fluig. Abaixo segue o XML que estou utilizando em um evento de clique do botão customizado.

var workflowServiceUrl = parent.WCMAPI.serverURL + ‘/webdesk/ECMWorkflowEngineService?wsdl’,
username = ‘teste’,
password = ‘teste’,
companyId = 1,
processInstanceId = 40500,
nextState = 30,
colleagueId = ‘UsuarioRecebe’,
userId = ‘UsuarioEnvia’;

var xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/"> <soapenv:Header/> <soapenv:Body> <ws:saveAndSendTaskClassic> <username>${username}</username> <password>${password}</password> <companyId>${companyId}</companyId> <processInstanceId>${processInstanceId}</processInstanceId> <choosedState>${nextState}</choosedState> <colleagueIds> <item>${colleagueId}</item> </colleagueIds> <comments>Atividade movimentada com sucesso!</comments> <userId>${userId}</userId> <completeTask>true</completeTask> <attachments> </attachments> <cardData /> <appointment /> <managerMode>false</managerMode> <threadSequence>0</threadSequence> </ws:saveAndSendTaskClassic> </soapenv:Body> </soapenv:Envelope>` ;

fetch(workflowServiceUrl, {
method: “POST”,
redirect: “follow”,
credentials: “omit”,
headers: {
“Content-Type”: “text/xml;charset=utf-8”
},
body: xml
})
.then(response => response.text())
.then(xmlText => (new DOMParser()).parseFromString(xmlText, “text/xml”))
.then(() => console.log(“Solicitação de movimentada com sucesso!”))
.catch(() => console.error(“Erro ao movimentar a solicitação.”));

Algum dos colegas conseguiriam me ajudar? Obrigado!

---

## Resposta #1

**jonathas araujo** (@jonathas_araujo) — 27/01/2023, 09:44

Seja bem vindo ao Fluiggers, comentando aqui para dar um UP nesse assunto, gostaria de saber como resolver tbm.

---

## Resposta #2

**Rafael Oliveira** (@roliveira) — 31/01/2023, 17:21

Boa tarde Jonathas!
Conseguir resolver o meu problema, mas sou usuário novo aqui no fórum e o sistema não está deixando que eu publique o código.

Tentando resumir… em meu processo, tenho uma atividade lógica onde tenho 3 mecanismos de atribuição configurados para “Atribuição por campo de formulário”. Dessa forma, o que fiz foi no bloco onde passo as informações de username e password, deixar colleagueIds vazio (coleagueIds = “”) e no cardData no corpo do XML, passar o usuário destinatário da atividade da seguinte forma: destinatario, assim, conseguir movimentar a atividade obedecendo o campo de formulário e evitando que seja sempre enviado para o admin.

---

## Resposta #3

**jonathas araujo** (@jonathas_araujo) — 01/02/2023, 08:01

Que bom a resolução, estou no fluig a uns 4 meses ainda é muito novo algumas coisas.

---

## Resposta #4

**Rafael Oliveira** (@roliveira) — 01/02/2023, 09:02

Eu também sou novo na ferramenta, 2 meses apenas. Qualquer coisa, passa seu contato que vamos nos ajudando.

---
