# Desabilitar botão tabela pai x filho

> **Fonte:** [https://fluiggers.com.br/t/desabilitar-botao-tabela-pai-x-filho/483](https://fluiggers.com.br/t/desabilitar-botao-tabela-pai-x-filho/483)
> **Categoria:** Formulários
> **Criado em:** 31/05/2021, 23:44
> **Visualizações:** 2167 | **Likes:** 6 | **Respostas:** 6

---

## Pergunta original

**nelson** (@nelsoncassemiro) — 31/05/2021, 23:44

Olá pessoal, estou precisando de ajuda na tabela pai x filho.

Criei um botão para remover os filhos, mas eu preciso desabilitar o botão em uma determinada atividade.
Ex:
tabela pai x filho
Atividade 5

1
botão remover id=remover / id=msgStatus\_\_\_1 = OK

2
botão remover id=remover / id=msgStatus\_\_\_2 = ERRO

* * *

Preciso desabilitar o botão remover do campo OK

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 01/06/2021, 07:33

Olá, tudo bem?
O botão deve ser desabilitado ao carregar a tabela?
Tenta assim:

```javascript
$("input[id^='remover___']").each(function(index,value) {
      var i = index+1

      if ($("#msgStatus___" + i).val() == "OK") {
        $(this).attr("disabled", "disabled")
      }
})
```

Acho que isso vai dar certo… testa aí.

Abs

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 01/06/2021, 08:05

Bom dia dica útil use a tag ele recebe o id\_\_\_ e o name\_\_\_ dai vc usa a técnica do colega acima com um pequeno ajuste

```javascript
$("input[id^='remover___']").each(function(index,value) {
        $(this).attr("disabled", "disabled") ;
})
```

---

## Resposta #3

**nelson** (@nelsoncassemiro) — 01/06/2021, 15:44

opa pessoal obrigado pela ajuda, mas ainda não deu certo…
estou fazendo assim:

var bloqueio\_remover = /^(14)$/.test(atividade);
if(bloqueio\_remover){
$(“input\[id^=‘remover\_\_\_’\]”).each(function(index,value) {
var i = index+1
var tituloStatus = $("#tituloStatus\_\_\_" + i).val()
var status = tituloStatus.trim()
var igual = tituloStatus == tituloStatus.trim()
if (status == “Vencimento alterado com sucesso.”) {
$(this).attr(“disabled”, “disabled”);
}
})
}

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/06/2021, 09:30

`var bloqueio_remover = /^(14)$/.test(atividade);`

Você está testando se está na atividade 14?

É uma ideia interessante. Eu geralmente crio funções no JS do formulário e no evento displayFields do formulário eu chamo a função quando estou na atividade.

Você está usando um `<button>`ou `<input type="button">` ? Se postar o HTML da tabela Pai Filho fica mais fácil de orientar como seria o script correto.

---

## Resposta #5

**nelson** (@nelsoncassemiro) — 02/06/2021, 10:14

Isso, estou usando na atividade 14.

o html é esse

```auto
<div class="form-group">
<span class="fluig-style-guide fs-display-block remover-titulo">
<i class="fluigicon fluigicon-trash icon-md" id="remover" name="remover" onclick="javascript:Titulo.removerLinha(this);"></i>
</span>
 </div>
  </div>
```

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 02/06/2021, 12:41

Então, você não tem um button nem input, por isso a solução entregue não funciona.

```javascript
$("i[id^='remover___']").each(function (index, value) {
    // Execute as comparações que precisa
    $(this).remove(); // Vai remover o "botão" da tabela. Disabled não funciona para a tag i
}
```

Ou você pode trocar o HTML para utilizar um button personalizado e assim usar o disabled nele.

---

## Resposta #7

**nelson** (@nelsoncassemiro) — 02/06/2021, 17:11

Obrigado Bruno, irei realizar essas alterações… aviso aqui se deu certo ou não.

---

## Resposta #8

**Allan Reichert** (@allan.reichert) — 30/08/2021, 14:12

Olá, este problema foi resolvido com as soluções citadas?

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/08/2021, 15:34 | ❤️ 4

[@allan.reichert](/u/allan.reichert) , o jeito mais simples (pelo menos que considero mais simples) é deixar o botão numa coluna só dele. Aí você dá a essa coluna uma classe CSS (eu geralmente dou a classe action à th e td onde fica o botão de remover). Aí um simples `$(".action").remove();` removerá a coluna inteira.

Mas isso tem que ser feito no navegador.

Como eu determino se deve aparecer ou não no evento displayFields, então eu chamo a função pra executar essa ação no navegador fazendo o append do script.

```javascript
customHTML.append('<script>$(function () { $(".action").remove(); });</script>');
```

---

## Resposta #10

**Allan Reichert** (@allan.reichert) — 30/08/2021, 16:03 | ❤️ 1

Perfeito, deu certo.

Muito Obrigado

---

## Resposta #11

**Delcleciano Junior** (@Delcleciano) — 15/10/2021, 13:13 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > `customHTML.append('<script>$(function () { $(".action").remove(); });</script>');`

Consegui utilizar essa função customHTML.append() em um ícone que eu queria ocultar no meu processo, você me salvou cara kkkk, no meu caso peguei sua função e adaptei ela para que fosse possível ocultar a lixeira da tabela pai x filho , se alguém precisar, esta abaixo

```auto
customHTML.append('<script>$(function () { $(".bpm-mobile-trash-column").hide(); });</script>');
```

---
