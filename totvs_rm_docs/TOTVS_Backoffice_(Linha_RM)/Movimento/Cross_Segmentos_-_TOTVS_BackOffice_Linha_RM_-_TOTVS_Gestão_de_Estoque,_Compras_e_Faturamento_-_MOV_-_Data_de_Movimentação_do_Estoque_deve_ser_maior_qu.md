# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Data de Movimentação do Estoque deve ser maior que a Data de Fechamento do mesmo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Data-de-Movimenta%C3%A7%C3%A3o-do-Estoque-deve-ser-maior-que-a-Data-de-Fechamento-do-mesmo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Data-de-Movimenta%C3%A7%C3%A3o-do-Estoque-deve-ser-maior-que-a-Data-de-Fechamento-do-mesmo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:18

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24425488648087)**Tempo aproximado para leitura: **00:02:00min**

**Ocorrência**

Ao incluir um Movimento que afeta estoque é retornado o erro: **Data de Movimentação do Estoque deve ser maior que a Data de Fechamento do mesmo.**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4415305917207)

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**

A mensagem ocorre nos casos em que o movimento está sendo incluído com Data de Movimentação anterior a Data de Fechamento de Estoque.

**Solução**

Para solucionar essa ocorrência, inclua o movimento com data movimentação **posterior** a Data de Fechamento de Estoque.

A D**ata de Fechamento de Estoque** é visualizada no menu **Ambiente >** **Parâmetros** |> **Gestão de Estoque, Compras e Faturamento** > **Gestão de Estoque** > **Data de Fechamento**, conforme exemplo abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583137547799)

Já a data utilizada no movimento é definida no caminho: **Ambiente >** **Parâmetros** |> **Gestão de Estoque, Compras e Faturamento** > Selecione a classificação do Tipo de Movimento **>** **etapa Mov - Datas 1/2**.

No campo Data de Movimento Default deverá selecionar como **Default** uma das opções:

1.  Data Emissão
2.  Data Entrada/Saída
3.  Data Extra 1
4.  Data Extra 2
5.  Data do Sistema
6.  Data de Processamento

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583137549591)
​


**Importante
**

A TOTVS **NÃO** recomenda que se volte a Data de Fechamento, pois isto pode resultar em alterações irreversíveis nos **saldos e custos do produto**.
