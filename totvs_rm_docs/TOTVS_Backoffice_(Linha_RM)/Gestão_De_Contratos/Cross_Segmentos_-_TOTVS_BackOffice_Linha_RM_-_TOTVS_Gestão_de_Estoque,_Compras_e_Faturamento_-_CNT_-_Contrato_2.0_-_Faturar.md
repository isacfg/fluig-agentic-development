# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Faturar

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28946751476247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Faturar](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28946751476247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Faturar)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 17:43

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28946787768087)
 Tempo aproximado para leitura: **00:03:00 min

****Dúvida**Como realizar o faturamento do Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

Esse processo possibilita o faturamento das parcelas de um ou mais contratos periódicos, de medição que podem ser por valor ou por quantidade e de arrendamento mercantil.

Para a execução do processo selecione o contrato > Ações Relacionadas > Faturar Contrato.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887236556055)

**Explicação**

Esse processo possibilita o faturamento das parcelas de um ou mais contratos Periódicos ou contratos de Medição que podem ser por Valor ou por Quantidade.
Para a execução deste processo é necessário a definição dos parâmetros abaixo:

**Intervalo de faturamento (data inicial e final):**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28946751456791)

-   Ao informar o intervalo de faturamento serão faturadas todas as parcelas com status de faturamento **A Faturar** que possuem data de vencimento dentro do intervalo definido.
-   Se a parcela é de um contrato de medição, adicionalmente verifica se tem uma medição atrelada a parcela para que ela possa ser faturada.

**Faturar todo o contrato:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28946787775767)

-   Ao selecionar esta opção, **todas as parcelas** do contrato com status de faturamento **A Faturar** serão faturadas.
-   Esta opção tem **maior prioridade** do que o anterior, ou seja, caso o usuário selecione que deseja faturar todo o contrato e também informe o intervalo de faturamento, a seleção deste componente irá prevalecer e desta forma todas as parcelas pendentes serão faturadas.
-   Sendo um contrato de medição, somente as parcelas atreladas a uma medição serão faturadas.

**Cons****i****derações sobre o faturamento**

-   A possibilidade de faturar um contrato está condicionada à configuração de faturamento do status atual do contrato.
-   O status deve estar configurado para permitir faturamento. (Documentação sobre [**Status** **de Contrato**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23397128231191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Status-de-Contrato))

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28946787776535)



-   Caso tente faturar um contrato configurado para um status sem permissão de faturar, nenhum faturamento vai ser realizado, o processo vai falhar e no LOG vai ser indicado o contrato e o fato do status não permitir o faturamento.

Será gerado um movimento para cada parcela do(s) item(s) de contrato (Periódico, Medição por Valor, Medição por Quantidade), e este movimento possuirá apenas um item. As informações do movimento serão definidas de acordo com a seguinte ordem de prioridade:

1.  Informações do item do contrato.
2.  Informações do contrato.
3.  Informações default do movimento.

**Observação**

-   Ao realizar o faturamento de uma parcela do contrato, a previsão financeira vinculada a ele, se existir, vai ser **removida**.

**
Saiba mais:**

**[03\. Contratos 2.0 | Processos | Faturamento](https://tdn.totvs.com/display/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Faturamento#processos_faturamento-528242997)**
