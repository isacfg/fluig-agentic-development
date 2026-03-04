# Multiplos usuários acessando a mesma atividade.

> **Fonte:** [https://fluiggers.com.br/t/multiplos-usuarios-acessando-a-mesma-atividade/1541](https://fluiggers.com.br/t/multiplos-usuarios-acessando-a-mesma-atividade/1541)
> **Categoria:** BPM
> **Criado em:** 14/12/2022, 10:21
> **Visualizações:** 598 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Abel Gabriel do Carmo** (@abel_carmo) — 14/12/2022, 10:21

Estou desenvolvendo um processo no Fluig, aonde preciso que vários usuários acessem o mesma atividade de aprovação.

O processo consiste em usuários diversos aprovarem ou reprovarem a solicitação do processo. Porém cada solicitação do processo pode mudar a quantidade de aprovadores.

Exemplo: uma solicitação terá 5 aprovadores e a outra terá 3 aprovadores.

Gostaria de que independente do numero de aprovadores, todos consigam acessar a atividade de aprovação e todos precisarão aprovar o processo para ele continuar.

Isso é possível?

---

## Resposta #1

**Patrick Cavalcante Moraes** (@Patrick_Cavalcante) — 15/12/2022, 14:23

Boa tarde,

Você pode colocar na sua atividade a atribuição por campo do formulário, neste campo você cria uma lista com as matriculas recebidas dos aprovadores.

$(“#listAll”).val(newArray);

Veja se te ajuda!

---

## Resposta #2

**Eduardo Vantini Neto** (@eduardo.vantini) — 16/12/2022, 11:34

Olá [@abel\_carmo](/u/abel_carmo)! Vou dar uma ideia aqui pra ver se atente seu problema
Para você atribuir diversos usuários a mesma atividade, você pode usar papéis ou grupos para cada atividade e desenvolver um mecanismo de atribuição customizado tipo o exemplo:

```auto
var userList = new java.util.ArrayList();
    var state = getValue("WKCurrentState");


    if (state == "{id_atividade}") {
        var group = "GrupoAtividade";

        var c1 = DatasetFactory.createConstraint('colleagueGroupPK.companyId', '1', '1', ConstraintType.MUST)
        var c2 = DatasetFactory.createConstraint('colleagueGroupPK.groupId', group, group, ConstraintType.MUST)

        var dsGroup = DatasetFactory.getDataset('colleagueGroup', null, new Array(c1, c2), null);

        if (dsGroup.rowsCount != 0) {
            for (var i = 0; i < dsGroup.rowsCount; i++) {

                userList.add(dsGroup.getValue(i, "colleagueGroupPK.colleagueId"));

            }
        } else {
            throw "Não foram encontradoes usuários no grupo indicado";
        }
    }

    return userList;
```

Assim ele vai atribuir todos os usuários do grupo como responsáveis da atividade

Para controlar a aprovação, vou deduzir que ao reprovar o fluxo é movimentado para determinada atividade e caso seja aprovado por todos os responsáveis ele é movimentado para outra atividade.

Sendo esse o caso, vou assumir que assim que qualquer responsável reprovar o fluxo irá ser movimentado imediatamente para atividade correspondente, já que não se faz mais necessária a analise dos outros participantes, pois é necessário unanimidade para que a solicitação seja aprovada.

Estou assumindo também que existe um campo no formulário que controla se foi aprovado ou não.

Para controlar isso vou dar um exemplo usando o evento calculateAgreement

```auto
function calculateAgreement(currentState, agreementData) {
    var response = hAPI.getCardValue("aprovacao"); //CAMPO COM A RESPONTA A = APROVADO | R = REPROVADO
    var proxState = 999 //ID DA ATIVIDADE QUE O FLUXO IRA CASO REPROVADO
    var destUser = "user" //USUARIO OU GRUPO OU PAPEL QUE IRÁ ASSUMAR A ATIVIDADE DE DESTINO

    if (response != "A") { // EXECUTA APENAS SE REPROVADO
        agreementData.put("currentPercentage", 100); //ATRIBUI 100 PORCENTO AO CONSENSO
        agreementData.put("currentDestState", proxState); //ATIVIDADE DE DESTINO EM CASO DE REPROVA
        agreementData.put("currentDestUsers", destUser); // USUARIO QUE IRÁ ASSUMIR A ATIVIADE DE DESTINO
    }
}
```

Testa aí… vê se te atende.

Abs

---
