# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Alterar Filial Emissão no Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035451733-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Alterar-Filial-Emiss%C3%A3o-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035451733-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Alterar-Filial-Emiss%C3%A3o-no-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:17

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida**É possível alterar a filial de emissão de um movimento?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**O parâmetro referente a editar a **Filial de Emissão** existente na etapa **Mov - Emitente Destinatário 1/2** dos parâmetros do tipo de movimento tem influencia apenas no campo de filial apresentado quando o tipo de movimento é selecionado.

![screenshot_20190906_113318.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360045460614/screenshot_20190906_113318.png)

Após acessar o tipo de movimento e clicar no botão Incluir não será mais possível alterar a filial de emissão.

Tal comportamento se deve ao fato de que ao selecionar a filial na tela de acesso ao tipo de movimento todo o contexto desta filial também será selecionado, o que engloba locais de estoque, naturezas de operação, etc.
