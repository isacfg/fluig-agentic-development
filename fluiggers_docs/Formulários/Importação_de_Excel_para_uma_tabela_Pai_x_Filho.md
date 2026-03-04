# Importação de Excel para uma tabela Pai x Filho

> **Fonte:** [https://fluiggers.com.br/t/importacao-de-excel-para-uma-tabela-pai-x-filho/2652](https://fluiggers.com.br/t/importacao-de-excel-para-uma-tabela-pai-x-filho/2652)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 16/03/2024, 23:26
> **Visualizações:** 191 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Rafael Luz** (@Rafael_Luz) — 16/03/2024, 23:26

Caros(as), Alguem ja realizou a importação de uma planilha excel para um tabela pai x filho?

Teriam algum exemplo de como poderia fazer isso ?

---

## Resposta #1

**Pablo Valle** (@pablooav) — 22/03/2024, 18:10 | ❤️ 2

Vamos lá, você pode utilizar a biblioteca XLSX pra realizar a leitura de um excel e transforma-lo em JSON, ficaria desta forma:

No seu HTML terá que adicionar a importação da biblioteca e adicionar um input do tipo FILE:

```auto
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.0/xlsx.full.min.js"></script>

<input name="uploadFile" id="uploadFile" type="file" class="form-control">
```

E no seu javascript, irá chamar dessa forma:

```auto
$('#uploadFile').on('change', (event) => {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (onLoadEvent) {

    var planilha = XLSX.read(onLoadEvent.target.result, {
      type: 'binary'
    });

    var json = {}
    planilha.SheetNames.forEach(function (abaPlanilha) {
      var info = XLSX.utils.sheet_to_row_object_array(planilha.Sheets[abaPlanilha]);
      if (info.length > 0) json[abaPlanilha] = info;
    });

    console.log(json)
    //Seu código aqui


  };
  reader.readAsBinaryString(file);
})
```

Com isso você terá um JSON contendo as linhas e colunas de todas abas da sua planilha, com isso você pode criar uma repetição no array e adicionar uma linha pai-filho para cada item e realizar a tratativa que desejar

---
