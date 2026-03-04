# Validação de Formulario

> **Fonte:** [https://fluiggers.com.br/t/validacao-de-formulario/1624](https://fluiggers.com.br/t/validacao-de-formulario/1624)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 01/02/2023, 13:12
> **Visualizações:** 776 | **Likes:** 0 | **Respostas:** 3

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 01/02/2023, 13:12

Boa tarde! Estou começando agora a trabalhar com o fluig, gostaria de uma explicação como posso fazer validação de campos através de código.
Já tentei procurar alguns videos porém não entendi direito

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 02/02/2023, 08:05

Boa tarde,

Existem duas maneiras padrões:
Um pelo arquivo validateform.js segue exemplo:

```auto
unction validateForm(form){
    var ativ = parseInt(getValue('WKNumState'));
	switch(ativ){
        case 0:
        case INICIO:
        	if(form.getValue('fnome___' + indexes[i]) == null || form.getValue('fnome___' + indexes[i]) == '') {
				throw "Informe o valor Ajustado!";
			}

        break;

        case AGUARDARASSINATURA :

        break;

        case INTEGRAR :

        break;

        case TRATARERRO :

        break;

        case COLOCARNOVAMENTE :

        break;
    }
}
```

Outra forma e pela função do beforsendvalidate

```auto
var beforeSendValidate = function(numState, nextState) {
	var jsonsort = [];

	if(control == 0 && nextState == 5){
        control = 1;
        modalDecision() ;
		$("#send-modal").find("button")[0].click();
        return false;
    };
    if(nextState == 15 && control==0 ){
        control=1;

        var arrayerro = [];
        $('[name^="itemsc4___"]').each(function(){
            var aux = $(this).val().split("___");
            var id=$(this)[0].id.split("___")

            if( parseFloat($("#vlrmax___"+aux[1]).val()) < parseFloat($("#preco4___"+id[1]).val())  &&  parseFloat($("#vlrmax___"+aux[1]).val())>0  ){

            	arrayerro.push("<strong>Item <span style='color:red'>"+id[1]+" </span> da cotação vencedora ultrapassou o valor maximo de "+$("#vlrmax___"+aux[1]).val()+"</strong><br>");

                $("#achouMaxVl").val("true");
            }
        });
        if (arrayerro.length > 0){
            var erro="";
            for (var i = 0; i < arrayerro.length; i++) {
                erro += arrayerro[i];
            }
            throw erro;
        }
    }

	$('[name^="quantidade___"]').each(function(){
		var id=$(this)[0].id.replace("quantidade___","");
		jsonsort.push(
			{
				"codproduto":$("#codproduto___"+id).val(),
				"conprod":$("#conprod___"+id).val(),
				"UN":$("#UN___"+id).val(),
				"cc":$("#cc___"+id).val(),
				"desc_cc":$("#desc_cc___"+id).val(),
				"quantidade":$("#quantidade___"+id).val(),
				"dataorcamento":$("#dataorcamento___"+id).val(),
				"codcontabil":$("#codcontabil___"+id).val(),
				"desc_contabil":$("#desc_contabil___"+id).val(),
				"obs":$("#obs___"+id).val(),
				"necessidade":$("#necessidade___"+id).val(),
				"entrega":$("#entrega___"+id).val()
			}
		);

	});
```

---

## Resposta #2

**kaue menezes salgado** (@kaue) — 03/02/2023, 16:39

Boa tarde, eu tentei fazer dessa forma

```javascript
function validateForm(form){
	var msg = "";

	if(form.getValue("razaoSocial") == "") {
		msg += "Campo Razão Social não foi preenchido </br>";
	}

	if(form.getValue("cnpj") == "") {
		msg += "Campo CNPJ não foi preenchido </br>";
	}

	if(form.getValue("ie") == "") {
		msg += "Campo IE não foi preenchido </br>";
	}

	if(form.getValue("im") == "") {
		msg += "Campo IM não foi preenchido </br>";
	}

	if(form.getValue("cep") == "") {
		msg += "Campo CEP não foi preenchido </br>";
	}

	if(form.getValue("logradouro") == "") {
		msg += "Campo Endereço não foi preenchido </br>";
	}

	if(form.getValue("complemento") == "") {
		msg += "Campo Complemento não foi preenchido </br>";
	}

	if(form.getValue("numero") == "") {
		msg += "Campo Numero não foi preenchido </br>";
	}

	if(form.getValue("bairro") == "") {
		msg += "Campo Bairro não foi preenchido </br>";
	}

	if(form.getValue("localidade") == "") {
		msg += "Campo Cidade não foi preenchido </br>";
	}

	if(form.getValue("uf") == "") {
		msg += "Campo Estado não foi preenchido </br>";
	}

	if(form.getValue("telefone1") == "") {
		msg += "Campo Telefone 1 não foi preenchido </br>";
	}
```

deu certo porém ficou um pouco feio, vi que pelo beforsendvalidate fica mais apresentável, porém mesmo com seu exemplo eu ainda não entendi como usar direito.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/02/2023, 17:57

Para saber simplesmente de campo não preenchido eu faço assim:

```javascript
function validateForm(form) {
    var atividadeAtual = parseInt(getValue("WKNumState"));

    var requiredFields = [
          {field: "contrato_codigo", message: "Contrato não possuí Código"}
        , {field: "contrato_razao_social", message: "Fornecedor sem Razão Social."}
        , {field: "contrato_fantasia", message: "Fornecedor sem Nome Fantasia."}
        , {field: "contrato_cnpj", message: "Fornecedor sem CNPJ."}
        , {field: "contrato_email", message: "Preencha o E-Mail do Fornecedor."}
        , {field: "contrato_contato", message: "Preencha o Contato do Fornecedor."}
        , {field: "contrato_telefone", message: "Preencha o Telefone do Fornecedor."}
        , {field: "contrato_fiscal", message: "Preencha o Fiscal do Contrato."}
        , {field: "contrato_gestor", message: "Preencha o Gestor do Fornecedor."}
    ];

    for (var i = 0; i < requiredFields.length; ++i) {
        if (valueIsEmpty(form.getValue(requiredFields[i].field))) {
            throw requiredFields[i].message;
        }
    }

    // Agora faço as validações específicas para cada etapa

    if (atividadeAtual == ATIVIDADE_APROVAR_SOLICITACAO) {
        if (valueIsEmpty(form.getValue("aprovacao_gerente"))) {
            throw "Necessário indicar se a solicitação está Aprovada ou se precisa Ajustar.";
        }

        if (form.getValue("aprovacao_gerente") == "ajuste"
            && valueIsEmpty(form.getValue("aprovacao_gerente_obs"))
        ) {
            throw "Necessário indicar o motivo da solicitação de ajuste na Observação Adicional.";
        }
    }

}

function valueIsEmpty(value) {
    return value == null || value == "";
}
```

---

## Resposta #4 ✅ RESPOSTA ACEITA

**kaue menezes salgado** (@kaue) — 09/02/2023, 13:26

Consegui através desse modo aqui

```javascript
var beforeSendValidate = function(numState, nextState) {

	campos = validateInpusForm(numState);

	if (campos != "" && campos != "<br>"){
		throw "<strong>Favor preencher os campos abaixo:</strong><br>"+campos;
	}

}

function validateInpusForm(numState) {
	var campos = ""
	var quebra = "<br>"

	if(numState == 1  || numState ==0 || numState == "" || numState == undefined){


		campos = validaCampoVazio("hTemAprov", "APROVADOR", "", campos);
		campos = validaCampoVazio("razaoSocial", "RAZÃO SOCIAL", "", campos);
		campos = validaCampoVazio("cnpj", "CNPJ", "", campos);
		campos = validaCampoVazio("cep", "CEP", "", campos);
		campos = validaCampoVazio("logradouro", "ENDEREÇO", "", campos);
		campos = validaCampoVazio("numero", "NUMERO", "", campos);
		campos = validaCampoVazio("bairro", "BAIRRO", "", campos);
		campos = validaCampoVazio("localidade", "CIDADE", "", campos);
		campos = validaCampoVazio("uf", "ESTADO", "", campos);
		campos = validaCampoVazio("telefone1", "TELEFONE 1 DA EMPRESA", "", campos);
		campos = validaCampoVazio("whatsapp", "WHATSAPP", "", campos);
		campos = validaCampoVazio("email", "E-MAIL DA EMPRESA", "", campos);
		campos = validaCampoVazio("nome", "NOME", "", campos);
		campos = validaCampoVazio("cpf", "CPF", "", campos);
		campos = validaCampoVazio("email2", "E-MAIL REPRESENTANTE LEGAL", "", campos);
		campos = validaCampoVazio("telefone01", "TELEFONE 1 REPRESENTANTE LEGAL", "", campos);
		campos = validaCampoVazio("banco", "BANCO", "", campos);
		campos = validaCampoVazio("agencia", "AGENCIA", "", campos);
		campos = validaCampoVazio("conta", "CONTA", "", campos);
		campos = validaCampoVazio("gerenteNome", "GERENTE NOME", "", campos);
		campos = validaCampoVazio("email3", "E-MAIL BANCARIO", "", campos);
		campos = validaCampoVazio("empresa", "EMPRESA", "", campos);
		campos = validaCampoVazio("nomeResponsavel", "NOME RESPONSAVEL", "", campos);
		campos = validaCampoVazio("whatsapp2", "WHATSAPP RESPONSAVEL", "", campos);
		campos = validaCampoVazio("email4", "E-MAIL RESPONSAVEL", "", campos);


	}

return campos
}


function validaCampoVazio(campo, textoCampo, textoErro, errorMsg, isZoomField = false, oneLevelUp = false, isZoomWithTooltip = false){
	var lineBreaker = "<br>";
	var valorCampo = $("#" + campo).val() + "";
	valorCampo = valorCampo.trim();
	if(valorCampo == "" || valorCampo == undefined || valorCampo == null || valorCampo == "undefined" || valorCampo == "null" || valorCampo == "0,00"){
		if(textoCampo == "" && textoErro != ""){
			errorMsg += "- " + textoErro + lineBreaker;
		}else{
			errorMsg += "- Campo <b>'" + textoCampo + "'</b> é obrigatório!" + lineBreaker;
		}
		addErrorClass(campo);
    }
	else{
		removeErrorClass(campo);
	}

	return errorMsg;
}

function removeErrorClass(campo){
	if($("#" + campo).parent().hasClass("has-error")){
		$("#" + campo).parent().removeClass("has-error");
	}
}

function addErrorClass(campo){
	if(!($("#" + campo).parent().hasClass("has-error"))){
		$("#" + campo).parent().addClass("has-error");
	}
}
```

vlw

---
