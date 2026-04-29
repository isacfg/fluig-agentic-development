# Table Dinâmica - Table some ao enviar atividade

> **Fonte:** [https://fluiggers.com.br/t/table-dinamica-table-some-ao-enviar-atividade/2124](https://fluiggers.com.br/t/table-dinamica-table-some-ao-enviar-atividade/2124)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 15/08/2023, 12:10
> **Visualizações:** 264 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Karina Pinheiro** (@Kapinheiro) — 15/08/2023, 12:10

Estou criando uma tabela dinamicamente através de um JS.

A função cria certinho a tabela dentro de uma Div, porem quando eu passo para Próxima atividade a tabela criada desaparece.

O que deve ser feito, para gravar esses novos dados no datset do form e assim ele poder ser exibido nas proximas atividades?

> Trecho onde faço a criação da table:

```javascript
if (tabelaItensRateados.find('thead th').length === 0) {


	var tabela = $("<table class='table'></table>");
		var thead = $("<thead></thead>");
		var trHeader = $("<tr></tr>");

		var headers = [
			"CPF/CNPJ",
			"Estabelecimento",
			"Processo",
			"Contrato",
			"Item",
			"SEQ",
			"Valor"
			];

		for (var h = 0; h < headers.length; h++) {
			var th = $("<th></th>").text(headers[h]);
			trHeader.append(th);
		}

		thead.append(trHeader);
		tabela.append(thead);

		// Criando o corpo da tabela
		var tbody = $("<tbody></tbody>");

		// Preenchendo a tabela com os valores do rateio
		for (var i = 0; i < valoresSeparados.length; i++) {
			var valores = valoresSeparados[i].split(";");

			if (valores.length >= 7) {
				var linha = $("<tr></tr>");

				for (var j = 0; j < valores.length; j++) {
					var celula = $("<td></td>").text(valores[j]);
					linha.append(celula);
				}

				tbody.append(linha);
			}
		}

		tabela.append(tbody);

		tabelaItensRateados.append(tabela);

	}else {
        // Criando o corpo da tabela
        var tbody = $("<tbody></tbody>");

        // Preenchendo a tabela com os valores do rateio
        for (var i = 0; i < valoresSeparados.length; i++) {
            var valores = valoresSeparados[i].split(";");

            if (valores.length >= 7) {
                var linha = $("<tr></tr>");

                for (var j = 0; j < valores.length; j++) {
                    var celula = $("<td></td>").text(valores[j]);
                    linha.append(celula);
                }

                tbody.append(linha);
            }
        }

        // Adicione a linha à tabela existente
        tabelaItensRateados.find('table').append(tbody);
    }
```

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 15/08/2023, 13:42

Olá, tudo bem? Quando faço tabelas dinamicamente eu gravo os dados em JSON em um campo hidden, e monto a tabela cada vez que o form é carregado com os dados gravados no input. Se precisar alterar algum dado da tabela, eu manipulo o JSON e populo de novo no input.

Input exemplo:

```auto
<input type="hidden" name="input_arr" id="input_arr">
```

No seu caso ai, você já recebe um array com os dados, salva ele no input:

```auto
$("#input_arr").val(JSON.stringify(valoresSeparados));
```

No load do formulário nas etapas que você quiser carregar a tabela novamente você usa o mesmo código, porém, passando o array do input com o JSON.parse

```auto
var dados = JSON.parse($("#input_arr").val());

  for (var i = 0; i < dados.length; i++) {
    var valores = dados[i].split(";");

    if (valores.length >= 7) {
      var linha = $("<tr></tr>");

      for (var j = 0; j < valores.length; j++) {
        var celula = $("<td></td>").text(valores[j]);
        linha.append(celula);
      }

      tbody.append(linha);
    }
  }
```

Parece meio gambiarra… mais funciona. Testa aí e vê se te atende.

Abs.

---
