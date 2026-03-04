# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Rastrear Movimentos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/30203205414551-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Rastrear-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/30203205414551-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Rastrear-Movimentos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 24 de fevereiro de 2025 às 15:40

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30203190135191)
 Tempo aproximado para leitura: **00:02:00 min
****
Dúvida**Como ver a rastreabilidade de um movimento?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**

Para rastrear os movimentos envolvidos no processo, acesse a classificação de seu movimento > selecione o movimento desejado para rastreio > Ícone = Rastreamento de Movimentos.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/30203190136215)

O rastreamento de movimentos serve para visualizar todo o processo de geração do movimento. Quais são os movimentos de origem, se eles vieram de cotação, desdobramento ou agrupamento.
A tela de rastreamento é constituída de 6 módulos principais:

-   **Fluxograma**: O primeiro é um fluxograma de todo o processo pelo qual um movimento passou para ser gerado. Em cada um dos blocos é representado um movimento com os seguintes dados: tipo de movimento, número do movimento - série, status e identificador. Os blocos são ligados por setas direcionando qual foi o destino desses movimentos.
    **Observação**: Caso queira abrir a tela de um dos movimentos, basta selecioná-lo no fluxograma e dar um duplo clique.
-   **Tipo de Movimento:** O segundo módulo apresenta os principais dados do movimento selecionado: tipo de movimento, número do movimento, status, identificador, valor do documento, data de emissão e data de entrada/saída.
-   **Cotação:** O terceiro, logo ao lado, é um quadro que só será preenchido caso o movimento tenha sido originado por uma cotação e será possível visualizar os seguintes dados: código da cotação, data de inclusão, comprador e status. Por meio de duplo clique é possível abrir a tela de edição da Cotação selecionada.
-   **Itens do movimento:** O quarto quadro contém os itens do movimento com os dados de: código do produto, descrição, quantidade e preço unitário.
-   **Agrupamento:** O quinto módulo apresenta os movimentos que foram agrupados para gerar o movimento selecionado, portanto nem sempre haverá dados nesse quadro.
-   **Legenda**: Por último, temos uma legenda para facilitar a compreensão de como os movimentos foram gerados: incluído, faturado, desdobrado, agrupado.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/30203205392279)

**Observação**

-   Mesmo selecionando mais de um movimento, a tela de rastreamento será aberta para um movimento por vez;
-   É possível visualizar na tabela **TMOVRELAC**, colunas IDMOVORIGEM e IDMOVDESTINO os movimentos envolvidos no processo;
-   Caso o movimento esteja com status **RECEBIDO**, porém o mesmo **não possui movimento de destino**, indica que foi realizado nele o processo de **Concluir Pedido**. A informação pode ser visualizada na tela de rastreamento se a coluna **Qtde. Concluída** possuir valor.
    Mais informações: **[Processo Concluir Pedido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035469033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Processo-Concluir-Pedido)**

Saiba mais:

**[Rastreamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/Rastreamento)**
