# Validar intervalo de data do formulário #form #spinners #js

> **Fonte:** [https://fluiggers.com.br/t/validar-intervalo-de-data-do-formulario-form-spinners-js/113](https://fluiggers.com.br/t/validar-intervalo-de-data-do-formulario-form-spinners-js/113)
> **Categoria:** BPM
> **Tags:** `form`, `java`, `javascript`, `spinners`
> **Criado em:** 15/03/2021, 10:23
> **Visualizações:** 2055 | **Likes:** 28 | **Respostas:** 9

---

## Pergunta original

**Romulo Pereira** (@romuloccomp) — 15/03/2021, 10:23 | ❤️ 3

Olá pessoal, segue um função para validar se uma data inicial é menor do que a final.
Você pode retornar o intervalo de dias também (basta colocar o num\_days como retorno), se preferir.

```javascript
function validateDays(fdateIni, fdateFim){
    var arDataI = fdateIni.split(" ")[0].split("/");
    var arDataF = fdateFim.split(" ")[0].split("/");
    // seta o dia, mês (Janeiro é 0) e ano
    var dateIni = new Date(arDataI[2], arDataI[1] - 1 , arDataI[0]);
    var dateFim = new Date(arDataF[2], arDataF[1] - 1 , arDataF[0]);
    num_days = Math.round((dateFim-dateIni)/(1000*60*60*24))
    if( num_days >= 0 ){
        return true;
    }
    else{
        return false;
    }
}

Exemplo de uso:

    // valida intervalo de datas
if(!validateDays(form.getValue('dt_inicio') , form.getValue('dt_termino'))){
    throw "<b>A Data de terminio nao pode ser menor do que a de inicio.</b>";
}
```

---

## Resposta #1

**Victor Castro** (@victorcastro) — 15/03/2021, 13:56 | ❤️ 3

Interessante a sua proposta. Deixo aqui também uma outra maneira de fazer a validação.

No caso, estou validando uma data no formato “**2021-12-31**” (funciona para “**31-12-2021**” também). Caso o delimitador seja outro é só adaptar o código.

```javascript
function validaData(data1, data2){
        data1 = data1.replace("-", "").replace("-", "").trim();
        data2 = data2.replace("-", "").replace("-", "").trim();

        if( parseFloat(data1) > parseFloat(data2) ){
            return true;
        }
        else{
            return false;
        }
     }
```

---

## Resposta #2

**Romulo Pereira** (@romuloccomp) — 16/03/2021, 09:22 | ❤️ 2

Victor, você sabe quem administra o portal?
Eu quero sugerir que colocar uma função para melhorar a apresentação de trecho de código nas postagens.
Ex: [GitHub - ThomDietrich/discourse-plugin-code-fences-buttons: Discourse Plugin: Code Fences Buttons (cfbtn)](https://github.com/ThomDietrich/discourse-plugin-code-fences-buttons)

---

## Resposta #3

**Victor Castro** (@victorcastro) — 16/03/2021, 09:34 | ❤️ 2

[@daniel.cabral](/u/daniel.cabral) [@fluigor.com.br](/u/fluigor.com.br)

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 16/03/2021, 09:37 | ❤️ 1

Massa! Não tinha encontrado esse ainda…vamos adicionar o plugin hoje à noite! (o discourse precisa de um tempinho legal pra reiniciar quando adicionamos plugins)

---

## Resposta #5

**Romulo Pereira** (@romuloccomp) — 16/03/2021, 09:50 | ❤️ 1

Excelente! valeu pessoal!

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 16/03/2021, 14:30 | ❤️ 3

[@romuloccomp](/u/romuloccomp)

```javascript
Para colocar codigos javascript use a string ```javascript
```

---

## Resposta #7

**Romulo Pereira** (@romuloccomp) — 16/03/2021, 15:12 | ❤️ 1

Funciona também, e vai ficar ainda melhor com o plugin. Obrigado, abração!

---

## Resposta #8

**Daniel Sales** (@Daniel_Sales) — 16/03/2021, 15:39 | ❤️ 1

O [@fluigor.com.br](/u/fluigor.com.br) é quem e o pai da criança. Fala com ele.

---

## Resposta #9

**Igor Rodrigues** (@fluigor.com.br) — 16/03/2021, 16:43

essa criança é nossa! :star_struck:

---

## Resposta #10

**Daniel Cabral Santos** (@daniel.cabral) — 17/03/2021, 08:59 | ❤️ 2

Galera, coloquei o plugin pra facilitar a inserção do código, mas ele tá com pau - vejam à esquerda do botão de GIF no editor de mensagens…de toda foram a tag que o [@Daniel\_Sales](/u/daniel_sales) colocou funciona!

Reportei no projeto dos caras pra ver o que houve.

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/03/2021, 09:28 | ❤️ 1

Fiquei curioso com um detalhe.

Quando utilizamos o new Date o Java gerado será um java.util.Date? Se for bastaria utilizar o método after ou o before pra validar.

Ainda não estudei direito o que cada item do JS se transforma quando é convertido pelo Rhino.

Nas validações que precisei fazer eu declarava manualmente o java.util.Date pra utilizar o after e o before.

---

## Resposta #12

**Romulo Pereira** (@romuloccomp) — 17/03/2021, 09:46 | ❤️ 2

O js não tem funções bem trabalhadas nativamente, o que poderiamos ter usado é uma comparação simples usando >, porém não ia retornar o numero de dias.
Devido essa falta do js é que existem libs como o [http://momentjs.com/](http://momentjs.com/).

---

## Resposta #13

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/03/2021, 10:04 | ❤️ 2

Sim, até hoje não entendo o motivo do JS não trabalhar decentemente com datas, sempre precisando recorrer às bibliotecas de terceiros pra isso.

Num evento que ocorre do lado do servidor eu opto por instanciar java.util.Date, java.util.Calendar e as outras classes do Java pra tratar as datas.

Do lado do cliente, por já ter a moment carregada (é padrão do Fluig) eu simplesmente instancio ela e uso os métodos dela pra garantir a comparação.

Mas a solução apresentada é uma boa forma de comparar também.

---

## Resposta #14

**Daniel Cabral Santos** (@daniel.cabral) — 17/03/2021, 10:12 | ❤️ 3

Lembrando que o moment já está nativo no fluig desde uma 1.6.5 aí pra trás…

---

## Resposta #15

**Romulo Pereira** (@romuloccomp) — 17/03/2021, 12:29 | ❤️ 1

Eu não sabia, bom saber.

---
