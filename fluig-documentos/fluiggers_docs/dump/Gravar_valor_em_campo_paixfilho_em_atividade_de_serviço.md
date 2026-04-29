# Gravar valor em campo paixfilho em atividade de serviço

> **Fonte:** [https://fluiggers.com.br/t/gravar-valor-em-campo-paixfilho-em-atividade-de-servico/1597](https://fluiggers.com.br/t/gravar-valor-em-campo-paixfilho-em-atividade-de-servico/1597)
> **Categoria:** Sem categoria
> **Criado em:** 24/01/2023, 11:29
> **Visualizações:** 362 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 24/01/2023, 11:29

Olá, estou utilizando uma atividade de serviço e executando o startProcess a partir do tamanho de uma tabela e gostaria de salvar em um campo dessa mesma tabela, o atributo iProcess retornado dessa execução, porém não sei tratar o hAPI.setCardValue para receber o valor levando em conta que essa rotina está em um laço.

Tentei dessas duas formas. Sem sucesso

```auto
hAPI.setCardValue("number_iProcess___" + index, retorno.iProcess);
```

e

```auto
hAPI.setCardValue('number_iProcess___'+index+' ', retorno.iProcess);
```

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 25/01/2023, 00:33

Olá, tudo bem? Tenta assim:

```auto
var childData = new java.util.HashMap();

childData.put("number_iProcess", retorno.iProcess);

hAPI.addCardChild("nomeTabelaPaiFilho", childData);
```

Acredito que assim vai funcionar.

Abs.

---

## Resposta #2

**Wanderley Junior** (@gomeswjunior) — 25/01/2023, 09:28

Dessa forma não atende porque o addCardChild cria novas linhas na tabela e este não é meu intuito. Já tenho as linhas do filho, assim como os índices. Preciso mesmo apenas salvar o iProcess no filho já existente.

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Matheus Loreto** (@matheusl) — 25/01/2023, 10:06

Acredito que para montar o laço, você esteja executando a função abaixo.

```auto
var index = hAPI.getChildrenIndexes("suaTabela");
```

Tente colocar desta forma dentro do laço:

```auto
hAPI.setCardValue("number_iProcess___" + index[i], retorno.iProcess);
```

Tenho um exemplo muito semelhante que executa no beforeStateEntry e funciona certinho.

---

## Resposta #4

**Wanderley Junior** (@gomeswjunior) — 25/01/2023, 13:49

Funcionou dessa forma. Obrigado pelo apoio.

```auto
hAPI.setCardValue("number_iProcess___" + index, retorno.iProcess);
```

---
