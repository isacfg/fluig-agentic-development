# QUERY SQLServer e Mysql para descobrir Datasets e tabelas METALIST de seus formulários

> **Fonte:** [https://fluiggers.com.br/t/query-sqlserver-e-mysql-para-descobrir-datasets-e-tabelas-metalist-de-seus-formularios/838](https://fluiggers.com.br/t/query-sqlserver-e-mysql-para-descobrir-datasets-e-tabelas-metalist-de-seus-formularios/838)
> **Categoria:** BPM
> **Tags:** `banco-de-dados`, `query`, `datasets`, `formularios`
> **Criado em:** 21/12/2021, 08:31
> **Visualizações:** 1080 | **Likes:** 4 | **Respostas:** 0

---

## Pergunta original

**Igor Rodrigues** (@fluigor.com.br) — 21/12/2021, 08:31 | ❤️ 4

Buenas,

To trazendo 2 querys pra ajudar o pessoal, que talvez utilize consulta via query nas tabelas METALIST do Fluig, como é de conhecimento de todos a cada formulário criado uma nova tabela é criada no Fluig com uma sequencia, que dependendo da quantidade fica complicado descobrir qual a tabela ML este formulário utiliza.

QUERY SQL SERVER

```auto
`SELECT COD_DATASET, '0' AS NR_DOCUMENTO  , right(replicate('0',3)+cast(rtrim(ltrim(COD_EMPRESA)) as varchar(3)), 3) + right(replicate('0',3)+cast(rtrim(ltrim(COD_LISTA)) as varchar(3)), 3)  AS META_LIST  , TYPE, 'jornalizado' as DETAIL FROM SERV_DATASET WHERE COD_EMPRESA = 1 AND TYPE = 'CUSTOM' AND COD_LISTA IS NOT NULL UNION ALL SELECT DS.COD_DATASET, D.NR_DOCUMENTO , right(replicate('0',3)+cast(rtrim(ltrim(D.COD_EMPRESA)) as varchar(3)), 3) + right(replicate('0',3)+cast(rtrim(ltrim(D.COD_LISTA)) as varchar(3)), 3)  AS META_LIST , TYPE, 'principal' as TIPO FROM SERV_DATASET DS INNER JOIN DOCUMENTO D ON DS.COD_EMPRESA = D.COD_EMPRESA AND DS.DSL_DATASET = D.NR_DOCUMENTO AND D.VERSAO_ATIVA = 1 WHERE DS.COD_EMPRESA = 1  and DS.IS_ACTIVE = 1 AND DS.DSL_BUILDER = 'com.datasul.technology.webdesk.dataset.MetaListDatasetBuilder' AND DS.TYPE = 'BUILTIN' UNION all SELECT DAD_DS.COD_DATASET, MLR.COD_LISTA_PAI as NR_DOCUMENTO , right(replicate('0',3)+cast(rtrim(ltrim(MLR.COD_EMPRESA)) as varchar(3)), 3) + right(replicate('0',3)+cast(rtrim(ltrim(MLR.COD_LISTA_FILHO)) as varchar(3)), 3)  AS META_LIST , TYPE, MLR.COD_TABELA as TIPO FROM meta_lista_rel MLR INNER JOIN documento DAD on MLR.COD_EMPRESA = DAD.COD_EMPRESA and MLR.COD_LISTA_PAI = DAD.COD_LISTA and DAD.VERSAO_ATIVA = 1 INNER JOIN SERV_DATASET DAD_DS on MLR.COD_EMPRESA = DAD_DS.COD_EMPRESA and DAD.NR_DOCUMENTO = DAD_DS.DSL_DATASET and DAD_DS.IS_ACTIVE = 1 AND DAD_DS.DSL_BUILDER = 'com.datasul.technology.webdesk.dataset.MetaListDatasetBuilder' AND DAD_DS.TYPE = 'BUILTIN' WHERE MLR.COD_EMPRESA=1 order by 1 DESC;`
```

Query para Mysql

```auto
SELECT COD_DATASET, '0' AS NR_DOCUMENTO
, CONVERT(CONCAT('MD',CONCAT(LPAD(COD_EMPRESA,3,0),LPAD(COD_LISTA,3,0))), CHAR CHARACTER SET utf8) AS META_LIST
, TYPE, 'jornalizado' as DETAIL FROM SERV_DATASET WHERE COD_EMPRESA = 1 AND TYPE = 'CUSTOM' AND COD_LISTA IS NOT NULL UNION ALL SELECT DS.COD_DATASET, D.NR_DOCUMENTO
, CONVERT(CONCAT('ML',CONCAT(LPAD(D.COD_EMPRESA,3,0),LPAD(D.COD_LISTA,3,0))), CHAR CHARACTER SET utf8) AS META_LIST
, TYPE, 'principal' as TIPO FROM SERV_DATASET DS INNER JOIN DOCUMENTO D ON DS.COD_EMPRESA = D.COD_EMPRESA AND DS.DSL_DATASET = D.NR_DOCUMENTO AND D.VERSAO_ATIVA = 1 WHERE DS.COD_EMPRESA = 1  and DS.IS_ACTIVE = 1 AND DS.DSL_BUILDER = 'com.datasul.technology.webdesk.dataset.MetaListDatasetBuilder' AND DS.TYPE = 'BUILTIN' UNION all SELECT DAD_DS.COD_DATASET, MLR.COD_LISTA_PAI as NR_DOCUMENTO
, CONVERT(CONCAT('ML',CONCAT(LPAD(MLR.COD_EMPRESA,3,0),LPAD(MLR.COD_LISTA_FILHO,3,0))), CHAR CHARACTER SET utf8) AS META_LIST
, TYPE, MLR.COD_TABELA as TIPO FROM meta_lista_rel MLR INNER JOIN documento DAD on MLR.COD_EMPRESA = DAD.COD_EMPRESA and MLR.COD_LISTA_PAI = DAD.COD_LISTA and DAD.VERSAO_ATIVA = 1 INNER JOIN SERV_DATASET DAD_DS on MLR.COD_EMPRESA = DAD_DS.COD_EMPRESA and DAD.NR_DOCUMENTO = DAD_DS.DSL_DATASET and DAD_DS.IS_ACTIVE = 1
AND DAD_DS.DSL_BUILDER = 'com.datasul.technology.webdesk.dataset.MetaListDatasetBuilder' AND DAD_DS.TYPE = 'BUILTIN' WHERE MLR.COD_EMPRESA=1  order by 1 DESC;
```

![Consulta da Query](https://fluiggers.com.br/uploads/default/original/1X/6dd791c56432728a9738d8decca9b9470ca9ce15.png)

---
