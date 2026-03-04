# Iniciar solicitação externamente

> **Fonte:** [https://fluiggers.com.br/t/iniciar-solicitacao-externamente/2406](https://fluiggers.com.br/t/iniciar-solicitacao-externamente/2406)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `fluigapi`, `widget`
> **Criado em:** 06/12/2023, 10:04
> **Visualizações:** 212 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 06/12/2023, 10:04

Bom dia! Estava tentando criar uma widget em uma pagina publica para o fornecedor externamente iniciar uma solicitação, porém ao tentar iniciar a solicitação pela pagina publica da esse erro:

![image](https://fluiggers.com.br/uploads/default/original/2X/2/2757840fcb36f817eefbfd27fdfe2e9b41cb5b6f.png)

Então descobri que tem como fazer uma conexão do google forms e o fluig porém estou enfrentando um problema no script do google forms, ao tentar executar o codigo aparece o seguinte erro:

```javascript
TypeError: Cannot read properties of undefined (reading 'getResponse')
startProcess	@ startProcess.gs:71
```

Não sei oq está errado no codigo pois todas as variaveis estão iguais no codigo e se eu retirar a linha 71 ele funciona normalmente:

```javascript
/**
 * CONFIGURACOES DE INTEGRACAO FLUIG
 */
var FLUIG_BASE_URL = "https://???????.fluig.cloudtotvs.com.br";
var PROCESS_NAME = 'IniciarProcesso';


var CONSUMER_KEY = 'teste2';
var CONSUMER_SECRET = 'segundo';

var ACCESS_TOKEN = 'ef1c4858-d2c1-41c7-a4f7-b44106f0957d';
var TOKEN_SECRET = '65c80776-4392-4552-8eb8-aa0d3baaee5b3e2254ae-4ccf-4016-b233-617c492ae8c0';


function startProcess() {

var form = FormApp.getActiveForm();
var formResponses = form.getResponses();
var formResponseslength = formResponses.length;
var formResponsess = form.getResponses();
var formResponseslength = formResponsess.length;

/**
 * Obter o último registro do formulário.
 */
var cnae = formResponses[formResponseslength-1].getItemResponses()[0].getResponse();
var descricao = formResponses[formResponseslength-1].getItemResponses()[1].getResponse();
var tipoNegocio = formResponses[formResponseslength-1].getItemResponses()[2].getResponse();
var razaoSocial = formResponses[formResponseslength-1].getItemResponses()[3].getResponse();
var cnpj = formResponses[formResponseslength-1].getItemResponses()[4].getResponse();
var ie = formResponses[formResponseslength-1].getItemResponses()[5].getResponse();
var im = formResponses[formResponseslength-1].getItemResponses()[6].getResponse();
var cep = formResponses[formResponseslength-1].getItemResponses()[7].getResponse();
var endereco = formResponses[formResponseslength-1].getItemResponses()[8].getResponse();
var complemento = formResponses[formResponseslength-1].getItemResponses()[9].getResponse();
var numero = formResponses[formResponseslength-1].getItemResponses()[10].getResponse();
var bairro = formResponses[formResponseslength-1].getItemResponses()[11].getResponse();
var cidade = formResponses[formResponseslength-1].getItemResponses()[12].getResponse();
var estado = formResponses[formResponseslength-1].getItemResponses()[13].getResponse();
var telefone1 = formResponses[formResponseslength-1].getItemResponses()[14].getResponse();
var telefone2 = formResponses[formResponseslength-1].getItemResponses()[15].getResponse();
var whatsapp = formResponses[formResponseslength-1].getItemResponses()[16].getResponse();
var email = formResponses[formResponseslength-1].getItemResponses()[17].getResponse();
var nome = formResponses[formResponseslength-1].getItemResponses()[18].getResponse();
var cpf = formResponses[formResponseslength-1].getItemResponses()[19].getResponse();
var rg = formResponses[formResponseslength-1].getItemResponses()[20].getResponse();
var email2 = formResponses[formResponseslength-1].getItemResponses()[21].getResponse();
var telefone01 = formResponses[formResponseslength-1].getItemResponses()[22].getResponse();
var telefone02 = formResponses[formResponseslength-1].getItemResponses()[23].getResponse();
var banco = formResponses[formResponseslength-1].getItemResponses()[24].getResponse();
var agencia = formResponses[formResponseslength-1].getItemResponses()[25].getResponse();
var conta = formResponses[formResponseslength-1].getItemResponses()[26].getResponse();
var tipoConta = formResponses[formResponseslength-1].getItemResponses()[27].getResponse();
var empresa1 = formResponses[formResponseslength-1].getItemResponses()[28].getResponse();
var nomeResponsavel = formResponses[formResponseslength-1].getItemResponses()[29].getResponse();
var whatsapp2 = formResponses[formResponseslength-1].getItemResponses()[30].getResponse();
var email4 = formResponses[formResponseslength-1].getItemResponses()[31].getResponse();
var empresa2 = formResponses[formResponseslength-1].getItemResponses()[32].getResponse();
var nomeResponsavel2 = formResponses[formResponseslength-1].getItemResponses()[33].getResponse();
var whatsapp3 = formResponses[formResponseslength-1].getItemResponses()[34].getResponse();
var email5 = formResponses[formResponseslength-1].getItemResponses()[35].getResponse();
var empresa3 = formResponses[formResponseslength-1].getItemResponses()[36].getResponse();
var nomeResponsavel3 = formResponses[formResponseslength-1].getItemResponses()[37].getResponse();
var whatsapp4 = formResponses[formResponseslength-1].getItemResponses()[38].getResponse();
var email6 = formResponses[formResponseslength-1].getItemResponses()[39].getResponse();
var empresa4 = formResponses[formResponseslength-1].getItemResponses()[41].getResponse();
var nomeResponsavel4 = formResponses[formResponseslength-1].getItemResponses()[42].getResponse();
var whatsapp5 = formResponses[formResponseslength-1].getItemResponses()[43].getResponse();
var email7 = formResponsess[formResponseslength-1].getItemResponses()[44].getResponse();

var service = getFluigService();
  var url = FLUIG_BASE_URL  + '/process-management/api/v2/processes/' + PROCESS_NAME + '/start';

/**
 * Conteúdo para inserir no formulário do processo.
 */
var data = {
  'targetAssignee': "1275",
  'subProcessTargetState': "0",
  'comment': "",
  'formFields': {
     "cnae" : cnae,
     "descricao" : descricao,
     "tipoNegocio": tipoNegocio,
     "razaoSocial" : razaoSocial,
     "cnpj": cnpj,
     "ie" : ie,
     "im": im,
     "cep" : cep,
     "endereco" : endereco,
     "complemento": complemento,
     "numero" : numero,
     "bairro": bairro,
     "cidade" : cidade,
     "estado": estado,
     "telefone1" : telefone1,
     "telefone2": telefone2,
     "whatsapp" : whatsapp,
     "email": email,
     "nome" : nome,
     "cpf": cpf,
     "rg" : rg,
     "email2": email2,
     "telefone01" : telefone01,
     "telefone02": telefone02,
     "banco" : banco,
     "agencia": agencia,
     "conta" : conta,
     "tipoConta": tipoConta,
     "empresa1": empresa1,
     "nomeResponsavel": nomeResponsavel,
     "whatsapp2": whatsapp2,
     "email4": email4,
     "empresa2": empresa2,
     "nomeResponsavel2": nomeResponsavel2,
     "whatsapp3": whatsapp3,
     "email5": email5,
     "empresa3": empresa3,
     "nomeResponsavel3": nomeResponsavel3,
     "whatsapp4": whatsapp4,
     "email6": email6,
     "empresa4": empresa4,
     "nomeResponsavel4": nomeResponsavel4,
     "whatsapp5": whatsapp5,
     "email7": email7


  }

};


var options = {
  'method' : 'post',
  'contentType': 'application/json',
  'payload' : JSON.stringify(data)
};

options.muteHttpExceptions = true;

  var response = service.fetch(url, options);
  var result = JSON.parse(response.getContentText());

  Logger.log(JSON.stringify(result, null, 2));


MailApp.sendEmail("MEU_EMAIL@gmail.com","STATUS INTEGRACAO", "SATUS DA INTEGRACAO");


}


function getFluigService() {
  return OAuth1.createService('fluig')
      .setConsumerKey(CONSUMER_KEY)
      .setConsumerSecret(CONSUMER_SECRET)
      .setAccessToken(ACCESS_TOKEN, TOKEN_SECRET);
}
```

---
