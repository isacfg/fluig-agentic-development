# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cotação cancelada ao cancelar Ordem de Compra.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402319211287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-cancelada-ao-cancelar-Ordem-de-Compra](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402319211287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-cancelada-ao-cancelar-Ordem-de-Compra)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:34

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao cancelar uma **Ordem de Compra** que foi gerada a partir de uma **Cotação**, a cotação também é cancelada.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - a partir da versão 12.1.

**Causa
**Quando nos parâmetros da cotação a flag **Permite Cotação Parcialmente Gerada** está desmarcada, ao cancelar a ordem de compra gerada, a cotação também é cancelada.

Se a cotação tiver gerado duas ordens de compras, por exemplo, e apenas uma delas for cancelada, o status ficará como Pedido de Compras, mas quando cancelamos a segunda Ordem de Compra, a cotação é Cancelada automaticamente. Se a cotação gerou apenas uma ordem de compra, ao cancelar tal movimento o status da cotação ainda assim é alterado para Cancelado.

Esse comportamento impede que a Cotação fique com status Ordem de Compra Parcialmente Gerada.

**Solução**

Para reabrir as cotações após cancelar a Ordem de Compra, marque a flag **Permite Cotação Parcialmente Gerada**, nos parâmetros da cotação (geral ou por filial), etapa **Definições Gerais 2/5**. 

Acesse o Módulo Gestão de Estoque, Compras e Faturamento, aba **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão de Compras | Cotação | etapa Definições Gerais 2/5**.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4402318969239/mceclip0.png)

**Importante
**Apenas as cotações incluídas após marcar o parâmetro em questão serão reabertas após o cancelamento da ordem de compra. Ou seja, se a cotação já se encontra em sua base de dados mesmo marcando o parâmetro esta será cancelada ao cancelar a ordem de compras.
