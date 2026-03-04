# Métodos da funcionalidade Filter

> **Fonte:** [https://fluiggers.com.br/t/metodos-da-funcionalidade-filter/2938](https://fluiggers.com.br/t/metodos-da-funcionalidade-filter/2938)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 20/08/2024, 11:13
> **Visualizações:** 247 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Newton Negri** (@Newton_Negri) — 20/08/2024, 11:13

Fala pessoal, bom dia!

No meu formulário, possuo o seguinte campo:

```auto
<div class="form-group col-sm-6">
  <label for=" motivoDemissao_014" class="control-label">Motivo da Dispensa</label>
  <span style="color: red; font-weight: bold;">*</span>
  <span><i class="flaticon flaticon-info icon-sm" data-toggle="tooltip" data-placement="rigth" title="Clique no ícone de lupa para carregar a relação de motivos para dispensa. Selecione um motivo clicando em um item da lista." aria-hidden="true"></i></span>
  <input type="text" class="form-control" id="motivoDemissao_014" name="motivoDemissao_014" />
</div>
```

Quando a página termina de carregar, estou chamando a seguinte função, que transforma o campo e seta ele como disable utilizando o método .disable(disable):

```auto
function inputMotivoDispensa() {
  var source = [
    { CODIGO: "01", id: 1, MOTIVO: "Dispensa sem justa causa - aviso indenizado" },
    { CODIGO: "02", id: 2, MOTIVO: "Dispensa sem justa causa - aviso trabalhado" },
    { CODIGO: "03", id: 3, MOTIVO: "Término de Contrato(Estágio e Aprendiz)" },
    { CODIGO: "04", id: 4, MOTIVO: "Término de Contrato de Experiência - Antecipado" },
    { CODIGO: "05", id: 5, MOTIVO: "Término de Contrato de Experiência - No Prazo" },
    { CODIGO: "06", id: 6, MOTIVO: "Falecimento" },
    { CODIGO: "07", id: 7, MOTIVO: "Dispensa com justa causa" },
    { CODIGO: "08", id: 8, MOTIVO: "Acordo empregado e empregador - 80/20" },
    { CODIGO: "09", id: 9, MOTIVO: "Encerramento de contrato intermitente" },
    { CODIGO: "10", id: 10, MOTIVO: "Pedido de demissão - Aviso trabalhado" },
    { CODIGO: "11", id: 11, MOTIVO: "Pedido de demissão - Aviso descontado" },
    { CODIGO: "12", id: 12, MOTIVO: "Pedido de demissão - Período de experiência" },
    { CODIGO: "13", id: 13, MOTIVO: "Pedido de demissão - Dispensa do aviso" },
    { CODIGO: "14", id: 14, MOTIVO: "Rescisão indireta" },
  ];

  var settings = {
    source: source,
    displayKey: "MOTIVO",
    multiSelect: false,
    style: {
      autocompleteTagClass: "tag-gray",
      tableSelectedLineClass: "info",
    },
    table: {
      header: [
        {
          title: "CODIGO",
          size: "col-xs-2",
          dataorder: "CODIGO",
          standard: true,
        },
        {
          title: "MOTIVO",
          size: "col-xs-9",
          dataorder: "MOTIVO",
        },
      ],
      renderContent: ["CODIGO", "MOTIVO"],
    },
    tableHeight: "270px",
  };
  var filter = FLUIGC.filter("#motivoDemissao_014", settings);
  filter.disable(true);
}
```

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/27da90cea4a18e85d791a476be26028881afb0dc_2_690x68.png)

Quando o usuário selecionar a “Data de Demissão”, estou chamando a função handleMotivoDispensa();

```auto
$(document).ready(function () {
 // Inicializa o filtro e desabilita o campo de motivo de dispensa inicialmente
 inputMotivoDispensa();

 // Adiciona os eventos de input e blur ao campo de data de demissão
 $("#dataDemissao_014").on("input blur", function () {
  handleMotivoDispensa();
 });

 function handleMotivoDispensa() {
  // Obtém o valor da data de demissão
  var dataDemissao = $("#dataDemissao_014").val();

  // Obtém a referência ao campo de motivo de dispensa (filtro)
  var filter = FLUIGC.filter("#motivoDemissao_014");

  // Verifica se a data de demissão foi preenchida
  if ($.trim(dataDemissao) !== "") {
   // Habilita o campo de motivo de dispensa
   filter.disable(false);
  } else {
   // Desabilita o campo de motivo de dispensa
   filter.disable(true);
  }
 }
});
```

