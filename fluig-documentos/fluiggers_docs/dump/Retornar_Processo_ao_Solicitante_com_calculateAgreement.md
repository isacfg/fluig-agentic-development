# Retornar Processo ao Solicitante com calculateAgreement

> **Fonte:** [https://fluiggers.com.br/t/retornar-processo-ao-solicitante-com-calculateagreement/917](https://fluiggers.com.br/t/retornar-processo-ao-solicitante-com-calculateagreement/917)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `javascript`
> **Criado em:** 09/02/2022, 12:38
> **Visualizações:** 731 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**David bueno de campos junior** (@David_Junior) — 09/02/2022, 12:38

Prezados Senhores, Tudo bem?

Estou tentando Fazer um processo onde retorno o formulário para edição do solicitante caso seja encontrado erros durante o processo de aprovação.

Devido a minha necessidade de múltiplas aprovações, encontrei a função `calculateAgreement` para me auxiliar caso um dos aprovadores recusem o chamado, a função da recusa está funcionando, porem não estou conseguindo retornar o chamado para quem abriu para realizar as correções em caso de um dos aprovadores encontrar algum erro.

Estou utilizando esse código:

```auto
function calculateAgreement(currentState, agreementData) {

	agreementData.put("currentDestState", 31);
	agreementData.put("currentPercentage", 100);
	agreementData.put("currentDestUsers", autor);

    log.info("Consenso Atual: " + agreementData.get("currentPercentage"));
    log.info("Atividade Destino Atual: " +  agreementData.get("currentDestState"));
    log.info("Usuario Destino Atual: " + autor);

}
```

Onde tem a variável autor, seria o solicitante do processo. Já tentei buscar via DATASET criando alguns filtros usando `var autor = hAPI.getCardValue("WKNumProces");` porem sempre que mostro no log o ***autor*** ele retorna como NULL, não sei se pelo fato de esse código so ser aceito no FRONT, ou algo semelhante.

Precisava de uma ajuda para buscar a matricula do solicitante para colocar na variável autor.

Obrigado.

---

## Resposta #1

**Abel Gabriel do Carmo** (@abel_carmo) — 08/03/2023, 09:40

Acredito que isso possa te ajudar, o código abaixo pega o usuário que criou a solicitação e atribui ele como responsável da próxima atividade.

```javascript
var processId = getValue("WKNumProces");

var constraints = [DatasetFactory.createConstraint("workflowProcessPK.processInstanceId", processId, processId, ConstraintType.MUST)];
var dataset = DatasetFactory.getDataset("workflowProcess", null, constraints, null );

agreementData.put("currentDestUsers", dataset.getValue(0, "requesterId"));
```

---

## Resposta #2

**Angelo Batista** (@Angelo_Batista) — 24/10/2024, 11:02

Uma alternativa pode ser selecionar o mecanismo de atribuição “Atribuição por Executor de Atividade” e configurar para o executor da atividade de início.

---
