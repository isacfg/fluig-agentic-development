# Campo de tabela não salva

> **Fonte:** [https://fluiggers.com.br/t/campo-de-tabela-nao-salva/2520](https://fluiggers.com.br/t/campo-de-tabela-nao-salva/2520)
> **Categoria:** Formulários
> **Tags:** `paixfilho`, `tabela`
> **Criado em:** 22/01/2024, 12:02
> **Visualizações:** 205 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Artur Alves** (@artur.alves) — 22/01/2024, 12:02

Bom dia!

Estou com um probelma, que é:
Tenho 3 tabelas, em que todas são populadas quando eu realizo uma consulta de DataSet; uma de cada vez, então realiza a primeira consulta, popula a primeira tabela, no final da função eu chamo a função que irá realizar a consulta da segunda tabela que vai popular a segunda tabela e assim por diante.
Na etapa de início, ela preenche os campos corretamente de todas as tabelas, porém, quando salvamos, ou enviamos para etapa seguinte, os campos das tabelas são todos limpos e a tabela perde todas as linhas, aparecendo sem nenhum dado.
De ínicio pensei que fosse porque haviam duas tag de < tr>, pois precisava delas para mesclagem de colunas, mas retirei e o problema persistiu;
Depois pensei que fosse o < tfoot> que é o rodapé, pois ele calcula o total de algumas colunas, retirei também, porém, ainda esta com o mesmo problema.

Já recriei esse formulário umas 3x com novo fluxo e tudo mais para ver se estava com problema de gravação nas tabelas do BD, porém, nada resolve, alguém já enfrentou esse tipo de problema?

Precisava apenas que ele ficasse registrado os valores nas etapas seguintes, porque como não é um fluxo complexo, apenas de 5 etapas, onde somente no início terá interação de click para carregar os dados, o restante das etapas será apenas de visualização!

Abaixo segue como o código se encontra:

```auto
<thead>
								<tr class="tableHeadRow active" style="white-space: nowarp">
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">Entradas do Dia</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">Atrasados</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">RecebimentoÂ Futuro</th>
									<th class="tableColumn" style="text-align: center; border-right: 1px solid #d1d3d4;" colspan="2">Recebimento Antecipado</th>
								</tr>
								<tr class="tableHeadRow active" style="white-space: nowarp">
									<th style="text-align: center;">Cliente</th>
									<th style="text-align: center; border-right: 1px solid #d1d3d4;">Valor</th>
									<th style="text-align: center;">Cliente</th>
									<th style="text-align: center; border-right: 1px solid #d1d3d4;">Valor</th>
									<th style="text-align: center;">Cliente</th>
									<th style="text-align: center; border-right: 1px solid #d1d3d4;">Valor</th>
									<th style="text-align: center;">Cliente</th>
									<th style="text-align: center; border-right: 1px solid #d1d3d4">Valor</th>
								</tr>
							</thead>
```

Utilizei duas < tr> para que pudesse ficar assim:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/8/8285ed3ee804876baad871a8a96a02226c7e0710_2_690x65.png)

Com mesclagem de celula, igual no excel

---

## Resposta #1

**Matheus Mósso** (@msmosso) — 23/01/2024, 00:54

Olá Artur, tudo bem?

Seria interessante você publicar o código que está utilizando para consultar o dataset e popular as tabelas.

Você está executando esse código no javascript do formulário ou em algum evento?

Abraço!

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Artur Alves** (@artur.alves) — 23/01/2024, 11:09

Bom dia!

Eu estou executando atráves de um Js mesmo, onde ele realiza a consulta e retorna os dados em memória, ai vamos populando com um “for”.
Vou incluir aqui!

```javascript
function calculaAtrasados() {
	if (mode == "ADD" || state == ATIVIDADE_INICIO) {
		var data = $("#dt_debito").val().split("/");
	    var dataFormatada = data[2]+data[1]+data[0]

	    var c1 = DatasetFactory.createConstraint("MDATA", dataFormatada, dataFormatada, ConstraintType.MUST);

	    var constraints = new Array(c1);
	    var dataset = DatasetFactory.getDataset("dsConsultaCarteiraAtrasada", null, constraints, null);
	    var count = dataset.values.length;
	    if (count == 0) {
	        libfunctions.showInfoMessage("Dados não encontrados", "Verifique!");
	        return;
	    }
	    var row = dataset.values;
	    var num = 1;

	    for (var i = 0; i < count; i++) {

	        var rep = row[i]
	    	var saldo = rep["VR_SALDO"]
	    	var cliente = rep["CLIENTE"]

	        $("#atrasado_valor___" + rep["ID"]).val(libfunctions.getStringValue(saldo))
	        $("#atrasado_cliente___" + rep["ID"]).val(cliente)
	    }


	    var valorCalculadoSoma = 0

	    for (var i = 0; i < count; i++) {
	    	valorAtual = libfunctions.getFloatValue($("#atrasado_valor___" + num).val())
	    	valorCalculadoSoma += valorAtual
	    	num++
		}
	    $("#totais_atrasados").val(libfunctions.getStringValue(valorCalculadoSoma))
	    calculaFuturo()
	} else {
		libfunctions.showInfoMessage("Não é possível calcular o histórico nessa etapa do Formulário");
		return false;
	}
}
```

Acredito que não seja o código que esteja errado, e sim alguma personalização do Style Guide do Fluig!

Porque eu refiz o html por completo, dessa vez, removendo o segundo cabeçalho e o rodapé, mantendo a tebela apenas com 1 cabeçalho e 1 corpo e dessa vez ele ficou gravado normal!

Provavelmente ele deve herdar algumas características das classes que incluímos na tabela, como a “table” que deixa o a primeira linha do corpo com o “display: none”, não importa o que você faça, mesmo que defina ela como “display: table-row important!”.

Tive que inserir duas divs para que desse certo o cabeçalho e o rodapé;

---
