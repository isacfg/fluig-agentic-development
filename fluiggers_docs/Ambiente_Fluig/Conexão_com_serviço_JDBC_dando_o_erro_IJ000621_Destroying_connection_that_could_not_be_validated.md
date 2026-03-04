# Conexão com serviço JDBC dando o erro: IJ000621: Destroying connection that could not be validated:

> **Fonte:** [https://fluiggers.com.br/t/conexao-com-servico-jdbc-dando-o-erro-ij000621-destroying-connection-that-could-not-be-validated/668](https://fluiggers.com.br/t/conexao-com-servico-jdbc-dando-o-erro-ij000621-destroying-connection-that-could-not-be-validated/668)
> **Categoria:** Ambiente Fluig
> **Criado em:** 21/09/2021, 15:14
> **Visualizações:** 431 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Aline Jaime** (@Aline_Jaime1) — 21/09/2021, 15:14

Boa tarde, pessoal!

Recentemente nosso ERP foi para a nuvem e todas conexões foram alteradas, porém com essa nova conexão datasets que levavam menos de 5 segundos para conectar estão levando cerca de quase 20. Detalhe ao olhar no log ele mostra o seguinte erro:

> IJ000621: Destroying connection that could not be validated: org.jboss.jca.core.connectionmanager.listener.NoTxConnectionListener@420eabd1

em looping até que conecta.

Alguém já teve esse erro ou tem alguma sugestão para resolver?

---
