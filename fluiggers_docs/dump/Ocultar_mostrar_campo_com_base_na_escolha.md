# Ocultar/mostrar campo com base na escolha

> **Fonte:** [https://fluiggers.com.br/t/ocultar-mostrar-campo-com-base-na-escolha/1169](https://fluiggers.com.br/t/ocultar-mostrar-campo-com-base-na-escolha/1169)
> **Categoria:** Formulários
> **Criado em:** 01/07/2022, 10:54
> **Visualizações:** 924 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Rafael** (@Adevogado) — 01/07/2022, 10:54 | ❤️ 1

![mod](https://fluiggers.com.br/uploads/default/original/1X/3263544e46b0bec9c1125723a9271151ba60fca9.png)
Bom dia!
Gostaria de fazer uma função simples mas não está funcionando.

-   Se o usuário selecionar a opção 1 da tela “Classificação” , apenas a opção “Primeira Ocorrência” ficará visível ou bloqueada na tela “Verificação Histórico Advertências”
-   Se o usuário selecionar a opção 2, apenas a opção “Primeira Ocorrência” e “Segunda Ocorrência” ficará visível ou bloqueada.
-   Se o usuário selecionar a opção 3, a opção “Primeira Ocorrência”, “Segunda Ocorrência” e “Terceira Ocorrência” ficará visível

Abaixo listo os códigos q estou usando mas mesmo assim não funcionou, os campos não ficam ocultados.

usei o seguinte código no custom.js:

if($(#critA).val() == a){ $(#adv2).hide(); }
if($(#critA).val() == a){ $(#adv3).hide(); }
if($(#critB).val() == b){ $(#adv3).hide(); }

no DisplayFields fiz o seguinte código:

```
if(ativ >= 2){
    form.setVisibleById("divClassificacao",true);
    if(form.getValue("pessoa") == "fdm"){
        form.setVisibleById("divFuncionario",true);
    }
    else{
        form.setVisibleById("terceiros",true);
    }

    // ocultar campos de advertência na Criticidade A
    if(form.getValue("CritA") == "a"){
        form.setVisibleById("adv2", false);
    }
    else{

        form.setVisibleById("adv2", true);
    }
    if(form.getValue("CritA") == "a"){
        form.setVisibleById("adv3", false);
    }
    else{

        form.setVisibleById("adv3", true);
    }

    // ocultar campos de advertência na Criticidade B
    if(form.getValue("CritB") == "b"){
        form.setVisibleById("adv3", false);
    }
    else{

        form.setVisibleById("adv3", true);
    }

}
```

---

## Resposta #1

**Everton Alves** (@everton) — 01/07/2022, 11:58

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/a/6bbea6/48.png) Adevogado:
>
> > if($(#critA).val() == a){ $(#adv2).hide(); }
> > if($(#critA).val() == a){ $(#adv3).hide(); }
> > if($(#critB).val() == b){ $(#adv3).hide(); }

No exemplo que você passou está faltando as aspas:

```javascript
if($('#critA').val() == a){ $('#adv2').hide(); }
if($('#critA').val() == a){ $('#adv3').hide(); }
if($('#critB').val() == b){ $('#adv3').hide(); }
```

Como ficou o seu HTML?

---

## Resposta #2

**Rafael** (@Adevogado) — 01/07/2022, 12:18

boa tarde everton! Obrigado por responder, nas verdade eu já utilizava aspas, só esqueci de colocar no exemplo.
Na parte *val() == b)* eu colocava o valor b entre aspas também, removi ele e continua não funcionando

O HTML anexei aqui
[Formulário\_de\_Fluxo\_de\_Politicas\_de\_Consequencias.html](https://fluiggers.com.br/uploads/short-url/1wmUUEcVdzeWZDr5HzlvWmPwe3w.html) (17,8,KB)

as Divs em questão são as divs “divClassificacao” (linha 192) e a “divVerificacaoAdv” (linha 288)

---

## Resposta #3

**Everton Alves** (@everton) — 01/07/2022, 14:21 | ❤️ 1

Olá,

Não tenho o costume de usar os eventos diretamente na tag HTML, por isso, acho que vc vai precisar adaptar o código abaixo:

```javascript
$(() => {
    let criticidadeEl = $(':radio[name=criticidade]');  // Seleciona todos os radios da Categoria "Criticidade"
    let ocorrenciaEl = $(':radio[name=ocorrencia]');    // Seleciona todos os radios da Categoria "Ocorrências"

    ocorrenciaEl.prop('disabled', true); // Desabilita todos os radios de "Ocorrências"

    criticidadeEl.each((idx, el) => {
        $(el).click(() => {
            if ($(el).prop('checked')) {
                switch($(el).val()) {
                    case 'a':
                        $('#adv1').prop('disabled', false);
                        $('#adv2, #adv3').prop('disabled', true);
                        break;
                    case 'b':
                        $('#adv1, #adv2').prop('disabled', false);
                        $('#adv3').prop('disabled', true);
                        break;
                    case 'c':
                        ocorrenciaEl.prop('disabled', false); // Habilita as três opções
                        break;
                }
            }
        });
    });
});
```

No código acima, os rádios de “Verificação Histórico de Advertências” serão habilitados/desabilitados de acordo com a opção selecionada em “Classificação”, você pode adaptar o código para exibir/ocultar os rádios se preferir.

---

## Resposta #4

**Rafael** (@Adevogado) — 04/07/2022, 11:30

bom dia everton, agradeço, vou testar e dou retorno.

---
