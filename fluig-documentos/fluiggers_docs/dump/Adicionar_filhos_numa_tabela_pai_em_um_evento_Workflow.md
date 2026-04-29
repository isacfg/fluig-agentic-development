# Adicionar filhos numa tabela pai em um evento Workflow

> **Fonte:** [https://fluiggers.com.br/t/adicionar-filhos-numa-tabela-pai-em-um-evento-workflow/3147](https://fluiggers.com.br/t/adicionar-filhos-numa-tabela-pai-em-um-evento-workflow/3147)
> **Categoria:** BPM
> **Tags:** `form`, `paixfilho`, `tabela`
> **Criado em:** 31/01/2025, 10:26
> **Visualizações:** 65 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 31/01/2025, 10:26

estou tentando adicionar filhos numa tabela atraves do **hAPI.addCardChild**, em um evento workflow **beforeStateEntry**, também testei no **afterTaskCreate**, mas dá o mesmo erro.
já testei ver os retornos do dataset e vem certinho, tudo como string, e os campos da tabela são do tipo text. mas fica dando esse erro:

> WFLYEJB0034: EJB Invocation failed on component wdk/CardFieldDB for method public int

```auto
function beforeStateEntry(sequenceId){
	try {
		//var teste = hAPI.getCardValue("valorTotal");
		//hAPI.setCardValue("aprovador", teste);
		var numProcess = getValue("WKNumProces");

		// Busca o número da solicitação pai
		var idCotacao = hAPI.getCardValue("idCotacao");
		var cnpjFornecedor = hAPI.getCardValue("cnpj");

		log.info("TESTE HAPI.STARTPROCESS");

		//Cria a constraint para buscar os formulários ativos
		var cst1 = DatasetFactory.createConstraint("ID", idCotacao, idCotacao, ConstraintType.MUST);
		var cst2 = DatasetFactory.createConstraint("FORNECEDOR", cnpjFornecedor, cnpjFornecedor, ConstraintType.MUST);
		var constraint = new Array(cst1, cst2);

		var dataset = DatasetFactory.getDataset("ds_prePedidos", null, constraint, null);

		log.info("depois do dataset");

		for (var i = 0; i < dataset.rowsCount; i++) {
		    var childData = new java.util.HashMap();

		    var produto     = dataset.getValue(i, "PRODUTO");
		    var necessidade = dataset.getValue(i, "NECESSIDADE");
		    var quantidade  = dataset.getValue(i, "QUANTIDADE");
		    var valorItem   = dataset.getValue(i, "VALOR");

		    childData.put("produto",      produto.toString());
		    childData.put("necessidade",  necessidade.toString());
		    childData.put("quantidade",   quantidade.toString());
		    childData.put("valorItem",    valorItem.toString());

		    log.info("antes do addCardChild")

		    hAPI.addCardChild("produtosPedido", childData);
		};

		log.info("depois do for");
	} catch (e) {
        log.error("Erro after: " + e.message);
    }
}
```

---
