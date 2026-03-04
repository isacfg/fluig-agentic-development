# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Saldo do Produto Negativo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034944033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Saldo-do-Produto-Negativo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034944033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Saldo-do-Produto-Negativo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:40

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00min**

**Dúvida**Porque mesmo com a aplicação parametrizada para barrar movimentações com saldo negativo, há produtos nesta situação?
**Ambiente**Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

**Solução**O parâmetro Saldo Menor que Zero = Barra, acessado em menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Gestão de Estoque > Definições de Estoque > etapa Saldos de Estoque 1/3, é responsável apenas por *Barrar* inclusão ou edição de movimentações que deixarão o saldo do produto em questão negativo. Entretanto, não será impedido que haja valores negativos na Ficha Física Financeira ou na Consulta de Saldos e Custos.
Existem situações em que o saldo do produto poderá ficar negativo, são elas:

1\. **Alteração em parâmetro** - O tipo de movimento não está parametrizado para afetar estoque e são incluídos alguns movimentos normalmente. Antes do Fechamento de Estoque, é alterado o parâmetro do tipo de movimento (etapa Estoque - Estoque 1/3) e agora o mesmo irá diminuir estoque, então ao regerar saldos e custos, todas as movimentações posteriores a data de fechamento de estoque serão regeradas e diminuirão saldo, deixando o saldo total do produto negativo.

2\. **Movimento faturado** - O produto possui quantidade 0 em seu estoque. É incluído uma movimentação do tipo 1.1.XX que aumenta o saldo deste produto em 10. Após isso é criado um movimento de saída, retirando todo o saldo em estoque do produto. Então, o usuário realiza o faturamento do movimento 1.1.XX, que está parametrizado para não de afetar estoque após faturamento, deixando o saldo negativo em -10.
Para evitar este problema poderá acessar os parâmetros do tipo de movimento origem, etapa Compra/Venda - Outros dados e marcar a flag Afetar Estoque Após Faturado/Recebido.

3\. **Movimento incluído com data retroativa** - Foi incluído um movimento com Data Movimento retroativa e ao imprimir o relatório de Ficha Física Financeira esta movimentação está deixando o saldo do produto negativo. Isto ocorreu porque será verificado o saldo atual na inclusão dos movimentos e se neste momento o estoque atual possuir saldo, a movimentação será incluída com sucesso independente se na ficha irá apresentar saldo negativo em datas anteriores.
