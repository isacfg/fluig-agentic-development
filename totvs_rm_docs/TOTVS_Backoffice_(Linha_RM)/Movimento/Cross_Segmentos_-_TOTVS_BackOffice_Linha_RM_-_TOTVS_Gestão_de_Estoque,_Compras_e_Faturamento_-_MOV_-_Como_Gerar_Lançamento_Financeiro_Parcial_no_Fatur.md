# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Gerar Lançamento Financeiro Parcial no Faturamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034117814-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Lan%C3%A7amento-Financeiro-Parcial-no-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034117814-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Lan%C3%A7amento-Financeiro-Parcial-no-Faturamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 17 de maio de 2022 às 16:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 02:00 min**

**Dúvida**Ao faturar movimento parcialmente, como gerar lançamento financeiro com o valor restante?

**Ambiente**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento  – A partir da 12.1.

**Solução**Para que o sistema refaça o lançamento de origem considerando o novo valor do movimento é necessário que a seguinte parametrização seja efetuada:
1\. Na etapa **Compra/Vendas - Características** no campo  **Lançamentos Pedido Faturado** **Parcialmente** selecione a opção **Gerar**;

![screenshot_20190820_141939.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360045013413/screenshot_20190820_141939.png)

2\. Na etapa **Compra/Vendas - Outros Dados** para o campo **Lançamentos no Faturamento após Geração do Pedido** selecione o que será feito com o lançamento após o faturamento parcial. Recomendamos que selecione ou **Cancelar** ou **Excluir** para que não exista duplicidade de informações no Financeiro após o faturamento.

![screenshot_20190820_142353.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360045013793/screenshot_20190820_142353.png)
