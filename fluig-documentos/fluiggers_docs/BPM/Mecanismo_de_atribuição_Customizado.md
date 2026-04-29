# Mecanismo de atribuição Customizado

> **Fonte:** [https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado/580](https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado/580)
> **Categoria:** BPM
> **Criado em:** 26/07/2021, 14:14
> **Visualizações:** 854 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Luis Felipe** (@Luis_Felipe) — 26/07/2021, 14:14

Estou tentando fazer o Mecanismo de atribuição abaixo porém, ele nao entra no primeiro if sempre entra no segundo, poderiam me dizer o que esta errado?

var userList = new java.util.ArrayList();

```
var achouAprovador = 0

var dataset = DatasetFactory.getDataset('ds_recupera_pai_filho_GB', null, null, null)

var valorTotalSolicit = hAPI.getCardValue('valorTotal')

for (var i = 0; i < dataset.rowsCount; i++) {

    var valorAprovador = dataset.getValue(i, "Valor da Aprovação")

    var idAprovador = dataset.getValue(i, "ID Aprovador")

    if (valorTotalSolicit <= valorAprovador) {

        userList.add(idAprovador)

        achouAprovador = 1

        return

    }

}

if (achouAprovador == 0) {

    userList.add('dev')

}

return userList;
```

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 27/07/2021, 08:28

Bom dia,

Verifique no log o vai ser impresso. Linha antes do for.

```auto
var userList = new java.util.ArrayList();

var achouAprovador = 0

var dataset = DatasetFactory.getDataset('ds_recupera_pai_filho_GB', null, null, null)

var valorTotalSolicit = hAPI.getCardValue('valorTotal')
log.info("Quantidade de registro: "+dataset.rowsCount);
for (var i = 0; i < dataset.rowsCount; i++) {

    var valorAprovador = dataset.getValue(i, "Valor da Aprovação")

    var idAprovador = dataset.getValue(i, "ID Aprovador")

    if (valorTotalSolicit <= valorAprovador) {

        userList.add(idAprovador)

        achouAprovador = 1

        return

    }

}

if (achouAprovador == 0) {

    userList.add('dev')

}

return userList;
```

Verifique se a quantidade e maior que zero.

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 27/07/2021, 08:41

Bom dia,

Seus dados de retorno estão vindo como Numérico? Talvez precise dar um parseFloat neles. Ele pode estar conseguindo comparar o “igual” mas quando é “menor” ele se perde para string.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Luis Felipe** (@Luis_Felipe) — 27/07/2021, 09:10

Pessoal, obrigado a todos o grande problema estava no nome do dataset que tem acentos, tirei os acentos e funcionou. Obrigado!

---

## Resposta #4

**Marcos Jhollyfer Felix Rodrigues** (@Jhollyfer) — 27/07/2021, 18:12 | ❤️ 1

Opa, tudo bem?
Resolvi esse mesmo problema com as seguintes linhas abaixo.

O valor do dataset *(valorAprovador)* é capturado com um ponto ( . ) e o *valorTotalSolicit* vem com uma vírgula ( , ). Acontece que a condição do IF não estava sendo satisfeita por este motivo. Isso é resolvido com o *replace()*. E como os dois valores da condição são strings, creio que seja mais viável transformá-las em float com *parseFloat*

```auto
var valorTotalSolicit = parseFloat(hAPI.getCardValue("valorTotal").replace(',', '.'));

var valorAprovador = parseFloat(dataset.getValue(index, 'Valor Aprovador'));
```

---

## Resposta #5

**system** (@system) — 28/07/2021, 10:13

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
