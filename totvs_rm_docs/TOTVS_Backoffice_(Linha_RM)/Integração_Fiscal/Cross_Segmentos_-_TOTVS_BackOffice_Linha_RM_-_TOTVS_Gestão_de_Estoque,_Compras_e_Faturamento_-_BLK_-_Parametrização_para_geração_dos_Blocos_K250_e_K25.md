# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K250 e K255

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022786452-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K250-e-K255](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022786452-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K250-e-K255)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 19 de março de 2024 às 10:52

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:05:00min**

**Dúvida**Como parametrizar o módulo para geração dos **Blocos** **K250** **e** **K255** pelo **Processo de Industrialização COM Terceiros Retorno em 2 NF's (Remetente).

****Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**Neste fluxo, iremos considerar que a **Empresa** **Remetente** possui o ERP RM e a mesma recebe o retorno da industrialização com 2 Notas Fiscais: a primeira referente ao retorno simbólico da mercadoria anteriormente remetida e utilizada no processo de industrialização e a segunda referente a cobrança do serviço de industrialização que possivelmente terá descrito o produto industrializado.

Vale ressaltar que neste processo a empresa remetente **NÃO poderá controlar estoque de serviços no sistema.**

![Imagem](https://tdn.totvs.com/download/attachments/249955860/image2016-9-12%209%3A16%3A58.png?version=1&modificationDate=1473682619000&api=v2)

A empresa remetente da operação de industrialização irá incluir um movimento de saída **Remessa para Industrialização** para controle do estoque COM Terceiros e regularização fiscal e contábil da operação.

Este movimento irá **aumentar** o estoque **COM** **Terceiros**, sem interferir no estoque total de propriedade da empresa **(Saldo Atual)**. Consideramos que o estoque COM Terceiros é um estoque **indisponível** para movimentações de saídas, até que seja lançado o retorno do insumo. O valor financeiro do estoque COM Terceiros será calculado com base no custo médio dos insumos já registrados no sistema. 

Ao receber as notas fiscais da industrialização efetuada por outra empresa, a empresa remetente irá incluir um movimento de entrada **Retorno Simbólico Mercadoria Remetida para Industrialização** através de um processo específico para este tipo de operação **Retorno Industrialização Efetuada por Terceiros - Em duas NFs**. 

Neste processo serão selecionadas as notas fiscais de remessa para industrialização emitidas pela empresa cujos insumos ainda não retornaram, seja parcial ou total. Em seguida será solicitado alguns dados referente ao produto industrializado pelo terceiro, para que seu estoque seja atualizado. E alguns dados referente a nota fiscal da cobrança do serviço de industrialização. Após confirmar essas opções, será aberta a edição do movimento de **Retorno Simbólico Mercadoria Remetida para Industrialização** com os insumos selecionados anteriormente e as respectivas quantidades pendentes de retorno. Neste momento o usuário poderá alterar a quantidade retornada e preencher os dados fiscais da operação se estes não estiverem parametrizados no tipo de movimento.

Ao concluir a inclusão desse movimento, o sistema irá criar automaticamente um movimento do tipo **Cobrança Serviço de Industrialização** e um do tipo **Entrada no Estoque do Produto Industrializado por Terceiros** que terão sido pré-parametrizados.

**Bloco K
**O processo de industrialização descrito acima também se destinará a disponibilizar ao serviço do SPED Fiscal as informações necessárias para geração dos registros K250 e K255 do Bloco K.

Para parametrização dos movimentos, clique [aqui.](https://tdn.totvs.com/pages/releaseview.action?pageId=249955860)

Caso encontre dificuldades para localizar os parâmetros, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search). 

**Informações Adicionais
**No processo de Industrialização COM Terceiros para a geração dos Blocos K250 e K255 é necessário ter o vínculo de **Estrutura** **e** **Componentes**, caso não tenha esse vínculo o módulo vai gerar apenas o registro **K250**. Esse vínculo é gerado no TOTVS Gestão de Estoque, Compras e Faturamento no menu **Estoque | Produção |Atividades, Estruturas e Componentes**.
