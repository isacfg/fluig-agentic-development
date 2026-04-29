# Start process por widget em mobile

> **Fonte:** [https://fluiggers.com.br/t/start-process-por-widget-em-mobile/2404](https://fluiggers.com.br/t/start-process-por-widget-em-mobile/2404)
> **Categoria:** Sem categoria
> **Criado em:** 05/12/2023, 10:48
> **Visualizações:** 261 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Bueno** (@Bueno) — 05/12/2023, 10:48

pessoal tenho uma widget que starta um processo, funciona perfeitamente no web, fiz a alteração para ela ser mobile tbm pelo app my fluig, mas ela nao starta, ao clicar em confirmar so fica carregando eternamente… segue codigo da inicialização do processo
var myLoading = FLUIGC.loading(window);
myLoading.show();
var condutor = $(‘#condutor’).val();
var op1 = op;
var optionValue1 = optionValue;
var veiculo = $(“#veiculo”).val();
var de = document.querySelector(‘\[name=“de”\]’).value;
var ate = document.querySelector(‘\[name=“ate”\]’).value;
var origem = document.querySelector(‘\[name=“origem”\]’).value;
var destino = document.querySelector(‘\[name=“destino”\]’).value;
var kmini = document.querySelector(‘\[name=“kmini”\]’).value;
var kmfim = document.querySelector(‘\[name=“kmfim”\]’).value;
var finalidade = document.querySelector(‘\[name=“finalidade”\]’).value;
var saida = document.getElementById(‘saida’).value;
var chegada = document.getElementById(‘chegada’).value;
console.log(op1, optionValue1, de, ate, origem, destino, saida, chegada, kmini, kmfim);

```
var c1 = DatasetFactory.createConstraint('de', de, de, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint('veiculo', veiculo, veiculo, ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint('saida', saida, saida, ConstraintType.MUST);
	var ds = DatasetFactory.getDataset('gestaoveicularhml', null, new Array(c1, c2, c3), null);
	if (ds != null && ds.values != null && ds.values.length > 0) {
		FLUIGC.toast({
			message: 'ERRO: Veículo em uso no período selecionado! ',
			type: 'warning'
		});
		myLoading.hide();
		exit();
		condutor.focus();
	}
	var startRequest = {
		"targetState": 17,
		"subProcessTargetState": 0,
		"targetAssignee": "admin",
		"comment": "iniciado automaticamente",
		"formFields": {
			"user_email": optionValue1,
			"op": op1,
			"condutor": condutor,
			"veiculo": veiculo,
			"de": de,
			"ate": ate,
			"saida": saida,
			"chegada": chegada,
			"origem": origem,
			"destino": destino,
			"kmini": kmini,
			"kmfim": kmfim,
			"finalidade": finalidade,
		}
	}
	parent.WCMAPI.Create({
		url: parent.WCMAPI.serverURL + '/process-management/api/v2/processes/registro_veiculo/start',
		contentType: 'application/json',
		type: 'POST',
		data: startRequest,
		success: function(data, status, jqXHR) {
			FLUIGC.toast({
				message: 'Sucesso: solicitação inicializada com sucesso! ',
				type: 'success'
			});
```

---

## Resposta #1

**Afonso Uliana Neto** (@Afonso) — 23/04/2024, 20:12

Acredito que seu problema estava no parent.WCMAPI isso porque o fluig Mobile trabalha webview, neste caso eu faria a chamada o start process dentro de um Dataset.

---
