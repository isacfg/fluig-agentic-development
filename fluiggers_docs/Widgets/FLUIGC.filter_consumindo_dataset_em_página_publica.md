# FLUIGC.filter consumindo dataset em página publica

> **Fonte:** [https://fluiggers.com.br/t/fluigc-filter-consumindo-dataset-em-pagina-publica/1315](https://fluiggers.com.br/t/fluigc-filter-consumindo-dataset-em-pagina-publica/1315)
> **Categoria:** Widgets
> **Tags:** `dataset`
> **Criado em:** 15/09/2022, 17:01
> **Visualizações:** 800 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 15/09/2022, 17:01

Olá, estou utilizando o FLUIGC.filter em uma página publica para consultar um dataset mas não consegui configurar minha chamada com o Oauth. Alguém tem um exemplo ou pode me ajudar com essa chamada ?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 16/09/2022, 09:09 | ❤️ 3

Tem um post meu com algo parecido. sobre conversor de video com nodejs.
ele tem as chamadas corretas oauth.
O [@fluigor.com.br](/u/fluigor.com.br) fez uma lib em js que ajuda bastante.
[fluig.zip](https://fluiggers.com.br/uploads/short-url/4TDK82dnKoMIoCFIrySWdVA1MCA.zip) (45,6,KB)
Já fiz algumas mudaças nela mas adicionando novas chamadas.

Segue exemplo de como utiliza-la:

```javascript
var MyWidget = SuperWidget.extend({
	//variáveis da widget
	dados : { "files" : [] },
	pasta : "11957",
	config : {
		consumerPublic: "teste",
		consumerSecret: "sogeloteste",
		tokenPublic: 	"publictioken",
		tokenSecret: 	"tokensecret,
		url: 			"https://url.fluig.com"
	},
	request : null,
	//método iniciado quando a widget é carregada
	init: function() {
		_this=this;
		this.request = new FluigOAuthAPI(this.config);
		$('#uploadImage').fileupload({
			dataType: 'json',
			done: function (e, data) {
				$.each(data.result.files, function (index, file) {
					var myLoading1 = FLUIGC.loading('#upload-file');
					myLoading1.show();
					var retorno = _this.request.document.createDocument(file.name,MyWidget.pasta,[{"fileName": file.name}]);
					myLoading1.hide();
					MyWidget.dados.files.push(
						{
							"id":retorno.content.id,
							"filename":retorno.content.description,
						}
					)
				});
    			var template = $("#file-template").html();
				var html = Mustache.to_html(template, MyWidget.dados);
				$("#result").html(html);
			}
		});
	},

	//BIND de eventos
	bindings: {
		local: {
			'execute': ['click_executeAction']
		},
		global: {}
	},

	executeAction: function(htmlElement, event) {
	},
	remove: function(key){
		var Data = MyWidget.dados.files;
		var index = MyWidget.findWithAttr(Data,'id',parseInt(key));
		MyWidget.dados.files.splice(index,index);
		var template = $("#file-template").html();
		var html = Mustache.to_html(template, MyWidget.dados);
		$("#result").html(html);
	},
	update: function(key,desc){
		var retorno = _this.request.document.updateDescription(key,$(desc).find(":selected").text());
	},
	findWithAttr:function (array, attr, value) {
		for(var i = 0; i < array.length; i += 1) {
			if(array[i][attr] === value) {
				return i;
			}
		}
		return -1;
	}
});
```

---
