# Anexar pdf ao formulário

> **Fonte:** [https://fluiggers.com.br/t/anexar-pdf-ao-formulario/1904](https://fluiggers.com.br/t/anexar-pdf-ao-formulario/1904)
> **Categoria:** Sem categoria
> **Criado em:** 05/05/2023, 10:08
> **Visualizações:** 310 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gustavo** (@gustavo91) — 05/05/2023, 10:08

Bom dia pessoal.

No código abaixo, eu tiro um print do meu formulário e salvo ele em um arquivo pdf. Eu preciso agora anexar esse pdf ao meu formulário usando API. Eu vi que poderia fazer isso utilizando a API do Fluig v2/documents/upload/{fileName}, porém, não consegui.

Alguém poderia me ajudar por favor?

function gerarPDFs() {

```
var solicitacao = $('#solicitacao').val();
console.log(solicitacao)

var ctSolicitacao = DatasetFactory.createConstraint('solicitacao', solicitacao, solicitacao, ConstraintType.MUST);
var ds_solicitacao = DatasetFactory.getDataset('ds_cotaçao', null, [ctSolicitacao], null);

for (var i = 0; i < ds_solicitacao.values.length; i++) {

    var documentId = ds_solicitacao.values[i]["metadata#id"]
    var documentVersion = ds_solicitacao.values[i]["metadata#version"]
    var pastaGed = ds_solicitacao.values[i]["metadata#parent_id"]
}

$('#documentoId').val(documentId);

console.log(documentId)
console.log(documentVersion)
console.log(pastaGed)


var pastaPai = pastaGed
var versao = documentVersion;
var doc = documentId;
var numProcesso = solicitacao;

console.log('PASTA_PAI' + pastaGed)
console.log('VERSAO' + versao)
console.log('DOCCC' + doc)


var urlAry = 'https://fluigtst.fluig.cloudtotvs.com.br:1600' + '/webdesk/streamcontrol/' + pastaPai + '/' + doc + '/' + versao +
    '//?WDCompanyId=1&WDNrDocto=' + doc + '&WDNrVersao=' + versao + '&WDParentDocumentId=' + pastaPai + '&edit=false';

console.log('URLLL=>>>' + urlAry)

document.getElementById('imprimir').src = urlAry;

window.setTimeout(function () {

    createPDFfromHTML(doc);

}, 3000)
```

}

function createPDFfromHTML(nomeArquivo) {

```
html2canvas(document.body).then(canvas => {
    console.log('CANVAS' + JSON.stringify(canvas))
    var imgData = canvas.toDataURL('image/jpeg');


    let imgWidth = 210;
    let imgHeight = canvas.height * imgWidth / canvas.width;
    let pageHeight = imgHeight;


    let heightLeft = imgHeight;
    let position = 0;
    let pdf = new jsPDF('p', 'mm');
    let fix_imgWidth = 0;
    let fix_imgHeight = 10;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth + fix_imgWidth, imgHeight + fix_imgHeight);
        heightLeft -= pageHeight;
    }

    pdf.save(nomeArquivo);



})
```

}

---
