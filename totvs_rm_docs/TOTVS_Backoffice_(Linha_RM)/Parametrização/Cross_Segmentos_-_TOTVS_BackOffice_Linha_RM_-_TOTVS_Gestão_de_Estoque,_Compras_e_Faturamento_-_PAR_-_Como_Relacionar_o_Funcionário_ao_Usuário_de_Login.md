# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Relacionar o Funcionário ao Usuário de Login no Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025696533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Relacionar-o-Funcion%C3%A1rio-ao-Usu%C3%A1rio-de-Login-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025696533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Relacionar-o-Funcion%C3%A1rio-ao-Usu%C3%A1rio-de-Login-no-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:46

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/26277136519575)
 Tempo aproximado para leitura: 00:02:00min**

**Dúvida**Como relacionar o Funcionário ( Vendedor/Comprador ) ao usuário logado na aplicação ao incluir um movimento?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

1.  Acesse menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Selecione o tipo de movimento a ser parametrizado com um duplo clique > na Etapa **Mov - Tab - Funcionário** e marque a flag **Relacionar Funcionário 1 ao Usuário de Login**.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277136523031)



2.  Acesse menu Cadastros > Funcionários (o nome deste cadastro é definido pela empresa), encontre o cadastro do Vendedor/Comprador e preencha o campo **Identificador da Pessoa**.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277163756439)



3.  Edite o cadastro da Pessoa e informe o **Código de Usuário**, conforme exemplo abaixo:

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277163760535)



4.  Ao incluir o movimento, o funcionário relacionado ao usuário de login será preenchido automaticamente na aba Identificação > Tabelas.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277136540183)




**Complementar:**

-   Essa parametrização preencherá automaticamente também o campo **Funcionário Responsável pela Cotação** ao incluir uma nova cotação.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277136548247)
