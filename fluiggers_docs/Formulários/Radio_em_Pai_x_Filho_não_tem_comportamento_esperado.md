# Radio em Pai x Filho não tem comportamento esperado

> **Fonte:** [https://fluiggers.com.br/t/radio-em-pai-x-filho-nao-tem-comportamento-esperado/2797](https://fluiggers.com.br/t/radio-em-pai-x-filho-nao-tem-comportamento-esperado/2797)
> **Categoria:** Formulários
> **Criado em:** 20/05/2024, 14:12
> **Visualizações:** 114 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Leandro Santos** (@leossantos) — 20/05/2024, 14:12

Boa tarde a todos!

Estou iniciando no desenvolvimento de fluig, não tenho muita experiência/conhecimento em HTML/CSS.
Estou criando um formulário, e ao colocar um radio em uma tabela pai x filho quando clico, sempre seleciona o primeiro item e não consigo mudar, e colocando o mesmo radio em outro local ele funciona normalmente.
Segue codigo, se algum puder me dar uma luz.

```auto
<html>
<head>
<link type="text/css" rel="stylesheet" 	href="/style-guide/css/fluig-style-guide.min.css" />
<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
<script type="text/javascript" src="custom.js"></script>
</head>
<body>
	<div class="fluig-style-guide">
		<form name="form" role="form" action="#">

			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="flaticon flaticon-invoices-check icon-md" aria-hidden="true"></i>
						Solicitação
					</h3>
				</div>
				<div class="panel-body">

					<div class="row">
						<div class="form-group col-md-3">
							<label for="filial">Filial</label>
							<select class="form-control" name="filial" id="filial" dataset="ds_filiaisProtheus" datasetkey="Code" datasetvalue="Description"></select>
						</div>

						<div class="form-group col-md-3">
							<label for="solicitante">Solicitante</label>
							<input type="text" class="form-control" name="solicitante" id="solicitante"	placeholder="Solicitante">
						</div>

					</div>

					<div class="row">
						<div class="col-md-12">
							<div class="custom-radio custom-radio-primary custom-radio-sm">
							    <input type="radio" name="radioCadastro" value="0" id="radioCadastroNao">
							    <label for="radioCadastroNao">Prod. Existente</label>
							</div>
							<div class="custom-radio custom-radio-primary custom-radio-sm">
							    <input type="radio" name="radioCadastro" value="1" id="radioCadastroSim">
							    <label for="radioCadastroSim">Cadastrar Prod.</label>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">
						<i class="flaticon flaticon-product icon-md" aria-hidden="true"></i>
						Produtos
					</h3>
				</div>
				<div class="panel-body">
					<table class="table" tablename="produtosTable" noaddbutton="false">
						<thead>
							<tr class="tableHeadRow">
								<th class="tableColumn"></th>
								<th class="tableColumn">Produto</th>
								<th class="tableColumn">Quantidade</th>
								<th class="tableColumn">Observação</th>
							</tr>
						</thead>
						<tbody>
							<tr>

								<td class="col-md-2 col-sm-1">
									<div class="row">

										<div class="custom-radio custom-radio-primary custom-radio-sm">
										    <input type="radio" name="radioCadastro" value="0" id="radioCadastroNao">
										    <label for="radioCadastroNao">Prod. Existente</label>
										</div>
										<div class="custom-radio custom-radio-primary custom-radio-sm">
										    <input type="radio" name="radioCadastro" value="1" id="radioCadastroSim">
										    <label for="radioCadastroSim">Cadastrar Prod.</label>
										</div>

									</div>

								</td>

								<td class="col-md-5 col-sm-5">
									<div class="form-group">
										<input type="zoom" name="produto"
											data-zoom="{
												'displayKey':'B1_DESC',
												'datasetId':'ds_cadastroDeProduto',
												'filterValues':'codigo,15',
												'fields':[
													{'field':'B1_COD', 'label':'Codigo'},
													{'field':'B1_DESC', 'label':'Descrição', 'standard':'true'},
													{'field':'B1_TIPO', 'label':'Tipo'},
													{'field':'B1_UM', 'label':'Unidade'}]
												}">
									</div>
								</td>

								<td class="col-md-2 col-sm-2">
									<div class="form-group">
										<input type="number" class="form-control" name="quantidade" id="quantidade">
									</div>
								</td>

								<td class="col-md-4 col-sm-4">
									<div class="form-group">
										<input type="text" class="form-control" name="observacao" id="observacao">
									</div>
								</td>

							</tr>
						</tbody>
					</table>
				</div>
			</div>

		</form>
	</div>
</body>
</html>
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 22/05/2024, 15:37

Existem bastante coisa pra falar, mas tem um bug neste caso.

O campo radio funciona como seletor único. Ou seja, ao marcar um, desmarca as outras opções. E o navegador faz esse vínculo através do atributo name, como você fez certo no primeiro caso:

```auto
<input type="radio" name="radioCadastro" value="0" id="radioCadastroNao">
<input type="radio" name="radioCadastro" value="1" id="radioCadastroSim">
```

Os itens da tabela pai e filho não fazem parte desse “grupo”, mas você uso o mesmo name. Pra linha, tem que ter um outro name.

Mas o problema, que neste caso é um bug no Fluig, é o id. Ao criar uma nova linha ele tá copiando o name pra cima do id.

O código:

```auto
<input type="radio" name="radioCadastroChild" value="0" id="radioCadastroChildNao">
<input type="radio" name="radioCadastroChild" value="1" id="radioCadastroChildSim">
```

A linha gerada:

```auto
<input type="radio" name="radioCadastroChild___1" value="0" id="radioCadastroChild___1">
<input type="radio" name="radioCadastroChild___1" value="1" id="radioCadastroChild___1">
```

Eu recomendo abrir um chamado pra resolver isso. porque dependendo do navegador não vai ser possível selecionar a opção ‘Sim’ já que ele vai pegar pelo id e sempre achar que o que foi clicado foi o ‘Não’.

---

## Resposta #2

**Leandro Santos** (@leossantos) — 23/05/2024, 09:36

Muito obrigado pelo esclarecimento.

---
