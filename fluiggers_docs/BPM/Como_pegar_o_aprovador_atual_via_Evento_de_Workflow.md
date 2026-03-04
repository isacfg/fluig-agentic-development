# Como pegar o aprovador atual via Evento de Workflow

> **Fonte:** [https://fluiggers.com.br/t/como-pegar-o-aprovador-atual-via-evento-de-workflow/144](https://fluiggers.com.br/t/como-pegar-o-aprovador-atual-via-evento-de-workflow/144)
> **Categoria:** BPM
> **Criado em:** 17/03/2021, 08:43
> **Visualizações:** 1389 | **Likes:** 7 | **Respostas:** 0

---

## Pergunta original

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 08:43

Olá, bom dia!

Gostaria de saber se existe a possibilidade de pegar e-mail que está registrado para o aprovador atual de uma atividade.

Falo isso, pois, estou personalizando um envio de e-mail através do evento BeforeStateEntry e lá eu preciso passar um array com o e-mail do aprovador da atividade. Mas nesse caso, os aprovadores costumam alterar frequentemente, inviabilizando realizar com um e-mail “chumbado”.

Essa é a melhor maneira de se customizar esse envio de e-mail ?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 17/03/2021, 08:59 | ❤️ 3

Olá, para pegar o usuário que finalizou a tarefa, use o dataset processTask, pegue o colleagueId, depois use no dataset colleague para pegar o e-mail… Segue um exemplo

```javascript
var task = "NUMERO DA TAREFA"
    var numSolicitacao = "NUMERO DA SOLICITACAO"


    /* processTask => DATA SET PARA PEGAR USUARIO QUE EXECUTOU A TASK */
    var c1 = DatasetFactory.createConstraint("choosedSequence", task, task, ConstraintType.MUST)
	var c2 = DatasetFactory.createConstraint("processTaskPK.processInstanceId", numSolicitacao, numSolicitacao, ConstraintType.MUST)

	var constraints = new Array(c1, c2)

	var ds = DatasetFactory.getDataset("processTask", null, constraints, null);


    /* colleague => DATASET PARA PEGAR O E-MAIL DO USUARIO USANDO COMO CONSTRAINT O RESULTADO DO DATASET processTask */
    c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", ds.getValue(0, 'processTaskPK.colleagueId'), ds.getValue(0, 'processTaskPK.colleagueId'), ConstraintType.MUST)

    constraints = new Array(c1)

    ds = DatasetFactory.getDataset("colleague", null, constraints, null)

    var mail = ds.getValue(0, "mail")
```

Acho que isso resolve. Qualquer coisa responde aí que a gente vai testando.

Abs

---

## Resposta #2

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 09:09

Olá eduardo, bom dia!

Primeiramente muito obrigado pela ajuda!

Segundo:

-   Uma dúvida, nesse caso eu vou conseguir pegar o e-mail do usuário somente depois da aprovação, correto? Pois eu precisava pegar o e-mail da pessoa antes mesmo de ela aprovar

---

## Resposta #3

**Eduardo Vantini Neto** (@eduardo.vantini) — 17/03/2021, 09:58 | ❤️ 3

Olá Julio.

Da sim. Nesse caso você precisa pegar o usuário responsável pela tarefa .

Você vai usar a mesma consulta, porém, na hora que buscar no dataset colleague, você vai mudar o campo recuperado do dataset processTask

Onde está:

```javascript
c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", ds.getValue(0, 'processTaskPK.colleagueId'), ds.getValue(0, 'processTaskPK.colleagueId'), ConstraintType.MUST)
```

Você coloca:

```javascript
c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", ds.getValue(0, 'choosedColleagueId'), ds.getValue(0, 'choosedColleagueId'), ConstraintType.MUST)
```

Lembrando que se você for fazer no formulário, muda como pegar o valor do dataset, usa-se ds.values\[0\].choosedColleagueId.

Se eu entendi certo é isso.

Abs.

---

## Resposta #4

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 11:02 | ❤️ 1

Muito obrigado!

Vou testar.

---
