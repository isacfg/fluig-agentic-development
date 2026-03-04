# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - TOTVS Colaboração: Tradução automática de itens para produto diferente do definido.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026068751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-TOTVS-Colabora%C3%A7%C3%A3o-Tradu%C3%A7%C3%A3o-autom%C3%A1tica-de-itens-para-produto-diferente-do-definido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026068751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-TOTVS-Colabora%C3%A7%C3%A3o-Tradu%C3%A7%C3%A3o-autom%C3%A1tica-de-itens-para-produto-diferente-do-definido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 1 de agosto de 2022 às 12:14

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Ocorrência**No módulo TOTVS Gestão de Estoque, Compras e Faturamento, ao efetuar a **Inclusão** de movimento via arquivo XML, o sistema irá solicitar que o usuário escolha se deseja ou não buscar o **Pedido** de forma automática, caso seja selecionada a opção **Sim**, o sistema apresenta na tela de **Tradução** **de Itens** um código de produto divergente do configurado em **Anexos - Produtos para Importação de XML.**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
**Causa
**Quando utilizada a busca de pedido de forma automática, o sistema aplica a seguinte regra:

1.  Verifica a tag **XPED**, **NITEMPED** e **ITEMPED**. Caso elas existam, o faturamento traduzirá os itens a partir desta sequência sem verificar o cadastro de Produtos para Importação de XML.
2.  Caso as tags citadas não estejam preenchidas, o sistema considera o cadastro de Produto - Anexos - Produtos para Importação de XML.

O fato do sistema exibir um código divergente do configurado na tela de Tradução de Itens ocorre pois, o XML recebido possui as tags XPED e NIITEMPED preenchidas com valores diferentes da sequência dos itens do pedido que está sendo faturado.

**Solução**Para solucionar esta ocorrência, será necessário refazer a tradução de itens buscando os itens de pedido que de fato correspondem ao item do XML. Outra opção, seria não utilizar a busca do pedido de forma automática, para que o cadastro de produtos traduzidos seja utilizado.

**Saiba Mais**
Para mais informações sobre a inclusão de movimento através de XML via TOTVS Colaboração, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-RM-MAT-Parametriza%C3%A7%C3%B5es-TOTVS-Colabora%C3%A7%C3%A3o-2-00?source=search).
