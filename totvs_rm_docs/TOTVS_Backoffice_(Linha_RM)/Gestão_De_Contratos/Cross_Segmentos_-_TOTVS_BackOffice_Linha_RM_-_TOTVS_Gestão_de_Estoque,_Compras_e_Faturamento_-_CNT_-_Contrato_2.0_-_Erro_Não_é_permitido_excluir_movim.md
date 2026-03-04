# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Erro: Não é permitido excluir movimento originado de Faturamento de Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33822498226967-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Erro-N%C3%A3o-%C3%A9-permitido-excluir-movimento-originado-de-Faturamento-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33822498226967-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Erro-N%C3%A3o-%C3%A9-permitido-excluir-movimento-originado-de-Faturamento-de-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 25 de setembro de 2025 às 15:25

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/33822519600535)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**
Ao tentar cancelar ou excluir movimentos é apresentado o erro: **Não é permitido excluir movimento originado de Faturamento de Contrato. Para excluir esse Movimento, execute o processo de Cancelar Faturamento de Contrato.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35200389406103)


**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Causa** 
A mensagem é apresentada pois o movimento tem origem de um Contrato 2.0.

**Solução**
O procedimento correto é selecionar o contrato que originou o movimento e selecionar o menu Processo > Cancelar Faturamento de Contrato. Não será realizada a exclusão ou o cancelamento do movimento diretamente pelo tipo de movimento.

Siga os passos para solução:

1.  Caso não saiba qual é o contrato de origem, selecione o movimento > Anexos > Dados Contrato Origem.
    Nesse anexo apresentado será apresentado as informações do Contrato. ([Documentação sobre o anexo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29005359086999-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Anexo-Dados-Contrato-Origem))

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33822612322199)

     
2.  Após identificar o contrato, acesse o menu de Contratos 2.0 > Selecione o contrato informado no anexo > Ações Relacionadas > Cancelar Faturamento Contrato. ([Documentação sobre o processo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28947616324247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Faturamento))

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33822519607959)


    Ao finalizar o processo, os movimentos serão desfeitos.
