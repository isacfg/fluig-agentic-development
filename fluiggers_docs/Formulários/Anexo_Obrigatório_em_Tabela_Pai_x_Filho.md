# Anexo Obrigatório em Tabela Pai x Filho

> **Fonte:** [https://fluiggers.com.br/t/anexo-obrigatorio-em-tabela-pai-x-filho/2332](https://fluiggers.com.br/t/anexo-obrigatorio-em-tabela-pai-x-filho/2332)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`, `paixfilho`
> **Criado em:** 31/10/2023, 12:02
> **Visualizações:** 247 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Ben-Hur Silveira** (@Ben-Hur_Silveira) — 31/10/2023, 12:02

Bom dia, pessoal alguém já utilizou anexo obrigatório em uma Tabela PaixFilho?
Ex.: A cada nova linha na Tabela um novo anexo ser obrigatório?

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 31/10/2023, 14:38 | ❤️ 1

Olá,

pode fazer uma contagem das linhas da tabela e validar os anexos conforme a contagem com o evento de workflow beforeTaskSave:

function beforeTaskSave(colleagueId, nextSequenceId, userList) {
//Quantidade de anexos do processo
var quantAnexos = hAPI.listAttachments().size();
//Quantidade de linhas do formulario
var quantLinhas = hAPI.getChildrenIndexes(“itens”).length;

if(quantLinhas > 0 && quantAnexos < quantLinhas){
throw(“É necessario anexar a documentação!”)
}
}

Espero ter ajudado.

---
