# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Alterar Status

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28949130017687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Alterar-Status](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28949130017687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Alterar-Status)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 17:57

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28949127591319)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como alterar status no Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

Para a execução do processo selecione o Contrato > Ações Relacionadas > Alterar Status Contrato:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887880990999)


O contrato pode ter seu status definido no momento da criação, no entanto, após iniciar as operações e processos com o contrato a alteração de status **somente** ser feita através do processo **Alterar Status Contrato.**

Para a execução deste processo é necessário, selecionar os contratos desejados e definir o parâmetro abaixo:
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28949127593367)

1.  **Data:** Informe a data real que a mudança do status do contrato ocorreu.
2.  **Novo Status do contrato:** Informe o novo status do contrato.
3.  **Motivo:** Informe o motivo da alteração do status

Após o preenchimento, ao executar o processo, o status dos contratos será atualizado. Dependendo da parametrização do novo status, ações adicionais podem ser executadas automaticamente.


O processo de Alteração de Status Contrato altera o status de todos os contratos selecionados, se:

-   Se o novo status estiver definido como **Cancelamento** marcado, além da alteração do Status do Contrato serão realizados automaticamente as ações:
    1\. **Exclusão dos lançamentos financeiros** de Previsão Financeira, caso existam.
    2\. **Exclusão dos movimentos de faturamento**, desde que ainda possam ser excluídos (ou seja, não tenham dado continuidade a outros fluxos de movimentação).

**Observação**

-   Esse processo permite alterar o status de um ou mais contratos simultaneamente.
-   Se o contrato teve seu status anterior definido como "Cancelamento" e deseja-se que o novo status volte a gerar lançamentos de previsão e faturamento, será necessário realizar manualmente os processos correspondentes.

**Status do Contrato**

O status do contrato possui duas parametrizações importantes, que são **Faturamento** e **Cancelamento**.

Cada uma dessas opções pode estar marcada ou desmarcada.

O cadastro de Status de Contrato é acessível através do menu Contratos > Tabelas de Contrato > Status de Contrato. 
Mais Informações: **[Status de Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23397128231191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Status-de-Contrato)**

**Motivo**

Informação sobre o motivo da alteração o status do contrato.

O cadastro de Motivo é acessível através do menu Contratos > Tabelas de Contrato > Motivos de Cancelamento.

Mais informações: **[Motivos de Cancelamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23400765765143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Motivos-de-Cancelamento-no-Contrato)**

**Saiba mais:**

**[03\. Contratos 2.0 | Processos | Alterar Status Contrato](https://tdn.totvs.com/display/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Alterar+Status+Contrato)**
