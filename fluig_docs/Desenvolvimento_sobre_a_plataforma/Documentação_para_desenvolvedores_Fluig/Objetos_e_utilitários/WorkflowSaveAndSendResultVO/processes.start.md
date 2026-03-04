# processes.start

> **Fonte:** [https://tdn.totvs.com/display/fluig/processes.start](https://tdn.totvs.com/display/fluig/processes.start)

---

O método **start** do objeto [Processes](https://tdn.totvs.com/display/fluig/Processes) inicia uma solicitação nova, podendo preencher dados e movimentar para a atividade seguinte selecionando quais os usuários irão receber a próxima atividade. 

A solicitação **sempre** será iniciada pelo usuário atual, que está movimentando a solicitação.

# Sintaxe

```
processes.get(processId).start({
   "chosenState": chosenState,
   "colleagues": colleagues,
   "comments": comments,
   "completeTask": completeTask,
   "formData": formData,
   "managerMode": managerMode
})
```

## Parâmetros

### processId

A string do id do processo da nova solicitação.

### chosenState

(opcional) 

Um número inteiro representando o sequencial da atividade para qual será encaminhado a solicitação após o início. Deve ser um sequencial de atividade existente no processo *processId* e que seja uma atividade que receba um fluxo da atividade inicial.

Caso não seja enviado ou seja enviado zero, será usado o sequencial da primeira atividade pós atividade inicial.

### colleagues

(opcional)

Uma string ou uma [lista](https://tdn.totvs.com/pages/viewpage.action?pageId=781871855) de strings com a(s) matrícula(s) dos usuários que irão receber a atividade.

Este campo é opcional quando *completeTask* é **false** ou quando o mecanismo de atribuição da atividade destino (*chosenState*) possui apenas uma opção de destino. 

### comments

(opcional)

Uma string com comentários que serão adicionando junto com a abertura da solicitação.

Caso não seja enviado ou seja enviado  **null** ou uma string vazia, nenhum comentário será adicionado.

### completeTask

(opcional)

Um booleano informando se a tarefa vai ser movimentada ou apenas salva.

Caso *true*, a solicitação será salva com os comentários e dados de formulário informados e movimentada para a próxima atividade.

Caso não seja informado ou seja *false*, a solicitação será salva com os comentários e dados de formulário informados **mas** permanecerá na atividade inicial, sem movimentar.

### formData

(opcional)

Uma [mapa](https://tdn.totvs.com/pages/viewpage.action?pageId=781871856) com os dados do formulário, composta por chave do tipo String com o nome do campo de formulário e valores do tipo String com o valor respectivo de cada campo.

### managerMode

(opcional)

Um booleano informando se a tarefa vai ser movimentada como usuário gestor do processo.

Caso *true* a tarefa é movimentada como usuário gestor.

Caso não seja informado ou seja *false* a tarefa é movimentada como usuário normal, responsável pela tarefa.

## Valor de retorno

Um objeto [MovementResultVO](https://tdn.totvs.com/display/fluig/MovementResultVO) com os dados da solicitação criada

# Exemplos de uso

## Inicialização simples mantendo a solicitação na atividade inicial

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {

    processes.get("solicitacaoCompras").start({
      colleagues: "adm" // ou ["adm"]
    });
  }
}
```

## Inicialização simples movimentando a solicitação para a próxima atividade

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    processes.get("solicitacaoCompras").start({
      colleagues: "adm", // ou ["adm"]
      completeTask: true
    });
  }
}
```

## Inicialização simples movimentando a solicitação para a próxima atividade, quando existe mais de uma opção

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    processes.get("solicitacaoCompras").start({
      chosenState: 4,
      colleagues: "adm", // ou ["adm"]
      completeTask: true
    });
  }
}
```

## Movimentando uma tarefa que tem mecanismo de atribuição "para um Grupo"

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    processes.get("solicitacaoCompras").start({
      chosenState: 4,
      colleagues: "Pool:Group:Compras", // ou ["Pool:Group:Compras"], onde  Compras é o id do grupo
      completeTask: true
    });
  }
}
```

## Movimentando uma tarefa que tem mecanismo de atribuição "para um Papel"

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    processes.get("solicitacaoCompras").start({
      chosenState: 4,
      colleagues: "Pool:Role:Supervisao", // ou ["Pool:Role:Supervisao"], onde Supervisao é o id do papel
      completeTask: true
    });
  }
}
```

## Inicialização simples com dados de formulário

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    processes.get("solicitacaoCompras").start({
      colleagues: "adm", // ou ["adm"]
      completeTask: true,
      formData: {
       "codigo": "1",
       "nome": "João da Silva"
      }
    });
  }
}
```

## Inicialização simples com dados de formulário com registro pai x filho

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    processes.get("solicitacaoCompras").start({
      colleagues: "adm", // ou ["adm"]
      completeTask: true,
      formData: {
       "codigo": "1",
       "nome": "João da Silva",
       "email___1": "[email protected]",
       "email___2": "[email protected]"
      }
    });
  }
}
```

## Adicionando comentários na inicialização da solicitação

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
     processes.get("solicitacaoCompras").start({
      colleagues: "adm", // ou ["adm"]
      comments: "Solicitação criada automaticamente pelo fluig",
      completeTask: true
    });
  }
}
```

## Movimentando para uma atividade em consenso para múltiplos usuários

```
function beforeStateEntry(sequenceId) {
  if (sequenceId == 5) {
    processes.get("solicitacaoCompras").start({
      colleagues: ["adm", "supervisor", "gestor" /*, ... */],
      completeTask: true
    });
  }
}
```
