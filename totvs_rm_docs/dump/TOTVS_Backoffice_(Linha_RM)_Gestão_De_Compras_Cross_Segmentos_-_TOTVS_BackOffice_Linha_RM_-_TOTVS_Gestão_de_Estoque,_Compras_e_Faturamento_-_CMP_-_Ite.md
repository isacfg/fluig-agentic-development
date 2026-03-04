# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Item não exibido durante a inclusão da Cotação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350888-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Item-n%C3%A3o-exibido-durante-a-inclus%C3%A3o-da-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350888-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Item-n%C3%A3o-exibido-durante-a-inclus%C3%A3o-da-Cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 15 de agosto de 2025 às 12:25

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/34209161741719)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência
**

Foi incluída Solicitação de Compras com um ou mais itens, porém estes não estão sendo apresentados no Assistente de Cotação para criação da mesma.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34209186349591)


**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.82.

**Possíveis Causas
**

Item não é apresentado na inclusão da cotação:

1.  O movimento não está parametrizado como **Solicitação de Compras;**
2.  O movimento já está parametrizado como Solicitação de Compras, porém seu status está como **Normal;
    **
3.  O movimento trabalha com **aprovação** na Solicitação de Compras ou aprovação por **Workflow** e o mesmo não está aprovado;
4.  O Funcionário 1 **informado no movimento** de Solicitação de Compras é diferente do usuário responsável pela **Cotação;**
5.  Parâmetro **Carrega solicitações após filtro** está marcado;
6.  O **Item no Movimento** de **Solicitação de Compras** está **Parcialmente Recebido**;
7.  A Solicitação de Compras **já gerou outra cotação.

    **

**Solução
**

Abaixo as respectivas soluções de acordo com as causas:

1.  Acesse os parâmetros do movimento de Solicitação de Compras, e na etapa **Compra/Venda - Outros dados** parametrize o Tipo de Movimento de Compra = **Solicitação de Compras**:**

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34209186351383)


    **
2.  Verifique se o status do movimento está como **Normal:

    **
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34209161745431)


    Se o tipo do movimento já está parametrizado como Solicitação de Compra, porém seu status está como Normal, acesse os parâmetros do tipo de movimento, e na etapa **Compra/Venda - Características** marque a flag **Gera Movimento de Compra:
    **
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34209161746839)


    Após a parametrizado, o movimento deve ser regravado para atualização de seu status;


3.  Aprovar o movimento. Verificar se o mesmo possui registro na TMOVAPROVA e se o seu tipo de aprovação é **Aprovação na Solicitação de Compras** ou **Aprovação por Workflow;

    **
4.  Informar dentro da Cotação o mesmo funcionário que foi incluído na Solicitação de Compras ou então limpar o funcionário 1 da Solicitação de Compras;


5.  Acesse os parâmetros da Cotação > Etapa Definições Gerais 2/6 e verifique se a flag **Carregar Solicitações após Filtro** está marcada no escopo da cotação e no escopo da filial:
    **
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34209161747863)

    **
    Preencha um dos campos de filtros na tela **Adicionar filtro para produtos** que retorne o item desejado e clicar no botão **Atualizar Agora;**Caso não queira utilizar o parâmetro, desmarque.
6.  Executar o processo **Concluir Pedido** na Solicitação de Compras Parcialmente Recebida e incluir outra **Solicitação de Compras** para o restante do item a ser cotado.
    Documentação sobre o [Processo Concluir Pedido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035469033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Processo-Concluir-Pedido).


7.  Verifique na aba Cotação da Rastreabilidade do movimento se o mesmo já foi vinculado a outra cotação:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/34209161749527)


    Quando uma solicitação já possui vínculos com outra cotação, a mesma não será apresentada para execução do processo novamente.
    Documentação sobre [Como Rastrear Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/30203205414551-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Rastrear-Movimentos).

**Importante
**

Sempre que for alterar alguma parametrização da cotação **(Gestão de compras | Cotação)**, verificar a parametrização Geral **(em caso de não informar uma filial na Cotação)**, e também a parametrização por filial dentro do parâmetro **Definição de Escopo – Filial (no caso de informar uma filial na cotação)**.

Saiba mais: [Cotação (Compras)](https://tdn.totvs.com/pages/releaseview.action?pageId=423938220)
