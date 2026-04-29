# Desvincular anexo de processo

> **Fonte:** [https://fluiggers.com.br/t/desvincular-anexo-de-processo/2165](https://fluiggers.com.br/t/desvincular-anexo-de-processo/2165)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `fluigapi`
> **Criado em:** 30/08/2023, 08:53
> **Visualizações:** 417 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 30/08/2023, 08:53

É possivel através de api rest ou soap desvincular um anexo de um processo ?
Ao utilizar o endpoint ‘/api/public/2.0/documents/deleteDocument/’ para excluir o anexo de um processo o fluig informa que não pode ser eliminado .

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/be53b546e72c0370e14cb6e7f587e0b26538e1ac_2_690x232.png)

Porém eu notei que, neste caso, quando desmarquei o ‘herda segurança do pai’ daquele determinando arquivo e salvei, consegui realizar a exclusão do arquivo via api, mesmo ele estando ainda relacionado ao processo.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/3/3aa83a8ab64f6e55c1f5facd20cc453b0e76929d_2_690x260.png)

---

## Resposta #1

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 05/09/2023, 18:29

Isso é realmente um problema que não há solução até esta data, existe api para vincular um anexo do ged à uma solicitação bpm por exemplo: publishWorkflowAttachment() , mas ainda não existe api para desvincular o anexo do processo.

---
