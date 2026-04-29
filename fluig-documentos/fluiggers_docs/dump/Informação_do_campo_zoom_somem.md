# Informação do campo zoom somem

> **Fonte:** [https://fluiggers.com.br/t/informacao-do-campo-zoom-somem/1879](https://fluiggers.com.br/t/informacao-do-campo-zoom-somem/1879)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 25/04/2023, 14:34
> **Visualizações:** 220 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 25/04/2023, 14:34

Boa tarde!

Tenho um formulário que pega informações através do campo zoom, porém quando envio para próxima etapa do processo o campo “DONATARIO” a informação desse campo simplesmente some e fica como se não tivesse feito escolha nenhuma, e é somente esse campo.

Segue código do html.

```auto
<div id="dadosDonatario">
				    <div class="panel panel-default boder-red" >
						<div class="panel-heading panel-child">
							<h3 class="panel-title">Dados do Donatário:</h3>
					    </div>

                     <div class="panel-body">

                            <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">DONATARIO:</label>
                                 <input
                                    type="zoom"
                                    id = "DONATARIO"
                                    name="DONATARIO"
                                    data-zoom="{
										'displayKey':'DONATARIO',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{

												'field':'DONATARIO',
												'label':'DONATARIO'

											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">RG:</label>
                                 <input
                                    type="zoom"
                                    id = "RG"
                                    name="RG"
                                    data-zoom="{
										'displayKey':'RG',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{

												'field':'RG',
												'label':'RG'

											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">CPF:</label>
                                 <input
                                    type="zoom"
                                    id = "CPF"
                                    name="CPF"
                                    data-zoom="{
										'displayKey':'CPF',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'CPF',
												'label':'CPF'

											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">EMAIL:</label>
                                 <input
                                    type="zoom"
                                    id = "EMAIL"
                                    name="EMAIL"
                                    data-zoom="{
										'displayKey':'EMAIL',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'EMAIL',
												'label':'EMAIL'
											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">ESTADO CIVIL:</label>
                                 <input
                                    type="zoom"
                                    id = "ESTADOCIVIL"
                                    name="ESTADOCIVIL"
                                    data-zoom="{
										'displayKey':'ESTADOCIVIL',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'ESTADO CIVIL',
												'label':'ESTADO CIVIL'
											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">TELEFONE:</label>
                                 <input
                                    type="zoom"
                                    id = "TELEFONE"
                                    name="TELEFONE"
                                    data-zoom="{
										'displayKey':'TELEFONE',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'TELEFONE',
												'label':'TELEFONE'
											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">CEP:</label>
                                 <input
                                    type="zoom"
                                    id = "CEP"
                                    name="CEP"
                                    data-zoom="{
										'displayKey':'CEP',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'CEP',
												'label':'CEP'
											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">BAIRRO:</label>
                                 <input
                                    type="zoom"
                                    id = "BAIRRO"
                                    name="BAIRRO"
                                    data-zoom="{
										'displayKey':'BAIRRO',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'BAIRRO',
												'label':'BAIRRO'
											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">CIDADE:</label>
                                 <input
                                    type="zoom"
                                    id = "CIDADE"
                                    name="CIDADE"
                                    data-zoom="{
										'displayKey':'CIDADE',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'CIDADE',
												'label':'CIDADE'

											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">ESTADO:</label>
                                 <input
                                    type="zoom"
                                    id = "ESTADO"
                                    name="ESTADO"
                                    data-zoom="{
										'displayKey':'ESTADO',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'ESTADO',
												'label':'ESTADO'

											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">NACIONALIDADE:</label>
                                 <input
                                    type="zoom"
                                    id = "NACIONALIDADE"
                                    name="NACIONALIDADE"
                                    data-zoom="{
										'displayKey':'NACIONALIDADE',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{
												'field':'NACIONALIDADE',
												'label':'NACIONALIDADE'

											}
										]
                                    }"  />
                           </div>

                           <div class="col-md-3 form-group">
                              <label for="inputEmail3" class="col-sm-4 control-label">ENDERECO:</label>
                                 <input
                                    type="zoom"
                                    id = "ENDERECO"
                                    name="ENDERECO"
                                    data-zoom="{
										'displayKey':'ENDERECO',
										'datasetId':'dsDonatariosTermoDoacao',
										'fields':[
												{

												'field':'ENDERECO',
												'label':'ENDERECO'
											}
										]
                                    }"  />
                           </div>


                     </div>

                  </div>
                  </div>
```

Agora o codigo js.

```javascript
function setSelectedZoomItem(selectedItem) {

	var DONATARIO = "DONATARIO";
	var RG = "RG";
	var CPF = "CPF";
	var EMAIL = "EMAIL";
	var ESTADOCIVIL = "ESTADOCIVIL";
	var TELEFONE = "TELEFONE";
	var CEP = "CEP";
	var BAIRRO = "BAIRRO";
	var CIDADE = "CIDADE";
	var ESTADO = "ESTADO";
	var NACIONALIDADE = "NACIONALIDADE";
	var ENDERECO = "ENDERECO";

	var FIELD = selectedItem.inputId;

	if(selectedItem.inputId == DONATARIO){
		setZoomData("DONATARIO", selectedItem["DONATARIO"]);
		setZoomData("RG", selectedItem["RG"]);
		setZoomData("CPF", selectedItem["CPF"]);
		setZoomData("EMAIL", selectedItem["EMAIL"]);
		setZoomData("ESTADOCIVIL", selectedItem["ESTADOCIVIL"]);
		setZoomData("TELEFONE", selectedItem["TELEFONE"]);
		setZoomData("CEP", selectedItem["CEP"]);
		setZoomData("BAIRRO", selectedItem["BAIRRO"]);
		setZoomData("CIDADE", selectedItem["CIDADE"]);
		setZoomData("ESTADO", selectedItem["ESTADO"]);
		setZoomData("NACIONALIDADE", selectedItem["NACIONALIDADE"]);
		setZoomData("ENDERECO", selectedItem["ENDERECO"]);


}

function setZoomData(instance, value){
	window[instance].setValue(value);
}

function removedZoomItem(removedItem) {

	var DONATARIO = "DONATARIO";
	var RG = "RG";
	var CPF = "CPF";
	var EMAIL = "EMAIL";
	var ESTADOCIVIL = "ESTADOCIVIL";
	var TELEFONE = "TELEFONE";
	var CEP = "CEP";
	var BAIRRO = "BAIRRO";
	var CIDADE = "CIDADE";
	var ESTADO = "ESTADO";
	var NACIONALIDADE = "NACIONALIDADE";
	var ENDERECO = "ENDERECO";

 }
}
```

---
