# Dificuldade para bloquear somente os campos dvEntrada e dvpessoaPresente

> **Fonte:** [https://fluiggers.com.br/t/dificuldade-para-bloquear-somente-os-campos-dventrada-e-dvpessoapresente/3486](https://fluiggers.com.br/t/dificuldade-para-bloquear-somente-os-campos-dventrada-e-dvpessoapresente/3486)
> **Categoria:** Sem categoria
> **Criado em:** 31/10/2025, 16:05
> **Visualizações:** 20 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Letícia Silva** (@Leticia_Silva) — 31/10/2025, 16:05

```auto
No meu javascript:

}else if(ativAtual == 36){ //saida
	   $("#pnInfoBasicas").show();
	$("#pnInfoVisitante").show();

No displayfields:
 }else if(ativAtual == 36){ //Confirmação saída

    	form.setValue("aprovacaoPresidente",api.fullName);
    	 customHTML.append("$('#pnInfoBasicas input').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoBasicas textarea').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoBasicas select').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoBasicas table').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoBasicas select option:not(:selected)').attr('disabled', 'true'); \n");

         customHTML.append("$('#pnInfoVisitante input').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoVisitante textarea').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoVisitante select').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoVisitante table').attr('readonly','readonly'); \n");
         customHTML.append("$('#pnInfoVisitante select option:not(:selected)').attr('disabled', 'true'); \n");

         customHTML.append("$('#dvEntrada input').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvEntrada textarea').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvEntrada select').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvEntrada table').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvEntrada select option:not(:selected)').attr('disabled', 'true'); \n");

         customHTML.append("$('#dvpessoaPresente input').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvpessoaPresente textarea').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvpessoaPresente select').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvpessoaPresente table').attr('readonly','readonly'); \n");
         customHTML.append("$('#dvpessoaPresente select option:not(:selected)').attr('disabled', 'true'); \n");

    }

O html:
<div class="panel panel-default form-group" id="pnConfirmacaoEntradaSaida">
			    	<div class="panel-heading colorPanel">
			              <h2 class="panel-title"><strong>Confirmação entrada/saída</strong></h2>
			        </div>
			        <div class="panel-body">
			          	<div class="col-md-12">
			          		<div class="col-md-8" id="dvpessoaPresente">
			          			<label class="control-label">Houve o comparecimento da pessoa na fábrica?</label>
			          			<select class="form-control" name="pessoaPresente"  id="pessoaPresente">
			          				<option value="">Selecione...</option>
			            			<option value="sim">A pessoa compareceu conforme o agendamento.</option>
			            			<option value="nao">A pessoa não se fez presente.</option>
			            		</select>
			          		</div>
		        			<div class="col-md-2" id="dvEntrada">
		        				<label class="control-label">Entrada</label>
		        				<input type="time" id="horarioEntrada" name="entrada" class="form-control"></input>
		        			</div>
		        			<div class="col-md-2" id="dvSaida">
		        				<label class="control-label">Saída</label>
		        				<input type="time" id="horarioSaida" name="saida" class="form-control"></input>
		        			</div>
		        			<br>
			 			<div style="padding-top: 10px"><p></p></div>
			          		<div class="col-md-12" id="pnObsAprovacaoGestor">
			          			<label class="control-label">Observações: </label>
			          			<textarea id="obsAprovacaoGestor" rows="3" class="form-control" name="obsAprovacaoGestor"></textarea>
			          		</div>
          				</div>
    				</div>
				</div>
```

---

## Resposta #1

**Pietro** (@pietro) — 03/11/2025, 12:41

Bom dia,

Não seria mais prático usar o script “enableFields” do próprio formulário?

Ou tirar do enable e por em uma função no js, fica mais facil de debugar, eu geralmente uso função para a atividade 1, 2, 3, etc…. e chamo no window.onload, ai posso unificar toda a regra e particionar pra ficar fácil de mexer, alterar e manutenir, o displayFields tem chance de dar erro e ferrar com a página inteira sem retorno algum pro usuário.

Enfim, iria recomendar usar ‘true’ no lugar de readonly:

```javascript
$('#dvEntrada input').attr('readonly', true);
```

---
