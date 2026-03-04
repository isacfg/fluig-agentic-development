# ValidateForm - TABLE

> **Fonte:** [https://fluiggers.com.br/t/validateform-table/1991](https://fluiggers.com.br/t/validateform-table/1991)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `tabela`, `beforesendvalidate`
> **Criado em:** 30/06/2023, 10:04
> **Visualizações:** 277 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Karina Pinheiro** (@Kapinheiro) — 30/06/2023, 10:04

Olá,
Função está excluindo corretamente a linha na tabela, mas ao passar para próxima atividade, a linha excluída volta aparecer na tabela.

Como resolver?

```auto
function fnCustomDelete(oElement) {

	var atividade = $("#numAtividade").val();

	if(atividade == "0" || atividade == "18"){
		FLUIGC.message.confirm({
			message: '<strong>Confirma exclusão da Nota? </strong>',
			title: '<strong class="text-danger">ATENÇÃO!</strong>',
			labelYes: 'Excluir',
			labelNo: 'Cancelar'
		}, function(result, el, ev) {

			if (result) {

				fnWdkRemoveChild(oElement);

			}
		});

	}

}
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 04/07/2023, 14:54

Verifica se não tem algum campo disable na tabela pai filho.
Isso pode ocasinar a linha de voltar

---
