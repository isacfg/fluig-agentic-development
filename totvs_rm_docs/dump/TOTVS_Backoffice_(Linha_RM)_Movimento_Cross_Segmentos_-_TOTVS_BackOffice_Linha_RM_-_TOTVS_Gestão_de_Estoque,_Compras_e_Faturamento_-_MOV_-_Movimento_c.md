# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento  - MOV - Movimento com Status Não Processado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003212141-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-Status-N%C3%A3o-Processado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003212141-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-Status-N%C3%A3o-Processado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 20 de dezembro de 2021 às 15:54

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao salvar o **Movimento** seu **Status** é exibido como **Não Processado:**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360102269994/mceclip0.png)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**Esta situação ocorre pois o Tipo de Movimento está parametrizado para ser criado com Status Não Processado.

Menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecione o Tipo de Movimento | Mov. - Identificação** **|** opção **Criar com Status Não-Processados**:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/ddfXQIfUfOggKp7X3gmZO6apb/?name=inline1932289149.png)

**Solução
**Primeiro segue explicação dos impactos dessa parametrização:

1\. Essa opção tem a finalidade de **não permitir que movimentos afetem o estoque** durante o período de orçamento.

2\. Este parâmetro só aparecerá se houver integração entre **TOTVS Gestão de Estoques, Compras** **e** **Faturamento** **x** **TOTVS Manutenção**.

3\. Marcando esta opção, o sistema habilitará na **visão de Movimentos o botão Processa Grupo**.

4\. Selecionando o Movimento desejado e pressionando este botão, o sistema fará a **baixa no estoque dos itens do mesmo**, desde que esteja parametrizado para algum dos **saldos** **aumenta ou diminui estoque** e o seu status será **alterado para a faturar ou pendente**.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500003447661/mceclip1.png)

Para melhor entendimento do processo Processar Grupo de Movimento [clique aqui.](https://tdn.totvs.com/display/public/LRM/Processar+Grupo+de+Movimentos)
