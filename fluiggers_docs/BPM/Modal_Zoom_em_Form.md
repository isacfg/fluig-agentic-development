# Modal Zoom em Form

> **Fonte:** [https://fluiggers.com.br/t/modal-zoom-em-form/154](https://fluiggers.com.br/t/modal-zoom-em-form/154)
> **Categoria:** BPM
> **Tags:** `java`
> **Criado em:** 17/03/2021, 13:27
> **Visualizações:** 1739 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 17/03/2021, 13:27 | ❤️ 1

Pessoal, vocês já fizeram algum zoom que funciona modal no Formulário? Sem ser a `(window.open("/webdesk/zoom.jsp... ")` ou se o Fluig tem algum padrão.

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 17/03/2021, 16:57 | ❤️ 3

Salve [@romuloccomp](/u/romuloccomp) segue abaixo um exemplo.

```
<html>
<head>
	<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css"/>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
	<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8">
	</script>
	<script src="/webdesk/vcXMLRPC.js"></script>
	<script>
	  function fMyZoomAnalistaFilter() {
	        var that = this;
	        that.myTable = FLUIGC.datatable('#idtable' + "_" + that.instanceId, {
	            dataRequest: DatasetFactory.getDataset('colleague', null,null,null).values,
	            renderContent: ['colleagueName', 'login', 'mail', 'defaultLanguage'],
	            header: [
	                {'title': 'colleagueName'},
	                {'title': 'login'},
	                {'title': 'mail'},
	                {'title': 'defaultLanguage'}
	            ],
	            search: {
	                enabled: true,
	                onlyEnterkey: true,
	                onSearch: function(res) {
	                    if (!res) {
	                        that.myTable.reload(dataInit);
	                    }
	                    var dataAll = that.myTable.getData();
	                    var search = dataAll.filter(function(el) {
	                        return el.colleagueName.toUpperCase().indexOf(res.toUpperCase()) >= 0
	                            || el.login.toUpperCase().indexOf(res.toUpperCase()) >= 0
	                            || el.mail.toUpperCase().indexOf(res.toUpperCase()) >= 0;
	                    });
	                    if (search && search.length) {
	                        that.myTable.reload(search);
	                    } else {
	                        FLUIGC.toast({
	                            title: 'Searching: ',
	                            message: 'No results',
	                            type: 'success'
	                        });
	                    }
	                }
	            },
	            navButtons: {
	                enabled: false,
	            },
	        }, function(err, data) {
	            if(data) {
	                dataInit = data;
	            }
	            else if (err) {
	                FLUIGC.toast({
	                    message: err,
	                    type: 'danger'
	                });
	            }
	        });
	    }
	</script>
</head>
<body>
<div class="fluig-style-guide">
<form name="form" role="form">
<div class="form-group col-md-4">
<label for="NameAnalistaF">Nome do Colaborador</label>
<div class="input-group">
    <input id="NameAnalistaF" type="text" class="form-control" name="NameAnalistaF" readonly style="color:black;">
    <span onclick="fMyZoomAnalistaFilter('Buscar Analista', this.parentElement.getElementsByClassName('form-control')[0]);" class="input-group-addon myzoom">
        <span class="flaticon flaticon-search-zoom icon-sm"></span>
    </span>
    <span class="input-group-addon group-zoom no-view zoom-click btn-danger" background-color: maroon; onclick="removeZoom('FiltroAnalista')">
            <span class="fluigicon fluigicon-remove "></span>
    </span>
</div>
</div>


</form>
</div>
</body>
</html>
```

CREDITOS: [@Rhyan](/u/rhyan)

---

## Resposta #2

**Romulo Pereira** (@romuloccomp) — 17/03/2021, 17:10

Excelente, vou implementar dessa forma.

---
