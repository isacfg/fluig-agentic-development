# Mostrar Dataset no Formulário para Envio por Email

> **Fonte:** [https://fluiggers.com.br/t/mostrar-dataset-no-formulario-para-envio-por-email/858](https://fluiggers.com.br/t/mostrar-dataset-no-formulario-para-envio-por-email/858)
> **Categoria:** Formulários
> **Tags:** `dataset`, `formulario`
> **Criado em:** 07/01/2022, 07:18
> **Visualizações:** 700 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**David bueno de campos junior** (@David_Junior) — 07/01/2022, 07:18

Prezados Senhores,
Tudo bem?

Estou criando alguns processos no Fluig para dispara-los por e-mail, porem não estou conseguindo mostrar na tela um DATASET que criei.
Queria apenas mostrar ele em uma tabela estática mesmo no campo `<td>`. Sei que tem como carregar uma coluna do dataset no campo `<select>` porém em um campo texto `<p>` não vi nenhuma forma.

Poderiam me ajudar?

Obrigado.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 07/01/2022, 09:19 | ❤️ 1

Bom dia,
O que voce pode fazer e um loop que pegue todas as informações e coloque em um textarea

```auto
var c1= DatasetFactory.createConstraint('HTTPSTATUS', statusHttp, statusHttp, ConstraintType.MUST);
		    var c2= DatasetFactory.createConstraint('RESULTADO', retornoApi.getResult(), retornoApi.getResult(), ConstraintType.MUST);
			var c3= DatasetFactory.createConstraint('PROCESSO', "compras", "compras", ConstraintType.MUST);
		    var c4= DatasetFactory.createConstraint('DATA', data, data, ConstraintType.MUST);
		    var dataset = DatasetFactory.getDataset('dts_httpStatus', null, [c1,c2,c3,c4], null);
var dados="";
//Esse for dessa forma roda no js que vai rodar no servidor
for (i=0;i< dataset.rowsCount;i++){
     dados+= dataset.getValue(i,"message");
}
//Aqui vai a parte se for por js do html
for (i=0;i< dataset.values.length;i++){
     dados+= dataset.values[i].message;
}
```

A ideia é mais ou menos essa. A chamada do dataset é igual no server side e no cliente.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**David bueno de campos junior** (@David_Junior) — 07/01/2022, 09:22

Com ajuda de um tópico em outro forum eu consegui resolver com `DATATABLE`

Resolvido com a ajuda de outro tópico: [datasets - Tabela Dataset Form](https://forum.fluig.com/3876-tabela-dataset-form)

HTML:

```auto
<div class="table-responsive" id="talhoes">
 </div>
```

JS:

```auto
<script type="text/javascript">
var datasetReturned = DatasetFactory.getDataset("TESTE_DATASET", null, null, null); //Aqui Coloca o Nome do DATASET
var records = datasetReturned.values;
mydata = [];
for (var index in records) {
    var record = records[index];
    mydata.push({ //Aqui em Baixo cria os campos da tabela
    	INSTANCIA: record.INSTANCIA,
    	DT_MOVIMENTO: record.DT_MOVIMENTO,
    	CD_UPNIVEL1: record.CD_UPNIVEL1,
    	CD_FORNEC: record.CD_FORNEC,
    	QT_LIQUIDO: record.QT_LIQUIDO,
        noResults: false
    });
}

var myTable = FLUIGC.datatable('#talhoes', {
    dataRequest: mydata,
    renderContent: ['INSTANCIA', 'DT_MOVIMENTO', 'CD_UPNIVEL1', 'CD_FORNEC', 'QT_LIQUIDO'], //Coloca as Colunas do DATASET
    header: [ //Nome das Colunas
        {'title': 'INSTANCIA'},
        {'title': 'DATA MOVIMENTO'},
        {'title': 'TALHÃO'},
        {'title': 'COD. FORNECEDOR'},
        {'title': 'TONELADAS'}
    ]
}, function(err, data) {
    // DO SOMETHING (error or success) //Pode por uma mensagem de erro
});
</script>
```

Assim eu resolvi meu problema com DATATABLE

---
