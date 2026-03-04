# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipo de Movimento Não Apresentado no Item de Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345267-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Movimento-N%C3%A3o-Apresentado-no-Item-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345267-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Movimento-N%C3%A3o-Apresentado-no-Item-de-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 16:45

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23377585569175)**Tempo aproximado para leitura: **00:02:00min**

**Ocorrência
**Ao tentar informar um Tipo de Movimento na aba Condições Gerais do Item, no Parâmetros do Contrato ou no Faturamento por Lote, este não é apresentado.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23391042814359)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 

1.  O usuário não tem permissão no tipo de movimento;
2.  O tipo de movimento **NÃO** está parametrizado com a edição de numeração como **MOSTRA**;
3.  Natureza do Contrato/Item de Contrato é incompatível com o tipo de movimento que deseja informar.

**Solução**

1.  Acesse o cadastro do usuário que não visualiza as movimentações e verifique se este possui as devidas permissões no movimento desejado.
    Caminho: Módulo Serviços Globais > Segurança > Usuários > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione o Usuário > Anexos > Permissões por Tipo de Movimento. [Clique aqui caso encontre dificuldades nesse processo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-atribuir-permiss%C3%A3o-ao-usu%C3%A1rio-em-Tipo-de-Movimento)

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23377585577239)

2.  Acesse os parâmetros do tipo de movimento no caminho: Menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Selecione a classificação do seu movimento > Etapa Mov - Identificação, e parametrize o campo Edita Numeração = Mostra. [Clique aqui caso encontre dificuldades nesse processo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-atribuir-permiss%C3%A3o-ao-usu%C3%A1rio-em-Tipo-de-Movimento)

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23377585591959)



3.  Informar um tipo de movimento compatível com a natureza do Contrato/Item de contrato, ou seja, se natureza **Compra** informar um **tipo de movimento de Entrada**, se natureza **Venda** informar um **tipo de movimento de Saída.**
