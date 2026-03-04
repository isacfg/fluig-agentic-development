# Integração Protheus X Fluig (widget)

> **Fonte:** [https://fluiggers.com.br/t/integracao-protheus-x-fluig-widget/3296](https://fluiggers.com.br/t/integracao-protheus-x-fluig-widget/3296)
> **Categoria:** Widgets
> **Tags:** `widget`, `integração`
> **Criado em:** 04/06/2025, 17:05
> **Visualizações:** 57 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Artur Alves** (@artur.alves) — 04/06/2025, 17:05

Boa tarde, pessoal!

Estou com uma dúvida, gostaria de saber se algum de vocês já realizou integração com o protheus através de alguma widget;

Pensei em fazer da seguinte forma:

Utilizar o script de integração gerado no ServiceTask de algum fluxo dentro de um dataset personalizado;
Mas ele retornou alguns erros de conexão com rest etc.

Atualmente estamos na versão 12.24.10 do Protheus, que exige autenticação no rest;

Através de formulárioe fluxo ele executa corretamente o serviço de integração, imagino que seja por rodar no backend;

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 05/06/2025, 07:56 | ❤️ 1

O Dataset roda em back-end, então deveria funcionar caso esteja fazendo igual ao que está no seu fluxo.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Artur Alves** (@artur.alves) — 05/06/2025, 08:58 | ❤️ 1

Consegui!

Segue o código:

```auto
function createDataset(fields, constraints, sortFields) {
    try {
        var oSolicitacaoRequest = new Object();
        var userFluig =  'ARTUR ALVES DE SOUZA';
        var obs1 = "teste";
        var obs2 = "teste";
        var filialEmpresa = '0101';
        var empresa = '01';

        oSolicitacaoRequest.filial = filialEmpresa;
        oSolicitacaoRequest.empresa = empresa;
        oSolicitacaoRequest.tipo_sc = 'normal';
        oSolicitacaoRequest.idFluig = '73864';
        oSolicitacaoRequest.usuario = userFluig;
        oSolicitacaoRequest.cc = '2009';
        oSolicitacaoRequest.observ = "OBS APROV:" + obs1 + " | OBS SOLIC:" + obs2;

        oSolicitacaoRequest.itens = [];

        var qtditens = 1;
        oSolicitacaoRequest.nitens = qtditens;

        for (var i = 1; i <= qtditens; i++) {
            var ItensSC = new Object();
            ItensSC.produto = '52M00900289';
            ItensSC.classificacao = '1010049';
            ItensSC.dt_nec = '05/06/2025';
            ItensSC.qtd = 1;
            ItensSC.valor = 736.39;
            ItensSC.itemctb = 'G31';

            oSolicitacaoRequest.itens.push(ItensSC);
        }

        var clientService = fluigAPI.getAuthorizeClientService();
        var compID = '01';
        var stringRequest = JSON.stringify(oSolicitacaoRequest);

        var data = {
            companyId : compID,
            serviceCode : 'serviceCode ',
            endpoint : '/endpoint ',
            method : 'post',
            timeoutService: '360',
            headers: {
                "tenantId" : empresa + ',' + filialEmpresa
            },
            params : {
                FlgGeraSC: JSON.parse(stringRequest)
            }
        };

        var vo = clientService.invoke(JSON.stringify(data));

        if (!vo || !vo.getResult()) {
            throw "Sem resposta da integração.";
        }

        var oRetorno = JSON.parse(vo.getResult());

        var dataset = DatasetBuilder.newDataset();
        dataset.addColumn("STATUS");
        dataset.addColumn("MENSAGEM");

        if (oRetorno.errorMessage) {
            dataset.addRow(["ERRO", oRetorno.errorMessage]);
        } else if (oRetorno.CTYPEMSG == "S") {
            dataset.addRow(["SUCESSO", oRetorno.CMESSAGE]);
        } else {
            dataset.addRow(["ERRO", oRetorno.CMESSAGE || "Erro desconhecido"]);
        }

        return dataset;

    } catch (erro) {
        var dataset = DatasetBuilder.newDataset();
        dataset.addColumn("STATUS");
        dataset.addColumn("MENSAGEM");

        dataset.addRow(["ERRO", erro.message || erro]);
        return dataset;
    }
}

function getConstraintValue(constraints, fieldName) {
	if (constraints != null) {
		for (var i = 0; i < constraints.length; i++) {
			if (constraints[i].fieldName == fieldName) return constraints[i].initialValue;
		}
	}
	return "";
}
```

Esse código ele já retorna se deu sucesso ou erro no momento da integração!

Defini os campos com valores fixos para testes, mas é a mesma lógica das contraints para pegar os valores da widget.
No fron você constrói uma constraint e passa através da execução do dataset da seguinte forma:

Definidas por variaveis:

```auto
if (constraints != null){
		for(var i=0;i<constraints.length;i++){
			log.info("### constraint = " + constraints[i].fieldName);
			if(constraints[i].fieldName == "ATIVO"){
				cod_ativo = constraints[i].getInitialValue().toUpperCase();
			}
		}
	}
```

Definidas no próprio campo:

```auto
var userFluig = getConstraintValue(constraints, "userFluig");
```

---
