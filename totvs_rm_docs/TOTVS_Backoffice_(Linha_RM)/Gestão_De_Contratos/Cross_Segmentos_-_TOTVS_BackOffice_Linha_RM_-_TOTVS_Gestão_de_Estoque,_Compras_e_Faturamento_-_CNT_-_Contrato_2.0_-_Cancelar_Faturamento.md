# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 -  Cancelar Faturamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28947616324247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28947616324247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Faturamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 17:33

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28947664747415)
 Tempo aproximado para leitura: **00:03:00 min

****Dúvida**Como cancelar o faturamento de um Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

Esse processo possibilita o cancelamento do faturamento das parcelas de um ou mais contratos selecionados, nos modelos:

-   Periódico
-   Medição por Valor
-   Medição por Quantidade
-   Arrendamento Mercantil

Para a execução do processo selecione o contrato Faturado > Ações Relacionadas > Cancelar Faturamento Contrato.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887258824983)

Para a execução deste processo é necessário a definição dos parâmetros abaixo.

1.  **Intervalo de faturamento (data inicial e final)**: Ao informar o intervalo serão excluídos todos os movimentos vinculados à parcelas com status de faturamento **Faturado** que possuem data de vencimento dentro do intervalo definido.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28947664751767)



2.  **Cancelar Todos os Faturamentos do Contrato:** Ao selecionar esta opção, todos os movimentos vinculados à parcelas status de faturamento **Faturado** serão excluídos.
    Esta opção tem **maior prioridade** do que o anterior, ou seja, caso o usuário selecione que deseja cancelar todo o faturamento do contrato e também informe o intervalo de cancelamento, a seleção deste componente irá prevalecer e desta forma todos os movimentos vinculados à parcelas serão excluídos.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28947664755607)


Esse processo exclui os movimentos gerados a partir do Faturamento, com **Status** **Pendente** para movimentos do tipo **1.1, A Faturar** para **2.1, Faturado** para **2.2** e, altera o status das parcelas afetadas para **A Faturar** permitindo assim que novos faturamentos sejam gerados.


**Observação**

1.  Caso seja parametrizado na etapa Faturamento do Item do Contrato, um tipo de movimento **2.2**, o Status do movimento gerado por padrão é **Faturado**, consequentemente o cancelamento do faturamento das parcelas poderá ser executado com sucesso.
2.  É possível verificar se foi executado o processo através da opção Ações Relacionadas > Acompanhar Processo. Será gerado um log com as informações:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887256216087)



**Saiba mais:**

**[03\. Contratos 2.0 | Processos | Faturamento](https://tdn.totvs.com/display/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Faturamento#processos_faturamento-619168514)**
