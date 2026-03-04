# Como preencher outro campo ZOOM atraves de um campo ZOOM?

> **Fonte:** [https://fluiggers.com.br/t/como-preencher-outro-campo-zoom-atraves-de-um-campo-zoom/985](https://fluiggers.com.br/t/como-preencher-outro-campo-zoom-atraves-de-um-campo-zoom/985)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`, `fluigapi`
> **Criado em:** 24/03/2022, 15:32
> **Visualizações:** 2678 | **Likes:** 2 | **Respostas:** 3

---

## Pergunta original

**Filipe Silva** (@ferilva89) — 24/03/2022, 15:32

Pessoal, boa tarde!

Tenho dois campos ZOOM, um é a matrícula e o outro é o nome do usuário do fluig.
Para o código da matrícula ou o nome, funcionou certinho o DataSet já existente.

Mas eu gostaria de fazer a busca da matrícula e preencher automaticamente o campo de nome do usuário.

Segue o trecho:

```auto
<div class="form-field" data-type="textbox" data-show-properties="" data-field-name="tnumcracha" style="position: relative; left: 0px; top: 0px;">
			<div class="form-input">
				<div class="form-group">
					<label>MATRÍCULA:</label>
						<span class="required text-danger"><strong>*</strong></span>
							<input 	type="zoom" class="form-control" name="tnumcracha" style="width: 25%;" dataset="colleague"
									data-zoom="	{
								   					'displayKey':'colleagueId',
								   					'datasetId':'colleague',
								   					'fields':[{
								   								'field':'colleagueId',
								   								'label':'CRACHÁ/MATRÍCULA',
								   								'standard':true
								   							}]
								   				}"
									zoomvalue="colleagueId" datasetvalue="colleagueId">
				</div>
			</div>
		</div>
		<div class="form-field" data-type="textbox" data-show-properties="" data-field-name="tnomsolic">
			<div class="form-input">
				<div class="form-group">
					<label>NOME DO OPERADOR:</label>
						<span class="required text-danger"><strong>*</strong></span>
							<input type="text" class="form-control" name="tnomsolic" value="" placeholder="" data-size="medium" required="required" style="width: 50%;">
				</div>
			</div>
		</div>
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/03/2022, 18:58 | ❤️ 1

No seu JS do formulário você pode declarar as funções `setSelectedZoomItem(selectedItem)` e `removedZoomItem(removedItem)` para isso. Elas são executadas quando algo é selecionado num Zoom e removido do Zoom. Na [documentação](https://tdn.totvs.com/pages/releaseview.action?pageId=663066946#Personaliza%C3%A7%C3%A3odeformul%C3%A1rios-Definirvalorbaseadonatrocadevalordeoutrocampo/zoom) tem a orientação.

aí faria algo como:

```javascript
function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputName == "tnumcracha") {
        // executa a reloadZoomFilterValues no zoom para filtrar o resultado
        // ou pode usar a window["nome_do_zoom"].setValue("valor a colocar no zoom")
    }
}
```

Mas se o nome sempre depende do crachá você pode fazer o Zoom do crachá, que já é o colleague, trazer também o nome e simplesmente usar o nome pra preencher o outro campo que ficaria somente leitura.

Aí na `setSelectedZoomItem` seria só um `elementoDoNome.value = selectedItem.nome`, por exemplo.

---

## Resposta #2

**Filipe Silva** (@ferilva89) — 30/03/2022, 17:13

Bruno, mudei apenas o dado, mas continuo tentando fazer funcionar.

![image](https://fluiggers.com.br/uploads/default/original/1X/efec80985ba09645e4683e99d40c851f5ea9e6ea.png)

No HTML ficou assim:

```auto
<td class="form-input" data-size="small" style="width: 20%;">
								<input	class="form-control"
										type="zoom"
										id="column_cod"
										name="column_cod"
										dataset="CBC_CAD_PROD_DSS"
										zoomvalue="B1_COD"
										datasetvalue="B1_COD"
										data-zoom="	{
								   						'displayKey':'B1_COD',
									   					'datasetId':'CBC_CAD_PROD_DSS',
									   					'maximumSelectionLength':'1',
									   					'placeholder':'',
									   					'fields':	[{
									   									'field':'B1_COD',
									   									'label':'CODIGO',
									   									'standard':true
									   								},{
									   									'field':'B1_DESC',
									   									'label':'DESCRIÇÃO',
									   									'standard':true
									   								}]
									   				}	"	>
							</td>
							<td class="form-input" data-size="big" style="width: 50%;">
								<input	class="form-control"
										type="zoom"
										id="column_desc"
										name="column_desc"
										dataset="CBC_CAD_PROD_DSS"
										zoomvalue="B1_DESC"
										datasetvalue="B1_DESC"
										data-zoom="	{
								   					'displayKey':'B1_DESC',
									   					'datasetId':'CBC_CAD_PROD_DSS',
									   					'maximumSelectionLength':'1',
									   					'placeholder':'Digite a descrição do produto',
									   					'fields':	[{
									   									'field':'B1_DESC',
									   									'label':'DESCRIÇÃO',
									   									'standard':true
									   								},{
									   									'field':'B1_COD',
									   									'label':'CODIGO',
									   									'standard':true
									   								}]
									   				}	"	>
							</td>
