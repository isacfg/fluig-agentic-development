# Utilizando opção "Salvar"

> **Fonte:** [https://fluiggers.com.br/t/utilizando-opcao-salvar/630](https://fluiggers.com.br/t/utilizando-opcao-salvar/630)
> **Categoria:** Formulários
> **Criado em:** 30/08/2021, 09:12
> **Visualizações:** 1528 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 30/08/2021, 09:12

Bom dia galera,

Em um fluxo no qual estou trabalhando, queria fazer o uso da opção “Salvar” no preenchimento do formulário.

![image](https://fluiggers.com.br/uploads/default/original/1X/e5e06deadc1265e32e0e924e1bc5db9ed20bd8be.png)

Porém no evento validateForm, valida todos os campos do processo(e não são poucos).

Então, quando o usuário selecionar a opção de Salvar, teoricamente ele não deveria olhar para o validateForm, somente quando for o caso de Enviar.

Uma forma que encontrei para tal foi fazer via evento de Processo:

```auto
function beforeTaskSave(colleagueId,nextSequenceId,userList){

    var ativAtual     = getValue("WKNumProces");
    var WKCompletTask = getValue("WKCompletTask");

    if (ativAtual == 20) { // aqui você faz a validação de acordo com sua atividade
         var campo = hAPI.getCardValue("txt_campo");

         if (WKCompletTask.equals("true")) { // aqui verifica se está completando a tarefa ou não. TRUE (quando clica em enviar), FALSE (quando clica em salvar)
             if (campo == '') {
                throw "Não pode finalizar o processo sem que o campo esteja preenchido.";
            }
        }
    }
}
```

A forma correta de fazer isso é realmente transferindo a opção de validações para o evento beforeTaskSave acima ou consigo de alguma forma aproveitar o validateForm?

Agradeço.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/08/2021, 09:40 | ❤️ 2

Eu faço isso na `validateForms`:

```javascript
/**
 * Validação dos dados do formulário
 *
 * @param {FormController} form
 * @throws {string}
 */
function validateForm(form) {
    var numState = parseInt(getValue("WKNumState"));

    // Salvando um rascunho não precisa validar formulário
    if (numState == parseInt(getValue("WKNextState"))) {
        return;
    }

    // Continua as demais validações
}
```

Dependendo da situação você pode fazer algumas validações simples (por exemplo, se a pessoa digita um CPF/CNPJ errado) pra não deixar salvar um rascunho com informações inválidas.

Mas na regra de negócio de um processo eu tinha alguns outros detalhes para validar/exibir, então pra facilitar a vida no `displayFields` e outros eventos eu passei a salvar a informação de que as informações salvas eram um rascunho usando o evento de processo `beforeTaskSave`.

```javascript
function beforeTaskSave(colleagueId, nextSequenceId, userList) {
    hAPI.setCardValue("rascunho", getValue("WKNumState") == nextSequenceId ? "1" : "");
}
```

Mas isso foi no caso de um único processo.

---

## Resposta #2

**Daniel ** (@daniel_fmartins) — 30/08/2021, 10:58

Boa [@Bruno\_Gasparetto](/u/bruno_gasparetto). Obrigado pela resposta.

---

## Resposta #3

**system** (@system) — 31/08/2021, 02:59

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
