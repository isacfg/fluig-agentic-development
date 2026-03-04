# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Calcular o Valor Original do Lançamento Financeiro?

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036106553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Calcular-o-Valor-Original-do-Lan%C3%A7amento-Financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036106553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Calcular-o-Valor-Original-do-Lan%C3%A7amento-Financeiro)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 12:07

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00 min**

**Dúvida**Como o Valor Original do Lançamento Financeiro é calculado, de acordo com a parametrização da Condição de Pagamento estabelecida nos parâmetros do tipo de movimento?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**O Valor Original do Lançamento Financeiro é enviado pelo Gestão de Estoque, Compras e Faturamento quando o tipo de movimento gera integração financeira (parâmetros do tipo de movimento, etapa **Fin - Faturamento 1/6**, marcando a flag Fatura o Movimento) e seu cálculo depende da parametrização da Condição de Pagamento.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046449814/mceclip0.png)

1\. Quando o campo **Edição da Condição de Pagamento** estiver definido como Mostra ou Edita sem utilizar parcelamento ou meio de pagamento, o campo Valor Original do Lançamento Financeiro será calculado pela fórmula informada na etapa **Fin - Faturamento 3/6** campo **Fórmula do Valor a Ratear**.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047314093/mceclip1.png)

2\. Com a flag **Utiliza Edição de Meios de Pagamento** marcada, nos parâmetros do tipo de movimento, etapa **Fin - Condições de Pagamento**, o total das parcelas informadas na aba **Integrações | Financeira** do movimento deverá ser igual ao **Valor do Documento**, evidenciado abaixo:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046452854/mceclip2.png)
![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047317193/mceclip3.png)

3\. Habilitado o **Uso de Parcelamento**, nos parâmetros do tipo de movimento, etapa Fin - Condições de Pagamento, o total das parcelas informadas na aba Integrações | Financeira do movimento deverá ser igual ao retorno da **Fórmula do Valor a Ratear**.

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047317353/mceclip4.png)

4. Habilitado o **Uso de Parcelamento com Data Entrega Item**, nos parâmetros do tipo de movimento, etapa Fin - Condições de Pagamento, a Fórmula do Valor a Ratear será executada uma vez por item de movimento e o retorno final deverá corresponder ao valor total das parcelas informadas na aba Integrações | Financeira do movimento.

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046455114/mceclip5.png)
