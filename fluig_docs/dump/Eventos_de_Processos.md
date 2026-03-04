# Eventos de Processos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Eventos+de+Processos](https://tdn.totvs.com/display/fluig/Eventos+de+Processos)

---

# Eventos

* * *

Os eventos de um processo são um conjunto de *scripts* carregados pela API de *workflow*. Tais *scripts* são desenvolvidos com o uso da linguagem JavaScript e chamados ao longo da execução do processo em momentos predeterminados, como por exemplo a criação da solicitação do processo ou a entrada em uma nova atividade.

A implementação dos eventos do processo é realizada pelo fluig Studio, sendo necessário já existir um projeto fluig com pelo menos um diagrama de processo. 

Para criar um novo evento do processo, clicar com o botão direito do *mouse* no projeto, acessar a opção *New* e, em seguida, a opção *Other*. No assistente aberto, selecionar a opção **"*Script* evento *workflow*",** presente na pasta fluig, e clicar no botão *Next*. Na nova tela, selecionar qual o evento que será criado e relacionar ele a um processo já existente. Para finalizar, clicar no botão *Finish*:



#### afterReleaseProcessVersion

Evento disparado após a criação ou modificação nas configurações de um determinado processo.

Atenção

 Caso o processo possua o evento "afterReleaseVersion" implementado, este evento global será desconsiderado na liberação de novas versões do processo em questão



-   Abaixo segue um exemplo de como implementar esse evento:

```
function afterReleaseProcessVersion(processXML){
    var pdv = getValue("ProcessDefinitionVersionDto");
    var processInfo = "\n### Nova versão de processo liberada: ###";
    processInfo += "\n User: " + getValue("WKUser");
    processInfo += "\n processDescription: " + pdv.getProcessDescription();
    processInfo += "\n processId: " + pdv.getProcessId();
    processInfo += "\n version: " + pdv.getVersion();
    log.info(processInfo + "\n");
}
```



São disponibilizadas algumas propriedades referentes ao processo que esta sendo liberado, porém somente para consulta através do método getValue.

Propriedade

Descrição

Tipo

WKCompany

Código da empresa

long

WKUser

Usuário logado

String

ProcessDefinitionVersion

Objeto com propriedades da versão do processo alterada

[ProcessDefinitionVersionDto](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-ProcessDefinitionVersionDto)



#### afterReleaseVersion

Ocorre após a liberação de uma versão do processo.



**Parâmetro:
**

Descrição

Tipo

XML com a definição do processo

string



#### beforeStateEntry

Ocorre antes da entrada em uma nova atividade.

Dica

Utilize este evento para realizar validações que ocasionalmente possam resultar no bloqueio da movimentação do processo. Para suspender a movimentação e exibir uma mensagem de alerta para o usuário, utilize o comando 'throw', conforme exemplo abaixo:

throw "Erro ao movimentar solicitação";



**Parâmetro:**

Descrição

Tipo

Sequência da atividade

Integer



#### beforeTaskCreate

Ocorre antes que o usuário receba uma tarefa.

```
function beforeTaskCreate(colleagueId){

    // Impede que um determinado usuário assuma a tarefa
        if(colleagueId == "Administrador2" && getValue("takeTask") == true)  {
            throw "Você não pode assumir esta tarefa";
        }
}
```





**Parâmetro:**

Descrição

Tipo

Matrícula do usuário

string



#### afterTaskCreate

Ocorre após o usuário receber uma tarefa.



**Parâmetro:**

Descrição

Tipo

Matrícula do usuário

string



#### afterStateEntry

Ocorre após a entrada em uma nova atividade.

Este evento não retorna erros para a tela naturalmente. Caso ocorra um erro durante a execução do afterStateEntry, ele será ignorado. Se o mesmo erro resultar no encerramento da transação (por exemplo, causando o timeout de transação ou uma exceção que force Rollback) a mensagem de transação abortada será apresentada em tela ao invés do erro esperado.



**Parâmetro:**

Descrição

Tipo

Sequência da atividade

Integer



**Exemplo (chamada do Dataset com varredura por colunas):**

```
var datasetReturned = DatasetFactory.getDataset("Formuláriodelocal6", null, null, null);

log.info("===============COLUNAS=======================");

log.info("===============NOME COLUNAS=======================");

for (var j = 0; j < datasetReturned.rowsCount; j++) {

try {

log.info("******** COLUMN ---->" + datasetReturned.getColumnName(j));
    } catch (e) {
log.info("EEEEEEEEEEEEEEEEEE ->" + e);
    }

}
```



#### beforeSendData

É o último evento a ser executado. Possui integração com Analytics, podendo enviar dados específicos de processos Workflow. 

Este evento não deve possuir lógicas desenvolvidas diretamente nele, pois o importador de dados do Analytics não interpreta lógicas (if e else, por exemplo) fazendo com que estas lógicas complexas não sejam processadas

