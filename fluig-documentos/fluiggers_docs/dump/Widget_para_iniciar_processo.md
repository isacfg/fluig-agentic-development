# Widget para iniciar processo

> **Fonte:** [https://fluiggers.com.br/t/widget-para-iniciar-processo/2146](https://fluiggers.com.br/t/widget-para-iniciar-processo/2146)
> **Categoria:** Widgets
> **Tags:** `form`, `processo`, `bpm`, `widget`
> **Criado em:** 24/08/2023, 10:51
> **Visualizações:** 596 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 24/08/2023, 10:51

Bom dia pessoal! Estou tentando montar um widget para um fornecedor externamente sem ter login no fluig iniciar um processo, até consegui montar e fazer ela funcionar mas alguns campos não guardam as informações e vão para o processo vazios.

Também estou com bastante dificuldade referente a campos options, não sei como fazer esses campos na widget para que pegue o resultado, irei deixar o formulário e como está a widget também.

**Código Formulário**

```auto
<html>
<head>
	<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css"/>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
	<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
	<script type="text/javascript" src="jquery.input.mask.js"></script>
	<script type="text/javascript" src="validacao.js"></script>
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="anexos.js" charset="utf-8"></script>
	<script type="text/javascript" src="custom.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div class="fluig-style-guide">
<form name="form" role="form">
<div style="display:none">
					<input type="hidden" id="hAprovador" name="hAprovador" value=""/>
					<input type="hidden" id="hTemAprov" name="hTemAprov" value=""/>
					<input type="hidden" id="hTemvalidade" name="hTemvalidade" value=""/>
					<input type="hidden" id="hValidade" name="hValidade" value=""/>
					<input type="hidden" id="hTemvalidade2" name="hTemvalidade2" value=""/>
					<input type="hidden" id="hValidade2" name="hValidade2" value=""/>
				</div>

<div class="panel panel-default boder-red" id="div_cabecalho" name="div_cabecalho">
     <div class="panel-heading panel-bidu">
		<h3 class="panel-title">HOMOLOGAÇÃO DE FORNECEDORES</h3>
	 </div>
	 <div class="panel-body">
	    <div class="row">
	       <div class="form-group col-md-12">
	          <p>A Maurício de Sousa Produções e demais empresas que compõem o grupo, atuam apenas com empresas e fornecedores devidamente homologados de acordo com nossos padrões organizacionais internos.</p>
              <p>Portanto para seguirmos com seu processo, faz-se necessário o preenchimento do formulário abaixo e que envie a documentação solicitada na aba ANEXOS. </p>
              <p>Uma vez aprovado seu processo de homologação, você estará habilitado para participar dos processos de cotação e compra para todas as empresas do grupo.</p>
              <p>Sua habilitação terá a validade de 1 (um) ano e será necessário que atualize anualmente para a continuidade dos trabalhos, da sob pena de suspensão e invalidação do cadastro para cotações, compras e prestação de serviços.</p>
              <p><span><strong>Documentação necessária e obrigatória para análise/homologação</strong></span></p>
                       <ul >
						  <li>Contrato Social com Última alteração</li>
						  <li>Ficha Cadastral</li>
						  <li>Referencias Bancarias</li>
						</ul>
	       </div>
	    </div>
	 </div>
</div>


<div id="divMae">
		<div class="panel panel-default boder-red">
	  <div class = "panel-heading panel-bidu">
         <h3 class="panel-title">Informações da Empresa</h3>
         <input type="hidden" name="info_empresa">
      </div>
      <div class="panel-body">
         <div class="row">
        <div class="form-group col-md-1">
              <label class="required" for="cnae">Cnae</label>
			  <input name="cnae" type="text" id="cnae" value="" size="10" maxlength="9" class="form-control">
        </div>
        <div class="form-group col-md-6">
              <label class="required" for="descricao">Descrição</label>
			  <input type="text" name="descricao" id="descricao" class="form-control">
        </div>
          <div class="col-md-5">
		  <div>
			<label class="required" for="TipoNegocio">Tipo de Negócio:</label>
		  </div>
			<label for="servico"><input type="radio" id="servico" name="tipoNegocio" value="servico" > Serviço </label>
			<label for="produto"><input type="radio" id="produto" name="tipoNegocio" value="produto" > Produto </label>
			<label for="setor"><input type="radio" id="setor" name="tipoNegocio" value="setor" > 3° Setor </label>
		</div>
       </div>
      </div>
	</div>


<div class="panel panel-default boder-red" >
  <div class = "panel-heading panel-bidu">
     <h3 class="panel-title">Dados Empresa</h3>
     <input type="hidden" name="dadosempresa">
  </div>
  <div class="panel-body">
     <div class="row">
        <div class="form-group col-md-3">
              <label class="required" for="razaoSocial">Razão Social</label>
			  <input type="text" name="razaoSocial" id="razaoSocial" class="form-control" >
        </div>
        <div class="form-group col-md-2 fs-md-margin-right">
              <label class="required" for="cnpj">CNPJ/CPF</label>
			  <input type="text" name="cnpj" id="cnpj" value="" size="15" maxlength="14" class="form-control" >
        </div>
        <div class="form-group col-md-2">
              <label  for="ie">I.E</label>
			  <input type="text" name="ie" id="ie" value="" size="11" maxlength="10" class="form-control" >
        </div>
        <div class="form-group col-md-2">
              <label  for="im">I.M</label>
			  <input type="text" name="im" id="im" value="" size="11" maxlength="10" class="form-control" >
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-1">
              <label class="required" for="cep">Cep</label>
			  <input name="cep" type="text" id="cep" value="" size="10" maxlength="9" class="form-control">
        </div>
        <div class="form-group col-md-3">
              <label class="required" for="endereco">Endereço</label>
			  <input type="text" name="logradouro" id="logradouro" class="form-control">
        </div>
        <div class="form-group col-md-2">
              <label  for="complemento">Complemento</label>
			  <input type="text" name="complemento" id="complemento" class="form-control">
        </div>
        <div class="form-group col-md-1">
              <label class="required" for="numero">Número</label>
			  <input type="text" name="numero" id="numero" class="form-control">
        </div>
       </div>

       <div class="row">
        <div class="form-group col-md-3">
              <label class="required" for="bairro">Bairro</label>
			  <input type="text" name="bairro" id="bairro" class="form-control">
        </div>
        <div class="form-group col-md-3">
             <label class="required" for="localidade">Cidade</label>
			 <input type="text" name="localidade" id="localidade" class="form-control">
        </div>
        <div class="form-group col-md-1">
             <label class="required" for="uf">Estado</label>
			 <input type="text" name="uf" id="uf" class="form-control">
        </div>
       </div>

      <div class="row">
        <div class="form-group col-md-2 ">
              <label class="required" for="telefone1">Telefone 1</label>
              <input type="text" name="telefone1" id="telefone1" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
        </div>
        <div class="form-group col-md-2">
              <label  for="telefone2">Telefone 2</label>
              <input type="text" name="telefone2" id="telefone2" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
        </div>
        <div class="form-group col-md-2">
              <label class="required" for="whatsapp">WhatsApp</label>
              <input type="text" name="whatsapp" id="whatsapp" value="" size="15" maxlength="14" class="form-control" mask="(99)99999-9999">
        </div>
        <div class="form-group col-md-3">
              <label class="required" for="email">E-mail</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Insira o email">
        </div>
     </div>
  </div>
</div>

<div class="panel panel-default boder-red">
  <div class="panel-heading panel-child">
    <h3 class="panel-title">Representante Legal</h3>
  </div>
  <div class="panel-body">
    <div class="row">
       <div class="form-group col-md-2">
            <label class="required" for="nome">Nome</label>
			<input type="text" name="nome" id="nome" class="form-control" >
       </div>
       <div class="form-group col-md-2">
            <label class="required" for="cpf">CPF</label>
			<input type="text" name="cpf" id="cpf"value="" size="12" maxlength="11" class="form-control" mask="999.999.999-99">
       </div>
       <div class="form-group col-md-2">
            <label class="required" for="rg">RG</label>
			<input type="text" name="rg" id="rg"value="" size="12" maxlength="11" class="form-control" mask="99.999.999-9">
       </div>
       <div class="form-group col-md-5">
            <label class="required" for="email2">E-mail</label>
            <input type="email" name="email2" id="email2" class="form-control" placeholder="Insira o email" >
        </div>
      </div>

     <div class="row">
       <div class="form-group col-md-4">
            <label class="required" for="telefone01">Telefone 1</label>
            <input type="text" name="telefone01" id="telefone01" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
        </div>
        <div class="form-group col-md-4">
            <label  for="telefone02">Telefone 2</label>
            <input type="text" name="telefone02" id="telefone02" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
        </div>
    </div>
  </div>
</div>

<div class="panel panel-default boder-red">
  <div class="panel-heading panel-child">
    <h3 class="panel-title">Referência Bancária</h3>
  </div>
  <div class="panel-body">
    <div class="row">
       <div class="form-group col-md-2">
            <label class="required" for="banco">Banco</label>
			<input type="text" name="banco" id="banco" class="form-control" >
       </div>
       <div class="form-group col-md-2">
            <label class="required" for="agencia">Agência</label>
			<input type="text" name="agencia" id="agencia" class="form-control" >
       </div>
       <div class="form-group col-md-3">
            <label class="required" for="conta">Conta</label>
            <input type="text" name="conta" id="conta" class="form-control">
        </div>
         <div class="col-md-3">
		  <div>
			<label class="required" for="Tipoconta">Tipo de Conta:</label>
		  </div>
			<label for="corrente"><input type="radio" id="corrente" name="tipoConta" value="corrente" > Corrente </label>
			<label for="poupanca"><input type="radio" id="poupanca" name="tipoConta" value="poupanca" > Poupança </label>
		</div>
     </div>
  </div>
</div>


<div class="panel panel-default boder-red"  id="refrenciasComerciasis">
  <div class="panel-heading panel-child">
    <h3 class="panel-title">Referências Comerciais</h3>
  </div>
  <div class="panel-body">
	        	<div class="row">
					<div class="col-md-2">
			           <button type="button" class="btn btn-info" onclick="addReferencia();">Adicionar Referências Comerciais</button>
					</div>
				</div>

				<div class="row">
		        	<div id="div_tbRefcomerciais" name="div_tbRefcomerciais">
						<table id="tbRefcomerciais" tablename="tbRefcomerciais" class="table" noaddbutton=true nodeletebutton="true">
							<thead>
								<tr>
					            	<th class="required col-md-2">Empresa:</th>
					            	<th class="required col-md-2">Nome Responsável</th>
					            	<th class="required col-md-2">WhatsApp</th>
					            	<th class="required col-md-2">E-mail</th>
					            </tr>
		        			</thead>
							<tbody>
								<tr id="trRefcomerciais" name="trRefcomerciais">
									<td class="form-group form-group-sm">
				       					<input type="text" id="empresa" name="empresa" class="form-control">
									</td>
									<td class="form-group form-group-sm">
				       					<input type="text" id="nomeResponsavel" name="nomeResponsavel" class="form-control">
									</td>
									<td class="form-group form-group-sm">
				       					<input type="text" id="whatsapp2" name="whatsapp2" class="form-control">
									</td>
									<td class="form-group form-group-sm">
				       					<input type="text" id="email4" name="email4" class="form-control">
									</td>
								</tr>
							</tbody>
						</table>
					</div>
	        		</div>

	       </div>
	     </div>
     <div class="panel panel-default boder-red">
								    <div class="panel-heading  panel-child">
								        <h3 class="panel-title">Condições de Pagamento</h3>
								    </div>
								    <div class="panel-body">
								    <div class="form-group">
								       <div class="row">
								          <div class="col-md-3">
								        		<div>
								        			<label class="required" for="faturamento">Faturamento:</label>
								        		</div>
								       			<label for="faturamento2"><input type="radio" id="faturamento2" name="faturamento2" value="Sim" onclick="gratuito();"> Sim </label>
								       			<label for="faturamentoN2"><input type="radio" id="faturamentoN2" name="faturamento2" value="Nao" onclick="gratuito();"> Não </label>
								        	</div>
								       </div>
								      </div>
								       <div id = "div_FaturamentoSim">
								        <div class="row">
							        		<div class="col-md-4">
									            <label class="required" for="valorMinimo">Valor mínimo de faturamento</label>
									            <input type="text" name="valorMinimo" id="valorMinimo" class="form-control">
									        </div>
							        	</div>

							        	<div class="row" id=cNpj>
							        		 <div class="col-md-2">
												<label class="required" for="cnpjEmpresa">CNPJ empresa é o mesmo para faturamento:</label><br>
												<label for="cnpjEmpresa"><input type="radio" id="cnpjEmpresa" name="cnpjEmpresa" value="sim" onclick="outroCnpj();">Sim</label>
												<label for="cnpjEmpresA"><input type="radio" id="cnpjEmpresA" name="cnpjEmpresa" value="nao" onclick="outroCnpj();">Não</label>
											 </div>

												<div id="div_nao">
												  <div class="col-md-3">
								        			<label class="required" for="especificarCnpj">Qual o CNPJ: </label>
								       				<input type="text" id="especificarCnpj" name="especificarCnpj" class="form-control">
								       				</div>
								        		</div>
							        	</div>

							        	<div class="row" >
							        		 <div class="col-md-3">
							        		 <div>
												<label class="requerid" for="direto">Direto:</label><br>
											 </div>
												<label for="direto"><input type="radio" id="direto" name="direto" value="15">15</label>&nbsp;
												<label for="direto"><input type="radio" id="direto" name="direto" value="20">20</label>&nbsp;
												<label for="direto"><input type="radio" id="direto" name="direto" value="30">30</label>&nbsp;
												<label for="direto"><input type="radio" id="direto" name="direto" value="45">45</label>&nbsp;
												<label for="direto"><input type="radio" id="direto" name="direto" value="50">50</label>&nbsp;
											</div>
							        	</div>
							        	<div class="row" >
							        		 <div class="col-md-3">
							        		 <div>
												<label class="requerid" for="parcelado">Parcelado:</label><br>
											 </div>
												<label for="parcelado"><input type="radio" id="parcelado" name="parcelado" value="2x">2x</label>&nbsp;
												<label for="parcelado"><input type="radio" id="parcelado" name="parcelado" value="3x">3x</label>&nbsp;
												<label for="parcelado"><input type="radio" id="parcelado" name="parcelado" value="4x">4x</label>&nbsp;
												<label for="parcelado"><input type="text" id="parcelado2" name="parcelado2" ></label>&nbsp;
											</div>
							        	</div>
							        	<div class="row">
											 <div class="col-md-12 ">
												<label for="obs_Faturamento">Observação</label>
												<textarea class="form-control" name="obs_Faturamento" id="obs_Faturamento"  rows="5" cols="12" onkeydown="autoResize(this);" ></textarea>
											</div>
											</div>
							        	 </div>
							        	 <div id = "div_FaturamentoNao">

							        	<div class="row">
							        	   <div class="col-md-2">
							        	     <label class="required" for="banco2">Banco:</label>
							        	     <input type="text" name="banco2" id="banco2" class="form-control">
							        	   </div>

											  <div class="col-md-3">
									            <label class="required" for="nomeAgencia">Agência:</label>
									            <input type="text" name="nomeAgencia" id="nomeAgencia" class="form-control">
									          </div>

										<div class="form-group col-md-2">
								            <label class="required" for="conta">Conta:</label>
								            <input type="text" name="conta2" id="conta2" class="form-control">
								        </diV>
										 <div class="form-group col-md-2 ">
								              <label class="required" for="cnpj2">CNPJ/CPF</label>
											  <input type="text" name="cnpj2" id="cnpj2" class="form-control" >
								        </div>
								        <div class="col-md-2">
										  <div>
											<label class="required" for="Tipoconta2">Tipo de Conta:</label>
										  </div>
											<label for="correntes"><input type="radio" id="correntes" name="tipoConta2" value="correntes" > Corrente </label>
											<label for="poupancas"><input type="radio" id="poupancas" name="tipoConta2" value="poupancas" > Poupança </label>
										</div>
										</div>
							        	<div class="row">
											 <div class="col-md-12 ">
												<label for="obs_Faturamentonao">Observação</label>
												<textarea class="form-control" name="obs_Faturamentonao" id="obs_Faturamentonao"  rows="5" cols="12" onkeydown="autoResize(this);" ></textarea>
											</div>
											</div>
								         </div>
								    </div>
								</div>


								<div id="solicitacoes">
			  <div class="panel panel-default boder-red" >
  <div class="panel-heading panel-child">
    <h3 class="panel-title">Informações</h3>
  </div>
  <div class="panel-body">
			<div class="row">
					    <div class="col-md-12" id="observacaoInformacoes">
						    <label for="observacao">Observação</label>
						   	<textarea class="form-control" name="observacao" id="observacao"  rows="5" cols="12" onkeydown="autoResize(this);" ></textarea>
						</div>
					    	</div>
					<div class="row">
					 <div class="col-md-3">
							<div class="form-group">
								<label class="control-label">Anexos</label>
								<div class="componentAnexo">
									<div class="input-group">
										<input type="hidden" class="descAnexo" name="fdAnexo" value="" />
										<input type="text" id="fnAnexo" name="fnAnexo" class="form-control inputAnexo input-sm" placeholder="Selecione um arquivo" readonly />
									</div>
									<div class="icones">
										<button type="button" class="btnUpFile btn btn-success btn-sm" data-acao="upload" onclick="anexo(event)" title="Selecionar">
											<i class="fluigicon fluigicon-file-upload icon-sm"></i>
										</button>
										<button style="display: none;" type="button" class="btnViewerFile btn btn-info btn-sm" data-acao="viewer" onclick="anexo(event)" title="Visualizar" disabled>
											<i class="fluigicon fluigicon-eye-open icon-sm"></i>
										</button>
										<button style="display: none;" type="button" class="btnDownloadFile btn btn-info btn-sm" data-acao="download" onclick="anexo(event)" title="Download" disabled>
											<i class="fluigicon fluigicon-download icon-sm"></i>
										</button>
									</div>
								</div>
							</div>
							</div>
							</div>
              </div>
              </div>
              </div>


								<div class="panel panel-default boder-red" id="Questionario">
								  <div class="panel-heading  panel-child">
								      <h3 class="panel-title">Questionário</h3>
								  </div>
								   <div class="panel-body">
								  <div class="row">
								  <div class="form-group col-md-12">
								   <p>Responda o questionário no link abaixo para dar continuidade ao processo.</p>
								 <p><strong><a target="_blank" href="https://forms.gle" class="link-default">Clique aqui para ser redirecionado ao questionário</a></strong></p>


										    </div>
								      </div>
								      </div>
								</div>

								<div class="panel panel-default boder-red" id="respostaQuestionario">
								  <div class="panel-heading  panel-child">
								      <h3 class="panel-title">Questionário</h3>
								  </div>
								   <div class="panel-body">
								  <div class="row">
								  <div class="form-group col-md-12">
								   <p>Verifique as respostas do questionário no link abaixo.</p>
								 <p><strong><a target="_blank" href="https://docs.google.com/forms" class="link-default">Clique aqui para verificar as respostas do questionário</a></strong></p>


										    </div>
								      </div>
								      </div>
								</div>

								<div class="panel panel-default boder-red" id="termo">
								  <div class="panel-heading  panel-child">
								      <h3 class="panel-title">Termo de Aceite</h3>
								  </div>
								   <div class="panel-body">
								  <div class="row">
								  <div class="form-group col-md-12">
								   <h3>Declaro que os documentos e informações acima são verídicos assumindo desde já a responsabilidade integral por toda e qualquer irregularidade e ilegalidade.
								   Autorizo também que a ??? realize o armazenamento e tratamento destes dados perante a conformidade com a Lei nº 13.709/2018</h3>

								           <div class="checkbox">
										        <label>
										        <input type="checkbox" 	id="concordo" name="concordo" value="concordo"> Concordo
										        </label>
										    </div>
										    </div>
								      </div>
								      </div>
								</div>






</div>




 </form>
</div>
</body>
<script type="text/javascript" src="areaAdaptavel.js"></script>
<script type="text/javascript" src="Endereço.js"></script>
<script type="text/javascript" src="Cnae.js"></script>
</html>
```

**Codigos Widget Iniciar processo**

```javascript
var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {




    },

    bindings: {
        local: {

            'abrirchamado' :['click_abrirChamado']
        }
    },

    abrirChamado : function(){
    		//recuperar dados do formulario da widget
    		var cnae = $('#cnae_'+this.instanceId).val();
    		var descricao = $('#descricao_'+this.instanceId).val();
    		var tipoNegocio = $('#tipoNegocio_'+this.instanceId).val();
    		var razaoSocial = $('#razaoSocial_'+this.instanceId).val();
    		var cnpj = $('#cnpj_'+this.instanceId).val();
    		var ie =  $('#ie_'+this.instanceId).val();

    		//template envelope XML
    		    var _xml = null;
			$.ajax({
						url : '/iniciarProcesso/resources/js/xmls/ECMWFEngineService_simpleStartProcess.xml',
						async : false,
						type : "get",
						datatype : "xml",
						success : function(xml) {
							_xml = $(xml)
						}

					});

			//Alterar os valores recuperados na variavel _xml
			_xml.find("companyId").text(WCMAPI.tenantCode);
			_xml.find("username").text("********");
			_xml.find("password").text("*******");
			_xml.find("processId").text("novo_teste");
			_xml.find("comments").text('Processo inicializado atraves de WIDGET');

			//descricao do chamado

			_xml.find("[name='cnae']").text(cnae);
			_xml.find("[name='descricao']").text(descricao);
			_xml.find("[name='tipoNegocio']").text(tipoNegocio);
			_xml.find("[name='razaoSocial']").text(razaoSocial);
			_xml.find("[name='cnpj']").text(cnpj);
			_xml.find("[name='ie']").text(ie);



			//Usar o metodo WCMAPI.Create para chamar o webservice
			WCMAPI.Create({
				url : "/webdesk/ECMWorkflowEngineService?wsdl",
				contentType : "text/xml",
				dataType : "xml",
				data : _xml[0],
				success : function(data) {
					console.log(data)
					var processoCriado = $(data).find("iProcess").text();
					console.log('Processo :'+processoCriado);
					FLUIGC.toast({
						title:'Aviso',
						message:'Processo '+processoCriado+' criado com sucesso',
						type:'success'
					});

				}
			})

    }
});
```

**Codigo ECMW**

```javascript
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:simpleStartProcess>
         <username>*******</username>
         <password>******</password>
         <companyId>1</companyId>
         <processId>novo_teste</processId>
         <comments>feito com sucesso</comments>
         <attachments></attachments>
         <cardData>
            <item>
            	<item>Cnae</item>
            	<item name="cnae"></item>
            </item>

             <item>
            	<item>Descricao</item>
            	<item name="descricao"></item>
            </item>

			 <item>
            	<item>Tipo Negocio</item>
            	<item name="tipoNegocio"></item>
            </item>

			 <item>
            	<item>Razão Social</item>
            	<item name="razaoSocial"></item>
            </item>

            <item>
            	<item>Cnpj</item>
            	<item name="cnpj"></item>
            </item>

             <item>
            	<item>i.e</item>
            	<item name="ie"></item>
            </item>

             <item>
            	<item>idPapelResponsavel</item>
            	<item>admin</item>
            </item>
         </cardData>
      </ws:simpleStartProcess>
   </soapenv:Body>
</soapenv:Envelope>
```

**Código View Widget**

```javascript
<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">

    <!--Titulo da widget-->
    <h1>${i18n.getTranslation('titulo')}</h1>
	<hr>
	<div class="row">
		<div class="col-md-6">
			<label for="cnae_${instanceId}">${i18n.getTranslation('Cnae')}</label>
			<input type="text" class="form-control" name="cnae_${instanceId}" id="cnae_${instanceId}" ></input>
		</div>
		<div class="col-md-6">
			<label for="descricao_${instanceId}">${i18n.getTranslation('Descrição')}</label>
			<input class="form-control" name="descricao_${instanceId}" id="descricao_${instanceId}" ></input>
		</div>

		<div class="col-md-6">
			<label for="tipoNegocio_${instanceId}">${i18n.getTranslation('Tipo de Negócio:')}</label>
			<select class="form-control ramais" name="tipoNegocio_${instanceId}" id="tipoNegocio_${instanceId}" ></select>
		</div>
	</div>


	<div class="row">
		<div class="col-md-6">
			<label for="razaoSocial_${instanceId}">${i18n.getTranslation('Razão Social')}</label>
			<input class="form-control" name="razaoSocial_${instanceId}" id="razaoSocial_${instanceId}" ></input>
		</div>
		<div class="col-md-6">
			<label for="cnpj_${instanceId}">${i18n.getTranslation('Cnpj')}</label>
			<input class="form-control" name="cnpj_${instanceId}" id="cnpj_${instanceId}" ></input>
		</div>
		<div class="col-md-6">
			<label for="ie__${instanceId}">${i18n.getTranslation('ie')}</label>
			<input class="form-control" name="ie__${instanceId}" id="ie__${instanceId}" ></input>
		</div>
	</div>
	<br>
	<br>
	<br>
	<div class="row">
		<div class="col-md-12">
			<button type="buton" class="btn btn-default" data-abrirchamado>${i18n.getTranslation('btn.chamado')}</button>
		</div>
	</div>
	<br>
</div>
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
```

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 30/08/2023, 02:44

Kaue, o formulário que você disponibilizou é do BPM correto? E você está construindo uma widget para abrir uma solicitação através de uma página pública para posteriormente alimentar os dados deste formulário mas está tendo problemas ao capturar os dados no front certo?

Bom, se for isso eu acredito que você deveria abrir uma solicitação exatamente da maneira que você precisa que o fornecedor abra, e a consultasse através do getInstanceCardData no soapui para ter uma noção de como deverá ser enviado os valores dos campos options, radiobutons etc…

Como não sei se a sua ideia é abrir uma solicitação incluindo todos os dados do formulário ou apenas estes que você mencionou no arquivo view, e como você não mencionou nenhum status de erro dado no seu projeto, para que a gente possa te ajudar explique melhor as dificuldades das situações encontradas

Att

---

## Resposta #2

**kaue menezes salgado** (@kaue) — 30/08/2023, 09:54

Opa Jonathan, a ideia é abrir uma solicitação incluindo todos os dados do formulário, não aparece nenhum erro, a minha duvida seria como faço para pegar ao option selecionado na widget, pois quando envia para o formulário os campos options não estão selecionados.

---

## Resposta #3

**Matheus Loreto** (@matheusl) — 30/08/2023, 10:47

Kaue,

Certifica que está enviando pelo select da widget o valor exato que consta no “value” do radio.

---

## Resposta #4

**kaue menezes salgado** (@kaue) — 30/08/2023, 11:13

Como faço isso no código da widget?

---

## Resposta #5

**Matheus Loreto** (@matheusl) — 30/08/2023, 11:37

Vi na montagem do XML que vc está pegando o valor do select. Vc precisa passar no value da option do select na widget, o mesmo value que está no radio do form.

Como não tem nenhuma option no teu select da widget, imagino que esteja fazendo um append ou algo do tipo com as opções. Na montagem da option, tem que ter disponível pra selecionar as options com os mesmos value que tem lá no radio do form.

Se tem um radio assim:

```auto
<label for="servico"><input type="radio" id="servico" name="tipoNegocio" value="servico" > Serviço </label>
```

precisa ter uma option assim:

```auto
<option value="servico" > Serviço </option>
```

---

## Resposta #6

**kaue menezes salgado** (@kaue) — 30/08/2023, 11:49

Peço perdão, oque estou tentando pegar o valor é do Radio.

```auto
<div class="col-md-3">
		  <div>
			<label class="required" for="Tipoconta">Tipo de Conta:</label>
		  </div>
			<label for="corrente"><input type="radio" id="corrente" name="tipoConta" value="corrente" > Corrente </label>
			<label for="poupanca"><input type="radio" id="poupanca" name="tipoConta" value="poupanca" > Poupança </label>
		</div>
```

---

## Resposta #7

**Matheus Loreto** (@matheusl) — 30/08/2023, 13:08 | ❤️ 1

Você pode pegar o valor assim usando jQuery:

```auto
$("input[name='tipoConta']:checked").val()
```

---
