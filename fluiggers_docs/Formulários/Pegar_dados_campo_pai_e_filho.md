# Pegar dados campo pai e filho

> **Fonte:** [https://fluiggers.com.br/t/pegar-dados-campo-pai-e-filho/2657](https://fluiggers.com.br/t/pegar-dados-campo-pai-e-filho/2657)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 19/03/2024, 13:33
> **Visualizações:** 215 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**kaue menezes salgado** (@kaue) — 19/03/2024, 13:33

Estou tentando pegar o segundo usuário aprovadro/observador do meu processo porém ele só pega um deles.

essa é a função:

```auto
function gravaAprovador(elem){

	var indice = elem.id.split("___")[1];
	var check = $("#aprovador___"+indice).is(":checked")
	var matricula = $("#hmatriculaAprov" + indice).val();

	if(check && matricula != ""){

		$("#hAprovador").val(matricula);
		$("#hTemAprov").val("");
	}
	else if(check && matricula ==""){
		$("#hAprovador").val("");
		$("#hTemAprov").val("");
		$("#aprovador___" + indice).prop("checked", true);
		modalError = FLUIGC.modal({
			title: 'Ops! Não foi possível definir um aprovador',
			content: "Não foi possível definir um Aprovador. Por favor, selecione primeiro o Observador para depois defini-lo como Aprovdor! Se o problema persistir favor entrar em contato com o administrador.",
			actions:[{
				'label': 'Entendi',
			    'autoClose': true
			}]
		});
	}
	else{
		$("#hAprovador").val("");
		$("#hTemAprov").val("");
	}

 }
```

deixarei a imagem do resultado do dataset, nele mostra que ta pegando o mesmo usuário, mesmo eu colocando mais de um.

![image](https://fluiggers.com.br/uploads/default/original/2X/c/ce508d71886b5cfde940c18ddfc8d2ca7e81775c.png)

Esse é o código do formulário que estou testando:

```auto
<html>
<head>
<link type="text/css" rel="stylesheet"
	href="/style-guide/css/fluig-style-guide.min.css" />
<script type="text/javascript"
	src="/portal/resources/js/jquery/jquery.js"></script>
<script type="text/javascript"
	src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
<script type="text/javascript"
	src="/portal/resources/js/mustache/mustache-min.js"></script>
<script type="text/javascript"
	src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="script.js"></script>
</head>
<body>
	<div class="fluig-style-guide">
		<form name="form" role="form">
		<div style="display:none">
					<input type="hidden" id="hTemAprov" name="hTemAprov" value=""/>
						<input type="hidden" id="hAprovador" name="hAprovador" value=""/>
						<input type="hidden" id="hAprovador2" name="hAprovador2" value=""/>
				</div>

<div id="divMae">
<div class="panel panel-default boder-red">
	  <div class = "panel-heading panel-bidu">
         <h3 class="panel-title">Informações da Empresa</h3>
         <input type="hidden" name="info_empresa">
      </div>
      <div class="panel-body">
         <div class="row">

         	<div class="panel panel-default boder-red" id="div_tbObservador" name="div_tbObservador">
								<div class="panel-heading panel-bidu">
									<h3 class="panel-title">APROVADOR</h3>
							    </div>
							    <div class="panel-body">
							    	<div class="row">
										<div class="col-md-2">
										   <button type="button" class="btn btn-info" onclick="addObservador();">Adicionar Aprovador</button>
										</div>
									</div>
									<div class="row">
										<div>
											<table id="tbObserva" tablename="tbObserva" class="table" noaddbutton="true" nodeletebutton="true">
												<thead>
													<tr>
														<th class="col-md-1"></th>
														<th class="col-md-4">Nome:</th>
														<th class="col-md-4">E-mail:</th>
														<th class="col-md-1">Aprovador?</th>
														<th class="col-md-2"></th>
													</tr>
												</thead>
												<tbody>
													<tr id="trObservador" name="trObservador">
														<td><input type="image" src="lixeira.png"
															id="trash_tbOBS" name="trash_tbOBS"
															onclick="Javascript:fnCustomDeleteFornecedor(this);"
															onmouseover="this.style.cursor='hand'"
															style="cursor: pointer; padding: 5px 0 0 5px;"></td>
														<td class="form-group form-group-sm">
															<input type="zoom" name="observador" id="observador"
																data-zoom="
																{
									                             'displayKey':'NOME',
									                             'datasetId':'ds_Observadores',
									                             'fields':
									                             [
									                             {
									                             	'field':'NOME',
									                                'label':'Nome',
									                                'visible':'true'
									                             },
									                             {
									                             	'field':'EMAIL',
									                                'label':'E-mail',
									                                'visible':'false'
									                             }
									                             ]}"
								                            />
														</td>
														<td class="form-group form-group-sm">
															<input type="text" id="email_OBS" name="email_OBS" class="form-control">
															<input type="hidden" id="hmatriculaAprov" name="hmatriculaAprov" value=""/>
														</td>
														<td class="form-group form-group-sm">
															<input id="aprovador" name="aprovador" type="checkbox"
										   					data-size="small" data-off-text="Não" data-on-text="Sim" data-on-color="success" data-off-color="default" onchange="gravaAprovador(this);"/>
														</td>
													</tr>
													<tr id="trVazio" name="trVazio">
														<td class="form-group form-group-sm">
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
							    </div>
							</div>



						 </div>
					</div>
				</div>
         </div>

		</form>
	</div>
</body>
</html>
```

---

## Resposta #1

**Jose Henrique ** (@Jose) — 19/03/2024, 13:54

Estou com o mesmo problema, preciso fazer algum mecanismo que pegue usuários do zoom para uma atividade conjunta.

---

## Resposta #2

**Pablo Valle** (@pablooav) — 22/03/2024, 17:39

Não entendi muito bem o seu problema em si, mas vou ver se consigo ajudar da forma que entendi, pelo visto você tem uma pai-filho com diversas linhas porém não consegue pegar o valor apartir da segunda, então imagino que seu problema está no loop que você está tentando realizar na tabela, abaixo tem uma maneira de vc fazer um loop na sua tabela que vc pode reaproveitar pra qualquer tabela pai-filho que tiver e que precisar validar ou fazer qualquer coisa por linha:

```auto
// Faz um loop na sua tabela, pegando todas as linhas (ignora a primeira pois ela é uma linha modelo, as que foram inseridas de verdade começam a partir da segunda linha)
// Pra cada linha contida na tabela pai-filho irá executar o que está aqui dentro
$('[tablename="tbObserva"] tbody tr:not(:first)').each(function(index, tr) {

  //Aqui é a sua linha (tr) apartir dela você consegue procurar por qualquer elemento dentro dela utilizando o .find()
  var $tr = $(tr);

  // Caso queira buscar os campos pelo sequencial você pode resgata-lo da seguinte forma abaixo
  // var sequencial = $tr.find('[name^="aprovador___"]').attr('id').split('___')[1];
  // $('#aprovador___' + sequencial).is(":checked");

  //Aqui temos um exemplo de como pegar o input do aprovador sem precisar passar o sequencial utilizando sua TR
  var check = $tr.find('[name^="aprovador___"]').is(":checked");
  var matricula = $tr.find('[name^="hmatriculaAprov___"]').val();

  console.log('check: ', check, ' | matricula: ', matricula);


  //Aqui você pode fazer o que você quiser com os dados que você pegou, validações, alterações, etc...

})
```

Confere se isso te ajuda :wink:

---
