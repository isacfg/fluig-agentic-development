# Erro ao executar o beforeTask

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-executar-o-beforetask/2549](https://fluiggers.com.br/t/erro-ao-executar-o-beforetask/2549)
> **Categoria:** Formulários
> **Tags:** `form`, `formulario`, `beforetasksave`
> **Criado em:** 31/01/2024, 16:26
> **Visualizações:** 202 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 31/01/2024, 16:26

Boa tarde!

Estou tendo um erro no log que informa que é referente ao beforeTask porém não descobri oq fazer para arrumar esse erro, gostaria de ajuda.

Erro:

```auto
INFO  [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-37206) InternalError: Cannot convert entrega to java.lang.Integer (beforeTaskSave#31)
```

codigo do beforeTask:

```javascript
function beforeTaskSave(colleagueId,nextSequenceId,userList){

     var atv_inicio = 68;

     if(nextSequenceId == atv_inicio /*&& getValue("WKCompletTask").equals("true")*/) {

        var assunto = "Processo compras";
        var msgInicial = "";
        var msgFinal = "";

        var destinatarios = userList;

        log.info("##** destinatarios" + destinatarios);

        enviaEmail(assunto, destinatarios, msgInicial, msgFinal, atv_inicio);

     }


	function enviaEmail(assunto, destinatarios, msgInicial, msgFinal, atividade) {

		var processo = getValue("WKNumProces").toString();

		try{

			var parametros = new java.util.HashMap();
			var subject = "[WF" + processo + "] - Requisição de compra"


			parametros.put("SOLICITACAO_", processo);
			parametros.put("PRAZO_ENTREGA", hAPI.getCardData("entrega"));
            parametros.put("PREVISAO_ORC", hAPI.getCardData("valor"));
            parametros.put("OBSER_VACAO", hAPI.getCardData("observacao"));

			var tabelaItens = montarItens();

			parametros.put("TABLE_ITENS", tabelaItens);

            var notificacao = notifier.notify("1275", "outroTeste", parametros, destinatarios, "text/html");


		} catch (error) {
			log.info("##** Erro no envio de email");
            log.info(error);
		}


	}

	function montarItens() {

		var html = "";
		html += " <table>";
		html += "    <thead>";
		html += "       <tr>";
		html += "            <th>Quantidade</th>";
		html += "            <th>Descrição</th>";
		html += "       </tr>";
		html += "    </thead>";
		html += "   <tbody>";

		var processo = getValue("WKNumProces");
		var campos = hAPI.getCardData(processo);


		var contador = campos.keyset().iterator();
		while (contador.hasNext()) {

			var id = contador.next();

			if (id.match(/it_Quantidade___/)) {

				var campo = campos.get(id);
				var id = id.split("___")[1];

				var quantidades = campos.get("it_Quantidade___" + id);
				var descricoes = campos.get("it_Descricao___" + id);


				html += "<tr>"
				html += "    <td style= 'text-aling:center'>" + quantidades + "<td>";
				html += "    <td style= 'text-aling:center'>" + descricoes + "<td>";
				html += "</tr>"

					log.info("#%$ retorno");
				    log.info(html);

			}
		}

		html += "</tbody></table>"

			return html

	}



}
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/01/2024, 16:49

Dois problemas que vi.

O primeiro é que você não passou o **subject** na lista de parâmetros.

Segundo é que você tá usando o método `hAPI.getCardData`. Esse método espera um inteiro e então retorna um HashMap com todos os campos do formulário.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/d/d0330c748ce021db0fa8b0df5e7ed2dee371aeb9_2_690x152.png)

Acredito que a sua intenção nessa situação é usar o método `hAPI.getCardValue`, pois ele sim aguardar uma string (nome do campo) e então retorna o valor do campo.

---

## Resposta #2

**kaue menezes salgado** (@kaue) — 31/01/2024, 17:00

Arrumei aqui e realmente não está dando aquele erro, porém agora está dando outro kkkk

Novo erro:

```auto
TypeError: Cannot find function keyset in object {companyid=1, cardid=6239, documentid=6467, version=1000, tableid=principal, anonymization_date=, anonymization_user_id=, hTemvalidade=, hValidade=, Escolhasss=não, hTemAprov=, hAprovador=, tipos=Compra / Contratação, div_tbObservador=, nomeSolic=Kaue Menezes, dataSolic=31/01/2024, emailSolic=kaue.menezes@turmadamonica.com.br, SETOR=Tecnologia da Informação, CentrodeCustos=Design e Comunicação via Comercial, faturas=RTS, pessoaFisica=, locais=, div_tbRefcomerciais=, entrega=05/01/2024, valor=30,00, observacao=s, fdFoto=, fnFoto=, div_tbRefcomerciais2=, observacoes=, condiFinal=, Fornecedor2=, Produto2=, Valor3=, CondicaoPagamento2=, PrazoEntrega2=, observacao2=, itemnoEstoque=, observacaoEstoque=, forcontCompra=, observacaocontCompra=, processoValidado=, observacaoProcesso=, licitacaoAprovada=, observacaoLicitacao=, compraAprovada=, observacaoCompra=, recebimentoOK=, observacaoRecebimento=, ativoFixo=, observacaoAtivo=, abasteceEstoque=, observacaoAbastece=, contCompra=, observacaoContinuidade=, ATIVIDADE=0, infoCorreta=, observacaoCorreta=, div_tbRefcomerciais3=, companyid___1=1, cardid___1=6239, documentid___1=6467, version___1=1000, tableid___1=tbRefcomerciais, anonymization_date___1=, anonymization_user_id___1=, trRefcomerciais___1=, Quantidade___1=2, Descricao___1=k, masterid___1=428}.
```

Codigo do beforetask arrumado

```javascript
function beforeTaskSave(colleagueId,nextSequenceId,userList){

     var atv_inicio = 68;

     if(nextSequenceId == atv_inicio && getValue("WKCompletTask").equals("true")) {

        var assunto = "Processo compras";
        var msgInicial = "";
        var msgFinal = "";

        var destinatarios = userList;

        log.info("##** destinatarios" + destinatarios);

        enviaEmail(assunto, destinatarios, msgInicial, msgFinal, atv_inicio);

     }


	function enviaEmail(assunto, destinatarios, msgInicial, msgFinal, atividade) {

		var processo = getValue("WKNumProces").toString();
		var entrega = hAPI.getCardValue("entrega");
		var valor = hAPI.getCardValue("valor");
		var observacao = hAPI.getCardValue("observacao");

		try{

			var parametros = new java.util.HashMap();
			var subject = "[WF" + processo + "] - Requisição de compra"


			parametros.put("SOLICITACAO_", processo);
			parametros.put("PRAZO_ENTREGA", entrega);
            parametros.put("PREVISAO_ORC", valor);
            parametros.put("OBSER_VACAO",observacao);

			var tabelaItens = montarItens();

			parametros.put("TABLE_ITENS", tabelaItens);

            var notificacao = notifier.notify("1275", "outroTeste", parametros, destinatarios, "text/html");


		} catch (error) {
			log.info("##** Erro no envio de email");
            log.info(error);
		}


	}

	function montarItens() {

		var html = "";
		html += " <table>";
		html += "    <thead>";
		html += "       <tr>";
		html += "            <th>Quantidade</th>";
		html += "            <th>Descrição</th>";
		html += "       </tr>";
		html += "    </thead>";
		html += "   <tbody>";

		var processo = getValue("WKNumProces");
		var campos = hAPI.getCardData(processo);


		var contador = campos.keyset().iterator();
		while (contador.hasNext()) {

			var id = contador.next();

			if (id.match(/it_Quantidade___/)) {

				var campo = campos.get(id);
				var id = id.split("___")[1];

				var quantidades = campos.get("it_Quantidade___" + id);
				var descricoes = campos.get("it_Descricao___" + id);


				html += "<tr>"
				html += "    <td style= 'text-aling:center'>" + quantidades + "<td>";
				html += "    <td style= 'text-aling:center'>" + descricoes + "<td>";
				html += "</tr>"

					log.info("#%$ retorno");
				    log.info(html);

			}
		}

		html += "</tbody></table>"

			return html

	}



}
```

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/01/2024, 17:09

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/kaue/48/915_2.png) kaue:
>
> > `var contador = campos.keyset().iterator();`

Não existe esse método `keyset`.

O certo é `keySet`.

---
