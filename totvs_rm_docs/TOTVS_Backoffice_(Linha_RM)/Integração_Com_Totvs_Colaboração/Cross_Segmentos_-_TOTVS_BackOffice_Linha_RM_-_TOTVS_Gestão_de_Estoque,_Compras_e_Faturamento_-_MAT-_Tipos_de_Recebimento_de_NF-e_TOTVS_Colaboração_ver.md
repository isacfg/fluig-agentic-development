# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT-  Tipos de Recebimento de NF-e TOTVS Colaboração versão 2.0

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028183351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipos-de-Recebimento-de-NF-e-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028183351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipos-de-Recebimento-de-NF-e-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 1 de agosto de 2022 às 12:20

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida**Quais opções o sistema disponibiliza para **Recebimento Automático de NF-e** (Compra)?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Os Tipos de Recebimento possíveis são:

-   **Inclusão direta**: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento de NF-e com base nos dados existentes no XML. O movimento será criado acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento; 


-   **Inclusão direta - Status não processado:**O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento com base nos dados existentes no XML, só que com o status “Não Processado”.  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento);


-   **Recebimento de Pedido:** O sistema utiliza o código do pedido contido no XML para buscar o movimento correspondente e realizar o faturamento do mesmo, sendo que se o pedido não for encontrado na base de dados o novo movimento não será criado, pois o sistema abortará o processo, informando o motivo através do log de execução;


-   **Recebimento de Pedido ou Inclusão direta:** Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo. Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando a todas às parametrizações do seu tipo de movimento, efetuando todas as integrações parametrizadas. O novo movimento terá o status 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;


-   **Recebimento de Pedido ou Inclusão direta: - Status não processado:** Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo.  Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando às parametrizações do seu tipo de movimento, exceto as de integração, pois o movimento será criado com o status "Não Processado".  Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento).

Para maiores informações [clique aqui](http://tdn.totvs.com/pages/releaseview.action?pageId=223159982).
