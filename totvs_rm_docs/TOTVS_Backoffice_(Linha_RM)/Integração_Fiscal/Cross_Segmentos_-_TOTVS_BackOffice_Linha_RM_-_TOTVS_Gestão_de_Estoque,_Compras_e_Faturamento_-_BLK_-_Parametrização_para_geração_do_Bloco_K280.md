# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração do Bloco K280

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022751272-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-do-Bloco-K280](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022751272-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-do-Bloco-K280)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 1 de dezembro de 2021 às 16:58

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como parametrizar o módulo para geração do **Bloco** **K280**.**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**No TOTVS Gestão de Estoque, Compras e Faturamento, o **Registro K280** será gerado a partir de Movimentos de Ajuste Positivo ou Negativo do Saldo Atual, Saldo do estoque Com Terceiros ou Saldo De Terceiros em poder da empresa.

Para que o sistema possa identificar quais são os tipos de movimento que irão gerar os **Registros K280**, este deverá ter definido qual data do movimento será considerada para geração deste registro, esta definição ocorrerá em seus parâmetros através da **etapa** **Fis Dados**:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360020349631/mceclip0.png)

As opções para preenchimento do campo **Data para Registro K280** serão:

-   Não usa
-   Data Emissão
-   Data Extra 1
-   Data Extra 2

Exemplo de uma inclusão de movimento de **Ajuste de Estoque 4.1.XX**:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360020350531/mceclip2.png)

**Importante**

-   A data de preenchimento para geração do Bloco K280 deverá ser menor que a Data Emissão preenchida no movimento;
-   O Registro K280 se destina a atender a dificuldade relatada pelas empresas nas quais, em decorrência da natureza física dos produtos, há a possibilidade de ocorrer diferenças no estoque, como por exemplo, Produtos A Granel, Líquidos, dentre outros que alteram sua quantidade e não podem ser medidos com precisão. Essas correções poderão ser efetuadas no registro **K280 – Correção de Apontamento – Estoque Escriturado**, que por sua vez considera o período de apuração anterior escriturado no **Registro** **K200 – Estoque Escriturado**. Portanto, por meio desse registro, é possível fazer ajustes diversos em produtos estocados, sejam eles Produtos Acabados, Insumos ou Material de Embalagem.
-   A correção de apontamento tem que ocorrer **obrigatoriamente** entre o levantamento de 2 Inventários, uma vez que, com a contagem do estoque se terá conhecimento de uma eventual necessidade de correção de apontamento;
-   A correção do estoque escriturado de um período de apuração poderá influenciar estoques escriturados de períodos posteriores, até o período imediatamente anterior ao período de apuração em que se está fazendo a correção, uma vez que o estoque final de um período de apuração é o estoque inicial do período de apuração seguinte;
-   As quantidades devem ser expressas obrigatoriamente, na unidade de medida de controle de estoque constante no campo 06 do **Registro 0200: UNID\_INV**.
-   As informações chave deste registro são os campos: **DT\_EST, COD\_ITEM, IND\_EST e COD\_PART** **(este, quando houver)**.

Para maiores informações sobre a geração e consistências feitas pelo sistema, clique [aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=423938759)
