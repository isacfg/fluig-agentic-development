# SQL de consulta de usuários

> **Fonte:** [https://fluiggers.com.br/t/sql-de-consulta-de-usuarios/267](https://fluiggers.com.br/t/sql-de-consulta-de-usuarios/267)
> **Categoria:** Sem categoria
> **Tags:** `sql`
> **Criado em:** 30/03/2021, 19:49
> **Visualizações:** 2345 | **Likes:** 8 | **Respostas:** 0

---

## Pergunta original

**Vinicius de Moura Silveira** (@vinny.silveira) — 30/03/2021, 19:49 | ❤️ 8

Buenas pessoal!

Segue abaixo uma “queryzinha” para listar informações dos usuários cadastrados no Fluig

```sql
SELECT ut.USER_CODE "Matrícula",
       ut.IDP_ID "ID Externo",
       FU.FULL_NAME "Nome completo",
       ut.LOGIN "Login",
       ut.EMAIL "E-mail",
       CASE
           WHEN ut.USER_STATE = '2' THEN 'Bloqueado'
           ELSE 'Ativo'
       END "Status",
       CASE
           WHEN FU.USER_TYPE = '0' THEN 'Normal'
           WHEN FU.USER_TYPE = '1' THEN 'Especial'
           WHEN FU.USER_TYPE = '2' THEN 'Temporário'
           WHEN FU.USER_TYPE = '3' THEN 'OAuth'
       END "Tipo Usuário"
FROM FDN_USERTENANT ut
INNER JOIN FDN_USER FU ON ut.USER_ID = FU.USER_ID
```

A coluna USER\_TYPE não sei exatamente qual o “de-para” de cada ID que está nela, fiz a tradução diferenciando visualmente o perfil destes usuários, quem souber a tradução correta, por gentileza, comenta aí! E se ajudou, dá um joinha!

---
