# Processo - Programação do evento beforeStateEntry para fazer Insert em banco de dados externo

> **Fonte:** [https://fluiggers.com.br/t/processo-programacao-do-evento-beforestateentry-para-fazer-insert-em-banco-de-dados-externo/883](https://fluiggers.com.br/t/processo-programacao-do-evento-beforestateentry-para-fazer-insert-em-banco-de-dados-externo/883)
> **Categoria:** BPM
> **Criado em:** 19/01/2022, 19:07
> **Visualizações:** 774 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 19/01/2022, 19:07

Estou fazendo um processo simples de um acompanhamento de trabalhos. O usuário registra o projeto em que está trabalhando e vai preenchendo um campo de texto com a evolução.
Coisa rasteira no formulário do processo.

No Evento de Processo ‘beforeStateEntry’ capturo o valor do campo e passo a um dataset.

Este dataset tem uma instrução INSERT numa tabela de banco de dados Oracle.

Minha dúvida reside no fato de que um INSERT via o aplicativo PL/SQL Developer ‘na munheca’ exige o COMMIT, do contrário a sessão fica pendente, atrapalhando todo mundo que usa o banco.

Pergunta: os comandos dentro do código da função ‘createDataset(fields, constraints, sortFields)’ que executam a inserção também fazem o COMMIT? Isto é

```auto
var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
```

é suficiente para não deixar a sessão dependente de COMMIT?

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 25/01/2022, 12:58 | ❤️ 1

Pesquisei e, sim, o método executeQuery faz a instrução SQL e também faz o COMMIT automaticamente.

Entretanto, existe uma propriedade da conexão que pode inibir a finalização da operação modificadora da tabela.
Por exemplo,

conn.setAutoCommit(false);

inibe a execução plena. Teria de fazer

conn.commit();

para a operação fazer valer a alteração na tabela.

---
