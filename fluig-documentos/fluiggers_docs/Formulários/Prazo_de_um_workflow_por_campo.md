# Prazo de um workflow por campo

> **Fonte:** [https://fluiggers.com.br/t/prazo-de-um-workflow-por-campo/639](https://fluiggers.com.br/t/prazo-de-um-workflow-por-campo/639)
> **Categoria:** Formulários
> **Criado em:** 06/09/2021, 16:28
> **Visualizações:** 1364 | **Likes:** 4 | **Respostas:** 5

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 06/09/2021, 16:28

Boa tarde pessoal, como eu coloco prazo em um workflow por campo de formulário? Eu criei o campo do tipo ‘date’ e associei ele a tarefa do workflow, pelo eclipse, porém quando faço o teste, simplesmente não funciona, aparece que não há prazo definido para o processo.

---

## Resposta #1

**Victor Castro** (@victorcastro) — 06/09/2021, 17:00 | ❤️ 1

Boa tarde [@mauriciolanner](/u/mauriciolanner).

Esse campo é preenchido em que momento? Já tive um problema parecido, mas era porque o campo de data era preenchido depois que a atividade já tinha sido criada.

Se não for esse o seu problema, dá uma olhada no formato do campo. Segundo a [documentação](https://tdn.totvs.com/display/public/HF/Configurar+atividades+e+fluxos#Configuraratividadesefluxos-ConfigurarAtividade), o campo deve obedecer os seguintes formatos:

**Valores válidos para o campo** :

-   999:99 = Formato padrão

Seguirá a mesma lógica do valor fixo, considerando os expedientes e feriados do usuário responsável.

**Para os demais valores utilizar os formatos a seguir** :

-   9999-99-99 = ano, mês e dia;
-   9999-99-99 99:99 = ano, mês, dia, hora e minuto;
-   99/99/9999 = ano, mês e dia;
-   99/99/9999 99:99 = ano, mês, dia, hora e minuto;
-   9999999999 = data em milisegundos.

---

## Resposta #2

**Mauricio Freitas** (@mauriciolanner) — 08/09/2021, 23:39

Cara, mesmo assim não estou conseguindo preencher , estou usando o formato \* 9999-99-99 = ano, mês e dia;

---

## Resposta #3

**Maxson Santana Carvalho** (@Maxson_Santana_Carva) — 02/02/2022, 13:52

Conseguiu resolver este problema? Pois me deparei com a mesma situação e não encontrei solução até o momento…

---

## Resposta #4

**Maxson Santana Carvalho** (@Maxson_Santana_Carva) — 03/02/2022, 13:55

A solução que encontrei em outro fórum foi a conversão de data para milisegundos e deu certo…

---

## Resposta #5

**Mauricio Freitas** (@mauriciolanner) — 03/02/2022, 14:38 | ❤️ 1

Eu na verdade estava mandando o campo de data errado, por isso não estava pegando, voltou a funcionar assim que corrigi o campo.

---

## Resposta #6

**Rafael Oliveira** (@roliveira) — 10/05/2023, 14:25

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/maxson_santana_carva/48/553_2.png) Maxson\_Santana\_Carva:
>
> > milisegundos

Boa tarde pessoal!
Atualizamos a versão do Fluig aqui na empresa para a versão Mist 1.8.0-230425 493 e tivemos este problema com o Prazo de Conclusão por Campo de Formulário.

Resolvi exatamente da forma como o [@Maxson\_Santana\_Carva](/u/maxson_santana_carva) explicou.

No processo, preciso somar mais 15 dias a partir da data que a solicitação é gerada e depois converter para timestamp, segue o código pra quem precisar.

/\* Javascript \*/
$(‘document’).ready(function() {
var data\_criacao = $(“#data\_criacao”); //Campo no formulário que recebe a data atual + 15 dias. Este campo fica setado na atividade do processo de Prazo de Conclusão (Por Campo de Formulário)
var data = getDate();
var data\_timestamp = getDateTimestamp(data);

```
data_criacao.val(data_timestamp);
```

});

function getDate() {
var date = new Date();

```
var add_dd = 15;

var dd = date.getDate() + add_dd; //Dia atual + 14 dias = 15 dias
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();

if (dd < 10) {
	dd = '0' + dd;
}

if (mm < 10) {
	mm = '0' + mm;
}

var result = yyyy + '-' + mm + '-' + dd;

return result;
```

}

function getDateTimestamp(date) {
var result = new Date(date);

```
return result.getTime();
```

}

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/05/2023, 15:14 | ❤️ 1

O Fluig carrega automaticamente a Moment.js no front-end. Dá pra aproveitar ela ao invés de refazer toda a roda.

```javascript
$('#data_criacao').val(moment().add(15, 'days').format('YYYY-MM-DD'));
```

---

## Resposta #8

**Rafael Oliveira** (@roliveira) — 10/05/2023, 15:38 | ❤️ 1

Excelente Bruno!
Sou iniciante na ferramenta e não conhecia este recurso. Realizarei um teste, obrigado!

---
