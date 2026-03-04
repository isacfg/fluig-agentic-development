# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - IRRF apresentado na tela de tributos do lançamento financeiro

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022995651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-IRRF-apresentado-na-tela-de-tributos-do-lan%C3%A7amento-financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022995651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-IRRF-apresentado-na-tela-de-tributos-do-lan%C3%A7amento-financeiro)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 18 de janeiro de 2024 às 16:32

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/20677785590167)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida**Ao incluir um movimento com integração financeira, o lançamento gerado apresenta o **IRRF** na tela de **Tributos> Valores das Retenções**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/20677963728407)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Este  comportamento ocorrerá sempre que as condições abaixo existirem:[
](http://tdn.totvs.com/pages/releaseview.action?pageId=270899168)\- Movimento ser do tipo **saída** (Contas a receber);
\- Existir o tributo IRRF no **movimento**;
\- O cadastro do **cliente/fornecedor** estiver configurado como **órgão publico Federal** (**Aba Outros | Tributos**);

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/20677963736855)
