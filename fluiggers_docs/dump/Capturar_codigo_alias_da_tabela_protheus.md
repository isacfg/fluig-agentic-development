# Capturar codigo alias da tabela protheus

> **Fonte:** [https://fluiggers.com.br/t/capturar-codigo-alias-da-tabela-protheus/1320](https://fluiggers.com.br/t/capturar-codigo-alias-da-tabela-protheus/1320)
> **Categoria:** BPM
> **Tags:** `dataset`, `datasets`
> **Criado em:** 19/09/2022, 14:16
> **Visualizações:** 296 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Maria Luiza Oliveira Silva** (@marialuiza) — 19/09/2022, 14:16

Olá pessoal! Estou no começo do aprendizado de programação e Fluig, estou criando um dataset que passa um query para outro dataset e esse dataset faz a consulta no protheus via banco.
Estou criando um dataset para cada tabela que preciso utilizar, por exemplo a CTT e ai preciso do codigo alias (ainda não sei o funcionando, só sei que precisa ser passado), mas não quero deixar com que seja um codigo fixo no fonte,

var query = “”;
query += " D2\_PEDIDO as Pedido, D2\_COD as Codigo ";
query += " FROM SD2010 “; (ESSE SD2010)
query += " WHERE D\_E\_L\_E\_T\_ != ‘\*’”;

Teria alguma forma de fazer isso?

Agradeço a atenção de todos.

---
