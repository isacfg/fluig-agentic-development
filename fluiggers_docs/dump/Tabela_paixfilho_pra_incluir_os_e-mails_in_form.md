# Tabela paixfilho pra incluir os e-mails in form

> **Fonte:** [https://fluiggers.com.br/t/tabela-paixfilho-pra-incluir-os-e-mails-in-form/755](https://fluiggers.com.br/t/tabela-paixfilho-pra-incluir-os-e-mails-in-form/755)
> **Categoria:** Formulários
> **Criado em:** 01/11/2021, 10:56
> **Visualizações:** 579 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Ulises Magario** (@Agustin_Welschen) — 01/11/2021, 10:56

Olá bom dia, nao me funciona que poderia ser?

```auto
<html>
<head>
	<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css"/>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
	<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
</head>
<body>
<div class="fluig-style-guide">
<form name="form" role="form">
			<!--<div class="col-md-5">
			<label>Email para enviar el correo</label>
			<div class='input-group'>
			   <span class="input-group-addon">
			   <i class="flaticon flaticon-account-qualification icon-sm"></i>
			   </span>
			   <input type="email" class="form-control text-center" name="campoEmail" id="campoEmail" value="" placeholder="" data-size="big" required="required">
			</div>
			</div>
			</div> -->

		<div class="form-field" data-type="tabledetail" data-show-properties="" data-field-name="Replaced_Parts">
		         <div class="form-input">
		            <div class="form-group">
		               <label><H4>Mails</H4></label>
		               <table tablename="tabledetailname2" table tablename="TablaSucursales" class="table table-hover" addbuttonlabel="Agregar mail" addbuttonclass="btn btn-danger">
		                  <thead>
		                     <tr class="tableHeadRow">
		                        <th class="tableColumn">mail</th>
		                     </tr>
		                  </thead>
		                  <tbody>
		                     <tr class="tableBodyRow">
		                        <td class="fs-v-align-middle">
		                           <div class="form-input"><input type="text" name="destino_mail" id="destino_mail" class="form-control"></div>
		                        </td>
		                     </tr>
		                  </tbody>
		               </table>
		               </div>
		         </div>
		      </div>


		<br>
</form>
</div>
</body>
</html>
```
```javascript
function afterTaskComplete(colleagueId,nextSequenceId,userList){
    var codSolic = getValue("WKUser");
    var dest = new java.util.ArrayList();
    //var mail= $("#destino_mail___"+this.instanceId).val();
    while (contador.hasNext()) {
        var id = contador.next();
        if (id.match("destino_mail___")) { // qualquer campo da tabela PaixFilho
            var campo = campos.get(id);
            var seq   = id.split("___");
            dest.add(campos.get("destino_mail___" + seq[id]));
            //log.info("#### Destino : "+ campos.get("destino_mail___" + seq[1]));
        }
    }
    if (dest.size() > 0){
        //Envia e-mail
        notifier.notify(codSolic, "templatedeemail", dadostemplate, dest, "text/html");
    }
}
```

---

## Resposta #1

**Matheus Loreto** (@matheusl) — 24/11/2021, 11:16

Eu utilizo a inclusão de emails desta forma:

```auto
var destinatarios = new java.util.ArrayList();
        var indexes = hAPI.getChildrenIndexes("tablename")
        var children = hAPI.getChildrenFromTable("tablename");

        for(var j = 0; j < indexes.length; j++) {
            destinatarios.add( children.get("campoId___"+indexes[j]));
            log.info("[AVISO] Adicionou usuario: " + children.get("campoId___"+indexes[j]));
        }
```

---
