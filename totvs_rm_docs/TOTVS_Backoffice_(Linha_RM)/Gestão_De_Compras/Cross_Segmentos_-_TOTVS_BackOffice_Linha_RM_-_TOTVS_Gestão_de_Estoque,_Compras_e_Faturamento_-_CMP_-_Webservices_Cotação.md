# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Webservices Cotação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409693264151-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Webservices-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409693264151-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Webservices-Cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 29 de setembro de 2021 às 13:26

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:04:00 min
****
Dúvida**
Quais Webservices podem ser utilizados para integrar uma cotação.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.

**Solução**
Segue um Fluxo com os Status possíveis na Cotação e cada processo responsável por alterá-los.

![Screenshot_23.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409687463319/Screenshot_23.png)

É possível realizar operações em cotações a partir de chamadas via Web Service.

Os Serviços disponíveis para serem chamados são:

-   **Assistente de Cotação
    ****Nome do Método:** ExecuteWithXmlParams**Nome do Processo:** CmpAssistenteCotacaoProc
    Esse processo cria uma nova cotação. Em parametrizações normais, a cotação será criada com o Status **Composição**.

-   **Comunicar Fornecedores
    ****Nome do Método:** ExecuteWithXmlParams
    **Nome do Processo:** CmpCotacaoComunicarFornecedoresProc

    Esse processo envia - por e-mail, impresso, ou para a Web - as cotações para os fornecedores inclusos na mesma.  O Status da cotação será alterado para **Aguardando Respostas Fornecedores**.
-   **Alterar Cotação
    ****Nome do Método:** SaveRecord
    **Nome do DataServer:** CmpCotacaoData

    Por esse DataServer é possível alterar alguns dados da Cotação. Ele deve ser usado inclusive para Registrar os Orçamentos retornados pelos fornecedores.

    Essa alteração será consistida exatamente como se fosse realizada pela tela.
    **Observação: Não se deve alterar o Status da Cotação por esse processo.** 
-   **Calcular Quadro Comparativo
    ****Nome do Método:** ExecuteWithXmlParams
    **Nome do Processo:** CmpCotCalculoQuadroComparativoProc

    Esse processo executa o cálculo do Quadro Comparativo para definir os vencedores da Cotação. O Status da cotação será alterado para **Negociação da Melhor Oferta**.
-   **Gerar Ordem de Compra
    ****Nome do Método:** ExecuteWithXmlParams
    **Nome do Processo:** CmpOrdemCompraProc

    Esse processo gera a Ordem de Compra para os itens enviados no XML.

    Se gerada a Ordem de Compra para todos os itens da Cotação, seu Status será alterado para **Pedido de Compra**. Caso não se gere para todos os itens, o Status será alterado para **Ordem de Compra Parcialmente Gerada**.
