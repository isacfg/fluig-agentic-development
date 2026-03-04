# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Agrupar/Não Agrupar itens iguais na Cotação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028380232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Agrupar-N%C3%A3o-Agrupar-itens-iguais-na-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028380232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Agrupar-N%C3%A3o-Agrupar-itens-iguais-na-Cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:21

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00min**

**Dúvida**Como Agrupar/Não Agrupar itens iguais em orçamento da cotação?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Quando a Solicitação de Compra cotada possuir itens iguais (com mesmo código), é possível que no orçamento estes sejam agrupados ou não. Tal comportamento é definido nos parâmetros da cotação, etapa Movimentos 1/2, através da flag **Não agrupar Itens Iguais na Cotação** (quando marcada, os itens não serão agrupados).

Caso estejam sendo cotadas Solicitações de Compras de uma filial somente, a parametrização a ser respeitada será definida em Definição de Escopo - Filial.

![screenshot_20190522_105806.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360029101151/screenshot_20190522_105806.png)

Caso este parâmetro esteja desabilitado para edição, será necessário acessar a etapa "Definições Gerais 2/5" e desmarcar a flag "Permitir Cotação Parcialmente Gerada".

![screenshot_20190522_110048.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360029099332/screenshot_20190522_110048.png)
