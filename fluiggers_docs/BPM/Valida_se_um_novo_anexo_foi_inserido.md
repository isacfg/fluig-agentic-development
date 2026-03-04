# Valida se um novo anexo foi inserido

> **Fonte:** [https://fluiggers.com.br/t/valida-se-um-novo-anexo-foi-inserido/66](https://fluiggers.com.br/t/valida-se-um-novo-anexo-foi-inserido/66)
> **Categoria:** BPM
> **Criado em:** 11/03/2021, 23:25
> **Visualizações:** 1945 | **Likes:** 16 | **Respostas:** 4

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 11/03/2021, 23:25 | ❤️ 8

Validar se um ***novo*** anexo foi inserido na tarefa corrente:

```auto
function beforeTaskSave(colleagueId, nextSequenceId, userList) {

    var numState = getValue("WKNumState");
    var process = getValue("WKNumProces");
    var anexado = false;
    var message = "";

    if(numState == 0 && hAPI.listAttachments().size() < 2) {
        message += "<br/>- É necessario anexar os documentos;"
    }

    if (numState == 1){ //etapa do processo
        if (temAnexo() == false) message += "<br/>- É necessario anexar os documentos;";
    }

    if (message != "") throw "<br/><strong>Os campos abaixo são de preencimento obrigatório:</strong><br/>" + message;

    function temAnexo(){
        var constraintProcessAttachment = DatasetFactory.createConstraint('processAttachmentPK.processInstanceId', process, process, ConstraintType.MUST);
        var datasetProcessAttachment = DatasetFactory.getDataset('processAttachment', null, new Array(constraintProcessAttachment), null);

        for(var i = 0; i < datasetProcessAttachment.rowsCount; i++) {
            var constraintProcessHistory1 = DatasetFactory.createConstraint('processHistoryPK.movementSequence', datasetProcessAttachment.getValue(i, "originalMovementSequence"), datasetProcessAttachment.getValue(i, "originalMovementSequence"), ConstraintType.MUST);
            var constraintProcessHistory2 = DatasetFactory.createConstraint('processHistoryPK.processInstanceId', process, process, ConstraintType.MUST);
            var constraintProcessHistory3 = DatasetFactory.createConstraint('processHistoryPK.companyId', datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), datasetProcessAttachment.getValue(i, "processAttachmentPK.companyId"), ConstraintType.MUST);
            var constraintProcessHistory4 = DatasetFactory.createConstraint('stateSequence', numState, numState, ConstraintType.MUST);
            var datasetProcessHistory = DatasetFactory.getDataset('processHistory', null, new Array(constraintProcessHistory1, constraintProcessHistory2, constraintProcessHistory3, constraintProcessHistory4), null);
            for(var j = 0; j < datasetProcessHistory.rowsCount; j++) {
                return true;
            }
        }
        return false;
    }
}
```

---

## Resposta #1

**Thiago** (@Thiago) — 16/03/2021, 08:27 | ❤️ 4

Validações mais simples como obrigatoriedade de anexo, ou restrição de anexos, seja por quantidade, nome ou tipo pode ser feito via tela, sem código. Na aba de regras de anexo da atividade

[https://tdn.totvs.com/display/public/HF/Configurar+atividades+e+fluxos#Configuraratividadesefluxos-05.AcessarabaRegrasdeanexos](https://tdn.totvs.com/display/public/HF/Configurar+atividades+e+fluxos#Configuraratividadesefluxos-05.AcessarabaRegrasdeanexos)

![image](https://fluiggers.com.br/uploads/default/optimized/1X/b0273f2f101eaf1bde7cd2b04c59734dcd81126d_2_690x317.png)

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 16/03/2021, 08:51

Massa [@Thiago](/u/thiago) ! Já precisei utilizar esse código para exigir a inserção de pelo menos um anexo em uma atividade específica, com o processo já tendo ou não anexos. Foi um caso bem específico.

Valeu demais!

---

## Resposta #3

**Matheus Mósso** (@msmosso) — 09/11/2022, 08:44

Bom dia Daniel,

Na linha 6 não seriam dois símbolos de igualdade? Usando apenas um símbolo de igualdade você está atribuindo 0 à variável numState.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 09/11/2022, 09:02 | ❤️ 1

Tá certinho cara…corrigi o código, mó vacilo!

---

## Resposta #5

**Matheus Mósso** (@msmosso) — 09/11/2022, 19:36

Vacilão seria valeu?

---

## Resposta #6

**Daniel Cabral Santos** (@daniel.cabral) — 09/11/2022, 21:47 | ❤️ 1

Opa, foi mal…reli aqui e não estava te chamado de vacilão, estava ME chamando de vacilão!

---

## Resposta #7

**Matheus Mósso** (@msmosso) — 10/11/2022, 09:24 | ❤️ 1

Ah, tá, hahah, sem problema. Acontece, interpretar texto é complicado na internet, a gente não pega a forma que a pessoa fala e acaba interpretando errado.

---

## Resposta #8

**Guilherme Carvalho** (@guiza1carvalho) — 20/04/2023, 18:33

Daniel, se eu quiser verificar a extenção dos arquivos?

se só quiser aceitar arquivos “.pdf”, por exemplo

---

## Resposta #9

**Daniel Sales** (@Daniel_Sales) — 26/04/2023, 09:23 | ❤️ 1

A dica do amigo de fazer pelo eclipse e valida e vai te servir bem

![image](https://fluiggers.com.br/uploads/default/optimized/1X/fa20edc7b0dfaf7e22a966185118175f73bb5f4a_2_690x216.png)

Em valor vc pode colocar \*.pdf
Espero que sirva

---
