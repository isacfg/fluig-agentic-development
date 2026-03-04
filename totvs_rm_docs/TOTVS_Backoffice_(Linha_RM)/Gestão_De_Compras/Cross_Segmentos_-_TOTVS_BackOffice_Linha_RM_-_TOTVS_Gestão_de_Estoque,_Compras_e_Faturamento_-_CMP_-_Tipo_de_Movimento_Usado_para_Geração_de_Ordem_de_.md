# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Tipo de Movimento Usado para Geração de Ordem de Compra pela Cotação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034915354-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Tipo-de-Movimento-Usado-para-Gera%C3%A7%C3%A3o-de-Ordem-de-Compra-pela-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034915354-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Tipo-de-Movimento-Usado-para-Gera%C3%A7%C3%A3o-de-Ordem-de-Compra-pela-Cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:23

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31293368043031)
 Tempo aproximado para leitura: 03:00 min
Dúvida**

Como definir para qual tipo de movimento a Ordem de Compra será criada ao executar o processo Gerar Ordem de Compra pela Cotação?

**Ambiente**

Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as Versões

**Solução**

Por padrão, Ordens de Compra geradas pela cotação através de **Processos** > **Gerar Ordem de Compra**, são criadas para o tipo de movimento selecionado nos parâmetros da Solicitação de Compra cotada, etapa Compra/Venda - Características, campo **Tipo Movimento Gerado Default**.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046280793)

Caso esteja gerando Ordem de Compra para itens de **vários** tipos de movimento de Solicitações de Compra **distintos** com **diferentes** Tipos de Movimento Gerado Defaults, serão criadas **várias** ordens de compra, respeitando a **parametrização da origem**.

Caso seja necessário alterar o tipo de movimento de Ordem de Compra durante a execução do processo pela cotação deverá acessar menu **Ambiente** > **Parâmetros** > **Gestão de Estoque, Compras e Faturamento** > **Gestão de Compras** > Cotação (geral ou Definição de Escopo - Filial) > etapa **Definições Gerais 2/5** e marcar o check box **Permite Alterar Tipo de Movimento ao Gerar Ordem de Compra**.
Ao gerar a Ordem de Compra, será exibido novo check box **Alterar Tipo de Movimento** no processo:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046282993)

Ao marca-lo, a tela seguinte será apresentada e poderá ser escolhido qualquer tipo de movimento parametrizado como **Ordem de Compra** (Parâmetros do tipo de movimento, etapa **Compra/Venda - Outros Dados**, campo Tipo do Movimento de Compra = **Pedido de Compras**):

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046283113)
