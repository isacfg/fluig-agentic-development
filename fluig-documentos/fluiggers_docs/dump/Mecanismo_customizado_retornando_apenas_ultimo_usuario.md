# Mecanismo customizado retornando apenas ultimo usuario

> **Fonte:** [https://fluiggers.com.br/t/mecanismo-customizado-retornando-apenas-ultimo-usuario/2071](https://fluiggers.com.br/t/mecanismo-customizado-retornando-apenas-ultimo-usuario/2071)
> **Categoria:** BPM
> **Tags:** `processo`
> **Criado em:** 25/07/2023, 13:56
> **Visualizações:** 199 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Jhonata Martins da Costa** (@Jhomcosta) — 25/07/2023, 13:56

Boa tarde pessoal!

Possuo um mecanismo customizado que estava funcionando normalmente, porem notei hoje que o mesmo nao esta mais funcionando como deveria, nao sei se foi realizada alguma atualização que causou o mal funcionamento do mesmo.

O mecanismo deveria listar os usuarios de um grupo de acordo com a unidade da empresa que é colocada no forms do processo(atribuida automaticamente no displayfields do forms), porem ele esta atribuindo automaticamente sempre para o ultimo usuario do grupo ao inves de abrir a lista de possiveis usuários.

Segue codigo do mecanismo:

```auto
function resolve(process,colleague){
    var userList = new java.util.ArrayList();
    var unit = hAPI.getCardValue("codigo_estabelecimento")
    var unitShoppingGroup = ''

    if(unit == 2) {
        unitShoppingGroup = "Compras"
    } else if (unit == 1) {
        unitShoppingGroup = "Compras_SP"
    } else {
        log.info('Grupo de compras inexistente para a unidade selecionada')
        log.info(unitShoppingGroup)
        throw 'Grupo de compras inexistente para a unidade selecionada'
    }

    var c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", unitShoppingGroup, unitShoppingGroup, ConstraintType.MUST)
    var constraints = new Array(c1)
    var shoppingUsers = DatasetFactory.getDataset('colleagueGroup', null, constraints, null)

    log.info('shoppingUsers')
    log.info(JSONUtil.toJSON(shoppingUsers.values))

    for(var i = 0; i < shoppingUsers.values.length; i++) {
        userList.add(shoppingUsers.getValue(i, "colleagueGroupPK.colleagueId"))
    }

    log.info('userList')
    log.info(JSONUtil.toJSON(userList))

    return userList;

}
```

Nos logs do servidor foram exibidos os ids dos usuarios corretamente, coforme abaixo:

2023-07-25 12:39:35,570 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (pool-525-thread-1) shoppingUsers
2023-07-25 12:39:35,570 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (pool-525-thread-1) \[ \[ “1”, “002507”, “Compras” \], \[ “1”, “002415”, “Compras” \] \]
2023-07-25 12:39:35,570 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (pool-525-thread-1) userList
2023-07-25 12:39:35,571 INFO \[com.datasul.technology.webdesk.customization.ScriptingLog\] (pool-525-thread-1) \[ “002507”, “002415” \]

Fico grato se puderem me auxiliar.

---
