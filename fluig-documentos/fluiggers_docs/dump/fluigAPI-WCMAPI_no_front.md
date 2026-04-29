# fluigAPI-WCMAPI no front

> **Fonte:** [https://fluiggers.com.br/t/fluigapi-wcmapi-no-front/86](https://fluiggers.com.br/t/fluigapi-wcmapi-no-front/86)
> **Categoria:** BPM
> **Tags:** `processo`, `fluigapi`, `wcmapi`, `solicitacao`
> **Criado em:** 12/03/2021, 18:09
> **Visualizações:** 1539 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 12/03/2021, 18:09 | ❤️ 4

Snippet para chamadas da fluigAPI client-side. No exemplo, iniciando um processo:

```auto
function fnCriarSolic() {
    var startRequest = {
        "targetState": 2,
        "targetAssignee": "login do responsavel",
        "subProcessTargetState": 0,
        "comment": "iniciado automaticamente",
        "formFields": {
            "nomeClienteAbrev": "nome do cliente",
            "numPedidoCliente": "23608",
            "codCliente": "312345"
        }
    };
    startProcess('codigo do processo', startRequest);
}

function startProcess(processId, startRequest) {
    parent.WCMAPI.Create({
        url: parent.WCMAPI.serverURL + '/process-management/api/v2/processes/' + processId + '/start',
        contentType: 'application/json',
        type: 'POST',
        data: startRequest,
        success: function (data, status, jqXHR) {
            console.log(data.processInstanceId);
        },
        error: function (msg) {
            console.log(msg.status);
            console.log(msg.statusText);
            mapaErros(msg.status);
        }
    });
}

function mapaErros(codigo) {
    if (codigo == '400') {
        alert(codigo + '-Parâmetros não estão corretos.')
    }
    if (codigo == '401') {
        alert(codigo + '-Usuário não está autenticado.')
    }
    if (codigo == '403') {
        alert(codigo + '-Usuário não tem permissão para essa ação.')
    }
    if (codigo == '404') {
        alert(codigo + '-Recurso não encontrado.')
    }
    if (codigo == '500') {
        alert(codigo + '-Erro interno do servidor.')
    }

}
```

---

## Resposta #1

**Marco Comassetto** (@marcommas) — 12/08/2021, 10:02

Fala Daniel,
Estou fazendo uns testes e sempre quando eu inicio via WS Rest ela avança a atividade, to mandando para atividade inicial e sempre está movimentando o fluxo para frente. Tem alguma possibilidade de não realizar essa movimentação?
Sei que via SOAP, tem a tag completeTask, que define como false e não movimenta a atividade para frente, ela salva na atividade que foi passada para ela.
Via REST tem essa opção? acabei não conseguindo fazer isso.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 13/08/2021, 12:53

Boa tarde, Esperimente usar targetState 0.

---
