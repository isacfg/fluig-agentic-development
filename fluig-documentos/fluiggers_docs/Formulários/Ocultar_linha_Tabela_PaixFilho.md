# Ocultar linha Tabela PaixFilho

> **Fonte:** [https://fluiggers.com.br/t/ocultar-linha-tabela-paixfilho/2140](https://fluiggers.com.br/t/ocultar-linha-tabela-paixfilho/2140)
> **Categoria:** Formulários
> **Tags:** `form`, `mobile`
> **Criado em:** 22/08/2023, 16:38
> **Visualizações:** 277 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 22/08/2023, 16:38

boa tarde pessoal,

to montando uma tabela PaixFilho mas queria ocultar algumas linhas.

Na web funciona tudo perfeito, mas mobile mostra as linhas ocultas (). Alguma sugestão para ocultar no mobile?

Na web:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/f/fe7b8b6a26f0e72dcd5ccc2498dcac2bbd2df7be_2_690x337.png)

Mobile:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/6/6840becc6b5be64e7a479945dd3fb1aed9244ce3_2_261x500.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 25/08/2023, 11:25

Solucionado,

segue função que montei:

function displayMobile(){
var mobile = 0
if (document.getElementsByClassName(“bpm-mobile-column”).length > 0)
{
//oculta div da seta a esquerda da linha
$(‘.fluigicon-pointer-right’).parent().attr(“style”, “display:none”)
//redimensiona div dos valores da linha
$(‘.col-xs-10’).addClass(“col-xs-12”)
$(‘.col-xs-10’).removeClass(“col-xs-10”)
//oculta demais cursores da linha
$(‘.fluigicon-pointer-down’).attr(“style”, “display:none”)
$(‘.fluigicon-ellipsis’).attr(“style”, “display:none”)
}
//se existe classe bpm-mobile-column, gerada quando executa mobile retorna 1 senao 0
return mobile
}

para ocultar linha nas funções:
tem que avaliar em qual parentNode está a linha, sendo necessario mais ou menos “.parentNode”

//retorna 1 se esta executando classes mobile
var mobile = displayMobile()

if (mobile == 1){
document.getElementById(“minhadiv\_\_\_” + linha).parentNode.parentNode.parentNode.parentNode.parentNode.style.display = “none”
}

---
