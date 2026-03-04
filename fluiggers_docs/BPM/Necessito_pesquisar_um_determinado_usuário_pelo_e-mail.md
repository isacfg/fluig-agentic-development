# Necessito pesquisar um determinado usuário pelo e-mail

> **Fonte:** [https://fluiggers.com.br/t/necessito-pesquisar-um-determinado-usuario-pelo-e-mail/2308](https://fluiggers.com.br/t/necessito-pesquisar-um-determinado-usuario-pelo-e-mail/2308)
> **Categoria:** BPM
> **Tags:** `dataset`, `usuario`
> **Criado em:** 23/10/2023, 08:31
> **Visualizações:** 163 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Fabiano Filla** (@Fabiano_Filla) — 23/10/2023, 08:31

Necessito pesquisar um determinado usuário pelo e-mail. Criei uma função mas não funciona.

function getUser(emailGer){
c1 = DatasetFactory.createConstraint(“colleaguePK.mail”, emailGer + ‘%’, emailGer + ‘%’, ConstraintType.MUST);
var constraints = new Array(c1);
var idUser = 0;

```
console.log("entrou getUser -> ", emailGer);

//Busca o dataset
var dataset = DatasetFactory.getDataset("colleague", null, constraints, null);

if(dataset != null && dataset.values != null && dataset.values.length > 0 && dataset.values != undefined){
    for(var j = 0; j < dataset.values.length; j++) {
    	idUser = dataset.values[j]["colleagueId"];
    	console.log("idUser -> ", idUser);
    }
}

return idUser;
```

}

---

## Resposta #1

**Everton Alves** (@everton) — 24/11/2023, 10:43

Olá!

Você precisa usar o método setLikeSearch na sua constraint, exemplo:

```auto
c1 = DatasetFactory.createConstraint("colleaguePK.mail", emailGer + '%', emailGer + '%', ConstraintType.MUST);
c1.setLikeSearch(true);

var constraints = new Array(c1);

// seu código
```

---
