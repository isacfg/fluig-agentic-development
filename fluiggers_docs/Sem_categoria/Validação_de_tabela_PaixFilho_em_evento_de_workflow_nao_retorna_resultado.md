# Validação de tabela PaixFilho em evento de workflow nao retorna resultado

> **Fonte:** [https://fluiggers.com.br/t/validacao-de-tabela-paixfilho-em-evento-de-workflow-nao-retorna-resultado/1243](https://fluiggers.com.br/t/validacao-de-tabela-paixfilho-em-evento-de-workflow-nao-retorna-resultado/1243)
> **Categoria:** Sem categoria
> **Criado em:** 22/08/2022, 11:47
> **Visualizações:** 508 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 22/08/2022, 11:47

Bom dia,

Estou tentando fazer uma validação de uma tabela PaixFilho por um evento de workflow, mas a função “hAPI.getChildrenIndexes” não retorna valor. Esta mesma função em um validateForm (“form.getChildrenIndexes”) funciona. Segue um exemplo abaixo.

function validateCondPag(forma){
var idx = hAPI.getChildrenIndexes(“tableacordos”);
console.log('numero de acordos ’ + idx.length) //retorna 0 deveria retornar 2(quantidade de linhas da minha validação)
console.log('pagamento ’ + hAPI.getCardValue(“pagamento\_\_\_1”)) //retorna valor da linha 1
console.log('pagamento ’ + hAPI.getCardValue(“pagamento\_\_\_2”)) //retorna valor da linha 2
}

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 22/08/2022, 15:19 | ❤️ 1

Consegui resolver com a seguinte função:

```auto
var processo = getValue("WKNumProces");
var campos   = hAPI.getCardData(processo);
var contador = campos.keySet().iterator();

while (contador.hasNext()) {
    var id = contador.next();

    if (id.match(/campo_filho___/)) { // qualquer campo do Filho
        var campo = campos.get(id);
        var seq   = id.split("___");

        var filho1 = campos.get("campo_filho1___" + seq[1]);
        var filho2 = campos.get("campo_filho2___" + seq[1]);
    }
}

fonte: https://forum.fluig.com/2386-pai-filho-evento-workflow
```

---
