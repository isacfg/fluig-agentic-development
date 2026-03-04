# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como Aumentar o Número de Casas Decimais do Preço Unitário do Item de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003947371-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-Aumentar-o-N%C3%BAmero-de-Casas-Decimais-do-Pre%C3%A7o-Unit%C3%A1rio-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003947371-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-Aumentar-o-N%C3%BAmero-de-Casas-Decimais-do-Pre%C3%A7o-Unit%C3%A1rio-do-Item-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 15 de agosto de 2022 às 08:31

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Dúvida**Como aumentar o número de casas decimais a ser utilizado em preço unitário de um item de movimento sem afetar o número de casas decimais dos demais valores do sistema?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para solucionar essa dúvida, realize os seguintes passos:
1\. Acesse o menu **Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento - Tabelas - Produtos - Definições de Produto 3/3**, marque a flag **Casas Decimais Preço** e salve a parametrização:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408494945431/mceclip0.png)


2\. Acesse o cadastro de produto que deseja trabalhar com mais casas decimais e na aba **Preço** marque a flag **Alterar edição do preço** e no campo **Número de decimais do preço** informe o número de casas decimais que deseja que o produto utilize no preço unitário. Este campo aceita até o numeral 10 pois para o preço unitário pode-se trabalhar com até 10 casas decimais após a virgula.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408509020823/mceclip1.png)

**Importante:**
A quantidade de casas decimais pode ser aumentada apenas no módulo Gestão de Estoque, Compras e Faturamento. Os demais módulos do RM e o envio da Nota Fiscal consideram apenas 2 casas decimais após a vírgula e por isso o preço unitário será arredondado ou truncado, dependendo da definição de Cálculo Financeiro definido nos Parâmetros Gerais do Gestão de Estoque, Compras e Faturamento, etapa Definições Gerais 2/3.
