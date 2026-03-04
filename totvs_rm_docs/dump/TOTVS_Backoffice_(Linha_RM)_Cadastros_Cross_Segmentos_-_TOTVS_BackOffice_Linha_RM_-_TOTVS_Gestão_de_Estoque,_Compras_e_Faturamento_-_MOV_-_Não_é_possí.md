# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Não é possível alterar a Unidade de Controle

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023604272-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-alterar-a-Unidade-de-Controle](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023604272-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-alterar-a-Unidade-de-Controle)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 28 de outubro de 2021 às 04:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:01:00 min

Dúvida**Produto XXXX: Não é possível alterar a Unidade de Controle, há movimentações existentes para o produto.

**Ambiente**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

**Solução**O sistema consistirá se existe movimentação de pedido **1.1.xx** ou **2.1.xx** com os Status "**A"** **(Pendente / A Faturar)** ou "**R"** **(Não Processado) para o produto**.

SELECT \* FROM TMOV M (NOLOCK), TITMMOV T (NOLOCK)
WHERE M.CODCOLIGADA = T.CODCOLIGADA AND M.IDMOV = T.IDMOV
AND M.CODCOLIGADA = \[CodColigada\] --Informar a coligada
AND T.IDPRD = \[Idprd\] -- Informar o Idprd
AND (M.CODTMV LIKE '1.1%' OR M.CODTMV LIKE '2.1%')
AND (M.STATUS = 'A' OR M.STATUS = 'R')

Caso tenha algum **retorno** estes movimentos precisarão ser **cancelados** ou **recebidos**, de acordo com a necessidade de seu processo, para que possa alterar a **Unidade de Medida** do cadastro do produto.
