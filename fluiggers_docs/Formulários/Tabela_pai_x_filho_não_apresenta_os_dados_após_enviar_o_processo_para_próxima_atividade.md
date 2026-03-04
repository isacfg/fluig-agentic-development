# Tabela pai x filho não apresenta os dados após enviar o processo para próxima atividade

> **Fonte:** [https://fluiggers.com.br/t/tabela-pai-x-filho-nao-apresenta-os-dados-apos-enviar-o-processo-para-proxima-atividade/994](https://fluiggers.com.br/t/tabela-pai-x-filho-nao-apresenta-os-dados-apos-enviar-o-processo-para-proxima-atividade/994)
> **Categoria:** Formulários
> **Criado em:** 29/03/2022, 16:24
> **Visualizações:** 1177 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Gabriel** (@gabrielmrqsss) — 29/03/2022, 16:24

Boa tarde pessoal!

Estou desenvolvendo um formulário onde é carregado em uma tabela pai x filho um dataset, e dentro dessa tabela, tem 2 campos que não vem do dataset e deveriam ser preenchidos pelo usuário no começo da atividade. No entanto, ao preencher e enviar a atividade pro próximo nível, o que foi escrito manualmente é perdido!

Alguém tem alguma ideia? Segue a tabela pai x filho e o código .js que estou utilizando.

```auto
<table tablename="tabelaAgro" class="table" cellspacing="0"  noaddbutton="true" nodeletebutton="true" >
                        <thead>
                            <tr>
                                <th class="tableColumn">Nº da Linha</th>
                                <th class="tableColumn">Código do Item</th>
                                <th class="tableColumn">Descrição do Item</th>
                                <th class="tableColumn">Quantidade</th>
                                <th class="tableColumn">Depósito</th>
                                <th class="tableColumn">Unidade de Medida</th>
                                <th class="tableColumn">Preço Unitário</th>
                                <th class="tableColumn">Total Linha</th>
                                <th class="tableColumn">Quantidade Recebida</th>
                                <th class="tableColumn">Recebido</th>
                            </tr>
                        </thead>
                        <tbody>
	                        <tr>
								<td class="col-md-1">
									<div class="form-group">
										<input type="text" name="agroLinha" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-1">
									<div class="form-group">
										<input type="text" name="agroItem" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-3">
									<div class="form-group">
										<input type="text" name="agroDesc" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-2">
									<div class="form-group">
										<input type="text" name="agroQtd" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-1">
									<div class="form-group">
										<input type="text" name="agroDeposito" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-1">
									<div class="form-group">
										<input type="text" name="agroUnidade" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-2">
									<div class="form-group">
										<input type="text" name="agroPreco" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-3">
									<div class="form-group">
										<input type="text" name="agroTotal" class="form-control" maxlength="200" size="500" readonly/>
									</div>
								</td>
	                            <td class="col-md-1">
									<div class="form-group">
										<input type="text" name="agroRecebido" class="form-control" maxlength="200" size="500"/>
									</div>
								</td>
	                            <td class="col-md-1">
									<div class="form-group">
										<input type="checkbox" name="agroCheckbox" class="form-control"/>
									</div>
								</td>
	                        </tr>
                        </tbody>
                    </table>
```
```auto
$(document).ready(function () {
	/** Função é iniciada quando o HTML termina o carregando */
	carregaDatasetNoPaiFilhoAgro();
	carregaFSDTMTAgro();
});

function carregaDatasetNoPaiFilhoAgro() {
	var numeroPedido = document.getElementById("pedidoAgro").value;
	var colunasAgro = new Array('DocNum', 'Dscription', 'ItemCode', 'LineNum', 'LineTotal', 'Pedido', 'Price', 'Quantity', 'UomCode', 'WhsCode');
    var c1 = DatasetFactory.createConstraint("DocNum", numeroPedido , numeroPedido , ConstraintType.MUST);
	var datasetAgro = DatasetFactory.getDataset('LKS_LINE_AGRO_FLUIG', colunasAgro, new Array(c1), null);
	for (var key in datasetAgro.values) {
		if (Object.hasOwnProperty.call(datasetAgro.values, key)) {
			/** Adicionando um nova linha para cada item do dataset */
			var rowId = wdkAddChild("tabelaAgro");
			/** Alimentando os campos com as informações */
			$("[name='agroLinha___" + rowId + "']").val(datasetAgro.values[key].LineNum);
			$("[name='agroItem___" + rowId + "']").val(datasetAgro.values[key].ItemCode);
			$("[name='agroDesc___" + rowId + "']").val(datasetAgro.values[key].Dscription);
			$("[name='agroQtd___" + rowId + "']").val(datasetAgro.values[key].Quantity);
			$("[name='agroDeposito___" + rowId + "']").val(datasetAgro.values[key].WhsCode);
			$("[name='agroUnidade___" + rowId + "']").val(datasetAgro.values[key].UomCode);
			$("[name='agroPreco___" + rowId + "']").val(datasetAgro.values[key].Price);
			$("[name='agroTotal___" + rowId + "']").val(datasetAgro.values[key].LineTotal);
		}
	}
}

function carregaFSDTMTAgro(){
	var numeroPedido = document.getElementById("pedidoAgro").value;
	var colunasAgro = new Array('Data', 'Fornecedor', 'Modadelidade', 'Status', 'Tipo', 'Total_Pedido', 'DocNum');
    var c1 = DatasetFactory.createConstraint("DocNum", numeroPedido , numeroPedido , ConstraintType.MUST);
	var datasetAgro = DatasetFactory.getDataset('LKS_HEAD_AGRO_FLUIG', colunasAgro, new Array(c1), null);
	for (var key in datasetAgro.values) {
		if (Object.hasOwnProperty.call(datasetAgro.values, key)) {
			/** Adicionando um nova linha para cada item do dataset */
			var rowId = wdkAddChild("tabelaAgroo");
			/** Alimentando os campos com as informações */
			$("[name='NumeroAgro___" + rowId + "']").val(datasetAgro.values[key].DocNum);
			$("[name='FornecedorAgro___" + rowId + "']").val(datasetAgro.values[key].Fornecedor);
			$("[name='StatusAgro___" + rowId + "']").val(datasetAgro.values[key].Status);
			$("[name='DataAgro___" + rowId + "']").val(datasetAgro.values[key].Data);
			$("[name='TipoAgro___" + rowId + "']").val(datasetAgro.values[key].Tipo);
			$("[name='ModalidadeAgro___" + rowId + "']").val(datasetAgro.values[key].Modadelidade);
			$("[name='TotalAgro___" + rowId + "']").val(datasetAgro.values[key].Total_Pedido);
		}
	}
}
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 31/03/2022, 11:04

Pode ser algum código js limpando seus campos.

coloca uma validação no validade form

```javascript
var indexes = form.getChildrenIndexes("franquias"); // aqui coloca o nome da sua tablea pai filho
var childrenData = form.getChildrenFromTable("tabelaAgro");
// pegando os valores dos campos de cada linha do formulario pai x filho
var fieldKeys = childrenData.keySet().toArray();
if (indexes.length > 0) {
	for (var i = 0; i < indexes.length; i++) { // percorre os campos Pai x Filho
		if(form.getValue('agroRecebido___' + indexes[i]) == null || form.getValue('agroRecebido___' +indexes[i]) == '') {
			throw "Informe o valor Ajustado!";
		}
	}
```

Dessa forma você garante que o campo não ficou vazio na hora de movimentar.

---

## Resposta #2

**Gabriel** (@gabrielmrqsss) — 31/03/2022, 11:17

Olá Daniel, tudo bem?

Acredito que tenha descoberto o motivo de não aparecer o que foi digitado na atividade anterior.

carregaDatasetNoPaiFilhoAgro(document.getElementById(‘pedidoAgro’));
carregaFSDTMTAgro(document.getElementById(‘pedidoAgro’));

No último script do meu código, tenho essa função que, ao carregar o documento HTML, ele faz carregar novamente as tabelas pai x filho, porém, por não haver nada do dataset nos inputs que deixei aberto, acredito que por carregar tudo do zero, se perde o que foi escrito na outra atividade.

Portanto, acredito que agora a pergunta seria outra: como faço para que as informações carregadas na atividade anterior, não se percam ao enviar para a próxima atividade, sem que haja a necessidade da função acima? Sem ela, aparece só o cabeçalho das tabelas…

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 03/04/2022, 16:39

Sempre que você envia um formulário o fluig salva tudo e mantem para a próxima atividade isso é nativo. então acredito que você esteja com duvidas no funcionamento padrão do fluig.

---

## Resposta #4

**joaopretti** (@joaopretti) — 01/08/2023, 11:45

Boa tarde, eu me encontro com o mesmo problema, segue meu codigo:

```auto
if (true)
  {

    $("#quantidade").val(ds[0].QTD);


    var result = ""

    for (var i = 0; i < ds[0].QTD; i++){
      result += "<tr>";
      result += "<td>teste"+i+"</td>";
      result += "</tr>";
    }
    console.log(result);
    alert(result);
    $("#observacoes").append(result);
  }
```

HTML:

```
<div class="form-group"id="tabela" name="tabela">
								<table>
									<thead>
										<tr>
											<th>Produto</th>
										</tr>
									</thead>
									<tbody id="table">

									</tbody>
								</table>

							</div>
```

ele não está salvando tbm, oque eu poderia fazer?

---
