# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como realizar movimentação com moeda estrangeira

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022287012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-realizar-movimenta%C3%A7%C3%A3o-com-moeda-estrangeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022287012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-realizar-movimenta%C3%A7%C3%A3o-com-moeda-estrangeira)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 15 de dezembro de 2021 às 14:22

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min

****Dúvida**Como posso incluir movimentação no sistema onde a moeda utilizada seja estrangeira?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM  – TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.

**Solução**A movimentação que caracteriza uma transação em valor estrangeiro nada difere dos demais movimentos a não ser a moeda informada para o movimento através da aba **Tributos e Valores | Valores:
**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4411536246807/mceclip0.png)

Nesta aba o usuário irá indicar qual a moeda utilizada nesta movimentação e a partir deste momento qualquer valor inserido no movimento será referente à moeda informada. A inclusão de movimento **não efetua conversões ou consistências** em relação a cotação da moeda indicada. Uma vez que foi informada a moeda no movimento o sistema passa a ter os valores como já verificados pelo usuário, pois durante a inclusão não há um valor de referência a ser verificado a fim de efetuar conversão de moedas ou consistência de valores.

Já durante o **Faturamento** de um movimento que utilize moeda estrangeira para outro movimento que trabalhe com moeda diferente da origem, a **conversão** **de valores** irá ocorrer. Para isso o sistema exige que exista cotação cadastrada para as moedas envolvidas, assim como a edição da moeda tanto no movimento de origem quanto no movimento de destino, **Etapa** **Mov - Valores Financeiros 2/4**.

A conversão de moeda ocorre antes da abertura do movimento de destino para edição, sendo assim a conversão sempre ocorrerá da moeda do movimento de origem para a moeda default informada nos parâmetros do tipo de movimento de destino.

**Cadastro de cotações de moedas e índices**: a moeda que deve possuir a cotação é a moeda do movimento de origem onde o Símbolo de Referência seja a moeda de destino.

![screenshot_20190125_160230.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360019530872/screenshot_20190125_160230.png)
