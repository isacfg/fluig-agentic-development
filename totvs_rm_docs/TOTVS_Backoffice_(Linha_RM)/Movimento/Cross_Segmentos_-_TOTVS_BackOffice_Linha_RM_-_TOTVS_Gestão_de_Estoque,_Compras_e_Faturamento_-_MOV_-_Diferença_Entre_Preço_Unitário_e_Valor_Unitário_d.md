# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Diferença Entre Preço Unitário e Valor Unitário do Item de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003347142--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Diferen%C3%A7a-Entre-Pre%C3%A7o-Unit%C3%A1rio-e-Valor-Unit%C3%A1rio-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003347142--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Diferen%C3%A7a-Entre-Pre%C3%A7o-Unit%C3%A1rio-e-Valor-Unit%C3%A1rio-do-Item-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 7 de dezembro de 2021 às 13:44

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:04:00 min**

**Dúvida**Qual a diferença entre os campos Preço Unitário e Valor Unitário do item de movimento e porque esses campos nem sempre terão o mesmo valor?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões .

**Solução**O **Preço Unitário** é o campo que guarda o preço da compra ou venda de um produto e não tem relação com custos de estoque (médio, unitário, etc). Nos [parâmetros do tipo de movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691), etapa **Item - Preços** é possível definir um default para Preço Unitário que será considerado apenas na inclusão ou edição manual do movimento**.** 


![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360104427533/mceclip0.png)

Se definido qualquer default para o Preço Unitário, como por exemplo Custo Médio ou Custo Unitário e após a inclusão do movimento esse custo sofrer alteração de valor, o Preço Unitário não será alterado automaticamente, pois apenas considera o valor do default **no momento da inclusão/edição do item de movimento**.

O custo do estoque é outro valor distinto, guardado no item de movimento no campo **Valor Unitário**, visível no **Anexo Itens de Movimento** e via banco de dados na tabela **TITMMOV**, campo **VALORUNITARIO**. Esse campo, guarda o custo da compra (em movimentos de entrada) e o custo médio do produto (em movimentos de saída). Para entender como o custo médio é calculado, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016510112).

O valor unitário é **dinâmico**, pois muda durante todo o período de estoque em aberto conforme a fórmula informada nos parâmetros do tipo de movimento, etapa **Estoque - Estoque 2/3**, para movimentos de entrada e varia de acordo com o custo médio calculado nas entradas do produto, para movimentos de saída. Esse custo é atualizado sempre ao regerar saldos e custos.


Pensando nas saídas, provavelmente o Preço Unitário será diferente do Valor Unitário, considerando que há entradas retroativas, cancelamento ou exclusão de entradas incluídas antes da saída, edição de custos nos movimentos de entrada, alteração de parametrização, etc. Por isso não deve comparar os dois campos.
Se o movimento for uma baixa de estoque, considere retirar a parametrização de Edição de Preço Unitário, pois o campo considerado para estoque será Valor Unitário.
Se o movimento for contabilizado, siga as recomendações do artigo [RM - MOV - Contabilizar movimento pelo custo do estoque.](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022152652)
