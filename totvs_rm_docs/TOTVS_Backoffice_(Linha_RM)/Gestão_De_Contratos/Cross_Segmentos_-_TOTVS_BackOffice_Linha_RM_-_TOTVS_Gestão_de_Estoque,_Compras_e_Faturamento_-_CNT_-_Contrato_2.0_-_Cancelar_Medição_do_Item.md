# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Medição do Item

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004564508695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Medi%C3%A7%C3%A3o-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004564508695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Medi%C3%A7%C3%A3o-do-Item)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 18:02

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/29004564482711)
 Tempo aproximado para leitura: **00****:03:00 min
****
Dúvida**Como cancelar uma medição no item do Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

Para a execução do processo selecione o Item do Contrato > Ações Relacionadas > Cancelar Medição:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33888091593239)

O processo de **Cancelar Medição** possibilita o cancelamento da última medição realizada nos itens de contratos selecionados.

**Regras**

-   O cancelamento da medição **só será possível** caso a parcela associada a ela ainda **não tenha sido faturada.**

-   Caso o status da parcela seja **Previsionado**, os valores dos lançamentos financeiros de previsão serão ajustados.

-   Ao realizar o cancelamento, serão atualizados os valores das parcelas e o valor da parcela na aba de identificação dos itens selecionados.

-   Se a data da medição for diferente da data de vencimento da parcela, a data de vencimento da parcela permanecerá com a data da medição após o cancelamento.

-   O registro da medição cancelada será removido do histórico de medição do item.

-   O processo de cancelamento será gravado no histórico de processo.

-   Caso uma parcela previsionada tenha sido inativada através da execução do processo de gerar medição, e o seu previsionamento tenha sido excluído, o processo de Cancelar Medição não irá gerar novamente a previsão dessa parcela. Nesse caso, será necessário que o usuário execute o processo de Gerar Previsão para reativá-la.


**Saiba mais:**

**[02\. Contratos 2.0 | Processos | Medição](https://tdn.totvs.com/pages/viewpage.action?pageId=938330369#ProcessosMedi%C3%A7%C3%A3o-65849612)**
