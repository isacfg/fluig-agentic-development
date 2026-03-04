# Erro JDBC - Oracle

> **Fonte:** [https://fluiggers.com.br/t/erro-jdbc-oracle/1537](https://fluiggers.com.br/t/erro-jdbc-oracle/1537)
> **Categoria:** Ambiente Fluig
> **Criado em:** 12/12/2022, 20:15
> **Visualizações:** 496 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**William Kiefer** (@bokrs) — 12/12/2022, 20:15

Buenas pessoal,

Recentemente fizemos uma migração do nosso banco de dados, e faz alguns dias o Fluig vem apresentando alto consumo de CPU e lentidão.

Analisando o log verificamos mais de 200 erros de conexão com o banco de dados no log, exemplo:
2022-12-08 15:44:16,003 ERROR \[com.fluig.foundation.api.tools.FDNExceptionMapper\] (default task-897) javax.persistence.PersistenceException: org.hibernate.exception.GenericJDBCException: Unable to acquire JDBC Connection: javax.ejb.EJBException: javax.persistence.PersistenceException: org.hibernate.exception.GenericJDBCException: Unable to acquire JDBC Connection

Caused by: org.hibernate.exception.GenericJDBCException: Unable to acquire JDBC Connection

Caused by: java.sql.SQLException: javax.resource.ResourceException: IJ000453: Unable to get managed connection for java:/jdbc/FluigDS

Banco de dados foi atualizado para comportar a atualização para versão 1.8, estamos utilizando Oracle 12c - Exadata.

Versão do Fluig atual, 1.7.1 - release de novembro.

Minha maior dúvida, qual teste posso realizar para verificar a conexão e a fidelidade dela?
Alguma config neste novo banco para validar ou no Domain para melhor conexão?

Obrigado!

---
