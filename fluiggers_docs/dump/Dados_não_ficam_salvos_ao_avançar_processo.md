# Dados não ficam salvos ao avançar processo

> **Fonte:** [https://fluiggers.com.br/t/dados-nao-ficam-salvos-ao-avancar-processo/2959](https://fluiggers.com.br/t/dados-nao-ficam-salvos-ao-avancar-processo/2959)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `dataset`
> **Criado em:** 04/09/2024, 17:14
> **Visualizações:** 59 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Ariany G** (@Ariany_G) — 04/09/2024, 17:14

Olá, gostaria de saber se podem me ajudar no seguinte problema:

Ao criar o processo dinamicamente onde as notas fiscais surgem conforme o que foi selecionado no selRomaneio, e incluir colunas para inserção manual (Status, Confirmação, Motivo e Anexos) e avançar o processo. Os dados voltam ao estado original de Selecione e os anexos se perdem.

O que eu poderia alterar para que funcione?

Segue código:

document.addEventListener(“DOMContentLoaded”, function() {
function showNewDatasetPartial(carregamento) {
var div = document.getElementById(“tabelaNF”);

```
if (!div) {
        console.error("Elemento com ID 'tabelaNF' não encontrado.");
        return;
    }

    if (!carregamento || carregamento.trim() === "") {
        div.innerHTML = "<p>Por favor, selecione um carregamento.</p>";
        return;
    }

    var c1 = DatasetFactory.createConstraint("CARREGAMENTO", carregamento, carregamento, ConstraintType.MUST);
    var constraints = [c1];

    var fields = ["CARREGAMENTO", "TIPO", "CAPTACAO", "NOTA", "ENDERECO_COMPLETO"];
    var sortingFields = ["CARREGAMENTO"];

    try {
        console.log("Buscando dataset para o carregamento: " + carregamento);
        var dataset = DatasetFactory.getDataset("dsRomaneioNFs", fields, constraints, sortingFields);
        console.log("Dataset recebido:", dataset);
        div.innerHTML = showDataset(dataset);

    } catch (erro) {
        console.error("Erro ao buscar o dataset:", erro);
        div.innerHTML = "Erro: " + erro;
    }
}


function showDataset(dataset) {
if (!dataset || !dataset.values || dataset.values.length === 0) {
    return "<p>Nenhum dado encontrado para o carregamento selecionado.</p>";
}

var tabela = '<div class="form-group col-md-12 col-xs-12">';
tabela += '<label for="dataTable">Notas Fiscais do Carregamento:</label>';
tabela += '<div class="table-container">';
tabela += '<table class="table table-bordered" tablename="productTable" id="productTable" noaddbutton="true" nodeletebutton="true">';

tabela += '<thead>';
tabela += '<tr>';
for (var i = 0; i < dataset.columns.length; i++) {
    tabela += '<th>' + dataset.columns[i] + '</th>';
}
tabela += '<th>Status</th>';
tabela += '<th>Confirmação de Status</th>';
tabela += '<th>Anexo do canhoto assinado</th>';
tabela += '<th>Anexo das fotos das mercadorias entregues</th>';
tabela += '<th>Motivo</th>';
tabela += '</tr>';
tabela += '</thead>';

tabela += '<tbody>';
    for (var x = 0; x < dataset.values.length; x++) {
        tabela += '<tr id="row_' + x + '">';
        var row = dataset.values[x];
        for (var y = 0; y < dataset.columns.length; y++) {
            tabela += '<td>' + (row[dataset.columns[y]] || '') + '</td>';
        }

        tabela += '<td>';
        tabela += '<select class="form-control statusSelect" id="statusSelect' + x + '" name="statusSelect" data-row="' + x + '">';
        tabela += '<option value="Selecione">Selecione</option>';
        tabela += '<option value="Com Sucesso">Com Sucesso</option>';
        tabela += '<option value="Com Divergência">Com Divergência</option>';
        tabela += '</select>';
        tabela += '<input type="hidden" class="StatusHidden" id="Status_' + x + '" name="Status_' + x + '" value="Selecione">';
        tabela += '</td>';

        tabela += '<td>';
        tabela += '<select class="form-control confirmSelect" id="confirmSelect_' + x + '" name="confirmSelect" data-row="' + x + '">';
        tabela += '<option value="Selecione">Selecione</option>';
        tabela += '<option value="Sim">Sim</option>';
        tabela += '<option value="Não">Não</option>';
        tabela += '</select>';
        tabela += '<input type="hidden" class="confirmStatusHidden" id="confirmStatus_' + x + '" name="confirmStatus_' + x + '" value="Selecione">';
        tabela += '</td>';

        tabela += '<td>';
        tabela += '<input type="file" class="form-control-file fileCanhoto" name="fileCanhoto_" id="fileCanhoto_' + x + '" onchange="saveAttachment(this, \'fileCanhoto_' + x + '\', \'Canhoto Assinado\')" />';
        tabela += '<button type="button" class="btn btn-secondary btn-sm view-file" onclick="viewFile(\'fileCanhoto_' + x + '\')">Visualizar</button>';
        tabela += '</td>';

        tabela += '<td>';
        tabela += '<input type="file" class="form-control-file fileFotos" name="fileFotos_" id="fileFotos_' + x + '" onchange="saveAttachment(this, \'fileFotos_' + x + '\', \'Fotos das Mercadorias\')" />';
        tabela += '<button type="button" class="btn btn-secondary btn-sm view-file" onclick="viewFile(\'fileFotos_' + x + '\')">Visualizar</button>';
        tabela += '</td>';

        tabela += '<td class="motivo-column" style="display: none;" data-row="' + x + '">';
        tabela += '<div class="checkboxes">';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Falta de produtos"> Falta de produtos</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Sobra de produtos"> Sobra de produtos</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Avaria de produtos"> Avaria de produtos</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Validade curta ou vencido"> Validade curta ou vencido</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Recusa do recebimento"> Recusa do recebimento pelo cliente</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Não encontrou"> Não encontrou a propriedade de entrega</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Não conseguiu"> Não conseguiu ter acesso à entrada da propriedade</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Restrição de rota"> Restrição de rota</label><br>';
        tabela += '<label><input type="checkbox" class="motivo-checkbox" name="motivo_' + x + '" value="Problemas mecânicos"> Problemas mecânicos</label>';
        tabela += '</div>';
        tabela += '<input type="hidden" class="motivoHidden" id="motivo_' + x + '" name="motivo_' + x + '" value="">';
        tabela += '</td>';


        tabela += '</tr>';
    }
    tabela += '</tbody>';

    tabela += '</table>';
    tabela += '</div>';
    tabela += '</div>';

    return tabela;
}
    function disableRow(rowId) {
        var row = document.getElementById(rowId);
        if (row) {
            row.querySelectorAll('input, select').forEach(function(element) {
                element.disabled = true;
            });
        }
    }

function checkRowCompleted(row) {
    if (!row) return false;
    var status = row.querySelector(".statusSelect").value;
    var confirmStatus = row.querySelector(".confirmSelect").value;
    var canhoto = row.querySelector(".fileCanhoto").files.length > 0;
    var fotos = row.querySelector(".fileFotos").files.length > 0;

    if (status == "Com Divergência") {
        row.querySelector(".motivo-column").style.display = "";
    } else {
        row.querySelector(".motivo-column").style.display = "none";
    }

    return status !== "Selecione" && confirmStatus === "Sim" && canhoto && fotos;
}


function checkAllRowsCompleted() {
    var rows = document.querySelectorAll("#productTable tbody tr");
    rows.forEach(function(row) {
        if (checkRowCompleted(row)) {
            var rowId = row.id;
            disableRow(rowId);
        }
    });
}

function saveFormData(carregamento, formData) {
    if (!carregamento) {
        console.error("Carregamento não definido.");
        return;
    }

 localStorage.setItem('formData_' + carregamento, JSON.stringify(formData));
}

window.setSelectedZoomItem = function(selectedItem) {
    if (selectedItem.inputId === "selRomaneio") {
        $("#tipov").val(selectedItem.TIPO ? selectedItem.TIPO.trim() : '');
        $("#codSiagri").val(selectedItem.COD_TRANSP ? selectedItem.COD_TRANSP.trim() : '');
        $("#razaos").val(selectedItem.TRANSPORTADOR ? selectedItem.TRANSPORTADOR.trim() : '');
        $("#principalTelefone").val(selectedItem.CONTATO ? selectedItem.CONTATO.trim() : '');
        $("#motoristas").val(selectedItem.MOTORISTA ? selectedItem.MOTORISTA.trim() : '');
        $("#placas").val(selectedItem.PLACA ? selectedItem.PLACA.trim() : '');
        $("#carregamentoSelecionado").val(selectedItem.CARREGAMENTO);
        var carregamentoSelecionado = selectedItem["CARREGAMENTO"];
        document.getElementById("carregamentoSelecionado").value = carregamentoSelecionado;
        showNewDatasetPartial(carregamentoSelecionado);
    }
};

document.getElementById("selRomaneio").addEventListener("change", function() {
    var carregamentoDigitado = this.value;
    document.getElementById("carregamentoSelecionado").value = carregamentoDigitado;
    showNewDatasetPartial(carregamentoDigitado);
});

document.addEventListener("change", function(event) {
    if (event.target.classList.contains("confirmSelect") ||
     event.target.classList.contains("statusSelect") ||
      event.target.classList.contains("fileCanhoto") ||
       event.target.classList.contains("fileFotos")) {
        var row = event.target.closest("tr");
        var rowId = row.id;
        var rowIndex = event.target.getAttribute("data-row");
        var carregamento = document.getElementById("carregamentoSelecionado").value;
        var formData = JSON.parse(localStorage.getItem('formData_' + carregamento)) || {};

        formData[rowIndex] = {
            status: row.querySelector(".statusSelect").value,
            confirmStatus: row.querySelector(".confirmSelect").value,
            canhoto: row.querySelector(".fileCanhoto").files.length > 0,
            fotos: row.querySelector(".fileFotos").files.length > 0
        };

        saveFormData(carregamento, formData);

        if (checkRowCompleted(row)) {
            disableRow(rowId);
        }

        checkAllRowsCompleted();
    }
});

    var carregamentoInicial = document.getElementById("carregamentoSelecionado").value;
    if (carregamentoInicial) {
        showNewDatasetPartial(carregamentoInicial);
    } else {
        document.getElementById("tabelaNF").innerHTML = "<p>Por favor, selecione um carregamento.</p>";
    }
```

});

---

## Resposta #1

**venturelli** (@venturelli) — 04/09/2024, 22:27

Existem dois problemas neste caso.

**Campos dinâmicos**
O primeiro é que o Fluig precisa mapear os campos no momento da exportação do formulário, ou seja, campos totalmente dinâmicos **não** são persistidos.

A tabela deve estar mapeada no formulário e os campos devem estar mapeados também, você pode usar [esse modelo](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atualizacao-pedido-venda-protheus/forms/atualizacao_pedido_venda/atualizacao_pedido_venda.html#103).

**Padrão de nomenclatura**
O segundo está com o nome/id dos campos.

```auto
for (var x = 0; x < dataset.values.length; x++) {
  // ...
  tabela += '<select class="form-control statusSelect" id="statusSelect' + x + '" // ...
  // ...
}
```

O padrão para os registros filhos é “\_\_\_” (3 underscore)

```auto
tabela += '<select class="form-control statusSelect" id="statusSelect___' + x + '" // ...
```

Por legibilidade de código e minimizar erros e transtornos com modificações do formulário, eu recomendo seguir a forma [deste script](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atualizacao-pedido-venda-protheus/forms/atualizacao_pedido_venda/custom.js#258), que é executado em cima daquele mesmo modelo que eu passei anteriormente: usando a função `wdkAddChild`.

**Curso Gratuito**
E recomendo também, caso não conheça, o treinamento [TOTVS Fluig Academy | Trilha Aprendendo tabela pai x Filho](https://academy.fluig.com/theme/totvs_fluig_academy/trilha.php?codigo=11). O item 3 trata justamente do tema “criar um botão de adicionar linhas personalizado utilizando a estrutura de elementos pai e filho”.

É grátis e pode te ajudar nessa questão de pai x filho no Fluig.

---
