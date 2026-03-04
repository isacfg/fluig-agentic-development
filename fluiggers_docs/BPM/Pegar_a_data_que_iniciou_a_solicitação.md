# Pegar a data que iniciou a solicitação

> **Fonte:** [https://fluiggers.com.br/t/pegar-a-data-que-iniciou-a-solicitacao/169](https://fluiggers.com.br/t/pegar-a-data-que-iniciou-a-solicitacao/169)
> **Categoria:** BPM
> **Criado em:** 18/03/2021, 10:56
> **Visualizações:** 962 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Victor Castro** (@victorcastro) — 18/03/2021, 10:56

Existe uma forma de pegar a data que a solicitação foi criada sem ter que criar um campo pra salvar a data?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Alef Vinicius** (@alefvinicius) — 18/03/2021, 13:28 | ❤️ 1

Bom dia, Victor, é possível sim, mas te adianto que é melhor gravar a data do processo no formulário, só para evitar a fadiga. Kkkkkkkkkk

Você pode utilizar o dataset **processHistory** que como o nome já diz é responsável por guardar o histórico da solicitação. Assim você pode filtrar sua solicitação pelo seu ID (**processHistoryPK.processInstanceId**), nesse dataset existe a coluna de **realDateTime** que indica a data e hora que houve a movimentação, a partir daí, basta que filtre também pelo campo **previousMovementSequence** (informação da ordem de execução), nele informe que quer a movimentação de número “0”, que é a primeira movimentação do processo. Depois disso é só ser feliz, continuo optando pelo campo no formulário, mas tá aí uma possível solução. Segue exemplo abaixo, Victor:

```auto
var constraintProcessHistory1 = DatasetFactory.createConstraint('processHistoryPK.processInstanceId', '12345', '12345', ConstraintType.MUST);
    var constraintProcessHistory2 = DatasetFactory.createConstraint('previousMovementSequence', '0', '0', ConstraintType.MUST);
    var colunasProcessHistory = new Array('realDateTime');
    var datasetProcessHistory = DatasetFactory.getDataset('processHistory', colunasProcessHistory, new Array(constraintProcessHistory1, constraintProcessHistory2), null);
```

Boa sorte!

---

## Resposta #2

**Victor Castro** (@victorcastro) — 18/03/2021, 13:38 | ❤️ 1

Show [@alefvinicius](/u/alefvinicius). Tá maluco, prefiro continuar guardando a em um campo kkkkkk

Obrigado pela proposta.

---
