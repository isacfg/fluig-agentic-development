# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RES - Nenhum tipo de movimento é apresentado na analise de Ressuprimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564852-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Nenhum-tipo-de-movimento-%C3%A9-apresentado-na-analise-de-Ressuprimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564852-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Nenhum-tipo-de-movimento-%C3%A9-apresentado-na-analise-de-Ressuprimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:39

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida
**Nenhum tipo de movimento é apresentado na analise de Ressuprimento

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causas
**1- O Tipo de movimento não é de solicitação de compras.
2- A numeração do tipo de movimento não está como mostra.
3- O tipo de movimento não está parametrizado para “Geração de Movimento” na etapa de Estoque Ressuprimento.

**Solução**

1- Parametrizar o tipo de movimento para ser de Solicitação de Compras (Gestão de compras), na etapa MOV - IDENTIFICAÇÃO, parâmetro Classificação .
2- Definir no tipo de movimento para ter a numeração como mostra, na etapa MOV -IDENTIFICAÇÃO.
3- Parametrizar o tipo de movimento na etapa de etapa de Estoque Ressuprimento para “Geração de Movimento”
