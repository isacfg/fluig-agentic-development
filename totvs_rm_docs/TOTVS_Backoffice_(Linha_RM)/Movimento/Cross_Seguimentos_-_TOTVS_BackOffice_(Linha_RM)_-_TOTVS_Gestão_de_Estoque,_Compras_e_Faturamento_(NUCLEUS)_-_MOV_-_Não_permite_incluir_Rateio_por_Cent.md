# Cross Seguimentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Não permite incluir Rateio por Centro de Custo no movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102414-Cross-Seguimentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-permite-incluir-Rateio-por-Centro-de-Custo-no-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102414-Cross-Seguimentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-permite-incluir-Rateio-por-Centro-de-Custo-no-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 23 de agosto de 2021 às 10:02

---

**Ocorrência**Ao acessar tela de **Rateio por Centro de Custo** do movimento botão **Incluir** não é exibido. E o botão **Editar** é exibido mas não permite editar o rateio exibido.

![screenshot_20190820_090204.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044127814/screenshot_20190820_090204.png)

**Ambiente**Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

**Causa
**Essa situação ocorre pois a parametrização do **Tipo de Movimento** trabalha com Rateio por Centro de Custo no **Item de movimento**. Assim o sistema terá como comportamento apenas somar os rateios dos itens na tela de movimento.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:
1\. Inserir o rateio apenas via item de movimento para que ao salvar a tela de rateio do movimento seja preenchida.
