# Como ler um arquivo XML nos eventos de processo

> **Fonte:** [https://fluiggers.com.br/t/como-ler-um-arquivo-xml-nos-eventos-de-processo/678](https://fluiggers.com.br/t/como-ler-um-arquivo-xml-nos-eventos-de-processo/678)
> **Categoria:** BPM
> **Criado em:** 27/09/2021, 08:39
> **Visualizações:** 654 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 27/09/2021, 08:39

Galera, alguém pode me ajudar sobre como fazer a leitura de um arquivo XML em um evento de processo?

```auto
function afterProcessCreate(processId){
    hAPI.setCardValue("valor_liquido", 'teste');

    var codcoligada = hAPI.getCardValue("CodColigada");
    var idmov = hAPI.getCardValue("IdMov");
    var idFluig = getValue('WKNumProces');

    log.info("======== afterProcessCreate =======");
    log.info("Coligada: " + codcoligada + ", idmov: " + idmov + ", idFluig: " + idFluig);

    // recupera os dados do dataset
    var fields = new Array(codcoligada, idmov, idFluig);
    var dsNucleus = DatasetFactory.getDataset('wsDatasetNucleus', fields, null, null);

    log.info("RowsCont:" + dsNucleus.rowsCount);
    var xmlNewDataSet = dsNucleus.getValue(0, "XML");
    log.info("xmlNewDataSet: " + xmlNewDataSet);
    // Daqui para cima funciona
   // Daqui para baixo devo fazer a leitura do XML. Estou transcrevendo do js para
   // um evento de processo. Abaixo está com jquery, como estava inicialmente.

    var xml = $.parseXML(xmlNewDataSet);
    $xml = $(xml);

	$(xml).find('TMOV').each(function stss(index) {
		$('#CodPrj').val($(this).find('CODPRJ').text() + ' - ' + $(this).find('DESCPROJETO').text());
		$('#DescContrato').val($(this).find('NUMCONTRATO').text());
		$('#numeroMov').val($(this).find('NUMEROMOV').text());
		$('#codFilial').val($(this).find('CODFILIAL').text() + ' - ' + $(this).find('NOMEFILIAL').text());
		$('#codcfo').val($(this).find('CODCFO').text() + ' - ' + $(this).find('NOMECFO').text());
		$('#dataEmissao').val(formatDateMask($(this).find('DATAEMISSAO').text()));
		$('#valorliquido').val(formatMoney($(this).find('VALORLIQUIDO').text(), codMoeda, '.', ','));
	});
}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/09/2021, 09:20 | ❤️ 1

Talvez esse exemplo ajude em algo: [Parse an XML string: Using DOM and a StringReader. : DOM « XML « Java](http://www.java2s.com/Code/Java/XML/ParseanXMLstringUsingDOMandaStringReader.htm)

Acho que no JS do Fluig não temos as opções dos imports, então precisa sempre identificar as classes com o package completo, por exemplo:

```javascript
var db = javax.xml.parsers.DocumentBuilderFactor.newInstance().newDocumentBuilder();
var is = new org.xml.sax.InputSource();
```

Mas não tentei testar pra ver se esse exemplo realmente funciona.

---
