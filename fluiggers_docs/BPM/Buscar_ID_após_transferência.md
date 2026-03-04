# Buscar ID após transferência

> **Fonte:** [https://fluiggers.com.br/t/buscar-id-apos-transferencia/3454](https://fluiggers.com.br/t/buscar-id-apos-transferencia/3454)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 01/10/2025, 11:17
> **Visualizações:** 18 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**lucaslamb** (@lucaslamb) — 01/10/2025, 11:17 | ❤️ 1

Bom dia, estou com um problema nos eventos de processos.
Possuo um fluxo onde, se necessário Ações para resolver o problema é aberto um subprocesso para cada registro em uma tabela paiXfilho indicando em um campo zoom quem será o responsável por essa ação, porém, quando já aberto esse fluxo de ação, o responsável pode transferir para outro usuário concluir a tarefa.
Nessa ação de transferir precisava alterar o campo que apresenta o responsável na tabela do fluxo principal. Qual seria o evento de processo onde consiga pegar o ID do usuário que foi transferido a atividade?
Tentei pelo afterTaskSave mas retorna ainda o mesmo user que já era responsável, entrei em contato com o suporte também e me passaram para tentar com o afterTaskComplete, mas a atividade nem entra no evento ao transferir de usuário.

---

## Resposta #1

**Leonardo Feliciano** (@Leonardo_Feliciano1) — 01/10/2025, 12:59

Boa tarde Lucas, tudo bom ?

O responsável deverá selecionar para qual pessoa deseja transferir a demanda, mantendo-a na mesma tarefa ?

fiz algo parecido pegando o id por um Dataset

```auto
function createDataset(fields, constraints, sortFields) {
    var datasetRetorno = DatasetBuilder.newDataset();
    datasetRetorno.addColumn("FULL_NAME");
    datasetRetorno.addColumn("IDP_ID");
    datasetRetorno.addColumn("ativo");

    var dataset1 = DatasetFactory.getDataset("colleague", null, null, ['colleagueName']);

    for (var i = 0; i < dataset1.rowsCount; i++) {
        var colleagueId = dataset1.getValue(i, "colleaguePK.colleagueId");

        if (dataset1.getValue(i, "active") == "true" && dataset1.getValue(i, "mail") != "'************'"
        	&& dataset1.getValue(i, "mail") != "'************'"
        	&& dataset1.getValue(i, "mail") != "'************'"
        	&& dataset1.getValue(i, "mail") != "'************'"
        	&& dataset1.getValue(i, "mail") != "'************'"
        	&& dataset1.getValue(i, "mail") != "'************'"
        	&& dataset1.getValue(i, "mail") != "'************'"
        	){


	        var returnFields = new Array("colleagueName");
	        var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", colleagueId, colleagueId, ConstraintType.MUST);
	        var colConstraints   = new Array(c1);

	        var dataset2 = DatasetFactory.getDataset("colleague", returnFields, colConstraints,  ['colleagueName']);

	        var colaborador = dataset2.getValue(0, "colleagueName");
	        var documento = dataset1.getValue(i, "colleaguePK.colleagueId") ;
	        var ativo = dataset1.getValue(i, "active")
	        datasetRetorno.addRow(new Array(colaborador, documento,ativo));
        }
    }

    return datasetRetorno;
}
```

***Aqui eu chamei o dataset direto no formulário***

```auto
<div style="margin:1%">
								<div class="form-field" data-type="textbox" data-field-name="txtDestino" id="txtDestino" >
									<div class="form-group">
										<label><b>*</b>Enviar Para o Destinatário<strong> (Supervisor)</strong> </label>
										<div class="form-group has-error">
											<select class="form-control" onchange="insereCampo()" name="txtDestino" dataset="usuariosFluig" datasetkey="IDP_ID" datasetvalue="FULL_NAME" addBlankLine="true" id="txtDestino"></select>
											<p class="help-block">Preencha esse campo!</p>
										</div>
									</div>
								</div>
							</div>
```

Em seguida fiz uma função para pegar o id e jogar para um campo para registrar, e no diagrama eu coloquei ***Atribuição por Campo de Formulário***

![image](https://fluiggers.com.br/uploads/default/original/2X/b/b6182eb85bea2b3094ecf5df62fb2f90ba400718.png)

Poderia, por gentileza, compartilhar como ficou o seu código?

---

## Resposta #2

**lucaslamb** (@lucaslamb) — 01/10/2025, 13:52

Boa tarde Leonardo, obrigado por compartilhar, mas creio que não seja bem isso.

A parte de Criação e envio para responsável está ok já,

![image](https://fluiggers.com.br/uploads/default/optimized/2X/8/8cfe8d7887a286f7d4356cafcd6347fbe07880a5_2_690x64.png)

Ele gera o fluig normalmente, o problema está depois de gerado já quando vou tentar transferir.
![image](https://fluiggers.com.br/uploads/default/optimized/2X/8/867315e50dddbf197af74c1d5625d465937cefe6_2_182x249.png)

Seleciono outro usuário e aí precisava pegar o ID desse usuário que estou transferindo para aí sim atualizar via API o campo “Responsável” lá da tabela.
Só que não consegui buscar esse ID por nenhum evento de processo, tentei pelo taskSave mas no LOG me trouxe o meu id e não o do usuário ERP.

```auto
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) colleagueId :
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) 3809
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) nextSequenceId beforeSave:
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) 5.0
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) userList beforeSave:
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) []
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) colleagueId :
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) 3809
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) nextSequenceId afterSave:
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) 5.0
INFO
08:54:24 - [com.datasul.technology.webdesk.customization.ScriptingLog] (default task-1522) userList afterSave:
INFO
```

precisava encontrar uma forma de pegar o id do usuário que estou transferindo para que consiga no próprio evento de processo atualizar o campo de responsável.

---
