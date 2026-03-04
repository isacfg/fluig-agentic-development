# Consulta SQL para listar processos e também seu campos

> **Fonte:** [https://fluiggers.com.br/t/consulta-sql-para-listar-processos-e-tambem-seu-campos/413](https://fluiggers.com.br/t/consulta-sql-para-listar-processos-e-tambem-seu-campos/413)
> **Categoria:** Sem categoria
> **Criado em:** 30/04/2021, 16:24
> **Visualizações:** 3821 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Marcos Vinicios de Carvalho** (@mcarvalho1994) — 30/04/2021, 16:24

Prezados, boa tarde!

Temos uma área de BI dentro da empresa e gostariam de gerar alguns dashboards para acompanhamento e medição dos fluxos.
A ferramenta que utilizam é o Power BI, foi solicitando para minha coordenação a extração dos dados do formulário via Linked Server (SQL Server) para um base intermediária que será consumida pelo Power BI.

Localizei uma tabela que contém algumas informações do processo, sendo ela a PROCES\_WORKFLOW, porém serão necessárias mais informações sobre os processos, exemplo:
Lista de campos;
Histórico da atividades (executor, quando assimiu a atividade, quando finalizou a atividade);

Alguém alguma vez já precisou extrair essas informações? Ou alguma outra similar direto da base de dados?

Tentei gerar um diagrama do banco, mas pelo visto a base do Fluig não trabalha com chaves estrageiras entre as tabelas, o que impossibilitou a geração.

Sem saber a forma que as tabelas se relacionam eu não consigo evoluir com a demanda.
Poderiam me ajudar?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 30/04/2021, 16:45 | ❤️ 3

Os registros dos campos dos processos são armazenados nas tabelas “ML” do banco tanto os registros principais quanto as tabelas pai e filho.

Essa consulta te retorna o código das tabelas ML do formulário principal e suas tabelas pai e filho. Pode fazer um select nelas também caso precise.

SELECT
l.COD\_LISTA\_PAI,
l.COD\_LISTA\_FILHO,
d.COD\_LISTA,
l.COD\_LISTA\_PAI,
l.COD\_LISTA\_FILHO,
l.COD\_TABELA
,d.NUM\_DOCTO\_PROPRIED
,d.NUM\_VERS\_PROPRIED

FROM DEF\_PROCES p – Tabela principal de configuração dos processos
LEFT JOIN VERS\_DEF\_PROCES vp ON vp.COD\_DEF\_PROCES = p.COD\_DEF\_PROCES – Tabela auxiliar de versões do processo
AND vp.LOG\_ATIV = 1
LEFT JOIN DOCUMENTO d ON d.NR\_DOCUMENTO = vp.NUM\_PASTA\_FORM – Tabela de formulários/documentos ECM
AND d.VERSAO\_ATIVA = 1
LEFT JOIN SERV\_DATASET ds ON ds.COD\_DATASET = d.NM\_DATASET – Tabela de datasets dos formulários/documentos
LEFT JOIN META\_LISTA\_REL l ON l.COD\_LISTA\_PAI = d.COD\_LISTA – Tabela de referência das tabelas de dados dos formulários
WHERE p.COD\_DEF\_PROCES = ‘NOME DO SEU PROCESSO’ OR ds.COD\_DATASET = ‘NOME SEU DATASET’
ORDER BY vp.NUM\_VERS DESC;

Com o código de retorno você faz uma consulta tipo essa aqui para ter retorno dos dados do processo e do formulário.

SELECT \* FROM ML00XXXX s
INNER JOIN PROCES\_WORKFLOW W ON s.cardid = W.NR\_DOCUMENTO\_CARD\_INDEX AND s.documentid = W.NR\_DOCUMENTO\_CARD AND W.status != 1

E outra assim, para ter dados das pai e filhos relacionadas ao formulário.

SELECT \* FROM ML00XXXX
INNER JOIN ML00YYYY ON ML00XXXX.documentid=ML00YYYY.documentid AND ML00YYYY.version=(SELECT max(version) FROM ML00YYYY TB2 WHERE TB2.documentid = ML00YYYY.documentid )
WHERE ML00XXXX.version=(SELECT max(version) FROM ML00XXXX TB WHERE TB.documentid = ML00XXXX.documentid )

Entenda o ML00XXXX como sendo o X o código de retorno da primeira consulta informada.
A query foi feita em Oracle, talvez precise adaptar.

---

## Resposta #2

**Marcos Vinicios de Carvalho** (@mcarvalho1994) — 30/04/2021, 17:11

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/willian_laynes/48/196_2.png) Willian\_Laynes:
>
> > SELECT NUM\_SEQ\_MOVTO FROM ML00XXXX s
> > INNER JOIN PROCES\_WORKFLOW W ON s.cardid = W.NR\_DOCUMENTO\_CARD\_INDEX AND s.documentid = W.NR\_DOCUMENTO\_CARD AND W.status != 1

Fiz a primeira query e ela retornou quatro registros:

COD\_LISTA\_PAI

COD\_LISTA\_FILHO

COD\_LISTA

COD\_LISTA\_PAI

COD\_LISTA\_FILHO

COD\_TABELA

NUM\_DOCTO\_PROPRIED

NUM\_VERS\_PROPRIED

12

13

12

12

13

files

1236026

13000

12

14

12

12

14

fields

1236026

13000

12

22

12

12

22

areaFields

1236026

13000

12

23

12

12

23

areaFiles

1236026

13000

Como prosseguir?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 30/04/2021, 17:22 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/willian_laynes/48/196_2.png) Willian\_Laynes:
>
> > SELECT NUM\_SEQ\_MOVTO FROM ML00XXXX s
> > INNER JOIN PROCES\_WORKFLOW W ON s.cardid = W.NR\_DOCUMENTO\_CARD\_INDEX AND s.documentid = W.NR\_DOCUMENTO\_CARD AND W.status != 1

SELECT \* FROM ML001012 s
INNER JOIN PROCES\_WORKFLOW W ON s.cardid = W.NR\_DOCUMENTO\_CARD\_INDEX AND s.documentid = W.NR\_DOCUMENTO\_CARD AND W.status != 1

Esqueci do 01 que é a empresa que vc esta utilizando ML001012 o 12 é o valor do formulário principal “COD\_LISTA\_PAI”

---

## Resposta #4

**system** (@system) — 03/05/2021, 10:49

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
