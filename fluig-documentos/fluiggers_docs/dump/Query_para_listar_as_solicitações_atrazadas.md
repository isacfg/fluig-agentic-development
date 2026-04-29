# Query para listar as solicitações atrazadas

> **Fonte:** [https://fluiggers.com.br/t/query-para-listar-as-solicitacoes-atrazadas/453](https://fluiggers.com.br/t/query-para-listar-as-solicitacoes-atrazadas/453)
> **Categoria:** Sem categoria
> **Criado em:** 19/05/2021, 08:23
> **Visualizações:** 1616 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 19/05/2021, 08:23

Alguém tem uma queryzinha para listar os processos atrasados?

---

## Resposta #1

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/05/2021, 08:56 | ❤️ 2

Olá tudo bem?

```auto
select w.COD_DEF_PROCES as 'Cod_Processo', *
from TAR_PROCES t join PROCES_WORKFLOW w on t.NUM_PROCES = w.NUM_PROCES
where t.LOG_ATIV = 1
    and t.deadline < getdate()
```

Meu banco é SQL Server

Vê se isso te atende.

Abs

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 19/05/2021, 09:33 | ❤️ 2

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eduardo.vantini/48/88_2.png) eduardo.vantini:
>
> > ```auto
> > select w.COD_DEF_PROCES as 'Cod_Processo', *
> > from TAR_PROCES t join PROCES_WORKFLOW w on t.NUM_PROCES = w.NUM_PROCES
> > where t.LOG_ATIV = 1
> >     and t.deadline < getdate()
> > ```

Meu banco é sql mas ja ajudou so ajustei a query e de boa. valeu

```SQL
SELECT DATE_FORMAT(DEADLINE, "%d-%m-%Y") DEADLINE, DATE_FORMAT(w.END_DATE, "%d-%m-%Y") ENDDATE, DATE_FORMAT(w.START_DATE, "%d-%m-%Y") STARTDATE, w.COD_DEF_PROCES as 'Cod_Processo'
from TAR_PROCES t join PROCES_WORKFLOW w on t.NUM_PROCES = w.NUM_PROCES
where t.LOG_ATIV = 1
   and t.deadline < sysdate(3)
```

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 19/05/2021, 09:56

O que é esse log\_ativ=1?

---

## Resposta #4

**Eduardo Vantini Neto** (@eduardo.vantini) — 19/05/2021, 10:13 | ❤️ 1

Essa tabela lista por etapa que o processo passa, quando o log\_ativ = 1 quer dizer que está na etapa atual, quando log\_ativ = 0 são as etapas concluídas.

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 26/05/2021, 11:25

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eduardo.vantini/48/88_2.png) eduardo.vantini:
>
> > ```auto
> > select w.COD_DEF_PROCES as 'Cod_Processo', *
> > from TAR_PROCES t join PROCES_WORKFLOW w on t.NUM_PROCES = w.NUM_PROCES
> > where t.LOG_ATIV = 1
> > ```

Uma duvida como pego o nome da atividade em que se encontra o processo?

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 26/05/2021, 13:53

Boa tarde Daniel,

Talvez essa consulta aqui te ajude, só precisa ver como adaptar pro seu caso, nela listo as atividades de um determinado processo pelo código dele.

```auto
select NUM_SEQ,NUM_VERS,NOM_ESTADO from estado_proces
where cod_def_proces='NOME DO SEU PROCESSO' and num_vers = (select max(num_vers) from estado_proces tb where num_seq=tb.num_seq and cod_def_proces=tb.cod_def_proces)
```

---

## Resposta #7

**Eduardo Vantini Neto** (@eduardo.vantini) — 27/05/2021, 07:23

Olá, tenta essa query

```auto
select distinct h.NUM_SEQ_ESTADO as 'Numero Atividade'
    ,e.NOM_ESTADO as 'Nome Atividade'
from HISTOR_PROCES h join ESTADO_PROCES e on h.NUM_SEQ_ESTADO = e.NUM_SEQ
    join TAR_PROCES t on h.NUM_PROCES = t.NUM_PROCES and h.LOG_ATIV = t.LOG_ATIV and t.NUM_SEQ_MOVTO = h.NUM_SEQ_MOVTO
where h.NUM_PROCES = {Numero_Solicitacao}
    and h.LOG_ATIV = 1
    and e.COD_DEF_PROCES = '{Descricao_Processo}'
    and t.deadline < getdate()
```

Abs

---
