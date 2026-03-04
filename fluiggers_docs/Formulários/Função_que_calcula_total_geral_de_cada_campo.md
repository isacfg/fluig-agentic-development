# Função que calcula total geral de cada campo

> **Fonte:** [https://fluiggers.com.br/t/funcao-que-calcula-total-geral-de-cada-campo/1146](https://fluiggers.com.br/t/funcao-que-calcula-total-geral-de-cada-campo/1146)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 21/06/2022, 14:35
> **Visualizações:** 277 | **Likes:** 3 | **Respostas:** 0

---

## Pergunta original

**Leonardo** (@leonardomarthiniano) — 21/06/2022, 14:35 | ❤️ 3

Estava com uma dúvida sobre uma função de um total geral de campos de uma tabela pai x filho. Um dos admins me ajudou com a seguinte função:

```javascript
function calcTotal(){

		var totalGeral = 0.00;

		$("[name^='C8_TOTAL6___']").each(function(index){
	        if ($(this).val()) {
	        	totalGeral += $(this).maskMoney("unmasked")[0];
	        }
		});

	    $("#totalGeralCotacao").val(totalGeral.toLocaleString(undefined, {minimumFractionDigits:4}));

	    $(".mascaraDinheiro").unmask();
		$(".mascaraDinheiro").mask("#.###.##0,0000", { reverse : true });

}
```

[@Daniel\_Sales](/u/daniel_sales) , obrigado!!!

---