Todas as lógicas necessárias devem ser feitas nos eventos de processo, como BeforeStateEntry, deixando os valores que serão enviados para o Analytics corretos antes do envio.


Para maiores detalhes sobre a utilização desse evento, acesse [Guia de Implementação Fluig Analytics](https://tdn.totvs.com/pages/viewpage.action?pageId=107381593#GuiadeImplantaçãoFluigAnalytics-EnviodosDados). 



#### validateAvailableStates

Ocorre após montada a lista de tarefas disponíveis para o usuário a partir da tarefa atual.

**Exemplo:**

```
function validateAvailableStates(iCurrentState, stateList) {
    // Código: 1 - Descrição: Atividade inicial
    // Código: 2 - Descrição: Atividade ordem 3
    // Código: 3 - Descrição: Atividade ordem 2
    // Código: 4 - Descrição: Atividade ordem 1

    // stateList atual: [2,3,4]

    var stateArray = new Array();

    if (iCurrentState == 1) {
        stateList.clear();
        stateArray.push(4,3,2);
    }

    stateArray.forEach(function(code) {
        stateList.add(new java.lang.Integer(code));
    });

    // stateList reordenado: [4,3,2]
    return stateList;
}
```



**Parâmetro:**

Tipo

Descrição

Tipo

iCurrentState

Sequência da atividade atual

Integer

stateList

Lista das sequências das atividades

List<Integer>



#### beforeTaskSave

Ocorre antes de salvar as informações selecionadas pelo usuário.



**Parâmetros:**

Descrição

Tipo

Usuário corrente

string

Sequência da próxima atividade

Integer

Lista de usuários destino

List<String>



#### afterProcessCreate

Ocorre logo após a criação de um novo processo.



**Parâmetro:**

Descrição

Tipo

Número do novo processo

Integer



#### beforeTaskComplete

Ocorre antes que o usuário complete uma tarefa, porém as informações de próxima tarefa e usuários destino já foram salvas.

Observação

Diferente dos demais eventos do tipo before, este evento não dispara suas validações ao servidor, fazendo com que o sistema não pare a movimentação da atividade quando o mesmo lança uma exceção.



**Parâmetros:**

Descrição

Tipo

Usuário corrente

string

Seqüência da próxima atividade

Integer

Lista de usuários destino

List<String>



#### afterTaskComplete

Ocorre após o usuário completar uma tarefa, porém as informações de próxima tarefa e usuários destino já foram salvas.



**Parâmetros:**

Descrição

Tipo

Usuário corrente

string

Seqüência da próxima atividade

Integer

Lista de usuários destino

List<String>



#### beforeStateLeave

Ocorre antes da saída de uma atividade.



**Parâmetro:**

Descrição

Tipo

Seqüência da atividade

Integer



#### afterStateLeave

Ocorre após a saída de uma atividade.



**Parâmetro:**

Descrição

Tipo

Seqüência da atividade

Integer



#### onNotify

Se refere a um evento global que ocorre após a movimentação da solicitação e antes de enviar as notificações.

Para mais detalhes consulte a página [Desenvolvimento de eventos - On Notify](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Eventos#DesenvolvimentodeEventos-OnNotify).



#### checkComplementsPermission

Através dele é possível determinar se o usuário corrente do processo poderá ou não adicionar complementos mesmo com permissionamento ligado na modelagem do processo. Este evento possui acesso a todas as propriedades dos processos workflow (quando disponíveis) bem como acesso a hAPI, FLUIG e seus métodos.

O exemplo abaixo irá procurar o usuário corrente no dataset de colleagueGroups. Caso o usuário não esteja neste grupo não será possível para este usuário adicionar complementos extras. 

```
function checkComplementsPermission() {
    var user = getValue("WKUser");
    var company = getValue("WKCompany");
    var group = "Auditoras";
    var Id = DatasetFactory.createConstraint('colleagueGroupPK.colleagueId',
            user, user, ConstraintType.MUST);
    var group = DatasetFactory.createConstraint('colleagueGroupPK.groupId',
            group, group, ConstraintType.MUST);
    var company = DatasetFactory.createConstraint('colleagueGroupPK.companyId',
            company, company, ConstraintType.MUST);
    var colleagueGroup = DatasetFactory.getDataset('colleagueGroup', null,
            new Array(Id, group, company), null);
    if (colleagueGroup != null && colleagueGroup.getRowsCount() == 1) {
        return true;
    } else {
        return false
    }

}
```

Atenção

-   Este evento não será executado na abertura de solicitação. O evento não impede o responsável de adicionar anexos e observações antes mesmo da solicitação ser aberta (possuir código de solicitação).
-   O evento checkComplementsPermission não permite oferecer permissões adicionais na edição de complementos em relação as permissões definidas na configuração do processo. Por este é evento é possível apenas restringir mais especificamente as permissões de adição de complementos. Se via configuração do processo determinado usuário não consegue adicionar anexos não é possível que este evento forneça permissão para este usuário.



#### subProcessCreated

Ocorre quando um sub-processo é criado.



**Parâmetro:**

Descrição

Tipo

Número do sub-processo

Integer



#### afterProcessFinish

Ocorre após finalizada a solicitação.



**Parâmetro:**

Descrição

Tipo

Número do processo

Integer



#### beforeCancelProcess

Ocorre antes do cancelamento da solicitação.



**Parâmetros:**

Descrição

Tipo

Usuário corrente

string

Número do processo

Integer



#### afterCancelProcess

Ocorre após o cancelamento da solicitação. É recomendado não disparar exceções neste método, pois o cancelamento já foi realizado.



**Parâmetros:**

Descrição

Tipo

Usuário corrente

string

Número do processo

Integer



### Eventos de Formulário Pai Filho

* * *

**getChildrenFromTable**
Esse evento retorna um mapa com todos os campos filhos de um Pai Filho a partir do seu *tablename*.

**getChildrenIndexes**
Esse evento retorna os índices dos registros (linhas) contidos em um Pai Filho a partir do seu *tablename*.

Quando utilizado em processos será necessário acessar a hAPI.

**Exemplo**:

```
var indexes = hAPI.getChildrenIndexes("itens");
 var total = 0;
 for (var i = 0; i < indexes.length; i++) {
 var fieldValue = parseInt(hAPI.getCardValue("descricao___" + indexes[i]));
 if (isNaN(fieldValue)){
 fieldValue = 0;
 }
 total = total + fieldValue;
 }
```

Saiba mais

Importante ressaltar que só será possível recuperar os dados após salvo, ou seja, somente nos eventos After.

Para saber mais detalhes sobre os eventos de formulário Pai Filho, acesse a documentação [Eventos de Formulário](https://tdn.totvs.com/x/fvklE).





# Eventos nas etapas dos processos

* * *

#### Liberar nova versão do processo

Quando liberar uma nova versão do processo configurado, o evento executado será:

-   afterReleaseVersion



#### Salvar nova solicitação

Quando iniciar uma solicitação pelo menu Processos, é evento executado será:

-   validateAvailableState

Acionando o botão Salvar da solicitação, os eventos executados são: 

-   beforeStateEntry
-   beforeTaskCreate
-   afterTaskCreate
-   afterStateEntry
-   beforeSendData
-   validateAvailableStates
-   beforeTaskSave
-   afterTaskSave
-   afterProcessCreate



#### Criar nova solicitação

Quando iniciar uma solicitação pelo menu Processos, é evento executado será:

-   validateAvailableStates

Após criada a solicitação e acionado o botão Enviar, os eventos executados serão:

-   beforeStateEntry
-   beforeTaskCreate
-   afterTaskCreate
-   afterStateEntry
-   beforeSendData
-   validateAvailableStates
-   beforeTaskSave
-   afterTaskSave
-   beforeTaskComplete
-   afterTaskComplete
-   beforeStateLeave
-   afterStateLeave
-   afterProcessCreate
-   onNotify



#### Visualizar solicitação

Quando acessar a Central de Tarefas, abrir uma solicitação já iniciada, os eventos executados serão:

-   validateAvailableStates
-   checkComplementsPermission



#### Salvar solicitação

Quando acionar o botão Salvar a solicitação, os eventos executados serão:

-   validateAvailableStates
-   beforeTaskSave
-   afterTaskSave



#### Movimentar solicitação

Quando movimentar a solicitação acionando o botão Enviar, os eventos executados serão:

-   validateAvailableStates
-   beforeTaskSave
-   afterTaskSave
-   beforeTaskComplete
-   afterTaskComplete
-   beforeStateLeave
-   afterStateLeave
-   beforeStateEntry
-   beforeTaskCreate
-   afterTaskCreate
-   afterStateEntry
-   beforeSendData
-   onNotify



#### Movimentar para subprocesso

Quando movimentar a solicitação para subprocesso acionando o botão Enviar, os eventos executados serão:

-   validateAvailableStates
-   beforeTaskSave
-   afterTaskSave
-   beforeTaskComplete
-   afterTaskComplete
-   beforeStateLeave
-   afterStateLeave
-   beforeStateEntry
-   subProcessCreated
-   afterStateEntry
-   BeforeSendData
-   onNotify



#### Finalizar solicitação

Quando finalizar a solicitação acionando o botão Enviar, os eventos executados serão:

-   validateAvailableStates
-   beforeTaskSave
-   afterTaskSave
-   beforeTaskComplete
-   afterTaskComplete
-   beforeStateLeave
-   afterStateLeave
-   beforeStateEntry
-   afterStateEntry
-   afterProcessFinish
-   beforeSendData



#### Cancelar solicitação

Quando usuário acessar solicitação já iniciada na Central de Tarefas para Cancelamento, o evento executado será:

-   checkComplementsPermissions.

Quando acionar o botão Cancelar Solicitação, os eventos executados serão:

-   beforeCancelProcess
-   afterCancelProcess
-   beforeSendData
-   onNotify
