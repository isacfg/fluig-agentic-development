# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Produtos por Filial no Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401463938327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-por-Filial-no-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401463938327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-por-Filial-no-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 19 de fevereiro de 2025 às 14:50

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23401484235031)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida**Como Criar Tipos de Produtos por Filial no Contrato?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Por este menu serão cadastrados os tipos de produto por filial e para cada tipo incluído deverá ser indicado o imposto e a alíquota utilizada para o mesmo, no estado da filial.
Esta opção será utilizada por empresas com filiais em estados diferentes que emitem para as mesmas as notas fiscais, pois alguns impostos tem alíquotas diferenciadas, dependendo do Estado.

Para cadastrar, acesse o Menu Contratos > Tabelas de Contratos > Tipos de Produtos por Filial:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23401484262551)

**Descrição dos campos:**

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23401484264087)
**

**Tabela:** TTIPFIL

**Código da Filial:** Selecione a filial.
**Tributo:** Selecione o tributo.
**Tipo:** Selecione o tipo de produto para Faturamento
**Alíquota:** Informe, se desejar, a alíquota.


**OBSERVAÇÕES:**

Ao faturar um contrato em Faturamento por Lote e os movimentos forem gerados, o sistema verificará de qual filial é o contrato e qual o tipo de produto para faturamento.
A partir destes dados, calculará o imposto de acordo com o informado no tipo de produto por filial, isto se o tipo de movimento, Etapa 58 (Fiscal – Tributação - Item), estiver parametrizado para buscar a alíquota em "Tipo Produto p\\Filial".
