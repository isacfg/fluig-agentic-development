# Before statement (BeforeTaskSave#1) in beforeTaskSAve at line number 1

> **Fonte:** [https://fluiggers.com.br/t/before-statement-beforetasksave-1-in-beforetasksave-at-line-number-1/3389](https://fluiggers.com.br/t/before-statement-beforetasksave-1-in-beforetasksave-at-line-number-1/3389)
> **Categoria:** Sem categoria
> **Criado em:** 26/08/2025, 07:36
> **Visualizações:** 57 | **Likes:** 3 | **Respostas:** 3

---

## Pergunta original

**Letícia Silva** (@Leticia_Silva) — 26/08/2025, 07:36

Arquivo js:
$(document).ready(function () {
var camposFabricaOcultos = 0;
FLUIGC.switcher.init(“#cbGestorAusente”);
var onlyDate = FLUIGC.calendar(‘.hora’, {
pickDate: false,
pickTime: true
});

```
var ativAtual = pegaAtividade();

    $("#pnPreenchimentoInicial").hide();
    $("#pnAutorizacaoGerencia").hide();
    $("#pnGestaoMudanca").hide();
    $("#pnLiberacaoSegurancao").hide();
    $("#pnManutencaoPotencia").hide();
    $("#pnAutorizacaoGestor").hide();
    $("#pnGeracaoNumeroEquipamento").hide();
    $("#pnMaquinaTransferencia").hide();
    $("#pnAutorizacaoSolicitante").hide();
    $("#pnMaquinaReativacao").hide();
    $("#pnMaquinaDesativacao").hide();
    $("#pnMaquinaCriacao").hide();
    $("#pnMetrologia").hide();
    $("#pnResponsavelIndustrializacao").hide();
    $("#pnResponsavelManutencao").hide();
    $("#pnContabilidadeDesativacao").hide();
    $("#pnResponsavelContabilidade").hide();
    $("#pnResponsavelLaudoSeguranca").hide();


if (ativAtual == 0 || ativAtual == 4) {
	// Esconde todos os painéis ao carregar a página
	 $("#pnPreenchimentoInicial").show();
     $("#pnMaquinaCriacao").hide();
 	 $("#pnMaquinaTransferencia").hide();
     $("#pnMaquinaReativacao").hide();
     $("#pnMaquinaDesativacao").hide();
 	 $("#pnAutorizacaoGestor").hide();
     $("#pnResponsavelIndustrializacao").hide();
 	 $("#pnResponsavelContabilidade").hide();
 	 $("#pnAutorizacaoSolicitante").hide();
     $("#pnResponsavelManutencao").hide();
 	 $("#pnGestaoMudanca").hide();
     $("#pnLiberacaoSegurancao").hide();
     $("#pnContabilidadeDesativacao").hide();
     $("#pnGeracaoNumeroEquipamento").hide();
	 $("#pnMetrologia").hide();
	 $("#pnGestaoMudanca").hide();
     $("#pnLiberacaoSegurancao").hide();
     $("#pnResponsavelLaudoSeguranca").hide();

} else if (ativAtual == 23) { // Aprovação do Gestor
	esconderTodosOsPaineis();

    var tipoSolicitacao = $("#tipoSolicitacao").val(); // Lê o tipo de solicitação

    if (tipoSolicitacao == "criacao") {
        $("#pnPreenchimentoInicial").show();
        $("#pnAutorizacaoGestor").show();
        $("#pnMaquinaCriacao").show();

	    } else if (tipoSolicitacao == "transferencia") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnMaquinaTransferencia").show();

	    } else if (tipoSolicitacao == "desativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnMaquinaDesativacao").show();

	    } else if (tipoSolicitacao == "reativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnResponsavelContabilidade").hide();

	    }

} else if (ativAtual == 85) { // PST-011 (Gestão de Mudanças)
	esconderTodosOsPaineis();

    var tipoSolicitacao = $("#tipoSolicitacao").val(); // Lê o tipo de solicitação
    if (tipoSolicitacao == "criacao") {
        $("#pnPreenchimentoInicial").show();
        $("#pnAutorizacaoGestor").show();
        $("#pnMaquinaCriacao").show();
        $("#pnGestaoMudanca").show();

	    } else if (tipoSolicitacao == "transferencia") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnGestaoMudanca").show();
	        $("#pnMaquinaTransferencia").show();

	    } else if (tipoSolicitacao == "desativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	       $("#pnGestaoMudanca").show();
	        $("#pnMaquinaDesativacao").show();

	    } else if (tipoSolicitacao == "reativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	       $("#pnGestaoMudanca").show();
	        $("#pnResponsavelContabilidade").hide();

	    }

} else if (ativAtual == 41) { // ap gerencia
	esconderTodosOsPaineis();

    var tipoSolicitacao = $("#tipoSolicitacao").val(); // Lê o tipo de solicitação
    if (tipoSolicitacao == "criacao") {
        $("#pnPreenchimentoInicial").show();
        $("#pnAutorizacaoGestor").show();
        $("#pnMaquinaCriacao").show();
        $("#pnGestaoMudanca").show();
        $("#pnAutorizacaoGerencia").show();


	    } else if (tipoSolicitacao == "transferencia") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnGestaoMudanca").show();
	        $("#pnMaquinaTransferencia").show();
            $("#pnAutorizacaoGerencia").show();


	    } else if (tipoSolicitacao == "desativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	       $("#pnGestaoMudanca").show();
	        $("#pnMaquinaDesativacao").show();
            $("#pnAutorizacaoGerencia").show();


	    } else if (tipoSolicitacao == "reativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	       $("#pnGestaoMudanca").show();
	        $("#pnResponsavelContabilidade").hide();
            $("#pnAutorizacaoGerencia").show();


	    }


} else if (ativAtual == 13) { //contabilidade - controladoria
	esconderTodosOsPaineis();
    var tipoSolicitacao = $("#tipoSolicitacao").val();
    $("#numeroAlternativo").val($("#numeroEquipamentoTAG").val());
	$("#codEquip").val($("#codEquipGeracao").val());

	    if (tipoSolicitacao == "criacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnGeracaoNumeroEquipamento").show();
	        $("#pnMaquinaCriacao").show();

	    } else if (tipoSolicitacao == "transferencia") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnMaquinaTransferencia").show();
	        $("#pnResponsavelContabilidade").show();

	    } else if (tipoSolicitacao == "desativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnContabilidadeDesativacao").show();

	    } else if (tipoSolicitacao == "reativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnGeracaoNumeroEquipamento").show();

	    }
```

} else if (ativAtual == 25) { // Verificação Solicitante
esconderTodosOsPaineis();
var tipoSolicitacao = $(“#tipoSolicitacao”).val();

```
// Exibe os painéis conforme o tipo de solicitação
if (tipoSolicitacao == "criacao") {
    $("#pnPreenchimentoInicial").show();
    $("#pnAutorizacaoGestor").show();
    $("#pnGeracaoNumeroEquipamento").show();
    $("#pnAutorizacaoSolicitante").show();
    $("#pnMaquinaCriacao").show();

} else if (tipoSolicitacao == "transferencia") {
    $("#pnPreenchimentoInicial").show();
    $("#pnAutorizacaoGestor").show();
    $("#pnMaquinaTransferencia").show();
    $("#pnAutorizacaoSolicitante").show();

} else if (tipoSolicitacao == "reativacao") {
    $("#pnPreenchimentoInicial").show();
    $("#pnAutorizacaoGestor").show();
    $("#pnMaquinaReativacao").show();
    $("#pnAutorizacaoSolicitante").show();

} else if (tipoSolicitacao == "desativacao") {
    $("#pnPreenchimentoInicial").show();
    $("#pnAutorizacaoGestor").show();
    $("#pnMaquinaDesativacao").show();
    $("#pnAutorizacaoSolicitante").show();

}
```

}else if (ativAtual == 32) { //Industrialização
esconderTodosOsPaineis();
var tipoSolicitacao = $(“#tipoSolicitacao”).val();

```
if (tipoSolicitacao == "criacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnMaquinaCriacao").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnGeracaoNumeroEquipamento").show();
		    $("#pnResponsavelIndustrializacao").show();


	    } else if (tipoSolicitacao == "transferencia") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnMaquinaTransferencia").show();
	        $("#pnResponsavelContabilidade").show();
		    $("#pnResponsavelIndustrializacao").show();


	    } else if (tipoSolicitacao == "desativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnContabilidadeDesativacao").show();
		    $("#pnResponsavelIndustrializacao").show();


	    } else if (tipoSolicitacao == "reativacao") {
	        $("#pnPreenchimentoInicial").show();
	        $("#pnAutorizacaoGestor").show();
	        $("#pnResponsavelContabilidade").show();
		    $("#pnResponsavelIndustrializacao").show();

	    }

   // !!PAREI AQUI

} else if (ativAtual == 35){ //manutenção
$("#pnPreenchimentoInicial").show();
$("#pnAutorizacaoGestor").show();
$("#pnAutorizacaoSolicitante").show();
$("#pnResponsavelIndustrializacao").show();
$("#pnResponsavelManutencao").show();
$("#pnGeracaoNumeroEquipamento").hide();
$("#pnMaquinaTransferencia").hide();
$("#pnMaquinaReativacao").hide();
$("#pnMaquinaDesativacao").hide();
$("#pnMetrologia").hide();
$("#pnContabilidadeDesativacao").hide();
$("#pnGeracaoNumeroEquipamento").hide();
$("#pnResponsavelContabilidade").hide();
```

} else if (ativAtual == 36){ //metrologia
$(“#pnPreenchimentoInicial”).show();
$(“#pnAutorizacaoGestor”).show();
$(“#pnAutorizacaoSolicitante”).show();
$(“#pnResponsavelIndustrializacao”).show();
$(“#pnResponsavelManutencao”).show();
$(“#pnMetrologia”).show();
$(“#pnGeracaoNumeroEquipamento”).hide();
$(“#pnMaquinaTransferencia”).hide();
$(“#pnMaquinaReativacao”).hide();
$(“#pnMaquinaDesativacao”).hide();
$(“#pnContabilidadeDesativacao”).hide();
$(“#pnGeracaoNumeroEquipamento”).hide();
$(“#pnResponsavelContabilidade”).hide();

}

```
});
```

function atualizarGrupoPorFabrica() {
var fabrica = $(“#fabrica”).val();

```
if (fabrica === 'Fábrica 2') {
    $("#grpManut").val('Pool:Group:grp_manutencaoMaquinas-MA');
} else if (fabrica === 'Fábrica 6') {
    $("#grpManut").val('Pool:Group:grp_manutencaoMaquinas-CB');
}
```

}

function mostraTipoSolicitacao() {
var tipoSolicitacao = $(“#tipoSolicitacao”).val();

```
switch (tipoSolicitacao) {
            case "criacao":
                 $("#pnMaquinaCriacao").show();
                 $("#pnMaquinaTransferencia").hide();
           	     $("#pnMaquinaReativacao").hide();
           	     $("#pnMaquinaDesativacao").hide();
                break;
            case "desativacao":
                $("#pnMaquinaDesativacao").show();
                $("#pnMaquinaCriacao").hide();
                $("#pnMaquinaTransferencia").hide();
           	    $("#pnMaquinaReativacao").hide();
                break;
            case "transferencia":
                $("#pnMaquinaTransferencia").show();
                $("#pnMaquinaReativacao").hide();
           	     $("#pnMaquinaDesativacao").hide();
           	 	$("#pnMaquinaCriacao").hide();

                break;
            case "reativacao":
                $("#pnMaquinaReativacao").show();
                $("#pnMaquinaDesativacao").hide();
           	 	$("#pnMaquinaCriacao").hide();
                $("#pnMaquinaTransferencia").hide();

                break;
            default:
                // Nenhuma opção válida selecionada
                break;
        }
```

}

function esconderTodosOsPaineis() {
$(“#pnPreenchimentoInicial”).hide();
$(“#pnAutorizacaoGestor”).hide();
$(“#pnGeracaoNumeroEquipamento”).hide();
$(“#pnMaquinaTransferencia”).hide();
$(“#pnAutorizacaoSolicitante”).hide();
$(“#pnMaquinaReativacao”).hide();
$(“#pnMaquinaDesativacao”).hide();
$(“#pnMaquinaCriacao”).hide();
$(“#pnMetrologia”).hide();
$(“#pnResponsavelIndustrializacao”).hide();
$(“#pnResponsavelManutencao”).hide();
$(“#pnContabilidadeDesativacao”).hide();
$(“#pnGestaoMudanca”).hide();
$(“#pnLiberacaoSegurancao”).hide();
$(“#pnResponsavelContabilidade”).hide();
}

//executa toda vez antes de enviar a solicitação
var beforeSendValidate = function(numState, nextState) {
var ativAtual = pegaAtividade();

```
if (ativAtual == 0 || ativAtual == 4) {
    if (
        $("#fabrica").val() == '' ||
        $("#plantaResponsavel").val() == '' ||
        $("#registro").val() == '' ||
        $("#nome").val() == '' ||
        $("#emailColaborador").val() == '' ||
        $("#tipoSolicitacao").val() == ''
    ) {
        throw("Insira as informações de estabelecimento, departamento, nome, registro, e-mail e tipo de solicitação.");
    }

    var tipo = $("#tipoSolicitacao").val().toLowerCase();

    if (tipo == 'criacao') {
        if (
            $("#fabricaCriacao").val() == '' ||
            $("#plantaResponsavelCriacao").val() == '' ||
            $("#unNegocioMaquina").val() == '' ||
            $("#linha").val() == '' ||
            $("#centroCusto").val() == '' ||
            $("#nomeEquip").val() == '' ||
            $("#turnos").val() == ''
        ) {
            throw("Para solicitações do tipo 'criação', preencha todos os campos obrigatórios: fábrica, planta responsável, unidade de negócio, linha, centro de custo, potência, nome do equipamento e turnos.");
        }
    }

    if (tipo == 'transferencia') {
        if (
            $("#fabricaAtual").val() == '' ||
            $("#centroCustoAtual").val() == '' ||
            $("#codigoEquipamentoTransferencia").val() == '' ||
            $("#fabricaNova").val() == '' ||
            $("#centroCustoNovo").val() == ''
        ) {
            throw("Para solicitações do tipo 'transferência', preencha todos os campos obrigatórios: fábrica atual, centro de custo atual, código do equipamento, nova fábrica e novo centro de custo.");
        }
    }

    if (tipo == 'desativacao') {
        if (
            $("#estabelecimentoDesativacao").val() == '' ||
            $("#codPlantaDesativacao").val() == '' ||
            $("#unNegocioMaquinaDesativacao").val() == '' ||
            $("#linhaDesativacao").val() == '' ||
            $("#centroCustoDesativacao").val() == '' ||
            $("#codigoMaqDesativacao").val() == ''
        ) {
            throw("Para solicitações do tipo 'desativação', preencha todos os campos obrigatórios: estabelecimento, código da planta, unidade de negócio, linha, centro de custo e código da máquina.");
        }
    }

    if (tipo === 'reativacao') {
        if (
            $("#numeroAlternativoReativacao").val() == '' ||
            $("#unNegocioMaquinaReativacao").val() == '' ||
            $("#centroCustoReativacao").val() == ''
        ) {
            throw("Para solicitações do tipo 'reativação', preencha os campos obrigatórios: número alternativo, unidade de negócio e centro de custo.");
        }
    }

    // Definição do grupo de manutenção com base no código da fábrica
    if ($("#codFabOcorrencia").val() == '2') {
        $("#grpManut").val('Pool:Group:grp_manutencaoMaquinasMA');
    } else if ($("#codFabOcorrencia").val() == '6') {
        $("#grpManut").val('Pool:Group:grp_manutencaoMaquinasCB');
    }
}

else if (ativAtual == 23) { // Aprovação do Gestor
    if ($("#aprovacaoGestor").val() == '') {
        throw("O campo de aprovação do gestor é obrigatório.");
    }
}

else if (ativAtual == 13) { // Contabilidade
    var tipoSolicitacao = $("#tipoSolicitacao").val().toLowerCase();
    $("#numeroAlternativo").val($("#numeroEquipamentoTAG").val());
	$("#codEquip").val($("#codEquipGeracao").val());

    if (tipoSolicitacao === 'transferencia' || tipoSolicitacao === 'desativacao') {
        if ($("#resultadoContabilidade").val() == '') {
            throw("O campo 'Resultado da Contabilidade' é obrigatório para solicitações do tipo 'transferência' ou 'desativação'.");
        }
    }

    if (tipoSolicitacao === 'reativacao' || tipoSolicitacao === 'criacao') {

        if (
            $("#numeroEquipamentoTAG").val() == '' ||
            $("#codEquipGeracao").val() == ''
        ) {
            throw("Para solicitações do tipo 'reativação' ou 'criação', preencha os campos obrigatórios: Número do Equipamento (TAG) e Código do Equipamento para Geração.");
        }
    }
}

 else if (ativAtual == 32) { // Industrialização
    if (
        $("#resultadoIndustrializacao").val() == '' ||
        $("#dataInd").val() == ''
    ) {
        throw("Os campos 'Resultado da Industrialização' e 'Data' são obrigatórios.");
    }
} else if (ativAtual == 35) { // Manutenção
    if ($("#resultadoManutencao").val() == '') {
        throw("O campo 'Resultado da Manutenção' é obrigatório.");
    }
}

else  if (ativAtual == "36") {
    var termoAceito = $("#cbTermo1").is(":checked");

    if (!termoAceito) {
        throw "Você deve aceitar o termo de responsabilidade referente à verificação de metrologia antes de continuar.";
    }
}
```

}

//busca a fábrica e o departamento
function setSelectedZoomItem(selectedItem) {

```
if (selectedItem.inputId == "fabrica") {
	$("#codFabOcorrencia").val(selectedItem["CODFABRICA"]);
	reloadZoomFilterValues("plantaResponsavel", "fabrica," + selectedItem["CODFABRICA"]);

	if($("#codFabOcorrencia").val() == '1'){
		$("#estabelecimento").val("52850682000125");
	}else if($("#codFabOcorrencia").val() == '2'){
		$("#estabelecimento").val("52850682000478");
	}else if($("#codFabOcorrencia").val() == '4'){
		$("#estabelecimento").val("52850682001105");
	}else if($("#codFabOcorrencia").val() == '5'){
		$("#estabelecimento").val("52850682001016");
	}else{
		$("#estabelecimento").val("52850682001288");
	}
}else if (selectedItem.inputId == "plantaResponsavel") {
	$("#registroResp").val(selectedItem["REGISTRORESP"]);
    $("#codPlanta").val(selectedItem["CODPLANTA"]);
    $("#aprovador").val(selectedItem["NOMERESP"]);

}else if (selectedItem.inputId == "fabricaCriacao") {
	$("#codFabOcorrenciaCriacao").val(selectedItem["CODFABRICA"]);
	reloadZoomFilterValues("plantaResponsavelCriacao", "fabrica," + selectedItem["CODFABRICA"]);

	if($("#codFabOcorrenciaCriacao").val() == '1'){
		$("#estabelecimentoCriacao").val("52850682000125");
	}else if($("#codFabOcorrenciaCriacao").val() == '2'){
		$("#estabelecimentoCriacao").val("52850682000478");
	}else if($("#codFabOcorrenciaCriacao").val() == '4'){
		$("#estabelecimentoCriacao").val("52850682001105");
	}else if($("#codFabOcorrenciaCriacao").val() == '5'){
		$("#estabelecimentoCriacao").val("52850682001016");
	}else{
		$("#estabelecimentoCriacao").val("52850682001288");
	}
}else if (selectedItem.inputId == "plantaResponsavelCriacao") {
	$("#registroRespCriacao").val(selectedItem["REGISTRORESP"]);
    $("#codPlantaCriacao").val(selectedItem["CODPLANTA"]);

}else if (selectedItem.inputId == "fabricaDesativacao") {
	$("#codFabOcorrenciaDesativacao").val(selectedItem["CODFABRICA"]);
	reloadZoomFilterValues("plantaResponsavelDesativacao", "fabrica," + selectedItem["CODFABRICA"]);

	if($("#codFabOcorrenciaDesativacao").val() == '1'){
		$("#estabelecimentoDesativacao").val("52850682000125");
	}else if($("#codFabOcorrenciaDesativacao").val() == '2'){
		$("#estabelecimentoDesativacao").val("52850682000478");
	}else if($("#codFabOcorrenciaDesativacao").val() == '4'){
		$("#estabelecimentoDesativacao").val("52850682001105");
	}else if($("#codFabOcorrenciaDesativacao").val() == '5'){
		$("#estabelecimentoDesativacao").val("52850682001016");
	}else{
		$("#estabelecimentoDesativacao").val("52850682001288");
	}
}else if (selectedItem.inputId == "plantaResponsavelDesativacao") {
	$("#registroRespDesativacao").val(selectedItem["REGISTRORESP"]);
    $("#codPlantaDesativacao").val(selectedItem["CODPLANTA"]);

}
```

}

//busca o registro
function buscaRegistro(local) {
if(local == ‘registro’){
if ($(“#registro”).val() == “” || $(“#estabelecimento”).val() == “”) {
FLUIGC.toast({
title: 'Verificar campos: ',
message: ‘Necessário preencher o campo “Registro” e “Estabelecimento” para inserir o participante.’,
type: ‘warning’
});
} else {
preencheCC($(“#registro”).val(), $(“#estabelecimento”).val(),local);

```
}
}
```

}

// insere o registro no campo correto
function preencheCC(registro, estabelecimento,local) {
var b1 = DatasetFactory.createConstraint(“registro”, registro, registro, ConstraintType.MUST);
var b2 = DatasetFactory.createConstraint(“estabelecimento”, estabelecimento, estabelecimento, ConstraintType.MUST);
var constraints = new Array(b1, b2);
var dsFuncionarioDTS = DatasetFactory.getDataset(“dsFuncionarioDTS”, null, constraints, null);
if(local == ‘registro’){
if (dsFuncionarioDTS.values.length > 0 && dsFuncionarioDTS.values\[0\]\[“funcionario”\] != “”) {
$(‘#nome’).val(dsFuncionarioDTS.values\[0\]\[“nome”\]);
$(‘#txt\_cdn\_estab’).val(dsFuncionarioDTS.values\[0\]\[“estabelecimento”\]);
$(‘#txt\_cdnfunc’).val(dsFuncionarioDTS.values\[0\]\[“cdfunc”\]);
$(‘#txt\_cdcracha’).val(dsFuncionarioDTS.values\[0\]\[“cdcracha”\]);
$(‘#email’).val(dsFuncionarioDTS.values\[0\]\[“email”\])
} else {
FLUIGC.toast({
title: ‘Verificar campos: ‘,
message: ‘Registro ou estabelecimento não encontrado.’,
type: ‘warning’
});
$(’#nome’).val(‘’);
$(‘#txt\_cdn\_estab’).val(‘’);
$(‘#txt\_cdnfunc’).val(‘’);
$(‘#email’).val(‘’);
}
}
}

//formata a data para padrão BR
function formataData(data){
if(data.indexOf(‘-’) != -1 && data.indexOf(‘/’) == -1){
var dataRecebida = data;
var dataSplit = dataRecebida.split(‘-’);
var dataFinal = dataSplit\[2\] + ‘/’ + dataSplit\[1\] + ‘/’ + dataSplit\[0\];
return dataFinal;
}else{
return data;
}

}

function FormattedDateTime(dateTime){
if (dateTime.length == 1){
dateTime = “0” + dateTime;
}
return dateTime;
}//fim função data do dia

function obterDataAtual() {
const agora = new Date();
const dia = String(agora.getDate()).padStart(2, ‘0’);
const mes = String(agora.getMonth() + 1).padStart(2, ‘0’);
const ano = agora.getFullYear();

```
return dia + '/' + mes + '/' + ano;
```

}

function showCamera(){
JSInterface.showCamera();
}

Arquivo beforeTaskSave:
function beforeTaskSave(colleagueId,nextSequenceId,userList){
var ativAtual = getValue(“WKNumState”);
var numProcesso = getValue(“WKNumProces”);
if(ativAtual == 0 || ativAtual == 4){
hAPI.setCardValue(“numProcesso”, numProcesso);
}
}

Estou com esse problema, imagino que seja no inicio, que o $(document).ready(function () { esteja fechando antes do tempo, ou depois.
Alguém poderia me dar uma luz?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/08/2025, 09:50 | ❤️ 1

Quando for postar código clique no ícone `code fences` do editor e então digite o código dentro da marcação. Se for JS já tem o ícone atalho pra isso.

![image](https://fluiggers.com.br/uploads/default/original/2X/9/975b61aa123f229177cc39541a4fd2bcaf619383.png)

Ao fazer isso ele vai criar essa “cerca” pra você digitar o código.
![image](https://fluiggers.com.br/uploads/default/original/2X/c/ceca2074cf37127390c820134fd6bc70c7e011ce.png)

Sem postar o código assim, pra ficar formatado, fica muito difícil ajudar, porque fica uma bagunça na postagem.

No que você disse ser o arquivo **beforeTaskSave** não vi problema aparente. O `$(document).ready(...)` (que já é depreciado há tempos pela JQuery) nem está indicado estar no **beforeTaskSave**, e nem poderia estar mesmo.

Numa situação dessas confirme que o seu editor de texto está salvando os scripts em UTF-8 Sem BOM, pois o BOM normalmente insere uns caracteres estranhos no início do arquivo e dá erro.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/08/2025, 10:12 | ❤️ 2

Ah, um detalhe que passou batido.

No evento `beforeTaskSave` você está pegando o número do processo na atividade 0 ou 4. Elas são as atividades iniciais do seu processo, certo? Acho que nesse evento, na primeira atividade, não é possível pegar o `getValue("WKNumProces")`, pois nesse momento o processo ainda não foi criado.

Quando queremos salvar no formulário o número do processo fazemos isso no evento `afterProcessCreate`.

---

## Resposta #3

**Letícia Silva** (@Leticia_Silva) — 27/08/2025, 13:54

Bruno, obrigada por mostrar o campo para anexar o código, eu não havia visto essa opção.
Ao inspecionar, eu estou com esse erro:
jquery.mask.min.js:1 Failed to load resource: the server responded with a status of 500 (Internal Server Error).

Você ja viu algo assim?

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 29/08/2025, 07:20

Aparentemente você tá tentando usar esse plugin, mas não indicou o caminho correto ou não o colocou no Fluig

---
