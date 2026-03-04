# Usuários de um Grupo - colleagueGroup x Colleague

> **Fonte:** [https://fluiggers.com.br/t/usuarios-de-um-grupo-colleaguegroup-x-colleague/1219](https://fluiggers.com.br/t/usuarios-de-um-grupo-colleaguegroup-x-colleague/1219)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `dataset`, `fluigapi`, `grupo`
> **Criado em:** 09/08/2022, 10:14
> **Visualizações:** 848 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Karina Pinheiro** (@Kapinheiro) — 09/08/2022, 10:14

Olá, tenho dois campos no HTML, o 1º Puxa o Grupo, após selecionado o 2º campo lista os usuários do Grupo do 1° campo.
Porem, o código que tenho está listando a Matricula do usuário e eu preciso que puxe o NOME do usuário.
Lembrando que antes preciso gravar a Matricula no campo “hid\_userSol”, o que hoje já esta ocorrendo.
O campo a ser Exibido o nome é “userGroup”
Alguém pode me ajudar?

> JS

```auto
//Busca Groups
	    var usersGroup = [];
	    consultDataset('colleagueGroup').success(data => { usersGroup = data.content.values })

	    var c1 = DatasetFactory.createConstraint('groupPK.groupId', '%suporteSistemico%', '%suporteSistemico%', ConstraintType.MUST, true);
	   // var ds = DatasetFactory.getDataset('userGroup', null, new Array(c1), null);

	    consultDataset('group', null, [c1]).success(function (data) {
	        grupos = data.content.values;
	        conteudo  = data.content.values;
	        grupos.map(function (el) {
	            el.id = el["groupDescription"];
	            el.text = el["groupDescription"];
	        });

	        $("#grupoCooperativa").select2({
	            data: grupos,
	            allowClear: true,
	            placeholder: "Selecione uma Cooperativa...",
	            language: "pt-BR"
	        }).on("select:close", function(){}).change(selectValue => {
	            if (selectValue) {
	                console.log("clicou: "+selectValue.currentTarget.value)
	                for(x in conteudo){
	                    if(selectValue.currentTarget.value == conteudo[x]["groupDescription"]){
	                   //     $("#gruposHidden").val('Pool:Group:'+conteudo[x]["groupPK.groupId"])
	                        $("#gruposHidden").val(conteudo[x]["groupPK.groupId"]);

							alert("TESTEEEE");

							var gruposHidden = $("#gruposHidden").val();
							console.log("grp: " + gruposHidden);
							var c1 = DatasetFactory.createConstraint('colleagueGroupPK.groupId', String(gruposHidden), String(gruposHidden), ConstraintType.MUST, true);
							//var ds = DatasetFactory.getDataset('colleagueGroup', null, new Array(c1), null);

							consultDataset('colleagueGroup', null, [c1]).success(function (data) {
								grupos = data.content.values;
								conteudo  = data.content.values;

								console.log("consulta2: " + grupos, conteudo);

								grupos.map(function (el) {
									el.id = el["colleagueGroupPK.colleagueId"];
									el.text = el["colleagueGroupPK.colleagueId"];
								});

								$("#userGroup").select2({
									data: grupos,
									allowClear: true,
									placeholder: "Selecione um usuário...",
									language: "pt-BR"
								}).on("select:close", function(){}).change(selectValue => {

									console.log("slectevalue: " + selectValue);

									if (selectValue) {
										console.log("clicou - usuario: "+selectValue.currentTarget.value)
										for(x in conteudo){
											if(selectValue.currentTarget.value == conteudo[x]["colleagueGroupPK.colleagueId"]){
											     $("#hid_userSol").val(conteudo[x]["colleagueGroupPK.colleagueId"])
											}
										}
									}
								})
								$('#userGroup').val('').change();
							});

	                    }
	                }
	            }
	        })
	        $('#grupoCooperativa').val('').change(

			);
	    });
})


    }
});
```

> HTML

```auto
<div class="form-group col-xs-12 col-sm-12 col-md-4" id="divCooperativa_2">
	<label for="grupoCooperativa">Cooperativa</label>
	<div class="input-group">
		<select class="form-control" name="grupoCooperativa" id="grupoCooperativa"></select>
		<span class="input-group-addon">
			<span class="flaticon flaticon-account-balance icon-sm"></span>
		</span>
	</div>
</div>

<div class="form-group col-xs-12 col-sm-12 col-md-4">
	<label for="userGroup">Solicitante do Chamado</label>

<div class="input-group">
		<select class="form-control" name="userGroup" id="userGroup"></select>
		<span class="input-group-addon">
			<span class="flaticon flaticon-account-balance icon-sm"></span>
		</span>
	</div>
</div>
```

> CAMPOS HIDDEN

```auto
<input type="hidden" name="gruposHidden" id="gruposHidden" value="">
<input type="hidden" name="hid_userSol" id="hid_userSol" value="">
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/08/2022, 13:50 | ❤️ 1

O relacionamento de usuário e grupos é muitos-para-muitos, então você tem essa tabela pivot colleagueGroup para relacionar os usuários e grupos.

Você precisa pesquisar em colleague os usuários que foram listados nessa colleagueGroup.

Aqui criamos um dataset que busca os usuários ativos podendo filtrar pelo grupo. Pode tentar usá-lo como exemplo para o que precisa.

```javascript
/**
 * Usuários ativos no Fluig
 *
 * Dataset para facilitar a busca por usuários ativos que possam ser utilizados
 * como responsáveis/destinatários de tarefas.
 *
 * Se informar uma constraint para groupId (indiferente do tipo, pois sempre vai considerar SHOULD)
 * ele filtrará somente os usuários desse grupo. Pode-se enviar essa constraint para vários grupos
 * ao mesmo tempo.
 *
 * @param {string[]} fields Campos para retornar
 * @param {Constraint[]} constraints Filtros
 * @param {string[]} sortFields Campos para ordenar
 */
function createDataset(fields, constraints, sortFields) {
    var filtros = [];

    if (constraints != null) {
        for (var i = 0; i < constraints.length; ++i) {
            if (constraints[i].fieldName == "groupId") {
                var usersIds = getUsersIdFromGroupId(constraints[i].initialValue);

                if (!usersIds.length) {
                    continue;
                }

                for (var j = 0; j < usersIds.length; ++j) {
                    filtros.push(DatasetFactory.createConstraint(
                        "colleaguePK.colleagueId",
                        usersIds[j],
                        usersIds[j],
                        ConstraintType.SHOULD
                    ));
                }

                continue;
            } else if (constraints[i].fieldName == "colleagueName") {
                var c = DatasetFactory.createConstraint(
                    "colleagueName",
                    constraints[i].initialValue,
                    constraints[i].finalValue,
                    ConstraintType.MUST
                );
                c.setLikeSearch(true);
                filtros.push(c);

                continue;
            }

            filtros.push(constraints[i]);
        }
    }

    if (sortFields == null) {
        sortFields = ["colleagueName"];
    }

    filtros.push(
        DatasetFactory.createConstraint("active", "true", "true", ConstraintType.MUST)
    );

    return DatasetFactory.getDataset("colleague", fields, filtros, sortFields);
}

function getUsersIdFromGroupId(groupId) {
    var usersIds = [];
    var dataset = DatasetFactory.getDataset(
        "colleagueGroup",
        ["colleagueGroupPK.colleagueId"],
        [
            DatasetFactory.createConstraint("colleagueGroupPK.groupId", groupId, groupId, ConstraintType.MUST)
        ],
        null
    );

    for (var i = 0; i < dataset.rowsCount; ++i) {
        usersIds.push(dataset.getValue(i, "colleagueGroupPK.colleagueId"));
    }

    return usersIds;
}
```

---
