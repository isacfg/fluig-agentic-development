# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Quantidade máxima de itens no faturamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403911931415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quantidade-m%C3%A1xima-de-itens-no-faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403911931415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quantidade-m%C3%A1xima-de-itens-no-faturamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de abril de 2025 às 12:19

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31583177424919)**Tempo aproximado para leitura: **00:02:00min**

**Ocorrência
**

Ao realizar Faturamento/Recebimento de um Movimento, é exibido a seguinte mensagem: **Quando configurada a edição de meios de pagamentos no tipo de movimento de destino de um faturamento, o número máximo de itens deste deve ser maior ou igual ao do tipo de movimento de origem.**

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4403905374231)

**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
**Causa
**

Essa mensagem ocorre quando o movimento destino esta parametrizado com a edição de **meios de pagamentos**  e o **número máximo de itens** deste movimento está **inferior** ao da origem. 

**Solução**

1.  Analise a quantidade máxima de itens no movimento de origem. Para isso, acesse o menu **Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento** > Localize o tipo de movimento **ORIGEM** e avance até a etapa **Item - Identificação 1/2**:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583153991703)



2.  Acesse o movimento **DESTINO**, etapa **Item - Identificação 1/2** e parametrize o movimento com a quantidade máxima de itens, **igual ou superior** ao movimento de origem:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31583153994135)


Após os procedimentos realizados, tente novamente o faturamento/recebimento.

Caso encontre dificuldades para localizar os parâmetros do tipo de movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento).
