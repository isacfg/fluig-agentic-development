# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - The time zone ID 'E.South America Standard Time' was not found on the local computer.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402313039895-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-The-time-zone-ID-E-South-America-Standard-Time-was-not-found-on-the-local-computer](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402313039895-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-The-time-zone-ID-E-South-America-Standard-Time-was-not-found-on-the-local-computer)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 15 de dezembro de 2021 às 16:34

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Causa
**Ao incluir um Movimento parametrizado para emissão de MDF-e é apresentado mensagem:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4402310111895/mceclip0.png)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão - A partir da versão 12.1.

**Solução
**A mensagem é apresentada pois a **Filial de emissão de MDF-e** está parametrizada para **utilizar Horário de Verão**.

Para realizar o ajuste acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Dados Fiscais | Parâmetros por Filial (Selecione a Filial desejada) | Etapa 7 - Ambiente CC-e |** **Identificação de Horário de Verão** igual a **Não:**

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4402317230103/mceclip1.png)


**Importante
**É recomendado realizar esse ajuste às demais Filiais utilizadas para envio de Documentos Eletrônicos.
