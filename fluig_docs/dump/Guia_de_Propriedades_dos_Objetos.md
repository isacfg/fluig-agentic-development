# Guia de Propriedades dos Objetos

> **Fonte:** [https://tdn.totvs.com/display/public/fluig/Guia+de+Propriedades+dos+Objetos](https://tdn.totvs.com/display/public/fluig/Guia+de+Propriedades+dos+Objetos)

---

# Índice



# Objetivo

* * *

O objetivo deste documento é descrever as propriedades dos objetos utilizados em múltiplos métodos *webservice*. A utilidade de cada um dos parâmetros pode variar de método para método dependendo da necessidade da propriedade. 



# Pré-requisitos

* * *

Para compreender melhor os conceitos dessa página, é necessário conhecer as funcionalidades da [Utilização de Webservices](https://tdn.totvs.com/pages/viewpage.action?pageId=73084007). 



# DocumentDto

* * *

Representa o documento e suas propriedades. A tabela abaixo contém mais informações sobre o objeto:

**Propriedade**

**Descrição**

**Tipo do objeto**

documentId

Número do documento.

int

version

Número da versão do documento.

int

companyId

Código da empresa em que o documento foi publicado.

Int

UUID

UUID (identificador Único Global) do documento.

String

documentTypeId

Tipo do arquivo físico, se retornar branco ou nulo é porque esse tipo não é conhecido pelo Fluig.

String

languageId

Código do Idioma do documento.

String

iconId

Código do Ícone do documento.

int

topicId

Código do assunto do documento.

int

colleagueId

Matricula do usuário que criou o documento.

String

documentDescription

Descrição do documento.

String

additionalComments

Comentários adicionais do documento.

String

phisicalFile

Nome do arquivo físico atrelado ao documento.

String

createDate



Data de criação.

Data de Criação

A data de criação é informada automaticamente no evento em que o documento é criado no sistema.

java.util.Date

approvedDate

Data de Aprovação.

java.util.Date

lastModifiedDate

Data da última modificação.

Data da última modificação

A data da última modificação é informada automaticamente no evento em que o documento sofre algum tipo de alteração, havendo alteração de versão, revisão ou mantendo a versão/revisão.

java.util.Date

documentType

Tipo do documento, onde:

0 = Pasta raiz

1 = Pasta

2 = Documento normal

3 = Documento externo

4 = Formulário

5 = Registro de formulário

7 = Anexo Workflow

8 = Novo Conteúdo

9 = Aplicativo

10 = Relatório

String

expirationDate

Data de expiração.

java.util.Date

parentDocumentId

Número da Pasta/Formulário pai.

int

relatedFiles

String com o nome do arquivo físico principal e anexos.

String

activeVersion

Propriedade que define se a versão é ativa.

boolean

versionDescription

Descrição da versão.

String

downloadEnabled

Propriedade que define se o documento permite Download

boolean

approved

Propriedade que define se o documento está em aprovação.

boolean

validationStartDate

Data a partir da qual o documento poderá ser visualizado.

java.util.Date

publisherId

Matricula do usuário que publicou o documento.

String

cardDescription

Descrição do registro de formulário, para documento do tipo 5.

String

documentPropertyNumber

Formulário que foi usado como base para criação do registro de formulário, por isso só tem um valor quando o documento é do tipo 5 (registro de formulário).

int

documentPropertyVersion

Versão do formulário em que o registro de formulário foi criado.

int

privateDocument

Propriedade que define se o documento/pasta está abaixo da pasta particular.

boolean

privateColleagueId

Se é um documento particular retorna a matricula do usuário onde este documento está alocado.

String

indexed

Propriedade que define se o documento já foi indexado.

boolean

priority

Prioridade do documento.

int

userNotify

Propriedade que define se notifica os usuários que tenham esse assunto de interesse.

boolean

expires

Propriedade que define se o documento está expirado.

boolean

volumeId

Volume onde o documento foi publicado, se estiver em branco ele utiliza o volume do pai.

String

inheritSecurity

Propriedade que define se herda segurança do pai.

boolean

updateIsoProperties

Propriedade que define se atualiza as propriedades da cópia controlada.

boolean

lastModifiedTime

Hora da última modificação em milissegundos.

String

deleted

Propriedade que define se o documento está na lixeira.

boolean

datasetName

Documento do dataset , se o documento é um formulário.

String

keyWord

Palavras chaves do documento. Cada palavra é separada por vírgula.

String

imutable

Propriedade que define se a versão/revisão é inalterável.

boolean

draft

Propriedade que define se o documento está em edição, para documento do tipo “Novo Conteúdo”.

boolean

internalVisualizer

Propriedade que define se utiliza visualizador interno.

boolean

phisicalFileSize

Tamanho físico do documento principal e anexos.

float

versionOption

Condição de versionamento do documento:

0 = Será mantida a versão

1 = Será criado nova revisão

2 = Será criado nova versão

Importante lembrar que no momento da criação de um novo documento o valor sempre será 0.

int

inheritApprovers

Herda aprovadores do pai?

boolean

convertDocumentType

Armazenar por longo prazo (Apenas para pasta)

int

notificationDays

 Período de Notificação de Expiração

int

quota

Cota (MB) (Apenas para pasta)

int

publicDocument

Compartilhar externamente?

boolean



# DocumentEditDto

* * *

Este objeto representa as propriedades editáveis de um documento, na tabela abaixo consta mais informações sobre ele:

Propriedade

Descrição

Tipo

version

Versão do documento

Atenção

Essa propriedade somente terá efeito quando for um novo documento e estiver habilitado o [Controle manual de versão inicial](https://tdn.totvs.com/pages/viewpage.action?pageId=234455426). 

int

keyWord

Palavras chaves do documento. Cada palavra é separada por vírgula.

String

expires

Propriedade que define se o documento está expirado.

boolean

expirationDate

Data de expiração.

java.util.Date

validationStartDate

Data a partir da qual o documento poderá ser visualizado.

java.util.Date



# Attachment

* * *

São as representações físicas dos anexos que compõem um documento por completo. Suas propriedades representam as informações de um documento específico dentro do grupo que representa o documento como um todo para o GED, que por si só é composto por um anexo principal podendo conter outros anexos complementares.

Propriedade

Descrição

Tipo do objeto

fileName

Nome do arquivo físico

String

pathName

Caminho absoluto do arquivo completo na máquina (sem o nome do arquivo em si), caso o arquivo esteja no mesmo local onde está o servidor Fluig

String

fullPatch

Caminho absoluto do arquivo completo na máquina (com o nome do arquivo em si), caso o arquivo esteja no mesmo local onde está o servidor Fluig

String

fileSize

Tamanho do arquivo físico em bytes

String

iconPath

Caminho do ícone representativo do documento, caso vazio aparecerá o ícone padrão

String

attach

Se é anexo do documento, valor true para documentos que não são os principais do documento

Boolean

principal

Se é arquivo principal, mutuamente exclusivo com a propriedade attach

Boolean

descriptor

Propriedade que define se o documento é um descritor

Boolean

editing

Se o anexo está em edição, o padrão é false

Boolean

fileSelected

Arquivos selecionados, apenas para controle, não preencher

[Attachment\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)

filecontent

Conteúdo do arquivo em Base64, caso queira que o arquivo seja transferido por stream

byte

mobile

Se o arquivo foi adicionado por um dispositivo mobile

Boolean

-   Objeto Attachment utilizado como parâmetro e retorno para métodos WebService.



# RelatedDocumentDto

* * *

Representa os documentos relacionados com o documento.

Propriedade

Descrição

Tipo do objeto

DocumentId

Número do documento

int

version

Versão do documento

int

relatedDocumentId

Número do documento que está sendo relacionado

int

companyId

ID da empresa

long



# DocumentSecurityConfigDto

* * *

Representa a segurança de um documento e suas propriedades. Na tabela abaixo constam mais informações sobre ele:

Propriedade

Descrição

Tipo do objeto

documentId

Número do documento

int

version

Número da versão do documento

int

companyId

Código da empresa em que o documento foi publicado

int

attributionValue

Matricula de um usuário ou o código do grupo que está na segurança deste documento. É possível saber se vai retornar um usuário ou um grupo pelo tipo da segurança.

Obs.: Retorna em branco quando o tipo é todos os usuários

String

attributionType

Tipo da segurança, onde:

1 = Usuário;

2 = Grupo;

3 = Todos os usuários.

int

permission

Propriedade que define se é uma permissão

Obs.: Se não é uma permissão, é uma restrição

boolean

showContent

Propriedade que define se lista o documento

boolean

securityLevel

Nível de permissão/restrição onde:

\-1 = Sem permissão/restrição (nega acesso);

0 = Leitura;

1 = Gravação;

2 = Modificação;

3 = Total.

int

sequence

Sequência de permissão/restrição

int

securityVersion

Propriedade que define se o documento utiliza a segurança desta versão nas demais

boolean



# ApproverDto

* * *

Representa os aprovadores de um documento ou pasta.

Propriedade

Descrição

Tipo do objeto

companyId

ID da empresa

long

colleagueId

Matrícula do usuário

String

documentId

Número do documento

int

version

Versão do documento

int

levelId

Nível de aprovação

int

approverType

Tipo de aprovação (0 = Colaboradores / 1 = Grupo)

int



# ApproverWithLevelDto

* * *

Representa os aprovadores de um documento ou pasta.

Propriedade

Descrição

Tipo do objeto

companyId

ID da empresa

long

colleagueId

Matrícula do usuário

String

documentId

Número do documento

int

version

Versão do documento

int

levelId

Nível de aprovação

int



# ApprovalLevelDto

* * *

Representa os níveis de um documento ou pasta.

Propriedade

Descrição

Tipo do objeto

levelId

Nível de aprovação

int

levelDescription

Descrição do nível de aprovação

String

approvalMode

Modo de aprovação (1 = OU / 2 = E / 3 = ÚNICO

int



# ColleagueDto

* * *

Representa as propriedades do usuário. A tabela abaixo contém mais informações sobre o objeto.

Propriedade

Descrição

Tipo do objeto

companyId

ID da empresa

long

colleagueId

Matrícula do usuário

String

colleagueName

Nome do usuário

String

mail

E-mail do usuário

String

extensionNr

Ramal do usuário

String

currentProject

Projeto do usuário

String

especializationArea

Área de especialização

String

login

Login do usuário

String

passwd

Senha do usuário

String

active

Status do usuário

Boolean

homePage

Depreciado

String

photoPath

Caminho para foto de perfil

String

area1Id

Depreciado

int

area2Id

Depreciado

int

area3Id

Depreciado

int

area4Id

Depreciado

int

area5Id

Depreciado

int

emailHtml

Utiliza o e-mail em html

Boolean

adminUser

Usuário administrador

Boolean

groupId

Grupo de trabalho workflow

String

sessionId

Sessão do usuário

String

defaultLanguage

Idioma padrão de documentos

String

menuConfig

Configuração do menu

int

dialectId

Idioma do usuário

String

gedUser

Usuário GED

Boolean

volumeId

Volume físico

String

colleaguebackground

Depreciado

String

nominalUser

Depreciado

Boolean

guestUser

Depreciado

Boolean

maxPrivateSize

Espaço disponível (Meus Documentos)

Float

usedSpace

Espaço utilizado

Float



# ProcessAttachmentDto

* * *

Objeto que representa um anexo de processo, contendo informações sobre a solicitação e sobre o documento o qual representa, bem como os documentos anexados nele próprio. Em resumo é uma representação global de um anexo, constituído por outros subprojetos como suas próprias prioridades que representam os anexos propriamente ditos.

Propriedade

Descrição

Tipo do objeto

attachmentSequence

Código sequencial do anexo

int

attachments

Objetos representando os anexos físicos

[Attachment\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-Attachment)

colleagueId

Matrícula do usuário anexando o documento

String

colleagueName

Nome do usuário anexando o documento

String

companyId

Código da empresa

long

crc

*Cyclic Redundancy Check*, calculado automaticamente, não informar

long

createDate

Data de criação do anexo

Date

createDateTimestamp

Data da criação do anexo em milisegundos

long

deleted

Se o arquivo fora deletado dos anexos

Boolean

description

Descrição do anexo

String

documentId

Código do documento no GED

int

documentType

Tipo de documento (2 se é um anexo direto do GED / 7 se é um anexo de processo sem vínculo atual)

Utilizar o tipo 7 e publicá-lo após a movimentação caso o deseje no GED

String

fileName

Nome do arquivo físico

String

newAttach

Se é um arquivo físico

String

originalMovementSequence

Código da movimentação na qual o anexo foi inserido

int

permission

Permissões sobre o anexo específico (é recomendado controlar tais permissões pelas propriedades do processo)

String

processInstanceId

Código da solicitação

int

size

Tamanho somado de todos os arquivos em anexo

float

version

Versão do documento

int

-   Objeto ProcessAttachmentDto utilizado como parâmetro e retorno para métodos Webservice.



# KeyValueDto

* * *

Objeto responsável por informar valores nos campos de formulário.

Propriedade

Descrição

Tipo do objeto

key

Valor do parâmetro 'name' definido no campo do formulário

String

value

Valor a ser preenchido no campo definido na propriedade 'key'

String



# ProcessTaskAppoimentDto

* * *

Objeto responsável por informar apontamento da atividade de uma solicitação workflow.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

processInstanceId

Código da solicitação

int

movimentSequence

Sequencia da movimentação

int

colleagueId

Matrícula do usuário que criou o documento

String

transferenceSequence

Sequencia de transferência da atividade (histórico de movimentações)

int

appoimentDate

Data para o apontamento

Date

appoimentSeconds

Segundos para o apontamento

int

colleagueName

Nome do usuário para o apontamento

String



# AttributionMecanismDto

* * *

Objeto responsável por retornar informações de Mecanismo de atribuição.

Propriedade

Descrição

Tipo do obejto

companyId

Código da empresa

long

attributionMecanismId

Código do mecanismo de atribuição

String

name

Nome do mecanismo de atribuição

String

controlClass

Classe em que o mecanismo de atribuição está referenciado

String

preSelectionClass

Sequencia de transferência da atividade (histórico de movimentações)

String

configurationClass

Sequencia de apontamento

String

description

Descrição do mecanismo de atribuição

String

assignmentType

Tipo do mecanismo de atribuição ( 0 = Inteiro / 1 = Personalizado)

int

attributionMecanismDescription

Descrição do mecanismo de atribuição

String



# BusinessPeriodInfoDto

* * *

Objeto responsável por retornar informações de um período de expediente.

Propriedade

Descrição

Tipo do objeto

sequence

Código do período:

1 - Manhã

2 - Tarde

int

initialHour

Hora inicial do período

int

finalHour

Hora final do período

int



# ColleagueReplacementDto

* * *

Objeto responsável por retornar informações de usuário substituto.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

colleagueId

Código do usuário substituído

String

replacementId

Código do usuário substituto

String

validationStartDate

Data inicial da substituição. Exemplo: 2017-08-18T00:00:00-03:00

Date

viewWorkflowtasks

Substituto dos processos

Boolean

viewGEDTasks

Substituto dos documentos

Boolean



# Signal

* * *

Objeto responsável por retornar informações do Sinal.

Propriedade

Descrição

Tipo do objeto

sginalPK

Chave primária do Sinal

[SignalPK\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-SignalPK)

description

Descrição do Sinal

String



# SignalPK

* * *

Objeto responsável por retornar o PK do Sinal.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

signalId

Código do sinal

int



# DeadLineDto

* * *

Objeto responsável por retornar Data e Hora de uma atividade.

Propriedade

Descrição

Tipo do objeto

date

Data (Tipo String no formato "yyy-MM-dd")

String

hora

Hora

int



# ProcessDefinitionDto

* * *

Objeto responsável por retornar informações do processo.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

processId

Código do processo

String

processDescription

Descrição do processo

String

active

Processo ativo ou não

Boolean



# ProcessDefinitionVersionDto

* * *

Objeto responsável por retornar informações da versão do processo.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

processId

Código do processo

String

version

Versão do processo

int

versionDescription

Descrição da versão do processo

String

fullCategoryStructure

Categoria completa do processo, incluindo seu código

String

processDescription

Descrição do processo

String

favorite

Se o processo está nos favoritos do usuário

Boolean

mobileReady

Se o processo está disponível no Mobile

Boolean

formId

Código do formulário vinculado ao processo

String

formVersion

Versão do formulário vinculado ao processo

String

initialProcessState

Descrição do processo

[ProcessStateDto](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessStateDto)

relatedDatasets

Descrição do processo

String\[\]

counterSign

Se o processo assina digitalmente

Boolean



# ProcessStateDto

* * *

Objeto responsável por retornar informações do estado do processo.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

sequence

Sequência do processo

int

stateName

Nome do estado do processo

String

stateDescription

Descrição do estado do processo

String

counterSign

Se o processo assina digitalmente

Boolean



# AvailableUsersDto

* * *

Objeto responsável por retornar usuários de uma atividade.

Propriedade

Descrição

Tipo do objeto

willShowUsers

Utilizado para exibir a tela de seleção de usuários

Boolean

isCollectiveTask

Se a atividade é conjunta

Boolean

users

informações do usuário

[ColleagueDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ColleagueDto)



# ProcessHistoryDto

* * *

Objeto responsável por retornar informações do histórico de uma solicitação.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

processInstanceId

Número da solicitação

int

movementSequence

Número da movimentação

int

active

Se o processo está ativo

Boolean

movementDate

Data de movimentação

Date

movementHour

Hora de movimentação

String

stateSequence

Sequencia da movimentação

int

subProcessId

Número do subprocesso se disponível

int

threadSequence

Indica se existe atividade paralela no processo. Se existir o valor é 0 (zero), caso exista, este valor pode ser de 1 a infinito dependendo da quantidade da atividade paralelas existentes no processo.

int

previousMovementSequence

Número da movimentação anterior

int

conversionSequence

Sequencia quando a solicitação foi convertida

int

isReturm

Se possui fluxo de retorno

Boolean

labelActivity

Descrição da atividade

String

labelLink

Link da atividade

String

tasks

Atividades

[ProcessTaskDto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-ProcessTaskDto)



# ProcessTaskDto

* * *

Objeto responsável por retornar informações de uma atividade.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

processInstanceId

Número da solicitação

int

movementSequence

Número da sequência quando transferido

int

transferredSequence

Número da sequência quando transferido

int

colleagueId

Matrícula do usuário da atividade

String

status

Status da atividade

Boolean

active

Se a atividade está ativa

Boolean

isComplement

Se é um complemento

Boolean

choosedSequence

Sequência escolhida

String

ChoosedColleagueId

Matrícula do usuário escolhido

String

taskObservation

Observação da atividade

String

taskCompletionDate

Data de conclusão da atividade

String

taskCompletionHour

Hora de conclusão da atividade

int

completeColleagueId

Usuário que completou a atividade

String

completeType

Tipo de conclusão:

0 - Gestor

1 - Substituto

2 - Substituto do gestor

int

taskSigned

Se a atividade foi assinada

Boolean

deadlineText

Texto de atraso

String

colleagueName

Nome do usuário

String

historTaskObservation

Histórico de observações na atividade

String

historCompleteColleague

Histórico de conclusões da atividade

String

statusConsult

Status da atividade para consulta

int

canCurrentUserTakeTaks

Se o usuário pode assumir a atividade

Boolean



# WorkflowTaskDto

* * *

Objeto responsável por retornar informações da tarefa.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

taskId

Código da tarefa

int

owner

dono da tarefa

String

description

Descrição da tarefa

String

deadline

Prazo da tarefa

int

creationDate

Data de criação da tarefa

Date

creationTime

Hora de criação da tarefa

int

taskStatus

Status da tarefa:

0 - Pendente

1 - Pendente de consenso

2 - Completada

3 - Transferida

4 - Cancelada

int

expectedConclusionDate

Data de conclusão experada

Date

actualConclusionDate

Data atual de conclusão

Date

actualConclusionTime

Hora atual de conclusão

int

processInstanceId

Número da solicitação

int

movementSequence

Número da movimentação

int



# WorkflowRoleDto

* * *

Objeto responsável por retornar informações do Papel.

Propriedade

Descrição

Tipo do objeto

roleId

Código do papel

String

companyId

Código da empresa

long

roleDescription

Descrição do papel

String



# TaskVODto

* * *

Objeto responsável por retornar informações da tarefa.

Propriedade

Descrição

Tipo do objeto

taskId

Código da tarefa

String

type

Tipo

long

iconset

Ícone

String

state

Estado da tarefa

String

iconPath

Caminho do ícone

String

description

Descrição da tarefa

String

children

Tarefas filhas

[TaskVODto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-TaskVODto)



# HomeRequestSummaryDto

* * *

Objeto responsável por retornar os números de pendências do usuário.

Propriedade

Descrição

Tipo do objeto

numberOfWorkflowPendingRequests

Quantidade de solicitações iniciadas que estão pendentes

int

numberOfWorkflowUnderDeadlineRequests

Quantidade de solicitações iniciadas que estão no prazo

int

numberOfWorkflowDelavedRequests

Quantidade de solicitações iniciadas que estão atrasadas

int

numberOfOpenRequests

Quantidade de solicitações abertas

int

numberOfPoolGroupRequests

Quantidade de solicitações em Pool para um Grupo

int

numberOfPoolRoleRequests

Quantidade de solicitações em Pool para um Papel

int

numberOfDocumentApprovalPending

Quantidade de documentos pendentes de aprovação

int

numberOfDocumentAwaitingApproval

Quantidade de documentos aguardando aprovação

int

numberOfLearningTasks

Quantidade de Tarefas em aprendizagem

int

replacementId

Matrícula do usuário substituído

String



# WorkflowProcessDto

* * *

Objeto responsável por retornar informações do processo Workflow.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

long

processInstanceId

Número da solicitação

int

processId

Código do processo

String

version

Versão do processo

int

requesterId

Matrícula do usuário requisitante

String

requesterName

Nome do usuário requisitante

Stirng

active

Se o processo está ativo

Boolean

attachmentSeqId

Sequência de anexo da atividade

int

processDescription

Matrícula do usuário substituído

String

deadlineDate

Prazo da atividade

Date

deadlineText

Texto de atraso da atividade

String

documentDescription

Descrição do documento

String

colleagueName

Nome do usuário

String

movementSequence

Número de movimento

int

mainAttachmentDocumentId

Código do documento principal

int

mainAttachmentDocumentVersion

Versão do documento principal

int

counterSign

Se o processo assina digitalmente

Boolean

movementHour

Hora da movimentação

String

startupHour

Hora que foi iniciado

String

mobileReady

Se está disponível no mobile

Boolean

canCancel

Se o usuário pode cancelar

Boolean

canTake

Se o usuário pode assumir

Boolean

url

URL de acesso ao processo

String

relatedDatasets

Datasets relacionados ao processo

String\[\]



# WebServiceMessageArray

* * *

Objeto responsável por retornar informações do documento.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

int

documentDescription

Descrição do documento

String

documentId

Código do documento

int

version

Versão do documento

int

webServiceMessage

Mensagem de retorno

String



# CardEventDtoArray

* * *

Propriedade

Descrição

Tipo do objeto

eventId

Código do evento

int

eventDescription

Descrição do evento

String

eventVersAnt

Versão anterior do evento

Boolean



# CustomFieldsDto

* * *

Objeto responsável por retornar informações do campo personalizado.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

int

customFieldDescription

Descrição do campo personalizado

String

customFieldId

Código do campo personalizado

int



# DocumentCustomFieldsDto

* * *

Objeto responsável por retornar informações do documento com campo personalizado.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

int

customFieldDescription

Descrição do campo personalizado

String

customFieldId

Código do campo personalizado

int



# DocumentApprovementHistoryDto

* * *

Objeto responsável por retornar Histórico de aprovação de documentos.

Propriedade

Descrição

Tipo do objeto

colleagueId

Código do usuário

String

documentVersion

Versão do documento

int

iterationSequence

Sequencia de interação

int

levelId

Nível do ID

int

movementSequence

Sequencia de movimentação

String

observation

Observação

String

signed

Documento assinado

Boolean

status

Status do documento

int



# DocumentApprovalStatusDto

* * *

Objeto responsável por retornar informações do Status de aprovação de documentos.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

int

documentId

Código do documento

int

version

Versão do documento

int

status

Status do documento

int



# RelatedDocumentDto

* * *

Objeto responsável por retornar informações do Documento relacionado.

Propriedade

Descrição

Tipo do objeto

companyId

Código da empresa

int

documentId

Código do documento

int

relatedDocumentId

Código do documento relacionado

int

version

Versão do documento

int



# WorkflowRoleDto

* * *

Objeto responsável por retornar informações do Papel.

Propriedade

Descrição

Tipo do objeto

roleId

Código do papel

String

companyId

Código da empresa

long

roleDescription

Descrição do papel

String



# TaskVODto

* * *

Objeto responsável por retornar informações da Tarefa.

Propriedade

Descrição

Tipo do objeto

taskId

Código da tarefa

String

type

Tipo

long

iconset

Ícone

String

state

Estado da tarefa

String

icoPath

Caminho do ícone

String

description

Descrição da tarefa

String

children

Tarefas filhas

[TaskVODto\[\]](https://tdn.totvs.com/display/fluig/Guia+de+Propriedades+dos+Objetos#GuiadePropriedadesdosObjetos-TaskVODto.1)



# HomeRequestSummaryDto

* * *

Objeto responsável por retornar os números de pendências do usuário.

Propriedade

Descrição

Tipo do objeto

numberOfWorkflowPendingRequests

Quantidade de solicitações iniciadas que estão pendentes

int

numberOfWorkflowUnderDeadlineRequest

Quantidade de solicitações iniciadas que estão no prazo

int

numberOfWorkflowDelayedRequests

Quantidade de solicitações iniciadas que estão atrasadas

int

numberOfOpenRequests

Quantidade de solicitações abertas

int

numberOfPoolGroupRequests

Quantidade de solicitações em Pool para um Grupo

int

numberOfPoolRoleRequests

Quantidade de solicitações em Pool para um Papel

int

numberOfDocumentApprovalPending

Quantidade de documentos pendentes de aprovação

int

numberOfDocumentAwaitingApproval

Quantidade de documentos aguardando aprovação

int

numberOfLearningTasks

Quantidade de tarefas de Aprendizagem

int

replacementId

Matrícula do usuário substituído

String



# SearchResultDto

* * *

Objeto responsável por retornar informações da busca de documento.

Propriedade

Descrição

Tipo do objeto

colleagueId

Matricula do usuário que criou o documento

String

companyId

Código da empresa

int

crc

Crc do documento

long

documentDescription

Nome do documento

String

documentId

Código do documento

int

documentType

Tipo do documento

String

folderName

Nome de pasta

String

iconId

ID do ícone

int

inheritApprovers

Herda aprovadores

Boolean

lastModifiedDate

Última data modificada

Date

parentDocumentId

ID do documento pai

int

phisicalFile

Nome do arquivo de download

String

phisicalFileSize

Tamanho do arquivo

String

privateDocument

Documento privado

Boolean

publisherId

ID do publicador do documento

String

publisherName

Nome do publicador do documento

String

topicId

ID do assunto do documento

int

version

Versão do documento

int



# DatasetDto

* * *

Objeto responsável por retornar as colunas e os valores do dataset executado.

Propriedade

Descrição

Tipo do objeto

columns

Lista as colunas do dataset

String\[\]

values

Lista os valores retornados em cada coluna

[ValuesDto](#GuiadePropriedadesdosObjetos-ValuesDto)\[\]



# ValuesDto

* * *

Objeto responsável por retornar os valores do dataset executado, referente à cada coluna.

Propriedade

Descrição

Tipo do objeto

value

Valor retornado em cada coluna

Object\[\]



# GroupDto

* * *

Objeto responsável por retornar as informações do grupo.

Propriedade

Descrição

Tipo do objeto

groupDescription

Descrição do grupo

String

groupId

Código do grupo

String

companyId

Código da empresa

long



# cardData

* * *

Responsável pelos dados do registro de formulário.

```
<cardData>
   <item>
      <item>campo1</item>
      <item>valor do campo id campo1</item>
   </item>
   <item>
      <item>campo2</item>
      <item>valor do campo id campo2</item>
   </item>
   <item>
      <item>column1___1</item>
      <item>valor do campo em um campo múltiplos registros (pai x filho) com id column1 e na primeira linha</item>
   </item>
   <item>
      <item>column1___2</item>
      <item>valor do campo em um campo múltiplos registros (pai x filho) com id column1 e na segunda linha</item>
   </item>
</cardData>
```
