# Relacionar 2 processos em apenas uma solicitação

> **Fonte:** [https://fluiggers.com.br/t/relacionar-2-processos-em-apenas-uma-solicitacao/3195](https://fluiggers.com.br/t/relacionar-2-processos-em-apenas-uma-solicitacao/3195)
> **Categoria:** Sem categoria
> **Criado em:** 17/03/2025, 10:07
> **Visualizações:** 31 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rodrigo Vasconcelos** (@Rodrigo_Vasconcelos) — 17/03/2025, 10:07

estou tentando relacionar 2 processos em apenas uma solicitação, a ideia seria que dependendo da condição o processo atual chamaria o outro e continuaria o fluxo nele, tudo isso em apenas uma solicitação, sabe alguma maneira de implementar?

---

## Resposta #1

**Frederico** (@fredericopatricio) — 17/03/2025, 12:22

![image](https://fluiggers.com.br/uploads/default/optimized/2X/d/d6aaf7e08a51c29d153d689aea174e4ffcf69452_2_441x499.png)

você pode utilizar subprocessos para fazer isso.

para algo mais customizado pode utilizar também hAPI.startprocess nos eventos de processos.
beforeStateLeave(sequenceId)
{
if(sequenceId == “depedendodaatividade”)
{
var users = new java.util.ArrayList();
users.add(“admin”);
var formData = new java.util.HashMap();

hAPI.startProcess(“pool”, 4, users, “Solicitação inicializada pela função hAPI”, true, formData, false);

}
}

---
