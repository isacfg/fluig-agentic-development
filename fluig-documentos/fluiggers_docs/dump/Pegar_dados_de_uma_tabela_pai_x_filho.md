# Pegar dados de uma tabela pai x filho

> **Fonte:** [https://fluiggers.com.br/t/pegar-dados-de-uma-tabela-pai-x-filho/1275](https://fluiggers.com.br/t/pegar-dados-de-uma-tabela-pai-x-filho/1275)
> **Categoria:** BPM
> **Criado em:** 29/08/2022, 16:18
> **Visualizações:** 1377 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 29/08/2022, 16:18

Pessoal, estou utilizando o pdfmake para gerar um PDF do meu formulário, porém, no formulário tem uma tabela pai x filho, e não estou conseguindo pegar os dados da tabela e geerr o PDF, alguém ja passou por situação parecida que poderia me dar uma força?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/08/2022, 08:34 | ❤️ 1

Depende de como você tá buscando esses dados.

Tá usando hAPI (evento de processo), form (evento de formulário), dataset ou WS? Cada situação é de um jeito.

---

## Resposta #2

**Vagner Duarte** (@vagner_duarte) — 30/08/2022, 13:27

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bruno_gasparetto/48/68_2.png) Bruno\_Gasparetto:
>
> > orm (evento de formulário), dataset ou WS? Cada situação é

estou utilizando no front mesmo, é só para gerar um PDF do formulário. Criei um botão, que quando o usuário clica em gerar PDF, ele pega os dados dos campos do formulároi com jquery mesmo $(‘#idcampo’).val()…

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 30/08/2022, 15:42 | ❤️ 1

Espero que essa gambiarra que uso ajude. Este exemplo de função varre todos os campos que correspondem ao id informado e exibe o valor.

var campo = ‘idcampo’
$(“\[id^='” + campo + “'\]”).each(function(index){
alert($(this).attr(‘value’))
});

Pbs.: os campos da tabela no Fluig são seguidos de “\_\_\_idLinha”. Ex “meuCampo\_\_\_1”

---

## Resposta #4

**André Timm** (@andre.timm) — 08/10/2022, 12:02 | ❤️ 3

Você pode percorrer o pai x filho pelo nome do campo que quiser, pegar o index dele e utulizar os campos da linha.

$(“input\[name\*=Seucampo\_\_\_\]”).each(function(){
const index = this.name.split(“***“).pop()
console.log($(”#SeuCampo***”+index).val())
})

Assim você vai percorrer todas a linhas.

---

## Resposta #5

**Everton Alves** (@everton) — 10/10/2022, 11:19

Gostei dessa jogada com o split e pop, vou usar! :sunglasses:

---

## Resposta #6

**Leandro** (@leandrojldp) — 23/02/2023, 04:31

Olá, amigos!

Nesse caso deve fazer uso de DATASET ou apenas utilizar os comandos citados ?

---
