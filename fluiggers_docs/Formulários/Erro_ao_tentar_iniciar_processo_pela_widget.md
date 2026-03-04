# Erro ao tentar iniciar processo pela widget

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-tentar-iniciar-processo-pela-widget/2346](https://fluiggers.com.br/t/erro-ao-tentar-iniciar-processo-pela-widget/2346)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `fluigapi`, `widget`
> **Criado em:** 07/11/2023, 15:44
> **Visualizações:** 308 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 07/11/2023, 15:44

Boa tarde! Está acontecendo um erro ao tentar iniciar um processo por uma widget, ao tentar inciar na pagina publica sem estar logado da esse erro no log:

```auto
2023-11-08 14:20:48,914 INFO  [com.totvs.technology.ecm.workflow.ws.WorkflowEngineService] (default task-16524) Inicialização do simpleStartProcess() iniciado...
2023-11-08 14:20:48,943 ERROR [com.totvs.technology.ecm.ws.SecureWebService] (default task-16524) Falha na autenticação: javax.servlet.ServletException: UT010031: Login failed
```

**E no console aparece esse erro:**

![image](https://fluiggers.com.br/uploads/default/original/2X/9/91047247a82f4d0f02ef2412f2373eedbe9f49d9.png)

Porém se estiver logado inicia normalmente, alguem saberia me ajudar nessa duvida.

vou deixar como está o codigo da widget.

**view.ftl**

```auto
<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">
    <!--Titulo da widget-->
    <h1>${i18n.getTranslation('titulo')}</h1>
	<hr>
	  <div class="panel panel-default boder-red">
	  <div class = "panel-heading panel-bidu">
         <h3 class="panel-title">Informações da Empresa</h3>
         <input type="hidden" name="info_empresa">
      </div>
      <div class="panel-body">
         <div class="row">
        <div class="form-group col-md-1">
              <label class="required" for="cnae_${instanceId}">Cnae</label>
			  <input name="cnae_${instanceId}" type="text" id="cnae_${instanceId}" value="" size="10" maxlength="9" class="form-control">
        </div>
        <div class="form-group col-md-6">
              <label class="required" for="descricao_${instanceId}">Descrição</label>
			  <input type="text" name="descricao_${instanceId}" id="descricao_${instanceId}" class="form-control">
        </div>
         <div class="col-md-5">
					<label for="tipoNegocio_${instanceId}">Tipo de Negócio:</label>
					<input class="form-control" name="tipoNegocio_${instanceId}" id="tipoNegocio_${instanceId}" ></input>
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
				   <label for="razaoSocial_${instanceId}">Razão Social:</label>
					<input class="form-control" name="razaoSocial_${instanceId}" id="razaoSocial_${instanceId}" ></input>
				</div>
        <div class="form-group col-md-2 fs-md-margin-right">
              <label class="required" for="cnpj_${instanceId}">CNPJ/CPF</label>
			  <input type="text" name="cnpj_${instanceId}" id="cnpj_${instanceId}" value="" size="15" maxlength="14" class="form-control" >
        </div>
        <div class="form-group col-md-2">
              <label  for="ie_${instanceId}">I.E</label>
			  <input type="text" name="ie_${instanceId}" id="ie_${instanceId}" value="" size="11" maxlength="10" class="form-control" >
        </div>
        <div class="form-group col-md-2">
              <label  for="im_${instanceId}">I.M</label>
			  <input type="text" name="im_${instanceId}" id="im_${instanceId}" value="" size="11" maxlength="10" class="form-control" >
        </div>
      </div>

      <div class="row">
        <div class="form-group col-md-1">
              <label class="required" for="cep_${instanceId}">Cep</label>
			  <input name="cep_${instanceId}" type="text" id="cep_${instanceId}" value="" size="10" maxlength="9" class="form-control">
        </div>
        <div class="form-group col-md-3">
              <label class="required" for="endereco_${instanceId}">Endereço</label>
			  <input type="text" name="endereco_${instanceId}" id="endereco_${instanceId}" class="form-control">
        </div>
        <div class="form-group col-md-2">
              <label  for="complemento_${instanceId}">Complemento</label>
			  <input type="text" name="complemento_${instanceId}" id="complemento_${instanceId}" class="form-control">
        </div>
        <div class="form-group col-md-1">
              <label class="required" for="numero_${instanceId}">Número</label>
			  <input type="text" name="numero_${instanceId}" id="numero_${instanceId}" class="form-control">
        </div>
       </div>

       <div class="row">
        <div class="form-group col-md-3">
              <label class="required" for="bairro_${instanceId}">Bairro</label>
			  <input type="text" name="bairro_${instanceId}" id="bairro_${instanceId}" class="form-control">
        </div>
        <div class="form-group col-md-3">
             <label class="required" for="cidade_${instanceId}">Cidade</label>
			 <input type="text" name="cidade_${instanceId}" id="cidade_${instanceId}" class="form-control">
        </div>
        <div class="form-group col-md-1">
             <label class="required" for="estado_${instanceId}">Estado</label>
			 <input type="text" name="estado_${instanceId}" id="estado_${instanceId}" class="form-control">
        </div>
       </div>

      <div class="row">
        <div class="form-group col-md-2 ">
              <label class="required" for="telefone1_${instanceId}">Telefone 1</label>
              <input type="text" name="telefone1_${instanceId}" id="telefone1_${instanceId}" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
        </div>
        <div class="form-group col-md-2">
              <label  for="telefone2_${instanceId}">Telefone 2</label>
              <input type="text" name="telefone2_${instanceId}" id="telefone2_${instanceId}" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
        </div>
        <div class="form-group col-md-2">
              <label class="required" for="whatsapp_${instanceId}">WhatsApp</label>
              <input type="text" name="whatsapp_${instanceId}" id="whatsapp_${instanceId}" value="" size="15" maxlength="14" class="form-control" mask="(99)99999-9999">
        </div>
        <div class="form-group col-md-3">
              <label class="required" for="email_${instanceId}">E-mail</label>
              <input type="email" name="email_${instanceId}" id="email_${instanceId}" class="form-control" placeholder="Insira o email">
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
            <label class="required" for="nome_${instanceId}">Nome</label>
			<input type="text" name="nome_${instanceId}" id="nome_${instanceId}" class="form-control" >
       </div>
       <div class="form-group col-md-2">
            <label class="required" for="cpf_${instanceId}">CPF</label>
			<input type="text" name="cpf_${instanceId}" id="cpf_${instanceId}" value="" size="12" maxlength="11" class="form-control" mask="999.999.999-99">
       </div>
       <div class="form-group col-md-2">
            <label class="required" for="rg_${instanceId}">RG</label>
			<input type="text" name="rg_${instanceId}" id="rg_${instanceId}" value="" size="12" maxlength="11" class="form-control" mask="99.999.999-9">
       </div>
       <div class="form-group col-md-5">
            <label class="required" for="email2_${instanceId}">E-mail</label>
            <input type="email" name="email2_${instanceId}" id="email2_${instanceId}" class="form-control" placeholder="Insira o email" >
        </div>
      </div>

     <div class="row">
       <div class="form-group col-md-4">
            <label class="required" for="telefone01_${instanceId}">Telefone 1</label>
            <input type="text" name="telefone01_${instanceId}" id="telefone01_${instanceId}" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
        </div>
        <div class="form-group col-md-4">
            <label  for="telefone02_${instanceId}">Telefone 2</label>
            <input type="text" name="telefone02_${instanceId}" id="telefone02_${instanceId}" value="" size="15" maxlength="14" class="form-control" mask="(99)9999-9999">
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
            <label class="required" for="banco_${instanceId}">Banco</label>
			<input type="text" name="banco_${instanceId}" id="banco_${instanceId}" class="form-control" >
       </div>
       <div class="form-group col-md-2">
            <label class="required" for="agencia_${instanceId}">Agência</label>
			<input type="text" name="agencia_${instanceId}" id="agencia_${instanceId}" class="form-control" >
       </div>
       <div class="form-group col-md-3">
            <label class="required" for="conta_${instanceId}">Conta</label>
            <input type="text" name="conta_${instanceId}" id="conta_${instanceId}" class="form-control">
        </div>
        <div class="col-md-3">
				 <label class="required" for="tipoConta_${instanceId}">Tipo de Conta</label>
		         <input type="text" name="tipoConta_${instanceId}" id="tipoConta_${instanceId}" class="form-control">
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
		       <div class="form-group col-md-3">
		            <label class="required" for="empresa1_${instanceId}">Empresa 1</label>
					<input type="text" name="empresa1_${instanceId}" id="empresa1_${instanceId}" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="nomeResponsavel_${instanceId}">Nome Responsável</label>
					<input type="text" name="nomeResponsavel_${instanceId}" id="nomeResponsavel_${instanceId}" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="whatsapp2_${instanceId}">WhatsApp</label>
		            <input type="text" name="whatsapp2_${instanceId}" id="whatsapp2_${instanceId}" class="form-control">
		        </div>
		        <div class="form-group col-md-3">
		            <label class="required" for="email4_${instanceId}">E-mail</label>
		            <input type="text" name="email4_${instanceId}" id="email4_${instanceId}" class="form-control">
		        </div>
		     </div>

		      <div class="row">
		       <div class="form-group col-md-3">
		            <label class="required" for="empresa2_${instanceId}">Empresa 2</label>
					<input type="text" name="empresa2_${instanceId}" id="empresa2_${instanceId}" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="nomeResponsavel2_${instanceId}">Nome Responsável</label>
					<input type="text" name="nomeResponsavel2_${instanceId}" id="nomeResponsavel2_${instanceId}" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="whatsapp3_${instanceId}">WhatsApp</label>
		            <input type="text" name="whatsapp3_${instanceId}" id="whatsapp3_${instanceId}" class="form-control">
		        </div>
		        <div class="form-group col-md-3">
		            <label class="required" for="email5_${instanceId}">E-mail</label>
		            <input type="text" name="email5_${instanceId}" id="email5_${instanceId}" class="form-control">
		        </div>
		     </div>

		      <div class="row">
		       <div class="form-group col-md-3">
		            <label class="required" for="empresa3_${instanceId}">Empresa:</label>
					<input type="text" name="empresa3_${instanceId}" id="empresa3_${instanceId}" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="nomeResponsavel3_${instanceId}">Nome Responsável</label>
					<input type="text" name="nomeResponsavel3_${instanceId}" id="nomeResponsavel3_${instanceId}" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="whatsapp4_${instanceId}">WhatsApp</label>
		            <input type="text" name="whatsapp4_${instanceId}" id="whatsapp4_${instanceId}" class="form-control">
		        </div>
		        <div class="form-group col-md-3">
		            <label class="required" for="email6_${instanceId}">E-mail</label>
		            <input type="text" name="email6_${instanceId}" id="email6_${instanceId}" class="form-control">
		        </div>
		     </div>

		      <div class="row">
		       <div class="form-group col-md-3">
		            <label class="required" for="empresa4_${instanceId}">Empresa:</label>
					<input type="text" name="empresa4" id="empresa4" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="nomeResponsavel4_${instanceId}">Nome Responsável</label>
					<input type="text" name="nomeResponsavel4" id="nomeResponsavel4" class="form-control" >
		       </div>
		       <div class="form-group col-md-3">
		            <label class="required" for="whatsapp5_${instanceId}">WhatsApp</label>
		            <input type="text" name="whatsapp5" id="whatsapp5" class="form-control">
		        </div>
		        <div class="form-group col-md-3">
		            <label class="required" for="email7_${instanceId}">E-mail</label>
		            <input type="text" name="email7" id="email7" class="form-control">
		        </div>
		     </div>

		    </div>
	     </div>

<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
```

**iniciarProcesso.js**

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
    		var TipoNegocio = $('#tipoNegocio_'+this.instanceId).val();
    		var razaoSocial = $('#razaoSocial_'+this.instanceId).val();
    		var cnpj = $('#cnpj_'+this.instanceId).val();
    		var ie = $('#ie_'+this.instanceId).val();
    		var im = $('#im_'+this.instanceId).val();
    		var cep = $('#cep_'+this.instanceId).val();
    		var endereco = $('#endereco_'+this.instanceId).val();
    		var complemento = $('#complemento_'+this.instanceId).val();
    		var numero = $('#numero_'+this.instanceId).val();
    		var bairro = $('#bairro_'+this.instanceId).val();
    		var cidade = $('#cidade_'+this.instanceId).val();
    		var estado = $('#estado_'+this.instanceId).val();
    		var telefone1 = $('#telefone1_'+this.instanceId).val();
    		var telefone2 = $('#telefone2_'+this.instanceId).val();
    		var whatsapp = $('#whatsapp_'+this.instanceId).val();
    		var email = $('#email_'+this.instanceId).val();
    		var nome = $('#nome_'+this.instanceId).val();
    		var cpf = $('#cpf_'+this.instanceId).val();
    		var rg = $('#rg_'+this.instanceId).val();
    		var email2 = $('#email2_'+this.instanceId).val();
    		var telefone01 = $('#telefone01_'+this.instanceId).val();
    		var telefone02 = $('#telefone02_'+this.instanceId).val();
    		var banco = $('#banco_'+this.instanceId).val();
    		var agencia = $('#agencia_'+this.instanceId).val();
    		var conta = $('#conta_'+this.instanceId).val();
    		var tipoConta = $('#tipoConta_'+this.instanceId).val();
    		var empresa1 = $('#empresa1_'+this.instanceId).val();
    		var nomeResponsavel = $('#nomeResponsavel_'+this.instanceId).val();
    		var whatsapp2 = $('#whatsapp2_'+this.instanceId).val();
    		var email4 = $('#email4_'+this.instanceId).val();
    		var empresa2 = $('#empresa2_'+this.instanceId).val();
    		var nomeResponsavel2 = $('#nomeResponsavel2_'+this.instanceId).val();
    		var whatsapp3 = $('#whatsapp3_'+this.instanceId).val();
    		var email5 = $('#email5_'+this.instanceId).val();
    		var empresa3 = $('#empresa3_'+this.instanceId).val();
    		var nomeResponsavel3 = $('#nomeResponsavel3_'+this.instanceId).val();
    		var whatsapp4 = $('#whatsapp4_'+this.instanceId).val();
    		var email6 = $('#email6_'+this.instanceId).val();





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
			_xml.find("username").text("teste.teste");
			_xml.find("password").text("123456789");
			_xml.find("processId").text("IniciarProcesso");
			_xml.find("comments").text('Processo inicializado atraves de WIDGET');

			//descricao do chamado

			_xml.find("[name='cnae']").text(cnae);
			_xml.find("[name='descricao']").text(descricao);
			_xml.find("[name='tipoNegocio']").text(TipoNegocio);
			_xml.find("[name='razaoSocial']").text(razaoSocial);
			_xml.find("[name='cnpj']").text(cnpj);
			_xml.find("[name='ie']").text(ie);
			_xml.find("[name='im']").text(im);
			_xml.find("[name='cep']").text(cep);
			_xml.find("[name='endereco']").text(endereco);
			_xml.find("[name='complemento']").text(complemento);
			_xml.find("[name='numero']").text(numero);
			_xml.find("[name='bairro']").text(bairro);
			_xml.find("[name='cidade']").text(cidade);
			_xml.find("[name='estado']").text(estado);
			_xml.find("[name='telefone1']").text(telefone1);
			_xml.find("[name='telefone2']").text(telefone2);
			_xml.find("[name='whatsapp']").text(whatsapp);
			_xml.find("[name='email']").text(email);
			_xml.find("[name='nome']").text(nome);
			_xml.find("[name='cpf']").text(cpf);
			_xml.find("[name='rg']").text(rg);
			_xml.find("[name='email2']").text(email2);
			_xml.find("[name='telefone01']").text(telefone01);
			_xml.find("[name='telefone02']").text(telefone02);
			_xml.find("[name='banco']").text(banco);
			_xml.find("[name='agencia']").text(agencia);
			_xml.find("[name='conta']").text(conta);
			_xml.find("[name='tipoConta']").text(tipoConta);
			_xml.find("[name='empresa1']").text(empresa1);
			_xml.find("[name='nomeResponsavel']").text(nomeResponsavel);
			_xml.find("[name='whatsapp2']").text(whatsapp2);
			_xml.find("[name='email4']").text(email4);
			_xml.find("[name='empresa2']").text(empresa2);
			_xml.find("[name='nomeResponsavel2']").text(nomeResponsavel2);
			_xml.find("[name='whatsapp3']").text(whatsapp3);
			_xml.find("[name='email5']").text(email5);
			_xml.find("[name='empresa3']").text(empresa3);
			_xml.find("[name='nomeResponsavel3']").text(nomeResponsavel3);
			_xml.find("[name='whatsapp4']").text(whatsapp4);
			_xml.find("[name='email6']").text(email6);





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

**XML**

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.workflow.ecm.technology.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <ws:simpleStartProcess>
         <username>teste.teste</username>
         <password>123456789</password>
         <companyId>1</companyId>
         <processId>IniciarProcesso</processId>
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
            	<item>TipoNegocio</item>
            	<item name="tipoNegocio"></item>
            </item>

			 <item>
            	<item>RazaoSocial</item>
            	<item name="razaoSocial"></item>
            </item>

            <item>
            	<item>Cnpj</item>
            	<item name="cnpj"></item>
            </item>

            <item>
            	<item>ie</item>
            	<item name="ie"></item>
            </item>

             <item>
            	<item>im</item>
            	<item name="im"></item>
            </item>

                 <item>
            	<item>Cep</item>
            	<item name="cep"></item>
            </item>

             <item>
            	<item>Endereco</item>
            	<item name="endereco"></item>
            </item>

             <item>
            	<item>Complemento</item>
            	<item name="complemento"></item>
            </item>

             <item>
            	<item>Numero</item>
            	<item name="numero"></item>
            </item>

             <item>
            	<item>Bairro</item>
            	<item name="bairro"></item>
            </item>

             <item>
            	<item>Cidade</item>
            	<item name="cidade"></item>
            </item>

             <item>
            	<item>Estado</item>
            	<item name="estado"></item>
            </item>

            <item>
            	<item>Telefone1</item>
            	<item name="telefone1"></item>
            </item>

            <item>
            	<item>Telefone2</item>
            	<item name="telefone2"></item>
            </item>

            <item>
            	<item>WhatsApp</item>
            	<item name="whatsapp"></item>
            </item>

            <item>
            	<item>Email</item>
            	<item name="email"></item>
            </item>

            <item>
            	<item>Nome</item>
            	<item name="nome"></item>
            </item>

            <item>
            	<item>CPF</item>
            	<item name="cpf"></item>
            </item>

            <item>
            	<item>RG</item>
            	<item name="rg"></item>
            </item>

            <item>
            	<item>Email2</item>
            	<item name="email2"></item>
            </item>

            <item>
            	<item>Telefone01</item>
            	<item name="telefone01"></item>
            </item>

            <item>
            	<item>Telefone02</item>
            	<item name="telefone02"></item>
            </item>

             <item>
            	<item>Banco</item>
            	<item name="banco"></item>
            </item>

            <item>
            	<item>Agencia</item>
            	<item name="agencia"></item>
            </item>

            <item>
            	<item>Conta</item>
            	<item name="conta"></item>
            </item>

            <item>
            	<item>TipoConta</item>
            	<item name="tipoConta"></item>
            </item>

            <item>
            	<item>Empresa1</item>
            	<item name="empresa1"></item>
            </item>

            <item>
            	<item>NomeResponsavel</item>
            	<item name="nomeResponsavel"></item>
            </item>

            <item>
            	<item>WhatsApp2</item>
            	<item name="whatsapp2"></item>
            </item>

            <item>
            	<item>Email4</item>
            	<item name="email4"></item>
            </item>

            <item>
            	<item>Empresa2</item>
            	<item name="empresa2"></item>
            </item>

            <item>
            	<item>NomeResponsavel2</item>
            	<item name="nomeResponsavel2"></item>
            </item>

            <item>
            	<item>WhatsApp3</item>
            	<item name="whatsapp3"></item>
            </item>

            <item>
            	<item>Email5</item>
            	<item name="email5"></item>
            </item>


         </cardData>
      </ws:simpleStartProcess>
   </soapenv:Body>
</soapenv:Envelope>
```

---
