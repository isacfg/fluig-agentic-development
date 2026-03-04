# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Ajuste de Custo Médio

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035968873-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Ajuste-de-Custo-M%C3%A9dio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035968873-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Ajuste-de-Custo-M%C3%A9dio)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:41

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
** Tempo aproximado para leitura: **00:04:00 min

Dúvida**Como ajustar o **Custo Médio** de produtos na base?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução**Para correção do custo médio existem duas opções:

**Ajuste de estoque via inventário:**
É necessário acessar **Ambiente | Parâmetros | Gestão de Estoque Compra e Faturamento | Gestão de estoque | Custos** e parametrizar o sistema conforme o print abaixo:

-   **Manter custo médio ao zerar saldo físico** = **DESMARCADO**
-   **Zerar o saldo financeiro se o saldo físico for zero** = **MARCADO**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/8WfiSHgyr07sQNqKwhfWmWzaO/?name=inline922990029.png)

Aplicada a parametrização inclua um **Inventário** zerando o **Estoque Atual** dos produtos. Após zerar o estoque, é necessário realizar uma entrada (ajuste positivo do inventário) do produto afetando o saldo atual. Esta entrada será efetuada mediante novo inventário, agora para compor o novo custo.

O custo médio é calculado automaticamente no momento da entrada.
Para que a entrada tenha o comportamento esperado é necessário que o tipo de movimento de ajuste positivo de seu inventário aumente o saldo atual **etapa** **Estoque - Estoque 1/3** e tenha a **Fórmula do Valor Financeiro** cadastrada na **etapa Estoque - Estoque** **2/3** para os parâmetros do tipo de movimento.
Dessa forma, toda entrada realiza o cálculo (informações sobre o cálculo do custo médio [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016510112-RM-EST-Como-o-custo-m%C3%A9dio-%C3%A9-calculado-?source=search)) definindo então o novo custo médio do produto.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/yyg21mUDGIe7Lxo3wWPHmQsQv/?name=inline537786296.png)

Para mais informações sobre o ajuste de estoque através de inventário [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=4813647).

**Ajuste de saldo financeiro:**
Outra opção para ajuste do custo de um produto é inserir uma movimento de ajuste de estoque **4.1.XX** que afete apenas o saldo financeiro do produto. Esta opção demanda um conhecimento profundo do estoque que será ajustado e também dos cálculos necessários para que o ajuste seja exato. A inclusão desta movimentação pode ser via inventário ou manual, a diferença neste caso é que não se faz necessário zerar o saldo do produto para aplica-la.

**Atenção:** Uma vez que o estoque de uma empresa faz parte de seu patrimônio, o acerto de custo médio deve sempre ser previamente analisado para assim definir a melhor prática a fim de não desrespeitar os quesitos fiscais.
