# Como Criar campo zoom passando valores em constraints

> **Fonte:** [https://fluiggers.com.br/t/como-criar-campo-zoom-passando-valores-em-constraints/2831](https://fluiggers.com.br/t/como-criar-campo-zoom-passando-valores-em-constraints/2831)
> **Categoria:** Formulários
> **Tags:** `zoom`
> **Criado em:** 03/06/2024, 08:57
> **Visualizações:** 535 | **Likes:** 3 | **Respostas:** 8

---

## Pergunta original

**Juares** (@JuarezMarques) — 03/06/2024, 08:57

Como Criar campo zoom passando valores em constraints

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 03/06/2024, 09:25

Olá.

Tenta explicar um pouco melhor a sua necessidade.

Criar, on the fly, um campo no formulário não dá muito certo. Mas ter um zoom oculto, exibir no momento certo e trocar seus filtros é possível.

---

## Resposta #2

**Juares** (@JuarezMarques) — 04/06/2024, 09:02

Tenho um select que passo duas constraints para o dataset e ele me devolve os resultados, queria de alguma forma fazer isso com o zoom.

Atualmente uso essa função

```
function carregarSelect() {
    var coligada = $("#CODCOLIGADA").val();
    var secao = $("#CODSECAO").val();

    var constraints = [];
    if (coligada) {
        constraints.push(DatasetFactory.createConstraint("coligada", coligada, coligada, ConstraintType.MUST));
    }
    if (secao) {
        constraints.push(DatasetFactory.createConstraint("secao", secao, secao, ConstraintType.MUST));
    }

    // Salvar o valor selecionado antes de limpar o select
    var selectedValue = $("#inputFUNCAO").val();

    // Chama o dataset para buscar os dados
    DatasetFactory.getDataset("meuDS", null, constraints, null, {
        success: function(data) {
            var select = $("#inputFUNCAO");
            select.empty();
            select.append('<option value="">Selecione uma função</option>');

            // Popula o select com os dados retornados
            for (var i = 0; i < data.values.length; i++) {
                var funcao = data.values[i];
                select.append('<option value="' + funcao.CODFUNCAO + '">' + funcao.NOME + '</option>');
            }

            // Define o valor selecionado novamente
            select.val(selectedValue);
        },
        error: function(err) {
            console.error("Erro ao buscar dados do dataset:", err);
        }
    });


}
```

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/06/2024, 10:17 | ❤️ 1

Um zoom simples seria assim:

```html
<input type="zoom" class="form-control" id="exemplo" name="exemplo" data-zoom="{
    'datasetId':'exemploDs',
    'displayKey':'exemplo_campo',
    'maximumSelectionLength':'1',
    'placeholder':'Um Simples exemplo',
    'fields':[
        {
            'field':'exemplo_campo',
            'label':'Nome do Exemplo',
            'standard':'true'
        }
    ]
}">
```

Se quiser você já pode chamar o dataset passando filtros pra ele, que chegarão como constraints no dataset:

```html
<input type="zoom" class="form-control" id="exemplo" name="exemplo" data-zoom="{
    'datasetId':'exemploDs',
    'filterValues':'ATIVO,1',
    'displayKey':'exemplo_campo',
    'maximumSelectionLength':'1',
    'placeholder':'Um Simples exemplo',
    'fields':[
        {
            'field':'exemplo_campo',
            'label':'Nome do Exemplo',
            'standard':'true'
        }
    ]
}">
```

No exemplo acima estou chamando o Dataset passando a Constraint com nome **ATIVO** e valor 1.

E você pode, no JS, alterar esse filtro e recarregar os valores. Normalmente faço isso após o usuário interagir com algum outro campo do formulário, mas se quiser fazer isso ao carregar a página é necessário dar um tempo para que o Fluig consiga carregar o Zoom antes.

Um exemplo de como faria isso:

```javascript
// Função para recarregar o zoom com os valores corretos
function carregaFiltroDataset() {
    // Caso ainda não tenha o zoom carregado aguarde mais 200 ms
    if (!window["exemplo"]) {
        setTimeout(carregaFiltroDataset, 200);
        return;
    }

    const filtros = [];

    const codColigada = $("#CODCOLIGADA").val();
    const codSecao = $("#CODSECAO").val();

    if (codColigada) {
        filtros.push("coligada", codColigada);
    }

    if (codSecao) {
        filtros.push("secao", codSecao);
    }

    if (!filtros.length) {
        return;
    }

    window["exemplo"].clear();
    reloadZoomFilterValues("exemplo", filtros.join(","));
}

// Chama a função 300ms após o DOM carregar
$(() => carregaFiltroDataset, 300);
```

Você só precisa se preocupar com a lógica do carregamento inicial.

Se ao declarar o zoom não colocar nenhum filtro inicial o Fluig trará todos os resultados do Dataset, então se não for comportamento desejado teria que trabalhar esse detalhe passando um filtro que impeça esse carregamento inicial. Mas como o CODCOLIGADA e CODSECAO parecem ser opcionais não teria problema com isso.

---

## Resposta #4

**Juares** (@JuarezMarques) — 04/06/2024, 10:27

Muito Obrigado, irei testar essa semana
na verdade o constraint eh obrigatório, caso nao passe ele não traz nada.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 04/06/2024, 11:14

Ótimo, assim não tem perigo de ficar trazendo dados desnecessários logo no início.

E também dá pra melhorar a função pra só recarregar o dataset se houver os valores.

Vou editar pra deixar um if já validando isso.

---

## Resposta #6

**Juares** (@JuarezMarques) — 04/06/2024, 14:26

Dessa forma ja deu certo também, muito obrigado pelo auxilio.

---

## Resposta #7

**Danillo Nogueira ** (@Danillo_Nogueira) — 23/01/2025, 14:01

[@Bruno\_Gasparetto](/u/bruno_gasparetto) boa tarde!

Estou tentando seguir este último exemplo passado, mas não tive sucesso ainda.

Tenho um formulário, onde no cabeçalho dele é informado o cnpj do fornecedor e no final do formulário, é informado as informações bancarias dele, onde tem o zoom ChavePix, eu preciso que no momento que eu clicar no zoom ele já retorna meu dataset filtrando as chaves pix cadastradas para o fornecedor.

Este aqui é meu campo ZOOM no html:

```
<div id="campoChavePix" style="display: none;">
          <div class="col-md-6">
            <label for="ChavePix">Chave Pix<font color="red"><strong>*</strong></font></label>
            <input type="zoom"
                   class="form-control"
                   name="ChavePix"
                   id="ChavePix"
                   maxlength="100"
                   data-zoom="{
                     'displayKey': 'f72_chvpix',
                     'datasetId': 'ds_ConsultaChavePixF72',
                     'fields': [
                      {
                         'field': 'f72_chvpix',
                         'label': 'Chave Pix',
                         'standard': true,
                         'search': 'true'
                      },{
                        'field':'a2_cgc',
                        'label':'Fornecedor',
                        'standard': true
                      }]
                   }">
          </div>
        </div>
```

Esta é minha função JS (custom.js):

function carregaFiltroDataset() {
// Caso ainda não tenha o zoom carregado aguarde mais 200 ms
if (!window\[“ChavePix”\]) {
setTimeout(carregaFiltroDataset, 200);
return;
}

```
const filtros = [];

const FornecedorCnPj = $("#CNPJFornecedor").val().replaceAll(".", "").replace("/", "").replace("-", "");

if (FornecedorCnPj) {
    filtros.push("a2_cgc", FornecedorCnPj);
}

if (!filtros.length) {
    return;
}

window["ChavePix"].clear();
console.log("FornecedorCnPj: "+FornecedorCnPj);
console.log("filtros.join(): "+filtros.join(",")); // filtros.join(): a2_cgc,00111458000118
reloadZoomFilterValues("ChavePix", filtros.join(","));
```

}

eu tentei chamar ela assim:

$(document).ready(function () {
carregaFiltroDataset(); // Chama a função após 300ms
});

Porem, não está funcionando!

---

## Resposta #8

**Danillo Nogueira ** (@Danillo_Nogueira) — 23/01/2025, 14:03

Este é meu dataset ds\_ConsultaChavePixF72:

ele esta funcionando corretamente!

function createDataset(fields, constraints, sortFields) {

```
var CNPJFornecedor = null;
//var CNPJFornecedor = "00111458000118";

//Cria as colunas
var dataset = DatasetBuilder.newDataset();

dataset.addColumn("CNPJFornecedor");
dataset.addColumn("status");

dataset.addColumn("f72_filial");
dataset.addColumn("f72_cod");
dataset.addColumn("f72_loja");
dataset.addColumn("a2_cgc");
dataset.addColumn("f72_tpchv");
dataset.addColumn("f72_chvpix");
dataset.addColumn("f72_active");

if (constraints != null) {
    for (var i = 0; i < constraints.length; i++) {

        if (constraints[i].fieldName == "CNPJFornecedor") {
            CNPJFornecedor = constraints[i].initialValue;
        }

    }
}
log.info("Danillo 6.3 : "+CNPJFornecedor);

if ( CNPJFornecedor != null) {

    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
        companyId: getValue("WKCompany") + '',
        serviceCode: 'API_Protheus_Prod',
        endpoint: "/api/framework/v1/genericQuery?FromQry=F72010%20F72%20INNER%20JOIN%20SA2010%20SA2%20ON%20SA2.A2_COD%20%3D%20F72.F72_COD%20AND%20SA2.A2_LOJA%20%3D%20F72.F72_LOJA%20AND%20SA2.D_E_L_E_T_%20%3D%20'%20'&tables=F72,SA2&fields=F72_FILIAL,%20F72_COD,%20F72_LOJA,%20A2_CGC,%20F72_TPCHV,%20F72_CHVPIX,%20F72_ACTIVE&pageSize=99&page=1&where=F72.D_E_L_E_T_%20%3D%20'%20'%20AND%20SA2.A2_CGC%20%3D%20'"+CNPJFornecedor+"'",
        method: 'get',
        timeoutService: '200' // segundos
    }

    var vo = clientService.invoke(JSON.stringify(data));
    var ret = JSON.parse(vo.getResult());
    log.info("Danillo PIX : "+ vo);
    log.info("Danillo PIX.1 : "+ ret);

    log.info(">>>R if (vo.getResult() == null || vo.getResult().isEmpty()) {");

    if (ret.items.length > 0) {
        for (var i = 0; i < ret.items.length; i++) {
            dataset.addRow(new Array(
                CNPJFornecedor,
                "OK",
                ret.items[i]["f72_filial"],
                ret.items[i]["f72_cod"],
                ret.items[i]["f72_loja"],
                ret.items[i]["a2_cgc"],
                ret.items[i]["f72_tpchv"],
                ret.items[i]["f72_chvpix"],
                ret.items[i]["f72_active"]
            ));
        }
    }else{

        dataset.addRow(new Array(
            CNPJFornecedor,
           "Chave Pix Não cadastrada."
        ));

    }


    log.info(vo.getResult());


} else {
    var clientService = fluigAPI.getAuthorizeClientService();
    var data = {
        companyId: getValue("WKCompany") + '',
        serviceCode: 'API_Protheus_Prod',
        endpoint: "/api/framework/v1/genericQuery?FromQry=F72010%20F72%20INNER%20JOIN%20SA2010%20SA2%20ON%20SA2.A2_COD%20%3D%20F72.F72_COD%20AND%20SA2.A2_LOJA%20%3D%20F72.F72_LOJA%20AND%20SA2.D_E_L_E_T_%20%3D%20'%20'&tables=F72,SA2&fields=F72_FILIAL,%20F72_COD,%20F72_LOJA,%20A2_CGC,%20F72_TPCHV,%20F72_CHVPIX,%20F72_ACTIVE&pageSize=99&page=1&where=F72.D_E_L_E_T_%20%3D%20'%20'",
        method: 'get',
        timeoutService: '200' // segundos
    }

    var vo = clientService.invoke(JSON.stringify(data));
    var ret = JSON.parse(vo.getResult());
    log.info("Danillo PIX : "+ vo);
    log.info("Danillo PIX.1 : "+ ret);

    log.info(">>>R if (vo.getResult() == null || vo.getResult().isEmpty()) {");

    if (ret.items.length > 0) {
        for (var i = 0; i < ret.items.length; i++) {
            dataset.addRow(new Array(
                CNPJFornecedor,
                "OK",
                ret.items[i]["f72_filial"],
                ret.items[i]["f72_cod"],
                ret.items[i]["f72_loja"],
                ret.items[i]["a2_cgc"],
                ret.items[i]["f72_tpchv"],
                ret.items[i]["f72_chvpix"],
                ret.items[i]["f72_active"]
            ));
        }
    }else{

        dataset.addRow(new Array(
            CNPJFornecedor,
           "Chave Pix Não cadastrada."
        ));

    }


    log.info(vo.getResult());
}


return dataset
```

}

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/01/2025, 23:10

[@Danillo\_Nogueira](/u/danillo_nogueira) , quando você diz que no cabeçalho é informado o CNPJ do fornecedor isso já vem preenchido de outra etapa ou pelo evento displayFields (por exemplo) ou o CNPJ é fornecido nesta mesma etapa que precisa exibir o zoom?

Se ele for fornecido nesta mesma etapa aí não teria como carregar automatico o filtro. Aí você precisaria fazer um evento que ao terminar de preencher o campo CNPJ faça o reload do zoom com os filtros.

Mas se o formulário já é carregado com o CNPJ funcionaria essa técnica que dei de exemplo.

Uma coisa que gosto de fazer com datasets que serão utilizados para zoom e que precisam de algum filtro é trazer ele vazio se não for passada uma constraint. Assim evito fazer uma consulta que pode trazer coisa demais a toa.

```javascript
function createDataset(fields, constraints, sorts) {
    var dataset = DatasetBuilder.newDataset();

    dataset.addColumn("documentid");
    dataset.addColumn("nome");
    dataset.addColumn("cpf");

    if (constraints == null || !constraints.length) {
        return dataset;
    }

    // continua a construção do dataset
```

Você também já pode começar o zoom com um filtro que vai retornar 0 resultados.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/4/41356227e7516b0abd21da7d9de089b4eb95134c_2_690x323.png)

