# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como utilizar Tabela de Preço

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015272392-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-utilizar-Tabela-de-Pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015272392-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-utilizar-Tabela-de-Pre%C3%A7o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 20 de outubro de 2022 às 23:40

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:03:00 min**

**Dúvida**Como utilizar o recurso de Tabela de Preços?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**O cadastro das tabelas deverá ser feito através do Menu **Cadastros | Mais | Tabelas Auxiliares | Tabela de preço:**

​
![screenshot_20180904_101519.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010449332/screenshot_20180904_101519.png)

Ao cadastrar a tabela de preço será possível informar quais características serão aplicadas para seleção dos preços cadastrados e os produtos que participarão desta tabela.

**As opções existentes são**:

![screenshot_20180904_101551.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010449432/screenshot_20180904_101551.png)
​

Ou seja, se for cadastrado uma tabela de preço, onde em **Anexos | Estado** for informado o Estado PR, sempre que for inserido um movimento que possua um Cli/For do estado PR os preços cadastrados para os produtos desta tabela serão acatados para os produtos participantes dela. Para que o estado MG possua outra lista de preços, se faz necessário cadastrar uma nova tabela de preços onde em **Anexos - Estado** seja informado apenas o Estado MG e assim ao incluir um movimento que possua um Cli/For do estado MG os preços dos produtos obedecerão esta tabela de preço e não a primeira cadastrada.

O recurso de cadastro de tabela de preço só pode ser utilizado em movimento de saída (2.1.xx ou 2.2.xx) onde será habilitada a etapa **Item - Preços 2/2** e o tipo de movimento deverá estar parametrizado para buscar o preço do item **etapa Item - Preços 1/2 em Tabela de preços**.

Ainda nos parâmetros será possível definir qual a prioridade das características da tabela que serão consideradas ao selecionar o preço. Portanto se sua tabela for cadastrada com o estado igual a PR e Cli/For J00000, nos parâmetros do tipo de movimento será possível definir se o sistema irá ter maior peso para o estado ou para o código do Cli/For.

Assim ao incluir um movimento com o fornecedor J0000 (não pertence ao estado PR) o sistema irá apresentar a tabela de preços para seleção assim como apresentará caso inclua um movimento com fornecedor pertencente ao estado PR.

Caso apenas uma das características seja informada como prioridade e a tabela possua mais de uma característica a ser atendida, o sistema não terá como selecionar a tabela de preços a ser utilizada trazendo assim o campo em branco.

**Exemplo:** Prioridade selecionada apenas como Estado, ao incluir um movimento com o fornecedor J00000 nenhuma tabela de preço será selecionada mesmo que a tabela contemple este Cli/For.

![screenshot_20180904_101603.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360010473211/screenshot_20180904_101603.png)
​
