# Ocultar/ habilitar campos com checkbox

> **Fonte:** [https://fluiggers.com.br/t/ocultar-habilitar-campos-com-checkbox/1635](https://fluiggers.com.br/t/ocultar-habilitar-campos-com-checkbox/1635)
> **Categoria:** Formulários
> **Tags:** `form`, `validação`
> **Criado em:** 10/02/2023, 11:41
> **Visualizações:** 660 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 10/02/2023, 11:41

Tenho que fazer que após clicar no checkbox os respectivos campos sejam ocultados, porém não consigo achar uma solução para isso, segue o codigo com o checkbox e os campos que quero ocultar

```auto
<div class="panel panel-default boder-red">
								    <div class="panel-heading  panel-child">
								        <h3 class="panel-title">Pagamento</h3>
								    </div>
								    <div class="panel-body">
								        <div class="form-group area-solicitante">
							        		<div class="row" style="display:flex; align-items: baseline;">
							        			<label>Gratuito?</label>
							        			<div class="col-md-5 form-group" style="white-space: nowrap;padding:0">
									   				<input id="docGratuito" name="docGratuito" type="checkbox"
									   					data-size="small" data-off-text="Não" data-off-value="2" data-on-text="Sim" data-on-value="1" data-on-color="success" data-off-color="default"/>
												</div>
								        	</div>
							        		<div class="row camposPagamento">
									        	<div class="col-md-2">
									        		<label for="valor">Valor Remuneração:</label>
									       			<input type="text" id="valor" name="valor" class="form-control">
									        	</div>
									        	<div class="col-md-2">
									        		<label for="fPgamento" style="white-space: nowrap;">Forma de Pagamento:</label>
									        		<select id="fPgamento" name="fPgamento" class="form-control">
									        			<option value="">Selecione...</option>
									        			<option value="boleto">Boleto</option>
									        			<option value="transferencia">Transferência Depósito</option>
									        		</select>
									        	</div>
									        	<div class="col-md-3">
									        		<label for="dataPagamento">Data de pagamento:</label>
									       			<input type="text" id="dataPagamento" name="dataPagamento" class="form-control">
									        	</div>
								        	</div>
								        	<div class="row dadosBancarios">
								        		<h3>Dados Bancários</h3>
								        	</div>
									     	 <div class="row dadosBancarios">
									        	<div class="col-md-2">
									        		<label for="banco">Banco:</label>
									       			<input type="text" id="banco2" name="banco2" class="form-control">
									        	</div>
									        	<div class="col-md-2">
									        		<label for="agencia" style="white-space: nowrap;">Agencia:</label>
									       			<input type="text" id="agencia2" name="agencia2" class="form-control">
									        	</div>
									        	<div class="col-md-3">
									        		<label for="nConta" style="white-space: nowrap;">Nº da Conta:</label>
									       			<input type="text" id="nConta2" name="nConta2" class="form-control">
									        	</div>
									        	<div class="col-md-5">
									        		<label>Conta:</label><br>
									       			<label for="contaCorrente"><input type="radio" id="contaCorrente" name="tipoConta" value="Corrente"> Corrente</label>
									       			<label for="contaPoupanca"><input type="radio" id="contaPoupanca" name="tipoConta" value="Poupanca"> Poupança nº</label>
									        	</div>
								        	</div>
								        	<div class="row">
								        	<label for="obsBanco">Observação:</label>
								        		<div class="col-md-12">
								        			<textarea class="form-control" name="obsBanco" id="obsBanco"  rows="4" cols="12" onkeydown="autoResize(this);" ></textarea>
									        	</div>

								        	</div>
								        </div>
								    </div>
								</div>
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 13/02/2023, 14:49

Esse campo checkbox seu é um switcher?

Se sim, você pode usar a função:

```auto
FLUIGC.switcher.onChange($('#docGratuito'), function(event, state){
	if ( state ) { //Se marcar como "SIM"
		$('.camposPagamento').hide('slow'); //Se quiser esconder a div 'camposPagamento'
	}
    else{
         $('.camposPagamento').show('slow');
    }
});
```

Qualquer dúvida, veja a [documentação](https://style.fluig.com/javascript.html#switch-button).

---
