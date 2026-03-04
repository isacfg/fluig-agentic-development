# Como criar uma widget para mostrar dados de apenas 1 processo

> **Fonte:** [https://fluiggers.com.br/t/como-criar-uma-widget-para-mostrar-dados-de-apenas-1-processo/1434](https://fluiggers.com.br/t/como-criar-uma-widget-para-mostrar-dados-de-apenas-1-processo/1434)
> **Categoria:** Widgets
> **Criado em:** 26/10/2022, 10:39
> **Visualizações:** 995 | **Likes:** 2 | **Respostas:** 8

---

## Pergunta original

**Delcleciano Junior** (@Delcleciano) — 26/10/2022, 10:39

Consultando a central de tarefas conseguimos fazer isso, filtrando pelo nome do processo, e se eu precisasse mostrar os dados desse processo já filtrados, dentro de uma widget? Alguém já construiu algo do tipo? Existe algum material? Pois olhei na documentação e tem apenas como criar um olá mundo na Widget.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 27/10/2022, 08:22 | ❤️ 1

É so chamar o dadaset de processos filtranado pelo codigo do processo.
dai exibir em um datatable

---

## Resposta #2

**Delcleciano Junior** (@Delcleciano) — 27/10/2022, 08:39

Bom dia Daniel consegui fazer uma parte do que eu precisava, mas agora preciso mostrar apenas um processo desses processos que eu busquei.

abaixo esta o html e o js que eu fiz

HTML

```auto
<select class="form-control" name="select_processos" id="select_processos" dataset="processDefinition" datasetkey="processDescription" datasetvalue="processDescription" addBlankLine=”true”></select>
```

JS

```auto
retornaProcesso: function(){

        $("#select_processos option").filter(function() {
            $(this).text() == 'aumento_salario' ? "true" : "false" ;
       }).prop("selected", true);

        var meuSelect = $('#select_processos');
        var dataSet = DatasetFactory.getDataset("processDefinition", null, null, null);
        console.log(meuSelect);
        console.log("Mostrando o que tem no dataset");
        console.log(dataSet);
        console.log("Mostrando o dataset.values");
        console.log(dataSet.values);

        for (var i in dataSet.values){
            meuSelect.append($('<option>',{
                value: dataSet.values[i].processDescription,
                text: dataSet.values[i].processDescription
            }));
        }
    },
```

Você sabe como posso fazer isso?

---

## Resposta #3

**Delcleciano Junior** (@Delcleciano) — 27/10/2022, 09:55

Consegui fazer o que eu precisava utilizando constraints, nas constraints coloquei o nome dos processos que eu queria que mostrasse no select.

Mas agora preciso arranjar uma forma que quando eu clicar em uma opção me mostre as informações desse processo, como numero da solicitação, status das solicitações, a pessoa que iniciou, e tem um campo que o solicitante preenche que é o funcionário, esse campo é um input que o solicitante preenche colocando o nome de um funcionário, preciso mostrar isso no widget também.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/10/2022, 11:00

Você pode pesquisar o dataset `workflowProcess` passando o processo na constraint no campo `processId` para trazer tudo que foi aberto pra esse processo.

![Captura de tela 2022-10-31 095410](https://fluiggers.com.br/uploads/default/optimized/1X/16a76798b52f9830b646e1b6782ed80d5588882e_2_690x289.jpeg)

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/10/2022, 11:22

Quanto à widget nada mais é do que criar a view.ftl, que é um sistema de templates pra gerar html, e de resto é tudo programação front-end com JS.

Você precisa definir algum evento (no JavaScript) que vai chamar o dataset que retorna as solicitações do processo (pegando do select que vc criou) e então o resultado você exibe de alguma forma (pode ser uma tabela, lista etc). Mas é puramente programação web de front (HTML + CSS + JS). Acho que por isso a TOTVS acabou não especificando muito no manual.

Pra aprender mais sobre o FreeMarker (o .ftl que é o template) dá pra olhar a documentação oficial [https://freemarker.apache.org/](https://freemarker.apache.org/)

Mas o template, dependendo do quanto a sua widget for dinâmica, vai conter só o básico mesmo.

Exemplo da view.ftl de uma widget que temos (é o arquivo inteiro no print):

![Captura de tela 2022-10-31 102012](https://fluiggers.com.br/uploads/default/optimized/1X/8693930d68573bf206d65345fdddaf44a881f18e_2_690x189.jpeg)

---

## Resposta #6

**Delcleciano Junior** (@Delcleciano) — 31/10/2022, 16:25

Boa Tarde mano, tentei fazer aqui mas não obtive muito sucesso, agora consigo vê o numero das solicitações e outros dados mas não consigo retornar o numero das solicitações fica dando undefined na variavel ds, e por não conseguir isso, não vou conseguir jogar o numero das solicitações dentro do Widget

Olha como fiz no código js abaixo

```auto
var processo = "aumento_Salario";
var c1 = DatasetFactory.createConstraint("processId", processo, processo, ConstraintType.MUST);
var arrayProcesso = new Array(c1);
var dataset = DatasetFactory.getDataset("workflowProcess", null, arrayProcesso, null);

console.log("Mostrando o Dataset");
console.log(dataset);

var restricoesTask = [];

for (var i in dataset.values) {
  var registro = dataset.values[i];
  var cTask = DatasetFactory.createConstraint("processTaskPK.processInstanceId", registro['workflowProcessPK.processInstanceId'], registro['workflowProcessPK.processInstanceId'], ConstraintType.SHOULD);
  restricoesTask.push(cTask);
}

var ds = DatasetFactory.getDataset("processTask", null, [restricoesTask], null);
console.log("Dataset que retorna o numero das solicitações veja todas essas solicitações abaixo");

console.log(ds);
```

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/10/2022, 16:46

Você viu o que o dataset `workflowProcess` retorna? Ele já é o número das solicitações.

O dataset `processTask` retorna as atividades (tarefas) da solicitação. Ele traz todas as atividades que foram executadas naquela solicitação.

Tem que ver o que realmente você pretende exibir.

E dica, não use no front-end a função `DatasetFactory.getDataset` de forma síncrona. Ao menos eu sempre tive uma péssima experiência com ela. Prefira a versão assíncrona.

Eu prefiro fazer um wrapper nela pra trabalhar com promises (exemplo: [Funções auxiliares para requisições no TOTVS Fluig Platform. Recomendo criar uma Widget somente para ter os arquivos disponibilizados no próprio Fluig e então adicionar nos formulários e demais widgets quando necessário. · GitHub](https://gist.github.com/brunogasparetto/278d1ad433c392e4a0eafe512017c858)). Acho muito mais fácil.

---

## Resposta #8

**Delcleciano Junior** (@Delcleciano) — 31/10/2022, 16:49

Entendi, eu descobri o erro aqui, coloquei restricoesTask dentro de uma array, outra duvida eu tenho o numero das solicitações ali mas queria saber como distribuir elas dentro do widget , mas estou perdido, ae por isso saio colocando retorno de dataset em outros datasets

---

## Resposta #9

**Delcleciano Junior** (@Delcleciano) — 31/10/2022, 16:56

```auto
var processo = "aumento_Salario";
        var c1 = DatasetFactory.createConstraint("processId", processo, processo, ConstraintType.MUST);
        var arrayProcesso = new Array(c1);
        var dataset = DatasetFactory.getDataset("workflowProcess", null, arrayProcesso, null);

        console.log("Mostrando o Dataset");
        console.log(dataset);
```

Só isso daqui já me mostra o numero do dataset , mas eu preciso tirar elas da coluna que elas aparecem e jogar elas todas dentro de uma div do widget, eu preciso fazer isso mas não sei como, lembrando que esse codigo esta dentro de uma função do widget, depois criei uma div no view.ftl pra poder puxar o numero das solicitações.

---

## Resposta #10 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 31/10/2022, 17:41 | ❤️ 1

Acho que algo assim funcione:

```javascript
let solicitacoes = [];

for (let solicitacao of dataset.values) {
    solicitacoes.push(`<p>Solicitação: ${solicitacao["workflowProcessPK.processInstanceId"]}</p>`);
}

$("#id_da_div").append(solicitacoes)
```

Mas como eu disse, isso é programação web front-end (HTML + CSS + JS), não é específico do Fluig.

Pra desenvolver formulário e Widget (e layout) precisa estudar programação. E conhecer a JQuery é uma boa, já que o Fluig a utiliza e ela facilita bastante a interação com o DOM.

---

## Resposta #11

**Delcleciano Junior** (@Delcleciano) — 31/10/2022, 17:53

Nuuuu valeu mano, agora deu certo, estou conseguindo vê o numero das solicitações do processo que eu filtrei.

Muito obrigado.

---
