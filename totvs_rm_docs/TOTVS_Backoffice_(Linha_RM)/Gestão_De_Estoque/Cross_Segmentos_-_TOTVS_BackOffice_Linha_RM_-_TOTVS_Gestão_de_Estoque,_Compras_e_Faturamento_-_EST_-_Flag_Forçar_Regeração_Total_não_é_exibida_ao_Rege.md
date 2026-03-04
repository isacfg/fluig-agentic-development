# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Flag Forçar Regeração Total não é exibida ao Regerar Saldos e Custos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408766503959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Flag-For%C3%A7ar-Regera%C3%A7%C3%A3o-Total-n%C3%A3o-%C3%A9-exibida-ao-Regerar-Saldos-e-Custos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408766503959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Flag-For%C3%A7ar-Regera%C3%A7%C3%A3o-Total-n%C3%A3o-%C3%A9-exibida-ao-Regerar-Saldos-e-Custos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:46

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31294164692247)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência** Ao Regerar Saldos e Custos a flag **Forçar Regeração Total** não é exibida:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408761661079)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**A flag **Forçar Regeração Total** é exibida apenas nas coligadas que realizam o controle de estoque de forma geral. Coligadas que controlam o estoque por saldo não apresentaram essa opção, e sim a opção de **Regerar Todos os Saldos** que equivale a **Forçar** **Regeração Total**. 

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408762539031)

**Solução
**Para exibição da flag **Forçar Regeração Total** é preciso controlar o estoque de forma geral. Para isso, acesse **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão de Estoque | Etapa 5 - Data de Fechamento** e desmarque o parâmetro **Fechamento do Estoque por Saldo**:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408770149655)

Flag apresentada após desmarcar o parâmetro **Fechamento do Estoque por Saldo**:

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408765947287)

**Atenção:** Para mudar a forma de controle do estoque é necessário realizar a Regeração de Saldos e Custos e posteriormente a alteração no parâmetro. **[Clique aqui](https://tdn.totvs.com/display/public/LRM/Regerar+Saldos+e+Custos)** para maiores informações sobre esse processo.
