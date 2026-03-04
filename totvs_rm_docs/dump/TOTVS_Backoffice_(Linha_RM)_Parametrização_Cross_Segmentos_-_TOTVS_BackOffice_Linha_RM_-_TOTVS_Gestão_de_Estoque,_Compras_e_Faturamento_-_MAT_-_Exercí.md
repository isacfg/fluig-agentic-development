# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Exercício Fiscal cadastrado não é exibido em Seleção de Contexto

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003903012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exerc%C3%ADcio-Fiscal-cadastrado-n%C3%A3o-%C3%A9-exibido-em-Sele%C3%A7%C3%A3o-de-Contexto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003903012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exerc%C3%ADcio-Fiscal-cadastrado-n%C3%A3o-%C3%A9-exibido-em-Sele%C3%A7%C3%A3o-de-Contexto)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 30 de novembro de 2021 às 17:11

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min**

**Ocorrência**No módulo **Gestão de Estoque, Compras e** **Faturamento**, ao tentar realizar a **Seleção de Exercício Fiscal** via seleção de contexto nenhum exercício é apresentado neste havendo exercício cadastrado para a filial selecionada.

![screenshot_20180516_104938.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360004856192/screenshot_20180516_104938.png)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.

**Causa
**Esse incidente ocorre, pois a parametrização do sistema em **Integração | Fiscal** não foi efetuada para a coligada em questão.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

-   1\. Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integração | Fiscal:**
-   2\. Efetue toda a parametrização desta integração e não deixe nenhuma etapa com o símbolo abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004875211/mceclip0.png)

-   3\. Salve a parametrização e o exercício fiscal cadastrado será exibido na tela de **seleção de contexto**.
