# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Como Alterar Código de Produto

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102134-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Como-Alterar-C%C3%B3digo-de-Produto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102134-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Como-Alterar-C%C3%B3digo-de-Produto)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 9 de abril de 2025 às 14:47

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31292152360471)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida**

Como alterar código de produto?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Para que o campo TPRODUTO.CODIGOPRD seja habilitado para a edição no cadastro de Produto, é necessário:

1\. Acesse **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Tabelas | Produto | Definições de Produto 1/3**.

2\. Desmarcar a flag **Não modificar código do produto**.

**
![screenshot_20190820_084631.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044988853)
**

**Atenção:** É necessário que o produto em questão nunca tenha passado pelo processo de **Regerar Saldos e Custos.**
Caso o processo tenha sido executado ao menos uma vez, não será possível alterar o código do produto mesmo que o parâmetro se encontre desmarcado.
