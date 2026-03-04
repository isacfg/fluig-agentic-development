# Cross Segmentos - TOTVS BackOffice Linha RM - MOV - Integração Financeira: Geração de INSS Automático para o Totvs Gestão Financeira

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034892914-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-MOV-Integra%C3%A7%C3%A3o-Financeira-Gera%C3%A7%C3%A3o-de-INSS-Autom%C3%A1tico-para-o-Totvs-Gest%C3%A3o-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034892914-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-MOV-Integra%C3%A7%C3%A3o-Financeira-Gera%C3%A7%C3%A3o-de-INSS-Autom%C3%A1tico-para-o-Totvs-Gest%C3%A3o-Financeira)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:37

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida
**Como parametrizar o sistema para gerar INSS Automático para o Totvs Gestão Financeira?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Tem por finalidade gerar lançamento automático de INSS – DARF no Totvs Gestão Financeira. Desta forma, será gerado um lançamento financeiro e um lançamento de DARF obedecendo **Fato** **Gerador** parametrizado no Totvs Gestão Financeira que pode ser **Emissão** ou **Vencimento**.
O lançamento de INSS será gerado apenas para o cliente/fornecedor que seja **Pessoa Física**.
O lançamento de INSS será gerado automaticamente independente da existência do tributo no movimento ou no item, visto que, será obedecida parametrização do **tipo de documento** informado na **parametrização** tipo de movimento.
Segue abaixo link contendo os passos a serem seguidos para que o sistema se comporte como o esperado:
[Geração de INSS Automático para o Totvs Gestão Financeira](https://tdn.totvs.com/pages/releaseview.action?pageId=4813068)
