# Integração de movimentos RM x Fluig

> **Fonte:** [https://fluiggers.com.br/t/integracao-de-movimentos-rm-x-fluig/577](https://fluiggers.com.br/t/integracao-de-movimentos-rm-x-fluig/577)
> **Categoria:** BPM
> **Criado em:** 23/07/2021, 14:56
> **Visualizações:** 404 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 23/07/2021, 14:56

Galera, alguém já trabalhou com aprovação de movimentos pelo fluig?

Configurei tudo aqui conforme a doc, porém ao tentar salvar a solicitação, ocorre o erro:
![image](https://fluiggers.com.br/uploads/default/original/1X/926194c9abce1806737ba8046c2cb5ba3b735848.png)

Alguém já passou por algo parecido?

Agradeço

---

## Resposta #1

**Matheus Reis** (@matheus_reis) — 27/07/2021, 12:06 | ❤️ 1

Bom dia, Daniel. Este problema não é no Fluig, é permissão do usuario que vc está utilizando na integração com RM. Peça a alguem do RM para liberar a permissão para o usuário que vc utiliza na integração que deve funcionar. Espero ter ajudado!

---

## Resposta #2

**Gabriel Pereira** (@gabriel.pereira) — 27/07/2021, 14:12 | ❤️ 1

Geralmente são vinculados filtros nos perfis de acesso limitando assim o retorno de sentenças SQL. Por exemplo a seção do colaborador que permite listar apenas colaboradores da seção informada nesse filtro de perfil.

Sugiro gerar essa sentença no RM e verificar quais campos são obrigatórios de inclusão para a correta geração da informação.

---
