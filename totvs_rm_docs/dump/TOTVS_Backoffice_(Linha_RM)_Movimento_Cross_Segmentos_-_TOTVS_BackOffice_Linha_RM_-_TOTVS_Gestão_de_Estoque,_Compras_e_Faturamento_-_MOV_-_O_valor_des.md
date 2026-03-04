# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O valor dessa nota ultrapassa o valor disponível para rateio do CTRC

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012478301-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-valor-dessa-nota-ultrapassa-o-valor-dispon%C3%ADvel-para-rateio-do-CTRC](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012478301-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-valor-dessa-nota-ultrapassa-o-valor-dispon%C3%ADvel-para-rateio-do-CTRC)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 6 de março de 2023 às 09:56

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao associar Movimento de CT-e ao Movimento de Nota Fiscal é apresentado mensagem abaixo:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/UbKtHOuDOd7YswG9qlfboSpSn/?name=inline-886232841.png)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.

**Causa
**O erro ocorre pois no Movimento de **CT-e** na aba **Dados CTRC** o valor informado para as notas a serem vinculadas está menor que o valor da Nota Fiscal que esta sendo associada ao CT-e.

**Exemplo:**
CTE - Acoberta 2 notas, total das notas R$2.000,00.
Ao inserir o Movimento de CT-e na aba Dados CTRC no campo **Quantidade de Notas** **do CTRC** informar o valor 2 e no campo **Valor das Notas do CTRC** informar 2.000,00.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500019803421/mceclip1.png)

Ao inserir a nota fiscal a ser acobertada será feito o vinculo do CT-e com a NF através da aba **Associar CTRC.** Nesse momento o sistema irá consistir o valor do movimento de NF com o valor informado no campo **Valor das Notas do CTRC.**

Se tentar associar uma NF-e com valor de 2.001,00 o erro será apresentado pois ultrapassa o valor informado no CT-e.
