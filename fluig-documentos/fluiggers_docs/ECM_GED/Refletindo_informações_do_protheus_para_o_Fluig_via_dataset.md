# Refletindo informações do protheus para o Fluig via dataset

> **Fonte:** [https://fluiggers.com.br/t/refletindo-informacoes-do-protheus-para-o-fluig-via-dataset/2081](https://fluiggers.com.br/t/refletindo-informacoes-do-protheus-para-o-fluig-via-dataset/2081)
> **Categoria:** ECM / GED
> **Tags:** `form`, `dataset`
> **Criado em:** 26/07/2023, 18:50
> **Visualizações:** 318 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**joaopretti** (@joaopretti) — 26/07/2023, 18:50

Boa noite pessoal! estou com uma duvida que não acho em forum e video nenhum!

Eu criei um dataset com as colunas de uma tabela que eu gostaria de trazer para o fluig do protheus.

Conforme imagem a baixo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/e/ed672d3bb5b316b0bf5a88074193836d95f65743_2_690x220.png)

Eu gostaria de digitar o numero do pedido e clicar no botão ‘‘buscar’’, ao clicar no botão ele me traria todos os campos preenchidos do dataset que são as tabelas que devem preencher estes diversos campos. Como eu poderia fazer isso? por favor.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 27/07/2023, 00:05

Olá, para pegar os dados do dataset no formulário faz assim…

Função no javascript:

```auto
function preenche_form() {
	const num_pedido = $("#num_pedido").val();

	const c1 = DatasetFactory.createConstraint("num_pedido", num_pedido, num_pedido, ConstraintType.MUST);

	const ds = DatasetFactory.getDataset("Nome_Dataset", null, [C1], null).values;


	if (ds.length > 0) {
		$("#fornecedor").val(ds[0].C7_FORNECE);
		$("#observacoes").val(ds[0].C7_OBS);
		$("#preco_unitario").val(ds[0].C7_PRECO);
		$("#produto").val(ds[0].C7_PRODUTO);
		$("#quantidade").val(ds[0].C7_QUANT);
	}
}
```

Botão no HTML:

```auto
<button class="btn btn-default" onclik="preenche_form()">Buscar</button>
```

Para esse exemplo levei em consideração que o dataset espere uma constraint “num\_pedido” e que para cada número de pedido retorne apenas um registro.

Altere os IDs dos campos para os que estão no seu form.

E os nome dos campos do dataset para os do seu dataset.

A lógica é mais ou menos essa… testa aí.

Abs

---
