# Listar solicitações ativas e canceladas no dataset

> **Fonte:** [https://fluiggers.com.br/t/listar-solicitacoes-ativas-e-canceladas-no-dataset/654](https://fluiggers.com.br/t/listar-solicitacoes-ativas-e-canceladas-no-dataset/654)
> **Categoria:** Formulários
> **Tags:** `form`, `dataset`
> **Criado em:** 16/09/2021, 11:13
> **Visualizações:** 1384 | **Likes:** 6 | **Respostas:** 2

---

## Pergunta original

**Victor Castro** (@victorcastro) — 16/09/2021, 11:13

Qual a melhor forma de pesquisar no dataset interno do formulário, ou em outro(s) dataset(s), quais as solicitações abertas/finalizadas de um processo?

Preciso pesquisar se determinado valor de um campo já foi preenchido anteriormente em outras solicitações, não contando as solicitações canceladas, somente as que ainda estão abertas ou foram finalizadas corretamente.

---

## Resposta #1

**Rogério Collonhese Santana** (@Rogerio_Collonhese_S) — 16/09/2021, 15:38 | ❤️ 2

Boa tarde Victor,

no dataset “workflowProcess” tem uma coluna chamada “status” nela vc vai encontrar os seguintes valores:
0 = Em Aberto;
1 = Cancelado;
2 = Finalizado;

já que vc quer pegar as informações do que já foram finalizadas filtra pelo 2.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 16/09/2021, 15:56

Rodrigo, obrigado pela resposta.

Realmente, por essa coluna eu consigo saber só as solicitações abertas e finalizadas. Mas aí agora eu teria que saber quais solicitações tem um valor X em um campo.

Pra isso eu ia ter que pesquisar todos os **documentId** do dataset interno do formulário, e filtrar o workflowProcess com esses ids pra descobrir quais estão abertos/finalizados?

Que trampo rs

---

## Resposta #3

**Rogério Collonhese Santana** (@Rogerio_Collonhese_S) — 16/09/2021, 16:29 | ❤️ 3

Realmente é um trampinho chato, o que eu faço para incurtar a procura é sempre quando crio um Processo, é criar um campo “hidde” que recebe o id do processo, assim que ele é criado.

```javascript
function afterProcessCreate(processId){
    hAPI.setCardValue("numProcess", processId);
}
```

assim quando quero procurar algum campo em um processo, eu só cruzo as informações do dataset “workflowProcess” com o do formulário.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 16/09/2021, 17:28

Essa solução de salvar o número do processo salva muito na hora das consultas.

Aprendi desde cedo a fazer isso, hehehe.

---

## Resposta #5

**Wasley Santos** (@Wasley_Santos) — 02/04/2022, 14:59 | ❤️ 1

Oi [@victorcastro](/u/victorcastro)

Você precisará fazer algo conforme exemplo abaixo:

```auto
var constraintsForm   = new Array();
//campo que você deseja filtrar
constraintsForm.push(DatasetFactory.createConstraint("campo", "valor", "valor", ConstraintType.MUST));
constraintsForm.push(DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST));
	 constraintsForm.push(DatasetFactory.createConstraint("checkSecurity", "false", "false", ConstraintType.MUST));
	 constraintsForm.push(DatasetFactory.createConstraint("userSecurityId", "admin", "admin", ConstraintType.MUST));
	 var datasetForm = DatasetFactory.getDataset("DSliberacaoDocumento", null, constraintsForm, null);
```
```
if (datasetForm != null && datasetForm.rowsCount > 0) {
	log.info("------BUSCA SOLICITAÇÕES PARA VERIFICAR STATUS-------");
	for (var i = 0; i < datasetForm.rowsCount; i++){
			var solicitacao = datasetForm.getValue(i,"solicitacao");
			var constraintsHistorico  = new Array();
			constraintsHistorico.push(DatasetFactory.createConstraint("workflowProcessPK.processInstanceId", solicitacao , solicitacao, ConstraintType.MUST));
			constraintsHistorico.push(DatasetFactory.createConstraint("status", 0 , 0, ConstraintType.MUST));
			var datasetProcesso = DatasetFactory.getDataset("workflowProcess", null, constraintsHistorico, null);

			 if (datasetProcesso != null && datasetProcesso.rowsCount > 0){
				//Aqui vai entrar as solicitações em aberto do campo filtrado
			}


	}
}
```

---
