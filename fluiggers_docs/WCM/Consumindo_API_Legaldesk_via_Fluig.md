# Consumindo API Legaldesk via Fluig

> **Fonte:** [https://fluiggers.com.br/t/consumindo-api-legaldesk-via-fluig/3456](https://fluiggers.com.br/t/consumindo-api-legaldesk-via-fluig/3456)
> **Categoria:** WCM
> **Tags:** `dataset`
> **Criado em:** 01/10/2025, 15:40
> **Visualizações:** 53 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 01/10/2025, 15:40

Prezado/Prezada, estou tentando fazer um ‘post’ numa API do Legaldesk, mas dá sempre um erro, que é meio obscuro. Como sempre no caso do Fluig, não tem documentação. O interessante é que, via POSTMAN ou via Python, meu colega consegue com a estrutura igual, mas com autenticação via ‘key’, enquanto que, no Fluig, sendo Basic, tenho de fazer com o login meu.

Meu Dataset está assim:

```auto
function createDataset(fields, constraints, sortFields) {
    // ds_ucrg_qivresp_legaldesk_ins
    let endpoint ="/SolicitacaoDespesaViews";
    let dataset = DatasetBuilder.newDataset();
    dataset.addColumn("Resultado_post");
    //-----
let idDespesa = fields[0];
 let dataDespesaFormatada = fields[1];
 let idProf = fields[2];
 let idRevisor = fields[3];
 let idPresta = fields[4];
 let idEscritorio = fields[5];
 let despesa = fields[6];
 let idGrupoJuridico = fields[7];
 let idCaso = fields[8];
 let casoCodigo = fields[9];
 let casoCodigoNumerico = fields[10];
 let materia = fields[11];
 let casoSituacaoJuridica = fields[12];
 let casoClienteId = fields[13];
 let casoClienteCodigo = fields[14];
 let idTipoDespesa = fields[15];
 let idMoeda = fields[16];
 let moedaCodigo = fields[17];
 let moedaSigla = fields[18];
 let moedaDescricao = fields[19];
 let valor = fields[20];
 let descricao = fields[21];
 let obs = fields[22];

    //-----
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: "UCRG_REST_LEGALDESK", // o nome do serviço REST cadastrado no Fluig HOMOLOGAÇÃO
            endpoint: endpoint,
            method: "post",
            timeoutService: "100",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" // <-- Adicione esta linha
            },
            body:{
    "Data": "2025-10-01T00:00:00",
    "ProfissionalId": "9DC50DAD-8DEC-46F1-A55B-E4FA23A225B4",
    "ProfissionalRevisorId": "46E9B6E3-42D9-42B4-B3F6-88D8138F67F1",
    "Tipo": "PC",
    "TipoPrestacaoContasId": "08D306E3-8012-F695-67FB-4059A3F3B502",
    "Despesa": "C",
    "GrupoJuridicoId": "08D31B6B-8012-F695-B904-AC74B382FD9A",
    "CasoId": "AAABAD5F-256F-4A7C-B66E-34A6475DDBBD",
    "CasoClienteId": "8B4BCA84-344C-4B80-96FB-E1825A3B0468",
    "TipoDespesaId": "08D315EF-8012-F695-09ED-14AD9EF94403",
    "Quilometragem": "1.00",
    "Quantidade": "1.00",
    "MoedaId": "C9080636-8C44-4D0A-A48D-8F1697F10163",
    "Valor": "1000.00",
    "Descricao": "teste de despesa de correio",
    "Observacao": "observação de teste",
    "Situacao": "P",
    "Revisada": "N",
    "Cobravel": "S"
}
        };
        //log.info("o que será que tem em data");
        //log.info(JSON.stringify(data.body));
        log.info("Payload enviado: " + JSON.stringify(data.body))
        var vo = clientService.invoke(JSON.stringify(data));
        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            dataset.addRow(["Erro", "Retorno vazio", "", ""]);
        } else {
   // 1. Logue o retorno BRUTO como string para ver o que realmente veio da API
    log.info("Retorno Bruto da API: " + vo.getResult());

    // Tente fazer o parsing
    try {
        var resp = JSON.parse(vo.getResult());
        log.info("O QUE SERÁ QUE FOI? (JSON Parsed)");
        log.info(JSON.stringify(resp));
        dataset.addRow(["deu certo?"]);
    } catch (e) {
        // 2. Se falhar o JSON.parse(), retorne a string bruta para o dataset
        // Isso fará o resultado bruto aparecer na tabela do Fluig para depuração
        dataset.addRow(["ERRO AO PARSEAR JSON: " + vo.getResult()]);
    }
}



    return dataset;
}
```

Eu engessei o ‘body’ porque o erro (abaixo) diz que há campo nulo, e, engessado, não tem como ter campo nulo. Diz que é um parâmetro ‘entity’, mas que não sei de onde veio isto.

> 2025-10-01 15:32:18,948 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-7712) Retorno Bruto da API: {
> “result”: {
> “error”: true,
> “type”: “general”,
> “message”: “Valor não pode ser nulo.\\r\\nNome do parâmetro: entity”,
> “stackTrace”: "ControllerName: SolicitacaoDespesaViews\\r\\nActionName: Post\\r\\nODataPath: SolicitacaoDespesaViews\\r\\nRequestUri: /API/v1/ODataGERALW/SolicitacaoDespesaViews\\r\\nStackTrace: "
> },
> “controllerName”: “SolicitacaoDespesaViews”,
> “actionName”: “Post”
> }

---

## Resposta #1

**Pablo Pádua** (@Pablo_Padua) — 10/10/2025, 15:50

O retorno provavelmente está ocorrendo porque de fato o **body** do request enviado está nulo.
No objeto de envio, você está utilizando a propriedade **body**, quando na verdade deveria usar **params**.

**Seu exemplo:**

```javascript
var data = {

body: {}

}
```

**O correto seria:**

```javascript
var data = {

params: {}

}
```

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 16/10/2025, 06:47 | ❤️ 1

Muito obrigado, [@Pablo\_Padua](/u/pablo_padua) e desculpa a demora em responder. Eu testei tantas coisas que acabei desistindo e, como tenho acesso direto ao banco de dados alvo, fiz a inserção/update direto via dataset pelos métodos clássicos do Fluig. Mas, testei, como sua boa sugestão, de todas as formas possíveis, mas não funcionou de jeito nenhum. Mas, para mim, está resolvido. Obrigado.

---
