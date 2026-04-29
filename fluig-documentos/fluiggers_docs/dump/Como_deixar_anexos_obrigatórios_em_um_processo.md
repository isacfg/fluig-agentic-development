# Como deixar anexos obrigatórios em um processo?

> **Fonte:** [https://fluiggers.com.br/t/como-deixar-anexos-obrigatorios-em-um-processo/1462](https://fluiggers.com.br/t/como-deixar-anexos-obrigatorios-em-um-processo/1462)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 07/11/2022, 17:06
> **Visualizações:** 675 | **Likes:** 2 | **Respostas:** 2

---

## Pergunta original

**Portela** (@Portela) — 07/11/2022, 17:06

Oii gente. Estou aprendendo a desenvolver processos no fluig, e estou tendo dificuldades pra deixar os anexos obrigatórios a partir do evento de processo beforeTaskSave.

Como vocês costumam fazer isso?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 07/11/2022, 17:30 | ❤️ 2

Bem-vindo [@Portela](/u/portela) !

Olha esse tópico aqui, que tem mais de uma opção pra você:

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel.cabral/48/5_2.png) [Valida se um novo anexo foi inserido](https://fluiggers.com.br/t/valida-se-um-novo-anexo-foi-inserido/66) [BPM](https://fluiggers.com.br/c/bpm/5)
>
> > Validar se um novo anexo foi inserido na tarefa corrente: function beforeTaskSave(colleagueId, nextSequenceId, userList) { var numState = getValue("WKNumState"); var process = getValue("WKNumProces"); var anexado = false; var message = ""; if(numState == 0 && hAPI.listAttachments().size() < 2) { message += "<br/>- É necessario anexar os documentos;" } if (numState == 1){ //etapa do processo if (temAnexo() == false) message += "<br/>- É necessario a…

---

## Resposta #2

**Portela** (@Portela) — 08/11/2022, 13:27

Muito obrigado pelo retorno, [@daniel.cabral](/u/daniel.cabral)

Tentei colocando esse código no beforeTaskSave e num arquivo JS normal, mas não consegui. Em qual arquivo você coloca?

---

## Resposta #3

**Matheus Mósso** (@msmosso) — 09/11/2022, 08:42

Bom dia Portela,

Esse código tem que ser inserido em algum script de processo (como o beforeTaskSave), não pode ser em JS normal não. Você encontrou algum erro no log?

Nesse script também está definido que há a necessidade de pelo menos 2 anexos, e a parte do `numState == 1` define a atividade na qual a condição de necessidade dos anexos será verificada.

---

## Resposta #4

**Guilherme A Vieira** (@Guilherme.Alves) — 27/05/2024, 18:44

Prezado Daniel,

Me parece que o hAPI,listAttachments() retorna todos os documentos anexados à solicitação, independente da atividade em que o documento foi anexado. Ou seja, o listAttachments() retornará os documentos anexados na atividade inicial (ou qualquer outra anterior), não sendo útil quando precisamos validar a anexação em uma uma atividade no meio do fluxo.

É isso mesmo?

---
