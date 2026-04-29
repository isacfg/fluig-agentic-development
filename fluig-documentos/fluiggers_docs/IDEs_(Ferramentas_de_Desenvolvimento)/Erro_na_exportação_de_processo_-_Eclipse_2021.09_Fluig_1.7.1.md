# Erro na exportação de processo - Eclipse 2021.09/Fluig 1.7.1

> **Fonte:** [https://fluiggers.com.br/t/erro-na-exportacao-de-processo-eclipse-2021-09-fluig-1-7-1/685](https://fluiggers.com.br/t/erro-na-exportacao-de-processo-eclipse-2021-09-fluig-1-7-1/685)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Criado em:** 29/09/2021, 11:38
> **Visualizações:** 457 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Luan Alves** (@akaluan) — 29/09/2021, 11:38

Erro informado ao tentar exportar ![image](https://fluiggers.com.br/uploads/default/original/1X/5e82b627e15da95e7382235c0fa96e62c8163917.png)

Código do script:

function intermediateconditional2() {

```
var valorDesejado = hAPI.getCardValue("valorDesejado")

var dataset = DatasetFactory.getDataset("dsValorDolar", null, null, null)


var valorAtual = dataset.getValue(0, "valorDolar")

if (valorAtual <= valorDesejado) {

    return true

}
```

}

O erro está na sintaxe ou na IDE?

---
