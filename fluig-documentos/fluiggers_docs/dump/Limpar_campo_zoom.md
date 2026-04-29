# Limpar campo zoom

> **Fonte:** [https://fluiggers.com.br/t/limpar-campo-zoom/2508](https://fluiggers.com.br/t/limpar-campo-zoom/2508)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`, `zoom`
> **Criado em:** 17/01/2024, 11:19
> **Visualizações:** 420 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Caue Silva Jesus** (@Caue_Silva_Jesus) — 17/01/2024, 11:19

Boa tarde pessoal! Estou tentando fazer com que dependendo da informação que eu colocar no primeiro campo zoom ele apague os dados que já estão selecionados nos outros campos, porém não está dando certo.

```auto
function setSelectedZoomItem(item){

	if (item.inputId == "coligada") {
		$("#codColigada").val(item.CODCOLIGADA);
		setFilial(item.CODCOLIGADA)
		reloadZoomFilterValues("cfo","CODCOLIGADA," + $("#codColigada").val());
		reloadZoomFilterValues("cCtusto","CODCOLIGADA," + $("#codColigada").val());
		reloadZoomFilterValues("vendedor","CODCOLIGADA," + $("#codColigada").val());

	}else if (item.inputId == "Filial") {

	}else if(item.inputId == "cCtusto"){
		$("#codCtusto").val(item.CODCCUSTO);
		$("#codCtustoRed").val(item.CODREDUZIDO);
		setApprovers(item.CODCCUSTO)

	}else if(item.inputId == "projeto"){
		$("#codProjeto").val(item.CODIGO);

	}else if(item.inputId == "recResp"){
		$("#codRecResp").val(item.CODIGO);

	}else if(item.inputId == "fPagameto"){
		$("#codFPagameto").val(item.CODFPAGAMETO);

	}else if (item.inputId == "cfo") {
		$("#codCfo").val(item.CODCFO);
		reloadZoomFilterValues("tpPagamento","CODCFO," + $("#codCfo").val()+",CODCOLIGADA," + $("#codColigada").val());

	}else if (item.inputId == "banco") {
		$("#numBanco").val(item.NUMBANCO);

	}else if (item.inputId == "tpPagamento") {
		displayPag(item)
		displayPix({value:$("#fPagamento").val()})
		$("#codTpPagamento").val(item.IDPGTO);
		$("#idPgto").val(item.IDPGTO);
		$("#bancopgto").val(item.NOME);
		$("#codAgencia").val(item.CODIGOAGENCIA);
		$("#digAgencia").val(item.DIGITOAGENCIA);
		$("#codConta").val(item.CONTACORRENTE);
		$("#digConta").val(item.DIGITOCONTA);
		$("#chavePix").val(item.CHAVEPIX)

	}else if (item.inputId == "vendedor") {
		$("#codven").val(item.CODVEN);
	}


}


function removedZoomItem(item){
	window["cfo"].clear();

	if (item.inputId == "Coligada") {
		$("#codColigada").val("");

	}else if(item.inputId == "cCtusto"){
		$("#codCtusto").val("");

	}else if(item.inputId == "projeto"){
		$("#codProjeto").val("");

	}else if(item.inputId == "recResp"){
		$("#codRecResp").val("");

	}else if(item.inputId == "fPagameto"){
		$("#codFPagameto").val("");

	}else if (item.inputId == "cfo") {
		$("#codCfo").val("");

	}else if (item.inputId == "banco") {
		$("#numBanco").val("");

	}else if (item.inputId == "tpPagamento") {
		displayPag(item.DESCRICAO = '')
		$("#codTpPagamento").val("");
		$("#idPgto").val("");
		$("#bancopgto").val("");
		$("#codAgencia").val("");
		$("#digAgencia").val("");
		$("#codConta").val("");
		$("#digConta").val("");

	}else if (item.inputId == "vendedor") {
		$("#codven").val("");
	}
}
```

---

## Resposta #1

**João Felipe Soares Barreto** (@jfsbarreto) — 21/01/2024, 18:09

Boa noite, para campo do tipo Zoom não funciona assim, precisa utilizar o window, exemplo:

window\[“zoomSolicitante”\].setValue(“”); //para zerar o campo zoom

ou

window\[“zoomSolicitante”\].setValue(“administrador”); // para alimentar o campo zoom.

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/01/2024, 10:19

Não aparece nenhum erro no console do navegador?

Se for só pra limpar é exatamente como fez mesmo, `window['nome_zoom'].clear()`

Pode ser que tenha algum outro erro de JS que tá bloqueando a execução.

---
