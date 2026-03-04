# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cotação não permite Alterar Tipo de Julgamento de Melhor oferta

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036123533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-n%C3%A3o-permite-Alterar-Tipo-de-Julgamento-de-Melhor-oferta](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036123533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-n%C3%A3o-permite-Alterar-Tipo-de-Julgamento-de-Melhor-oferta)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/20596633324695)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida**Por que ao tentar editar uma cotação o ícone **Alterar o Tipo de Julgamento de Melhor oferta** se encontra desabilitado para utilização?

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948350825623)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Esse incidente ocorre pois no Assistente de Cotação o Tipo De Julgamento da Melhor Oferta selecionado para esta cotação é igual a **Melhor oferta por produto**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948350828439)


O sistema somente permitirá que o Tipo de Julgamento de Melhor Ofertar seja alterado quando no assistente de cotação o tipo de julgamento selecionado for igual a **Melhor Oferta Global**.
Isso ocorre pois devido a estruturas de tabelas no banco de dados ao selecionar a opção Melhor oferta por produto, o sistema não consegue voltar para Melhor oferta global.

Em exemplo, o mesmo comportamento acontece quando nos parâmetros do tipo de movimento for parametrizado para utilizar Histórico Longo. O sistema não permite que seja alterado a parametrização para Histórico Curto.
