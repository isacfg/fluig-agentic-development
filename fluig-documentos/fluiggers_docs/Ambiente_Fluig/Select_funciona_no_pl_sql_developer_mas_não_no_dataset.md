# Select funciona no pl/sql developer mas não no dataset

> **Fonte:** [https://fluiggers.com.br/t/select-funciona-no-pl-sql-developer-mas-nao-no-dataset/987](https://fluiggers.com.br/t/select-funciona-no-pl-sql-developer-mas-nao-no-dataset/987)
> **Categoria:** Ambiente Fluig
> **Criado em:** 27/03/2022, 19:49
> **Visualizações:** 400 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 27/03/2022, 19:49

Eu fiz um dataset avançado e no onSync pus uma leitura de um banco de dados externo, o do Protheus.

O objetivo é o de listar todas as pessoas que fazem aniversário na data corrente e ver também os dos seguintes três dias.

O formato original do campo RA\_NASC é `yyyymmdd` e seu tipo é CHAR(8) na tabela. Eu não preciso do ano, de modo que faço uma extração dos quatro últimos dígitos, transformo-os em algarismos e desejo selecionar um intervalo entre duas datas.
Como no exemplo na SQL abaixo, informo com o mesmo formato a data corrente e mais três dias (327 e 330, representado 27/03 e 30/3);

A SQL funciona perfeitamente no aplicativo PL/SQL Developer, mas não funciona no dataset no momento do sincronismo.

Já tentei várias abordagens para ver se conseguia resolver isto no ambiente do Fluig, mas foi inútil.

Há uma mensagem no server.log, como resultado do ‘try’-‘catch’ que diz:

> ERRO==============> java.sql.SQLSyntaxErrorException: ORA-01722: número inválido

Minha última tentativa de tentar fazer funcionar a SQL dentro dataset é o abaixo:

> SELECT DISTINCT ra\_nome,ra\_nasc, ra\_xfornec FROM SRA010 R WHERE R.RA\_SITFOLH <> ‘D’ AND TO\_NUMBER(SUBSTR(R.RA\_NASC,5,4),‘9999’)\*1 >= 327 AND TO\_NUMBER(SUBSTR(R.RA\_NASC,5,4),‘9999’)\*1 <= 330 AND R.RA\_CATFUNC IN (‘P’,‘E’,‘M’,‘A’) AND R.D\_E\_L\_E\_T\_ = ’ ’
> UNION
> SELECT DISTINCT ra\_nome,ra\_nasc,ra\_xfornec FROM SRA020 S WHERE S.RA\_SITFOLH <> ‘D’ AND TO\_NUMBER(SUBSTR(S.RA\_NASC,5,4),‘9999’)\*1 >= 327 AND TO\_NUMBER(SUBSTR(S.RA\_NASC,5,4),‘9999’)\*1 <= 330 AND S.RA\_CATFUNC IN (‘P’,‘E’,‘M’,‘A’) AND S.D\_E\_L\_E\_T\_ = ’ ’ ORDER BY RA\_NOME

---
