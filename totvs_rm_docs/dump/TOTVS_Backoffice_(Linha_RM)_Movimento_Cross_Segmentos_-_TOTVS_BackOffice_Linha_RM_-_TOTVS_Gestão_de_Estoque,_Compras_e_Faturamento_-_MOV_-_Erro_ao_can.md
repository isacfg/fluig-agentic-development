# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento  -  MOV - Erro ao cancelar o movimento: Movimento Id 'X' gerado para fornecedor 'Y'

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061155974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-o-movimento-Movimento-Id-X-gerado-para-fornecedor-Y](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061155974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-o-movimento-Movimento-Id-X-gerado-para-fornecedor-Y)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 11:03

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31580600198039)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência**Ao cancelar uma Ordem de Compra gerada por Cotação é apresentado a seguinte mensagem:

**Erro ao cancelar o movimento de número:**
**Movimento Id gerado para o fornecedor**

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa**
Esse incidente ocorre, pois a Ordem de Compra gerada via Cotação para o **Fornecedor** **X**, e no momento do cancelamento a Ordem de Compra está preenchida com o **Fornecedor** **Y**.

**Solução**
Por via de regra, somente poderá ser cancelado ou excluído o movimento gerado por cotação com o código do CLI/FOR original.

A consulta a abaixo pode facilitar a identificação do **CODCFO** que foi o vencedor da cotação:

SELECT CFOVENCEDOR, \* FROM TCITMORCAMENTO WHERE CODCOTACAO = '202X.0000XX'

Desta forma para que o movimento possa ser cancelado altere seu Cli/For igualando com o vencedor da cotação.
