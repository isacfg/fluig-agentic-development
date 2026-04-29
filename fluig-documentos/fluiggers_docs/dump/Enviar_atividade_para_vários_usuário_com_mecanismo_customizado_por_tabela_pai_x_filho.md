# Enviar atividade para vários usuário com mecanismo customizado por tabela pai x filho

> **Fonte:** [https://fluiggers.com.br/t/enviar-atividade-para-varios-usuario-com-mecanismo-customizado-por-tabela-pai-x-filho/2345](https://fluiggers.com.br/t/enviar-atividade-para-varios-usuario-com-mecanismo-customizado-por-tabela-pai-x-filho/2345)
> **Categoria:** BPM
> **Tags:** `paixfilho`, `mecanismoatribuicao`
> **Criado em:** 07/11/2023, 14:00
> **Visualizações:** 270 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**lucaslamb** (@lucaslamb) — 07/11/2023, 14:00

Estou com um problema em um processo, onde necessito enviar a próxima atividade para vários usuários de acordo com preenchimento de campo dentro de uma tabela pai x filho, onde podem haver N responsáveis.

```auto
<table class="table table-bordered table-hover table-condensed" tablename="tab_acao" id="tab_acao" noaddbutton="true" nodeletebutton="true">
  <thead>
    <tr>
      <th><button id="btn_add_item" name="btn_add_item" type="button" class="fluigicon fluigicon-plus-circle btn btn-danger" style="cursor: hand" onClick="add_linha('tab_acao');">Inserir</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="fluigicon fluigicon-trash fluigicon-md" onClick="fnElimina(this);" style="cursor: hand"></span>
      </td>
      <td>
        <div class="form-group">
          <div class="row">
            <label class="col-sm-2" align="right"><span style="color: red;">*</span> Responsável:</label>
            <div class="col-sm-3">
              <input type="zoom" class="form-control" id="responsavel" name="responsavel"
                data-zoom="{
                  'datasetId':'colleague',
                  'maximumSelectionLength':'1',
                  'filterValues':'active,true',
                  'fields':[
                          {
                          'field':'colleagueName',
                          'standard':'true'
                          }
                          ]
                  }"/>
              <input type="text" class="form-control" id="responsavel_bkp" name="responsavel_bkp" style="display: none;"/>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

Neste código HTML, possuem outros campos na tabela porém que não são necessários. Utilizo o campo ‘responsavel\_bkp’ para armazenar o valor do colleague escolhido via zoom.

```javascript
function setSelectedZoomItem(selectedItem) {

  let tam = fnValidaTabela("tab_acao");
  for (i = 0; i < tam; i++){
    if (selectedItem.inputId == "responsavel___" + i && !listaResp.includes(selectedItem.id)) {
      listaResp.push(selectedItem.id);
      document.getElementById('resp_acao').value = listaResp.join(', ');
      document.getElementById("responsavel_bkp___" + i).value = selectedItem.id;
    }
  }
}
```

Havia tentado realizar de forma que os usuários fossem adicionados no array ‘resp\_acao’ e deixar a atribuição por campo no fluxo, porém não obtive sucesso, optei então para o campo único, e dentro do mecanismo ler a tabela e ir enviando para cada usuário.

```javascript
function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	for (var x = 0; x < 20; x++){
		if (hAPI.getCardValue("responsavel_bkp___" + x)){
			usuario = hAPI.getCardValue("responsavel_bkp___" + x);

			var c1 = DatasetFactory.createConstraint("workflowColleagueRolePK.roleId", usuario, usuario, ConstraintType.MUST);
			var filtro    = new Array(c1);
			var registros = DatasetFactory.getDataset("workflowColleagueRole", null, filtro, null);

			if (registros.values.length > 0) {
				for (var i = 0; i < registros.values.length; i++){
					userList.add(dsGroup.getValue(i, "colleagueGroupPK.colleagueId"));
				}
			}
		}
	}

	return userList;

}
```

Sem sucesso também em várias tentativas de fazer funcionar (esse valor 20 dentro do for coloquei pois não consigo ler a tabela também para alimentar a quantidade de linhas existentes, deixei como valor chumbado), dentro do js na função setSelectedZoomItem, o campo responsavel\_bkp é alimentado com o valor, e a princípio deveria funcionar, porém quando é chamado via hAPI, o valor fica nulo, teria alguma explicação para isso? Ou alguma forma melhor de se realizar?

---

## Resposta #1

**Matheus Loreto** (@matheusl) — 14/11/2023, 17:33

Lucas,

Você pode usar a hAPI.getChildrenIndexes para pegar os indices de cada linha da tabela. Também reparei que você está passando o usuário com filtro na coluna errada. Você passou o roleId e nesse caso é colleagueId. Veja se o código abaixo te ajuda!

```auto
function resolve(process,colleague){

	var userList = new java.util.ArrayList();

	var index = hAPI.getChildrenIndexes("tab_acao")

	for (var i = 0; i < index.length; i++){
		if (hAPI.getCardValue("responsavel_bkp___" + index[i])){
			usuario = hAPI.getCardValue("responsavel_bkp___" + index[i]);

			var c1 = DatasetFactory.createConstraint("workflowColleagueRolePK.colleagueId", usuario, usuario, ConstraintType.MUST);
			var filtro    = new Array(c1);
			var registros = DatasetFactory.getDataset("workflowColleagueRole", null, filtro, null);

			if (registros.rowsCount > 0) {
				for (var j = 0; j < registros.rowsCount; j++){
					userList.add(registros.getValue(j, "colleagueGroupPK.colleagueId"));
				}
			}
		}
	}

	return userList;

}
```

---
