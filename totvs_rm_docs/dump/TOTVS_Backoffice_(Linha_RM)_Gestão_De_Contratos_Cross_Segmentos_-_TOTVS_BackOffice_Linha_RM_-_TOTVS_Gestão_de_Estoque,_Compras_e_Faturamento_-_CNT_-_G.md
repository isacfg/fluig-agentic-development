# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Gerar Financeiro de acordo com a data de faturamento do contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021391472-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Financeiro-de-acordo-com-a-data-de-faturamento-do-contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021391472-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Financeiro-de-acordo-com-a-data-de-faturamento-do-contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 16:57

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00 min**

**Dúvida**Como gerar o lançamento financeiro de acordo com a data de faturamento do contrato?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para correta configuração do processo de faturamento de contrato, de modo a gerar o Financeiro de acordo com a data de faturamento do contrato, é necessário seguir os procedimentos listados:

1\. **Menu Ambiente | Parâmetros | TOTVS Gestão de Estoque, Compras e Faturamento | Contratos | Faturamento | Avança:**

**
![image2017-5-24 11:12:59.png](https://tdn.totvs.com/download/attachments/274643888/image2017-5-24%2011%3A12%3A59.png?version=1&modificationDate=1495637529000&api=v2)
**

1.1 - **Etapa Definições Fat. Contrato 1/3**

Copiar Data de Venc/Medição p/Mov: Informar para qual data será carregada a data de faturamento do contrato. Opções:

-   Data de Entrega
-   Data de Entrada/Saída
-   Data Extra 1
-   Data Extra 2

![image2017-5-24 10:51:18.png](https://tdn.totvs.com/download/attachments/274643888/image2017-5-24%2010%3A51%3A18.png?version=1&modificationDate=1495637528000&api=v2)

2\. **Menu Ambiente | Parâmetros | TOTVS Gestão de Estoque Compras e faturamento | Localizar o Tipo de Movimento nos parâmetros | Parametrizar o Tipo de Movimento desejado |** **Etapa Mov- Datas 1/2 ou 2/2** (dependendo da data selecionada no contrato)

-   Edição da data = Edita ou Mostra
-   Definir o Nome da data (caso esteja disponível)
-   Copiar valor Default = Nenhum

![image2017-5-24 10:56:35.png](https://tdn.totvs.com/download/attachments/274643888/image2017-5-24%2010%3A56%3A35.png?version=1&modificationDate=1495637528000&api=v2)

![image2017-5-24 10:56:54.png](https://tdn.totvs.com/download/attachments/274643888/image2017-5-24%2010%3A56%3A54.png?version=1&modificationDate=1495637528000&api=v2)

2.2 - **Etapa Fin- Faturamento 2/6**

-   Vencimento a Partir: Informar a mesma data definida no contrato (Data de Entrega, Data de Entrada/Saída, Data Extra 1 ou Data Extra 2).
-   Data de Emissão: Informar a mesma data definida no contrato (Data de Entrega, Data de Entrada/Saída, Data Extra 1 ou Data Extra 2).

![image2017-5-24 11:0:20.png](https://tdn.totvs.com/download/attachments/274643888/image2017-5-24%2011%3A0%3A20.png?version=1&modificationDate=1495637529000&api=v2)

**Processo:**

Ao Gerar o faturamento do contrato, o lançamento financeiro irá considerar a data alternativa que foi configurada para definir o vencimento das parcelas, e não mais a data de emissão (que será a mesma em todos os movimentos). Veja o exemplo.

**Contrato Periódico com 3 faturamentos, sendo 1 a cada mês. Utilizando a "Data Extra 1" como a data de faturamento.**

\- Data Início do contrato = 01/01/2000

\- Data em que o contrato foi faturado = 10/01/2000

\- Condição de pagamento = 30 Dias

\- Movimentos gerados: 3

**Movimento 1:**

\- Data de emissão do movimento = 10/01/2000

\- Data Extra 1 = 01/01/2000

\- Data Emissão (financeiro): 01/01/2000

\- Data Vencimento (financeiro): 01/02/2000

**Movimento 2:**

\- Data de emissão do movimento = 10/01/2000

\- Data Extra 1 = 01/02/2000

\- Data Emissão (financeiro): 01/02/2000

\- Data Vencimento (financeiro): 01/03/2000

**Movimento 3:**

\- Data de emissão do movimento = 10/01/2000

\- Data Extra 1 = 01/03/2000

\- Data Emissão (financeiro): 01/03/2000

\- Data Vencimento (financeiro): 01/04/2000
