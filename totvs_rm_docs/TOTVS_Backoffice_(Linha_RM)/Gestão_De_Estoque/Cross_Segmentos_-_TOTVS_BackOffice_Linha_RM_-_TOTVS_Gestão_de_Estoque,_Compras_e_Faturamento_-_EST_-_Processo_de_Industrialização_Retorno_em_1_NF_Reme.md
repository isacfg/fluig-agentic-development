# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Processo de Industrialização Retorno em 1 NF Remetente

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4415450241943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Processo-de-Industrializa%C3%A7%C3%A3o-Retorno-em-1-NF-Remetente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4415450241943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Processo-de-Industrializa%C3%A7%C3%A3o-Retorno-em-1-NF-Remetente)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
> **Data:** 9 de abril de 2025 às 15:47

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:06:00min**

**Dúvida**Como realizar o processo de **Industrialização Retorno em 1 NF Remetente** pelo Módulo Gestão de Estoque, Compras e Faturamento.
**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**

Neste processo, consideramos que somente a **Empresa Remetente** possui o ERP RM e esta não exerce atividades industriais. Esta empresa também, **NAO** **poderá** **controlar estoque de** **serviços** **no sistema**.

![imagem1.bmp](https://tdn.totvs.com/download/attachments/63276243/imagem1.bmp?version=1&modificationDate=1371559716000&api=v2)

A empresa remetente da operação de industrialização irá incluir um movimento de saída **‘Remessa para Industrialização’** para controle do estoque COM Terceiros e regularização fiscal e contábil da operação. Este movimento irá **aumentar** o estoque **COM Terceiros**, sem interferir no estoque total de propriedade da empresa (Saldo Atual). Consideramos que o estoque COM Terceiros é um estoque indisponível para movimentações de saídas, até que seja lançado o retorno do insumo. O valor financeiro do estoque COM Terceiros será calculado com base no custo médio dos insumos já registrados no sistema.

A empresa que efetuar a industrialização poderá enviar o produto industrializado (PI), cobrar o serviço de industrialização e devolver simbolicamente a matéria prima utilizada no processo de industrialização em uma única nota fiscal (1 NF) ou em duas notas fiscais (2 NF). Descreveremos a seguir o processo com o retorno da industrialização em uma única nota fiscal (1 NF).

Ao receber a nota fiscal de industrialização efetuada por outra empresa (que conterá o retorno simbólico da matéria prima e a cobrança do serviço), a empresa remetente irá incluir um movimento de entrada **‘Industrialização Efetuada por Terceiros’** através de um processo específico para este tipo de operação – Retorno Industrialização Efetuada por Terceiros – Em uma única NF. Neste processo serão selecionadas as notas fiscais de remessa para industrialização emitidas pela empresa cujos insumos ainda não retornaram, seja parcial ou total. Em seguida será solicitado alguns dados referente ao produto industrializado pelo terceiro, para que seu estoque seja atualizado. Após confirmar essas opções, será aberta a edição do movimento de **‘Industrialização Efetuada por Terceiros’** com os insumos selecionados anteriormente e as respectivas quantidades pendentes de retorno. Neste momento o usuário poderá alterar a quantidade retornada e preencher os dados fiscais da operação se estes não estiverem parametrizados no tipo de movimento. Deverá incluir o serviço referente a cobrança da industrialização com respectivo CFOP. Ao finalizar a inclusão desse movimento, o estoque COM Terceiros dos insumos enviados para o processo de industrialização será afetado (diminuir), conforme parametrizado no tipo de movimento. Consequentemente o estoque de propriedade da empresa (Saldo Atual) dos insumos também serão afetados (diminuir), conforme parametrizado no tipo de movimento.

**Bloco K
**O processo de industrialização descrito acima também se destinará a disponibilizar ao serviço do SPED Fiscal as informações necessárias para geração dos registros **K250** e **K255** do Bloco K.

Para maiores informações de como realizar a parametrização dos Tipos de Movimento clique [Aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=63276243)

Para o detalhamento do processo clique [Aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=74646698)
