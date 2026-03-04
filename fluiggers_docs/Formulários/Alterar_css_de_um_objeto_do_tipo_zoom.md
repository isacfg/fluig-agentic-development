# Alterar css de um objeto do tipo zoom

> **Fonte:** [https://fluiggers.com.br/t/alterar-css-de-um-objeto-do-tipo-zoom/346](https://fluiggers.com.br/t/alterar-css-de-um-objeto-do-tipo-zoom/346)
> **Categoria:** Formulários
> **Criado em:** 12/04/2021, 17:01
> **Visualizações:** 1126 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 12/04/2021, 17:01

Tenho um campo zoom que preciso alterar o css dele (alterar o fundo).

Fiz testes adicionado minha classe css e também utilizando o style=“background-color: yellow;”, porém não funcionou.

```
<label class="control-label" id="lbSolicitante" for="solicitante">SOLICITANTE:<span class='text-danger'>*</span></label>
    <input style="background-color: yellow;" class="form-control input-sm obg-sol testeFundo" type="zoom" name="solicitante" id="solicitante" data-zoom="{
    'displayKey':'NOME',
    'datasetId':'ds_Colaboradores',
    'filterValues':'TABELA,SRA,ZOOM,INATIVO,ORDEM,NOME',
    'maximumSelectionLength':'1',
    'placeholder':'Solicitante?',
    'fields':[
        {
            'field':'NOME',
            'label':'Nome',
            'standard':'true'
        },
        {
            'field':'CC',
            'label':'CC'
        }
    ]
}" />
```

Vi que ele utiliza o Select2 para criar o campo zoom e tentei também usando o código:

```
$('.select2-selection__rendered').css({'background-color':'yellow'});
```

Ele alterou, porém como tenho 3 campos do tipo zoom, alterou de todos.
Alguém tem alguma sugestão?

At
Rodrigo de Oliveira

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 13/04/2021, 10:22

Se deseja que seu campo zoom tenha uma determinada cor de fundo, e ao selecionar um valor ele volte para a cor de fundo normal.

Em seu arquivo css cole o seguinte código abaixo

> #solicitante:empty ~ span .select2-selection–multiple{
> background-color: yellow!important
> }

Se atentando apenas para o ID do seu campo zoom

---

## Resposta #2

**Rodrigo de Oliveira** (@redschenko) — 13/04/2021, 11:08

Obrigado pela resposta [@sergio.machado](/u/sergio.machado).
Fiz o teste e não funcionou.
Adicionei dentro do meu html direto na tag style, incluindo outro campo, mas do tipo text.
Ficou assim

```
<style>
     #solicitante:empty~span .select2-selection–multiple {
        background-color: yellow !important
     }

     #valor {
        background-color: yellow !important
     }
    </style>
```

Para o campo do tipo zoom não funciona.

![Screenshot_49](https://fluiggers.com.br/uploads/default/original/1X/021bfdcfcfbf702cc900f316bffb66192a97030b.png)

Alguma outra sugestão?

At
Rodrigo de Oliveira

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/04/2021, 12:09

Uitilizei assim e funcionou. Mas com ~span também funciona.

```css
#ccProjeto:empty +span .select2-selection.select2-selection--multiple {
    background-color: #F00;
}
```

![image](https://fluiggers.com.br/uploads/default/original/1X/b6e4ebf5b9b5a6edccbdf4a1b5c70dad2bba6b98.png)

Porém o `:empty` só funcionará até algo ser selecionado, pois se você selecionar algum item e depois desmarcar o item o select continuará contendo o `option` criado, então a regra não vai valer.

Um jeito é adicionar o background com JS nas funções disparadas quando há mudança no Zoom.

---

## Resposta #4

**Rodrigo de Oliveira** (@redschenko) — 13/04/2021, 14:01 | ❤️ 1

Show de bola [@Bruno\_Gasparetto](/u/bruno_gasparetto)
Funcionou!

Fiz assim:

```
#solicitante +span .select2-selection.select2-selection--multiple {
      background-color: #fcffab;
    }

    #solicitante +span .select2-selection__choice {
      background-color: #fcffab;
    }
```

Muito obrigado!

---

## Resposta #5

**system** (@system) — 14/04/2021, 06:02

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
