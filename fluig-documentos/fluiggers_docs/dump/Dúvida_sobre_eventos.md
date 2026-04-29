# Dúvida sobre eventos

> **Fonte:** [https://fluiggers.com.br/t/duvida-sobre-eventos/3525](https://fluiggers.com.br/t/duvida-sobre-eventos/3525)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`
> **Criado em:** 16/12/2025, 08:56
> **Visualizações:** 26 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Leonardoo** (@Leonardoo) — 16/12/2025, 08:56 | ❤️ 1

Olá prezados! Estou começando agora com o Fluig acompanhando o Academy e o TDN eu fiquei com a seguinte duvida. Usando o Fluig no ambiente do Eclipse Lua como eu deveria validar quais campos devem ou não serem mostrados ao usuário dependo da atividade atual?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/12/2025, 09:36 | ❤️ 2

Normalmente faço isso no evento de formulário `displayFields`. Nele eu cuido tanto da exibição quanto em habilitar/desabilitar os campos (mesmo tendo o evento `enableFields` prefiro deixar tudo na displayFields logo).

Nesse evento o método `form.getFormMode()` indicará o modo do formulário, se está em modo Adição (`ADD`), no modo Edição (`MOD`), Visualização (`VIEW`) ou se não tem comunicação com o formulário (`NONE`).

Além disso você tem o método `getValue("WKNumState")` que indica o número da Atividade o formulário está (isso só aparece quando está dentro do processo).

Com esses métodos você consegue determinar o que quer exibir/ocultar e o que vai desabilitar.

Eu peguei um costume de ocultar e desabilitar todos os campos do formulário e exibir/habilitar só nas atividades específicas, principalmente porque não quero os formulários editados fora do processo.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 16/12/2025, 09:37 | ❤️ 1

Bom dia [@Leonardoo](/u/leonardoo) seja bem vindo a nossa comunidade!
Acredito que o evento mais apropriado seja o evento (script) de definição de formulário, eu utilizaria o evento DisplayFields, ele é carregado sempre que o formulário é aberto!
Segue um exemplo de um evento mencionado acima.

```javascript
function displayFields(form,customHTML){

form.setShowDisabledFields(true);

var matUsuario = getValue('WKUser');
var numAtividade = getValue("WKNumState");

var INICIO_ADIANTAMENTO = 1;
var APROVA_ADIANTAMENTO = 3;
var DEPOSITA_FINANCEIRO = 6;
var NOTIFICA_SOLICITANTE = 9;

var CamposINICIO_ADIANTAMENTO = ["solicitante","dataSolicitacao","dataViagem","valorAdiantamento","centroCusto","comentariosSolicitante"];
var CamposAPROVA_ADIANTAMENTO = ["aprovador","dataAprovacao","statusAprovacao","comentariosAprovacao"];
var CamposDEPOSITA_FINANCEIRO = ["responsavelFinanceiro","dataValidacao","valorDepositado","dataDeposito","numeroComprovante","statusDeposito","comentariosFinanceiro"];


customHTML.append("<script>");
customHTML.append("$(document).ready(function(){");

	if( numAtividade == 0 || numAtividade == INICIO_ADIANTAMENTO ){

      esconderDIV("#aprovador");
      esconderDIV("#financeiro");

	}

	if( numAtividade == APROVA_ADIANTAMENTO ){

        desabilitarCampos(CamposINICIO_ADIANTAMENTO);
        esconderDIV("#financeiro");

	}

    if( numAtividade == DEPOSITA_FINANCEIRO ){
        desabilitarCampos(CamposINICIO_ADIANTAMENTO);
        desabilitarCampos(CamposAPROVA_ADIANTAMENTO);


	}


    if( numAtividade == NOTIFICA_SOLICITANTE ){
        desabilitarCampos(CamposINICIO_ADIANTAMENTO);
		 desabilitarCampos(CamposINICIO_ADIANTAMENTO);
        desabilitarCampos(CamposAPROVA_ADIANTAMENTO);
        desabilitarCampos(CamposDEPOSITA_FINANCEIRO);

	}


	customHTML.append("});");
	customHTML.append("</script>");



function setCampoSolicitante( form ){
form.setValue("representanteComercialPortal", buscarNomeUsuario( getValue("WKUser") ) );



}

function setCampoDataHora( form ){
var dataatual = new Date();

form.setValue("dataPortal", formatadata(dataatual.getDate())+"/"+formatadata(parseInt(dataatual.getMonth()+1))+"/"+dataatual.getFullYear());
form.setValue("dataAnalise", formatadata(dataatual.getDate())+"/"+formatadata(parseInt(dataatual.getMonth()+1))+"/"+dataatual.getFullYear());
form.setValue("dataAbertura", formatadata(dataatual.getDate())+"/"+formatadata(parseInt(dataatual.getMonth()+1))+"/"+dataatual.getFullYear());
}

function buscarNomeUsuario(user) {
var userName = "";
var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", user, user, ConstraintType.MUST);
var dataset = DatasetFactory.getDataset("colleague", null, [ c1 ], null);
if (dataset.rowsCount == 1) {
	userName = dataset.getValue(0, "colleagueName");
}
return userName;
}

function getNomeSolicitante(){
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", matUsuario, matUsuario, ConstraintType.MUST);
	var filtro = new Array(c1);
	var dataset = DatasetFactory.getDataset("colleague", null, filtro, null);
	return dataset.getValue(0,"colleagueName");
}

function getDateToday(){
	var data = new Date();
	var dia = ('0' + data.getDate()).slice(-2);
	var mes =  ('0' + (data.getMonth() + 1)).slice(-2);
	var ano = data.getFullYear();
	return dia + '/' + mes + '/' + ano;
}

//Desabilitar Campos PaiXFilho
function desabilitarPaiFilho(tableName, campos) {
	var indexes = form.getChildrenIndexes(tableName);
    for (var i = 0; i < indexes.length; i++) {
	for (var j = 0; j < campos.length; j++) {
	form.setEnabled(campos[j] + "___" + indexes[i], false);
	      }
	    }
	  }


	function desabilitarCampos(campos1) {
		campos1.forEach(function(campo1) {
			form.setEnabled(campo1, false);
		});
	}

	function habilitarCampos(campos){
		campos.forEach(function(campo){
		 form.setEnabled(campo, true);
		});
	}

function esconderDIV(seletorCampo) {
customHTML.append("$('" + seletorCampo + "').hide();");
}

function mostrarDIV(seletorCampo) {
customHTML.append("$('" + seletorCampo + "').show();");
}

}
```

---

## Resposta #3

**Leonardoo** (@Leonardoo) — 16/12/2025, 09:59

Obrigado pelo apoio e tempo vou estudar sobre

---

## Resposta #4

**Leonardoo** (@Leonardoo) — 16/12/2025, 10:00

Obrigado pelo apoio e exemplo em código

---
