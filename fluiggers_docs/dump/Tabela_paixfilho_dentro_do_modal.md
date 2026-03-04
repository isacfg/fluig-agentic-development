# Tabela paixfilho dentro do modal

> **Fonte:** [https://fluiggers.com.br/t/tabela-paixfilho-dentro-do-modal/1627](https://fluiggers.com.br/t/tabela-paixfilho-dentro-do-modal/1627)
> **Categoria:** Formulários
> **Tags:** `paixfilho`, `modal`
> **Criado em:** 02/02/2023, 09:56
> **Visualizações:** 611 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 02/02/2023, 09:56

Olá, eu não consegui simular uma tabela adicionando itens dentro de um modal. Isso é possível ?

Meu modal

```auto
function clickModalLancamento(objeto) {
    var index = objeto.id.split("___")[1];
    var codigo = $("#table2_cod_produto___" + index).val();
    var produto = $("#hdd_p_nome_produto___" + index).val();

    var modal_lancamento = FLUIGC.modal({
        title: 'RATEIO DE ITEM',
        content: '<h3 align="center">CÓDIGO: '+codigo+'<br>PRODUTO: '+produto+' </h3> '

            + '<div style="width: 100% !important; height: 50% !important; padding: 20px !important;">'
                +'<div class="row">'
                    +'<div class="form-group col-md-12">'
                        +'<div class="form-field table-responsive" data-type="tabledetail" data-show-properties="" data-field-name="tabledetail">'
                            +'<table class="table" cellspacing="0" tablename="tblModalRateio" id="tblModalRateio" noaddbutton="true" nodeletebutton="true">'
                                +'<thead>'
                                    +'<tr class="tableHeadRow">'
                                    +'</tr>'
                                +'</thead>'
                                +'<tbody>'
                                    +'<tr>'
                                        +'<td class="fs-v-align-left" style="padding-left: 0px !important;padding-right: 30px !important; padding-top: 0px !important; padding-bottom: 0px !important; width: 100% !important;">'
                                            +'<div class="row">'
                                                +'<div class="form-group col-md-2" align="center" style="padding: 20px !important;">'
                                                    +'<button class="btn btn-default" id="btnRemoveRateio" name="btnRemoveRateio" onclick="removeRateio(this)"><i style="color: rgb(33 31 123);" class="icofont-ui-delete icofont-2x"></i>'
                                                    +'</button>'
                                                +'</div>'
                                                +'<div class="form-group col-md-10">'
                                                    +'<label for="tbl_nome_produto">% do rateio</label><span class="required text-danger"><strong> *</strong></span>'
                                                    +'<input type="text" class="form-control" name="p_modal_percentual" id="p_modal_percentual" />'
                                                +'</div>'
                                            +'</div>'
                                        +'</td>'
                                    +'</tr>'
                                +'</tbody>'
                            +'</table>'
                        +'</div>'
                    +'</div>'
                +'</div>'

                +'<div class="row">'
                    +'<div class="form-group col-md-2">'
                        +'<button style="padding-top: 10px;padding-bottom: 10px;border-radius:20px 20px 20px 20px;" type="button" class="btn btn-info col-md-12 butao" name="btnAddRateio" id="btnAddRateio" '
                            +'data-toggle="tooltip" data-placement="bottom" title="novo rateio"><span style="color: white;" class="icofont-plus-circle icon-sm"></span> ADICIONAR'
                        +'</button>'
                    +'</div>'
                +'</div>'
            + '</div>    ',

        id: 'id_modal_lancamento',
        size: 'full',
        actions: [{
            'label': 'Salvar',
            'bind': 'onclick="execSalvarRateio()"',
            'autoClose': true
        },{
            'label': 'Sair',
            'autoClose': true
        }]
    }, function (err, data) {
        if (err) {
            console.log('clickModalLancamento - err: ' + err);
        } else {
            console.log('clickModalLancamento - data: ' + data);
        }
    });
}

function execSalvarRateio(pro){
    FLUIGC.toast({
        title: 'Sucesso! ',
        message: 'Rateio salvo com sucesso. ',
        type: 'success',
        timeout: 3000
    });
}
```

![image](https://fluiggers.com.br/uploads/default/optimized/1X/1b80297ca7cb85561629c95a0d4226ccec116f38_2_690x262.png)

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 02/02/2023, 14:02

Em teoria tem que rodar,
Faz o seguinte move sua table para fora do modal e testa. Pode ser erro na chamada do seu botão no evento onclick.

---

## Resposta #2

**Wanderley Junior** (@gomeswjunior) — 02/02/2023, 16:02

Consegue me auxiliar nessa retirada? Pois não compreendi como colocar a table fora do modal

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 02/02/2023, 16:07

Seguinte,
Sua table esta dentro de uma tag

```auto
<div class="modal-body"></div>
```

referente ao modal, recorte o conteudo dessa tag e cole em uma div fora da div do modal.
Normalmente logo apos o ja serve.

---

## Resposta #4

**Wanderley Junior** (@gomeswjunior) — 03/02/2023, 16:13

[@Daniel\_Sales](/u/daniel_sales) mesmo seguindo suas dicas, de forma alguma não consigo chamar o wdkAddChild(‘#idtable’)

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 03/02/2023, 16:27

Não tem o # pois não e uma chamada jquery.

---

## Resposta #6

**Wanderley Junior** (@gomeswjunior) — 03/02/2023, 16:43

Sim, realmente, mas só informei errado aqui… O que quero dizer de fato é que o wdkAddChild não é executado quando acionado. Sabe de uma outra solução que faça o mesmo ?

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 06/02/2023, 08:37

Bom dia,

Da uma olhada na documentação do style-guide o modal do fluig

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 06/02/2023, 09:38

Nunca tentei, mas acredito que se você quiser salvar os dados da Pai Filho terá que criar uma tabela oculta no formulário né. Porque a da modal é criada dinamicamente e o Fluig não reconheceria os campos pra salvar.

Vai ter o trabalho de fazer a tabela na modal e manipular tudo na oculta. Mas não é certeza que precisaria disso.

---
