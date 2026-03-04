# Consulta usuário logado retornando código errado

> **Fonte:** [https://fluiggers.com.br/t/consulta-usuario-logado-retornando-codigo-errado/3055](https://fluiggers.com.br/t/consulta-usuario-logado-retornando-codigo-errado/3055)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`, `fluigapi`
> **Criado em:** 07/11/2024, 10:09
> **Visualizações:** 113 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Dalton Júnior** (@daltonpjunior) — 07/11/2024, 10:09

Bom dia pessoal,

Preciso construir um dataset para consultar uma API do Protheus e passar como parâmetro a matrícula do usuário logado, porém, ele não retorna o código interno correto do usuário logado.

Segue parte do código abaixo:

```javascript
function onSync(lastSyncDate) {

    var ds_wsgetfunc = DatasetBuilder.newDataset();

    try {

        ds_wsgetfunc = clearDataset(ds_wsgetfunc);

        var clientService = fluigAPI.getAuthorizeClientService();

        var ds_token_rest_protheus = DatasetFactory.getDataset("ds_token_rest_protheus",null,null,null);

        var currentUser = getValue("WKUser"); //Código do usuário logado

        log.info(_log + " - ID1: " + currentUser);

        var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", currentUser , currentUser, ConstraintType.MUST);
        var filter = new Array(c1);
        var validation = DatasetFactory.getDataset('colleague', null, filter, null); //Realiza a chamada do dataset

        var compID = getValue("WKCompany");
        var userID = validation.getValue(0,'colleaguePK.colleagueId');
        var data = {
                companyId: compID + '',
                serviceCode: 'protheus_rest',
                endpoint: '/fluig/api/wsgetfunc/v1/consultaFunc?ccodmat='+userID,
                method: 'get',
                timeoutService: '1000',
            headers: {
                "Content-Type": 'application/json;charset=UTF-8',
                "Authorization": 'Bearer ' +ds_token_rest_protheus.getValue(0,'access_token')
            }
        };

       log.info(_log + " - ID2: " + userID);
```

Eu chamo o getValue(“WKUser”) para pegar o usuário logado e consultar o dataset de e ele me traz sempre o usuário administrador ao invés do usuário dalton.junior que está logado.

Retorno:

2024-11-07 10:00:40,371 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (WebdeskScheduler\_Worker-0) ## ds\_wsgetfunc ## - ID1: administrador

2024-11-07 10:00:40,449 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (WebdeskScheduler\_Worker-0) ## ds\_wsgetfunc ## - ID2: administrador

---

## Resposta #1

**venturelli** (@venturelli) — 07/11/2024, 11:42

O método `onSync` normalmente é usado de forma assíncrona, e dessa forma será usado o usuário administrador mesmo.

Pelo que eu entendi do seu cenário, você deveria estar usando o método simples, `createDataset` mesmo. O `onSync` deve ser usado para datasets que terão um `cache` para evitar múltiplas chamadas ou mesmo tempos altos de resposta.

O resto do código continua igual, só muda o nome da função mesmo. Se precisar de um help da doc: [Construção do Dataset Avançado - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=412888219)

---

## Resposta #2

**Dalton Júnior** (@daltonpjunior) — 07/11/2024, 12:52

Boa tarde venturelli,

Sim, neste caso eu preciso que o Dataset seja assíncrono, visto que ele vai rodar todos os dias através de agendamentos, comunicando com o Protheus e atualizando os dados.

Se eu criar um Dataset síncrono, não consigo chegar no objetivo proposto. Tem alguma forma que conheça de capturar o usuário neste método ‘onSync’?

---
