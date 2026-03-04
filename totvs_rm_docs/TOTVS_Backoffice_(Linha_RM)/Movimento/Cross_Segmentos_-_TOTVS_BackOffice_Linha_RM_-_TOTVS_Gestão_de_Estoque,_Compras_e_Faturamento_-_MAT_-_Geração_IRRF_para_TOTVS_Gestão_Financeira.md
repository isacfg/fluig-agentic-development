# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Geração IRRF para TOTVS Gestão Financeira

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024700871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Gera%C3%A7%C3%A3o-IRRF-para-TOTVS-Gest%C3%A3o-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024700871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Gera%C3%A7%C3%A3o-IRRF-para-TOTVS-Gest%C3%A3o-Financeira)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 8 de novembro de 2022 às 15:30

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:01:30 min**

**Dúvida**Como parametrizar o sistema para gerar **IRRF** Automático para o **TOTVS Gestão Financeira**?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Tem por finalidade gerar L**ançamento** automático de **IRRF– DARF** no Totvs Gestão Financeira. Desta forma será gerado um lançamento financeiro e um lançamento de DARF obedecendo **Fato Gerador** parametrizado no Totvs Gestão Financeira que pode ser **Emissão ou Vencimento**.

O lançamento de IRRF será gerado para o cliente/fornecedor **Pessoa Jurídica** obedecendo a alíquota do código de receita, e **Pessoa Física** obedecendo a tabela progressiva apresentada no TOTVS Gestão Financeira em **| Cadastros | Dados Fiscais | Tabela de Cálculo de INSS \\ IRRF |**.

O lançamento de IRRF será gerado automaticamente **independente da existência do tributo no movimento ou no item**, visto que, será obedecida parametrização do “**tipo de documento**” informado na parametrização tipo de movimento.

**Observação**

No cadastro do Cliente Fornecedor, na guia **Outros | Tributos**, caso a flag **Optante pelo Simples** esteja marcada o Sistema não vai gerar os valores do Tributo para o Financeiro!

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013880701/mceclip0.png)

Segue abaixo link contendo os passos a serem seguidos para que o sistema se comporte como o esperado:

Para mais informações clique [aqui](http://tdn.totvs.com/pages/releaseview.action?pageId=4813078)!
