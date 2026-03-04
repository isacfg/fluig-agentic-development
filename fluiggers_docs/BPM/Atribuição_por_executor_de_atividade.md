# Atribuição por executor de atividade

> **Fonte:** [https://fluiggers.com.br/t/atribuicao-por-executor-de-atividade/3129](https://fluiggers.com.br/t/atribuicao-por-executor-de-atividade/3129)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 22/01/2025, 15:40
> **Visualizações:** 52 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**lucaslamb** (@lucaslamb) — 22/01/2025, 15:40

Estamos com um problema interno, onde há alguns processos mais antigos que possuem atividades onde o mecanismo de atribuição é por executor de atividade. O grande problema com isso é que, se o colaborador acaba saindo da empresa, desativamos o usuário dele e se ele ainda possui participação em alguma solicitação, quando o processo é enviado para a atividade, ocorre erro e o processo fica preso.
Teria alguma forma de contornar isso para processos futuros? A solução que pensamos internamente é buscar pelo dataset se o usuário referente está ativo e se não estiver passar para algum outro papel, porém acredito que nem desta forma seria viável e iria funcionar direito.

---

## Resposta #1

**Tiago Camargos Silva** (@Tiago_Camargos_Silva) — 24/01/2025, 12:10 | ❤️ 1

Coloque um Gestor (usuário, grupo ou papel) no processo, nesse caso, quando o usuário da atividade executora estiver desativado, a atividade vai automaticamente para o Gestor do Processo.

---