Mas ao invés de habilitar o campo, ocorre isso:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/f/f084bda248494c538ab478a8074a0d6dc83641ca_2_690x88.png)

Alguém sabe como implementar corretamente os métodos nesse caso?

Obrigado!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 20/08/2024, 12:06

Vamos lá, na sua função `inputMotivoDispensa` você está criando seu filter com o comando:

```javascript
var filter = FLUIGC.filter("#motivoDemissao_014", settings);
```

Dentro do `handleMotivoDispensa` você deve utilizar a mesma variável `filter` que vc instanciou anteriormente, se vc rodar novamente um novo `FLUIGC.filter` o Fluig entende que você quer criar um novo filter no input `#motivoDemissao_014`, por isso duplicou seu input.

Você pode fazer o seguinte, faça a sua função `inputMotivoDispensa()` retornar a variável filter, assim poderá utiliza-la dentro da `handleMotivoDispensa()`

Exemplo:

```javascript
function inputMotivoDispensa() {
  var source = [
    { CODIGO: "01", id: 1, MOTIVO: "Dispensa sem justa causa - aviso indenizado" },
    { CODIGO: "02", id: 2, MOTIVO: "Dispensa sem justa causa - aviso trabalhado" },
    { CODIGO: "03", id: 3, MOTIVO: "Término de Contrato(Estágio e Aprendiz)" },
    { CODIGO: "04", id: 4, MOTIVO: "Término de Contrato de Experiência - Antecipado" },
    { CODIGO: "05", id: 5, MOTIVO: "Término de Contrato de Experiência - No Prazo" },
    { CODIGO: "06", id: 6, MOTIVO: "Falecimento" },
    { CODIGO: "07", id: 7, MOTIVO: "Dispensa com justa causa" },
    { CODIGO: "08", id: 8, MOTIVO: "Acordo empregado e empregador - 80/20" },
    { CODIGO: "09", id: 9, MOTIVO: "Encerramento de contrato intermitente" },
    { CODIGO: "10", id: 10, MOTIVO: "Pedido de demissão - Aviso trabalhado" },
    { CODIGO: "11", id: 11, MOTIVO: "Pedido de demissão - Aviso descontado" },
    { CODIGO: "12", id: 12, MOTIVO: "Pedido de demissão - Período de experiência" },
    { CODIGO: "13", id: 13, MOTIVO: "Pedido de demissão - Dispensa do aviso" },
    { CODIGO: "14", id: 14, MOTIVO: "Rescisão indireta" },
  ];

  var settings = {
    source: source,
    displayKey: "MOTIVO",
    multiSelect: false,
    style: {
      autocompleteTagClass: "tag-gray",
      tableSelectedLineClass: "info",
    },
    table: {
      header: [
        {
          title: "CODIGO",
          size: "col-xs-2",
          dataorder: "CODIGO",
          standard: true,
        },
        {
          title: "MOTIVO",
          size: "col-xs-9",
          dataorder: "MOTIVO",
        },
      ],
      renderContent: ["CODIGO", "MOTIVO"],
    },
    tableHeight: "270px",
  };
  var filter = FLUIGC.filter("#motivoDemissao_014", settings);
  return filter;
}

var filterDispensa = inputMotivoDispensa();
filterDispensa.disable(true);

$("#dataDemissao_014").on("input blur", function () {
  handleMotivoDispensa();
 });

function handleMotivoDispensa() {
  // Obtém o valor da data de demissão
  var dataDemissao = $("#dataDemissao_014").val();

  // Verifica se a data de demissão foi preenchida
  if ($.trim(dataDemissao) !== "") {
   // Habilita o campo de motivo de dispensa
   filterDispensa.disable(false);
  } else {
   // Desabilita o campo de motivo de dispensa
   filterDispensa.disable(true);
  }
 }
});
```

---

## Resposta #2

**Newton Negri** (@Newton_Negri) — 20/08/2024, 15:02

Muito obrigado!! Funcionou perfeitamente!

Você sabe dizer quais opções existem para essas style options?

|autocompleteTagClass |string |‘tag-gray’ |Classname for the tags.|
|tableSelectedLineClass |string |‘’ |CSS class used to table selected lines.|

---
