# Como preencher inputs automaticamente com um select

> **Fonte:** [https://fluiggers.com.br/t/como-preencher-inputs-automaticamente-com-um-select/1867](https://fluiggers.com.br/t/como-preencher-inputs-automaticamente-com-um-select/1867)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 18/04/2023, 16:33
> **Visualizações:** 295 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 18/04/2023, 16:33

Tenho que fazer alguns campos serem preenchidos automaticamente dependendo da escolha do meu select, porém não descobri uma forma de fazer isso, alguem consegue me ajudar.

Esse é a parte que se encontra meu select e os respectivos campos que preciso preencher automaticamente.

```auto
<div id="dadosDonatario">
				    <div class="panel panel-default boder-red" >
						<div class="panel-heading panel-child">
							<h3 class="panel-title">Dados do Donatário:</h3>
					    </div>
					    <div class="panel-body">
					    	<div class="row">
					    		<div class="col-md-4 form-group">
						    		<select class="form-control"  name="donatario" id="donatario" dataset="dsDonatariosTermo" datasetkey="DONATARIO" datasetvalue="DONATARIO">Nome Donatário</select>

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
						    		<input type="text" class="form-control" name="rgDonatario" id="rgDonatario" mask="99.999.999-9"/>
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
				</div>
```

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 18/04/2023, 17:09

Você precisa usar o Select? O componente Zoom suporta o que precisa, com as funções setSelectedZoomItem e removedZoomItem, conhece?

---

## Resposta #2

**kaue menezes salgado** (@kaue) — 18/04/2023, 17:22

Não conheço não, poderia dar um exemplo.

A questão de usar o select é que depois que os campos estiverem preenchidos através de um botão vou transformar em PDF, será que com esse zoom que vc informou funciona também?

---
