# startProcess > "javax.xml.ws.soap.SOAPFaultException: array element type mismatch"

> **Fonte:** [https://fluiggers.com.br/t/startprocess-javax-xml-ws-soap-soapfaultexception-array-element-type-mismatch/2626](https://fluiggers.com.br/t/startprocess-javax-xml-ws-soap-soapfaultexception-array-element-type-mismatch/2626)
> **Categoria:** Widgets
> **Tags:** `form`
> **Criado em:** 06/03/2024, 13:52
> **Visualizações:** 134 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Herick Freitas** (@herickfreitas) — 06/03/2024, 13:52

Boa tarde Pessoal
Tenho uma widget que faz start de um processo com base nas informações preenchidas, tenho alguns que não estão funcionando adequadamente e fica dando a mensagem “javax.xml.ws.soap.SOAPFaultException: array element type mismatch”.
Alguma dica?

```auto
var card = JSON.stringify({"codProjeto":"88568","nomeProjeto":"Consulta de Entrada Itens com suas Notas Fiscais e impostos","prioridade":"Baixa",
"matriculaSolicitante":"MARCIA.MACEDO","emailSolicitante":"marciamacedo@fake.com.br","nomeSolicitante":"MARCIA MACEDO","departamento":"FISCAL","matriculaResponsavel":"273",
"emailResponsavel":"marcelo@fake.com.br","nomeResponsavel":"Marcelo Carvalho","dataRegistro":"01/02/2024","dataInicio":"03/01/2024","dataFim":"05/02/2024",
"escopo":"Identificar entradas de itens com suas respectivas notas fiscais Informando seus valores unitários, alíquota de ipi, alíquota de icms, natureza de operação, serie, nome e código do fornecedor e outras informações pertinentes.",
"codAtividade":"1","nomeAtividade":"Identificar relacionamentos","dataRegistroAtividade":"01/02/2024","dataInicioAtividade":"03/01/2024","dataFimAtividade":"03/01/2024",
"matriculaResponsavelAtividade":"273","emailResponsavelAtividade":"marcelo@fake.com.br","nomeResponsavelAtividade":"Marcelo Carvalho",
"descricaoAtividade":"Identificar relacionamentos","_documentid":"242066","_codAtividade":"1"});

var datasetConfig	= DatasetFactory.getDataset("ds_configFluig", null, null, null);
var usuarioFluig	= datasetConfig.values[0]["MATRICULA"];

var c1 = DatasetFactory.createConstraint('cardData', card, '', ConstraintType.MUST);
var c2 = DatasetFactory.createConstraint('comments', 'Iniciado via ws', '', ConstraintType.MUST);
var c3 = DatasetFactory.createConstraint('attachments', '', '', ConstraintType.MUST);
var c4 = DatasetFactory.createConstraint('colleagueIds', ["273"], '', ConstraintType.MUST);
var c5 = DatasetFactory.createConstraint('managerMode', 'false', '', ConstraintType.MUST);
var c6 = DatasetFactory.createConstraint('appointment', '', '', ConstraintType.MUST);
var c7 = DatasetFactory.createConstraint('choosedState', '5', '', ConstraintType.MUST);
var c8 = DatasetFactory.createConstraint('userId', usuarioFluig, '', ConstraintType.MUST);
var c9 = DatasetFactory.createConstraint('completeTask', 'true', '', ConstraintType.MUST);
var c10 = DatasetFactory.createConstraint('companyId', '1', '', ConstraintType.MUST);
var c11 = DatasetFactory.createConstraint('processId', 'RealizarAtividadeProjeto', '', ConstraintType.MUST);

var dsstartProcess = DatasetFactory.getDataset('ds_StartProcessSOAP', null, new Array(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11), null);
```

---

## Resposta #1

**Pablo Valle** (@pablooav) — 22/03/2024, 18:18

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/herickfreitas/48/245_2.png) herickfreitas:
>
> > array element type mismatch

Este erro ele acontece pois vc está passando o tipo de algum dos parâmetros do startProcess de forma incorreta, exemplo, ele espera um parâmetro do tipo INT e vc está enviando uma string.

Confere dentro do seu dataset se está enviando corretamente, por exemplo o método startProcess espera os parâmetros da seguinte forma:

```auto
startProcess(String user, String password, int companyId, String processId, int choosedState, String[] colleagueIds, String comments, String userId, boolean completeTask, ProcessAttachmentDto[] attachments, String[][] cardData, ProcessTaskAppointmentDto[] appointment, boolean managerMode)
```

---
