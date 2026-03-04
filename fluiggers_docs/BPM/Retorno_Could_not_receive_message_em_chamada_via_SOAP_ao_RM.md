# Retorno "Could not receive message" em chamada via SOAP ao RM

> **Fonte:** [https://fluiggers.com.br/t/retorno-could-not-receive-message-em-chamada-via-soap-ao-rm/2869](https://fluiggers.com.br/t/retorno-could-not-receive-message-em-chamada-via-soap-ao-rm/2869)
> **Categoria:** BPM
> **Tags:** `rm`, `webservice`, `soap`
> **Criado em:** 30/06/2024, 22:36
> **Visualizações:** 211 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Matheus Mósso** (@msmosso) — 30/06/2024, 22:36

Boa noite,

Estamos utilizando uma atividade de serviço para gerar uma solicitação de compras no RM, a chamada está sendo feita via SOAP. Na maioria das vezes a solicitação é gerada corretamente, mas em algumas situações recebemos o seguinte retorno:

```auto
JavaException: javax.xml.ws.WebServiceException: Could not receive Message. (#239) - Tempo de Execução 120 s
```

Enviar novamente a solicitação para atividade de serviço resolve.

Aparentemente trata-se de um erro no retorno do RM, alguém já enfrentou esse problema?

Obrigado desde já.

---

## Resposta #1

**Maxson Santana Carvalho** (@Maxson_Santana_Carva) — 20/08/2024, 15:15 | ❤️ 1

Provavelmente é o tempo de integração do seu sistema está demorando, dar para resolver isto aumentando o timeOut no seu arquivo domain.xml(C:\\fluig\\appserver\\domain\\configuration) da plataforma fluig.
Segue documentação: [Como alterar o timeout da plataforma - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Como+alterar+o+timeout+da+plataforma)

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 22/08/2024, 14:58 | ❤️ 1

Você também consegue aumentar o tempo de timeout da sua chamada do saveRecord sem precisar alterar da plataforma como um todo dessa forma:

```javascript
// monta a requisição ao servidor
    var servico = ServiceManager.getService(SERVICO);
    var instancia = servico.instantiate(CAMINHO_SERVICO);
    var ws = instancia.getRMIwsDataServer();
    var serviceHelper = servico.getBean();
    var properties = {};
    properties['basic.authorization'] = 'true';
    properties['basic.authorization.username'] = USUARIO;
    properties['basic.authorization.password'] = SENHA;
    properties['disable.chunking'] = 'true';
    properties['log.soap.messages'] = 'true';
    properties['receive.timeout'] = '180000'; // timeout em milissegundos
    var authService = serviceHelper.getCustomClient(ws, CLASSE_SERVICO, properties);
    //		var authService = serviceHelper.getBasicAuthenticatedClient(ws, CLASSE_SERVICO, USUARIO, SENHA);

    // contexto para chamada do DataServer
    CONTEXTO = 'CODUSUARIO=' + USUARIO + ';CODSISTEMA=T;CODCOLIGADA=' + CODCOLIGADA;

    var resp = authService.saveRecord(NOMEDATASERVER, XML, CONTEXTO);
```

Coloquei o código pela metade pois o importante é a criação desse properties onde vc coloca o tempo de timeout em milisegundos, ou seja, 180000 = 3 minutos, recomendo ir aumentando aos poucos, colocar 5min inicialmente e ir validando se é o suficiente para sua demanda.

---

## Resposta #3

**Matheus Mósso** (@msmosso) — 31/08/2024, 12:43

Muito obrigado, pessoal. Vou testar essa solução de aumentar o timeout. Por incrível que pareça o erro não acontece há bastante tempo.

---
