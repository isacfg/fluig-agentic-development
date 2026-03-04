# Erro ao montar o JSON

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-montar-o-json/3368](https://fluiggers.com.br/t/erro-ao-montar-o-json/3368)
> **Categoria:** API`s Fluig
> **Tags:** `dataset`
> **Criado em:** 07/08/2025, 12:26
> **Visualizações:** 76 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Dalton Júnior** (@daltonpjunior) — 07/08/2025, 12:26

Boa tarde,

Estou montando um dataset que recebe duas constraints:

Código custom.js:

```auto
if (campo1 || campo2 ) {
            dadosTabela.push({
            	itemContaI: campo1,
                numContaI: campo2,
                lacre: campo3,
                lacreExp: campo4,
                tara: campo5,
                dtRetirada: campo6,
              	hrRetirada: campo7,
              	dtCarregamento: campo8,
              	terminal: campo9,
              	tamContaI: campo10,
              	armador: campo11,
              	argola: campo12,
              	observacao: campo13,
              	placa1: campo14,
              	placa2: campo15
            });
        }
    });

    // Debug no console
    console.log("DEBUG - dadosTabela:", dadosTabela);

    // Monta parâmetros para o dataset
    var constraints = [
        DatasetFactory.createConstraint("contrato", $("#numRC").val(), $("#numRC").val(), ConstraintType.MUST),
        DatasetFactory.createConstraint("itens", JSON.stringify(dadosTabela), JSON.stringify(dadosTabela), ConstraintType.MUST)
    ];

var ds = DatasetFactory.getDataset("ds_wspost_contai", null, constraints, null);

    FLUIGC.toast({
        title: 'Envio API:',
        message: ds.values[0].mensagem,
        type: ds.values[0].status === "OK" ? 'success' : 'danger'
    });
```

Estes dados são recebidos no dataset para ser enviados para uma API externa:

```auto
var dsName = "ds_wspost_contai";
var _log = "## ds_wspost_contai ## ";


function defineStructure() {

}

function onSync(lastSyncDate) {
}

function createDataset(fields, constraints, sortFields) {
    var ds_wspost_contai = DatasetBuilder.newDataset();

    ds_wspost_contai.addColumn("status");
    ds_wspost_contai.addColumn("mensagem");

    try {
        // ==========================================================
        // Captura parâmetros enviados pelo custom.js
        // ==========================================================
        var contrato    = getParam(constraints, "contrato");
        var itensJSON   = getParam(constraints, "itens"); // deve vir como string JSON
        var contratoStr = "";

        // Detecta e converte para string pura
        if (typeof contrato === "object" && contrato !== null) {
            contratoStr = String(contrato);
        }

        log.info("CONTRATO => " + contratoStr);
        log.info("TIPO de contrato: " + typeof contratoStr);
        log.info("ITENS (JSON bruto) => " + itensJSON);
        log.info("TIPO de itensJSON: " + typeof itensJSON);

        // ==========================================================
        // Chama dataset ds_token_rest_protheus para obter token
        // ==========================================================
        var dsToken = DatasetFactory.getDataset("ds_token_rest_protheus", null, null, null);

        if (!dsToken || dsToken.rowsCount == 0) {
            ds_wspost_contai.addRow(["ERRO", "Não foi possível obter o token do Protheus"]);
            return ds_wspost_contai;
        }

        var token = dsToken.getValue(0, "access_token");

        // ==========================================================
        // Monta payload final para API
        // ==========================================================

        //log.info("PAYLOAD" + itensSanitizados);

        // Monta o payload limpo, igual ao do Postman
        var payload = {
            "contrato": contratoStr,
            "itens": itensJSON
        };

        // ==========================================================
        //  Faz POST para API usando fluigAPI.getAuthorizeClientService
        // ==========================================================
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'protheus_rest', // Configurado no Painel de Integração do Fluig
            endpoint: '/fluig/api/wspostz02/v1/incluiContaI', // Caminho da API
            method: 'post',
            timeoutService: "1000",         // Tempo limite em segundos
            headers: {
                "Content-Type": 'application/json;charset=UTF-8',
                "Authorization": 'Bearer ' + token
            },
            params: JSON.stringify(payload)
        };


    var vo = clientService.invoke(JSON.stringify(data));

	var resultado = vo.getResult();

	if (resultado === "") {
    		ds_wspost_contai.addRow(["ERRO", "Sem resposta da API"]);
	} else {
    		ds_wspost_contai.addRow(["OK", resultado]);
	}

    } catch (e) {
        ds_wspost_contai.addRow(["EXCEPTION", e.toString()]);
    }

    return ds_wspost_contai;
}

function onMobileSync(user) {

}

// Função auxiliar para pegar parâmetros de constraints
function getParam(constraints, name) {
    if (constraints !== null) {
        for (var i = 0; i < constraints.length; i++) {
            if (constraints[i].fieldName == name) {
                return constraints[i].initialValue;
            }
        }
    }
    return "";
}
```

Os dados estão chegando como objetos e converto o contrato para string. Eles chegam neste formato:

```auto
CONTRATO => 010551
ITENS (JSON bruto) => [{"itemContaI":"01","numContaI":"TBRT 363666-6","lacre":"TESTE","lacreExp":"TESTE","tara":"1.000,00","dtRetirada":"","hrRetirada":"","dtCarregamento":"","terminal":"","tamContaI":"","armador":"","argola":"","observacao":"","placa1":"","placa2":""},{"itemContaI":"02","numContaI":"VREI 626262-6","lacre":"TESTE","lacreExp":"TESTE","tara":"5.000,00","dtRetirada":"","hrRetirada":"","dtCarregamento":"","terminal":"","tamContaI":"","armador":"","argola":"","observacao":"","placa1":"","placa2":""}]
```

Dito isso, é só montar o JSON, porém quando faço a montagem e dou um JSON.stringify(payload)) ele me retorna o erro, como senão conseguisse converter para JS puro.

Erro:

```auto
Envio API: InternalError: Java class "[Ljava.lang.reflect.Constructor;" has no public instance field or method named "toJSON". (Model#65)
```

Já tentei de tudo e não sei mais o que fazer.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/08/2025, 17:03 | ❤️ 1

Pelo que entendi tá acontecendo o mesmo problema que nessa postagem [Importar XML de Processo via REST - #2 de Bruno\_Gasparetto](https://fluiggers.com.br/t/importar-xml-de-processo-via-rest/3353/2)

A proriedade `params` espera um objeto pra ser convertido num Map<string, string>, mas você tá passando uma string.

Testa usar a propriedade `strParams` ao invés da `params`.

---

## Resposta #2

**Dalton Júnior** (@daltonpjunior) — 08/08/2025, 16:10

Boa tarde meu amigo,

Na verdade o itensJSON era um objeto e eu transformei ele em String e formatei com o JSON.parse e após isso utilizei o parâmetro strParams para envio do JSON.

Muito obrigado!

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 11/08/2025, 13:03

Outra dica e em calsa linha que deve se uma stringo use o String(“Sua string”)isso garante que teremos uma string paar fazer o stringfy

---
