# Erro ao incluir movimento - integração RM x fluig

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-incluir-movimento-integracao-rm-x-fluig/611](https://fluiggers.com.br/t/erro-ao-incluir-movimento-integracao-rm-x-fluig/611)
> **Categoria:** BPM
> **Criado em:** 12/08/2021, 14:32
> **Visualizações:** 694 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 12/08/2021, 14:32

Ao tentar incluir um movimento para aprovação no fluig, é gerado erro como:
![image](https://fluiggers.com.br/uploads/default/original/1X/98d7916609f2b5084613bb33923a664b2b1384f7.png)
Detalhe:

1.  Utilizei o usuário de outra pessoa e funcionou normalmente.
2.  Já sincronizei os valores dos campos USERID e EMAIL da GUSUARIO com MATRICULA e EMAIL do fluig.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Daniel ** (@daniel_fmartins) — 17/08/2021, 17:32

Problema resolvido, galera.
Para utilizar essa integração, os campos USERID e EMAIL da tabela GUSUARIO deve ser iguais ao campos MATRICULA E EMAIL do fluig.
Como todos usuários da base aqui do fluig estavam com MATRICULA diferente do que consta no RM e não é possível atualizar esse campo no RM e nem no Fluig via uma simples edição, a resposta que funcionou foi usar a API ECMColleagueService e atualizar o campo que remete a matrícula(colleagueId) através disso para o campo USERID da GUSUARIO que consta no RM. Dessa forma funcionou tranquilamente.

---

## Resposta #2

**system** (@system) — 18/08/2021, 09:32

Este tópico foi fechado automaticamente 16 horas depois da última resposta. Novas respostas não são mais permitidas.

---
