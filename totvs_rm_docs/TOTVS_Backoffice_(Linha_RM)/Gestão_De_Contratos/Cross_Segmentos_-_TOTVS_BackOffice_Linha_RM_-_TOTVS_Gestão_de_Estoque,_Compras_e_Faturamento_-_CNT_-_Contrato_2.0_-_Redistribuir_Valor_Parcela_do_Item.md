# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Redistribuir Valor Parcela do Item

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33790887070103-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Redistribuir-Valor-Parcela-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33790887070103-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Redistribuir-Valor-Parcela-do-Item)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 29 de julho de 2025 às 16:56

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/33790907075991)
 Tempo aproximado para leitura: **00:03:00 min**

**Dúvida**
Como Redistribuir o Valor das Parcelas no Contrato 2.0?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir da Versão 12.1.2502

**Solução**
O processo de **Redistribuição dos Valores das Parcelas** do item do contrato tem como objetivo ajustar o valor das parcelas para que as mesmas tenham valores acordados, mesmo que isso não represente uma divisão igual do valor total do item.

Existem contratos Periódicos e de Arrendamento que são negociados com valores diferentes nas parcelas, por exemplo:

Contrato de 36 meses:
Parcela  1 a 6  = 10.000,00
Parcela  7 a 12 = 12.000,00
Parcela  13 a 36 = 15.000,00

Para a execução do processo selecione o Item do Contrato > Ações Relacionadas > Redistribuir Valor Parcela:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33790887056663)


**Parâmetros do Processo**

É necessário que todos os parâmetros sejam informados para que seja possível avançar e executar a Redistribuição de Valores das Parcelas.

A tela será aberta mostrando os seguintes campos:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33790907079575)


Em **Dados do Item** será apresentado o **Número de Parcelas** do item e seu **Valor Total.**

Na tela deste processo é exigido o Número Inicial da Parcela, Número Final da Parcela e Valor da Parcela.

-   **Número Parcela Início:** Define que qual será a primeira parcela a ser afetada pelo valor informado.
-   **Número Parcela Fim:** Define qual será a última parcela a ser afetada pelo valor informado.
-   **Valor Parcela:** Define qual será o valor aplicado na(s) parcelas informadas (início - fim).

⚠️ **Premissas**

O item selecionado para redistribuição das parcelas **não poderá ter nenhum processo aplicado**, nem a nível de item ou contrato, exemplos:

Processos a nível de contrato:

-   Faturar Contrato
-   Gerar Previsão Financeira
-   Alterar Status Contrato (desde que o status seja de cancelado)
-   Entre outros

Processos a nível de item:

-   Gerar Aditivo
-   Gerar Medição
-   Entre outros

**Observação**

-   Para inserir uma nova linha de parcela, selecione o ícone Adicionar.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33790907080599)

     
-   Após editar o número da parcela e valor, ao clicar fora da parcela será apresentado a mensagem "**Distribua todo o saldo antes de avançar na execução do processo!"**;
-   Acompanhe o **Saldo a Distribuir** e **Valor Total Distribuído** abaixo da mensagem. O Processo só poderá ser finalizado quando não houver nenhum saldo ainda a ser distribuído.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33790907082647)

     
-   Toda execução de processo registra no histórico de processos sua execução e parâmetros escolhidos.
-   **Não é possível** executar a redistribuição de valores das parcelas **para mais de um item ao mesmo tempo**.
-   Após a execução do processo o Valor Parcela (campo disponível na aba de identificação do item do contrato) será atualizado para o valor **correspondente ao da última parcela.**
-   Este processo também poderá ser aplicado aos contratos de medição, especialmente em contratos sazonais, nos quais se busca uma maior aderência das parcelas previstas à realidade contratual. Assim, será possível iniciar o contrato com parcelas previstas conforme a necessidade do contrato. No entanto, durante o processo de medição, caso os valores medidos sejam diferentes dos valores inicialmente previstos, o sistema realizará a redistribuição proporcional do saldo restante entre as parcelas.

**Saiba mais**

[03\. Contratos 2.0 | Processos | Redistribuir Valor Parcela](https://tdn.totvs.com/display/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Redistribuir+Valor+Parcela)