No seu zoom você colocou dois itens como `standard`. Sinceramente não sei se isso é válido ou se influencia em algo.

Dá pra reduzir algumas coisas do seu JS do formulário pra recarregar o zoom. Tenta isso e vamos ver o resultado:

```javascript
function carregaFiltroDataset() {
    // Caso ainda não tenha o zoom carregado aguarde mais 200 ms
    if (!window["ChavePix"]) {
        setTimeout(carregaFiltroDataset, 200);
        return;
    }

    window["ChavePix"].clear();

    // Remove tudo que não for número
    const FornecedorCnPj = $("#CNPJFornecedor").val().replace(/\D/g, '');

    if (!FornecedorCnPj.length) {
        return;
    }

    // Só tem 1 filtro, então não precisa fazer aquele trabalho de jogar tudo num array, pode usar direto
    reloadZoomFilterValues("ChavePix", `a2_cgc,${FornecedorCnPj}`);
}

// Isso é um atalho pro $(document).ready(fn)
$(carregaFiltroDataset);
```

Mas se o CNPJ não vem preenchido no formulário não adianta nada ter essa função de colocar o filtro logo após o formulário carregar.

Aí você teria que colocar um evento `onChange` no campo CNPJ que executa o `window["ChavePix"].clear()` e então chama a `reloadZoomFilterValues` com o valor informado no campo CNPJ.

