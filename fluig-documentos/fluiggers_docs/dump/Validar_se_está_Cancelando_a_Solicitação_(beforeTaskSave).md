# Validar se está Cancelando a Solicitação (beforeTaskSave)

> **Fonte:** [https://fluiggers.com.br/t/validar-se-esta-cancelando-a-solicitacao-beforetasksave/2943](https://fluiggers.com.br/t/validar-se-esta-cancelando-a-solicitacao-beforetasksave/2943)
> **Categoria:** Ambiente Fluig
> **Criado em:** 27/08/2024, 09:36
> **Visualizações:** 51 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Carlos Piva** (@Carlos_Piva) — 27/08/2024, 09:36

Preciso validar se o usuário está cancelando, para que ele não percorra as validações do script beforeSendValidate.

---

## Resposta #1

**Matheus Mósso** (@msmosso) — 27/08/2024, 09:44

Verifique o valor do campo nextState. Em teoria, ele deveria ficar vazio nessa situação.

---

## Resposta #2

**Carlos Piva** (@Carlos_Piva) — 27/08/2024, 09:51

Bom dia mestre, nesse caso então seria (nextSequenceId == “”) ou (nextSequenceId == 0)?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Matheus Mósso** (@msmosso) — 27/08/2024, 10:57

Faz um teste dando um console.log na variável **nextState** pra verificar o valor do parâmetro quando a solicitação é cancelada.

let beforeSendValidate = function(numState, nextState) {
console.log(nextState)
}

---
