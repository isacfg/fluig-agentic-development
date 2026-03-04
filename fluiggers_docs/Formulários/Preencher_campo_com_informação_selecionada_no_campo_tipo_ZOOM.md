# Preencher campo com informação selecionada no campo tipo ZOOM

> **Fonte:** [https://fluiggers.com.br/t/preencher-campo-com-informacao-selecionada-no-campo-tipo-zoom/2734](https://fluiggers.com.br/t/preencher-campo-com-informacao-selecionada-no-campo-tipo-zoom/2734)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 18/04/2024, 16:26
> **Visualizações:** 114 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Alberth S. P. Machado** (@Alberth_S_P_Machado) — 18/04/2024, 16:26

Olá, pessoal

Preciso preencher automaticamente um segundo campo com informação escolhida de um campo tipo Zoom.
No campo tipo Zoom é escolhido pelo código do vendedor, no campo que preciso preencher automaticamente deverá aparecer apenas o nome do vendedor selecionado.
Começando agora com Fluig!

```auto
<div class="form-group col-md-8">
                  <label class="info">Codigo do novo vendedor<span style="color: red"></span>
                  <input class="form-cow" type="zoom" id="cod" name="cod"
                	  data-zoom="{
						  'displayKey':'Z7_CODIGO',
						  'datasetId':'Vendedores',
						  'fields':[
									  {
										  'field':'Z7_CODIGO',
										  'label':'CODIGO',
										  'standard':'true',
										  'search':'false'
									  },
									  {
										  'field':'Z7_FID',
										  'label':'VENDEDOR',
										  'standard':'true',
										  'search':'true'
									  }
								  ]
						  }"
                      />
                  </label>
               </div>
```
```javascript
function setSelectedZoomItem(selectedItem) {

	var nomevendedor = "cod";

	if (selectedItem.inputId == "cod"){
	        $("nome_vendedor").val(selectedItem["Z7_FID"]);

	}
}
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 18/04/2024, 21:14

Boa noite é exatamente o qaue vopcê fez no setSElectedZoomItem.
Não entendi a dúvida.

---
