# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como preencher município no movimento automaticamente

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038209473-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-preencher-munic%C3%ADpio-no-movimento-automaticamente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038209473-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-preencher-munic%C3%ADpio-no-movimento-automaticamente)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 18 de agosto de 2022 às 15:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida**Como parametrizar o sistema para buscar alíquota ISS do município da filial ou do fornecedor?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução****Por Município da Filial:** tem por finalidade parametrizar base de dados para buscar alíquota do tributo **ISS** considerando o **Estado – Município** **informado no cadastro da Filial** onde a movimentação está sendo **inclusa**.

**Por Município do Fornecedor:** tem por finalidade parametrizar base de dados para buscar alíquota do tributo **ISS** considerando o **Estado – Município do cliente\\fornecedor** **informado no movimento**.

[Clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=315910268#1-2) para conferir a parametrização necessária.

**Informações Adicionais**

-   Ao utilizar **Município por Item** os dados de município serão apresentados item a item e replicados para o campo **| Município** **| Integrações | Fiscal |** do movimento apenas se **todos** os itens inclusos possuírem o mesmo **município**;
-   O campo **Código do Serviço** será copiado dos itens para o movimento na aba **| Integrações | Fiscal | Código do Serviço |** apenas se a informação em questão for comum a todos os itens do movimento. Este campo será apresentado apenas se o tipo de movimento estiver parametrizado para **Gerar Escrituração** e será alimentado no momento que a movimentação for salva;
-   As informações de **Município – UF – Cód.Serviço** serão apresentadas na inclusão do item de movimento na aba **| Integrações | Fiscal |**apenas se tiverem sido inclusos anteriormente no cadastro do tributo em **Anexos | Tributos do Produto por Município** referente ao município da Filial.
