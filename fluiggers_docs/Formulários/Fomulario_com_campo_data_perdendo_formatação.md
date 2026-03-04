# Fomulario com campo data perdendo formatação

> **Fonte:** [https://fluiggers.com.br/t/fomulario-com-campo-data-perdendo-formatacao/1942](https://fluiggers.com.br/t/fomulario-com-campo-data-perdendo-formatacao/1942)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`
> **Criado em:** 05/06/2023, 14:56
> **Visualizações:** 898 | **Likes:** 0 | **Respostas:** 7

---

## Pergunta original

**Caio Mario** (@Caio_Mario) — 05/06/2023, 14:56

Boa tarde,

quando eu realizo um processo com dois campos de data em formato date. ele informa normalmente as datas. mas quando salvo. ela fica em formato ano/mes/dia perdendo o formato inicial.

```auto
<div class="grid-4-12">
				    <label for="dt_emissao">Data de Emissão</label>
				    <input
				        type="date"
				        style="font-size: 18px;"
				        class="form-control date-input"
				        name="dt_emissao"
				        id="dt_emissao"
				        onchange="dateValidation(this);" />
				</div>

				<div class="grid-4-12">
				    <label for="dt_vencimento">Data de Vencimento&nbsp;</label>
				    <input
				        type="date"
				        style="font-size: 18px;"
				        class="form-control date-input"
				        name="dt_vencimento"
				        id="dt_vencimento"
				        onchange="dateValidation(this);" />
				</div>
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/06/2023, 09:24

O Fluig faz umas “mágicas” com data e ainda tem o problema do navegador.

Alguns navegadores informam a data no formato ISO, enquanto outros colocam no formato PT-BR, já é o primeiro problema.

Aí tem algum outro problema que o Fluig deve ter alguma identificação de nome de campo com dt\_ ou data\_ e aí pode mudar as coisas mais ainda.

Uma recomendação da própria documentação é utilizar o evento `inputFields` para tratar os campos de data e assim armazenar do jeito desejado.

Exemplo que utilizo num formulário aqui:

```javascript
/**
 * Evento para formatar dados antes de inseridos no sistema
 *
 * @param {FormController} form
 */
function inputFields(form) {
    // Salva Data de Validade no Format ISO para melhor consulta
    var dataPartes = form.getValue("dt_validade").split("/");
    form.setValue(
        "dt_validade_iso",
        dataPartes[2] + "-" + dataPartes[1] + "-" + dataPartes[0]
    );
}
```

---

## Resposta #2

**Caio Mario** (@Caio_Mario) — 06/06/2023, 13:03

boa tarde bruno! essa função no formulário você usa na custom mesmo?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/06/2023, 13:56

Não. É um evento de formulário que acontece no back-end.

Se não me engano, no Eclipse, precisa criar um novo script indicando que é evento de formulário, selecionar o evento inputFields e então indicar o formulário do evento.

---

## Resposta #4

**Caio Mario** (@Caio_Mario) — 06/06/2023, 14:20

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > ```auto
> > function inputFields(form) {
> >     // Salva Data de Validade no Format ISO para melhor consulta
> >     var dataPartes = form.getValue("dt_validade").split("/");
> >     form.setValue(
> >         "dt_validade_iso",
> >         dataPartes[2] + "-" + dataPartes[1] + "-" + dataPartes[0]
> >     );
> > }
> > ```

mesmo mexendo no input fields o campo quando salva se perde na proxima etapa. faz a inversão. estou tentando ainda no input fields uma solução.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/3195a030cfcb26d50774336e1dca09025cc45ee0_2_690x134.png)

![image](https://fluiggers.com.br/uploads/default/original/1X/1fdd9502c698a91a4baa288a39166d401e5991ce.png)

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/06/2023, 14:53

Então, mas o navegador utilizado por padrão exibe a data em pt-br ou iso?

Aqui acabo evitando usar o tipo date justamente pra não ter problema de navegador. Deixo como text e utilizo o Calendar do Fluig pra fazer a seleção da data.

---

## Resposta #6

**Allan Reichert** (@allan.reichert) — 06/06/2023, 16:43

Olá,

Montei esta função utilizando a função nativa de calendário do fluig junto com o iMask. Espero que ajude:

utilizo o campo do tipo text e chamo no script.js

//------------------------------------------------------------------------------------
mascaraData(‘dt\_emissao’)

//função mascara para data
//[https://imask.js.org/](https://imask.js.org/)
//[IMask Date · Issue #345 · uNmAnNeR/imaskjs · GitHub](https://github.com/uNmAnNeR/imaskjs/issues/345)
function mascaraData(campo){
$(“\[name^='” + campo + “'\]”).each(function(index){
if (this.value != undefined){
FLUIGC.calendar(this, {
pickDate: true,
pickTime: false,
language: ‘pt-br’
});
IMask(this, {
mask: Date,
pattern: ‘d{/}`m{/}`Y’, // default is ‘d{.}`m{.}`Y’
min: new Date(2000, 0, 1),
max: new Date(2050, 0, 1),
format: function (date) {
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
if (day < 10) day = “0” + day;
if (month < 10) month = “0” + month;
return \[day, month, year\].join(‘/’);
},
parse: function (str) {
var yearMonthDay = str.split(‘/’);
var date = new Date(yearMonthDay\[2\], yearMonthDay\[1\] - 1, yearMonthDay\[0\])
return date;
},
lazy: false
});
}
});
}

//------------------------------------------------------------------------------------

[IMask.js](https://fluiggers.com.br/uploads/short-url/vk3uooIhUO1mI3SDCoAXF0GhZI7.js) (139,1,KB)

---

## Resposta #7

**Caio Mario** (@Caio_Mario) — 06/06/2023, 19:26

é aqui usava também. mas tem muita dificuldade dele interpretar regras no javascript sendo em text. por isso voltei pra date onde entendeu a regra corretamente. como text não consegui.

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/06/2023, 22:00

Dá um exemplo de problema?

É que usando a `FLUIGC.calendar` pra fazer a seleção de data dá pra usar o método `getDate` dela e vai receber uma data no formato MomentJs. Além de poder usar a MomentJs para interpretar a data que está no formato pt-BR mesmo e fazer validações e cálculos normalmente.

---

## Resposta #9

**Caio Mario** (@Caio_Mario) — 07/06/2023, 07:10

eu tive que criar um datevalidation para fazer tratativa de dt\_emissao e dt\_vencimento. dt\_vencimento d-10 e dt\_emissao d+7. funciona legal quando está como date. quando fica como text ele não calcula as datas legal e apresenta varias falhas. posso até trazer aqui se acharem interessante. e essa tratativa ainda precisava de uma validacão para entrar ou não na regra. ex: se fosse feito fora do prazo a data poderia ficar liberada para indicar qualquer coisa. é uma regra para o financeiro não permitir que lancem valores fora dos prazos de pagamento.

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/06/2023, 11:02

Pra ter uma ideia do que faço aqui.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/00e6560c997945f055bc5773ad063120f42403ab_2_690x244.png)

Usuário escolhe a data de saída e retorno (incluindo o horário na data). Já deixo a máscara no campo pra garantir que vai estar digitado nesse formato, mesmo que não utilizem o calendário.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/0c24a0e4a3e743d5657c1e0dfd8e00c7f33b8d46_2_690x371.png)

Nesse caso configuro pra permitir selecionar a data, mas como é reserva pro futuro não pode ter data anterior a hoje. Também obriga data de saída ser anterior a de retorno e vice-versa.

Como o `.getDate` retorna um MomentJs você pode fazer as contas normalmente, adicionando ou subtraindo data, formatando e todo o resto que a MomentJs permite (que é muito melhor do que o objeto Date padrão do JS, que é horrível).

Por exemplo, na hora de validar o formulário dá pra fazer algo assim:

```javascript
if (calendarSaida.getDate().isBefore(today)) {
    // Erro: data de saída tem que ser posterior a hoje
}

if (calendarRetorno.getDate().isBefore(calendarSaida.getDate())) {
    // Erro: data de retorno tem que ser posterior a data de saída
}

// Pensando em adicionar/subtrair data
const dataMinimaPagamento = moment().add(7, 'days');

if (calendarDataPagamento.isAfter(dataMinimaPagamento)) {
    // Ok, tá no prazo
}
```

Qualquer coisa se o campo tá formatado como `dd/mm/yyyy` também basta transformar numa data Moment.

```javascript
const dataPagamento = moment($("#campo_data").val(), "DD/MM/YYYY");
```

---

## Resposta #11

**Daniel Sales** (@Daniel_Sales) — 07/06/2023, 11:37

sempre usei o input date e so deixo usarem o chrome aqui. Dai evita esses bos.

---

## Resposta #12

**Bruno Gasparetto** (@Bruno_Gasparetto) — 07/06/2023, 12:33

[@Daniel\_Sales](/u/daniel_sales) , e como convenceu os usuários que só dá pra usar Chrome? Porque tenho situações de usuários que só usam Firefox ou Edge e se eu chego com uma notícia dessas vão jogar na cara que o sistema é péssimo, hehehe.

E no caso dos que usam o app mobile, não dá diferença ou problema?

---

## Resposta #13

**Daniel Sales** (@Daniel_Sales) — 07/06/2023, 12:53

Bloqueio outros navegadores.
Tenho uma widget na home que válida.

---

## Resposta #14

**Caio Mario** (@Caio_Mario) — 13/06/2023, 17:01

obrigado pelo apoio pessoal. eu insisti ao maximo como date. mas como comecou a apresentar problemas na minha central. eu tive que virar para text. consegui implementar a regra como text e funcional. posso demonstrar se alguém tiver interesse. mas por ora já consegui o que precisava.

---
