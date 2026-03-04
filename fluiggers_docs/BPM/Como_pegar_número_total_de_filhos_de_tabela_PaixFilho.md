# Como pegar número total de "filhos" de tabela PaixFilho

> **Fonte:** [https://fluiggers.com.br/t/como-pegar-numero-total-de-filhos-de-tabela-paixfilho/222](https://fluiggers.com.br/t/como-pegar-numero-total-de-filhos-de-tabela-paixfilho/222)
> **Categoria:** BPM
> **Criado em:** 26/03/2021, 15:30
> **Visualizações:** 1057 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 26/03/2021, 15:30

Olá pessoal, boa tarde!

Como posso pegar o total de “filhos” adicionados à uma tabela PaixFilho através de um evento de Workflow? Ao tentar chamar o elemento através do hAPI.getCardValue(“tbItens”), está acusando erro:

WARN \[com.datasul.technology.webdesk.workflow.engine.WorkflowEngine\] (default task-1234) O campo da ficha não foi encontrado: 7203 tbItens

Podem me ajudar? Obrigado!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Eduardo Vantini Neto** (@eduardo.vantini) — 26/03/2021, 15:31 | ❤️ 3

Nos eventos de workflow pega assim hAPI.getChildrenIndexes(“NOME-TABLE”)

---

## Resposta #2

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 26/03/2021, 15:58 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eduardo.vantini/48/88_2.png) eduardo.vantini:
>
> > hAPI.getChildrenIndexes

Deu certo aqui. Muito obrigado!

---
