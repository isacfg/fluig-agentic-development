# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Chave Duplicada TXMOVCFX

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008352887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Chave-Duplicada-TXMOVCFX](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008352887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Chave-Duplicada-TXMOVCFX)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:14

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24500746458775)
 Tempo aproximado para leitura: 06:00 min**

**Ocorrência:
**

Ao tentar incluir um movimento é apresentada uma das seguintes mensagens:

**Já Existe Nota do Emitente com este Número e Série. Verifique os parâmetros numeração desta série.**

 Ou

**Chave Duplicada**: **Possíveis causas:**
**\- Inclusão de registro cujo valor da chave primária já existe**
**\- Inclusão de registro cujo valor do índice único já existe**
Em detalhes: ***Cannot Insert duplicate key row in object with unique index "TXMOVCFX*"** \[mensagem continua com os valores\]"

![Imagem](http://tdn.totvs.com/download/attachments/275121035/image2017-6-9%2014%3A7%3A16.png?version=1&modificationDate=1497028766000&api=v2)

**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**

A inconsistência ocorre pois o movimento a ser incluso possui os dados que compõe a chave **TXMOVCFX** já existentes na base de dados, ocasionando assim a duplicidade do registro.

**Solução**

Para solucionar o incidente, verifique os campos da chave violada. Os campos dependem da versão utilizada, sendo assim, aconselhamos consultar no banco de dados o conteúdo da mesma. Comandos para consulta:

-   **SQL** - SP\_Help TMOV
-   **ORACLE -** select index\_name from user\_indexes where table\_name = 'TMOV';

Atualmente a chave é composta pelos campos:

Chave/Index **TXMOVCFX**:
CODCOLIGADA, SERIE, NUMEROMOV, CODFILIAL, CODCOLCFOAUX, CODCFOAUX, CODTDO, CRO, SUBSERIE

**Saiba mais
[Movimento\_Duplicado\_na\_Base\_TXMOVCFX](https://tdn.totvs.com/display/public/LRM/MOV0009_Movimento_Duplicado_na_Base_TXMOVCFX)**
