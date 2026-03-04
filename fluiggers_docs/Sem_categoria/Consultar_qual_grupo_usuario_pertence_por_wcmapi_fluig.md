# Consultar qual grupo usuario pertence por wcmapi fluig

> **Fonte:** [https://fluiggers.com.br/t/consultar-qual-grupo-usuario-pertence-por-wcmapi-fluig/2225](https://fluiggers.com.br/t/consultar-qual-grupo-usuario-pertence-por-wcmapi-fluig/2225)
> **Categoria:** Sem categoria
> **Criado em:** 25/09/2023, 13:29
> **Visualizações:** 566 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Bueno** (@Bueno) — 25/09/2023, 13:29

é possivel consultar pelo usuario a qual grupo ele pertence var user\_login = WCMAPI.getUserLogin(); estou utilizando essa função para coletar o usuario, objetivo e com o usuario consultar o dataset e ver a qual grupo ele pertence

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Guilherme Mesquita Rocha** (@gmesquita) — 25/09/2023, 16:35

Boa tarde!
Você pode fazer assim (pelo front-end):

```auto
var c1 = DatasetFactory.createConstraint("colleagueId", WCMAPI.getUserLogin(), WCMAPI.getUserLogin(), ConstraintType.MUST);
var ds_colleagueGroup = DatasetFactory.getDataset("colleagueGroup", null, [c1], null);
```

Desta forma, será retornado os grupos em que o usuário está inserido, basta acessar da seguinte forma:

```auto
for(var i = 0; i < ds_colleagueGroup.values.length; i++) {
    var groupDescription = ds_colleagueGroup.values[i]["colleagueGroupPK.groupId"]
    console.log(groupDescription);
}
```

Obs: Será inserido a posição `i` caso você esteja fazendo um loop iterando a variável `i` da sua estrutura de repetição.

Para a estrutura funcionar, você deve importar no seu HTML a biblioteca abaixo para a utilização de chamada de Dataset no front-end:

```auto
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
```

---

## Resposta #2

**Bueno** (@Bueno) — 25/09/2023, 16:51

Deu certo muito obrigado!

---
