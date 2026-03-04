# Como migrar o banco do Fluig de SQLServer para MySQL

> **Fonte:** [https://fluiggers.com.br/t/como-migrar-o-banco-do-fluig-de-sqlserver-para-mysql/444](https://fluiggers.com.br/t/como-migrar-o-banco-do-fluig-de-sqlserver-para-mysql/444)
> **Categoria:** Ambiente Fluig
> **Criado em:** 17/05/2021, 11:19
> **Visualizações:** 870 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**HELIO REZENDE** (@HelioRezende) — 17/05/2021, 11:19

Preciso migrar dados do Fluig que estão no SQLServer para um MySQL.
Alguém ja migrou de banco ?
Tem alguma documentação ou dica ?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 17/05/2021, 13:58

Já tentou usando o MySQL Workbench? Ele tem uma ferramenta de migração.
Nunca fiz no banco do fluig, mas entendo que não deva ser diferente.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 17/05/2021, 14:24

O dbconvert tb faz e é uma boa opção

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 18/05/2021, 12:59

Olá [@HelioRezende](/u/heliorezende) ja fiz este procedimento para bancos de dados da aplicação Fluig,utilizei as ferramentas dos links abaixo.

100% de sucesso! ;D

[learn.microsoft.com](https://learn.microsoft.com/pt-br/sql/ssma/sql-server-migration-assistant?view=sql-server-ver15)

![](https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png)

### [Assistente de Migração do SQL Server - SQL Server](https://learn.microsoft.com/pt-br/sql/ssma/sql-server-migration-assistant?view=sql-server-ver15)

Saiba mais sobre Assistente de Migração do SQL Server, uma ferramenta que automatiza a migração de banco de dados para SQL Server do Microsoft Access, DB2, MySQL, Oracle e SAP ASE.

[https://www.microsoft.com/en-us/download/details.aspx?id=54257](https://www.microsoft.com/en-us/download/details.aspx?id=54257)

Duvidas estou a disposição.

---

## Resposta #4

**Albert** (@Albert) — 18/05/2021, 14:23

Igor, essas ferramentas ai são para migrar de outros bancos para o SQL Server, não? Acho que Helio quer fazer o contrário.

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 20/05/2021, 17:52

Hélio, boa tarde!

Conseguiu fazer a migração?

---

## Resposta #6

**HELIO REZENDE** (@HelioRezende) — 22/05/2021, 11:26 | ❤️ 1

Olá Daniel,
Devo retomar esse projeto em alguns dias.

---
