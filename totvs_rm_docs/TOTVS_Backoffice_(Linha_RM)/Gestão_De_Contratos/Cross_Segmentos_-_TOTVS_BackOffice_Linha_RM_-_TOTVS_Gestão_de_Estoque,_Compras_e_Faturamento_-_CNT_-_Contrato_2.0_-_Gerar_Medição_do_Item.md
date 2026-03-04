# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Medição do Item

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004243416343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Medi%C3%A7%C3%A3o-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004243416343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Medi%C3%A7%C3%A3o-do-Item)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 18:01

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/29004243394711)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como gerar medição no item do Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

O processo de **Gerar Medição** do item de contrato, tem como objetivo realizar uma nova medição de **Valor** ou **Quantidade**, de acordo com o tipo de faturamento definido na identificação do item. Desta forma, caso um item tenha seu tipo de faturamento como Medição de Quantidade por exemplo, será realizado uma medição de quantidade pelo processo, e vice-versa.

Para a execução do processo selecione o Item do Contrato > Ações Relacionadas > Gerar Medição:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33888016012823)

**Medição para Um Único Item**

Caso o usuário selecione apenas um item, o processo Gerar Medição será habilitado. Nesse caso, ao invés de um grid, serão apresentados campos de preenchimento para a criação da medição do item selecionado.


**Medição para Múltiplos Itens**

Ao selecionar mais de um item, o processo Gerar Medição Múltiplos Itens é habilitado, permitindo a geração de uma medição para cada item selecionado. Neste processo, será apresentado um grid contendo os itens passíveis de medição, tanto por quantidade quanto por valor.

-   Para os itens de medição por valor, a quantidade aparecerá fixada em 1 na grid. Independentemente de edições neste campo, para medições por valor, a quantidade considerada será sempre 1.
-   Nos itens de medição por quantidade, o campo de valor não será preenchido na grid e não será considerado pelo processo, já que o valor atualizado do item será calculado durante a execução do processo.

**Regras**

-   **Medição de Quantidade:** O valor da medição corresponderá ao valor do item;
-   **Medição de Valor:** A quantidade do item na medição será de uma unidade.
-   **Vinculação da Medição:** A medição será vinculada a uma parcela sequencialmente. Caso o valor medido seja diferente do valor da parcela, ela será ajustada e as parcelas subsequentes recalculadas.

**Parâmetros comuns a todos os tipos de medição**

-   **Item:** Número sequencial do item, no qual será realizada a medição. (Disponível apenas na Geração de Medição Múltiplos Itens)

-   **Produto/Serviço:** Produto ou serviço, no qual será realizada a medição. (Disponível apenas na Geração de Medição Múltiplos Itens)

-   **Unidade:** Unidade do produto ou serviço, no qual será realizada a medição. (Disponível apenas na Geração de Medição Múltiplos Itens)

-   **Tipo:** Tipo de medição (valor/quantidade). (Disponível apenas na Geração de Medição Múltiplos Itens)

-   **Data:** Data em que a medição foi realizada.

-   **Quantidade**: Quantidade medida.

-   **Valor**: Valor medido.

-   **Justificativa:** Descrição sobre a medição realizada.

-   **Município**: Município em que foi realizada a medição.

-   **UF:** Estado em que a medição foi realizada.

-   **Serviço:** Código do serviço.


**Saiba mais:**

**[02\. Contratos 2.0 | Processos | Medição](https://tdn.totvs.com/pages/viewpage.action?pageId=938330369)**
