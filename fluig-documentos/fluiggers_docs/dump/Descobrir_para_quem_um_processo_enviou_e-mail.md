# Descobrir para quem um processo enviou e-mail

> **Fonte:** [https://fluiggers.com.br/t/descobrir-para-quem-um-processo-enviou-e-mail/2919](https://fluiggers.com.br/t/descobrir-para-quem-um-processo-enviou-e-mail/2919)
> **Categoria:** BPM
> **Criado em:** 08/08/2024, 17:11
> **Visualizações:** 32 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Gabriel Borchardt** (@Gabriel_Borchardt) — 08/08/2024, 17:11

Fala pessoal, alguém sabe uma forma de descobrir para quem (emails especificos) um processo enviou email? Tenho uma tarefa em um processo e alguns usuários relatam não receber email da plataforma, me cadastrei no grupo para ver e recebo normalmente… Eles também estão no grupo, porém não encontrei logs que evidenciem que ele enviou para todos. Também vi regras do email deles e não tem nada para esconder o email…

---

## Resposta #1

**venturelli** (@venturelli) — 12/08/2024, 14:11

Você pode usar o [evento global onNotify](https://tdn.totvs.com/pages/releaseview.action?pageId=852912430) para interceptar o envio de emails e fazer um log. Usa o receivers e o template que vais conseguir saber para quem foi enviado cada email.

---
