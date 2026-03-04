# Etapas de processo duplicando após atualização

> **Fonte:** [https://fluiggers.com.br/t/etapas-de-processo-duplicando-apos-atualizacao/3027](https://fluiggers.com.br/t/etapas-de-processo-duplicando-apos-atualizacao/3027)
> **Categoria:** Sem categoria
> **Criado em:** 17/10/2024, 08:41
> **Visualizações:** 37 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 17/10/2024, 08:41

Bom dia Pessoal,

Atualizei o Fluig para a versão 1.8.2 na semana passada e agora estou tendo etapas de processos duplicadas após uma atividade de fluxo automático.

alguém mais teve esse problema?

obs.: o processo até o momento da etapa não possui “Fork”.

![image](https://fluiggers.com.br/uploads/default/original/2X/b/ba1aaf9652f64f1c89383684f7915693e1b8492c.png)

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Allan Reichert** (@allan.reichert) — 18/10/2024, 17:40 | ❤️ 1

Resolvido manualmente. Ajustei as tarefas duplicadas na tabela TAR\_PROCES setando o valor de LOG\_ATIV para 1 apenas no registro de sequencia mais recente e os demais para zero

---
