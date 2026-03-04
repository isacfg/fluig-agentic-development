# Datasets internos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Datasets+internos](https://tdn.totvs.com/display/fluig/Datasets+internos)

---

Em atualização

Em breve todos os datasets internos do TOTVS Fluig Plataforma estarão listados aqui. Aguarde!

# Objetivo

* * *

O objetivo deste documento é descrever a utilização de datasets internos da plataforma, mostrar seus campos e respectivos detalhes, disponibilizando exemplos de utilização de cada dataset.



Dica!

A partir da **[atualização Lake 1.7.0-200714](https://tdn.totvs.com/x/SGHoI#Atualizações\(1.7.0\)-200714)** os datasets internos passam a ter controle de permissionamento pelo Painel de controle. Saiba mais na documentação de [Recursos de permissão em APIs e Webservices](https://tdn.totvs.com/pages/viewpage.action?pageId=547233188) para mais detalhes.



## Datasets de Aprendizado

* * *

### *catalogItemDataset* - Catálogo de Aprendizado

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset de catálogo de itens de aprendizado permite consultar os itens do catálogo do tipo Treinamento, Trilha, Pasta ou Link.

Coluna

Descritivo

Valor de Exemplo

id

ID do registro

2007

parentItemId

ID do item pai

703

code

Sigla

"bancodedados"

name

Nome

"Banco de Dados"

status

Status

*AVAILABLE*, *OBSOLETE**, CLOSING* ou *ARCHIVED*

author

Autor

"Marcelo Rodrigo"

cost

Custo

5

workload

Carga Horária (em minutos)

91

preExam

ID do Pré Exame

93

posExam

ID do Pós Exame

77

reaction

ID da Avaliação de Reação

121

image

Imagem

"database.png"

type

Tipo do Item de Catálogo

*com.totvs.elearning.core.catalog.Folder* ou
*com.totvs.elearning.core.catalog.Link* ou
*com.totvs.elearning.core.catalog.Track* ou
*com.totvs.elearning.core.catalog.Training*

#### Treinamentos associados a uma trilha

Se você deseja localizar treinamentos que estejam associados a uma trilha, você pode usar a constraint idParentTrack para a sua pesquisa.

Exemplo: localizando os treinamentos que fazem parte a trilha com o ID de registro 357:

```
var constraintOne = DatasetFactory.createConstraint("idParentTrack", "357", "357", ConstraintType.MUST);
var constraints = new Array(constraintOne);
var datasetValues = DatasetFactory.getDataset("catalogItemDataset", null, constraints, null);
```

*Saiba mais [como acessar datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets#DesenvolvimentodeDatasets-AcessandoumDataset).*



### *disciplineItemDataset* - Catálogo de Disciplinas

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset de catálogo de disciplinas permite consultar os itens do catálogo de disciplinas do tipo Disciplina, Pasta ou Link. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

ID do registro

197

parentItemId

ID do item pai

53

code

Sigla

"sociologia"

name

Nome

"Sociologia Aplicada"

minimumScoreApprove

Pontuação mínima para aprovação

75

type

Tipo do Item de Catálogo

*com.totvs.elearning.core.discipline.Discipline* ou
*com.totvs.elearning.core.discipline.DisciplineCatalogItem* ou
*com.totvs.elearning.core.discipline.LinkDiscipline* ou
*com.totvs.elearning.core.discipline.FolderDiscipline*

workload

Carga Horária (em minutos)

61

nameCoordinator

Nome do Coordenador

"Marcelo"

lastnameCoordinator

Sobrenome do Coordenador

"Rodrigo"

image

Imagem

"database.png"

### *enrollmentDataset* - Matrículas

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset de matrículas permite consultar as matrículas realizadas na área de aprendizado do TOTVS Fluig Plataforma. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

ID do registro

2003

nameUser

Nome do Usuário

"Marcelo"

lastNameUser

Sobrenome do Usuário

"Rodrigo"

userfluigId

ID do usuário no TOTVS Fluig Plataforma

33

status

[Status da matrícula](#Datasetsinternos-statusMatricula)

*ENROLLED*, *STARTED, FINISHED, CANCELLED* ou *BLOCKED*

finalStatus

[Status final da matrícula](#Datasetsinternos-statusFinalMatricula)

*SUCCESSFUL\_POS\_TEST, SUCCESSFUL\_PRE\_TEST, SUCCESSFUL\_SCORM,
UNSUCCESSFUL\_POS\_TEST, UNSUCCESSFUL\_PRE\_TEST, UNSUCCESSFUL\_SCORM,
UNSUCCESSFUL\_EXPIRED, CANCELLED, SUCCESSFUL, UNSUCCESSFUL* ou *WITHOUT\_ACCESS*

score

Pontuação

97.00

enrollmentRequestId

ID da requisição

91

dateEnrollment

Data da Matrícula

2015-06-11T17:05:08.011-03:00

dateConclusion

Data de Conclusão

2015-07-14T18:06:09.012-03:00



#### Status das Matrículas

Um pouco mais sobre o **status** das matrículas:

Status

Descritivo

ENROLLED

Estado inicial da matrícula, atribuída no momento que a requisição é aprovada e a respectiva matrícula gerada.

STARTED

Estado que inidica que o usuário iniciou o treinamento / trilha / turma

FINISHED

Estado que indica que o usuário finalizou o treinamento / trilha / turma

CANCELLED

Estado que indica o cancelamento da matrícula

BLOCKED

Estado que indica o bloqueio da matrícula



#### Status final das Matrículas

Um pouco mais sobre o **status final** das matrículas:

Status

Descritivo

SUCCESSFUL\_POS\_TEST

Estado que indica matrícula concluída com êxito no pós-teste

SUCCESSFUL\_PRE\_TEST

Estado que indica matrícula concluída com êxito no pré-teste, não necessitando do restante do treinamento

SUCCESSFUL\_SCORM

Estado que indica matrícula concluída com êxito em conteúdo SCORM selecionado como critério de aprovação

UNSUCCESSFUL\_POS\_TEST

Estado que indica matrícula não obteve êxito na conclusão do pós-teste

UNSUCCESSFUL\_PRE\_TEST

Estado que indica matrícula não obteve êxito na conclusão do pré-teste

UNSUCCESSFUL\_SCORM

Estado que indica matrícula não obteve êxito na conclusão de um conteúdo SCORM selecionado como critério de aprovação

UNSUCCESSFUL\_EXPIRED

Estado que indica matrícula não obteve êxito na conclusão pois expirou

CANCELLED

Estado que indica matrícula cancelada

SUCCESSFUL

Estado que indica matrícula concluída com êxito em treinamento com uma das seguintes situações:

-   -   Sem pré-teste;
    -   Sem pós-teste;
    -   Em parte de uma turma

UNSUCCESSFUL

Estado que indica matrícula não obteve êxito em treinamento com uma das seguintes situações:

-   -   Sem pré-teste;
    -   Sem pós-teste;
    -   Em parte de uma turma

WITHOUT\_ACCESS

Estado que indica usuário matriculado em turma ou treinamento, porém sua matrícula expirou sem registro de acesso



### *enrollmentRequestDataset* - Requisições de Matrículas

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset de requisição de matrículas permite consultar as requisições de matrículas realizadas na área de aprendizado do TOTVS Fluig Plataforma. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

ID do Registro

1999

classId

ID da Turma

237

catalogItemId

ID da Trilha / Treinamento

561

enrollmentId

ID da Matrícula

739

itemType

Tipo de Matrícula

*NormalClass* ou *Track/Training*

userRequestingId

ID Usuário Requisitante

571

userApproverId

ID Usuário Aprovador

13

userfluigId

ID do usuário matriculado no TOTVS Fluig Plataforma

339

dateRequest

Data da Requisição

2015-06-11T17:05:08.011-03:00

status

Status da Requisição

*STANDBY, APPROVED, REPROVED* ou *CANCELLED*

### ***enrollmentTopicDataset*** - Execuções em Tópicos

**\* TOTVS Fluig Plataforma 1.5.4 ou superior**

O dataset de execuções em tópicos permite consultar os tópicos executados pelo usuário matriculado. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

topicId

ID do tópico executado

20159

topicName

Nome do tópico

"Tópico Inicial"

expired

Indica se a execução do tópico já está expirada

true

startDate

Data de inicio da execução do tópico

2015-08-14T15:09:13.819-03:00

completionDate

Data de conclusão do tópico

2015-08-16T11:21:37.001-03:00

completed

indica se está executado

*true*

topicScoreApprove

indica a pontuação para aprovação no tópico

70

score

Pontuação obtida no tópico

95

partialScore

indica a pontuação parcial antes da conclusão do tópico

60

topicWeight

Peso do tópico

75

status

Status da execução do tópico

NOT\_VIEWED, ACTIVE, SUCCESSFUL\_FINISHED ou UNSUCCESSFUL\_FINISHED

enrollmentId

Identificador da matrícula

5123

userId

Identificador do usuário

37

normalClassId

Identificação da turma que o tópico pertence

4129



##### Tipo de status de Execução do Tópico

Status

Descritivo

NOT\_VIEWED

Não visualizado

ACTIVE

Ativo

SUCCESSFUL\_FINISHED

Finalizado com sucesso

UNSUCCESSFUL\_FINISHED

Finalizado sem sucesso

### ***enrollmentTopicItemDataset*** - Execuções em Itens de Tópicos

**\* TOTVS Fluig Plataforma 1.5.4 ou superior**

O dataset de execuções em itens de tópico permite consultar os itens de tópico executados pelo usuário matriculado. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

enrollmentTopicItemId

Id da execução do item de tópico

222

topicId

Id do tópico a que o item pertence

556

topicItemId

Id do item de tópico

487

enrollmentTopicItemType

Tipo de execução de item de tópico

com.totvs.elearning.core.discipline.ActivityTopicItem
com.totvs.elearning.core.discipline.ContentTopicItem
com.totvs.elearning.core.discipline.DetachedTopicItem
com.totvs.elearning.core.discipline.EnrollableTopicItem
com.totvs.elearning.core.discipline.ExamTopicItem
com.totvs.elearning.core.discipline.ForumTopicItem
com.totvs.elearning.core.discipline.UrlTopicItem

name

Nome do item de tópico

 "Atividade escolar"

mandatory

Indica se a execução do item de tópico é obrigatória dentro do tópico 

true

weight

Peso do item de tópico

2

scoreType

Tipo de pontuação do item de tópico

AUTOMATIC
MANUAL
SCORM
EXTERNAL
NO\_SCORE
ACTIVITY

score

Pontuação atual na execução do item de tópico

65

displayTimestamp

Data e hora da visualização do item de tópico

2015-08-14T15:09:13.819-03:00

enrollmentId

Id da matrícula a que o item de tópico está relacionado

4747

userId

Id do usuário que está executando o item de tópico

289

normalClassId

Id da turma a que o item de tópico está relacionado

655



##### Tipos de Item de Tópico

Status

Descritivo

com.totvs.elearning.core.discipline.ActivityTopicItem

Item de Tópico do tipo Atividade Extraclasse

com.totvs.elearning.core.discipline.ContentTopicItem

Item de Tópico do tipo Conteúdo

com.totvs.elearning.core.discipline.DetachedTopicItem

Item de Tópico do tipo Avulso

com.totvs.elearning.core.discipline.EnrollableTopicItem

Item de Tópico do tipo Treinamento/Trilha

com.totvs.elearning.core.discipline.ExamTopicItem

Item de Tópico do tipo Avaliação

com.totvs.elearning.core.discipline.ForumTopicItem

Item de Tópico do tipo Tópico de Fórum

com.totvs.elearning.core.discipline.UrlTopicItem

Item de Tópico do tipo URL

##### Tipos de pontuação no Item de Tópico

Status

Descritivo

AUTOMATIC

Pontuação gerada automaticamente ao acessar Item do Tópico.

MANUAL

Pontuação informada pelo administrador.

SCORM

Pontuação utilizada para sobrescrever a do SCORM.

EXTERNAL

Pontuação enviada pelo sistema externo

NO\_SCORE

Item que não vale nota no tópico.

ACTIVITY

Pontuação decorrente da entrega de atividade.

### *topicDataset* - Tópicos

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset de tópicos permite consultar tópicos disponíveis na área de aprendizado do TOTVS Fluig Plataforma. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

ID do Registro

10615

name

Nome

"Tópico Inicial"

estimatedTime

Tempo estimado para finalização (em dias)

17

weight

Peso

3

scoreApprove

Pontuação para aprovação

75.00

disciplineClass\_id

ID da Turma

271

startTopicType

[Tipo de Inicialização](#Datasetsinternos-tipoInicializacaoTopico)

*NO\_RULES, AFTER\_REQUIREMENTS\_RELEASE, DAYS\_AFTER\_REQUIREMENTS\_RELEASE,*
*DAYS\_AFTER\_ENROLLMENT\_RELEASE* ou *MANUAL\_RELEASE*

noFinishMinimumScore

Permite finalizar sem atingir pontuação mínima

*true* ou *false*

status

Status

*ACTIVE* ou *INACTIVE*



##### Tipo de inicialização de tópicos

Um pouco mais sobre o **Tipo de Iniciação** de um tópico:

Status

Descritivo

NO\_RULES

Inicialização sem regras, sempre liberado.

AFTER\_REQUIREMENTS\_RELEASE

Liberação após a conclução dos pré-requisitos.

DAYS\_AFTER\_REQUIREMENTS\_RELEASE

Liberação após *xx dias* após conclusão dos pré-requisitos.

DAYS\_AFTER\_ENROLLMENT\_RELEASE

Liberação após *xx dias* após a matrícula.

MANUAL\_RELEASE

Liberação manual.





### *topicItemDataset* - Itens de Tópicos

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset de itens de tópicos permite consultar itens de tópicos disponíveis na área de aprendizado do TOTVS Fluig Plataforma. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

ID do Registro

9321

type

Tipo

*"URL", "Avaliação", "Conteúdo", "Treinamento"* ou *"Atividade Extraclasse"*

topicId

ID do Tópico

175

name

Nome

"Atividade em Grupo Especial"

ordem

Ordem do Item

7

weight

Peso

1

mandatory

Obrigatório

*true* ou *false*

scoreType

Tipo do Score

*AUTOMATIC, EXTERNAL, ACTIVITY ou MANUAL*

status

Status

*ACTIVE* ou *INACTIVE*

### *assessmentDataset* - Avaliações

\* **TOTVS Fluig Plataforma** **1.5.1 ou superior** 

O dataset de avaliações permite consultar as avaliações disponíveis na área de aprendizado do TOTVS Fluig Plataforma. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

ID do Registro

9321

name

Nome

"Avaliação de Performance Anual"

creationDate

Data de Criação

1981-06-11T18:05:13.017-03:00

monitored

Avaliação Monitorada

*true* ou *false*

showScores

Exibe pontuação

**true** ou **false**

showApprovalStatus

Exibe status de aprovação

*true* ou *false*

showPerformanceOnQuestions

Exibe performance nas questões

*true* ou *false*

showCorrectAnswers

Exibe alternativas corretas

**true** ou **false**

showConclusionMessage

Exibe mensagem de conclusão

**true** ou **false**

solicitFeedbackEvaluation

Solicita feedback

**true** ou **false**

allowCommentsOnQuestions

Permite comentários nas questões

**true** ou **false**

anonymous

Avaliação anônima

**true** ou **false**

image

Imagem

"performance-anual.png"

currentVersionId

ID da versão atual

31139

editingVersionId

ID da versão em edição

31141

enabled

Status

*ACTIVE* ou *INACTIVE*



### a*ssessmentVersionDataset* - Versões de Avaliações

**\* TOTVS Fluig Plataforma 1.5.2 ou superior**

O dataset de versões de avaliações permite consultar as versões de uma avaliação gravadas na área de aprendizado do TOTVS Fluig Plataforma. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

assessmentId

ID da Avaliação

1999

assessmentVersionId

ID da Versão da Avaliação

237

requiredScore

Índice de Aprovação

75.00

minExecutionTime

Tempo mínimo de execução

1

maxExecutionTime

Tempo máximo de execução

85

allowEssayQuestion

Permite questões dissertativas

*true* ou *false*

status

Status

*CURRENT, OLD,* *EDITING* ou *ANNULLED*

```
var assessmentVersions = DatasetFactory.getDataset("assessmentVersionDataset", null, null, null);
```



### *disciplineClassDataset* - Turmas e Turmas Modelo

**\* TOTVS Fluig Plataforma 1.5.2 ou superior**

O dataset de Turmas permite consultar Turmas e Turmas Modelo disponíveis na área de aprendizado do TOTVS Fluig Plataforma. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

ID do Registro

3297

type

Tipo da Turma

*com.totvs.elearning.core.discipline.NormalClass* ou
*com.totvs.elearning.core.discipline.TemplateClass*

*NormalClass* = Turma
*TemplateClass* = Turma Modelo

name

Nome

"Administração 2015"

enrollmentInitialDate

Data inicial de matrícula

2015-08-14T12:00:00-03:00

enrollmentFinalDate

Data final de matrícula

2015-08-20T21:00:00-03:00

classInitialDate

Data inicial da turma

2015-08-21T19:00:00-03:00

classFinalDate

Data final da turma

2015-08-29T22:00:00-03:00

cost

Custo

91

reactionId

ID avaliação de reação

7513

```
var onlyNormalClass = DatasetFactory.createConstraint("type", "com.totvs.elearning.core.discipline.NormalClass", "com.totvs.elearning.core.discipline.NormalClass", ConstraintType.MUST);
var constraints = new Array(onlyNormalClass);
var normalClasses = DatasetFactory.getDataset("catalogItemDataset", null, onlyNormalClass, null);
```



### *partyScheduledDataset* - Usuários agendados em avaliações

**\* TOTVS Fluig Plataforma 1.5.2 ou superior**

O *dataset* de agendados permite consultar as informações de quais são as Turmas, Disciplinas, Grupos ou Usuários agendados para executar avaliações.

Agendamento externo por email

Para consultar agendamentos externos feitos por emails, utilize o [emailScheduledDataset](#Datasetsinternos-emailScheduledDataset)



Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

assessmentId

ID da avaliação

525

type

Tipo do item agendado

*com.totvs.elearning.core.party.PartyClassImpersonator*
*com.totvs.elearning.core.party.Group*
*com.totvs.elearning.core.party.PartyEveryone*
*com.totvs.elearning.core.party.PartyDisciplineImpersonator*
*com.totvs.elearning.core.party.User*

*PartyClassImpersonator* = uma turma
*Group* = grupo de usuários
*PartyEveryone* = todos os usuários
*PartyDisciplineImpersonator* = disciplina
*User* = usuário

partyId

Id do item agendado

325

partyName

Nome do item agendado

"Dirceu Silva"

```
var usersScheduled = DatasetFactory.getDataset("partyScheduledDataset", null, null, null);
```



### *emailScheduledDataset* - Emails agendados em avaliações

**\* TOTVS Fluig Plataforma 1.5.4 ou superior**

O *dataset* de agendados permite consultar as informações de emails que foram agendados para uma avaliação.

Agendamento a usuários

Para consultar agendamentos feitos a usuários cadastrados, utilize o [partyScheduledDataset](#Datasetsinternos-partyScheduledDataset)

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

assessmentId

ID da avaliação

28021985

email

Email do agendado

[\[email protected\]](https://tdn.totvs.com/cdn-cgi/l/email-protection#ec86838482c28f838282839eac8a8099858bc28f8381)

token

Token do agendado

 525A5C03E4Cb97F0E42A0AE1B50EDB80

```
var emailsScheduled = DatasetFactory.getDataset("emailScheduledDataset", null, null, null);
```



### *assessmentScheduleDataset* - Agendamento de avaliações

**\* TOTVS Fluig Plataforma 1.5.2 ou superior**

O *dataset* de agendamento permite consultar as informações referentes aos agendamentos realizados . Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

Id

ID do agendamento

626

assessmentId

ID da avaliação

619

assessmentName

Nome da avaliação

"Conceitos básicos"

description

Descrição da avaliação

"HCT"

initialDate

Data e hora inicial do agendamento

2015-04-14T21:00:00-03:00

finalDate

Data e hora final do agendamento

2016-01-21T21:00:00-02:00

status

*Status* do agendamento

CANCELLED, SCHEDULED, DONE





```
var scheduleds = DatasetFactory.getDataset("assessmentScheduleDataset ", null, null, null);
```



### *assessmentApplicationGenericDataset* \- Execução de avaliações

**\* TOTVS Fluig Plataforma 1.5.2 ou superior**

O *dataset* de execução de avaliações permite consultar as informações referentes às execuções de avaliações. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

assessmentId

ID da avaliação

626

assessmentName

Nome da avaliação

"Conceitos básicos"

userId

ID do usuário

28

userName

Nome do usuário que executou a avaliação

"Dirceu Silva"

finalScore

Nota final na avaliação

100.00

status

*Status* da avaliação

 STARTED, FINISHED, PENDING, CANCELLED

approved

Se o usuário foi aprovado na avaliação

*true*, *false*

userEmail

Para agendamentos de avaliação por email

[\[email protected\]](https://tdn.totvs.com/cdn-cgi/l/email-protection)

startDate   

Data de início da execução da avaliação

2015-10-06T11:26:56.438-03:00

finishDate  

Data de final da execução da avaliação

2015-10-06T12:26:56.438-03:00

requiredScore 

Pontuação mínima para aprovação na avaliação

70.00

assessmentApplicationId

Id da aplicação da avaliação

978

```
var applications = DatasetFactory.getDataset("assessmentApplicationGenericDataset", null, null, null);
```



### *assessmentApplicationCatalogPreExamDataset* \- Execução de avaliações de pré-teste

**\* TOTVS Fluig Plataforma 1.5.3 ou superior**

O *dataset* de execução de avaliações de pré-teste permite consultar as informações referentes às execuções de avaliações em pré-testes. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

enrollmentId

ID da matrícula

626

learningId

ID do ítem matriculado

450

learningType

Tipo do ítem matriculado (trilha ou treinamento)

*com.totvs.elearning.core.catalog.Training* ou

*com.totvs.elearning.core.catalog.Track*

*Training* = Treinamento

*Track* = Trilha

preExamId

ID da versão da avaliação de pré-teste

1564

userId

ID do usuário

1404

userName

Nome do usuário

 "Dirceu Silva"

assessmentApplicationId

ID da execução da avaliação

*1323*

assessmentName

Nome da avaliação

"Prova - Conhecimentos Gerais I"

requiredScore

*Score* mínimo

70.00

requiredAllQuestions

Necessário responder todas as questões

*true*, *false*

startedTimeStamp

Hora de início

2015-10-06T11:26:56.438-03:00

finishedTimeStamp

Hora de fim

2015-10-13T13:12:23.259-03:00

finalScore

*Score* final

80.00

status

*Status*

STARTED, FINISHED, PENDING, CANCELLED

approved

Aprovado

*true*, *false*

```
var applications = DatasetFactory.getDataset("assessmentApplicationCatalogPreExamDataset", null, null, null);
```

#### Todas as versões da avaliação

Se você deseja visualizar todas as versões da avaliação, você pode usar a constraint allVersions para a sua pesquisa.

Exemplo: localizando as aplicações de todas as versões da avaliação:

```
var constraintOne = DatasetFactory.createConstraint("allversions", "true", "true", ConstraintType.MUST);
var constraints = new Array(constraintOne);
var datasetValues = DatasetFactory.getDataset("assessmentApplicationCatalogPreExamDataset", null, constraints, null);
```



*assessmentApplicationCatalogPosExamDataset* \- Execução de avaliações de pós-teste

**\* TOTVS Fluig Plataforma 1.5.3 ou superior**

O *dataset* de execução de avaliações de pós-teste permite consultar as informações referentes às execuções de avaliações em pós-testes. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

enrollmentId

ID da matrícula

626

learningId

ID do ítem matriculado

450

learningType

Tipo do ítem matriculado (trilha ou treinamento)

*com.totvs.elearning.core.catalog.Training* ou

*com.totvs.elearning.core.catalog.Track*

*Training* = Treinamento

*Track* = Trilha

posExamId

ID da versão da avaliação de pós-teste

1564

userId

ID do usuário

1404

userName

Nome do usuário

 "Dirceu Silva"

assessmentApplicationId

ID da execução da avaliação

*1323*

assessmentName

Nome da avaliação

"Prova - Conhecimentos Gerais I"

requiredScore

*Score* mínimo

70.00

requiredAllQuestions

Necessário responder todas as questões

*true*, *false*

startedTimeStamp

Hora de início

2015-10-06T11:26:56.438-03:00

finishedTimeStamp

Hora de fim

2015-10-13T13:12:23.259-03:00

finalScore

*Score* final

80.00

status

*Status*

STARTED, FINISHED, PENDING, CANCELLED

approved

Aprovado

*true*, *false*

```
var applications = DatasetFactory.getDataset("assessmentApplicationCatalogPosExamDataset", null, null, null);
```

#### Todas as versões da avaliação

Se você deseja visualizar todas as versões da avaliação, você pode usar a constraint allVersions para a sua pesquisa.

Exemplo: localizando as aplicações de todas as versões da avaliação:

```
var constraintOne = DatasetFactory.createConstraint("allversions", "true", "true", ConstraintType.MUST);
var constraints = new Array(constraintOne);
var datasetValues = DatasetFactory.getDataset("assessmentApplicationCatalogPosExamDataset", null, constraints, null);
```

### *assessmentApplicationCatalogReactionExamDataset* \- Execução de avaliações de reação

**\* TOTVS Fluig Plataforma 1.5.3 ou superior**

O *dataset* de execução de avaliações de reação permite consultar as informações referentes às execuções de avaliações de reação. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

enrollmentId

ID da matrícula

626

learningId

ID do ítem matriculado (trilha ou treinamento)

450

learningType

Tipo do ítem matriculado

*com.totvs.elearning.core.catalog.Training* ou

*com.totvs.elearning.core.catalog.Track*

*Training* = Treinamento

*Track* = Trilha

reactionId

ID da versão da avaliação de reação

1564

userId

ID do usuário

1404

userName

Nome do usuário

 "Dirceu Silva"

assessmentApplicationId

ID da execução da avaliação

*1323*

assessmentName

Nome da avaliação

"Prova - Conhecimentos Gerais I"

requiredScore

*Score* mínimo

70.00

requiredAllQuestions

Necessário responder todas as questões

*true*, *false*

startedTimeStamp

Hora de início

2015-10-06T11:26:56.438-03:00

finishedTimeStamp

Hora de fim

2015-10-13T13:12:23.259-03:00

finalScore

*Score* final

80.00

status

*Status*

STARTED, FINISHED, PENDING, CANCELLED

approved

Aprovado

*true*, *false*

```
var applications = DatasetFactory.getDataset("assessmentApplicationCatalogReactionExamDataset", null, null, null);
```

#### Todas as versões da avaliação

Se você deseja visualizar todas as versões da avaliação, você pode usar a constraint allVersions para a sua pesquisa.

Exemplo: localizando as aplicações de todas as versões da avaliação:

```
var constraintOne = DatasetFactory.createConstraint("allversions", "true", "true", ConstraintType.MUST);
var constraints = new Array(constraintOne);
var datasetValues = DatasetFactory.getDataset("assessmentApplicationCatalogReactionExamDataset", null, constraints, null);
```

### *contentLogDataset* \- Execução de conteúdos

**\* TOTVS Fluig Plataforma 1.5.3 ou superior**

O *dataset* de execução de conteúdos permite consultar as informações referentes às execuções de conteúdos em treinamentos e trilhas. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

enrollmentId

ID da matrícula

626

learningId

ID do ítem matriculado (trilha ou treinamento)

450

name

Nome do conteúdo

"Conhecimentos Gerais"

description

Descrição do conteúdo

*com.totvs.elearning.core.catalog.Training* ou

*com.totvs.elearning.core.catalog.Track*

*Training* = Treinamento

*Track* = Trilha

keyword

Palavras chave

"conteúdo geral treinamento"

displayTimeStamp

Hora em que foi acessado

 2015-10-06T11:29:14.044-03:00

userId

ID do usuário

*1323*

userName

Nome do usuário

 "Dirceu Silva"

```
var contentLogs= DatasetFactory.getDataset("contentLogDataset", null, null, null);
```

### *enrollmentProgressDetailByTrackDataset* \- Detalhes de andamento de trilhas

**\* TOTVS Fluig Plataforma 1.5.3 ou superior**

O *dataset* de detalhes de andamento de trilhas permite consultar as informações referentes à itens executados nas trilhas. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

enrollmentId

ID da matrícula

626

userName

Nome do usuário

"Dirceu Silva"

userId

ID do usuário

458

status

[Status da matrícula](#Datasetsinternos-statusMatricula)

*ENROLLED*, *STARTED, FINISHED, CANCELLED* ou *BLOCKED*

finalStatus

[Status final da matrícula](#Datasetsinternos-statusFinalMatricula)

SUCCESSFUL\_POS\_TEST, SUCCESSFUL\_PRE\_TEST, SUCCESSFUL\_SCORM,
UNSUCCESSFUL\_POS\_TEST, UNSUCCESSFUL\_PRE\_TEST, UNSUCCESSFUL\_SCORM,
UNSUCCESSFUL\_EXPIRED, CANCELLED, SUCCESSFUL, UNSUCCESSFUL ou WITHOUT\_ACCESS

score

Hora em que foi acessado

 80.00

enrollmentRequestId

ID do usuário

1323

dateEnrollment

Data de matrícula

 2015-10-06T11:25:14.014-03:00

dateConclusion

Data de conclusão

 2015-10-06T11:29:14.044-03:00

learningId

ID do item matriculado  

 455

learningType

Tipo do item matriculado

*com.totvs.elearning.core.catalog.Training* ou

*com.totvs.elearning.core.catalog.Track*

*Training* = Treinamento

*Track* = Trilha

trackParentId

ID da trilha pai do treinamento

554

learningName

Nome do item matriculado

"Atualidades I"

```
var results = DatasetFactory.getDataset("enrollmentProgressDetailByTrackDataset", null, null, null);
```

### *enrollmentProgressDetailByTrainingDataset* \- Detalhes de andamento de treinamentos

**\* TOTVS Fluig Plataforma 1.5.3 ou superior**

O *dataset* de detalhes de andamento de treinamentos permite consultar as informações referentes à itens executados nos treinamentos. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

enrollmentId

ID da matrícula

626

progressType

Tipo do item

*PRE\_EXAM, POS\_EXAM, REACTION* ou *CONTENT*



*PRE\_EXAM* = Pré Teste

*POS\_EXAM* = Pós Teste

*REACTION* = Avaliação de Reação

*CONTENT* = Conteúdo

description

Descrição do item

"Prova - Conhecimentos Gerais I"

startedTimeStamp

Data e hora de início do item

2015-10-13T16:01:53.247-03:00

finishedTimeStamp

Data e hora de fim do item

2015-10-13T16:02:16.197-03:00

duration

Tempo de duração em minutos

10

status

*Status*

STARTED, FINISHED, PENDING ou CANCELLED

score

*Score*

 40.00

Observação

Este dataset **não suporta** as funções ***fields*** e ***limit***, por acumular informações de diversas tabelas. A **ordem** dos registros é **fixa**, sendo sempre por *enrollmentId*, lista todos os registros de: *Pré-testes, Conteúdos, Pós-teste e Avaliação de reação.*

```
var contentLogs= DatasetFactory.getDataset("enrollmentProgressDetailByTrainingDataset", null, null, null);
```



*historySkillDataset* - Habilidades por Usuário

**\* TOTVS Fluig Plataforma 1.5.4 ou superior**

O dataset de habilidades por usuários permite consultar as habilidades que o usuário obteve por meio de execução de trilhas/treinamentos e/ou participação em turmas.

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

skillId

ID da Habilidade

122

skillName

Nome da Habilidade

"Matemática Financeira"

skillPoints

Pontos que o usuário possui na Habilidade

2.00

userId

ID do usuário

555

userName

Nome do Usuário

"André"

userLastName

Último nome do usuário

"Felipe"



### assessmentAppQuestionDataset - Dataset de questões aplicadas em uma avaliação

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

O dataset de questões aplicadas em uma avaliação permite consultar detalhes de questões utilizadas em cada execução de uma avaliação, assim como informações sobre a execução em si.

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

assessmentQuestionVersionId

A versão da questão utilizada na execução da avaliação

1314

type

Tipo de questão

com.totvs.elearning.core.assessment.ObjectiveQuestion

title

Título da questão

"Questão objetiva 1"

topicTitle

Nome da pasta (tópico) em que a questão se encontra

root\_topic

difficulty

Dificuldade da questão

3

totalPoints

Total de pontos obtidos nesta questão na execução da avaliação

1.00

isCanceled

Se a versão utilizada na execução da avaliação estava cancelada

true, false

assessmentApplicationId

Id da execução da avaliação

1248

appBlockId

Id da aplicação do bloco na avaliação

1235

userId

Executor da avaliação. Se vier em branco, a avaliação foi executada via e-mail (agendamento)

208

```
var contentLogs= DatasetFactory.getDataset("assessmentAppQuestionDataset", null, null, null);
```

### assessmentAppBlockDataset - Dataset de blocos em uma avaliação

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

O dataset de blocos em uma avaliação permite consultar detalhes dos blocos de uma avaliação em cada uma de suas execuções, assim como informações sobre as execuções em si.

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

blockId

A versão do bloco

1774

blockName

Nome do bloco

"bloco 1"

weight

Peso

3

minScore

Mínimo de acertos

0

totalPoints

Total de acertos

3

userId

Id do usuário que executou a avaliação

107

appBlockId

Id da aplicação do bloco na avaliação

true, false

assessmentApplicationId

Id da execução da avaliação

1248

```
var contentLogs= DatasetFactory.getDataset("assessmentAppBlockDataset", null, null, null);
```

### assessmentClassApplicationDataset - Dataset de execução de avaliações por turma

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

O dataset de execuções de avaliações por turma permite consultar detalhes destas avaliações, como informações sobre a qual item de tópico ela pertence, o status de aprovação, etc.

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

userName

Nome do usuário que executou a avaliação

"Cleiton Ferreira"

assessmentName

Nome da avaliação

"Avaliação Final 1"

topicName

Nome do tópico

"Tópico 1"

startDate

Data de início da execução da avaliação

2016-01-18T12:51:09.108Z

finishDate

Data de término da execução da avaliação

2016-01-18T12:53:54.976Z

requiredScore

Nota mínima para ser aprovado na avaliação

50.00

finalScore

Nota obtida na avaliação

77.22

approved

Se aprovado ou não

true, false

status

Se a avaliação está terminada ou em andamento

STARTED, FINISHED, PENDING, CANCELLED

classId

Id da turma

2651

assessmentId

Id da avaliação

3188

topicId

Id do tópico

3033

assessmentApplicationId

Id da execução da avaliação

1248

```
var contentLogs= DatasetFactory.getDataset("assessmentClassApplicationDataset", null, null, null);
```



### assessmentApplicationByTrack - Dataset de execução de avaliações por trilha (contendo pré, pós, reação)

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

O dataset de execuções de avaliações por trilha mostra detalhes da execução de avaliações por trilhas

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

userName

Nome do usuário que executou a avaliação

"Alice Maia"

assessmentName

Nome da avaliação

"Prova Final"

assessmentType

Tipo de avaliação

PRE\_EXAM, POS\_EXAM, REACTION

startDate

Data de início da execução da avaliação

2015-10-07T17:59:35.570-03:00

finishDate

Data de fim da execução da avaliação

2015-10-07T17:59:59.339-03:00

requiredScore

Nota mínima para ser aprovado

70.00

finalScore

Nota obtida na avaliação

77.00

approved

Aprovado ou não

true, false

assessmentAplicationId

Id da execução da avaliação

1248

learningId

Id da trilha

1234

learningType

Se é trilha ou treinamento. Funciona como um campo de controle para relatórios

com.totvs.elearning.core.catalog.Track

```
var contentLogs= DatasetFactory.getDataset("assessmentApplicationByTrack", null, null, null);
```



### assessmentApplicationByTraining - Dataset de execução de avaliações por treinamento (contendo pré teste, pós teste, avaliação de reação)

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

O dataset de execuções de avaliações por treinamento mostra detalhes da execução de avaliações por treinamentos

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

userName

Nome do usuário que executou a avaliação

"Alex Navarro"

assessmentName

Nome da avaliação

"Prova experimental"

assessmentType

Tipo de avaliação

PRE\_EXAM, POS\_EXAM, REACTION

startDate

Data de início da execução da avaliação

2015-10-07T17:59:35.570-03:00

finishDate

Data de fim da execução da avaliação

2015-10-07T17:59:59.339-03:00

requiredScore

Nota mínima para ser aprovado

70.00

finalScore

Nota obtida na avaliação

77.00

approved

Aprovado ou não

true, false

assessmentAplicationId

Id da execução da avaliação

1248

learningId

Id da trilha

1234

learningType

Se é trilha ou treinamento. Funciona como um campo de controle para relatórios

com.totvs.elearning.core.catalog.Training

```
var contentLogs= DatasetFactory.getDataset("assessmentApplicationByTraining", null, null, null);
```



### partyDataset - Dataset de entidades do LMS

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

Este dataset lista entidades LMS que são classificadas com Party.

Ele é utilizado por outros datasets para se obter o id de usuários(LMS), grupos(LMS), turmas, disciplinas, empresas ou por todos.

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

id

Id LMS

104

fluigId

Id TOTVS Fluig Plataforma

69033

name

primeiro nome

"Pedro"

lastName

sobrenome

"Back"

fullName

nome completo

"Pedro Back"

login

login do usuário

"pedroback"

email

e-mail do usuário

"[\[email protected\]](https://tdn.totvs.com/cdn-cgi/l/email-protection)"

partyType

tipo da entidade LMS

com.totvs.elearning.core.party.User, (Usuário)

com.totvs.elearning.core.party.Group, (Grupo)

com.totvs.elearning.core.party.PartyClassImpersonator, (Turma)

com.totvs.elearning.core.party.PartyDisciplineImpersonator, (Disciplina)

com.totvs.elearning.core.party.PartyEveryone, (Tudo)

com.totvs.elearning.core.party.PartyTenantImpersonator (Empresa)

```
var contentLogs= DatasetFactory.getDataset("partyDataset", null, null, null);
```



### classResponsiblesDataset - Dataset de responsáveis por turmas

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

Este dataset lista os responsáveis por turmas criadas no catálogo de disciplinas e turmas.

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

classId

Id da turma

104

className

Nome da turma

"Matemática - Matutino 01"

responsibleName

Nome completo do responsável

"Jorge Batista"

responsibleId

Id do responsável

78

responsibility

Responsabilidade

"CORRECT\_ACTIVITIES"

userId

Id do usuário

46

userfluigId

Id do usuário no TOTVS Fluig Plataforma

435

disciplineId

Id da disciplina

216

```
var contentLogs= DatasetFactory.getDataset("classResponsiblesDataset", null, null, null);
```

### disciplineResponsiblesDataset - Dataset de responsáveis por disciplinas

**\* TOTVS Fluig Plataforma 1.5.6 ou superior**

Este dataset lista os responsáveis por disciplinas criadas no catálogo de disciplinas e turmas.

Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de Exemplo

disciplineId

Id da disciplina

216

disciplineName

Nome da disciplina

"Matemática"

responsibleName

Nome completo do responsável

"Jorge Batista"

responsibleId

Id do responsável

78

responsibility

Responsabilidade

"CORRECT\_ACTIVITIES"

userId

Id do usuário

46

userfluigId

Id do usuário no TOTVS Fluig Plataforma

435

```
var contentLogs= DatasetFactory.getDataset("disciplineResponsibleDatasetBusiness", null, null, null);
```





Importante!

A partir da atualização **[1.6.5-190219](https://tdn.totvs.com/pages/viewpage.action?pageId=442961412#Atualiza%C3%A7%C3%B5es\(1.6.5\)-190219)**, o **LMS** não faz mais parte da plataforma para **novas instalações**.

Mas, não se preocupe: se você adquiriu a plataforma com o **LMS incluso**, entre em contato com o [Suporte Fluig](https://suporte.fluig.com/) para que você consiga utiliza-lo normalmente – mesmo após a atualização **1.6.5-190219**. Se você não lembra se o LMS está incluso ou não no seu pacote, consulte sua proposta comercial ou entre em contato com o seu ESN.

Conheça o TOTVS Learning!

Você não vai ficar sem recursos de LMS no seu dia a dia, pois temos uma novidade para você: a oferta **TOTVS Learning**! Ela é a evolução dos conceitos de LMS, focada no mercado corporativo, 100% na nuvem – SaaS.

Acesse [https://www.totvs.com/fluig/learning](https://www.totvs.com/fluig/learning/) e fique por dentro de tudo o que ele tem a oferecer para alavancar o aprendizado na sua empresa.

Durante o ano de 2019 serão comunicados mais detalhes sobre como clientes Fluig podem aderir aos termos de transição do LMS do TOTVS Fluig Plataforma para o TOTVS Learning. Para mais informações consulte o seu ESN.



## Datasets do Social

* * *

### PostDataset - Dataset dos posts publicados

\* fluig 1.3.0 ou superior

Este dataset pode ser utilizado para fornecer os posts publicados pelos usuários. Acompanhe a seguir os detalhes dos campos disponíveis:

Coluna

Descritivo

Exemplo de Valor

postId

Id do post

3

creationDate

Data em que o post foi criado

2015-08-05 10:49:05.0

lastUpdateDate

Data da última atualização do post

2015-08-05 10:49:05.0

numberComments

Número de comentários do post

2

numberDenouncemets

Número de denúncias do post

1

numberLikes

Número de apoios do post

2

numberShares

Número de compartilhamentos do post

2

numberWatchers

Número de pessoas que acompanham o post

2

isRemoved

Indicador se o post foi removido

1 - true / 0 - false

url

URL do post

"/post/rh/153"

mentions

Número de menções do post

3

link

Link contido no post

"[http://www.fluig.com/](https://www.fluig.com/)"

text

Texto do post

"Bem vindos!"

customData

Dados customizados do post

{}

type

Tipo do post

Publicação / Compartilhamento

socialId

Id Social de quem realizou o post

3

author

Login do autor do post

"john"

authorName

Nome do autor do post

"John Steel"

linkedObjectId

Id do objeto ligado ao post

127

linkedObjectClass

Classe do objeto ligado ao post

"com.totvs.technology.social.document.33"

linkedObjectDescription

Descrição do objeto ligado ao post

"Dunas.jpg"



### **PostObjectDataset - Dataset dos posts e seus respectivos objetos**

\* fluig 1.6.2 ou superior

Este dataset pode ser utilizado para fornecer os posts publicados pelos usuários e informações dos seus respectivos objetos. Acompanhe a seguir os detalhes dos campos disponíveis:

**Coluna**

**Descritivo**

**Exemplo de Valor**

postId

Id do post

3

id

Id do objeto

1

url

Url de acesso ao objeto

/ecmnavigation?app\_ecm\_navigation\_doc=6&app\_ecm\_navigation\_docVersion=1000

description

Descrição do objeto

imagem.jpg

customData

Dados customizados do objeto

{}

creationDate

Data em que o objeto foi criado

2015-08-05 10:49:05.0

lastUpdateDate

Data da última atualização do objeto

2015-08-05 10:49:05.0

numberComments

Número de comentários do objeto

2

numberDenouncemets

Número de denúncias do objeto

1

numberLikes

Número de apoios do objeto

2

numberShares

Número de compartilhamentos do objeto

2

numberWatchers

Número de pessoas que acompanham o objeto

2

text

Texto do objeto

Novo artigo

authorAlias

Alias do autor do objeto

john

authorName

Nome do autor do objeto

John Steel

###
CommentDataset - Dataset dos comentários realizados

\* fluig 1.3.0 ou superior

Este dataset pode ser utilizado para fornecer os comentários realizados pelos usuários. Acompanhe a seguir os detalhes dos campos disponíveis:

Coluna

Descritivo

Exemplo de Valor

commentId

Id do post

3

creationDate

Data em que o comentário foi criado

2015-08-05 10:49:05.0

lastUpdateDate

Data da última atualização do comentário

2015-08-05 10:49:05.0

numberDenouncemets

Número de denúncias do comentário

1

numberLikes

Número de apoios do comentário

2

isRemoved

Indicador se o comentário foi removido

1 - true / 0 - false

url

URL do conteúdo onde foi realizado o comentário

"/ecmnavigation?app\_ecm\_navigation\_doc=182&app\_ecm\_navigation\_docVersion=1000"

commentText

Texto do comentário

"Boa inciativa!"

hasMentions

Indicador se existe menção no comentário

 1 - true / 0 - false

link

Link contido no comentário

"[http://www.fluig.com/](https://www.fluig.com/)"

postId

Id Social onde o comentário foi realizado. Nos casos de post será o id do post, para os casos de documentos, vira o id social do documento

3

socialId

Id Social de quem realizou o post

4

author

Login do autor do comentário

"john"

authorName

Nome do autor do comentário

"John Steel"

###
CommunityDataset - Dataset das comunidades

\* fluig 1.3.0 ou superior

Este dataset pode ser utilizado para recuperar as comunidades. Acompanhe a seguir os detalhes dos campos disponíveis:

Coluna

Descritivo

Exemplo de Valor

alias

Alias da comunidade

"RH"

creationDate

Data em que o comentário foi criado

2015-08-05 10:49:05.0

lastUpdateDate

Data da última atualização do comentário

2015-08-05 10:49:05.0

name

Nome da comunidade

"RH - Plantão"

description

Descrição da comunidade

"O canal direto de informações entre a empresa e os funcionários."

isApprovalRequired

Indicador se a comunidade precisa de aprovação para participar

True / False

isPrivateContent

Indicador se a comunidade tem conteúdo privado

True / False

isHidden

Indicador se a comunidade é oculta

 True / False

isActive

Indicador se a comunidade está ativa

  True / False

articleFolder

Id da pasta de artigos da comunidade

12

formFolder

Id da pasta de formúlarios da comunidade

45 

photoFolder

Id da pasta de imagens da comunidade

32 

documentFolder

Id da pasta de documentos da comunidade

10

videoFolder

Id da pasta de videos da comunidade



9



### ParticipantDataset - Dataset dos participantes das comunidades

\* fluig 1.3.0 ou superior

Este dataset pode ser utilizado para fornecer os usuários que participam das comunidades. Acompanhe a seguir os detalhes dos campos disponíveis:

Coluna

Descritivo

Exemplo de Valor

communityAlias

Alias da comunidade

"RH"

participantAlias

Alias do participante da comunidade

"john"

panticipantName

Nome do participante da comunidade

"John Steel"

isAdministrator

Indicador se o participante é administrador da comunidade

1 - true

isModerator

Indicador se o participante é moderador da comunidade

1 - true

### FollowerDataset - Dataset dos usuários que estão seguindo

\* fluig 1.3.0 ou superior

Este dataset pode ser utilizado para fornecer os usuários que seguem outros usuários. Acompanhe a seguir os detalhes dos campos disponíveis:

Coluna

Descritivo

Exemplo de Valor

followerAlias

Alias do seguidor

"john"

followedAlias

Alias do seguido

"ana"

followerName

Nome do seguidor

"John Steel"

followedName

Nome do seguido

"Anna Smyth"

### FollowedDataset - Dataset dos usuários que são seguidos

\* fluig 1.3.0 ou superior

Este dataset pode ser utilizado para fornecer os usuários que são seguidos por outros usuários. Acompanhe a seguir os detalhes dos campos disponíveis:

Coluna

Descritivo

Exemplo de Valor

followerAlias

Alias do seguidor

"john"

followedAliad**\***

Alias do seguido

"ana"

followerName

Nome do seguidor

"John Steel"

followedName

Nome do seguido

"Anna Smyth"

**\*Obs**:  O campo followedAliad está documento conforme o retorno do dataset





## Datasets de Documentos

* * *

### *AccessLog* - *Log* de acesso aos documentos

Lista o *log* de acessos aos documentos registrados pela plataforma.

Coluna

Descritivo

Valor de Exemplo

**AccessLogPK.documentId**

Código do documento

10903

**AccessLogPK.accessDate**

Data em que ocorreu o acesso

2018-08-29

**AccessLogPK.colleagueId**

Matrícula do usuário

fernando.alves

**AccessLogPK.companyId**

Código da empresa

102



### *documentApprovalHistory* - Histórico de aprovações do documento

**\* Atualização 1.4.11 ou superior**

Coluna

Descritivo

Exemplo de Valor

movementDate

Data de aprovação/reprovação do documento

2015-04-22T00:00:00-03:00

movementTime

Hora de aprovação/reprovação do documento

11:04:06

observation

Observação ao aprovar/rejeitar o documento

"Comentário do colaborador"

colleagueId

Id do colaborador

0000288

approvalMovementPK.companyId

Id da empresa

0000001

approvalMovementPK.documentId

Id do documento

10903

signed

Movimento foi assinado digitalmente

false

approvalMovementPK.version

Versão do documento

1000

analised \*

Se o documento passou por uma aprovação/reprovação manual

true

sendDate

Data em que o documento foi enviado para aprovação

2015-04-22T00:00:00-03:00

approvalMovementPK.iterationSequence

Número de sequência da movimentação

1

closeIteraction

Se é a última aprovação para que o documento seja publicado

true

approvalMovementPK.levelId

Nível de aprovação

2

Analised \*

Este item informa se o aprovador aceitou o item.
**Exemplo:** Caso seja uma aprovação do tipo 'OU' de dois colaboradores, o colaborador que aprovou o documento terá este campo como **true,** já o segundo que até então não visualizou o documento para aprovar, terá este item como **false**.



### *document* - Lista todos os documentos e suas respectivas versões

**\* Atualização 1.0 ou superior**

**Coluna**

Descritivo

Exemplo de Valor

**lastModifiedTime**

Data da última modificação no documento

2015-08-14T15:09:13.819-03:00

**documentType**

Tipo do documento

Fique ligado

-   1 - Pasta
-   2 - Documento normal
-   3 - Documento externo
-   4 - Formulário
-   5 - Registro de formulário
-   7 - Anexo Workflow
-   8 - Novo conteúdo
-   9 - Aplicativo
-   10 - Relatório

1

**parentDocumentId**

Número do documento pai

Fique ligado

O id 0 (zero) representa a pasta raíz

0

**metaListRecordId**

Sequencia do registro na tabela específica de meta lista

Fique ligado

Informação válida somente para registros de formulários

13

**documentDescription**

Descrição do documento

"Solicitação de compras"

**cardDescription**

Campo que corresponde a descrição do formulário

Fique ligado

Informação válida somente para formulários

num\_solicitacao

**convertDocumentType**

Tipo de conversão do documento



**translated**

Propriedade que indica se o documento foi traduzido

true / false

**visualization**

Visualização do documento 



**approved** 

Propriedade que indica se o documento foi aprovado ou não

true / false

**pdfRenderEngine**

Propriedade que indica se o documento utiliza o motor de renderização PDF Render



**mimetype**

Descrição do tipo de mídia

text/html

**relatedFiles**

Relação de arquivos relacionados, incluindo o arquivo principal e anexos

Solicitacao\_de\_Compras.html Solicitacao\_de\_Compras.js

**expires**

Propriedade que define se o documento está expirado

true / false

**approvalAndOr**

Propriedade que indica se há aprovadores AND e OR

true / false

**priority**

Prioridade do documento

0

**downloadEnabled**

Propriedade que indica se o documento está habilitado para download

true / false

**statusArmazLongoPrazo**

Status do armazenamento a longo prazo do documento



**updateIsoProperties**

Propriedade que indica se atualiza as propriedades da ISO

true / false

**expirationDate**

Data de expiração do documento

2016-11-16T00:00:00-02:00

**checkoutFolder**

Propriedade que indica se o documento é a pasta Check-out

Fique ligado

Informação válida somente para pastas

 true / false

**volumeId**

Volume em que o documento pertence

Default

**usedQuota**

Informa o quanto de espaço já foi utilizado na cota disponível (valores em MB)

1.64712

**atualizationId**

Propriedade que indica o documento de atualização

0

**inheritApprovers**

Propriedade que define se herda aprovações do pai

true / false

**deleted**

Propriedade que indica se o documento está excluido

true / false

**privateDocument**

Propriedade que indica se é um documento privado, ou seja, se está abaixo da pasta Meus Documentos

true / false

**size**

Informa o tamanho do arquivo (valores em MB)

0.00227165

**documentTypeId**

Tipo do arquivo físico, se retornar branco ou nulo é porque esse tipo não é conhecido pela plataforma

Contratos

**imutable**

Propriedade que define se a versão/revisão é inalterável

true / false

**datasetName**

O nome do dataset a qual o documento pertence

Fique ligado

Informação válida somente para formulários

 dts\_form\_solicitacao\_de\_compras

**topicId**

Código do assunto do documento

1

**documentPK.documentId**

Número do documento

82

**processingBatch**

Propriedade que indica se o documento está ainda em processamento

true / false

**externalDocumentId**

Propriedade que indica se o documento possui alguma relação com um documento externo



**permissionType**

Tipo de permissão

0

**colleagueId**

Matricula do usuário que criou o documento

"fernando.alves"

**indexed**

Propriedade que define se o documento já foi indexado

true / false

**phisicalFile**

Nome do arquivo físico atrelado ao documento

Solicitação\_de\_Compras.html

**keyWord**

Palavras chaves do documento

"tag"

**documentPropertyNumber**

Código do formulário base

Fique ligado

Informação válida somente para formulários e seus respectivos registros

 80

**inheritSecurity**

Propriedade que define se herda segurança do pai

true / false

**quota**

Cota atribuída para a pasta (valores em MB)

Fique ligado

Informação válida somente para pastas

 100

**additionalComments**

Comentários adicionais do documento

"Comentário adicional"

**crc**

*Cyclic Redundancy Check* (identificação do conteúdo do documento)

1749708947

**documentPropertyVersion**

Versão do formulário em que o registro de formulário foi criado

Fique ligado

Informação válida somente para formulários e seus respectivos registros



1000

**uUID**

UUID (identificador Único Global) do documento

313DB013-DBE2-4ADB-BC0D-9BE76EEC1BFB

**documentPK.companyId**

Código da empresa em que o documento foi publicado

1

**createDate**

Data de criação do documento

2016-10-27T00:00:00-02:00

**activeVersion**

Propriedade que define se a versão é ativa

true / false

**publisherId**

Matricula do usuário que publicou o documento

"fernando.alves"

**versionDescription**

Descrição da versão

"Informações da versão"

**validationStartDate**

Data a partir da qual o documento poderá ser visualizado

2016-11-16T00:00:00-02:00

**metaListId**

Código de qual meta lista o documento pertence

Fique ligado

Informação válida somente para formulários e seus respectivos registros

40

**userNotify**

Propriedade que define se notifica os usuários que tenham esse assunto de interesse

true / false

**approvedDate**

Data de Aprovação

2016-11-16T00:00:00-02:00

**privateColleagueId**

Se é um documento particular retorna a matricula do usuário onde este documento está alocado

"fernando.alves"

**allowMultiCardsPerUser**

Propriedade que indica se permite muitos formulários por usuário

true / false

**languageId**

Código do Idioma do documento

"pt\_BR"

**siteCode**

Código do volume no qual o documento pertence

"Fluig"

**notificationDays**

Periodo, em dias, para notificação de expiração do documento

40

**socialDocument**

Documento social



**restrictionType**

Tipo de restrição

0

**draft**

Propriedade que define se o documento está em edição

Fique ligado

Informação válida somente para "Novos conteúdos"



 true / false

**onlyActiveRows**

Propriedade que indica se o documento é ativo

Fique ligado

Informação válida somente para formulários

 true / false

**pdfConversionStatus**

Indica o status de conversão do documento para PDF

0

**accessCount**

Número de acessos ao documento

10

**lastModifiedDate**

Data da última modificação

2016-11-16T00:00:00-02:00

**iconId**

Código do Ícone do documento

67

**documentPK.version**

Número da versão do documento

1000



### *allocatedDocument* - Documentos em check-out

Lista os documentos que estão em check-out. Para saber mais sobre o check-out, consulte nossa documentação de usuário [Plataforma ❙ Efetuar check-out do documento](https://tdn.totvs.com/pages/viewpage.action?pageId=235325675).

Coluna

Descritivo

Valor de Exemplo

**allocatedDocumentPK.companyId**

Código da empresa

1

**allocatedDocumentPK.destinationDocument**

Código do documento a ser alterado na pasta particular

12903

**allocatedDocumentPK.sourceDocument**

Código do documento original

10654

**allocatedDocumentPK.sourceVersion**

Versão do documento original

1000

**checkoutDate**

Data em que o check-out do documento foi realizado

2018-08-29

**active**

Indica se o documento está ativo

true / false

**colleagueId**

Matrícula do usuário responsável pelo check-out

fernando.alves

**comment**

Comentário realizado no momento do check-out

Vou editar porque...

**checkoutTime**

Hora em que o check-out do documento foi realizado

165723

**checkoutAllowed**

Fique ligado

Campo depreciado





**checkinDate**

Fique ligado

Campo depreciado





**checkinTime**

Fique ligado

Campo depreciado







### *customFields* - Campos customizados dos documentos

Lista os [Plataforma ❙ Campos customizados](https://tdn.totvs.com/pages/viewpage.action?pageId=234455265) dos documentos.

Coluna

Descritivo

Valor de Exemplo

**customFieldsPK.customFieldId**

Código do campo customizado

1

**customFieldDescription**

Descrição do campo customizado

Quantidade de páginas

**customFieldsPK.companyId**

Código da empresa

102

**alwaysShow**

Indica se está habilitado para mostrar em todos os documentos

true / false



### *destinationArea* - Área dos documentos

Lista as [Áreas](https://tdn.totvs.com/pages/viewpage.action?pageId=234455235) cadastradas para os documentos.

Coluna

Descritivo

Valor de Exemplo

**areaDescription**

Descrição da área do documento

Administrativo

**managerId**

Matrícula do responsável pela área

fernando.alves

**destinationAreaPK.companyId**

Código da empresa

102

**destinationAreaPK.areaId**

Código da área do documento

1

**userId**

Fique ligado

Campo depreciado



**executionServerId**

Fique ligado

Campo depreciado





### *documentSecurityConfig* - Segurança dos documentos

Retorna a configuração de [segurança](https://tdn.totvs.com/pages/viewpage.action?pageId=243008857) dos documentos.

Coluna

Descritivo

Valor de Exemplo

**attributionValue**

Valor do atributo de segurança

6kopfwg3gyubqq1444419140949

**documentSecurityConfigPK.documentId**

Código do documento

10903

**downloadEnabled**

Indica se está habilitado o download do documento

true / false

**showContent**

Indica se está habilitada a visualização do conteúdo do documento

true / false

**documentSecurityConfigPK.companyId**

Código da empresa

102

**permission**

Indica se o documento tem permissão

true / false

**securityLevel**

Nível de permissão de acesso ao documento

Fique ligado

Os níveis são: **\-1** - Sem Permissão, **0** - L (Leitura), **1** - G (Gravação), **2** - M (Modificação) ou **3** - T (Total)

3

**inheritOriginSecurity**

Propriedade que define se herda segurança

true / false

**documentSecurityConfigPK.sequence**

Sequência de prioridade do registro da segurança

1

**inheritSecurity**

Propriedade que define se herda segurança

true / false

**documentSecurityConfigPK.version**

Versão do documento

1000

**attributionType**

Define a atribuição da segurança.

Fique ligado

Os tipos são: **1** - Colaborador,  **2** \- Grupo, ou **all** - Todos 

1

**securityVersion**

Fique ligado

Campo depreciado





### *knowledge* - Conhecimento dos documentos

Retorna as visualizações dos documentos, indicando quando foi realizada a primeira e a última visualização.

Coluna

Descritivo

Valor de Exemplo

**knowledgePK.companyId**

Código da empresa

102

**knowledgePK.documentId**

Código do documento

10903

**knowledgePK.version**

Versão do documento

1000

**knowledgePK.colleagueId**

Matrícula do usuário que visualizou o documento

fernando.alves

**firstView**

Primeira visualização (tempo em formato Long)

1444839211480

**lastView**

Última visualização (tempo em formato Long)

1530553535848

**lastViewedTime**

Fique ligado

Campo depreciado



**lastViewed**

Fique ligado

Campo depreciado



**knowledgeDate**

Fique ligado

Campo depreciado



**versionDescription**

Fique ligado

Campo depreciado





### *topic* - Assuntos dos documentos

Lista os [assuntos](https://tdn.totvs.com/pages/viewpage.action?pageId=234455255) dos documentos.

**Coluna**

Descritivo

Valor de Exemplo

**updateEmail**

Indica se está habilitada a notificação de atualização do assunto

true / false

**topicPK.topicId**

Código do assunto

1

**removeEmail**

Indica se está habilitada a notificação de eliminação do assunto

true / false

**description**

Descrição do assunto

Eventos

**mandatory**

Indica se o assunto é obrigatório

true / false

**topicPK.companyId**

Código da empresa

102



## Datasets de Processos

* * *

### *processHistory* - Histórico de solicitações *workflow*

**\* fluig 1.0 ou superior**

O *dataset* de histórico de processos permite consultar os dados de uma solicitação em andamento, finalizada ou cancelada de processos cadastrados. Acompanhe a seguir os detalhes:

Coluna              

Descritivo

Valor de Exemplo

**companyId**

Código da empresa.

102

**processInstanceId**

Número da solicitação.

24254

**movementSequence**

Corresponde a quantidade de movimentações da solicitação *workflow* corrente.

2

**active**

*Status* da atividade. Qual atividade está ativa no momento.

0 ou *false*;

1 ou *true*;

**movementDate**

Data que foi feita a movimentação da atividade.

2015-08-22

**movementHour**

Hora exata em que a atividade foi movimentada.

11:41:23

**stateSequence**

Código da atividade que foi movimentada.

4

**subProcessId**

Código do subprocesso.

0

**threadSequence**

Número da *Thread* de movimentação. Irá variar quando ocorrer alguns paralelismos na solicitação *workflow*. Ex.: processos com Fork/Join.

int

**previousMovementSequence**

Qual fluxo foi movimentado no passo anterior.

5

**conversionSequence**

Informa se a solicitação *workflow* foi convertida. Se o valor for igual a “0” (zero), esta solicitação nunca foi convertida até o presente momento.

int

**automaticLink**

Define se o fluxo para a atividade é automático ou se necessita ser movimentado pelo usuário.

0 ou *false*;

1 ou *true*;

**returnLink**

Permite retornar para a atividade de origem do fluxo.

0 ou *false*;

1 ou *true*;



### *processTask* - Tarefas das solicitações de processos *workflow*

**\* fluig 1.0 ou superior**

O *dataset* de tarefas das solicitações de processos permite consultar dados das tarefas de uma solicitação. Acompanhe a seguir os detalhes:

Coluna              

Descritivo

Valor de Exemplo

**processTask.companyId**

Código da empresa.

102

**processTask.processInstanceId**

Número da solicitação.

24254

**processTask.movementSequence**

Corresponde a quantidade de movimentações da solicitação *workflow* corrente.

2

**choosedColleagueId**

Código da matrícula do responsável escolhido para a tarefa.

adm

**choosedSequence**

Numero da atividade.

Número interno exemplo 6

**status**

*Status* da atividade. Estado em que ela se encontra.

0 - Não completada;

1 - Em consenso

2 - Completa

3 - Transferida

4 - Cancelada

**active**

Informa se a tarefa está ativa ou não.

0 ou *false*;

1 ou *true*;

**taskObservation**

Mostra os complementos adicionados na tarefa.

"Registrado documento"

Fique ligado

A partir da [Atualização 1.5.0](https://tdn.totvs.com/pages/viewpage.action?pageId=184781872), para resgatar os complementos de uma tarefa, devem ser utilizados os métodos da API Pública ([WorkflowRest](https://api.fluig.com/resource_WorkflowRest.html)) .

Caso exista algum projeto ou desenvolvimento anterior à esta atualização, que utilizem o campo taskObservation - integrações, por exemplo - é necessário importar o dataset [ProcessTaskCustom](https://tdn.totvs.com/display/fluig/Datasets+internos+fluig?preview=%2F161350218%2F244911778%2FProcessTaskCustom.js).

Este dataset está preparado para retornar os dados do campo taskObservation da forma antiga, com a diferença que, caso haja mais de um complemento na mesma tarefa, eles serão separados utilizando o caractere \\n.

**noticeExpirationRequisitionerDate**

Caso esteja marcada a opção de notificar expiração da tarefa para o requisitante, registra a data de notificação.

2015-08-22

**noticeExpirationRequisitionerHour**

Caso esteja marcada a opção de notificar expiração da tarefa para o requisitante, registra a hora de notificação.

em milisegundos

**noticeExpirationAuthorityDate**

Caso esteja marcada a opção de notificar expiração da tarefa para o responsável, registra a data de notificação.

2015-08-22

**noticeExpirationAuthorityHour**

Caso esteja marcada a opção de notificar expiração da tarefa para o responsável, registra a hora de notificação.

Em milisegundos

**noticeExpirationManagerDate**

Caso esteja marcada a opção de notificar expiração da tarefa para o gestor, registra a data de notificação.

2015-08-22

**noticeExpirationManagerHour**

Caso esteja marcada a opção de notificar expiração da tarefa para o gestor, registra a data de notificação.

Em milisegundos

**taskCompletionDate**

Mostra a data de conclusão de uma tarefa.

2017-06-02T00:00:00-03:00



Fique ligado

A partir da atualização 1.6.1, esta coluna será substituída por **assignEndDate e **endDate.****

**taskCompletionHour**

Mostra a hora de conclusão de uma tarefa.

40533



Fique ligado

A partir da atualização 1.6.1, esta coluna será substituída por **assignEndDate e **endDate.****



**initialTermDate
**

Caso configurado no processo, mostra a data de início a contar para conclusão da tarefa.

2017-06-01T00:00:00-03:00



Fique ligado

A partir da atualização 1.6.1, esta coluna será substituída por **startDate** e ****assignDate********.****

**initialTermHour
**

Caso configurado no processo, mostra a hora de início a contar para conclusão da tarefa.

51661



Fique ligado

A partir da atualização 1.6.1, esta coluna será substituída por **startDate** e ****assignDate********.****

**deadlineDate
**

Caso configurado no processo, mostra a data final para conclusão da tarefa.

2017-06-02T00:00:00-03:00



Fique ligado

A partir da atualização 1.6.1, esta coluna será substituída por **deadline******.****

**deadlineHour**

Caso configurado no processo, mostra a hora final para conclusão da tarefa.

40533



Fique ligado

A partir da atualização 1.6.1, esta coluna será substituída por **deadline******.****

**closureStatus**

Marca o status da tarefa, se está em aberto (0) ou se foi finalizada no prazo (1), dentro do tempo de aviso de expiração (2) ou após expirada (3)

int de 0 a 3.

Em aberto - 0;

Finalizada no prazo - 1;

Aviso de expiração - 2;

Expirada - 3.

**startDate**

Indica a data e hora que foi movimentado para a atividade. Transferências não modificam esta data.

2017-06-02T11:15:32-03:00

**assignDate**

Indica a data e hora que foi criada a tarefa. Ao transferir uma atividade, a hora da transferência é associada aqui.

2017-06-02T11:15:32-03:00

**assignEndDate**

Indica data e hora que a tarefa foi concluída ou transferida pelo responsável.

2017-06-02T11:15:32-03:00

**1** - Uma tarefa que foi transferida e depois concluída, o assignEndDate vai marcar a data da transferência e a endDate vai marcar a data da conclusão.

**2** - Em uma tarefa em consenso, quando  um responsável tomou sua decisão vai gravar no assignEndDate, quando o consenso foi atingido, vai gravar na endDate.

**3** - Em uma tarefa simples, onde apenas um usuário movimentou, os dois campos terão o mesmo valor.

**endDate**



Indica data e hora que a atividade foi concluída em todas as situações, não somente pelo responsável. Exemplo, consenso, múltiplas transferências.

2017-06-02T11:15:33-03:00

**1** - Uma tarefa que foi transferida e depois concluída, o assignEndDate vai marcar a data da transferência e a endDate vai marcar a data da conclusão.

**2** - Em uma tarefa em consenso, quando  um responsável tomou sua decisão vai gravar no assignEndDate, quando o consenso foi atingido, vai gravar na endDate.

**3** - Em uma tarefa simples, onde apenas um usuário movimentou, os dois campos terão o mesmo valor.

**warningDate**

Indica a data e hora em que a tarefa passa a ser considerada em alerta.

2017-06-02T11:15:32-03:00



**deadline**

Indica a data e hora de expiração da atividade.

2017-06-02T11:15:32-03:00







### processState - Atividades do processo

**\* fluig 1.5.1 ou superior**

O *dataset* de atividades do processo permite identificar as configurações de uma atividade. Acompanhe a seguir os detalhes:

Coluna

Descritivo

Valor de exemplo

**notifyRequistionerFollowUp**

Se atividade notifica requisitante quando solicitação a abre.

*true* e *false*

**joint**

Se atividade é uma atividade conjunta.

*true* e *false*

**digitalSignature**

Se atividade solicita assinatura digital para ser movimentada.

*true* e *false*

**forecastedEffort**

Esforço previsto indicado no cadastro da atividade em segundos.

1000

**executionType**

Tipo de execução da atividade caso for uma atividade de serviço.

0 - Manual (modelo antigo)

1 - Posterior à abertura

2 - Imediata à abertura

**frequenceRequisitionerTime**

Frequência entre as notificações de atraso para o requisitante em segundos.

1000

**transferAttachments**

Se a atividade transfere anexos da solicitação principal para a nova solicitação caso for uma atividade de sub processo.

*true* e *false*

**cancelSubProcess**

Se permite cancelar solicitação pai com uma sub solicitação aberta caso a atividade marcada seja de sub processo que originou aquela solicitação.

*true* e *false*

**notifyManagerDelay**

Se notifica gestor do processo no caso da atividade estar em atraso.

*true* e *false*

**positionX**

Posição vertical da atividade no desenho do processo.

100

**positionY**

Posição horizontal da atividade no desenho do processo.

100

**notifyAuthorityFollowUp**

Se atividade notifica responsável quando solicitação a abre.

*true* e *false*

**processStatePk.sequence**

Identificador da sequência da atividade.

4

**stateName**

Nome da atividade.

AtividadeTeste

**join**

Se atividade é um JOIN (junção de ramificações partindo de uma atividade de tipo FORK).

*true* e *false*

**noticeExpirationAuthorityTime**

Tempo após prazo expirado para o responsável ser notificado em segundos.

1000

**subProcessId**

Identificador do sub processo atrelado a esta atividade caso esta seja uma atividade de sub processo.

PROCESSO\_A

**formFolder**

Pasta no GED onde se encontra formulário, depreciado, pois não há separação de formulários por atividades.



**notifyAuthorityDelay**

Se a atividade notifica responsável caso esteja atrasada.

*true* e *false*

**engineAllocationConfiguration**

Configuração, em XML, do mecanismo de atribuição do responsável para essa atividade.

<AssignmentController>

<BaseActivity>3</BaseActivity>

<Returns>First</Returns>

</AssignmentController>

**inhibitTransfer**

Se a atividade não permite apresentar a opção de transferir para outro responsável.

*true* e *false*

**counterSign**

Se atividade exige que o usuário coloque sua senha para que possa ser movimentada.

*true* e *false*

**subProcess**

Se a atividade é um sub processo, depreciado, não é populado em momento algum.



**noticeExpirationRequisitionerTime**

Tempo em segundos após prazo expirado para o requisitante ser notificado.

1000

**processStatePk.version**

Versão do processo a qual esta atividade pertence.

2

**stateDescription**

Descrição da atividade.

AtividadeTeste

**agreementPercentage**

Percentual de aceitação para uma atividade conjunta ser movimentada.

75

**forecastedEffortType**

Como atividade deve controlar esforço previsto.

0 - Não controla

1 - Esforço Estimado / Previsto

2 - Apontamento de Horas

3 - Tempo de Conclusão

**noticeExpirationManagerTime**

Tempo em segundos após prazo expirado para o gestor ser notificado.

1000

**deadlineTime**

Prazo da atividade em segundos.

1000

**initialState**

Se atividade é uma atividade inicial.

*true* e *false*

**allowanceManagerTime**

Tempo de tolerância até o primeiro aviso de atividade atrasada para o gestor em segundos.

1000

**stateType**

Tipo da atividade. Utilizado pelo modelador Web.

0 - Atividade comum / simples

1 - Atividade automática / Gateways

2 - Atividade de sub processo

3 - Fork

4 - Join

**engineAllocationId**

Identificador do mecanismo de atribuição utilizado para esta atividade.

Executor Atividade

**selectColleague**

Se atividade exige ou não a seleção de usuários caso haja múltipla seleção.

*true* e *false*

**deadlineFieldName**

Identificador do campo de formulário responsável por atribuir prazo caso este seja o formato da atividade.

textbox\_0

**allowanceRequistionerTime**

Tempo de tolerância até o primeiro aviso de atividade atrasada para o requisitante em segundos.

1000

**processStatePK.processId**

Identificador do processo ao qual esta atividade pertence.

PROCESSO\_B

**parentSequence**

Atividade a qual esta está anexada, apenas utilizado para o evento de captura de erro em relação a atividade de serviço.

3

**frequenceManagerTime**

Tempo em segundos de frequência entre as notificações de atraso para o gestor.

1000

**periodId**

Identificador do expediente caso este seja diferente da solicitação como um todo para esta atividade em específico.

Default

**allowanceAuthorityTime**

Tempo de tolerância até o primeiro aviso de atividade atrasada para o responsável em segundos.

1000

**automatic**

Se a atividade é automática / gateway.

*true* e *false*

**bpmnType**

Tipo BPMN da atividade, utilizado pelo Studio ao processar desenhos de processo.

10 - Início normal

11 - Início por mensagem (não utilizado)

12 - Início por timer

13 - Início por timer condicional

14 - Início por sinal

15 - Início por múltiplo paralelo (não utilizado)

16 - Início por evento múltiplo (não utilizado)

30 - Evento intermediário normal

31 - Evento intermediário por mensagem (não utilizado)

32 - Evento intermediário por timer

33 - Evento intermediário de escala (não utilizado)

34 - Evento intermediário de compensação (não utilizado)

35 - Evento intermediário de timer condicional

36 - Evento intermediário de ligação

37 - Evento intermediário de sinal

38 - Evento intermediário múltiplo paralelo (não utilizado)

39 - Evento intermediário de evento múltiplo (não utilizado)

40 - Evento intermediário de recepção de mensagem (não utilizado)

41 - Evento intermediário de recepção de sinal

42 - Evento intermediário de recepção de ligação

43 - Evento intermediário de erro

60 - Evento de finalização normal

61 - Evento de finalização por mensagem (não utilizado)

62 - Evento de finalização de escala (não utilizado)

63 - Evento de finalização por erro

64 - Evento de finalização de sinal

65 - Evento de finalização por cancelamento

66 - Evento de finalização múltiplo (não utilizado)

67 - Evento de finalização de compensação (não utilizado)

68 - Evento de finalização imediata

80 - Atividade simples

81 - Atividade de usuário

82 - Atividade de serviço

83 - Atividade de recepção

84 - Atividade de e-mail

85 - Atividade manual

86 - Atividade de regra de negócio

87 - Atividade de script

100 - Sub processo

101 - Ad Hoc

120 - Automática exclusiva

121 - Automática inclusiva

122 - Evento Gateway (não utilizado)

123 - Evento Gateway Exclusivo (não utilizado)

124 - Evento Gateway Paralelo (não utilizado)

125 - Gateway Complexo (não utilizado)

126 - Fork

127 - Join

140 - Sem laço (não utilizado)

141 - Laço padrão (não utilizado)

142 - Laço paralelo (não utilizado)

**fork**

Se a atividade é um Gateway que inicia paralelismo, na base ver stateType.

*true* e *false*

**notifyManagerFollowUp**

Se atividade notifica gestor quando solicitação a abre.

*true* e *false*

**processStatePK.companyId**

Código da empresa a qual processo pertence.

1

**frequenceAuthorityTime**

Frequência entre as notificações de atraso para o responsável em segundos.

1000

**instruction**

Descrição das instruções da atividade.

Texto

**signalId**

Identificador do sinal que é disparado ou recebido caso a atividade seja um emissor ou receptor de sinal respectivamente.

3

**notifyRequisitionerDelay**

Se notifica requisitante do processo no caso da atividade estar em atraso.

*true* e *false*





### *workflowProcess* \- Solicitações de processos

**\* fluig 1.5.1 ou superior**

O *dataset* de solicitações de processos permite buscar dados sobre solicitações em andamento ou fechadas. Acompanhe a seguir os detalhes:

Coluna              

Descritivo

Valor de Exemplo

**workflowProcessPK.processInstanceId**

Código da solicitação.

102

**attachmentSeqId**

Código sequencial do anexo onde está localizado o registro de formulário do processo.

1

**cardIndexDocumentId**

Código do documento que representa o formulário com o qual o processo está relacionado.

15

**startDateProcessFromHistory**

Data da primeira movimentação segundo o primeiro registro em HISTOR\_PROCES, variável transiente, descontinuada e não populada, utilizar startDateProcess.



**expired**

Indica se a última atividade aberta da solicitação está atrasada. Variável transiente, descontinuada e não populada. Tratamentos de SLA devem ser feitos via api /process-management/api/v2.



**workflowProcessPK.companyId**

Código da empresa.

1

**closureStatus**

Código de finalização do processo dependendo do SLA da solicitação como um todo (não por atividade).

0 - Aberta

1 - No Prazo

2 - Em Aviso

3 - Em Atraso

**processId**

Código do processo.

PROCESSO\_A

**startDateProcess**

Data de início da solicitação.

2017-06-02T11:15:32-03:00

**cardDocumentId**

Código do documento que representa o registro de formulário vinculado a solicitação.

550

**periodId**

Código do expediente do processo no momento em que a solicitação foi aberta.

Default

**totalWarning**

Tempo em segundos total entre início da data de aviso e fim do prazo da solicitação.

1280

**requesterId**

Código da matrícula do usuário que abriu a solicitação.

user

**sourceProcess**

Código da solicitação que originou esta caso seja um sub processo.

PROCESSO\_B

**totalDeadline**

Tempo em segundos do início da solicitação até a data do prazo.

1560

**notifyDelay**

Se a solicitação avisa em caso de atraso.

*true* ou *false*

**endDateProcess**

Data de encerramento da solicitação.

2017-06-02T11:15:32-03:00

**active**

Se a solicitação está ativa.

*true* ou *false*

**sourceThreadSequence**

Código da ramificação onde está a atividade de sub processo que originou essa solicitação caso ela seja proveniente de uma outra solicitação.

0

**version**

Código da versão do processo que originou esta solicitação.

3

**uUID**

Identificador interno único da solicitação gerado pelo sistema.

CA9E4715-B7E2-4BB9-BACE-26EFCBC33299

**totalRuntime**

Tempo em segundos considerando expediente entre a abertura e o encerramento da solicitação

1100

**deadlineDate**

Data de prazo da solicitação como um todo.

2017-06-02T11:15:32-03:00

**warningDateProcess**

Data de aviso da solicitação.

2017-06-02T11:15:32-03:00

**status**

Código do status da solicitação.

0 - Aberto

1 - Cancelado

2 - Finalizado

### advancedProcessProperties - Propriedades Avançadas

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset advancedProcessProperties permite que se consulte as propriedades avançadas dos processos

Coluna

Descritivo

Valor de exemplo

advancedProcessPropertiesPK.propertyId

Nome do atributo

pastaDoDocumento

propertieValue

Valor do atributo

54

advancedProcessPropertiesPK.processId

Código do processo

PROCESSO\_A

advancedProcessPropertiesPK.companyId

Código da empresa

1

advancedProcessPropertiesPK.version

Versão do processo

2



### businessPeriod -Cadastro de Expediente

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset businessPeriod permite que se consulte os expedientes cadastrado no fluig

Coluna

Descritivo

Valor de exemplo

businessPeriodPK.weekDay

Dia da Semana

1 - Domingo

2 - Segunda-feira

3 - Terça-feira

4 - Quarta-feira

5 - Quinta-feira

6 - Sexta-feira

7 - Sábado

businessPeriodPK.companyId

Código da empresa

1

businessPeriodPK.sequence

Sequencial de ordem do horário no dia



Fique ligado

Se um exediente vai das **8h00 até 12h00** e das **13h30 até 17h00**, a primeira parte (das 8h às 12h) vai ser o sequencial 1 e a segunda (13h30 até 17h) sequencial 2

2

initialHour

Horário de início em segundos



Fique ligado

Usando o exemplo anterior, **8h** vai ser **28800** (8 \* 60 \* 60), e **13h30** será **48600** (13 \* 60 \* 60 + 30 \*60).

28800

businessPeriodPK.periodId

Código do Expediente

Default

finalHour

Horário de final em segundos



Fique ligado

Usando o exemplo anterior, **12h** vai ser **43200** (12 \* 60 \* 60), e **17h** será **61200** (17 \* 60 \* 60).

43200



### globalCalendar - Cadastro de feriados 

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset globalCalendar permite que se consulte os feriados cadastrados no fluig. Este dataset está **depreciado** a partir da 1.6.2 e não deve mais ser utilizado. Utilize o dataset **holiday**.

Coluna

Descritivo

Valor de exemplo

holidayDay

Dia do feriado

7

holidayYear

Ano do feriado

2022

0 (caso seja um feriado recorrente, ou seja, anual)

holidayMonth

Mês do feriado

1 - Janeiro

2 - Fevereiro

...

globalCalendarPK.holidayCalendarId

Descrição do feriado

Independência do Brasil

globalCalendarPK.companyId

Código da empresa

1

dayFormatted

Data do feriado

07-09-2022 (Formato dd-mm-aaaa)

No caso de feriado recorrente, virá o ano conforme o que foi cadastrado, não 0.



### holiday - Cadastro de feriados 

**\* TOTVS Fluig Plataforma 1.6.2 ou superior**

O dataset holiday permite que se consulte os feriados cadastrados no fluig.

Coluna

Descritivo

Valor de exemplo

companyId

Código da empresa

1

holidayDay

Dia do feriado

7

holidayYear

Ano do feriado

2022

0 (caso seja um feriado recorrente, ou seja, anual)

holidayMonth

Mês do feriado

1 - Janeiro

2 - Fevereiro

...

id

Código do feriado atribuído pela plataforma

1

holidayCalendarId

Descrição do feriado

Independência do Brasil

dayFormatted

Data do feriado 

07-09-2022 (Formato dd-mm-aaaa)

No caso de feriado recorrente, virá o ano conforme o que foi cadastrado, não 0.



### processAttachment - Cadastro de anexos em solicitações

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset processAttachment permite que se consulte os anexos de processos **incluindo** formulários da solicitação. 

Coluna

Descritivo

Valor de exemplo

processAttachmentPK.companyId

Código da empresa

1

version

Versão do anexo/formulário

1000

fieldValue1...fieldValue15

Campos auxiliares para filtro na central de tarefas.

Estes campos persistem os dados do formulário conforme definido nos campos de filtro na configuração do processo

2022-01-18

Opção 1

123

Nome

colleagueId

Matrícula do usuário

adm

attachedDate

Data do anexo

2022-01-12T10:56:07-03:00

processAttachmentPK.processInstanceId

Número da solicitação

2

originalMovementSquence

Sequencial da movimentação que identifica em que momento da solicitação o anexo foi adicionado

3

processAttachmentPK.attachmentSequence

Sequencial de inclusão do anexo

4

documentId

Número do documento

8996

originalThreadSequence

Número da *Thread* de movimentação em que o anexo foi adicionado

0



### processDefinition - Cadastro de processos

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset processDefinition permite que se consulte o cadastro de processos. 

Coluna

Descritivo

Valor de exemplo

uniqueCardVersion

Versão única de formulário

true

false

periodId

Código do expediente

Default

deadlineTime

Prazo de conclusão da solicitação em ms

18000 (5 minutos)

warningDeadlineTime

Prazo para entrar em alerta do prazo conclusão da solicitação em ms

10800 (3 minutos)

processDefinitionPK.processId

Código do processo

PROCESSO\_A

baseDay

*Depreciado.* Não é mais utilizado.

0

notifyManagerComplements

Notifica gestor quando um complemento ou anexo for adicionado na solicitação

true

false

active

Processo ativo ou inativo

true

false

notifyRequisitionerComplements

Notifica requisitante quando um complemento ou anexo for adicionado na solicitação

true

false

managerEngineAllocationId

Código do mecanismo de atribuição do gestor do processo

Usuário

Grupo

processDefinitionPK.companyId

Código da empresa

1

keyWord

Tags do processo

tag1 tag2

publicProcess

Mostra se o processo está como público

true

false

baseMonth

*Depreciado.* Não é mais utilizado.

0

instruction

Instrução de processos

Texto contendo instruções do processo

processDescription

Descrição do processo

Processo de Compras

volumeId

Código do volume

Default

complementsLevel

Configuração dos usuários que podem anexar e adicionar observações na solicitação quando não está sob sua responsabilidade

0 - Não configurado

1 - Solicitante, responsável(eis) por atividade e gestor

2 -  Todos os participantes do processo e gestor

3 - Todos os usuários

managerEngineAllocationConfiguration

Configuração do mecanismo de atribuição do gestor do processo

<AssignmentController><User>adm</User></AssignmentController>

snapshotFrequency

*Depreciado.* Não é mais utilizado.

0

categoryId

Categoria do processo

Compras

notifyAuthorityComplements

Notifica responsável quando um complemento ou anexo for adicionado na solicitação

true

false



### processDefinitionVersion - Cadastro de versões de processos

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset processDefinitionVersion permite que se consulte as versões dos processos. 

Coluna

Descritivo

Valor de exemplo

formId

Código do formulário

0 - Caso não tenha formulário

192

versionDescription

Descrição da versão

Nova Versão

controlsAttachmentsSecurity

Indica se a segurança de anexo está habilitada

true

false

bpmnVersion

Controle indicativo se utiliza componentes não suportados na versão web

(em branco) - Caso seja criado pela web

1 - Caso seja criado pelo studio mas é suportado via web

2 - Caso seja criado pelo studio e não é suportado via web

active

Versão ativo ou inativa



processDefinitionVersionPK.processId

Código do processo

PROCESSO\_A

categoryStructure

*Depreciado.* Não é mais utilizado.

(em branco)

editionMode

Indica se o processo está em edição

true

false

fullCategoryStructure

*Depreciado.* Não é mais utilizado.

(em branco)

counterSign

Exige confirmação de senha na movimentação de todas as atividades

true

false

inheritFormSecurity

Registros de formulário herdam segurança

true

false

processDefinitionVersionPK.companyId

Código da empresa

1

blockedVersion

*Depreciado.* Não é mais utilizado.

false

processDiagram

SVG do diagrama

<?xml version="1.0" encoding="UTF-8"?>
<svg ... />

processDefinitionVersionPK.version

Versão do processo

3

updateAttachmentsVersion

Atualiza anexos

true

false



### workflowColleagueRole - Listagem de usuários por papéis

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset workflowColleagueRole permite que se consulte os usuários presentes em cada papel cadastrado.

Coluna

Descritivo

Valor de exemplo

workflowColleagueRolePK.companyId

Código da empresa

1

workflowColleagueRolePK.colleagueId

Matricula do usuário

adm

workflowColleagueRolePK.roleId

Código do papel

Comprador



### workflowRole - Cadastro de papéis

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset workflowRole permite que se consulte os papéis cadastrados no fluig.

Coluna

Descritivo

Valor de exemplo

roleDescription

Nome do papel

Compradores da Empresa

workflowRolePK.companyId

Código da Empresa

1

workflowRolePK.roleId

Código do papel

Comprador



### *attributionMecanism* - Mecanismos de Atribuição

Lista todos os mecanismos de atribuição cadastrados na plataforma.

Coluna

Descritivo

Valor de Exemplo

**attributionMecanismPK.attributionMecanismId**

Código do mecanismo

Associado

**name**

Nome do mecanismo

Atribuição por Associação

**description**

Descrição do mecanismo

Permite compor lógicas complexas de atribuição

**attributionMecanismPK.companyId**

Código da empresa

1



### FLUIGADHOC - Dados de solicitações Adhoc/Listar Tarefas

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset FLUIGADHOC permite que se consulte os dados do formulário FLUIGADHOC que é utilizado pelo processo Listar Tarefas, padrão do fluig.

Coluna

Descritivo

Valor de exemplo

metadata#id

Código do registro de formulário 

5

metadata#parent\_id

Código do formulário

3

metadata#version

Versão do registro do formulário

1000

metadata#card\_index\_id

Código do formulário

2

metadata#card\_index\_version

Versão do formulário

1000

metadata#active

Registro ativo

true

false

cardid

Código do formulário

2

companyId

Código da empresa

1

detail

Campo "Descrição" no formulário

Tarefas adicionadas

documentid

Código do registro de formulário 

5

dueDate

Campo "Prazo de conclusão" no formulário

15/01/2022 (dd/mm/yyyy)

id

Código sequencial dos registros desse formulário

1

meeting

Campo "Nome" no formulário

Tarefas

meetingDate

Campo "Data" no formulário

12/01/2022 (dd/mm/yyyy)

qtativ

Campo oculto no formulário que indica a quantidade de atividades adicionadas

1

tableid

Campo usado para diferenciar tabela pai x filho nos formulário quando existe

principal (Principal é quando não é um registro de uma tabela pai x filho)

version

Versão do registro de formulário

1000



### FLUIGADHOCPROCESS - Dados das atividades em solicitações Adhoc/Listar Tarefas

**\* TOTVS Fluig Plataforma 1.5.1 ou superior**

O dataset FLUIGADHOCPROCES permite que se consulte os dados das atividades criadas a partir de um processo listar tarefas ou adhoc.

Coluna

Descritivo

Valor de exemplo

metadata#id

Código do registro de formulário

6

metadata#parent\_id

Código do formulário

4

metadata#version

Versão do registro do formulário

1000

metadata#card\_index\_id

Código do formulário

4

metadata#card\_index\_version

Versão do formulário

1000

metadata#active

Registro ativo

true

false

activity

Campo "Ação" no formulário

Assinar documento

adHocDescription

Campo "Descrição" no formulário pai do processo Listar Tarefas

Tarefas adicionadas

cardid

Código do formulário

4

companyid

Código da empresa

1

deadline

Prazo de Conclusão da atividade

15/01/2022 (dd/mm/yyyy)

Código da empresa

ID do Documento

1

id

Código sequencial dos registros desse formulário

1

observation

Observação incluída na conclusão da atividade

Documento Assinado

opening

Data da criação da tarefa

12/01/2022 16:12:17 (dd/mm/yyyy hh:MM:ss)

request

Código da solicitação que gerou esse registro

1

requestDescription

Descrição do processo que gerou essa atividade

Listar Tarefas

requestText

Ao encerrar a atividade, a concatenação do código da solicitação que gerou o registro e a descrição do processo

1 - Listar Tarefas

requester

Usuário que criou a tarefa

adm

tableid

Campo usado para diferenciar tabela pai x filho nos formulário quando existe

principal (Principal é quando não é um registro de uma tabela pai x filho)

taskStatus

Status da atividade atual

0 - Em andamento

1 - Concluída

2 - Rejeitada

version

Versão do registro de formulário

1000



## Datasets de Arquitetura

* * *

### *colleague* - Usuários da plataforma

Lista todos os usuários cadastrados na plataforma

Coluna

Descritivo

Valor de Exemplo

**colleaguePK.companyId**

Código da empresa

102

**colleaguePK.colleagueId**

Matrícula do usuário

fernando.alves

**colleagueName**

Nome do usuário

Fernando Alves

**mail**

E-mail do usuário

[\[email protected\]](https://tdn.totvs.com/cdn-cgi/l/email-protection#513734233f303f353e11303d2734227f323e3c7f3323)

**login**

Login do usuário para acesso à plataforma

fernando.alves

**active**

Indica se o usuário está ativo

true / false

**adminUser**

Indica se o usuário é administrador da plataforma

true / false

**defaultLanguage**

Idioma padrão dos documentos

pt\_BR

**volumeId**

Volume físico do usuário

Default

**maxPrivateSize**

Cota máxima de armazenamento do usuáiro

0

**currentProject**

Projetos do usuário

Vendas digitais

**extensionNr**

Número do ramal do usuário



**especializationArea**

Especialização do usuário

Marketing digital

**groupId**

Código do grupo de trabalho workflow ao qual o usuário está vinculado

1

**userTenantId**

Código do usuário

1

**emailHtml**

Fique ligado

Campo depreciado





### *colleagueGroup* - Vinculo dos Usuários aos Grupos

Lista os usuários que estão vinculados aos grupos

Coluna

Descritivo

Valor de Exemplo

**colleagueGroupPK.companyId**

Código da empresa

102

**colleagueGroupPK.colleagueId**

Matrícula do usuário

fernando.alves

**colleagueGroupPK.groupId**

Código do grupo

1



### *group* - Grupos de usuários

Lista todos os grupos cadastrados na plataforma.

Coluna

Descritivo

Valor de Exemplo

**groupDescription**

Descrição do grupo

Desenvolvedores

**groupPK.companyId**

Código da empresa

102

**groupPK.groupId**

Código do grupo

1
