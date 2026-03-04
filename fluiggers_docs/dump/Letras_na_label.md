# Letras na label

> **Fonte:** [https://fluiggers.com.br/t/letras-na-label/1771](https://fluiggers.com.br/t/letras-na-label/1771)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 20/03/2023, 11:28
> **Visualizações:** 526 | **Likes:** 2 | **Respostas:** 6

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 20/03/2023, 11:28

Bom dia! Alguém conseguiria me explicar o motivo de estar aparecendo umas letras na minha label, o código em si vai pegar algumas informações do formulário e juntar com o a label, criando assim um termo, porém sempre que clico para fazer um novo documento e vou verificar aparece duas letras aleatórias e não faço ideia de como faço para elas não aparecerem .

Segue codigo:

```javascript
function gerarPdf2(){

	var gerou2 = $("#termoGerado2").val();

	var campos = validateInpusForm(ATIVIDADE);

	if (campos != "" && campos != "<br>"){
		FLUIGC.toast({
			title: 'Erro: ',
			message: "É necessário o preenchimento de todos os campos antes de gerar o Pedido.",
			type: 'danger'
		});
	}
	else{
		if (gerou2 ==""){
			var doc = new jsPDF();
		    var fileName = 'Termo de Doação.pdf';
		    margins = {
		            top: 8,
		            bottom: 60,
		            left: 30,
		            width: 160
		        };
		    specialElementHandlers = {
		            // element with id of "bypass" - jQuery style selector
		            '#bypassme': function (element, renderer) {
		                // true = "handled elsewhere, bypass text extraction"
		                return true
		            }
		        };

			doc.fromHTML('<table align="center" border="1" cellpadding="1" cellspacing="1">'+
					'<tbody>' +
					'<tr style="text-align: center;">' +
						'<td style="text-align: center;"><strong><u>TERMO DE DOAÇÃO</u></strong></td>' +
					'</tr>'+
				'</tbody>'+
			'</table>'+
			'<div style="line-break: loose;;  color: black;  font-family: Courier New, Courier, monospace;  text-decoration: blink; white-space: pre-line;" >' +
			'<p>&nbsp;</p>'+


			'<label><p>Por este instrumento particular, a <b>Sr(a).</b> '+$("#donatario").val()  +', brasileiro(a) '+', estado civil ' + $("#eCivil").val() + ' portador(a) da cédula de identidade RG Sob n° ' +
			$("#rgDonatario").val() + ', inscrita no CPF/MF sob o n° '+$("#cpfDonatario").val() + ', residente e domiciliado(a) em ' + $("#endereco").val() + ', ' + $("#n").val() + ' ' +
			$("#compl").val() + ', - ' + $("#bairro").val() + '; ' + $("#cidade").val() +' - '+  $("#estado").val() +' doravante denominada <b>"Donatário(a)"</b> vem ' +
			'pelo presente termo, com base no artigo 541 do Código Civil Brasileiro, aceitar na forma de doação voluntária a quantia em moeda corrente nacional equivalente à R$' +
			$("#valor").val() + ' sendo que sobre este valor será descontado 04% (quatro por cento), a titulo do '+'imposto “ITMCD - Imposto de Transmissão Causa Mortis ' +
			'e Doação”, totalizando o valor de R$(50.000), recebidos na data deste instrumento, através de depósito bancário junto ao Banco ' +
			$("#banco").val() + ', Agência n° ' + $("#agencia").val()  + ' e Conta Corrente '+
			'n° ' + $("#nConta").val() + ', do <b>Sr. CLEITON JOSE DA SILVA</b>, que também assina como <b>"CLEITON JOSE"</b>, ' +
			'brasileiro, divorciado, empresário, portador da Cédula de Identidade R.G. sob o n° 0.000.000, inscrito ' +
			'no CPF/MF sob o n°. 000.000.000-00, '+'residente e domiciliado à Avenida João Ninguem, ' +
			'n° 100 - Alto de macapá - São Paulo - Capital, doravante denominado <b>"Doador"</b>.</p> </label> '+
			'<label><p>A Donatário(a) declara estar ciente e de acordo que a presente doação não representa, e nem poderá ser '+
			'interpretada, como sendo qualquer forma de prorrogação, renovação ou novação de quaisquer acordos '+
			'anteriores que possuía celebrado com o Doador, representando sim, por parte deste, mero ato de '+
			'liberalidade, ou seja, sem que o Doador tenha qualquer obrigação para com a Donatária. </p></label>'+
			'<label><p>Embora este Termo de Doação seja assinado na presente data abaixo, suas cláusulas retroagem e '+
			'alcançam data de pagamento realizada em ' +  $("#dtAss").val() + '. </p></label>'+
			'<label><p>As partes e as testemunhas reconhecem a validade e plena eficácia da assinatura digital, ainda que estabelecida com assinatura eletrônica ou certificação fora dos padrões ICP-Brasil, '+
			'conforme disposto pelo artigo 10 da Medida Provisória 2220-2/2001, em vigor no Brasil, '+
			'reconhecendo, outros sim, que a forma de contratação por meio eletrônico é hábil a constituir título executivo extrajudicial. </p> </label>'+

			'<p>São Paulo, ' +  $("#dtRetro").val() + '.</p> <br/> <br/> <br/>' +

			'_________________________________________'+

			'<p>' + $("#donatario").val() + '</p> <br />'+
			'<b>"Donatária"</b>'+

			'<p>________________________________</p><br />'+
			'- MAURICIO ARAUJO DE SOUZA -' +

			'<p><b>"Doador"</b></p> <br/> <br/>' +

			'<p>Testemunhas:</p>'+

			'<p>1.)___________________________________<br />'+
			'&nbsp; &nbsp; &nbsp;' + $("#nometest1").val() + '<br />' +
			'&nbsp; &nbsp; R.G. n&ordm; ' + $("#RGtest1").val() + '<br />'+
			'&nbsp; &nbsp; e-mail: ' + $("#emailtest1").val() + '</p>' +

			'<p>2.)___________________________________<br />'+
			'&nbsp; &nbsp; &nbsp;' + $("#nometest2").val() + '<br />' +
			'&nbsp; &nbsp; R.G. n&ordm; ' + $("#RGtest2").val() + '<br />'+
			'&nbsp; &nbsp; e-mail: ' + $("#emailtest2").val() + '</p> </div>',
			 margins.left,
		     margins.top, {
		            'width': margins.width, // max width of content on PDF
		            'elementHandlers': specialElementHandlers
		        }, margins);

			 fetch(
		        `/api/public/2.0/contentfiles/upload/?fileName=${fileName}`,
		        {
		            method: "POST",
		            headers: {
		                "Content-Type": "application/octet-stream",
		            },
		            cache: "no-cache",
		            body: doc.output('blob')
		        }
		    ).then(function (response) {
		        if (!response.ok) {
		            throw "Erro ao enviar o arquivo.";
		        }
		    }).then(function () {

		        // Cria o Documento no GED

		        let document = {
		            companyId: 1,
		            description: fileName,
		            immutable: true,
		            parentId: 2866, // ID da pasta onde salvar o PDF
		            isPrivate: false,
		            downloadEnabled: true,
		            attachments: [{
		                fileName: fileName,
		            }],
		        };

		        // chamar ajax create document

		        $.ajax({
		            async: true,
		            type: "POST",
		            contentType: "application/json",
		            url: '/api/public/ecm/document/createDocument',
		            headers: {
	                    "Content-Type": "application/json;charset=utf-8",
	                },// config.oauth.toHeader(config.oauth.authorize(request_data_, config.token)),
		            data: JSON.stringify(document),
		            error: function () {
		                FLUIGC.toast({
		                    title: '',
		                    message: "Falha ao enviar",
		                    type: 'danger'
		                });
		            },
		            success: function (data) {
		                let attachmentId = data.content.id;
		                $("#termoGerado2").val(attachmentId)
		                FLUIGC.toast({
		        			title: '',
		        			message: "Documento Gerado com sucesso!.",
		        			type: 'success'
		        		});
		            }
		        });
		        // fim chamada ajax
		    });

		}
		else{
			FLUIGC.toast({
                title: '',
                message: "PDF já foi gerado!",
                type: 'danger'
            });
		}
	}
}
```

As letras que aparecem do nada são essas que estão contornadas, se alguém conseguir me ajudar agradeço muito

![image](https://fluiggers.com.br/uploads/default/original/1X/a00303ad888036089f7d809016e696095e8ee7c8.png)

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/03/2023, 15:10

Isso tá parecendo problema de encode, mas é estranho porque a acentuação está normal.

Tenta fazer tudo forçando a ser UTF-8 pra ver se o problema é sanado.

---

## Resposta #2

**kaue menezes salgado** (@kaue) — 20/03/2023, 15:50

Como eu poderia fazer para forçar a ser UTF-8?

---

## Resposta #3

**kaue menezes salgado** (@kaue) — 21/03/2023, 10:51

esse é o codigo html

```auto
<html>
	<head>
	<meta charset="utf-8">
		<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css"/>
		<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
		<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
		<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
		<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
		<script type="text/javascript" src="jquery.input.mask.js"></script>
		<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
		<script type="text/javascript" src=jquery.mask.money.js charset="utf-8"></script>
		<script type="text/javascript" src="script.js" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>
		<!--script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.debug.js" integrity="sha512-6HmJ9Y5PZWQVCd4KUwIaSgtDskfsykB+Fvm8Nq98GVCMHstaVoX9jqDdwSyGCbmJy5eLs/DXgDE3SXRS+2B2yA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script-->
	</head>
	<body>
		<div class="fluig-style-guide">
			<form name="form" role="form">
				<div class="panel panel-default boder-red" id="div_formulario">
				    <div class="panel-heading panel-child">
				        <h3 class="panel-title">Termo de Doação</h3>
				        <input type="hidden" id="termoGerado" name="termoGerado">
				        <input type="hidden" id="termoGerado2" name="termoGerado2">
				    </div>
				    <div class="panel panel-default boder-red" >
					    <div class="panel-body">
					    	<div class="row">
						    	<div class="col-md-2 form-group">
						    		<label for="nfluig">Fluig</label>
						    		<input type="text" class="form-control" name="nfluig" id="nfluig" readonly="readonly"/>
						    	</div>
					    		<div class="col-md-4 form-group">
						    		<label class="required" for="solicitante">Solicitante</label>
						    		<input type="text" class="form-control" name="solicitante" id="solicitante" readonly="readonly"/>
						    	</div>
						    	<div class="col-md-4 form-group">
						    		<label class="required" for="emailUsuario">E-mail</label>
						    		<input type="text" class="form-control" name="emailUsuario" id="emailUsuario" readonly="readonly"/>
						    	</div>
						    	<div class="col-md-2 form-group">
						    		<label class="required" for="dtSolicitacao">Data da Solicitação</label>
						    		<input type="text" class="form-control" name="dtSolicitacao" id="dtSolicitacao" readonly="readonly"/>
						    	</div>
					    	</div>
					    </div>
				    </div>
				    <div class="panel panel-default boder-red" >
						<div class="panel-heading panel-child">
							<h3 class="panel-title">Dados do Donatário:</h3>
					    </div>
					    <div class="panel-body">
					    	<div class="row">
					    		<div class="col-md-4 form-group">
						    		<label class="required" for="donatario">Nome Donatário</label>
						    		<input type="text" class="form-control" name="donatario" id="donatario"/>
						    	</div>
						    	<div class="col-md-2 form-group">
						    		<label class="required" for="nacionalidade">Nacionalidade</label>
						    		<input type="text" class="form-control" name="nacionalidade" id="nacionalidade"/>
						    	</div>
						    	<div class="col-md-2 form-group">
						    		<label class="required" for="eCivil">Estado Civil</label>
						    		<input type="text" class="form-control" name="eCivil" id="eCivil"/>
						    	</div>
						    	<div class="col-md-2 form-group">
						    		<label class="required" for="cpfDonatario">CPF</label>
						    		<input type="text" class="form-control" name="cpfDonatario" id="cpfDonatario" mask="999.999.999-99"/>
						    	</div>
						    	<div class="col-md-2 form-group">
						    		<label class="required" for="rgDonatario">RG</label>
						    		<input type="text" class="form-control" name="rgDonatario" id="rgDonatario" mask="999.999.999-99"/>
						    	</div>
					    	</div>
					    	<div class="row">
								<div class="col-md-2 form-group">
									<label class="required" for="cep">CEP</label>
					       			<input type="text" id="cep" name="cep" class="form-control"  mask="99.999-999">
					        	</div>
					        	<div class="col-md-6 form-group">
									<label class="required" for="endereco">Endereço</label>
					       			<input type="text" id="endereco" name="endereco" class="form-control">
					        	</div>
					        	<div class="col-md-2 form-group">
									<label class="required" for="n">Nº</label>
					       			<input type="text" id="n" name="n" class="form-control">
					        	</div>
					        	<div class="col-md-2 form-group">
									<label for="compl">Complemento</label>
					       			<input type="text" id="compl" name="compl" class="form-control">
					        	</div>
							</div>
					        <div class="row">
					        	<div class="col-md-3 form-group">
									<label class="required" for="bairro">Bairro</label>
					       			<input type="text" id="bairro" name="bairro" class="form-control">
					        	</div>
					        	<div class="col-md-3 form-group">
									<label class="required" for="cidade">Cidade</label>
					       			<input type="text" id="cidade" name="cidade" class="form-control">
					        	</div>
					        	<div class="col-md-2 form-group">
									<label class="required" for="estado">Estado</label>
					       			<input type="text" id="estado" name="estado" class="form-control" maxlength="2">
					        	</div>
							</div>
					    </div>
					</div>
					<div class="panel panel-default boder-red" >
						<div class="panel-heading panel-child">
							<h3 class="panel-title">Dados Financeiros:</h3>
					    </div>
					    <div class="panel-body">
					    	<div class="row">
						    	<div class="col-md-3 form-group">
					        		<label class="required" for="banco">Banco:</label>
					       			<input type="text" id="banco" name="banco" class="form-control">
					        	</div>
					        	<div class="col-md-2 form-group">
					        		<label class="required" for="agencia" style="white-space: nowrap;">Agencia:</label>
					       			<input type="text" id="agencia" name="agencia" class="form-control">
					        	</div>
					        	<div class="col-md-2 form-group">
					        		<label class="required" for="nConta" style="white-space: nowrap;">Nº da Conta:</label>
					       			<input type="text" id="nConta" name="nConta" class="form-control">
					        	</div>
					    		<div class="col-md-2 form-group">
						    		<label class="required" for="valor">Valor Doação</label>
						    		<input type="text" class="form-control" name="valor" id="valor"/>
						    	</div>
						    </div>
					    </div>
					</div>
					<div class="panel panel-default boder-red" >
						<div class="panel-heading panel-child">
							<h3 class="panel-title">Datas do Termo de Doação:</h3>
					    </div>
					    <div class="panel-body">
					    	<div class="row">
						    	<div class="col-md-3 form-group">
					        		<label class="required" for="dtRetro">Data de retroação do Termo:</label>
					       			<input type="text" id="dtRetro" name="dtRetro" class="form-control">
					        	</div>
					        	<div class="col-md-3 form-group">
					        		<label class="required" for="dtAss">Data de Assinatura do Termo:</label>
					       			<input type="text" id="dtAss" name="dtAss" class="form-control">
					        	</div>
					        </div>
					   </div>
					</div>
					<div class="panel panel-default boder-red" >
						<div class="panel-heading panel-child">
							<h3 class="panel-title">Testemunhas:</h3>
					    </div>
						<div class="panel-body">
				    	   	<div class="form-group area-solicitante">
						         <div class="row">
						         	<div class="col-md-6">
						        		<label class="required">Testemunha 1:</label>
						        	</div>
						        	<div class="col-md-6">
						        		<label class="required">Testemunha 2:</label>
						        	</div>
						        </div>
						        <div class="row">
									<div class="col-md-6">
						        		<label class="required">Nome:</label>
						       			<input type="text" id="nometest1" name="nometest1" class="form-control">
						        	</div>
						        	<div class="col-md-6">
						        		<label class="required">Nome:</label>
						       			<input type="text" id="nometest2" name="nometest2" class="form-control">
						        	</div>
								</div>
								<div class="row">
									<div class="col-md-6">
						        		<label class="required">RG:</label>
						       			<input type="text" id="RGtest1" name="RGtest1" class="form-control">
						        	</div>
						        	<div class="col-md-6">
						        		<label class="required">RG:</label>
						       			<input type="text" id="RGtest2" name="RGtest2" class="form-control">
						        	</div>
								</div>
								<div class="row">
									<div class="col-md-6">
						        		<label class="required">E-mail:</label>
						       			<input type="text" id="emailtest1" name="emailtest1" class="form-control">
						        	</div>
						        	<div class="col-md-6">
						        		<label class="required">E-mail:</label>
						       			<input type="text" id="emailtest2" name="emailtest2" class="form-control">
						        	</div>
								</div>
								<div class="row">
								</div>
								<div class="row">
								</div>
								<div class="row">
								</div>
								<div class="row">
								</div>
								<div class="row">
						        	<div class="col-md-3 form-group">
						        		<button type="button" class="btn btn-info" onclick="gerarPdf();">Gerar Termo</button>
						        	</div>
						        </div>
						        <div class="row">
						        	<div class="col-md-3 form-group">
						        		<button type="button" class="btn btn-info" onclick="gerarPdf2();">Gerar Termo 2</button>
						        	</div>
						        </div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</body>
</html>
```

E aquele que postei é o de Js, eu coloque charset = “utf-8” ali no html porém essas letras/sinais ainda aparecem

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/03/2023, 11:09

O arquivo .js precisa estar salvo como utf8 (sem bom) e tem que ver se essa lib jsPDF fornece opção de informar o encode.

Problema de encode é só uma possibilidade. Pode ser fonte ou simplesmente ele estar reconhecendo uma quebra de linha ou outro caractere de formatação onde não devia estar (por exemplo a confusão que tem o - com o traço que o Word utiliza).

---

## Resposta #5

**kaue menezes salgado** (@kaue) — 21/03/2023, 11:30

Mudei para utf-8 no eclipse, poderia me confirmar se seria neste local que salva mesmo.

![image](https://fluiggers.com.br/uploads/default/original/1X/542cf0beff0183f78213eb4e1f8f8673f3e93c70.png)

Se for, já salvei e tentei novamente e ainda continua os “erros”, mudei também a formatação para font-family: Arial, Helvetica, sans-serif;

Tirei alguns traços de onde estava dando esse erro e ainda persiste, to ficando loko kkkkkkkk

---

## Resposta #6 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 21/03/2023, 12:28 | ❤️ 1

Normalmente eu configuro na parte de workspace.

![image](https://fluiggers.com.br/uploads/default/original/1X/112b7bc3ed56c2b673a31368b90134f618db9eb2.png)

E a maioria dos arquivos (que não são o processo em si) eu crio no VS Code, então nem lembro se precisa configurar a codificação pra cada tipo de arquivo (onde você mostrou tá específico pra arquivos jsp).

Tenta só trocar as `“` por `"`. Pode ser só coincidência, mas onde deram os caracteres estranhos foi próximo a essas aspas do Word. Aí pode ser que a lib PDF não compreenda direito.

---

## Resposta #7

**kaue menezes salgado** (@kaue) — 21/03/2023, 12:43 | ❤️ 1

Funcionou!!! era as aspas que estavam conflitando. com as " deu certo.

Agradeço demais, ajudou muito de vdd.

Fiquei uma semana quebrando a cabeça e a resposta foi só mudar as aspas kkkkkkk

vlw mesmo.

---
