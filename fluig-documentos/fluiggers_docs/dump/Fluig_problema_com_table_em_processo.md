# Fluig problema com table em processo

> **Fonte:** [https://fluiggers.com.br/t/fluig-problema-com-table-em-processo/2093](https://fluiggers.com.br/t/fluig-problema-com-table-em-processo/2093)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`, `dataset`
> **Criado em:** 01/08/2023, 12:01
> **Visualizações:** 348 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**joaopretti** (@joaopretti) — 01/08/2023, 12:01

Olá pessoal! estou com um problema aonde eu puxo um pedido no Fluig por meio de um processo, mas quando passa para o próximo processo some toda a table que ele puxa.

Vou mostrar o meu codigo aqui para ver se conseguem me ajudar com esta solução:

```javascript
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

e este é o HTML exemplo que estou usando:

```auto
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

como eu poderia passar para os proximos processos com a table visivel no formulario?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 01/08/2023, 12:31 | ❤️ 1

Olá João. A solicitação só salva se for campo do formulário. Para resolver seu problema você pode buscar os dados no load do formulário e preencher a tabela sempre que for carregado. Ou se você quiser as informações salvas no formulário, usa a tabela Pai x Filho.

Vou dar um exemplo:
HTML:

```auto
<table tablename="tblPedido" class="table table-hover" noaddbutton="true" nodeletebutton="true">
	<thead>
		<tr>
			<th>Produto</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<input type="text" id="teste" name="teste" class="form-control">
			</td>
		</tr>
	</tbody>
</table>
```

JS

```auto
if (true)
  {
    $("#quantidade").val(ds[0].QTD);

    var result = ""

    for (var i = 0; i < ds[0].QTD; i++){
    	const row = wdkAddChild('tblPedido');

    	$(`#teste___${row}`).val(i);
    }
}
```

Baseado no seu exemplo é para funcionar… testa aí… depois adapta para os dados reais.

Boa sorte

Abs.

---

## Resposta #2

**joaopretti** (@joaopretti) — 01/08/2023, 14:46 | ❤️ 1

Perfeito Edu! como sempre você me ajudando com essas soluções mirabolantes quando eu estou encurralado, kkkkkkk. Funcionou. Obrigado!

---
