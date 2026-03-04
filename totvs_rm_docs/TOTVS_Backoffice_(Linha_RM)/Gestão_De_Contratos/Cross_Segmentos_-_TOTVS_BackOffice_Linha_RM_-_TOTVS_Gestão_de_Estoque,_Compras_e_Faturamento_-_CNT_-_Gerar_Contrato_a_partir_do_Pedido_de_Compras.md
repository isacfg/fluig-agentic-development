# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Gerar Contrato a partir do Pedido de Compras

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360048551213-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Contrato-a-partir-do-Pedido-de-Compras](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360048551213-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Contrato-a-partir-do-Pedido-de-Compras)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 15:30

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23378628061591)
 Tempo aproximado para leitura: 03:00 min**

**Dúvida**Como gerar contrato a partir de um Pedido de compras?

**Ambiente**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento  – Todas as versões.

**Solução
**Para utilizar o recurso de **Gerar Contrato** é necessário habilitar a permissão para o Tipo de Movimento que irá executar o processo.
Caminho: Módulo **Serviços Globais** > Segurança > Usuários > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione o Usuário > Anexo > Permissão por Tipo de Movimento > Acesse o movimento > habilite a flag **Gerar Contrato.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378653871767)

Para atender as condições desse processo o tipo de movimento deve ser parametrizado da seguinte forma:

1.  O movimento deve ser do tipo **1.1.XX**.
2.  Estar parametrizado como **Pedido de Compra** na Etapa 50 - **Compra/Venda – Outros Dados** campo **Tipo do movimento de Compra**.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378653882135)

3.  O Tipo de Movimento **NÃO** poderá **Afetar Estoque** (nenhum saldo) na Etapa 40 - **Estoque - Estoque 1/3.
    **
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378653889303)



4.  **NÃO** poderá usar **Faturamento Parcial por Valor** (nem por item nem por movimento), Etapa 49 - **Compra/Venda - Características** campo **Efeito no Pedido**.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378653893911)

5.  O parâmetro **Gerar Contrato** deverá ser marcado na Etapa 52 – **Contratos**. Esse parâmetro será responsável por habilitar no menu de Processos da visão do movimento o assistente de Geração de Contrato(s).

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378628102167)


**IMPORTANTE:**

1.  Na visão do tipo de movimento parametrizado para Gerar Contrato selecione o movimento e execute o Processo **Gerar Contrato**. A tela de Edição do Contrato será apresentada com todos os dados carregados do movimento, para que as informações pertinentes ao Contrato sejam informadas.
2.  Caso necessário, é possível agrupar os itens por Cliente/Fornecedor marcando a opção **Agrupar por Cliente/Fornecedor** no Assistente de Geração de Contratos.
3.  Ao salvar o contrato, o pedido de compras ficará **Recebido**.
4.  Será criado o relacionamento entre o movimento e o contrato gerado através da tabela **TITMCNTMOVRELAC**. Esse relacionamento permitirá a rastreabilidade do movimento que deu origem ao contrato e vice-versa.
    A visualização desse relacionamento acontece apenas através da tabela, não existindo interface para consulta.

Para maiores informações sobre o recurso **[clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=423938166).**