```

No evento JS que criei, ficou assim:

```auto
function setSelectedZoomItem(selectedItem) {

	var DESCP = "column_desc";
	var CODP = "column_cod"

	var FIELD = selectedItem.inputId;

	if (FIELD == DESCP) {
		setZoomData("column_cod", selectedItem["CODP"]);
	} else if (FIELD == CODP) {
		setZoomData("column_desc", selectedItem["DESCP"]);
	}
}

function setZoomData(instance, value) {
	window[instance].setValue(value);
}

function removedZoomItem(removedItem) {

	var DESCP = "column_DESC";
	var CODP = "column_cod"

	if (removedItem.inputId === DESCP) {
		console.log("Retornando resultado removedZoomItem");
		console.log(removedItem);

		window[CODP].clear();

	} else if (removedItem.inputId === CODP) {
		console.log("Retornando resultado removedZoomItem");
		console.log(removedItem);

		window[DESCP].clear();

	}
}
```

Mesmo assim não funcionou… Não estou encontrando…

Se puder me ajudar, agradeço. Vou continuar procurando!

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2022, 00:01 | ❤️ 1

Em teoria isso aqui funcionaria, mas estou sem o ambiente Fluig pra testar e não consegui entrar no academy.

Confesso que todas as vezes que manipulei outro zoom foi só pra recarregar o filtro, não para já dar um valor para ele.

```auto
<td class="form-input" data-size="small" style="width: 20%;">
    <input
        class="form-control"
        type="zoom"
        id="column_cod"
        name="column_cod"
        data-zoom="{
            'displayKey':'B1_COD',
            'datasetId':'CBC_CAD_PROD_DSS',
            'maximumSelectionLength':'1',
            'placeholder':'',
            'fields':[
                {
                    'field':'B1_COD',
                    'label':'CODIGO',
                    'standard':'true'
                },
                {
                    'field':'B1_DESC',
                    'label':'DESCRIÇÃO'
                }]
        }"
    >
</td>
<td class="form-input" data-size="big" style="width: 50%;">
    <input
        class="form-control"
        type="zoom"
        id="column_desc"
        name="column_desc"
        data-zoom="{
            'displayKey':'B1_DESC',
            'datasetId':'CBC_CAD_PROD_DSS',
            'maximumSelectionLength':'1',
            'placeholder':'Digite a descrição do produto',
            'fields':[
                {
                    'field':'B1_DESC',
                    'label':'DESCRIÇÃO',
                    'standard':'true'
                },
                {
                    'field':'B1_COD',
                    'label':'CODIGO'
                }]
        }"
    >
</td>


<script>
function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputId == "column_cod") {
        window["column_desc"].setValue(selectedItem["B1_DESC"]);
    } else if (selectedItem.inputId == "column_desc") {
        window["column_cod"].setValue(selectedItem["B1_COD"]);
    }
}

function removedZoomItem(removedItem) {
    if (removedItem.inputId == "column_cod") {
        window["column_desc"].clear();
    } else if (removedItem.inputId == "column_desc") {
        window["column_cod"].clear();
    }
}
</script>
```

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/03/2022, 00:06

Mas do ponto de vista prático não tem sentido ter 2 Zoom buscando a mesma informação.

Você pode deixar somente 1 zoom e, caso seja realmente necessário salvar a descrição também, criar um input text somente leitura e popular ele.

```auto
<td class="form-input" data-size="small" style="width: 20%;">
    <input
        class="form-control"
        type="zoom"
        id="column_cod"
        name="column_cod"
        data-zoom="{
            'displayKey':'B1_COD',
            'datasetId':'CBC_CAD_PROD_DSS',
            'maximumSelectionLength':'1',
            'placeholder':'',
            'fields':[
                {
                    'field':'B1_COD',
                    'label':'CODIGO',
                    'standard':'true'
                },
                {
                    'field':'B1_DESC',
                    'label':'DESCRIÇÃO'
                }]
        }"
    >
</td>
<td class="form-input" data-size="big" style="width: 50%;">
    <input
        class="form-control"
        type="text"
        id="column_desc"
        name="column_desc"
        readonly
    >
</td>

<script>
function setSelectedZoomItem(selectedItem) {
    if (selectedItem.inputId == "column_cod") {
        $("#column_desc").val(selectedItem["B1_DESC"]);
    }
}

function removedZoomItem(removedItem) {
    if (removedItem.inputId == "column_cod") {
        $("#column_desc").val("");
    }
}
</script>
```

---
