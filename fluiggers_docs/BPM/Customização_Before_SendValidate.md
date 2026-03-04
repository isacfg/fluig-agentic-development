# Customização Before SendValidate

> **Fonte:** [https://fluiggers.com.br/t/customizacao-before-sendvalidate/2779](https://fluiggers.com.br/t/customizacao-before-sendvalidate/2779)
> **Categoria:** BPM
> **Tags:** `form`, `processo`, `bpm`
> **Criado em:** 08/05/2024, 21:49
> **Visualizações:** 126 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Rafael Luz** (@Rafael_Luz) — 08/05/2024, 21:49

Caros(as), no evento beforeSendValidate é possível colocar a verificação para anexos utilizando o TOAST para personalizar a mensagem do fluig ?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/05/2024, 11:42

Se você jogar uma exceção o Fluig exibe o erro, mas é possível retornar `false` para o Fluig cancelar o envio, aí é possível exibir o erro com TOAST ou Modal.

---

## Resposta #2

**venturelli** (@venturelli) — 09/05/2024, 15:55 | ❤️ 1

Eu uma solicitação em andamento, é possível via API [TOTVS Fluig API](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findAttachments).

Para uma solicitação nova não tem como fazer de forma decente. Vai ser uma gambiarra que pode dar erro se o Fluig fizer alguma alteração em tela e mesmo assim não vai funcionar no mobile.

Use as regras de anexos na modelagem do processo para cobrir a primeira atividade.

---
