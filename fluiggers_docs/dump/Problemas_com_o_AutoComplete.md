# Problemas com o AutoComplete

> **Fonte:** [https://fluiggers.com.br/t/problemas-com-o-autocomplete/3370](https://fluiggers.com.br/t/problemas-com-o-autocomplete/3370)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 07/08/2025, 14:48
> **Visualizações:** 38 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Henrique Maia Cardosa** (@Henrique_Maia_Cardos) — 07/08/2025, 14:48

Boa tarde, alguém poderia me ajudar?

Seguinte, eu tenho um campo do tipo texto.

Nesse input o usuário irá preencher um fabricante que exista no dataset da empresa, e nesse input tem um gatilho que mostra uma lista com 10 fabricantes a partir do quarto digito.

Por esse motivo estou tentando usar o autocomplete, porém estou com problemas:

O primeiro é que se eu não utilizar a função **function substringMatcher()**, ele não mostra a lista, mas se olhar no console do navegador está sendo puxado os fornecedores.

O outro problema é utilizando a função , dessa forma ele mostra os fornecedores que foram puxados do dataset, porém ele cria uma lista fixa, por exemplo, eu digito um fornecedor, ele puxa no dataset os fornecedores e mostra a lista, porém essa lista não muda caso eu tente digitar outro fornecedor, é mostrado apenas os 10 primeiros fornecedores que foram buscados independente do que foi digitado no campo do fornecedor, coisa que não ocorre quando não utilizo a função

Abaixo segue o código utilizado:

```auto
> function autoCompleteFabricante(campo) {
>     var valorDigitado = campo.value;
>     console.log("valor digitado:", valorDigitado);
>
>     if (valorDigitado.length > 3) {
>
>         var c1 = DatasetFactory.createConstraint("nome", valorDigitado, valorDigitado, ConstraintType.MUST);
>         var c2 = DatasetFactory.createConstraint("reduzFiltro", "sim", "sim", ConstraintType.MUST);
>
>
>         var dataset = DatasetFactory.getDataset("DS_Fornecedores", null, [c1, c2], null);
>
>
>         if (dataset && dataset.values && dataset.values.length > 0) {
>             var listaFabricantes = [];
>             console.log("puxando lista? " + listaFabricantes)
>
>
>             for (var i = 0; i < dataset.values.length; i++) {
>             	console.log("nome do fabricante", dataset.values[i]["A2_NREDUZ"]);
>                 listaFabricantes.push({
>                     description: dataset.values[i]["A2_NREDUZ"],
>                     value: dataset.values[i]["A2_NREDUZ"],
>                     ZJQ_DESC: dataset.values[i]["ZJQ_DESC"]
>                 });
>             }
>             console.log("ds " + dataset)
> 	        console.log("filtro " + c1)
> 	        console.log("filtro " + c2)
>
>             FLUIGC.autocomplete('#fabricante', {
>                 source: substringMatcher(listaFabricantes),
>                 name: 'fabricantes',
>                 displayKey: 'description',
>                 type: 'autocomplete'
>             });
>         }
>     }
> }
>
> function substringMatcher(lista) {
>     return function findMatches(q, cb) {
>         var matches = [];
>         var substrRegex = new RegExp(q, 'i');
>
>         $.each(lista, function (i, item) {
>             if (substrRegex.test(item.description)) {
>                 matches.push(item);
>             }
>         });
>
>         cb(matches);
>     };
> }
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/08/2025, 16:29

Você está usando isso num formulário? Se sim, por qual motivo optou pelo AutoComplete ao invés do Zoom?

Em formulário o Zoom fica mais fácil de usar, justamente por exigir menos configuração. Por padrão ele limita trazer 300 resultados, mas dá pra diminuir pra retornar menos ainda.

AutoComplete acho mais útil em widgets ou pensando em tags e outras coisas em formulário. E mesmo assim, em widgets, eu prefiro usar alguma ferramenta melhor (tipo a Select2) do que essa do Fluig que é bem limitada.

De qualquer jeito não entendi a sua lógica. Você está fazendo uma consulta num dataset, filtrando por um valor específico no nome e então faz um autocomplete em cima desses valores que já foram enviados. Mas no Dataset você passa a constraint no campo `nome`, enquanto que no filtro da autocomplete você testa o campo `A2_NREDUZ`. Ficou muito confuso pra mim.

Como você está procurando em um Dataset recomendo apontar o autocomplete direto pra API de Dataset.

Algo assim:

```javascript
const datasetId = "DS_Fornecedores";
const filterFields = "reduzFiltro,sim"; // vi essa constraint, mas não sei o que é
const resultFields = "A2_NREDUZ";
const searchField = "A2_NREDUZ"; // supondo você pesquisa por esse campo

FLUIGC.autocomplete("#fabricante", {
    source: {
        url: `/api/public/ecm/dataset/search?datasetId=${datasetId}&resultFields=${resultFields}&filterFields=${filterFields}&searchField=${searchField}&`,
        contentType: "application/json",
        root: "content",
        pattern: "",
        limit: 10,
        offset: 0,
        patternKey: "searchValue",
        limitkey: "limit",
        offsetKey: "offset"
    },
    displayKey: "A2_NREDUZ",
    minLength: 4,
    multiSelect: false,
    style: {
        autocompleteTagClass: "tag-gray",
        tableSelectedLineClass: "info"
    },
    table: {
        header: [
            {
                "title": "Nome",
                "size": "col-xs-12",
                "dataorder": "A2_NREDUZ",
                "standard": true
            }
        ],
        renderContent: ["A2_NREDUZ"]
    }
});
```

---
