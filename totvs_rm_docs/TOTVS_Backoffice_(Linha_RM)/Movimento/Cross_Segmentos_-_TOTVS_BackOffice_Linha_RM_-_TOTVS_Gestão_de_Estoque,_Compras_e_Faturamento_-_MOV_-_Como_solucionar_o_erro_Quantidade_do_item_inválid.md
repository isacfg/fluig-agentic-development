# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como solucionar o erro "Quantidade do item inválida"?

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024608274-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Quantidade-do-item-inv%C3%A1lida](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024608274-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Quantidade-do-item-inv%C3%A1lida)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:08

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31582781080855)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência**Ao alterar a quantidade do Item para mais durante o faturamento é retornada a mensagem: **Quantidade do item 1 inválida! Valor Máximo**

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360037957554)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as Versões.

**Causas**

1.  O parâmetro **Consiste Quantidade a Maior** está habilitado para o tipo de movimento destino (que está sendo criado durante o faturamento).
2.  O movimento que está sendo faturado foi originado no módulo **TOTVS Obras e Projetos** ou foi criado a partir de faturamento de movimento originado nesse mesmo módulo e a quantidade do item está sendo aumentada.

**Observação
**Consistência implementada na versão 12.1.28 e superiores.

**Soluções**Para solucionar a ocorrência relatada na Causa 1, realize os seguintes passos:

1.  Acesse menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento |** **selecione o tipo de movimento destino** e dê um duplo clique. (caso encontre dificuldades para encontrar, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento).);
2.  Avance até a etapa Item - **Identificação 2/2** e desmarque a flag **Consiste Quantidade a Maior:**
    ![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360038796433)

3.  Para solucionar a ocorrência relatada na Causa 2, inclua um novo **Pedido ou Pedido Extra** no módulo TOTVS Obras e Projetos com a quantidade do item que deseja aumentar.
