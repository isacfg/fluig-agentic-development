# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento -  CNT - Faturamento de Itens Periódicos Sem Vigência Definida

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408917896599-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Faturamento-de-Itens-Peri%C3%B3dicos-Sem-Vig%C3%AAncia-Definida](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408917896599-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Faturamento-de-Itens-Peri%C3%B3dicos-Sem-Vig%C3%AAncia-Definida)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 17:33

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00****:04:00min**

**Dúvida**
É possível cadastrar itens de contrato sem data fim?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**É possível sim e para isso, siga os passos abaixo:

**1.** Ao incluir o item de contrato, este deverá ser do tipo **Periódico** no campo **Tipo de Faturamento** e informar a Condição de Pagamento para o campo **Período de Faturamento.** Já o campo **Qtde. de Faturamento** não deverá ser preenchido.

As demais informações devem ser preenchidos conforme a regra de negócio da empresa.

![Screenshot_6.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408917696791/Screenshot_6.png)

Por se tratar de um Item de Contrato sem vigência definida o Valor Total do Item irá considerar sempre **Quantidade \* Preço Faturamento + Aditivos**.

**2.** O faturamento deste tipo de item, só deve acontecer pelo menu Faturamento por Lote, pois o ícone de **Faturar Contrato** da visão de Contrato considera o campo Qtde. de Faturamento.

![Screenshot_3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408917557527/Screenshot_3.png)

Após criar o **Lote de Faturamento** filtrando o contrato desejado, informe o período de vencimento que deseja faturar e em seguida faturar o lote.

![Screenshot_5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408923134487/Screenshot_5.png)

Ao criar o lote atente-se aos dados do contrato para que o sistema consiga identificar o contrato a ser faturado.

![Screenshot_4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408923067287/Screenshot_4.png)

**Informações Adicionais**

-   Após o faturamento do contrato o **Status de Faturamento** será alterado para **Faturado**. Mesmo com este status o sistema não irá impedir de faturar o Item de Contrato para os próximos períodos.

![Screenshot_8.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408917846679/Screenshot_8.png)

-   Por não preencher o campo de Qtde. de Faturamento do Item de Contrato deve-se ficar atento que o valor dos itens já faturados não será igual ao valor do contrato.
-   Para que o contrato deixe de gerar novos faturamentos será necessário alterar o campo **Código do Status** informando um Status cadastrado que possua a flag Faturar desmarcada.

![Screenshot_7.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4408923219607/Screenshot_7.png)
