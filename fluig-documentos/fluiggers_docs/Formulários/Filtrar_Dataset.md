# Filtrar Dataset

> **Fonte:** [https://fluiggers.com.br/t/filtrar-dataset/1390](https://fluiggers.com.br/t/filtrar-dataset/1390)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 06/10/2022, 11:36
> **Visualizações:** 1098 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**João Vitor** (@joao_vitor) — 06/10/2022, 11:36

Bom dia a todos !

Estou iniciando no Fluig assim como no mundo da programação também, eu tenho um Dataset customizado (sincronizado) construído que puxa algumas informações, mas em uma coluna específica chamada “ONNOFF” eu preciso que ele retorne apenas um tipo de resultado. Preciso de uma documentação ou orientação para fazer que ele filtre essa coluna especificamente.

Segue o código do Dataset abaixo:

function defineStructure() {
addColumn(‘CODCOLIGADA’)
addColumn(‘CHAPA’)
addColumn(‘NOME’)
addColumn(‘ONNOFF’)
addColumn(‘DTINICIOFERIAS’)
addColumn(‘DTFIMFERIAS’)
setKey(\[“CODCOLIGADA”, “CHAPA”\]);
addIndex(\[“CODCOLIGADA”, “CHAPA”\]);
}
function onSync(lastSyncDate) {
log.info(“ENTREI NO DATASET ### RM\_Funcionarios\_Clientes”);
var dataset = DatasetBuilder.newDataset();
var empresa = ‘1’
var sqllLimit = 10
var nomeServico = ‘APIdataserver’
var data = {
companyId: getValue(“WKCompany”) + ‘’,
serviceCode: nomeServico,
endpoint: encodeURI(‘FopFuncData?filter=\[“PFunc.CODCOLIGADA =:codcoligada”,"’ + empresa + ‘"\]’),
method: ‘get’,
params: {},
headers: {
‘CODCOLIGADA’: ‘1’
}
}
try {
var api = fluigAPI.getAuthorizeClientService();
var resultAPI = api.invoke(JSON.stringify(data));
var resultados = JSON.parse(resultAPI.getResult());
var campos = \[‘dadosFuncRM.PFunc.CODCOLIGADA’, ‘dadosFuncRM.PFunc.CHAPA’, ‘dadosFuncRM.PFunc.NOME’, ‘dadosFuncRM.PFCOMPL.ONNOFF’\];
// Adiciona os dados no dataset
[//log.info](//log.info)(resultados.length);
for (var index = 0; index < resultados.length; index++) {
var row = resultados.data\[index\];
if (row.CODSITUACAO != ‘D’) {
var normalizer = java.text.Normalizer
var soapRequest = ‘<?xml version="1.0" encoding="utf-8"?>’ +
‘<soap:Envelope xmlns:soap=“[http://schemas.xmlsoap.org/soap/envelope/](http://schemas.xmlsoap.org/soap/envelope/)”>’ +
‘soap:Body’ +
‘FopFuncData’ +
‘’ + row.CODCOLIGADA + ‘;’ + row.CHAPA + ‘’ +
‘CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=fluig’ +
‘</soap:Body></soap:Envelope>’
soapRequest = String(normalizer.normalize(soapRequest, normalizer.Form.NFD)).replace(/\[\\u0300-\\u036f\]/g, “”)
var data = {
companyId: getValue(“WKCompany”) + ‘’,
serviceCode: ‘ws\_dataserver’,
endpoint: ‘IwsDataServer’,
method: ‘POST’,
timeoutService: ‘100’,
strParams: soapRequest,
options: {
encoding: ‘UTF-8’,
mediaType: ‘text/xml’
},
headers: { “SOAPAction”: “[http://www.totvs.com/IwsDataServer/ReadRecord](http://www.totvs.com/IwsDataServer/ReadRecord)” }
}
var api = fluigAPI.getAuthorizeClientService();
[//log.info](//log.info)(JSON.stringify(data))
var resultAPI = api.invoke(JSON.stringify(data));
[//log.info](//log.info)(resultAPI.getResult());
var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
var parser = factory.newDocumentBuilder();
var source = new org.xml.sax.InputSource(new java.io.StringReader(resultAPI.getResult()));
var xmlResult = parser.parse(source);
var dadosFuncRM = new XML(xmlResult.getElementsByTagName(‘ReadRecordResult’).item(0).getTextContent())
// Cria as colunas que serão retornadas pela consulta SQL e que serão utilizadas
var Arr = Array(campos.length + 2).fill(‘’)
var i = 0;
for (var indexCpo = 0; indexCpo < campos.length; indexCpo++) {
Arr\[indexCpo\] = eval(campos\[indexCpo\])
}
var soapRequest = ‘<?xml version="1.0" encoding="utf-8"?>’ +
‘<soap:Envelope xmlns:soap=“[http://schemas.xmlsoap.org/soap/envelope/](http://schemas.xmlsoap.org/soap/envelope/)”>’ +
‘soap:Body’ +
‘’ +
‘FopFuFeriasPerDataBR’ +
“PFUFeriasPer.CHAPA='” + row.CHAPA + “'” +
‘CODSISTEMA=G;CODCOLIGADA=1;CODUSUARIO=fluig’ +
‘’ +
‘</soap:Body>’ +
‘</soap:Envelope>’
soapRequest = String(normalizer.normalize(soapRequest, normalizer.Form.NFD)).replace(/\[\\u0300-\\u036f\]/g, “”)
var data = {
companyId: getValue(“WKCompany”) + ‘’,
serviceCode: ‘ws\_dataserver’,
endpoint: ‘IwsDataServer’,
method: ‘POST’,
timeoutService: ‘100’,
strParams: soapRequest,
options: {
encoding: ‘UTF-8’,
mediaType: ‘text/xml’
},
headers: { “SOAPAction”: “[http://www.totvs.com/IwsDataServer/ReadView](http://www.totvs.com/IwsDataServer/ReadView)” }
}
var api = fluigAPI.getAuthorizeClientService();
[//log.info](//log.info)(JSON.stringify(data))
var resultAPI = api.invoke(JSON.stringify(data));
[//log.info](//log.info)(resultAPI.getResult());
var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
var parser = factory.newDocumentBuilder();
var source = new org.xml.sax.InputSource(new java.io.StringReader(resultAPI.getResult()));
var xmlResult = parser.parse(source);
var dadosFeriasRM = new XML(xmlResult.getElementsByTagName(‘ReadViewResult’).item(0).getTextContent())
var data = new Date()
var dtAtual = data.getFullYear().toString() + (“00” + data.getMonth().toString()).slice(-2) + data.getDate().toString()
for (var indexFerias = 0; indexFerias < dadosFeriasRM.length; indexFerias++) {
var dtferias = (dadosFeriasRM\[indexFerias\].DATAFIM).split(‘T’)\[0\].replaceAll(‘-’, ‘’)
if (dtferias >= dtAtual && (dadosFeriasRM\[indexFerias\].SITUACAOFERIAS == ‘M’ || dadosFeriasRM\[indexFerias\].SITUACAOFERIAS == “X”)) {
Arr\[campos.length + 1\] = (dadosFeriasRM\[indexFerias\].DATAINICIO).split(‘T’)\[0\].replaceAll(‘-’, ‘’)
Arr\[campos.length + 2\] = (dadosFeriasRM\[indexFerias\].DATAFIM).split(‘T’)\[0\].replaceAll(‘-’, ‘’)
break
}

```
}
            dataset.addOrUpdateRow(Arr);
        } else {
            var filtro = []
            filtro.push(DatasetFactory.createConstraint("CHAPA", row.CHAPA, row.CHAPA, ConstraintType.MUST));
            filtro.push(DatasetFactory.createConstraint("CODCOLIGADA", row.CODCOLIGADA, row.CODCOLIGADA, ConstraintType.MUST));
            var funcionario = DatasetFactory.getDataset("ds_FuncionariosSincronizado", null, filtro, null);

            if (funcionario)
                if (funcionario.rowsCount > 0)
                    dataset.deleteRow([row.CHAPA, row.CODCOLIGADA, '', ''])
        }

    }
} catch (e) {
    if (e == null)
        e = "Erro desconhecido; verifique o log do AppServer";
    var mensagemErro = "Erro na comunicação com o app (linha: " + e.lineNumber + "): " + e;
    log.error(mensagemErro);
    //    log.info(mensagemErro);
    //    dataset.addColumn('Status');
    //    dataset.addColumn('Result');
    //    dataset.addRow([-1, mensagemErro]);
}
log.info('Terminou a sincronização do dataset ds_FuncionariosSincronizado')
return dataset;
```

}

if (!Array.prototype.fill) {
Array.prototype.fill = function fill(valor) {
var aDados = this
for (var i = 0; i < aDados.length; i++) {
aDados\[i\] = valor
}
return aDados
};
}

if (!Array.prototype.fill) {
Array.prototype.fill = function fill(valor) {
var aDados = this
for (var i = 0; i < aDados.length; i++) {
aDados\[i\] = valor
}
return aDados
};
}

![image](https://fluiggers.com.br/uploads/default/original/1X/ec018503dd97e1b8f3de31e44426f7ebb9282f40.png)

Como a imagem acima mostra, existem alguns tipos de opções nessa coluna específica, eu preciso fazer que o dataset apenas retorne o “OFFSHORE”.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/10/2022, 19:00 | ❤️ 1

Se ele é sincronizado o Fluig já trata os filtros igual a um dataset interno. Só passar a constraint quando chamar o dataset.

---
