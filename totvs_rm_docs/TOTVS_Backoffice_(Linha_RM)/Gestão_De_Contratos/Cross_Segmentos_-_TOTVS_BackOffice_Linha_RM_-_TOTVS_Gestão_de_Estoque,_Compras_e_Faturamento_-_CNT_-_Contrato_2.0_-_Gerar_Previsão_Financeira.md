# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 -  Gerar Previsão Financeira

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28948399099287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Previs%C3%A3o-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28948399099287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Previs%C3%A3o-Financeira)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 17:55

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28948399077143)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como gerar previsão financeira no Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

Para a execução do processo selecione o Contrato > Ações Relacionadas > Gerar Previsão Financeira:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887856440727)

Esse processo possibilita criar lançamentos de previsão financeira para um ou mais contratos.

Para a execução deste processo é necessário, selecionar os contratos desejados e definir o parâmetro abaixo:

-   **Tipo de Documento de Previsão:** Informe o tipo de documento que será gerado a previsão financeira.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948361520535)


**Dica**

Para que os lançamentos financeiros sejam gerados corretamente, é necessário que todos os campos obrigatórios estejam devidamente preenchidos no contrato e/ou no item do contrato, conforme as regras do módulo de Gestão Financeira da empresa.

Campos que podem ser validados:

-   Conta / Caixa
-   Moeda
-   Classificação Orçamentária / Financeira
-   Centro de Custo
-   Rateio de Centro de Custo

Ao concluir o preenchimento do parâmetro e executar o processo, os lançamentos financeiros serão gerados com base nas parcelas dos itens dos contratos selecionados.

Desta forma, será gerado um lançamento financeiro para cada parcela (**que esteja com status: A Faturar**) dos itens dos contratos selecionados.


**Importante**

1.  Ao realizar o processo, o Status da Previsão Financeira será **Previsionado.**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887856442135)



2.  Não é permitido realizar filtros para itens de contrato e/ou parcelas de um contrato.
3.  O processo será realizado para todas parcelas que estejam com status = **A Faturar** do contrato selecionado.

Quando for gerada alguma previsão para o **contrato** os campos abaixo terão a edição **bloqueada**.

-   Status
-   Natureza
-   Data Contrato
-   Data Início Vigência
-   Data Fim Vigência

Quando foi gerada alguma previsão para o **item do contrato** os campos abaixo terão a edição **bloqueada**.

-   Tipo de Faturamento
-   Produto
-   Unidade
-   Data Início Vigência
-   Data Fim Vigência
-   Quantidade
-   Valor
-   Desconto
-   Despesa
-   Vencimento Imediato
-   Periodicidade
-   Dia Vencimento / Dia da Semana
-   Dia do Primeiro Vencimento / Dia do Segundo Vencimento (Periodicidade = Quinzenal)
-   Nº de Parcela

**Saiba mais:**

[03\. Contratos 2.0 | Processos | Previsão Financeira](https://tdn.totvs.com/pages/viewpage.action?pageId=937708534)
