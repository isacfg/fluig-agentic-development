# Campo com valor negativo automaticamente trocar de cor

> **Fonte:** [https://fluiggers.com.br/t/campo-com-valor-negativo-automaticamente-trocar-de-cor/1140](https://fluiggers.com.br/t/campo-com-valor-negativo-automaticamente-trocar-de-cor/1140)
> **Categoria:** Formulários
> **Criado em:** 15/06/2022, 09:11
> **Visualizações:** 409 | **Likes:** 5 | **Respostas:** 5

---

## Pergunta original

**Caio Mario** (@Caio_Mario) — 15/06/2022, 09:11

Bom dia senhores.

Estou encarando um problema para mostrar um campo com uma cor diferente.
Ex: tenho um campo que trás valores automaticos dependendo da consulta no dataset. ele só preenche no formulário de acordo com a conta. o usuario preenche a conta e os proximos campos trazem os valores. gostaria de trocar a cor quando o campo for negativo. isso em web é tranquilo. no fluig eu não estou conseguindo validar esses valores.

alguma dica?

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 16/06/2022, 12:22 | ❤️ 1

Veja se é isso o que procura:

```javascript
$(function() {
var value = $("#inputId").val();
  if (parseFloat(value) < 0) {
    $("#inputId").css({
      'background-color': '#f3ca63',
    })
  }
});
```

---

## Resposta #2

**Caio Mario** (@Caio_Mario) — 17/06/2022, 16:37

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/jonathan.albuquerque/48/1610_2.png) Jonathan.Albuquerque:
>
> > `parseFloat`

é o que eu preciso mas n to conseguindo validar pq o valor do campo vem automatico do dataset. eu não preencho manual. eu faco uma consulta e dependendo do resultado o campo vem automatico negativo ou positivo.

---

## Resposta #3

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 17/06/2022, 17:58

Coloque seu código aqui para darmos uma olhada

---

## Resposta #4

**Caio Mario** (@Caio_Mario) — 17/06/2022, 20:01

Segue abaixo. tem esse dataset criado e a consulta trás os valores preenchidos automaticamente. O meu problema ali é que quando está com valor negativo o campo que informei ele não muda cor.

```javascript
<div class="col-md-4 col-xs-12">
    <label for="C1_CONTA">Conta Contábil</label>
    <input class="form-control" type="zoom" id="C1_CONTA" name="C1_CONTA" data-zoom="{
        'displayKey':'C1_CONTA',
        'datasetId':'ds_conta_orcado',
        'placeholder':'Selecione',
        'fields':[{
            'field':'C1_CONTA',
            'label':'Conta'
        },{
            'field':'C1_DESCCTA',
            'label':'Descricao'
        },{
            'field':'DESVIOACU',
            'visible':'false'
        },{
            'field':'METACU',
            'visible':'false'
        },{
            'field':'REALACU',
            'visible':'false'

    }]}" />
</div>

    <div class="col-md-4 col-xs-12">
        <label for="C1_DESCCTA">Desc. Contábil</label>
        <input class="form-control" type="text" id="C1_DESCCTA" name="C1_DESCCTA" readonly="readonly">
    </div>
</div>


<div class="row">
    <div class="col-md-2 col-xs-12">
        <label for="DESVIOACU"> Desvio </label>
        <input class="form-control" type="number" step="0.01" id="DESVIOACU" name="DESVIOACU" readonly="readonly">

</div>

<div class="col-md-2 col-xs-12">
    <label for="METACU"> Meta </label>
        <input class="form-control" type="number" id="METACU" name="METACU" readonly="readonly">
</div>

<div class="col-md-2 col-xs-12">
        <label for="REALACU"> Realizado </label>
            <input class="form-control" type="number" id="REALACU" name="REALACU" readonly="readonly">
    </div>


    $(function(){})
	  var nameRealizado = $("#REALACU").val();
	  if (parseFloat(nameRealizado) < 0) {
	  $("#REALACU").css({
	  'background-color': '#f3ca63',
	})
	};
```

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 20/06/2022, 10:31 | ❤️ 2

Como este valor está em um zoom, você deve adaptar esta verificação dentro da função setSelectedZoomItem conforme a [documentação](https://tdn.totvs.com/pages/releaseview.action?pageId=663066946#Personaliza%C3%A7%C3%A3odeformul%C3%A1rios-Zoom).

---

## Resposta #6

**Caio Mario** (@Caio_Mario) — 21/06/2022, 07:25

Vou testar essa documentação. Muito obrigado.

---

## Resposta #7

**Caio Mario** (@Caio_Mario) — 22/06/2022, 11:21 | ❤️ 2

Bom dia. Deu certo. Só mexi na lógica. Funcionou direitinho. Muito obrigado pelo apoio.

---
