# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Produto Não Permitido para o Tipo de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008502908-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Produto-N%C3%A3o-Permitido-para-o-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008502908-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Produto-N%C3%A3o-Permitido-para-o-Tipo-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 14 de abril de 2025 às 12:48

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28948392987543)
**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**Ao salvar um movimento a mensagem abaixo é apresentada impedindo o processo de inclusão do movimento: **Item Produto do Movimento: Produto Não permitido para o tipo de movimento.**

![Imagem](http://tdn.totvs.com/download/attachments/274629572/image2017-5-19%2014%3A16%3A28.png?version=1&modificationDate=1495217795000&api=v2)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Gestão de Estoque, Compras e Faturamento - Todas as versões.
**
Causa
**Confira abaixo as opções possíveis para que a mensagem aconteça:

1.  O tipo de movimento está parametrizado para um tipo de item **(Produto ou Serviço)**, mas o item informado na movimentação é incompatível com o parâmetro;
2.  No tipo de movimento o parâmetro **Visualizar apenas produtos relacionados com o cliente/fornecedo**r está marcado, mas o produto informado no movimento não tem vínculo com o cliente/fornecedor. 
3.  O produto não é de **último nível**;
4.  O produto está **inativo**;
5.  É um produto base para **grade numerada**;
6.  Em seu cadastro o produto está marcado como **EPI - Equipamento de Proteção Individual**;

**Solução
**Abaixo, estão listadas as possíveis soluções para o erro em questão:

1.  Deverá utilizar um item de movimento **compatível** com a parametrização, ou seja, se a parametrização **permite apenas produto** terá que selecionar um **produto**. Se a parametrização permite **apenas Serviço**, deverá incluir um **serviço**. Outra possível solução seria editar o cadastro do produto e alterar o tipo do produto, porém, esta alteração pode gerar impactos e deverá ser minuciosamente analisado antes de aplicar.
    Acesse o menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Selecione a classificação do seu movimento > **etapa Item - Identificação 1/2**, campo Tipo dos Itens:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948407549719)



2.  Se o parâmetro **Visualizar apenas produto relacionados com o Cliente / Fornecedor** estiver marcado na **etapa Item - Identificação 2/2**, deverá vincular o produto ao cliente/fornecedor utilizado na movimentação ou se for o caso desmarcar o parâmetro conforme necessidade.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948407550359)



3.  Dentro do cadastro do produto na aba Identificação deverá marcar a flag de **Último Nível** se realmente necessário a utilização deste no movimento;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948393001623)



4.  Dentro do cadastro do produto na aba Identificação deverá desmarcar a flag de **Inativo** se realmente necessário;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948407558551)



5.  Dentro do cadastro do produto na aba Identificação deverá verificar se a flag **Base para Grade Numerada** está marcada. Caso sim, este produto realmente não pode ser movimentado pois o que deverá ser utilizado na movimentação são os produtos de grade desta base;


6.  Dentro do cadastro do produto na aba Integração, deverá verificar se a flag **Integrado a Equipamento de Proteção Individual (EPI)** está marcada. Está flag somente pode ser Marcada/Desmarcada pelo processo **Vincular/Desvincular Produto a EPI;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28948407559575)
    **
