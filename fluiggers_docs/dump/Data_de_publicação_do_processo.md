# Data de publicação do processo

> **Fonte:** [https://fluiggers.com.br/t/data-de-publicacao-do-processo/2667](https://fluiggers.com.br/t/data-de-publicacao-do-processo/2667)
> **Categoria:** Sem categoria
> **Criado em:** 26/03/2024, 17:05
> **Visualizações:** 123 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Ubiraci Aparecido de Mattos** (@ubiraci) — 26/03/2024, 17:05

Usando o Eclipse, após eu exportar o processo para o Fluig, onde eu encontro a data de publicação do processo (data e numero da versão atual) ?

---

## Resposta #1

**João Victor Abrão** (@Joao_Victor_Abrao) — 02/04/2024, 10:59

Oi [@ubiraci](/u/ubiraci) , como vai?
Aqui: *https://{url}/process-management/api/v2/processes/{seu-processo}/process-versions* você consegue ver todas as versões do processo e com o filtro, ver a versão ativa. Sobre a data, não sei uma forma de buscar.
Caso seja necessário ter a data de publicação, uma forma (meio tabajara) seria buscar no banco (tabela: VERS\_DEF\_PROCES), a versão ativa e partindo dela, pegar a primeira tarefa que foi aberta nessa versão e assim conseguir uma data. Porém, não seria exata e dependeria de haver ao menos uma tarefa aberta nessa versão. Como eu disse, não é uma boa forma, mas pode ajudar.

---

## Resposta #2

**venturelli** (@venturelli) — 03/04/2024, 11:35

O Fluig não tem essa informação por padrão, apenas via os eventos de auditoria ([Eventos de auditoria - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Eventos+de+auditoria)) que é recurso pago a parte.

O que dá pra fazer é descobrir quando houve a primeira movimentação de solicitações nesta versão específica, via banco de dados, é o seguinte:

```auto
select min(movto_date_time)
from histor_proces hp
left join proces_workflow pw on pw.cod_empresa = hp.cod_empresa and pw.num_proces = hp.num_proces
where pw.cod_def_proces = 'CODIGO_DO_PROCESS'
and hp.process_definition_version = 1
```

Claro que para versões não liberadas isso não funcionaria.

Dá pra simplificar usando apenas o proces\_workflow, mas dessa forma você não caí em pegadinhas de conversão de processo.

---
