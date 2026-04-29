# API Request Move - Task

> **Fonte:** [https://fluiggers.com.br/t/api-request-move-task/1773](https://fluiggers.com.br/t/api-request-move-task/1773)
> **Categoria:** API`s Fluig
> **Tags:** `bpm`, `fluigapi`
> **Criado em:** 20/03/2023, 15:42
> **Visualizações:** 483 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Leonardo Carvalho Sima** (@Leonardo_Sima) — 20/03/2023, 15:42

Bom dia!

Estou tentando utilizar a API para movimentar os processos e sempre recebo como retorno o erro:

```auto
{
    "code": "BPMProcessTaskNoLongerUnderYourResponsibilityException",
    "message": "This task is no longer under your responsibility!",
    "detailedMessage": "Verifique se a atividade já não foi movimentada por outro usuário ou foi cancelada durante o processamento.",
    "helpUrl": null,
    "details": []
}
```

A solicitação está vinculada a mim e estou passando meu código de usuário como parâmetro no “assignee”.

Alguém sabe me esclarecer o que é esse erro e/ou como resolver?

Desde já agradeço

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Leonardo Carvalho Sima** (@Leonardo_Sima) — 05/12/2023, 15:59

Resolvido: o problema era nas permissões (grupos/papéis) do usuário aplicativo usado para autenticação

---
