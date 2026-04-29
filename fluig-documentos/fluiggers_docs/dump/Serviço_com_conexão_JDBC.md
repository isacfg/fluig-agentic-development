# Serviço com conexão JDBC

> **Fonte:** [https://fluiggers.com.br/t/servico-com-conexao-jdbc/1536](https://fluiggers.com.br/t/servico-com-conexao-jdbc/1536)
> **Categoria:** Ambiente Fluig
> **Criado em:** 08/12/2022, 10:19
> **Visualizações:** 894 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 08/12/2022, 10:19 | ❤️ 1

Fiz um serviço para conectar um banco de dados Oracle. É um banco de dados de homologação.

O nome do serviço é **sisjuri\_homo\_nuvem**, assim em minúsculas.

Quando testo a conexão do serviço ele responde com um ‘ok’, mas quando vou usar o nome do serviço num dataset customizado (avançado), aparece um erro no log do servidor do Fluig.

2022-12-08 13:09:30,754 ERROR \[com.datasul.technology.webdesk.customization.ScriptingLog\] (default task-12156) ERRO==============> java.sql.SQLException: javax.resource.ResourceException: IJ000453:

> Unable to get managed connection for java:/jdbc/**sisjuri\_homo\_nuvem**

O que poderá ser isto?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**MAURO SIMOES** (@Mautresim) — 08/12/2022, 10:32 | ❤️ 1

Me deu uma ideia de renomear (criar outro serviço, na verdade) tirando os ‘underscores’, de modo que o serviço ficou como ‘Sisjurihomonuvem’, assim tudo junto.

Aí funcionou.

---
