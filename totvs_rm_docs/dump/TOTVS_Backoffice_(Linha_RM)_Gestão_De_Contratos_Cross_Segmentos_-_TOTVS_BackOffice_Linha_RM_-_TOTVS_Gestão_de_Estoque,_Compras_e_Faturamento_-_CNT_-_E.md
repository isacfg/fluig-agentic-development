# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Erro: O valor total das medições do item é maior que o seu valor total

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24295314663831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Erro-O-valor-total-das-medi%C3%A7%C3%B5es-do-item-%C3%A9-maior-que-o-seu-valor-total](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24295314663831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Erro-O-valor-total-das-medi%C3%A7%C3%B5es-do-item-%C3%A9-maior-que-o-seu-valor-total)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 19 de fevereiro de 2025 às 10:22

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24295331025431)
 Tempo aproximado para leitura: **00:02:00 min

****Ocorrência**Ao tentar incluir uma nova Medição no Item do Contrato é apresentado o erro: **O valor total das medições do item é maior que o seu valor total.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24295314646167)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Essa mensagem de erro é apresentada pois na tentativa de incluir uma nova Medição, ela está sendo preenchida com um Valor ou Quantidade superior ao que foi informado nos campos de **Valor Total** e **Quantidade** preenchidos na inclusão deste Item, preenchidos na aba Identificação > Cabeçalho no item do Contrato

**Exemplo:**

Para melhor entendimento, no exemplo abaixo foi incluído um Contrato de Medição que possui apenas 1 Quantidade e tem seu **Valor Total = 100,00:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24295314648087)

Nesse mesmo Contrato já foram faturadas 3 medições, que somando seus valores **28 + 19 + 37 = 84** restantes.Portanto, nesse Contrato ainda pode ser incluídas medições cujo valor não ultrapassem **16**, pois: **100 - 84 = 16.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24296056195095)

Ao clicar no ícone de Incluir uma nova Medição, a mesma será preenchida automaticamente demonstrando o valor que ainda resta nesse item para Faturamento. Se você preencher um valor **superior a esse limite**, apresentará o erro conforme vemos abaixo:

Lembrando que o limite do Valor que ainda está disponível nessa Medição é **16**, foi incluída uma nova Medição com Valor = 20 ( ultrapassando o Valor Total ).

Ao tentar salvar esse Contrato, apresentou o erro desta documentação:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24295331030167)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24295314651031)

**Solução:**

1.  Incluir a nova Medição do Item com o Valor correto que ainda esteja disponível no item. ( Se houver valor restante );
2.  Acessar a aba Informações Adicionais > Aditivo, e realizar a inclusão de um Aditivo que seja para Valor ou Quantidade *( dependendo do Tipo de Medição que esteja utilizando )* com um valor que seja suficiente para atender a necessidade da medição.
    **Obs**: Ao incluir um aditivo, este será apresentado na aba Identificação > Cabeçalho, nos campos **Aditivo-Valor** ou **Aditivo-Qtde**, e este valor será somado ao valor do item.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24296056201623)
