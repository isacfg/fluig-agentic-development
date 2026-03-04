# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Previsão de Faturamento de Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24007188080663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Previs%C3%A3o-de-Faturamento-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24007188080663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Previs%C3%A3o-de-Faturamento-de-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 19 de fevereiro de 2025 às 11:21

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24007188051095)
 Tempo aproximado para leitura: **00:02:00 min
****
Dúvida**Qual a finalidade do menu Previsão de Faturamento de Contrato?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Explicação**O relatório de Previsão de Faturamento de Contratos, tem por finalidade, exibir as previsões de faturamento de contratos do tipo **Periódico** previamente cadastrados de um determinado período.
Esta funcionalidade está disponível no Menu Contratos > Previsão de Faturamento de Contrato.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24007174401047)

Ao clicar no menu será aberta a seguinte tela:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24007174402455)

**Parâmetros**

**Filial:** Informar a filial na qual se deseja extrair os dados para o relatório de previsão;
**Tipo de Movimento:** Deverá ser marcada essa opção caso o usuário deseje filtrar um determinado tipo de movimento para o relatório a ser gerado;
**Período:** Informar um determinado intervalo de meses, levando em consideração que o mês inicial deverá ser igual ou superior ao mês atual.
**Relatório:** Selecionar o tipo de relatório do RM Reports que será utilizado na geração do mesmo.
Após informar os dados de entrada para geração do relatório, basta clicar em Executar que o relatório será gerado.

**Informações importantes na geração do relatório**

1.  O campo filial informado pelo usuário no preenchimento dos parâmetros de tela;
2.  Os valores de faturamentos devem ser maior que zero;
3.  Período determinado pelo usuário (data inicial e data final). Caso o item não possua data fim de faturamento, ele será também exibido no relatório;
4.  Os itens do contrato deverão estar com os status: **FATURAROUNAO = 1** e **ECANCELAMENTO = 0**, a tabela que contém estes status é a **TSTACNT**. Ela tem relacionamento com a TITMCNT e utiliza o campo CODSTACNT como chave estrangeira.

**Complementar**

O Sistema disponibiliza um relatório padrão para ser utilizado no processo: **NUCREL00041**
O relatório pode ser encontrado no menu Gestão > TOTVS Compartilhamento > Buscar: NUCREL00041 > Selecione o relatório > Download > Importar.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24007188057111)
