# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Local de Estoque não é apresentado no Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Local-de-Estoque-n%C3%A3o-%C3%A9-apresentado-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Local-de-Estoque-n%C3%A3o-%C3%A9-apresentado-no-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:21

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31583183250327)**Tempo aproximado para leitura: **00:02:00min**

**Ocorrência
**

Local de Estoque não é apresentado na inclusão do movimento.


**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa**

1.  O Local de Estoque informado **não é de último nível**, ou seja, não esta compatível com a máscara do Local de Estoque;
2.  O Local de Estoque **não esta cadastrado** para a filial da movimentação;
3.  O parâmetro **Usar Local Único** esta marcado e não existe pelo menos um Local de Estoque para a filial do movimento;
4.  O campo local (**TMOV.CODLOC**) não é apresentado na movimento.
5.  O Movimento está parametrizado para usar **Itens = Serviços**.
6.  Movimento está parametrizado para utilizar Local de Estoque por **Item**;

**Solução**

1.  Verifique e corrija, se for o caso, para que o Local de Estoque seja de último nível e compatível com a máscara do Local de Estoque (Para visualizar a máscara parametrizada acesse: menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Parâmetros Gerais > Tabelas > Local de Estoque);


2.  Acesse o menu Cadastros > Locais de Estoque > Incluir e crie um novo preenchendo o código da filial utilizada no movimento.
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583193206551)



3.  Se o parâmetro **Usar Local Único** estiver marcado, cadastre um local para cada filial (Parâmetro localizado no menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Parâmetros Gerais > Tabelas > Local de Estoque);


4.  Quando o parâmetro **Usar Local Único** está parametrizado, o campo Local de Estoque **(TMOV.CODLOC)** não será apresentado no movimento;


5.  Nos parâmetros do tipo de movimento, etapa **Item - Identificação 1/2**, o campo **Tipo dos Itens** deve estar parametrizado como **Produto** ou **Ambos**.
    Caso esteja parametrizado como Serviço o campo Local de Estoque (TMOV.CODLOC) realmente não será apresentado na movimentação;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583193207831)



6.  Nos parâmetros do movimento, etapa **Estoque - Estoque 2/3** está desmarque a flag **Local de Estoque por Item:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583183257111)


    Com a flag marcada o Local de Estoque não será apresentado no cabeçalho do Movimento, e sim do Item:
    Movimento sem Local de Estoque:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583183259031)


    Item com Local de Estoque:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583183261463)