---

## Resposta #10

**Danillo Nogueira ** (@Danillo_Nogueira) — 24/01/2025, 09:34

Bom Dia [@Bruno\_Gasparetto](/u/bruno_gasparetto) ! obrigado pela ajuda!

Então, cabeçalho que eu quis dizer que é um dos primeiros campos que o usuário informa. No início do formulário!

O usuário inicia o formulário, primeira informação a preencher é a filial e o segundo é o cnpj do fornecedor.

![print1](https://fluiggers.com.br/uploads/default/optimized/2X/a/a3506160afb63d926815dc7b582c9af52904bf0d_2_500x500.gif)

No formulário tem vários painéis, Painel Dados de pedido de compra, painel dados de nota fiscais e painel dados financeiro, no painel de dados financeiro é onde está o meu campo input do tipo zoom (ChavePix).
![Print2](https://fluiggers.com.br/uploads/default/optimized/2X/3/3f8451c2d34e430faa85e78b43d7ae823194cbf9_2_500x500.gif)

Ai o que eu preciso é que quando o usuario clicar no Zoom, já carregue meu dataset ds\_ConsultaChavePixF72 filtrando pelo CNPJ informado lá em cima ( campo: $(“#CNPJFornecedor”))

E assim, retornando somente as chaves pix cadastradas para o CNPJ informado.

Sobre o OnChange:

Eu fiz algumas tentativas, agora por último fiz assim:

![Print3](https://fluiggers.com.br/uploads/default/optimized/2X/3/373c7ddc58a3b75e4cd238ef0ed7f6dc232ad81b_2_500x500.gif)

Coloquei o OnChange no Forma de Pagamento, onde ao selecionar a opção PIX, ele dispara a função abaixo:

function filtroZoomTeste() {

```
var FornecedorCnPj = $("#CNPJFornecedor").val().replaceAll(".", "").replace("/", "").replace("-", "");
    if(FornecedorCnPj.length > 0) {
        console.log("${CNPJFornecedor}: "+`a2_cgc,${FornecedorCnPj}`);
        window["ChavePix"].clear();
        reloadZoomFilterValues("ChavePix", `a2_cgc,${FornecedorCnPj}`);
    }
```

}

HTML:

Forma de Pagamento**\*** Selecione Boleto Transferência PIX

Console.log:

![Design sem nome (5)](https://fluiggers.com.br/uploads/default/optimized/2X/c/ca4679f3aa9dde5efb0e4277db98da066f618f3e_2_500x500.gif)

Não filtrou:
![Print5](https://fluiggers.com.br/uploads/default/optimized/2X/a/a6afa7e97e787c82418bf978db2b573ba178a93d_2_500x500.gif)

Sobre a orientação da construção do DataSet, eu vou ajustar ele hoje!

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/01/2025, 10:46

[@Danillo\_Nogueira](/u/danillo_nogueira) , como você não postou os códigos usando a formatação do fórum, ele ficou ruim de ler e com isso eu não tinha percebido algo.

O seu dataset recebe a constraint com o nome (fieldName) `CNPJFornecedor`, enquanto que no JS do formulário está passando a constraint com o nome `a2_cgc`.

Então troque seu reloadZoomFilterValues para:

```javascript
reloadZoomFilterValues("ChavePix", `CNPJFornecedor,${FornecedorCnPj}`);
```

---

## Resposta #12

**Danillo Nogueira ** (@Danillo_Nogueira) — 24/01/2025, 11:06 | ❤️ 2

Show de bola! Funcionou certinho! matou o Problema kkk

Obrigado [@Bruno\_Gasparetto](/u/bruno_gasparetto) !

---
