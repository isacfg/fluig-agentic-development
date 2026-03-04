# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Aditivo do Item

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003661265303-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Aditivo-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003661265303-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Aditivo-do-Item)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 18:01

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/29003679885719)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como cancelar o aditivo gerado no Contrato 2.0?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.


**Solução**

Para a execução do processo selecione o Item do Contrato > Ações Relacionadas > Cancelar Aditivo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887962086807)

Esse processo possibilita o cancelamento do último aditivo realizado nos itens de contrato selecionados.

**Regras**

**Cancelamento de aditivo de quantidade e valor:**

Restrições por tipo de faturamento do item selecionado:

-   **Periódico**: só será possível cancelar o aditivo, caso nenhuma parcela a partir da data de vigência do aditivo tenha sido faturada.
-   **Aditivo de valor em Medição (Quantidade e Valor)**: O cancelamento irá retirar o valor que foi calculado para o aditivo das parcelas que ainda não foram medidas. Se não houver saldo suficiente para isso o cancelamento não será possível de ser feito.
-   **Aditivo de quantidade em Medição de Quantidade:** O cancelamento só será possível de ser feito se houver saldo disponível para efetuar o cancelamento, ou seja, caso a quantidade aditiva tenha sido comprometida por alguma medição não será possível de realizar o cancelamento.

Caso o status da parcela seja **Previsionado** os valores da previsão serão ajustados.


**Cancelamento de aditivo de prazo:**

Restrições por tipo de faturamento do item selecionado:

-   **Faturamento Periódico**: O cancelamento só será possível se nenhuma parcela gerada pelo aditivo tiver sido faturada.
-   **Faturamento por Medição (Quantidade e Valor)**: O cancelamento só será possível se nenhuma parcela gerada pelo aditivo tiver sido medida.
-   **Parcelas Normais do Contrato**: Se as parcelas normais do contrato estiverem medidas e, ao cancelar o aditivo de prazo, houver saldo a ser medido, mas não houver mais parcelas, uma nova parcela será adicionada. Esta nova parcela receberá como valor o que falta ser medido no item do contrato.

**Efeitos do Cancelamento**

-   Atualização de Valores → Ao executar o cancelamento, os valores das parcelas, dos itens e do contrato selecionado serão atualizados conforme necessário.
-   Histórico de Aditivos → O registro do aditivo cancelado será removido do histórico de reajuste do item.
-   Histórico de Processos → O processo de cancelamento será gravado no histórico de processos.

**Observação**

-   Caso o item possua mais de um aditivo vinculado, o processo de cancelamento será realizado individualmente, iniciando pelo aditivo mais recente.

**Saiba mais:**

**[02\. Contratos 2.0 | Processos | Aditivo](https://tdn.totvs.com/display/LRM/02.+Contratos+2.0+%7C+Processos+%7C+Aditivo#Aditivo--2027154753)**
