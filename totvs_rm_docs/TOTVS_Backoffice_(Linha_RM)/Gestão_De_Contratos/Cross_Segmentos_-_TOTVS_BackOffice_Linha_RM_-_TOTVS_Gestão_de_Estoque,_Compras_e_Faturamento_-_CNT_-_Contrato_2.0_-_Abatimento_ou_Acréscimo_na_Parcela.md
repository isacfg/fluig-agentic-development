# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Abatimento ou Acréscimo na Parcela

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33820337646231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Abatimento-ou-Acr%C3%A9scimo-na-Parcela](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33820337646231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Abatimento-ou-Acr%C3%A9scimo-na-Parcela)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 16:17

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/33820360091159)
 Tempo aproximado para leitura: **00:03:00 min**

**Dúvida**
Como realizar Abatimento ( Desconto ) ou Acréscimo ( Despesa ) nas parcelas do Contrato?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

Para a execução do processo selecione a Parcela > Ações Relacionadas > Gerar Abatimento ou Acréscimo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33820337622295)

Este processo é responsável pelo preenchimento dos campos de Valor Abatimento e Valor Acréscimo da parcela, do item e do contrato.

**Campos Necessários para a Execução do Processo**

-   **Operação**: Abatimento ou Acréscimo
-   **Valor:** Se a operação selecionada for "Abatimento", este campo corresponderá ao valor do abatimento. Caso contrário, corresponderá ao valor do acréscimo.
-   **Justificativa:** Motivo da realização da operação.

**Observação**

-   Este processo permite o acréscimo ou abatimento de valor em uma ou mais parcelas que **não estejam faturadas ou inativas.**
-   Caso a parcela selecionada tenha um lançamento de previsão gerado, o valor da previsão não será alterado pelo processo de acréscimo ou abatimento.
-   Ao realizar o faturamento de uma parcela que possui valor de abatimento e/ou acréscimo, o valor do movimento gerado poderá ser afetado conforme a fórmula de valor líquido parametrizada no tipo de movimento. Essas informações são passadas ao movimento através dos campos de **despesa e desconto**, conforme documentado no processo de faturamento do contrato.

    **Abatimento no Item do Movimento::**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33820360092951)


    **Acréscimo no Item do Movimento:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33820360093207)

     

**Saiba mais:**

[03\. Contratos 2.0 | Processos | Abatimento ou Acréscimo](https://tdn.totvs.com/pages/viewpage.action?pageId=938330409)
